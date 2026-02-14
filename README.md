# ccclog

**AI コーディングツールの更新履歴を、日本語で読めるサイトです。**

https://beagleworks.github.io/ccclog/

[Claude Code](https://claude.com/claude-code) と [OpenAI Codex](https://github.com/openai/codex) の CHANGELOG（変更履歴）を日本語に翻訳し、原文と並べて掲載しています。

## 対応プロダクト

| プロダクト | 開発元 | ページ |
|-----------|--------|--------|
| Claude Code | Anthropic | [トップページ](https://beagleworks.github.io/ccclog/) |
| OpenAI Codex | OpenAI | [/codex/](https://beagleworks.github.io/ccclog/codex/) |

## 主な機能

### 日英並列表示

原文（英語）と日本語訳をテーブル形式で並べて表示します。表示モードを「日本語のみ」「原文のみ」「両方」の 3 つから切り替えられるので、用途に応じた読み方ができます。

### カテゴリ色分け

各エントリは内容に応じて左ボーダーの色で分類されています。ページ上部の凡例で色の意味を確認できます。

**Claude Code（5種）**

| 色 | 意味 |
|----|------|
| 🟢 緑 | 新機能の追加 |
| 🟠 オレンジ | バグ修正 |
| 🟣 紫 | 既存機能の変更 |
| 🔵 青 | 改善 |
| ⚪ グレー | その他 |

**Codex（4種）**

| 色 | 意味 |
|----|------|
| 🟢 緑 | 新機能 |
| 🟠 オレンジ | バグ修正 |
| 🔵 青 | ドキュメント |
| ⚪ グレー | その他 |

### 検索

ページ上部の検索ボックスから、日本語・英語どちらでも全文検索できます。検索モードは「日本語のみ」「原文のみ」「両方」から選べます。検索語とセル全文が一致した場合のみ、該当セルが黄色でハイライトされます（英語は大文字小文字を区別しません）。

URL パラメータで検索状態を共有することもできます。

```
?q=MCP           … 検索語
?mode=ja         … 検索モード（ja / en / 省略で両方）
?display=en      … 表示モード（ja / en / 省略で両方）
```

### 月別グルーピング

変更履歴は月単位でまとめられ、折りたたみ式で表示されます。最新月は自動的に展開されます。各月ヘッダーにはリリース数と変更項目数が表示されるので、更新の活発さが一目でわかります。

### 年別ナビゲーション

ヘッダーの年リンクから過去の年のリリース履歴に切り替えられます。現在 2025 年・2026 年のデータを掲載しています。

## 更新頻度

GitHub Actions により 1 日 7 回（JST 6:00〜24:00）自動で最新バージョンを検出・翻訳・公開しています。新バージョンのリリースから通常数時間以内に反映されます。

---

## 開発者向け情報

### 必要環境

- Node.js 22+
- pnpm

### セットアップ

```bash
pnpm install
```

### よく使うコマンド

| コマンド | 説明 |
|---------|------|
| `pnpm dev` | 開発サーバー起動（http://localhost:4321） |
| `pnpm build` | データ生成 + 静的サイトビルド |
| `pnpm preview` | ビルド結果のプレビュー |
| `pnpm generate` | 全プロダクトのデータ生成（JSON） |
| `pnpm sync-versions` | Claude Code の新バージョン検出・追記 |
| `pnpm sync-codex-versions` | Codex の新バージョン検出・追記 |
| `pnpm sync-codex-versions -- --year 2025` | Codex の指定年のみ新バージョン検出・追記 |
| `pnpm retranslate` | 「翻訳待ち」エントリの再翻訳 |
| `pnpm retranslate -- --product codex` | Codex の「翻訳待ち」エントリの再翻訳 |

`retranslate` の `--retranslate-all` オプションは廃止されました。

### プロジェクト構成

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
├── dist/                        # ビルド出力
└── docs/                        # 仕様書
```

### 技術スタック

- **フレームワーク**: Astro 5.x（SSG）
- **検索**: Fuse.js 7.x（ファジー検索）
- **ホスティング**: GitHub Pages
- **CI/CD**: GitHub Actions

### ドキュメント

| ファイル | 内容 |
|----------|------|
| [docs/SPEC.md](docs/SPEC.md) | 仕様書（データ、UI、パイプライン、CI/CD、セキュリティ等） |
