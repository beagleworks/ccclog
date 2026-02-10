/**
 * Codex CHANGELOG 操作ユーティリティ
 *
 * sync-codex-versions.ts から利用される
 * CHANGELOG ファイルの読み書き・セクション生成関数群。
 */

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
