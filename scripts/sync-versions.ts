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
 * UTC日時をJST（日本標準時）に変換
 */
function utcToJst(utcDate: string): Date {
  const date = new Date(utcDate);
  const jstOffset = 9 * 60 * 60 * 1000;
  return new Date(date.getTime() + jstOffset);
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
    console.error('npm レジストリからの取得に失敗:', error);
    process.exit(1);
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
    console.error('GitHub CHANGELOG.md の取得に失敗:', error);
    process.exit(1);
  }

  return result;
}

/**
 * Claude Code CLI が利用可能かチェック
 */
function isClaudeCliAvailable(): boolean {
  try {
    execSync('claude --version', { encoding: 'utf-8', stdio: 'pipe' });
    return true;
  } catch {
    return false;
  }
}

/**
 * Claude Code CLI を使用してエントリを日本語に翻訳
 * CLI が利用不可またはエラーの場合は null を返す（フォールバック用）
 */
function translateEntries(entries: string[]): string[] | null {
  if (!isClaudeCliAvailable()) {
    console.log('  Claude Code CLI が利用できないため翻訳をスキップします');
    return null;
  }

  try {
    const entriesText = entries.map((e, i) => `${i + 1}. ${e}`).join('\n');

    const prompt = `以下のClaude Codeの変更履歴エントリを日本語に翻訳してください。

ルール:
- 技術用語は適切に訳す（例: fix → 修正、add → 追加、improve → 改善）
- 簡潔で自然な日本語にする
- 各エントリを1行で翻訳
- 番号付きリスト形式で出力（入力と同じ形式）
- 説明や前置きは不要、翻訳結果のみを出力

エントリ:
${entriesText}`;

    // Claude Code CLI を使用して翻訳（--print で非対話モード）
    const responseText = execSync(`claude --print "${prompt.replace(/"/g, '\\"')}"`, {
      encoding: 'utf-8',
      maxBuffer: 10 * 1024 * 1024,
      timeout: 60000, // 60秒タイムアウト
    }).trim();

    // 番号付きリストから翻訳を抽出
    const lines = responseText.split('\n').filter((line) => line.trim());
    const translations: string[] = [];

    for (const line of lines) {
      // "1. 翻訳文" 形式からテキスト部分を抽出
      const match = line.match(/^\d+\.\s*(.+)$/);
      if (match) {
        translations.push(match[1].trim());
      }
    }

    // 入力と出力の数が一致するか確認
    if (translations.length !== entries.length) {
      console.warn(
        `  警告: 翻訳数が一致しません（入力: ${entries.length}, 出力: ${translations.length}）`
      );
      return null;
    }

    return translations;
  } catch (error) {
    console.error('  翻訳中にエラーが発生しました:', error);
    return null;
  }
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
 * @param translations 翻訳済みテキスト（null の場合は「（翻訳待ち）」を使用）
 */
function generateVersionSection(
  version: string,
  entries: string[],
  translations: string[] | null
): string {
  const lines: string[] = [];
  lines.push(`## ${version}`);
  lines.push('');
  lines.push('| 日本語 | English |');
  lines.push('|--------|---------|');

  for (let i = 0; i < entries.length; i++) {
    // エントリ内のパイプ文字をエスケープ
    const escapedEntry = entries[i].replace(/\|/g, '\\|');
    const jaText = translations?.[i]?.replace(/\|/g, '\\|') ?? '（翻訳待ち）';
    lines.push(`| ${jaText} | ${escapedEntry} |`);
  }

  lines.push('');
  return lines.join('\n');
}

/**
 * CHANGELOG_{YEAR}_JA.md に新バージョンを追記
 */
function appendToChangelog(year: number, sections: string[]): void {
  const filePath = path.join(process.cwd(), 'content', `CHANGELOG_${year}_JA.md`);

  if (!fs.existsSync(filePath)) {
    console.warn(`  警告: ${filePath} が存在しません。スキップします。`);
    return;
  }

  const content = fs.readFileSync(filePath, 'utf-8');

  // ヘッダー部分（---で区切られた部分まで）を検出
  const headerEndIndex = content.indexOf('\n---\n');
  if (headerEndIndex === -1) {
    console.warn(`  警告: ${filePath} のヘッダー区切りが見つかりません。`);
    return;
  }

  // ヘッダー直後に新セクションを挿入
  const header = content.substring(0, headerEndIndex + 5); // "---\n" を含む
  const body = content.substring(headerEndIndex + 5);

  const newContent = header + '\n' + sections.join('\n') + body;
  fs.writeFileSync(filePath, newContent, 'utf-8');

  console.log(`  ${filePath} に ${sections.length} バージョンを追加しました`);
}

/**
 * 現在の年を取得（JST基準）
 */
function getCurrentYearJst(): number {
  const now = new Date();
  const jstOffset = 9 * 60 * 60 * 1000;
  const jstNow = new Date(now.getTime() + jstOffset);
  return jstNow.getFullYear();
}

/**
 * メイン処理
 */
async function main(): Promise<void> {
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
        console.log(`  警告: v${version} の変更内容が GitHub CHANGELOG.md に見つかりません`);
        continue;
      }

      // 翻訳を試行
      console.log(`  v${version} を翻訳中...`);
      const translations = translateEntries(entries);
      if (translations) {
        console.log(`  v${version} の翻訳完了`);
      }

      sections.push(generateVersionSection(version, entries, translations));
      totalAdded++;
    }

    // CHANGELOG に追記
    if (sections.length > 0) {
      appendToChangelog(year, sections);
    }
  }

  console.log(`\n=== 完了: ${totalAdded} バージョンを追加しました ===`);
}

main().catch((error) => {
  console.error('エラー:', error);
  process.exit(1);
});
