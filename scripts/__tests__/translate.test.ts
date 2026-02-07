import { describe, it, expect } from 'vitest';
import { parseTranslationsWithCategory } from '../translate';

describe('parseTranslationsWithCategory', () => {
  describe('strict パターン（||| 区切り）', () => {
    it('正常にパースできる', () => {
      const response = `1. バグを修正 ||| fixed
2. 新機能を追加 ||| added
3. パフォーマンスを改善 ||| improved`;

      const results = parseTranslationsWithCategory(response);
      expect(results).toHaveLength(3);
      expect(results[0]).toEqual({ translation: 'バグを修正', category: 'fixed' });
      expect(results[1]).toEqual({ translation: '新機能を追加', category: 'added' });
      expect(results[2]).toEqual({ translation: 'パフォーマンスを改善', category: 'improved' });
    });
  });

  describe('strict パターン（| 区切り）', () => {
    it('正常にパースできる', () => {
      const response = `1. バグを修正 | fixed
2. 新機能を追加 | added`;

      const results = parseTranslationsWithCategory(response);
      expect(results).toHaveLength(2);
      expect(results[0]).toEqual({ translation: 'バグを修正', category: 'fixed' });
      expect(results[1]).toEqual({ translation: '新機能を追加', category: 'added' });
    });
  });

  describe('strict パターン（角括弧 [cat]）', () => {
    it('正常にパースできる', () => {
      const response = `1. 設定を変更 [changed]
2. その他 [other]`;

      const results = parseTranslationsWithCategory(response);
      expect(results).toHaveLength(2);
      expect(results[0]).toEqual({ translation: '設定を変更', category: 'changed' });
      expect(results[1]).toEqual({ translation: 'その他', category: 'other' });
    });
  });

  describe('strict パターン（丸括弧 (cat)）', () => {
    it('正常にパースできる', () => {
      const response = `1. バグを修正 (fixed)
2. 新機能を追加 (added)`;

      const results = parseTranslationsWithCategory(response);
      expect(results).toHaveLength(2);
      expect(results[0]).toEqual({ translation: 'バグを修正', category: 'fixed' });
      expect(results[1]).toEqual({ translation: '新機能を追加', category: 'added' });
    });
  });

  describe('大文字・混合ケース', () => {
    it('toLowerCase() で正規化される', () => {
      const response = `1. バグを修正 ||| Fixed
2. 新機能を追加 ||| ADDED
3. 改善 ||| Improved`;

      const results = parseTranslationsWithCategory(response);
      expect(results).toHaveLength(3);
      expect(results[0].category).toBe('fixed');
      expect(results[1].category).toBe('added');
      expect(results[2].category).toBe('improved');
    });
  });

  describe('無効カテゴリ → loose パターン', () => {
    it('翻訳テキストは保持、カテゴリは other', () => {
      const response = `1. バグを修正 ||| bugfix
2. 新機能を追加 ||| new`;

      const results = parseTranslationsWithCategory(response);
      expect(results).toHaveLength(2);
      expect(results[0]).toEqual({ translation: 'バグを修正', category: 'other' });
      expect(results[1]).toEqual({ translation: '新機能を追加', category: 'other' });
    });

    it('角括弧の無効カテゴリ', () => {
      const response = `1. テスト [invalid-cat]`;

      const results = parseTranslationsWithCategory(response);
      expect(results).toHaveLength(1);
      expect(results[0]).toEqual({ translation: 'テスト', category: 'other' });
    });
  });

  describe('番号付きリストのみ（カテゴリなし）', () => {
    it('翻訳のみ取得、カテゴリは other', () => {
      const response = `1. バグを修正
2. 新機能を追加`;

      const results = parseTranslationsWithCategory(response);
      expect(results).toHaveLength(2);
      expect(results[0]).toEqual({ translation: 'バグを修正', category: 'other' });
      expect(results[1]).toEqual({ translation: '新機能を追加', category: 'other' });
    });
  });

  describe('空行の処理', () => {
    it('空行は無視される', () => {
      const response = `1. バグを修正 ||| fixed

2. 新機能を追加 ||| added`;

      const results = parseTranslationsWithCategory(response);
      expect(results).toHaveLength(2);
    });
  });

  describe('フォーマット混在', () => {
    it('異なるフォーマットが混在しても正しくパースする', () => {
      const response = `1. バグを修正 ||| fixed
2. 新機能を追加 | added
3. 設定を変更 [changed]
4. 改善 (improved)
5. その他の変更`;

      const results = parseTranslationsWithCategory(response);
      expect(results).toHaveLength(5);
      expect(results[0].category).toBe('fixed');
      expect(results[1].category).toBe('added');
      expect(results[2].category).toBe('changed');
      expect(results[3].category).toBe('improved');
      expect(results[4].category).toBe('other');
    });
  });
});
