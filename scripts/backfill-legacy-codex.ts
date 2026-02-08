/**
 * Codex 旧形式リリースの AI バックフィルスクリプト
 *
 * 処理フロー:
 * 1. content/codex/CHANGELOG_*_JA.md を全てスキャン
 *    → 各年ファイルから "(No changelog entries)" を含むバージョン一覧取得
 * 2. GitHub API で全リリース取得 → 対象バージョンの raw body を収集
 * 3. body 空のバージョンはスキップ（ログ出力）
 * 4. 各バージョンに対し Claude CLI で抽出・翻訳・分類（JSON出力）
 * 5. レスポンスをパースし、|エスケープ後、generateVersionSection() でセクション生成
 * 6. replaceVersionSection() で該当年の CHANGELOG を更新
 *
 * オプション:
 * --dry-run: 書き込みせず結果を標準出力
 * --version X.Y.Z: 特定バージョンのみ処理
 */

import * as fs from 'node:fs';
import * as path from 'node:path';
import { execFileSync } from 'node:child_process';
import { isClaudeCliAvailable } from './translate.js';
import type { CodexCategory, ParsedEntry } from './parse-codex-releases.ts';
import {
  CONTENT_DIR,
  getGitHubHeaders,
  findSectionBoundaries,
  replaceVersionSection,
  generateVersionSection,
} from './codex-changelog-utils.ts';

// ---------------------------------------------------------------------------
// 型定義
// ---------------------------------------------------------------------------

interface ExtractedEntry {
  english: string;
  japanese: string;
  category: CodexCategory;
}

interface PlaceholderVersion {
  version: string;
  year: number;
}

interface Release {
  tag_name: string;
  prerelease: boolean;
  body: string | null;
}

interface BackfillResult {
  success: string[];
  skipped: string[];
  failed: string[];
}

// ---------------------------------------------------------------------------
// CLI 引数パース
// ---------------------------------------------------------------------------

interface CliOptions {
  dryRun: boolean;
  version: string | null;
  overwrite: boolean;
}

function parseArgs(): CliOptions {
  const args = process.argv.slice(2);
  let dryRun = false;
  let version: string | null = null;
  let overwrite = false;

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--dry-run') {
      dryRun = true;
      continue;
    }
    if (arg === '--overwrite') {
      overwrite = true;
      continue;
    }
    if (arg === '--version') {
      const v = args[i + 1];
      if (!v || !/^\d+\.\d+\.\d+$/.test(v)) {
        console.error('エラー: --version の後に X.Y.Z 形式のバージョンを指定してください');
        process.exit(1);
      }
      version = v;
      i++;
      continue;
    }
    if (arg.startsWith('--')) {
      console.error(`エラー: 未知のオプション: ${arg}`);
      process.exit(1);
    }
  }

  if (overwrite && !version) {
    console.error('エラー: --overwrite は --version と併用してください');
    process.exit(1);
  }

  return { dryRun, version, overwrite };
}

// ---------------------------------------------------------------------------
// プレースホルダー検出（全年ファイル横断）
// ---------------------------------------------------------------------------

export function findPlaceholderVersions(): PlaceholderVersion[] {
  const results: PlaceholderVersion[] = [];

  const files = fs.readdirSync(CONTENT_DIR).filter(f => /^CHANGELOG_\d{4}_JA\.md$/.test(f));

  for (const file of files) {
    const yearMatch = file.match(/CHANGELOG_(\d{4})_JA\.md$/);
    if (!yearMatch) continue;
    const year = Number(yearMatch[1]);

    const filePath = path.join(CONTENT_DIR, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const boundaries = findSectionBoundaries(content);

    for (const boundary of boundaries) {
      const sectionContent = content.slice(boundary.start, boundary.end);
      if (sectionContent.includes('(No changelog entries)')) {
        results.push({ version: boundary.version, year });
      }
    }
  }

  return results;
}

/**
 * 全年ファイルからバージョンの年を特定（--overwrite 用）
 */
export function findVersionYear(version: string): number | null {
  const files = fs.readdirSync(CONTENT_DIR).filter(f => /^CHANGELOG_\d{4}_JA\.md$/.test(f));

  for (const file of files) {
    const yearMatch = file.match(/CHANGELOG_(\d{4})_JA\.md$/);
    if (!yearMatch) continue;

    const filePath = path.join(CONTENT_DIR, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const boundaries = findSectionBoundaries(content);

    if (boundaries.some(b => b.version === version)) {
      return Number(yearMatch[1]);
    }
  }

  return null;
}

// ---------------------------------------------------------------------------
// GitHub API からリリース body 取得
// ---------------------------------------------------------------------------

const GITHUB_RELEASES_URL = 'https://api.github.com/repos/openai/codex/releases';
const TAG_PREFIX = 'rust-v';

async function fetchReleaseBodies(): Promise<Map<string, string>> {
  const bodies = new Map<string, string>();
  let page = 1;

  console.log('GitHub Releases からリリース body を取得中...');

  while (true) {
    const url = `${GITHUB_RELEASES_URL}?per_page=100&page=${page}`;

    try {
      const response = await fetch(url, { headers: getGitHubHeaders() });

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
        if (release.prerelease) continue;
        if (!release.tag_name.startsWith(TAG_PREFIX)) continue;
        if (release.tag_name.includes('-alpha')) continue;
        if (release.tag_name.includes('-beta')) continue;
        if (release.tag_name.includes('-rc')) continue;

        const version = release.tag_name.replace(TAG_PREFIX, '');
        if (release.body && release.body.trim()) {
          bodies.set(version, release.body);
        }
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

  console.log(`  ${bodies.size} 件のリリース body を取得しました`);
  return bodies;
}

// ---------------------------------------------------------------------------
// AI 抽出 — Claude CLI で JSON 出力
// ---------------------------------------------------------------------------

function extractWithClaude(version: string, rawBody: string): ExtractedEntry[] | null {
  const prompt = `以下は OpenAI Codex v${version} の GitHub Release body です。
ユーザーに意味のある変更点を抽出し、JSON 配列で返してください。

抽出ルール:
- Highlights / Notable Changes 優先、なければ PRs Merged から抽出
- 各PRは独立エントリ。deps bump/CI修正/テスト修正など軽微なものは除外
- PR番号は (#XXXX) 形式で末尾に残す

翻訳ルール:
- 体言止め/である調（「〜を修正」「〜を追加」）
- 丁寧語不使用

カテゴリ: new-features / bug-fixes / documentation / chores

出力形式（JSON配列のみ、コードフェンスなし）:
[{"en":"English text","ja":"日本語テキスト","category":"new-features"},...]

エントリ0件の場合は空配列 [] を返す。
Release body:
${rawBody}`;

  try {
    const responseText = execFileSync('claude', ['--print', '--model', 'sonnet', prompt], {
      encoding: 'utf-8',
      maxBuffer: 10 * 1024 * 1024,
      timeout: 120000,
    }).trim();

    return parseExtractionResponse(responseText);
  } catch (error) {
    console.error(`  v${version}: Claude CLI エラー:`, error);
    return null;
  }
}

// ---------------------------------------------------------------------------
// レスポンスパーサー（堅牢版）
// ---------------------------------------------------------------------------

const VALID_CODEX_CATEGORIES = new Set<string>([
  'new-features', 'bug-fixes', 'documentation', 'chores',
]);

export function parseExtractionResponse(responseText: string): ExtractedEntry[] {
  // 1. コードフェンス除去
  const stripped = responseText
    .replace(/^```(?:json)?\n?/gm, '')
    .replace(/```$/gm, '')
    .trim();

  // 2. JSON 配列のパース試行
  try {
    const parsed = JSON.parse(stripped);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter((e: Record<string, unknown>) =>
        e && typeof e.en === 'string' && typeof e.ja === 'string'
      )
      .map((e: Record<string, unknown>) => ({
        english: (e.en as string).trim(),
        japanese: (e.ja as string).trim(),
        category: VALID_CODEX_CATEGORIES.has(e.category as string)
          ? (e.category as CodexCategory)
          : 'chores' as CodexCategory,
      }));
  } catch {
    // 3. JSON パース失敗 → 番号付きリスト形式にフォールバック
    return parseNumberedListFallback(stripped);
  }
}

// ---------------------------------------------------------------------------
// フォールバックパーサー（番号付きリスト形式）
// ---------------------------------------------------------------------------

const CODEX_CAT = '(new-features|bug-fixes|documentation|chores)';

/** strict: 有効カテゴリのみ受理 */
const codexStrictPatterns = [
  new RegExp(`^\\d+\\.\\s*(.+?)\\s*\\|\\|\\|\\s*(.+?)\\s*\\|\\|\\|\\s*${CODEX_CAT}\\s*$`, 'i'),
];

/** loose: 無効カテゴリ → chores */
const codexLoosePatterns = [
  new RegExp(`^\\d+\\.\\s*(.+?)\\s*\\|\\|\\|\\s*(.+?)\\s*\\|\\|\\|\\s*\\S+\\s*$`),
];

export function parseNumberedListFallback(text: string): ExtractedEntry[] {
  const lines = text.split('\n').filter(line => line.trim());
  const results: ExtractedEntry[] = [];

  for (const line of lines) {
    let matched = false;

    // 1. strict: ja ||| en ||| valid-category
    for (const pattern of codexStrictPatterns) {
      const m = line.match(pattern);
      if (m) {
        results.push({
          japanese: m[1].trim(),
          english: m[2].trim(),
          category: m[3].toLowerCase() as CodexCategory,
        });
        matched = true;
        break;
      }
    }
    if (matched) continue;

    // 2. loose: ja ||| en ||| invalid-category → chores
    for (const pattern of codexLoosePatterns) {
      const m = line.match(pattern);
      if (m) {
        results.push({
          japanese: m[1].trim(),
          english: m[2].trim(),
          category: 'chores',
        });
        matched = true;
        break;
      }
    }
    if (matched) continue;

    // 3. 番号付き1列のみ → en/ja を分離できないため破棄
  }

  return results;
}

// ---------------------------------------------------------------------------
// パイプエスケープ（テーブル崩れ防止）
// ---------------------------------------------------------------------------

/**
 * AI 抽出結果の英語テキストをエスケープ・正規化
 * 日本語列は generateVersionSection() が内部でエスケープするため不要
 */
export function normalizeExtractedEntry(text: string): string {
  return text.replace(/\|/g, '\\|').replace(/\s+/g, ' ').trim();
}

// ---------------------------------------------------------------------------
// スリープユーティリティ
// ---------------------------------------------------------------------------

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ---------------------------------------------------------------------------
// メイン処理
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  const { dryRun, version: specifiedVersion, overwrite } = parseArgs();

  console.log('=== Codex 旧形式リリース AI バックフィル ===');
  if (dryRun) console.log('※ --dry-run モード: 書き込みは行いません');
  if (overwrite) console.log('※ --overwrite モード: 既存エントリを上書きします');
  console.log('');

  // 1. Claude CLI チェック
  if (!isClaudeCliAvailable()) {
    console.error('エラー: Claude Code CLI が利用できません');
    process.exit(1);
  }

  // 2. 対象バージョンを決定
  let targets: PlaceholderVersion[];

  if (overwrite && specifiedVersion) {
    // --overwrite --version: プレースホルダーガードをバイパス
    // CHANGELOG ファイルから年を特定
    const year = findVersionYear(specifiedVersion);
    if (!year) {
      console.error(`エラー: v${specifiedVersion} が CHANGELOG ファイルに見つかりません`);
      process.exit(1);
    }
    console.log(`上書き対象: v${specifiedVersion} (${year}年)`);
    targets = [{ version: specifiedVersion, year }];
  } else {
    // 通常モード: プレースホルダーのみ対象
    const placeholders = findPlaceholderVersions();
    console.log(`プレースホルダーバージョン: ${placeholders.length} 件`);

    if (placeholders.length === 0) {
      console.log('対象バージョンがありません。');
      return;
    }

    if (specifiedVersion) {
      const target = placeholders.find(p => p.version === specifiedVersion);
      if (!target) {
        console.log(`v${specifiedVersion} はプレースホルダーではありません。スキップします。`);
        console.log('既存エントリを上書きするには --overwrite を追加してください。');
        return;
      }
      targets = [target];
    } else {
      targets = placeholders;
    }
  }

  // 4. GitHub API でリリース body を取得
  const releaseBodies = await fetchReleaseBodies();

  // 5. 各バージョンを処理
  const result: BackfillResult = { success: [], skipped: [], failed: [] };

  for (const { version, year } of targets) {
    console.log(`\n--- v${version} (${year}年) ---`);

    // body 取得
    const rawBody = releaseBodies.get(version);
    if (!rawBody) {
      console.log(`  body が空または未取得。スキップします。`);
      result.skipped.push(version);
      continue;
    }

    // AI 抽出
    console.log(`  Claude CLI で抽出中...`);
    const extracted = extractWithClaude(version, rawBody);
    if (extracted === null) {
      console.error(`  AI 抽出失敗。スキップします。`);
      result.failed.push(version);
      await sleep(1000);
      continue;
    }

    if (extracted.length === 0) {
      console.log(`  抽出結果が0件。プレースホルダーを維持します。`);
      result.skipped.push(version);
      await sleep(1000);
      continue;
    }

    console.log(`  ${extracted.length} エントリを抽出`);

    // ParsedEntry[] と translations[] を構築
    const entries: ParsedEntry[] = extracted.map(e => ({
      text: normalizeExtractedEntry(e.english),
      category: e.category,
    }));
    // 日本語列は generateVersionSection() が内部でエスケープするのでそのまま渡す
    const translations: string[] = extracted.map(e => e.japanese);

    // セクション生成
    const section = generateVersionSection(version, entries, translations);

    if (dryRun) {
      console.log(`  [dry-run] 生成セクション:\n${section}`);
    } else {
      replaceVersionSection(year, version, section);
      console.log(`  CHANGELOG_${year}_JA.md を更新しました`);
    }

    result.success.push(version);

    // レート制限対策
    await sleep(1000);
  }

  // 6. 集計
  console.log('\n=== 完了 ===');
  console.log(`  成功: ${result.success.length} 件`);
  console.log(`  スキップ: ${result.skipped.length} 件`);
  console.log(`  失敗: ${result.failed.length} 件`);

  if (result.success.length > 0) {
    console.log(`\n成功バージョン: ${result.success.join(', ')}`);
  }
  if (result.failed.length > 0) {
    console.log(`\n失敗バージョン: ${result.failed.join(', ')}`);
  }
}

// 直接実行時のみ main() を呼ぶ（import 時の副作用防止）
const isDirectRun = process.argv[1]?.endsWith('backfill-legacy-codex.ts');
if (isDirectRun) {
  main().catch((error) => {
    console.error('エラー:', error);
    process.exit(1);
  });
}
