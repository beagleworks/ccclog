/**
 * 上流CHANGELOGの変更を検出し、必要に応じて自動適用する
 *
 * 使用方法:
 *   pnpm detect-upstream        # 検出のみ
 *   pnpm sync-upstream          # 検出 + 適用（--apply）
 *   pnpm detect-upstream --apply
 */

import * as fs from 'node:fs';
import * as path from 'node:path';
import { getCurrentYearJst } from './date-utils.js';
import { extractEntriesByVersion, type Entry } from './parse-changelog.js';
import { translateAndClassifyWithFallback } from './translate.js';
import {
  emitRunReport,
  parseReportArgs,
  type ReportCliOptions,
  type ScriptRunReport,
} from './lib/run-report.js';

const GITHUB_CHANGELOG_URL =
  'https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md';
const PENDING_MARKER = '（翻訳待ち）';
const TARGET_VERSION_COUNT = 3;

interface UpstreamVersion {
  version: string;
  entries: string[];
}

function normalizeEntry(entry: string): string {
  return entry.toLowerCase().replace(/\s+/g, ' ').trim();
}

function escapePipes(text: string): string {
  return text.replace(/\|/g, '\\|');
}

function buildCounts(entries: string[]): Map<string, number> {
  const counts = new Map<string, number>();
  for (const entry of entries) {
    const key = normalizeEntry(entry);
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  return counts;
}

function diffEntries(upstreamEntries: string[], localEntries: string[]) {
  const localCounts = buildCounts(localEntries);
  const toAdd: string[] = [];

  for (const entry of upstreamEntries) {
    const key = normalizeEntry(entry);
    const count = localCounts.get(key) ?? 0;
    if (count > 0) {
      localCounts.set(key, count - 1);
    } else {
      toAdd.push(entry);
    }
  }

  const upstreamCounts = buildCounts(upstreamEntries);
  const toRemove: string[] = [];

  for (const entry of localEntries) {
    const key = normalizeEntry(entry);
    const count = upstreamCounts.get(key) ?? 0;
    if (count > 0) {
      upstreamCounts.set(key, count - 1);
    } else {
      toRemove.push(entry);
    }
  }

  return { toAdd, toRemove };
}

async function fetchUpstreamTopVersions(): Promise<UpstreamVersion[]> {
  console.log('GitHub CHANGELOG.md を取得中...');
  const response = await fetch(GITHUB_CHANGELOG_URL);
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  const content = await response.text();
  const lines = content.split('\n');
  const versions: UpstreamVersion[] = [];

  let currentVersion: string | null = null;
  let currentEntries: string[] = [];

  for (const line of lines) {
    const versionMatch = line.match(/^## (\d+\.\d+\.\d+)/);
    if (versionMatch) {
      if (currentVersion) {
        versions.push({ version: currentVersion, entries: currentEntries });
        if (versions.length >= TARGET_VERSION_COUNT) {
          break;
        }
      }
      currentVersion = versionMatch[1];
      currentEntries = [];
      continue;
    }

    if (currentVersion && line.startsWith('- ')) {
      currentEntries.push(line.substring(2).trim());
    }
  }

  if (currentVersion && versions.length < TARGET_VERSION_COUNT) {
    versions.push({ version: currentVersion, entries: currentEntries });
  }

  return versions.slice(0, TARGET_VERSION_COUNT);
}


function buildVersionSection(version: string, entries: Entry[]): string {
  const lines: string[] = [];
  lines.push(`## ${version}`);
  lines.push('');
  lines.push('| 日本語 | English | Category |');
  lines.push('|--------|---------|----------|');

  for (const entry of entries) {
    const category = entry.category ?? 'other';
    lines.push(`| ${escapePipes(entry.ja)} | ${escapePipes(entry.en)} | ${category} |`);
  }

  lines.push('');
  return lines.join('\n');
}

function updateVersionSection(
  content: string,
  version: string,
  entries: Entry[]
): { updated: boolean; content: string } {
  const lines = content.split('\n');
  const versionRegex = new RegExp(`^##\\s+${version.replace(/\./g, '\\.')}\\s*$`);
  const startIndex = lines.findIndex((line) => versionRegex.test(line));

  if (startIndex === -1) {
    return { updated: false, content };
  }

  let endIndex = lines.length;
  for (let i = startIndex + 1; i < lines.length; i++) {
    if (lines[i].match(/^##\s+\d+\.\d+\.\d+/)) {
      endIndex = i;
      break;
    }
  }

  const newSectionLines = buildVersionSection(version, entries).split('\n');
  lines.splice(startIndex, endIndex - startIndex, ...newSectionLines);

  return { updated: true, content: lines.join('\n') };
}

export function rebuildEntries(
  upstreamEntries: string[],
  localEntries: Entry[]
): { entries: Entry[]; translated: number; pending: number } {
  const buckets = new Map<string, Entry[]>();
  for (const entry of localEntries) {
    const key = normalizeEntry(entry.en);
    const bucket = buckets.get(key) ?? [];
    bucket.push(entry);
    buckets.set(key, bucket);
  }

  const output: Entry[] = [];
  const translateTargets: { index: number; text: string }[] = [];

  for (const entry of upstreamEntries) {
    const key = normalizeEntry(entry);
    const bucket = buckets.get(key);
    const existing = bucket && bucket.length > 0 ? bucket.shift()! : null;

    if (existing && existing.ja !== PENDING_MARKER) {
      output.push({ ja: existing.ja, en: entry, category: existing.category });
      continue;
    }

    output.push({ ja: PENDING_MARKER, en: entry, category: 'other' as const });
    translateTargets.push({ index: output.length - 1, text: entry });
  }

  let translatedCount = 0;
  if (translateTargets.length > 0) {
    const classified = translateAndClassifyWithFallback(
      translateTargets.map((t) => t.text),
      'Claude Code',
    );
    if (classified) {
      for (let i = 0; i < classified.length; i++) {
        const target = translateTargets[i];
        output[target.index].ja = classified[i].translation;
        output[target.index].category = classified[i].category;
        translatedCount++;
      }
    } else {
      // 全体バッチが失敗した場合でも、成功分は個別フォールバックで反映する
      for (const target of translateTargets) {
        const single = translateAndClassifyWithFallback([target.text], 'Claude Code');
        if (!single || single.length === 0) continue;
        output[target.index].ja = single[0].translation;
        output[target.index].category = single[0].category;
        translatedCount++;
      }
    }
  }

  const pendingCount = output.filter((entry) => entry.ja === PENDING_MARKER).length;

  return { entries: output, translated: translatedCount, pending: pendingCount };
}

interface MainResult {
  changed: boolean;
  changedFiles: string[];
  translatedEntries: number;
  warnings: string[];
}

async function main(rawArgs: string[]): Promise<{ result: MainResult; reportOptions: ReportCliOptions }> {
  const parsed = parseReportArgs(rawArgs);
  const applyChanges = parsed.remainingArgs.includes('--apply');
  const warnings: string[] = [];
  console.log('=== 上流CHANGELOG変更検出 ===\n');

  let upstreamVersions: UpstreamVersion[];
  try {
    upstreamVersions = await fetchUpstreamTopVersions();
  } catch (error) {
    throw new Error(`GitHub CHANGELOG.md の取得に失敗: ${String(error)}`);
  }

  const year = getCurrentYearJst();
  const filePath = path.join(process.cwd(), 'content', `CHANGELOG_${year}_JA.md`);
  if (!fs.existsSync(filePath)) {
    throw new Error(`エラー: ファイルが存在しません: ${filePath}`);
  }

  const originalContent = fs.readFileSync(filePath, 'utf-8');
  const localEntriesByVersion = extractEntriesByVersion(originalContent, 'claude-code');

  let hasChanges = false;
  const versionsToApply: {
    version: string;
    upstreamEntries: string[];
    localEntries: Entry[];
  }[] = [];

  for (const upstreamVersion of upstreamVersions) {
    const localEntries = localEntriesByVersion.get(upstreamVersion.version);
    if (!localEntries) {
      const warning = `v${upstreamVersion.version} は ${filePath} に存在しません（スキップ）`;
      console.warn(`警告: ${warning}`);
      warnings.push(warning);
      continue;
    }

    const diff = diffEntries(
      upstreamVersion.entries,
      localEntries.map((entry) => entry.en)
    );

    if (diff.toAdd.length === 0 && diff.toRemove.length === 0) {
      console.log(`v${upstreamVersion.version}: 差分なし`);
      continue;
    }

    hasChanges = true;
    console.log(`\nv${upstreamVersion.version}: 差分あり`);
    if (diff.toAdd.length > 0) {
      console.log(`  追加: ${diff.toAdd.length}件`);
      diff.toAdd.forEach((entry) => console.log(`    + ${entry}`));
    }
    if (diff.toRemove.length > 0) {
      console.log(`  削除: ${diff.toRemove.length}件`);
      diff.toRemove.forEach((entry) => console.log(`    - ${entry}`));
    }

    if (applyChanges) {
      versionsToApply.push({
        version: upstreamVersion.version,
        upstreamEntries: upstreamVersion.entries,
        localEntries,
      });
    }
  }

  if (!hasChanges) {
    console.log('\n差分はありません');
    return {
      reportOptions: parsed.report,
      result: {
        changed: false,
        changedFiles: [],
        translatedEntries: 0,
        warnings,
      },
    };
  }

  if (!applyChanges) {
    console.log('\n検出のみ実行しました（適用は --apply を指定）');
    return {
      reportOptions: parsed.report,
      result: {
        changed: false,
        changedFiles: [],
        translatedEntries: 0,
        warnings,
      },
    };
  }

  console.log('\n=== 差分を適用します ===');

  let updatedContent = originalContent;
  let appliedCount = 0;
  let translatedEntries = 0;

  for (const target of versionsToApply) {
    const rebuilt = rebuildEntries(target.upstreamEntries, target.localEntries);
    const updated = updateVersionSection(updatedContent, target.version, rebuilt.entries);

    if (!updated.updated) {
      console.warn(`警告: v${target.version} のセクション更新に失敗しました`);
      continue;
    }

    updatedContent = updated.content;
    appliedCount++;
    translatedEntries += rebuilt.translated;
    console.log(
      `v${target.version}: 更新完了（翻訳 ${rebuilt.translated} 件、翻訳待ち ${rebuilt.pending} 件）`
    );
  }

  const changedFiles: string[] = [];
  if (appliedCount > 0 && updatedContent !== originalContent) {
    fs.writeFileSync(filePath, updatedContent, 'utf-8');
    console.log(`\n${filePath} を更新しました`);
    changedFiles.push(path.relative(process.cwd(), filePath));
  } else {
    console.log('\n更新対象はありませんでした');
  }

  return {
    reportOptions: parsed.report,
    result: {
      changed: changedFiles.length > 0,
      changedFiles,
      translatedEntries,
      warnings,
    },
  };
}

// 直接実行時のみ main() を呼ぶ（import 時の副作用防止）
const isDirectRun = /detect-upstream-changes\.[tj]s$/.test(process.argv[1] ?? '');
if (isDirectRun) {
  const start = Date.now();
  main(process.argv.slice(2))
    .then(({ reportOptions, result }) => {
      const report: ScriptRunReport = {
        script: 'detect-upstream-changes',
        status: 'ok',
        changed: result.changed,
        changedFiles: result.changedFiles,
        elapsedMs: Date.now() - start,
        translatedEntries: result.translatedEntries,
        warnings: result.warnings,
      };
      emitRunReport(reportOptions, report);
    })
    .catch((error) => {
      const message = error instanceof Error ? error.message : String(error);
      console.error('エラー:', error);
      let reportOptions: ReportCliOptions = { reportJson: false, reportFile: null };
      try {
        reportOptions = parseReportArgs(process.argv.slice(2)).report;
      } catch {
        // ignore
      }
      emitRunReport(reportOptions, {
        script: 'detect-upstream-changes',
        status: 'error',
        changed: false,
        changedFiles: [],
        elapsedMs: Date.now() - start,
        warnings: [message],
        error: message,
      });
      process.exit(1);
    });
}
