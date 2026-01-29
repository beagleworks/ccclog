# Claude Code CHANGELOG Viewer

Claude Code の変更履歴（CHANGELOG）を日本語/英語の並列テーブル形式で閲覧できる静的Webアプリケーション。

## 必要環境

- Node.js 22+
- pnpm

## セットアップ

```bash
pnpm install
```

## よく使うコマンド

| コマンド | 説明 |
|---------|------|
| `pnpm dev` | 開発サーバー起動（http://localhost:4321） |
| `pnpm build` | データ生成 + 静的サイトビルド |
| `pnpm preview` | ビルド結果のプレビュー |
| `pnpm generate` | データ生成のみ（JSON/Markdown） |

### 開発の流れ

```bash
# 1. 開発サーバーを起動
pnpm dev

# 2. ブラウザで http://localhost:4321/ccclog/ を開く

# 3. 本番ビルドを確認
pnpm build && pnpm preview
```

## プロジェクト構成

```
ccclog/
├── CHANGELOG_2026_JA.md     # 元データ（Markdownテーブル）
├── scripts/                  # データ生成スクリプト
├── src/
│   ├── components/          # Astroコンポーネント
│   ├── data/                # 生成されるJSONデータ
│   ├── layouts/             # レイアウト
│   └── pages/               # ページ
├── generated/               # 生成されるMarkdown
├── dist/                    # ビルド出力
└── docs/SPEC.md             # 仕様書
```

## 技術スタック

- **フレームワーク**: Astro 5.x（SSG）
- **検索**: Fuse.js 7.x（ファジー検索）
- **ホスティング**: GitHub Pages

## ドキュメント

詳細な仕様は [docs/SPEC.md](docs/SPEC.md) を参照してください。
