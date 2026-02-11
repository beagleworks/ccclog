import * as fs from 'node:fs';
import * as path from 'node:path';

export interface ReportCliOptions {
  reportJson: boolean;
  reportFile: string | null;
}

export interface ParsedReportArgs {
  report: ReportCliOptions;
  remainingArgs: string[];
}

export interface ScriptRunReport {
  script: string;
  status: 'ok' | 'error';
  changed: boolean;
  changedFiles: string[];
  elapsedMs: number;
  addedVersions?: number;
  translatedEntries?: number;
  warnings?: string[];
  apiCalls?: {
    npm: number;
    github: number;
    claude: number;
  };
  error?: string;
}

export function parseReportArgs(args: string[]): ParsedReportArgs {
  const remainingArgs: string[] = [];
  let reportJson = false;
  let reportFile: string | null = null;

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    // pnpm の `--` 区切りをスキップ
    if (arg === '--') continue;

    if (arg === '--report-json') {
      reportJson = true;
      continue;
    }

    if (arg === '--report-file') {
      const outPath = args[i + 1];
      if (!outPath || outPath.startsWith('--')) {
        throw new Error('エラー: --report-file の後に出力先パスを指定してください');
      }
      reportFile = outPath;
      i++;
      continue;
    }

    remainingArgs.push(arg);
  }

  return {
    report: { reportJson, reportFile },
    remainingArgs,
  };
}

export function emitRunReport(opts: ReportCliOptions, report: ScriptRunReport): void {
  if (!opts.reportJson && !opts.reportFile) {
    return;
  }

  try {
    const reportJson = JSON.stringify(report, null, 2);

    if (opts.reportJson) {
      console.log(reportJson);
    }

    if (opts.reportFile) {
      const outPath = path.resolve(process.cwd(), opts.reportFile);
      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.writeFileSync(outPath, reportJson + '\n', 'utf-8');
    }
  } catch (err) {
    console.warn(`レポート出力に失敗しました: ${String(err)}`);
  }
}

