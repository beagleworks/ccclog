import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { mkdtempSync, writeFileSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { resolveGeneratedAt } from '../generate-data';

describe('resolveGeneratedAt', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-02-17T10:00:00.000Z'));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('既存ファイルなし → 新しい generatedAt、contentChanged: true', () => {
    const months = [{ key: '2026-02', label: '2026年2月', versions: [] }];
    const result = resolveGeneratedAt(null, months);
    expect(result.contentChanged).toBe(true);
    expect(result.generatedAt).toBe('2026-02-17T10:00:00.000Z');
  });

  it('months が同一 → 既存の generatedAt を保持、contentChanged: false', () => {
    const months = [{ key: '2026-02', label: '2026年2月', versions: [] }];
    const existing = JSON.stringify({
      generatedAt: '2026-02-14T23:24:44.991Z',
      months,
    });
    const result = resolveGeneratedAt(existing, months);
    expect(result.contentChanged).toBe(false);
    expect(result.generatedAt).toBe('2026-02-14T23:24:44.991Z');
  });

  it('months が異なる → 新しい generatedAt、contentChanged: true', () => {
    const existingMonths = [{ key: '2026-02', label: '2026年2月', versions: [] }];
    const newMonths = [
      {
        key: '2026-02',
        label: '2026年2月',
        versions: [{ version: '2.2.0', releaseDate: '2026-02-17', releaseDateDisplay: '2026年2月17日', entries: [] }],
      },
    ];
    const existing = JSON.stringify({
      generatedAt: '2026-02-14T23:24:44.991Z',
      months: existingMonths,
    });
    const result = resolveGeneratedAt(existing, newMonths);
    expect(result.contentChanged).toBe(true);
    expect(result.generatedAt).toBe('2026-02-17T10:00:00.000Z');
  });

  it('既存 JSON が壊れている → contentChanged: true', () => {
    const months = [{ key: '2026-02', label: '2026年2月', versions: [] }];
    const result = resolveGeneratedAt('{ invalid json', months);
    expect(result.contentChanged).toBe(true);
    expect(result.generatedAt).toBe('2026-02-17T10:00:00.000Z');
  });
});

describe('書き込みスキップ（I/O 分岐）', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-02-17T10:00:00.000Z'));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('contentChanged=false の場合、ファイル内容が保持される', () => {
    const tmpDir = mkdtempSync(join(tmpdir(), 'generate-data-'));
    const jsonPath = join(tmpDir, 'changelog-2026.json');
    const months = [{ key: '2026-02', label: '2026年2月', versions: [] }];
    const originalData = { generatedAt: '2026-02-14T00:00:00.000Z', months };
    writeFileSync(jsonPath, JSON.stringify(originalData, null, 2));

    // main() と同じ I/O 分岐ロジックを再現
    const existingJson = readFileSync(jsonPath, 'utf-8');
    const { generatedAt, contentChanged } = resolveGeneratedAt(existingJson, months);

    if (contentChanged) {
      writeFileSync(jsonPath, JSON.stringify({ generatedAt, months }, null, 2));
    }

    const afterJson = JSON.parse(readFileSync(jsonPath, 'utf-8'));
    expect(contentChanged).toBe(false);
    expect(afterJson.generatedAt).toBe('2026-02-14T00:00:00.000Z');
  });

  it('contentChanged=true の場合、ファイルが更新される', () => {
    const tmpDir = mkdtempSync(join(tmpdir(), 'generate-data-'));
    const jsonPath = join(tmpDir, 'changelog-2026.json');
    const oldMonths = [{ key: '2026-01', label: '2026年1月', versions: [] }];
    const originalData = { generatedAt: '2026-01-01T00:00:00.000Z', months: oldMonths };
    writeFileSync(jsonPath, JSON.stringify(originalData, null, 2));

    const newMonths = [
      { key: '2026-01', label: '2026年1月', versions: [] },
      { key: '2026-02', label: '2026年2月', versions: [] },
    ];

    const existingJson = readFileSync(jsonPath, 'utf-8');
    const { generatedAt, contentChanged } = resolveGeneratedAt(existingJson, newMonths);

    if (contentChanged) {
      writeFileSync(jsonPath, JSON.stringify({ generatedAt, months: newMonths }, null, 2));
    }

    const afterJson = JSON.parse(readFileSync(jsonPath, 'utf-8'));
    expect(contentChanged).toBe(true);
    expect(afterJson.generatedAt).toBe('2026-02-17T10:00:00.000Z');
    expect(afterJson.months).toHaveLength(2);
  });
});
