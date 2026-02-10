/**
 * Codex の全年分の JSON データを生成する
 *
 * content/codex/ ディレクトリから年を列挙し、
 * 各年の generate-data.ts を実行して JSON を生成する。
 *
 * 複数年データが存在する場合でも、全ての JSON を漏れなく生成する。
 */

import { execFileSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { listChangelogYears } from '../src/lib/server/changelog-years.js';

// リポジトリルートを基準に cwd を固定
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = join(__dirname, '..');

// listChangelogYears() が process.cwd() 基準のため、先に chdir
process.chdir(ROOT_DIR);

const years = listChangelogYears('codex');

// 生成対象が 0 年なら失敗（CI での事故検知）
if (years.length === 0) {
  console.error('Error: No Codex changelog years found in content/codex/');
  process.exit(1);
}

console.log(`Generating Codex JSON for years: ${years.join(', ')}`);

for (const year of years) {
  console.log(`  ${year}...`);
  execFileSync('tsx', ['scripts/generate-data.ts', '--product', 'codex', '--year', year], {
    cwd: ROOT_DIR,
    stdio: 'inherit',
  });
}

console.log('Done.');
