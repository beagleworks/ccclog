/**
 * main() 統合テスト
 *
 * 外部依存（npm, GitHub, 翻訳CLI, ファイルシステム）をモックして
 * main() のオーケストレーションを検証する
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import * as fs from 'node:fs';
import * as path from 'node:path';
import * as os from 'node:os';

// --- モジュールモック ---

vi.mock('node:child_process', () => ({
  execSync: vi.fn(),
}));

vi.mock('../date-utils.js', async () => {
  const actual = await vi.importActual<typeof import('../date-utils.js')>('../date-utils.js');
  return {
    ...actual,
    getCurrentYearJst: vi.fn(() => 2026),
  };
});

vi.mock('../translate.js', () => ({
  translateAndClassifyWithFallback: vi.fn(() => null),
}));

vi.mock('../fetch-releases.js', () => ({
  fetchReleases: vi.fn(async () => new Map()),
  interpolateMissingDates: vi.fn(),
}));

// --- テストデータ ---

/**
 * npm レジストリのモックデータ
 * - 2.1.44, 2.1.42: npm + upstream 双方に存在
 * - 2.1.40: npm のみ（upstream CHANGELOG にセクションなし）
 * - 2.1.43 は npm に存在しない
 */
const NPM_TIME_JSON = JSON.stringify({
  created: '2024-01-01T00:00:00.000Z',
  modified: '2026-02-10T00:00:00.000Z',
  '2.1.44': '2026-02-10T00:00:00.000Z',
  '2.1.42': '2026-02-08T00:00:00.000Z',
  '2.1.40': '2026-02-06T00:00:00.000Z',
});

/**
 * GitHub CHANGELOG.md のモックデータ
 * - 2.1.44, 2.1.43, 2.1.42 にセクションあり
 * - 2.1.40 にはセクションなし（npm-only）
 */
const GITHUB_CHANGELOG_MD = `## 2.1.44

- Entry for 2.1.44

## 2.1.43

- Fixed AWS auth refresh hanging indefinitely

## 2.1.42

- Entry for 2.1.42
`;

/**
 * ローカル CHANGELOG_2026_JA.md のモックデータ
 * - 2.1.44 と 2.1.42 は既に収録済み
 */
const LOCAL_CHANGELOG = `# Claude Code 変更履歴 (2026年)

---

## 2.1.44

| 日本語 | English | Category |
|--------|---------|----------|
| 既存エントリ | Entry for 2.1.44 | added |

## 2.1.42

| 日本語 | English | Category |
|--------|---------|----------|
| 既存エントリ | Entry for 2.1.42 | fixed |
`;

// --- テスト本体 ---

import { execSync } from 'node:child_process';
import { fetchReleases } from '../fetch-releases.js';
import { main } from '../sync-versions';

describe('main()', () => {
  let tmpDir: string;

  beforeEach(() => {
    // 一時ディレクトリにプロジェクト構造を再現
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'sync-versions-main-'));
    const contentDir = path.join(tmpDir, 'content');
    fs.mkdirSync(contentDir, { recursive: true });
    fs.writeFileSync(
      path.join(contentDir, 'CHANGELOG_2026_JA.md'),
      LOCAL_CHANGELOG,
      'utf-8'
    );

    vi.spyOn(process, 'cwd').mockReturnValue(tmpDir);

    // npm レジストリ
    vi.mocked(execSync).mockReturnValue(NPM_TIME_JSON);

    // GitHub CHANGELOG.md
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => ({ ok: true, text: async () => GITHUB_CHANGELOG_MD }))
    );

    // GitHub Releases API（2.1.43 のタグ日付を返す）
    vi.mocked(fetchReleases).mockImplementation(
      async (_owner, _repo, versions) => {
        const map = new Map<string, { version: string; releaseDate: string }>();
        for (const v of versions) {
          if (v === '2.1.43') {
            map.set('2.1.43', { version: '2.1.43', releaseDate: '2026-02-09' });
          }
        }
        return map;
      }
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  it('npm-only 版（上流セクションなし）は warning スキップされる', async () => {
    const { result } = await main([]);

    const missingSectionWarnings = result.warnings.filter((w) =>
      w.includes('[upstream_missing_section]')
    );
    expect(missingSectionWarnings.length).toBeGreaterThanOrEqual(1);
    expect(missingSectionWarnings.some((w) => w.includes('2.1.40'))).toBe(true);
  });

  it('既存収録済み版（2.1.44, 2.1.42）は再追記されない', async () => {
    const { result } = await main([]);

    // 追加されたのは 2.1.43 のみ
    expect(result.addedVersions).toBe(1);

    const written = fs.readFileSync(
      path.join(tmpDir, 'content', 'CHANGELOG_2026_JA.md'),
      'utf-8'
    );
    // 2.1.43 は追加されている
    expect(written).toContain('## 2.1.43');
    // 2.1.44 と 2.1.42 のセクションは重複していない（各1回のみ）
    expect(written.match(/## 2\.1\.44/g)?.length).toBe(1);
    expect(written.match(/## 2\.1\.42/g)?.length).toBe(1);
  });

  it('github-changelog-only 版（2.1.43）が追加される', async () => {
    const { result } = await main([]);

    expect(result.addedVersions).toBe(1);
    expect(result.changed).toBe(true);

    const written = fs.readFileSync(
      path.join(tmpDir, 'content', 'CHANGELOG_2026_JA.md'),
      'utf-8'
    );
    expect(written).toContain('## 2.1.43');
    // 翻訳モックは null を返すので（翻訳待ち）にフォールバック
    expect(written).toContain('（翻訳待ち）');
    expect(written).toContain('Fixed AWS auth refresh hanging indefinitely');
  });

  it('result.warnings に各種 warning が含まれる', async () => {
    const { result } = await main([]);

    // npm-only の missing-section 警告
    expect(result.warnings.some((w) => w.includes('[upstream_missing_section]'))).toBe(true);
    // github-changelog-only 版に対する警告はない（正常追加されるため）
    expect(result.warnings.some((w) => w.includes('2.1.43'))).toBe(false);
  });

  it('未記載バージョンがない場合は changed=false', async () => {
    // 2.1.43 も既存に追加
    const contentWithAll = LOCAL_CHANGELOG.replace(
      '## 2.1.44',
      '## 2.1.43\n\n| 日本語 | English | Category |\n|--------|---------|----------|\n| 既存 | Existing | other |\n\n## 2.1.44'
    );
    fs.writeFileSync(
      path.join(tmpDir, 'content', 'CHANGELOG_2026_JA.md'),
      contentWithAll,
      'utf-8'
    );

    const { result } = await main([]);

    // 2.1.40 は npm-only でスキップされるので追加なし
    expect(result.addedVersions).toBe(0);
    expect(result.changed).toBe(false);
  });
});
