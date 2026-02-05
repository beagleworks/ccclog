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

### 2.5 Release body の扱い

Release body のパースは行わず、すべてのバージョンを0件エントリとして扱う。

| 項目 | 内容 |
|------|------|
| パース | 行わない |
| 理由 | リリースノートの構造が不安定なため、保守コストを回避 |

### 2.6 エントリ0件バージョンの表示

すべてのバージョンが対象となる。

| 項目 | 内容 |
|------|------|
| 対象 | 全バージョン |
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
