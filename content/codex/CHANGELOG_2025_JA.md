# OpenAI Codex 変更履歴 (2025年)

このファイルは OpenAI Codex の2025年リリース分の変更履歴を日本語で記載しています。

---

## 0.77.0

| 日本語 | English | Category |
|--------|---------|----------|
| TUI2: ターミナル間でマウスホイール + トラックパッドのスクロールを正規化し、`tui.scroll_*` 設定を追加（PR #8357） | TUI2: Normalize mouse wheel + trackpad scrolling across terminals; add `tui.scroll_*` config settings (PR #8357) | new-features |
| `requirements.toml` に `allowed_sandbox_modes` を追加し、許可されるサンドボックスモードを制限可能に（PR #8298） | Add `allowed_sandbox_modes` to `requirements.toml` to constrain permitted sandbox modes (PR #8298) | new-features |
| MCP: ストリーム可能な HTTP MCP サーバーの OAuth ログインで `rmcp_client` 機能フラグが不要に（PR #8087） | MCP: OAuth login for streamable HTTP MCP servers no longer requires the `rmcp_client` feature flag (PR #8087) | new-features |
| `codex-file-search` でファイル名導出を一元化し、ファジーファイル検索の表示と一貫性を改善（PR #8334） | Improve fuzzy file search display/consistency by centralizing file-name derivation in `codex-file-search` (PR #8334) | new-features |
| バンドルされたモデルメタデータ（`models.json`）を更新（PR #8168） | Update bundled model metadata (`models.json`) (PR #8168) | new-features |
| `/undo` が git のステージングやゴーストコミットに破壊的に作用する問題を修正（PR #8303） | Fix `/undo` interacting destructively with git staging / ghost commits (PR #8303) | bug-fixes |
| TUI2: トランスクリプトのスクロール中の冗長な再描画を削減（PR #8295） | TUI2: Reduce redundant redraws while scrolling transcripts (PR #8295) | bug-fixes |
| Docs: `experimental.md` 内の `contributing.md` へのリンクを修正（PR #8311） | Docs: Fix link to `contributing.md` in `experimental.md` (PR #8311) | bug-fixes |

## 0.76.0

| 日本語 | English | Category |
|--------|---------|----------|
| macOS DMG ビルドターゲットを追加 (PR #8207) | Add a macOS DMG build target (PR #8207) | new-features |
| 端末ごとのスクロール調整のための端末検出メタデータを改善 (PR #8252) | Improve terminal detection metadata for per-terminal scroll tuning (PR #8252) | new-features |
| スキルポップアップの UI を調整 (PR #8250) | UI tweaks on the skills popup (PR #8250) | new-features |
| TUI 検索セルのレンダリングを改善 (PR #8273) | TUI search cell rendering improvements (PR #8273) | new-features |
| /ps コマンドを追加 (PR #8279) | Add /ps command (PR #8279) | new-features |
| UNIX 環境での /etc/codex/requirements.toml に対応 (PR #8277) | Add support for /etc/codex/requirements.toml on UNIX (PR #8277) | new-features |
| スキルの shortDescription に対応 (PR #8278, PR #8301) | Support shortDescription for skills (PR #8278, PR #8301) | new-features |
| モデル一覧 UI を追加 (PR #8286) | Add model list UI (PR #8286) | new-features |
| app-server v2 廃止予定通知イベントを追加 (PR #8285) | Add app-server v2 deprecation notice event (PR #8285) | new-features |
| ExternalSandbox ポリシーを導入 (PR #8290) | Introduce ExternalSandbox policy (PR #8290) | new-features |
| スキルをデフォルトで有効化 (PR #8297) | Skills default on (PR #8297) | new-features |
| 管理者スコープのスキルに対応 (PR #8296) | Support admin-scoped skills (PR #8296) | new-features |
| バンドルされたシステムスキルを更新 (PR #8253, PR #8328) | Update bundled system skills (PR #8253, PR #8328) | new-features |
| app server で exclude のデフォルトを true に設定 (PR #8281) | Set exclude default to true in app server (PR #8281) | new-features |
| 制限付きサンドボックストークンでパイプが動作するよう修正 (PR #8280) | Ensure pipes work in restricted sandbox tokens (PR #8280) | bug-fixes |
| command-runner ディレクトリへの読み取り ACL をより早期に付与 (PR #8275) | Grant read ACL to the command-runner directory earlier (PR #8275) | bug-fixes |
| 重複する shell_snapshot FeatureSpec のリグレッションを修正 (PR #8274) | Fix duplicate shell_snapshot FeatureSpec regression (PR #8274) | bug-fixes |
| request への切り替えによりサンドボックス状態の更新順序を修正 (PR #8142) | Fix sandbox-state update ordering by switching to request (PR #8142) | bug-fixes |

## 0.75.0

| 日本語 | English | Category |
|--------|---------|----------|
| スプラッシュスクリーンを追加 (#8270) | Add splash screen (#8270) | new-features |
| 制約ベースの新しいローディング戦略に移行 (#8251) | Migrate to new constraint-based loading strategy (#8251) | chores |
| cloud: cloud exec でデフォルトを現在のブランチに変更 (#7460) | cloud: default to current branch in cloud exec (#7460) | chores |

## 0.74.0

| 日本語 | English | Category |
|--------|---------|----------|
| 知識・推論・コーディングを改善した最新フロンティアモデル gpt-5.2-codex を導入 | Introducing gpt-5.2-codex our latest frontier model with improvements across knowledge, reasoning and coding | new-features |
| 実験的機能を試すための新しいスラッシュコマンド `/experimental` を追加 | Add new slash command `/experimental` for trying out experimental features | new-features |
| ゴーストスナップショット警告の無効化トグルを追加 (#8178) | Ghost snapshot warning disable toggle (#8178) | new-features |
| UI を改善（バックグラウンドターミナル、ピッカーのクリーンアップ）(#8255, #8232) | UI polish (background terminals, picker cleanup) (#8255, #8232) | new-features |
| SYSTEM スキルをサポート (#8220) | Support SYSTEM skills (#8220) | new-features |
| パブリックスキルを追加し、リポジトリスキルの検出とエラー UX を改善 (#8098) | Add public skills + improve repo skill discovery and error UX (#8098) | new-features |
| モデルピッカーを追加 (#8209) | feat: model picker (#8209) | new-features |
| 統一された実行フッターを追加 (#8117) | feat: unified exec footer (#8117) | new-features |
| TypeScript SDK に xhigh 推論努力レベルのサポートを追加 (#8108) | feat(sdk): add xhigh reasoning effort support to TypeScript SDK (#8108) | new-features |
| .codex が書き込み可能なルートのサブフォルダーの場合、サンドボックスに対して読み取り専用にする (#8088) | feat: if .codex is a sub-folder of a writable root, then make it read-only to the sandbox (#8088) | new-features |
| ConfigBuilder を導入 (#8235) | fix: introduce ConfigBuilder (#8235) | bug-fixes |
| セッションダウングレードを修正 (#8196) | fix: session downgrade (#8196) | bug-fixes |
| スキルディレクトリのクリーンアップを修正 (#8194) | fix: proper skills dir cleanup (#8194) | bug-fixes |
| パスチェック経由で Bun グローバルインストールを検出するよう修正 (#8004) | Fix: Detect Bun global install via path check (#8004) | bug-fixes |
| WSL マウントポイント使用時に大文字小文字を区別しないよう resume マッチングを修正 (#8000) | Fixed resume matching to respect case insensitivity when using WSL mount points (#8000) | bug-fixes |
| 無効な Windows ファイル名を回避するため Option<()> スキーマ生成をスキップするよう修正 (#7969) | Fix: Skip Option<()> schema generation to avoid invalid Windows filenames (#7969) | bug-fixes |
| 並列ツール呼び出しを修正 (#7956) | fix parallel tool calls (#7956) | bug-fixes |
| codex resume --all のドキュメントを明確化（CWD カラムとフィルタリング）(#8264) | docs: clarify codex resume --all (CWD column & filtering) (#8264) | documentation |
| 不正なスキルの読み込みをフェイルオープンに変更 (#8243) | Make loading malformed skills fail-open (#8243) | new-features |
| "Team" を "Business" に変更し Education を追加 (#8221) | Change "Team" to "Business" and add Education (#8221) | new-features |
| 読み取り ACL 設定の速度と信頼性を改善 (#8216) | speed and reliability improvements for setting reads ACLs (#8216) | new-features |
| list_models をノンブロッキングに変更 (#8198) | feat: make list_models non-blocking (#8198) | new-features |
| 静的ファイルからモデルを読み込むよう変更 (#8153) | Load models from static file (#8153) | new-features |
| [app-server] 新しい RawResponseItem v2 イベントを追加 (#8152) | [app-server] add new RawResponseItem v2 event (#8152) | new-features |
| unified_exec を shell_command にフォールバック (#8075) | feat: fallback unified_exec to shell_command (#8075) | new-features |
| 最終ユーザーターンで圧縮しないよう変更 (#8060) | feat: do not compact on last user turn (#8060) | new-features |
| ターン終了時に unified_exec を閉じるよう変更 (#8052) | feat: close unified_exec at end of turn (#8052) | new-features |
| approval_policy の値を制約 (#7778) | feat: Constrain values for approval_policy (#7778) | new-features |
| elevated sandbox セットアップのバグ修正とパフォーマンス改善 (#8094) | bug fixes and perf improvements for elevated sandbox setup (#8094) | bug-fixes |
| shell_command のフリーフォームタイムアウト出力を修正 (#7791) | chore(shell_command) fix freeform timeout output (#7791) | bug-fixes |
| listMcpServerStatus をノンブロッキングに更新 (#8151) | chore: update listMcpServerStatus to be non-blocking (#8151) | chores |
| user_agent ヘッダーを追加 (#8149) | Add user_agent header (#8149) | chores |
| npm パッケージに新しい Windows バイナリを含める (#8140) | include new windows binaries in npm package (#8140) | chores |
| Node 24 互換性のため GitHub Actions をアップグレード (#8102) | Upgrade GitHub Actions for Node 24 compatibility (#8102) | chores |
| config.md の gpt-5.2 タイポを修正 (#8079) | docs: fix gpt-5.2 typo in config.md (#8079) | documentation |
| 編集時のコメントを永続化 (#7931) | chore: persist comments in edit (#7931) | chores |
| exec-server: エラーの追加コンテキストを提供 (#7935) | exec-server: additional context for errors (#7935) | bug-fixes |

## 0.73.0

| 日本語 | English | Category |
|--------|---------|----------|
| セッションキャプチャ改善のためのゴーストスナップショット v2 を追加 (PR #8055) | Add ghost snapshot v2 for improved session capture (PR #8055) | new-features |
| 設定でゴーストコミットをサポート (PR #7873) | Support ghost commits in config (PR #7873) | new-features |
| 一貫した検出のため SkillsManager と skills/list によるスキル読み込みを再実装 (PR | Reimplement skills loading via SkillsManager and skills/list for consistent discovery (PR | new-features |
| Codex に OpenTelemetry トレーシングを追加 (PR #7844) | Add OpenTelemetry tracing for Codex (PR #7844) | new-features |
| セッションに出力のないツール呼び出しが含まれる場合のパニックを防止 (PR #8048) | Prevent panic when session contains a tool call without an output (PR #8048) | bug-fixes |
| 入力バースト時にキーバインディング表示がトリガーされないように修正 (PR #7980) | Avoid triggering keybindings view on input bursts (PR #7980) | bug-fixes |
| デフォルトの折り返しアルゴリズムを OptimalFit から FirstFit に変更 (PR #7960) | Change default wrap algorithm from OptimalFit to FirstFit (PR #7960) | bug-fixes |
| サンドボックス設定の一部として AbsolutePathBuf を導入 (PR #7856) | Introduce AbsolutePathBuf as part of sandbox config (PR #7856) | bug-fixes |
| ログメッセージに Error を含めるように変更 (PR #7955) | Include Error in log messages (PR #7955) | bug-fixes |

## 0.72.0

| 日本語 | English | Category |
|--------|---------|----------|
| 新しい config API とクリーンな設定読み込みフローを追加 (#7924) | New config API and cleaner config loading flow (#7924) | new-features |
| API キーベースのセッションでリモート圧縮を有効化 (#7835) | Enable remote compacting in API-key based sessions (#7835) | new-features |
| TUI で MCP 起動時の進捗メッセージを復元 (#7828) | Restore MCP startup progress messages in TUI (#7828) | bug-fixes |
| MCP サーバーステータスに最新のディスク値を使用 (#7907) | Use latest disk values for MCP server status (#7907) | bug-fixes |
| pwsh.exe と powershell.exe を確実に検出するユーティリティを導入 (#7893) | Introduce utilities for locating pwsh.exe and powershell.exe reliably (#7893) | new-features |
| PowerShell のパースに PowerShell を使用 (#7607) | Use PowerShell to parse PowerShell (#7607) | bug-fixes |
| Windows 用に 2 つの追加実行ファイルに署名 (#7942) | Sign two additional executables for Windows (#7942) | chores |
| WSL 2 環境の Windows でトースト通知を修正 (#7137) | Fix toasts on Windows under WSL 2 (#7137) | bug-fixes |
| Elevated Sandbox 3 および 4 を実装 (#7809, #7889) | Elevated Sandbox 3 and 4 (#7809, #7889) | new-features |
| 安全なコマンドリストを拡張 (#7728) | Expand safe command list (#7728) | new-features |
| TUI で gpt-5.2 の xhigh reasoning 警告を表示 (#7910) | Show xhigh reasoning warning for gpt-5.2 in TUI (#7910) | bug-fixes |
| gpt-5.2 の xhigh reasoning effort をドキュメントで明確化 (#7911) | Clarify xhigh reasoning effort on gpt-5.2 in documentation (#7911) | documentation |
| xhigh モデルで誤解を招く 'maximize' の high effort 説明を修正 (#7874) | Fix misleading 'maximize' high effort description on xhigh models (#7874) | bug-fixes |
| スキル名と説明の制限をバイト数ではなく文字数ベースに変更 (#7915) | Make skill name and description limit based on characters not byte counts (#7915) | bug-fixes |
| rx サブスクリプションの競合状態を修正 (#7921) | Fix race condition on rx subscription (#7921) | bug-fixes |
| ReasoningSummary::None の場合に推論サマリーを省略 (#7845) | Omit reasoning summary when ReasoningSummary::None (#7845) | bug-fixes |
| オンボーディングの ApiKeyEntry 状態で 'q' キーによる終了を無効化 (#7869) | Fix: don't quit on 'q' in onboarding ApiKeyEntry state (#7869) | bug-fixes |
| RMCP クライアント設定ガイダンスを更新 (#7895) | Update RMCP client config guidance (#7895) | documentation |
| 1P 認証をサポート (#7945) | support 1p (#7945) | new-features |
| モデルマネージャーを追加 (#7937) | chores: models manager (#7937) | chores |
| モデル情報を更新 (#7853) | Update Model Info (#7853) | chores |
| 移行画面を動的に変更 (#7896) | Make migration screen dynamic (#7896) | new-features |
| "chat" wire_api の非推奨通知を追加 (#7897) | Added deprecation notice for "chat" wire_api (#7897) | new-features |
| policy/.codexpolicy を rules/.rules にリネーム (#7888) | fix: policy/.codexpolicy -> rules/.rules (#7888) | bug-fixes |
| apply-patch の CRLF 行末保持をリバート (#7903) | Revert "fix(apply-patch): preserve CRLF line endings on Windows" (#7903) | bug-fixes |

## 0.71.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.69.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.66.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.65.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.64.0

| 日本語 | English | Category |
|--------|---------|----------|
| PowerShell の apply_patch パース処理を修正し、apply_patch テストが shell_command の動作をカバーするよう対応 | PowerShell apply_patch parsing is corrected, and apply_patch tests now cover shell_command behavior. | bug-fixes |
| サンドボックス評価の回帰を修正し、ポリシー承認済みコマンドを尊重、Windows での危険コマンドチェックを強化、workspace-write で .git を読み取り専用に強制 | Sandbox assessment regression is fixed, policy-approved commands are honored, dangerous-command checks are tightened on Windows, and workspace-write enforces .git read-only. | bug-fixes |
| MCP 起動時に type フィールドの欠落を許容し、ストリームエラーメッセージを明確化、rmcp nix 出力ハッシュ問題を解決 | MCP startup tolerates missing type fields, stream error messages are clarified, and rmcp nix output hash issues are resolved. | bug-fixes |
| 委譲キャンセル時の unified exec ハング問題を解消し、早期終了セッションをクリーンアップ、重複する "waited" レンダリングを抑制 | Delegate cancellation no longer hangs unified exec, early-exit sessions are cleaned up, and duplicate “waited” renderings are suppressed. | bug-fixes |
| limit がゼロの recent_commits がゼロを返すよう修正し、NetBSD のプロセス強化ビルドのブロックを解除 | recent_commits with limit zero now returns zero, and the NetBSD process-hardening build is unblocked. | bug-fixes |
| レビューロールアウトフィルタリングを無効化して履歴表示を修正し、承認プリセットが workspace-write を尊重、/approvals の信頼検出を修正、サンドボックスコマンド評価のエッジケースを修正 | Review rollout filtering is disabled so history shows, approval presets respect workspace-write, /approvals trust detection is corrected, and sandbox command assessment edge cases are fixed. | bug-fixes |
| 圧縮処理が暗号化された推論を考慮し、トークン予算を正確に処理、信頼性の高いトークン使用量と圧縮イベントを発行 | Compaction accounts for encrypted reasoning, handles token budgets accurately, and emits reliable token-usage and compaction events. | bug-fixes |
| TTY stdin を必須化し、WSL クリップボードパスを正規化、/new 実行時に競合を避けるため古い会話を破棄 | TTY stdin is required, WSL clipboard paths are normalized, and stale conversations are dropped on /new to avoid conflicts. | bug-fixes |
| 大量ペースト時のカスタムプロンプト展開を修正し、example-config の誤りを訂正、相対リンクと streamable_shell 参照をクリーンアップ、アップグレードメッセージを修正 | Custom prompt expansion with large pastes is fixed, example-config mistakes are corrected, and relative links and streamable_shell references are cleaned up. Upgrade messaging is corrected. | bug-fixes |
| Windows サンドボックスが <workspace_root>/.git を読み取り専用として扱い、危険なブラウザ起動を実行前にフラグ付け | Windows sandbox treats <workspace_root>/.git as read-only, and risky browser launches are flagged before execution. | bug-fixes |
| CLA 許可リストに dependabot バリアントを追加し、エンタープライズでアップグレードチェックとメッセージをスキップ可能に対応 | CLA allowlist now includes dependabot variants, and enterprises can skip upgrade checks and messages. | bug-fixes |
| 不安定なテストを安定化し、セッションリサイクルを改善、ロールアウトセッション初期化で診断用エラーを表示 | Flaky tests are stabilized, session recycling is improved, and rollout session initialization surfaces errors for diagnosis. | bug-fixes |

## 0.63.0

| 日本語 | English | Category |
|--------|---------|----------|
| ウェブ検索を有効にすると `Invalid value: 'other'.` エラーが発生するバグを修正 | Fixes the bug where enabling web search can lead to `Invalid value: 'other'.` errors. | bug-fixes |

## 0.61.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.60.1

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.59.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.58.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.57.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.56.0

| 日本語 | English | Category |
|--------|---------|----------|
| GPT-5-Codex-Mini を導入 — GPT-5-Codex のよりコンパクトでコスト効率の高いバージョン | Introducing GPT-5-Codex-Mini — a more compact and cost-efficient version of GPT-5-Codex | new-features |
| 非推奨メッセージをドキュメントにリンクするよう更新 (#6211) | Update the deprecation message to link to the docs (#6211) | bug-fixes |
| export.rs が v2 名前空間をサポート、初期 v2 通知機能を追加 (#6212) | export.rs supports a v2 namespace, initial v2 notifications (#6212) | new-features |
| シンボリックリンクされた Markdown ファイルからカスタムプロンプトを読み込み可能に (#3643) | load custom prompts from symlinked Markdown files (#3643) | bug-fixes |
| codex を pid 1 から実行可能に (#4200) | allow codex to be run from pid 1 (#4200) | bug-fixes |
| TypeScript SDK に modelReasoningEffort オプションを追加 (#6237) | Add modelReasoningEffort option to TypeScript SDK (#6237) | new-features |
| ChatWidget と BottomPane を Renderables 使用にリファクタリング (#5565) | refactor ChatWidget and BottomPane to use Renderables (#5565) | chores |
| 会話履歴ファイルを専用ディレクトリにリファクタリング (#6229) | refactor Conversation history file into its own directory (#6229) | chores |
| 「再接続中」動作に対処するためトークン更新処理を改善 (#6231) | Improved token refresh handling to address "Re-connecting" behavior (#6231) | bug-fixes |
| v2 Thread API を実装 (#6214) | v2 Thread APIs (#6214) | new-features |
| 環境選択モーダルが開いているときに r キーのキャプチャを停止 (#6249) | stop capturing r when environment selection modal is open (#6249) | bug-fixes |
| account/login/start と account/login/completed の v2 を実装 (#6183) | Implement v2 for account/login/start and account/login/completed (#6183) | new-features |
| TUI でログインメニューの意図しない閉じを防止 (#6285) | Prevent dismissal of login menu in TUI (#6285) | bug-fixes |
| ToC が自身を含まず、終端マーカーを重複しないよう修正 (#4388) | ToC so it doesn't include itself or duplicate the end marker (#4388) | bug-fixes |
| account/login/cancel v2 エンドポイントを追加 (#6288) | Add account/login/cancel v2 endpoint (#6288) | new-features |
| クエリに対するモデルナッジ機能を追加 (#6286) | add model nudge for queries (#6286) | new-features |
| 単一推論努力を持つモデルをサポート (#6300) | support models with single reasoning effort (#6300) | new-features |
| v2 Turn API を実装 (#6216) | v2 Turn APIs (#6216) | new-features |
| アドバンスガイドのコードフェンスとタイポを修正 (#6295) | Fix code fence and typo in advanced guide (#6295) | documentation |
| Windows サンドボックス: 全員書き込み可能ディレクトリの警告を表示 (#6283) | Windows Sandbox: Show Everyone-writable directory warning (#6283) | new-features |
| gpt-5-codex がリクエストされない限りコミットを amend しないことを明確化 (#6333) | clarify that gpt-5-codex should not amend commits unless requested (#6333) | documentation |
| コントリビューションガイドラインと PR テンプレートを更新し、PR ノートにバグレポートへのリンクを要求 (#6332) | Updated contributing guidelines and PR template to request link to bug report in PR notes (#6332) | documentation |
| ネットワークが有効な場合に証明書操作を許可するようサンドボックスを拡張 (#5980) | widen sandbox to allow certificate ops when network is enabled (#5980) | new-features |
| listConversations により多くのセッションメタデータを追加 (#6337) | Add more session metadata to listConversations (#6337) | new-features |
| nix ビルドを修正 (#6230) | Fix nix build (#6230) | bug-fixes |
| rmcp を 0.8.4 にアップグレード (#6234) | Upgrade rmcp to 0.8.4 (#6234) | chores |
| rmcp を 0.8.5 に更新 (#6261) | Update rmcp to 0.8.5 (#6261) | chores |
| CI の断続的なテスト失敗を修正 (#6282) | Fixes intermittent test failures in CI (#6282) | chores |
| 明確化のためリネーム (#6319) | chore: rename for clarity (#6319) | chores |
| 文法ミスを修正 (#6326) | chore: fix grammar mistakes (#6326) | chores |
| 関連テストを app-server/tests/suite/v2 に移動 (#6289) | chore: move relevant tests to app-server/tests/suite/v2 (#6289) | chores |

## 0.55.0

| 日本語 | English | Category |
|--------|---------|----------|
| "fix: pin musl 1.2.5 for DNS fixes" をリバート (#6222) | #6222 Revert "fix: pin musl 1.2.5 for DNS fixes" | bug-fixes |
| codex_delegate でデルタを無視するよう変更 (#6208) | #6208 ignore deltas in codex_delegate | bug-fixes |

## 0.54.0

| 日本語 | English | Category |
|--------|---------|----------|
| ファイル検索時にシンボリックリンクを追跡するように変更 (#4453) | Follow symlinks during file search (#4453) | new-features |
| notify ハンドラーが正しい `input_messages` 詳細を渡すように修正 (#6143) | Fixed notify handler so it passes correct `input_messages` details (#6143) | bug-fixes |
| サンドボックスコマンドのログを cwd ではなく $CODEX_HOME に出力するように変更 (#6171) | log sandbox commands to $CODEX_HOME instead of cwd (#6171) | bug-fixes |
| 中断後の経過時間を表示する機能を追加 (#5996) | feat: add the time after aborting (#5996) | new-features |
| TUI のテキストエリアにおける単語区切り処理を改善 (#5541) | tui: refine text area word separator handling (#5541) | bug-fixes |
| Windows でサンドボックスが有効な場合、信頼プロンプトをスキップしないように修正 (#6167) | Do not skip trust prompt on Windows if sandbox is enabled. (#6167) | bug-fixes |
| Azure をサポートするため responses-api-proxy にオプションを追加 (#6129) | feat: add options to responses-api-proxy to support Azure (#6129) | new-features |
| コンテキストウィンドウの計算に推論トークンを含めるように変更 (#6161) | Include reasoning tokens in the context window calculation (#6161) | bug-fixes |
| OAuth ログインのエラーメッセージのタイポを修正 (#6159) | Fix typo in error message for OAuth login (#6159) | bug-fixes |
| `docs/slash_commands.md` にスラッシュコマンドのドキュメントを追加 (#5685) | Add documentation for slash commands in `docs/slash_commands.md`. (#5685) | documentation |
| ステータスカードとスナップショットの使用状況 URL を改善 (#6111) | fix: improve usage URLs in status card and snapshots (#6111) | bug-fixes |
| Windows での「会話をアーカイブ」機能を修正 (#6124) | Fix "archive conversation" on Windows (#6124) | bug-fixes |
| API キー貼り付け時の余分な文字を修正 (#4903) | fix: pasting api key stray character (#4903) | bug-fixes |
| 実験的設定キーに関する誤った「非推奨」メッセージを修正 (#6131) | Fix incorrect "deprecated" message about experimental config key (#6131) | bug-fixes |
| 初期実験フィードバックに基づくサンドボックスコマンド評価機能の変更 (#6091) | Changes to sandbox command assessment feature based on initial experiment feedback (#6091) | new-features |
| Azure OpenAI のレート制限メッセージをパースするように追加 (#5956) | Parse the Azure OpenAI rate limit message (#5956) | new-features |
| 高度なガイドのリンクアンカーとマークダウン形式を修正 (#5649) | docs: Fix link anchor and markdown format in advanced guide (#5649) | documentation |
| TUI の色クエリ改善のため crossterm にパッチを適用 (#5935) | tui: patch crossterm for better color queries (#5935) | bug-fixes |
| compactor 2 を追加 (#6027) | feat: compactor 2 (#6027) | new-features |
| compact 実行時に警告を追加 (#6052) | Add warning on compact (#6052) | new-features |
| ツール呼び出し総数のテキストを切り詰めるように変更 (#5979) | Truncate total tool calls text (#5979) | bug-fixes |
| ユーザー指示メッセージの形式を更新 (#6010) | Update user instruction message format (#6010) | new-features |

## 0.53.0

| 日本語 | English | Category |
|--------|---------|----------|
| エラー 400 の問題を修正 | Fixing error 400 issues | bug-fixes |
| Java 向けサンドボックスを改善 | Improve sandboxing for Java | new-features |

## 0.52.0

| 日本語 | English | Category |
|--------|---------|----------|
| TUI 改善: ストリーミング中にキューメッセージを表示、Windows 自動モードガイダンス、undo 操作、圧縮プロンプトの設定可能化 | TUI polish: queued messages visible during streaming; Windows auto-mode guidance; undo op; compaction prompt configurable. | new-features |
| 画像: クライアントサイド画像リサイズ、MIME 検証によるクラッシュ防止、SDK 画像転送テストの再有効化 | Images: client-side image resizing; prevent crashes with MIME verification; SDK image forwarding tests re-enabled. | bug-fixes |
| `!<cmd>` でコマンドを直接実行する機能を追加 | Execute commands directly with !<cmd> | new-features |
| クレジット購入による追加利用枠の確保に対応 | Ability to buy credits for more usage. | new-features |
| Auth: キーリングサポートと設定可能なバックエンドを持つ新しい CLI 認証ストレージ抽象化 | Auth: new CLI auth storage abstraction with keyring support and configurable backend. | new-features |
| App server: GetConversationSummary RPC、ID による会話サマリーの取得/再開、アカウント/プロトコル型の洗練 | App server: GetConversationSummary RPC; fetch/resume conversation summaries by id; refined account/protocol types. | new-features |
| 実行/イベント: アイテムストリーミングイベント、ゴーストコミット、非推奨警告の明確化、トークン更新処理とログの改善 | Execution/events: item streaming events; ghost commits; clearer deprecation warnings; better token refresh handling and logs. | new-features |
| 会話管理: 全ツール出力の一元的な切り詰め、前ターンの推論を除外、会話に model_provider を付与 | Conversation management: centralized truncation for all tool outputs; filter out prior-turn reasoning; annotate conversations with model_provider. | new-features |

## 0.50.0

| 日本語 | English | Category |
|--------|---------|----------|
| /feedback を改善し、より良い診断情報を取得可能に | Improved /feedback to get better diagnostics. | new-features |

## 0.49.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.48.0

| 日本語 | English | Category |
|--------|---------|----------|
| --add-dir で追加の作業ディレクトリを指定可能に | --add-dir to add an additional working directory. | new-features |
| MCP: stdio サーバーが公式 Rust MCP SDK ベースの新しいクライアントを使用するよう変更 | MCP: stdio servers now use a new client backed by the official rust MCP sdk | new-features |
| MCP: stdio サーバーで cwd を指定可能に | MCP: stdio servers can specify a cwd | new-features |
| MCP: 全サーバーで enabled_tools または disabled_tools を指定可能に | MCP: All servers can specify enabled_tools or disabled_tools | new-features |
| MCP: ストリーム可能な HTTP サーバーで codex mcp login 時にスコープを指定可能に | MCP: Streamable HTTP servers can specify scopes during codex mcp login | new-features |
| MCP: 起動エラーメッセージを改善 | MCP: Improved startup error messages | bug-fixes |
| MCP: ツール呼び出し時の指示追従性を改善 | MCP: Better instruction following for calling tools | bug-fixes |
| エンタープライズ向けに forced_login_method と forced_chatgpt_workspace_id 設定オプションを追加（管理設定との併用で Codex 利用をより制御可能に） | Configuration options for forced_login_method and forced_chatgpt_workspace_id which can be paired with managed configs to give enterprises more control over Codex usage. | new-features |

## 0.47.0

| 日本語 | English | Category |
|--------|---------|----------|
| read_file にインデントモードを追加 (#4887) | Add indentation mode for read_file (#4887) | new-features |
| ストリームが正常に再開された際のメッセージを追加 (#4988) | Add message when stream get correctly resumed (#4988) | new-features |
| CapsLock 有効時でもショートカットが動作するよう修正 (#5049) | Make shortcut works even with capslock (#5049) | bug-fixes |
| スラッシュで始まるプロンプトを破棄 (#5048) | Discard prompt starting with a slash (#5048) | bug-fixes |
| タスク種別のヘッダーを追加 (#5142) | Add header for task kind (#5142) | new-features |
| エージェントオーバーライドファイルを追加 (#5215) | Agent override file (#5215) | new-features |
| OAuth 対応のストリーマブル HTTP サーバー追加時に MCP ログインをプロンプト (#5193) | Prompt mcp login when adding a streamable HTTP server that supports oauth (#5193) | new-features |
| ExecApprovalRequestEvent にパース済みコマンドを追加 (#5222) | Add parsed command to ExecApprovalRequestEvent (#5222) | new-features |
| high effort 使用時にレート制限に関する警告を追加 (#5035) | Add warning about rate limit when using high effort (#5035) | new-features |
| 自動更新の承認機能を追加 (#5185) | Auto update approval (#5185) | new-features |
| フルアクセス承認を有効化する際の確認プロンプトを追加 (#4980) | Add confirmation prompt for enabling full access approvals (#4980) | new-features |
| `ParsedCommand::Read` バリアントに path フィールドを追加 (#5275) | Add path field to `ParsedCommand::Read` variant (#5275) | new-features |
| 拒否時の UX を改善 (#5260) | Better UX during refusal (#5260) | new-features |
| unified_exec バッファの出力遅延を修正 (#4992) | Fix lagged output in unified_exec buffer (#4992) | bug-fixes |
| macOS バイナリのコード署名を追加 (#4899) | Add code signing for MacOS binary (#4899) | new-features |
| ユーザー承認決定の折り返し表示を修正 (#5008) | Fix wrapping in user approval decisions (#5008) | bug-fixes |
| trust_directory の折り返し表示を修正 (#5007) | Fix wrapping in trust_directory (#5007) | bug-fixes |
| /diff モードで長い行を折り返すよう修正 (#4891) | /diff mode wraps long lines (#4891) | bug-fixes |
| Unicode nbsp を超えて alt+bksp した際のクラッシュを修正 (#5016) | Fix crash when alt+bksp past unicode nbsp (#5016) | bug-fixes |
| テキストエリアのプレースホルダーに画像名を含めるよう修正 (#5056) | Include the image name in the textarea placeholder (#5056) | bug-fixes |
| CLI 更新バナーで Bun インストールを検出 (#5074) | Detect Bun installs in CLI update banner (#5074) | bug-fixes |
| codex exec の危険な自動承認機能を追加 (#5043) | Add dangerous auto-approval for codex exec (#5043) | new-features |
| TUI を sandbox_workspace_write に更新 (#3341) | Update tui to sandbox_workspace_write (#3341) | new-features |
| Codex クラウド実行機能を追加 (#5060) | Codex cloud exec (#5060) | new-features |

## 0.46.0

| 日本語 | English | Category |
|--------|---------|----------|
| Bearer トークン認証ヘッダーを修正 (#4846) | Fix the bearer token authorization header (#4846) | bug-fixes |
| codex resume 後に終了する際に再開メモを表示 (#4695) | Print codex resume note when quitting after codex resume (#4695) | new-features |
| zsh 補完を修正 (#4692) | Fix zsh completion (#4692) | bug-fixes |
| 差分表示で行番号の幅を動的に調整 (#4664) | Dynamic width for line numbers in diffs (#4664) | new-features |
| 折り返し表示のバグを修正 (#4674) | Wrapping bugfix (#4674) | bug-fixes |
| `list_dir` ツールを追加 (#4817) | `list_dir` tool (#4817) | new-features |
| True-color ターミナルで呼吸するスピナーを追加 (#4853) | Breathing spinner on true-color terms (#4853) | new-features |
| 認証情報ストアを明示的に指定する機能を追加 (#4857) | Add the ability to explicitly specify a credentials store (#4857) | new-features |
| `codex mcp add` でストリーム可能な HTTP サーバーのサポートを追加し、Bearer トークン処理を置き換え (#4904) | Add support for streamable http servers with `codex mcp add` and replace bearer token handling (#4904) | new-features |
| `grep_files` ツールを追加 (#4820) | `grep_files` as a tool (#4820) | new-features |
| CLI で UP/ENTER キーをサポート (#4944) | CLI UP/ENTER (#4944) | new-features |
| トランスクリプトモードでタブ文字表示時のレンダリング問題を修正 (#4911) | Fix transcript mode rendering issue when showing tab chars (#4911) | bug-fixes |
| `enabled` 設定フィールドを追加 (#4917) | Add an `enabled` config field (#4917) | new-features |
| コンテキスト行を永続化 (#4699) | Make context line permanent (#4699) | new-features |
| MCP サーバーに認証ステータスを追加 (#4918) | Add auth status to MCP servers (#4918) | new-features |

## 0.45.0

| 日本語 | English | Category |
|--------|---------|----------|
| `codex login --api-key` を `codex login --with-api-key` に変更し、stdin からキーを読み取るようにしてセキュリティを向上 | codex login --api-key was replaced with codex login --with-api-key that reads the key from stdin to improve security. | new-features |
| OAuth MCP サーバー認証の実験的サポートを追加 (#4517) | #4517 Experimental support for OAuth MCP server authentication | new-features |

## 0.44.0

| 日本語 | English | Category |
|--------|---------|----------|
| UI リフレッシュ！チャットコンポーザー、ボトムペイン、モデルピッカー、アップグレードナッジを更新 (#4240, #4316, #4178, #4405) | New UI refresh! Updated chat composer, bottom pane, model picker, and upgrade nudge (#4240, #4316, #4178, #4405) | new-features |
| カスタムプロンプトが名前付き引数と位置引数に対応 (#4474, #4470) | Custom prompts now support named & positional arguments (#4474, #4470) | new-features |
| ストリーム可能な HTTP MCP サーバーのサポートを追加 (#4317) | Add support for streamable HTTP MCP servers (#4317) | new-features |
| (実験的) Windows で読み取り専用コマンドの繰り返し承認を削減 (#4269) | (experimental) Reduce repetitive approval for read-only commands on Windows (#4269) | new-features |
| (非常に実験的) codex cloud でクラウドタスクを管理 (#3197) | (very experimental) Manage cloud tasks with codex cloud (#3197) | new-features |

## 0.42.0

| 日本語 | English | Category |
|--------|---------|----------|
| 実験的な Rust SDK ベースの MCP クライアントを追加 (#4252) | Experimental Rust SDK–based MCP client introduced (#4252) | new-features |
| レスポンス処理とプロキシを簡素化・安全化する `responses-api-proxy` コンポーネントを追加 (#4246) | New `responses-api-proxy` component to simplify and secure response handling/proxying (#4246) | new-features |
| プロセス可視性を制限するセキュアモード `CODEX_SECURE_MODE=1` を追加 (#4220) | Added secure mode: `CODEX_SECURE_MODE=1` to restrict process observability (#4220) | new-features |
| `codex exec` イベントを明示化し、`item.started` と出力表示を改善 (#4177, #4250, #4113) | More explicit `codex exec` events, including `item.started` and improved output display (#4177, #4250, #4113) | new-features |
| 危険なコマンドのチェック機能をコアに追加し、Windows 固有の安全性を強化 (#4211, #4119) | Safer command execution: dangerous command checks in core and Windows-specific safety (#4211, #4119) | new-features |
| `/status` を刷新し、より明確な表示と詳細情報を提供 (#4196) | Revamped `/status` with clearer presentation and details (#4196) | new-features |
| ページネーションなしのセッションリストを実装 (#3194) | Pageless session list (#3194) | new-features |
| 承認機能を `ListSelectionView` に移行 (#4275) | Approvals moved to `ListSelectionView` (#4275) | chores |
| MCP ツール呼び出しのスタイルを改善 (#3871) | Improved MCP tool call styling (#3871) | new-features |
| ストリーミング中はステータスインジケーターを非表示に変更 (#4101) | Hide status indicator during streaming (#4101) | new-features |
| 圧縮処理におけるトークン使用量の計算を修正 (#4281) | Fixed token usage for compaction (#4281) | bug-fixes |
| SSE マウント処理の信頼性を改善 (#4264) | SSE mounting reliability improvements (#4264) | bug-fixes |
| 過去の会話を編集する際のバグを修正 (#4237) | Fixed bug when editing previous conversations (#4237) | bug-fixes |
| `.codex` ディレクトリが存在しない場合の IDE 拡張における API キーログイン失敗を修正 (#4258) | Fixed login failure with API key in IDE extension when `.codex` directory is missing (#4258) | bug-fixes |
| 幅を小さくリサイズした際のバグを修正 (#4248) | Fixed bug when resizing to a smaller width (#4248) | bug-fixes |
| 状態管理、フッターロジック、未使用コードの内部クリーンアップとリファクタリング (#4174, #4259, #4310) | Internal cleanup and refactors for state, footer logic, and unused code (#4174, #4259, #4310) | chores |

## 0.41.0

| 日本語 | English | Category |
|--------|---------|----------|
| レート制限のリセット時刻を確認可能に (#4111)、制限到達時に使用量を表示 (#4102) | Rate limits visibility: You can see when is your limits resetting (#4111) and see your usage when rate limited (#4102) | new-features |
| exec モードで output-schema を使用して出力スキーマを指定可能に (#4079) | You can specify output schema in exec mode using output-schema. (#4079) | new-features |
| Ripgrep (rg) を npm リリースにバンドルし、npm インストール時の @vscode/ripgrep postinstall 失敗を解消 (#3660) | Ripgrep (rg) is now vendored into the npm release (#3660), which should fix issues such as #3842 where the postinstall step of @vscode/ripgrep would sometimes fail when installing codex via npm. | bug-fixes |

## 0.40.0

| 日本語 | English | Category |
|--------|---------|----------|
| デフォルトモデルを `gpt-5-codex` に変更 (#4076) | Default model is now `gpt-5-codex` (#4076) | new-features |
| `gpt-5-codex` で 220k トークン到達時に自動圧縮を実行 (#4093) | Autocompaction is triggered automatically for `gpt-5-codex` when hitting 220k tokens (#4093) | new-features |
| 使用制限を `/status` で表示 (#4053) | Usage limits are now visible in `/status` (#4053) | new-features |
| 特定コミット、ベースブランチとの比較、カスタム指示を指定できる `/review` コマンドを追加 (#3961) | New `/review` commands (review specific commit, against a base branch, or custom instructions) (#3961) | new-features |
| MCP ツール呼び出しのデフォルトタイムアウトを 60 秒に設定、`config.toml` で個別サーバーごとに上書き可能 (#3959) | The default timeout for MCP tool calls is `60s` and can be overridden in `config.toml` by setting `tool_timeout_sec` for an individual MCP server (#3959) | new-features |

## 0.39.0

| 日本語 | English | Category |
|--------|---------|----------|
| `/review` コマンドを追加（#3774） | new `/review` command introduced in #3774 | new-features |

## 0.38.0

| 日本語 | English | Category |
|--------|---------|----------|
| gh 呼び出し時に --repo を指定するよう修正 (#3806) | fix: specify --repo when calling gh (#3806) | bug-fixes |

## 0.37.0

| 日本語 | English | Category |
|--------|---------|----------|
| npm リリースプロセスを「trusted publishing」に更新 (#3431) | Updated the npm release process to use "trusted publishing" (#3431).  | chores |
| ただしバグがあり、恩恵は 0.38.0 まで得られない可能性あり（修正は #3806） | Though apparently there was a bug, so we may not see the benefit until 0.38.0. Fix is in #3806.37 | chores |

## 0.36.0

| 日本語 | English | Category |
|--------|---------|----------|
| 環境変数からのOPENAI_API_KEY読み込みを廃止 (#3189) | Breaking change: OPENAI_API_KEY is no longer read from the environment (#3189) | bug-fixes |
| GPT-5-Codexモデルを導入し、性能と制御性を向上 | Introduce GPT-5-Codex model with improved performance and steerability | new-features |
| codex resumeによる過去セッション再開機能を追加 (#3537, #3625) | Add resuming old sessions with codex resume (#3537, #3625) | new-features |
| 統合実行の改善 (#3288, #3479) | Unified execution improvements (#3288, #3479) | new-features |
| 統合実行の競合状態を修正 (#3644) | Fix race condition in unified execution (#3644) | bug-fixes |
| タイムアウト時にコマンド出力を含めるよう変更 (#3576) | Include command output on timeouts (#3576) | bug-fixes |
| コマンドがパッチとして解析される場合は実行しないよう修正 (#3382) | Do not execute when command parses as a patch (#3382) | bug-fixes |
| サンドボックスのタイムアウト処理を改善 (#3435) | Improve sandbox timeout handling (#3435) | bug-fixes |
| ChatGPTとAPIキー認証の同時使用を防ぐ修正 (#3611) | Fix login flow allowing simultaneous ChatGPT and API key auth (#3611) | bug-fixes |
| ログインURL文字の残留を修正 (#3639) | Fix stray login URL characters (#3639) | bug-fixes |
| カスタムプロバイダーのget_auth_statusを修正 (#3581) | Fix get_auth_status for custom providers (#3581) | bug-fixes |
| JSON-RPCにSetDefaultModelを追加し、Noneでデフォルトをクリア (#3512, #3529) | Add SetDefaultModel and None clears default in JSON-RPC (#3512, #3529) | new-features |
| JSON-RPCにUserInfoを追加 (#3428) | Add UserInfo to JSON-RPC (#3428) | new-features |
| NewConversationResponseにreasoning_effortを追加 (#3506) | Add reasoning_effort in NewConversationResponse (#3506) | new-features |
| MCPインターフェースとドキュメントを初期実装 (#3543, #3507, #3345) | Initial MCP interface and documentation (#3543, #3507, #3345) | new-features |
| シェル記述を標準化 (#3514) | Standardize shell description (#3514) | chores |
| 新しいオンボーディングフローとアニメーションを追加 (#3398, #3631, #3590, #3627) | New onboarding flow and animation (#3398, #3631, #3590, #3627) | new-features |
| 再開時に一貫したヘッダーを表示 (#3615, #3592) | Show consistent headers on resume (#3615, #3592) | new-features |
| TUIの間隔とパディングを改善 (#3469, #3471, #3472, #3474) | Improve TUI spacing and padding (#3469, #3471, #3472, #3474) | new-features |
| 中断とステータスのスタイルを改善 (#3470) | Improve interruption and status styling (#3470) | new-features |
| 実験的な自動コンテキスト圧縮を追加 (#3446) | Add experimental automatic context compaction (#3446) | new-features |
| デフォルトサンドボックスを拡張 (#3483) | Expand default sandbox (#3483) | new-features |
| Azure Responses APIの回避策を追加 (#3528) | Add Azure Responses API workaround (#3528) | bug-fixes |
| AzureでのアイテムID保持を改善 (#3542) | Preserve more item IDs in Azure (#3542) | bug-fixes |
| レビューモードのコア機能を追加 (#3401) | Add Review Mode core functionality (#3401) | new-features |
| 圧縮後の再開とフォークに対応 (#3533) | Handle resuming and forking after compact (#3533) | bug-fixes |
| ワークスペースルートを環境コンテキストに追加 (#3375) | Put workspace roots in the environment context (#3375) | new-features |
| gpt-5プロンプトにファイル参照ガイドラインを追加 (#3651) | Add file reference guidelines to gpt-5 prompt (#3651) | documentation |

## 0.35.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.34.0

| 日本語 | English | Category |
|--------|---------|----------|
| Codex が外部 MCP サーバーを初期化できない問題のホットフィックス (#3436) | #3436: hotfix for issue that prevented Codex from initializing external MCP servers | bug-fixes |

## 0.33.0

| 日本語 | English | Category |
|--------|---------|----------|
| Alt+Delete でカーソルの右側の単語を削除する機能を追加 (#3394) | alt+delete deletes the word to the right of the cursor (delete_forward_word) (#3394) | new-features |
| ロールアウト項目を導入 (#3380) | Introduce rollout items (#3380) | new-features |
| MCP サーバーとして使用する際のユーザーエージェント接尾辞を設定 (#3395) | Set a user agent suffix when used as a mcp server (#3395) | new-features |
| 初期履歴をプロトコルに移動 (#3422) | Move initial history to protocol (#3422) | new-features |
| `UserMessageEvent` に画像を追加 (#3400) | Added images to `UserMessageEvent` (#3400) | new-features |
| 不要な #[allow(dead_code)] アノテーションを削除 (#3357) | fix: remove unnecessary #[allow(dead_code)] annotation (#3357) | chores |
| 空ファイル chatwidget_stream_tests.rs を削除 (#3356) | fix: remove empty file: chatwidget_stream_tests.rs (#3356) | chores |
| codex exec の見出しのタイポを修正 (#2703) | docs: fix codex exec heading typo (#2703) | documentation |
| docs/getting-started.md 内の prompting_guide.md への壊れたリンクを削除 (#2858) | Remove a broken link to prompting_guide.md in docs/getting-started.md (#2858) | documentation |
| tui_markdown をカスタム Markdown レンダラーに置き換え (#3396) | replace tui_markdown with a custom markdown renderer (#3396) | new-features |
| POSIX 統合とスナップショットセッション機能をリバート（回帰バグのため） (#3430) | Back out "feat: POSIX unification and snapshot sessions (#3179)" (#3430) | bug-fixes |
| 2 つの認証関連テストの耐障害性を改善 (#3427) | Improved resiliency of two auth-related tests (#3427) | chores |

## 0.32.0

| 日本語 | English | Category |
|--------|---------|----------|
| MCP: サーバーとして動作時に UA サフィックスを追加、安定性/互換性の微調整 | MCP: add UA suffix when acting as a server; a few stability/compat tweaks | new-features |
| OSS: apply_patch の OSS 互換性を拡大 | OSS: Broader apply_patch OSS compatibility. | bug-fixes |
| ロールアウト: 初期基盤構築、レスポンスに rollout_path を含めるよう変更 | Rollouts: initial groundwork and rollout_path included in responses. | new-features |
| TUI: Alt+Delete で次の単語を削除する機能を追加 | TUI: Alt+Delete deletes the next word. | new-features |
| Protocol/Types: ArchiveConversation リクエスト追加、エクスポートと TS 型の改善 | Protocol/Types: ArchiveConversation request; small exports and TS type improvements. | new-features |
| CI/Build: nextest による高速テスト、shear 追加、macOS パーミッション微調整 | CI/Build: faster tests with nextest, add shear; minor macOS permission adjustment. | chores |
| Docs: 設定内のシェルクォーティングを明確化 | Docs: clarified shell quoting in config. | documentation |

## 0.31.0

| 日本語 | English | Category |
|--------|---------|----------|
| MCP サーバー宣言時に startup_timeout_ms オプションのサポートを追加（特に Windows ユーザーから要望が多かった機能）(#3182) | #3182 added support for a startup_timeout_ms option when declaring an MCP server (docs), which has been a highly requested feature, particularly for Windows users | new-features |
| MCP 起動時のフォールトトレランスを強化 (#3243) | adding more fault tolerance to MCP startup: #3243 | bug-fixes |
| macOS で Finder から Ctrl+V で画像をペーストできない問題を修正 (#3211) | #3211 fixes image pasting from Finder with ctrl+v on macOS | bug-fixes |

## 0.30.0

| 日本語 | English | Category |
|--------|---------|----------|
| 破壊的変更: プロジェクトの .env ファイルの自動読み込みを廃止 | Breaking: Stop loading project .env files automatically. | new-features |
| セキュリティ: リクエストを保存しないよう変更、保留中の OAuth ログインをキャンセルしてポートを解放 | Security/behavior: Never store requests; free port by canceling pending OAuth login. | bug-fixes |
| コア/インフラ: ロールアウトポリシー導入、共有 HTTP クライアント、残りコンテキストサイズ改善、推論サマリー設定の洗練、サンドボックスシェルツール説明の修正、サーバー通知シリアライゼーション改善 | Core/infra: Introduce rollout policy; shared HTTP client; improved remaining context size; refined reasoning summary config/handling; corrected sandboxed shell tool description; improved server notification serialization. | new-features |
| TUI/UX: 大きなコマンドの承認ダイアログ修正、モーダル中のステータスタイマー一時停止、ページャー自動スクロール、Bash シンタックスハイライト、Mac キーグリフ、高さゼロパニック回避、@ ファイル検索改善（隠しディレクトリ対応）| TUI/UX: Fix approval dialog for large commands; pause status timer during modals; pager auto‑scroll; bash syntax highlighting; mac key glyphs; avoid zero‑height panic; improved @ file search (hidden dirs). | bug-fixes |
| DevEx/Docs: 推奨 VS Code 拡張機能、AGENTS.md プロンプトと説明の改善、API キーガイダンス更新、CI 修正 | DevEx/docs: Recommended VS Code extensions; AGENTS.md prompt and clarifications; updated API key guidance; CI fixes. | documentation |
| 依存関係: uuid と wiremock をバンプ | Deps: Bump uuid and wiremock. | chores |
| Windows: フルアクセスモードで承認を求めないよう変更 | Windows: no more asking for approvals on Full Access mode | new-features |

## 0.29.0

| 日本語 | English | Category |
|--------|---------|----------|
| 未サポートターゲットで arboard をゲートし Android/Termux に対応 | Android/Termux support by gating arboard on unsupported targets. | new-features |
| std fs API を使用した安定的なクロスプラットフォームファイルロック | Stable, cross‑platform file locking using std fs APIs. | bug-fixes |
| 認証統合: CodexAuth と AuthManager を core クレートに移動 | Auth consolidation: CodexAuth and AuthManager moved into the core crate. | chores |
| API キー使用時のレート制限処理を復元 | Rate‑limit handling restored for API‑key usage. | bug-fixes |
| コアロールアウトのリファクタリング: rollout モジュール抽出、リスト API 追加、ファイルヘッド返却 | Core rollout refactor: extract rollout module, add listing API, return file heads. | chores |
| QoL 改善: exec/apply_patch で `cd foo && ...` をサポート、TUI のちらつきを修正、ratatui Stylize を優先使用 | Quality of life: support cd foo && ... in exec/apply_patch, fix TUI flicker, prefer ratatui Stylize. | bug-fixes |
| npm パッケージに Windows ARM64 実行ファイルを追加 | Distribution: include Windows ARM64 executable in the npm package. | new-features |
| 最新の検索ツールに切り替え | Switch to the latest search tool. | chores |

## 0.28.0

| 日本語 | English | Category |
|--------|---------|----------|
| 入力時のラグを修正 (#2922) | Fix laggy typing (#2922) | bug-fixes |
| メッセージスタイルを明確化のために改修 (#2877) | Rework message styling for clarity (#2877) | bug-fixes |
| エージェントメッセージストリーミング時の余分な空行を削除 (#3065) | Remove extra blank lines in streamed agent messages (#3065) | bug-fixes |
| AGENTS.md 存在時に "/init" の提案を非表示化 (#3038) | Hide "/init" suggestion when AGENTS.md exists (#3038) | bug-fixes |
| 空入力時の Enter キーを無視し空メッセージの送信を防止 (#3047) | Ignore Enter on empty input to avoid queuing blank messages (#3047) | bug-fixes |
| `get_cursor_position` エラーをキャッチしクラッシュを回避 (#2870) | Catch `get_cursor_position` errors to avoid crashes (#2870) | bug-fixes |
| 無効コマンドメッセージから余分な引用符を削除 (#3035) | Remove extra quote from disabled-command message (#3035) | bug-fixes |
| Windows ARM ビルドに Windows 11 ARM を活用 (#3062) | Leverage Windows 11 ARM for Windows ARM builds (#3062) | chores |
| リリース用 Windows 11 ARM イメージに zstd をインストール (#3066) | Install zstd on Windows 11 ARM image used for releases (#3066) | chores |
| PR オープン時にリリースビルド用 Windows キャッシュを生成 (#2884) | Populate Windows cache for release builds when PRs are opened (#2884) | chores |
| 設定リファレンステーブルを修正 (#3063) | Fix config reference table (#3063) | documentation |
| ドキュメントリファクタリング後の PR テンプレートリンクを更新 (#2982) | Update PR template link after docs refactor (#2982) | documentation |
| ユーザーがモデルを変更した際のログを追加 (#3060) | Add logs when users change the model (#3060) | chores |
| codex-rs の regex-lite を 0.1.7 にバンプ (#3010) | Bump regex-lite to 0.1.7 in codex-rs (#3010) | chores |

## 0.27.0

| 日本語 | English | Category |
|--------|---------|----------|
| MCP 安定性: ミューテックスの早期解放とロック順序の問題を回避 | MCP stability: drop mutexes earlier and avoid lock ordering pitfalls. | bug-fixes |
| チャネル信頼性: ストールを防ぐためアンバウンドチャネルに切り替え | Channel reliability: switch to unbounded channel to prevent stalls. | bug-fixes |
| パフォーマンス/クリーンアップ: 不要な flush() 呼び出しを削除 | Performance/cleanup: remove unnecessary flush() calls. | bug-fixes |
| CI: リリースビルドを修正、`cargo clippy` に `--profile` を指定 | CI: fix release build; specify `--profile` for `cargo clippy`. | chores |
| Docs: より安全な Homebrew スニペット、`AGENTS.md` に `just fix -p` を推奨 | Docs: safer Homebrew snippet; suggest `just fix -p` in `AGENTS.md`. | documentation |

## 0.26.0

| 日本語 | English | Category |
|--------|---------|----------|
| `~/.codex/prompts` からカスタム `/prompts` を読み込み可能に (#2696) | Custom `/prompts` loaded from `~/.codex/prompts` (#2696) | new-features |
| Codex がローカル画像を自律的に表示できる新しい「View Image」ツールを追加 (#2723) | New "View Image" tool to let Codex agentically view local images (#2723) | new-features |
| 解決済み設定を検査するための MCP `GetConfig` エンドポイントを追加 (#2725) | MCP `GetConfig` endpoint to inspect resolved settings (#2725) | new-features |
| Windows での画像ペーストを修正し、バーストペースト処理を改善 (#2683) | Fix image pasting in Windows + improve burst paste handling (#2683) | bug-fixes |
| タスク実行中のスラッシュコマンドを防止 (#2792) | Prevent slash commands during an active task (#2792) | bug-fixes |
| サスペンド (^Z) 時のカーソル位置を修正 (#2690) | Fix cursor position when suspending (^Z) (#2690) | bug-fixes |
| 二重行と途切れたリストマーカーを削減 (#2789) | Reduce doubled lines and hanging list markers (#2789) | bug-fixes |
| README/ドキュメントの大規模リファクタリングとナビゲーション改善 (#2724) | Major README/docs refactor and navigation (#2724) | documentation |
| CHANGELOG がリリースページを参照するよう変更 (#2780) | CHANGELOG now points to Releases page (#2780) | documentation |
| VS Code 拡張機能の Issue テンプレートを追加 (#2853) | Add VS Code Extension issue template (#2853) | documentation |

## 0.25.0

| 日本語 | English | Category |
|--------|---------|----------|
| Core: 長時間稼働サーバーで手動クリーンアップを行うための remove_conversation API を追加 (#2613) | Core: remove_conversation API for manual cleanup in long‑lived servers (#2613) | new-features |
| TUI: トランスクリプト/差分ビューでマウスホイールによる代替スクロールに対応 (#2686) | TUI: mouse wheel alternate scrolling in transcript/diff views (#2686) | new-features |
| TUI: Alt+Ctrl+H で前の単語を削除（Alt+Backspace と同等）に対応 (#2717) | TUI: Alt+Ctrl+H deletes the previous word (parity with Alt+Backspace) (#2717) | new-features |
| Execution: task_started イベントにコンテキストウィンドウを含めるよう変更、ターンごとにモデルが変わる可能性に対応 (#2752) | Execution: include context window on task_started events; model may vary per turn (#2752) | new-features |
| トランスクリプトの行折り返しをキャッシュし、長いトランスクリプトの応答性を維持 (#2739) | Cache transcript line wraps to keep long transcripts responsive (#2739) | bug-fixes |
| ターン実行中にトランスクリプト行が差分に追加される問題を修正 (#2721) | Fix transcript lines appending to diff while a turn is running (#2721) | bug-fixes |
| 絵文字レンダリングを改善: 適切なスペースと ⌨️ 絵文字バリアントに対応 (#2735, #2728) | Improve emoji rendering: proper spacing and ⌨️ emoji variant (#2735, #2728) | bug-fixes |
| ESC 押下時にキューイングされたメッセージをコンポーザーに返却 (#2687) | ESC with queued messages returns them to the composer (#2687) | bug-fixes |
| マルチバイトテキスト付近のプレースホルダーをバックスペースした際のクラッシュを防止 (#2674) | Prevent crash when backspacing placeholders near multibyte text (#2674) | bug-fixes |
| apply_patch 時に Exec デルタを送信しないよう変更 (#2742) | Don't send Exec deltas on apply_patch (#2742) | bug-fixes |
| git_diff_against_sha をより堅牢に（カスタムドライバーを無視、ダッシュ接頭辞ファイルに対応）(#2749) | Make git_diff_against_sha more robust (ignore custom drivers; handle dash‑prefixed files) (#2749) | bug-fixes |
| インタラクティブ実行時のテスト負荷を軽減 (#2707) | Reduce test load when running interactively (#2707) | chores |
| 履歴内のアシスタントメッセージの重複を排除 (#2758) | Deduplicate assistant messages in history (#2758) | bug-fixes |
| Codex GitHub Action を一時的に削除 (#2729) | Remove the Codex GitHub Action for now (#2729) | chores |

## 0.24.0

| 日本語 | English | Category |
|--------|---------|----------|
| キューイングされたメッセージに対応 (#2637) | Queued messages (#2637) | new-features |
| 画像ファイルのコピー&ペースト/ドラッグ&ドロップに対応 (#2567) | Copy Paste / Drag & Drop image files (#2567) | new-features |
| スクロール可能なトランスクリプトモード (Ctrl+T) を追加 (#2525) | Transcript mode (Ctrl+T) with scrolling ability (#2525) | new-features |
| 過去のメッセージから会話を編集/再開 (esc-esc) する機能を追加 (#2607) | Edit/resume conversation (esc-esc) from previous messages (#2607) | new-features |
| 明示的な --search オプション使用時の Web 検索に対応 (#2371) | Web search when using explicit --search option (#2371) | new-features |
| CoT をデフォルトで非表示にし、ステータスインジケーターにヘッダーを表示 (#2316) | Hide CoT by default; show headers in status indicator (#2316) | new-features |
| ページャーで差分出力を表示（ハンクヘッダー付き）(#2568) | Show diff output in pager (+ with hunk headers) (#2568) | new-features |
| コマンド承認 UI を簡素化 (#2708) | Simplify command approval UI (#2708) | new-features |
| Esc/Ctrl+C の中断処理を統一 (#2661) | Unify Esc/Ctrl+C interrupt handling (#2661) | bug-fixes |
| Windows PowerShell でのペーストを修正 (#2544) | Fix windows powershell paste (#2544) | bug-fixes |
| 長時間実行シェルコマンド exec_command/write_stdin のサポートを追加 (#2574) | Add support for long-running shell commands exec_command/write_stdin (#2574) | new-features |
| apply_patch の信頼性を改善 (#2646) | Improve apply_patch reliability (#2646) | bug-fixes |
| リトライ回数に上限を設定 (#2701) | Cap retry counts (#2701) | bug-fixes |
| MCP ツールを決定論的にソートしてキャッシュヒット率を改善 (#2611) | Improve cache hit rate by sorting MCP tools deterministically (#2611) | bug-fixes |
| GPT-5 用の model_verbosity 設定を追加 (#2108) | Add model_verbosity config for GPT-5 (#2108) | new-features |
| git ルートまでの全 AGENTS.md ファイルを読み込むよう変更 (#2532) | Read all AGENTS.md files up to git root (#2532) | new-features |
| ワークツリーでの git ルート解決を修正 (#2585) | Fix git root resolution in worktrees (#2585) | bug-fixes |
| エラーメッセージとハンドリングを改善 (#2695, #2587, #2640, #2540) | Improve error messages & handling (#2695, #2587, #2640, #2540) | bug-fixes |

## 0.23.0

| 日本語 | English | Category |
|--------|---------|----------|
| TUI で /mcp コマンドに対応 (#2430)、承認を制御する /approvals スラッシュコマンドを追加 (#2474) | New commands and controls: support /mcp in TUI (#2430) and a slash command /approvals to control approvals (#2474). | new-features |
| 実行時に推論努力とモデルを変更可能に (#2435)、GPT-5 モデルに "minimal" 努力レベルを追加 (#2326) | Reasoning controls: change reasoning effort and model at runtime (#2435) /model; add "minimal" effort for GPT‑5 models (#2326). | new-features |
| ChatGPT 未サインイン時にログインオプションを表示 (#2440)、ChatGPT 認証トークンの自動更新に対応 (#2484) | Auth improvements: show login options when not signed in with ChatGPT (#2440) and auto‑refresh ChatGPT auth token (#2484). | bug-fixes |
| Ghostty で Ctrl-b/Ctrl-f のフォールバックに対応 (#2427)、Ctrl+H をバックスペースとして処理 (#2412)、タブ補完後のカーソル位置を調整 (#2442)、カラー・アクセシビリティを改善 (#2401, #2421) | UI/UX polish: Ghostty Ctrl‑b/Ctrl‑f fallback (#2427), Ctrl+H as backspace (#2412), cursor position tweak after tab completion (#2442), color/accessibility updates (#2401, #2421). | bug-fixes |
| リリースに zip アーカイブバイナリを追加 (#2438)、Windows x86_64 用 DotSlash エントリを追加 (#2361)、Rust 1.89 にアップグレード (#2465, #2467) | Distribution/infra: zip archived binaries added to releases (#2438) and DotSlash entry for Windows x86_64 (#2361); upgraded to Rust 1.89 (#2465, #2467). | chores |

## 0.22.0

| 日本語 | English | Category |
|--------|---------|----------|
| ログインサーバーを Python から Rust に移行し、#2000 および #2044 の問題を改善 (#2294) | #2294 moves the login server from Python to Rust, which should help with both #2000 and #2044. | new-features |
| Markdown ストリーミングのサポートを追加 (#2029) | #2029 adds support for markdown streaming | new-features |
| "light" 背景使用時に差分がより読みやすくなるよう UI 表示を改善 (#2270) | #2270 improves the UI treatment of diffs so they are more readable when using a light background | new-features |
| Ctrl+Z で TUI をサスペンド可能に (#2113) | #2113 ctrl-z can be used to suspend the TUI | new-features |

## 0.21.0

| 日本語 | English | Category |
|--------|---------|----------|
| プロンプトキャッシュキーを送信してキャッシュを改善（トークン効率が向上） (#2200) | Send prompt cache key for better caching (should improve token efficiency!) (#2200) | bug-fixes |
| 複数行コマンドを分割して可読性を向上 (#2202) | Split multiline commands to improve readability (#2202) | bug-fixes |
| exec コマンドをパースして UI で見やすくフォーマット (#2095) | Parse exec commands and format them more nicely in the UI (#2095) | bug-fixes |
| `applypatch` コマンドを `apply_patch` コマンド文字列として認識 (#2186) | Recognize `applypatch` command as `apply_patch` command string (#2186) | bug-fixes |
| ツール呼び出し結果に出力切り詰めメッセージを含め、モデルが期待した完全な出力を取得できなかったことを通知 (#2183) | Include output truncation message in tool call results to tell the model when it did not get the full output from a command that it might have expected (#2183) | bug-fixes |
| `/compact` コマンド後にフィードバックメッセージを表示し、デルタが送信されない問題を修正 (#2162) | Show feedback message after `/compact` command, fixing an issue when no deltas were sent (#2162) | bug-fixes |
| `apply_patch` の差分プレビューを表示 (#2050) | Show diff preview for `apply_patch` (#2050) | bug-fixes |
| MCP ツール用 JSON スキーマのサニタイズを追加して内部 JsonSchema 列挙型との互換性を確保 (#1975) | Add JSON schema sanitization for MCP tools to ensure compatibility with internal JsonSchema enum (#1975) | bug-fixes |

## 0.20.0

| 日本語 | English | Category |
|--------|---------|----------|
| @openai/codex の npm リリースが旧 TypeScript CLI ではなく Rust CLI を実行するよう変更 (#2035, #2048) | #2035 the npm release of @openai/codex now runs the Rust CLI instead of falling back to the old TypeScript CLI (TypeScript code was removed from the repo in #2048) | new-features |
| Windows: Python プログラムを一時ファイルに書き出すことでログインロジックの問題を修正 (#2047) | Windows: fixes one class of issues with login logic by writing Python program to a temp file instead of long string arg (FYI, we are planning to replace the Python with Rust: #2047) | bug-fixes |
| Windows: 全てのターミナルが対応していないため PopKeyboardEnhancementFlags の失敗を無視するよう変更 | Windows: ignores PopKeyboardEnhancementFlags failure since not all Windows terminals support it | bug-fixes |
| codex login での Python 証明書の問題を修正 (#2042, #2044) | #2042 should help/fix the Python certificates issue with codex login: #2044 | bug-fixes |

## 0.19.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.16.0

| 日本語 | English | Category |
|--------|---------|----------|
| キャパシティに関するエラーメッセージの軽微な修正 (#1947) | Small fix for an error message around capacity: #1947 | bug-fixes |

## 0.15.0

| 日本語 | English | Category |
|--------|---------|----------|
| デフォルトモデルを `gpt-5` に変更 | `gpt-5` is the default model! | chores |
| モデルがユーザーへの確認要否を判断する新オプション `--ask-for-approval on-request` を追加（既存の `on-failure` と `never` の中間的な動作） | new `--ask-for-approval on-request` option where the model decides whether to prompt the user (which is somewhat of a balance between the existing `on-failure` and `never`) options | new-features |
| フォルダを信頼済みとした際に `--sandbox workspace-write` と `--ask-for-approval on-request` を使用する新しいオンボーディングフローを追加（Git リポジトリでの推奨デフォルト） | new onboarding flow that uses `--sandbox workspace-write` and `--ask-for-approval on-request` as the configuration when users mark a folder is trusted (recommended default when working in a Git repo) | new-features |

## 0.14.0

| 日本語 | English | Category |
|--------|---------|----------|
| 会話ビューから一部の内部メッセージを削除 (#1868, #1866) | Removed some internal messaging from the conversation view (#1868, #1866) | bug-fixes |
| `codex exec` が `InternalAgentDied` を表示する問題を修正 (#1864) | Fixed issue where `codex exec` was printing `InternalAgentDied` (#1864) | bug-fixes |

## 0.13.0

| 日本語 | English | Category |
|--------|---------|----------|
| OpenAI の新しいオープンウェイトモデルで Codex CLI を使用するための `--oss` フラグを追加 | Introduces the `--oss` flag so Codex CLI can be used with the new open-weight models from OpenAI | new-features |

## 0.12.0

| 日本語 | English | Category |
|--------|---------|----------|
| 0.11.0 で発生したリグレッションを修正 (#1826) | Fix regression introduced in 0.11.0 (#1826) | bug-fixes |

## 0.11.0

| 日本語 | English | Category |
|--------|---------|----------|
| コピー＆ペーストが正常に動作するよう修正 | copy/paste works now | bug-fixes |
| ターミナルのネイティブスクロールを使用するよう変更 | use the terminal's native scrolling | bug-fixes |
| `/compact` コマンドのサポートを追加 | adds support for the `/compact` command | new-features |
| 実験的なプランニングツールを導入 | introduces an experimental planning tool | new-features |
| `apply_patch` がセッションのサンドボックス経由で実行されるよう修正（セキュリティ修正） | security fix to ensure `apply_patch` is run through the sandbox for the session | bug-fixes |
| CLI が新バージョンを確認し、古い場合に通知する機能を追加 | CLI now checks for new versions and lets you know if you are out of date | new-features |

## 0.10.0

| 日本語 | English | Category |
|--------|---------|----------|
| デフォルトで「信頼済み」となるコマンドを拡大 (#1668) | More commands are "trusted" by default (#1668) | new-features |
| TUI ヘッダーの UI 不整合を修正 (#1675) | Fix UI inconsistency in the TUI header (#1675) | bug-fixes |
| `.jsonl` ログに Git 状態の一部を記録 (#1598) | Record some Git state in the `.jsonl` log (#1598) | new-features |

## 0.9.0

| 日本語 | English | Category |
|--------|---------|----------|
| `codex mcp` の多数の修正 | Numerous fixes to `codex mcp` | bug-fixes |
| Codex が終了時にスポーンしたシェルコマンドに `SIGTERM` を送信するよう修正（Linux のみ）(#1626) | Ensure shell commands spawned by Codex get `SIGTERM` when `codex` is killed (Linux only) (#1626) | bug-fixes |
| ripgrep/`rg` の特定フラグを自動承認しないよう変更 (#1644) | Do not auto-approve certain flags for ripgrep/`rg` (#1644) | bug-fixes |

## 0.8.0

| 日本語 | English | Category |
|--------|---------|----------|
| TUI と `codex exec` でモデル応答をストリーミング表示 (#1594) | Stream model responses in TUI and `codex exec` (#1594) | new-features |
| `ctrl-d` をコンポーザーが空の場合のみ TUI を終了するよう変更 (#1589) | Change `ctrl-d` to only exit TUI when composer is empty (#1589) | new-features |
| `~/.codex/sessions` フォルダを `YYYY/MM/DD` サブフォルダで整理し、ファイルシステムのパフォーマンスを改善 (#1596) | Reorganize `~/.codex/sessions` folder with `YYYY/MM/DD` subfolders to improve filesystem performance (#1596) | new-features |
| 長い MCP ツール名の処理を修正 (#1571) | Fix handling of long MCP tool names (#1571) | bug-fixes |
| `codex exec` に `--json` フラグを追加し、JSONL 形式で stdout に出力 (#1603) | Add `--json` flag to `codex exec` for JSONL output to stdout (#1603) | new-features |
| npm 版で Codex CLI と Node.js プロセスが同時に終了するよう改善 (#1590) | Ensure Codex CLI and Node.js processes exit together in npm version (#1590) | bug-fixes |
| Windows の npm パッケージでクラッシュを防ぐため TypeScript 版へのフォールバックを追加 (#1590) | Add fallback to TypeScript version on Windows for npm package to prevent crashes (#1590) | bug-fixes |

## 0.7.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.6.0

| 日本語 | English | Category |
|--------|---------|----------|
| `codex` ツール呼び出しに関連する通知の `id` がリクエスト ID と一致するよう修正 | `id` for notifications associated with a `codex` tool call now match the request id | bug-fixes |
| 大量ペースト時の要約機能を追加 | Paste summarization for large pastes | new-features |
| Codex Web と連携する実験的な `codex apply` コマンドを追加 | Experimental `codex apply` command to interact with Codex Web | new-features |

## 0.5.0

| 日本語 | English | Category |
|--------|---------|----------|
| 新しい設定オプション `model_supports_reasoning_summaries` を追加 (#1524) | Added new config option: `model_supports_reasoning_summaries` (#1524) | new-features |
| 依存関係を更新し、Rust 1.88 でビルドするように変更 (#1494) | Updated dependencies and now build with Rust 1.88 (#1494) | chores |
| 未サポートの `/compact` への参照を削除 (#1503) | Removed reference to `/compact` as it is not supported yet (#1503) | bug-fixes |
| npm 経由でインストール時、`process.platform === "android"` で Rust CLI を実行するよう修正 (#1488) | Fixed `process.platform === "android"` to run Rust CLI when installed via npm (#1488) | bug-fixes |
| 生成されるシェル補完で `codex-cli` ではなく `codex` を使用するよう修正 (#1496) | Fixed generated shell completions to use `codex` instead of `codex-cli` (#1496) | bug-fixes |

## 0.4.0

| 日本語 | English | Category |
|--------|---------|----------|
| 組み込み OpenAI モデルプロバイダーで環境変数 `OPENAI_BASE_URL` を尊重するよう変更 | Honor the `OPENAI_BASE_URL` environment variable for the built-in openai model provider | new-features |
| プロファイル定義時に `model_reasoning_effort` と `model_reasoning_summary` の設定に対応 | Support `model_reasoning_effort` and `model_reasoning_summary` when defining a profile | new-features |
| Homebrew フォーミュラで `generate_completions_from_executable()` を使用するため、CLI に `completion` サブコマンドを追加 (PR #1491) | Add a `completion` subcommand to the CLI in pr#1491 so we can ultimately add `generate_completions_from_executable()` to our Homebrew formula: https://github.com/Homebrew/homebrew-core/blob/main/Formula/c/codex.rb | new-features |

## 0.3.0

| 日本語 | English | Category |
|--------|---------|----------|
| 非 ASCII 文字により CLI がクラッシュする問題を修正 | Fixes an issue where non-ASCII characters were crashing the CLI | bug-fixes |
| `--sandbox` フラグのサポートを追加し、このオプションに関する config.toml の破壊的変更を実施 | Adds support for a `--sandbox` flag and makes some breaking changes to `config.toml` around this option | new-features |
| モデルプロバイダーへのリクエスト時にカスタム HTTP ヘッダーを設定可能に | Makes it possible to configure custom HTTP headers when making requests to model providers | new-features |

## 0.2.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

