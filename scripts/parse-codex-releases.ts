/**
 * GitHub Releases の body からエントリを抽出するパーサー（簡素化版）
 *
 * 現行形式（v0.78.0+）のみ対応:
 * - カテゴリヘッダー: `## New Features` / `## Bug Fixes` / `## Documentation` / `## Chores`
 * - 旧形式（Highlights / Merged PRs 等）は未知セクション扱い → 自然に0件
 *
 * 抽出ルール（SPEC_CODEX.md 2.5, 2.6 準拠）:
 * - 抽出対象: `- ` または `* ` で始まる箇条書き（最上位のみ）
 * - カテゴリ情報: セクションヘッダーから抽出・保持
 * - 除外対象: コードブロック、アセット列挙、`## Changelog` 以降、未知セクション
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

/** セクションヘッダーとカテゴリIDのマッピング（現行形式の4カテゴリのみ） */
const CATEGORY_HEADERS: Record<string, CodexCategory> = {
  'new features': 'new-features',
  'bug fixes': 'bug-fixes',
  documentation: 'documentation',
  chores: 'chores',
};

/**
 * 見出しテキストを正規化（表記揺れ対策）
 * - 小文字化
 * - 連続空白を圧縮
 * - 末尾の :, |, - を連続で除去
 */
function normalizeHeaderText(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/[:|\\|-]+$/, '');
}

/**
 * Release body からエントリを抽出
 * @param body GitHub Release の body（Markdown形式）
 * @returns 抽出されたエントリの配列（カテゴリ情報付き）
 */
export function parseCodexReleaseBody(body: string): ParsedEntry[] {
  if (!body) return [];

  const entries: ParsedEntry[] = [];
  const lines = body.replace(/\r/g, '').split('\n');

  let inCodeBlock = false;
  // 初期値は null（除外中）: 既知のカテゴリヘッダーが出現するまで箇条書きをスキップ
  // これにより旧形式のリリースは自然に0件になる
  let currentCategory: CodexCategory | null = null;

  for (const rawLine of lines) {
    const line = rawLine.trimStart();

    // コードブロックの開始/終了を追跡
    if (line.startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      continue;
    }

    if (inCodeBlock) continue;

    // "Full Changelog:" で終了
    if (line.startsWith('Full Changelog:')) {
      break;
    }

    // 見出しを検出
    const headerMatch = line.match(/^#{1,3}\s+(.+)$/);
    if (headerMatch) {
      const headerText = normalizeHeaderText(headerMatch[1]);

      // "changelog" で始まる場合は終了
      if (headerText.startsWith('changelog')) {
        break;
      }

      // 既知のカテゴリならセット、未知なら null（除外中）に戻す
      currentCategory = CATEGORY_HEADERS[headerText] ?? null;
      continue;
    }

    // エントリを検出: `- ` または `* ` で始まる箇条書き
    if (!line.startsWith('- ') && !line.startsWith('* ')) continue;
    const entry = line.substring(2).trim();

    // 未知セクション配下は除外
    if (currentCategory === null) continue;

    // 空エントリはスキップ
    if (!entry) continue;

    // アセットファイルのみスキップ
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

  if (entry.match(/^https?:\/\//) && entry.match(assetExtensions)) {
    return true;
  }

  const mdLinkMatch = entry.match(/^\[([^\]]*)\]\((https?:\/\/[^)]+)\)$/);
  if (mdLinkMatch) {
    const linkText = mdLinkMatch[1];
    const linkUrl = mdLinkMatch[2];
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
    .replace(/\n/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/\|/g, '\\|')
    .trim();
}
