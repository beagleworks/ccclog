/**
 * 翻訳モジュール — Claude Code CLI を使用した変更履歴エントリの日本語翻訳
 *
 * 翻訳スタイル: 体言止め・である調（丁寧語不使用）
 */

import { execSync, execFileSync } from 'node:child_process';
import type { ClaudeCodeCategory } from './parse-changelog.js';

/**
 * Claude Code CLI が利用可能かチェック
 */
export function isClaudeCliAvailable(): boolean {
  try {
    execSync('claude --version', { encoding: 'utf-8', stdio: 'pipe' });
    return true;
  } catch {
    return false;
  }
}

/**
 * 複数エントリを一括翻訳
 * CLI が利用不可またはエラーの場合は null を返す
 */
export function translateBatch(entries: string[], productLabel: string): string[] | null {
  if (entries.length === 0) return [];

  if (!isClaudeCliAvailable()) {
    console.log('  Claude Code CLI が利用できないため翻訳をスキップします');
    return null;
  }

  try {
    const entriesText = entries.map((e, i) => `${i + 1}. ${e}`).join('\n');

    const prompt = `以下の${productLabel}の変更履歴エントリを日本語に翻訳してください。

ルール:
- 技術用語は適切に訳す（例: fix → 修正、add → 追加、improve → 改善）
- 簡潔で自然な日本語にする
- 体言止め、またはである調で統一する（例: 「〜を修正」「〜を追加」「〜に対応」）
- 「〜しました」「〜します」のような丁寧語は使用しない
- 各エントリを1行で翻訳
- 番号付きリスト形式で出力（入力と同じ形式）
- 説明や前置きは不要、翻訳結果のみを出力

エントリ:
${entriesText}`;

    const responseText = execFileSync('claude', ['--print', '--model', 'sonnet', prompt], {
      encoding: 'utf-8',
      maxBuffer: 10 * 1024 * 1024,
      timeout: 60000,
    }).trim();

    // 番号付きリストから翻訳を抽出
    const lines = responseText.split('\n').filter((line) => line.trim());
    const translations: string[] = [];

    for (const line of lines) {
      const match = line.match(/^\d+\.\s*(.+)$/);
      if (match) {
        translations.push(match[1].trim());
      }
    }

    // フォールバック: 1件のみかつ番号抽出できなかった場合、最初の非空行を採用
    if (translations.length === 0 && entries.length === 1 && lines.length > 0) {
      translations.push(lines[0].trim());
    }

    // 入力と出力の数が一致するか確認
    if (translations.length !== entries.length) {
      console.warn(
        `  警告: 翻訳数が一致しません（入力: ${entries.length}, 出力: ${translations.length}）`
      );
      return null;
    }

    return translations;
  } catch (error) {
    console.error('  翻訳中にエラーが発生しました:', error);
    return null;
  }
}

/**
 * 単一エントリを翻訳
 * CLI が利用不可またはエラーの場合は null を返す
 */
export function translateOne(text: string, productLabel: string): string | null {
  const results = translateBatch([text], productLabel);
  return results?.[0] ?? null;
}

// ---------------------------------------------------------------------------
// 翻訳 + カテゴリ分類
// ---------------------------------------------------------------------------

export interface TranslationWithCategory {
  translation: string;
  category: ClaudeCodeCategory;
}

/** カテゴリとして有効な値 */
const VALID_CLAUDE_CATEGORIES: readonly ClaudeCodeCategory[] = [
  'added',
  'fixed',
  'changed',
  'improved',
  'other',
];

const CAT = '(added|fixed|changed|improved|other)';

/** strict: 有効カテゴリのみ受理 */
const strictPatterns = [
  new RegExp(`^\\d+\\.\\s*(.+?)\\s*\\|\\|\\|\\s*${CAT}\\s*$`, 'i'),
  new RegExp(`^\\d+\\.\\s*(.+?)\\s*\\|\\s*${CAT}\\s*$`, 'i'),
  new RegExp(`^\\d+\\.\\s*(.+?)\\s*\\[${CAT}\\]\\s*$`, 'i'),
  new RegExp(`^\\d+\\.\\s*(.+?)\\s*\\(${CAT}\\)\\s*$`, 'i'),
];

/** loose: 翻訳テキストのみ救済、カテゴリは 'other' */
const loosePatterns = [
  /^\d+\.\s*(.+?)\s*\|\|\|\s*\S+\s*$/,
  /^\d+\.\s*(.+?)\s*\|\s*\S+\s*$/,
  /^\d+\.\s*(.+?)\s*\[\S+\]\s*$/,
  /^\d+\.\s*(.+?)\s*\(\S+\)\s*$/,
];

/**
 * translateAndClassifyBatch のレスポンスをパース
 * @returns パース結果の配列。パース不能行は含まれない
 */
export function parseTranslationsWithCategory(
  responseText: string,
): TranslationWithCategory[] {
  const lines = responseText.split('\n').filter((line) => line.trim());
  const results: TranslationWithCategory[] = [];

  for (const line of lines) {
    // 1. strict パターン — 翻訳 + 有効カテゴリ
    let matched = false;
    for (const pattern of strictPatterns) {
      const m = line.match(pattern);
      if (m) {
        results.push({
          translation: m[1].trim(),
          category: m[2].toLowerCase() as ClaudeCodeCategory,
        });
        matched = true;
        break;
      }
    }
    if (matched) continue;

    // 2. loose パターン — 翻訳のみ救済、カテゴリは 'other'
    for (const pattern of loosePatterns) {
      const m = line.match(pattern);
      if (m) {
        results.push({
          translation: m[1].trim(),
          category: 'other',
        });
        matched = true;
        break;
      }
    }
    if (matched) continue;

    // 3. 番号付きリストのみ — 翻訳テキストのみ、カテゴリは 'other'
    const fallback = line.match(/^\d+\.\s*(.+)$/);
    if (fallback) {
      results.push({
        translation: fallback[1].trim(),
        category: 'other',
      });
    }
  }

  return results;
}

/**
 * 複数エントリを一括で翻訳+カテゴリ分類
 * CLI が利用不可またはエラーの場合は null を返す
 */
export function translateAndClassifyBatch(
  entries: string[],
  productLabel: string,
): TranslationWithCategory[] | null {
  if (entries.length === 0) return [];

  if (!isClaudeCliAvailable()) {
    console.log('  Claude Code CLI が利用できないため翻訳をスキップします');
    return null;
  }

  try {
    const entriesText = entries.map((e, i) => `${i + 1}. ${e}`).join('\n');

    const prompt = `以下の${productLabel}の変更履歴エントリを日本語に翻訳し、カテゴリを分類してください。

ルール:
- 技術用語は適切に訳す（例: fix → 修正、add → 追加、improve → 改善）
- 簡潔で自然な日本語にする
- 体言止め、またはである調で統一する（例: 「〜を修正」「〜を追加」「〜に対応」）
- 「〜しました」「〜します」のような丁寧語は使用しない
- 各エントリを1行で翻訳
- 番号付きリスト形式で出力
- 説明や前置きは不要、翻訳結果のみを出力

カテゴリ定義:
- added: 新機能の追加、新しいサポートの追加
- fixed: バグ修正、不具合の解消
- changed: 既存機能の変更、移動、削除、非推奨化
- improved: パフォーマンス改善、UX改善、エラーメッセージの改善
- other: 上記に当てはまらないもの

出力形式: 1. 翻訳テキスト ||| カテゴリ

エントリ:
${entriesText}`;

    const responseText = execFileSync('claude', ['--print', '--model', 'sonnet', prompt], {
      encoding: 'utf-8',
      maxBuffer: 10 * 1024 * 1024,
      timeout: 60000,
    }).trim();

    const results = parseTranslationsWithCategory(responseText);

    // 入力と出力の数が一致するか確認
    if (results.length !== entries.length) {
      console.warn(
        `  警告: 翻訳数が一致しません（入力: ${entries.length}, 出力: ${results.length}）`,
      );
      return null;
    }

    return results;
  } catch (error) {
    console.error('  翻訳+分類中にエラーが発生しました:', error);
    return null;
  }
}

/**
 * 単一エントリを翻訳+カテゴリ分類
 * CLI が利用不可またはエラーの場合は null を返す
 */
export function translateAndClassifyOne(
  text: string,
  productLabel: string,
): TranslationWithCategory | null {
  const results = translateAndClassifyBatch([text], productLabel);
  return results?.[0] ?? null;
}
