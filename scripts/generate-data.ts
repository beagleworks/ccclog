/**
 * CHANGELOG データ生成スクリプト（マルチプロダクト対応）
 *
 * 1. CHANGELOG_{YEAR}_JA.md をパース
 * 2. npm レジストリ または GitHub Releases API からリリース日を取得
 * 3. src/data/[product/]changelog-{year}.json を生成
 *
 * 使用法:
 *   tsx scripts/generate-data.ts [year]                      # Claude Code（後方互換）
 *   tsx scripts/generate-data.ts --product codex --year 2026 # Codex
 *   tsx scripts/generate-data.ts --product claude-code 2026  # Claude Code（明示指定）
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseChangelog, type Entry } from './parse-changelog.js';
import {
  fetchReleases,
  fetchNpmPublishDates,
  interpolateMissingDates,
} from './fetch-releases.js';
import { getProduct, type ProductId, type ProductConfig } from '../src/lib/products.js';
import {
  emitRunReport,
  parseReportArgs,
  type ReportCliOptions,
  type ScriptRunReport,
} from './lib/run-report.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = join(__dirname, '..');

// ========================
// コマンドライン引数パース
// ========================

interface CliArgs {
  product: ProductId;
  year: string;
  reportOptions: ReportCliOptions;
}

function parseArgs(rawArgs: string[]): CliArgs {
  const parsed = parseReportArgs(rawArgs);
  const args = parsed.remainingArgs;
  let product: ProductId = 'claude-code';
  let year = '2026';

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    if (arg === '--product' && args[i + 1]) {
      const p = args[i + 1];
      if (p === 'claude-code' || p === 'codex') {
        product = p;
      } else {
        throw new Error(`不明なプロダクト: ${p}`);
      }
      i++;
    } else if (arg === '--year' && args[i + 1]) {
      year = args[i + 1];
      i++;
    } else if (/^\d{4}$/.test(arg)) {
      // 後方互換: 数字4桁のみの引数は年として扱う
      year = arg;
    }
  }

  return { product, year, reportOptions: parsed.report };
}

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

/** months の差分を比較し、generatedAt と contentChanged を決定する */
export function resolveGeneratedAt(
  existingJson: string | null,
  months: MonthGroup[]
): { generatedAt: string; contentChanged: boolean } {
  if (existingJson !== null) {
    try {
      const before = JSON.parse(existingJson);
      const contentChanged = JSON.stringify(before.months) !== JSON.stringify(months);
      if (!contentChanged && typeof before.generatedAt === 'string') {
        return { generatedAt: before.generatedAt, contentChanged: false };
      }
    } catch {
      // パース失敗時は変更ありとして扱う
    }
  }
  return { generatedAt: new Date().toISOString(), contentChanged: true };
}

// ========================
// ユーティリティ関数
// ========================

/**
 * 日付文字列を日本語表示形式に変換
 */
function formatDateJa(dateStr: string): string {
  const [year, month, day] = dateStr.split('-');
  return `${year}年${parseInt(month)}月${parseInt(day)}日`;
}

/**
 * 日付文字列から月キーを生成
 */
function getMonthKey(dateStr: string): string {
  return dateStr.substring(0, 7);
}

/**
 * 月キーから月ラベルを生成
 */
function formatMonthLabel(monthKey: string): string {
  const [year, month] = monthKey.split('-');
  return `${year}年${parseInt(month)}月`;
}

/**
 * semver比較
 */
function compareSemver(a: string, b: string): number {
  const partsA = a.split('.').map(Number);
  const partsB = b.split('.').map(Number);
  for (let i = 0; i < 3; i++) {
    if ((partsA[i] || 0) !== (partsB[i] || 0)) {
      return (partsA[i] || 0) - (partsB[i] || 0);
    }
  }
  return 0;
}

/**
 * 月内のバージョンをソート（リリース日降順、同日ならsemver降順）
 */
function sortVersionsInMonth(versions: Version[]): Version[] {
  return versions.sort((a, b) => {
    const dateCompare = b.releaseDate.localeCompare(a.releaseDate);
    if (dateCompare !== 0) return dateCompare;
    return compareSemver(b.version, a.version);
  });
}

// ========================
// 日付取得戦略
// ========================

/**
 * Claude Code 用の日付取得（npm優先 → GitHub → 補間）
 */
async function fetchReleaseDatesForClaudeCode(
  versionList: string[],
  config: ProductConfig
): Promise<Map<string, { version: string; releaseDate: string }>> {
  const releaseMap = new Map<string, { version: string; releaseDate: string }>();

  // 1. npm レジストリから公開日を取得（最も正確）
  console.log('📦 npm レジストリから公開日を取得中...');
  const npmDates = fetchNpmPublishDates(config.npmPackage!);
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

  // 2. npm で取得できなかったバージョンは GitHub タグから取得
  const missingAfterNpm = versionList.filter((v) => !releaseMap.has(v));
  let githubCount = 0;
  if (missingAfterNpm.length > 0) {
    console.log(`🏷️  GitHub タグから ${missingAfterNpm.length} バージョンの日付を取得中...`);
    const githubReleases = await fetchReleases(
      config.github.owner,
      config.github.repo,
      missingAfterNpm
    );
    for (const [version, info] of githubReleases) {
      if (!releaseMap.has(version)) {
        releaseMap.set(version, info);
        githubCount++;
      }
    }
    console.log(`   ${githubCount} バージョンの日付を取得\n`);
  }

  // 3. 補間
  const missingAfterGithub = versionList.filter((v) => !releaseMap.has(v));
  if (missingAfterGithub.length > 0) {
    console.log(`📊 ${missingAfterGithub.length} バージョンの日付を近隣バージョンから補間中...`);
    interpolateMissingDates(versionList, releaseMap);
    console.log(`   補間完了\n`);
  }

  // 統計情報
  console.log('📈 日付取得の統計:');
  console.log(`   npm レジストリ: ${npmCount} バージョン`);
  console.log(`   GitHub タグ: ${githubCount} バージョン`);
  console.log(`   補間: ${missingAfterGithub.length} バージョン`);
  console.log(`   合計: ${versionList.length} バージョン\n`);

  return releaseMap;
}

/**
 * Codex 用の日付取得（GitHub Releases → 補間）
 */
async function fetchReleaseDatesForCodex(
  versionList: string[],
  config: ProductConfig
): Promise<Map<string, { version: string; releaseDate: string }>> {
  const releaseMap = new Map<string, { version: string; releaseDate: string }>();

  console.log('🏷️  GitHub Releases から公開日を取得中...');

  // Codex のタグ形式に合わせてバージョンにプレフィックスを付与
  const taggedVersions = versionList.map((v) => `${config.github.tagPrefix}${v}`);

  const githubReleases = await fetchReleases(
    config.github.owner,
    config.github.repo,
    taggedVersions
  );

  let githubCount = 0;
  for (const [taggedVersion, info] of githubReleases) {
    // プレフィックスを除去してバージョン番号を取得
    const version = taggedVersion.replace(config.github.tagPrefix, '');
    if (versionList.includes(version)) {
      releaseMap.set(version, {
        version,
        releaseDate: info.releaseDate,
      });
      githubCount++;
    }
  }
  console.log(`   ${githubCount} バージョンの公開日を取得\n`);

  // 補間
  const missing = versionList.filter((v) => !releaseMap.has(v));
  if (missing.length > 0) {
    console.log(`📊 ${missing.length} バージョンの日付を近隣バージョンから補間中...`);
    interpolateMissingDates(versionList, releaseMap);
    console.log(`   補間完了\n`);
  }

  // 統計情報
  console.log('📈 日付取得の統計:');
  console.log(`   GitHub Releases: ${githubCount} バージョン`);
  console.log(`   補間: ${missing.length} バージョン`);
  console.log(`   合計: ${versionList.length} バージョン\n`);

  return releaseMap;
}

// ========================
// メイン処理
// ========================

interface MainResult {
  changed: boolean;
  changedFiles: string[];
  reportOptions: ReportCliOptions;
}

async function main(rawArgs: string[] = process.argv.slice(2)): Promise<MainResult> {
  const { product: productId, year, reportOptions } = parseArgs(rawArgs);
  const config = getProduct(productId);

  console.log(`📦 CHANGELOG データ生成を開始 (${config.shortName} / ${year}年)...\n`);

  // パス決定（サブディレクトリがある場合はそれを付与）
  const contentDir = join(ROOT_DIR, 'content', config.contentSubdir);
  const dataDir = join(ROOT_DIR, 'src', 'data', config.dataSubdir);
  // 1. CHANGELOGファイルを読み込み・パース
  const changelogPath = join(contentDir, `CHANGELOG_${year}_JA.md`);
  if (!existsSync(changelogPath)) {
    throw new Error(`❌ ファイルが見つかりません: ${changelogPath}`);
  }

  console.log(`📖 ${changelogPath} を読み込み中...`);
  const content = readFileSync(changelogPath, 'utf-8');
  const parsedVersions = parseChangelog(content, productId);
  console.log(`   ${parsedVersions.length} バージョンを検出\n`);

  if (parsedVersions.length === 0) {
    console.log('⚠️  バージョンが見つかりませんでした。処理を終了します。');
    return {
      changed: false,
      changedFiles: [],
      reportOptions,
    };
  }

  // 2. リリース日を取得（プロダクトごとに異なる戦略）
  const versionList = parsedVersions.map((v) => v.version);
  const releaseMap =
    productId === 'codex'
      ? await fetchReleaseDatesForCodex(versionList, config)
      : await fetchReleaseDatesForClaudeCode(versionList, config);

  // 3. バージョン情報にリリース日を追加
  const versions: Version[] = parsedVersions.map((pv) => {
    const releaseDate = releaseMap.get(pv.version)?.releaseDate || new Date().toISOString().split('T')[0];
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
    const group = monthMap.get(monthKey);
    if (group) {
      group.push(version);
    } else {
      monthMap.set(monthKey, [version]);
    }
  }

  // 月キーでソート（降順）
  const sortedMonthKeys = Array.from(monthMap.keys()).sort().reverse();
  const months: MonthGroup[] = sortedMonthKeys.map((key) => ({
    key,
    label: formatMonthLabel(key),
    versions: sortVersionsInMonth(monthMap.get(key)!),
  }));

  // 5. changelog.json を生成
  if (!existsSync(dataDir)) {
    mkdirSync(dataDir, { recursive: true });
  }

  const jsonPath = join(dataDir, `changelog-${year}.json`);
  const existingJson = existsSync(jsonPath) ? readFileSync(jsonPath, 'utf-8') : null;
  const { generatedAt, contentChanged } = resolveGeneratedAt(existingJson, months);

  const changelogData: ChangelogData = {
    generatedAt,
    months,
  };

  if (contentChanged) {
    writeFileSync(jsonPath, JSON.stringify(changelogData, null, 2));
    console.log(`📝 ${jsonPath} を生成しました\n`);
  } else {
    console.log(`⏭️  ${jsonPath} は変更なし（スキップ）\n`);
  }

  console.log('✅ データ生成が完了しました！');
  return {
    changed: contentChanged,
    changedFiles: contentChanged ? [pathRelativeToRoot(jsonPath)] : [],
    reportOptions,
  };
}

function pathRelativeToRoot(targetPath: string): string {
  return relative(ROOT_DIR, targetPath);
}

// 直接実行時のみ main() を呼ぶ（import 時の副作用防止）
const isDirectRun = process.argv[1] === fileURLToPath(import.meta.url);
if (isDirectRun) {
const start = Date.now();
main()
  .then((result) => {
    const report: ScriptRunReport = {
      script: 'generate-data',
      status: 'ok',
      changed: result.changed,
      changedFiles: result.changedFiles,
      elapsedMs: Date.now() - start,
      warnings: [],
    };
    emitRunReport(result.reportOptions, report);
  })
  .catch((error) => {
    const message = error instanceof Error ? error.message : String(error);
    console.error(error);
    let reportOptions: ReportCliOptions = { reportJson: false, reportFile: null };
    try {
      reportOptions = parseReportArgs(process.argv.slice(2)).report;
    } catch {
      // ignore
    }
    emitRunReport(reportOptions, {
      script: 'generate-data',
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
