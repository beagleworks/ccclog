/**
 * CHANGELOG データ生成スクリプト
 *
 * 1. CHANGELOG_{YEAR}_JA.md をパース
 * 2. GitHub Releases API からリリース日を取得
 * 3. src/data/changelog-{year}.json を生成
 * 4. generated/CHANGELOG-{year}.md を生成
 *
 * 使用法: tsx scripts/generate-data.ts [year]
 * 例: tsx scripts/generate-data.ts 2025
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseChangelog, type ParsedVersion, type Entry } from './parse-changelog.js';
import { fetchReleases, fetchChangelogCommitDates, fetchNpmPublishDates, interpolateMissingDates } from './fetch-releases.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = join(__dirname, '..');

// コマンドライン引数から年を取得（デフォルト: 2026）
const YEAR = process.argv[2] || '2026';

// ========================
// 型定義
// ========================

interface Version {
  version: string;
  releaseDate: string;
  releaseDateDisplay: string;
  entries: Entry[];
}

interface MonthGroup {
  key: string;
  label: string;
  versions: Version[];
}

interface ChangelogData {
  generatedAt: string;
  months: MonthGroup[];
}

// ========================
// ユーティリティ関数
// ========================

/**
 * 日付文字列を日本語表示形式に変換
 * @param dateStr YYYY-MM-DD形式
 * @returns 2026年1月29日 形式
 */
function formatDateJa(dateStr: string): string {
  const [year, month, day] = dateStr.split('-');
  return `${year}年${parseInt(month)}月${parseInt(day)}日`;
}

/**
 * 日付文字列から月キーを生成
 * @param dateStr YYYY-MM-DD形式
 * @returns YYYY-MM形式
 */
function getMonthKey(dateStr: string): string {
  return dateStr.substring(0, 7);
}

/**
 * 月キーから月ラベルを生成
 * @param monthKey YYYY-MM形式
 * @returns 2026年1月 形式
 */
function formatMonthLabel(monthKey: string): string {
  const [year, month] = monthKey.split('-');
  return `${year}年${parseInt(month)}月`;
}

// ========================
// メイン処理
// ========================

async function main() {
  console.log(`📦 CHANGELOG データ生成を開始 (${YEAR}年)...\n`);

  // 1. CHANGELOGファイルを読み込み・パース
  console.log(`📖 CHANGELOG_${YEAR}_JA.md を読み込み中...`);
  const changelogPath = join(ROOT_DIR, `CHANGELOG_${YEAR}_JA.md`);
  const content = readFileSync(changelogPath, 'utf-8');
  const parsedVersions = parseChangelog(content);
  console.log(`   ${parsedVersions.length} バージョンを検出\n`);

  // 2. npm レジストリから公開日を取得（最も正確）
  console.log('📦 npm レジストリから公開日を取得中...');
  const versionList = parsedVersions.map((v) => v.version);
  const npmDates = fetchNpmPublishDates('@anthropic-ai/claude-code');

  // releaseMap を構築
  const releaseMap = new Map<string, { version: string; releaseDate: string }>();
  let npmCount = 0;
  for (const version of versionList) {
    if (npmDates.has(version)) {
      releaseMap.set(version, {
        version,
        releaseDate: npmDates.get(version)!,
      });
      npmCount++;
    }
  }
  console.log(`   ${npmCount} バージョンの公開日を取得\n`);

  // 3. npm で取得できなかったバージョンは補間（最終手段）
  const missingCount = versionList.length - releaseMap.size;
  if (missingCount > 0) {
    console.log(`📊 ${missingCount} バージョンの日付を近隣バージョンから補間中...`);
    interpolateMissingDates(versionList, releaseMap);
    console.log(`   補間完了\n`);
  }

  // 統計情報を表示
  console.log('📈 日付取得の統計:');
  console.log(`   npm レジストリ: ${npmCount} バージョン`);
  console.log(`   補間: ${missingCount} バージョン`);
  console.log(`   合計: ${versionList.length} バージョン\n`);

  // 3. バージョン情報にリリース日を追加
  const versions: Version[] = parsedVersions.map((pv) => {
    const releaseDate = releaseMap.get(pv.version)!.releaseDate;

    return {
      version: pv.version,
      releaseDate,
      releaseDateDisplay: formatDateJa(releaseDate),
      entries: pv.entries,
    };
  });

  // 4. 月別にグループ化
  const monthMap = new Map<string, Version[]>();
  for (const version of versions) {
    const monthKey = getMonthKey(version.releaseDate);
    if (!monthMap.has(monthKey)) {
      monthMap.set(monthKey, []);
    }
    monthMap.get(monthKey)!.push(version);
  }

  // 月キーでソート（降順）
  const sortedMonthKeys = Array.from(monthMap.keys()).sort().reverse();
  const months: MonthGroup[] = sortedMonthKeys.map((key) => ({
    key,
    label: formatMonthLabel(key),
    versions: monthMap.get(key)!,
  }));

  // 5. changelog.json を生成
  const changelogData: ChangelogData = {
    generatedAt: new Date().toISOString(),
    months,
  };

  const dataDir = join(ROOT_DIR, 'src', 'data');
  if (!existsSync(dataDir)) {
    mkdirSync(dataDir, { recursive: true });
  }

  const jsonPath = join(dataDir, `changelog-${YEAR}.json`);
  writeFileSync(jsonPath, JSON.stringify(changelogData, null, 2));
  console.log(`📝 ${jsonPath} を生成しました\n`);

  // 6. generated/CHANGELOG-{YEAR}.md を生成
  const generatedDir = join(ROOT_DIR, 'generated');
  if (!existsSync(generatedDir)) {
    mkdirSync(generatedDir, { recursive: true });
  }

  const mdContent = generateMarkdown(changelogData);
  const mdPath = join(generatedDir, `CHANGELOG-${YEAR}.md`);
  writeFileSync(mdPath, mdContent);
  console.log(`📝 ${mdPath} を生成しました\n`);

  console.log('✅ データ生成が完了しました！');
}

/**
 * Markdown形式のCHANGELOGを生成
 */
function generateMarkdown(data: ChangelogData): string {
  const lines: string[] = [
    '# Claude Code CHANGELOG',
    '',
    `> 生成日時: ${new Date(data.generatedAt).toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}`,
    '',
  ];

  for (const month of data.months) {
    lines.push(`## ${month.label}`);
    lines.push('');

    for (const version of month.versions) {
      lines.push(`### ${version.version} (${version.releaseDateDisplay})`);
      lines.push('');
      lines.push('| 日本語 | English |');
      lines.push('|--------|---------|');

      for (const entry of version.entries) {
        lines.push(`| ${entry.ja} | ${entry.en} |`);
      }

      lines.push('');
    }
  }

  return lines.join('\n');
}

// 実行
main().catch(console.error);
