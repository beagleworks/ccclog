/**
 * 「（翻訳待ち）」エントリを検出し、Claude Code CLI で再翻訳する
 *
 * 使用方法:
 *   pnpm retranslate                              # Claude Code, 当該年
 *   pnpm retranslate 2025                         # Claude Code, 2025年
 *   pnpm retranslate --product codex              # Codex, 当該年
 *   pnpm retranslate --product codex 2025         # Codex, 2025年
 */

import * as fs from 'node:fs';
import * as path from 'node:path';
import { getCurrentYearJst } from './date-utils.js';
import { isClaudeCliAvailable, translateAndClassifyOne, translateOne } from './translate.js';
import {
  emitRunReport,
  parseReportArgs,
  type ReportCliOptions,
  type ScriptRunReport,
} from './lib/run-report.js';

const PENDING_MARKER = '（翻訳待ち）';

type Product = 'claude-code' | 'codex';

export interface PendingEntry {
  version: string;
  lineNumber: number;
  englishText: string;
  category: string | null;
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
 */
export function findPendingEntries(filePath: string): PendingEntry[] {
  const entries: PendingEntry[] = [];

  if (!fs.existsSync(filePath)) {
    return entries;
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');

  let currentVersion: string | null = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // バージョンヘッダーを検出
    const versionMatch = line.match(/^## (\d+\.\d+\.\d+)/);
    if (versionMatch) {
      currentVersion = versionMatch[1];
      continue;
    }

    if (!currentVersion) continue;

    // テーブル行でない場合はスキップ
    if (!line.startsWith('|')) continue;

    // ヘッダー行（「日本語」を含む）を除外
    if (line.includes('| 日本語 |')) continue;

    // 区切り行（|--- で始まる）を除外
    if (/^\|\s*-/.test(line)) continue;

    const cells = splitTableRow(line);

    // 列数チェック: 最低2列必要
    if (cells.length < 2) continue;

    if (cells[0] !== PENDING_MARKER) continue;

    entries.push({
      version: currentVersion,
      lineNumber: i,
      englishText: cells[1].replace(/\\\|/g, '|').trim(),
      category: cells.length >= 3 ? cells[2] : null,
    });
  }

  return entries;
}

/**
 * ファイル内の特定行を更新
 */
export function updateLine(
  filePath: string,
  lineNumber: number,
  englishText: string,
  japaneseText: string,
  category: string
): void {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');

  // エスケープ処理
  const escapedJa = japaneseText.replace(/\|/g, '\\|');
  const escapedEn = englishText.replace(/\|/g, '\\|');

  lines[lineNumber] = `| ${escapedJa} | ${escapedEn} | ${category} |`;

  fs.writeFileSync(filePath, lines.join('\n'), 'utf-8');
}

function parseArgs(rawArgs: string[]): { product: Product; targetYear: number; reportOptions: ReportCliOptions } {
  const parsed = parseReportArgs(rawArgs);
  const args = parsed.remainingArgs;
  let product: Product = 'claude-code';
  let yearArg: string | undefined;

  const knownFlags = new Set(['--product']);

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--product') {
      const val = args[i + 1];
      if (val === 'codex') {
        product = 'codex';
      } else if (val === 'claude-code') {
        product = 'claude-code';
      } else {
        throw new Error(`エラー: 不明なプロダクト: ${val}`);
      }
      i++;
    } else if (args[i].startsWith('--')) {
      // 未知オプション
      throw new Error(
        `エラー: 不明なオプション: ${args[i]}\n使用可能なオプション: ${[...knownFlags].join(', ')}`
      );
    } else {
      yearArg = args[i];
    }
  }

  const targetYear = yearArg ? parseInt(yearArg, 10) : getCurrentYearJst();
  if (isNaN(targetYear)) {
    throw new Error(`エラー: 無効な年: ${yearArg}`);
  }

  return { product, targetYear, reportOptions: parsed.report };
}

/**
 * Codex エントリにカテゴリが存在することを表明する
 */
export function assertCodexCategory(
  entry: PendingEntry
): asserts entry is PendingEntry & { category: string } {
  if (!entry.category) {
    throw new Error(
      `Codex エントリにカテゴリがありません（v${entry.version}, 行${entry.lineNumber}）`
    );
  }
}

/**
 * メイン処理
 */
interface MainResult {
  changed: boolean;
  changedFiles: string[];
  translatedEntries: number;
  warnings: string[];
  reportOptions: ReportCliOptions;
}

export async function main(rawArgs: string[] = process.argv.slice(2)): Promise<MainResult> {
  const { product, targetYear, reportOptions } = parseArgs(rawArgs);

  console.log('=== 翻訳待ちエントリの再翻訳 ===\n');

  // Claude Code CLI の確認
  if (!isClaudeCliAvailable()) {
    throw new Error(
      'エラー: Claude Code CLI が利用できません\n  npm install -g @anthropic-ai/claude-code でインストールしてください'
    );
  }

  // コンテンツディレクトリを決定
  const contentDir = product === 'codex'
    ? path.join(process.cwd(), 'content', 'codex')
    : path.join(process.cwd(), 'content');

  const filePath = path.join(contentDir, `CHANGELOG_${targetYear}_JA.md`);
  const productLabel = product === 'codex' ? 'Codex' : 'Claude Code';
  console.log(`プロダクト: ${productLabel}`);
  console.log(`対象ファイル: ${filePath}`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`エラー: ファイルが存在しません: ${filePath}`);
  }

  // エントリを検出
  const pendingEntries = findPendingEntries(filePath);

  if (pendingEntries.length === 0) {
    console.log('\n対象エントリはありません');
    return {
      changed: false,
      changedFiles: [],
      translatedEntries: 0,
      warnings: [],
      reportOptions,
    };
  }

  console.log(`\n対象エントリ: ${pendingEntries.length}件`);

  let successCount = 0;
  let failCount = 0;
  const cliProductLabel = product === 'codex' ? 'OpenAI Codex' : 'Claude Code';

  for (const entry of pendingEntries) {
    console.log(`  - v${entry.version}: ${entry.englishText.substring(0, 50)}...`);
  }

  for (const entry of pendingEntries) {
    console.log(`\n翻訳中: v${entry.version} - ${entry.englishText.substring(0, 40)}...`);

    if (product === 'codex') {
      // Codex: 翻訳のみ。既存カテゴリを保持する（カテゴリ欠損はデータ異常）
      assertCodexCategory(entry);
      const translation = translateOne(entry.englishText, cliProductLabel);
      if (translation) {
        console.log(`  → ${translation}`);
        updateLine(filePath, entry.lineNumber, entry.englishText, translation, entry.category);
        successCount++;
      } else {
        console.log('  → 翻訳失敗（スキップ）');
        failCount++;
      }
    } else {
      // Claude Code: 分類付き翻訳 → フォールバックで翻訳のみ + 'other'
      const result = translateAndClassifyOne(entry.englishText, cliProductLabel);
      if (result) {
        console.log(`  → ${result.translation} [${result.category}]`);
        updateLine(filePath, entry.lineNumber, entry.englishText, result.translation, result.category);
        successCount++;
      } else {
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
    }
  }

  console.log(`\n=== 完了 ===`);
  console.log(`  成功: ${successCount}件`);
  console.log(`  失敗: ${failCount}件`);
  return {
    changed: successCount > 0,
    changedFiles: successCount > 0 ? [path.relative(process.cwd(), filePath)] : [],
    translatedEntries: successCount,
    warnings: [],
    reportOptions,
  };
}

// 直接実行時のみ main() を呼ぶ（import 時の副作用防止）
const isDirectRun = /retranslate\.[tj]s$/.test(process.argv[1] ?? '');
if (isDirectRun) {
  const start = Date.now();
  main()
    .then((result) => {
      const report: ScriptRunReport = {
        script: 'retranslate',
        status: 'ok',
        changed: result.changed,
        changedFiles: result.changedFiles,
        elapsedMs: Date.now() - start,
        translatedEntries: result.translatedEntries,
        warnings: result.warnings,
      };
      emitRunReport(result.reportOptions, report);
    })
    .catch((error) => {
      const message = error instanceof Error ? error.message : String(error);
      console.error('エラー:', error);
      let reportOptions: ReportCliOptions = { reportJson: false, reportFile: null };
      try {
        reportOptions = parseReportArgs(process.argv.slice(2)).report;
      } catch {
        // ignore
      }
      emitRunReport(reportOptions, {
        script: 'retranslate',
        status: 'error',
        changed: false,
        changedFiles: [],
        elapsedMs: Date.now() - start,
        warnings: [message],
        error: message,
      });
      process.exit(1);
    });
}
