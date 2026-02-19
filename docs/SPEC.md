# CHANGELOG Viewer 仕様書

---

## 1. 概要

### 1.1 目的
Claude Code / OpenAI Codex の変更履歴（CHANGELOG）を日本語/英語の並列テーブル形式で閲覧できる静的Webアプリケーション。

### 1.2 技術スタック
| 項目 | 技術 |
|------|------|
| フレームワーク | Astro 5.x（SSG） |
| 検索エンジン | Fuse.js 7.x |
| ビルドツール | tsx, TypeScript 5.x |
| パッケージマネージャー | pnpm |
| ホスティング | GitHub Pages |
| CI/CD | GitHub Actions |

---

## 2. プロダクト定義

| プロパティ | Claude Code | Codex |
|-----------|-------------|-------|
| `productId` | `claude-code` | `codex` |
| `basePath` | `/` | `/codex/` |
| `contentDir` | `content/` | `content/codex/` |
| `dataDir` | `src/data/` | `src/data/codex/` |
| `npmPackage` | `@anthropic-ai/claude-code` | （なし） |
| `github.owner` | `anthropics` | `openai` |
| `github.repo` | `claude-code` | `codex` |
| `github.tagPrefix` | `v` | `rust-v` |

---

## 3. データ仕様

### 3.1 入力データ形式（共通）
年ごとに分離されたMarkdownファイル（`CHANGELOG_{YEAR}_JA.md`）を使用する。

パーサーは3列テーブルのみをサポートする。2列テーブル（旧形式）が検出された場合は例外を送出する。

**テーブル形式（3列 - Category 列を含む）**
```markdown
## X.Y.Z

| 日本語 | English | Category |
|--------|---------|----------|
| 変更内容（日本語） | Change description (English) | added |
| バグ修正内容 | Bug fix description | fixed |
```

※ 旧形式（2列テーブル）は非対応。全データは3列テーブルに統一済み。

### 3.2 Claude Code 入力データ

#### 3.2.1 年別CHANGELOGファイル
年ごとに分離されたMarkdownファイル（`content/` ディレクトリに配置）：
- `content/CHANGELOG_2026_JA.md`: 2026年のリリース（v2.1.0以降）
- `content/CHANGELOG_2025_JA.md`: 2025年のリリース（v2.0.x以前）

### 3.3 Codex 入力データ

#### 3.3.1 データソース
- GitHub Releases API: `https://api.github.com/repos/openai/codex/releases`

#### 3.3.2 対象リリースのフィルタ
| 条件 | 対象/除外 |
|------|----------|
| `rust-vX.Y.Z` 形式のタグ | 対象 |
| `-alpha` を含むタグ | 除外 |
| `prerelease: true` | 除外（`-beta`/`-rc` もここで除外） |

#### 3.3.3 バージョン表示
- タグ名からプレフィックスを除去: `rust-v0.95.0` → `0.95.0`

#### 3.3.4 Release body のパース仕様

現行形式（v0.78.0+）のリリースは `parseCodexReleaseBody()` でパースする。
旧形式は一括バックフィルスクリプトで AI 抽出・翻訳済み。
バックフィル未実施または body が空のバージョンは0件として扱う。

| 項目 | 内容 |
|------|------|
| パーサー | `scripts/parse-codex-releases.ts` |
| 対象形式 | 現行形式（`## New Features` / `## Bug Fixes` / `## Documentation` / `## Chores`） |
| 旧形式 | 未知セクション扱い → 自然に0件 |
| 翻訳 | sync 時に Claude CLI で自動翻訳（失敗時は「（翻訳待ち）」にフォールバック） |
| 再翻訳 | `pnpm retranslate --product codex` で翻訳待ちエントリを再翻訳 |

**パース動作**
- `currentCategory` の初期値は `null`（除外中）
- 既知のカテゴリヘッダーが出現すると、そのカテゴリに切り替え
- 未知のセクションヘッダーが出現すると `null` に戻る（配下の箇条書きはスキップ）
- `## Changelog` / `Full Changelog:` 以降は終了

#### 3.3.5 エントリ0件バージョンの表示

| 項目 | 内容 |
|------|------|
| 対象 | 現行形式以外のリリース、および現行形式でもエントリが0件のリリース |
| 表示 | プレースホルダ行「(No changelog entries)」を表示 |
| カテゴリ | `chores` |

### 3.4 カテゴリ定義

#### 3.4.1 Claude Code カテゴリ

| カテゴリ | 説明 | 色 | カラーコード | CSS クラス |
|----------|------|-----|-------------|-----------|
| `added` | 新機能の追加、新しいサポートの追加 | 緑 | #3fb950 | `added` |
| `fixed` | バグ修正、不具合の解消 | オレンジ | #f0883e | `fixed` |
| `changed` | 既存機能の変更、移動、削除、非推奨化 | 紫 | #a371f7 | `changed` |
| `improved` | パフォーマンス改善、UX改善、エラーメッセージの改善 | 青 | #79c0ff | `improved` |
| `other` | 上記に当てはまらないもの | グレー | #8b949e | `other` |

**分類方法**: 翻訳と同時に AI（Claude Sonnet）がカテゴリを判定する。出力形式は `翻訳テキスト ||| カテゴリ` で、パーサーは複数のフォーマット揺れに対応する。

#### 3.4.2 Codex カテゴリ

| セクションヘッダー | カテゴリID | 色 | カラーコード | マッピング先クラス |
|-------------------|-----------|-----|-------------|-------------------|
| `## New Features` | `new-features` | 緑 | #3fb950 | `added` |
| `## Bug Fixes` | `bug-fixes` | オレンジ | #f0883e | `fixed` |
| `## Documentation` | `documentation` | 青 | #79c0ff | `improved` |
| `## Chores` | `chores` | グレー | #8b949e | `other` |
| （カテゴリなし） | — | グレー | #8b949e | `other` |

旧形式のエイリアス（`Features` / `Highlights` / `Maintenance`）は対象外。

※ Codex ではキーワード判定を行わず、カテゴリ情報のみで色を決定する。

#### 3.4.3 カテゴリ検証ルール
- Claude Code ファイルには Claude Code カテゴリのみ許容（`added`, `fixed`, `changed`, `improved`, `other`）
- Codex ファイルには Codex カテゴリのみ許容（`new-features`, `bug-fixes`, `documentation`, `chores`）
- Claude Code: 無効なカテゴリは警告ログを出力し `'other'` にフォールバックする
- Codex: カテゴリ欠損はデータ異常として即時エラー（`assertCodexCategory`）。Codex は全エントリが初めからカテゴリ付き3列テーブルで管理されるため、欠損は不正データを意味する

### 3.5 生成データ（JSON）

#### 3.5.1 年別JSONファイル
年ごとに分離されたJSONファイルを生成する（パスはプロダクトごとに異なる）。

```typescript
interface ChangelogData {
  generatedAt: string;        // ISO 8601形式の生成日時（データ変更時のみ更新）
  months: MonthGroup[];
}

interface MonthGroup {
  key: string;                // "2026-01"
  label: string;              // "2026年1月"
  versions: Version[];
}

interface Version {
  version: string;            // "2.1.23"
  releaseDate: string;        // "2026-01-29"
  releaseDateDisplay: string; // "2026年1月29日"
  entries: Entry[];
}

interface Entry {
  ja: string;                 // 日本語説明
  en: string;                 // 英語説明
  category: EntryCategory;    // カテゴリID（全プロダクト共通、必須）
}

// カテゴリ型
type ClaudeCodeCategory = 'added' | 'fixed' | 'changed' | 'improved' | 'other';
type CodexCategory = 'new-features' | 'bug-fixes' | 'documentation' | 'chores';
type EntryCategory = CodexCategory | ClaudeCodeCategory;
```

### 3.6 日付取得戦略

#### 3.6.1 Claude Code

| 優先度 | ソース | 説明 |
|--------|--------|------|
| 1 | npm レジストリ | 実際の公開日（最も正確） |
| 2 | GitHub タグ | npm 未公開の場合、タグ作成日を使用 |
| 3 | 補間 | 上記で取得できない場合、近隣バージョンから推定 |

**npm レジストリからの取得**
- パッケージ名: `@anthropic-ai/claude-code`
- 取得コマンド: `npm view @anthropic-ai/claude-code time --json`
- 全バージョンの公開日を一括取得
- レート制限なし

**GitHub タグからの取得**
- GitHub Releases API を使用
- タグ名から `v` プレフィックスを除去してバージョン番号を取得
- `published_at` フィールドをJSTに変換して使用

**補間ロジック**
npm および GitHub タグで取得できないバージョン（未公開・削除済み等）は近隣バージョンの日付から推定：
- 前方（新しいバージョン）と後方（古いバージョン）を探索
- 両方見つかった場合は新しい方の日付を使用

**generate-data.ts の最終フォールバック（Claude Code / Codex 共通）**
- `generate-data.ts` は上記戦略で構築済みの `releaseMap` を第一優先で使用する
- `releaseMap` にも存在しない版は、既存JSONに同一版があればその `releaseDate` を再利用する
- それでも欠損する場合のみ固定値 `1970-01-01` を使用する
- 実行時刻ベースのフォールバックは使用しない（生成の決定性を維持）

#### 3.6.2 Codex

| 優先度 | ソース | 説明 |
|--------|--------|------|
| 1 | GitHub Releases (`published_at`) | リリース公開日 |
| 2 | 補間 | 近隣バージョンから推定 |

#### 3.6.3 日時変換（共通）
- 元データ: UTC
- 表示: JST（UTC+9）
- 変換式: `new Date(utcDate).getTime() + 9 * 60 * 60 * 1000`
- 年判定: UTC 15:00 以降は翌日としてカウント（JST 0:00）

---

## 4. UI仕様

### 4.1 データ表示

#### 4.1.1 月別グループ化
- 変更履歴を月単位でグループ化して表示
- 各月グループは折りたたみ可能（`<details>`要素）
- 最新月はデフォルトで展開、それ以外は折りたたみ
- 月ヘッダーにリリース数と変更項目数を表示

#### 4.1.2 バージョンセクション
- 各バージョンごとにセクションを表示
- 表示項目：
  - バージョン番号（例: 2.1.23）
  - 月内アップデート順序番号（例: | #3 - その月の3番目のリリース）
  - リリース日（日本語形式: 2026年1月29日）
  - 変更エントリテーブル
- 月内アップデート順序番号は、その月の何度目のアップデートかを示す（1から始まる連番）
- 月内のバージョンはリリース日降順（同日の場合はsemver降順）でソート

#### 4.1.3 テーブル形式
| 列 | 内容 |
|----|------|
| 日本語 | 変更内容の日本語説明 |
| English | 変更内容の英語説明 |

### 4.2 エントリタイプの視覚的識別
JSON の `category` フィールドに応じて左ボーダー色を変更する。カテゴリ定義・色・マッピングは §3.4 を参照。

### 4.3 カテゴリ凡例

- **配置**: info-bar 内、左側に凡例・右側に「最終更新」
- **スタイル**: テーブルと同じ 3px カラーバー + 日本語ラベル
- **HTML構造**: `<ul>` + `<li>` リストに `aria-label="カテゴリ凡例"` を付与（アクセシビリティ）
- **プロダクト別ラベル**:
  - Claude Code（5種）: 追加 / 修正 / 変更 / 改善 / その他
  - Codex（4種）: 新機能 / バグ修正 / ドキュメント / その他
- **レスポンシブ**: モバイル（768px以下）では凡例のみ折り返し

### 4.4 検索機能

#### 4.4.1 全文検索
- Fuse.js によるファジー検索
- 検索対象はモードにより日本語のみ/英語のみ/両方（デフォルトは両方）
- 検索閾値（threshold）: 0.3
- 位置非依存検索（ignoreLocation: true）

#### 4.4.2 検索UI
- 検索ボックス（プレースホルダー: 「検索... (日本語/English)」）
- クリアボタン（入力時に表示）
- 検索結果件数の表示
- 結果なし時のメッセージ表示

#### 4.4.3 検索結果の表示
- マッチしたエントリのみ表示
- マッチしないバージョン・月グループを非表示
- 検索語とセル全文が一致したセルのみハイライト表示（黄色背景）
- 英語列の一致判定は大文字小文字を区別しない
- 検索結果がある月グループは自動展開
- バッククォート内のテキストは `<code>` 表示を維持
- 原文（英語列）の PR 番号表記を GitHub PR リンク化
  - Codex: `#12345` → `https://github.com/openai/codex/pull/12345`
  - Claude Code: `anthropics/claude-code#12345` → `https://github.com/anthropics/claude-code/pull/12345`

#### 4.4.4 キーボード操作
- `Escape`キー: 検索クリア
- デバウンス: 150ms

#### 4.4.5 URLパラメータ
- `?q=検索語` でページ読み込み時に検索を実行
- `?mode=ja|en` で検索モードを指定（省略時は `both`）
- `?display=ja|en` で表示モード（言語）を指定（省略時は `both`）
- `?plain=1` でプレーン表示を有効化（省略時は無効）
- 複数の指定が可能: `?q=MCP&mode=ja&display=en`
- クリーンURL方針として、`both` の場合は `mode` / `display` いずれも付与しない
- `plain` が無効の場合は `plain` パラメータを付与しない
- 後方互換として `?display=copy` は `plain=1` と同等に扱う

#### 4.4.6 検索モード選択
- ユーザーは検索対象を以下から選択可能：
  - 「日本語のみ」: 日本語列（`ja`）のみを検索対象
  - 「原文のみ」: 英語列（`en`）のみを検索対象
  - 「両方」: 日本語・英語両方を検索対象（デフォルト）
- モード切り替えはセグメントコントロールUIで提供
- 選択されたモードは URLパラメータ（`?mode=ja|en`、`both`は省略）と sessionStorage で保持
  - 優先順位: URLパラメータ > sessionStorage > デフォルト（`both`）
  - sessionStorage は同一タブのみ保持（新しいタブ/ウィンドウには引き継がれない）
- 検索実行中にモードを切り替えると、現在のクエリで即座に再検索

#### 4.4.7 検索モード保持キー
プロダクト間での干渉を避けるため、sessionStorage のキーをプロダクト別に分離：
- Claude Code: `ccclog.searchMode.claude-code`
- Codex: `ccclog.searchMode.codex`

#### 4.4.8 表示モード選択
- 「日本語のみ」(`ja`) / 「原文のみ」(`en`) / 「両方」(`both`、デフォルト)
- 検索モードと同形式のセグメントコントロール UI
- 検索モードとは独立した設定
- `#changelog-list` 要素に `display-ja` / `display-en` クラスを付与し CSS で列制御
  - `both` の場合はクラスを付与しない（デフォルト表示）
- 非表示列のテーブルヘッダーも連動して非表示
- 英語のみ表示時はエントリタイプ左ボーダーを `.entry-en` に移動
- 状態保持の優先順位:
  1. URL パラメータが **存在する** 場合（`?display=` キーがある）→ その値を正規化して使用（無効値は `both` に正規化。sessionStorage は参照しない）
  2. URL パラメータが **存在しない** 場合 → sessionStorage の値を正規化して使用
  3. いずれもない場合 → デフォルト `both`
- ※ 既存の検索モード（`?mode=`）も同じ優先順位ルールに従っている

#### 4.4.9 表示モード保持キー
プロダクト間での干渉を避けるため、sessionStorage のキーをプロダクト別に分離：
- Claude Code: `ccclog.displayMode.claude-code`
- Codex: `ccclog.displayMode.codex`

#### 4.4.10 プレーン表示トグル
- 表示モード（言語）とは独立した ON/OFF スイッチで提供
- ON の場合はテーブルを非表示にし、プレーンテキストブロックを表示
- OFF の場合は通常テーブル表示
- プレーン本文の言語は現在の表示モードに追従
  - `en` の場合: 英語（`entry.en`）
  - `ja` / `both` の場合: 日本語（`entry.ja`）
- セッション保持キー（プロダクト別）:
  - Claude Code: `ccclog.plainMode.claude-code`
  - Codex: `ccclog.plainMode.codex`

#### 4.4.11 プレーンモード出力形式
- 1バージョン単位で以下フォーマットを表示
  ```text
  (製品正式名) - v(バージョン)
  ・(更新内容1)
  ・(更新内容2)
  ...
  ```
- 製品正式名:
  - Claude Code: `Claude Code`
  - Codex: `OpenAI Codex`
- 箇条書きは全行 `・` プレフィックスを付与

### 4.5 レスポンシブデザイン
- デスクトップ・モバイル両対応
- ブレークポイント: 768px
- モバイルでのフォントサイズ調整（iOS ズーム防止: 16px）

### 4.6 複数年対応

#### 4.6.1 年別ページ
- 動的ルーティング `[year].astro` により、年ごとのページを自動生成
- 対応年は各プロダクトの `contentDir` に存在する `CHANGELOG_*_JA.md` から自動検出
- トップページ（`/`、`/codex/`）は最新年のコンテンツを直接表示（リダイレクトなし）
- 最新年はビルド時点で確定（SSG）

#### 4.6.2 canonical URL（重複コンテンツ対策）
トップページ（`/`）と年別ページ（`/{year}/`）で同一コンテンツが表示されるため、SEO上の重複を回避する必要がある。

| ページ種別 | canonical |
|-----------|-----------|
| トップページ (`/`, `/codex/`) | `/{year}/` を指す（他ページへの正規化） |
| 年別ページ (`/{year}/`) | 自己URLを指す（自己canonical） |
| 空データ時 | 出力しない |

- 正規URL: `/{year}/`（年が明示されている方）を正規とし、共有時は年明示URLが優先される
- BaseLayout で `product` と `currentYear` から絶対URLを自動生成
- 空データ時（`years.length === 0`）は canonical タグを出力しない

#### 4.6.3 年切り替えナビゲーション
- 年一覧は `contentDir` ディレクトリから動的に取得
- ハードコードを排除し、新年追加時の手動変更を不要に
- ヘッダーに年切り替えリンクを表示
- 現在表示中の年はアクティブ状態で強調表示
- クリックで年間を切り替え可能

### 4.7 カラーパレット（ダークテーマ）

| 用途 | 変数名 | 値 |
|-----|--------|-----|
| 背景 | --color-bg | #0d1117 |
| 背景（二次） | --color-bg-secondary | #161b22 |
| ボーダー | --color-border | #30363d |
| テキスト | --color-text | #e6edf3 |
| テキスト（薄） | --color-text-muted | #8b949e |
| アクセント | --color-accent | #58a6ff |

### 4.8 フォント

| 用途 | フォントファミリー |
|-----|-------------------|
| 本文 | -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans JP', sans-serif |
| コード | 'SF Mono', 'Fira Code', 'Consolas', monospace |

### 4.9 レイアウト
- 最大幅: 1200px
- パディング: 2rem 1.5rem（デスクトップ）、1rem（モバイル）

### 4.10 フッター
- 著作権表示: © 2026 びーぐる(Beagle Works)
- ソーシャルリンク: X (Twitter) と GitHub（`beagleworks/ccclog`）アイコン（著作権表示の後）
- 外部リンク: プロダクト固有リンク（各プロダクト定義に準拠）

---

## 5. パイプライン仕様

### 5.1 ビルドプロセス

#### 5.1.1 データフロー（Claude Code を基準）

##### CHANGELOGエントリのエスケープ
CHANGELOGファイルにエントリを書き込む際、パイプ文字（`|`）は `\|` にエスケープする。

```
npm レジストリ  +  GitHub CHANGELOG.md  +  GitHub Releases API(欠損時)
     │                    │                           │
     └────────────┬───────┴───────────────┬──────────┘
                  ▼                       ▼
                     sync-versions.ts
                            │
                            ▼
                CHANGELOG_{YEAR}_JA.md (新バージョン自動追記)
                            │
                            ├──── detect-upstream-changes.ts（上流差分反映）
                            │
                            └──── sync-codex-versions.ts（Codex追記）
                            │
────────────────────────────┼──────────────────────────────────
                            │
   CHANGELOG_{YEAR}_JA.md  +  content/codex/CHANGELOG_{YEAR}_JA.md
            │                        │
            ▼                        ▼
     parse-changelog.ts     fetch-releases.ts
            │                        │
            └────────┬───────────────┘
                     ▼
             generate-data.ts [year]（sync ジョブ内）
                     │
                     ▼
        src/data/**/changelog-{year}.json（コミット対象）
                     │
                     ▼
      build:ci（generate:og + astro build）→ dist/
                              ├── index.html (2026)
                              └── 2025/index.html
```

- `schedule` / `workflow_dispatch` では、同期スクリプト実行後に `pnpm generate` を実行し、`content/**` と `src/data/**` を同一コミットで反映する。
- `push` / `schedule` のビルドは `pnpm run build:ci` を使い、CI上でデータ再生成は行わない。

#### 5.1.2 Codex の補足
Codex は `sync-codex-versions.ts` により GitHub Releases からバージョンを検出し、`content/codex/CHANGELOG_{YEAR}_JA.md` を更新する。

#### 5.1.3 Codex の複数年生成
Codex は `content/codex/` ディレクトリから年を列挙して全年の JSON を生成する。
- `generate-codex-all-years.ts`: content から年を列挙して `generate-data.ts` を各年で実行
- `pnpm generate:codex` はこのスクリプトを呼び出す

### 5.2 sync-versions.ts（Claude Code）

#### 5.2.1 処理フロー
1. npm レジストリから `@anthropic-ai/claude-code` の全バージョン一覧と公開日を取得
2. GitHub の `CHANGELOG.md` からバージョン一覧と各バージョンの変更内容（英語）を取得
3. 検出対象バージョンを `npm ∪ GitHub CHANGELOG` で統合する
4. 公開日を優先順位 `npm → GitHubタグ/Release → 補間` で解決する（§3.6.1）
5. 当該年（現在の年、JST基準）の `CHANGELOG_{YEAR}_JA.md` から既存バージョンを抽出
6. 当該年の未記載バージョンを特定し、当該年ファイルに追記

※ 過去年の CHANGELOG は既に整備済みのため、当該年のみを対象とする

#### 5.2.2 追記形式
```markdown
## X.Y.Z

| 日本語 | English | Category |
|--------|---------|----------|
| 翻訳済みテキスト | Original English text from GitHub CHANGELOG | added |
```

※ API キー未設定時やエラー時は「翻訳済みテキスト」が「（翻訳待ち）」、カテゴリは `other` になる

#### 5.2.3 挿入位置
- 処理対象年ファイルを `prefix + versionSections + suffix` として扱う
- `prefix`: 先頭から最初の `## X.Y.Z` 直前まで（ヘッダを含む）
- `versionSections`: 各バージョンセクション本体（`## X.Y.Z` から次のバージョン直前まで）
- `suffix`: 最後のバージョンセクション以降の任意テキスト（存在する場合は保持）
- 新規版追記時は `versionSections` に追加後、全バージョンを semver 降順に再整列して再構築する
- 新規版が0件でも、既存の版順崩れを検出した場合は再整列を適用する

### 5.3 sync-codex-versions.ts（Codex）

取得対象年をオプションで制御できる。

| 使い方 | 対象 | 動作 |
|--------|------|------|
| `pnpm sync-codex-versions` | 当年の未記載バージョン | 追記 |
| `pnpm sync-codex-versions --year 2025` | 指定年の未記載 | 追記 |

- `--year` は4桁年を受け付ける
- 過去年の指定をサポートする
- 対象年リリースが 0 件でも正常終了する

### 5.4 翻訳

#### 5.4.1 翻訳モジュール API（`scripts/translate.ts`）

翻訳処理を一元管理するモジュール。各スクリプト（sync-versions, sync-codex-versions, detect-upstream-changes, retranslate）はこのモジュールを通じて翻訳を行う。

| 関数 | シグネチャ | 用途 |
|------|-----------|------|
| `isClaudeCliAvailable` | `() => boolean` | Claude Code CLI の利用可否チェック |
| `translateBatch` | `(entries: string[], productLabel: string) => string[] \| null` | 複数エントリの一括翻訳 |
| `translateOne` | `(text: string, productLabel: string) => string \| null` | 単一エントリの翻訳 |
| `translateAndClassifyBatch` | `(entries: string[], productLabel: string) => TranslationWithCategory[] \| null` | 複数エントリの一括翻訳+カテゴリ分類 |
| `translateAndClassifyOne` | `(text: string, productLabel: string) => TranslationWithCategory \| null` | 単一エントリの翻訳+カテゴリ分類 |
| `translateAndClassifyWithFallback` | `(entries: string[], productLabel: string) => TranslationWithCategory[] \| null` | バッチ→個別分類→個別翻訳の多段フォールバック付き翻訳+分類 |
| `parseTranslationsWithCategory` | `(responseText: string) => TranslationWithCategory[]` | AI出力のパース（テスト用エクスポート） |

| 項目 | 内容 |
|------|------|
| 翻訳ツール | Claude Code CLI (`claude --print --model sonnet`) |
| 翻訳モデル | Claude Sonnet（品質とコストのバランス） |
| 認証方式 | OAuth トークン（サブスクリプション） |
| 環境変数 | CLAUDE_CODE_OAUTH_TOKEN |

#### 5.4.2 翻訳スタイルルール

| ルール | 説明 |
|--------|------|
| 体言止め・である調 | 「〜を修正」「〜を追加」「〜に対応」のような形式で統一 |
| 丁寧語不使用 | 「〜しました」「〜します」は使用しない |
| 技術用語の適切な翻訳 | fix → 修正、add → 追加、improve → 改善 など |
| 簡潔さ | 各エントリを1行で翻訳 |

#### 5.4.3 自動翻訳+カテゴリ分類

新バージョン検出時に Claude Code CLI を使用して英語エントリの日本語翻訳とカテゴリ分類を同時に実行する。

**翻訳プロンプト:**
- Claude Code の変更履歴として適切な技術用語の翻訳
- 簡潔で自然な日本語
- 原文中の PR 番号表記（例: `(#12345)`, `#12345`）を保持
- 各エントリを1行で翻訳

**フォールバック処理:**
- Claude Code CLI が利用不可の場合: 「（翻訳待ち）」として追記
- 翻訳エラーの場合: 「（翻訳待ち）」として追記
- これによりビルドは常に成功する

#### 5.4.4 多段フォールバック戦略

1. `translateAndClassifyBatch` でバッチ翻訳+分類を試行
2. 失敗 → 1件ずつ `translateAndClassifyOne` で分類付きリトライ
3. 個別リトライも失敗した件 → `translateOne` で翻訳のみ + カテゴリは `'other'`
4. 翻訳も失敗 → `'（翻訳待ち）'` + `'other'`

### 5.5 retranslate.ts

#### 5.5.1 概要
「（翻訳待ち）」となっているエントリを検出し、Claude Code CLI で再翻訳するスクリプト。

#### 5.5.2 処理フロー
1. `CHANGELOG_{YEAR}_JA.md` から「（翻訳待ち）」を含むバージョンを検出
2. 対象バージョンの英語エントリを抽出
3. Claude Code CLI で日本語に翻訳
4. 翻訳結果で「（翻訳待ち）」を置換
5. ファイルを上書き保存

#### 5.5.3 対象ファイル
- 引数なし: 当該年（JST基準）のファイルのみ
- 引数あり: 指定された年のファイル（例: `pnpm retranslate 2025`）

#### 5.5.4 実行タイミング
- ローカル: 手動で `pnpm retranslate` を実行
- CI: `workflow_dispatch` で「再翻訳モード」を選択時

#### 5.5.5 エラーハンドリング
- Claude Code CLI が利用不可: エラーメッセージを表示して終了
- 翻訳失敗: 該当エントリをスキップし、次のエントリを処理
- 部分的な成功でもファイルは更新される

### 5.6 detect-upstream-changes.ts

#### 5.6.1 概要
Claude Code 本体の `CHANGELOG.md` が公開後に修正された場合に、ローカルの `CHANGELOG_{YEAR}_JA.md` へ反映する。

#### 5.6.2 対象範囲
- 上流 `CHANGELOG.md` の先頭から直近3バージョン（最新、1つ前、2つ前）のみ
- 年跨ぎ等は考慮しない（当該年の `CHANGELOG_{YEAR}_JA.md` のみを対象）

#### 5.6.3 取得元
- `https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md`

#### 5.6.4 比較ロジック
- エントリを正規化（小文字化、空白統一、トリム）して比較
- 並び替えは無視し、内容のみを比較
- 重複行は出現回数込みで比較（集合ではなくマルチセット）
- 文言変更の同定は行わず「追加+削除」として扱う

#### 5.6.5 適用ロジック（`--apply` 指定時）
- 対象バージョンごとに、上流の英語エントリ一覧を基準としてテーブルを再構築
- 既存の行は英語一致の日本語を再利用（「（翻訳待ち）」は再利用しない）
- 新規/修正（追加扱い）の英語エントリのみ自動翻訳を実行（失敗時は「（翻訳待ち）」）
- 対象バージョンのセクションのみ更新

#### 5.6.6 実行タイミング
- ローカル: 手動で `pnpm sync-upstream` を実行
- CI: 定期ビルド時に自動実行

#### 5.6.7 エラーハンドリング
- GitHub 取得失敗: エラーログを出力してスキップ（ビルドは継続）
- 対象バージョンが当該年ファイルに存在しない: 警告ログのみ

### 5.7 GitHub API 認証

#### 5.7.1 認証方式
- `GITHUB_TOKEN` 環境変数があれば `Authorization: Bearer ...` ヘッダーを付与

#### 5.7.2 レート制限
| 環境 | レート制限 | 挙動 |
|------|-----------|------|
| CI | GitHub Actions のデフォルトトークン | 制限なし |
| ローカル（トークンあり） | 5000リクエスト/時間 | 認証済みレート制限 |
| ローカル（トークンなし） | 60リクエスト/時間 | 警告を出力してビルド継続（取得できた範囲で動作） |

### 5.8 実行レポート（Report CLI）

各スクリプトは、任意で機械可読レポートを出力できる。

| オプション | 説明 |
|-----------|------|
| `--report-json` | 実行結果JSONを標準出力へ出力 |
| `--report-file <path>` | 実行結果JSONを指定パスへ出力 |

#### 5.8.1 changed 定義（スクリプト別）

`changed` はファイルを実際に変更したかどうかを示す。

| スクリプト | `changed=true` の条件 |
|-----------|------------------------|
| `sync-versions.ts` | CHANGELOG ファイルへの書き込みが成功（新規追加または版順正規化。`changedFiles.length > 0`） |
| `sync-codex-versions.ts` | CHANGELOG ファイルへの書き込みが成功（`changedFiles.length > 0`） |
| `detect-upstream-changes.ts` | `--apply` 指定時かつファイルへの書き込みが成功（`changedFiles.length > 0`） |
| `retranslate.ts` | 翻訳成功件数 > 0（`successCount > 0`） |
| `generate-data.ts` | 生成データの実質内容（`months`）が前回と異なる |

※ `detect-upstream-changes.ts` は `--apply` なし（検出のみ）の場合、差分を検出しても `changed=false` を返す。
※ `retranslate.ts` は成功件数ベースで判定し、厳密なファイル差分判定ではない。
※ `generate-data.ts` は `months` の内容のみで変更判定を行う。変更がない場合は `generatedAt` を既存値で保持し、ファイル書き込みもスキップする。既存JSONのパースに失敗した場合は再生成（`changed=true`）として扱う。
※ CI ワークフローでのコミット判定（`git status --porcelain` の pathspec）はスクリプト内部の `changed` とは別概念であり、§6.3 で定義する。

---

## 6. CI/CD

### 6.1 npm scripts

| コマンド | 説明 |
|---------|------|
| `pnpm dev` | 開発サーバー起動（localhost:4321） |
| `pnpm preview` | ビルド結果のプレビュー |
| `pnpm build` | データ生成 + OGP画像生成 + 静的サイトビルド（ローカル向け） |
| `pnpm build:ci` | OGP画像生成 + 静的サイトビルド（データ再生成なし、CI向け） |
| `pnpm generate` | 全プロダクト・全年のデータ生成 |
| `pnpm generate:claude-code` | Claude Code のみ生成 |
| `pnpm generate:codex` | Codex のみ生成 |
| `pnpm sync-versions` | npm レジストリから新バージョンを検出し CHANGELOG に追記（Claude Code） |
| `pnpm sync-codex-versions` | GitHub Releases から新バージョンを検出し CHANGELOG に追記（Codex） |
| `pnpm sync-codex-versions -- --year 2025` | Codex の指定年のみ新バージョンを検出し CHANGELOG に追記 |
| `pnpm retranslate` | Claude Code の「（翻訳待ち）」エントリを再翻訳（引数で年指定可） |
| `pnpm retranslate --product codex` | Codex の「（翻訳待ち）」エントリを再翻訳（引数で年指定可） |
| `pnpm detect-upstream` | 上流CHANGELOGの変更検出のみを実行 |
| `pnpm sync-upstream` | 上流CHANGELOGの変更検出 + 自動適用を実行 |

### 6.2 デプロイ仕様（GitHub Pages）

#### 6.2.1 設定
- Source: GitHub Actions
- Base URL: `/ccclog/`
- Trailing Slash: always

#### 6.2.2 トリガー
| トリガー | タイミング |
|---------|-----------|
| push | mainブランチへのプッシュ時（`docs/**`, `README.md`, `CLAUDE.md`, `.github/FUNDING.yml` のみの変更は除外） |
| schedule | 日本時間 6:00, 8:00, 10:00, 12:00, 15:00, 18:00, 24:00（同期ジョブ実行） |
| workflow_dispatch | 手動実行（同期ジョブ + オプションで再翻訳） |

#### 6.2.3 手動実行オプション
| オプション | 説明 | デフォルト |
|-----------|------|-----------|
| retranslate | 「（翻訳待ち）」エントリを再翻訳 | false |

### 6.3 自動検出・追記フロー

定期実行（`schedule`）では以下を実行：
1. `pnpm run sync-versions` で Claude Code の新バージョンを検出
2. `pnpm run sync-upstream` で上流 CHANGELOG 差分を検出・反映
3. `pnpm run sync-codex-versions` で Codex の新バージョンを検出
4. `pnpm generate` で `src/data/*.json` と `src/data/codex/*.json` を更新
5. `git status --porcelain -- 'content/CHANGELOG_*.md' 'content/codex/CHANGELOG_*.md' 'src/data/*.json' 'src/data/codex/*.json'` で差分検知
6. 差分があれば上記3系統を同一コミットで自動コミット・プッシュ（`chore: CHANGELOG を自動更新`）
7. 各同期スクリプトの report JSON を Step Summary に集約して可視化

`push` イベントでは同期処理を行わず、`pnpm run build:ci` + GitHub Pages デプロイのみを実行する。
`push` のビルド/デプロイは `github.actor != 'github-actions[bot]'` 条件で実行し、同期コミット由来の自己トリガーを抑止する。
`schedule` / `workflow_dispatch` では、同期で差分があった場合に同一ワークフロー内で `pnpm run build:ci` + GitHub Pages デプロイまで実行する。
そのため、定期実行で差分がない場合はビルド/デプロイを行わない。

`workflow_dispatch` では定期実行と同じ同期処理を行い、`retranslate=true` の場合に `pnpm retranslate` / `pnpm retranslate -- --product codex` を追加実行する。

`pnpm generate` が失敗した場合は fail-fast とし、コミットを行わずジョブを失敗させる。

これにより、npm に新バージョンが公開されると最大6時間以内に自動的に CHANGELOG に追加される。

### 6.4 ビルド環境
- OS: ubuntu-latest
- Node.js: 22
- pnpm: 10

---

## 7. セキュリティ要件

### 7.1 XSS/HTML注入対策
GitHub CHANGELOG 等の外部データを HTML として表示する際は、以下のルールに従う：

| 処理順序 | 内容 |
|---------|------|
| 1 | HTML特殊文字（`<`, `>`, `&`, `"`, `'`）をエスケープ |
| 2 | バッククォート（`` ` ``）で囲まれた部分のみ `<code>` タグに変換 |
| 3 | 英語列のみ PR 番号表記を安全な `<a>` タグへ変換（Codex: `#12345` / Claude Code: `anthropics/claude-code#12345`） |

**対象箇所:**
- `VersionSection.astro`: テーブルセル表示
- `ChangelogPage.astro`: 検索結果のハイライト表示

### 7.2 コマンドインジェクション対策
外部データを含むコマンドを実行する際は、シェルを経由せずに直接実行する：

| 禁止 | 推奨 |
|------|------|
| `execSync(\`cmd "${data}"\`)` | `execFileSync('cmd', [data])` |

**対象箇所:**
- `sync-versions.ts`: Claude CLI 呼び出し
- `retranslate.ts`: Claude CLI 呼び出し

---

## 8. 制約事項

### 8.1 既知の制限
- GitHub API レート制限: 認証なしで60リクエスト/時間（§5.7 参照）
- 検索はクライアントサイドで実行されるため、データ量が増えるとパフォーマンスに影響

### 8.2 前提条件
- `CHANGELOG_{YEAR}_JA.md` が指定のMarkdown形式に従っていること
- Claude Code: GitHub Releases のタグ名が `vX.Y.Z` 形式であること
- Codex: GitHub Releases のタグ名が `rust-vX.Y.Z` 形式であること
- リポジトリやタグ形式などの前提は §2 プロダクト定義に準拠すること

---

## 9. ファイル構成

```
ccclog/
├── .github/
│   └── workflows/
│       └── deploy.yml              # CI/CDワークフロー
├── content/
│   ├── CHANGELOG_2025_JA.md        # Claude Code（既存維持）
│   ├── CHANGELOG_2026_JA.md        # Claude Code（既存維持）
│   └── codex/                      # Codex用
│       ├── CHANGELOG_2025_JA.md    # Codex 2025年データ
│       └── CHANGELOG_2026_JA.md
├── CHANGELOG.md                    # 変更履歴
├── docs/
│   └── SPEC.md                     # 仕様書（本文書）
├── public/
│   └── favicon.svg                 # サイトアイコン
├── scripts/
│   ├── codex-changelog-utils.ts    # Codex CHANGELOG操作ユーティリティ
│   ├── date-utils.ts               # 日付ユーティリティ
│   ├── detect-upstream-changes.ts  # 上流CHANGELOG変更検出
│   ├── fetch-releases.ts           # GitHub API連携
│   ├── generate-codex-all-years.ts # Codex全年データ生成
│   ├── generate-data.ts            # データ生成メイン（プロダクト対応）
│   ├── parse-changelog.ts          # Markdownパーサー
│   ├── parse-codex-releases.ts     # Codex リリースノートパーサー
│   ├── retranslate.ts              # 翻訳待ちエントリの再翻訳
│   ├── sync-codex-versions.ts      # Codex 新バージョン検出・追記
│   ├── sync-versions.ts            # Claude Code 新バージョン検出・追記
│   └── translate.ts                # 翻訳モジュール（共通）
├── src/
│   ├── components/
│   │   ├── ChangelogPage.astro     # 検索・表示モード・凡例の統合ページ
│   │   ├── MonthGroup.astro        # 月グループコンポーネント
│   │   ├── SearchBox.astro         # 検索UIコンポーネント
│   │   └── VersionSection.astro    # バージョンセクション
│   ├── data/
│   │   ├── changelog-2026.json     # Claude Code 生成JSON（2026年）
│   │   ├── changelog-2025.json     # Claude Code 生成JSON（2025年）
│   │   └── codex/
│   │       └── changelog-2026.json # Codex 生成JSON（2026年）
│   ├── layouts/
│   │   └── BaseLayout.astro        # 共通レイアウト（年ナビ含む）
│   ├── lib/
│   │   ├── get-entry-type.ts       # エントリタイプ判定
│   │   ├── legend.ts               # カテゴリ凡例定義
│   │   ├── products.ts             # プロダクト設定
│   │   └── server/
│   │       └── changelog-years.ts  # 年自動検出（サーバーサイド）
│   └── pages/
│       ├── index.astro             # Claude Code トップ
│       ├── [year].astro            # Claude Code 年別
│       └── codex/                  # Codex用
│           ├── index.astro
│           └── [year].astro
├── astro.config.mjs                # Astro設定
├── package.json
└── tsconfig.json
```

---

## 10. 変更履歴

→ [CHANGELOG.md](../CHANGELOG.md) を参照
