/**
 * 翻訳モジュール — Claude Code CLI を使用した変更履歴エントリの日本語翻訳
 *
 * 翻訳スタイル: 体言止め・である調（丁寧語不使用）
 */

import { execSync, execFileSync } from 'node:child_process';

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
