import { describe, expect, it } from 'vitest';
import {
  isSingleJapaneseCharacterQuery,
  normalizeJapaneseText,
  toJapaneseBigrams,
  tokenizeEnglish,
  toUniqueTokens,
} from '../search-normalize';

describe('search-normalize', () => {
  it('日本語テキストは空白正規化のみ行う', () => {
    expect(normalizeJapaneseText('  日本語\n  テキスト ')).toBe('日本語 テキスト');
  });

  it('英語トークンを抽出する（ハイフン語と数字を含む）', () => {
    expect(tokenizeEnglish('Fix pre-commit hook in v2.1.3 (#1234)')).toEqual([
      'fix',
      'pre-commit',
      'hook',
      'in',
      'v2',
      '1',
      '3',
      '1234',
    ]);
  });

  it('英語トークン抽出は空白正規化と小文字化を行う', () => {
    expect(tokenizeEnglish('  Pre-COMMIT  Hook  ')).toEqual(['pre-commit', 'hook']);
    expect(tokenizeEnglish('I INFO')).toEqual(['i', 'info']);
  });

  it('重複トークンを排除する', () => {
    expect(toUniqueTokens(['a', 'b', 'a', 'c', 'b'])).toEqual(['a', 'b', 'c']);
  });

  it('日本語2-gramを生成する', () => {
    expect(toJapaneseBigrams('検索結果')).toEqual(['検索', '索結', '結果']);
  });

  it('日本語1文字クエリを検出する', () => {
    expect(isSingleJapaneseCharacterQuery('検')).toBe(true);
    expect(isSingleJapaneseCharacterQuery('a')).toBe(false);
    expect(isSingleJapaneseCharacterQuery('検索')).toBe(false);
  });
});
