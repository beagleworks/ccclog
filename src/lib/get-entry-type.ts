/**
 * エントリのカテゴリから CSS クラスを決定するヘルパー
 *
 * - Codex: CATEGORY_TO_CLASS でマッピング
 * - Claude Code: category フィールド優先、フォールバックでキーワード判定
 */

export type CodexCategory = 'new-features' | 'bug-fixes' | 'documentation' | 'chores';
export type ClaudeCodeCategory = 'added' | 'fixed' | 'changed' | 'improved' | 'other';

export interface Entry {
  ja: string;
  en: string;
  category?: CodexCategory | ClaudeCodeCategory;
}

/** Codex カテゴリ → 既存 CSS クラスへのマッピング */
const CATEGORY_TO_CLASS: Record<string, string> = {
  'new-features': 'added',
  'bug-fixes': 'fixed',
  'documentation': 'improved',
  'chores': 'other',
};

const VALID_CLAUDE_CODE_CLASSES = new Set(['added', 'fixed', 'changed', 'improved', 'other']);

/**
 * エントリの種類を判定してCSSクラスを返す
 */
export function getEntryType(entry: Entry, productId: string): string {
  // Codex: 必ず CATEGORY_TO_CLASS でマッピング（既存動作を維持）
  if (productId === 'codex') {
    if (entry.category) {
      return CATEGORY_TO_CLASS[entry.category] || 'other';
    }
    return 'other';
  }

  // Claude Code: category フィールド優先
  if (entry.category && VALID_CLAUDE_CODE_CLASSES.has(entry.category)) {
    return entry.category;
  }

  // フォールバック: category がない or 無効な旧形式データ用キーワード判定
  const lowerEn = entry.en.toLowerCase();
  if (lowerEn.includes('added') || lowerEn.includes('add ')) return 'added';
  if (lowerEn.includes('fixed') || lowerEn.includes('fix ') || lowerEn.includes('bugfix') || lowerEn.includes('reduced')) return 'fixed';
  if (lowerEn.includes('changed') || lowerEn.includes('change ') || lowerEn.includes('merged') || lowerEn.includes('moved') || lowerEn.includes('updated') || lowerEn.includes('removed') || lowerEn.includes('deprecated')) return 'changed';
  if (lowerEn.includes('improved') || lowerEn.includes('improve ')) return 'improved';
  if (lowerEn.includes('enabled') || lowerEn.includes('enable ')) return 'added';
  return 'other';
}
