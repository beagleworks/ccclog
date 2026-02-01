/**
 * CHANGELOG_2026_JA.md をパースして構造化データに変換する
 */

export interface Entry {
  ja: string;
  en: string;
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

  for (const line of lines) {
    // バージョンヘッダーを検出 (例: ## 2.1.23)
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
    if (line.includes('| 日本語 | English |')) {
      inTable = true;
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
        currentEntries.push({
          ja,
          en,
        });
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
