import { describe, expect, it } from 'vitest';
import { buildSearchIndex } from '../generate-search-index';

describe('buildSearchIndex', () => {
  it('docs と posting を構築する', () => {
    const input = {
      months: [
        {
          key: '2026-02',
          versions: [
            {
              version: '6.3.4',
              entries: [
                {
                  ja: '検索ハイライトを改善',
                  en: 'Improve search highlighting for pre-commit (#1234)',
                },
                {
                  ja: 'テストを追加',
                  en: 'Add tests for search index',
                },
              ],
            },
          ],
        },
      ],
    };

    const index = buildSearchIndex(input, 'claude-code', '2026');

    expect(index.version).toBe(1);
    expect(index.product).toBe('claude-code');
    expect(index.year).toBe('2026');
    expect(index.docs).toHaveLength(2);

    expect(index.docs[0]).toMatchObject({
      id: 0,
      version: '6.3.4',
      monthKey: '2026-02',
      entryIndex: 0,
    });

    expect(index.enTokenToDocIds['pre-commit']).toEqual([0]);
    expect(index.enTokenToDocIds.search).toEqual([0, 1]);
    expect(index.enTokenToDocIds['1234']).toEqual([0]);

    expect(index.ja2gramToDocIds['検索']).toEqual([0]);
    expect(index.ja2gramToDocIds['改善']).toEqual([0]);
    expect(index.ja2gramToDocIds['テス']).toEqual([1]);
  });

  it('同一トークンの posting に重複IDを入れない', () => {
    const input = {
      months: [
        {
          key: '2026-01',
          versions: [
            {
              version: '6.3.3',
              entries: [
                {
                  ja: '検索検索',
                  en: 'search search search',
                },
              ],
            },
          ],
        },
      ],
    };

    const index = buildSearchIndex(input, 'codex', '2026');

    expect(index.enTokenToDocIds.search).toEqual([0]);
    expect(index.ja2gramToDocIds['検索']).toEqual([0]);
  });
});
