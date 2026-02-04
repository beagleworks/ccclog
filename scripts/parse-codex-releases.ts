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

    // 最上位の箇条書きを検出（`- ` で始まる行）
    if (line.startsWith('- ')) {
      const entry = line.substring(2).trim();

      // 空行やアセット列挙（ダウンロードリンクなど）はスキップ
      if (!entry) continue;
      if (entry.match(/^https?:\/\//)) continue;
      if (entry.match(/^\[.*\]\(https?:\/\/.*\)$/)) continue;

      // 正規化して追加
      const normalized = normalizeEntry(entry);
      if (normalized) {
        entries.push(normalized);
      }
    }
  }

  return entries;
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
