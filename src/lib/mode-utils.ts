// 検索モード
export type SearchMode = 'ja' | 'en' | 'both';
export function normalizeSearchMode(raw: string | null): SearchMode {
  return raw === 'ja' || raw === 'en' || raw === 'both' ? raw : 'both';
}

// 表示モード
export type DisplayMode = 'ja' | 'en' | 'both';
export function normalizeDisplayMode(raw: string | null): DisplayMode {
  return raw === 'ja' || raw === 'en' || raw === 'both' ? raw : 'both';
}

// モード初期値の解決
// urlValue: URLSearchParams.get() の結果（キーが存在しない場合は null）
// storageValue: sessionStorage.getItem() の結果
// 優先順位: URL パラメータ存在 > sessionStorage > デフォルト
// ※ URL パラメータが存在する場合（無効値含む）は sessionStorage を参照しない
export function resolveMode<T extends string>(
  urlValue: string | null,
  storageValue: string | null,
  normalize: (raw: string | null) => T,
): T {
  if (urlValue !== null) return normalize(urlValue);
  return normalize(storageValue);
}
