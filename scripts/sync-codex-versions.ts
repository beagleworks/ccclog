/**
 * GitHub Releases から Codex の新バージョンを検出し、CHANGELOG に自動追記する
 *
 * 処理フロー:
 * 1. GitHub Releases API から openai/codex のリリース一覧を取得
 * 2. alpha 版（prerelease、-alpha を含むタグ）を除外
 * 3. rust-v プレフィックスを除去してバージョン番号を抽出
 * 4. body フィールドからエントリを抽出（現行形式のみ対応）
 * 5. content/codex/CHANGELOG_{YEAR}_JA.md から既存バージョンを抽出
 * 6. 未記載バージョンを特定
 * 7. Claude CLI でバッチ翻訳（失敗時は「（翻訳待ち）」にフォールバック）
 * 8. Markdown テーブル形式で追記（3列: 日本語, English, Category）
 */

import * as fs from 'node:fs';
import * as path from 'node:path';
import { utcToJst, getCurrentYearJst } from './date-utils.js';
import { parseCodexReleaseBody, type ParsedEntry } from './parse-codex-releases.ts';
import { translateBatch } from './translate.js';
import {
  CONTENT_DIR,
  getGitHubHeaders,
  compareVersions,
  generateVersionSection,
} from './codex-changelog-utils.ts';

const GITHUB_RELEASES_URL = 'https://api.github.com/repos/openai/codex/releases';
const TAG_PREFIX = 'rust-v';

interface Release {
  tag_name: string;
  name: string;
  published_at: string;
  prerelease: boolean;
  body: string | null;
}

interface VersionInfo {
  version: string;
  publishDate: string; // YYYY-MM-DD (JST)
  year: number;
  entries: ParsedEntry[];
}


/**
 * GitHub Releases から対象年のリリースを取得
 *
 * GitHub Releases API はリリースを新しい順（published_at 降順）で返すため、
 * 対象年より古いリリースが出た時点で安全にページングを打ち切れる。
 * published_at は JST に変換して年を判定する。
 */
async function fetchCodexReleases(targetYear: number): Promise<VersionInfo[]> {
  const versions: VersionInfo[] = [];
  let page = 1;

  console.log(`GitHub Releases から Codex の ${targetYear} 年リリース情報を取得中...`);

  while (true) {
    const url = `${GITHUB_RELEASES_URL}?per_page=100&page=${page}`;

    try {
      const response = await fetch(url, {
        headers: getGitHubHeaders(),
      });

      if (!response.ok) {
        if (response.status === 403) {
          console.warn('GitHub API レート制限に達しました。取得できた範囲で継続します。');
          break;
        }
        throw new Error(`GitHub API error: ${response.status}`);
      }

      const releases = (await response.json()) as Release[];
      if (releases.length === 0) break;

      let hitOlderYear = false;

      for (const release of releases) {
        // フィルタリング
        if (release.prerelease) continue;
        if (!release.tag_name.startsWith(TAG_PREFIX)) continue;
        if (release.tag_name.includes('-alpha')) continue;
        if (release.tag_name.includes('-beta')) continue;
        if (release.tag_name.includes('-rc')) continue;

        // バージョン抽出: 'rust-v0.95.0' → '0.95.0'
        const version = release.tag_name.replace(TAG_PREFIX, '');

        // 年判定（JST基準）
        const jstDate = utcToJst(release.published_at);
        const dateStr = jstDate.toISOString().split('T')[0];
        const year = jstDate.getFullYear();

        // 対象年より新しい → スキップ（未来の年）
        if (year > targetYear) continue;

        // 対象年より古い → 早期終了（これ以降はすべて古い）
        if (year < targetYear) {
          hitOlderYear = true;
          break;
        }

        // body からエントリを抽出（現行形式のみ対応）
        const entries = parseCodexReleaseBody(release.body ?? '');

        versions.push({
          version,
          publishDate: dateStr,
          year,
          entries,
        });
      }

      if (hitOlderYear) break;

      page++;
      if (page > 10) {
        console.warn('ページ数上限に達しました。');
        break;
      }
    } catch (error) {
      console.error('GitHub Releases の取得に失敗:', error);
      break;
    }
  }

  console.log(`  ${versions.length} 件の対象リリースを取得しました`);
  return versions;
}

/**
 * CHANGELOG_{YEAR}_JA.md から既存バージョンを抽出
 */
function getExistingVersions(year: number): Set<string> {
  const versions = new Set<string>();
  const filePath = path.join(CONTENT_DIR, `CHANGELOG_${year}_JA.md`);

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
 * バージョンを降順にソート（新しい順）
 */
function sortVersionsDescending(versions: VersionInfo[]): VersionInfo[] {
  return versions.sort((a, b) => compareVersions(b.version, a.version));
}

/**
 * CHANGELOG_{YEAR}_JA.md を作成または更新
 */
function ensureChangelogFile(year: number): void {
  if (!fs.existsSync(CONTENT_DIR)) {
    fs.mkdirSync(CONTENT_DIR, { recursive: true });
  }

  const filePath = path.join(CONTENT_DIR, `CHANGELOG_${year}_JA.md`);

  if (!fs.existsSync(filePath)) {
    const header = `# OpenAI Codex 変更履歴 (${year}年)

このファイルは OpenAI Codex の${year}年リリース分の変更履歴を日本語で記載しています。

---

`;
    fs.writeFileSync(filePath, header, 'utf-8');
    console.log(`  ${filePath} を新規作成しました`);
  }
}

/**
 * CHANGELOG_{YEAR}_JA.md に新バージョンを追記
 */
function appendToChangelog(year: number, sections: string[]): void {
  const filePath = path.join(CONTENT_DIR, `CHANGELOG_${year}_JA.md`);

  const content = fs.readFileSync(filePath, 'utf-8');

  // ヘッダー部分（---で区切られた部分まで）を検出
  const headerEndIndex = content.indexOf('\n---\n');
  if (headerEndIndex === -1) {
    console.warn(`  警告: ${filePath} のヘッダー区切りが見つかりません。`);
    return;
  }

  // ヘッダー直後に新セクションを挿入
  const header = content.substring(0, headerEndIndex + 5);
  const body = content.substring(headerEndIndex + 5);

  const newContent = header + '\n' + sections.join('\n') + body;
  fs.writeFileSync(filePath, newContent, 'utf-8');

  console.log(`  ${filePath} に ${sections.length} バージョンを追加しました`);
}


/**
 * コマンドライン引数をパース
 */
interface CliOptions {
  yearOverride: number | null;
}

function parseArgs(): CliOptions {
  const args = process.argv.slice(2);
  let yearOverride: number | null = null;

  const deprecatedOptions = ['--rebuild', '--version', '--before'];

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--year') {
      const yearStr = args[i + 1];
      if (!yearStr) {
        console.error('エラー: --year の後に年を指定してください');
        process.exit(1);
      }
      if (!/^\d{4}$/.test(yearStr)) {
        console.error(`エラー: 不正な年: ${yearStr}`);
        process.exit(1);
      }
      yearOverride = Number(yearStr);
      i++;
      continue;
    }
    // 廃止済みオプション
    if (deprecatedOptions.includes(arg)) {
      console.error(`エラー: ${arg} オプションは廃止されました。通常の追記モードを使用してください。`);
      process.exit(1);
    }
    // 未知のオプション
    if (arg.startsWith('--')) {
      console.error(`エラー: 未知のオプション: ${arg}`);
      process.exit(1);
    }
  }

  return { yearOverride };
}

/**
 * メイン処理
 */
async function main(): Promise<void> {
  const { yearOverride } = parseArgs();
  const targetYear = yearOverride ?? getCurrentYearJst();

  console.log('=== Codex 新バージョン自動検出・追記 ===');
  console.log(`対象年: ${targetYear}`);
  console.log('');

  // 1. GitHub Releases から対象年のリリース情報を取得
  const versions = await fetchCodexReleases(targetYear);

  if (versions.length === 0) {
    console.log('対象リリースがありません。');
    return;
  }

  // 2. 既存バージョンを取得して未記載を特定
  ensureChangelogFile(targetYear);
  const existingVersions = getExistingVersions(targetYear);
  console.log(`  既存バージョン数: ${existingVersions.size}`);

  const missingVersions = versions.filter(
    (v) => !existingVersions.has(v.version)
  );

  if (missingVersions.length === 0) {
    console.log('  未記載バージョンはありません');
    return;
  }

  console.log(`  未記載バージョン: ${missingVersions.length}件`);
  for (const info of missingVersions) {
    console.log(`    - v${info.version} (${info.publishDate})`);
  }

  // 3. バージョンを降順にソートし、翻訳してセクション生成
  const sortedVersions = sortVersionsDescending(missingVersions);

  const sections: string[] = [];
  for (const versionInfo of sortedVersions) {
    const translations = versionInfo.entries.length > 0
      ? translateBatch(versionInfo.entries.map(e => e.text), 'OpenAI Codex')
      : null;
    sections.push(generateVersionSection(versionInfo.version, versionInfo.entries, translations));
  }

  // 4. CHANGELOG に追記
  if (sections.length > 0) {
    appendToChangelog(targetYear, sections);
  }

  console.log(`\n=== 完了: ${sections.length} バージョンを追加しました ===`);
}

main().catch((error) => {
  console.error('エラー:', error);
  process.exit(1);
});
