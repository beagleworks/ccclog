# Claude Code CHANGELOG Viewer 実装計画

## 概要
Astro + GitHub Pages で CHANGELOG Viewer を構築する。日本語|英語のテーブル形式表示、月別グループ化、検索機能を実装。

## プロジェクト構造

```
ccclog/
├── .github/workflows/deploy.yml    # GitHub Pages自動デプロイ
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── scripts/
│   ├── fetch-releases.ts           # GitHub APIから日付取得
│   ├── parse-changelog.ts          # MDファイルをパース
│   └── generate-data.ts            # JSON/MD生成メイン
├── src/
│   ├── components/
│   │   ├── MonthGroup.astro        # 月ごとのグループ
│   │   ├── VersionSection.astro    # バージョンセクション
│   │   └── SearchBox.astro         # 検索UI
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro
│   ├── scripts/
│   │   └── search.ts               # クライアント側検索（Fuse.js）
│   └── data/
│       └── changelog.json          # ビルド時生成
├── generated/
│   └── CHANGELOG.md                # ビルド時生成（MD出力）
├── CHANGELOG_2026_JA.md            # 元データ（手動管理）
└── dist/                           # ビルド出力
```

## データフロー

```
CHANGELOG_2026_JA.md  +  GitHub Releases API
         │                       │
         ▼                       ▼
   parse-changelog.ts    fetch-releases.ts
         │                       │ (UTC→JST変換)
         └───────┬───────────────┘
                 ▼
         generate-data.ts
                 │
         ┌───────┴───────┐
         ▼               ▼
   changelog.json    CHANGELOG.md
         │
         ▼
   Astro SSG Build → dist/ → GitHub Pages
```

## データ構造

```typescript
interface ChangelogData {
  generatedAt: string;
  months: MonthGroup[];
}

interface MonthGroup {
  key: string;           // "2026-01"
  label: string;         // "2026年1月"
  versions: Version[];
}

interface Version {
  version: string;       // "2.1.23"
  releaseDate: string;   // "2026-01-29"
  releaseDateDisplay: string; // "2026年1月29日"
  entries: Entry[];
}

interface Entry {
  ja: string;
  en: string;
}
```

## 実装フェーズ

### Phase 1: プロジェクト初期化 & データ層
1. `pnpm create astro@latest` でAstro初期化
2. `scripts/parse-changelog.ts` - 既存MDパース
3. `scripts/fetch-releases.ts` - GitHub API連携（UTC→JST変換）
4. `scripts/generate-data.ts` - JSON/MD生成

### Phase 2: 静的サイト基盤
1. `BaseLayout.astro` - 共通レイアウト
2. `index.astro` - メインページ（データ読み込み・表示）

### Phase 3: コンポーネント
1. `MonthGroup.astro` - 月ヘッダー + 折りたたみ
2. `VersionSection.astro` - バージョン番号 + 日付 + テーブル
3. スタイリング

### Phase 4: 検索機能
1. `SearchBox.astro` - 検索入力UI
2. `src/scripts/search.ts` - Fuse.jsで全文検索
3. 検索結果ハイライト

### Phase 5: デプロイ
1. `.github/workflows/deploy.yml` 作成
2. GitHub Pages有効化
3. 定期ビルド設定（6時間ごと）

## 主要ファイル

| ファイル | 役割 |
|---------|------|
| `scripts/generate-data.ts` | データ生成のコア。API連携・パース・出力を統合 |
| `src/pages/index.astro` | メインページ。月別表示 + 検索UI |
| `src/scripts/search.ts` | Fuse.jsによるクライアント側検索 |
| `.github/workflows/deploy.yml` | 自動デプロイ設定 |

## 依存パッケージ

```json
{
  "dependencies": {
    "astro": "^5.x",
    "fuse.js": "^7.x"
  },
  "devDependencies": {
    "tsx": "^4.x",
    "typescript": "^5.x"
  }
}
```

## 検証方法

1. **ローカル確認**: `pnpm dev` で開発サーバー起動、ブラウザで表示確認
2. **検索テスト**: 日本語・英語両方で検索してヒットすることを確認
3. **MD出力確認**: `generated/CHANGELOG.md` が正しく生成されていることを確認
4. **ビルド確認**: `pnpm build` が成功すること
5. **デプロイ確認**: GitHub Pagesで公開されることを確認
