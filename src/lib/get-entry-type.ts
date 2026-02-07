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

/** キーワード → CSS クラスのマッピング（旧形式データ用フォールバック） */
const KEYWORD_RULES: Array<{ keywords: string[]; cls: string }> = [
  { keywords: ['added', 'add '], cls: 'added' },
  { keywords: ['fixed', 'fix ', 'bugfix', 'reduced'], cls: 'fixed' },
  { keywords: ['changed', 'change ', 'merged', 'moved', 'updated', 'removed', 'deprecated'], cls: 'changed' },
  { keywords: ['improved', 'improve '], cls: 'improved' },
];

/**
 * エントリの種類を判定してCSSクラスを返す
 */
export function getEntryType(entry: Entry, productId: string): string {
  // Codex: 必ず CATEGORY_TO_CLASS でマッピング
  if (productId === 'codex') {
    return entry.category ? (CATEGORY_TO_CLASS[entry.category] || 'other') : 'other';
  }

  // Claude Code: category フィールド優先
  if (entry.category && VALID_CLAUDE_CODE_CLASSES.has(entry.category)) {
    return entry.category;
  }

  // フォールバック: category がない or 無効な旧形式データ用キーワード判定
  const lowerEn = entry.en.toLowerCase();
  for (const rule of KEYWORD_RULES) {
    if (rule.keywords.some((kw) => lowerEn.includes(kw))) {
      return rule.cls;
    }
  }
  return 'other';
}
