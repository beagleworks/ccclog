/**
 * CHANGELOG_2026_JA.md をパースして構造化データに変換する
 *
 * 対応形式:
 * - 3列テーブル: | 日本語 | English | Category |
 */

/** Claude Code のカテゴリID */
export type ClaudeCodeCategory = 'added' | 'fixed' | 'changed' | 'improved' | 'other';

/** Codex のカテゴリID（本家 GitHub Releases のセクション名に準拠） */
export type CodexCategory = 'new-features' | 'bug-fixes' | 'documentation' | 'chores';

/** 全プロダクト共通のカテゴリ型 */
export type EntryCategory = CodexCategory | ClaudeCodeCategory;

/** プロダクト別のカテゴリセット（検証用） */
const CODEX_CATEGORIES = new Set<string>(['new-features', 'bug-fixes', 'documentation', 'chores']);
const CLAUDE_CODE_CATEGORIES = new Set<string>(['added', 'fixed', 'changed', 'improved', 'other']);

export interface Entry {
  ja: string;
  en: string;
  category: EntryCategory;
}

export interface ParsedVersion {
  version: string;
  entries: Entry[];
}

function parseMarkdownTableRow(line: string): string[] {
  const trimmed = line.trim();
  if (!trimmed.startsWith('|')) return [];

  const start = 1;
  const end = trimmed.endsWith('|') ? trimmed.length - 1 : trimmed.length;

  const cells: string[] = [];
  let current = '';

  for (let i = start; i < end; i++) {
    const ch = trimmed[i];

    // `\|` はセル内のパイプとして扱う
    if (ch === '\\' && i + 1 < end && trimmed[i + 1] === '|') {
      current += '|';
      i++;
      continue;
    }

    if (ch === '|') {
      cells.push(current.trim());
      current = '';
      continue;
    }

    current += ch;
  }

  cells.push(current.trim());
  return cells;
}

/**
 * テーブルヘッダー行を検出
 * @returns 'three-column' | 'two-column' | false
 */
function detectTableHeader(line: string): 'three-column' | 'two-column' | false {
  const cells = parseMarkdownTableRow(line);
  const normalized = cells.map((c) => c.trim());

  if (
    normalized.length >= 3 &&
    normalized[0] === '日本語' &&
    normalized[1] === 'English' &&
    normalized[2] === 'Category'
  ) {
    return 'three-column';
  }
  if (normalized.length >= 2 && normalized[0] === '日本語' && normalized[1] === 'English') {
    return 'two-column';
  }
  return false;
}

/** プロダクト別のカテゴリ検証セットと警告ラベル */
const CATEGORY_VALIDATION: Record<string, { validSet: Set<string>; label: string }> = {
  'codex': { validSet: CODEX_CATEGORIES, label: 'Codex' },
  'claude-code': { validSet: CLAUDE_CODE_CATEGORIES, label: 'Claude Code' },
};

/**
 * カテゴリ文字列をパース（プロダクト文脈付き検証）
 * @param value カテゴリ値
 * @param product プロダクト種別（指定時はそのプロダクトのカテゴリのみ許容）
 * @returns 有効なカテゴリまたは undefined
 */
function parseCategory(value: string, product?: 'claude-code' | 'codex'): EntryCategory | undefined {
  const normalized = value.trim().toLowerCase();

  // 検証対象セットを決定（未指定時は全カテゴリを許容）
  const validation = product ? CATEGORY_VALIDATION[product] : undefined;
  const isValid = validation
    ? validation.validSet.has(normalized)
    : CODEX_CATEGORIES.has(normalized) || CLAUDE_CODE_CATEGORIES.has(normalized);

  if (!isValid) {
    if (value.trim()) {
      const label = validation?.label ?? 'Unknown';
      console.warn(`${label} に無効なカテゴリ: "${value}"`);
    }
    return undefined;
  }

  return normalized as EntryCategory;
}

/**
 * CHANGELOGファイルをパースする
 * @param content CHANGELOGファイルの内容
 * @param product プロダクト種別（カテゴリ検証に使用）
 * @returns パースされたバージョン情報の配列
 */
export function parseChangelog(content: string, product?: 'claude-code' | 'codex'): ParsedVersion[] {
  const versions: ParsedVersion[] = [];
  const lines = content.split('\n');

  let currentVersion: string | null = null;
  let currentEntries: Entry[] = [];
  let inTable = false;

  for (const line of lines) {
    // バージョンヘッダーを検出 (例: ## 2.1.23 または ## 0.1.2505301544)
    const versionMatch = line.match(/^## (\d+\.\d+\.\d+)/);
    if (versionMatch) {
      // 前のバージョンを保存
      if (currentVersion) {
        versions.push({
          version: currentVersion,
          entries: currentEntries,
        });
      }
      currentVersion = versionMatch[1];
      currentEntries = [];
      inTable = false;
      continue;
    }

    // テーブルヘッダー行を検出
    const headerResult = detectTableHeader(line);
    if (headerResult === 'three-column') {
      inTable = true;
      continue;
    }
    if (headerResult === 'two-column') {
      throw new Error(`非対応の2列テーブルを検出しました（バージョン ${currentVersion ?? 'unknown'}）。3列テーブルに変換してください。`);
    }

    // テーブル区切り行をスキップ
    if (line.match(/^\|[-\s|]+\|$/)) {
      continue;
    }

    // テーブル行をパース
    if (inTable && line.startsWith('|') && currentVersion) {
      const cells = parseMarkdownTableRow(line);
      const ja = cells[0];
      const en = cells[1];
      if (ja && en) {
        if (cells[2] === undefined || cells[2].trim() === '') {
          throw new Error(`Category 列が欠損しています（バージョン ${currentVersion}, 行: ${line}）`);
        }
        const category = parseCategory(cells[2], product) ?? 'other';
        currentEntries.push({ ja, en, category });
      }
    }

    // 空行でテーブル終了
    if (line.trim() === '' && inTable) {
      inTable = false;
    }
  }

  // 最後のバージョンを保存
  if (currentVersion) {
    versions.push({
      version: currentVersion,
      entries: currentEntries,
    });
  }

  return versions;
}

/**
 * バージョンごとのエントリ一覧を抽出する
 * @param content CHANGELOGファイルの内容
 * @param product プロダクト種別（カテゴリ検証に使用）
 * @returns version -> entries のMap
 */
export function extractEntriesByVersion(content: string, product?: 'claude-code' | 'codex'): Map<string, Entry[]> {
  const versions = parseChangelog(content, product);
  const result = new Map<string, Entry[]>();

  for (const version of versions) {
    result.set(version.version, version.entries);
  }

  return result;
}
