/**
 * GitHub Releases の body からエントリを抽出するパーサー
 *
 * 抽出ルール（SPEC.md 9.3.5 準拠）:
 * - 抽出対象: `- ` で始まる箇条書き（最上位のみ）
 * - カテゴリ情報はフラットに抽出（カテゴリは保持しない）
 * - 除外対象: コードブロック、アセット列挙、空行のみのブロック、`## Changelog` 以降
 * - 正規化: 1行化、連続空白の圧縮、`|` のエスケープ
 */

/**
 * Release body からエントリを抽出
 * @param body GitHub Release の body（Markdown形式）
 * @returns 抽出されたエントリの配列
 */
export function parseCodexReleaseBody(body: string): string[] {
  if (!body) return [];

  const entries: string[] = [];
  const lines = body.split('\n');

  let inCodeBlock = false;
  let isAfterChangelog = false;

  for (const line of lines) {
    // コードブロックの開始/終了を追跡
    if (line.trim().startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      continue;
    }

    // コードブロック内はスキップ
    if (inCodeBlock) continue;

    // `## Changelog` 以降はスキップ
    if (line.match(/^##\s+Changelog/i)) {
      isAfterChangelog = true;
      continue;
    }
    if (isAfterChangelog) continue;

    // 最上位の箇条書きのみを検出（インデントなしの `- ` で始まる行）
    // ネストされた箇条書き（スペースやタブでインデントされたもの）は除外
    if (!line.startsWith('- ')) continue;

    const entry = line.substring(2).trim();

    // 空行はスキップ
    if (!entry) continue;

    // アセットファイル（ダウンロードリンク）のみスキップ
    if (isAssetEntry(entry)) continue;

    // 正規化して追加
    const normalized = normalizeEntry(entry);
    if (normalized) {
      entries.push(normalized);
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
