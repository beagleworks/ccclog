/**
 * GitHub Releases API からリリース日を取得する
 *
 * 日付取得の優先順位:
 * 1. npm レジストリ - 実際の公開日（最も正確）
 * 2. Release API - 公式リリース日
 * 3. CHANGELOG.md コミット日 - フォールバック
 * 4. 補間 - どちらも取得できない場合の最終手段
 *
 * 認証:
 * - GITHUB_TOKEN 環境変数があれば Authorization ヘッダーを付与
 * - レート制限時は警告を出力して継続（取得できた範囲で動作）
 */

import { execSync } from 'node:child_process';

/**
 * GitHub API 用のリクエストヘッダーを生成
 * GITHUB_TOKEN があれば認証ヘッダーを付与
 */
function getGitHubHeaders(): Record<string, string> {
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

export interface ReleaseInfo {
  version: string;
  releaseDate: string; // YYYY-MM-DD (JST)
}

/**
 * UTC日時をJST（日本標準時）に変換
 * @param utcDate UTC日時文字列 (ISO 8601形式)
 * @returns JST日付文字列 (YYYY-MM-DD)
 */
function utcToJst(utcDate: string): string {
  const date = new Date(utcDate);
  // JSTはUTC+9
  const jstOffset = 9 * 60 * 60 * 1000;
  const jstDate = new Date(date.getTime() + jstOffset);
  return jstDate.toISOString().split('T')[0];
}

/**
 * GitHub Releases API からリリース情報を取得する
 * @param owner リポジトリオーナー
 * @param repo リポジトリ名
 * @param versions 取得したいバージョンのリスト
 * @returns バージョンとリリース日のマップ
 */
export async function fetchReleases(
  owner: string,
  repo: string,
  versions: string[]
): Promise<Map<string, ReleaseInfo>> {
  const releases = new Map<string, ReleaseInfo>();
  const versionsToFetch = new Set(versions);

  let page = 1;
  const perPage = 100;

  while (versionsToFetch.size > 0) {
    const url = `https://api.github.com/repos/${owner}/${repo}/releases?per_page=${perPage}&page=${page}`;

    try {
      const response = await fetch(url, {
        headers: getGitHubHeaders(),
      });

      if (!response.ok) {
        if (response.status === 403) {
          console.warn(
            'GitHub API rate limit reached. Using fallback dates.'
          );
          break;
        }
        throw new Error(`GitHub API error: ${response.status}`);
      }

      const data = (await response.json()) as Array<{
        tag_name: string;
        published_at: string;
      }>;

      if (data.length === 0) {
        break;
      }

      for (const release of data) {
        // タグ名からバージョンを抽出 (例: "v2.1.23" -> "2.1.23")
        const version = release.tag_name.replace(/^v/, '');

        if (versionsToFetch.has(version)) {
          releases.set(version, {
            version,
            releaseDate: utcToJst(release.published_at),
          });
          versionsToFetch.delete(version);
        }
      }

      page++;

      // 念のため無限ループ防止
      if (page > 50) {
        console.warn('Too many pages, stopping fetch');
        break;
      }
    } catch (error) {
      console.error('Error fetching releases:', error);
      break;
    }
  }

  return releases;
}

/**
 * 取得できなかったリリース日を近隣バージョンから補間する
 * @param versions バージョンリスト（降順）
 * @param releaseMap 取得済みのリリース日マップ（この関数内で更新される）
 */
export function interpolateMissingDates(
  versions: string[],
  releaseMap: Map<string, ReleaseInfo>
): void {
  for (let i = 0; i < versions.length; i++) {
    const version = versions[i];
    if (releaseMap.has(version)) continue;

    // 前後で取得できているバージョンを探す
    let prevDate: string | null = null;
    let nextDate: string | null = null;

    // 前方（新しいバージョン）を探す
    for (let j = i - 1; j >= 0; j--) {
      const info = releaseMap.get(versions[j]);
      if (info) {
        prevDate = info.releaseDate;
        break;
      }
    }

    // 後方（古いバージョン）を探す
    for (let j = i + 1; j < versions.length; j++) {
      const info = releaseMap.get(versions[j]);
      if (info) {
        nextDate = info.releaseDate;
        break;
      }
    }

    // 補間または推定
    let estimatedDate: string;
    if (prevDate && nextDate) {
      // 両方ある場合は新しいバージョンの日付を使用
      estimatedDate = prevDate;
    } else if (prevDate) {
      estimatedDate = prevDate;
    } else if (nextDate) {
      estimatedDate = nextDate;
    } else {
      // フォールバック（すべてのバージョンで取得できなかった場合）
      estimatedDate = new Date().toISOString().split('T')[0];
    }

    releaseMap.set(version, {
      version,
      releaseDate: estimatedDate,
    });
  }
}

// ========================
// CHANGELOG.md コミット履歴からの日付取得
// ========================

interface GitHubCommit {
  sha: string;
  commit: {
    author: {
      date: string;
    };
  };
}

interface GitHubCommitDetail {
  sha: string;
  commit: {
    author: {
      date: string;
    };
  };
  files?: Array<{
    filename: string;
    patch?: string;
  }>;
}

/**
 * gh CLI を使用して CHANGELOG.md のコミット履歴からバージョン別の日付を取得する
 * @param owner リポジトリオーナー
 * @param repo リポジトリ名
 * @returns バージョンとコミット日のマップ
 */
export async function fetchChangelogCommitDates(
  owner: string,
  repo: string
): Promise<Map<string, string>> {
  const result = new Map<string, string>();

  try {
    // gh CLI で CHANGELOG.md のコミット履歴を取得（ページネーション対応）
    console.log('   CHANGELOG.md のコミット履歴を取得中...');
    const commitsJson = execSync(
      `gh api "repos/${owner}/${repo}/commits?path=CHANGELOG.md&per_page=100" --paginate`,
      { encoding: 'utf-8', maxBuffer: 50 * 1024 * 1024 }
    );
    const commits: GitHubCommit[] = JSON.parse(commitsJson);
    console.log(`   ${commits.length} コミットを検出`);

    // 各コミットの差分を取得してバージョン番号を抽出
    let processedCount = 0;
    for (const commit of commits) {
      try {
        const commitJson = execSync(
          `gh api "repos/${owner}/${repo}/commits/${commit.sha}"`,
          { encoding: 'utf-8' }
        );
        const commitData: GitHubCommitDetail = JSON.parse(commitJson);

        // CHANGELOG.md の差分からバージョン番号を抽出
        for (const file of commitData.files || []) {
          if (file.filename === 'CHANGELOG.md' && file.patch) {
            // 追加された行から "## X.Y.Z" パターンを検出
            const versionMatches = file.patch.match(/^\+## (\d+\.\d+\.\d+)/gm);
            if (versionMatches) {
              for (const match of versionMatches) {
                const version = match.replace('+## ', '');
                const commitDate = utcToJst(commitData.commit.author.date);
                result.set(version, commitDate);
              }
            }
          }
        }

        processedCount++;
        if (processedCount % 50 === 0) {
          console.log(`   ${processedCount}/${commits.length} コミットを処理中...`);
        }
      } catch (error) {
        // 個別のコミット取得エラーは無視して続行
        continue;
      }
    }

    console.log(`   ${result.size} バージョンの日付をコミット履歴から取得`);
  } catch (error) {
    console.warn('   CHANGELOG.md コミット履歴の取得に失敗:', error);
  }

  return result;
}

// ========================
// npm レジストリからの日付取得
// ========================

interface NpmTimeData {
  [version: string]: string;
}

/**
 * npm レジストリからパッケージの公開日を取得する
 * @param packageName npm パッケージ名
 * @returns バージョンと公開日のマップ
 */
export function fetchNpmPublishDates(packageName: string): Map<string, string> {
  const result = new Map<string, string>();

  try {
    console.log(`   npm レジストリから公開日を取得中...`);
    const output = execSync(`npm view ${packageName} time --json`, {
      encoding: 'utf-8',
      maxBuffer: 10 * 1024 * 1024,
    });
    const timeData: NpmTimeData = JSON.parse(output);

    for (const [version, date] of Object.entries(timeData)) {
      // "created" と "modified" は除外
      if (version === 'created' || version === 'modified') continue;

      result.set(version, utcToJst(date));
    }

    console.log(`   ${result.size} バージョンの公開日を取得`);
  } catch (error) {
    console.warn('   npm レジストリからの取得に失敗:', error);
  }

  return result;
}
