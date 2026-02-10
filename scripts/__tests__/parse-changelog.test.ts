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

  describe('2列テーブル（非対応）', () => {
    const content = `## 2.1.23

| 日本語 | English |
|--------|---------|
| バグを修正 | Fixed a bug |
`;

    it('例外を投げる', () => {
      expect(() => parseChangelog(content, 'claude-code')).toThrow(
        /非対応の2列テーブル/
      );
    });
  });

  describe('3列テーブル（Claude Code）', () => {
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

  describe('3列で category 欠損', () => {
    const content = `## 2.1.24

| 日本語 | English | Category |
|--------|---------|----------|
| 新機能 | Added feature |  |
`;

    it('例外を投げる（空白のみ）', () => {
      expect(() => parseChangelog(content, 'claude-code')).toThrow(
        /Category 列が欠損/
      );
    });

    const contentMissing = `## 2.1.24

| 日本語 | English | Category |
|--------|---------|----------|
| 新機能 | Added feature |
`;

    it('例外を投げる（列自体がない）', () => {
      expect(() => parseChangelog(contentMissing, 'claude-code')).toThrow(
        /Category 列が欠損/
      );
    });
  });

  describe('プロダクト文脈付きカテゴリ検証', () => {
    const content = `## 1.0.0

| 日本語 | English | Category |
|--------|---------|----------|
| テスト | Test entry | added |
`;

    it('Codex ファイルに Claude Code カテゴリがあれば other にフォールバック', () => {
      const versions = parseChangelog(content, 'codex');
      expect(versions[0].entries[0].category).toBe('other');
      expect(warnSpy).toHaveBeenCalledWith(
        expect.stringContaining('Codex に無効なカテゴリ')
      );
    });

    const codexContent = `## 1.0.0

| 日本語 | English | Category |
|--------|---------|----------|
| テスト | Test entry | new-features |
`;

    it('Claude Code ファイルに Codex カテゴリがあれば other にフォールバック', () => {
      const versions = parseChangelog(codexContent, 'claude-code');
      expect(versions[0].entries[0].category).toBe('other');
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

  describe('無効 category のフォールバック', () => {
    it('claude-code で無効値は other になる', () => {
      const content = `## 1.0.0

| 日本語 | English | Category |
|--------|---------|----------|
| テスト | Test entry | invalid-cat |
`;
      const versions = parseChangelog(content, 'claude-code');
      expect(versions[0].entries[0].category).toBe('other');
    });

    it('codex で無効値は other になる', () => {
      const content = `## 1.0.0

| 日本語 | English | Category |
|--------|---------|----------|
| テスト | Test entry | invalid-cat |
`;
      const versions = parseChangelog(content, 'codex');
      expect(versions[0].entries[0].category).toBe('other');
    });
  });

  describe('extractEntriesByVersion', () => {
    const content = `## 2.1.24

| 日本語 | English | Category |
|--------|---------|----------|
| 新機能 | Added feature | added |

## 2.1.23

| 日本語 | English | Category |
|--------|---------|----------|
| バグ修正 | Fixed bug | fixed |
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

| 日本語 | English | Category |
|--------|---------|----------|
| foo \\| bar | baz \\| qux | other |
`;

    it('エスケープ済みパイプを正しく処理', () => {
      const versions = parseChangelog(content);
      expect(versions[0].entries[0].ja).toBe('foo | bar');
      expect(versions[0].entries[0].en).toBe('baz | qux');
      expect(versions[0].entries[0].category).toBe('other');
    });
  });
});
