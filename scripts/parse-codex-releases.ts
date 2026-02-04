/**
 * GitHub Releases の body からエントリを抽出するパーサー
 *
 * 抽出ルール（SPEC_CODEX.md 2.5, 2.6 準拠）:
 * - 抽出対象: `- ` で始まる箇条書き（最上位のみ）
 * - カテゴリ情報: セクションヘッダー（`## New Features` 等）から抽出・保持
 * - 除外対象: コードブロック、アセット列挙、空行のみのブロック、`## Changelog` 以降、未知セクション
 * - 正規化: 1行化、連続空白の圧縮、`|` のエスケープ
 */

/** Codex のカテゴリID（本家 GitHub Releases のセクション名に準拠） */
export type CodexCategory =
  | 'new-features'
  | 'bug-fixes'
  | 'documentation'
  | 'chores';

/** パース結果のエントリ */
export interface ParsedEntry {
  text: string;
  category: CodexCategory;
}

/** セクションヘッダーとカテゴリIDのマッピング */
const CATEGORY_HEADERS: Record<string, CodexCategory> = {
  'new features': 'new-features',
  features: 'new-features', // Features も new-features として扱う
  highlights: 'new-features', // Highlights も new-features として扱う
  'bug fixes': 'bug-fixes',
  documentation: 'documentation',
  chores: 'chores',
  maintenance: 'chores', // Maintenance は chores として扱う
};

/**
 * 見出しテキストを正規化（表記揺れ対策）
 * - 小文字化
 * - 連続空白を圧縮
 * - 末尾の :, |, - を連続で除去
 *
 * 注意: "Bug Fixes (Windows):" のような補足付き見出しは
 * 正規化後も CATEGORY_HEADERS に一致しないため、未知扱いとなる（安全側に倒す）
 */
function normalizeHeaderText(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, ' ') // 連続空白を圧縮
    .replace(/[:|\\|-]+$/, ''); // 末尾の :, |, - を除去
}

/**
 * Release body からエントリを抽出
 * @param body GitHub Release の body（Markdown形式）
 * @returns 抽出されたエントリの配列（カテゴリ情報付き）
 */
export function parseCodexReleaseBody(body: string): ParsedEntry[] {
  if (!body) return [];

  const entries: ParsedEntry[] = [];
  // CRLF 改行に対応: \r を除去してから分割
  const lines = body.replace(/\r/g, '').split('\n');

  let inCodeBlock = false;
  // デフォルトは new-features（セクションヘッダー前の箇条書き用、実データでは発生しない）
  // null は「除外中」を表す（未知セクション配下）
  let currentCategory: CodexCategory | null = 'new-features';
  // 既知のカテゴリセクションが出現したかどうか（PRs Merged 終了判定に使用）
  let hasKnownCategory = false;

  for (const rawLine of lines) {
    // 先頭空白を除去（body 全体がインデントされているケースに対応）
    const line = rawLine.trimStart();

    // コードブロックの開始/終了を追跡
    if (line.startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      continue;
    }

    // コードブロック内はスキップ
    if (inCodeBlock) continue;

    // "Full Changelog:", "Changelog" で始まる行は終了
    if (line.startsWith('Full Changelog:') || /^Changelog\b/i.test(line)) {
      break;
    }

    // "PRs Merged" は既知カテゴリが先に出現した場合のみ終了
    // （PRs Merged から始まるリリースノートを除外しないため）
    // #, ##, ### 付きまたは無しの PRs Merged にマッチ
    if (/^#{0,3}\s*PRs Merged\b/i.test(line) && hasKnownCategory) {
      break;
    }

    // #, ##, ### で始まる見出しを検出
    const headerMatch = line.match(/^#{1,3}\s+(.+)$/);
    if (headerMatch) {
      const headerText = normalizeHeaderText(headerMatch[1]);

      // "changelog" で始まる場合は終了
      if (headerText.startsWith('changelog')) {
        break;
      }

      // 既知のカテゴリならセット
      const category = CATEGORY_HEADERS[headerText] ?? null;
      if (category !== null) {
        hasKnownCategory = true;
        currentCategory = category;
      } else if (!hasKnownCategory) {
        // 既知カテゴリがまだ出現していない場合は、デフォルトカテゴリを維持
        // （Highlights, PRs Merged のみのリリースノートに対応）
      } else {
        // 既知カテゴリ後の未知セクションは除外
        currentCategory = null;
      }
      continue;
    }

    // エントリを検出: `- ` で始まる箇条書き、または `#数字` で始まる PR 参照
    let entry: string | null = null;
    if (line.startsWith('- ')) {
      entry = line.substring(2).trim();
    } else if (/^#\d+\s+—/.test(line)) {
      // PR 参照形式（例: "#8270 — splash screen"）厳格にマッチ
      entry = line.trim();
    }

    if (entry === null) continue;

    // 未知セクション配下は除外
    if (currentCategory === null) continue;

    // 空行はスキップ
    if (!entry) continue;

    // アセットファイル（ダウンロードリンク）のみスキップ
    if (isAssetEntry(entry)) continue;

    // 正規化して追加
    const normalized = normalizeEntry(entry);
    if (normalized) {
      entries.push({ text: normalized, category: currentCategory });
    }
  }

  return entries;
}

/**
 * アセットファイルのエントリかどうかを判定
 * - 生URL形式: https://example.com/file.zip
 * - Markdownリンク形式: [file.tar.gz](https://...) または [Download](https://.../file.zip)
 */
function isAssetEntry(entry: string): boolean {
  const assetExtensions = /\.(zip|tar\.gz|exe|msi|dmg|deb|rpm|apk|ipa)$/i;

  // 生URLの場合
  if (entry.match(/^https?:\/\//) && entry.match(assetExtensions)) {
    return true;
  }

  // Markdownリンク形式の場合: [text](url)
  const mdLinkMatch = entry.match(/^\[([^\]]*)\]\((https?:\/\/[^)]+)\)$/);
  if (mdLinkMatch) {
    const linkText = mdLinkMatch[1];
    const linkUrl = mdLinkMatch[2];
    // リンクテキストまたはURLにアセット拡張子があればアセット
    if (linkText.match(assetExtensions) || linkUrl.match(assetExtensions)) {
      return true;
    }
  }

  return false;
}

/**
 * エントリを正規化
 * - 1行化（改行を空白に変換）
 * - 連続空白の圧縮
 * - `|` のエスケープ（テーブル崩れ防止）
 */
function normalizeEntry(entry: string): string {
  return entry
    .replace(/\n/g, ' ') // 改行を空白に
    .replace(/\s+/g, ' ') // 連続空白を圧縮
    .replace(/\|/g, '\\|') // パイプをエスケープ
    .trim();
}
