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
  });

  describe('Claude Code カテゴリ5種', () => {
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

  describe('Claude Code: 無効な category → other', () => {
    it('new-features（Codex カテゴリ）が誤混入 → other', () => {
      const entry: Entry = { ja: 'テスト', en: 'Added a new feature', category: 'new-features' as any };
      expect(getEntryType(entry, 'claude-code')).toBe('other');
    });

    it('無効な category → other', () => {
      const entry: Entry = { ja: 'テスト', en: 'Some random change', category: 'invalid' as any };
      expect(getEntryType(entry, 'claude-code')).toBe('other');
    });
  });

  describe('Codex カテゴリ4種の回帰テスト', () => {
    const cases: Array<[string, string]> = [
      ['new-features', 'added'],
      ['bug-fixes', 'fixed'],
      ['documentation', 'improved'],
      ['chores', 'other'],
    ];

    for (const [category, expected] of cases) {
      it(`${category} → ${expected}`, () => {
        const entry: Entry = { ja: 'テスト', en: 'Test', category: category as any };
        expect(getEntryType(entry, 'codex')).toBe(expected);
      });
    }
  });
});
