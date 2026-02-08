import { describe, it, expect } from 'vitest';
import {
  parseExtractionResponse,
  parseNumberedListFallback,
  findPlaceholderVersions,
  normalizeExtractedEntry,
} from '../backfill-legacy-codex.ts';

// ---------------------------------------------------------------------------
// parseExtractionResponse
// ---------------------------------------------------------------------------

describe('parseExtractionResponse', () => {
  it('正常な JSON 配列をパースできる', () => {
    const input = JSON.stringify([
      { en: 'Add feature X (#123)', ja: '機能 X を追加 (#123)', category: 'new-features' },
      { en: 'Fix bug Y (#456)', ja: 'バグ Y を修正 (#456)', category: 'bug-fixes' },
      { en: 'Update docs (#789)', ja: 'ドキュメントを更新 (#789)', category: 'documentation' },
    ]);

    const result = parseExtractionResponse(input);
    expect(result).toHaveLength(3);
    expect(result[0]).toEqual({
      english: 'Add feature X (#123)',
      japanese: '機能 X を追加 (#123)',
      category: 'new-features',
    });
    expect(result[1].category).toBe('bug-fixes');
    expect(result[2].category).toBe('documentation');
  });

  it('コードフェンスを除去してパースできる', () => {
    const input = '```json\n[{"en":"Test","ja":"テスト","category":"chores"}]\n```';
    const result = parseExtractionResponse(input);
    expect(result).toHaveLength(1);
    expect(result[0].english).toBe('Test');
  });

  it('空配列を正しく返す', () => {
    const result = parseExtractionResponse('[]');
    expect(result).toEqual([]);
  });

  it('不正なカテゴリを chores にフォールバック', () => {
    const input = JSON.stringify([
      { en: 'Some change', ja: 'なんか変更', category: 'bugfix' },
    ]);
    const result = parseExtractionResponse(input);
    expect(result).toHaveLength(1);
    expect(result[0].category).toBe('chores');
  });

  it('en/ja が欠落したエントリをフィルタ', () => {
    const input = JSON.stringify([
      { en: 'Valid', ja: 'OK', category: 'chores' },
      { en: 'Missing ja' },
      { ja: 'Missing en' },
      { en: 123, ja: 'Number en', category: 'chores' },
    ]);
    const result = parseExtractionResponse(input);
    expect(result).toHaveLength(1);
    expect(result[0].english).toBe('Valid');
  });

  it('JSON 失敗時にリストフォールバック', () => {
    const input = '1. 機能追加 ||| Add feature ||| new-features\n2. バグ修正 ||| Fix bug ||| bug-fixes';
    const result = parseExtractionResponse(input);
    expect(result).toHaveLength(2);
    expect(result[0].japanese).toBe('機能追加');
    expect(result[0].english).toBe('Add feature');
    expect(result[0].category).toBe('new-features');
  });

  it('配列でないJSON値は空配列を返す', () => {
    const result = parseExtractionResponse('{"not":"an array"}');
    expect(result).toEqual([]);
  });
});

// ---------------------------------------------------------------------------
// parseNumberedListFallback
// ---------------------------------------------------------------------------

describe('parseNumberedListFallback', () => {
  it('strict: 有効な Codex カテゴリをパース', () => {
    const input = '1. 新機能テスト ||| New feature test ||| new-features';
    const result = parseNumberedListFallback(input);
    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      japanese: '新機能テスト',
      english: 'New feature test',
      category: 'new-features',
    });
  });

  it('loose: 無効カテゴリは chores にフォールバック', () => {
    const input = '1. テスト ||| Test ||| invalid-cat';
    const result = parseNumberedListFallback(input);
    expect(result).toHaveLength(1);
    expect(result[0].category).toBe('chores');
  });

  it('en/ja を分離できない番号付きリストは破棄', () => {
    const input = '1. Just some text';
    const result = parseNumberedListFallback(input);
    expect(result).toHaveLength(0);
  });

  it('複数行を正しくパース', () => {
    const input = [
      '1. 追加 ||| Add ||| new-features',
      '2. 修正 ||| Fix ||| bug-fixes',
      '3. ドキュメント ||| Docs ||| documentation',
      '4. 雑務 ||| Chore ||| chores',
    ].join('\n');
    const result = parseNumberedListFallback(input);
    expect(result).toHaveLength(4);
    expect(result[0].category).toBe('new-features');
    expect(result[1].category).toBe('bug-fixes');
    expect(result[2].category).toBe('documentation');
    expect(result[3].category).toBe('chores');
  });

  it('空行はスキップ', () => {
    const input = '1. テスト ||| Test ||| chores\n\n\n2. テスト2 ||| Test2 ||| chores';
    const result = parseNumberedListFallback(input);
    expect(result).toHaveLength(2);
  });
});

// ---------------------------------------------------------------------------
// normalizeExtractedEntry
// ---------------------------------------------------------------------------

describe('normalizeExtractedEntry', () => {
  it('パイプ文字をエスケープ', () => {
    expect(normalizeExtractedEntry('foo | bar')).toBe('foo \\| bar');
  });

  it('連続空白を圧縮', () => {
    expect(normalizeExtractedEntry('foo   bar  baz')).toBe('foo bar baz');
  });

  it('前後の空白をトリム', () => {
    expect(normalizeExtractedEntry('  hello  ')).toBe('hello');
  });

  it('複合パターン', () => {
    expect(normalizeExtractedEntry('  foo | bar   baz  ')).toBe('foo \\| bar baz');
  });
});

// ---------------------------------------------------------------------------
// findPlaceholderVersions
// ---------------------------------------------------------------------------

describe('findPlaceholderVersions', () => {
  // CONTENT_DIR をモックするため vi.mock は使わず、実ファイルを使うテストに
  // 代わりに実際の CHANGELOG ファイルを読んでテスト

  it('実際の CHANGELOG からプレースホルダーを検出', () => {
    const results = findPlaceholderVersions();

    // プレースホルダーが存在する（少なくとも旧形式バージョンがある）
    expect(results.length).toBeGreaterThan(0);

    // 全ての結果が正しい形式
    for (const r of results) {
      expect(r.version).toMatch(/^\d+\.\d+\.\d+$/);
      expect(r.year).toBeGreaterThanOrEqual(2025);
    }
  });

  it('プレースホルダー結果にエントリ付きバージョンが含まれない', () => {
    const results = findPlaceholderVersions();
    const versions = results.map(r => r.version);

    // v0.77.0 はエントリがあるのでプレースホルダーではない
    expect(versions).not.toContain('0.77.0');
    // v0.73.0 もエントリがある
    expect(versions).not.toContain('0.73.0');
  });
});
