/**
 * 「（翻訳待ち）」エントリを検出し、Claude Code CLI で再翻訳する
 *
 * 使用方法:
 *   pnpm retranslate                         # Claude Code, 当該年
 *   pnpm retranslate 2025                    # Claude Code, 2025年
 *   pnpm retranslate --product codex         # Codex, 当該年
 *   pnpm retranslate --product codex 2025    # Codex, 2025年
 */

import { execSync, execFileSync } from 'node:child_process';
import * as fs from 'node:fs';
import * as path from 'node:path';

const PENDING_MARKER = '（翻訳待ち）';

type Product = 'claude-code' | 'codex';

interface PendingEntry {
  version: string;
  lineNumber: number;
  englishText: string;
  category: string | null; // Codex の場合のみ（3列テーブル）
}

/**
 * 現在の年を取得（JST基準）
 */
function getCurrentYearJst(): number {
  const now = new Date();
  const jstOffset = 9 * 60 * 60 * 1000;
  const jstNow = new Date(now.getTime() + jstOffset);
  return jstNow.getFullYear();
}

/**
 * Claude Code CLI が利用可能かチェック
 */
function isClaudeCliAvailable(): boolean {
  try {
    execSync('claude --version', { encoding: 'utf-8', stdio: 'pipe' });
    return true;
  } catch {
    return false;
  }
}

/**
 * Claude Code CLI を使用してテキストを日本語に翻訳
 */
function translateText(englishText: string, product: Product): string | null {
  try {
    const productLabel = product === 'codex' ? 'OpenAI Codex' : 'Claude Code';
    const prompt = `以下の${productLabel}の変更履歴エントリを日本語に翻訳してください。

ルール:
- 技術用語は適切に訳す（例: fix → 修正、add → 追加、improve → 改善）
- 簡潔で自然な日本語にする
- 1行で翻訳
- 説明や前置きは不要、翻訳結果のみを出力

エントリ:
${englishText}`;

    // execFileSync を使用してシェル経由を避け、コマンドインジェクションを防止
    const result = execFileSync('claude', ['--print', '--model', 'sonnet', prompt], {
      encoding: 'utf-8',
      maxBuffer: 10 * 1024 * 1024,
      timeout: 60000,
    }).trim();

    // 複数行の場合は最初の非空行を使用
    const lines = result.split('\n').filter((line) => line.trim());
    return lines[0]?.trim() || null;
  } catch (error) {
    console.error('  翻訳エラー:', error);
    return null;
  }
}

/**
 * テーブル行をエスケープ済みパイプに対応して列分割
 * `\|` はセパレータではなくコンテンツの一部として扱う
 */
function splitTableRow(line: string): string[] {
  return line.split(/(?<!\\)\|/).map((c) => c.trim()).filter((c) => c);
}

/**
 * CHANGELOG ファイルから「（翻訳待ち）」エントリを検出
 */
function findPendingEntries(filePath: string): PendingEntry[] {
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

    // 「（翻訳待ち）」を含むテーブル行を検出
    if (currentVersion && line.includes(PENDING_MARKER)) {
      const cells = splitTableRow(line);
      // cells[0] = "（翻訳待ち）", cells[1] = "English text", cells[2]? = "category"
      if (cells.length >= 2 && cells[0] === PENDING_MARKER) {
        entries.push({
          version: currentVersion,
          lineNumber: i,
          englishText: cells[1].replace(/\\\|/g, '|').trim(),
          category: cells.length >= 3 ? cells[2] : null,
        });
      }
    }
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
 * コマンドライン引数をパース
 */
function parseArgs(): { product: Product; targetYear: number } {
  const args = process.argv.slice(2);
  let product: Product = 'claude-code';
  let yearArg: string | undefined;

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--product') {
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
    } else if (!args[i].startsWith('--')) {
      yearArg = args[i];
    }
  }

  const targetYear = yearArg ? parseInt(yearArg, 10) : getCurrentYearJst();
  if (isNaN(targetYear)) {
    console.error(`エラー: 無効な年: ${yearArg}`);
    process.exit(1);
  }

  return { product, targetYear };
}

/**
 * メイン処理
 */
async function main(): Promise<void> {
  console.log('=== 翻訳待ちエントリの再翻訳 ===\n');

  // Claude Code CLI の確認
  if (!isClaudeCliAvailable()) {
    console.error('エラー: Claude Code CLI が利用できません');
    console.error('  npm install -g @anthropic-ai/claude-code でインストールしてください');
    process.exit(1);
  }

  const { product, targetYear } = parseArgs();

  // コンテンツディレクトリを決定
  const contentDir = product === 'codex'
    ? path.join(process.cwd(), 'content', 'codex')
    : path.join(process.cwd(), 'content');

  const filePath = path.join(contentDir, `CHANGELOG_${targetYear}_JA.md`);
  const productLabel = product === 'codex' ? 'Codex' : 'Claude Code';
  console.log(`プロダクト: ${productLabel}`);
  console.log(`対象ファイル: ${filePath}`);

  if (!fs.existsSync(filePath)) {
    console.error(`エラー: ファイルが存在しません: ${filePath}`);
    process.exit(1);
  }

  // 翻訳待ちエントリを検出
  const pendingEntries = findPendingEntries(filePath);

  if (pendingEntries.length === 0) {
    console.log('\n翻訳待ちエントリはありません');
    return;
  }

  console.log(`\n翻訳待ちエントリ: ${pendingEntries.length}件`);
  for (const entry of pendingEntries) {
    console.log(`  - v${entry.version}: ${entry.englishText.substring(0, 50)}...`);
  }

  // 各エントリを翻訳
  let successCount = 0;
  let failCount = 0;

  for (const entry of pendingEntries) {
    console.log(`\n翻訳中: v${entry.version} - ${entry.englishText.substring(0, 40)}...`);

    const translation = translateText(entry.englishText, product);

    if (translation) {
      console.log(`  → ${translation}`);
      updateLine(filePath, entry.lineNumber, entry.englishText, translation, entry.category);
      successCount++;
    } else {
      console.log('  → 翻訳失敗（スキップ）');
      failCount++;
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
