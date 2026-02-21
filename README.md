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

### プレーン表示

表示モードとは独立した「プレーン」トグルで、バージョンごとの更新内容を貼り付けやすいテキスト形式で表示できます。表示言語は現在の表示モードに追従し、URL パラメータ `?plain=1` でも有効化できます。

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

ページ上部の検索ボックスから、日本語・英語どちらでも検索できます。検索モードは「日本語のみ」「原文のみ」「両方」から選べます。  
英語は単語単位の AND 完全一致（`pre-commit` は1語扱い）、日本語は 2-gram 候補抽出 + `includes` 最終判定で検索します。  
ハイライトは検索判定と同一条件で付与され、英語は一致トークン部分・日本語は一致セル全体に適用されます。`mode=both` は OR 結合（日本語または英語のどちらか一致）です。  
日本語1文字クエリは日本語検索を実行せず、「2文字以上で入力してください」を表示します（`mode=both` では英語側のみ検索）。
検索インデックスの読み込みに失敗した場合は、検索UIを自動で無効化し、エラーメッセージを表示します（通常の閲覧は継続可能）。

URL パラメータで検索状態を共有することもできます。

```
?q=MCP           … 検索語
?mode=ja         … 検索モード（ja / en / 省略で両方）
?display=en      … 表示モード（ja / en / 省略で両方）
?plain=1         … プレーン表示を有効化（省略で無効）
```

### 月別グルーピング

変更履歴は月単位でまとめられ、折りたたみ式で表示されます。最新月は自動的に展開されます。各月ヘッダーにはリリース数と変更項目数が表示されるので、更新の活発さが一目でわかります。

### 年別ナビゲーション

ヘッダーの年リンクから過去の年のリリース履歴に切り替えられます。現在 2025 年・2026 年のデータを掲載しています。

## データの正確性について

本リポジトリをフォークしてビルドしても、[公開サイト](https://beagleworks.github.io/ccclog/)と同一のデータが生成される保証はありません。公開サイトでは一部のデータに対して手入力による修正や LLM を利用した加筆を行っています。

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
| `pnpm build` | データ生成 + OGP画像生成 + 静的サイトビルド（ローカル向け） |
| `pnpm build:ci` | OGP画像生成 + 静的サイトビルド（データ再生成なし、CI向け） |
| `pnpm preview` | ビルド結果のプレビュー |
| `pnpm generate` | 全プロダクトのデータ生成（JSON、検索インデックス生成を含む） |
| `pnpm generate:search-index` | 検索インデックスJSONを生成（`src/data/search/*.json`） |
| `pnpm sync-versions` | Claude Code の新バージョン検出・追記 |
| `pnpm sync-codex-versions` | Codex の新バージョン検出・追記 |
| `pnpm sync-codex-versions -- --year 2025` | Codex の指定年のみ新バージョン検出・追記 |
| `pnpm retranslate` | 「翻訳待ち」エントリの再翻訳 |
| `pnpm retranslate -- --product codex` | Codex の「翻訳待ち」エントリの再翻訳 |

`retranslate` の `--retranslate-all` オプションは廃止されました。

### CI 運用メモ

- 定期実行（`schedule`）/ 手動実行（`workflow_dispatch`）では、`sync-*` 実行後に `pnpm generate` を実行し、`content/**/*.md` と `src/data/**/*.json` を同一コミットで反映します。
- `push` では同期を行わず、`pnpm build:ci` によるビルドとデプロイのみを実行します。
- bot 自動コミット（`github-actions[bot]`）は push ビルド/デプロイを起動しないように制御しています。

### 検索インデックス運用メモ

- `pnpm generate:search-index` は各インデックスJSONのサイズをログ出力し、2MB超過時に warning を出します。
- 監視対象は `src/data/search/*.json` と、対応ページの最終HTMLサイズです（特にエントリ数が多い年）。
- warning が出たら、次リリースまでに外部JSONの非同期読み込み（`fetch`）方式へ切替えるタスクを起票してください。
- 2MB未満でも 1.5MB を超えた時点で「要監視」とし、増加傾向が続く場合は早めに切替準備を開始してください。

### プロジェクト構成

```
ccclog/
├── content/                     # 元データ（Markdownテーブル）
│   ├── CHANGELOG_2026_JA.md     # Claude Code
│   ├── CHANGELOG_2025_JA.md
│   └── codex/                   # Codex
│       ├── CHANGELOG_2025_JA.md
│       └── CHANGELOG_2026_JA.md
├── scripts/                     # データ生成スクリプト
├── src/
│   ├── components/              # Astroコンポーネント
│   ├── data/                    # 生成・Git追跡されるJSONデータ
│   │   ├── changelog-*.json     # Claude Code
│   │   ├── codex/               # Codex
│   │   └── search/              # 検索インデックスJSON
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
- **検索**: ビルド時生成インデックス（EN単語AND一致 / JA 2-gram）
- **ホスティング**: GitHub Pages
- **CI/CD**: GitHub Actions

### ドキュメント

| ファイル | 内容 |
|----------|------|
| [docs/SPEC.md](docs/SPEC.md) | 仕様書（データ、UI、パイプライン、CI/CD、セキュリティ等） |
