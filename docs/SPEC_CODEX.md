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
| 抽出対象 | `- ` で始まる箇条書き（最上位のみ） |
| カテゴリ情報 | フラットに抽出（カテゴリは保持しない） |
| 除外対象 | コードブロック、アセット列挙、空行のみのブロック、`## Changelog` 以降 |
| 正規化 | 1行化、連続空白の圧縮、`\|` のエスケープ |
| リンク | Markdown形式のまま保持（UI側はテキスト表示） |

**アセット列挙の除外ルール（詳細）**
`- ` で始まる行のうち、以下に該当するものは「アセット列挙」とみなして除外する。
- 生URL形式で、拡張子が `zip`, `tar.gz`, `exe`, `msi`, `dmg`, `deb`, `rpm`, `apk`, `ipa` に一致するもの
- Markdownリンク形式で、リンクテキストまたはURLに上記拡張子が含まれるもの

---

## 3. 日付取得戦略

| プロダクト | 優先順位 |
|-----------|---------|
| Codex | GitHub Releases (`published_at`) → 補間 |
