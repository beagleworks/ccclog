import { describe, it, expect } from 'vitest';
import {
  compareVersions,
  findSectionBoundaries,
  generateVersionSection,
} from '../codex-changelog-utils.ts';

describe('compareVersions', () => {
  it('同じバージョンは 0 を返す', () => {
    expect(compareVersions('1.2.3', '1.2.3')).toBe(0);
  });

  it('v1 < v2 なら負の値を返す', () => {
    expect(compareVersions('0.1.0', '0.2.0')).toBeLessThan(0);
    expect(compareVersions('0.9.0', '1.0.0')).toBeLessThan(0);
    expect(compareVersions('1.0.0', '1.0.1')).toBeLessThan(0);
  });

  it('v1 > v2 なら正の値を返す', () => {
    expect(compareVersions('0.2.0', '0.1.0')).toBeGreaterThan(0);
    expect(compareVersions('1.0.0', '0.9.0')).toBeGreaterThan(0);
    expect(compareVersions('1.0.1', '1.0.0')).toBeGreaterThan(0);
  });

  it('メジャー > マイナー > パッチの優先順位', () => {
    expect(compareVersions('2.0.0', '1.99.99')).toBeGreaterThan(0);
    expect(compareVersions('1.10.0', '1.9.99')).toBeGreaterThan(0);
  });
});

describe('findSectionBoundaries', () => {
  it('セクション境界を正しく検出する', () => {
    const content = `# Header

---

## 1.2.0

| 日本語 | English | Category |
|--------|---------|----------|
| テスト | test | chores |

## 1.1.0

| 日本語 | English | Category |
|--------|---------|----------|
| テスト2 | test2 | chores |

## 1.0.0

| 日本語 | English | Category |
|--------|---------|----------|
| テスト3 | test3 | chores |
`;

    const boundaries = findSectionBoundaries(content);
    expect(boundaries).toHaveLength(3);
    expect(boundaries[0].version).toBe('1.2.0');
    expect(boundaries[1].version).toBe('1.1.0');
    expect(boundaries[2].version).toBe('1.0.0');

    // end は次のセクションの start
    expect(boundaries[0].end).toBe(boundaries[1].start);
    expect(boundaries[1].end).toBe(boundaries[2].start);
    // 最後のセクションの end はコンテンツ末尾
    expect(boundaries[2].end).toBe(content.length);
  });

  it('セクションが0個の場合は空配列', () => {
    const content = `# Header\n\n---\n\nNo sections here.\n`;
    expect(findSectionBoundaries(content)).toEqual([]);
  });

  it('バージョン以外の ## は無視する', () => {
    const content = `## Not a version\n\n## 1.0.0\n\nContent\n`;
    const boundaries = findSectionBoundaries(content);
    expect(boundaries).toHaveLength(1);
    expect(boundaries[0].version).toBe('1.0.0');
  });
});

describe('generateVersionSection', () => {
  it('エントリ0件時はプレースホルダーを出力', () => {
    const section = generateVersionSection('0.5.0', [], null);
    expect(section).toContain('## 0.5.0');
    expect(section).toContain('(No changelog entries)');
    expect(section).toContain('chores');
  });

  it('エントリありの場合は3列テーブルを生成', () => {
    const entries = [
      { text: 'Add feature X', category: 'new-features' as const },
      { text: 'Fix bug Y', category: 'bug-fixes' as const },
    ];
    const translations = ['機能 X を追加', 'バグ Y を修正'];

    const section = generateVersionSection('1.0.0', entries, translations);
    expect(section).toContain('## 1.0.0');
    expect(section).toContain('| 機能 X を追加 | Add feature X | new-features |');
    expect(section).toContain('| バグ Y を修正 | Fix bug Y | bug-fixes |');
  });

  it('翻訳が null の場合は（翻訳待ち）を表示', () => {
    const entries = [{ text: 'Something', category: 'chores' as const }];
    const section = generateVersionSection('0.1.0', entries, null);
    expect(section).toContain('（翻訳待ち）');
  });

  it('日本語テキスト内の | をエスケープ', () => {
    const entries = [{ text: 'Test', category: 'chores' as const }];
    const translations = ['パイプ|テスト'];
    const section = generateVersionSection('0.1.0', entries, translations);
    expect(section).toContain('パイプ\\|テスト');
  });
});
