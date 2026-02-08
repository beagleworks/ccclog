/**
 * Codex CHANGELOG 操作ユーティリティ
 *
 * sync-codex-versions.ts および backfill-legacy-codex.ts から共通利用される
 * CHANGELOG ファイルの読み書き・セクション操作関数群。
 */

import * as fs from 'node:fs';
import * as path from 'node:path';
import type { ParsedEntry } from './parse-codex-releases.ts';

export const CONTENT_DIR = path.join(process.cwd(), 'content', 'codex');

/**
 * GitHub API 用のリクエストヘッダーを生成
 */
export function getGitHubHeaders(): Record<string, string> {
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github.v3+json',
    'User-Agent': 'ccclog',
  };

  const token = process.env.GITHUB_TOKEN;
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  return headers;
}

/**
 * バージョン文字列を比較
 * @returns v1 < v2 なら負、v1 === v2 なら 0、v1 > v2 なら正
 */
export function compareVersions(v1: string, v2: string): number {
  const parts1 = v1.split('.').map(Number);
  const parts2 = v2.split('.').map(Number);
  for (let i = 0; i < 3; i++) {
    if (parts1[i] !== parts2[i]) {
      return parts1[i] - parts2[i];
    }
  }
  return 0;
}

/**
 * セクション境界情報
 */
export interface SectionBoundary {
  version: string;
  start: number;
  end: number; // 次のセクション開始 or ファイル末尾
}

/**
 * ファイル内の ## X.Y.Z セクション境界を検出
 */
export function findSectionBoundaries(content: string): SectionBoundary[] {
  const regex = /^## (\d+\.\d+\.\d+)\b/gm;
  const boundaries: SectionBoundary[] = [];
  let match: RegExpExecArray | null;

  while ((match = regex.exec(content)) !== null) {
    boundaries.push({
      version: match[1],
      start: match.index,
      end: content.length, // 暫定値
    });
  }

  // end を次のセクション開始に更新
  for (let i = 0; i < boundaries.length - 1; i++) {
    boundaries[i].end = boundaries[i + 1].start;
  }

  return boundaries;
}

/**
 * 適切な位置にセクションを挿入
 *
 * 挿入ルール（boundaries は降順前提）:
 * 1. 自分が最新の場合: ヘッダー `---` の直後（先頭）
 * 2. 中間に入る場合: 自分より古い最初のセクションの直前
 * 3. 自分が最古の場合: ファイル末尾
 * 4. セクションが0個: ヘッダー `---` の直後
 * 5. `---` が無い場合: エラー終了
 */
export function insertVersionSection(
  filePath: string,
  content: string,
  version: string,
  newSection: string,
  boundaries: SectionBoundary[]
): void {
  // --- の位置を検出
  const headerEndMatch = content.match(/^---\n/m);
  if (!headerEndMatch || headerEndMatch.index === undefined) {
    console.error(`エラー: ${filePath} にヘッダー区切り(---)がありません`);
    process.exit(1);
  }
  const headerEnd = headerEndMatch.index + headerEndMatch[0].length;

  // 挿入位置を決定
  let insertAt: number;
  if (boundaries.length === 0) {
    // セクションが1つもない → ヘッダー直後
    insertAt = headerEnd;
  } else {
    // 自分より古い最初のセクションを探す（=その直前に挿入）
    const olderSection = boundaries.find((b) => compareVersions(b.version, version) < 0);
    if (olderSection) {
      // 中間 or 最新: 古いセクションの直前に挿入
      insertAt = olderSection.start;
    } else {
      // 全て自分より新しい（=自分が最古）→ ファイル末尾
      insertAt = content.length;
    }
  }

  const newContent = content.slice(0, insertAt) + newSection + content.slice(insertAt);
  fs.writeFileSync(filePath, newContent, 'utf-8');
}

/**
 * 指定バージョンのセクションを置換または挿入
 */
export function replaceVersionSection(year: number, version: string, newSection: string): void {
  const filePath = path.join(CONTENT_DIR, `CHANGELOG_${year}_JA.md`);
  const content = fs.readFileSync(filePath, 'utf-8');
  const boundaries = findSectionBoundaries(content);

  const target = boundaries.find((b) => b.version === version);
  if (target) {
    // 置換: start〜end を newSection で差し替え
    const newContent = content.slice(0, target.start) + newSection + content.slice(target.end);
    fs.writeFileSync(filePath, newContent, 'utf-8');
  } else {
    // 挿入
    insertVersionSection(filePath, content, version, newSection, boundaries);
  }
}

/**
 * 新バージョンのセクションを生成（3列テーブル: 日本語, English, Category）
 */
export function generateVersionSection(
  version: string,
  entries: ParsedEntry[],
  translations: string[] | null
): string {
  const lines: string[] = [];
  lines.push(`## ${version}`);
  lines.push('');
  lines.push('| 日本語 | English | Category |');
  lines.push('|--------|---------|----------|');

  if (entries.length === 0) {
    lines.push('| (変更履歴のエントリはありません) | (No changelog entries) | chores |');
  } else {
    for (let i = 0; i < entries.length; i++) {
      const jaText = translations?.[i]?.replace(/\|/g, '\\|') ?? '（翻訳待ち）';
      lines.push(`| ${jaText} | ${entries[i].text} | ${entries[i].category} |`);
    }
  }

  lines.push('');
  return lines.join('\n');
}
