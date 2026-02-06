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
 *
 * オプション:
 * --rebuild: 全バージョンを再取得・再生成
 */

import * as fs from 'node:fs';
import * as path from 'node:path';
import { parseCodexReleaseBody, type ParsedEntry } from './parse-codex-releases.ts';
import { translateBatch } from './translate.js';

const GITHUB_RELEASES_URL = 'https://api.github.com/repos/openai/codex/releases';
const TAG_PREFIX = 'rust-v';
const CONTENT_DIR = path.join(process.cwd(), 'content', 'codex');

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
 * GitHub API 用のリクエストヘッダーを生成
 */
function getGitHubHeaders(): Record<string, string> {
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github.v3+json',
    'User-Agent': 'ccclog',
  };

  const token = process.env.GITHUB_TOKEN;
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  return headers;
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
 * GitHub Releases から対象リリースを取得
 */
async function fetchCodexReleases(): Promise<VersionInfo[]> {
  const versions: VersionInfo[] = [];
  let page = 1;

  console.log('GitHub Releases から Codex のリリース情報を取得中...');

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

        // body からエントリを抽出（現行形式のみ対応）
        const entries = parseCodexReleaseBody(release.body ?? '');

        versions.push({
          version,
          publishDate: dateStr,
          year,
          entries,
        });
      }

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
 * バージョン文字列を比較
 * @returns v1 < v2 なら負、v1 === v2 なら 0、v1 > v2 なら正
 */
function compareVersions(v1: string, v2: string): number {
  const parts1 = v1.split('.').map(Number);
  const parts2 = v2.split('.').map(Number);
  for (let i = 0; i < 3; i++) {
    if (parts1[i] !== parts2[i]) {
      return parts1[i] - parts2[i];
    }
  }
  return 0;
}

/**
 * バージョンを降順にソート（新しい順）
 */
function sortVersionsDescending(versions: VersionInfo[]): VersionInfo[] {
  return versions.sort((a, b) => compareVersions(b.version, a.version));
}

/**
 * セクション境界情報
 */
interface SectionBoundary {
  version: string;
  start: number;
  end: number; // 次のセクション開始 or ファイル末尾
}

/**
 * ファイル内の ## X.Y.Z セクション境界を検出
 */
function findSectionBoundaries(content: string): SectionBoundary[] {
  const regex = /^## (\d+\.\d+\.\d+)\b/gm;
  const boundaries: SectionBoundary[] = [];
  let match: RegExpExecArray | null;

  while ((match = regex.exec(content)) !== null) {
    boundaries.push({
      version: match[1],
      start: match.index,
      end: content.length, // 暫定値
    });
  }

  // end を次のセクション開始に更新
  for (let i = 0; i < boundaries.length - 1; i++) {
    boundaries[i].end = boundaries[i + 1].start;
  }

  return boundaries;
}

/**
 * 適切な位置にセクションを挿入
 *
 * 挿入ルール（boundaries は降順前提）:
 * 1. 自分が最新の場合: ヘッダー `---` の直後（先頭）
 * 2. 中間に入る場合: 自分より古い最初のセクションの直前
 * 3. 自分が最古の場合: ファイル末尾
 * 4. セクションが0個: ヘッダー `---` の直後
 * 5. `---` が無い場合: エラー終了
 */
function insertVersionSection(
  filePath: string,
  content: string,
  version: string,
  newSection: string,
  boundaries: SectionBoundary[]
): void {
  // --- の位置を検出
  const headerEndMatch = content.match(/^---\n/m);
  if (!headerEndMatch || headerEndMatch.index === undefined) {
    console.error(`エラー: ${filePath} にヘッダー区切り(---)がありません`);
    process.exit(1);
  }
  const headerEnd = headerEndMatch.index + headerEndMatch[0].length;

  // 挿入位置を決定
  let insertAt: number;
  if (boundaries.length === 0) {
    // セクションが1つもない → ヘッダー直後
    insertAt = headerEnd;
  } else {
    // 自分より古い最初のセクションを探す（=その直前に挿入）
    const olderSection = boundaries.find((b) => compareVersions(b.version, version) < 0);
    if (olderSection) {
      // 中間 or 最新: 古いセクションの直前に挿入
      insertAt = olderSection.start;
    } else {
      // 全て自分より新しい（=自分が最古）→ ファイル末尾
      insertAt = content.length;
    }
  }

  const newContent = content.slice(0, insertAt) + newSection + content.slice(insertAt);
  fs.writeFileSync(filePath, newContent, 'utf-8');
}

/**
 * 指定バージョンのセクションを置換または挿入
 */
function replaceVersionSection(year: number, version: string, newSection: string): void {
  const filePath = path.join(CONTENT_DIR, `CHANGELOG_${year}_JA.md`);
  const content = fs.readFileSync(filePath, 'utf-8');
  const boundaries = findSectionBoundaries(content);

  const target = boundaries.find((b) => b.version === version);
  if (target) {
    // 置換: start〜end を newSection で差し替え
    const newContent = content.slice(0, target.start) + newSection + content.slice(target.end);
    fs.writeFileSync(filePath, newContent, 'utf-8');
  } else {
    // 挿入
    insertVersionSection(filePath, content, version, newSection, boundaries);
  }
}

/**
 * 新バージョンのセクションを生成（3列テーブル: 日本語, English, Category）
 */
function generateVersionSection(
  version: string,
  entries: ParsedEntry[],
  translations: string[] | null
): string {
  const lines: string[] = [];
  lines.push(`## ${version}`);
  lines.push('');
  lines.push('| 日本語 | English | Category |');
  lines.push('|--------|---------|----------|');

  if (entries.length === 0) {
    lines.push('| (変更履歴のエントリはありません) | (No changelog entries) | chores |');
  } else {
    for (let i = 0; i < entries.length; i++) {
      const jaText = translations?.[i]?.replace(/\|/g, '\\|') ?? '（翻訳待ち）';
      lines.push(`| ${jaText} | ${entries[i].text} | ${entries[i].category} |`);
    }
  }

  lines.push('');
  return lines.join('\n');
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
 * 現在の年を取得（JST基準）
 */
function getCurrentYearJst(): number {
  const now = new Date();
  const jstOffset = 9 * 60 * 60 * 1000;
  const jstNow = new Date(now.getTime() + jstOffset);
  return jstNow.getFullYear();
}

/**
 * コマンドライン引数をパース
 */
interface VersionFilter {
  type: 'exact' | 'before';
  version: string;
}

interface CliOptions {
  isRebuild: boolean;
  yearOverride: number | null;
  versionFilter?: VersionFilter;
}

function parseArgs(): CliOptions {
  const args = process.argv.slice(2);
  let isRebuild = false;
  let yearOverride: number | null = null;
  let versionFilter: VersionFilter | undefined;

  const versionPattern = /^\d+\.\d+\.\d+$/;

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--rebuild') {
      isRebuild = true;
      continue;
    }
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
    if (arg === '--version') {
      const version = args[i + 1];
      if (!version) {
        console.error('エラー: --version の後にバージョンを指定してください');
        process.exit(1);
      }
      if (!versionPattern.test(version)) {
        console.error(`エラー: 不正なバージョン形式: ${version} (X.Y.Z 形式で指定)`);
        process.exit(1);
      }
      versionFilter = { type: 'exact', version };
      i++;
      continue;
    }
    if (arg === '--before') {
      const version = args[i + 1];
      if (!version) {
        console.error('エラー: --before の後にバージョンを指定してください');
        process.exit(1);
      }
      if (!versionPattern.test(version)) {
        console.error(`エラー: 不正なバージョン形式: ${version} (X.Y.Z 形式で指定)`);
        process.exit(1);
      }
      versionFilter = { type: 'before', version };
      i++;
      continue;
    }
    // 未知のオプション
    if (arg.startsWith('--')) {
      console.error(`エラー: 未知のオプション: ${arg}`);
      process.exit(1);
    }
  }

  // 相互排他チェック
  if (isRebuild && versionFilter) {
    console.error('エラー: --rebuild と --version/--before は併用できません');
    process.exit(1);
  }

  return { isRebuild, yearOverride, versionFilter };
}

/**
 * ファイルをバックアップ
 */
function backupFile(filePath: string): void {
  if (fs.existsSync(filePath)) {
    const backupPath = `${filePath}.bak`;
    fs.copyFileSync(filePath, backupPath);
    console.log(`  バックアップ: ${backupPath}`);
  }
}

/**
 * ファイルをヘッダーのみの状態にリセット
 */
function resetChangelogFile(year: number): void {
  const filePath = path.join(CONTENT_DIR, `CHANGELOG_${year}_JA.md`);
  const header = `# OpenAI Codex 変更履歴 (${year}年)

このファイルは OpenAI Codex の${year}年リリース分の変更履歴を日本語で記載しています。

---

`;
  fs.writeFileSync(filePath, header, 'utf-8');
  console.log(`  ${filePath} をリセットしました`);
}

/**
 * バージョン配列を年ごとにグループ化
 */
function groupByYear(versions: VersionInfo[]): Map<number, VersionInfo[]> {
  const map = new Map<number, VersionInfo[]>();
  for (const v of versions) {
    const list = map.get(v.year) ?? [];
    list.push(v);
    map.set(v.year, list);
  }
  return map;
}

/**
 * バージョンフィルタモードの処理
 */
async function processVersionFilter(
  allVersions: VersionInfo[],
  filter: VersionFilter,
  yearOverride: number | null
): Promise<void> {
  // 1. 対象バージョンを抽出
  let targetVersions: VersionInfo[];
  if (filter.type === 'exact') {
    targetVersions = allVersions.filter((v) => v.version === filter.version);
    if (targetVersions.length === 0) {
      console.error(`エラー: バージョン ${filter.version} が見つかりません`);
      process.exit(1);
    }
    // --year 併用時: その年に無ければエラー
    if (yearOverride !== null) {
      targetVersions = targetVersions.filter((v) => v.year === yearOverride);
      if (targetVersions.length === 0) {
        console.error(`エラー: バージョン ${filter.version} は ${yearOverride} 年に存在しません`);
        process.exit(1);
      }
    }
  } else {
    // --before
    targetVersions = allVersions.filter((v) => compareVersions(v.version, filter.version) < 0);
    // --year 併用時: 年で絞る
    if (yearOverride !== null) {
      targetVersions = targetVersions.filter((v) => v.year === yearOverride);
    }
  }

  // 2. 対象が0件の場合は何もせず終了（正常終了）
  if (targetVersions.length === 0) {
    console.log('対象バージョンがありません');
    return;
  }

  console.log(`対象バージョン: ${targetVersions.length}件`);
  for (const v of targetVersions) {
    console.log(`  - v${v.version} (${v.year}年)`);
  }

  // 3. 年ごとにグループ化
  const byYear = groupByYear(targetVersions);

  // 4. 各バージョンを処理（セクション置換）
  // 降順（新しい順）で処理することで、複数挿入時の順序を保証
  let totalProcessed = 0;
  for (const [year, versions] of byYear) {
    console.log(`\n--- ${year}年の処理 ---`);
    ensureChangelogFile(year);
    const sortedVersions = sortVersionsDescending(versions);
    for (const versionInfo of sortedVersions) {
      console.log(`  v${versionInfo.version} を処理中... (${versionInfo.entries.length} エントリ)`);
      const translations = versionInfo.entries.length > 0
        ? translateBatch(versionInfo.entries.map(e => e.text), 'OpenAI Codex')
        : null;
      const section = generateVersionSection(versionInfo.version, versionInfo.entries, translations);
      replaceVersionSection(year, versionInfo.version, section);
      totalProcessed++;
    }
  }

  console.log(`\n=== 完了: ${totalProcessed} バージョンを処理しました ===`);
}

/**
 * メイン処理
 */
async function main(): Promise<void> {
  const { isRebuild, yearOverride, versionFilter } = parseArgs();

  console.log('=== Codex 新バージョン自動検出・追記 ===');
  if (versionFilter) {
    const filterDesc =
      versionFilter.type === 'exact'
        ? `--version ${versionFilter.version}`
        : `--before ${versionFilter.version}`;
    console.log(`※ セクション置換モード: ${filterDesc}`);
  } else if (isRebuild) {
    console.log('※ --rebuild モード: 全バージョンを再取得・再生成します');
  }
  console.log('');

  // 1. GitHub Releases から全リリース情報を取得
  const allVersions = await fetchCodexReleases();

  if (allVersions.length === 0) {
    console.log('対象リリースがありません。');
    return;
  }

  // フィルタモードの場合は専用処理
  if (versionFilter) {
    await processVersionFilter(allVersions, versionFilter, yearOverride);
    return;
  }

  // 2. 対象年を特定
  let targetYears: number[];
  if (yearOverride !== null) {
    targetYears = [yearOverride];
  } else if (isRebuild) {
    // --rebuild: GitHub から取得した全 Release の年
    const yearsSet = new Set(allVersions.map((v) => v.year));
    targetYears = Array.from(yearsSet).sort((a, b) => b - a); // 新しい順
  } else {
    // 通常: 当該年のみ
    const currentYear = getCurrentYearJst();
    targetYears = [currentYear];
  }

  console.log(`対象年: ${targetYears.join(', ')}`);

  // 3. 年ごとに処理
  let totalAdded = 0;

  for (const year of targetYears) {
    console.log(`\n--- ${year}年の処理 ---`);

    if (isRebuild) {
      // --rebuild: バックアップしてリセット
      const filePath = path.join(CONTENT_DIR, `CHANGELOG_${year}_JA.md`);
      backupFile(filePath);
      resetChangelogFile(year);
    } else {
      // 通常: ファイルを確保
      ensureChangelogFile(year);
    }

    // 既存バージョンを取得（--rebuild 後はリセットされているので空）
    const existingVersions = getExistingVersions(year);
    console.log(`  既存バージョン数: ${existingVersions.size}`);

    // その年の未記載バージョンを特定
    const missingVersions = allVersions.filter(
      (v) => v.year === year && !existingVersions.has(v.version)
    );

    if (missingVersions.length === 0) {
      console.log('  未記載バージョンはありません');
      continue;
    }

    console.log(`  未記載バージョン: ${missingVersions.length}件`);
    for (const info of missingVersions) {
      console.log(`    - v${info.version} (${info.publishDate})`);
    }

    // バージョンを降順にソート
    const sortedVersions = sortVersionsDescending(missingVersions);

    // 各バージョンのセクションを生成（エントリがあれば翻訳を試みる）
    const sections: string[] = [];
    for (const versionInfo of sortedVersions) {
      const translations = versionInfo.entries.length > 0
        ? translateBatch(versionInfo.entries.map(e => e.text), 'OpenAI Codex')
        : null;
      sections.push(generateVersionSection(versionInfo.version, versionInfo.entries, translations));
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
