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
| UI を改善（バックグラウンドターミナル、ピッカーのクリーンアップ）(#8255, #8232) | UI polish (background terminals, picker cleanup) (#8255, #8232) | chores |
| ベータ機能に名前を追加 (#8266) | feat: add name to beta features (#8266) | chores |
| caribou (#8265) | caribou (#8265) | chores |
| codex resume --all のドキュメントを明確化（CWD カラムとフィルタリング）(#8264) | docs: clarify codex resume --all (CWD column & filtering) (#8264) | documentation |
| AsRef を &Path より優先するよう変更 (#8249) | chore: prefer AsRef to &Path (#8249) | chores |
| config_loader での Mac 固有ロジックの読み込みを簡素化 (#8248) | chore: simplify loading of Mac-specific logic in config_loader (#8248) | chores |
| スキルのフィーチャーフラグを再導入 (#8244) | Reintroduce feature flags for skills (#8244) | new-features |
| 不正なスキルの読み込みをフェイルオープンに変更 (#8243) | Make loading malformed skills fail-open (#8243) | new-features |
| ConfigBuilder を導入 (#8235) | fix: introduce ConfigBuilder (#8235) | bug-fixes |
| マイグレーションリンクを表示 (#8228) | Show migration link (#8228) | new-features |
| Config インスタンス化のコードパスをクリーンアップ (#8226) | chore: cleanup Config instantiation codepaths (#8226) | chores |
| "Team" を "Business" に変更し Education を追加 (#8221) | Change "Team" to "Business" and add Education (#8221) | new-features |
| SYSTEM スキルをサポート (#8220) | Support SYSTEM skills (#8220) | new-features |
| 読み取り ACL 設定の速度と信頼性を改善 (#8216) | speed and reliability improvements for setting reads ACLs (#8216) | new-features |
| モデルピッカーを追加 (#8209) | feat: model picker (#8209) | new-features |
| ConfigToml 構造体で PathBuf を AbsolutePathBuf に修正 (#8205) | fix: PathBuf -> AbsolutePathBuf in ConfigToml struct (#8205) | bug-fixes |
| npm パッケージのステージング時に新しい Windows バイナリをダウンロード (#8203) | download new windows binaries when staging npm package (#8203) | chores |
| ベータ機能を追加 (#8201) | chore: add beta features (#8201) | chores |
| ベータプログラムから一部を元に戻す (#8199) | chore: move back stuff out of beta program (#8199) | chores |
| list_models をノンブロッキングに変更 (#8198) | feat: make list_models non-blocking (#8198) | new-features |
| セッションダウングレードを修正 (#8196) | fix: session downgrade (#8196) | bug-fixes |
| スキルディレクトリのクリーンアップを修正 (#8194) | fix: proper skills dir cleanup (#8194) | bug-fixes |
| ドキュメントの微調整 (#8186) | nit: doc (#8186) | documentation |
| unified_exec ツールの不要なブランチを削除 (#8182) | nit: drop dead branch with unified_exec tool (#8182) | chores |
| イベントレンダリングの競合状態を防止 (#8181) | nit: prevent race in event rendering (#8181) | bug-fixes |
| 不安定なテストを修正 (#8175) | fix: flaky test 6 (#8175) | bug-fixes |
| models スクリプトを修正 (#8163) | fix the models script (#8163) | bug-fixes |
| 静的ファイルからモデルを読み込むよう変更 (#8153) | Load models from static file (#8153) | new-features |
| [app-server] 新しい RawResponseItem v2 イベントを追加 (#8152) | [app-server] add new RawResponseItem v2 event (#8152) | new-features |
| listMcpServerStatus をノンブロッキングに更新 (#8151) | chore: update listMcpServerStatus to be non-blocking (#8151) | chores |
| user_agent ヘッダーを追加 (#8149) | Add user_agent header (#8149) | chores |
| apply-patch の Unicode シナリオ対応 (#8141) | chore(apply-patch) unicode scenario (#8141) | chores |
| npm パッケージに新しい Windows バイナリを含める (#8140) | include new windows binaries in npm package (#8140) | chores |
| "chore: review in read-only (#7593)" を取り消し (#8127) | Revert "chore: review in read-only (#7593)" (#8127) | chores |
| tui2 のコンパイルエラーを修正 (#8124) | fix tui2 compile error (#8124) | bug-fixes |
| tui2 ビューポートロードマップのドキュメントを改善 (#8122) | docs: refine tui2 viewport roadmap (#8122) | documentation |
| ハードコードされたモデルバージョンのワークフローを追加 (#8118) | Add a workflow for a hardcoded version of models (#8118) | chores |
| 統一された実行フッターを追加 (#8117) | feat: unified exec footer (#8117) | new-features |
| listMcpServers を listMcpServerStatus に更新 (#8114) | chore: update listMcpServers to listMcpServerStatus (#8114) | chores |
| apply-patch の呼び出しテストを移動 (#8111) | chore(apply-patch) move invocation tests (#8111) | chores |
| "feat: unified exec footer" を取り消し (#8109) | Revert "feat: unified exec footer" (#8109) | chores |
| TypeScript SDK に xhigh 推論努力レベルのサポートを追加 (#8108) | feat(sdk): add xhigh reasoning effort support to TypeScript SDK (#8108) | new-features |
| Node 24 互換性のため GitHub Actions をアップグレード (#8102) | Upgrade GitHub Actions for Node 24 compatibility (#8102) | chores |
| パブリックスキルを追加し、リポジトリスキルの検出とエラー UX を改善 (#8098) | Add public skills + improve repo skill discovery and error UX (#8098) | new-features |
| ConfigLayerName を単純な enum から直和型に変更 (#8095) | feat: change ConfigLayerName into a disjoint union rather than a simple enum (#8095) | new-features |
| elevated sandbox セットアップのバグ修正とパフォーマンス改善 (#8094) | bug fixes and perf improvements for elevated sandbox setup (#8094) | bug-fixes |
| tui2: トランスクリプト行のメタデータを明示的に変更 (#8089) | refactor(tui2): make transcript line metadata explicit (#8089) | chores |
| .codex が書き込み可能なルートのサブフォルダーの場合、サンドボックスに対して読み取り専用にする (#8088) | feat: if .codex is a sub-folder of a writable root, then make it read-only to the sandbox (#8088) | new-features |
| app-server: スタブ化されたスレッド/圧縮 API を削除 (#8086) | chore(app-server): remove stubbed thread/compact API (#8086) | chores |
| Mac コード署名のリファクタリング (#8085) | chore: mac codesign refactor (#8085) | chores |
| macOS ランナーの Homebrew origin/main ワークアラウンドを廃止 (#8084) | chore(ci): drop Homebrew origin/main workaround for macOS runners (#8084) | chores |
| config.md の gpt-5.2 タイポを修正 (#8079) | docs: fix gpt-5.2 typo in config.md (#8079) | documentation |
| Windows サンドボックス機能の名前を改善 (#8077) | better name for windows sandbox features (#8077) | chores |
| unified_exec を shell_command にフォールバック (#8075) | feat: fallback unified_exec to shell_command (#8075) | new-features |
| 統一された実行フッターを追加 (#8067) | feat: unified exec footer (#8067) | new-features |
| 最終ユーザーターンで圧縮しないよう変更 (#8060) | feat: do not compact on last user turn (#8060) | new-features |
| レビュー結果の重複排除 (#8057) | chore: dedup review result duplication (#8057) | chores |
| 通常タスクのトレーススパンを追加 (#8053) | nit: trace span for regular task (#8053) | chores |
| ターン終了時に unified_exec を閉じるよう変更 (#8052) | feat: close unified_exec at end of turn (#8052) | new-features |
| MCP エリシテーションテストの修正 (#8020) | Fixes mcp elicitation test that fails for me when run locally (#8020) | bug-fixes |
| パスチェック経由で Bun グローバルインストールを検出するよう修正 (#8004) | Fix: Detect Bun global install via path check (#8004) | bug-fixes |
| WSL マウントポイント使用時に大文字小文字を区別しないよう resume マッチングを修正 (#8000) | Fixed resume matching to respect case insensitivity when using WSL mount points (#8000) | bug-fixes |
| リモートモデルを破壊的置換ではなくマージするよう変更 (#7997) | feat: merge remote models instead of destructing (#7997) | new-features |
| 無効な Windows ファイル名を回避するため Option<()> スキーマ生成をスキップ (#7969) | Fix: Skip Option<()> schema generation to avoid invalid Windows filenames (#7969) | bug-fixes |
| TUI イベントループをリファクタリングし crossterm イベントストリームの破棄と再作成を可能に (#7961) | refactor TUI event loop to enable dropping + recreating crossterm event stream (#7961) | chores |
| 並列ツール呼び出しを修正 (#7956) | fix parallel tool calls (#7956) | bug-fixes |
| exec-server: エラーの追加コンテキストを提供 (#7935) | exec-server: additional context for errors (#7935) | bug-fixes |
| 編集時のコメントを永続化 (#7931) | chore: persist comments in edit (#7931) | chores |
| shell_command のフリーフォームタイムアウト出力を修正 (#7791) | chore(shell_command) fix freeform timeout output (#7791) | bug-fixes |
| approval_policy の値を制約 (#7778) | feat: Constrain values for approval_policy (#7778) | new-features |
| TUI ビューポート、履歴印刷、選択/コピーを刷新（WIP）(#7601) | WIP: Rework TUI viewport, history printing, and selection/copy (#7601) | new-features |

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
| Config API のクリーンアップ: 新しい config API とよりクリーンな config 読み込みフロー (#7924) | Config API cleanup (#7924): new config API and cleaner config loading flow | new-features |
| API キーユーザー向けのリモート圧縮: キーベースのセッションでリモート圧縮を有効化 (#7835) | Remote compact for API-key users (#7835): enable remote compacting in key-based sessions | new-features |
| MCP と TUI のステータス表示: TUI での MCP 起動進捗メッセージを復元し、サーバーステータスに最新のディスク値を使用 (#7828, #7907) | MCP and TUI status visibility (#7828, #7907): restore MCP startup progress messages in the TUI and use latest disk values for server status | bug-fixes |
| Windows と PowerShell の使い勝手向上: pwsh/powershell の確実な検出、PowerShell による PowerShell のパース、追加の Windows 実行ファイル署名、WSL2 トースト修正 (#7607, #7893, #7942, #7137) | Windows and PowerShell quality-of-life (#7607, #7893, #7942, #7137): locate pwsh/powershell reliably, parse PowerShell with PowerShell, sign additional Windows executables, and fix WSL2 toasts | new-features |
| サンドボックスと安全性の更新: Elevated Sandbox 3/4 および安全なコマンドリストの拡張 (#7809, #7889, #7728) | Sandbox and safety updates (#7809, #7889, #7728): Elevated Sandbox 3/4 plus expanded safe command list | new-features |
| gpt-5.2 のモデル/プロンプト UX: プロンプトの更新とより明確な xhigh 推論の警告/ドキュメント (#7934, #7910, #7874, #7911) | Model/prompt UX for gpt-5.2 (#7934, #7910, #7874, #7911): prompt updates and clearer xhigh reasoning warnings/docs | new-features |
| cargo ビルドスイッチを修正 (#7948) | fix cargo build switch (#7948) | bug-fixes |
| 1p をサポート (#7945) | support 1p (#7945) | new-features |
| ベースプロンプトを更新 (#7943) | chore(prompt) Update base prompt (#7943) | chores |
| プロンプトから切り詰め詳細を削除 (#7941) | chore(prompt) Remove truncation details (#7941) | chores |
| モデルマネージャーの整理 (#7937) | chores: models manager (#7937) | chores |
| rx サブスクリプションの競合状態を修正 (#7921) | fix: race on rx subscription (#7921) | bug-fixes |
| TUI の破損を修正 (#7876) | fix: break tui (#7876) | bug-fixes |
| スキル名と説明の制限をバイト数ではなく文字数に変更 (#7915) | Make skill name and description limit based on characters not byte counts (#7915) | bug-fixes |
| "fix(apply-patch): preserve CRLF line endings on Windows" を取り消し (#7903) | Revert "fix(apply-patch): preserve CRLF line endings on Windows" (#7903) | chores |
| マイグレーション画面を動的に変更 (#7896) | Make migration screen dynamic (#7896) | new-features |
| "chat" wire_api の非推奨通知を追加 (#7897) | Added deprecation notice for "chat" wire_api (#7897) | chores |
| policy/.codexpolicy を rules/.rules に修正 (#7888) | fix: policy/.codexpolicy -> rules/.rules (#7888) | bug-fixes |
| RMCP クライアント設定ガイダンスを更新 (#7895) | Update RMCP client config guidance (#7895) | documentation |
| モデル情報を更新 (#7853) | Update Model Info (#7853) | chores |
| リリーススクリプトを削除 (#7885) | remove release script (#7885) | chores |
| find ファミリーの可視性を制限 (#7891) | Chore: limit find family visibility (#7891) | chores |
| ReasoningSummary::None の場合に推論サマリーを省略するよう修正 (#7845) | fix: omit reasoning summary when ReasoningSummary::None (#7845) | bug-fixes |
| nix の古い filedescriptor 出力ハッシュを削除 (#7865) | fix: drop stale filedescriptor output hash for nix (#7865) | bug-fixes |
| オンボーディング ApiKeyEntry 状態で 'q' キーによる終了を防止 (#7869) | fix: dont quit on 'q' in onboarding ApiKeyEntry state (#7869) | bug-fixes |

## 0.71.0

| 日本語 | English | Category |
|--------|---------|----------|
| 知識・推論・コーディングを改善した最新フロンティアモデル gpt-5.2 を導入 | Introducing gpt-5.2 our latest frontier model with improvements across knowledge, reasoning and coding | new-features |
| モデルピッカーにデフォルトモデルを表示 (#7838) | Show the default model in model picker (#7838) | new-features |
| tui2: tui クレートのコピーとスナップショットの正規化 (#7833) | feat(tui2): copy tui crate and normalize snapshots (#7833) | chores |
| thread/list がフィルタリングにより要求数より少ない結果を返す問題を修正 (#7509) | fix: thread/list returning fewer than the requested amount due to filtering CXA-293 (#7509) | bug-fixes |
| accept_elicitation_for_prompt_rule() テストがローカルで通るよう修正 (#7832) | fix: ensure accept_elicitation_for_prompt_rule() test passes locally (#7832) | bug-fixes |
| execpolicy ドキュメントのタイポを修正 (#7847) | fixing typo in execpolicy docs (#7847) | documentation |
| [app-server] ログイン ID が見つからない場合にエラーをスローしないよう修正 (#7831) | [app-server] make app server not throw error when login id is not found (#7831) | bug-fixes |
| テストの不安定さを軽減するため一時的なスリープを追加 (#7848) | fix: add a hopefully-temporary sleep to reduce test flakiness (#7848) | bug-fixes |
| [app-server] README に MCP エンドポイントを追加 (#7850) | [app-server] Update readme to include mcp endpoints (#7850) | documentation |
| 不正確な #[allow(dead_code)] マーカーを削除 (#7851) | fix: remove inaccurate #[allow(dead_code)] marker (#7851) | chores |
| スラッシュコマンドのファジーマッチングが壊れていたリグレッションを修正 (#7859) | Fixed regression that broke fuzzy matching for slash commands (#7859) | bug-fixes |
| 最終アシスタントメッセージの後にのみ "Worked for" を表示 (#7854) | Only show Worked for after the final assistant message (#7854) | new-features |
| Elevated Sandbox 2 (#7792) | Elevated Sandbox 2 (#7792) | new-features |
| 雑多な修正 (#7855) | fix(stuff) (#7855) | bug-fixes |
| 長いスナップショットの警告を追加 (#7870) | feat: warning for long snapshots (#7870) | new-features |
| シェルコマンドにシェルスナップショットを追加 (#7786) | feat: add shell snapshot for shell command (#7786) | new-features |
| 不安定なテストを修正 (#7875) | fix: flaky tests 4 (#7875) | bug-fixes |
| robin を追加 (#7882) | feat: robin (#7882) | new-features |
| "Only show Worked for after the final assistant message" を取り消し (#7884) | Revert "Only show Worked for after the final assistant message" (#7884) | chores |

## 0.69.0

| 日本語 | English | Category |
|--------|---------|----------|
| スキル: 明示的なスキル選択時に SKILL.md の内容をターンに注入。スキルはセッションごとに一度読み込み、ファイルが読めない場合は警告を表示 | Skills: Explicit skill selections now inject SKILL.md content into the turn; skills load once per session and warn if a file can't be read | new-features |
| Config API: 設定の読み取りを完全に型付けし、書き込み時にコメントと順序を保持。config に合わせて model パラメータをオプションに変更 | Config API: Configuration reads are fully typed; writes preserve comments and ordering; model parameter is optional to align with actual configs | new-features |
| TUI/UX: ログファイルから ANSI コードを除去。オプション選択とトランスクリプトページングに vim スタイルのナビゲーションを追加。トランスクリプトの連続性を改善。無効な入力でスラッシュコマンドポップアップが表示されないよう修正。実験的な tui2 フロントエンドをフィーチャーフラグで提供 | TUI/UX: Log files strip ANSI codes; vim-style navigation added for option selection and transcript paging; transcript continuity improved; slash-command popup no longer triggers on invalid input; experimental tui2 frontend available behind feature flag | new-features |
| 実行とサンドボックス: シェルスナップショットを実装。unified-exec イベントを刷新。サンドボックス権限を拡張（sendmsg/recvmsg）。より明確なレート制限警告。request-id ログを改善。より安全なエスカレーション | Exec and Sandbox: Shell snapshotting implemented; unified-exec events reworked; sandbox permissions expanded (sendmsg/recvmsg); clearer rate-limit warnings; improved request-id logging; safer escalations | new-features |
| プラットフォーム/認証/ビルド: MCP のセッション内ログインをサポート。リモートブランチレビューをサポート。Windows 署名のトグル。ConPty のベンダリング。Nix ハッシュの修正。より安全なリリースガードレール | Platform/Auth/Build: MCP in-session login support; remote-branch review support; Windows signing toggles; ConPty vendoring; Nix hash fixes; safer release guardrails | new-features |
| その他: 未対応画像のエラーをグレースフルに処理。絶対パスの設定をサポート。並列テストの安定性向上。重複した FeatureSpec を削除。実験的モデルのプロンプト/ツールをサポート | Miscellaneous: Unsupported images error gracefully; absolute config paths support; parallel test stability; removed duplicated feature spec; experimental-model prompt/tools support | new-features |
| 不安定なテストを修正 (#7826) | fix: flaky tests 3 (#7826) | bug-fixes |
| 不安定なテストを修正 (#7818) | fix: flaky test 2 (#7818) | bug-fixes |
| @modelcontextprotocol/sdk を ^1.24.0 にアップグレード (#7817) | fix: Upgrade @modelcontextprotocol/sdk to ^1.24.0 (#7817) | bug-fixes |
| 実験的な「コマンドリスク評価」機能を削除 (#7799) | Removed experimental "command risk assessment" feature (#7799) | chores |
| rg \| head のパースを修正 (#7797) | parse rg \| head a search (#7797) | bug-fixes |
| Elevated Sandbox 1 (#7788) | Elevated Sandbox 1 (#7788) | new-features |
| execpolicy.md のタイポを修正 (#7787) | fix more typos in execpolicy.md66(#7787) | documentation |
| /models に ChatGPT プロバイダーを使用 (#7756) | use chatgpt provider for /models (#7756) | new-features |

## 0.66.0

| 日本語 | English | Category |
|--------|---------|----------|
| Execpolicy の強化: TUI で承認後にコマンドプレフィックスをホワイトリスト化。サンドボックスの拒否時に修正案を提示。シェル MCP に execpolicy を統合。フォールバックチェックでパイプラインセグメントを検査し安全でない操作を検出 | Execpolicy enhancements: TUI whitelist command prefixes post-approval, sandbox denials propose amendments, shell MCP integrates execpolicy, fallback checks inspect pipeline segments to catch unsafe operations | new-features |
| Unified exec とシェルの安定性: ステータスラインの進捗表示を改善。Windows での unified-exec クラッシュを修正。長いコマンドが適切に折り返されるよう修正。SSE/セッションのクリーンアップによりツール呼び出し後のセッション停止を防止 | Unified exec and shell stability: improved status line progress display, Windows unified-exec crash fixed, long commands wrap properly, SSE/session cleanup prevents stuck sessions after tool calls | bug-fixes |
| TUI の更新: クロスプラットフォームのショートカット処理（Ctrl+N/P、リスト選択）をオーバーレイ、リスト、テキストエリア全体で統一 | TUI updates: cross-platform shortcut handling (Ctrl+N/P, list selection) now consistent across overlays, lists, and text areas | new-features |
| Apply-patch の改善: Windows での CRLF 改行を保持。E2E シナリオを拡張。Windows 固有のテストカバレッジを強化 | Apply-patch improvements: Windows CRLF line endings preserved, expanded e2e scenarios, increased Windows-specific test coverage | bug-fixes |
| Cloud exec: リモート実行に --branch フラグを追加。変更の検査と適用のための status/diff/apply フローを公開 | Cloud exec: added --branch flag for remote runs, exposed status/diff/apply flows for inspecting and applying changes | new-features |
| 署名: Linux アーティファクトを sigstore で署名 | Signing: Linux artifacts now signed via sigstore | new-features |
| 一般的な修正: 並列ツール呼び出しのチャット返却を修正。ゴーストスナップショットトークンを課金から除外。ツール名の欠落で litellm プロキシがクラッシュしないよう修正。マイグレーションプロンプトで HTTPS リンクを使用 | General fixes: parallel tool-call chat returns correctly, ghost snapshot tokens excluded from billing, missing tool names no longer crash litellm proxy, migration prompts use HTTPS links | bug-fixes |
| WSL でのペースト画像が動作しない問題を修正 (#6793) | FIX: WSL Paste image does not work (#6793) | bug-fixes |
| shell_command ツールにログインを追加 (#6846) | feat(core) Add login to shell_command tool (#6846) | new-features |
| ChatGPT ログインの説明に Enterprise プランを追加 (#6918) | Add Enterprise plan to ChatGPT login description (#6918) | new-features |
| インラインレスポンス記録を追加し process_items の間接参照を削除 (#7310) | Inline response recording and remove process_items indirection (#7310) | chores |
| 共有チェックサンドボックスを使用 (#7547) | Use shared check sandboxing (#7547) | chores |
| config から `model_family` を削除 (#7571) | remove `model_family` from config (#7571) | chores |
| サンドボックスポリシーを更新し TTY を許可 (#7580) | feat: update sandbox policy to allow TTY (#7580) | new-features |
| 警告メッセージのデフォルトを true に変更 (#7588) | chore: default warning messages to true (#7588) | chores |
| /prompt のツールチップを追加 (#7591) | chore: tool tip for /prompt (#7591) | chores |
| レビューを読み取り専用に変更 (#7593) | chore: review in read-only (#7593) | chores |
| execpolicy.md を更新 (#7595) | Update execpolicy.md (#7595) | documentation |
| models エンドポイントを追加 (#7603) | Add models endpoint (#7603) | new-features |
| app-server: McpToolCallItem に duration_ms を追加 (#7605) | fix(app-server): add duration_ms to McpToolCallItem (#7605) | bug-fixes |
| プランタイプを auth トークンではなく usage エンドポイントから取得するよう修正 (#7610) | fix: taking plan type from usage endpoint instead of thru auth token (#7610) | bug-fixes |
| app-server: ErrorNotification に will_retry を追加 (#7611) | fix(app-server): add will_retry to ErrorNotification (#7611) | bug-fixes |
| execpolicy の Arc<RwLock> の関心事を exec_policy_for の外に移動 (#7615) | chore: refactor to move Arc<RwLock> concern outside exec_policy_for (#7615) | chores |
| モデルマネージャーで models エンドポイントを呼び出し (#7616) | Call models endpoint in models manager (#7616) | new-features |
| codex-exec-mcp-server と execpolicy のインテグレーションテストを追加 (#7617) | fix: add integration tests for codex-exec-mcp-server with execpolicy (#7617) | chores |
| `with_remote_overrides` をモデルファミリーの構築に接続 (#7621) | Wire `with_remote_overrides` to construct model families (#7621) | chores |
| タイポを修正 (#7626) | fix typo (#7626) | documentation |
| リポジトリルートからもスキルを読み込むよう変更 (#7645) | Also load skills from repo root (#7645) | new-features |
| リモートモデルのフィーチャーフラグを追加 (#7648) | Add remote models feature flag (#7648) | new-features |
| OTEL HTTP エクスポーターのパニックを修正し mTLS をサポート (#7651) | fix: OTEL HTTP exporter panic and mTLS support (#7651) | bug-fixes |
| justfile をリポジトリルートに移動 (#7652) | Move justfile to repository root (#7652) | chores |
| exec-server のストリームが大きなリクエストでエラーになる問題を修正 (#7654) | fix: exec-server stream was erroring for large requests (#7654) | bug-fixes |
| rmcp クライアントフラグのドキュメントを修正 (#7665) | docs: fix documentation of rmcp client flag (#7665) | documentation |
| TOML otel エクスポーターのドキュメント例を修正 (#7669) | fix(doc): TOML otel exporter example (#7669) | documentation |
| config から experimental_use_rmcp_client を削除 (#7672) | docs: Remove experimental_use_rmcp_client from config (#7672) | documentation |
| 開発チェックを just に指定するようドキュメントを更新 (#7673) | docs: point dev checks to just (#7673) | documentation |
| Ubuntu ランナーで Rust テスト実行前にスペースを確保 (#7678) | fix: clear out space on ubuntu runners before running Rust tests (#7678) | chores |
| macOS CI ランナーで最新の Homebrew 修正を含むよう確保 (#7680) | fix: ensure macOS CI runners for Rust tests include recent Homebrew fixes (#7680) | chores |
| 非推奨ツール設定の警告メッセージとドキュメントを改善 (#7685) | fix: refine the warning message and docs for deprecated tools config (#7685) | bug-fixes |
| モデルピッカーを強化 (#7709) | Enhance model picker (#7709) | new-features |
| クライアントバージョンのフォーマットを `x.x.x` スタイルに変更 (#7711) | Add formatting client version to the `x.x.x` style (#7711) | chores |
| ts-rs を 11.0.1 から 11.1.0 にアップグレード (#7713) | chore(deps): bump ts-rs from 11.0.1 to 11.1.0 (#7713) | chores |
| derive_more を 2.0.1 から 2.1.0 にアップグレード (#7714) | chore(deps): bump derive_more from 2.0.1 to 2.1.0 (#7714) | chores |
| insta を 1.43.2 から 1.44.3 にアップグレード (#7715) | chore(deps): bump insta from 1.43.2 to 1.44.3 (#7715) | chores |
| wildmatch を 2.5.0 から 2.6.1 にアップグレード (#7716) | chore(deps): bump wildmatch from 2.5.0 to 2.6.1 (#7716) | chores |
| ディスクからモデルを読み込み TTL と ETag を設定 (#7722) | load models from disk and set a ttl and etag (#7722) | new-features |
| シェルコマンドハンドラーに変更検出機能を追加 (#7729) | feat: add is-mutating detection for shell command handler (#7729) | new-features |
| デバイス認証の手順をより明確に変更 (#7745) | Make the device auth instructions more clear (#7745) | documentation |
| app server の型を更新し execpolicy 修正案をサポート (#7747) | updating app server types to support execpolicy amendment (#7747) | chores |
| レガシーの `ModelInfo` を削除し `ModelFamily` にマージ (#7748) | Remove legacy `ModelInfo` and merge it with `ModelFamily` (#7748) | chores |
| pre-main の堅牢化ロジックが非 UTF-8 環境変数を許容するよう修正 (#7749) | fix: pre-main hardening logic must tolerate non-UTF-8 env vars (#7749) | bug-fixes |
| "feat: windows codesign with Azure trusted signing" を取り消し (#7753) | Revert "feat: windows codesign with Azure trusted signing" (#7753) | chores |
| `ModelInfo` を使用して指示を上書き (#7754) | override instructions using `ModelInfo` (#7754) | new-features |
| /models に ChatGPT プロバイダーを使用 (#7756) | use chatgpt provider for /models (#7756) | new-features |

## 0.65.0

| 日本語 | English | Category |
|--------|---------|----------|
| Codex Max をデフォルトモデルに変更。async-in-sync コードに関連する TUI パニックを修正 (#7566) | Codex Max as default (#7566): Codex Max is now the default model, and a TUI panic related to async-in-sync code was fixed | new-features |
| レジューム UX の改善: /resume スラッシュコマンドを追加し、レジュームパフォーマンスを向上 (#7302, #7303) | Better resume UX (#7302, #7303): Added a /resume slash command and improved resume performance so picking work back up is snappier | new-features |
| ツールチップとヒント UX: ヒントを太字の「Tip」ラベル付きマークダウンでレンダリングし、アプリ全体でよりリッチな Codex ツールチップを提供 (#7557, #7440) | Tooltips and tips UX (#7557, #7440): Tips/tooltips are rendered via markdown with a bold Tip label and richer Codex tooltips across the app | new-features |
| TUI の使い勝手向上: Ctrl-P/N ナビゲーション、画面行数制限のシェル出力、Windows クリップボード画像ペーストの復元、レイアウトのリファクタリング (#7530, #7448, #7514, #7461) | TUI quality-of-life (#7530, #7448, #7514, #7461): TUI gets Ctrl-P/N navigation, screen-line-capped shell output, restored Windows clipboard image paste, and a refactor for cleaner layout | new-features |
| 履歴とコンテキストの整理: history.jsonl を history.max_bytes で切り詰め、一般的な不要ディレクトリ（pycache 含む）をデフォルトで除外、ペーストプレースホルダーの一意性を保持 (#6242, #7483, #7545, #7431) | History and context hygiene (#6242, #7483, #7545, #7431): history.jsonl is trimmed by history.max_bytes, common junk dirs (incl. pycache) are ignored by default, and paste placeholders stay distinct | new-features |
| #7481 のテストで付加価値の低いものを削除 (#7558) | Remove test from #7481 that doesn't add much value (#7558) | chores |
| [app-server] config の `file_path` をオプションに変更 (#7560) | [app-server] make `file_path` for config optional (#7560) | bug-fixes |
| モデルファミリーをモデルマネージャーに移行 (#7565) | Migrate model family to models manager (#7565) | chores |
| `tui` をモデルマネージャーに移行 (#7555) | Migrate `tui` to use models manager (#7555) | chores |
| `ModelsManager` を導入し `app-server` を移行 (#7552) | Introduce `ModelsManager` and migrate `app-server` to use it (#7552) | new-features |
| トランスクリプトオーバーレイで長い exec 行を折り返すよう修正 (#7481) | fix: wrap long exec lines in transcript overlay (#7481) | bug-fixes |
| Features をセッション/スレッドのライフタイムで不変にするよう修正 (#7540) | fix: Features should be immutable over the lifetime of a session/thread (#7540) | bug-fixes |
| $ または /skills でスキルの一覧表示と選択をサポート (#7506) | feat: Support listing and selecting skills via $ or /skills (#7506) | new-features |
| [app-server] turn/plan/updated に thread_id を追加 (#7553) | [app-server] fix: add thread_id to turn/plan/updated (#7553) | bug-fixes |
| モデルプリセットを移行 (#7542) | Migrate model preset (#7542) | chores |
| メインの修正 (#7546) | fix: main (#7546) | bug-fixes |
| unified exec のサンドボックス検出を更新 (#7541) | chore: update unified exec sandboxing detection (#7541) | chores |
| app-server の feedback/upload で conversation_id を thread_id に変更 (#7538) | chore: conversation_id -> thread_id in app-server feedback/upload (#7538) | chores |
| app-server の未使用 TodoList アイテムを削除 (#7537) | chore: delete unused TodoList item from app-server (#7537) | chores |
| app-server README を更新 (#7510) | chore: update app-server README (#7510) | documentation |
| bun 環境変数の検出を削除 (#7534) | chore: remove bun env var detect (#7534) | chores |
| app server で MCP サーバー一覧をサポート (#7505) | feat: support list mcp servers in app server (#7505) | new-features |
| seatbelt: openpty() を許可 (#7507) | seatbelt: allow openpty() (#7507) | new-features |
| 画像プレースホルダーの遡及的追加によりポイズニングを防止 (#6774) | feat: retroactive image placeholder to prevent poisoning (#6774) | new-features |
| apply patch 時のモデル警告を追加 (#7494) | feat: model warning in case of apply patch (#7494) | new-features |
| unified_exec でプラットフォームデフォルトのシェルを使用するよう修正 (#7486) | fix(unified_exec): use platform default shell (#7486) | bug-fixes |
| デバイスコード認証の文字列を更新 (#7498) | Update device code auth strings (#7498) | chores |
| デッドコードとしてマークされたインライン関数を修正 (#7508) | fix: inline function marked as dead code (#7508) | chores |
| npx のパス解決バグを修正 (#7134) | fix: path resolution bug in npx (#7134) | bug-fixes |
| @openai/codex-shell-tool-mcp の --version フラグをサポート (#7504) | feat: support --version flag for @openai/codex-shell-tool-mcp (#7504) | new-features |
| create_approval_requirement_for_command を async fn に変更 (#7501) | chore: make create_approval_requirement_for_command an async fn (#7501) | chores |
| TurnError の serde(flatten) アノテーションを削除 (#7499) | fix: remove serde(flatten) annotation for TurnError (#7499) | bug-fixes |
| 新しいスナップショットにクレジット情報がない場合にクレジットを永続化 (#7490) | persisting credits if new snapshot does not contain credit info (#7490) | bug-fixes |
| 不要になったロックを解放するよう修正 (#7500) | fix: drop lock once it is no longer needed (#7500) | bug-fixes |
| execpolicy ヘルパーを追加 (#7032) | execpolicy helpers (#7032) | new-features |
| コンテキストウィンドウが不明な場合にトークン使用量を表示 (#7497) | Show token used when context window is unknown (#7497) | new-features |
| ノンブロッキングミューテックスを使用 (#7467) | Use non-blocking mutex (#7467) | chores |
| ゴーストスナップショットで未追跡パスのみを追跡するよう修正 (#7470) | Fix: track only untracked paths in ghost snapshots (#7470) | bug-fixes |
| app-server v2 の型に TypeScript の number アノテーションを追加 (#7492) | fix: add ts number annotations for app-server v2 types (#7492) | bug-fixes |
| unified_exec で apply_patch をインターセプト (#7446) | feat: intercept apply_patch for unified_exec (#7446) | new-features |
| app-server README から experimental/unstable の記載を削除 (#7474) | chore: remove mention of experimental/unstable from app-server README (#7474) | chores |
| リクエストログを復元 (#7471) | Add request logging back (#7471) | chores |
| app-server v2 にワンオフコマンドを追加 (#7452) | feat: add one off commands to app-server v2 (#7452) | new-features |
| モデルの警告メッセージを追加 (#7445) | feat: add warning message for the model (#7445) | new-features |
| review をどこでも有効化 (#7444) | chore: review everywhere (#7444) | chores |
| エイリアス圧縮を追加 (#7442) | feat: alias compaction (#7442) | new-features |
| skills.md の実験的サポートを追加 (#7412) | feat: experimental support for skills.md (#7412) | new-features |

## 0.64.0

| 日本語 | English | Category |
|--------|---------|----------|
| next_minor_version スクリプトでパッチ番号をリセットするよう修正 (#7050) | fix(scripts) next_minor_version should reset patch number (#7050) | chores |
| [app-server] Thread に gitInfo/cwd 等を公開 (#7060) | [app-server] feat: expose gitInfo/cwd/etc. on Thread (#7060) | new-features |
| ツール実験用の exp モデルを追加 (#7115) | feat: Add exp model to experiment with the tools (#7115) | new-features |
| 実験で unified exec を有効化 (#7118) | enable unified exec for experiments (#7118) | new-features |
| [app-server] 承認のドキュメント (#7105) | [app-server] doc: approvals (#7105) | documentation |
| Windows: ブラウザ/URL 起動を危険としてフラグ (#7111) | Windows: flag some invocations that launch browsers/URLs as dangerous (#7111) | new-features |
| use_model を使用 (#7121) | Use use_model (#7121) | bug-fixes |
| shell-tool-mcp でログインをオプションとしてサポート (#7120) | feat: support login as an option on shell-tool-mcp (#7120) | new-features |
| stdin がターミナルでない場合にエラーにするよう修正 (#6382) | fix(tui): Fail when stdin is not a terminal (#6382) | bug-fixes |
| MCP エリシテーションをサポート (#6947) | support MCP elicitations (#6947) | new-features |
| process_exec_tool_call でサンドボックスタイプのルックアップをインライン化 (#7122) | refactor: inline sandbox type lookup in process_exec_tool_call (#7122) | chores |
| ポリシー承認済みコマンドのサンドボックスをバイパス (#7110) | bypass sandbox for policy approved commands (#7110) | new-features |
| @openai/codex-shell-tool-mcp の npm 公開を開始 (#7123) | fix: start publishing @openai/codex-shell-tool-mcp to npm (#7123) | chores |
| shell-tool-mcp でサーバーケーパビリティを宣言 (#7112) | feat: declare server capability in shell-tool-mcp (#7112) | new-features |
| execpolicy クイックスタートを移動 (#7127) | move execpolicy quickstart (#7127) | documentation |
| 自動圧縮で暗号化推論を考慮 (#7113) | Account for encrypted reasoning for auto compaction (#7113) | bug-fixes |
| 暗号化サマリーにプロキシを使用 (#7252) | chore: use proxy for encrypted summary (#7252) | chores |
| codex デリゲートのキャンセルを修正 (#7092) | fix: codex delegate cancellation (#7092) | bug-fixes |
| unified exec の基本プルーニング戦略を追加 (#7239) | feat: unified exec basic pruning strategy (#7239) | new-features |
| ワールドライタブルディレクトリのスキャンを統合 (#7234) | consolidate world-writable-directories scanning (#7234) | chores |
| 不安定なテストを修正 (#7257) | fix: flaky test (#7257) | bug-fixes |
| フィードバックメタデータにソース情報を追加 (#7140) | [feedback] Add source info into feedback metadata (#7140) | new-features |
| Windows で PowerShell の apply_patch パースをサポート (#7221) | fix(windows) support apply_patch parsing in powershell (#7221) | bug-fixes |
| regex を 1.11.1 から 1.12.2 にアップグレード (#7222) | chore(deps): bump regex from 1.11.1 to 1.12.2 (#7222) | chores |
| toml_edit を 0.23.4 から 0.23.5 にアップグレード (#7223) | chore(deps): bump toml_edit from 0.23.4 to 0.23.5 (#7223) | chores |
| actions/upload-artifact を 4 から 5 にアップグレード (#7229) | chore(deps): bump actions/upload-artifact from 4 to 5 (#7229) | chores |
| actions/checkout を 5 から 6 にアップグレード (#7230) | chore(deps): bump actions/checkout from 5 to 6 (#7230) | chores |
| NetBSD の process-hardening ビルドを修正 (#7238) | fix: Fix build process-hardening build on NetBSD (#7238) | bug-fixes |
| ドキュメントから streamable_shell を削除 (#7235) | Removed streamable_shell from docs (#7235) | documentation |
| libc を 0.2.175 から 0.2.177 にアップグレード (#7224) | chore(deps): bump libc from 0.2.175 to 0.2.177 (#7224) | chores |
| webbrowser を 1.0.5 から 1.0.6 にアップグレード (#7225) | chore(deps): bump webbrowser from 1.0.5 to 1.0.6 (#7225) | chores |
| CLA 許可リストに dependabot の別形式を追加 (#7260) | Added alternate form of dependabot to CLA allow list (#7260) | chores |
| エンタープライズでアップグレードチェックとメッセージをスキップ可能に (#7213) | Allow enterprises to skip upgrade checks and messages (#7213) | new-features |
| 大きなペーストでのカスタムプロンプト展開を修正 (#7154) | fix: custom prompt expansion with large pastes (#7154) | bug-fixes |
| cargo audit ワークフローとポリシーを追加 (#7108) | chore(ci): add cargo audit workflow and policy (#7108) | chores |
| cargo-deny 設定を追加 (#7119) | chore: add cargo-deny configuration (#7119) | chores |
| Windows サンドボックス: workspace_root/.git を読み取り専用として扱う (#7142) | Windows Sandbox: treat workspace_root/.git as read-only in workspace-write mode (#7142) | bug-fixes |
| unified exec の "waited" レンダリングの重複を排除 (#7256) | chore: dedup unified exec "waited" rendering (#7256) | chores |
| 早期終了セッションを保存しないよう修正 (#7263) | fix: don't store early exit sessions (#7263) | bug-fixes |
| ストリームエラーメッセージを修正 (#7266) | fix: Correct the stream error message (#7266) | bug-fixes |
| [app-server-test-client] send-followup-v2 を追加 (#7271) | [app-server-test-client] add send-followup-v2 (#7271) | new-features |
| [app-server] config 管理を追加 (#7241) | feat[app-server]: config management (#7241) | new-features |
| unified exec プロセスにカスタム環境変数を追加 (#7286) | feat: add custom env for unified exec process (#7286) | new-features |
| [app-server] item と error の通知に thread_id と turn_id を追加 (#7124) | [app-server] feat: add thread_id and turn_id to item and error notifications (#7124) | new-features |
| 圧縮イベントを追加 (#7289) | feat: add compaction event (#7289) | new-features |
| [app-server] turn/diff/updated イベントを追加 (#7279) | [app-server] feat: add turn/diff/updated event (#7279) | new-features |
| macOS 13 のサポートを廃止 (#7295) | fix: Drop MacOS 13 (#7295) | chores |
| /new で会話を破棄するよう修正 (#7297) | fix: drop conversation when /new (#7297) | bug-fixes |
| 適切なクライアント抽出 (#6996) | chore: proper client extraction (#6996) | chores |
| 不安定な Ubuntu テストを一時的に無効化 (#7300) | tmp: drop flaky ubuntu (#7300) | chores |
| [app-server] thread/tokenUsage/updated v2 イベントを追加 (#7268) | [app-server] add thread/tokenUsage/updated v2 event (#7268) | new-features |
| /approvals で WorkspaceWrite ポリシーを正しく認識 (#7301) | correctly recognize WorkspaceWrite policy on /approvals (#7301) | bug-fixes |
| イベント処理のプロセス ID を更新 (#7261) | feat: update process ID for event handling (#7261) | new-features |
| 実験的な「サンドボックスコマンド評価」機能のリグレッションを修正 (#7308) | Fixed regression in experimental "sandbox command assessment" feature (#7308) | bug-fixes |
| ファイルを削除 (#7314) | nit: drop file (#7314) | chores |
| 相対リンクを修正しヒントを追加 (#7319) | doc: fix relative links and add tips (#7319) | documentation |
| example-config.md のバグを2件修正 (#7324) | Fixes two bugs in example-config.md documentation (#7324) | documentation |
| ロールアウトセッション初期化のエラーを改善 (#7336) | chore: improve rollout session init errors (#7336) | chores |
| デタッチドレビューを追加 (#7292) | feat: detached review (#7292) | new-features |
| その他の不安定なテストを修正 (#7372) | fix: other flaky tests (#7372) | bug-fixes |
| セッションリサイクルを改善 (#7368) | chore: better session recycling (#7368) | chores |
| arboard を 3.6.0 から 3.6.1 にアップグレード (#7426) | chore(deps): bump arboard from 3.6.0 to 3.6.1 (#7426) | chores |
| serde_with を 3.14.0 から 3.16.1 にアップグレード (#7422) | chore(deps): bump serde_with from 3.14.0 to 3.16.1 (#7422) | chores |
| reqwest を 0.12.23 から 0.12.24 にアップグレード (#7424) | chore(deps): bump reqwest from 0.12.23 to 0.12.24 (#7424) | chores |
| tracing を 0.1.41 から 0.1.43 にアップグレード (#7428) | chore(deps): bump tracing from 0.1.41 to 0.1.43 (#7428) | chores |
| CLA アクションが dependabot を正しく除外するよう修正 (#7429) | Fixed CLA action to properly exempt dependabot (#7429) | chores |
| image を 0.25.8 から 0.25.9 にアップグレード (#7421) | chore(deps): bump image from 0.25.8 to 0.25.9 (#7421) | chores |
| [app-server] turn/plan/updated イベントを追加 (#7329) | [app-server] add turn/plan/updated event (#7329) | new-features |
| レビューロールアウトフィルタリングを無効化 (#7371) | fix: disable review rollout filtering (#7371) | bug-fixes |
| [app-server] 全イベントに thread_id と turn_id を確保 (#7408) | [app-server] fix: ensure thread_id and turn_id are on all events (#7408) | bug-fixes |
| [app-server] ファイル変更アイテムに item/fileChange/outputDelta を発信 (#7399) | [app-server] fix: emit item/fileChange/outputDelta for file change items (#7399) | bug-fixes |
| recent_commits(limit=0) が0ではなく1を返す問題を修正 (#7334) | Fix recent_commits(limit=0) returning 1 commit instead of 0 (#7334) | bug-fixes |
| nix ビルドで rmcp 出力ハッシュが不足する問題を修正 (#7436) | fix: nix build missing rmcp output hash (#7436) | bug-fixes |
| codex max のデフォルトと xhigh の利用可能性を明確化 (#7449) | docs: clarify codex max defaults and xhigh availability (#7449) | documentation |
| MCP 起動時に 'type' フィールドの欠落でエラーにならないよう修正 (#7417) | fix: prevent MCP startup failure on missing 'type' field (#7417) | bug-fixes |
| rmcp を 0.10.0 に更新 (#7462) | chore: update to rmcp@0.10.0 to pick up support for custom client notifications (#7462) | chores |
| apply_patch の shell_command テストを修正 (#7307) | fix(apply_patch) tests for shell_command (#7307) | chores |
| [app-server] ImageView アイテムを追加 (#7468) | [app-server] Add ImageView item (#7468) | new-features |
| Windows で履歴検索を有効化 (#7457) | fix(core): enable history lookup on windows (#7457) | bug-fixes |
| TUI: WSL クリップボード画像パスの処理 (#3990) | fix(tui): handle WSL clipboard image paths (#3990) | bug-fixes |

## 0.63.0

| 日本語 | English | Category |
|--------|---------|----------|
| ウェブ検索を有効にすると `Invalid value: 'other'.` エラーが発生するバグを修正 | Fixes the bug where enabling web search can lead to `Invalid value: 'other'.` errors. | bug-fixes |
| [app-server] コマンド実行に Declined ステータスを追加 | [app-server] feat: add Declined status for command exec | new-features |
| model_max_output_tokens を削除 | chore: drop model_max_output_tokens | chores |
| GitHub リリースの bash の重複エントリを除去 | fix: clear out duplicate entries for bash in the GitHub release | bug-fixes |

## 0.61.0

| 日本語 | English | Category |
|--------|---------|----------|
| ExecPolicy2 の統合と exec-server の準備: コアに ExecPolicy2 を統合し exec-server のリファクタリングと移行準備、新しいポリシーエンジン導入のためのクイックスタートドキュメントを追加 | ExecPolicy2 integration and exec-server prep: Core now integrates ExecPolicy2 with exec-server refactors and cutover groundwork, plus quickstart docs to help teams adopt the new policy engine | new-features |
| 切り詰めとエラー報告の改善: シングルパスの切り詰めにより重複作業を削減。エラーイベントにオプションのステータスコードを追加しオブザーバビリティを向上 | Improved truncation and error reporting: Single-pass truncation reduces duplicate work, and error events can now carry optional status codes for clearer observability | bug-fixes |
| シェルの信頼性とサンドボックス警告: フォールバックシェルの選択を強化し、ワールドライタブルディレクトリの警告を抑制（Windows でのメッセージ改善を含む） | Shell reliability and sandbox warnings: Fallback shell selection is hardened and world-writable directory warnings are less noisy, including improved messaging on Windows | bug-fixes |
| UX の修正: 推論表示の修正、/review 後のレビューフッターコンテキストの保持、モデルマイグレーション画面を初回のみ表示 | UX fixes: Corrected reasoning display, preserved review footer context after /review, and the model migration screen now shows only once | bug-fixes |

## 0.60.1

| 日本語 | English | Category |
|--------|---------|----------|
| APIユーザーのデフォルトモデルをgpt-5.1-codexに変更 | Default model for API users is now gpt-5.1-codex | chores |

## 0.59.0

| 日本語 | English | Category |
|--------|---------|----------|
| 最新のフロンティアエージェントコーディングモデル GPT-5.1-Codex-Max を導入。より高い信頼性、より速い反復、長時間のプロジェクト規模のワークフローをサポート | GPT-5.1-Codex-Max: introducing our newest frontier agentic coding model. GPT-5.1-Codex-Max delivers higher reliability, faster iteration, and support for long-running, project-scale workflows | new-features |
| ネイティブ圧縮サポート: 長時間のコーディングセッションにわたるパフォーマンスを改善する圧縮のファーストクラスサポートを追加 | Native Compaction Support: added first-class support for Compaction, improving performance across extended coding sessions | new-features |
| ツール出力トークン制限の拡張: Codex モデルが最大10,000のツール出力トークンをサポート。config.toml の tool_output_token_limit で設定可能 | Expanded Tool Token Limits: codex models now support up to 10,000 tool output tokens. Configure this via tool_output_token_limit in config.toml | new-features |
| Windows エージェントモード: ネイティブ Windows 向けのエージェントモードを導入。作業フォルダーでのファイル読み書きとコマンド実行をより少ない承認で実行可能。実験的な Windows サンドボックスを使用 | Windows Agent mode: Introduced Agent mode for native Windows. Codex can read files, write files, and run commands in your working folder with fewer approvals. Agent mode uses a new experimental Windows sandbox | new-features |
| TUI と UX の改善: git リポジトリがない場合のゴーストスナップショット通知を排除。Codex Resume でブランチ表示と CWD フィルタリング。画像のプレースホルダーアイコンを追加。/status でクレジットを表示 | TUI and UX Improvements: Eliminated ghost snapshot notifications when no git repository is present. Codex Resume now displays branches and respects the current working directory for filtering. Added placeholder icons for images. Credits are now visible in /status | new-features |
| 改行での切り詰めを行わないよう修正 (#6907) | fix: don't truncate at new lines (#6907) | bug-fixes |
| [app-server] thread/resume でスレッド>ターン>アイテムを展開 (#6848) | [app-server] populate thread>turns>items on thread/resume (#6848) | new-features |
| 不要なログをデバッグレベルに変更 (#6898) | nit: useless log to debug (#6898) | chores |
| 会話開始前に /approvals の変更をサポート (#6836) | fix(core) Support changing /approvals before conversation (#6836) | bug-fixes |
| app-server: Windows のワールドライタブル通知 (#6880) | chore(app-server) world-writable windows notification (#6880) | chores |
| 並列ツール呼び出しの命令インジェクションを修正 (#6893) | fix: parallel tool call instruction injection (#6893) | bug-fixes |
| 安定化の微調整 (#6895) | nit: stable (#6895) | chores |
| 大きなコミットの警告を追加 (#6838) | feat: warning large commits (#6838) | new-features |
| ラベルを修正 (#6892) | fix label (#6892) | bug-fixes |
| シェルで `truncate_text` を使用するよう変更 (#6842) | Move shell to use `truncate_text` (#6842) | chores |
| unified_exec の大規模出力サマリーの不安定なテストを修正 (#6884) | flaky-unified_exec_formats_large_output_summary (#6884) | bug-fixes |
| shell_command がフリーフォーム出力を返すよう変更 (#6860) | shell_command returns freeform output (#6860) | new-features |
| モデルピッカーのタイポを修正 (#6859) | fix: typos in model picker (#6859) | bug-fixes |
| ThreadStartResponse と ThreadResumeResponse にフィールドを追加 (#6847) | fix: add more fields to ThreadStartResponse and ThreadResumeResponse (#6847) | bug-fixes |
| [app-server] `turn/completed` v2 イベントを導入 (#6800) | [app-server] introduce `turn/completed` v2 event (#6800) | new-features |
| exec-server を追加 (#6630) | exec-server (#6630) | new-features |
| テストが余分な config.toml を出力しないよう修正 (#6853) | Fix tests so they don't emit an extraneous config.toml in the source tree (#6853) | bug-fixes |
| [app-server-test-client] 自動承認コマンドを追加 (#6852) | [app-server-test-client] feat: auto approve command (#6852) | new-features |
| generated_ts テストの実行時間を改善 (#6851) | Improved runtime of generated_ts_has_no_optional_nullable_fields test (#6851) | chores |
| MCP サーバーの config.md のタイポを修正 (#6845) | Fix typo in config.md for MCP server (#6845) | documentation |
| OTEL の mTLS 設定をサポート (#6228) | [codex][otel] support mtls configuration (#6228) | new-features |
| app server でレビューを追加 (#6613) | feat: review in app server (#6613) | new-features |
| config で shell_command を有効化 (#6843) | chore(config) enable shell_command (#6843) | chores |
| トークンによる切り詰めユーティリティを追加 (#6746) | Add the utility to truncate by tokens (#6746) | new-features |
| faq.md のサポートモデルセクションを更新 (#6832) | Update faq.md section on supported models (#6832) | documentation |
| localshell ツール呼び出しを修正 (#6823) | fixing localshell tool calls (#6823) | bug-fixes |
| 並列ツール呼び出しを有効化 (#6796) | feat: enable parallel tool calls (#6796) | new-features |
| app server の微調整 (#6830) | nit: app server (#6830) | chores |
| ゴーストコミットを安定としてマーク (#6833) | nit: mark ghost commit as stable (#6833) | chores |
| git ブランチツールを追加 (#6831) | feat: git branch tooling (#6831) | new-features |
| rmcp-client: expires_at を使用して OAuth トークンをリフレッシュ (#6574) | fix(rmcp-client): refresh OAuth tokens using expires_at (#6574) | bug-fixes |
| Windows での shell_command とパースの軽微な修正 (#6811) | fix(windows) shell_command on windows, minor parsing (#6811) | bug-fixes |
| シェルシリアライゼーションのテストカバレッジを追加 (#6810) | chore(core) Add shell_serialization coverage (#6810) | chores |
| 関数呼び出しペイロードのログをデバッグレベルに降格 (#6808) | Demote function call payload log to debug to avoid noisy error-level stderr (#6808) | chores |
| execpolicy2 の拡張 (#6627) | execpolicy2 extension (#6627) | new-features |
| [app-server] v2 コマンド実行承認フローを追加 (#6758) | [app-server] feat: add v2 command execution approval flow (#6758) | new-features |
| バックグラウンドレート制限フェッチ (#6789) | background rate limits fetch (#6789) | new-features |
| Windows での Alt-Gr の TUI 問題を修正 (#6799) | Fix TUI issues with Alt-Gr on Windows (#6799) | bug-fixes |
| シェルツールを無効化する機能を追加 (#6481) | core: add a feature to disable the shell tool (#6481) | new-features |
| シェルの手順を更新 (#6679) | chore(core) Update shell instructions (#6679) | chores |
| app server v2 の全型に camelCase アノテーションを付与 (#6791) | fix: annotate all app server v2 types with camelCase (#6791) | bug-fixes |
| LM Studio OSS をサポート (#2312) | LM Studio OSS Support (#2312) | new-features |
| [app-server] README にイベントを追加 (#6690) | [app-server] add events to readme (#6690) | documentation |
| コア/TUI: ノンブロッキング MCP 起動 (#6334) | core/tui: non-blocking MCP startup (#6334) | new-features |
| chatwidget TUI テストを削除 (#6759) | chore: delete chatwidget::tests::binary_size_transcript_snapshot tui test (#6759) | chores |
| execpolicy v2 を追加 (#6467) | feat: execpolicy v2 (#6467) | new-features |
| personal git ignore の微調整 (#6787) | nit: personal git ignore (#6787) | chores |
| Windows sccache を一時的に無効化 (2) (#6775) | tmp: drop sccache for windows 2 (#6775) | chores |
| shell_command のシリアライゼーションを修正 (#6744) | fix(core) serialize shell_command (#6744) | bug-fixes |
| FreeBSD/OpenBSD のビルドを修正: ターゲット固有のキーリング機能と BSD ハードニング (#6680) | Fix FreeBSD/OpenBSD builds: target-specific keyring features and BSD hardening (#6680) | bug-fixes |
| "codex" GitHub ユーザーを CLA 署名から除外 (#6724) | Exempt the "codex" github user from signing the CLA (#6724) | chores |
| actions/github-script を 7 から 8 にアップグレード (#6755) | chore(deps): bump actions/github-script from 7 to 8 (#6755) | chores |
| Claude モデルが空の finish_reason により不完全な応答を返す問題を修正 (#6728) | Fix: Claude models return incomplete responses due to empty finish_reason handling (#6728) | bug-fixes |
| Windows Codex ターミナルでの AltGr/バックスラッシュ入力を修正 (#6720) | Fix AltGr/backslash input on Windows Codex terminal (#6720) | bug-fixes |
| "tmp: drop sccache for windows" を取り消し (#6751) | Revert "tmp: drop sccache for windows (#6673)" (#6751) | chores |
| Windows でのスクリプトベースツールの MCP サーバー実行を修正 (#3828) | fix: resolve Windows MCP server execution for script-based tools (#3828) | bug-fixes |
| カスタムプロンプトの名前付き引数のドキュメントエラーを修正 (#5910) | Fix documentation errors for Custom Prompts named arguments and add canonical examples (#5910) | documentation |
| 二重切り詰めのパニックを厳格化 (#6701) | Tighten panic on double truncation (#6701) | bug-fixes |
| 圧縮を改善 (#6692) | Improve compact (#6692) | bug-fixes |
| 切り詰めヘルパーを専用ファイルにリファクタリング (#6683) | Refactor truncation helpers into its own file (#6683) | chores |
| "templates and build step for winget package" を取り消し (#6696) | Revert "templates and build step for validating/submitting winget package" (#6696) | chores |
| CLA アシスタントを openai org リポジトリのみで実行 (#6687) | ci: only run CLA assistant for openai org repos (#6687) | chores |
| オンボーディングでの "Don't Trust" ディレクトリ選択を処理 (#4941) | Handle "Don't Trust" directory selection in onboarding (#4941) | bug-fixes |
| unified_exec_respects_workdir_override テストを無視 (#6693) | Ignore unified_exec_respects_workdir_override (#6693) | chores |
| 入力より先に出力を順序付け (#6691) | Order outputs before inputs (#6691) | chores |
| app-server-test-client クレートを追加 (#5391) | feat: add app-server-test-client crate for internal use (#5391) | new-features |
| codex 検出を修正し、セキュリティ重視のスモークテストを追加 (#6682) | fix codex detection, add new security-focused smoketests (#6682) | bug-fixes |
| TypeScript SDK: CLI 環境のオーバーライドを許可 (#6648) | feat(ts-sdk): allow overriding CLI environment (#6648) | new-features |
| winget パッケージのテンプレートとビルドステップ (#6485) | templates and build step for validating/submitting winget package (#6485) | new-features |
| テストタイムアウトを追加 (#6612) | Add test timeout (#6612) | chores |
| TUI 通知をデフォルトで有効化 (#6633) | Enable TUI notifications by default (#6633) | new-features |
| Windows sccache を一時的に無効化 (#6673) | tmp: drop sccache for windows (#6673) | chores |
| [app-server] MCP ツール呼び出しアイテムの開始/完了イベントを追加 (#6642) | [App server] add mcp tool call item started/completed events (#6642) | new-features |
| トークナイザーをキャッシュ (#6609) | feat: cache tokenizer (#6609) | new-features |
| unified_exec の UI を改善 (#6515) | feat: better UI for unified_exec (#6515) | new-features |
| /new 実行時にレジュームログを追加 (#6660) | feat: add resume logs when doing /new (#6660) | new-features |
| テスト: SSE モックで mount_sse_once_match を mount_sse_once に置換 (#6640) | tests: replace mount_sse_once_match with mount_sse_once for SSE mocking (#6640) | chores |
| スイートテスト用の共有ヘルパーを昇格 (#6460) | Promote shared helpers for suite tests (#6460) | chores |
| チャット補完テストで共有ネットワークゲーティングヘルパーを使用 (#6461) | Use shared network gating helper in chat completion tests (#6461) | chores |
| 二重切り詰めを回避 (#6631) | Avoid double truncation (#6631) | bug-fixes |
| シェル検出の刷新を再適用 (#6607) | Revert "Revert \"Overhaul shell detection and centralize command generation for unified exec\"" (#6607) | chores |
| [app-server] JSON スキーマエクスポートと one-of 型の軽微な修正 (#6614) | [app-server] small fixes for JSON schema export and one-of types (#6614) | bug-fixes |
| [app-server] 新しい v2 イベントを追加: item/reasoning/delta, item/agentMessage/delta, item/reasoning/summaryPartAdded (#6559) | [App-server] add new v2 events: item/reasoning/delta, item/agentMessage/delta, item/reasoning/summaryPartAdded (#6559) | new-features |
| apply_patch テストを統合 (#6545) | chore(core) Consolidate apply_patch tests (#6545) | chores |
| 失敗したテストのみを一覧表示 (#6619) | Only list failed tests (#6619) | chores |
| exec と TypeScript SDK に --add-dir サポートを追加 (#6565) | feat: Add support for --add-dir to exec and TypeScript SDK (#6565) | new-features |
| TypeScript SDK に AbortSignal サポートを追加 (#6378) | Add AbortSignal support to TypeScript SDK (#6378) | new-features |
| 古いコントリビューター PR を閉じるワークフローを有効化 (#6615) | Enable close-stale-contributor-prs.yml workflow (#6615) | chores |
| デフォルトの yield 時間を更新 (#6610) | Update default yield time (#6610) | chores |
| 古い PR を閉じるワークフローを追加 (#6594) | Close stale PRs workflow (#6594) | chores |
| プロンプトキャッシングテストを test_codex に移行 (#6605) | Migrate prompt caching tests to test_codex (#6605) | chores |
| "Overhaul shell detection..." を取り消し (#6606) | Revert "Overhaul shell detection and centralize command generation for unified exec" (#6606) | chores |
| シェル検出を刷新し unified exec のコマンド生成を一元化 (#6577) | Overhaul shell detection and centralize command generation for unified exec (#6577) | new-features |

## 0.58.0

| 日本語 | English | Category |
|--------|---------|----------|
| gpt-5.1 モデルファミリーをサポート | Support for gpt5.1 models family | new-features |
| App server の強化: 新しい JSON スキーマジェネレーターコマンド、アイテム開始/完了イベント、マクロのクリーンアップ、ボイラープレートの削減、重複コードの整理 (#6406, #6517, #6470, #6488) | App server enhancements: new JSON schema generator command, item started/completed events, macro cleanup, reduced boilerplate, and tightened duplicate-code hygiene (#6406, #6517, #6470, #6488) | new-features |
| 使い勝手の修正: ドキュメント更新（web_search, SDK, config）、TUI ショートカットのインライン表示、seatbelt/Wayland/brew/圧縮/cloud-tasks のバグ修正、警告の明確化、認証情報を使用したステータス出力、OTEL テストの安定化 (#5889, #6424, #6425, #6376, #6421, #4824, #6238, #5856, #6446, #6529, #6541) | Quality of life fixes: doc updates (web_search, SDK, config), TUI shortcuts inline, seatbelt/Wayland/brew/compaction/cloud-tasks bugfixes, clearer warnings, auth-aware status output, and OTEL test stabilization (#5889, #6424, #6425, #6376, #6421, #4824, #6238, #5856, #6446, #6529, #6541) | bug-fixes |
| ワールドライタブルスキャンを改善 (#6381) | Improve world-writable scan (#6381) | bug-fixes |
| ワールドライタブル警告のさらなる改善 (#6389) | more world-writable warning improvements (#6389) | bug-fixes |
| Windows での npm アップグレードで cmd.exe を経由してパス探索を動作させる (#6387) | For npm upgrade on Windows, go through cmd.exe to get path traversal working (#6387) | bug-fixes |
| codespell-project/actions-codespell を 2.1 から 2.2 にアップグレード (#6437) | chore(deps): bump codespell-project/actions-codespell from 2.1 to 2.2 (#6437) | chores |
| taiki-e/install-action を 2.60.0 から 2.62.49 にアップグレード (#6438) | chore(deps): bump taiki-e/install-action from 2.60.0 to 2.62.49 (#6438) | chores |
| askama を 0.12.1 から 0.14.0 にアップグレード (#6443) | chore(deps): bump askama from 0.12.1 to 0.14.0 (#6443) | chores |
| zeroize を 1.8.1 から 1.8.2 にアップグレード (#6444) | chore(deps): bump zeroize from 1.8.1 to 1.8.2 (#6444) | chores |
| 圧縮を移動 (#6454) | Move compact (#6454) | chores |
| app_server_protocol の generate_ts を使用するよう修正 (#6407) | fix: use generate_ts from app_server_protocol (#6407) | bug-fixes |
| ログインメニューからの終了をサポート (#6419) | Support exiting from the login menu (#6419) | new-features |
| マージせずにクローズされた PR をロックしないよう変更 (#6422) | Don't lock PRs that have been closed without merging (#6422) | chores |
| レート制限モデルナッジのオプトアウトを追加 (#6433) | Add opt-out for rate limit model nudge (#6433) | new-features |
| ユーザーコマンドイベントタイプを追加 (#6246) | Add user command event types (#6246) | new-features |
| unified_exec に workdir を追加 (#6466) | feat: add workdir to unified_exec (#6466) | new-features |
| [app-server] initialize を deprecated API セクションから移動 (#6468) | [app-server] chore: move initialize out of deprecated API section (#6468) | chores |
| codex debug seatbelt --log-denials を追加 (#4098) | add codex debug seatbelt --log-denials (#4098) | new-features |
| TUI: Ctrl-Z 処理のジョブ制御をリファクタリング (#6477) | refactor(tui): job-control for Ctrl-Z handling (#6477) | chores |
| CLI リリース用に Windows .exe ファイルのアーティファクトをアップロード (#6478) | upload Windows .exe file artifacts for CLI releases (#6478) | chores |
| レート制限ステータスバーを反転 (#6482) | flip rate limit status bar (#6482) | bug-fixes |
| unified exec で codex-linux-sandbox を使用 (#6480) | Use codex-linux-sandbox in unified exec (#6480) | new-features |
| bash パースの関連コードを集約 (#6489) | Colocate more of bash parsing (#6489) | chores |
| ghost_commit 機能をデフォルトで有効化 (#6041) | Enable ghost_commit feature by default (#6041) | new-features |
| ログをトレースレベルに変更 (#6503) | nit: logs to trace (#6503) | chores |
| unified exec のエスカレーション処理とテストを追加 (#6492) | Add unified exec escalation handling and tests (#6492) | new-features |
| full-auto の説明を on-request で更新 (#6523) | Update full-auto description with on-request (#6523) | chores |
| generate-ts に prettier log-level=warn を再追加 (#6528) | Re-add prettier log-level=warn to generate-ts (#6528) | chores |
| レジューム時のモデル切り替え警告を追加 (#6507) | feat: warning switch model on resume (#6507) | new-features |
| shell_command ツールを追加 (#6510) | feat: shell_command tool (#6510) | new-features |
| ブール値を config オーバーライドとしてパースできることを検証 (#6516) | chore: verify boolean values can be parsed as config overrides (#6516) | chores |
| ゴーストコミットで変更を伴うツールのみを待機するよう変更 (#6534) | feat: only wait for mutating tools for ghost commit (#6534) | new-features |
| ログでリクエストボディを二重エンコードしないよう修正 (#6558) | Do not double encode request bodies in logging (#6558) | bug-fixes |
| [app-server] thread/resume で履歴、パス、オーバーライドをサポート (#6483) | [app-server] feat: thread/resume supports history, path, and overrides (#6483) | new-features |
| ツールのプロセスが stderr/stdout を共有する孫プロセスを生成した際のハングを回避 (#6575) | Avoid hang when tool's process spawns grandchild that shares stderr/stdout (#6575) | bug-fixes |
| 圧縮後のコンテキスト残量をプロキシ (#6597) | feat: proxy context left after compaction (#6597) | new-features |

## 0.57.0

| 日本語 | English | Category |
|--------|---------|----------|
| TUI の使い勝手向上: スラッシュコマンドリストでの Ctrl-N/P ナビゲーションと、バックトラック時に /status のノイズをスキップ | TUI quality-of-life: ctrl-n/p navigation for slash command lists and backtracking skips the /status noise | new-features |
| 長時間実行コマンドのタイムアウトを改善 | Improve timeout on long running commands | bug-fixes |
| フリーフォームの unified exec 出力フォーマット (#6233) | Freeform unified exec output formatting (#6233) | new-features |
| generate_ts の prettier 出力を warn のみに変更 (#6342) | Make generate_ts prettier output warn-only (#6342) | chores |
| insufficient_quota エラーでのリトライをスキップ (#6340) | Skip retries on insufficient_quota errors (#6340) | bug-fixes |
| unified exec 有効時にシェルツールを削除 (#6345) | Remove shell tool when unified exec is enabled (#6345) | chores |
| AI ラベラールールを issue トラッカーのラベルに合わせて更新 (#6347) | Refresh AI labeler rules to match issue tracker labels (#6347) | chores |
| wait_for_event_with_timeout より wait_for_event を優先（初回更新）(#6346) | Prefer wait_for_event over wait_for_event_with_timeout (initial update) (#6346) | chores |
| apply_patch のリネーム/移動パス解決を修正 (#5486) | Fix apply_patch rename/move path resolution (#5486) | bug-fixes |
| wait_for_event_with_timeout より wait_for_event を優先（フォローアップ）(#6349) | Prefer wait_for_event over wait_for_event_with_timeout (follow-up) (#6349) | chores |
| [app-server] account/read エンドポイントを実装 (#6336) | App-server: implement account/read endpoint (#6336) | new-features |
| [app-server] Thread に追加フィールドを公開 (#6338) | App-server: expose additional fields on Thread (#6338) | new-features |
| [app-server] auth v2 ドキュメントを追加し Codex MCP インターフェースセクションを更新 (#6353) | App-server: add auth v2 doc and update Codex MCP interface section (#6353) | documentation |
| [app-server] スレッドとターンの README を更新 (#6368) | App-server: README updates for threads and turns (#6368) | documentation |
| シェル config ツールをモデルファミリー config に昇格 (#6351) | Promote shell config tool to model family config (#6351) | chores |
| TUI: tui.rs にインラインコメントを追加 (#6369) | TUI: add inline comments to tui.rs (#6369) | chores |
| create_github_release スクリプトに --promote-alpha オプションを追加 (#6370) | Add --promote-alpha option to create_github_release script (#6370) | chores |
| TypeScript SDK に network_access と web_search オプションを追加 (#6367) | SDK: add network_access and web_search options to TypeScript SDK (#6367) | new-features |
| WSL: 更新時に Windows パスを正規化 (#6097) | WSL: normalize Windows paths during update (#6097) | bug-fixes |
| [app-server] ドキュメントに初期化セクションを追加 (#6377) | App-server docs: add initialization section (#6377) | documentation |
| ターミナルリファクタリング: 非推奨の flush ロジックを削除 (#6373) | Terminal refactor: remove deprecated flush logic (#6373) | chores |
| Cloudflare 403 HTML をフレンドリーなメッセージに置換 (#6252) | Core: replace Cloudflare 403 HTML with friendly message (#6252) | bug-fixes |
| unified exec: 承認なしで安全なコマンドを許可 (#6380) | Unified exec: allow safe commands without approval (#6380) | new-features |

## 0.56.0

| 日本語 | English | Category |
|--------|---------|----------|
| よりコンパクトでコスト効率の高い GPT-5-Codex の新モデル GPT-5-Codex-Mini を導入 | Introducing our new model GPT-5-Codex-Mini — a more compact and cost-efficient version of GPT-5-Codex | new-features |
| 非推奨メッセージをドキュメントへのリンクに更新 (#6211) | fix: Update the deprecation message to link to the docs (#6211) | bug-fixes |
| [app-server] export.rs で v2 名前空間をサポートし、初期 v2 通知を追加 (#6212) | [app-server] feat: export.rs supports a v2 namespace, initial v2 notifications (#6212) | new-features |
| nix ビルドを修正 (#6230) | Fix nix build (#6230) | bug-fixes |
| シンボリックリンクされた Markdown ファイルからカスタムプロンプトを読み込むよう修正 (#3643) | fix(core): load custom prompts from symlinked Markdown files (#3643) | bug-fixes |
| PID 1 から codex を実行可能に (#4200) | allow codex to be run from pid 1 (#4200) | new-features |
| rmcp を 0.8.4 にアップグレード (#6234) | Upgrade rmcp to 0.8.4 (#6234) | chores |
| TypeScript SDK に modelReasoningEffort オプションを追加 (#6237) | Add modelReasoningEffort option to TypeScript SDK (#6237) | new-features |
| TUI: ChatWidget と BottomPane を Renderables を使用するようリファクタリング (#5565) | tui: refactor ChatWidget and BottomPane to use Renderables (#5565) | chores |
| 会話履歴ファイルを専用ディレクトリにリファクタリング (#6229) | refactor Conversation history file into its own directory (#6229) | chores |
| "Re-connecting" 動作に対処するためトークンリフレッシュ処理を改善 (#6231) | Improved token refresh handling to address "Re-connecting" behavior (#6231) | bug-fixes |
| rmcp を 0.8.5 に更新 (#6261) | Update rmcp to 0.8.5 (#6261) | chores |
| [app-server] v2 Thread API を追加 (#6214) | [app-server] feat: v2 Thread APIs (#6214) | new-features |
| CI の断続的なテスト失敗を修正 (#6282) | Fixes intermittent test failures in CI (#6282) | bug-fixes |
| 環境選択モーダルが開いている時に r キーのキャプチャを停止 (#6249) | stop capturing r when environment selection modal is open (#6249) | bug-fixes |
| [app-server] account/login/start と account/login/completed の v2 を実装 (#6183) | [App-server] Implement v2 for account/login/start and account/login/completed (#6183) | new-features |
| TUI でログインメニューの閉じ動作を防止 (#6285) | Prevent dismissal of login menu in TUI (#6285) | bug-fixes |
| 目次が自身を含んだり末尾マーカーを重複させないよう修正 (#4388) | fix: ToC so it doesn't include itself or duplicate the end marker (#4388) | bug-fixes |
| [app-server] account/login/cancel v2 エンドポイントを追加 (#6288) | [App-server] Add account/login/cancel v2 endpoint (#6288) | new-features |
| クエリ用のモデルナッジを追加 (#6286) | feat: add model nudge for queries (#6286) | new-features |
| 単一推論努力のモデルをサポート (#6300) | feat: support models with single reasoning effort (#6300) | new-features |
| 明確化のためリネーム (#6319) | chore: rename for clarity (#6319) | chores |
| [app-server] v2 Turn API を追加 (#6216) | [app-server] feat: v2 Turn APIs (#6216) | new-features |
| advanced guide のコードフェンスとタイポを修正 (#6295) | docs: Fix code fence and typo in advanced guide (#6295) | documentation |
| 文法の誤りを修正 (#6326) | chore: fix grammar mistakes (#6326) | chores |
| Windows サンドボックス: Everyone-writable ディレクトリの警告を表示 (#6283) | Windows Sandbox: Show Everyone-writable directory warning (#6283) | new-features |
| 関連テストを app-server/tests/suite/v2 に移動 (#6289) | chore: move relevant tests to app-server/tests/suite/v2 (#6289) | chores |
| gpt-5-codex が要求されない限りコミットを amend しないことを明確化 (#6333) | feat: clarify that gpt-5-codex should not amend commits unless requested (#6333) | new-features |
| コントリビューションガイドラインと PR テンプレートにバグレポートへのリンクを要求するよう更新 (#6332) | Updated contributing guidelines and PR template to request link to bug report in PR notes (#6332) | documentation |
| ネットワーク有効時に証明書操作を許可するようサンドボックスを拡張 (#5980) | core: widen sandbox to allow certificate ops when network is enabled (#5980) | new-features |
| [app-server] listConversations にセッションメタデータを追加 (#6337) | [App Server] Add more session metadata to listConversations (#6337) | new-features |

## 0.55.0

| 日本語 | English | Category |
|--------|---------|----------|
| "fix: pin musl 1.2.5 for DNS fixes" をリバート (#6222) | #6222 Revert "fix: pin musl 1.2.5 for DNS fixes" | bug-fixes |
| codex_delegate でデルタを無視するよう変更 (#6208) | #6208 ignore deltas in codex_delegate | bug-fixes |

## 0.54.0

| 日本語 | English | Category |
|--------|---------|----------|
| DNS 修正のため musl 1.2.5 にピン留め（⚠️ v0.55.0 で取り消し）(#6189) | fix: pin musl 1.2.5 for DNS fixes (#6189) | bug-fixes |
| ターンアイテムで送信するため推論デルタを無視するよう修正 (#6202) | fix: ignore reasoning deltas because we send it with turn item (#6202) | bug-fixes |
| [app-server] account/updated と account/logout の v2 を実装 (#6175) | [App-server] v2 for account/updated and account/logout (#6175) | new-features |
| is_api_message が推論メッセージを正しく除外するよう修正 (#6156) | Fix is_api_message to correctly exclude reasoning messages (#6156) | bug-fixes |
| ファイル検索でシンボリックリンクを辿るよう修正 (#4453) | Follow symlinks during file search (#4453) | bug-fixes |
| サンプル config.toml のドキュメントを追加 (#5175) | docs: add example config.toml (#5175) | documentation |
| --search で非推奨メッセージを表示しないよう修正 (#6180) | fix: --search shouldn't show deprecation message (#6180) | bug-fixes |
| notify ハンドラーが正しい input_messages の詳細を渡すよう修正 (#6143) | Fixed notify handler so it passes correct input_messages details (#6143) | bug-fixes |
| サンドボックスコマンドのログを cwd ではなく $CODEX_HOME に出力 (#6171) | log sandbox commands to $CODEX_HOME instead of cwd (#6171) | bug-fixes |
| 中断後の経過時間を追加 (#5996) | feat: add the time after aborting (#5996) | new-features |
| TUI: テキストエリアの単語区切り処理を改善 (#5541) | tui: refine text area word separator handling (#5541) | bug-fixes |
| Windows でサンドボックスが有効な場合に信頼プロンプトをスキップしないよう修正 (#6167) | Do not skip trust prompt on Windows if sandbox is enabled (#6167) | bug-fixes |
| responses-api-proxy に Azure サポートのオプションを追加 (#6129) | feat: add options to responses-api-proxy to support Azure (#6129) | new-features |
| コンテキストウィンドウの計算に推論トークンを含める (#6161) | Include reasoning tokens in the context window calculation (#6161) | bug-fixes |
| rmcp クライアントのフィーチャーフラグ参照を修正 (#6051) | Fix rmcp client feature flag reference (#6051) | bug-fixes |
| OAuth ログインのエラーメッセージのタイポを修正 (#6159) | Fix typo in error message for OAuth login (#6159) | bug-fixes |
| スラッシュコマンドのドキュメントを追加 (#5685) | Add documentation for slash commands in docs/slash_commands.md (#5685) | documentation |
| ステータスカードとスナップショットの使用量 URL を改善 (#6111) | fix: improve usage URLs in status card and snapshots (#6111) | bug-fixes |
| Windows での「会話のアーカイブ」を修正 (#6124) | Fix "archive conversation" on Windows (#6124) | bug-fixes |
| actions/upload-artifact を 4 から 5 にアップグレード (#6137) | chore(deps): bump actions/upload-artifact from 4 to 5 (#6137) | chores |
| API キーペースト時の余分な文字を修正 (#4903) | fix: pasting api key stray character (#4903) | bug-fixes |
| experimental config キーの誤った "deprecated" メッセージを修正 (#6131) | Fix incorrect "deprecated" message about experimental config key (#6131) | bug-fixes |
| 初期実験のフィードバックに基づくサンドボックスコマンド評価機能の変更 (#6091) | Changes to sandbox command assessment feature based on initial experiment feedback (#6091) | new-features |
| Azure OpenAI のレート制限メッセージをパース (#5956) | Parse the Azure OpenAI rate limit message (#5956) | bug-fixes |
| advanced guide のリンクアンカーとマークダウン形式を修正 (#5649) | docs: Fix link anchor and markdown format in advanced guide (#5649) | documentation |
| ドキュメントの小さなタイポを修正 (#5659) | Fixing small typo in docs (#5659) | documentation |
| TUI: crossterm にパッチを当ててカラークエリを改善 (#5935) | tui: patch crossterm for better color queries (#5935) | bug-fixes |
| [app-server] クライアントリクエストのエラーレスポンスを改善 (#6050) | [codex][app-server] improve error response for client requests (#6050) | bug-fixes |
| コントリビューションガイドのリンク切れを修正 (#4973) | docs: fix broken link in contributing guide (#4973) | documentation |
| コンパクター 2 を追加 (#6027) | feat: compactor 2 (#6027) | new-features |
| 圧縮時の警告を追加 (#6052) | Add warning on compact (#6052) | new-features |
| シェルシリアライゼーションの JSON テストを追加 (#6043) | chore: Add shell serialization tests for json (#6043) | chores |
| ツール呼び出しテキスト全体を切り詰め (#5979) | Truncate total tool calls text (#5979) | bug-fixes |
| ドキュメント: 「Configuration」は「Getting started」に属さないよう修正 (#4797) | docs: "Configuration" is not belongs "Getting started" (#4797) | documentation |
| indexmap を 2.10.0 から 2.11.4 にアップグレード (#4804) | chore(deps): bump indexmap from 2.10.0 to 2.11.4 (#4804) | chores |
| anyhow を 1.0.99 から 1.0.100 にアップグレード (#4802) | chore(deps): bump anyhow from 1.0.99 to 1.0.100 (#4802) | chores |
| actions/checkout を 4 から 5 にアップグレード (#4800) | chore(deps): bump actions/checkout from 4 to 5 (#4800) | chores |
| actions/github-script を 7 から 8 にアップグレード (#4801) | chore(deps): bump actions/github-script from 7 to 8 (#4801) | chores |
| brew アップグレードリンクを修正 (#6045) | fix: brew upgrade link (#6045) | bug-fixes |
| テスト: undo (#6034) | test: undo (#6034) | chores |
| thiserror を 2.0.16 から 2.0.17 にアップグレード (#4426) | chore(deps): bump thiserror from 2.0.16 to 2.0.17 (#4426) | chores |
| ユーザー指示メッセージのフォーマットを更新 (#6010) | Update user instruction message format (#6010) | chores |
| TUI: insert_history_lines_to_writer でエラーを伝播するよう修正 (#4266) | fix(tui): propagate errors in insert_history_lines_to_writer (#4266) | bug-fixes |

## 0.53.0

| 日本語 | English | Category |
|--------|---------|----------|
| エラー 400 の問題を修正 | Fixing error 400 issues | bug-fixes |
| Java 向けサンドボックスを改善 | Improve sandboxing for Java | new-features |
| 開発者向け指示を追加 (#5897) | codex: add developer instructions (#5897) | chores |
| app-server: serde(skip_serializing_if = "Option::is_none") アノテーションを削除 (#5939) | app-server: remove serde(skip_serializing_if = "Option::is_none") annotations (#5939) | chores |
| ドキュメント: 欠落していたピリオドを追加 (#3754) | docs: add missing period (#3754) | documentation |
| include_view_image_tool 設定を削除 (#5976) | hygiene: remove include_view_image_tool config (#5976) | chores |
| macOS での Java 向け Seatbelt ポリシーを更新 (#3987) | fix: update Seatbelt policy for Java on macOS (#3987) | bug-fixes |
| Windows サンドボックスのアルファ版 (#4905) | Windows Sandbox alpha version (#4905) | new-features |
| Windows のスタックサイズを 8 MB に拡大 (#5997) | build: bump Windows stack size to 8 MB (#5997) | chores |
| 前ターンの推論フィルタリングを削除 (#5986) | remove last-turn reasoning filtering (#5986) | chores |
| app-server: API 型を v1 と v2 に分割 (#6005) | app-server: split API types into v1 and v2 (#6005) | chores |
| /exit スラッシュコマンドを quit のエイリアスとして追加 (#6002) | feat: add /exit slash-command alias for quit (#6002) | new-features |
| レート制限エラーが絶対時刻を返すよう修正 (#6000) | rate-limit errors now return absolute time (#6000) | bug-fixes |
| ドキュメント: review_prompt.md の Markdown リスト間隔を修正 (#4144) | docs: fix markdown list spacing in review_prompt.md (#4144) | documentation |
| gpt-5-codex の冗長性設定をオーバーライド (#6007) | override verbosity for gpt-5-codex (#6007) | chores |

## 0.52.0

| 日本語 | English | Category |
|--------|---------|----------|
| TUI 改善: ストリーミング中にキューメッセージを表示、Windows 自動モードガイダンス、undo 操作、圧縮プロンプトの設定可能化 | TUI polish: queued messages visible during streaming; Windows auto-mode guidance; undo op; compaction prompt configurable. | new-features |
| 画像: クライアントサイド画像リサイズ、MIME 検証によるクラッシュ防止、SDK 画像転送テストの再有効化 | Images: client-side image resizing; prevent crashes with MIME verification; SDK image forwarding tests re-enabled. | bug-fixes |
| `!<cmd>` でコマンドを直接実行する機能を追加 | Execute commands directly with `!<cmd>` | new-features |
| クレジット購入による追加利用枠の確保に対応 | Ability to buy credits for more usage. | new-features |
| Auth: キーリングサポートと設定可能なバックエンドを持つ新しい CLI 認証ストレージ抽象化 | Auth: new CLI auth storage abstraction with keyring support and configurable backend. | new-features |
| App server: GetConversationSummary RPC、ID による会話サマリーの取得/再開、アカウント/プロトコル型の洗練 | App server: GetConversationSummary RPC; fetch/resume conversation summaries by id; refined account/protocol types. | new-features |
| 実行/イベント: アイテムストリーミングイベント、ゴーストコミット、非推奨警告の明確化、トークン更新処理とログの改善 | Execution/events: item streaming events; ghost commits; clearer deprecation warnings; better token refresh handling and logs. | new-features |
| 会話管理: 全ツール出力の一元的な切り詰め、前ターンの推論を除外、会話に model_provider を付与 | Conversation management: centralized truncation for all tool outputs; filter out prior-turn reasoning; annotate conversations with model_provider. | new-features |
| HTTP バージョンをログに記録 (#5475) | Log HTTP Version (#5475) | chores |
| ローカルトークナイザーを追加 (#5508) | feat: local tokenizer (#5508) | new-features |
| approve all を削除 (#5503) | chore: drop approve all (#5503) | chores |
| MCP: OAuth でスコープ指定をサポート (#5487) | [MCP] Add support for specifying scopes for MCP oauth (#5487) | new-features |
| spec テストをクリーンアップ (#5517) | chore: clean spec tests (#5517) | chores |
| MCP: レガシー stdio クライアントを rmcp に置き換え (#5529) | [MCP] Remove the legacy stdio client in favor of rmcp (#5529) | chores |
| app-server: アカウント/レート制限更新通知を送信 (#5477) | [app-server] send account/rateLimits/updated notifications (#5477) | new-features |
| unified exec セッション ID テストヘルパーを修正 (#5535) | Fix unified exec session id test helper (#5535) | chores |
| handle_container_exec_with_params をクリーンアップ (#5516) | chore: clean handle_container_exec_with_params (#5516) | chores |
| 承認の問題を修正 (#5525) | fix: approval issue (#5525) | bug-fixes |
| TUI: 集約された出力を表示に反映 (#5539) | tui: show aggregated output in display (#5539) | new-features |
| ターン処理中のキャンセル/中断を処理 (#5543) | Handle cancelling/aborting while processing a turn (#5543) | bug-fixes |
| apply_path のテストを追加 (#5557) | chore: testing on apply_path (#5557) | chores |
| unified_exec の切り詰めに実際のトークナイザーを使用 (#5514) | feat: use actual tokenizer for unified_exec truncation (#5514) | new-features |
| Mac キーヒントに Option 記号を使用 (#5582) | Use Option symbol for mac key hints (#5582) | bug-fixes |
| token_info を ConversationHistory に移動 (#5581) | Moving token_info to ConversationHistory (#5581) | chores |
| MCP: rmcp を 0.8.3 に更新 (#5542) | [MCP] Update rmcp to 0.8.3 (#5542) | chores |
| MCP: タイムアウトと GitHub のスタートアップエラーを改善 (#5595) | [MCP] Improve startup errors for timeouts and github (#5595) | bug-fixes |
| 不安定なテストを修正 (#5625) | fix: flaky tests (#5625) | chores |
| 古いレート制限およびキャッシュ未保持時のメッセージを追加 (#5570) | adding messaging for stale rate limits + when no rate limits are cached (#5570) | new-features |
| リクエストログ付き CodexHttpClient ラッパーを追加 (#5564) | Add CodexHttpClient wrapper with request logging (#5564) | chores |
| app-server: account/read レスポンスアノテーションを修正 (#5642) | [app-server] fix account/read response annotation (#5642) | bug-fixes |
| brew でのアップグレード手順を追加 (#5640) | Add instruction for upgrading codex with brew (#5640) | documentation |
| より多くの種類のリクエスト ID をログに記録 (#5645) | Log more types of request IDs (#5645) | chores |
| サンドボックスポリシー違反コマンドにモデルサマリーとリスク評価を追加 (#5536) | Added model summary and risk assessment for commands that violate sandbox policy (#5536) | new-features |
| MCP: /mcp および mcp get で環境変数の値を秘匿化 (#5648) | [MCP] Redact environment variable values in /mcp and mcp get (#5648) | new-features |
| MCP: mcp add 後のログインゲートを experimental_use_rmcp_client で適切に制御 (#5653) | [MCP] Properly gate login after mcp add with experimental_use_rmcp_client (#5653) | bug-fixes |
| 不安定なユニットテストを修正 (#5654) | Fixed flaky unit test (#5654) | chores |
| フィードバックを改善 (#5661) | Improve feedback (#5661) | new-features |
| フィードバックのフォローアップ改善 (#5663) | Followup feedback (#5663) | new-features |
| 不安定なテストをスキップ (#5680) | Skip flaky test (#5680) | chores |
| プロファイルで sandbox_mode をサポート (#5686) | Added support for sandbox_mode in profiles (#5686) | new-features |
| 数分かかっていたユニットテストの実行時間を短縮 (#5688) | Reduced runtime of unit test that was taking multiple minutes (#5688) | chores |
| MCP: stdio トークンに関するドキュメントの軽微な修正 (#5676) | [MCP] Minor docs clarifications around stdio tokens (#5676) | documentation |
| 実験的モデルに codex-exp プレフィックスを使用し、codex- モデルをプロダクションとして扱う (#5797) | fix: use codex-exp prefix for experimental models and consider codex- models to be production (#5797) | bug-fixes |
| account/read レスポンスアノテーション修正を取り消し (#5796) | fix: revert "[app-server] fix account/read response annotation (#5642)" (#5796) | bug-fixes |
| フィードバックアップロードのリクエスト処理を追加 (#5682) | Add feedback upload request handling (#5682) | new-features |
| セッションタスクのドキュメントを追加 (#5809) | nit: doc on session task (#5809) | chores |
| テストのイールド時間を修正 (#5811) | fix: test yield time (#5811) | chores |
| 不明な enabled/disabled 機能でエラーを返すよう修正 (#5817) | feat: return an error if unknown enabled/disabled feature (#5817) | new-features |
| model_family で verbosity をサポート (#5821) | feat: support verbosity in model_family (#5821) | new-features |
| MCP: ツール呼び出し結果の画像をモデルにレンダリング (#5600) | [MCP] Render MCP tool call result images to the model (#5600) | new-features |
| MCP ツールの content-item を切り詰め (#5835) | Truncate the content-item for mcp tools (#5835) | chores |
| パイプラインを高速化 (#5812) | chore: speed-up pipeline (#5812) | chores |
| 不要なシェル関連コードを削除 (#5848) | chore: drop useless shell stuff (#5848) | chores |
| app-server 統合テストで anyhow::Result を統一使用 (#5836) | chore: use anyhow::Result for all app-server integration tests (#5836) | chores |
| 送信ループを分解 (#5854) | chore: decompose submission loop (#5854) | chores |
| advanced.md を修正 (#5833) | fix advanced.md (#5833) | documentation |
| #5812 のリリースファイルを取り消し (#5887) | revert #5812 release file (#5887) | chores |
| ベータ実験ヘッダーを削除 (#5892) | remove beta experimental header (#5892) | chores |
| Windows パス: PATH の順序を保持し、コア環境変数を含める (#5579) | fix(windows-path): preserve PATH order; include core env vars (#5579) | bug-fixes |
| git クレートを統合 (#5909) | chore: merge git crates (#5909) | chores |
| サンドボックス拒否時にも出力を追加 (#5908) | feat: add output even in sandbox denied (#5908) | new-features |
| 生のレスポンスアイテムのラッパーを追加 (#5923) | Add a wrapper around raw response items (#5923) | chores |
| icu_decimal のバージョンを修正 (#5919) | fix: icu_decimal version (#5919) | bug-fixes |
| 設定エディターを追加 (#5878) | chore: config editor (#5878) | chores |
| レビューを codex インスタンスに委譲 (#5572) | Delegate review to codex instance (#5572) | new-features |
| 実行: MCP ツールの引数と結果を追加 (#5899) | [exec] Add MCP tool arguments and results (#5899) | new-features |
| レビューモードでエージェントメッセージデルタを無視 (#5937) | ignore agent message deltas for the review mode (#5937) | chores |
| asdf (#5940) | asdf (#5940) | chores |
| ロールアウトパス用のデバッグ専用スラッシュコマンドを追加 (#5943) | Add debug-only slash command for rollout path (#5943) | chores |
| ロールアウトパス用のデバッグ専用スラッシュコマンドを追加 (#5936) | Add debug-only slash command for rollout path (#5936) | chores |
| delegate ヘッダーを送信 (#5942) | Send delegate header (#5942) | chores |
| 設定クレートを統合 (#5958) | chore: unify config crates (#5958) | chores |
| codex delegate に初期履歴をオプショナルで渡す (#5950) | Pass initial history as an optional to codex delegate (#5950) | chores |
| rmcp_client をログに記録 (#5978) | nit: log rmcp_client (#5978) | chores |
| フリーフォーム apply_patch のテストを追加 (#5952) | chore: testing on freeform apply_patch (#5952) | chores |

## 0.50.0

| 日本語 | English | Category |
|--------|---------|----------|
| /feedback を改善し、より良い診断情報を取得可能に (#5661, #5663) | Improved /feedback to get better diagnostics (#5661, #5663). | new-features |
| サンドボックスポリシー違反コマンドにモデルサマリーとリスク評価を追加 (#5536) | Added model summary and risk assessment for commands that violate sandbox policy (#5536) | new-features |
| MCP: rmcp を 0.8.3 に更新 (#5542) | [MCP] Update rmcp to 0.8.3 (#5542) | chores |
| リクエストログ付き CodexHttpClient ラッパーを追加 (#5564) | Add CodexHttpClient wrapper with request logging (#5564) | chores |
| 古いレート制限およびキャッシュ未保持時のメッセージを追加 (#5570) | adding messaging for stale rate limits + when no rate limits are cached (#5570) | new-features |
| codex/event/raw_item イベントを導入 (#5578) | [codex][app-server] introduce codex/event/raw_item events (#5578) | new-features |
| token_info を ConversationHistory に移動 (#5581) | Moving token_info to ConversationHistory (#5581) | chores |
| Mac キーヒントに Option 記号を使用 (#5582) | Use Option symbol for mac key hints (#5582) | bug-fixes |
| MCP: タイムアウトと GitHub のスタートアップエラーを改善 (#5595) | [MCP] Improve startup errors for timeouts and github (#5595) | bug-fixes |
| 不安定なテストを修正 (#5625) | fix: flaky tests (#5625) | chores |
| brew でのアップグレード手順を追加 (#5640) | Add instruction for upgrading codex with brew (#5640) | documentation |
| app-server: account/read レスポンスアノテーションを修正 (#5642) | [app-server] fix account/read response annotation (#5642) | bug-fixes |
| より多くの種類のリクエスト ID をログに記録 (#5645) | Log more types of request IDs (#5645) | chores |
| MCP: /mcp および mcp get で環境変数の値を秘匿化 (#5648) | [MCP] Redact environment variable values in /mcp and mcp get (#5648) | new-features |
| MCP: mcp add 後のログインゲートを適切に制御 (#5653) | [MCP] Properly gate login after mcp add with experimental_use_rmcp_client (#5653) | bug-fixes |
| 不安定なユニットテストを修正 (#5654) | Fixed flaky unit test (#5654) | chores |
| 不安定なテストをスキップ (#5680) | Skip flaky test (#5680) | chores |

## 0.49.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.48.0

| 日本語 | English | Category |
|--------|---------|----------|
| `--add-dir` で追加の作業ディレクトリを指定可能に | `--add-dir` to add an additional working directory. | new-features |
| MCP の多数の改善: stdio サーバーが公式 Rust MCP SDK ベースの新クライアントに移行、cwd 指定対応、全サーバーで enabled_tools/disabled_tools 設定可能、Streamable HTTP で scopes 指定対応、スタートアップエラーメッセージの改善、ツール呼び出しの指示遵守の向上 | Many MCP improvements: stdio servers use new official Rust MCP SDK client; stdio cwd support; enabled_tools/disabled_tools for all servers; scopes for streamable HTTP; improved startup errors; better tool instruction following. | new-features |
| `forced_login_method` と `forced_chatgpt_workspace_id` の設定オプションを追加し、マネージド設定でエンタープライズの Codex 利用を制御可能に | Configuration options for forced_login_method and forced_chatgpt_workspace_id for enterprise control via managed configs. | new-features |
| エージェントの正常な中断をサポート (#5287) | Support graceful agent interruption (#5287) | new-features |
| nix ビルドを修正 (#4048) | Fix nix build (#4048) | bug-fixes |
| MCP: 完全な MCP エラーをモデルにレンダリング (#5298) | [MCP] Render full MCP errors to the model (#5298) | bug-fixes |
| MCP サーバー設定セクションへのリンクを修正 (#5301) | Fix link to MCP Servers config section (#5301) | documentation |
| MCP: 認証の有効期限切れ時にユーザーに再ログインを促す (#5300) | [MCP] When MCP auth expires, prompt the user to log in again (#5300) | new-features |
| レート制限リセット処理をタイムスタンプに切り替え (#5304) | fix: switch rate limit reset handling to timestamps (#5304) | bug-fixes |
| ワイド文字削除時の diff_buffers clear-to-end を修正 (#4921) | fix: diff_buffers clear-to-end when deleting wide graphemes (#4921) | bug-fixes |
| ドキュメント(changelog): インストールコマンドを @openai/codex@<version> に更新 (#2073) | docs(changelog): update install command to @openai/codex@<version> (#2073) | documentation |
| セッション再開 ID が見つからない場合の処理を改善 (#5329) | fix: handle missing resume session id gracefully (#5329) | bug-fixes |
| カスタムプロンプトのドキュメントを改善し、プロンプト説明を実際に使用するよう修正 (#5332) | fix: improve custom prompt documentation and actually use prompt descriptions (#5332) | bug-fixes |
| rust analyzer のターゲットディレクトリを移動 (#5328) | Move rust analyzer target dir (#5328) | chores |
| 独立した TurnContexts を作成 (#5308) | Create independent TurnContexts (#5308) | chores |
| ドキュメント: AGENTS.md ディスカバリーガイドを追加 (#5353) | docs: add AGENTS.md discovery guide (#5353) | documentation |
| ドキュメント: 全体的なドキュメントを改善 (#5354) | docs: improve overall documentation (#5354) | documentation |
| config.md ドキュメントの不正確な箇所を修正 (#5355) | fix: config.md docs inaccuracies (#5355) | documentation |
| codex -h の CLI 使用順序を更新 (#5356) | fix: update CLI usage order for codex -h (#5356) | documentation |
| ドキュメント: サンドボックスのデフォルト値を統一し、セクション重複を削除、入門ガイドを改善 (#5357) | docs: align sandbox defaults, dedupe sections and improve getting started guide (#5357) | documentation |
| 実験的な `codex stdio-to-uds` サブコマンドを追加 (#5350) | feat: experimental `codex stdio-to-uds` subcommand (#5350) | new-features |
| 承認の統合テストカバレッジを拡大 (#5358) | Expand approvals integration coverage (#5358) | chores |
| Codex TypeScript SDK に画像サポートを追加 (#5281) | feat: add images support to the Codex Typescript SDK (#5281) | new-features |
| TUI コマンドヘッダーから zsh -lc ラッパーを除去 (#5374) | Strip zsh -lc wrapper from TUI command headers (#5374) | bug-fixes |
| Homebrew インストール手順を cask 使用に更新 (#5377) | Update Homebrew install instructions to use cask (#5377) | documentation |
| exec でプランツールを常に有効化 (#5380) | Always enable plan tool in exec (#5380) | new-features |
| 約90%で自動圧縮 (#5292) | Auto compact at ~90% (#5292) | new-features |
| app-server プロトコルの JSON スキーマを生成 (#5063) | Generate JSON schema for app-server protocol (#5063) | new-features |
| レート制限の reset_at に整数タイムスタンプを使用 (#5383) | Use int timestamps for rate limit reset_at (#5383) | bug-fixes |
| ツール実行ワークフローを再設計 (#5278) | chore: rework tools execution workflow (#5278) | chores |
| UserInputItem の ItemStarted/ItemCompleted イベントを追加 (#5306) | Add ItemStarted/ItemCompleted events for UserInputItem (#5306) | new-features |
| TUI: 引用レンダリングを削除 (#4855) | tui: drop citation rendering (#4855) | chores |
| app-server: レート制限読み取り API (#5302) | [app-server] read rate limits API (#5302) | new-features |
| オンボーディングと更新バナーで発生する端末の破損を修正 (#5269) | fix terminal corruption that could happen when onboarding and update banner (#5269) | bug-fixes |
| テスト用シンボルサイズを削減 (#5389) | Reduce symbol size for tests (#5389) | chores |
| ドキュメント: 上級ガイドの詳細を更新 (#5395) | docs: update advanced guide details (#5395) | documentation |
| ドキュメント: responses プロキシのメタデータを明確化 (#5406) | docs: clarify responses proxy metadata (#5406) | documentation |
| `zsh -lc` を `bash -lc` と同様に扱う (#5411) | Treat `zsh -lc` like `bash -lc` (#5411) | bug-fixes |
| ドキュメント: プロンプトメタデータの動作を明確化 (#5403) | docs: clarify prompt metadata behavior (#5403) | documentation |
| ドキュメント: 古いコントリビューション参照を削除 (#5400) | docs: remove stale contribution reference (#5400) | documentation |
| ドキュメント: exec json イベントを文書化 (#5399) | docs: document exec json events (#5399) | documentation |
| ドキュメント: 入門ガイドの動作を修正 (#5407) | docs: correct getting-started behaviors (#5407) | documentation |
| CI: より大きなランナーを使用して macOS ビルドを高速化 (#5234) | chore(ci): Speed up macOS builds by using larger runner (#5234) | chores |
| 通知ペイロードに cwd を含める (#5415) | feat: include cwd in notify payload (#5415) | new-features |
| TUI: WSL の手順を更新 (#5307) | fix(tui): Update WSL instructions (#5307) | documentation |
| MCP: rmcp を 0.8.2 にアップグレード (#5423) | [MCP] Bump rmcp to 0.8.2 (#5423) | chores |
| sub_id の代わりに TurnContext を渡す (#5421) | Pass TurnContext around instead of sub_id (#5421) | chores |
| 不安定な認証テストを修正 (#5461) | Fix flaky auth tests (#5461) | chores |
| 環境変数フラグを削除 (#5462) | chore: drop env var flag (#5462) | chores |
| プランツールをデフォルトで有効化 (#5384) | Enable plan tool by default (#5384) | new-features |
| unified_exec 用イベントを出力 (#5448) | feat: emit events for unified_exec (#5448) | new-features |
| 省略行が0の場合の UI 問題を修正 (#5451) | fix: fix UI issue when 0 omitted lines (#5451) | bug-fixes |
| app-server: model/list API (#5382) | [app-server] model/list API (#5382) | new-features |
| セッション再開の初期メッセージのベースラインテストを追加 (#5466) | Add a baseline test for resume initial messages (#5466) | chores |
| app-server 用 OpenTelemetry を初期化 (#5469) | [otel] init otel for app-server (#5469) | new-features |
| モデルプロバイダー定義に experimental_bearer_token オプションを追加 (#5467) | feat: add experimental_bearer_token option to model provider definition (#5467) | new-features |
| HTTP バージョンをログに記録 (#5475) | Log HTTP Version (#5475) | chores |
| Ctrl+C でクリアしたテキストを履歴に追加し、上矢印で復元可能に (#5470) | feat: add text cleared with ctrl+c to the history so it can be recovered with up arrow (#5470) | new-features |
| ドキュメント: brew コマンドに `--cask` オプションを追加 (#5432) | docs: Add `--cask` option to brew command to suggest (#5432) | documentation |
| unified_exec を整理 (#5442) | chore: align unified_exec (#5442) | chores |
| ローカルトークナイザーを追加 (#5508) | feat: local tokenizer (#5508) | new-features |
| approve all を削除 (#5503) | chore: drop approve all (#5503) | chores |
| 新しいスレッドアイテムを追加し、イベント解析を再配線 (#5418) | Add new thread items and rewire event parsing to use them (#5418) | new-features |
| spec テストをクリーンアップ (#5517) | chore: clean spec tests (#5517) | chores |
| ドキュメント: エージェントフォールバック例を修正 (#5396) | docs: fix agents fallback example (#5396) | documentation |
| ターン入力変更機能を ConversationHistory に移動 (#5473) | Move changing turn input functionalities to ConversationHistory (#5473) | chores |
| app-server: アカウント/レート制限更新通知を送信 (#5477) | [app-server] send account/rateLimits/updated notifications (#5477) | new-features |
| IME 入力時に先頭の数字が欠落する問題を修正 (#4359) | Fix IME submissions dropping leading digits (#4359) | bug-fixes |
| app-server: 新しいアカウントメソッド API スタブを追加 (#5527) | [app-server] add new account method API stubs (#5527) | new-features |
| handle_container_exec_with_params をクリーンアップ (#5516) | chore: clean handle_container_exec_with_params (#5516) | chores |
| 承認の問題を修正 (#5525) | fix: approval issue (#5525) | bug-fixes |
| TUI: 集約された出力を表示に反映 (#5539) | tui: show aggregated output in display (#5539) | new-features |
| ターン処理中のキャンセル/中断を処理 (#5543) | Handle cancelling/aborting while processing a turn (#5543) | bug-fixes |
| apply_path のテストを追加 (#5557) | chore: testing on apply_path (#5557) | chores |
| unified_exec の切り詰めに実際のトークナイザーを使用 (#5514) | feat: use actual tokenizer for unified_exec truncation (#5514) | new-features |
| gitignore された CODEX_HOME のセッション再開検索を修正 (#5311) | fix: resume lookup for gitignored CODEX_HOME (#5311) | bug-fixes |
| unified exec の終了イベントを追加 (#5551) | feat: end events on unified exec (#5551) | new-features |

## 0.47.0

| 日本語 | English | Category |
|--------|---------|----------|
| Codex CLI の改善とバグ修正 | Improvements and bug-fixes in Codex CLI | new-features |
| macOS バイナリのコード署名 | Code signing binaries on MacOS | new-features |
| 自動更新バナー | Auto update banner | new-features |
| 「フルアクセス」モード有効化時の警告を追加 | Warning when enabling "full access" mode | new-features |
| read_file にインデントモードを追加 (#4887) | Indentation mode for read_file (#4887) | new-features |
| ストリーム再開成功時のメッセージを表示 (#4988) | Message when stream get correctly resumed (#4988) | new-features |
| CapsLock 有効時もショートカットが動作するよう修正 (#5049) | Make shortcut works even with capslock (#5049) | bug-fixes |
| スラッシュで始まるプロンプトを破棄 (#5048) | Discard prompt starting with a slash (#5048) | bug-fixes |
| タスク種別のヘッダーを追加 (#5142) | Add header for task kind (#5142) | new-features |
| notifier メタデータに codex スレッド ID を渡す (#4582) | Pass codex thread ID in notifier metadata (#4582) | new-features |
| GitHub issue テンプレートを更新 (#5191) | Updated github issue template (#5191) | chores |
| エージェントオーバーライドファイル (#5215) | Agent override file (#5215) | new-features |
| OAuth 対応の streamable HTTP サーバー追加時に MCP ログインを促す (#5193) | Prompt mcp login when adding a streamable HTTP server that supports oauth (#5193) | new-features |
| ExecApprovalRequestEvent にパース済みコマンドを追加 (#5222) | Add parsed command to ExecApprovalRequestEvent (#5222) | new-features |
| high effort 使用時のレート制限警告を追加 (#5035) | Add warning about rate limit when using high effort (#5035) | new-features |
| ParsedCommand::Read バリアントに path フィールドを追加 (#5275) | Add path field to ParsedCommand::Read variant (#5275) | new-features |
| 拒否時の UX を改善 (#5260) | Better UX during refusal (#5260) | new-features |
| unified_exec バッファの遅延出力を修正 (#4992) | Lagged output in unified_exec buffer (#4992) | bug-fixes |
| サンドボックス拒否エラーのログを追加 (#4874) | Sandbox denied error logs (#4874) | new-features |
| ユーザー承認決定時の折り返しを修正 (#5008) | Fix wrapping in user approval decisions (#5008) | bug-fixes |
| trust_directory の折り返しを修正 (#5007) | Fix wrapping in trust_directory (#5007) | bug-fixes |
| /diff モードで長い行を折り返し (#4891) | /diff mode wraps long lines (#4891) | new-features |
| Unicode NBSP 以降で alt+bksp 時のクラッシュを修正 (#5016) | Fix crash when alt+bksp past unicode nbsp (#5016) | bug-fixes |
| テキストエリアのプレースホルダーに画像名を含める (#5056) | Include the image name in the textarea placeholder (#5056) | new-features |
| Bun インストールを CLI 更新バナーで検出 (#5074) | Detect Bun installs in CLI update banner (#5074) | new-features |
| codex exec 用の危険な自動承認を追加 (#5043) | Add dangerous auto-approval for codex exec (#5043) | new-features |
| TUI を sandbox_workspace_write に更新 (#3341) | Update tui to sandbox_workspace_write (#3341) | chores |
| Codex クラウド実行 (#5060) | Codex cloud exec (#5060) | new-features |

## 0.46.0

| 日本語 | English | Category |
|--------|---------|----------|
| MCP サポートの改善: streamable HTTP サーバー対応（ベアラートークン / OAuth ログインのオプション付き）、experimental_use_rmcp_client フラグの導入 | Improved MCP support: streamable HTTP servers with optional bearer token or OAuth login; experimental_use_rmcp_client flag. | new-features |
| Bearer トークン認証ヘッダーを修正 (#4846) | [MCP] Fix the bearer token authorization header (#4846) | bug-fixes |
| codex resume 後に終了する際に再開メモを表示 (#4695) | Print codex resume note when quitting after codex resume (#4695) | new-features |
| TokenCountEvent で BigInt の代わりに Number を使用 (#4856) | Use Number instead of BigInt for TokenCountEvent (#4856) | chores |
| リクエストボディのアサーションを簡素化 (#4845) | Simplify request body assertions (#4845) | chores |
| zsh 補完を修正 (#4692) | Fix zsh completion (#4692) | bug-fixes |
| Cloud Tasks: ワークスペース依存関係を使用 (#4693) | [Cloud Tasks] Use workspace deps (#4693) | chores |
| parallel を簡素化 (#4829) | Simplify parallel (#4829) | chores |
| TUI: 下部パディングを削除 (#4854) | [TUI] Remove bottom padding (#4854) | chores |
| 差分表示で行番号の幅を動的に調整 (#4664) | [TUI] Dynamic width for line numbers in diffs (#4664) | new-features |
| TUI: 折り返しのバグを修正 (#4674) | [TUI] Wrapping bugfix (#4674) | bug-fixes |
| 不安定なテストを修正 (#4878) | Fix flaky test (#4878) | chores |
| `list_dir` ツールを追加 (#4817) | `list_dir` tool (#4817) | new-features |
| TUI: トゥルーカラー端末でブリージングスピナーを表示 (#4853) | [TUI] Breathing spinner on true-color terms (#4853) | new-features |
| TUI: /review の命令ハックを削除 (#4896) | [TUI] Remove instruction hack for /review (#4896) | chores |
| Codex SDK TypeScript のオリジネーターを設定 (#4894) | Set codex SDK TypeScript originator (#4894) | chores |
| TUI: トランスクリプトを表示モードに近づける (#4848) | [TUI] Bring the transcript closer to display mode (#4848) | new-features |
| TUI: tree-sitter-highlight による bash ハイライトに切り替え (#4666) | [TUI] Switch to tree-sitter-highlight bash highlighting (#4666) | new-features |
| experimental プレフィックスを削除 (#4907) | remove experimental prefix (#4907) | chores |
| `grep_files` ツールを追加 (#4820) | grep_files as a tool (#4820) | new-features |
| CLI UP/ENTER 操作を追加 (#4944) | CLI UP/ENTER (#4944) | new-features |
| log_sse_event() がクロージャを取らないよう変更 (#4953) | change log_sse_event() so it no longer takes a closure (#4953) | chores |
| 圧縮時に切り詰め (#4942) | truncate on compact (#4942) | new-features |
| タブ文字表示時のトランスクリプトモードのレンダリング問題を修正 (#4911) | Fix transcript mode rendering issue when showing tab chars (#4911) | bug-fixes |
| TUI: xterm パレットをハードコードし、シマーを前景と背景でブレンド (#4957) | [TUI] hardcode xterm palette, shimmer blends between fg and bg (#4957) | new-features |
| コンテキスト行を常時表示に変更 (#4699) | Make context line permanent (#4699) | new-features |
| TUI: terminal_palette の off-by-16 を修正 (#4967) | [TUI] fix off-by-16 in terminal_palette (#4967) | bug-fixes |
| エイリアスを作成 (#4971) | Create alias (#4971) | new-features |
| チャット名を設定 (#4974) | Set chat name (#4974) | new-features |
| /name を一旦取り消し (#4978) | revert /name for now (#4978) | chores |

## 0.45.0

| 日本語 | English | Category |
|--------|---------|----------|
| ⚠️ `codex login --api-key` を `codex login --with-api-key` に変更し、stdin からキーを読み取るようにしてセキュリティを向上 | ⚠️ codex login --api-key was replaced with codex login --with-api-key that reads the key from stdin to improve security. | new-features |
| OAuth MCP サーバー認証の実験的サポートを追加 (#4517) | Experimental support for OAuth MCP server authentication (#4517) | new-features |
| `codex exec` で最終メッセージのみを stdout に出力 (#4644) | Only write the final message to stdout for codex exec (#4644) | new-features |
| Windows ユーザーでデフォルトモデル未設定時に gpt-5 をデフォルトに (#4676) | Default to gpt-5 for Windows users who have not set a default model (#4676) | new-features |
| OAuth 不要の streamable HTTP MCP サーバーで experimental_use_rmcp_client を不要に (#4689) | Remove the requirement to use experimental_use_rmcp_client for streamable HTTP MCP servers that don't require OAuth (#4689) | new-features |
| システムテーマ更新後に端末を再フォーカスした際の色を修正 (#4673) | Fix colors when refocusing the terminal after a system theme update (#4673) | bug-fixes |
| reasoning effort のタイトルを修正 (#4694) | Fix reasoning effort title (#4694) | bug-fixes |
| デバイスコードログインのコピーを更新 (#4616) | Updated device code login copy (#4616) | chores |
| コンテキストウィンドウを過剰使用するコマンド出力切り詰めを修正 (#4706) | Fix command output truncation that sometimes used too much of the context window (#4706) | bug-fixes |
| 並列ツール呼び出しの初期サポート (#4663) | Initial parallel tool call support (#4663) | new-features |
| パルスドットのローディング状態を追加 (#4736) | Pulsing dot loading state (#4736) | new-features |

## 0.44.0

| 日本語 | English | Category |
|--------|---------|----------|
| UI リフレッシュ！チャットコンポーザー、ボトムペイン、モデルピッカー、アップグレードナッジを更新 (#4240, #4316, #4178, #4405) | New UI refresh! Updated chat composer, bottom pane, model picker, and upgrade nudge (#4240, #4316, #4178, #4405) | new-features |
| カスタムプロンプトが名前付き引数と位置引数をサポート (#4474, #4470) | Custom prompts now support named & positional arguments (#4474, #4470) | new-features |
| streamable HTTP MCP サーバーのサポートを追加 (#4317) | Add support for streamable HTTP MCP servers (#4317) | new-features |
| (実験的) Windows で読み取り専用コマンドの繰り返し承認を削減 (#4269) | (experimental) Reduce repetitive approval for read-only commands on Windows (#4269) | new-features |
| (非常に実験的) `codex cloud` でクラウドタスクを管理 (#3197) | (very experimental) Manage cloud tasks with `codex cloud` (#3197) | new-features |
| Esc でモデルエフォートピッカーを閉じる (#4642) | Nit: Pop model effort picker on esc (#4642) | chores |
| gpt-5-codex をリストの先頭に移動 (#4641) | Move gpt-5-codex to top (#4641) | chores |
| スラッシュコマンドでの tab+enter のリグレッションを修正 (#4639) | Fix tab+enter regression on slash commands (#4639) | bug-fixes |
| ファジー検索レスポンスにファイル名を追加 (#4619) | feat: add file name to fuzzy search response (#4619) | new-features |
| TUI: • Working 表示、100% コンテキスト時にディム表示 (#4629) | tui: • Working, 100% context dim (#4629) | new-features |
| codex exec で supports_color を使用 (#4633) | Use supports_color in codex exec (#4633) | bug-fixes |
| codex ワークフローを有効化 (#4636) | Enable codex workflows (#4636) | chores |
| issue-deduplicator.yml を更新 (#4638) | Update issue-deduplicator.yml (#4638) | chores |
| サーバー情報にポートに加えて PID を書き込む (#4571) | feat: write pid in addition to port to server info (#4571) | new-features |
| Deduplicator の修正 (#4635) | Deduplicator fixes (#4635) | chores |
| エージェントメッセージ中の誤った「タスク完了」状態を修正 (#4627) | fix false "task complete" state during agent message (#4627) | bug-fixes |
| actions の codex バージョンを最新に更新 (#4634) | Bump codex version in actions to latest (#4634) | chores |
| assistant message を agent message にリネームし、item type フィールドの命名を修正 (#4610) | Rename assistant message to agent message and fix item type field naming (#4610) | chores |
| GH CLI を使用して現在の issue を取得 (#4630) | Use GH cli to fetch current issue (#4630) | chores |
| TUI: ダイアログ表示の調整 (#4622) | tui: tweaks to dialog display (#4622) | new-features |
| issue deduplicator ワークフローを追加 (#4628) | Add issue deduplicator workflow (#4628) | chores |
| codex exec 出力の軽微なクリーンアップ (#4585) | Minor cleanup of codex exec output (#4585) | chores |
| "chore: sandbox extraction" を取り消し (#4626) | Revert "chore: sandbox extraction" (#4626) | chores |
| issue labeler ワークフローを追加 (#4621) | Add issue labeler workflow (#4621) | chores |
| 別途 exec ドキュメントを追加 (#4583) | Add a separate exec doc (#4583) | documentation |
| インタラクティブと非インタラクティブのセッションを分離 (#4612) | Separate interactive and non-interactive sessions (#4612) | new-features |
| モデルが画像を閲覧した際に "Viewed Image" を表示 (#4475) | show "Viewed Image" when the model views an image (#4475) | new-features |
| キーヒントを正規化 (#4586) | normalize key hints (#4586) | chores |
| ステータス使用率を修正 (#4584) | Fix status usage ratio (#4584) | bug-fixes |
| MCP ツールの additionalProperties での JSON Schema 処理を修正 (#4454) | fix: handle JSON Schema in additionalProperties for MCP tools (#4454) | bug-fixes |
| codex exec で CODEX_API_KEY をサポート (#4615) | Support CODEX_API_KEY for codex exec (#4615) | new-features |
| gpt-5-codex のプロンプトでフェンスドコードブロックの info タグ使用を明示化 (#4569) | fix: update the gpt-5-codex prompt to be more explicit that it should always use fenced code blocks info tags (#4569) | bug-fixes |
| 設定をターンではなくスレッドに保存 (#4579) | Store settings on the thread instead of turn (#4579) | chores |
| エラーメッセージにリクエスト ID を含める (#4572) | Include request ID in the error message (#4572) | new-features |
| Windows で Agents.md パスの表示を正規化 (#4577) | canonicalize display of Agents.md paths on Windows (#4577) | bug-fixes |
| パッチ/exec 承認 UI を再設計 (#4573) | rework patch/exec approval UI (#4573) | new-features |
| SDK に初期ドキュメントコメントを追加 (#4513) | Add initial set of doc comments to the SDK (#4513) | documentation |
| "chore: prompt update to enforce good usage of apply_patch" を取り消し (#4576) | Revert "chore: prompt update to enforce good usage of apply_patch" (#4576) | chores |
| 明示的な Node インポートに変更 (#4567) | Explicit node imports (#4567) | chores |
| 2回目の OAuth ログイン試行時のハングを修正 (#4568) | Fix hang on second oauth login attempt (#4568) | bug-fixes |
| 生成された TS の RequestId で `bigint` の代わりに `number` を使用 (#4575) | fix: use `number` instead of `bigint` for the generated TS for RequestId (#4575) | bug-fixes |
| ctrl-n ヒントを修正 (#4566) | fix ctr-n hint (#4566) | bug-fixes |
| --emergency-version-override オプションを追加 (#4556) | feat: add --emergency-version-override option to create_github_release script (#4556) | new-features |
| SDK: 作業ディレクトリと skipGitRepoCheck オプションをサポート (#4563) | SDK: support working directory and skipGitRepoCheck options (#4563) | new-features |
| AGENTS.md が利用できない場合に設定済み命令ファイルにフォールバック (#4544) | Fall back to configured instruction files if AGENTS.md isn't available (#4544) | new-features |
| タスク実行中にコンテキストウィンドウ使用量を表示 (#4536) | Show context window usage while tasks run (#4536) | new-features |
| 出力のないコマンドにプレースホルダーを表示 (#4509) | Show placeholder for commands with no output (#4509) | new-features |
| resume ピッカーに更新日時を追加 (#4468) | Add Updated at time in resume picker (#4468) | new-features |
| 末尾のバックスラッシュを適切に処理 (#4559) | Handle trailing backslash properly (#4559) | bug-fixes |
| pnpm/action-setup@v4 を actions/setup-node@v5 の前に実行するよう修正 (#4555) | fix: pnpm/action-setup@v4 should run before actions/setup-node@v5 (#4555) | chores |
| @openai/codex-sdk のパブリッシュロジックを導入 (#4543) | chore: introduce publishing logic for @openai/codex-sdk (#4543) | chores |
| サンドボックス抽出 (#4286) | chore: sandbox extraction (#4286) | chores |
| ステージングおよび本番環境のコールバック URL を修正 (#4533) | Fix Callback URL for staging and prod environments (#4533) | bug-fixes |
| app server プロトコルから mcp-types を削除 (#4537) | fix: remove mcp-types from app server protocol (#4537) | chores |
| SDK に実行可能ファイル検出を追加し、Codex をエクスポート (#4532) | Add executable detection and export Codex from the SDK (#4532) | new-features |
| リクエスト/レスポンスの対称性をマクロで保証 (#4529) | fix: use macros to ensure request/response symmetry (#4529) | chores |
| レガシーな codex exec --json フォーマットを削除 (#4525) | Remove legacy codex exec --json format (#4525) | chores |
| レンダリング時に Markdown を折り返し (#4506) | wrap markdown at render time (#4506) | new-features |
| codex proto を削除 (#4520) | Delete codex proto (#4520) | chores |
| リリースビルドでプロセスハードニングを有効化 (#4521) | fix: enable process hardening in Codex CLI for release builds (#4521) | new-features |
| TypeScript エクスポートをクリーンアップ (#4518) | fix: clean up TypeScript exports (#4518) | chores |
| ClientRequest の全バリアントに params フィールドを保証 (#4512) | fix: ensure every variant of ClientRequest has a params field (#4512) | bug-fixes |
| Web 検索アイテムを接続 (#4511) | Wire up web search item (#4511) | new-features |
| SDK: スレッドを追加パラメータで継続できることをテスト (#4508) | [SDK] Test that a thread can be continued with extra params (#4508) | chores |
| apply_patch の適切な使用を促すプロンプト更新 (#3846) | chore: prompt update to enforce good usage of apply_patch (#3846) | chores |
| SDK でモデルとサンドボックスモードをサポート (#4503) | Support model and sandbox mode in the sdk (#4503) | new-features |
| `codex mcp` を `codex mcp-server` と `codex app-server` に分離 (#4471) | fix: separate codex mcp into codex mcp-server and codex app-server (#4471) | new-features |
| MCP ドキュメントで実験的 RMCP クライアントを参照するよう更新 (#4422) | Update MCP docs to reference experimental RMCP client (#4422) | documentation |
| PR スタイルレビューを先頭に移動 (#4486) | Move PR-style review to top (#4486) | chores |
| SDK CI (#4483) | SDK CI (#4483) | chores |
| codex exec のオリジネーターを設定 (#4485) | Set originator for codex exec (#4485) | chores |
| codex exec で conversation を thread にリネーム (#4482) | Rename conversation to thread in codex exec (#4482) | chores |
| codex exec に MCP ツール呼び出しアイテムを追加 (#4481) | Add MCP tool call item to codex exec (#4481) | new-features |
| SDK に型とベーシックテストを追加 (#4472) | Add some types and a basic test to the SDK (#4472) | chores |
| デバイス認証をサポート (#3531) | Support device auth (#3531) | new-features |
| turn.failed を追加し、session created を thread started にリネーム (#4478) | Add turn.failed and rename session created to thread started (#4478) | new-features |
| カスタムプロンプトを `/prompts:` で開始 (#4476) | Custom prompts begin with /prompts: (#4476) | new-features |
| 修正 (#4458) | Fixes (#4458) | bug-fixes |
| "? for shortcuts" を復活 (#4364) | reintroduce "? for shortcuts" (#4364) | new-features |
| /command や @file ポップアップの背景を削除 (#4469) | no background for /command or @file popup (#4469) | new-features |
| • をディム表示に変更 (#4467) | render • as dim (#4467) | chores |
| ロールアウトデータに tail を追加 (#4461) | [Core]: add tail in the rollout data (#4461) | chores |
| TypeScript SDK のスキャフォールド (#4455) | TypeScript SDK scaffold (#4455) | new-features |
| カスタムプロンプトのフロントマターをパース (#4456) | Parse out frontmatter for custom prompts (#4456) | new-features |
| MCP サーバー: ファジーファイル検索を公開 (#2677) | [mcp-server] Expose fuzzy file search in MCP (#2677) | new-features |
| OpenTelemetry イベント (#2103) | OpenTelemetry events (#2103) | new-features |
| 行末での clear-to-end 出力を修正 (#4447) | fix clear-to-end being emitted at the end of a row (#4447) | bug-fixes |
| iTerm でハイライトテキストをコピーする際のピリオドを削除 (#4419) | Remove period when copying highlighted text in iTerm (#4419) | bug-fixes |
| codex-responses-api-proxy の npm モジュールを導入 (#4417) | feat: introduce npm module for codex-responses-api-proxy (#4417) | new-features |
| /review をメインコマンドに追加 (#4416) | Add /review to main commands (#4416) | new-features |
| CI ワークフローの軽微な問題をクリーンアップ (#4408) | fix: clean up some minor issues with .github/workflows/ci.yml (#4408) | chores |
| codex-responses-api-proxy を全プラットフォーム向けにビルド (#4406) | feat: build codex-responses-api-proxy for all platforms as part of the GitHub Release (#4406) | new-features |
| responses-api-proxy をマルチツールから削除 (#4404) | chore: remove responses-api-proxy from the multitool (#4404) | chores |
| MCP スタートアップのログレベルを error から info に変更 (#4412) | chore: lower logging level from error to info for MCP startup (#4412) | chores |
| pre_main_hardening() ユーティリティを専用クレートに移動 (#4403) | chore: move pre_main_hardening() utility into its own crate (#4403) | chores |
| モデルアップグレードポップアップを削除 (#4332) | chore: remove model upgrade popup (#4332) | chores |
| TUI: ? を再び動作するよう修正 (#4362) | fix(tui): make ? work again (#4362) | bug-fixes |
| プロキシのデフォルト 30 秒タイムアウトを削除 (#4336) | fix: remove default timeout of 30s in the proxy (#4336) | bug-fixes |
| ショートカットの間隔を編集 (#4330) | Edit the spacing in shortcuts (#4330) | chores |
| TUI: 最後のエージェントメッセージの上にセパレーターを追加 (#4324) | tui: separator above final agent message (#4324) | new-features |
| gpt-5-codex の中プリセット推論を設定 (#4335) | fix: set gpt-5-codex medium preset reasoning (#4335) | bug-fixes |
| codex-rs 配下の README を更新 (#4333) | docs: refresh README under codex-rs (#4333) | documentation |
| ターン開始/完了イベントを追加し、エラー時の終了コードを修正 (#4309) | Add turn started/completed events and correct exit code on error (#4309) | new-features |
| AskForApproval::Never で危険なコマンドを拒否 (#4307) | reject dangerous commands for AskForApproval::Never (#4307) | new-features |

## 0.42.0

| 日本語 | English | Category |
|--------|---------|----------|
| 実験的な Rust SDK ベースの MCP クライアントを導入 (#4252) | Experimental Rust SDK–based MCP client introduced (#4252) | new-features |
| レスポンス処理とプロキシを簡素化・安全化する `responses-api-proxy` コンポーネントを追加 (#4246) | New responses-api-proxy component to simplify and secure response handling/proxying (#4246) | new-features |
| プロセス可視性を制限するセキュアモード `CODEX_SECURE_MODE=1` を追加 (#4220) | Added secure mode: CODEX_SECURE_MODE=1 to restrict process observability (#4220) | new-features |
| `codex exec` イベントの明示化: item.started と出力表示の改善 (#4177, #4250, #4113) | More explicit codex exec events, including item.started and improved output display (#4177, #4250, #4113) | new-features |
| より安全なコマンド実行: コアでの危険コマンドチェックと Windows 固有の安全性 (#4211, #4119) | Safer command execution: dangerous command checks in core and Windows-specific safety (#4211, #4119) | new-features |
| UX 改善: /status 刷新、ページレスセッション一覧、承認を ListSelectionView に移行、MCP ツール呼び出しスタイル改善、ストリーミング中のステータスインジケーター非表示 (#3194, #4275, #3871, #4101, #4196) | UX improvements: revamped /status, pageless session list, approvals in ListSelectionView, better MCP tool call styling, hiding status indicator during streaming (#3194, #4275, #3871, #4101, #4196) | new-features |
| 安定性と正確性: 圧縮時のトークン使用量修正、SSE マウントの信頼性向上、前の会話編集時のバグ修正 (#4281, #4264, #4237) | Stability and correctness: token usage fix for compaction, SSE mounting reliability, improving bugs on editing previous conversations (#4281, #4264, #4237) | bug-fixes |
| IDE 拡張: `.codex` ディレクトリ未存在時の API キーログインを修正 (#4258) | IDE extension: fix login with API key when .codex directory is missing (#4258) | bug-fixes |
| 内部クリーンアップとリファクタリング: 状態、フッターロジック、未使用コードの整理 (#4174, #4259, #4310) | Internal cleanup and refactors for state, footer logic, and unused code (#4174, #4259, #4310) | chores |
| /status のフォローアップ (#4304) | /status followup (#4304) | chores |
| todo-list ツールサポートを追加 (#4255) | Add todo-list tool support (#4255) | new-features |
| 状態リファクタリング Part 2 (#4229) | ref: state - 2 (#4229) | chores |
| codex exec テストヘルパーを追加 (#4254) | Add codex exec testing helpers (#4254) | chores |
| サンドボックスドキュメントのタイポを修正 (#4256) | fix typo in sandbox doc (#4256) | documentation |
| 修正 (#4251) | fix (#4251) | bug-fixes |
| 幅を小さくリサイズした際のバグを修正 (#4248) | fix bug when resizing to a smaller width (#4248) | bug-fixes |
| サンドボックスでテストがクリーンに通るよう修正 (#4067) | make tests pass cleanly in sandbox (#4067) | chores |
| エラーメッセージを修正 (#4204) | Fix error message (#4204) | bug-fixes |
| attempt_stream_responses() を stream_responses() から分離してリファクタリング (#4194) | chore: refactor attempt_stream_responses() out of stream_responses() (#4194) | chores |
| codespell アクションを v2.1 に更新 (#4205) | github: update codespell action to v2.1 in workflow (#4205) | chores |
| 非 gpt-5 モデルで text パラメータを送信 (#4195) | Send text parameter for non-gpt-5 models (#4195) | bug-fixes |
| env_flags から未使用の値を削除 (#4188) | chore: drop unused values from env_flags (#4188) | chores |
| ツール実装を簡素化 (#4160) | Simplify tool implementations (#4160) | chores |

## 0.41.0

| 日本語 | English | Category |
|--------|---------|----------|
| レート制限の可視化: リセット時刻の表示 (#4111) とレート制限時の使用量表示 (#4102) | Rate limits visibility: see when limits reset (#4111) and usage when rate limited (#4102) | new-features |
| `exec` モードで `output-schema` による出力スキーマ指定が可能に (#4079) | You can specify output schema in exec mode using output-schema (#4079) | new-features |
| Ripgrep (`rg`) を npm リリースにバンドルし、@vscode/ripgrep の postinstall 失敗問題を解消 (#3660) | Ripgrep (rg) is now vendored into the npm release, fixing postinstall failures (#3660) | bug-fixes |
| readiness ツールを追加 (#4090) | feat: readiness tool (#4090) | new-features |
| 圧縮時に指示を変更しないよう修正 (#4088) | chore: compact do not modify instructions (#4088) | chores |
| codex カードレイアウトをリファクタリング (#4069) | refactor codex card layout (#4069) | chores |
| テストで anyhow::Result を使用してエラー伝播 (#4105) | Use anyhow::Result in tests for error propagation (#4105) | chores |
| exec に include-plan-tool フラグを追加 (#3461) | [exec] add include-plan-tool flag and print it nicely (#3461) | new-features |
| アルファリリース時に npm publish --tag alpha を使用するよう修正 (#4112) | fix: npm publish --tag alpha when building an alpha release (#4112) | chores |
| serde を 1.0.224 から 1.0.226 にアップグレード (#4031) | chore(deps): bump serde from 1.0.224 to 1.0.226 (#4031) | chores |
| log を 0.4.27 から 0.4.28 にアップグレード (#4027) | chore(deps): bump log from 0.4.27 to 0.4.28 (#4027) | chores |
| tempfile を 3.20.0 から 3.22.0 にアップグレード (#4030) | chore(deps): bump tempfile from 3.20.0 to 3.22.0 (#4030) | chores |
| 自動圧縮の閾値を 250k に更新 (#4135) | nit: update auto compact to 250k (#4135) | chores |
| 自動圧縮の指示オーバーライドを削除 (#4137) | nit: drop instruction override for auto-compact (#4137) | chores |
| readiness を専用 utils クレートに抽出 (#4140) | chore: extract readiness in a dedicated utils crate (#4140) | chores |
| 自動圧縮の閾値を 350k トークンに更新 (#4156) | nit: 350k tokens (#4156) | chores |
| Rust 1.90 にアップグレード (#4124) | chore: upgrade to Rust 1.90 (#4124) | chores |
| gh run list の曖昧な動作に対する許容を追加 (#4162) | fix: add tolerance for ambiguous behavior in gh run list (#4162) | bug-fixes |
| once_cell 依存関係を複数クレートから削除 (#4154) | chore: remove once_cell dependency from multiple crates (#4154) | chores |
| unicode-width を 0.1.14 から 0.2.1 にアップグレード (#2156) | chore(deps): bump unicode-width from 0.1.14 to 0.2.1 (#2156) | chores |
| chrono を 0.4.41 から 0.4.42 にアップグレード (#4028) | chore(deps): bump chrono from 0.4.41 to 0.4.42 (#4028) | chores |

## 0.40.0

| 日本語 | English | Category |
|--------|---------|----------|
| デフォルトモデルを `gpt-5-codex` に変更 (#4076) | Default model is now gpt-5-codex (#4076) | new-features |
| `gpt-5-codex` で 220k トークン到達時に自動圧縮を実行 (#4093) | Autocompaction is triggered automatically for gpt-5-codex when hitting 220k tokens (#4093) | new-features |
| 使用制限を `/status` で表示 (#4053) | Usage limits are now visible in /status (#4053) | new-features |
| 新しい `/review` コマンド: 特定コミット、ベースブランチ、カスタム指示でのレビュー (#3961) | New /review commands: review specific commit, against a base branch, or custom instructions (#3961) | new-features |
| MCP ツール呼び出しのデフォルトタイムアウトを 60 秒に設定、config.toml の `tool_timeout_sec` で個別変更可能 (#3959) | Default timeout for MCP tool calls is 60s, overridable via tool_timeout_sec in config.toml (#3959) | new-features |
| try_parse_word_only_commands_sequence() がコマンドを順序通り返すよう修正 (#3881) | fix: update try_parse_word_only_commands_sequence() to return commands in order (#3881) | bug-fixes |
| キャッシュを壊さないよう統一シェル tell を使用 (#3814) | Use a unified shell tell to not break cache (#3814) | chores |
| レスポンスモックヘルパーを共有ライブラリに移動 (#3878) | Move responses mocking helpers to a shared lib (#3878) | chores |
| フィクスチャの代わりにヘルパーを使用 (#3888) | Use helpers instead of fixtures (#3888) | chores |
| スラッシュコマンドポップアップの位置揃えを修正 (#3937) | fix alignment in slash command popup (#3937) | bug-fixes |
| 起動時の画面クリアを廃止 (#3925) | don't clear screen on startup (#3925) | bug-fixes |
| イベントストリーム前にキーボード拡張検出をキャッシュ (#3950) | Cache keyboard enhancement detection before event streams (#3950) | new-features |
| レート制限を UI に転送 (#3965) | Forward Rate limits to the UI (#3965) | new-features |
| TUI: レート制限表示 (#3977) | Tui: Rate limits (#3977) | new-features |
| non_sandbox_test ヘルパーを追加 (#3880) | Add non_sandbox_test helper (#3880) | chores |
| cargo バージョンを統一 (#4044) | chore: unify cargo versions (#4044) | chores |
| clippy ルールを追加 Part 2 (#4057) | chore: more clippy rules 2 (#4057) | chores |
| StreamController を簡素化 (#3928) | simplify StreamController (#3928) | chores |
| TUI: バックトラッキングを修正 (#4020) | Tui: fix backtracking (#4020) | bug-fixes |
| /status に移行したため /limits を削除 (#4055) | Remove /limits after moving to /status (#4055) | chores |
| BottomPane にビュースタックを追加 (#4026) | feat: Add view stack to BottomPane (#4026) | new-features |
| 制限警告のコピーを変更 (#4059) | Change limits warning copy (#4059) | chores |
| 冗長なクロージャに対する clippy 修正 (#4058) | chore: clippy on redundant closure (#4058) | chores |
| /review のブランチモードプロンプトを修正 (#4061) | Fix branch mode prompt for /review (#4061) | bug-fixes |
| レート制限のヘッダーと構造体を変更 (#4060) | Change headers and struct of rate limits (#4060) | chores |
| ページャーオーバーレイのページ間クリアを修正 (#3952) | Fix pager overlay clear between pages (#3952) | bug-fixes |
| セッション終了時の codex resume メッセージを修正 (#3957) | fix codex resume message at end of session (#3957) | bug-fixes |
| 圧縮メッセージ内の長いユーザーメッセージを切り詰め (#4068) | Truncate potentially long user messages in compact message (#4068) | new-features |
| notifier テストを追加 (#4064) | Add notifier tests (#4064) | chores |
| ストリームリトライテストで TestCodex ビルダーを使用 (#4096) | Use TestCodex builder in stream retry tests (#4096) | chores |
| undo 用の git ツールを追加 (#3914) | feat: git tooling for undo (#3914) | new-features |
| 使用量データの調整 (#4082) | fix: usage data tweaks (#4082) | bug-fixes |
| レート制限警告を追加 (#4075) | Rate limits warning (#4075) | new-features |

## 0.39.0

| 日本語 | English | Category |
|--------|---------|----------|
| 新しい `/review` コマンドを導入 (#3774) | New /review command introduced (#3774) | new-features |
| 会話とサンドボックスの cwd を別々の関心事として分離 (#3874) | fix: ensure cwd for conversation and sandbox are separate concerns (#3874) | bug-fixes |
| "HistoryCells 対応のトランスクリプトビューリファクタリング" を再適用 (#3753) | Reland "refactor transcript view to handle HistoryCells" (#3753) | chores |
| TUI: 通知欠落時のエラーを修正 (#3867) | fix error on missing notifications in tui (#3867) | bug-fixes |
| tokio mutex と async 関数を使用してワーカーのブロックを防止 (#3850) | chore: use tokio mutex and async function to prevent blocking a worker (#3850) | chores |
| Rust の参照に関する軽微な問題を修正 (#3849) | fix: some nit Rust reference issues (#3849) | chores |
| TUI 終了時に codex resume のヒントを表示 (#3757) | hint for codex resume on tui exit (#3757) | new-features |
| 自動圧縮時に ESC ボタンが動作するよう修正 (#3857) | Make ESC button work when auto-compaction (#3857) | bug-fixes |
| アニメーションを統一 (#3729) | Unify animations (#3729) | chores |
| uuid_v7 に切り替え、ConversationId の使用を厳格化 (#3819) | Switch to uuid_v7 and tighten ConversationId usage (#3819) | chores |
| テストを一時的に無視 (#3777) | bug: Ignore tests for now (#3777) | chores |
| "Codex CLI harness, sandboxing, and approvals" セクションを更新 (#3822) | chore: update "Codex CLI harness, sandboxing, and approvals" section (#3822) | documentation |
| ターン通知でエージェントの返信テキストを使用 (#3756) | Use agent reply text in turn notifications (#3756) | new-features |
| AGENTS.md: 不足コマンドのインストール手順を追加 (#3807) | AGENTS.md: Add instruction to install missing commands (#3807) | documentation |

## 0.38.0

| 日本語 | English | Category |
|--------|---------|----------|
| gh 呼び出し時に --repo を指定するよう修正 (#3806) | fix: specify --repo when calling gh (#3806) | bug-fixes |

## 0.37.0

| 日本語 | English | Category |
|--------|---------|----------|
| npm リリースプロセスを "trusted publishing" に更新 (#3431)（⚠️ バグにより効果は v38 以降） | Updated npm release process to use "trusted publishing" (#3431) (bug delayed benefit to v0.38.0) | chores |
| 承認時とターン終了時に通知を送信 (#3329) | notifications on approvals and turn end (#3329) | new-features |
| rust-release.yml のプレリリースロジックを復元 (#3659) | chore: restore prerelease logic in rust-release.yml (#3659) | chores |
| serde_json を 1.0.143 から 1.0.145 にアップグレード (#3617) | chore(deps): bump serde_json from 1.0.143 to 1.0.145 (#3617) | chores |
| serde の依存関係を簡素化 (#3664) | chore: simplify dep so serde=1 in Cargo.toml (#3664) | chores |
| serde を 1.0.219 から 1.0.223 にアップグレード (#3618) | chore(deps): bump serde from 1.0.219 to 1.0.223 (#3618) | chores |
| wildmatch を 2.4.0 から 2.5.0 にアップグレード (#3619) | chore(deps): bump wildmatch from 2.4.0 to 2.5.0 (#3619) | chores |
| パーミッションの位置揃えを修正 (45bccd36) | fix permissions alignment (45bccd36) | bug-fixes |
| 読み取り専用エスカレーションを修正 (#3673) | fix: read-only escalations (#3673) | bug-fixes |
| Azure モデルプロバイダーの例を更新 (#3680) | Update azure model provider example (#3680) | documentation |
| 検索アイテムを永続化 (#3745) | Persist search items (#3745) | new-features |
| SendUserTurn で EnvironmentContext を記録 (#3678) | fix: Record EnvironmentContext in SendUserTurn (#3678) | bug-fixes |
| レビューモードのコア更新 (#3701) | Review mode core updates (#3701) | new-features |
| thinking 出力のスタイルを変更 (#3755) | restyle thinking outputs (#3755) | new-features |
| レビュー出力時の開発者メッセージを追加 (#3758) | Add dev message upon review out (#3758) | new-features |
| npm install 前に pnpm がインストール済みであることを確認 (#3763) | fix: ensure pnpm is installed before running npm install (#3763) | bug-fixes |
| publish-npm を専用ジョブにして適切なパーミッションを設定 (#3767) | fix: make publish-npm its own job with specific permissions (#3767) | chores |
| gh 呼び出し時に --repo を指定するよう修正 (#3806) | fix: specify --repo when calling gh (#3806) | bug-fixes |

## 0.36.0

| 日本語 | English | Category |
|--------|---------|----------|
| ⚠️ 環境変数からの OPENAI_API_KEY 読み込みを廃止。`codex login --api-key` で一度設定すれば auth.json に保存 (#3189) | ⚠️ Breaking: OPENAI_API_KEY is no longer read from the environment. Use codex login --api-key once (#3189) | new-features |
| GPT-5-Codex モデルを導入し、性能と制御性を向上 | Introducing GPT-5-Codex model with improved performance and steerability | new-features |
| `codex resume` による過去セッション再開機能を追加 (#3537, #3625) | Resuming old conversations with codex resume (#3537, #3625) | new-features |
| 統合実行の改善と信頼性向上: 競合状態修正、タイムアウト時のコマンド出力、パッチ解析時の実行防止、サンドボックスタイムアウト処理改善 (#3288, #3479, #3644, #3576, #3382, #3435) | Unified execution improvements and reliability: race condition fix, command output on timeouts, no exec when parsed as patch, sandbox timeout handling (#3288, #3479, #3644, #3576, #3382, #3435) | new-features |
| 認証とログイン体験の改善: ログイン整備、API キーとの同時ログイン修正、URL 文字修正、カスタムプロバイダーの認証ステータス修正 (#3632, #3611, #3639, #3581) | Auth and login polish: login flow, fix simultaneous API key/ChatGPT login, stray URL chars, custom provider auth status (#3632, #3611, #3639, #3581) | bug-fixes |
| JSON-RPC と MCP: SetDefaultModel、UserInfo、reasoning_effort、初期 MCP インターフェースとドキュメント (#3512, #3529, #3428, #3506, #3543, #3507, #3345, #3514) | JSON-RPC and MCP: SetDefaultModel, UserInfo, reasoning_effort, initial MCP interface and docs (#3512, #3529, #3428, #3506, #3543, #3507, #3345, #3514) | new-features |
| TUI オンボーディングと UI 改善: 新しいオンボーディングフロー、アニメーション、resume 時のヘッダー統一、間隔/パディング改善、中断スタイル (#3398, #3631, #3590, #3627, #3615, #3592, #3469, #3471, #3472, #3474, #3470, #3650, #3534) | TUI onboarding and polish: new flow and animation, consistent headers on resume, spacing/padding, interruption styling (#3398, #3631, #3590, #3627, #3615, #3592, #3469, #3471, #3472, #3474, #3470, #3650, #3534) | new-features |
| コアプラットフォーム: 実験的自動コンテキスト圧縮、デフォルトサンドボックス拡張、Azure Responses API 対応、ロギング改善 (#3446, #3483, #3528, #3542, #3488, #3489, #3508) | Core platform: experimental auto context compaction, expanded default sandbox, Azure Responses API workaround, logging improvements (#3446, #3483, #3528, #3542, #3488, #3489, #3508) | new-features |
| MIN_ANIMATION_HEIGHT を修正し show_animation の計算を正確化 (#3656) | fix: change MIN_ANIMATION_HEIGHT so show_animation is calculated correctly (#3656) | bug-fixes |
| gpt-5 プロンプトにファイル参照ガイドラインを追加 (#3651) | Add file reference guidelines to gpt-5 prompt (#3651) | chores |
| 小さい端末でアニメーションをスキップ (#3647) | feat: skip animations on small terminals (#3647) | new-features |
| リネーム (#3648) | chore: rename (#3648) | chores |
| 参照を追加 (#3633) | fix: add references (#3633) | bug-fixes |
| prerelease:true に設定 (#3645) | chore: set prerelease:true for now (#3645) | chores |
| tracing-subscriber を 0.3.19 から 0.3.20 にアップグレード (#3620) | chore(deps): bump tracing-subscriber from 0.3.19 to 0.3.20 (#3620) | chores |
| slab を 0.4.10 から 0.4.11 にアップグレード (#3635) | chore(deps): bump slab from 0.4.10 to 0.4.11 (#3635) | chores |
| プリセットフィルターの厳格化、ストレージロードログの抑制、ロールアウトプロンプトをデフォルトで有効化 (#3628) | feat: tighten preset filter, tame storage load logs, enable rollout prompt by default (#3628) | new-features |
| resume 時に中断を表示 (#3629) | Show abort in the resume (#3629) | new-features |
| gpt-5-code 用プロンプトを更新 (#3624) | chore: update prompts for gpt-5-code (#3624) | chores |
| ヘッダーに推論レベルを追加 (#3622) | feat: add reasoning level to header (#3622) | new-features |
| "HistoryCells 対応のトランスクリプトビューリファクタリング" を取り消し (#3614) | Revert "refactor transcript view to handle HistoryCells" (#3614) | chores |
| API キー使用時にモデルを表示しない (#3607) | Don't show the model for apikey (#3607) | chores |
| モデルファミリーと apply_patch の一貫性を修正 (#3603) | fix: model family and apply_patch consistency (#3603) | bug-fixes |
| TUI: full-auto をデフォルトプリセットに更新 (#3608) | fix(tui): update full-auto to default preset (#3608) | bug-fixes |
| codespell で frames ファイルをスキップ (#3606) | Skip frames files in codespell (#3606) | chores |
| 完全な生の推論イベントテキストを追加 (#3605) | Append full raw reasoning event text (#3605) | new-features |
| EventMsg Optional を修正 (#3604) | Fix EventMsg Optional (#3604) | bug-fixes |
| gpt-5-code 用の単一ブランチ (#3601) | Single branch for gpt-5-code (#3601) | chores |
| モデル保存を更新 (#3589) | feat: update model save (#3589) | new-features |
| gpt-5-code モデルセレクターを修正 (#3598) | Fix gpt-5-code model selector (#3598) | bug-fixes |
| モデルファミリーごとのプロンプトを追加 (#3597) | Add per-model-family prompts (#3597) | new-features |
| ユーザー履歴メッセージのプレフィックス幅を揃える (#3467) | Align user history message prefix width (#3467) | chores |
| モデルアップグレードプロンプトを ChatGPT 認証の後ろにゲート (#3586) | Gate model upgrade prompt behind ChatGPT auth (#3586) | new-features |
| output_lines() を bool の代わりに構造体を取るよう更新 (#3591) | chore: update output_lines() to take a struct instead of bools (#3591) | chores |
| 圧縮後の resume/forking を処理 (#3533) | Handle resuming/forking after compact (#3533) | new-features |
| HistoryCells 対応のトランスクリプトビューリファクタリング (#3538) | refactor transcript view to handle HistoryCells (#3538) | chores |
| gpt-5-code モデルで実験的推論サマリーをデフォルト化 (#3560) | Default gpt-5-code models to experimental reasoning summaries (#3560) | new-features |
| 暗号化された CoT を常にリクエスト (#3539) | Always request encrypted cot (#3539) | chores |
| レビューモード（コア） (#3401) | Review Mode (Core) (#3401) | new-features |
| None の reasoning effort を修正 (#3536) | fix: NIT None reasoning effort (#3536) | bug-fixes |
| reasoning effort をオプショナルに (#3527) | feat: reasoning effort as optional (#3527) | new-features |
| モデル保存を修正 (#3525) | bug: fix model save (#3525) | bug-fixes |
| README に IDE セクションを追加 (#3494) | add(readme): IDE (#3494) | documentation |
| デフォルトを image に修正 (#3501) | bug: default to image (#3501) | bug-fixes |
| 使用量制限 CTA のフォーマットに PlanType enum を使用 (#3495) | Use PlanType enum when formatting usage-limit CTA (#3495) | chores |
| gpt-5 モデルファミリー全体に同じ特性を割り当て (#3490) | Assign the entire gpt-5 model family same characteristics (#3490) | chores |
| fork 時にコンポーザーをクリア (#3445) | Clear composer on fork (#3445) | bug-fixes |
| gh 呼び出しで -f の代わりに -F を使用 (#3486) | fix: use -F instead of -f for force=true in gh call (#3486) | bug-fixes |
| ロールアウトアイテムに Compact と Turn Context を追加 (#3444) | Add Compact and Turn Context to the rollout items (#3444) | new-features |
| apply-patch: 置換のソートとリグレッションテストを追加 (#3425) | apply-patch: sort replacements and add regression tests (#3425) | bug-fixes |
| rust-release.yml が latest-alpha-cli ブランチを更新するよう変更 (#3458) | chore: rust-release.yml should update the latest-alpha-cli branch (#3458) | chores |
| generate_mcp_types.py の出力が lib.rs と一致することを確認するチェックを追加 (#3450) | fix: add check to ensure output of generate_mcp_types.py matches lib.rs (#3450) | chores |
| fork がロールアウトをファイルから読むよう変更 (#3440) | Change forking to read the rollout from file (#3440) | chores |
| generate_mcp_types.py の出力が lib.rs と一致することを確認 (#3439) | fix: ensure output of generate_mcp_types.py matches lib.rs (#3439) | chores |
| 信頼済みディレクトリ受入時に projects テーブルを壊さないよう修正 (#3434) | fix trampling projects table when accepting trusted dirs (#3434) | bug-fixes |
| ワークスペースルートを環境コンテキストに配置 (#3375) | put workspace roots in the environment context (#3375) | new-features |
| 不安定なテストを修正 (#3596, #3564) | Fix flaky tests (#3596, #3564) | chores |

## 0.35.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.34.0

| 日本語 | English | Category |
|--------|---------|----------|
| 外部 MCP サーバーの初期化を妨げる問題のホットフィックス (#3436) | Hotfix for issue that prevented Codex from initializing external MCP servers (#3436) | bug-fixes |
| モデルと推論の変更を永続化 (#2799) | Persist model & reasoning changes (#2799) | new-features |

## 0.33.0

| 日本語 | English | Category |
|--------|---------|----------|
| #3179 の POSIX 統合がリグレッションを引き起こしたため取り消し (#3430) | Revert POSIX unification (#3179) due to regression (#3430) | bug-fixes |
| TUI の Markdown レンダラーを新しいカスタム実装に置き換え (#3396) | Replace tui_markdown with a custom markdown renderer (#3396) | new-features |
| alt+delete で右側の単語を削除 (#3394) | alt+delete deletes the word to the right of the cursor (#3394) | new-features |
| ロールアウトアイテムを導入 (#3380) | Introduce rollout items (#3380) | new-features |
| MCP サーバーとして使用時にユーザーエージェントサフィックスを設定 (#3395) | Set a user agent suffix when used as a mcp server (#3395) | chores |
| 不要な #[allow(dead_code)] アノテーションを削除 (#3357) | fix: remove unnecessary #[allow(dead_code)] annotation (#3357) | chores |
| initial history をプロトコルに移動 (#3422) | Move initial history to protocol (#3422) | chores |
| UserMessageEvent に画像を追加 (#3400) | Added images to UserMessageEvent (#3400) | new-features |
| 空ファイル chatwidget_stream_tests.rs を削除 (#3356) | fix: remove empty file: chatwidget_stream_tests.rs (#3356) | chores |
| ドキュメント: codex exec の見出しタイポを修正 (#2703) | docs: fix codex exec heading typo (#2703) | documentation |
| getting-started.md の壊れたリンクを削除 (#2858) | Remove a broken link to prompting_guide.md in docs/getting-started.md (#2858) | documentation |
| 認証関連テストの回復力を向上 (#3427) | Improved resiliency of two auth-related tests (#3427) | chores |

## 0.32.0

| 日本語 | English | Category |
|--------|---------|----------|
| MCP: サーバー動作時に UA サフィックスを追加、安定性/互換性の調整 (#3395) | MCP: add UA suffix when acting as a server; stability/compat tweaks (#3395) | chores |
| OSS: apply_patch の OSS 互換性を拡大 (#2811) | OSS: Broader apply_patch OSS compatibility (#2811) | new-features |
| ロールアウト: 初期基盤と rollout_path をレスポンスに含める (#3380, #3352) | Rollouts: initial groundwork and rollout_path included in responses (#3380, #3352) | new-features |
| TUI: Alt+Delete で次の単語を削除 (#3394) | TUI: Alt+Delete deletes the next word (#3394) | new-features |
| プロトコル/型: ArchiveConversation リクエスト、エクスポートと TS 型の改善 (#3353, #3222, #3270, #3219) | Protocol/Types: ArchiveConversation request; small exports and TS type improvements (#3353, #3222, #3270, #3219) | new-features |
| CI/ビルド: nextest による高速テスト、shear の追加、macOS パーミッション調整 (#3338, #3323, #3334) | CI/Build: faster tests with nextest, add shear; minor macOS permission adjustment (#3338, #3323, #3334) | chores |
| ドキュメント: config.md のシェルクォーティングを明確化 (#3169) | Docs: clarified shell quoting in config (#3169) | documentation |
| reasoning アイテム ID を送信しない (#3390) | Do not send reasoning item IDs (#3390) | chores |
| config.responses_originator_header を環境変数に置き換え (#3388) | Replace config.responses_originator_header_internal_override with env var (#3388) | chores |
| fail fast を無効化 (#3387) | No fail fast (#3387) | chores |
| apply_patch の "failed to find expected lines" メッセージを調整 (#3374) | tweak "failed to find expected lines" message in apply_patch (#3374) | bug-fixes |
| 不要な #[allow(dead_code)] アノテーションを削除 (#3357) | fix: remove unnecessary #[allow(dead_code)] annotation (#3357) | chores |
| POSIX 統合とスナップショットセッション (#3179)（⚠️ v33 で revert） | feat: POSIX unification and snapshot sessions (#3179) (⚠️ reverted in v33) | new-features |

## 0.31.0

| 日本語 | English | Category |
|--------|---------|----------|
| MCP サーバーの `startup_timeout_ms` オプションを追加（Windows ユーザーに特に有用） (#3182) | MCP per-server startup_timeout_ms option added, especially useful for Windows users (#3182) | new-features |
| MCP スタートアップのエラー処理とフォールトトレランスを改善 (#3243) | Improved MCP startup error handling and fault tolerance (#3243) | bug-fixes |
| macOS で Finder から ctrl+v での画像貼り付けを修正 (#3211) | Fix image pasting from Finder with ctrl+v on macOS (#3211) | bug-fixes |
| 保留中の OAuth ログインをキャンセルして localhost ポートを解放 (#3217) | Added logic to cancel pending oauth login to free up localhost port (#3217) | new-features |
| thinking タイマーに分/時間を表示 (#3220) | feat(tui): show minutes/hours in thinking timer (#3220) | new-features |
| /status 出力に CLI バージョンを追加 (#3223) | Added CLI version to /status output (#3223) | new-features |
| toml ファイルからのモデルファミリー設定オーバーライドを尊重 (#3176) | respect overrides for model family configuration from toml file (#3176) | new-features |
| create_github_release.sh を Python で書き直し (#3226) | chore: rewrite create_github_release.sh in Python (#3226) | chores |
| create_github_release: テンポラリディレクトリに新しいクローンを作成 (#3228) | chore: change create_github_release to create a fresh clone in a temp directory (#3228) | chores |
| ローカルクローンのオーバーヘッドを避けるため gh を使用 (#3230) | chore: use gh instead of git to avoid overhead of a local clone (#3230) | chores |
| create_github_release で --publish-alpha または --publish-release を取るよう変更 (#3231) | fix: change create_github_release to take --publish-alpha or --publish-release (#3231) | chores |
| トークン使用量/コンテキスト情報をセッションレベルに移動 (#3221) | Move token usage/context information to session level (#3221) | chores |
| Ctrl+C で空でないプロンプトをクリア (#3285) | Clear non-empty prompts with ctrl+c (#3285) | new-features |
| 生の UUID の代わりに ConversationId を使用 (#3282) | Use ConversationId instead of raw Uuids (#3282) | chores |
| ドキュメント: Memory with AGENTS.md セクションへの壊れたリンクを修正 (#3300) | docs: fix broken link to the "Memory with AGENTS.md" section (#3300) | documentation |
| insta を 1.43.1 から 1.43.2 にアップグレード (#3294) | chore(deps): bump insta from 1.43.1 to 1.43.2 (#3294) | chores |
| tree-sitter を 0.25.8 から 0.25.9 にアップグレード (#3295) | chore(deps): bump tree-sitter from 0.25.8 to 0.25.9 (#3295) | chores |
| clap を 4.5.45 から 4.5.47 にアップグレード (#3296) | chore(deps): bump clap from 4.5.45 to 4.5.47 (#3296) | chores |
| image を 0.25.6 から 0.25.8 にアップグレード (#3297) | chore(deps): bump image from 0.25.6 to 0.25.8 (#3297) | chores |
| actions/setup-node を v5 にアップグレード (#3316) | chore: upgrade to actions/setup-node@v5 (#3316) | chores |
| MCP の getUserAgent メソッドを追加 (#3320) | Add a getUserAgent MCP method (#3320) | new-features |
| 提案されたコマンドのプレビューをハイライト (#3319) | Highlight Proposed Command preview (#3319) | new-features |

## 0.30.0

| 日本語 | English | Category |
|--------|---------|----------|
| ⚠️ プロジェクトの .env ファイルの自動読み込みを廃止 (#3184) | ⚠️ Breaking: Stop loading project .env files automatically (#3184) | new-features |
| セキュリティ: リクエストを保存しない; 保留中の OAuth ログインをキャンセルしてポートを解放 (#3212, #3217) | Security: Never store requests; cancel pending OAuth login to free port (#3212, #3217) | new-features |
| コア/インフラ: ロールアウトポリシー導入、共有 HTTP クライアント、残りコンテキストサイズの改善、推論サマリー設定/処理の改良、サンドボックスシェルツール説明の修正、サーバー通知のシリアライゼーション改善 (#3116, #3110, #3190, #3171, #3138, #3069, #3193) | Core/infra: Introduce rollout policy; shared HTTP client; improved remaining context size; refined reasoning summary; corrected sandbox shell description; improved server notification serialization (#3116, #3110, #3190, #3171, #3138, #3069, #3193) | new-features |
| TUI/UX: 大コマンドの承認ダイアログ修正、モーダル中のタイマー一時停止、ページャー自動スクロール、bash シンタックスハイライト、Mac キーグリフ、ゼロ高さパニック回避、@ ファイル検索の改善 (#3087, #3131, #3167, #3142, #3143, #3133, #2981) | TUI/UX: Fix approval dialog for large commands; pause timer during modals; pager auto-scroll; bash highlighting; mac glyphs; avoid zero-height panic; improved @ file search (#3087, #3131, #3167, #3142, #3143, #3133, #2981) | bug-fixes |
| DevEx/ドキュメント: VS Code 推奨拡張機能、AGENTS.md プロンプトと説明、API キーガイダンス更新、CI 修正 (#3172, #3122, #3132, #3112, #3130) | DevEx/docs: Recommended VS Code extensions; AGENTS.md prompt and clarifications; updated API key guidance; CI fixes (#3172, #3122, #3132, #3112, #3130) | documentation |
| 依存関係: uuid と wiremock をアップグレード (#2493, #2666) | Deps: Bump uuid and wiremock (#2493, #2666) | chores |
| Windows: フルアクセスモードで承認不要に (#2988) | Windows: no more asking for approvals on Full Access mode (#2988) | new-features |
| resume が完了するまで非表示 (#3218) | hide resume until it's complete (#3218) | chores |
| AttachImage TUI イベントを削除 (#3191) | refactor: remove AttachImage tui event (#3191) | chores |
| UNIX での ZSH 検出を改善 (#3187) | ZSH on UNIX system and better detection (#3187) | bug-fixes |
| MCP: セッション resume と履歴一覧を追加 (#3185) | MCP: add session resume + history listing (#3185) | new-features |
| serde_as アノテーションを修正しテストで検証 (#3170) | fix: fix serde_as annotation and verify with test (#3170) | bug-fixes |
| ExecCommandOutputDeltaEvent.chunk に効率的なワイヤーフォーマットを使用 (#3163) | fix: use a more efficient wire format for ExecCommandOutputDeltaEvent.chunk (#3163) | chores |
| リクエスト送信前にコールバックをマップに追加し競合状態を修正 (#3146) | fix: add callback to map before sending request to fix race condition (#3146) | bug-fixes |
| TUI: セッション resume ピッカー (--resume) とクイック resume (--continue) を追加 (#3135) | TUI: Add session resume picker (--resume) and quick resume (--continue) (#3135) | new-features |
| /mcp 出力を更新 (#3134) | Update /mcp output (#3134) | new-features |
| MCP サンドボックス呼び出し (#3128) | MCP sandbox call (#3128) | new-features |
| UserMsgs をカテゴリに分割して TUI に返送 (#3127) | Dividing UserMsgs into categories to send it back to the tui (#3127) | chores |
| セッション再開時に Response Items から EventMsgs をリプレイ (#3123) | Replay EventMsgs from Response Items when resuming a session with history (#3123) | new-features |
| プロンプトからキーワードの太字を削除 (#3121) | remove bold the keyword from prompt (#3121) | chores |
| use_experimental_reasoning_summary toml キーの設定をドキュメント化 (#3118) | document use_experimental_reasoning_summary toml key config (#3118) | documentation |
| 認証 URL パラメータにオリジネーターを含める (#3117) | Include originator in authentication URL parameters (#3117) | new-features |
| MCP サーバーの read config インターフェースを更新 (#3093) | Update read config interface (#3093) | chores |
| verbosity 設定をクリーンアップ (#3056) | chore: Clean up verbosity config (#3056) | chores |

## 0.29.0

| 日本語 | English | Category |
|--------|---------|----------|
| Android/Termux サポート: arboard 依存を非対応ターゲットでゲート (#2895) | Android/Termux support by gating arboard on unsupported targets (#2895) | new-features |
| std fs API を使用した安定的なクロスプラットフォームファイルロック (#2894) | Stable, cross-platform file locking using std fs APIs (#2894) | new-features |
| 認証の統合: CodexAuth と AuthManager を core クレートに移動 (#3074) | Auth consolidation: CodexAuth and AuthManager moved into the core crate (#3074) | chores |
| API キー使用時のレート制限ハンドリングを復元 (#3070) | Rate-limit handling restored for API-key usage (#3070) | bug-fixes |
| Core rollout リファクタ: rollout モジュールの抽出、リスト API の追加、ファイルヘッドの返却 (#1634) | Core rollout refactor: extract rollout module, add listing API, return file heads (#1634) | chores |
| exec/apply_patch で `cd foo && ...` をサポート、TUI のちらつきを修正、ratatui Stylize を優先使用 (#3083, #2918, #3068) | Support `cd foo && ...` in exec/apply_patch, fix TUI flicker, prefer ratatui Stylize (#3083, #2918, #3068) | bug-fixes |
| npm パッケージに Windows ARM64 実行ファイルを同梱 (#3067) | Include Windows ARM64 executable in the npm package (#3067) | new-features |
| 最新の検索ツールに切り替え (#3086) | Switch to the latest search tool (#3086) | new-features |
| @ 検索結果が保留中の場合にローディング状態を表示 (#3061) | Show loading state when @ search results are pending (#3061) | new-features |
| TUI: MCP ドキュメントのハイパーリンクを修正 (#2907) | TUI: fix MCP docs hyperlink in empty_mcp_output (#2907) | bug-fixes |
| 履歴読み込みの統一 (#2736) | Unify history loading (#2736) | chores |
| 実験的な推論サマリーを使用 (#3071) | Use experimental reasoning summary (#3071) | new-features |
| gpt-oss 互換性の改善 (#2461) | Improve gpt-oss compatibility (#2461) | new-features |
| apply-patch: lark 文法を修正 (#2651) | apply-patch: fix lark grammar (#2651) | bug-fixes |
| Docs: agents.md へのリンクを更新 (#3089) | Docs: update link to agents.md (#3089) | documentation |
| Docs: config.md のタイポを修正 (#3082) | Docs: fix typo of config.md (#3082) | documentation |
| thiserror を 2.0.12 から 2.0.16 にバンプ (#2667) | Bump thiserror from 2.0.12 to 2.0.16 (#2667) | chores |

## 0.28.0

| 日本語 | English | Category |
|--------|---------|----------|
| TUI: タイピングのラグを修正 (#2922) | Fix laggy typing (#2922) | bug-fixes |
| メッセージスタイリングの刷新 (#2877) | Rework message styling (#2877) | new-features |
| ストリーミングエージェントメッセージの余分な空行を削除 (#3065) | Remove extra blank lines in streamed agent messages (#3065) | bug-fixes |
| AGENTS.md が存在する場合に "/init" 提案を非表示 (#3038) | Hide "/init" suggestion when AGENTS.md exists (#3038) | bug-fixes |
| 空入力での Enter を無視し、空メッセージのキューイングを防止 (#3047) | Ignore Enter on empty input to avoid queuing blank messages (#3047) | bug-fixes |
| get_cursor_position エラーをキャッチしてクラッシュを防止 (#2870) | Catch get_cursor_position errors to avoid crashes (#2870) | bug-fixes |
| 無効コマンドメッセージの余分な引用符を削除 (#3035) | Remove extra quote from disabled-command message (#3035) | bug-fixes |
| Windows ARM ビルドに Windows 11 ARM を活用 (#3062) | Leverage Windows 11 ARM for Windows ARM builds (#3062) | chores |
| リリースビルド用 Windows 11 ARM イメージに zstd をインストール (#3066) | Install zstd on Windows 11 ARM image for releases (#3066) | chores |
| PR 作成時にリリースビルド用 Windows キャッシュを事前構築 (#2884) | Populate Windows cache for release builds when PRs are opened (#2884) | chores |
| config リファレンステーブルを修正 (#3063) | Fix config reference table (#3063) | documentation |
| ドキュメントリファクタ後の PR テンプレートリンクを更新 (#2982) | Update PR template link after docs refactor (#2982) | documentation |
| ユーザーがモデルを変更した際のログを追加 (#3060) | Add logs when users change the model (#3060) | chores |
| regex-lite を 0.1.7 にバンプ (#3010) | Bump regex-lite to 0.1.7 (#3010) | chores |

## 0.27.0

| 日本語 | English | Category |
|--------|---------|----------|
| MCP 安定性: Mutex を早期にドロップしロック順序の問題を回避 (#2878, #2876) | MCP stability: drop mutexes earlier and avoid lock ordering pitfalls (#2878, #2876) | bug-fixes |
| チャネル信頼性: 無制限チャネルに切り替えてスタールを防止 (#2874) | Channel reliability: switch to unbounded channel to prevent stalls (#2874) | bug-fixes |
| 不要な flush() 呼び出しを削除 (#2873) | Remove unnecessary flush() calls (#2873) | chores |
| CI: リリースビルドを修正、cargo clippy に --profile を指定 (#2871, #2864) | CI: fix release build; specify --profile for cargo clippy (#2871, #2864) | chores |
| Docs: より安全な Homebrew スニペット (#2868) | Docs: safer Homebrew snippet (#2868) | documentation |
| Docs: AGENTS.md に `just fix -p` を提案 (#2881) | Docs: suggest `just fix -p` in AGENTS.md (#2881) | documentation |

## 0.26.0

| 日本語 | English | Category |
|--------|---------|----------|
| カスタム /prompts: ~/.codex/prompts からプロンプトを読み込み (#2696) | Custom /prompts loaded from ~/.codex/prompts (#2696) | new-features |
| 新しい "View Image" ツール: ローカル画像をエージェント的に表示 (#2723) | New "View Image" tool to let Codex agentically view local images (#2723) | new-features |
| MCP GetConfig エンドポイント: 解決済み設定の検査用 (#2725) | MCP GetConfig endpoint to inspect resolved settings (#2725) | new-features |
| Windows での画像貼り付けを修正、バースト貼り付けの処理を改善 (#2683) | Fix image pasting in Windows + improve burst paste handling (#2683) | bug-fixes |
| アクティブなタスク中のスラッシュコマンドを禁止 (#2792) | Prevent slash commands during an active task (#2792) | bug-fixes |
| サスペンド (^Z) 時のカーソル位置を修正 (#2690) | Fix cursor position when suspending (^Z) (#2690) | bug-fixes |
| 二重行とぶら下がりリストマーカーを削減 (#2789) | Reduce doubled lines and hanging list markers (#2789) | bug-fixes |
| README/ドキュメントの大規模リファクタとナビゲーション整備 (#2724) | Major README/docs refactor and navigation (#2724) | documentation |
| CHANGELOG をリリースページにリンク (#2780) | CHANGELOG now points to Releases page (#2780) | documentation |
| VS Code Extension の Issue テンプレートを追加 (#2853) | Add VS Code Extension issue template (#2853) | documentation |
| CI リリースビルドを修正 (#2864) | Fix CI release build (#2864) | chores |
| incoming_tx のクローンによるデッドロックを修正 (#2747) | Bug fix: clone of incoming_tx can lead to deadlock (#2747) | bug-fixes |
| #2371 のポストコミットフィードバックに対するフォローアップ (#2852) | Following up on #2371 post commit feedback (#2852) | chores |
| ウェルカムメッセージのスラッシュコマンドを太字に変更 (#2762) | UI: Make slash commands bold in welcome message (#2762) | new-features |
| OAuth 成功画面の表記を "Codex CLI" から "Codex" に変更 (#2737) | Changed OAuth success screen to use "Codex" rather than "Codex CLI" (#2737) | bug-fixes |
| compact のレースコンディションを修正 (#2746) | Race condition in compact (#2746) | bug-fixes |
| MCP サーバーの stderr をテスト出力に表示 (#2849) | chore: print stderr from MCP server to test output (#2849) | chores |
| test_shell_command_approval のフレーク性デバッグを容易化 (#2848) | chore: try to make it easier to debug test flakiness (#2848) | chores |
| clippy で uninlined_format_args を必須に (#2845) | chore: require uninlined_format_args from clippy (#2845) | chores |
| codex-rs/config.md を新しい場所へのリンクとして復元 (#2778) | Added back codex-rs/config.md to link to new location (#2778) | documentation |
| UI に送り返すデルタ数を制限 (#2776) | fix: limit the number of deltas sent back to the UI (#2776) | bug-fixes |

## 0.25.0

| 日本語 | English | Category |
|--------|---------|----------|
| Core: 長時間稼働サーバーで手動クリーンアップを行うための remove_conversation API を追加 (#2613) | Core: remove_conversation API for manual cleanup in long-lived servers (#2613) | new-features |
| TUI: トランスクリプト/差分ビューでマウスホイールによる代替スクロールに対応 (#2686) | TUI: mouse wheel alternate scrolling in transcript/diff views (#2686) | new-features |
| TUI: Alt+Ctrl+H で前の単語を削除（Alt+Backspace と同等）に対応 (#2717) | TUI: Alt+Ctrl+H deletes the previous word (parity with Alt+Backspace) (#2717) | new-features |
| Execution: task_started イベントにコンテキストウィンドウを含めるよう変更、ターンごとにモデルが変わる可能性に対応 (#2752) | Execution: include context window on task_started events; model may vary per turn (#2752) | new-features |
| トランスクリプトの行折り返しをキャッシュし、長いトランスクリプトの応答性を維持 (#2739) | Cache transcript line wraps to keep long transcripts responsive (#2739) | bug-fixes |
| ターン実行中にトランスクリプト行が差分ビューに追加される問題を修正 (#2721) | Fix transcript lines appending to diff while a turn is running (#2721) | bug-fixes |
| 絵文字の表示改善: 適切な間隔と ⌨️ 絵文字バリアント (#2735, #2728) | Improve emoji rendering: proper spacing and ⌨️ emoji variant (#2735, #2728) | bug-fixes |
| ESC キーでキュー済みメッセージをコンポーザーに戻す (#2687) | ESC with queued messages returns them to the composer (#2687) | new-features |
| マルチバイトテキスト近くのプレースホルダーをバックスペースした際のクラッシュを防止 (#2674) | Prevent crash when backspacing placeholders near multibyte text (#2674) | bug-fixes |
| apply_patch で Exec デルタを送信しないよう修正 (#2742) | Don't send Exec deltas on apply_patch (#2742) | bug-fixes |
| git_diff_against_sha をより堅牢に（カスタムドライバーを無視、ダッシュ付きファイル名を処理）(#2749) | Make git_diff_against_sha more robust (ignore custom drivers; handle dash-prefixed files) (#2749) | bug-fixes |
| インタラクティブ実行時のテスト負荷を削減 (#2707) | Reduce test load when running interactively (#2707) | chores |
| 履歴内のアシスタントメッセージの重複を排除 (#2758) | Deduplicate assistant messages in history (#2758) | bug-fixes |
| Codex GitHub Action を一時的に削除 (#2729) | Remove the Codex GitHub Action for now (#2729) | chores |

## 0.24.0

| 日本語 | English | Category |
|--------|---------|----------|
| キュー済みメッセージ (#2637) | Queued messages (#2637) | new-features |
| 画像ファイルのコピー&ペースト / ドラッグ&ドロップ (#2567, #1695) | Copy Paste / Drag & Drop image files (#2567, #1695) | new-features |
| トランスクリプトモード (Ctrl+T) とスクロール機能 (#2525, #2562, #2592) | Transcript mode (Ctrl+T) with scrolling ability (#2525, #2562, #2592) | new-features |
| 前のメッセージから会話を編集/再開 (esc-esc) (#2607, #2575) | Edit/resume conversation (esc-esc) from previous messages (#2607, #2575) | new-features |
| --search オプション指定時の Web 検索 (#2371) | Web search when using explicit --search option (#2371) | new-features |
| CoT をデフォルトで非表示、ステータスインジケーターにヘッダーを表示 (#2316) | Hide CoT by default; show headers in status indicator (#2316) | new-features |
| diff 出力をページャーで表示（ハンクヘッダー付き）(#2568, #2488) | Show diff output in pager with hunk headers (#2568, #2488) | new-features |
| コマンド承認 UI の簡素化 (#2708) | Simplify command approval UI (#2708) | new-features |
| Esc/Ctrl+C 割り込みハンドリングの統一 (#2661, #2691) | Unify Esc/Ctrl+C interrupt handling (#2661, #2691) | bug-fixes |
| Windows PowerShell での貼り付けを修正 (#2544) | Fix Windows PowerShell paste (#2544) | bug-fixes |
| 長時間実行シェルコマンド exec_command/write_stdin のサポート (#2574) | Add support for long-running shell commands exec_command/write_stdin (#2574) | new-features |
| apply_patch の信頼性向上 (#2646, #2477) | Improve apply_patch reliability (#2646, #2477) | bug-fixes |
| リトライ回数の上限設定 (#2701) | Cap retry counts (#2701) | bug-fixes |
| MCP ツールの決定的ソートによるキャッシュヒット率の改善 (#2611) | Improve cache hit rate by sorting MCP tools deterministically (#2611) | bug-fixes |
| GPT-5 向け model_verbosity 設定の追加 (#2108) | Add model_verbosity config for GPT-5 (#2108) | new-features |
| git ルートまでのすべての AGENTS.md ファイルを読み込み (#2532) | Read all AGENTS.md files up to git root (#2532) | new-features |
| ワークツリーでの git ルート解決を修正 (#2585) | Fix git root resolution in worktrees (#2585) | bug-fixes |
| エラーメッセージとハンドリングの改善 (#2695, #2587, #2640, #2540) | Improve error messages & handling (#2695, #2587, #2640, #2540) | bug-fixes |
| モデルへの割り込みとフィードバック提供機能を追加 (#2381) | Add ability to interrupt and provide feedback to the model (#2381) | new-features |
| 集約出力の送信 (#2364) | Send aggregated output (#2364) | new-features |
| トランスクリプトのヒント表示 (#2605) | Transcript hint (#2605) | new-features |
| コマンド出力の統合、トランスクリプトで完全なコマンドを表示 (#2590) | Coalesce command output; show unabridged commands in transcript (#2590) | new-features |
| トランスクリプトに思考過程を表示 (#2538) | Show thinking in transcript (#2538) | new-features |
| 履歴にアップグレードバナーを表示 (#2537) | Show upgrade banner in history (#2537) | new-features |
| 起動時にクリアの代わりにスクロール (#2535) | Scroll instead of clear on boot (#2535) | new-features |
| 下部パディングを1行に削減 (#2704) | Reduce bottom padding to 1 line (#2704) | new-features |
| キュー済みメッセージをイタリック表示 (#2693) | Queued messages rendered italic (#2693) | new-features |
| Windows で PowerShell にコマンド生成をブリッジ (#2319) | Bridge command generation to PowerShell on Windows (#2319) | new-features |
| MCP サーバー未設定時にドキュメントをリンク (#2516) | Link docs when no MCP servers configured (#2516) | new-features |
| AuthManager の追加と GetAuthStatus コマンドの強化 (#2577) | Add AuthManager and enhance GetAuthStatus command (#2577) | new-features |
| MCP サーバーに認証関連メソッドとイベントを追加 (#2496) | Added auth-related methods and events to MCP server (#2496) | new-features |
| トークンリフレッシュがシームレスに動作しないバグを修正 (#2699) | Fixed token refresh to work seamlessly (#2699) | bug-fixes |
| Windows でパス区切りにバックスラッシュを使用 (#2684) | Use backslash as path separator on Windows (#2684) | bug-fixes |
| MCP structuredContent を関数呼び出しレスポンスとして優先送信 (#2594) | Prefer sending MCP structuredContent as function call response (#2594) | bug-fixes |
| サスペンド動作の改善 (#2569) | Improve suspend behavior (#2569) | bug-fixes |
| 内部社員のログインを修正 (#2528) | Fix login for internal employees (#2528) | bug-fixes |
| wezterm でのリサイズを修正 (#2600) | Fix resize on wezterm (#2600) | bug-fixes |
| タブ補完後にカーソルを末尾に移動 (#2362) | Tab-completing a command moves cursor to end (#2362) | bug-fixes |
| 非トゥルーカラー端末でのシマーしきい値を調整 (#2533) | Tweak shimmer thresholds for non-true-color terminals (#2533) | bug-fixes |
| 絵文字のパディングを修正 (#2702) | Fix emoji padding (#2702) | bug-fixes |
| ビルド修正: ToolsConfigParams の導入 (#2663) | Fix broken build on main; introduce ToolsConfigParams (#2663) | bug-fixes |
| バックトラック中の Draw イベントでフレームをスケジュールしない (#2692) | Do not schedule frames for Draw events in backtrack (#2692) | bug-fixes |
| 端末を検出しリクエストヘッダーに含める (#2437) | Detect terminal and include in request headers (#2437) | chores |
| send_user_turn に認証を追加 (#2688) | Add auth to send_user_turn (#2688) | chores |
| ExecSessionManager のスコープを Session に限定 (#2664) | Scope ExecSessionManager to Session instead of global singleton (#2664) | chores |
| apply_patch のデフォルトフリーフォームツールを無効化 (#2643) | Disable default freeform tool for apply_patch (#2643) | chores |
| オンボーディング画面を別の "app" にリファクタリング (#2524) | Refactor onboarding screen to a separate "app" (#2524) | chores |
| tokio + EventStream を使用して crossterm イベントを処理 (#2489) | Switch to tokio + EventStream for crossterm events (#2489) | chores |
| trust されたプロジェクトの [projects] テーブルを明示的に書き込み (#2523) | Write explicit [projects] tables for trusted projects (#2523) | chores |
| README の更新 (#2564) | Update README.md (#2564) | documentation |
| AGENTS.md のタイポを修正 (#2518) | Fix typo in AGENTS.md (#2518) | documentation |

## 0.23.0

| 日本語 | English | Category |
|--------|---------|----------|
| TUI で /mcp コマンドに対応、承認を制御する /approvals スラッシュコマンドを追加 (#2430, #2474) | New commands: support /mcp in TUI and /approvals slash command (#2430, #2474) | new-features |
| 実行時に推論努力とモデルを変更可能に、GPT-5 モデルに "minimal" 努力レベルを追加 (#2435, #2326) | Reasoning controls: change effort and model at runtime; add "minimal" for GPT-5 (#2435, #2326) | new-features |
| ChatGPT 未サインイン時にログインオプションを表示、ChatGPT 認証トークンの自動リフレッシュ (#2440, #2484) | Auth: show login options when not signed in; auto-refresh ChatGPT auth token (#2440, #2484) | new-features |
| UI/UX: Ghostty Ctrl-b/Ctrl-f フォールバック、Ctrl+H でバックスペース、タブ補完後のカーソル位置修正、カラー/アクセシビリティ更新 (#2427, #2412, #2442, #2401, #2421) | UI/UX: Ghostty Ctrl-b/Ctrl-f fallback, Ctrl+H as backspace, cursor tweak after tab, color/accessibility updates (#2427, #2412, #2442, #2401, #2421) | new-features |
| リリースに zip アーカイブバイナリを追加、Windows x86_64 用 DotSlash エントリ、Rust 1.89 へアップグレード (#2438, #2361, #2465, #2467) | Distribution: zip archived binaries, DotSlash for Windows x86_64, upgrade to Rust 1.89 (#2438, #2361, #2465, #2467) | chores |
| /diff コマンドの進行状況インジケーターを表示 (#2245) | Show progress indicator for /diff command (#2245) | new-features |
| /prompts をローテーションプレースホルダーに置換 (#2314) | Replace /prompts with a rotating placeholder (#2314) | new-features |
| MCP サーバーコマンドで ChatGPT を使用した認証を有効化 (#2373) | Added MCP server command to enable authentication using ChatGPT (#2373) | new-features |
| EventMsg::TurnAborted の導入 (#2365) | Introduce EventMsg::TurnAborted (#2365) | new-features |
| 現在のタスクコンテキストをオーバーライドする操作を追加 (#2431) | Add an operation to override current task context (#2431) | new-features |
| /status でセッション ID の箇条書き位置を移動 (#2462) | Move session ID bullet in /status (#2462) | new-features |
| Diff コマンド (#2476) | Diff command (#2476) | new-features |
| apply patch サマリーのステータス文字に色付け (#2337) | Color the status letter in apply patch summary (#2337) | new-features |
| ローカルコンポーザー履歴で同一の連続エントリをスキップ (#2352) | Skip identical consecutive entries in local composer history (#2352) | bug-fixes |
| 重複した "Successfully logged in" メッセージを削除 (#2357) | Remove duplicated "Successfully logged in" message (#2357) | bug-fixes |
| sysprompt 等をコンテキスト残量 % から除外 (#2446) | Exclude sysprompt etc. from context left % (#2446) | bug-fixes |
| レビュー決定レスポンスの欠落したスペースを修正 (#2457) | Fix missing spacing in review decision response (#2457) | bug-fixes |
| ファイルが1つだけの場合の apply patch を修正 (#2468) | Fix apply patch when only one file is rendered (#2468) | bug-fixes |
| 他のプロバイダー使用時にもサインイン画面が表示される問題を修正 (#2475) | Fix: Sign in appearing even if using other providers (#2475) | bug-fixes |
| codex-protocol クレートの導入 (#2355) | Introduce codex-protocol crate (#2355) | chores |
| ログインフローの非同期化 (#2393) | Async-ify login flow (#2393) | chores |
| クライアントヘッダーの追加 (#2487) | Client headers (#2487) | chores |
| sandbox_workspace_write の writable_roots をドキュメント化 (#2464) | Document writable_roots for sandbox_workspace_write (#2464) | documentation |

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
| npm リリースの @openai/codex が TypeScript CLI へのフォールバックではなく Rust CLI を直接実行するよう変更 (#2035, #2048) | npm release of @openai/codex now runs Rust CLI instead of falling back to TypeScript CLI (#2035, #2048) | new-features |
| Windows: Python プログラムを一時ファイルに書き込むよう修正、PopKeyboardEnhancementFlags の失敗を無視 (#2019) | Windows: write Python to temp file instead of long string arg; ignore PopKeyboardEnhancementFlags failure (#2019) | bug-fixes |
| `codex login` での Python 証明書の問題を修正 (#2042) | Fix Python certificates issue with codex login (#2042) | bug-fixes |

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

