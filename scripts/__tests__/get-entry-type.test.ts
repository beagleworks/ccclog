import { describe, it, expect } from 'vitest';
import { getEntryType, type Entry } from '../../src/lib/get-entry-type';

describe('getEntryType', () => {
  describe('Codex マッピング', () => {
    it('new-features → added', () => {
      const entry: Entry = { ja: 'テスト', en: 'Test', category: 'new-features' };
      expect(getEntryType(entry, 'codex')).toBe('added');
    });

    it('bug-fixes → fixed', () => {
      const entry: Entry = { ja: 'テスト', en: 'Test', category: 'bug-fixes' };
      expect(getEntryType(entry, 'codex')).toBe('fixed');
    });

    it('documentation → improved', () => {
      const entry: Entry = { ja: 'テスト', en: 'Test', category: 'documentation' };
      expect(getEntryType(entry, 'codex')).toBe('improved');
    });

    it('chores → other', () => {
      const entry: Entry = { ja: 'テスト', en: 'Test', category: 'chores' };
      expect(getEntryType(entry, 'codex')).toBe('other');
    });

    it('category なし → other', () => {
      const entry: Entry = { ja: 'テスト', en: 'Test' };
      expect(getEntryType(entry, 'codex')).toBe('other');
    });
  });

  describe('Claude Code: category フィールド優先', () => {
    it('added がそのまま返る', () => {
      const entry: Entry = { ja: 'テスト', en: 'Test', category: 'added' };
      expect(getEntryType(entry, 'claude-code')).toBe('added');
    });

    it('fixed がそのまま返る', () => {
      const entry: Entry = { ja: 'テスト', en: 'Test', category: 'fixed' };
      expect(getEntryType(entry, 'claude-code')).toBe('fixed');
    });

    it('changed がそのまま返る', () => {
      const entry: Entry = { ja: 'テスト', en: 'Test', category: 'changed' };
      expect(getEntryType(entry, 'claude-code')).toBe('changed');
    });

    it('improved がそのまま返る', () => {
      const entry: Entry = { ja: 'テスト', en: 'Test', category: 'improved' };
      expect(getEntryType(entry, 'claude-code')).toBe('improved');
    });

    it('other がそのまま返る', () => {
      const entry: Entry = { ja: 'テスト', en: 'Test', category: 'other' };
      expect(getEntryType(entry, 'claude-code')).toBe('other');
    });
  });

  describe('Claude Code: category なし → キーワード判定フォールバック', () => {
    it('Added を含む → added', () => {
      const entry: Entry = { ja: 'テスト', en: 'Added new feature' };
      expect(getEntryType(entry, 'claude-code')).toBe('added');
    });

    it('Fixed を含む → fixed', () => {
      const entry: Entry = { ja: 'テスト', en: 'Fixed a bug' };
      expect(getEntryType(entry, 'claude-code')).toBe('fixed');
    });

    it('Changed を含む → changed', () => {
      const entry: Entry = { ja: 'テスト', en: 'Changed the default value' };
      expect(getEntryType(entry, 'claude-code')).toBe('changed');
    });

    it('Improved を含む → improved', () => {
      const entry: Entry = { ja: 'テスト', en: 'Improved error messages' };
      expect(getEntryType(entry, 'claude-code')).toBe('improved');
    });

    it('Enabled を含む → other（enabled は分類キーワード対象外）', () => {
      const entry: Entry = { ja: 'テスト', en: 'Enabled dark mode' };
      expect(getEntryType(entry, 'claude-code')).toBe('other');
    });

    it('キーワードなし → other', () => {
      const entry: Entry = { ja: 'テスト', en: 'The feature is now available' };
      expect(getEntryType(entry, 'claude-code')).toBe('other');
    });
  });

  describe('Claude Code: 無効な category → フォールバック', () => {
    it('new-features（Codex カテゴリ）が誤混入 → キーワード判定', () => {
      const entry: Entry = { ja: 'テスト', en: 'Added a new feature', category: 'new-features' as any };
      expect(getEntryType(entry, 'claude-code')).toBe('added');
    });

    it('無効な category + キーワードなし → other', () => {
      const entry: Entry = { ja: 'テスト', en: 'Some random change', category: 'invalid' as any };
      expect(getEntryType(entry, 'claude-code')).toBe('other');
    });
  });

  describe('追加のキーワード判定', () => {
    it('Removed → changed', () => {
      const entry: Entry = { ja: 'テスト', en: 'Removed deprecated feature' };
      expect(getEntryType(entry, 'claude-code')).toBe('changed');
    });

    it('Updated → changed', () => {
      const entry: Entry = { ja: 'テスト', en: 'Updated dependencies' };
      expect(getEntryType(entry, 'claude-code')).toBe('changed');
    });

    it('Deprecated → changed', () => {
      const entry: Entry = { ja: 'テスト', en: 'Deprecated old API' };
      expect(getEntryType(entry, 'claude-code')).toBe('changed');
    });

    it('bugfix → fixed', () => {
      const entry: Entry = { ja: 'テスト', en: 'Various bugfix improvements' };
      expect(getEntryType(entry, 'claude-code')).toBe('fixed');
    });

    it('Reduced → fixed', () => {
      const entry: Entry = { ja: 'テスト', en: 'Reduced memory usage' };
      expect(getEntryType(entry, 'claude-code')).toBe('fixed');
    });
  });
});
