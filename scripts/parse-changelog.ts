/**
 * CHANGELOG_2026_JA.md をパースして構造化データに変換する
 *
 * 対応形式:
 * - 2列テーブル: | 日本語 | English |（Claude Code）
 * - 3列テーブル: | 日本語 | English | Category |（Codex）
 */

/** Codex のカテゴリID（本家 GitHub Releases のセクション名に準拠） */
export type CodexCategory = 'new-features' | 'bug-fixes' | 'documentation' | 'chores';

/** 有効なカテゴリ値 */
const VALID_CATEGORIES: readonly string[] = ['new-features', 'bug-fixes', 'documentation', 'chores'];

export interface Entry {
  ja: string;
  en: string;
  category?: CodexCategory; // Codex のみ
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
 * @returns detected: ヘッダー行かどうか, hasCategory: 3列目にCategoryがあるか
 */
function detectTableHeader(line: string): { detected: boolean; hasCategory: boolean } {
  const cells = parseMarkdownTableRow(line);
  const normalized = cells.map((c) => c.trim());

  // 3列: ['日本語', 'English', 'Category']
  if (
    normalized.length >= 3 &&
    normalized[0] === '日本語' &&
    normalized[1] === 'English' &&
    normalized[2] === 'Category'
  ) {
    return { detected: true, hasCategory: true };
  }
  // 2列: ['日本語', 'English']
  if (normalized.length >= 2 && normalized[0] === '日本語' && normalized[1] === 'English') {
    return { detected: true, hasCategory: false };
  }
  return { detected: false, hasCategory: false };
}

/**
 * カテゴリ文字列をパース
 * @param value カテゴリ値
 * @returns 有効なカテゴリまたは undefined
 */
function parseCategory(value: string): CodexCategory | undefined {
  const normalized = value.trim().toLowerCase();
  if (VALID_CATEGORIES.includes(normalized)) {
    return normalized as CodexCategory;
  }
  // 未知値は undefined に落とす
  if (value.trim()) {
    console.warn(`Unknown category: "${value}" - treating as undefined`);
  }
  return undefined;
}

/**
 * CHANGELOGファイルをパースする
 * @param content CHANGELOGファイルの内容
 * @returns パースされたバージョン情報の配列
 */
export function parseChangelog(content: string): ParsedVersion[] {
  const versions: ParsedVersion[] = [];
  const lines = content.split('\n');

  let currentVersion: string | null = null;
  let currentEntries: Entry[] = [];
  let inTable = false;
  let hasCategory = false;

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
      hasCategory = false;
      continue;
    }

    // テーブルヘッダー行を検出
    const headerResult = detectTableHeader(line);
    if (headerResult.detected) {
      inTable = true;
      hasCategory = headerResult.hasCategory;
      continue;
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
        const entry: Entry = { ja, en };

        // 3列テーブルの場合、カテゴリを取得
        if (hasCategory && cells[2] !== undefined) {
          const category = parseCategory(cells[2]);
          if (category) {
            entry.category = category;
          }
        }

        currentEntries.push(entry);
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
 * @returns version -> entries のMap
 */
export function extractEntriesByVersion(content: string): Map<string, Entry[]> {
  const versions = parseChangelog(content);
  const result = new Map<string, Entry[]>();

  for (const version of versions) {
    result.set(version.version, version.entries);
  }

  return result;
}
