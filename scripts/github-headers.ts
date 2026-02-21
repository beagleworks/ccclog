/**
 * GitHub API 用のリクエストヘッダーを生成
 * GITHUB_TOKEN があれば認証ヘッダーを付与する。
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
