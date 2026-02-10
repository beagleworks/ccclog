import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { applyVersionUpdate, findPendingEntries, updateLine, assertCodexCategory, type PendingEntry } from '../retranslate';
import * as fs from 'node:fs';
import * as path from 'node:path';
import * as os from 'node:os';

describe('applyVersionUpdate', () => {
  let tmpDir: string;
  let tmpFile: string;

  beforeEach(() => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'retranslate-test-'));
    tmpFile = path.join(tmpDir, 'test.md');
  });

  afterEach(() => {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  it('既に3列のテーブルが正しく上書きされる', () => {
    const content = `## 2.1.23

| 日本語 | English | Category |
|--------|---------|----------|
| 古い翻訳 | Fixed a bug | other |
| 古い翻訳2 | Added new feature | other |
`;

    fs.writeFileSync(tmpFile, content, 'utf-8');

    applyVersionUpdate(tmpFile, {
      headerLineNumber: 2,
      separatorLineNumber: 3,
      entries: [
        { lineNumber: 4, japaneseText: 'バグを修正', englishText: 'Fixed a bug', category: 'fixed' },
        { lineNumber: 5, japaneseText: '新機能を追加', englishText: 'Added new feature', category: 'added' },
      ],
    });

    const result = fs.readFileSync(tmpFile, 'utf-8');
    const lines = result.split('\n');

    expect(lines[2]).toBe('| 日本語 | English | Category |');
    expect(lines[3]).toBe('|--------|---------|----------|');
    expect(lines[4]).toBe('| バグを修正 | Fixed a bug | fixed |');
    expect(lines[5]).toBe('| 新機能を追加 | Added new feature | added |');
  });

  it('パイプ文字をエスケープする', () => {
    const content = `## 1.0.0

| 日本語 | English | Category |
|--------|---------|----------|
| テスト | Test entry | other |
`;

    fs.writeFileSync(tmpFile, content, 'utf-8');

    applyVersionUpdate(tmpFile, {
      headerLineNumber: 2,
      separatorLineNumber: 3,
      entries: [
        { lineNumber: 4, japaneseText: 'foo | bar', englishText: 'baz | qux', category: 'other' },
      ],
    });

    const result = fs.readFileSync(tmpFile, 'utf-8');
    const lines = result.split('\n');

    expect(lines[4]).toBe('| foo \\| bar | baz \\| qux | other |');
  });

  it('他のバージョンセクションに影響しない', () => {
    const content = `## 2.1.24

| 日本語 | English | Category |
|--------|---------|----------|
| 別のエントリ | Another entry | added |

## 2.1.23

| 日本語 | English | Category |
|--------|---------|----------|
| 変換対象 | Target entry | other |
`;

    fs.writeFileSync(tmpFile, content, 'utf-8');

    applyVersionUpdate(tmpFile, {
      headerLineNumber: 8,
      separatorLineNumber: 9,
      entries: [
        { lineNumber: 10, japaneseText: '変換対象', englishText: 'Target entry', category: 'fixed' },
      ],
    });

    const result = fs.readFileSync(tmpFile, 'utf-8');
    const lines = result.split('\n');

    // 最初のバージョンは変更なし
    expect(lines[2]).toBe('| 日本語 | English | Category |');
    expect(lines[3]).toBe('|--------|---------|----------|');
    expect(lines[4]).toBe('| 別のエントリ | Another entry | added |');

    // 2番目のバージョンのみ変更
    expect(lines[8]).toBe('| 日本語 | English | Category |');
    expect(lines[9]).toBe('|--------|---------|----------|');
    expect(lines[10]).toBe('| 変換対象 | Target entry | fixed |');
  });
});

describe('findPendingEntries', () => {
  let tmpDir: string;
  let tmpFile: string;

  beforeEach(() => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'retranslate-find-'));
    tmpFile = path.join(tmpDir, 'test.md');
  });

  afterEach(() => {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  it('翻訳待ちエントリを正しく検出する', () => {
    const content = `## 2.1.23

| 日本語 | English | Category |
|--------|---------|----------|
| （翻訳待ち） | Fixed a bug | fixed |
| 既存の翻訳 | Added feature | added |
`;

    fs.writeFileSync(tmpFile, content, 'utf-8');
    const entries = findPendingEntries(tmpFile);

    expect(entries).toHaveLength(1);
    expect(entries[0].englishText).toBe('Fixed a bug');
    expect(entries[0].category).toBe('fixed');
    expect(entries[0].version).toBe('2.1.23');
  });

  it('forceAll で全エントリを返す', () => {
    const content = `## 2.1.23

| 日本語 | English | Category |
|--------|---------|----------|
| バグ修正 | Fixed a bug | fixed |
| 機能追加 | Added feature | added |
`;

    fs.writeFileSync(tmpFile, content, 'utf-8');
    const entries = findPendingEntries(tmpFile, true);

    expect(entries).toHaveLength(2);
    expect(entries[0].category).toBe('fixed');
    expect(entries[1].category).toBe('added');
  });
});

describe('updateLine', () => {
  let tmpDir: string;
  let tmpFile: string;

  beforeEach(() => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'retranslate-update-'));
    tmpFile = path.join(tmpDir, 'test.md');
  });

  afterEach(() => {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  it('3列テーブルの行を正しく更新する', () => {
    const content = `## 1.0.0

| 日本語 | English | Category |
|--------|---------|----------|
| （翻訳待ち） | Test entry | other |
`;

    fs.writeFileSync(tmpFile, content, 'utf-8');
    updateLine(tmpFile, 4, 'Test entry', '翻訳済み', 'added');

    const result = fs.readFileSync(tmpFile, 'utf-8');
    const lines = result.split('\n');
    expect(lines[4]).toBe('| 翻訳済み | Test entry | added |');
  });

  it('Codex カテゴリを保持する', () => {
    const content = `## 0.95.0

| 日本語 | English | Category |
|--------|---------|----------|
| （翻訳待ち） | New feature | new-features |
`;

    fs.writeFileSync(tmpFile, content, 'utf-8');
    updateLine(tmpFile, 4, 'New feature', '新機能', 'new-features');

    const result = fs.readFileSync(tmpFile, 'utf-8');
    const lines = result.split('\n');
    expect(lines[4]).toBe('| 新機能 | New feature | new-features |');
  });
});

describe('assertCodexCategory', () => {
  it('カテゴリが存在する場合はエラーにならない', () => {
    const entry: PendingEntry = {
      version: '3.5.1',
      lineNumber: 42,
      englishText: 'Some feature',
      category: 'new-features',
    };
    expect(() => assertCodexCategory(entry)).not.toThrow();
  });

  it('カテゴリが null の場合はエラーになる', () => {
    const entry: PendingEntry = {
      version: '3.5.1',
      lineNumber: 42,
      englishText: 'Some feature',
      category: null,
    };
    expect(() => assertCodexCategory(entry)).toThrow(/Codex エントリにカテゴリがありません/);
  });

  it('エラーメッセージにバージョンと行番号が含まれる', () => {
    const entry: PendingEntry = {
      version: '3.5.1',
      lineNumber: 42,
      englishText: 'Some feature',
      category: null,
    };
    expect(() => assertCodexCategory(entry)).toThrow(/v3\.5\.1/);
    expect(() => assertCodexCategory(entry)).toThrow(/行42/);
  });
});

describe('main() Codex fail-fast 結合テスト', () => {
  let tmpDir: string;
  let savedArgv: string[];
  let savedCwd: string;

  beforeEach(() => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'retranslate-main-'));
    savedArgv = process.argv;
    savedCwd = process.cwd();

    // content/codex ディレクトリを作成
    fs.mkdirSync(path.join(tmpDir, 'content', 'codex'), { recursive: true });
    process.chdir(tmpDir);
  });

  afterEach(() => {
    process.argv = savedArgv;
    process.chdir(savedCwd);
    fs.rmSync(tmpDir, { recursive: true, force: true });
    vi.restoreAllMocks();
  });

  it('Codex 通常モード: category 欠損で throw', async () => {
    // カテゴリ列がない2列テーブル（Codex のデータ異常）
    const content = `## 0.95.0

| 日本語 | English |
|--------|---------|
| （翻訳待ち） | Some new feature |
`;
    fs.writeFileSync(
      path.join(tmpDir, 'content', 'codex', 'CHANGELOG_2099_JA.md'),
      content,
      'utf-8'
    );

    // translate モジュールをモック
    const translate = await import('../translate.js');
    vi.spyOn(translate, 'isClaudeCliAvailable').mockReturnValue(true);
    vi.spyOn(translate, 'translateOne').mockReturnValue('翻訳済み');

    // process.exit をモック（parseArgs 内で呼ばれる可能性を防止）
    vi.spyOn(process, 'exit').mockImplementation(() => { throw new Error('process.exit called'); });

    process.argv = ['node', 'retranslate.ts', '--product', 'codex', '2099'];

    const { main } = await import('../retranslate');
    await expect(main()).rejects.toThrow(/Codex エントリにカテゴリがありません/);
  });

  it('Codex --retranslate-all: category 欠損で throw', async () => {
    // カテゴリ列がない2列テーブル
    const content = `## 0.95.0

| 日本語 | English |
|--------|---------|
| 既存翻訳 | Some new feature |
`;
    fs.writeFileSync(
      path.join(tmpDir, 'content', 'codex', 'CHANGELOG_2099_JA.md'),
      content,
      'utf-8'
    );

    // translate モジュールをモック
    const translate = await import('../translate.js');
    vi.spyOn(translate, 'isClaudeCliAvailable').mockReturnValue(true);
    vi.spyOn(translate, 'translateBatch').mockReturnValue(['翻訳済み']);

    // process.exit をモック
    vi.spyOn(process, 'exit').mockImplementation(() => { throw new Error('process.exit called'); });

    process.argv = ['node', 'retranslate.ts', '--retranslate-all', '--product', 'codex', '2099'];

    const { main } = await import('../retranslate');
    await expect(main()).rejects.toThrow(/Codex エントリにカテゴリがありません/);
  });
});
