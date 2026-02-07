/**
 * 日付関連ユーティリティ
 *
 * JST（日本標準時）基準での日付変換・年取得を提供する
 */

const JST_OFFSET_MS = 9 * 60 * 60 * 1000;

/**
 * UTC日時をJST（日本標準時）に変換
 */
export function utcToJst(utcDate: string): Date {
  const date = new Date(utcDate);
  return new Date(date.getTime() + JST_OFFSET_MS);
}

/**
 * 現在の年を取得（JST基準）
 */
export function getCurrentYearJst(): number {
  const jstNow = new Date(Date.now() + JST_OFFSET_MS);
  return jstNow.getFullYear();
}
