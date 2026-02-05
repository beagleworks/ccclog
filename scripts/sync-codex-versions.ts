/**
 * GitHub Releases から Codex の新バージョンを検出し、CHANGELOG に自動追記する
 *
 * 処理フロー:
 * 1. GitHub Releases API から openai/codex のリリース一覧を取得
 * 2. alpha 版（prerelease、-alpha を含むタグ）を除外
 * 3. rust-v プレフィックスを除去してバージョン番号を抽出
 * 4. content/codex/CHANGELOG_{YEAR}_JA.md から既存バージョンを抽出
 * 5. 未記載バージョンを特定
 * 6. body フィールドからエントリを抽出・翻訳
 * 7. Markdown テーブル形式で追記（3列: 日本語, English, Category）
 *
 * オプション:
 * --rebuild: 全バージョンを再取得・再翻訳（カテゴリ列追加時等に使用）
 */

import { execFileSync } from 'node:child_process';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { parseCodexReleaseBody, type ParsedEntry } from './parse-codex-releases.js';

const GITHUB_RELEASES_URL = 'https://api.github.com/repos/openai/codex/releases';
const TAG_PREFIX = 'rust-v';
const CONTENT_DIR = path.join(process.cwd(), 'content', 'codex');

interface Release {
  tag_name: string;
  name: string;
  published_at: string;
  prerelease: boolean;
  body: string;
}

interface VersionInfo {
  version: string;
  publishDate: string; // YYYY-MM-DD (JST)
  year: number;
  entries: ParsedEntry[]; // { text, category }[]
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

        // エントリ抽出（カテゴリ付き）
        const entries = parseCodexReleaseBody(release.body);

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
 * Claude Code CLI が利用可能かチェック
 */
function isClaudeCliAvailable(): boolean {
  try {
    execFileSync('claude', ['--version'], { encoding: 'utf-8', stdio: 'pipe' });
    return true;
  } catch {
    return false;
  }
}

/**
 * Claude Code CLI を使用してエントリを日本語に翻訳
 * @param entries 英語エントリの配列（テキストのみ）
 */
function translateEntries(entries: string[]): string[] | null {
  if (!isClaudeCliAvailable()) {
    console.log('  Claude Code CLI が利用できないため翻訳をスキップします');
    return null;
  }

  if (entries.length === 0) return [];

  try {
    const entriesText = entries.map((e, i) => `${i + 1}. ${e}`).join('\n');

    const prompt = `以下のOpenAI Codexの変更履歴エントリを日本語に翻訳してください。

ルール:
- 技術用語は適切に訳す（例: fix → 修正、add → 追加、improve → 改善）
- 簡潔で自然な日本語にする
- 各エントリを1行で翻訳
- 番号付きリスト形式で出力（入力と同じ形式）
- 説明や前置きは不要、翻訳結果のみを出力

エントリ:
${entriesText}`;

    const responseText = execFileSync('claude', ['--print', '--model', 'sonnet', prompt], {
      encoding: 'utf-8',
      maxBuffer: 10 * 1024 * 1024,
      timeout: 120000,
    }).trim();

    // 番号付きリストから翻訳を抽出
    const lines = responseText.split('\n').filter((line) => line.trim());
    const translations: string[] = [];

    for (const line of lines) {
      const match = line.match(/^\d+\.\s*(.+)$/);
      if (match) {
        // パイプ文字をエスケープ
        translations.push(match[1].trim().replace(/\|/g, '\\|'));
      }
    }

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
function sortVersionsDescending(versions: VersionInfo[]): VersionInfo[] {
  return versions.sort((a, b) => {
    const partsA = a.version.split('.').map(Number);
    const partsB = b.version.split('.').map(Number);

    for (let i = 0; i < 3; i++) {
      if (partsA[i] !== partsB[i]) {
        return partsB[i] - partsA[i];
      }
    }
    return 0;
  });
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

  for (let i = 0; i < entries.length; i++) {
    const jaText = translations?.[i] ?? '（翻訳待ち）';
    lines.push(`| ${jaText} | ${entries[i].text} | ${entries[i].category} |`);
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
interface CliOptions {
  isRebuild: boolean;
  yearOverride: number | null;
}

function parseArgs(): CliOptions {
  const args = process.argv.slice(2);
  let isRebuild = false;
  let yearOverride: number | null = null;

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
    }
  }

  return { isRebuild, yearOverride };
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
 * メイン処理
 */
async function main(): Promise<void> {
  const { isRebuild, yearOverride } = parseArgs();

  console.log('=== Codex 新バージョン自動検出・追記 ===');
  if (isRebuild) {
    console.log('※ --rebuild モード: 全バージョンを再取得・再翻訳します');
  }
  console.log('');

  // 1. GitHub Releases から全リリース情報を取得
  const allVersions = await fetchCodexReleases();

  if (allVersions.length === 0) {
    console.log('対象リリースがありません。');
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

    // 各バージョンのセクションを生成
    const sections: string[] = [];
    for (const versionInfo of sortedVersions) {
      if (versionInfo.entries.length === 0) {
        console.log(
          `  注記: v${versionInfo.version} はエントリなし（プレースホルダ表示）`
        );
        // プレースホルダエントリを追加してセクション生成を続行
        versionInfo.entries.push({
          text: '(No changelog entries)',
          category: 'chores' as const,
        });
      }

      // 翻訳を試行（テキストのみを渡す）
      console.log(`  v${versionInfo.version} を翻訳中...`);
      const textOnly = versionInfo.entries.map((e) => e.text);
      const translations = translateEntries(textOnly);
      if (translations) {
        console.log(`  v${versionInfo.version} の翻訳完了`);
      }

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
