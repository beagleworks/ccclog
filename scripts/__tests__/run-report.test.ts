import { afterEach, describe, expect, it, vi } from 'vitest';
import * as fs from 'node:fs';
import * as os from 'node:os';
import * as path from 'node:path';
import { emitRunReport, parseReportArgs } from '../lib/run-report';

describe('parseReportArgs', () => {
  it('reportフラグを抽出し、他引数を残す', () => {
    const parsed = parseReportArgs([
      '--report-json',
      '--report-file',
      'tmp/out.json',
      '--year',
      '2026',
    ]);

    expect(parsed.report.reportJson).toBe(true);
    expect(parsed.report.reportFile).toBe('tmp/out.json');
    expect(parsed.remainingArgs).toEqual(['--year', '2026']);
  });

  it('--report-file の値が無い場合はエラー', () => {
    expect(() => parseReportArgs(['--report-file'])).toThrow(/--report-file/);
  });

  it('--report-file の次がオプション（--始まり）の場合はエラー', () => {
    expect(() => parseReportArgs(['--report-file', '--year', '2026'])).toThrow(/--report-file/);
  });
});

describe('emitRunReport', () => {
  let tmpDir: string;

  afterEach(() => {
    if (tmpDir && fs.existsSync(tmpDir)) {
      fs.rmSync(tmpDir, { recursive: true, force: true });
    }
    vi.restoreAllMocks();
  });

  it('report-file 指定時に JSON ファイルを書き出す', () => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'run-report-'));
    const outPath = path.join(tmpDir, 'report.json');

    emitRunReport(
      { reportJson: false, reportFile: outPath },
      {
        script: 'test-script',
        status: 'ok',
        changed: true,
        changedFiles: ['content/CHANGELOG_2026_JA.md'],
        elapsedMs: 1234,
        warnings: [],
      },
    );

    expect(fs.existsSync(outPath)).toBe(true);
    const saved = JSON.parse(fs.readFileSync(outPath, 'utf-8'));
    expect(saved.script).toBe('test-script');
    expect(saved.changed).toBe(true);
  });

  it('report-json 指定時に標準出力へ JSON を出す', () => {
    const spy = vi.spyOn(console, 'log').mockImplementation(() => {});

    emitRunReport(
      { reportJson: true, reportFile: null },
      {
        script: 'test-script',
        status: 'ok',
        changed: false,
        changedFiles: [],
        elapsedMs: 10,
      },
    );

    expect(spy).toHaveBeenCalledTimes(1);
    const firstArg = spy.mock.calls[0]?.[0];
    expect(typeof firstArg).toBe('string');
    expect(String(firstArg)).toContain('"script": "test-script"');
  });
});

