import { describe, it, expect } from 'vitest';
import { getLegendItems } from '../legend';

const validClasses = ['added', 'fixed', 'changed', 'improved', 'other'];

describe('getLegendItems', () => {
  describe('Claude Code', () => {
    const items = getLegendItems('claude-code');

    it('5アイテムを返す', () => {
      expect(items).toHaveLength(5);
    });

    it('全 cls が有効なカラークラスである', () => {
      for (const item of items) {
        expect(validClasses).toContain(item.cls);
      }
    });

    it('ラベルが正しい順序で一致する', () => {
      expect(items.map((i) => i.label)).toEqual([
        '追加',
        '修正',
        '変更',
        '改善',
        'その他',
      ]);
    });
  });

  describe('Codex', () => {
    const items = getLegendItems('codex');

    it('4アイテムを返す', () => {
      expect(items).toHaveLength(4);
    });

    it('changed を含まない', () => {
      expect(items.map((i) => i.cls)).not.toContain('changed');
    });

    it('ラベルが正しい順序で一致する', () => {
      expect(items.map((i) => i.label)).toEqual([
        '新機能',
        'バグ修正',
        'ドキュメント',
        'その他',
      ]);
    });

    it('全 cls が有効なカラークラスである', () => {
      for (const item of items) {
        expect(validClasses).toContain(item.cls);
      }
    });
  });
});
