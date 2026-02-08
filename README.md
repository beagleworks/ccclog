# CHANGELOG Viewer

Claude Code / OpenAI Codex の変更履歴（CHANGELOG）を日本語/英語の並列テーブル形式で閲覧できる静的Webアプリケーション。

🔗 **https://beagleworks.github.io/ccclog/**

## 対応プロダクト

| プロダクト | URL | データソース |
|-----------|-----|-------------|
| Claude Code | `/` | npm + GitHub CHANGELOG |
| OpenAI Codex | `/codex/` | GitHub Releases |

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
| `pnpm generate` | 全プロダクトのデータ生成（JSON/Markdown） |
| `pnpm sync-versions` | Claude Code の新バージョン検出・追記 |
| `pnpm sync-codex-versions` | Codex の新バージョン検出・追記 |
| `pnpm sync-codex-versions --year 2025` | Codex の指定年のみ新バージョン検出・追記 |
| `pnpm sync-codex-versions --version 0.4.0` | 指定バージョンのセクションを置換 |
| `pnpm sync-codex-versions --before 0.50.0` | 指定バージョンより前を全て置換 |
| `pnpm retranslate` | 「翻訳待ち」エントリの再翻訳 |
| `pnpm backfill-legacy-codex` | Codex 旧形式リリースの AI バックフィル |
| `pnpm backfill-legacy-codex --dry-run` | バックフィル結果を書き込まずにプレビュー |
| `pnpm backfill-legacy-codex --version 0.50.0` | 指定バージョンのみバックフィル |
| `pnpm backfill-legacy-codex --overwrite --version 0.50.0` | 既存エントリを上書きして再翻訳 |

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
├── content/                     # 元データ（Markdownテーブル）
│   ├── CHANGELOG_2026_JA.md     # Claude Code
│   ├── CHANGELOG_2025_JA.md
│   └── codex/                   # Codex
│       └── CHANGELOG_2026_JA.md
├── scripts/                     # データ生成スクリプト
├── src/
│   ├── components/              # Astroコンポーネント
│   ├── data/                    # 生成されるJSONデータ
│   │   ├── changelog-*.json     # Claude Code
│   │   └── codex/               # Codex
│   ├── layouts/                 # レイアウト
│   ├── lib/                     # 共通ライブラリ
│   └── pages/                   # ページ
│       ├── [year].astro         # Claude Code
│       └── codex/               # Codex
├── generated/                   # 生成されるMarkdown
├── dist/                        # ビルド出力
└── docs/                        # 仕様書
```

## 技術スタック

- **フレームワーク**: Astro 5.x（SSG）
- **検索**: Fuse.js 7.x（ファジー検索）
- **ホスティング**: GitHub Pages
- **CI/CD**: GitHub Actions（定期自動更新）

## ドキュメント

| ファイル | 内容 |
|----------|------|
| [docs/SPEC.md](docs/SPEC.md) | 共通仕様 |
| [docs/SPEC_CLAUDE.md](docs/SPEC_CLAUDE.md) | Claude Code 固有仕様 |
| [docs/SPEC_CODEX.md](docs/SPEC_CODEX.md) | Codex 固有仕様 |
| [docs/SPEC_PIPELINE.md](docs/SPEC_PIPELINE.md) | パイプライン仕様 |
