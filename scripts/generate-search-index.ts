/**
 * 検索インデックス生成スクリプト
 *
 * src/data/[codex/]changelog-{year}.json から
 * src/data/search/{product}-{year}.json を生成する。
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { products } from '../src/lib/products.js';
import { listChangelogYears } from '../src/lib/server/changelog-years.js';
import {
  normalizeJapaneseText,
  toJapaneseBigrams,
  tokenizeEnglish,
  toUniqueTokens,
} from '../src/lib/search-normalize.js';

interface Entry {
  ja: string;
  en: string;
}

interface VersionData {
  version: string;
  entries: Entry[];
}

interface MonthData {
  key: string;
  versions: VersionData[];
}

interface ChangelogData {
  months: MonthData[];
}

interface SearchIndexDoc {
  id: number;
  version: string;
  monthKey: string;
  entryIndex: number;
  ja: string;
  en: string;
}

export interface SearchIndexData {
  version: 1;
  product: 'claude-code' | 'codex';
  year: string;
  docs: SearchIndexDoc[];
  enTokenToDocIds: Record<string, number[]>;
  ja2gramToDocIds: Record<string, number[]>;
}

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = join(__dirname, '..');
const INDEX_SIZE_WARN_BYTES = 2 * 1024 * 1024;

function addPosting(postings: Map<string, Set<number>>, token: string, docId: number) {
  const set = postings.get(token);
  if (set) {
    set.add(docId);
  } else {
    postings.set(token, new Set([docId]));
  }
}

function toPostingRecord(postings: Map<string, Set<number>>): Record<string, number[]> {
  const sortedTokens = Array.from(postings.keys()).sort();
  const record: Record<string, number[]> = {};

  sortedTokens.forEach((token) => {
    const ids = postings.get(token);
    if (!ids) return;
    record[token] = Array.from(ids).sort((a, b) => a - b);
  });

  return record;
}

export function buildSearchIndex(
  changelogData: ChangelogData,
  product: 'claude-code' | 'codex',
  year: string
): SearchIndexData {
  const docs: SearchIndexDoc[] = [];
  const enTokenPostings = new Map<string, Set<number>>();
  const jaBigramPostings = new Map<string, Set<number>>();

  let docId = 0;

  changelogData.months.forEach((month) => {
    month.versions.forEach((version) => {
      version.entries.forEach((entry, entryIndex) => {
        const ja = entry.ja ?? '';
        const en = entry.en ?? '';
        const currentDocId = docId;

        docs.push({
          id: currentDocId,
          version: version.version,
          monthKey: month.key,
          entryIndex,
          ja,
          en,
        });

        const enTokens = toUniqueTokens(tokenizeEnglish(en));
        enTokens.forEach((token) => addPosting(enTokenPostings, token, currentDocId));

        const jaBigrams = toUniqueTokens(toJapaneseBigrams(normalizeJapaneseText(ja)));
        jaBigrams.forEach((gram) => addPosting(jaBigramPostings, gram, currentDocId));

        docId += 1;
      });
    });
  });

  return {
    version: 1,
    product,
    year,
    docs,
    enTokenToDocIds: toPostingRecord(enTokenPostings),
    ja2gramToDocIds: toPostingRecord(jaBigramPostings),
  };
}

function readChangelogJson(jsonPath: string): ChangelogData {
  if (!existsSync(jsonPath)) {
    throw new Error(`データファイルが見つかりません: ${jsonPath}`);
  }

  const raw = readFileSync(jsonPath, 'utf-8');
  return JSON.parse(raw) as ChangelogData;
}

function writeIndexJson(outputPath: string, data: SearchIndexData): { changed: boolean; bytes: number } {
  const next = `${JSON.stringify(data, null, 2)}\n`;
  const prev = existsSync(outputPath) ? readFileSync(outputPath, 'utf-8') : null;

  if (prev === next) {
    return { changed: false, bytes: Buffer.byteLength(next, 'utf8') };
  }

  writeFileSync(outputPath, next);
  return { changed: true, bytes: Buffer.byteLength(next, 'utf8') };
}

export async function main(): Promise<void> {
  process.chdir(ROOT_DIR);

  const outputDir = join(ROOT_DIR, 'src', 'data', 'search');
  mkdirSync(outputDir, { recursive: true });

  const changedFiles: string[] = [];
  const sizeWarnings: string[] = [];

  for (const product of products) {
    const productId = product.id;
    const years = listChangelogYears(productId);

    if (years.length === 0) {
      throw new Error(`対象年が見つかりません: product=${productId}`);
    }

    const dataDir = product.dataSubdir
      ? join(ROOT_DIR, 'src', 'data', product.dataSubdir)
      : join(ROOT_DIR, 'src', 'data');

    for (const year of years) {
      const changelogPath = join(dataDir, `changelog-${year}.json`);
      const changelog = readChangelogJson(changelogPath);
      const index = buildSearchIndex(changelog, productId, year);
      const outputPath = join(outputDir, `${productId}-${year}.json`);
      const { changed, bytes } = writeIndexJson(outputPath, index);

      const sizeKb = (bytes / 1024).toFixed(1);
      const marker = changed ? '📝' : '⏭️';
      console.log(`${marker} ${outputPath} (${sizeKb} KB)`);
      if (bytes > INDEX_SIZE_WARN_BYTES) {
        sizeWarnings.push(`${outputPath} (${sizeKb} KB)`);
      }
      if (changed) changedFiles.push(outputPath);
    }
  }

  if (sizeWarnings.length > 0) {
    console.warn('⚠️ 検索インデックスサイズ警告（2MB超過）:');
    sizeWarnings.forEach((entry) => console.warn(`   - ${entry}`));
    console.warn('   対応候補: HTML埋め込みを外部JSON fetch方式に切替');
  }

  if (changedFiles.length === 0) {
    console.log('✅ 検索インデックスは全て最新です');
    return;
  }

  console.log(`✅ 検索インデックスを更新しました (${changedFiles.length} ファイル)`);
}

const isDirectRun = process.argv[1] === fileURLToPath(import.meta.url);
if (isDirectRun) {
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
