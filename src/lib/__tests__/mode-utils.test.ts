import { describe, it, expect } from 'vitest';
import {
  normalizeSearchMode,
  normalizeDisplayMode,
  resolveMode,
} from '../mode-utils';

describe('normalizeSearchMode', () => {
  it('有効値をそのまま返す', () => {
    expect(normalizeSearchMode('ja')).toBe('ja');
    expect(normalizeSearchMode('en')).toBe('en');
    expect(normalizeSearchMode('both')).toBe('both');
  });

  it('無効値は "both" を返す', () => {
    expect(normalizeSearchMode('invalid')).toBe('both');
    expect(normalizeSearchMode('')).toBe('both');
    expect(normalizeSearchMode('JA')).toBe('both');
  });

  it('null は "both" を返す', () => {
    expect(normalizeSearchMode(null)).toBe('both');
  });
});

describe('normalizeDisplayMode', () => {
  it('有効値をそのまま返す', () => {
    expect(normalizeDisplayMode('ja')).toBe('ja');
    expect(normalizeDisplayMode('en')).toBe('en');
    expect(normalizeDisplayMode('both')).toBe('both');
  });

  it('無効値は "both" を返す', () => {
    expect(normalizeDisplayMode('invalid')).toBe('both');
    expect(normalizeDisplayMode('')).toBe('both');
    expect(normalizeDisplayMode('EN')).toBe('both');
  });

  it('null は "both" を返す', () => {
    expect(normalizeDisplayMode(null)).toBe('both');
  });
});

describe('resolveMode', () => {
  it('URL値が存在すれば最優先（有効値）', () => {
    const result = resolveMode('ja', 'en', normalizeSearchMode);
    expect(result).toBe('ja');
  });

  it('URL値が存在すれば最優先（無効値→bothに正規化、sessionStorage は参照しない）', () => {
    const result = resolveMode('invalid', 'ja', normalizeSearchMode);
    expect(result).toBe('both');
  });

  it('URL値がnull（パラメータ不在）ならsessionStorage値を使用', () => {
    const result = resolveMode(null, 'en', normalizeSearchMode);
    expect(result).toBe('en');
  });

  it('両方nullならデフォルト(both)を返す', () => {
    const result = resolveMode(null, null, normalizeSearchMode);
    expect(result).toBe('both');
  });

  it('normalizeDisplayMode でも同様に動作する', () => {
    expect(resolveMode('en', null, normalizeDisplayMode)).toBe('en');
    expect(resolveMode(null, 'ja', normalizeDisplayMode)).toBe('ja');
    expect(resolveMode('bad', 'ja', normalizeDisplayMode)).toBe('both');
  });
});
