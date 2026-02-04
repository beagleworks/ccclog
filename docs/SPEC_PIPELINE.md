# データ生成・CI/CD 仕様書

この文書はデータ生成・ビルド・デプロイの仕様をまとめたものです。共通仕様は `docs/SPEC.md`、プロダクト固有仕様は `docs/SPEC_CLAUDE.md` / `docs/SPEC_CODEX.md` を参照してください。

---

## 1. ビルドプロセス

### 1.1 データフロー（Claude Code を基準）

#### 1.1.1 Markdown生成時のエスケープ
テーブル形式のMarkdownを生成する際、エントリ内のパイプ文字（`|`）は `\|` にエスケープする。

```
npm レジストリ  +  GitHub CHANGELOG.md
     │                    │
     ▼                    ▼
         sync-versions.ts
                 │
                 ▼
     CHANGELOG_{YEAR}_JA.md (新バージョン自動追記)
                 │
─────────────────┼─────────────────────────────────
                 │
CHANGELOG_{YEAR}_JA.md  +  npm レジストリ / GitHub Releases API
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

#### 1.1.2 Codex の補足
Codex は GitHub Releases の body を `parse-codex-releases.ts` で抽出し、`sync-codex-versions.ts` により `content/codex/CHANGELOG_{YEAR}_JA.md` を更新する。

---

## 2. npm scripts

| コマンド | 説明 |
|---------|------|
| `pnpm dev` | 開発サーバー起動（localhost:4321） |
| `pnpm preview` | ビルド結果のプレビュー |
| `pnpm build` | データ生成 + 静的サイトビルド |
| `pnpm generate` | 全プロダクト・全年のデータ生成 |
| `pnpm generate:claude-code` | Claude Code のみ生成 |
| `pnpm generate:codex` | Codex のみ生成 |
| `pnpm sync-versions` | npm レジストリから新バージョンを検出し CHANGELOG に追記（Claude Code） |
| `pnpm sync-codex-versions` | GitHub Releases から新バージョンを検出し CHANGELOG に追記（Codex） |
| `pnpm retranslate` | 「（翻訳待ち）」エントリを再翻訳（引数で年指定可） |
| `pnpm detect-upstream` | 上流CHANGELOGの変更検出のみを実行 |
| `pnpm sync-upstream` | 上流CHANGELOGの変更検出 + 自動適用を実行 |

---

## 3. GitHub API 認証

### 3.1 認証方式
- `GITHUB_TOKEN` 環境変数があれば `Authorization: Bearer ...` ヘッダーを付与

### 3.2 レート制限時の挙動
| 環境 | 挙動 |
|------|------|
| CI | GitHub Actions のデフォルトトークンを使用（制限なし） |
| ローカル（トークンあり） | 認証済みレート制限（5000リクエスト/時間） |
| ローカル（トークンなし） | 警告を出力してビルド継続（取得できた範囲で動作） |

---

## 4. デプロイ仕様

### 4.1 GitHub Pages

#### 4.1.1 設定
- Source: GitHub Actions
- Base URL: `/ccclog/`
- Trailing Slash: always

#### 4.1.2 トリガー
| トリガー | タイミング |
|---------|-----------|
| push | mainブランチへのプッシュ時 |
| schedule | 日本時間 6:00, 9:00, 12:00, 18:00 |
| workflow_dispatch | 手動実行（オプションで再翻訳モード選択可） |

#### 4.1.3 手動実行オプション
| オプション | 説明 | デフォルト |
|-----------|------|-----------|
| retranslate | 「（翻訳待ち）」エントリを再翻訳 | false |

#### 4.1.4 新バージョン自動検出・追記
定期ビルド時に以下の処理を実行：
1. `pnpm run sync-versions` で Claude Code の新バージョンを検出
2. `pnpm run sync-codex-versions` で Codex の新バージョンを検出
3. 変更があれば `CHANGELOG_{YEAR}_JA.md` に自動追記
4. 変更があれば自動コミット・プッシュ
5. 通常のビルド・デプロイを実行

#### 4.1.5 上流CHANGELOG変更検出・自動適用
定期ビルド時に `pnpm sync-upstream` を実行し、上流の修正があれば `CHANGELOG_{YEAR}_JA.md` に反映する。
変更があれば既存のコミットステップでまとめてコミットされる。

これにより、npm に新バージョンが公開されると最大6時間以内に自動的に CHANGELOG に追加される。

### 4.2 ビルド環境
- OS: ubuntu-latest
- Node.js: 22
- pnpm: 10

---

## 5. ファイル構成（マルチプロダクト対応後）

```
ccclog/
├── .github/
│   └── workflows/
│       └── deploy.yml              # CI/CDワークフロー
├── content/
│   ├── CHANGELOG_2025_JA.md        # Claude Code（既存維持）
│   ├── CHANGELOG_2026_JA.md        # Claude Code（既存維持）
│   └── codex/                      # Codex用
│       └── CHANGELOG_2026_JA.md
├── docs/
│   ├── SPEC.md                     # 共通仕様書
│   ├── SPEC_CLAUDE.md              # Claude Code 固有仕様
│   ├── SPEC_CODEX.md               # Codex 固有仕様
│   └── SPEC_PIPELINE.md            # パイプライン仕様
├── generated/
│   ├── CHANGELOG-2026.md           # 生成されるMarkdown（2026年）
│   ├── CHANGELOG-2025.md           # 生成されるMarkdown（2025年）
│   └── codex/
│       └── CHANGELOG-2026.md       # Codex用
├── public/
│   └── favicon.svg                 # サイトアイコン
├── scripts/
│   ├── fetch-releases.ts           # GitHub API連携
│   ├── generate-data.ts            # データ生成メイン（プロダクト対応）
│   ├── parse-changelog.ts          # Markdownパーサー
│   ├── parse-codex-releases.ts     # Codex Releases パーサー
│   ├── retranslate.ts              # 翻訳待ちエントリの再翻訳
│   ├── sync-versions.ts            # Claude Code 新バージョン検出・追記
│   └── sync-codex-versions.ts      # Codex 新バージョン検出・追記
├── src/
│   ├── components/
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
│   │   └── products.ts             # プロダクト設定
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

## 6. 制約事項

### 6.1 既知の制限
- GitHub API レート制限: 認証なしで60リクエスト/時間
- 検索はクライアントサイドで実行されるため、データ量が増えるとパフォーマンスに影響
