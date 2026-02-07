# CHANGELOG Viewer 仕様書（共通）

この文書は共通仕様をまとめたものです。プロダクト固有仕様やパイプライン仕様は以下を参照してください。
- `docs/SPEC_CLAUDE.md`: Claude Code 固有仕様
- `docs/SPEC_CODEX.md`: OpenAI Codex 固有仕様
- `docs/SPEC_PIPELINE.md`: データ生成・CI/CD 仕様

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

## 3. 機能要件（共通）

### 3.1 データ表示

#### 3.1.1 月別グループ化
- 変更履歴を月単位でグループ化して表示
- 各月グループは折りたたみ可能（`<details>`要素）
- 最新月はデフォルトで展開、それ以外は折りたたみ
- 月ヘッダーにリリース数と変更項目数を表示

#### 3.1.2 バージョンセクション
- 各バージョンごとにセクションを表示
- 表示項目：
  - バージョン番号（例: 2.1.23）
  - 月内アップデート順序番号（例: | #3 - その月の3番目のリリース）
  - リリース日（日本語形式: 2026年1月29日）
  - 変更エントリテーブル
- 月内アップデート順序番号は、その月の何度目のアップデートかを示す（1から始まる連番）
- 月内のバージョンはリリース日降順（同日の場合はsemver降順）でソート

#### 3.1.3 テーブル形式
| 列 | 内容 |
|----|------|
| 日本語 | 変更内容の日本語説明 |
| English | 変更内容の英語説明 |

#### 3.1.4 エントリタイプの視覚的識別

**Claude Code（カテゴリベース、フォールバック: キーワード判定）**
JSON の `category` フィールドに応じて左ボーダー色を変更。`category` がない旧形式データにはキーワード判定でフォールバックする。

| カテゴリ / CSS クラス | 色 | カラーコード |
|----------------------|-----|-------------|
| `added` | 緑 | #3fb950 |
| `fixed` | オレンジ | #f0883e |
| `changed` | 紫 | #a371f7 |
| `improved` | 青 | #79c0ff |
| `other` | グレー | #8b949e |

**フォールバック（キーワード判定）**: `category` がない場合、英語テキストのキーワードで分類:
- Added / Add → `added`
- Fixed / Fix / bugfixes / Reduced → `fixed`
- Changed / Change / Merged / Moved / Updated / Removed / Deprecated → `changed`
- Improved / Improve → `improved`
- その他 → `other`

**Codex（カテゴリベース）**
JSON の `category` フィールドに応じて `CATEGORY_TO_CLASS` マッピング経由で左ボーダー色を変更：

| カテゴリID | 色 | カラーコード | マッピング先クラス |
|-----------|-----|-------------|-------------------|
| `new-features` | 緑 | #3fb950 | `added` |
| `bug-fixes` | オレンジ | #f0883e | `fixed` |
| `documentation` | 青 | #79c0ff | `improved` |
| `chores` | グレー | #8b949e | `other` |
| （カテゴリなし） | グレー | #8b949e | `other` |

※ Codex ではキーワード判定を行わず、カテゴリ情報のみで色を決定する。

#### 3.1.5 カテゴリ凡例

- **配置**: info-bar 内、左側に凡例・右側に「最終更新」
- **スタイル**: テーブルと同じ 3px カラーバー + 日本語ラベル
- **HTML構造**: `<ul>` + `<li>` リストに `aria-label="カテゴリ凡例"` を付与（アクセシビリティ）
- **プロダクト別ラベル**:
  - Claude Code（5種）: 追加 / 修正 / 変更 / 改善 / その他
  - Codex（4種）: 新機能 / バグ修正 / ドキュメント / その他
- **レスポンシブ**: モバイル（768px以下）では凡例のみ折り返し

### 3.2 検索機能

#### 3.2.1 全文検索
- Fuse.js によるファジー検索
- 検索対象はモードにより日本語のみ/英語のみ/両方（デフォルトは両方）
- 検索閾値（threshold）: 0.3
- 位置非依存検索（ignoreLocation: true）

#### 3.2.2 検索UI
- 検索ボックス（プレースホルダー: 「検索... (日本語/English)」）
- クリアボタン（入力時に表示）
- 検索結果件数の表示
- 結果なし時のメッセージ表示

#### 3.2.3 検索結果の表示
- マッチしたエントリのみ表示
- マッチしないバージョン・月グループを非表示
- マッチ箇所のハイライト表示（黄色背景）
- 検索結果がある月グループは自動展開
- バッククォート内のテキストは `<code>` 表示を維持

#### 3.2.4 キーボード操作
- `Escape`キー: 検索クリア
- デバウンス: 150ms

#### 3.2.5 URLパラメータ
- `?q=検索語` でページ読み込み時に検索を実行
- `?mode=ja|en` で検索モードを指定（省略時は `both`）
- `?display=ja|en` で表示モードを指定（省略時は `both`）
- 複数の指定が可能: `?q=MCP&mode=ja&display=en`
- クリーンURL方針として、`both` の場合は `mode` / `display` いずれも付与しない

#### 3.2.6 検索モード選択
- ユーザーは検索対象を以下から選択可能：
  - 「日本語のみ」: 日本語列（`ja`）のみを検索対象
  - 「原文のみ」: 英語列（`en`）のみを検索対象
  - 「両方」: 日本語・英語両方を検索対象（デフォルト）
- モード切り替えはセグメントコントロールUIで提供
- 選択されたモードは URLパラメータ（`?mode=ja|en`、`both`は省略）と sessionStorage で保持
  - 優先順位: URLパラメータ > sessionStorage > デフォルト（`both`）
  - sessionStorage は同一タブのみ保持（新しいタブ/ウィンドウには引き継がれない）
- 検索実行中にモードを切り替えると、現在のクエリで即座に再検索

#### 3.2.7 検索モード保持キー
プロダクト間での干渉を避けるため、sessionStorage のキーをプロダクト別に分離：
- Claude Code: `ccclog.searchMode.claude-code`
- Codex: `ccclog.searchMode.codex`

#### 3.2.8 表示モード選択
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

#### 3.2.9 表示モード保持キー
プロダクト間での干渉を避けるため、sessionStorage のキーをプロダクト別に分離：
- Claude Code: `ccclog.displayMode.claude-code`
- Codex: `ccclog.displayMode.codex`

### 3.3 レスポンシブデザイン
- デスクトップ・モバイル両対応
- ブレークポイント: 768px
- モバイルでのフォントサイズ調整（iOS ズーム防止: 16px）

### 3.4 複数年対応

#### 3.4.1 年別ページ
- 動的ルーティング `[year].astro` により、年ごとのページを自動生成
- 対応年は各プロダクトの `contentDir` に存在する `CHANGELOG_*_JA.md` から自動検出
- トップページ（`/`、`/codex/`）は最新年のコンテンツを直接表示（リダイレクトなし）
- 最新年はビルド時点で確定（SSG）

#### 3.4.2 canonical URL（重複コンテンツ対策）
トップページ（`/`）と年別ページ（`/{year}/`）で同一コンテンツが表示されるため、SEO上の重複を回避する必要がある。

| ページ種別 | canonical |
|-----------|-----------|
| トップページ (`/`, `/codex/`) | `/{year}/` を指す（他ページへの正規化） |
| 年別ページ (`/{year}/`) | 自己URLを指す（自己canonical） |
| 空データ時 | 出力しない |

- 正規URL: `/{year}/`（年が明示されている方）を正規とし、共有時は年明示URLが優先される
- BaseLayout で `product` と `currentYear` から絶対URLを自動生成
- 空データ時（`years.length === 0`）は canonical タグを出力しない

#### 3.4.3 年切り替えナビゲーション
- 年一覧は `contentDir` ディレクトリから動的に取得
- ハードコードを排除し、新年追加時の手動変更を不要に
- ヘッダーに年切り替えリンクを表示
- 現在表示中の年はアクティブ状態で強調表示
- クリックで年間を切り替え可能

---

## 4. データ仕様（共通）

### 4.1 入力データ形式
年ごとに分離されたMarkdownファイル（`CHANGELOG_{YEAR}_JA.md`）を使用する。

**Claude Code（3列テーブル - Category 列を含む）**
```markdown
## 2.1.23

| 日本語 | English | Category |
|--------|---------|----------|
| 変更内容（日本語） | Change description (English) | added |
| バグ修正内容 | Bug fix description | fixed |
```

※ 旧形式（2列テーブル）も後方互換としてサポートする。`category` がない場合はキーワード判定にフォールバック。

**Codex（3列テーブル - Category 列を含む）**
```markdown
## 0.1.2505301544

| 日本語 | English | Category |
|--------|---------|----------|
| 変更内容（日本語） | Change description (English) | new-features |
| バグ修正内容 | Bug fix description | bug-fixes |
```

パーサーはヘッダー行を検出して2列/3列を動的に判定する。

### 4.2 生成データ

#### 4.2.1 年別JSONファイル
年ごとに分離されたJSONファイルを生成する（パスはプロダクトごとに異なる）。

```typescript
interface ChangelogData {
  generatedAt: string;        // ISO 8601形式の生成日時
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
  category?: EntryCategory;   // カテゴリID（全プロダクト共通）
}

// カテゴリ型
type ClaudeCodeCategory = 'added' | 'fixed' | 'changed' | 'improved' | 'other';
type CodexCategory = 'new-features' | 'bug-fixes' | 'documentation' | 'chores';
type EntryCategory = CodexCategory | ClaudeCodeCategory;
```

#### 4.2.2 年別Markdownファイル
- `generated/CHANGELOG-{year}.md`（プロダクト別にサブディレクトリを持つ）

---

## 5. UI仕様

### 5.1 カラーパレット（ダークテーマ）

| 用途 | 変数名 | 値 |
|-----|--------|-----|
| 背景 | --color-bg | #0d1117 |
| 背景（二次） | --color-bg-secondary | #161b22 |
| ボーダー | --color-border | #30363d |
| テキスト | --color-text | #e6edf3 |
| テキスト（薄） | --color-text-muted | #8b949e |
| アクセント | --color-accent | #58a6ff |

### 5.2 フォント

| 用途 | フォントファミリー |
|-----|-------------------|
| 本文 | -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans JP', sans-serif |
| コード | 'SF Mono', 'Fira Code', 'Consolas', monospace |

### 5.3 レイアウト
- 最大幅: 1200px
- パディング: 2rem 1.5rem（デスクトップ）、1rem（モバイル）

### 5.4 フッター
- 著作権表示: © 2026 びーぐる(Beagle Works)
- ソーシャルリンク: X (Twitter) アイコン（著作権表示の後）
- 外部リンク: プロダクト固有リンク（詳細は各プロダクト仕様を参照）

---

## 6. 制約事項

### 6.1 既知の制限
- GitHub API レート制限: 認証なしで60リクエスト/時間
- 検索はクライアントサイドで実行されるため、データ量が増えるとパフォーマンスに影響

### 6.2 前提条件
- `CHANGELOG_{YEAR}_JA.md` が指定のMarkdown形式に従っていること
- リポジトリやタグ形式などの前提は各プロダクト仕様に準拠すること

---

## 7. セキュリティ要件

### 7.1 XSS/HTML注入対策
GitHub CHANGELOG 等の外部データを HTML として表示する際は、以下のルールに従う：

| 処理順序 | 内容 |
|---------|------|
| 1 | HTML特殊文字（`<`, `>`, `&`, `"`, `'`）をエスケープ |
| 2 | バッククォート（`` ` ``）で囲まれた部分のみ `<code>` タグに変換 |

**対象箇所:**
- `VersionSection.astro`: テーブルセル表示
- `index.astro`: 検索結果のハイライト表示

### 7.2 コマンドインジェクション対策
外部データを含むコマンドを実行する際は、シェルを経由せずに直接実行する：

| 禁止 | 推奨 |
|------|------|
| `execSync(\`cmd "${data}"\`)` | `execFileSync('cmd', [data])` |

**対象箇所:**
- `sync-versions.ts`: Claude CLI 呼び出し
- `retranslate.ts`: Claude CLI 呼び出し

---

## 8. 変更履歴

| 日付 | バージョン | 変更内容 |
|-----|-----------|---------|
| 2026-02-08 | 3.5.0 | Claude Code の AI カテゴリ分類（翻訳時に分類、3列テーブル化、キーワード判定からフォールバック方式に移行） |
| 2026-02-08 | 3.4.0 | カテゴリ凡例追加（info-bar にカラーバー+ラベル形式の凡例を表示） |
| 2026-02-06 | 3.3.0 | 表示モード機能追加（日本語のみ/原文のみ/両方の表示切替、URLパラメータ `?display=` 対応） |
| 2026-02-05 | 3.2.0 | Codex カテゴリ分類の本家準拠化（Entry 型に category 追加、3列テーブル対応） |
| 2026-02-04 | 3.1.0 | トップページのリダイレクト廃止（直接表示）、canonical URL 対応 |
| 2026-02-04 | 3.0.0 | マルチプロダクト対応（OpenAI Codex CHANGELOG 追加） |
| 2026-01-31 | 2.2.0 | 検索時のcode表示維持、月内ソート、Markdownエスケープ、年別ページ動的化 |
| 2026-01-31 | 2.1.3 | セキュリティ要件を追加（XSS対策、コマンドインジェクション対策） |
| 2026-01-30 | 2.1.2 | 翻訳モデルを Claude Sonnet に明示的に指定（品質向上） |
| 2026-01-30 | 2.1.1 | ソースデータを `content/` ディレクトリに移動 |
| 2026-01-30 | 2.1.0 | 「（翻訳待ち）」エントリの再翻訳機能を追加 |
| 2026-01-30 | 2.0.0 | 新バージョン検出時に Claude Code CLI で自動翻訳する機能を追加 |
| 2026-01-30 | 1.4.0 | 新バージョン自動検出機能を追加（npm レジストリから未記載バージョンを検出し CHANGELOG に自動追記） |
| 2026-01-30 | 1.3.1 | フッターXアイコン位置変更、bugfixes分類対応 |
| 2026-01-29 | 1.3.0 | エントリタイプ分類改善、GitHubタグ取得追加、デプロイスケジュール変更、フッター改善 |
| 2026-01-29 | 1.2.0 | npm レジストリからのリリース日取得に変更（最も正確な公開日） |
| 2026-01-29 | 1.1.0 | 複数年対応を追加（2025年ページ、年切り替えナビゲーション） |
| 2026-01-29 | 1.0.0 | 初版作成 |
