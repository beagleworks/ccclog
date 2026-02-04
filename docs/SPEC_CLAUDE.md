# Claude Code 仕様書

この文書は Claude Code 固有仕様をまとめたものです。共通仕様は `docs/SPEC.md`、パイプライン仕様は `docs/SPEC_PIPELINE.md` を参照してください。

---

## 1. プロダクト概要

| 項目 | 値 |
|------|----|
| `productId` | `claude-code` |
| `basePath` | `/` |
| `contentDir` | `content/` |
| `dataDir` | `src/data/` |
| `npmPackage` | `@anthropic-ai/claude-code` |
| `github.owner` | `anthropics` |
| `github.repo` | `claude-code` |
| `github.tagPrefix` | `v` |

---

## 2. 入力データ

### 2.1 年別CHANGELOGファイル
年ごとに分離されたMarkdownファイル（`content/` ディレクトリに配置）：
- `content/CHANGELOG_2026_JA.md`: 2026年のリリース（v2.1.0以降）
- `content/CHANGELOG_2025_JA.md`: 2025年のリリース（v2.0.x以前）

フォーマットは共通仕様（`docs/SPEC.md` の 4.1）に準拠する。

---

## 3. リリース日取得

### 3.1 取得元の優先順位
日付の正確性を最大化するため、以下の優先順位で取得：

| 優先度 | ソース | 説明 |
|--------|--------|------|
| 1 | npm レジストリ | 実際の公開日（最も正確） |
| 2 | GitHub タグ | npm 未公開の場合、タグ作成日を使用 |
| 3 | 補間 | 上記で取得できない場合、近隣バージョンから推定 |

### 3.2 npm レジストリからの取得
- パッケージ名: `@anthropic-ai/claude-code`
- 取得コマンド: `npm view @anthropic-ai/claude-code time --json`
- 全バージョンの公開日を一括取得
- レート制限なし

### 3.3 日時変換
- npm レジストリ: UTC
- 表示: JST（UTC+9）
- 変換式: `new Date(utcDate).getTime() + 9 * 60 * 60 * 1000`

### 3.4 GitHub タグからの取得
- GitHub Releases API を使用
- タグ名から `v` プレフィックスを除去してバージョン番号を取得
- `published_at` フィールドをJSTに変換して使用

### 3.5 補間ロジック
npm および GitHub タグで取得できないバージョン（未公開・削除済み等）は近隣バージョンの日付から推定：
- 前方（新しいバージョン）と後方（古いバージョン）を探索
- 両方見つかった場合は新しい方の日付を使用

---

## 4. 新バージョン自動検出（sync-versions.ts）

### 4.1 処理フロー
1. npm レジストリから `@anthropic-ai/claude-code` の全バージョン一覧と公開日を取得
2. 当該年（現在の年、JST基準）の `CHANGELOG_{YEAR}_JA.md` から既存バージョンを抽出
3. 未記載バージョンを特定
4. GitHub の `CHANGELOG.md` から各バージョンの変更内容（英語）を取得
5. 未記載バージョンを当該年のファイルに追記

※ 過去年の CHANGELOG は既に整備済みのため、当該年のみを対象とする

### 4.2 自動翻訳
新バージョン検出時に Claude Code CLI を使用して英語エントリを日本語に自動翻訳：

| 項目 | 内容 |
|------|------|
| 翻訳ツール | Claude Code CLI (`claude --print --model sonnet`) |
| 翻訳モデル | Claude Sonnet（品質とコストのバランス） |
| 認証方式 | OAuth トークン（サブスクリプション） |
| 環境変数 | CLAUDE_CODE_OAUTH_TOKEN |

**翻訳プロンプト:**
- Claude Code の変更履歴として適切な技術用語の翻訳
- 簡潔で自然な日本語
- 各エントリを1行で翻訳

**フォールバック処理:**
- Claude Code CLI が利用不可の場合: 「（翻訳待ち）」として追記
- 翻訳エラーの場合: 「（翻訳待ち）」として追記
- これによりビルドは常に成功する

### 4.3 追記形式
```markdown
## X.Y.Z

| 日本語 | English |
|--------|---------|
| 翻訳済みテキスト | Original English text from GitHub CHANGELOG |
```

※ API キー未設定時やエラー時は「翻訳済みテキスト」が「（翻訳待ち）」になる

### 4.4 年の判定
- npm 公開日を JST に変換して年を判定
- UTC 15:00 以降は翌日としてカウント（JST 0:00）

### 4.5 挿入位置
- 新しいバージョンはファイルの先頭（ヘッダー直後）に追加
- バージョン番号の降順を維持

---

## 5. 翻訳待ちエントリの再翻訳（retranslate.ts）

### 5.1 概要
「（翻訳待ち）」となっているエントリを検出し、Claude Code CLI で再翻訳するスクリプト。

### 5.2 処理フロー
1. `CHANGELOG_{YEAR}_JA.md` から「（翻訳待ち）」を含むバージョンを検出
2. 対象バージョンの英語エントリを抽出
3. Claude Code CLI で日本語に翻訳
4. 翻訳結果で「（翻訳待ち）」を置換
5. ファイルを上書き保存

### 5.3 対象ファイル
- 引数なし: 当該年（JST基準）のファイルのみ
- 引数あり: 指定された年のファイル（例: `pnpm retranslate 2025`）

### 5.4 実行タイミング
- ローカル: 手動で `pnpm retranslate` を実行
- CI: `workflow_dispatch` で「再翻訳モード」を選択時

### 5.5 エラーハンドリング
- Claude Code CLI が利用不可: エラーメッセージを表示して終了
- 翻訳失敗: 該当エントリをスキップし、次のエントリを処理
- 部分的な成功でもファイルは更新される

---

## 6. 上流CHANGELOG変更検出・自動適用（detect-upstream-changes.ts）

### 6.1 概要
Claude Code 本体の `CHANGELOG.md` が公開後に修正された場合に、ローカルの `CHANGELOG_{YEAR}_JA.md` へ反映する。

### 6.2 対象範囲
- 上流 `CHANGELOG.md` の先頭から直近3バージョン（最新、1つ前、2つ前）のみ
- 年跨ぎ等は考慮しない（当該年の `CHANGELOG_{YEAR}_JA.md` のみを対象）

### 6.3 取得元
- `https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md`

### 6.4 比較ロジック
- エントリを正規化（小文字化、空白統一、トリム）して比較
- 並び替えは無視し、内容のみを比較
- 重複行は出現回数込みで比較（集合ではなくマルチセット）
- 文言変更の同定は行わず「追加+削除」として扱う

### 6.5 適用ロジック（`--apply` 指定時）
- 対象バージョンごとに、上流の英語エントリ一覧を基準としてテーブルを再構築
- 既存の行は英語一致の日本語を再利用（「（翻訳待ち）」は再利用しない）
- 新規/修正（追加扱い）の英語エントリのみ自動翻訳を実行（失敗時は「（翻訳待ち）」）
- 対象バージョンのセクションのみ更新

### 6.6 実行タイミング
- ローカル: 手動で `pnpm sync-upstream` を実行
- CI: 定期ビルド時に自動実行

### 6.7 エラーハンドリング
- GitHub 取得失敗: エラーログを出力してスキップ（ビルドは継続）
- 対象バージョンが当該年ファイルに存在しない: 警告ログのみ

---

## 7. 前提条件
- GitHub Releasesのタグ名が `vX.Y.Z` 形式であること
