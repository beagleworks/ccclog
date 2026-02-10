/**
 * マルチプロダクト対応のための設定定義
 *
 * Claude Code と Codex の設定を一元管理する
 */

export type ProductId = 'claude-code' | 'codex';

export interface ProductConfig {
  /** プロダクトID */
  id: ProductId;
  /** 表示名（フル） */
  name: string;
  /** 表示名（短縮、ナビ用） */
  shortName: string;
  /** ベースパス（'/' または '/codex/'） */
  basePath: string;
  /** content/ 配下のサブディレクトリ（Claude Code は空文字列） */
  contentSubdir: string;
  /** src/data/ 配下のサブディレクトリ（Claude Code は空文字列） */
  dataSubdir: string;
  /** npm パッケージ名（Codex は undefined） */
  npmPackage?: string;
  /** GitHub リポジトリ情報 */
  github: {
    owner: string;
    repo: string;
    /** タグのプレフィックス（'v' または 'rust-v'） */
    tagPrefix: string;
  };
  /** リリース日の注意書き */
  releaseDateSourceNote: string;
  /** フッターのリンク */
  footerLinks: Array<{ label: string; href: string }>;
}

/**
 * プロダクト設定一覧
 */
export const products: ProductConfig[] = [
  {
    id: 'claude-code',
    name: 'Claude Code CHANGELOG Viewer',
    shortName: 'Claude Code',
    basePath: '/',
    contentSubdir: '',
    dataSubdir: '',
    npmPackage: '@anthropic-ai/claude-code',
    github: {
      owner: 'anthropics',
      repo: 'claude-code',
      tagPrefix: 'v',
    },
    releaseDateSourceNote:
      '※ リリース日は npm 公開日を基に表示しており、正確でない場合があります',
    footerLinks: [
      { label: 'Claude Code', href: 'https://github.com/anthropics/claude-code' },
      { label: 'Claude.ai', href: 'https://claude.ai' },
    ],
  },
  {
    id: 'codex',
    name: 'OpenAI Codex CHANGELOG Viewer',
    shortName: 'Codex',
    basePath: '/codex/',
    contentSubdir: 'codex',
    dataSubdir: 'codex',
    npmPackage: undefined,
    github: {
      owner: 'openai',
      repo: 'codex',
      tagPrefix: 'rust-v',
    },
    releaseDateSourceNote:
      '※ リリース日は GitHub Releases の公開日を基に表示しています',
    footerLinks: [
      { label: 'Codex', href: 'https://github.com/openai/codex' },
      { label: 'OpenAI', href: 'https://openai.com' },
    ],
  },
];

/**
 * プロダクトIDからプロダクト設定を取得
 */
export function getProduct(id: ProductId): ProductConfig {
  const product = products.find((p) => p.id === id);
  if (!product) {
    throw new Error(`Unknown product: ${id}`);
  }
  return product;
}
