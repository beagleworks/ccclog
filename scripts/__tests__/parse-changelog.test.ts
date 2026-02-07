import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { parseChangelog, extractEntriesByVersion } from '../parse-changelog';

describe('parseChangelog', () => {
  let warnSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    warnSpy.mockRestore();
  });

  describe('2列テーブル（Claude Code 旧形式）', () => {
    const content = `## 2.1.23

| 日本語 | English |
|--------|---------|
| バグを修正 | Fixed a bug |
| 新機能を追加 | Added new feature |
`;

    it('category は undefined になる', () => {
      const versions = parseChangelog(content);
      expect(versions).toHaveLength(1);
      expect(versions[0].version).toBe('2.1.23');
      expect(versions[0].entries).toHaveLength(2);
      expect(versions[0].entries[0].category).toBeUndefined();
      expect(versions[0].entries[1].category).toBeUndefined();
    });

    it('ja と en が正しくパースされる', () => {
      const versions = parseChangelog(content);
      expect(versions[0].entries[0]).toEqual({
        ja: 'バグを修正',
        en: 'Fixed a bug',
      });
    });
  });

  describe('3列テーブル（Claude Code 新形式）', () => {
    const content = `## 2.1.24

| 日本語 | English | Category |
|--------|---------|----------|
| バグを修正 | Fixed a bug | fixed |
| 新機能を追加 | Added new feature | added |
| パフォーマンスを改善 | Improved performance | improved |
| 設定を変更 | Changed settings | changed |
| その他の変更 | Other changes | other |
`;

    it('category が正しく設定される', () => {
      const versions = parseChangelog(content, 'claude-code');
      expect(versions[0].entries).toHaveLength(5);
      expect(versions[0].entries[0].category).toBe('fixed');
      expect(versions[0].entries[1].category).toBe('added');
      expect(versions[0].entries[2].category).toBe('improved');
      expect(versions[0].entries[3].category).toBe('changed');
      expect(versions[0].entries[4].category).toBe('other');
    });
  });

  describe('3列テーブル（Codex）', () => {
    const content = `## 0.1.2505301544

| 日本語 | English | Category |
|--------|---------|----------|
| 新機能 | New feature | new-features |
| バグ修正 | Bug fix | bug-fixes |
| ドキュメント更新 | Documentation update | documentation |
| メンテナンス作業 | Maintenance | chores |
`;

    it('Codex カテゴリが正しく設定される', () => {
      const versions = parseChangelog(content, 'codex');
      expect(versions[0].entries).toHaveLength(4);
      expect(versions[0].entries[0].category).toBe('new-features');
      expect(versions[0].entries[1].category).toBe('bug-fixes');
      expect(versions[0].entries[2].category).toBe('documentation');
      expect(versions[0].entries[3].category).toBe('chores');
    });
  });

  describe('2列/3列混在ファイル', () => {
    const content = `## 2.1.24

| 日本語 | English | Category |
|--------|---------|----------|
| 新機能 | Added feature | added |

## 2.1.23

| 日本語 | English |
|--------|---------|
| バグ修正 | Fixed bug |
`;

    it('各バージョンの列数を正しく検出する', () => {
      const versions = parseChangelog(content, 'claude-code');
      expect(versions).toHaveLength(2);

      // 3列バージョン
      expect(versions[0].entries[0].category).toBe('added');

      // 2列バージョン
      expect(versions[1].entries[0].category).toBeUndefined();
    });
  });

  describe('プロダクト文脈付きカテゴリ検証', () => {
    const content = `## 1.0.0

| 日本語 | English | Category |
|--------|---------|----------|
| テスト | Test entry | added |
`;

    it('Codex ファイルに Claude Code カテゴリがあれば警告', () => {
      const versions = parseChangelog(content, 'codex');
      expect(versions[0].entries[0].category).toBeUndefined();
      expect(warnSpy).toHaveBeenCalledWith(
        expect.stringContaining('Codex に無効なカテゴリ')
      );
    });

    const codexContent = `## 1.0.0

| 日本語 | English | Category |
|--------|---------|----------|
| テスト | Test entry | new-features |
`;

    it('Claude Code ファイルに Codex カテゴリがあれば警告', () => {
      const versions = parseChangelog(codexContent, 'claude-code');
      expect(versions[0].entries[0].category).toBeUndefined();
      expect(warnSpy).toHaveBeenCalledWith(
        expect.stringContaining('Claude Code に無効なカテゴリ')
      );
    });

    it('product 未指定なら全カテゴリを許容', () => {
      const versions1 = parseChangelog(content);
      expect(versions1[0].entries[0].category).toBe('added');

      const versions2 = parseChangelog(codexContent);
      expect(versions2[0].entries[0].category).toBe('new-features');
    });
  });

  describe('extractEntriesByVersion', () => {
    const content = `## 2.1.24

| 日本語 | English | Category |
|--------|---------|----------|
| 新機能 | Added feature | added |

## 2.1.23

| 日本語 | English |
|--------|---------|
| バグ修正 | Fixed bug |
`;

    it('バージョンごとのMapを返す', () => {
      const map = extractEntriesByVersion(content, 'claude-code');
      expect(map.size).toBe(2);
      expect(map.get('2.1.24')).toHaveLength(1);
      expect(map.get('2.1.23')).toHaveLength(1);
    });

    it('product パラメータが伝播する', () => {
      const map = extractEntriesByVersion(content, 'claude-code');
      expect(map.get('2.1.24')![0].category).toBe('added');
    });
  });

  describe('パイプエスケープ', () => {
    const content = `## 1.0.0

| 日本語 | English |
|--------|---------|
| foo \\| bar | baz \\| qux |
`;

    it('エスケープ済みパイプを正しく処理', () => {
      const versions = parseChangelog(content);
      expect(versions[0].entries[0].ja).toBe('foo | bar');
      expect(versions[0].entries[0].en).toBe('baz | qux');
    });
  });
});
