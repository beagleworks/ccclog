/**
 * GitHub Releases API からリリース日を取得する
 */

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
        headers: {
          Accept: 'application/vnd.github.v3+json',
          'User-Agent': 'ccclog',
        },
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
 * フォールバック: リリース日が取得できなかった場合のダミー日付を生成
 * @param version バージョン番号
 * @returns 推定日付 (YYYY-MM-DD)
 */
export function estimateReleaseDate(version: string): string {
  // バージョン番号から日付を推定（仮の実装）
  // 実際にはGitHub APIから取得するのが望ましい
  const today = new Date();
  return today.toISOString().split('T')[0];
}
