# OpenAI Codex 仕様書

この文書は OpenAI Codex 固有仕様をまとめたものです。共通仕様は `docs/SPEC.md`、パイプライン仕様は `docs/SPEC_PIPELINE.md` を参照してください。

---

## 1. プロダクト概要

| 項目 | 値 |
|------|----|
| `productId` | `codex` |
| `basePath` | `/codex/` |
| `contentDir` | `content/codex/` |
| `dataDir` | `src/data/codex/` |
| `npmPackage` | （なし） |
| `github.owner` | `openai` |
| `github.repo` | `codex` |
| `github.tagPrefix` | `rust-v` |

---

## 2. Codex 入力データ仕様（GitHub Releases）

### 2.1 データソース
- GitHub Releases API: `https://api.github.com/repos/openai/codex/releases`

### 2.2 対象リリースのフィルタ
| 条件 | 対象/除外 |
|------|----------|
| `rust-vX.Y.Z` 形式のタグ | 対象 |
| `-alpha` を含むタグ | 除外 |
| `prerelease: true` | 除外（`-beta`/`-rc` もここで除外） |

### 2.3 バージョン表示
- タグ名からプレフィックスを除去: `rust-v0.95.0` → `0.95.0`

### 2.4 年判定基準
- GitHub Releases の `published_at` を JST（UTC+9）に変換して年を決定
- Claude Code の npm 公開日と同様のロジックを適用

### 2.5 Release body のエントリ抽出ルール

| 項目 | ルール |
|------|--------|
| 抽出対象 | `- ` または `* ` で始まる箇条書き、または `#数字 —` 形式の PR 参照 |
| カテゴリ情報 | セクションヘッダー（`## New Features` 等）から抽出・保持 |
| 除外対象 | コードブロック、アセット列挙、空行のみのブロック、Changelog 行以降、未知セクション |
| 正規化 | CRLF→LF変換、各行の先頭空白除去、1行化、連続空白の圧縮、`\|` のエスケープ |
| リンク | Markdown形式のまま保持（UI側はテキスト表示） |

### 2.6 カテゴリ抽出仕様

#### 2.6.1 カテゴリ定義
本家 GitHub Releases のセクションヘッダーをそのままカテゴリとして使用する。

| セクションヘッダー | カテゴリID | UI表示色 |
|-------------------|-----------|---------|
| `## New Features` | `new-features` | 緑 (#3fb950) |
| `## Features` | `new-features` | 緑 (#3fb950) |
| `## Highlights` | `new-features` | 緑 (#3fb950) |
| `## Bug Fixes` | `bug-fixes` | オレンジ (#f0883e) |
| `## Documentation` | `documentation` | 青 (#79c0ff) |
| `## Chores` | `chores` | グレー (#8b949e) |
| `## Maintenance` | `chores` | グレー (#8b949e) |

#### 2.6.2 見出し正規化ルール
表記揺れに対応するため、見出しテキストを正規化して比較する。

| 処理 | 例 |
|------|-----|
| 小文字化 | `## NEW FEATURES` → `new features` |
| 連続空白の圧縮 | `## Bug  Fixes` → `bug fixes` |
| 末尾の `:`, `\|`, `-` を除去 | `## Bug Fixes:` → `bug fixes` |

#### 2.6.3 除外ルール
| 条件 | 挙動 |
|------|------|
| 未知のセクション（`## Other` 等） | そのセクション配下の箇条書きは除外 |
| 補足付き見出し（`## Bug Fixes (Windows):` 等） | 未知扱いとして除外（安全側に倒す） |
| Changelog 行以降 | `## Changelog`、`Changelog`、`Full Changelog:` で始まる行で終了 |
| PRs Merged 行以降 | 既知カテゴリが先に出現した場合のみ終了（PRs Merged のみのリリースは `new-features` として取得） |
| セクションヘッダー前の箇条書き | デフォルト `new-features`（実データでは発生しない） |

#### 2.6.4 見出しレベル
`#`, `##`, `###` に対応。`####` 以下はセクション切り替えとして認識しない。

**アセット列挙の除外ルール（詳細）**
`- ` で始まる行のうち、以下に該当するものは「アセット列挙」とみなして除外する。
- 生URL形式で、拡張子が `zip`, `tar.gz`, `exe`, `msi`, `dmg`, `deb`, `rpm`, `apk`, `ipa` に一致するもの
- Markdownリンク形式で、リンクテキストまたはURLに上記拡張子が含まれるもの

### 2.7 エントリ0件バージョンの表示

| 項目 | 内容 |
|------|------|
| 対象 | パース結果が0件の正式リリース |
| 表示 | プレースホルダ行「(No changelog entries)」を表示 |
| カテゴリ | `chores` |

---

## 3. 日付取得戦略

| プロダクト | 優先順位 |
|-----------|---------|
| Codex | GitHub Releases (`published_at`) → 補間 |

---

## 4. 取得対象年・バージョンの指定

`sync-codex-versions.ts` は取得対象年やバージョンをオプションで制御できる。

| 使い方 | 対象 | 動作 |
|--------|------|------|
| `pnpm sync-codex-versions` | 当年の未記載バージョン | 追記 |
| `pnpm sync-codex-versions --year 2025` | 指定年の未記載 | 追記 |
| `pnpm sync-codex-versions --rebuild` | 全年度 | ファイル再生成 |
| `pnpm sync-codex-versions --rebuild --year 2025` | 指定年 | ファイル再生成 |
| `pnpm sync-codex-versions --version 0.4.0` | 指定バージョン | セクション置換 |
| `pnpm sync-codex-versions --before 0.50.0` | 指定より前 | セクション置換 |

### 4.1 セクション置換モード（--version / --before）

- 既存ファイルを維持し、対象バージョンのセクションのみ再生成
- 存在しないセクションは適切な位置に挿入（バージョン降順を維持）
- `--rebuild` との併用不可（エラー）
- `--version` と `--before` の同時指定不可（最後の指定が有効）
- `--year` との併用可能:
  - `--version + --year`: 指定年に存在しなければエラー
  - `--before + --year`: 指定年で絞った上で before を適用
