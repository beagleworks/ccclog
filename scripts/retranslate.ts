/**
 * 「（翻訳待ち）」エントリを検出し、Claude Code CLI で再翻訳する
 *
 * 使用方法:
 *   pnpm retranslate                              # Claude Code, 当該年
 *   pnpm retranslate 2025                         # Claude Code, 2025年
 *   pnpm retranslate --product codex              # Codex, 当該年
 *   pnpm retranslate --product codex 2025         # Codex, 2025年
 *   pnpm retranslate --retranslate-all 2025       # Claude Code, 2025年の全エントリ再翻訳
 *   pnpm retranslate --retranslate-all 2026       # Claude Code, 2026年の全エントリ再翻訳
 *   pnpm retranslate --retranslate-all --product codex 2026  # Codex 全エントリ再翻訳
 */

import * as fs from 'node:fs';
import * as path from 'node:path';
import { getCurrentYearJst } from './date-utils.js';
import { isClaudeCliAvailable, translateBatch, translateAndClassifyWithFallback, translateAndClassifyOne, translateOne, type TranslationWithCategory } from './translate.js';
import type { ClaudeCodeCategory } from './parse-changelog.js';

const PENDING_MARKER = '（翻訳待ち）';

type Product = 'claude-code' | 'codex';

interface PendingEntry {
  version: string;
  lineNumber: number;
  englishText: string;
  category: string | null;
  hasThreeColumns: boolean;
}


/**
 * テーブル行をエスケープ済みパイプに対応して列分割
 * `\|` はセパレータではなくコンテンツの一部として扱う
 */
function splitTableRow(line: string): string[] {
  return line.split(/(?<!\\)\|/).map((c) => c.trim()).filter((c) => c);
}

/**
 * CHANGELOG ファイルからエントリを検出
 *
 * @param forceAll true の場合、翻訳済みエントリも含め全テーブル行を対象にする
 */
function findPendingEntries(filePath: string, forceAll = false): PendingEntry[] {
  const entries: PendingEntry[] = [];

  if (!fs.existsSync(filePath)) {
    return entries;
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');

  let currentVersion: string | null = null;
  let currentHasThreeColumns = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // バージョンヘッダーを検出
    const versionMatch = line.match(/^## (\d+\.\d+\.\d+)/);
    if (versionMatch) {
      currentVersion = versionMatch[1];
      currentHasThreeColumns = false;
      continue;
    }

    if (!currentVersion) continue;

    // テーブル行でない場合はスキップ
    if (!line.startsWith('|')) continue;

    // ヘッダー行（「日本語」を含む）を検出 → 3列かどうか判定して除外
    if (line.includes('| 日本語 |')) {
      currentHasThreeColumns = line.includes('| Category |');
      continue;
    }

    // 区切り行（|--- で始まる）を除外
    if (/^\|\s*-/.test(line)) continue;

    const cells = splitTableRow(line);

    // 列数チェック: 最低2列必要
    if (cells.length < 2) continue;

    // forceAll: 全テーブル行、通常モード: 「（翻訳待ち）」のみ
    if (!forceAll && cells[0] !== PENDING_MARKER) continue;

    entries.push({
      version: currentVersion,
      lineNumber: i,
      englishText: cells[1].replace(/\\\|/g, '|').trim(),
      category: cells.length >= 3 ? cells[2] : null,
      hasThreeColumns: currentHasThreeColumns,
    });
  }

  return entries;
}

/**
 * ファイル内の特定行を更新
 */
function updateLine(
  filePath: string,
  lineNumber: number,
  englishText: string,
  japaneseText: string,
  category: string | null
): void {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');

  // エスケープ処理
  const escapedJa = japaneseText.replace(/\|/g, '\\|');
  const escapedEn = englishText.replace(/\|/g, '\\|');

  if (category) {
    lines[lineNumber] = `| ${escapedJa} | ${escapedEn} | ${category} |`;
  } else {
    lines[lineNumber] = `| ${escapedJa} | ${escapedEn} |`;
  }

  fs.writeFileSync(filePath, lines.join('\n'), 'utf-8');
}

/**
 * バージョン単位の原子的更新情報
 */
interface VersionUpdate {
  headerLineNumber: number;
  separatorLineNumber: number;
  entries: Array<{
    lineNumber: number;
    japaneseText: string;
    englishText: string;
    category: ClaudeCodeCategory;
  }>;
}

/**
 * バージョン単位で原子的にテーブルを3列化する
 */
export function applyVersionUpdate(filePath: string, update: VersionUpdate): void {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');

  // ヘッダーと区切り行を3列化
  lines[update.headerLineNumber] = '| 日本語 | English | Category |';
  lines[update.separatorLineNumber] = '|--------|---------|----------|';

  // 全エントリ行を3列で書き込み
  for (const entry of update.entries) {
    const escapedJa = entry.japaneseText.replace(/\|/g, '\\|');
    const escapedEn = entry.englishText.replace(/\|/g, '\\|');
    lines[entry.lineNumber] = `| ${escapedJa} | ${escapedEn} | ${entry.category} |`;
  }

  // 1回だけ書き込み
  fs.writeFileSync(filePath, lines.join('\n'), 'utf-8');
}

/**
 * コマンドライン引数をパース
 */
function parseArgs(): { product: Product; targetYear: number; retranslateAll: boolean } {
  const args = process.argv.slice(2);
  let product: Product = 'claude-code';
  let yearArg: string | undefined;
  let retranslateAll = false;

  const knownFlags = new Set(['--product', '--retranslate-all']);

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--') {
      // pnpm 区切り — 無視
      continue;
    }
    if (args[i] === '--retranslate-all') {
      retranslateAll = true;
    } else if (args[i] === '--product') {
      const val = args[i + 1];
      if (val === 'codex') {
        product = 'codex';
      } else if (val === 'claude-code') {
        product = 'claude-code';
      } else {
        console.error(`エラー: 不明なプロダクト: ${val}`);
        process.exit(1);
      }
      i++;
    } else if (args[i].startsWith('--')) {
      // 未知オプション
      console.error(`エラー: 不明なオプション: ${args[i]}`);
      console.error(`使用可能なオプション: ${[...knownFlags].join(', ')}`);
      process.exit(1);
    } else {
      yearArg = args[i];
    }
  }

  const targetYear = yearArg ? parseInt(yearArg, 10) : getCurrentYearJst();
  if (isNaN(targetYear)) {
    console.error(`エラー: 無効な年: ${yearArg}`);
    process.exit(1);
  }

  return { product, targetYear, retranslateAll };
}

/**
 * バージョン単位でエントリをグループ化
 */
function groupByVersion(entries: PendingEntry[]): Map<string, PendingEntry[]> {
  const groups = new Map<string, PendingEntry[]>();
  for (const entry of entries) {
    const group = groups.get(entry.version);
    if (group) {
      group.push(entry);
    } else {
      groups.set(entry.version, [entry]);
    }
  }
  return groups;
}

/**
 * メイン処理
 */
async function main(): Promise<void> {
  const { product, targetYear, retranslateAll } = parseArgs();

  const mode = retranslateAll ? '全エントリ再翻訳' : '翻訳待ちエントリの再翻訳';
  console.log(`=== ${mode} ===\n`);

  // Claude Code CLI の確認
  if (!isClaudeCliAvailable()) {
    console.error('エラー: Claude Code CLI が利用できません');
    console.error('  npm install -g @anthropic-ai/claude-code でインストールしてください');
    process.exit(1);
  }

  // コンテンツディレクトリを決定
  const contentDir = product === 'codex'
    ? path.join(process.cwd(), 'content', 'codex')
    : path.join(process.cwd(), 'content');

  const filePath = path.join(contentDir, `CHANGELOG_${targetYear}_JA.md`);
  const productLabel = product === 'codex' ? 'Codex' : 'Claude Code';
  console.log(`プロダクト: ${productLabel}`);
  console.log(`対象ファイル: ${filePath}`);
  if (retranslateAll) {
    console.log('モード: --retranslate-all（全エントリ再翻訳）');
  }

  if (!fs.existsSync(filePath)) {
    console.error(`エラー: ファイルが存在しません: ${filePath}`);
    process.exit(1);
  }

  // エントリを検出
  const pendingEntries = findPendingEntries(filePath, retranslateAll);

  if (pendingEntries.length === 0) {
    console.log('\n対象エントリはありません');
    return;
  }

  console.log(`\n対象エントリ: ${pendingEntries.length}件`);

  let successCount = 0;
  let failCount = 0;
  const cliProductLabel = product === 'codex' ? 'OpenAI Codex' : 'Claude Code';

  if (retranslateAll) {
    // --retranslate-all: バージョン単位でバッチ翻訳+分類 → 原子的3列化
    const groups = groupByVersion(pendingEntries);

    // Claude Code の場合のみ3列化を行う（Codex は既に3列）
    const shouldClassify = product === 'claude-code';

    for (const [version, versionEntries] of groups) {
      console.log(`\nv${version}: ${versionEntries.length}件を一括翻訳中...`);

      const englishTexts = versionEntries.map((e) => e.englishText);

      if (shouldClassify) {
        // Claude Code: 翻訳+分類 → 原子的3列化
        const classified = translateAndClassifyWithFallback(englishTexts, cliProductLabel);

        if (classified && classified.length === versionEntries.length) {
          // テーブルヘッダーと区切り行の行番号を特定
          const content = fs.readFileSync(filePath, 'utf-8');
          const allLines = content.split('\n');
          const firstEntryLine = versionEntries[0].lineNumber;

          // ヘッダー行はエントリ行の2行前、区切り行は1行前
          let headerLine = -1;
          let separatorLine = -1;
          for (let j = firstEntryLine - 1; j >= 0; j--) {
            if (/^\|\s*-/.test(allLines[j])) {
              separatorLine = j;
            } else if (allLines[j].includes('| 日本語 |')) {
              headerLine = j;
              break;
            }
          }

          if (headerLine >= 0 && separatorLine >= 0) {
            const update: VersionUpdate = {
              headerLineNumber: headerLine,
              separatorLineNumber: separatorLine,
              entries: versionEntries.map((entry, idx) => ({
                lineNumber: entry.lineNumber,
                japaneseText: classified[idx].translation,
                englishText: entry.englishText,
                category: classified[idx].category,
              })),
            };
            applyVersionUpdate(filePath, update);
            for (const c of classified) {
              console.log(`  → ${c.translation} [${c.category}]`);
            }
            successCount += classified.length;
          } else {
            console.warn(`  警告: v${version} のテーブルヘッダーが見つかりません。スキップします。`);
            failCount += versionEntries.length;
          }
        } else {
          console.log(`  v${version} はスキップ（翻訳失敗あり）`);
          failCount += versionEntries.length;
        }
      } else {
        // Codex: 既存の翻訳のみモード（3列テーブルは既に存在）
        const translations = translateBatch(englishTexts, cliProductLabel);

        if (translations) {
          for (let j = 0; j < versionEntries.length; j++) {
            const entry = versionEntries[j];
            console.log(`  → ${translations[j]}`);
            updateLine(filePath, entry.lineNumber, entry.englishText, translations[j], entry.category);
            successCount++;
          }
        } else {
          console.log(`  バッチ翻訳失敗。1件ずつ再試行します...`);
          for (const entry of versionEntries) {
            console.log(`  翻訳中: ${entry.englishText.substring(0, 40)}...`);
            const translation = translateOne(entry.englishText, cliProductLabel);
            if (translation) {
              console.log(`    → ${translation}`);
              updateLine(filePath, entry.lineNumber, entry.englishText, translation, entry.category);
              successCount++;
            } else {
              console.log('    → 翻訳失敗（スキップ）');
              failCount++;
            }
          }
        }
      }
    }
  } else {
    // 通常モード: 1件ずつ翻訳（列形式を維持）
    for (const entry of pendingEntries) {
      console.log(`  - v${entry.version}: ${entry.englishText.substring(0, 50)}...`);
    }

    for (const entry of pendingEntries) {
      console.log(`\n翻訳中: v${entry.version} - ${entry.englishText.substring(0, 40)}...`);

      if (entry.hasThreeColumns) {
        // 3列テーブル → 分類付き翻訳を試行
        const result = translateAndClassifyOne(entry.englishText, cliProductLabel);
        if (result) {
          console.log(`  → ${result.translation} [${result.category}]`);
          updateLine(filePath, entry.lineNumber, entry.englishText, result.translation, result.category);
          successCount++;
        } else {
          // 分類付き翻訳失敗 → 翻訳のみ + 'other'
          const translation = translateOne(entry.englishText, cliProductLabel);
          if (translation) {
            console.log(`  → ${translation} [other (フォールバック)]`);
            updateLine(filePath, entry.lineNumber, entry.englishText, translation, 'other');
            successCount++;
          } else {
            console.log('  → 翻訳失敗（スキップ）');
            failCount++;
          }
        }
      } else {
        // 2列テーブル → 翻訳のみ（列形式維持）
        const translation = translateOne(entry.englishText, cliProductLabel);
        if (translation) {
          console.log(`  → ${translation}`);
          updateLine(filePath, entry.lineNumber, entry.englishText, translation, null);
          successCount++;
        } else {
          console.log('  → 翻訳失敗（スキップ）');
          failCount++;
        }
      }
    }
  }

  console.log(`\n=== 完了 ===`);
  console.log(`  成功: ${successCount}件`);
  console.log(`  失敗: ${failCount}件`);
}

main().catch((error) => {
  console.error('エラー:', error);
  process.exit(1);
});
