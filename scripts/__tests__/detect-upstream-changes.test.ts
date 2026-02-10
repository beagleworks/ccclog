import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { rebuildEntries } from '../detect-upstream-changes';
import type { Entry } from '../parse-changelog';

// translateAndClassifyWithFallback をモック
vi.mock('../translate.js', () => ({
  translateAndClassifyWithFallback: vi.fn(() => null),
}));

describe('rebuildEntries', () => {
  beforeEach(() => {
    vi.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('未翻訳エントリ追加時に category: other が付与される', () => {
    const upstream = ['New feature added'];
    const local: Entry[] = [];

    const result = rebuildEntries(upstream, local);

    expect(result.entries).toHaveLength(1);
    expect(result.entries[0].en).toBe('New feature added');
    expect(result.entries[0].ja).toBe('（翻訳待ち）');
    expect(result.entries[0].category).toBe('other');
  });

  it('既存翻訳エントリの category を維持する', () => {
    const upstream = ['Fixed a bug'];
    const local: Entry[] = [
      { ja: 'バグを修正', en: 'Fixed a bug', category: 'fixed' },
    ];

    const result = rebuildEntries(upstream, local);

    expect(result.entries).toHaveLength(1);
    expect(result.entries[0].ja).toBe('バグを修正');
    expect(result.entries[0].category).toBe('fixed');
  });

  it('既存 + 新規の混在で正しく構築される', () => {
    const upstream = ['Fixed a bug', 'Brand new feature'];
    const local: Entry[] = [
      { ja: 'バグを修正', en: 'Fixed a bug', category: 'fixed' },
    ];

    const result = rebuildEntries(upstream, local);

    expect(result.entries).toHaveLength(2);
    // 既存
    expect(result.entries[0].category).toBe('fixed');
    expect(result.entries[0].ja).toBe('バグを修正');
    // 新規
    expect(result.entries[1].category).toBe('other');
    expect(result.entries[1].ja).toBe('（翻訳待ち）');
  });

  it('翻訳待ちの既存エントリは再利用しない', () => {
    const upstream = ['Some entry'];
    const local: Entry[] = [
      { ja: '（翻訳待ち）', en: 'Some entry', category: 'other' },
    ];

    const result = rebuildEntries(upstream, local);

    // 既存が翻訳待ちなので translateTargets に入る → モックで null → 翻訳待ちのまま
    expect(result.entries).toHaveLength(1);
    expect(result.entries[0].ja).toBe('（翻訳待ち）');
    expect(result.entries[0].category).toBe('other');
    expect(result.pending).toBe(1);
  });
});
