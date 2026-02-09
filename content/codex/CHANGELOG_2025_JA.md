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
## 0.55.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

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
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.52.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.50.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.49.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.48.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

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
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.44.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

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
| todo-list ツールのサポートを追加 (#4255) | Add todo-list tool support (#4255) | new-features |
## 0.41.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.40.0

| 日本語 | English | Category |
|--------|---------|----------|
| デフォルトモデルを `gpt-5-codex` に変更 (#4076) | Default model is now `gpt-5-codex` (#4076) | new-features |
| `gpt-5-codex` で 220k トークン到達時に自動圧縮を実行 (#4093) | Autocompaction is triggered automatically for `gpt-5-codex` when hitting 220k tokens (#4093) | new-features |
| 使用制限を `/status` で表示 (#4053) | Usage limits are now visible in `/status` (#4053) | new-features |
| 特定コミット、ベースブランチとの比較、カスタム指示を指定できる `/review` コマンドを追加 (#3961) | New `/review` commands (review specific commit, against a base branch, or custom instructions) (#3961) | new-features |
| MCP ツール呼び出しのデフォルトタイムアウトを 60 秒に設定、`config.toml` で個別サーバーごとに上書き可能 (#3959) | The default timeout for MCP tool calls is `60s` and can be overridden in `config.toml` by setting `tool_timeout_sec` for an individual MCP server (#3959) | new-features |
| try_parse_word_only_commands_sequence() がコマンドを順序通りに返すよう修正 (#3881) | fix: update try_parse_word_only_commands_sequence() to return commands in order (#3881) | bug-fixes |
| スラッシュコマンドポップアップの配置を修正 (#3937) | fix alignment in slash command popup (#3937) | bug-fixes |
| 起動時に画面をクリアしないよう修正 (#3925) | don't clear screen on startup (#3925) | bug-fixes |
| TUI でバックトラッキングを修正 (#4020) | Tui: fix backtracking (#4020) | bug-fixes |
| /review のブランチモードプロンプトを修正 (#4061) | Fix branch mode prompt for /review (#4061) | bug-fixes |
| ページャーオーバーレイのページ間クリアを修正 (#3952) | Fix pager overlay clear between pages (#3952) | bug-fixes |
| セッション終了時の Codex 再開メッセージを修正 (#3957) | fix codex resume message at end of session (#3957) | bug-fixes |
| undo 用の Git ツールを追加 (#3914) | feat: git tooling for undo (#3914) | new-features |
| 使用データの調整を修正 (#4082) | fix: usage data tweaks (#4082) | bug-fixes |
## 0.39.0

| 日本語 | English | Category |
|--------|---------|----------|
| `/review` コマンドを追加（#3774） | new `/review` command introduced in #3774 | new-features |

## 0.38.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.37.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

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
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

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
## 0.32.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.31.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.30.0

| 日本語 | English | Category |
|--------|---------|----------|
| .env ファイルの自動読み込みを廃止 (#3184) | Stop loading project `.env` files automatically (#3184) | new-features |
| セキュリティのため、リクエストを保存しないように変更 (#3212) | Never store requests for security (#3212) | bug-fixes |
| 保留中の OAuth ログインをキャンセルしてポートを解放 (#3217) | Free port by canceling pending OAuth login (#3217) | bug-fixes |
| ロールアウトポリシーを導入 (#3116) | Introduce rollout policy (#3116) | new-features |
| 共有 HTTP クライアントを導入 (#3110) | Shared HTTP client (#3110) | new-features |
| 残りコンテキストサイズの計算を修正 (#3190) | Correctly calculate remaining context size (#3190) | bug-fixes |
| 推論サマリーの処理を改善 (#3138) | Improve handling of reasoning summary (#3138) | new-features |
| サンドボックス化されたシェルツールの説明を修正 (#3069) | Correct sandboxed shell tool description (#3069) | bug-fixes |
| 大きなコマンドの承認ダイアログを修正 (#3087) | Fix approval dialog for large commands (#3087) | bug-fixes |
| モーダル表示中はステータスタイマーを一時停止 (#3131) | Pause status timer during modals (#3131) | bug-fixes |
| ページャーの自動スクロールを最下部に固定 (#3167) | Pager auto-scroll pins to bottom (#3167) | new-features |
| Bash のシンタックスハイライトを追加 (#3142) | Bash syntax highlighting (#3142) | new-features |
| Mac でキーヒントに ⌥⇧⌃ グリフを使用 (#3143) | Use ⌥⇧⌃ glyphs for key hints on mac (#3143) | new-features |
| アクティブな実行セル領域が高さゼロの場合のパニックを回避 (#3133) | Avoid panic when active exec cell area is zero height (#3133) | bug-fixes |
| @ ファイル検索を改善: .github、.gitlab などの隠しディレクトリを含める (#2981) | Improve @ file search: include specific hidden dirs such as .github, .gitlab (#2981) | new-features |
| セッション再開ピッカー (--resume) とクイック再開 (--continue) を追加 (#3135) | Add session resume picker (--resume) and quick resume (--continue) (#3135) | new-features |
| MCP: セッション再開と履歴リストを追加 (#3185) | MCP: add session resume + history listing (#3185) | new-features |
| 非サンドボックスプラットフォームで DangerFullAccess パッチを自動承認 (#2988) | Auto-approve DangerFullAccess patches on non-sandboxed platforms (#2988) | new-features |
| UNIX システムでの ZSH サポートと検出機能の改善 (#3187) | ZSH on UNIX system and better detection (#3187) | new-features |
| 推奨 VS Code 拡張機能を追加 (#3172) | Recommended VS Code extensions (#3172) | documentation |
| AGENTS.md のプロンプトと説明を改善 (#3132, #3121) | AGENTS.md prompt and clarifications (#3132, #3121) | documentation |
| API キーの権限に関するガイダンスを更新 (#3112) | Update guidance on API key permissions (#3112) | documentation |
| `use_experimental_reasoning_summary` toml キー設定を文書化 (#3118) | Document `use_experimental_reasoning_summary` toml key config (#3118) | documentation |
## 0.29.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.28.0

| 日本語 | English | Category |
|--------|---------|----------|
| 入力時のラグを修正 (#2922) | Fix laggy typing (#2922) | bug-fixes |
| メッセージスタイルを明確化のために改修 (#2877) | Rework message styling for clarity (#2877) | chores |
| エージェントメッセージストリーミング時の余分な空行を削除 (#3065) | Remove extra blank lines in streamed agent messages (#3065) | bug-fixes |
| AGENTS.md 存在時に "/init" の提案を非表示化 (#3038) | Hide "/init" suggestion when AGENTS.md exists (#3038) | chores |
| 空入力時の Enter キーを無視し空メッセージの送信を防止 (#3047) | Ignore Enter on empty input to avoid queuing blank messages (#3047) | bug-fixes |
| get_cursor_position エラーをキャッチしクラッシュを回避 (#2870) | Catch get_cursor_position errors to avoid crashes (#2870) | bug-fixes |
| 無効コマンドメッセージから余分な引用符を削除 (#3035) | Remove extra quote from disabled-command message (#3035) | bug-fixes |
| Windows ARM ビルドに Windows 11 ARM を活用 (#3062) | Leverage Windows 11 ARM for Windows ARM builds (#3062) | chores |
| 設定リファレンステーブルを修正 (#3063) | Fix config reference table (#3063) | documentation |
| ユーザーがモデルを変更した際のログを追加 (#3060) | Add logs when users change the model (#3060) | chores |
## 0.27.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.26.0

| 日本語 | English | Category |
|--------|---------|----------|
| `~/.codex/prompts` からカスタム `/prompts` を読み込み可能に (#2696) | Custom `/prompts` loaded from `~/.codex/prompts` (#2696) | new-features |
| Codex がローカル画像を自律的に表示できる新しい「View Image」ツールを追加 (#2723) | New "View Image" tool to let Codex agentically view local images (#2723) | new-features |
| 解決済み設定を検査するための MCP `GetConfig` エンドポイントを追加 (#2725) | MCP `GetConfig` endpoint to inspect resolved settings (#2725) | new-features |

## 0.25.0

| 日本語 | English | Category |
|--------|---------|----------|
| Core: 長時間稼働サーバーで手動クリーンアップを行うための remove_conversation API を追加 (#2613) | Core: remove_conversation API for manual cleanup in long‑lived servers (#2613) | new-features |
| TUI: トランスクリプト/差分ビューでマウスホイールによる代替スクロールに対応 (#2686) | TUI: mouse wheel alternate scrolling in transcript/diff views (#2686) | new-features |
| TUI: Alt+Ctrl+H で前の単語を削除（Alt+Backspace と同等）に対応 (#2717) | TUI: Alt+Ctrl+H deletes the previous word (parity with Alt+Backspace) (#2717) | new-features |
| Execution: task_started イベントにコンテキストウィンドウを含めるよう変更、ターンごとにモデルが変わる可能性に対応 (#2752) | Execution: include context window on task_started events; model may vary per turn (#2752) | new-features |

## 0.24.0

| 日本語 | English | Category |
|--------|---------|----------|
| キューイングされたメッセージに対応 (#2637) | Queued messages (#2637) | new-features |
| 画像ファイルのコピー&ペースト/ドラッグ&ドロップに対応 (#2567) | Copy Paste / Drag & Drop image files (#2567) | new-features |
| スクロール可能なトランスクリプトモード (Ctrl+T) を追加 (#2525) | Transcript mode (Ctrl+T) with scrolling ability (#2525) | new-features |
| 過去のメッセージから会話を編集/再開 (esc-esc) する機能を追加 (#2607) | Edit/resume conversation (esc-esc) from previous messages (#2607) | new-features |
| 明示的な --search オプション使用時の Web 検索に対応 (#2371) | Web search when using explicit --search option (#2371) | new-features |

## 0.23.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.22.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.21.0

| 日本語 | English | Category |
|--------|---------|----------|
| プロンプトキャッシュキーを送信してキャッシュを改善（トークン効率が向上） (#2200) | Send prompt cache key for better caching (should improve token efficiency!) (#2200) | new-features |
| 複数行コマンドを分割して可読性を向上 (#2202) | Split multiline commands to improve readability (#2202) | bug-fixes |
| exec コマンドをパースして UI で見やすくフォーマット (#2095) | Parse exec commands and format them more nicely in the UI (#2095) | bug-fixes |
| `applypatch` コマンドを `apply_patch` コマンド文字列として認識 (#2186) | Recognize `applypatch` command as `apply_patch` command string (#2186) | bug-fixes |
| ツール呼び出し結果に出力切り詰めメッセージを含め、モデルが期待した完全な出力を取得できなかったことを通知 (#2183) | Include output truncation message in tool call results to tell the model when it did not get the full output from a command that it might have expected (#2183) | bug-fixes |
| `/compact` コマンド後にフィードバックメッセージを表示し、デルタが送信されない問題を修正 (#2162) | Show feedback message after `/compact` command, fixing an issue when no deltas were sent (#2162) | bug-fixes |
| `apply_patch` の差分プレビューを表示 (#2050) | Show diff preview for `apply_patch` (#2050) | new-features |
| MCP ツール用 JSON スキーマのサニタイズを追加して内部 JsonSchema 列挙型との互換性を確保 (#1975) | Add JSON schema sanitization for MCP tools to ensure compatibility with internal JsonSchema enum (#1975) | bug-fixes |
## 0.20.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.19.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.16.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.15.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | `gpt-5` is the default model! | chores |
| (変更履歴のエントリはありません) | new `--ask-for-approval on-request` option where the model decides whether to prompt the user (which is somewhat of a balance between the existing `on-failure` and `never`) options | new-features |
| (変更履歴のエントリはありません) | new onboarding flow that uses `--sandbox workspace-write` and `--ask-for-approval on-request` as the configuration when users mark a folder is trusted (recommended default when working in a Git repo) | new-features |

## 0.14.0

| 日本語 | English | Category |
|--------|---------|----------|
| 会話ビューから一部の内部メッセージを削除 (#1868, #1866) | Removed some internal messaging from the conversation view (#1868, #1866) | bug-fixes |
| `codex exec` が `InternalAgentDied` を表示する問題を修正 (#1864) | Fixed issue where `codex exec` was printing `InternalAgentDied` (#1864) | bug-fixes |

## 0.13.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | Introduces the `--oss` flag so Codex CLI can be used with the new open-weight models from OpenAI | chores |

## 0.12.0

| 日本語 | English | Category |
|--------|---------|----------|
| 0.11.0 で発生したリグレッションを修正 (#1826) | Fix regression introduced in 0.11.0 (#1826) | bug-fixes |

## 0.11.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | copy/paste works now | bug-fixes |
| (変更履歴のエントリはありません) | use the terminal's native scrolling | bug-fixes |
| (変更履歴のエントリはありません) | adds support for the `/compact` command | new-features |
| (変更履歴のエントリはありません) | introduces an experimental planning tool | new-features |
| (変更履歴のエントリはありません) | security fix to ensure `apply_patch` is run through the sandbox for the session | bug-fixes |
| (変更履歴のエントリはありません) | CLI now checks for new versions and lets you know if you are out of date | new-features |

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
| `ctrl-d` をコンポーザーが空の場合のみ TUI を終了するよう変更 (#1589) | Change `ctrl-d` to only exit TUI when composer is empty (#1589) | chores |
| `~/.codex/sessions` フォルダを `YYYY/MM/DD` サブフォルダで整理し、ファイルシステムのパフォーマンスを改善 (#1596) | Reorganize `~/.codex/sessions` folder with `YYYY/MM/DD` subfolders to improve filesystem performance (#1596) | chores |
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
| 未サポートの `/compact` への参照を削除 (#1503) | Removed reference to `/compact` as it is not supported yet (#1503) | documentation |
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

