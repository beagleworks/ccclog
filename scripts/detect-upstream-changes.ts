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

function rebuildEntries(
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

    output.push({ ja: PENDING_MARKER, en: entry });
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
    }
  }

  const pendingCount = output.filter((entry) => entry.ja === PENDING_MARKER).length;

  return { entries: output, translated: translatedCount, pending: pendingCount };
}

async function main(): Promise<void> {
  const applyChanges = process.argv.includes('--apply');
  console.log('=== 上流CHANGELOG変更検出 ===\n');

  let upstreamVersions: UpstreamVersion[];
  try {
    upstreamVersions = await fetchUpstreamTopVersions();
  } catch (error) {
    console.error('GitHub CHANGELOG.md の取得に失敗:', error);
    process.exit(1);
  }

  const year = getCurrentYearJst();
  const filePath = path.join(process.cwd(), 'content', `CHANGELOG_${year}_JA.md`);
  if (!fs.existsSync(filePath)) {
    console.error(`エラー: ファイルが存在しません: ${filePath}`);
    process.exit(1);
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
      console.warn(
        `警告: v${upstreamVersion.version} は ${filePath} に存在しません（スキップ）`
      );
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
    return;
  }

  if (!applyChanges) {
    console.log('\n検出のみ実行しました（適用は --apply を指定）');
    return;
  }

  console.log('\n=== 差分を適用します ===');

  let updatedContent = originalContent;
  let appliedCount = 0;

  for (const target of versionsToApply) {
    const rebuilt = rebuildEntries(target.upstreamEntries, target.localEntries);
    const updated = updateVersionSection(updatedContent, target.version, rebuilt.entries);

    if (!updated.updated) {
      console.warn(`警告: v${target.version} のセクション更新に失敗しました`);
      continue;
    }

    updatedContent = updated.content;
    appliedCount++;
    console.log(
      `v${target.version}: 更新完了（翻訳 ${rebuilt.translated} 件、翻訳待ち ${rebuilt.pending} 件）`
    );
  }

  if (appliedCount > 0 && updatedContent !== originalContent) {
    fs.writeFileSync(filePath, updatedContent, 'utf-8');
    console.log(`\n${filePath} を更新しました`);
  } else {
    console.log('\n更新対象はありませんでした');
  }
}

main().catch((error) => {
  console.error('エラー:', error);
  process.exit(1);
});
