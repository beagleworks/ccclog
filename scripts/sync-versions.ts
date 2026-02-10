/**
 * npm レジストリから新バージョンを検出し、CHANGELOG_YEAR_JA.md に自動追記する
 *
 * 処理フロー:
 * 1. npm レジストリから @anthropic-ai/claude-code の全バージョン一覧を取得
 * 2. CHANGELOG_{YEAR}_JA.md から既存バージョンを抽出
 * 3. 未記載バージョンを特定
 * 4. GitHub の CHANGELOG.md から各バージョンの変更内容（英語）を取得
 * 5. CHANGELOG_{YEAR}_JA.md に新バージョンセクションを追加
 */

import { execSync } from 'node:child_process';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { utcToJst, getCurrentYearJst } from './date-utils.js';
import { translateAndClassifyWithFallback, type TranslationWithCategory } from './translate.js';
import {
  emitRunReport,
  parseReportArgs,
  type ReportCliOptions,
  type ScriptRunReport,
} from './lib/run-report.js';

const NPM_PACKAGE = '@anthropic-ai/claude-code';
const GITHUB_CHANGELOG_URL =
  'https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md';

interface NpmTimeData {
  [version: string]: string;
}

interface VersionInfo {
  version: string;
  publishDate: string; // YYYY-MM-DD (JST)
  year: number;
}


/**
 * npm レジストリから全バージョンの公開日を取得
 */
function fetchNpmVersions(): Map<string, VersionInfo> {
  const result = new Map<string, VersionInfo>();

  try {
    console.log(`npm レジストリから ${NPM_PACKAGE} のバージョン情報を取得中...`);
    const output = execSync(`npm view ${NPM_PACKAGE} time --json`, {
      encoding: 'utf-8',
      maxBuffer: 10 * 1024 * 1024,
    });
    const timeData: NpmTimeData = JSON.parse(output);

    for (const [version, date] of Object.entries(timeData)) {
      // "created" と "modified" は除外
      if (version === 'created' || version === 'modified') continue;

      // バージョン形式のみを対象（X.Y.Z）
      if (!/^\d+\.\d+\.\d+$/.test(version)) continue;

      const jstDate = utcToJst(date);
      const dateStr = jstDate.toISOString().split('T')[0];
      const year = jstDate.getFullYear();

      result.set(version, {
        version,
        publishDate: dateStr,
        year,
      });
    }

    console.log(`  ${result.size} バージョンを取得しました`);
  } catch (error) {
    throw new Error(`npm レジストリからの取得に失敗: ${String(error)}`);
  }

  return result;
}

/**
 * CHANGELOG_{YEAR}_JA.md から既存バージョンを抽出
 */
function getExistingVersions(year: number): Set<string> {
  const versions = new Set<string>();
  const filePath = path.join(process.cwd(), 'content', `CHANGELOG_${year}_JA.md`);

  if (!fs.existsSync(filePath)) {
    return versions;
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  const versionMatches = content.matchAll(/^## (\d+\.\d+\.\d+)/gm);

  for (const match of versionMatches) {
    versions.add(match[1]);
  }

  return versions;
}

/**
 * GitHub CHANGELOG.md からバージョンごとの変更内容を取得
 */
async function fetchGitHubChangelog(): Promise<Map<string, string[]>> {
  const result = new Map<string, string[]>();

  try {
    console.log('GitHub CHANGELOG.md を取得中...');
    const response = await fetch(GITHUB_CHANGELOG_URL);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const content = await response.text();
    const lines = content.split('\n');

    let currentVersion: string | null = null;
    let currentEntries: string[] = [];

    for (const line of lines) {
      // バージョンヘッダーを検出 (例: ## 2.1.23)
      const versionMatch = line.match(/^## (\d+\.\d+\.\d+)/);
      if (versionMatch) {
        // 前のバージョンを保存
        if (currentVersion && currentEntries.length > 0) {
          result.set(currentVersion, currentEntries);
        }
        currentVersion = versionMatch[1];
        currentEntries = [];
        continue;
      }

      // エントリ行を検出（- で始まる行）
      if (currentVersion && line.startsWith('- ')) {
        currentEntries.push(line.substring(2).trim());
      }
    }

    // 最後のバージョンを保存
    if (currentVersion && currentEntries.length > 0) {
      result.set(currentVersion, currentEntries);
    }

    console.log(`  ${result.size} バージョンの変更内容を取得しました`);
  } catch (error) {
    throw new Error(`GitHub CHANGELOG.md の取得に失敗: ${String(error)}`);
  }

  return result;
}


/**
 * バージョンを降順にソート（新しい順）
 */
function sortVersionsDescending(versions: string[]): string[] {
  return versions.sort((a, b) => {
    const partsA = a.split('.').map(Number);
    const partsB = b.split('.').map(Number);

    for (let i = 0; i < 3; i++) {
      if (partsA[i] !== partsB[i]) {
        return partsB[i] - partsA[i];
      }
    }
    return 0;
  });
}

/**
 * 新バージョンのセクションを生成
 * @param translations 翻訳+分類済みデータ（null の場合は「（翻訳待ち）」を使用）
 */
function generateVersionSection(
  version: string,
  entries: string[],
  translations: TranslationWithCategory[] | null
): string {
  const lines: string[] = [];
  lines.push(`## ${version}`);
  lines.push('');
  lines.push('| 日本語 | English | Category |');
  lines.push('|--------|---------|----------|');

  for (let i = 0; i < entries.length; i++) {
    // エントリ内のパイプ文字をエスケープ
    const escapedEntry = entries[i].replace(/\|/g, '\\|');
    const jaText = translations?.[i]?.translation.replace(/\|/g, '\\|') ?? '（翻訳待ち）';
    const category = translations?.[i]?.category ?? 'other';
    lines.push(`| ${jaText} | ${escapedEntry} | ${category} |`);
  }

  lines.push('');
  return lines.join('\n');
}

/**
 * CHANGELOG_{YEAR}_JA.md に新バージョンを追記
 */
function appendToChangelog(year: number, sections: string[]): string | null {
  const filePath = path.join(process.cwd(), 'content', `CHANGELOG_${year}_JA.md`);

  if (!fs.existsSync(filePath)) {
    console.warn(`  警告: ${filePath} が存在しません。スキップします。`);
    return null;
  }

  const content = fs.readFileSync(filePath, 'utf-8');

  // ヘッダー部分（---で区切られた部分まで）を検出
  const headerEndIndex = content.indexOf('\n---\n');
  if (headerEndIndex === -1) {
    console.warn(`  警告: ${filePath} のヘッダー区切りが見つかりません。`);
    return null;
  }

  // ヘッダー直後に新セクションを挿入
  const header = content.substring(0, headerEndIndex + 5); // "---\n" を含む
  const body = content.substring(headerEndIndex + 5);

  const newContent = header + '\n' + sections.join('\n') + body;
  fs.writeFileSync(filePath, newContent, 'utf-8');

  console.log(`  ${filePath} に ${sections.length} バージョンを追加しました`);
  return filePath;
}


/**
 * メイン処理
 */
interface MainResult {
  changed: boolean;
  changedFiles: string[];
  addedVersions: number;
  translatedEntries: number;
  warnings: string[];
}

async function main(rawArgs: string[]): Promise<{ result: MainResult; reportOptions: ReportCliOptions }> {
  const parsed = parseReportArgs(rawArgs);
  console.log('=== 新バージョン自動検出・追記 ===\n');

  // 1. npm から全バージョン情報を取得
  const npmVersions = fetchNpmVersions();

  // 2. 対象年を特定（当該年のみ）
  const currentYear = getCurrentYearJst();
  const targetYears = [currentYear];

  // 3. GitHub CHANGELOG.md を取得
  const githubChangelog = await fetchGitHubChangelog();

  // 4. 年ごとに処理
  let totalAdded = 0;
  let translatedEntries = 0;
  const changedFiles: string[] = [];
  const warnings: string[] = [];

  for (const year of targetYears) {
    console.log(`\n--- ${year}年の処理 ---`);

    // 既存バージョンを取得
    const existingVersions = getExistingVersions(year);
    console.log(`  既存バージョン数: ${existingVersions.size}`);

    // その年の未記載バージョンを特定
    const missingVersions: VersionInfo[] = [];
    for (const [version, info] of npmVersions) {
      if (info.year === year && !existingVersions.has(version)) {
        missingVersions.push(info);
      }
    }

    if (missingVersions.length === 0) {
      console.log('  未記載バージョンはありません');
      continue;
    }

    console.log(`  未記載バージョン: ${missingVersions.length}件`);
    for (const info of missingVersions) {
      console.log(`    - v${info.version} (${info.publishDate})`);
    }

    // バージョンを降順にソート
    const sortedVersions = sortVersionsDescending(
      missingVersions.map((v) => v.version)
    );

    // 各バージョンのセクションを生成
    const sections: string[] = [];
    for (const version of sortedVersions) {
      const entries = githubChangelog.get(version);
      if (!entries || entries.length === 0) {
        const warning = `v${version} の変更内容が GitHub CHANGELOG.md に見つかりません`;
        console.log(`  警告: ${warning}`);
        warnings.push(warning);
        continue;
      }

      // 翻訳+分類を試行
      console.log(`  v${version} を翻訳中...`);
      const translations = translateAndClassifyWithFallback(entries, 'Claude Code');
      if (translations) {
        console.log(`  v${version} の翻訳完了`);
        translatedEntries += translations.length;
      }

      sections.push(generateVersionSection(version, entries, translations));
      totalAdded++;
    }

    // CHANGELOG に追記
    if (sections.length > 0) {
      const changedFile = appendToChangelog(year, sections);
      if (changedFile) {
        changedFiles.push(path.relative(process.cwd(), changedFile));
      }
    }
  }

  console.log(`\n=== 完了: ${totalAdded} バージョンを追加しました ===`);
  return {
    reportOptions: parsed.report,
    result: {
      changed: changedFiles.length > 0,
      changedFiles,
      addedVersions: totalAdded,
      translatedEntries,
      warnings,
    },
  };
}

const start = Date.now();
main(process.argv.slice(2))
  .then(({ reportOptions, result }) => {
    const report: ScriptRunReport = {
      script: 'sync-versions',
      status: 'ok',
      changed: result.changed,
      changedFiles: result.changedFiles,
      elapsedMs: Date.now() - start,
      addedVersions: result.addedVersions,
      translatedEntries: result.translatedEntries,
      warnings: result.warnings,
    };
    emitRunReport(reportOptions, report);
  })
  .catch((error) => {
    const message = error instanceof Error ? error.message : String(error);
    console.error('エラー:', error);
    let reportOptions: ReportCliOptions = { reportJson: false, reportFile: null };
    try {
      reportOptions = parseReportArgs(process.argv.slice(2)).report;
    } catch {
      // ignore
    }
    emitRunReport(reportOptions, {
      script: 'sync-versions',
      status: 'error',
      changed: false,
      changedFiles: [],
      elapsedMs: Date.now() - start,
      warnings: [message],
      error: message,
    });
    process.exit(1);
  });
