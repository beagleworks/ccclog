import { describe, expect, it, vi } from 'vitest';
import {
  buildVersionCandidates,
  classifyUpstreamEntries,
  generateVersionSection,
  normalizeAndMergeParsedSections,
  resolveVersionDates,
  splitChangelogContent,
  sortVersionsDescending,
  type VersionInfo,
} from '../sync-versions';
import type { ReleaseInfo } from '../fetch-releases';

describe('buildVersionCandidates', () => {
  it('npm と upstream の union を作り source を正しく付与する', () => {
    const npmVersions = new Map<string, VersionInfo>([
      [
        '2.1.44',
        {
          version: '2.1.44',
          source: 'npm',
          publishDate: '2026-02-10',
          year: 2026,
        },
      ],
    ]);
    const upstream = new Map<string, string[]>([
      ['2.1.44', ['A']],
      ['2.1.43', ['B']],
    ]);

    const merged = buildVersionCandidates(npmVersions, upstream);

    expect(merged.size).toBe(2);
    expect(merged.get('2.1.44')?.source).toBe('both');
    expect(merged.get('2.1.43')?.source).toBe('github-changelog');
  });
});

describe('resolveVersionDates', () => {
  it('fetchReleases は npm 日付欠損版のみに対して呼ばれる', async () => {
    const versions = new Map<string, VersionInfo>([
      [
        '2.1.44',
        {
          version: '2.1.44',
          source: 'both',
          publishDate: '2026-02-10',
          year: 2026,
        },
      ],
      [
        '2.1.43',
        {
          version: '2.1.43',
          source: 'github-changelog',
        },
      ],
    ]);

    const fetchReleasesMock = vi.fn(
      async (_owner: string, _repo: string, targetVersions: string[]) => {
        expect(targetVersions).toEqual(['2.1.43']);
        return new Map<string, ReleaseInfo>([
          [
            '2.1.43',
            {
              version: '2.1.43',
              releaseDate: '2026-02-09',
            },
          ],
        ]);
      }
    );
    const interpolateMock = vi.fn();

    const summary = await resolveVersionDates(versions, fetchReleasesMock, interpolateMock);

    expect(fetchReleasesMock).toHaveBeenCalledTimes(1);
    expect(summary.missingNpmVersions).toEqual(['2.1.43']);
    expect(summary.unresolvedAfterGitHub).toEqual([]);
    expect(interpolateMock).not.toHaveBeenCalled();
    expect(versions.get('2.1.43')?.publishDate).toBe('2026-02-09');
    expect(versions.get('2.1.43')?.year).toBe(2026);
  });

  it('年跨ぎ境界: publishDate=2025-12-31 は year=2025、2026-01-01 は year=2026', async () => {
    const versions = new Map<string, VersionInfo>([
      ['1.0.97', { version: '1.0.97', source: 'npm', publishDate: '2025-12-31' }],
      ['1.0.98', { version: '1.0.98', source: 'npm', publishDate: '2026-01-01' }],
    ]);

    const noopFetch = vi.fn(async () => new Map<string, ReleaseInfo>());
    const noopInterpolate = vi.fn();

    await resolveVersionDates(versions, noopFetch, noopInterpolate);

    expect(versions.get('1.0.97')?.year).toBe(2025);
    expect(versions.get('1.0.98')?.year).toBe(2026);
  });

  it('GitHub でも欠損する場合は interpolate を呼ぶ', async () => {
    const versions = new Map<string, VersionInfo>([
      [
        '2.1.44',
        {
          version: '2.1.44',
          source: 'both',
          publishDate: '2026-02-10',
          year: 2026,
        },
      ],
      [
        '2.1.43',
        {
          version: '2.1.43',
          source: 'github-changelog',
        },
      ],
      [
        '2.1.42',
        {
          version: '2.1.42',
          source: 'both',
          publishDate: '2026-02-08',
          year: 2026,
        },
      ],
    ]);

    const fetchReleasesMock = vi.fn(async () => new Map<string, ReleaseInfo>());
    const interpolateMock = vi.fn((targetVersions: string[], releaseMap: Map<string, ReleaseInfo>) => {
      expect(targetVersions).toContain('2.1.43');
      releaseMap.set('2.1.43', {
        version: '2.1.43',
        releaseDate: '2026-02-10',
      });
    });

    const summary = await resolveVersionDates(versions, fetchReleasesMock, interpolateMock);

    expect(summary.unresolvedAfterGitHub).toEqual(['2.1.43']);
    expect(summary.unresolvedAfterInterpolation).toEqual([]);
    expect(versions.get('2.1.43')?.publishDate).toBe('2026-02-10');
    expect(versions.get('2.1.43')?.year).toBe(2026);
  });
});

describe('classifyUpstreamEntries', () => {
  it('undefined は missing-section', () => {
    expect(classifyUpstreamEntries(undefined)).toBe('missing-section');
  });

  it('空配列は empty-section', () => {
    expect(classifyUpstreamEntries([])).toBe('empty-section');
  });

  it('要素ありは has-entries', () => {
    expect(classifyUpstreamEntries(['entry'])).toBe('has-entries');
  });
});

describe('generateVersionSection', () => {
  it('翻訳あり: 翻訳テキストとカテゴリを使用する', () => {
    const entries = ['Fixed a bug', 'Added a feature'];
    const translations = [
      { translation: 'バグを修正', category: 'fixed' as const },
      { translation: '機能を追加', category: 'added' as const },
    ];

    const section = generateVersionSection('2.1.43', entries, translations);

    expect(section).toContain('## 2.1.43');
    expect(section).toContain('| バグを修正 | Fixed a bug | fixed |');
    expect(section).toContain('| 機能を追加 | Added a feature | added |');
  });

  it('翻訳なし: （翻訳待ち）と other にフォールバックする', () => {
    const entries = ['Fixed a bug'];

    const section = generateVersionSection('2.1.43', entries, null);

    expect(section).toContain('| （翻訳待ち） | Fixed a bug | other |');
  });

  it('パイプ文字をエスケープする', () => {
    const entries = ['Fixed `a | b` issue'];
    const translations = [
      { translation: '`a | b` の問題を修正', category: 'fixed' as const },
    ];

    const section = generateVersionSection('2.1.43', entries, translations);

    expect(section).toContain('`a \\| b` の問題を修正');
    expect(section).toContain('Fixed `a \\| b` issue');
  });
});

describe('sortVersionsDescending', () => {
  it('元配列を破壊せずに降順ソート結果を返す', () => {
    const original = ['2.1.42', '2.1.44', '2.1.43'];
    const sorted = sortVersionsDescending(original);

    expect(sorted).toEqual(['2.1.44', '2.1.43', '2.1.42']);
    expect(original).toEqual(['2.1.42', '2.1.44', '2.1.43']);
  });
});

describe('changelog section normalization', () => {
  it('splitChangelogContent は suffix を分離して保持する', () => {
    const content = `# Claude Code 変更履歴 (2026年)

---

## 2.1.43

| 日本語 | English | Category |
|--------|---------|----------|
| 既存 | Existing 43 | fixed |

## 2.1.42

| 日本語 | English | Category |
|--------|---------|----------|
| 既存 | Existing 42 | fixed |

*このファイルは上流CHANGELOGを元に生成されました。*
`;

    const parsed = splitChangelogContent(content);
    expect(parsed).not.toBeNull();
    expect(parsed?.sections.size).toBe(2);
    expect(parsed?.suffix.trim()).toBe('*このファイルは上流CHANGELOGを元に生成されました。*');
  });

  it('normalizeAndMergeParsedSections は semver降順で再整列し suffix を保持する', () => {
    const content = `# Claude Code 変更履歴 (2026年)

---

## 2.1.43

| 日本語 | English | Category |
|--------|---------|----------|
| 既存 | Existing 43 | fixed |

## 2.1.44

| 日本語 | English | Category |
|--------|---------|----------|
| 既存 | Existing 44 | fixed |

*footer note*
`;
    const parsed = splitChangelogContent(content);
    expect(parsed).not.toBeNull();

    const newSection = `## 2.1.42

| 日本語 | English | Category |
|--------|---------|----------|
| 追加 | Added 42 | added |
`;

    const normalized = normalizeAndMergeParsedSections(parsed!, [newSection]);
    const idx44 = normalized.indexOf('## 2.1.44');
    const idx43 = normalized.indexOf('## 2.1.43');
    const idx42 = normalized.indexOf('## 2.1.42');

    expect(idx44).toBeGreaterThan(-1);
    expect(idx43).toBeGreaterThan(-1);
    expect(idx42).toBeGreaterThan(-1);
    expect(idx44).toBeLessThan(idx43);
    expect(idx43).toBeLessThan(idx42);
    expect(normalized).toContain('*footer note*');
  });
});
