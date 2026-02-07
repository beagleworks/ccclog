import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { applyVersionUpdate } from '../retranslate';
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

  it('2列テーブルを正しく3列に変換する', () => {
    const content = `## 2.1.23

| 日本語 | English |
|--------|---------|
| バグを修正 | Fixed a bug |
| 新機能を追加 | Added new feature |
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

| 日本語 | English |
|--------|---------|
| テスト | Test entry |
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

| 日本語 | English |
|--------|---------|
| 別のエントリ | Another entry |

## 2.1.23

| 日本語 | English |
|--------|---------|
| 変換対象 | Target entry |
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

    // 最初のバージョンは2列のまま
    expect(lines[2]).toBe('| 日本語 | English |');
    expect(lines[3]).toBe('|--------|---------|');
    expect(lines[4]).toBe('| 別のエントリ | Another entry |');

    // 2番目のバージョンは3列に変換
    expect(lines[8]).toBe('| 日本語 | English | Category |');
    expect(lines[9]).toBe('|--------|---------|----------|');
    expect(lines[10]).toBe('| 変換対象 | Target entry | fixed |');
  });
});
