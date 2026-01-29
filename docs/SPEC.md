# Claude Code CHANGELOG Viewer 仕様書

## 1. 概要

### 1.1 目的
Claude Code の変更履歴（CHANGELOG）を日本語/英語の並列テーブル形式で閲覧できる静的Webアプリケーション。

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

## 2. 機能要件

### 2.1 データ表示

#### 2.1.1 月別グループ化
- 変更履歴を月単位でグループ化して表示
- 各月グループは折りたたみ可能（`<details>`要素）
- 最新月はデフォルトで展開、それ以外は折りたたみ
- 月ヘッダーにリリース数と変更項目数を表示

#### 2.1.2 バージョンセクション
- 各バージョンごとにセクションを表示
- 表示項目：
  - バージョン番号（例: v2.1.23）
  - 月内アップデート順序番号（例: | #3 - その月の3番目のリリース）
  - リリース日（日本語形式: 2026年1月29日）
  - 変更エントリテーブル
- 月内アップデート順序番号は、その月の何度目のアップデートかを示す（1から始まる連番）

#### 2.1.3 テーブル形式
| 列 | 内容 |
|----|------|
| 日本語 | 変更内容の日本語説明 |
| English | 変更内容の英語説明 |

#### 2.1.4 エントリタイプの視覚的識別
変更内容の先頭キーワードに応じて左ボーダー色を変更：

| キーワード | 色 | カラーコード |
|-----------|-----|-------------|
| Added / 追加 | 緑 | #3fb950 |
| Fixed / 修正 | オレンジ | #f0883e |
| Changed / 変更 | 紫 | #a371f7 |
| Improved / 改善 | 青 | #79c0ff |
| Other / その他 | グレー | #8b949e |

### 2.2 検索機能

#### 2.2.1 全文検索
- Fuse.js によるファジー検索
- 日本語・英語両方の列を検索対象
- 検索閾値（threshold）: 0.3
- 位置非依存検索（ignoreLocation: true）

#### 2.2.2 検索UI
- 検索ボックス（プレースホルダー: 「検索... (日本語/English)」）
- クリアボタン（入力時に表示）
- 検索結果件数の表示
- 結果なし時のメッセージ表示

#### 2.2.3 検索結果の表示
- マッチしたエントリのみ表示
- マッチしないバージョン・月グループを非表示
- マッチ箇所のハイライト表示（黄色背景）
- 検索結果がある月グループは自動展開

#### 2.2.4 キーボード操作
- `Escape`キー: 検索クリア
- デバウンス: 150ms

#### 2.2.5 URLパラメータ
- `?q=検索語` でページ読み込み時に検索を実行

### 2.3 レスポンシブデザイン
- デスクトップ・モバイル両対応
- ブレークポイント: 768px
- モバイルでのフォントサイズ調整（iOS ズーム防止: 16px）

### 2.4 複数年対応

#### 2.4.1 年別ページ
- トップページ（`/`）: 最新年（2026年）のCHANGELOG
- 過去年ページ（`/2025/`）: 2025年のCHANGELOG
- 各ページは同一のUIコンポーネントを使用

#### 2.4.2 年切り替えナビゲーション
- ヘッダーに年切り替えリンクを表示
- 現在表示中の年はアクティブ状態で強調表示
- クリックで年間を切り替え可能

---

## 3. データ仕様

### 3.1 入力データ

#### 3.1.1 年別CHANGELOGファイル
年ごとに分離されたMarkdownファイル：
- `CHANGELOG_2026_JA.md`: 2026年のリリース（v2.1.0以降）
- `CHANGELOG_2025_JA.md`: 2025年のリリース（v2.0.x以前）

形式：
```markdown
## 2.1.23

| 日本語 | English |
|--------|---------|
| 変更内容（日本語） | Change description (English) |
| ... | ... |

## 2.1.22
...
```

### 3.2 生成データ

#### 3.2.1 年別JSONファイル
年ごとに分離されたJSONファイル：
- `src/data/changelog-2026.json`: 2026年のデータ
- `src/data/changelog-2025.json`: 2025年のデータ

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
}
```

#### 3.2.2 年別Markdownファイル
- `generated/CHANGELOG-2026.md`: 2026年の整形済みMarkdown
- `generated/CHANGELOG-2025.md`: 2025年の整形済みMarkdown

### 3.3 リリース日取得

#### 3.3.1 取得元の優先順位
日付の正確性を最大化するため、以下の優先順位で取得：

| 優先度 | ソース | 説明 |
|--------|--------|------|
| 1 | npm レジストリ | 実際の公開日（最も正確） |
| 2 | 補間 | npm で取得できない場合、近隣バージョンから推定 |

#### 3.3.2 npm レジストリからの取得
- パッケージ名: `@anthropic-ai/claude-code`
- 取得コマンド: `npm view @anthropic-ai/claude-code time --json`
- 全バージョンの公開日を一括取得
- レート制限なし

#### 3.3.3 日時変換
- npm レジストリ: UTC
- 表示: JST（UTC+9）
- 変換式: `new Date(utcDate).getTime() + 9 * 60 * 60 * 1000`

#### 3.3.4 補間ロジック
npm で取得できないバージョン（未公開・削除済み等）は近隣バージョンの日付から推定：
- 前方（新しいバージョン）と後方（古いバージョン）を探索
- 両方見つかった場合は新しい方の日付を使用

---

## 4. ビルドプロセス

### 4.1 データフロー

```
CHANGELOG_{YEAR}_JA.md  +  GitHub Releases API
         │                       │
         ▼                       ▼
   parse-changelog.ts    fetch-releases.ts
         │                       │
         └───────┬───────────────┘
                 ▼
         generate-data.ts [year]
                 │
         ┌───────┴───────┐
         ▼               ▼
 changelog-{year}.json  CHANGELOG-{year}.md
         │
         ▼
   Astro SSG Build → dist/
                       ├── index.html (2026)
                       └── 2025/index.html
```

### 4.2 npm scripts

| コマンド | 説明 |
|---------|------|
| `pnpm dev` | 開発サーバー起動（localhost:4321） |
| `pnpm build` | データ生成 + 静的サイトビルド |
| `pnpm preview` | ビルド結果のプレビュー |
| `pnpm generate` | 全年のデータ生成（2026年 + 2025年） |
| `pnpm generate:2026` | 2026年のデータ生成のみ |
| `pnpm generate:2025` | 2025年のデータ生成のみ |

---

## 5. デプロイ仕様

### 5.1 GitHub Pages

#### 5.1.1 設定
- Source: GitHub Actions
- Base URL: `/ccclog/`
- Trailing Slash: always

#### 5.1.2 トリガー
| トリガー | タイミング |
|---------|-----------|
| push | mainブランチへのプッシュ時 |
| schedule | 6時間ごと（0:00, 6:00, 12:00, 18:00 UTC） |
| workflow_dispatch | 手動実行 |

### 5.2 ビルド環境
- OS: ubuntu-latest
- Node.js: 22
- pnpm: 10

---

## 6. ファイル構成

```
ccclog/
├── .github/
│   └── workflows/
│       └── deploy.yml              # CI/CDワークフロー
├── docs/
│   └── SPEC.md                     # 本仕様書
├── generated/
│   ├── CHANGELOG-2026.md           # 生成されるMarkdown（2026年）
│   └── CHANGELOG-2025.md           # 生成されるMarkdown（2025年）
├── public/
│   └── favicon.svg                 # サイトアイコン
├── scripts/
│   ├── fetch-releases.ts           # GitHub API連携
│   ├── generate-data.ts            # データ生成メイン（年引数対応）
│   └── parse-changelog.ts          # Markdownパーサー
├── src/
│   ├── components/
│   │   ├── MonthGroup.astro        # 月グループコンポーネント
│   │   ├── SearchBox.astro         # 検索UIコンポーネント
│   │   └── VersionSection.astro    # バージョンセクション
│   ├── data/
│   │   ├── changelog-2026.json     # 生成されるJSONデータ（2026年）
│   │   └── changelog-2025.json     # 生成されるJSONデータ（2025年）
│   ├── layouts/
│   │   └── BaseLayout.astro        # 共通レイアウト（年ナビ含む）
│   └── pages/
│       ├── index.astro             # トップページ（2026年）
│       └── 2025.astro              # 2025年ページ
├── astro.config.mjs                # Astro設定
├── CHANGELOG_2026_JA.md            # 元データ（2026年）
├── CHANGELOG_2025_JA.md            # 元データ（2025年）
├── package.json
└── tsconfig.json
```

---

## 7. UI仕様

### 7.1 カラーパレット（ダークテーマ）

| 用途 | 変数名 | 値 |
|-----|--------|-----|
| 背景 | --color-bg | #0d1117 |
| 背景（二次） | --color-bg-secondary | #161b22 |
| ボーダー | --color-border | #30363d |
| テキスト | --color-text | #e6edf3 |
| テキスト（薄） | --color-text-muted | #8b949e |
| アクセント | --color-accent | #58a6ff |

### 7.2 フォント

| 用途 | フォントファミリー |
|-----|-------------------|
| 本文 | -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans JP', sans-serif |
| コード | 'SF Mono', 'Fira Code', 'Consolas', monospace |

### 7.3 レイアウト
- 最大幅: 1200px
- パディング: 2rem 1.5rem（デスクトップ）、1rem（モバイル）

---

## 8. 制約事項

### 8.1 既知の制限
- GitHub API レート制限: 認証なしで60リクエスト/時間
- 検索はクライアントサイドで実行されるため、データ量が増えるとパフォーマンスに影響

### 8.2 前提条件
- CHANGELOG_2026_JA.md が指定のMarkdown形式に従っていること
- GitHub Releasesのタグ名が `vX.Y.Z` 形式であること

---

## 9. 変更履歴

| 日付 | バージョン | 変更内容 |
|-----|-----------|---------|
| 2026-01-29 | 1.2.0 | npm レジストリからのリリース日取得に変更（最も正確な公開日） |
| 2026-01-29 | 1.1.0 | 複数年対応を追加（2025年ページ、年切り替えナビゲーション） |
| 2026-01-29 | 1.0.0 | 初版作成 |
