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
      const cells = line.split('|').map((cell) => cell.trim());
      // cells[0] は空文字列、cells[1] が日本語、cells[2] が英語
      if (cells.length >= 3 && cells[1] && cells[2]) {
        currentEntries.push({
          ja: cells[1],
          en: cells[2],
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
