/**
 * エントリのカテゴリから CSS クラスを決定するヘルパー
 *
 * - Codex: CATEGORY_TO_CLASS でマッピング
 * - Claude Code: category をそのまま使用（有効値のみ許容）
 */

export type CodexCategory = 'new-features' | 'bug-fixes' | 'documentation' | 'chores';
export type ClaudeCodeCategory = 'added' | 'fixed' | 'changed' | 'improved' | 'other';

export interface Entry {
  ja: string;
  en: string;
  category: CodexCategory | ClaudeCodeCategory;
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
  if (productId === 'codex') {
    return CATEGORY_TO_CLASS[entry.category] || 'other';
  }
  if (VALID_CLAUDE_CODE_CLASSES.has(entry.category)) {
    return entry.category;
  }
  return 'other';
}
