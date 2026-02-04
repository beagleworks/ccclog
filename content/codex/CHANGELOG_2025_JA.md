# OpenAI Codex 変更履歴 (2025年)

このファイルは OpenAI Codex の2025年リリース分の変更履歴を日本語で記載しています。

---

## 0.77.0

| 日本語 | English | Category |
|--------|---------|----------|
| TUI2: ターミナル間でマウスホイール + トラックパッドスクロールを正規化し、`tui.scroll_*` 設定項目を追加 (PR #8357) | TUI2: Normalize mouse wheel + trackpad scrolling across terminals; add `tui.scroll_*` config settings (PR #8357) | new-features |
| `requirements.toml` に `allowed_sandbox_modes` を追加して許可されるサンドボックスモードを制限 (PR #8298) | Add `allowed_sandbox_modes` to `requirements.toml` to constrain permitted sandbox modes (PR #8298) | new-features |
| MCP: ストリーム可能な HTTP MCP サーバーの OAuth ログインが `rmcp_client` 機能フラグ不要に (PR #8087) | MCP: OAuth login for streamable HTTP MCP servers no longer requires the `rmcp_client` feature flag (PR #8087) | new-features |
| `codex-file-search` でファイル名導出を一元化し、ファジーファイル検索の表示と一貫性を改善 (PR #8334) | Improve fuzzy file search display/consistency by centralizing file-name derivation in `codex-file-search` (PR #8334) | new-features |
| バンドルされたモデルメタデータ (`models.json`) を更新 (PR #8168) | Update bundled model metadata (`models.json`) (PR #8168) | new-features |
| `/undo` が git のステージングと破壊的に相互作用する問題 / ゴーストコミットを修正 (PR #8303) | Fix `/undo` interacting destructively with git staging / ghost commits (PR #8303) | bug-fixes |
| TUI2: トランスクリプトスクロール中の冗長な再描画を削減 (PR #8295) | TUI2: Reduce redundant redraws while scrolling transcripts (PR #8295) | bug-fixes |
| ドキュメント: `experimental.md` 内の `contributing.md` へのリンクを修正 (PR #8311) | Docs: Fix link to `contributing.md` in `experimental.md` (PR #8311) | bug-fixes |

## 0.76.0

| 日本語 | English | Category |
|--------|---------|----------|
| macOS DMG ビルドターゲットを追加 (PR #8207) | Add a macOS DMG build target (PR #8207) | new-features |
| ターミナルごとのスクロール調整のための検出メタデータを改善 (PR #8252) | Improve terminal detection metadata for per-terminal scroll tuning (PR #8252) | new-features |
| スキルポップアップの UI を調整 (PR #8250) | UI tweaks on the skills popup (PR #8250) | new-features |
| TUI 検索セルのレンダリングを改善 (PR #8273) | TUI search cell rendering improvements (PR #8273) | new-features |
| /ps コマンドを追加 (PR #8279) | Add /ps command (PR #8279) | new-features |
| UNIX 環境で /etc/codex/requirements.toml のサポートを追加 (PR #8277) | Add support for /etc/codex/requirements.toml on UNIX (PR #8277) | new-features |
| スキルの shortDescription をサポート (PR #8278, PR #8301) | Support shortDescription for skills (PR #8278, PR #8301) | new-features |
| モデル一覧 UI を追加 (PR #8286) | Add model list UI (PR #8286) | new-features |
| app-server v2 廃止予定通知イベントを追加 (PR #8285) | Add app-server v2 deprecation notice event (PR #8285) | new-features |
| ExternalSandbox ポリシーを導入 (PR #8290) | Introduce ExternalSandbox policy (PR #8290) | new-features |
| スキルをデフォルトで有効化 (PR #8297) | Skills default on (PR #8297) | new-features |
| 管理者スコープのスキルをサポート (PR #8296) | Support admin-scoped skills (PR #8296) | new-features |
| バンドルされたシステムスキルを更新 (PR #8253, PR #8328) | Update bundled system skills (PR #8253, PR #8328) | new-features |
| app server で exclude のデフォルトを true に設定 (PR #8281) | Set exclude default to true in app server (PR #8281) | new-features |
| 制限付きサンドボックストークンでパイプが動作することを保証 (PR #8280) | Ensure pipes work in restricted sandbox tokens (PR #8280) | new-features |
| command-runner ディレクトリへの読み取り ACL を早期に付与 (PR #8275) | Grant read ACL to the command-runner directory earlier (PR #8275) | new-features |
| 重複した shell_snapshot FeatureSpec のリグレッションを修正 (PR #8274) | Fix duplicate shell_snapshot FeatureSpec regression (PR #8274) | new-features |
| sandbox-state 更新の順序を request への切り替えで修正 (PR #8142) | Fix sandbox-state update ordering by switching to request (PR #8142) | new-features |
| #8328 OSS リポジトリからシステムスキルを更新 | #8328 Update system skills from OSS repo | new-features |
| #8325 "Windows でスキル機能フラグのデフォルトを OFF にする" を元に戻す | #8325 Revert "Keep skills feature flag default OFF for windows." | new-features |
| #8308 Windows でスキル機能フラグのデフォルトを OFF に維持 | #8308 Keep skills feature flag default OFF for windows. | new-features |
| #8305 管理者スキルを修正 | #8305 Fix admin skills. | new-features |
| #8301 システムスキルに短い説明を追加 | #8301 Add short descriptions to system skills | new-features |
| #8299 テストを修正 | #8299 Fix tests | new-features |
| #8297 スキル機能をデフォルトで有効化 | #8297 skills feature default on. | new-features |
| #8296 管理者スコープのスキルをサポート | #8296 Support admin scope skills. | new-features |
| #8290 feat: ExternalSandbox ポリシーを導入 | #8290 feat: introduce ExternalSandbox policy | new-features |
| #8288 chore: rmcp クレートを 0.10.0 から 0.12.0 にアップグレード | #8288 chore: upgrade rmcp crate from 0.10.0 to 0.12.0 | new-features |
| #8286 モデル一覧 | #8286 model list | new-features |
| #8285 feat(app-server): v2 廃止予定通知を追加 | #8285 feat(app-server): add v2 deprecation notice | new-features |
| #8282 fix: 不安定なテスト 5 | #8282 fix: flaky tests 5 | new-features |
| #8281 app server で exclude をデフォルトで true に設定 | #8281 Set exclude to true by default in app server | new-features |
| #8280 制限付きトークンにデフォルト dacl を追加してパイプの読み取りを可能に | #8280 add a default dacl to restricted token to enable reading of pipes | new-features |
| #8279 feat: /ps を追加 | #8279 feat: add /ps | new-features |
| #8278 スキルの shortDescription をサポート | #8278 Support skills shortDescription. | new-features |
| #8277 feat: UNIX で /etc/codex/requirements.toml のサポートを追加 | #8277 feat: add support for /etc/codex/requirements.toml on UNIX | new-features |
| #8276 chore: Config::load_from_base_config_with_overrides から ConfigBuilder に移行 | #8276 chore: migrate from Config::load_from_base_config_with_overrides to ConfigBuilder | new-features |
| #8275 exe ディレクトリに最初に読み取り ACL を付与して command runner を呼び出せるようにする | #8275 grant read ACL to exe directory first so we can call the command runner | new-features |
| #8274 fix: 重複した shell_snapshot FeatureSpec を削除 | #8274 fix: remove duplicate shell_snapshot FeatureSpec | new-features |
| #8273 tui: 検索セルのレンダリングを改善 | #8273 tui: improve rendering of search cell | new-features |
| #8271 CI でメインラインバージョンをベースラインとして使用 | #8271 use mainline version as baseline in ci | new-features |
| #8257 feat: unified_exec の "waiting" を折りたたむ | #8257 feat: collapse "waiting" of unified_exec | new-features |
| #8253 codex-rs にバンドルされたシステムスキルを更新 | #8253 Update system skills bundled with codex-rs | new-features |
| #8252 ターミナルごとのスクロールスケーリングのための検出メタデータ | #8252 Terminal Detection Metadata for Per-Terminal Scroll Scaling | new-features |
| #8250 スキルポップアップの UI を調整 | #8250 UI tweaks on skills popup. | new-features |
| #8207 [release] MacOS 用 dmg ターゲットを追加 | #8207 [release] Add a dmg target for MacOS | new-features |
| #8142 fix: codex/sandbox-state/update を通知から request に変更 | #8142 fix: change codex/sandbox-state/update from a notification to a request | new-features |

## 0.74.0

| 日本語 | English | Category |
|--------|---------|----------|
| gpt-5.2-codex の導入 - 知識、推論、コーディングを改善した最新のフロンティアモデル。[詳細はこちら](https://openai.com/index/introducing-gpt-5-2-codex) | Introducing gpt-5.2-codex our latest frontier model with improvements across knowledge, reasoning and coding. [Learn more](https://openai.com/index/introducing-gpt-5-2-codex) | new-features |
| `experimental` 機能を試すための新しいスラッシュコマンド `/experimental` を追加 | Add new slash command `/experimental` for trying out `experimental` features | new-features |
| ゴーストスナップショット警告の無効化トグル (#8178) | Ghost snapshot warning disable toggle (#8178) | new-features |
| UI の改善（バックグラウンドターミナル、ピッカーのクリーンアップ）(#8255, #8232) | UI polish (background terminals, picker cleanup) (#8255, #8232). | new-features |
| #8266 feat: ベータ機能に名前を追加 | #8266 feat: add name to beta features | new-features |
| #8265 caribou | #8265 caribou | new-features |
| #8264 docs: codex resume --all の説明を明確化（CWD 列とフィルタリング） | #8264 docs: clarify codex resume --all (CWD column & filtering) | new-features |
| #8255 nit: ui バックグラウンドターミナル | #8255 nit: ui background terminals | new-features |
| #8249 chore: &Path の代わりに AsRef<Path> を優先 | #8249 chore: prefer AsRef<Path> to &Path | new-features |
| #8248 chore: config_loader での Mac 固有ロジックの読み込みを簡素化 | #8248 chore: simplify loading of Mac-specific logic in config_loader | new-features |
| #8244 スキルの機能フラグを再導入 | #8244 Reintroduce feature flags for skills. | new-features |
| #8243 不正なスキルの読み込みをフェイルオープンに変更 | #8243 Make loading malformed skills fail-open | new-features |
| #8235 fix: ConfigBuilder を導入 | #8235 fix: introduce ConfigBuilder | new-features |
| #8232 chores: ピッカーをクリーンアップ | #8232 chores: clean picker | new-features |
| #8228 移行リンクを表示 | #8228 Show migration link | new-features |
| #8226 chore: Config インスタンス化のコードパスをクリーンアップ | #8226 chore: cleanup Config instantiation codepaths | new-features |
| #8221 「Team」を「Business」に変更し、Education を追加 | #8221 Change “Team” to “Buisness” and add Education | new-features |
| #8220 SYSTEM スキルをサポート | #8220 Support SYSTEM skills. | new-features |
| #8216 ACL 読み取り設定の速度と信頼性を改善 | #8216 speed and reliability improvements for setting reads ACLs | new-features |
| #8209 feat: モデルピッカー | #8209 feat: model picker | new-features |
| #8205 fix: ConfigToml 構造体で PathBuf → AbsolutePathBuf | #8205 fix: PathBuf -> AbsolutePathBuf in ConfigToml struct | new-features |
| #8203 npm パッケージのステージング時に新しい Windows バイナリをダウンロード | #8203 download new windows binaries when staging npm package | new-features |
| #8201 chore: ベータ機能を追加 | #8201 chore: add beta features | new-features |
| #8199 chore: ベータプログラムからアイテムを戻す | #8199 chore: move back stuff out of beta program | new-features |
| #8198 feat: list_models をノンブロッキングに変更 | #8198 feat: make list_models non-blocking | new-features |
| #8196 fix: セッションのダウングレード | #8196 fix: session downgrade | new-features |
| #8194 fix: 適切なスキルディレクトリのクリーンアップ | #8194 fix: proper skills dir cleanup | new-features |
| #8186 nit: ドキュメント | #8186 nit: doc | new-features |
| #8182 nit: unified_exec ツールのデッドブランチを削除 | #8182 nit: drop dead branch with unified_exec tool | new-features |
| #8181 nit: イベントレンダリングでの競合を防止 | #8181 nit: prevent race in event rendering | new-features |
| #8178 feat: ゴーストスナップショット警告を無効化する設定を追加 | #8178 feat: add config to disable warnings around ghost snapshot | new-features |
| #8175 fix: 不安定なテスト 6 | #8175 fix: flaky test 6 | new-features |
| #8163 モデルスクリプトを修正 | #8163 fix the models script | new-features |
| #8153 静的ファイルからモデルを読み込み | #8153 Load models from static file | new-features |
| #8152 [app-server] 新しい RawResponseItem v2 イベントを追加 | #8152 [app-server] add new RawResponseItem v2 event | new-features |
| #8151 chore: listMcpServerStatus をノンブロッキングに更新 | #8151 chore: update listMcpServerStatus to be non-blocking | new-features |
| #8149 user_agent ヘッダーを追加 | #8149 Add user_agent header | new-features |
| #8141 chore(apply-patch) Unicode シナリオ | #8141 chore(apply-patch) unicode scenario | new-features |
| #8140 npm パッケージに新しい Windows バイナリを含める | #8140 include new windows binaries in npm package. | new-features |
| #8127 "chore: review in read-only (#7593)" を取り消し | #8127 Revert “chore: review in read-only (#7593)” | new-features |
| #8124 tui2 のコンパイルエラーを修正 | #8124 fix tui2 compile error | new-features |
| #8122 docs: tui2 ビューポートのロードマップを改良 | #8122 docs: refine tui2 viewport roadmap | new-features |
| #8118 モデルのハードコードバージョン用ワークフローを追加 | #8118 Add a workflow for a hardcoded version of models | new-features |
| #8117 feat: 統合実行フッター | #8117 feat: unified exec footer | new-features |
| #8114 chore: listMcpServers を listMcpServerStatus に更新 | #8114 chore: update listMcpServers to listMcpServerStatus | new-features |
| #8111 chore(apply-patch) 呼び出しテストを移動 | #8111 chore(apply-patch) move invocation tests | new-features |
| #8109 "feat: unified exec footer" を取り消し | #8109 Revert “feat: unified exec footer” | new-features |
| #8108 feat(sdk): TypeScript SDK に xhigh 推論エフォートのサポートを追加 | #8108 feat(sdk): add xhigh reasoning effort support to TypeScript SDK | new-features |
| #8102 Node 24 互換性のために GitHub Actions をアップグレード | #8102 Upgrade GitHub Actions for Node 24 compatibility | new-features |
| #8098 公開スキルを追加し、リポジトリスキルの検出とエラー UX を改善 | #8098 Add public skills + improve repo skill discovery and error UX | new-features |
| #8095 feat: ConfigLayerName を単純な enum ではなく非連結型に変更 | #8095 feat: change ConfigLayerName into a disjoint union rather than a simple enum | new-features |
| #8094 昇格サンドボックスセットアップのバグ修正とパフォーマンス改善 | #8094 bug fixes and perf improvements for elevated sandbox setup | new-features |
| #8089 refactor(tui2): トランスクリプト行メタデータを明示化 | #8089 refactor(tui2): make transcript line metadata explicit | new-features |
| #8088 feat: .codex が書き込み可能なルートのサブフォルダの場合、サンドボックスに対して読み取り専用にする | #8088 feat: if .codex is a sub-folder of a writable root, then make it read-only to the sandbox | new-features |
| #8086 chore(app-server): スタブされた thread/compact API を削除 | #8086 chore(app-server): remove stubbed thread/compact API | new-features |
| #8085 chore: Mac コード署名のリファクタリング | #8085 chore: mac codesign refactor | new-features |
| #8084 chore(ci): macOS ランナーの Homebrew origin/main 回避策を削除 | #8084 chore(ci): drop Homebrew origin/main workaround for macOS runners | new-features |
| #8079 docs: config.md の gpt-5.2 タイポを修正 | #8079 docs: fix gpt-5.2 typo in config.md | new-features |
| #8077 Windows サンドボックス機能のより良い名前 | #8077 better name for windows sandbox features | new-features |
| #8075 feat: unified_exec を shell_command にフォールバック | #8075 feat: fallback unified_exec to shell_command | new-features |
| #8071 feat: experimental メニュー | #8071 feat: experimental menu | new-features |
| #8067 feat: 統合実行フッター | #8067 feat: unified exec footer | new-features |
| #8060 feat: 最後のユーザーターンで圧縮しない | #8060 feat: do not compact on last user turn | new-features |
| #8057 chore: レビュー結果の重複を排除 | #8057 chore: dedup review result duplication | new-features |
| #8053 nit: 通常タスクのトレーススパン | #8053 nit: trace span for regular task | new-features |
| #8052 feat: ターン終了時に unified_exec を閉じる | #8052 feat: close unified_exec at end of turn | new-features |
| #8020 ローカルで実行すると失敗する mcp 誘発テストを修正 | #8020 Fixes mcp elicitation test that fails for me when run locally | new-features |
| #8004 Fix: パスチェックによる Bun グローバルインストールの検出 | #8004 Fix: Detect Bun global install via path check | new-features |
| #8000 WSL マウントポイント使用時の大文字小文字の区別を尊重するように resume マッチングを修正 | #8000 Fixed resume matching to respect case insensitivity when using WSL mount points | new-features |
| #7997 feat: リモートモデルを破棄ではなくマージ | #7997 feat: merge remote models instead of destructing | new-features |
| #7969 Fix: 無効な Windows ファイル名を避けるため Option<()> スキーマ生成をスキップ (#7479) | #7969 Fix: Skip Option<()> schema generation to avoid invalid Windows filenames (#7479) | new-features |
| #7961 crossterm イベントストリームの削除と再作成を可能にするため TUI イベントループをリファクタリング | #7961 refactor TUI event loop to enable dropping + recreating crossterm event stream | new-features |
| #7956 並列ツール呼び出しを修正 | #7956 fix parallel tool calls | new-features |
| #7935 exec-server: エラーの追加コンテキスト | #7935 exec-server: additional context for errors | new-features |
| #7931 chore: 編集時のコメントを保持 | #7931 chore: persist comments in edit | new-features |
| #7791 chore(shell_command) 自由形式タイムアウト出力を修正 | #7791 chore(shell_command) fix freeform timeout output | new-features |
| #7778 feat: approval_policy の値を制約 | #7778 feat: Constrain values for approval_policy | new-features |
| #7601 WIP: TUI ビューポート、履歴表示、選択/コピーの再設計 | #7601 WIP: Rework TUI viewport, history printing, and selection/copy | new-features |

## 0.73.0

| 日本語 | English | Category |
|--------|---------|----------|
| セッションキャプチャを改善する ghost snapshot v2 を追加 (PR #8055) | Add ghost snapshot v2 for improved session capture (PR #8055) | new-features |
| 設定で ghost コミットをサポート (PR #7873) | Support ghost commits in config (PR #7873) | new-features |
| 一貫した検出のため SkillsManager と skills/list 経由でスキル読み込みを再実装 (PR | Reimplement skills loading via SkillsManager and skills/list for consistent discovery (PR | new-features |
| Codex に OpenTelemetry トレーシングを追加 (PR #7844) | Add OpenTelemetry tracing for Codex (PR #7844) | new-features |
| 出力のないツール呼び出しを含むセッションでのパニックを防止 (PR #8048) | Prevent panic when session contains a tool call without an output (PR #8048) | bug-fixes |
| 入力バーストでキーバインディングビューがトリガーされるのを回避 (PR #7980) | Avoid triggering keybindings view on input bursts (PR #7980) | bug-fixes |
| デフォルトの折り返しアルゴリズムを OptimalFit から FirstFit に変更 (PR #7960) | Change default wrap algorithm from OptimalFit to FirstFit (PR #7960) | bug-fixes |
| サンドボックス設定の一部として AbsolutePathBuf を導入 (PR #7856) | Introduce AbsolutePathBuf as part of sandbox config (PR #7856) | bug-fixes |
| ログメッセージに Error を含める (PR #7955) | Include Error in log messages (PR #7955) | bug-fixes |

## 0.72.0

| 日本語 | English | Category |
|--------|---------|----------|
| Config API のクリーンアップ (#7924): 新しい config API とクリーンな設定読み込みフローを追加 | Config API cleanup (#7924): new config API and cleaner config loading flow. | new-features |
| API キーユーザー向けリモート圧縮 (#7835): キーベースセッションでのリモート圧縮を有効化 | Remote compact for API-key users (#7835): enable remote compacting in key-based sessions. | new-features |
| MCP と TUI のステータス表示 (#7828, #7907): TUI での MCP 起動進行メッセージを復元し、最新のディスク値を使用 | MCP and TUI status visibility (#7828, #7907): restore MCP startup progress messages in the TUI and use latest disk values | new-features |
| Windows と PowerShell の利便性向上 (#7607, #7893, #7942, #7137): pwsh/powershell を確実に検出し、PowerShell をパース | Windows and PowerShell quality-of-life (#7607, #7893, #7942, #7137): locate pwsh/powershell reliably, parse PowerShell with | new-features |
| サンドボックスと安全性の更新 (#7809, #7889, #7728): Elevated Sandbox 3/4 と安全なコマンドリストの拡張 | Sandbox and safety updates (#7809, #7889, #7728): Elevated Sandbox 3/4 plus expanded safe command list. | new-features |
| gpt-5.2 のモデル/プロンプト UX 改善 (#7934, #7910, #7874, #7911): プロンプト更新と xhigh reasoning 警告/ドキュメントの明確化 | Model/prompt UX for gpt-5.2 (#7934, #7910, #7874, #7911): prompt updates and clearer xhigh reasoning warnings/docs. | new-features |
| cargo ビルドスイッチを修正 #7948 @[iceweasel-oai] | fix cargo build switch #7948 @[iceweasel-oai] | new-features |
| 修正: TUI での MCP 起動進行メッセージを復元 (#7827 を修正) #7828 @[ivanmurashko] | fix: restore MCP startup progress messages in TUI (fixes #7827) #7828 @[ivanmurashko] | new-features |
| 1p をサポート #7945 @[aibrahim-oai] | support 1p #7945 @[aibrahim-oai] | new-features |
| Windows 用に 2 つの追加実行ファイルに署名 #7942 @[iceweasel-oai] | Sign two additional exes for Windows #7942 @[iceweasel-oai] | new-features |
| 修正: PowerShell を使用して PowerShell をパース #7607 @[bolinfest] | fix: use PowerShell to parse PowerShell #7607 @[bolinfest] | new-features |
| chore(prompt) ベースプロンプトを更新 #7943 @[dylan-hurd-oai] | chore(prompt) Update base prompt #7943 @[dylan-hurd-oai] | new-features |
| Elevated Sandbox 4 #7889 @[iceweasel-oai] | Elevated Sandbox 4 #7889 @[iceweasel-oai] | new-features |
| chore(prompt) トランケーションの詳細を削除 #7941 @[dylan-hurd-oai] | chore(prompt) Remove truncation details #7941 @[dylan-hurd-oai] | new-features |
| feat: クリーンな設定読み込みと config API #7924 @[jif-oai] | feat: clean config loading and config api #7924 @[jif-oai] | new-features |
| chores: models manager #7937 @[aibrahim-oai] | chores: models manager #7937 @[aibrahim-oai] | new-features |
| API キーユーザー向けリモート圧縮 #7835 @[pakrym-oai] | Remote compact for API-key users #7835 @[pakrym-oai] | new-features |
| chore(gpt-5.2) プロンプト更新 #7934 @[dylan-hurd-oai] | chore(gpt-5.2) prompt update #7934 @[dylan-hurd-oai] | new-features |
| 修正: rx サブスクリプションの競合状態 #7921 @[jif-oai] | fix: race on rx subscription #7921 @[jif-oai] | new-features |
| 修正: tui の中断 #7876 @[jif-oai] | fix: break tui #7876 @[jif-oai] | new-features |
| feat: 安全なコマンドを追加 #7728 @[jif-oai] | feat: more safe commands #7728 @[jif-oai] | new-features |
| 修正(tui): gpt-5.2 の xhigh reasoning 警告を表示 #7910 @[voctory] | fix(tui): show xhigh reasoning warning for gpt-5.2 #7910 @[voctory] | new-features |
| スキル名と説明の制限をバイト数ではなく文字数ベースに変更 #7915 @[etraut-openai] | Make skill name and description limit based on characters not byte counts #7915 @[etraut-openai] | new-features |
| feat: pwsh.exe と powershell.exe の検出ユーティリティを導入 #7893 @[bolinfest] | feat: introduce utilities for locating pwsh.exe and powershell.exe #7893 @[bolinfest] | new-features |
| docs: gpt-5.2 の xhigh reasoning effort を明確化 #7911 @[voctory] | docs: clarify xhigh reasoning effort on gpt-5.2 #7911 @[voctory] | new-features |
| feat: MCP サーバーステータスに最新のディスク値を使用 #7907 @[shijie-oai] | feat: use latest disk value for mcp servers status #7907 @[shijie-oai] | new-features |
| "fix(apply-patch): Windows での CRLF 改行を保持" をリバート #7903 @[dylan-hurd-oai] | Revert "fix(apply-patch): preserve CRLF line endings on Windows" #7903 @[dylan-hurd-oai] | new-features |
| マイグレーション画面を動的に変更 #7896 @[aibrahim-oai] | Make migration screen dynamic #7896 @[aibrahim-oai] | new-features |
| xhigh モデルでの誤解を招く 'maximize' high effort の説明を修正 #7874 @[voctory] | Fix misleading 'maximize' high effort description on xhigh models #7874 @[voctory] | new-features |
| "chat" wire_api の非推奨通知を追加 #7897 @[etraut-openai] | Added deprecation notice for "chat" wire_api #7897 @[etraut-openai] | new-features |
| WSL 2 上の Windows でのトースト表示を修正 #7137 @[dank-openai] | Fix toasts on Windows under WSL 2 #7137 @[dank-openai] | new-features |
| 修正: policy/*.codexpolicy → rules/*.rules #7888 @[bolinfest] | fix: policy/*.codexpolicy -> rules/*.rules #7888 @[bolinfest] | new-features |
| RMCP クライアント設定のガイダンスを更新 #7895 @[nornagon-openai] | Update RMCP client config guidance #7895 @[nornagon-openai] | new-features |
| モデル情報を更新 #7853 @[aibrahim-oai] | Update Model Info #7853 @[aibrahim-oai] | new-features |
| Elevated Sandbox 3 #7809 @[iceweasel-oai] | Elevated Sandbox 3 #7809 @[iceweasel-oai] | new-features |
| リリーススクリプトを削除 #7885 @[aibrahim-oai] | remove release script #7885 @[aibrahim-oai] | new-features |
| Chore: find family の可視性を制限 #7891 @[aibrahim-oai] | Chore: limit find family visability #7891 @[aibrahim-oai] | new-features |
| 修正: ReasoningSummary::None の場合に reasoning summary を省略 #7845 @[apanasenko-oai] | fix: omit reasoning summary when ReasoningSummary::None #7845 @[apanasenko-oai] | new-features |
| 修正: nix の古い filedescriptor 出力ハッシュを削除 #7865 @[tyleranton] | fix: drop stale filedescriptor output hash for nix #7865 @[tyleranton] | new-features |
| 修正: オンボーディング ApiKeyEntry 状態で 'q' キーによる終了を無効化 #7869 @[sayan-oai] | fix: dont quit on 'q' in onboarding ApiKeyEntry state #7869 @[sayan-oai] | new-features |

## 0.71.0

| 日本語 | English | Category |
|--------|---------|----------|
| 最新のフロンティアモデル gpt-5.2 を導入。知識、推論、コーディング能力が向上しています。[詳細を見る](https://openai.com/index/introducing-gpt-5-2/) | Introducing gpt-5.2 our latest frontier model with improvements across knowledge, reasoning and coding. [Learn More](https://openai.com/index/introducing-gpt-5-2/) | new-features |

## 0.69.0

| 日本語 | English | Category |
|--------|---------|----------|
| （翻訳待ち） | Skills: Explicit skill selections now inject SKILL.md content into the turn; skills load once per session and warn if a file | new-features |
| （翻訳待ち） | Config API: config/read is fully typed; config writes preserve comments/order; model is optional to match real configs (#7658, | new-features |
| （翻訳待ち） | TUI/UX: Log files drop ANSI codes; vim navigation for option selection and transcript pager; transcript continuity fix; slash- | new-features |
| （翻訳待ち） | Exec & sandbox: Shell snapshotting, reworked unified-exec events, elevated sandbox allowances (sendmsg/recvmsg), clearer rate- | new-features |
| （翻訳待ち） | Platform/auth/build: MCP in-session login, remote-branch review support, Windows signing toggles, ConPty vendoring, Nix hash | new-features |
| （翻訳待ち） | Misc fixes: Unsupported images error cleanly, absolute config paths, parallel test stability, duplicated feature spec removal, | new-features |
| （翻訳待ち） | #7836 Disable ansi codes in TUI log file | new-features |
| （翻訳待ち） | #7834 Error when trying to push a release while another release is in progress | new-features |
| （翻訳待ち） | #7830 Remove conversation_id and bring back request ID logging | new-features |
| （翻訳待ち） | #7826 fix: flaky tests 3 | new-features |
| （翻訳待ち） | #7823 fix: remove duplicated parallel FeatureSpec | new-features |
| （翻訳待ち） | #7818 fix: flaky test 2 | new-features |
| （翻訳待ち） | #7817 fix: Upgrade @modelcontextprotocol/sdk to ^1.24.0 | new-features |
| （翻訳待ち） | #7813 feat: use remote branch for review is local trails | new-features |
| （翻訳待ち） | #7807 chore: disable trusted signing pkg cache hit | new-features |
| （翻訳待ち） | #7806 Revert "Revert "feat: windows codesign with Azure trusted signing"" | new-features |
| （翻訳待ち） | #7804 Revert "feat: windows codesign with Azure trusted signing" | new-features |
| （翻訳待ち） | #7799 Removed experimental "command risk assessment" feature | new-features |
| （翻訳待ち） | #7797 parse rg \| head a search | new-features |
| （翻訳待ち） | #7796 fix: introduce AbsolutePathBuf and resolve relative paths in config.toml | new-features |
| （翻訳待ち） | #7795 Express rate limit warning as % remaining | new-features |
| （翻訳待ち） | #7793 feat(tui2): add feature-flagged tui2 frontend | new-features |
| （翻訳待ち） | #7789 [app-server] Preserve comments & order in config writes | new-features |
| （翻訳待ち） | #7788 Elevated Sandbox 1 | new-features |
| （翻訳待ち） | #7787 fix more typos in execpolicy.md | new-features |
| （翻訳待ち） | #7784 Add vim-style navigation for CLI option selection | new-features |
| （翻訳待ち） | #7779 allow sendmsg/recvmsg syscalls in Linux sandbox | new-features |
| （翻訳待ち） | #7775 chore: rework unified exec events | new-features |
| （翻訳待ち） | #7769 make model optional in config | new-features |
| （翻訳待ち） | #7765 Use codex-max prompt/tools for experimental models | new-features |
| （翻訳待ち） | #7763 Inject SKILL.md when it’s explicitly mentioned | new-features |
| （翻訳待ち） | #7762 Fix Nix cargo output hashes for rmcp and filedescriptor | new-features |
| （翻訳待ち） | #7757 Revert "Revert "feat: windows codesign with Azure trusted signing"" | new-features |
| （翻訳待ち） | #7756 Vendor ConPtySystem | new-features |
| （翻訳待ち） | #7751 feat: support mcp in-session login | new-features |
| （翻訳待ち） | #7750 refactor with_escalated_permissions to use SandboxPermissions | new-features |
| （翻訳待ち） | #7704 fix: Prevent slash command popup from activating on invalid inputs | new-features |
| （翻訳待ち） | #7658 [app-server-protocol] Add types for config | new-features |
| （翻訳待ち） | #7641 feat: shell snapshotting | new-features |
| （翻訳待ち） | #7589 chore: enable parallel tc | new-features |
| （翻訳待ち） | #7550 Add vim navigation keys to transcript pager | new-features |
| （翻訳待ち） | #7478 Fix: gracefully error out for unsupported images | new-features |
| （翻訳待ち） | #7363 Fix transcript pager page continuity | new-features |
| （翻訳待ち） | #7779 allow sendmsg/recvmsg syscalls in Linux sandbox (already listed; ensure single entry) | new-features |
| （翻訳待ち） | #7788 Elevated Sandbox 1 (already listed) | new-features |
| （翻訳待ち） | #7784 Add vim-style navigation for CLI option selection (already listed) | new-features |
| （翻訳待ち） | #7807/7806/7804 Windows signing toggles (grouped above) | new-features |

## 0.66.0

| 日本語 | English | Category |
|--------|---------|----------|
| Execpolicy: TUI がコマンドプレフィックスを承認後にホワイトリスト登録可能に、サンドボックス拒否時に修正案を提示、shell MCP が execpolicy を実行し MCP ツールが同じルールに従うように | Execpolicy: TUI can whitelist command prefixes after an approval, sandbox denials propose an amendment you can accept, shell MCP now runs execpolicy so MCP tools follow the same rules, and | new-features |
| 統合 exec とシェルの安定性: ステータス行の進捗表示が明確に、Windows の unified-exec クラッシュを修正、長いコマンドがレイアウトを崩さずに折り返し、SSE/セッションクリーンアップでハングや | Unified exec & shell stability: status line shows clearer progress, Windows unified-exec crash fixed, long commands wrap without breaking layout, and SSE/session cleanup reduces stuck or | new-features |
| TUI 更新: クロスプラットフォームのショートカット処理が一貫性を持つように(Ctrl+N/P とリスト選択がすべての環境で動作)、オーバーレイ、リスト、テキストエリア間でナビゲーションが一致(#7583, #7629) | TUI updates: cross-platform shortcut handling is consistent (Ctrl+N/P and list selection now work everywhere), so navigation matches between overlays, lists, and text areas (#7583, #7629). | new-features |
| Apply-patch: Windows の CRLF 改行が保持されるように、新しい e2e シナリオでより多くのパッチ形式をカバー、Windows 固有のテストカバレッジでパッチフローのリグレッションを削減(#7515, #7567, #7554)。この修正の[コア部分](https://github.com/openai/codex/pull/4017)を貢献してくれた @cnaples79 に感謝! | Apply-patch: Windows CRLF line endings are preserved, new e2e scenarios cover more patch shapes, and Windows-specific test coverage reduces regressions in patch flows (#7515, #7567, #7554). Thanks to @cnaples79 who contributed the [core part](https://github.com/openai/codex/pull/4017) of this fix! | new-features |
| Cloud exec: codex cloud exec がリモート実行用の --branch を受け付け、status/diff/apply フローを公開しクラウドパスからの変更を検査・適用可能に(#7602, #7614) | Cloud exec: codex cloud exec accepts --branch for remote runs and now exposes status/diff/apply flows so you can inspect and apply changes from the cloud path (#7602, #7614). | new-features |
| 署名: Linux アーティファクトを sigstore 経由で署名(#7674) | Signing: Linux artifacts are signed via sigstore. (#7674). | new-features |
| 一般的な修正: 並列ツール呼び出しチャットが正しく返されるように、ゴーストスナップショットトークンが課金されないように、ツール名の欠落で litellm プロキシがクラッシュしないように、マイグレーションプロンプトで HTTPS リンクを使用 | General fixes: parallel tool-call chat now returns correctly, ghost snapshot tokens aren’t billed, missing tool names no longer crash the litellm proxy, and migration prompts use HTTPS links | new-features |
| #6793 修正: WSL で画像のペーストが動作しない問題 @Waxime64 | #6793 FIX: WSL Paste image does not work @Waxime64 | new-features |
| #6846 機能(core) shell_command ツールにログインを追加 @dylan-hurd-oai | #6846 feat(core) Add login to shell_command tool @dylan-hurd-oai | new-features |
| #6918 ChatGPT ログイン説明に Enterprise プランを追加 @ae-openai | #6918 Add Enterprise plan to ChatGPT login description @ae-openai | new-features |
| #7033 core と tui にコマンドプレフィックスのホワイトリスト統合 @zhao-oai | #7033 whitelist command prefix integration in core and tui @zhao-oai | new-features |
| #7310 インライン応答記録と process_items 間接参照を削除 @aibrahim-oai | #7310 Inline response recording and remove process_items indirection @aibrahim-oai | new-features |
| #7515 修正(apply-patch): Windows で CRLF 改行を保持 @dylan-hurd-oai | #7515 fix(apply-patch): preserve CRLF line endings on Windows @dylan-hurd-oai | new-features |
| #7543 execpolicy の tui フロー @zhao-oai | #7543 execpolicy tui flow @zhao-oai | new-features |
| #7544 execpolicy フォールバック評価をリファクタリング @zhao-oai | #7544 Refactor execpolicy fallback evaluation @zhao-oai | new-features |
| #7547 共有サンドボックスチェックを使用 @pakrym-oai | #7547 Use shared check sandboxing @pakrym-oai | new-features |
| #7554 chore(core): Windows で apply_patch_cli をテスト @dylan-hurd-oai | #7554 chore(core): test apply_patch_cli on Windows @dylan-hurd-oai | new-features |
| #7561 write stdin の start/end イベントを発行しないように @pakrym-oai | #7561 Do not emit start/end events for write stdin @pakrym-oai | new-features |
| #7563 unified exec のステータス表示を改善 @pakrym-oai | #7563 Slightly better status display for unified exec @pakrym-oai | new-features |
| #7567 chore(apply-patch) e2e テスト用シナリオ @dylan-hurd-oai | #7567 chore(apply-patch) scenarios for e2e testing @dylan-hurd-oai | new-features |
| #7571 config から model_family を削除 @aibrahim-oai | #7571 remove model_family from `config @aibrahim-oai | new-features |
| #7580 機能: サンドボックスポリシーを更新し TTY を許可 @jif-oai | #7580 feat: update sandbox policy to allow TTY @jif-oai | new-features |
| #7583 クロスプラットフォーム一貫性のため handle_shortcut_overlay_key を修正 @448523760 | #7583 Fix handle_shortcut_overlay_key for cross-platform consistency @448523760 | new-features |
| #7588 chore: デフォルトの警告メッセージを true に @jif-oai | #7588 chore: default warning messages to true @jif-oai | new-features |
| #7591 chore: /prompt のツールチップ @jif-oai | #7591 chore: tool tip for /prompt @jif-oai | new-features |
| #7592 修正: 未使用時にセッション ID を解放 @jif-oai | #7592 fix: release session ID when not used @jif-oai | new-features |
| #7593 chore: 読み取り専用でレビュー @jif-oai | #7593 chore: review in read-only @jif-oai | new-features |
| #7594 修正: チャット用 sse @jif-oai | #7594 fix: sse for chat @jif-oai | new-features |
| #7595 execpolicy.md を更新 @zhao-oai | #7595 Update execpolicy.md @zhao-oai | new-features |
| #7602 codex cloud exec に --branch を追加 @nornagon-openai | #7602 add --branch to codex cloud exec @nornagon-openai | new-features |
| #7603 models エンドポイントを追加 @aibrahim-oai | #7603 Add models endpoint @aibrahim-oai | new-features |
| #7605 修正(app-server): McpToolCallItem に duration_ms を追加 @owenlin0 | #7605 fix(app-server): add duration_ms to McpToolCallItem @owenlin0 | new-features |
| #7609 機能: shell mcp に exec policy 統合 @zhao-oai | #7609 feat: exec policy integration in shell mcp @zhao-oai | new-features |
| #7610 修正: auth トークン経由ではなく usage エンドポイントからプランタイプを取得 @zhao-oai | #7610 fix: taking plan type from usage endpoint instead of thru auth token @zhao-oai | new-features |
| #7611 修正(app-server): ErrorNotification に will_retry を追加 @owenlin0 | #7611 fix(app-server): add will_retry to ErrorNotification @owenlin0 | new-features |
| #7614 cloud: status, diff, apply @nornagon-openai | #7614 cloud: status, diff, apply @nornagon-openai | new-features |
| #7615 chore: リファクタリングし Arc<RwLock> の関心を exec_policy_for の外に移動 @bolinfest | #7615 chore: refactor to move Arc<RwLock> concern outside exec_policy_for @bolinfest | new-features |
| #7616 models manager で models エンドポイントを呼び出し @aibrahim-oai | #7616 Call models endpoint in models manager @aibrahim-oai | new-features |
| #7617 修正: execpolicy を用いた codex-exec-mcp-server の統合テストを追加 @bolinfest | #7617 fix: add integration tests for codex-exec-mcp-server with execpolicy @bolinfest | new-features |
| #7620 Windows で unified_exec を修正 @pakrym | #7620 Fix unified_exec on windows @pakrym | new-features |
| #7621 with_remote_overrides をモデルファミリー構築に接続 @aibrahim-oai | #7621 Wire with_remote_overrides to construct model families @aibrahim-oai | new-features |
| #7626 タイポを修正 @zhao-oai | #7626 fix typo @zhao-oai | new-features |
| #7629 修正(tui): ListSelectionView に欠落していた Ctrl+n/Ctrl+p サポートを追加 @pppp606 | #7629 fix(tui): add missing Ctrl+n/Ctrl+p support to ListSelectionView @pppp606 | new-features |
| #7634 修正: 並列ツール呼び出しでのチャット補完 @jif-oai | #7634 fix: chat completion with parallel tool call @jif-oai | new-features |
| #7638 修正: トークン消費でゴーストスナップショットを無視 @jif-oai | #7638 fix: ignore ghost snapshots in token consumption @jif-oai | new-features |
| #7645 リポジトリルートからもスキルをロード @xl-openai | #7645 Also load skills from repo root. @xl-openai | new-features |
| #7648 リモートモデル機能フラグを追加 @aibrahim-oai | #7648 Add remote models feature flag @aibrahim-oai | new-features |
| #7651 修正: OTEL HTTP エクスポーターのパニックと mTLS サポート @asm89 | #7651 fix: OTEL HTTP exporter panic and mTLS support @asm89 | new-features |
| #7652 justfile をリポジトリルートに移動 @joshka-oai | #7652 Move justfile to repository root @joshka-oai | new-features |
| #7653 サンドボックス拒否によるプロンプト時に execpolicy 修正案を提案 @zhao-oai | #7653 proposing execpolicy amendment when prompting due to sandbox denial @zhao-oai | new-features |
| #7654 修正: exec-server ストリームが大きなリクエストでエラーになる問題 @bolinfest | #7654 fix: exec-server stream was erroring for large requests @bolinfest | new-features |
| #7655 長いコマンドの折り返し動作を修正 @zhao-oai | #7655 fix wrap behavior for long commands @zhao-oai | new-features |
| #7660 ストリーム復旧後にステータスヘッダーを復元 @joshka-oai | #7660 Restore status header after stream recovery @joshka-oai | new-features |
| #7665 docs: rmcp client フラグのドキュメントを修正 @JaySabva | #7665 docs: fix documentation of rmcp client flag @JaySabva | new-features |
| #7669 修正(doc): TOML otel エクスポーターの例 — 複数行インラインテーブルは無効 @448523760 | #7669 fix(doc): TOML otel exporter example — multi-line inline table is invalid @448523760 | new-features |
| #7672 docs: config から experimental_use_rmcp_client を削除 @JaySabva | #7672 docs: Remove experimental_use_rmcp_client from config @JaySabva | new-features |
| #7673 docs: dev チェックを just に向ける @voctory | #7673 docs: point dev checks to just @voctory | new-features |
| #7674 機能: linux を sigstore でコード署名 @shijie-oai | #7674 feat: linux codesign with sigstore @shijie-oai | new-features |
| #7675 機能: windows を Azure trusted signing でコード署名 @shijie-oai | #7675 feat: windows codesign with Azure trusted signing @shijie-oai | new-features |
| #7678 修正: Rust テスト実行前に ubuntu ランナーの容量を確保 @bolinfest | #7678 fix: clear out space on ubuntu runners before running Rust tests @bolinfest | new-features |
| #7680 修正: Rust テスト用 macOS CI ランナーに最新の Homebrew 修正を含めるように @bolinfest | #7680 fix: ensure macOS CI runners for Rust tests include recent Homebrew fixes @bolinfest | new-features |
| #7685 修正: 非推奨ツール設定の警告メッセージとドキュメントを改善 @gameofby | #7685 fix: refine the warning message and docs for deprecated tools config @gameofby | new-features |
| #7705 修正: モデルマイグレーションプロンプトで HTTPS URL を使用するように更新 @rakleed | #7705 fix: update URLs to use HTTPS in model migration prompts @rakleed | new-features |
| #7709 モデルピッカーを強化 @aibrahim-oai | #7709 Enhance model picker @aibrahim-oai | new-features |
| #7711 クライアントバージョンを x.x.x スタイルにフォーマット追加 @aibrahim-oai | #7711 Add formatting client version to the x.x.x style. @aibrahim-oai | new-features |
| #7713 chore(deps): /codex-rs の ts-rs を 11.0.1 から 11.1.0 に更新 @dependabot[bot] | #7713 chore(deps): bump ts-rs from 11.0.1 to 11.1.0 in /codex-rs @dependabot[bot] | new-features |
| #7714 chore(deps): /codex-rs の derive_more を 2.0.1 から 2.1.0 に更新 @dependabot[bot] | #7714 chore(deps): bump derive_more from 2.0.1 to 2.1.0 in /codex-rs @dependabot[bot] | new-features |
| #7715 chore(deps): /codex-rs の insta を 1.43.2 から 1.44.3 に更新 @dependabot[bot] | #7715 chore(deps): bump insta from 1.43.2 to 1.44.3 in /codex-rs @dependabot[bot] | new-features |
| #7716 chore(deps): /codex-rs の wildmatch を 2.5.0 から 2.6.1 に更新 @dependabot[bot] | #7716 chore(deps): bump wildmatch from 2.5.0 to 2.6.1 in /codex-rs @dependabot[bot] | new-features |
| #7722 ディスクからモデルをロードし ttl と etag を設定 @aibrahim-oai | #7722 load models from disk and set a ttl and etag @aibrahim-oai | new-features |
| #7724 チャットエンドポイントのリグレッションを修正; ツール名の欠落で litellm プロキシがクラッシュする問題 @etraut-openai | #7724 Fixed regression for chat endpoint; missing tools name caused litellm proxy to crash @etraut-openai | new-features |
| #7729 機能: shell command handler に is-mutating 検出を追加 @jif-oai | #7729 feat: add is-mutating detection for shell command handler @jif-oai | new-features |
| #7745 デバイス認証手順をより明確に @mzeng-openai | #7745 Make the device auth instructions more clear. @mzeng-openai | new-features |
| #7747 execpolicy 修正案をサポートするため app server の型を更新 @zhao-oai | #7747 updating app server types to support execpoilcy amendment @zhao-oai | new-features |
| #7748 レガシー ModelInfo を削除し ModelFamily とマージ @aibrahim-oai | #7748 Remove legacy ModelInfo and merge it with ModelFamily @aibrahim-oai | new-features |
| #7749 修正: pre-main 強化ロジックが非 UTF-8 環境変数を許容するように @bolinfest | #7749 fix: pre-main hardening logic must tolerate non-UTF-8 env vars @bolinfest | new-features |
| #7753 "feat: windows codesign with Azure trusted signing" を取り消し @shijie-oai | #7753 Revert "feat: windows codesign with Azure trusted signing" @shijie-oai | new-features |
| #7754 ModelInfo を使用して指示をオーバーライド @aibrahim-oai | #7754 override instructions using ModelInfo @aibrahim-oai | new-features |
| #7756 /models に chatgpt プロバイダーを使用 @aibrahim-oai | #7756 use chatgpt provider for /models @aibrahim-oai | new-features |

## 0.65.0

| 日本語 | English | Category |
|--------|---------|----------|
| Codex Max をデフォルトに (#7566): Codex Max がデフォルトモデルになり、async-in-sync コードに関連する TUI パニックを修正 | Codex Max as default (#7566): Codex Max is now the default model, and a TUI panic related to async-in-sync code was fixed. | new-features |
| 再開 UX の改善 (#7302, #7303): /resume スラッシュコマンドを追加し、再開パフォーマンスを改善して作業の再開をスムーズに | Better resume UX (#7302, #7303): Added a /resume slash command and improved resume performance so picking work back up is snappier. | new-features |
| ツールチップとヒントの UX (#7557, #7440): ヒント/ツールチップを太字の「Tip」ラベル付きマークダウンでレンダリングし、アプリ全体で Codex ツールチップを強化 | Tooltips & tips UX (#7557, #7440): Tips/tooltips are rendered via markdown with a bold “Tip” label and richer Codex tooltips across the app. | new-features |
| TUI の利便性向上 (#7530, #7448, #7514, #7461): TUI に Ctrl‑P/N ナビゲーション、スクリーン行数上限付きシェル出力、Windows クリップボード画像ペーストの復元、およびレイアウトのリファクタリングを追加 | TUI quality-of-life (#7530, #7448, #7514, #7461): TUI gets Ctrl‑P/N navigation, screen-line-capped shell output, restored Windows clipboard image paste, and a refactor for cleaner layout. | new-features |
| 履歴とコンテキストの整理 (#6242, #7483, #7545, #7431, #7483): history.jsonl を history.max_bytes でトリミング、一般的な不要ディレクトリ(__pycache__ を含む)をデフォルトで除外、ペーストプレースホルダーを区別して保持 | History and context hygiene (#6242, #7483, #7545, #7431, #7483): history.jsonl is trimmed by history.max_bytes, common junk dirs (incl. __pycache__) are ignored by default, and paste placeholders stay distinct. | new-features |
| ヒントのレンダリングにマークダウンを使用 #7557 @[Jeremy Rose] | use markdown for rendering tips #7557 @[Jeremy Rose] | new-features |
| Codex Max への移行 #7566 @[Ahmed Ibrahim] | Migrate codex max #7566 @[Ahmed Ibrahim] | new-features |
| あまり価値を追加しない #7481 のテストを削除 #7558 @[Eric Traut] | Remove test from #7481 that doesn't add much value #7558 @[Eric Traut] | new-features |
| [app-server] 設定の `file_path` をオプションに #7560 @[Celia Chen] | [app-server] make `file_path` for config optional #7560 @[Celia Chen] | new-features |
| モデルファミリーを models manager に移行 #7565 @[Ahmed Ibrahim] | Migrate model family to models manager #7565 @[Ahmed Ibrahim] | new-features |
| `tui` を models manager 使用に移行 #7555 @[Ahmed Ibrahim] | Migrate `tui` to use models manager #7555 @[Ahmed Ibrahim] | new-features |
| `ModelsManager` を導入し、`app-server` を移行 #7552 @[Ahmed Ibrahim] | Introduce `ModelsManager` and migrate `app-server` to use it. #7552 @[Ahmed Ibrahim] | new-features |
| 修正: transcript overlay で長い実行行を折り返し #7481 @[muyuanjin] | fix: wrap long exec lines in transcript overlay #7481 @[muyuanjin] | new-features |
| 修正: Features はセッション/スレッドの存続期間中不変にすべき #7540 @[Michael Bolin] | fix: Features should be immutable over the lifetime of a session/thread #7540 @[Michael Bolin] | new-features |
| 機能: $ または /skills によるスキルの一覧表示と選択に対応 #7506 @[xl-openai] | feat: Support listing and selecting skills via $ or /skills #7506 @[xl-openai] | new-features |
| [app-server] 修正: turn/plan/updated に thread_id を追加 #7553 @[Owen Lin] | [app-server] fix: add thread_id to turn/plan/updated #7553 @[Owen Lin] | new-features |
| 機能(tui): textarea で Ctrl-P/N を矢印ナビゲーションにマップ #7530 @[Aofei Sheng] | feat(tui): map Ctrl-P/N to arrow navigation in textarea #7530 @[Aofei Sheng] | new-features |
| 修正(tui): ユーザーシェル出力をスクリーン行数で制限 #7448 @[muyuanjin] | fix(tui): limit user shell output by screen lines #7448 @[muyuanjin] | new-features |
| モデルプリセットの移行 #7542 @[Ahmed Ibrahim] | Migrate model preset #7542 @[Ahmed Ibrahim] | new-features |
| 修正: main #7546 @[jif-oai] | fix: main #7546 @[jif-oai] | new-features |
| 機能: pycache を除外ディレクトリに追加 #7545 @[jif-oai] | feat: add pycache to excluded directories #7545 @[jif-oai] | new-features |
| chore: unified exec サンドボックス検出を更新 #7541 @[jif-oai] | chore: update unified exec sandboxing detection #7541 @[jif-oai] | new-features |
| スラッシュ resume を追加 #7302 @[Ahmed Ibrahim] | add slash resume #7302 @[Ahmed Ibrahim] | new-features |
| chore: app-server feedback/upload で conversation_id → thread_id に変更 #7538 @[Owen Lin] | chore: conversation_id -> thread_id in app-server feedback/upload #7538 @[Owen Lin] | new-features |
| chore: app-server から未使用の TodoList アイテムを削除 #7537 @[Owen Lin] | chore: delete unused TodoList item from app-server #7537 @[Owen Lin] | new-features |
| chore: app-server README を更新 #7510 @[Owen Lin] | chore: update app-server README #7510 @[Owen Lin] | new-features |
| chore: bun 環境変数検出を削除 #7534 @[Shijie Rao] | chore: remove bun env var detect #7534 @[Shijie Rao] | new-features |
| 機能: app server で MCP サーバー一覧表示に対応 #7505 @[Shijie Rao] | feat: support list mcp servers in app server #7505 @[Shijie Rao] | new-features |
| seatbelt: openpty() を許可 #7507 @[Jeremy Rose] | seatbelt: allow openpty() #7507 @[Jeremy Rose] | new-features |
| 機能: codex ツールチップ #7440 @[jif-oai] | feat: codex tool tips #7440 @[jif-oai] | new-features |
| 機能: 汚染を防ぐための遡及的画像プレースホルダー #6774 @[jif-oai] | feat: retroactive image placeholder to prevent poisoning #6774 @[jif-oai] | new-features |
| 機能: apply patch の場合のモデル警告 #7494 @[jif-oai] | feat: model warning in case of apply patch #7494 @[jif-oai] | new-features |
| 修正(tui) ネイティブ Windows でクリップボードからの画像ペーストに対応 #7514 @[Dylan Hurd] | fix(tui) Support image paste from clipboard on native Windows #7514 @[Dylan Hurd] | new-features |
| 修正(unified_exec): unified_exec shell でプラットフォームデフォルトシェルを使用 #7486 @[Robby He] | fix(unified_exec): use platform default shell when unified_exec shell… #7486 @[Robby He] | new-features |
| デバイスコード認証の文字列を更新 #7498 @[Matthew Zeng] | Update device code auth strings. #7498 @[Matthew Zeng] | new-features |
| 修正: デッドコードとマークされたインライン関数 #7508 @[Michael Bolin] | fix: inline function marked as dead code #7508 @[Michael Bolin] | new-features |
| 再開パフォーマンスの改善 #7303 @[Ahmed Ibrahim] | improve resume performance #7303 @[Ahmed Ibrahim] | new-features |
| 修正: npx のパス解決バグ #7134 @[Michael Bolin] | fix: path resolution bug in npx #7134 @[Michael Bolin] | new-features |
| 重複長のペーストプレースホルダーを区別して保持 #7431 @[Joshua Sutton] | Ensure duplicate-length paste placeholders stay distinct #7431 @[Joshua Sutton] | new-features |
| 機能: @openai/codex-shell-tool-mcp で --version フラグに対応 #7504 @[Michael Bolin] | feat: support --version flag for @openai/codex-shell-tool-mcp #7504 @[Michael Bolin] | new-features |
| リファクタリング: tui.rs からいくつかの部分を抽出 #7461 @[Josh McKinney] | refactor: tui.rs extract several pieces #7461 @[Josh McKinney] | new-features |
| chore: create_approval_requirement_for_command を async fn に #7501 @[Michael Bolin] | chore: make create_approval_requirement_for_command an async fn #7501 @[Michael Bolin] | new-features |
| `history.max_bytes` が設定されている場合に `history.jsonl` をトリミング #6242 @[liam] | Trim `history.jsonl` when `history.max_bytes` is set #6242 @[liam] | new-features |
| 修正: TurnError の serde(flatten) アノテーションを削除 #7499 @[Owen Lin] | fix: remove serde(flatten) annotation for TurnError #7499 @[Owen Lin] | new-features |
| 新しいスナップショットにクレジット情報が含まれていない場合クレジットを永続化 #7490 @[zhao-oai] | persisting credits if new snapshot does not contain credit info #7490 @[zhao-oai] | new-features |
| 修正: 不要になったロックを解放 #7500 @[Michael Bolin] | fix: drop lock once it is no longer needed #7500 @[Michael Bolin] | new-features |
| execpolicy ヘルパー #7032 @[zhao-oai] | execpolicy helpers #7032 @[zhao-oai] | new-features |
| コンテキストウィンドウが不明な場合に使用トークンを表示 #7497 @[Ahmed Ibrahim] | Show token used when context window is unknown #7497 @[Ahmed Ibrahim] | new-features |
| 非ブロッキング mutex を使用 #7467 @[Ahmed Ibrahim] | Use non-blocking mutex #7467 @[Ahmed Ibrahim] | new-features |
| 修正: ゴーストスナップショットで未追跡パスのみを追跡 #7470 @[lionel-oai] | Fix: track only untracked paths in ghost snapshots #7470 @[lionel-oai] | new-features |
| 機能: 標準ディレクトリを無視 #7483 @[jif-oai] | feat: ignore standard directories #7483 @[jif-oai] | new-features |
| 修正: app-server v2 型に TypeScript 数値アノテーションを追加 #7492 @[Owen Lin] | fix: add ts number annotations for app-server v2 types #7492 @[Owen Lin] | new-features |
| 機能: unified_exec で apply_patch をインターセプト #7446 @[jif-oai] | feat: intercept apply_patch for unified_exec #7446 @[jif-oai] | new-features |
| chore: app-server README から experimental/unstable の記述を削除 #7474 @[Owen Lin] | chore: remove mention of experimental/unstable from app-server README #7474 @[Owen Lin] | new-features |
| リクエストロギングを復活 #7471 @[pakrym-oai] | Add request logging back #7471 @[pakrym-oai] | new-features |
| 機能: app-server v2 にワンオフコマンドを追加 #7452 @[jif-oai] | feat: add one off commands to app-server v2 #7452 @[jif-oai] | new-features |
| 機能: モデルの警告メッセージを追加 #7445 @[jif-oai] | feat: add warning message for the model #7445 @[jif-oai] | new-features |
| chore: 全体的にレビュー #7444 @[jif-oai] | chore: review everywhere #7444 @[jif-oai] | new-features |
| 機能: エイリアス圧縮 #7442 @[jif-oai] | feat: alias compaction #7442 @[jif-oai] | new-features |
| 機能: skills.md の実験的サポート #7412 @[Thibault Sottiaux] | feat: experimental support for skills.md #7412 @[Thibault Sottiaux] | new-features |

## 0.64.0

| 日本語 | English | Category |
|--------|---------|----------|
| PowerShell の apply_patch パース処理を修正し、apply_patch テストで shell_command の動作をカバー | PowerShell apply_patch parsing is corrected, and apply_patch tests now cover shell_command behavior. | bug-fixes |
| サンドボックス評価の回帰を修正、ポリシー承認済みコマンドを尊重、Windows の危険コマンドチェックを強化、workspace-write で .git を読み取り専用に強制 | Sandbox assessment regression is fixed, policy-approved commands are honored, dangerous-command checks are tightened on Windows, and workspace-write enforces .git read-only. | bug-fixes |
| MCP 起動時に type フィールド欠落を許容、ストリームエラーメッセージを明確化、rmcp の nix 出力ハッシュ問題を解決 | MCP startup tolerates missing type fields, stream error messages are clarified, and rmcp nix output hash issues are resolved. | bug-fixes |
| デリゲートのキャンセル時に unified exec がハングしなくなり、早期終了セッションをクリーンアップ、重複する "waited" レンダリングを抑制 | Delegate cancellation no longer hangs unified exec, early-exit sessions are cleaned up, and duplicate “waited” renderings are suppressed. | bug-fixes |
| limit が 0 の recent_commits が 0 を返すように修正、NetBSD のプロセス強化ビルドのブロックを解除 | recent_commits with limit zero now returns zero, and the NetBSD process-hardening build is unblocked. | bug-fixes |
| レビューロールアウトフィルタリングを無効化して履歴を表示、承認プリセットが workspace-write を尊重、/approvals の信頼検出を修正、サンドボックスコマンド評価のエッジケースを修正 | Review rollout filtering is disabled so history shows, approval presets respect workspace-write, /approvals trust detection is corrected, and sandbox command assessment edge cases are fixed. | bug-fixes |
| コンパクション処理で暗号化された推論を考慮、トークンバジェットを正確に処理、信頼性の高いトークン使用量とコンパクションイベントを出力 | Compaction accounts for encrypted reasoning, handles token budgets accurately, and emits reliable token-usage and compaction events. | bug-fixes |
| TTY 標準入力を必須化、WSL クリップボードパスを正規化、/new 実行時に競合を避けるため古い会話を削除 | TTY stdin is required, WSL clipboard paths are normalized, and stale conversations are dropped on /new to avoid conflicts. | bug-fixes |
| 大きな貼り付けを含むカスタムプロンプト展開を修正、example-config の誤りを修正、相対リンクと streamable_shell 参照をクリーンアップ、アップグレードメッセージを修正 | Custom prompt expansion with large pastes is fixed, example-config mistakes are corrected, and relative links and streamable_shell references are cleaned up. Upgrade messaging is corrected. | bug-fixes |
| Windows サンドボックスで <workspace_root>/.git を読み取り専用として扱い、危険なブラウザ起動を実行前にフラグ付け | Windows sandbox treats <workspace_root>/.git as read-only, and risky browser launches are flagged before execution. | bug-fixes |
| CLA 許可リストに dependabot の派生形を追加、エンタープライズ環境でアップグレードチェックとメッセージをスキップ可能に | CLA allowlist now includes dependabot variants, and enterprises can skip upgrade checks and messages. | bug-fixes |
| 不安定なテストを安定化、セッションリサイクルを改善、ロールアウトセッション初期化でエラーを診断用に表示 | Flaky tests are stabilized, session recycling is improved, and rollout session initialization surfaces errors for diagnosis. | bug-fixes |

## 0.63.0

| 日本語 | English | Category |
|--------|---------|----------|
| Web検索を有効にすると `Invalid value: 'other'.` エラーが発生する不具合を修正 | Fixes the bug where enabling web search can lead to `Invalid value: 'other'.` errors. | bug-fixes |

## 0.61.0

| 日本語 | English | Category |
|--------|---------|----------|
| ExecPolicy2統合とexec-serverの準備: coreにExecPolicy2を統合し、exec-serverのリファクタリングと移行準備を実施、新しいポリシーエンジン採用を支援するクイックスタートドキュメントを追加 | ExecPolicy2 integration and exec-server prep: core now integrates ExecPolicy2 with exec-server refactors and cutover groundwork, plus quickstart docs to help teams adopt the new policy engine. | new-features |
| 切り詰め処理とエラーレポートの改善: 単一パス切り詰めにより重複作業を削減し、エラーイベントにオプションのステータスコードを追加して可観測性を向上 | Improved truncation and error reporting: single-pass truncation reduces duplicate work, and error events can now carry optional status codes for clearer observability. | new-features |
| シェルの信頼性とサンドボックス警告: フォールバックシェル選択を強化し、世界書き込み可能ディレクトリ警告のノイズを削減、Windowsでのメッセージングも改善 | Shell reliability and sandbox warnings: fallback shell selection is hardened and world-writable directory warnings are less noisy, including improved messaging on Windows. | new-features |
| UXの修正: reasoning表示を修正、`/review`実行後のレビューフッターコンテキストを保持、モデル移行画面を一度だけ表示するように変更 | UX fixes: corrected reasoning display, preserved review footer context after `/review`, and the model migration screen now shows only once. | new-features |
| fix(app-server): Windowsの世界書き込み可能警告を移動 (#6916) | fix(app-server) move windows world writable warning (#6916) — @dylan-hurd-oai | new-features |
| [core]: エラーイベントにオプションのstatus_codeを追加 (#6865) | [core] add optional status_code to error events (#6865) — @celia-oai | new-features |
| fix: execpolicy2移行に向けてexec-serverのExecPolicyを準備 (#6888) | fix: prepare ExecPolicy in exec-server for execpolicy2 cutover (#6888) — @bolinfest | new-features |
| 世界書き込み可能ディレクトリの過剰報告を停止 (#6936) | stop over-reporting world-writable directories (#6936) — @iceweasel-oai | new-features |
| fix(レビュー後のコンテキスト残存): `/review`実行後のレビューフッターコンテキストを修正 (#5610) | fix(context left after review): review footer context after `/review` (#5610) — @guidedways | new-features |
| Fix: reasoning表示を修正 (#6749) | Fix/correct reasoning display (#6749) — @lionelchg | new-features |
| chore: スタンドアロンMCP使用に向けてexec-serverをリファクタリング (#6944) | chore: refactor exec-server to prepare it for standalone MCP use (#6944) — @bolinfest | new-features |
| fix(shell): フォールバックシェルを修正 (#6948) | fix(shell) fallback shells (#6948) — @dylan-hurd-oai | new-features |
| execpolicy2のcore統合 (#6641) | execpolicy2 core integration (#6641) — @zhao-oai | new-features |
| 単一パス切り詰め処理 (#6914) | Single pass truncation (#6914) — @pakrym-oai | new-features |
| execpolicyクイックスタートのreadmeを更新 (#6952) | update execpolicy quickstart readme (#6952) — @zhao-oai | new-features |
| モデル移行画面を初回のみ表示するように修正 (#6954) | stop model migration screen after first time. (#6954) — @aibrahim-oai | new-features |

## 0.59.0

| 日本語 | English | Category |
|--------|---------|----------|
| GPT-5.1-Codex-Max: 最新のフロンティアエージェント型コーディングモデルを導入。GPT-5.1-Codex-Max はより高い信頼性、高速なイテレーション、長時間実行されるプロジェクトスケールのワークフローをサポート。詳細は https://www.openai.com/index/gpt-5-1-codex-max を参照 | GPT-5.1-Codex-Max: introducing our newest frontier agentic coding model. GPT-5.1-Codex-Max delivers higher reliability, faster iteration, and support for long-running, project-scale workflows. Learn more at https://www.openai.com/index/gpt-5-1-codex-max | new-features |
| ネイティブ Compaction サポート: Compaction のファーストクラスサポートを追加し、長時間のコーディングセッション全体でパフォーマンスを改善 | Native Compaction Support: added first-class support for Compaction, improving performance across extended coding sessions. | new-features |
| ツールトークン制限の拡張: codex モデルが最大 10,000 ツール出力トークンをサポート。`config.toml` の `tool_output_token_limit` で設定可能 | Expanded Tool Token Limits: codex models now support up to 10,000 tool output tokens. Configure this via `tool_output_token_limit` in `config.toml`. | new-features |
| Windows エージェントモード: Windows ネイティブ向けエージェントモードを導入。Codex は承認を減らしながら、作業フォルダ内でファイルの読み書き、コマンド実行が可能。エージェントモードは新しい実験的な Windows サンドボックスを使用してファイルシステムとネットワークアクセスを制限。詳細は https://developers.openai.com/codex/windows を参照 | Windows Agent mode: Introduced Agent mode for native Windows. Codex can read files, write files, and run commands in your working folder with fewer approvals. Agent mode uses a new experimental Windows sandbox to limit filesystem and network access. Learn more at https://developers.openai.com/codex/windows | new-features |
| TUI と UX の改善 | TUI and UX Improvements | new-features |
| 修正: 改行で切り詰めないように修正 (#6907) — @aibrahim | fix: don't truncate at new lines (#6907) — @aibrahim | new-features |
| 機能: 実環境での arcticfox (#6906) — @aibrahim | feat: arcticfox in the wild (#6906) — @aibrahim | new-features |
| [app-server] thread/resume で thread>turns>items を追加 (#6848) — @owenlin0 | [app-server] populate thread>turns>items on thread/resume (#6848) — @owenlin0 | new-features |
| 細かい修正: デバッグ用の不要なログ (#6898) — @jif | nit: useless log to debug (#6898) — @jif | new-features |
| 修正(core) 会話前の /approvals 変更をサポート (#6836) — @dylan.hurd | fix(core) Support changing /approvals before conversation (#6836) — @dylan.hurd | new-features |
| 整理: compaction トークン使用量を統合 (#6894) — @jif | chore: consolidate compaction token usage (#6894) — @jif | new-features |
| 整理(app-server) 全ユーザー書き込み可能な Windows 通知 (#6880) — @dylan.hurd | chore(app-server) world-writable windows notification (#6880) — @dylan.hurd | new-features |
| 修正: 並列ツール呼び出し命令の注入 (#6893) — @jif | fix: parallel tool call instruction injection (#6893) — @jif | new-features |
| 細かい修正: 安定版 (#6895) — @jif | nit: stable (#6895) — @jif | new-features |
| 機能: 大規模コミットの警告 (#6838) — @jif | feat: warning large commits (#6838) — @jif | new-features |
| ラベルを修正 (#6892) — @tibo | fix label (#6892) — @tibo | new-features |
| シェルで `truncate_text` を使用するように移行 (#6842) — @aibrahim | Move shell to use `truncate_text` (#6842) — @aibrahim | new-features |
| リモート自動 compaction を実行 (#6879) — @pakrym | Run remote auto compaction (#6879) — @pakrym | new-features |
| flaky-unified_exec_formats_large_output_summary (#6884) — @aibrahim | flaky-unified_exec_formats_large_output_summary (#6884) — @aibrahim | new-features |
| shell_command が自由形式の出力を返すように変更 (#6860) — @pakrym | shell_command returns freeform output (#6860) — @pakrym | new-features |
| 整理(core) arcticfox (#6876) — @dylan.hurd | chore(core) arcticfox (#6876) — @dylan.hurd | new-features |
| 修正(tui) ゴーストスナップショット通知 (#6881) — @dylan.hurd | fix(tui) ghost snapshot notifications (#6881) — @dylan.hurd | new-features |
| 修正: モデルピッカーのタイポ (#6859) — @aibrahim | fix: typos in model picker (#6859) — @aibrahim | new-features |
| 整理: Windows ドキュメント URL を更新 (#6877) — @ae | chore: update windows docs url (#6877) — @ae | new-features |
| 機能: Windows サンドボックスの文言を調整 (#6875) — @ae | feat: tweak windows sandbox strings (#6875) — @ae | new-features |
| 修正: ThreadStartResponse と ThreadResumeResponse にフィールドを追加 (#6847) — @mbolin | fix: add more fields to ThreadStartResponse and ThreadResumeResponse (#6847) — @mbolin | new-features |
| 整理: Windows サンドボックスドキュメントを更新 (#6872) — @ae | chore: update windows sandbox docs (#6872) — @ae | new-features |
| リモート compaction をデフォルトで有効化 (#6866) — @pakrym | Remote compaction on by-default (#6866) — @pakrym | new-features |
| [app-server] `turn/completed` v2 イベントを導入 (#6800) — @celia | [app-server] introduce `turn/completed` v2 event (#6800) — @celia | new-features |
| クレジット状態の詳細を更新 (#6862) — @zhao | update credit status details (#6862) — @zhao | new-features |
| tui: 'codex resume' にブランチを追加、cwd でフィルタ (#6232) — @172423086+nornagon-openai | tui: add branch to 'codex resume', filter by cwd (#6232) — @172423086+nornagon-openai | new-features |
| ブラウザ脆弱性のスモークテスト、Windows セキュリティドキュメントのドラフト (#6822) — @iceweasel | smoketest for browser vuln, rough draft of Windows security doc (#6822) — @iceweasel | new-features |
| Windows サンドボックス: 複数のワークスペースルートをサポート (#6854) — @iceweasel | windows sandbox: support multiple workspace roots (#6854) — @iceweasel | new-features |
| codex バックエンドモデルを更新 (#6855) — @zhao | updating codex backend models (#6855) — @zhao | new-features |
| exec-server (#6630) — @172423086+nornagon-openai | exec-server (#6630) — @172423086+nornagon-openai | new-features |
| ソースツリーに余分な `config.toml` を出力しないようテストを修正 (#6853) — @etraut | Fix tests so they don't emit an extraneous `config.toml` in the source tree (#6853) — @etraut | new-features |
| [app-server-test-client] 機能: 自動承認コマンド (#6852) — @owenlin0 | [app-server-test-client] feat: auto approve command (#6852) — @owenlin0 | new-features |
| `generated_ts_has_no_optional_nullable_fields` テストの実行時間を改善 (#6851) — @etraut | Improved runtime of `generated_ts_has_no_optional_nullable_fields` test (#6851) — @etraut | new-features |
| 修正: ローカル compaction (#6844) — @jif | fix: local compaction (#6844) — @jif | new-features |
| MCP サーバーの config.md のタイポを修正 (#6845) — @simcoea | Fix typo in config.md for MCP server (#6845) — @simcoea | new-features |
| [codex][otel] mTLS 設定をサポート (#6228) — @apanasenko | [codex][otel] support mtls configuration (#6228) — @apanasenko | new-features |
| 機能: app server でレビュー (#6613) — @jif | feat: review in app server (#6613) — @jif | new-features |
| 整理(config) shell_command を有効化 (#6843) — @dylan.hurd | chore(config) enable shell_command (#6843) — @dylan.hurd | new-features |
| 自動モード選択時に Windows サンドボックスを有効化するプロンプトを追加 (#6618) — @iceweasel | Prompt to turn on windows sandbox when auto mode selected. (#6618) — @iceweasel | new-features |
| トークンで切り詰めるユーティリティを追加 (#6746) — @aibrahim | Add the utility to truncate by tokens (#6746) — @aibrahim | new-features |
| サポートされているモデルに関する faq.md セクションを更新 (#6832) — @adpena | Update faq.md section on supported models (#6832) — @adpena | new-features |
| localshell ツール呼び出しを修正 (#6823) — @zhao | fixing localshell tool calls (#6823) — @zhao | new-features |
| 機能: 並列ツール呼び出しを有効化 (#6796) — @jif | feat: enable parallel tool calls (#6796) — @jif | new-features |
| 機能: リモート compaction (#6795) — @jif | feat: remote compaction (#6795) — @jif | new-features |
| 細かい修正: app server (#6830) — @jif | nit: app server (#6830) — @jif | new-features |
| 細かい修正: ゴーストコミットを安定版としてマーク (#6833) — @jif | nit: mark ghost commit as stable (#6833) — @jif | new-features |
| 機能: git ブランチツール (#6831) — @jif | feat: git branch tooling (#6831) — @jif | new-features |
| :bug: 修正(rmcp-client): expires_at を使用して OAuth トークンを更新 (#6574) — @LaelLuo | :bug: fix(rmcp-client): refresh OAuth tokens using expires_at (#6574) — @LaelLuo | new-features |
| 修正(windows) Windows での shell_command、軽微なパース処理 (#6811) — @dylan.hurd | fix(windows) shell_command on windows, minor parsing (#6811) — @dylan.hurd | new-features |
| 整理(core) shell_serialization カバレッジを追加 (#6810) — @dylan.hurd | chore(core) Add shell_serialization coverage (#6810) — @dylan.hurd | new-features |
| デフォルトを gpt-5.1 に更新 (#6652) — @aibrahim | Update defaults to gpt-5.1 (#6652) — @aibrahim | new-features |
| ノイズの多いエラーレベル stderr を避けるため、関数呼び出しペイロードログをデバッグレベルに降格 (#6808) — @cassirer | Demote function call payload log to debug to avoid noisy error-level stderr (#6808) — @cassirer | new-features |
| execpolicy2 拡張 (#6627) — @zhao | execpolicy2 extension (#6627) — @zhao | new-features |
| [app-server] 機能: v2 コマンド実行承認フローを追加 (#6758) — @owenlin0 | [app-server] feat: add v2 command execution approval flow (#6758) — @owenlin0 | new-features |
| バックグラウンドでのレート制限取得 (#6789) — @zhao | background rate limits fetch (#6789) — @zhao | new-features |
| サンドボックスが上書きできないよう cap_sid ファイルを ~/.codex に移動 (#6798) — @iceweasel | move cap_sid file into ~/.codex so the sandbox cannot overwrite it (#6798) — @iceweasel | new-features |
| Windows での Alt-Gr に関する TUI の問題を修正 (#6799) — @etraut | Fix TUI issues with Alt-Gr on Windows (#6799) — @etraut | new-features |
| core: シェルツールを無効化する機能を追加 (#6481) — @172423086+nornagon-openai | core: add a feature to disable the shell tool (#6481) — @172423086+nornagon-openai | new-features |
| 整理(core) シェル指示を更新 (#6679) — @dylan.hurd | chore(core) Update shell instructions (#6679) — @dylan.hurd | new-features |
| 修正: すべての app server v2 型に camelCase アノテーションを追加 (#6791) — @owenlin0 | fix: annotate all app server v2 types with camelCase (#6791) — @owenlin0 | new-features |
| LM Studio OSS サポート (#2312) — @rugved | LM Studio OSS Support (#2312) — @rugved | new-features |
| [app-server] readme にイベントを追加 (#6690) — @celia | [app-server] add events to readme (#6690) — @celia | new-features |
| core/tui: 非ブロッキング MCP 起動 (#6334) — @172423086+nornagon-openai | core/tui: non-blocking MCP startup (#6334) — @172423086+nornagon-openai | new-features |
| 整理: chatwidget::tests::binary_size_transcript_snapshot tui テストを削除 (#6759) — @owenlin0 | chore: delete chatwidget::tests::binary_size_transcript_snapshot tui test (#6759) — @owenlin0 | new-features |
| 機能: execpolicy v2 (#6467) — @zhao | feat: execpolicy v2 (#6467) — @zhao | new-features |
| 細かい修正: 個人用 git ignore (#6787) — @jif | nit: personal git ignore (#6787) — @jif | new-features |
| 一時: windows 2 用 sccache を削除 (#6775) — @jif | tmp: drop sccache for windows 2 (#6775) — @jif | new-features |
| 機能: デコードできない画像用のプレースホルダで 400 エラーを防止 (#6773) — @jif | feat: placeholder for image that can't be decoded to prevent 400 (#6773) — @jif | new-features |
| 修正(core) shell_command をシリアライズ (#6744) — @dylan.hurd | fix(core) serialize shell_command (#6744) — @dylan.hurd | new-features |
| FreeBSD/OpenBSD ビルドを修正: ターゲット固有のキーリング機能と BSD ハードニング (#6680) — @jinxiaoyong | Fix FreeBSD/OpenBSD builds: target-specific keyring features and BSD hardening (#6680) — @jinxiaoyong | new-features |
| "codex" GitHub ユーザーを CLA 署名から除外 (#6724) — @etraut | Exempt the "codex" github user from signing the CLA (#6724) — @etraut | new-features |
| 整理(deps): actions/github-script を 7 から 8 にバージョンアップ (#6755) — @49699333+dependabot[bot] | chore(deps): bump actions/github-script from 7 to 8 (#6755) — @49699333+dependabot[bot] | new-features |
| 修正: 空の finish_reason 処理による Claude モデルの不完全なレスポンスを修正 (#6728) — @dulikaifazr | Fix: Claude models return incomplete responses due to empty finish_reason handling (#6728) — @dulikaifazr | new-features |
| 修正: Windows Codex ターミナルでの AltGr/バックスラッシュ入力 (#6720) — @pornotato | Fix AltGr/backslash input on Windows Codex terminal (#6720) — @pornotato | new-features |
| 取り消し: "一時: windows 用 sccache を削除 (#6673)" (#6751) — @etraut | Revert "tmp: drop sccache for windows (#6673)" (#6751) — @etraut | new-features |
| 修正: スクリプトベースツールの Windows MCP サーバー実行を解決 (#3828) — @jlee14281 | fix: resolve Windows MCP server execution for script-based tools (#3828) — @jlee14281 | new-features |
| 修正: カスタムプロンプトの名前付き引数のドキュメントエラーを修正し、標準例を追加 (#5910) — @169171880+Sayeem3051 | Fix documentation errors for Custom Prompts named arguments and add canonical examples (#5910) — @169171880+Sayeem3051 | new-features |
| 二重切り詰めのパニックを強化 (#6701) — @aibrahim | Tighten panic on double truncation (#6701) — @aibrahim | new-features |
| コンパクト機能を改善 (#6692) — @aibrahim | Improve compact (#6692) — @aibrahim | new-features |
| 切り詰めヘルパーを独自ファイルにリファクタリング (#6683) — @aibrahim | Refactor truncation helpers into its own file (#6683) — @aibrahim | new-features |
| 取り消し: "winget パッケージの検証/送信用テンプレートとビルドステップ" (#6696) — @aibrahim | Revert "templates and build step for validating/submitting winget package" (#6696) — @aibrahim | new-features |
| ci: CLA アシスタントを openai org リポジトリのみで実行 (#6687) — @joshka | ci: only run CLA assistant for openai org repos (#6687) — @joshka | new-features |
| オンボーディングでの「信頼しない」ディレクトリ選択を処理 (#4941) — @viniciusmotta8 | Handle "Don't Trust" directory selection in onboarding (#4941) — @viniciusmotta8 | new-features |
| unified_exec_respects_workdir_override を無視 (#6693) — @pakrym | Ignore unified_exec_respects_workdir_override (#6693) — @pakrym | new-features |
| 入力の前に出力を並べ替え (#6691) — @pakrym | Order outputs before inputs (#6691) — @pakrym | new-features |
| 機能: 内部使用向け app-server-test-client クレートを追加 (#5391) — @owenlin0 | feat: add app-server-test-client crate for internal use (#5391) — @owenlin0 | new-features |
| codex 検出を修正、新しいセキュリティ重視のスモークテストを追加 (#6682) — @iceweasel | fix codex detection, add new security-focused smoketests. (#6682) — @iceweasel | new-features |
| 機能(ts-sdk): CLI 環境のオーバーライドを許可 (#6648) — @lopopolo | feat(ts-sdk): allow overriding CLI environment (#6648) — @lopopolo | new-features |
| winget パッケージの検証/送信用テンプレートとビルドステップ (#6485) — @iceweasel | templates and build step for validating/submitting winget package (#6485) — @iceweasel | new-features |
| テストタイムアウトを追加 (#6612) — @pakrym | Add test timeout (#6612) — @pakrym | new-features |
| TUI 通知をデフォルトで有効化 (#6633) — @172423086+nornagon-openai | Enable TUI notifications by default (#6633) — @172423086+nornagon-openai | new-features |
| 一時: windows 用 sccache を削除 (#6673) — @jif | tmp: drop sccache for windows (#6673) — @jif | new-features |
| [App server] MCP ツール呼び出しアイテムの開始/完了イベントを追加 (#6642) — @celia | [App server] add mcp tool call item started/completed events (#6642) — @celia | new-features |
| 機能: トークナイザーをキャッシュ (#6609) — @jif | feat: cache tokenizer (#6609) — @jif | new-features |
| 機能: unified_exec の UI を改善 (#6515) — @jif | feat: better UI for unified_exec (#6515) — @jif | new-features |
| 機能: /new 実行時に再開ログを追加 (#6660) — @jif | feat: add resume logs when doing /new (#6660) — @jif | new-features |
| テスト: SSE モック用に mount_sse_once_match を mount_sse_once に置き換え (#6640) — @pakrym | tests: replace mount_sse_once_match with mount_sse_once for SSE mocking (#6640) — @pakrym | new-features |
| スイートテスト用の共有ヘルパーを昇格 (#6460) — @aibrahim | Promote shared helpers for suite tests (#6460) — @aibrahim | new-features |
| チャット補完テストで共有ネットワークゲーティングヘルパーを使用 (#6461) — @aibrahim | Use shared network gating helper in chat completion tests (#6461) — @aibrahim | new-features |
| 二重切り詰めを回避 (#6631) — @aibrahim | Avoid double truncation (#6631) — @aibrahim | new-features |
| 取り消し: "取り消し \"シェル検出の見直しと unified exec のコマンド生成の一元化\"" (#6607) — @pakrym | Revert "Revert \"Overhaul shell detection and centralize command generation for unified exec\"" (#6607) — @pakrym | new-features |
| [app-server] JSON スキーマエクスポートと one-of 型の小さな修正 (#6614) — @owenlin0 | [app-server] small fixes for JSON schema export and one-of types (#6614) — @owenlin0 | new-features |
| [App-server] 新しい v2 イベントを追加:`item/reasoning/delta`、`item/agentMessage/delta`、`item/reasoning/summaryPartAdded` (#6559) — @celia | [App-server] add new v2 events:`item/reasoning/delta`, `item/agentMessage/delta` & `item/reasoning/summaryPartAdded` (#6559) — @celia | new-features |
| 整理(core) apply_patch テストを統合 (#6545) — @dylan.hurd | chore(core) Consolidate apply_patch tests (#6545) — @dylan.hurd | new-features |
| 失敗したテストのみをリスト表示 (#6619) — @pakrym | Only list failed tests (#6619) — @pakrym | new-features |
| 機能: exec と TypeScript SDK に --add-dir サポートを追加 (#6565) — @33551757+danfhernandez | feat: Add support for --add-dir to exec and TypeScript SDK (#6565) — @33551757+danfhernandez | new-features |
| TypeScript SDK に AbortSignal サポートを追加 (#6378) — @33551757+danfhernandez | Add AbortSignal support to TypeScript SDK (#6378) — @33551757+danfhernandez | new-features |
| close-stale-contributor-prs.yml ワークフローを有効化 (#6615) — @pakrym | Enable close-stale-contributor-prs.yml workflow (#6615) — @pakrym | new-features |
| デフォルトの yield time を更新 (#6610) — @pakrym | Update default yield time (#6610) — @pakrym | new-features |
| 古い PR をクローズするワークフロー (#6594) — @pakrym | Close stale PRs workflow (#6594) — @pakrym | new-features |
| プロンプトキャッシングテストを test_codex に移行 (#6605) — @pakrym | Migrate prompt caching tests to test_codex (#6605) — @pakrym | new-features |
| 取り消し: "シェル検出の見直しと unified exec のコマンド生成の一元化" (#6606) — @pakrym | Revert "Overhaul shell detection and centralize command generation for unified exec" (#6606) — @pakrym | new-features |
| シェル検出の見直しと unified exec のコマンド生成の一元化 (#6577) — @pakrym | Overhaul shell detection and centralize command generation for unified exec (#6577) — @pakrym | new-features |

## 0.58.0

| 日本語 | English | Category |
|--------|---------|----------|
| gpt5.1 モデルファミリーのサポート。[詳細](www.openai.com/index/gpt-5-1) | Support for gpt5.1 models family. [Read more](www.openai.com/index/gpt-5-1) | new-features |
| アプリサーバーの機能強化: 新しい JSON スキーマジェネレーターコマンド、アイテム開始/完了イベント、マクロのクリーンアップ、定型コードの削減、および重複コードの衛生管理の強化 (#6406 #6517 #6470 #6488) | App server enhancements: new JSON schema generator command, item started/completed events, macro cleanup, reduced boilerplate, and tightened duplicate-code hygiene (#6406 #6517 #6470 #6488). | new-features |
| 品質改善: ドキュメント更新 (web_search、SDK、config)、TUI ショートカットのインライン表示、seatbelt/Wayland/brew/compaction/cloud-tasks のバグ修正、より明確な警告、認証対応のステータス出力、および OTEL テストの安定化 (#5889 #6424 #6425 #6376 #6421 #4824 #6238 #5856 #6446 #6529 #6541) | Quality of life fixes: doc updates (web_search, SDK, config), TUI shortcuts inline, seatbelt/Wayland/brew/compaction/cloud-tasks bugfixes, clearer warnings, auth-aware status output, and OTEL test stabilization (#5889 #6424 #6425 #6376 #6421 #4824 #6238 #5856 #6446 #6529 #6541). | new-features |
| #6381 — world-writable スキャンの改善 (`917f39ec1`) | #6381 — Improve world-writable scan (`917f39ec1`) | new-features |
| #5889 — feat(tui): 承認オプションのキーボードショートカットをインライン表示 (`5beb6167c`) | #5889 — feat(tui): Display keyboard shortcuts inline for approval options (`5beb6167c`) | new-features |
| #6389 — world-writable 警告のさらなる改善 (`a47181e47`) | #6389 — more world-writable warning improvements (`a47181e47`) | new-features |
| #6425 — SDK ドキュメントの修正: 「file diffs」を「file change notifications」に置き換え (`8b80a0a26`) | #6425 — Fix SDK documentation: replace “file diffs” with “file change notifications” (`8b80a0a26`) | new-features |
| #6421 — fix(seatbelt): hw.physicalcpu の読み取りを許可 (`c07461e6f`) | #6421 — fix(seatbelt): Allow reading hw.physicalcpu (`c07461e6f`) | new-features |
| #5856 — fix(cloud-tasks): `cli_auth_credentials_store` 設定を尊重 (`5f1fab0e7`) | #5856 — fix(cloud-tasks): respect `cli_auth_credentials_store` config (`5f1fab0e7`) | new-features |
| #6387 — Windows での npm アップグレード時、パストラバーサルを機能させるため cmd.exe 経由で実行 (`625f2208c`) | #6387 — For npm upgrade on Windows, go through cmd.exe to get path traversal working (`625f2208c`) | new-features |
| #6437 — chore(deps): codespell-project/actions-codespell を 2.1 から 2.2 にバージョンアップ (`7c7c7567d`) | #6437 — chore(deps): bump codespell-project/actions-codespell from 2.1 to 2.2 (`7c7c7567d`) | new-features |
| #6438 — chore(deps): taiki-e/install-action を 2.60.0 から 2.62.49 にバージョンアップ (`082d2fa19`) | #6438 — chore(deps): bump taiki-e/install-action from 2.60.0 to 2.62.49 (`082d2fa19`) | new-features |
| #6443 — chore(deps): /codex-rs の askama を 0.12.1 から 0.14.0 にバージョンアップ (`78b2aeea5`) | #6443 — chore(deps): bump askama from 0.12.1 to 0.14.0 in /codex-rs (`78b2aeea5`) | new-features |
| #6444 — chore(deps): /codex-rs の zeroize を 1.8.1 から 1.8.2 にバージョンアップ (`e2598f509`) | #6444 — chore(deps): bump zeroize from 1.8.1 to 1.8.2 in /codex-rs (`e2598f509`) | new-features |
| #6446 — 警告メッセージの文言を修正 (`131c38436`) | #6446 — Fix warning message phrasing (`131c38436`) | new-features |
| #6424 — 設定ドキュメントの修正: TOML パース説明を訂正 (`557ac6309`) | #6424 — Fix config documentation: correct TOML parsing description (`557ac6309`) | new-features |
| #6454 — compact を移動 (`50a77dc13`) | #6454 — Move compact (`50a77dc13`) | new-features |
| #6376 — `web_search` 設定の最近の変更を反映するようドキュメントを更新 (`65cb1a1b7`) | #6376 — Updated docs to reflect recent changes in `web_search` configuration (`65cb1a1b7`) | new-features |
| #6407 — fix: app_server_protocol から generate_ts を使用 (`42683dadf`) | #6407 — fix: use generate_ts from app_server_protocol (`42683dadf`) | new-features |
| #6419 — ログインメニューからの終了をサポート (`b46012e48`) | #6419 — Support exiting from the login menu (`b46012e48`) | new-features |
| #6422 — マージされずにクローズされた PR をロックしないように変更 (`591615315`) | #6422 — Don’t lock PRs that have been closed without merging (`591615315`) | new-features |
| #6406 — [app-server] feat: JSON スキーマを生成するコマンドを追加 (`fbdedd9a0`) | #6406 — [app-server] feat: add command to generate json schema (`fbdedd9a0`) | new-features |
| #6238 — fix: brew 自動更新のバージョンチェックを更新 (`788badd22`) | #6238 — fix: update brew auto update version check (`788badd22`) | new-features |
| #6433 — レート制限モデル提案のオプトアウトを追加 (`e743d251a`) | #6433 — Add opt-out for rate limit model nudge (`e743d251a`) | new-features |
| #6246 — ユーザーコマンドイベントタイプを追加 (`980886498`) | #6246 — Add user command event types (`980886498`) | new-features |
| #6466 — feat: unified_exec に workdir を追加 (`f01f2ec9e`) | #6466 — feat: add workdir to unified_exec (`f01f2ec9e`) | new-features |
| #6468 — [app-server] chore: initialize を非推奨 API セクションから移動 (`2ac49fea5`) | #6468 — [app-server] chore: move initialize out of deprecated API section (`2ac49fea5`) | new-features |
| #4824 — Wayland での画像ペーストエラーを修正 (`52e97b9b6`) | #4824 — Fix wayland image paste error (`52e97b9b6`) | new-features |
| #4098 — codex debug seatbelt --log-denials を追加 (`0271c20d8`) | #4098 — add codex debug seatbelt --log-denials (`0271c20d8`) | new-features |
| #6477 — refactor(tui): Ctrl-Z 処理のためのジョブコントロール (`60deb6773`) | #6477 — refactor(tui): job-control for Ctrl-Z handling (`60deb6773`) | new-features |
| #6470 — [app-server] メソッド名変更時の定型コードを削減するマクロを更新 (`3838d6739`) | #6470 — [app-server] update macro to make renaming methods less boilerplate-y (`3838d6739`) | new-features |
| #6478 — CLI リリース用に Windows .exe ファイルアーティファクトをアップロード (`9aff64e01`) | #6478 — upload Windows .exe file artifacts for CLI releases (`9aff64e01`) | new-features |
| #6482 — レート制限ステータスバーを反転 (`930f81a17`) | #6482 — flip rate limit status bar (`930f81a17`) | new-features |
| #6480 — unified exec で codex-linux-sandbox を使用 (`6c36318bd`) | #6480 — Use codex-linux-sandbox in unified exec (`6c36318bd`) | new-features |
| #6489 — bash パース処理をより近くに配置 (`bb7b0213a`) | #6489 — Colocate more of bash parsing (`bb7b0213a`) | new-features |
| #6488 — [hygiene][app-server] turn API の重複コード用ヘルパー関数を作成 (`695187277`) | #6488 — [hygiene][app-server] have a helper function for duplicate code in turn APIs (`695187277`) | new-features |
| #6041 — ghost_commit 機能をデフォルトで有効化 (`052b05283`) | #6041 — Enable ghost_commit feature by default (`052b05283`) | new-features |
| #6503 — nit: ログを trace に変更 (`ad279eacd`) | #6503 — nit: logs to trace (`ad279eacd`) | new-features |
| #6492 — unified exec のエスカレーション処理とテストを追加 (`807e2c27f`) | #6492 — Add unified exec escalation handling and tests (`807e2c27f`) | new-features |
| #6517 — [app-server] ターンアイテム用のアイテム開始/完了イベントを追加 (`e357fc723`) | #6517 — [app-server] add item started/completed events for turn items (`e357fc723`) | new-features |
| #6523 — full-auto の説明を on-request で更新 (`eb1c651c0`) | #6523 — Update full-auto description with on-request (`eb1c651c0`) | new-features |
| #6528 — generate-ts に prettier log-level=warn を再追加 (`424bfecd0`) | #6528 — Re-add prettier log-level=warn to generate-ts (`424bfecd0`) | new-features |
| #6507 — feat: 再開時のモデル切り替え警告 (`530db0ad7`) | #6507 — feat: warning switch model on resume (`530db0ad7`) | new-features |
| #6510 — feat: shell_command ツール (`29364f3a9`) | #6510 — feat: shell_command tool (`29364f3a9`) | new-features |
| #6516 — chore: ブール値が設定オーバーライドとしてパース可能であることを検証 (`c3a710ee1`) | #6516 — chore: verify boolean values can be parsed as config overrides (`c3a710ee1`) | new-features |
| #6541 — otel テストを修正 (`7d9ad3eff`) | #6541 — Fix otel tests (`7d9ad3eff`) | new-features |
| #6534 — feat: ghost commit では変更を伴うツールのみを待機 (`e00eb50db`) | #6534 — feat: only wait for mutating tools for ghost commit (`e00eb50db`) | new-features |
| #6529 — AuthManager からの認証情報を使用するようステータス出力を修正 (`ad09c138b`) | #6529 — Fixed status output to use auth information from AuthManager (`ad09c138b`) | new-features |
| #6551 — gpt-5.1 モデル定義を追加 (`ec69a4a81`) | #6551 — Add gpt-5.1 model definitions (`ec69a4a81`) | new-features |
| #6558 — ログ記録でリクエストボディを二重エンコードしないように修正 (`2f58e6999`) | #6558 — Do not double encode request bodies in logging (`2f58e6999`) | new-features |
| #6483 — [app-server] feat: thread/resume が履歴、パス、およびオーバーライドをサポート (`964220ac9`) | #6483 — [app-server] feat: thread/resume supports history, path, and overrides (`964220ac9`) | new-features |
| #6561 — gpt5.1 用の新規ユーザー体験 (`e63ab0dd6`) | #6561 — NUX for gpt5.1 (`e63ab0dd6`) | new-features |
| #6568 — 5.1 の詳細度を低に設定 (`f97874093`) | #6568 — Set verbosity to low for 5.1 (`f97874093`) | new-features |
| #6567 — 新規ユーザー体験の一部としてモデルピッカーのサブタイトルを更新 (`966d71c02`) | #6567 — Update subtitle of model picker as part of the nux (`966d71c02`) | new-features |
| #6569 — gpt5.1 を含むようモデルピッカーを変更 (`ad7eaa80f`) | #6569 — Change model picker to include gpt5.1 (`ad7eaa80f`) | new-features |
| #6575 — ツールのプロセスが stderr/stdout を共有する子プロセスを生成した際のハングを回避 (`73ed30d7e`) | #6575 — Avoid hang when tool’s process spawns grandchild that shares stderr/stdout (`73ed30d7e`) | new-features |
| #6580 — porcupine モデルスラッグを削除 (`b1979b70a`) | #6580 — remove porcupine model slug (`b1979b70a`) | new-features |
| #6583 — feat: gpt mini を表示 (`e3aaee00c`) | #6583 — feat: show gpt mini (`e3aaee00c`) | new-features |
| #6585 — モデル移行提案のコピー (`305fe73d8`) | #6585 — copy for model migration nudge (`305fe73d8`) | new-features |
| #6586 — 推論レベルの更新 (`e3dd362c9`) | #6586 — Reasoning level update (`e3dd362c9`) | new-features |
| #6593 — 5.1 のデフォルトを明示的な中程度の推論に設定 (`34621166d`) | #6593 — Default to explicit medium reasoning for 5.1 (`34621166d`) | new-features |
| #6588 — chore(core) gpt-5.1 用のプロンプトを更新 (`8dcbd29ed`) | #6588 — chore(core) Update prompt for gpt-5.1 (`8dcbd29ed`) | new-features |
| #6597 — feat: 圧縮後に残ったコンテキストをプロキシ (`2a417c47a`) | #6597 — feat: proxy context left after compaction (`2a417c47a`) | new-features |
| #6589 — モデルピッカーの折り返しを修正 (`ba74cee6f`) | #6589 — fix model picker wrapping (`ba74cee6f`) | new-features |

## 0.57.0

| 日本語 | English | Category |
|--------|---------|----------|
| TUI の使い勝手向上: スラッシュコマンドリストの ctrl-n/p ナビゲーションとバックトラック時の /status ノイズスキップ | TUI quality-of-life: ctrl-n/p navigation for slash command lists and backtracking skips the /status noise. | new-features |
| 長時間実行コマンドのタイムアウトを改善 | Improve timeout on long running commasnds | new-features |
| #6233 – フリーフォーム統合実行出力フォーマット | #6233 – Freeform unified exec output formatting | new-features |
| #6342 – `generate_ts` の prettier 出力を警告のみに変更 | #6342 – Make `generate_ts` prettier output warn-only | new-features |
| #6335 – TUI: `/status` を超えたバックトラックを修正 | #6335 – TUI: fix backtracking past `/status` | new-features |
| #1994 – スラッシュコマンド、ファイル、履歴のナビゲーションに CTRL-n/CTRL-p を有効化 | #1994 – Enable CTRL-n/CTRL-p for navigating slash commands, files, history | new-features |
| #6340 – `insufficient_quota` エラー時のリトライをスキップ | #6340 – Skip retries on `insufficient_quota` errors | new-features |
| #6345 – 統合実行が有効な場合はシェルツールを削除 | #6345 – Remove shell tool when unified exec is enabled | new-features |
| #6347 – AI ラベラールールを issue トラッカーラベルに合わせて更新 | #6347 – Refresh AI labeler rules to match issue tracker labels | new-features |
| #6346 – `wait_for_event_with_timeout` より `wait_for_event` を優先(初回更新) | #6346 – Prefer `wait_for_event` over `wait_for_event_with_timeout` (initial update) | new-features |
| #5486 – `apply_patch` のリネーム/移動パス解決を修正 | #5486 – Fix `apply_patch` rename/move path resolution | new-features |
| #6349 – `wait_for_event_with_timeout` より `wait_for_event` を優先(追加更新) | #6349 – Prefer `wait_for_event` over `wait_for_event_with_timeout` (follow-up) | new-features |
| #6336 – App-server: `account/read` エンドポイントを実装 | #6336 – App-server: implement `account/read` endpoint | new-features |
| #6338 – App-server: `Thread` に追加フィールドを公開 | #6338 – App-server: expose additional fields on `Thread` | new-features |
| #6353 – App-server: auth v2 ドキュメント追加と Codex MCP インターフェースセクション更新 | #6353 – App-server: add auth v2 doc & update Codex MCP interface section | new-features |
| #6368 – App-server: threads と turns に関する README 更新 | #6368 – App-server: README updates for threads and turns | new-features |
| #6351 – シェル設定ツールをモデルファミリー設定に昇格 | #6351 – Promote shell config tool to model family config | new-features |
| #6369 – TUI: `tui.rs` にインラインコメントを追加 | #6369 – TUI: add inline comments to `tui.rs` | new-features |
| #6370 – `create_github_release` スクリプトに `--promote-alpha` オプションを追加 | #6370 – Add `--promote-alpha` option to `create_github_release` script | new-features |
| #6367 – SDK: TypeScript SDK に `network_access` と `web_search` オプションを追加 | #6367 – SDK: add `network_access` and `web_search` options to TypeScript SDK | new-features |
| #6097 (#6086 の作業を含む) – WSL: 更新時に Windows パスを正規化 | #6097 (includes work from #6086) – WSL: normalize Windows paths during update | new-features |
| #6377 – App-server ドキュメント: 初期化セクションを追加 | #6377 – App-server docs: add initialization section | new-features |
| #6373 – ターミナルリファクタリング: 非推奨のフラッシュロジックを削除 | #6373 – Terminal refactor: remove deprecated flush logic | new-features |
| #6252 – コア: Cloudflare 403 HTML を分かりやすいメッセージに置換 | #6252 – Core: replace Cloudflare 403 HTML with friendly message | new-features |
| #6380 – 統合実行: 承認なしで安全なコマンドを許可 | #6380 – Unified exec: allow safe commands without approval | new-features |
| #5258 – タイムアウト時にシェルツールのプロセスグループを終了 | #5258 – Kill shell tool process groups on timeout | new-features |

## 0.56.0

| 日本語 | English | Category |
|--------|---------|----------|
| 新モデル GPT-5-Codex-Mini の導入 — GPT-5-Codex のよりコンパクトでコスト効率の高いバージョン | Introducing our new model GPT-5-Codex-Mini — a more compact and cost-efficient version of GPT-5-Codex | new-features |
| #6211 修正: 非推奨メッセージをドキュメントへのリンクに更新 | #6211 fix: Update the deprecation message to link to the docs | new-features |
| #6212 [app-server] 機能: export.rs が v2 名前空間をサポート、初期 v2 実装 | #6212 [app-server] feat: export.rs supports a v2 namespace, initial v2 | new-features |
| #6230 nix ビルドを修正 | #6230 Fix nix build | new-features |
| #3643 修正(core): シンボリックリンクされた Markdown ファイルからカスタムプロンプトを読み込み | #3643 fix(core): load custom prompts from symlinked Markdown files | new-features |
| #4200 codex を pid 1 から実行可能に | #4200 allow codex to be run from pid 1 | new-features |
| #6234 rmcp を 0.8.4 にアップグレード | #6234 Upgrade rmcp to 0.8.4 | new-features |
| #6237 TypeScript SDK に modelReasoningEffort オプションを追加 | #6237 Add modelReasoningEffort option to TypeScript SDK | new-features |
| #5565 tui: ChatWidget と BottomPane を Renderables を使用するようリファクタリング | #5565 tui: refactor ChatWidget and BottomPane to use Renderables | new-features |
| #6229 会話履歴ファイルを独自のディレクトリにリファクタリング | #6229 refactor Conversation history file into its own directory | new-features |
| #6231 「再接続中」の動作に対処するためトークン更新処理を改善 | #6231 Improved token refresh handling to address “Re-connecting” behavior | new-features |
| #6261 rmcp を 0.8.5 に更新 | #6261 Update rmcp to 0.8.5 | new-features |
| #6214 [app-server] 機能: v2 Thread API | #6214 [app-server] feat: v2 Thread APIs | new-features |
| #6282 CI での断続的なテスト失敗を修正 | #6282 Fixes intermittent test failures in CI | new-features |
| #6249 環境選択モーダルが開いているときに r キーの入力をキャプチャしないように修正 | #6249 stop capturing r when environment selection modal is open | new-features |
| #6183 [App-server] account/login/start と account/login/completed の v2 を実装 | #6183 [App-server] Implement v2 for account/login/start and account/login/completed | new-features |
| #6285 TUI でログインメニューの解除を防止 | #6285 Prevent dismissal of login menu in TUI | new-features |
| #4388 修正: ToC が自身を含まないように、また末尾マーカーを重複させないように修正 | #4388 fix: ToC so it doesn’t include itself or duplicate the end marker | new-features |
| #6288 [App-server] account/login/cancel v2 エンドポイントを追加 | #6288 [App-server] Add account/login/cancel v2 endpoint | new-features |
| #6286 機能: クエリに対するモデルナッジを追加 | #6286 feat: add model nudge for queries | new-features |
| #6300 機能: 単一の reasoning effort を持つモデルをサポート | #6300 feat: support models with single reasoning effort | new-features |
| #6319 その他: 明確化のため名称変更 | #6319 chore: rename for clarity | new-features |
| #6216 [app-server] 機能: v2 Turn API | #6216 [app-server] feat: v2 Turn APIs | new-features |
| #6295 ドキュメント: 上級ガイドのコードフェンスとタイプミスを修正 | #6295 docs: Fix code fence and typo in advanced guide | new-features |
| #6326 その他: 文法の誤りを修正 | #6326 chore: fix grammar mistakes | new-features |
| #6283 Windows サンドボックス: Everyone 書き込み可能ディレクトリの警告を表示 | #6283 Windows Sandbox: Show Everyone-writable directory warning | new-features |
| #6289 その他: 関連するテストを app-server/tests/suite/v2 に移動 | #6289 chore: move relevant tests to app-server/tests/suite/v2 | new-features |
| #6333 機能: gpt-5-codex は要求されない限りコミットを amend しないことを明確化 | #6333 feat: clarify that gpt-5-codex should not amend commits unless requested | new-features |
| #6332 バグレポートへのリンクを要求するようコントリビューションガイドラインと PR テンプレートを更新 | #6332 Updated contributing guidelines and PR template to request link to bug report | new-features |
| #5980 core: ネットワークが有効な場合に証明書操作を許可するようサンドボックスを拡張 | #5980 core: widen sandbox to allow certificate ops when network is enabled | new-features |
| #6337 [App Server] listConversations により多くのセッションメタデータを追加 | #6337 [App Server] Add more session metadata to listConversations | new-features |

## 0.53.0

| 日本語 | English | Category |
|--------|---------|----------|
| エラー 400 の問題を修正 | Fixing error 400 issues | new-features |
| Java のサンドボックス化を改善 | Improve sandboxing for Java | new-features |

## 0.52.0

| 日本語 | English | Category |
|--------|---------|----------|
| TUI 改善: ストリーミング中のキューメッセージ表示、Windows 自動モードガイダンス、元に戻す操作、圧縮プロンプトを設定可能に | TUI polish: queued messages visible during streaming; Windows auto-mode guidance; undo op; compaction prompt configurable. | new-features |
| 画像: クライアント側画像リサイズ、MIME 検証によるクラッシュ防止、SDK 画像転送テストを再有効化 | Images: client-side image resizing; prevent crashes with MIME verification; SDK image forwarding tests re-enabled. | new-features |
| `!<cmd>` でコマンドを直接実行可能に | Execute commands directly with `!<cmd>` | new-features |
| より多くの使用量のためにクレジットを購入可能に。[詳細情報](https://help.openai.com/en/articles/12642688-using-credits-for-flexible-usage-in-chatgpt-pluspro) | Ability to buy credits for more usage. [More information](https://help.openai.com/en/articles/12642688-using-credits-for-flexible-usage-in-chatgpt-pluspro) | new-features |
| 認証: キーリングサポートと設定可能なバックエンドを備えた新しい CLI 認証ストレージ抽象化 | Auth: new CLI auth storage abstraction with keyring support and configurable backend. | new-features |
| アプリサーバー: GetConversationSummary RPC、ID による会話サマリーの取得・再開、アカウント・プロトコル型の改善 | App server: GetConversationSummary RPC; fetch/resume conversation summaries by id; refined account/protocol types. | new-features |
| 実行・イベント: アイテムストリーミングイベント、ゴーストコミット、明確な非推奨警告、トークン更新処理とログの改善 | Execution/events: item streaming events; ghost commits; clearer deprecation warnings; better token refresh handling and logs. | new-features |
| 会話管理: すべてのツール出力の一元的な切り詰め、前ターンの推論をフィルタリング、model_provider による会話の注釈付け | Conversation management: centralized truncation for all tool outputs; filter out prior-turn reasoning; annotate conversations with model_provider. | new-features |

## 0.50.0

| 日本語 | English | Category |
|--------|---------|----------|
| `/feedback` を改善し、より良い診断情報を取得できるようになりました。問題を報告する際にご利用ください。(#5661, #5663) | Improved `/feedback` to get better diagnostics. Please use it to report any issues. (#5661, #5663). | new-features |
| #5536 — サンドボックスポリシーに違反するコマンドに対して、モデル要約とリスク評価を追加 | #5536 — Added model summary and risk assessment for commands that violate sandbox policy | new-features |
| #5542 — [MCP] rmcp を 0.8.3 に更新 (@gpeal) | #5542 — [MCP] Update rmcp to 0.8.3 (@gpeal) | new-features |
| #5564 — リクエストログ機能付き CodexHttpClient ラッパーを追加 (@pakrym-oai) | #5564 — Add CodexHttpClient wrapper with request logging (@pakrym-oai) | new-features |
| #5570 — 古いレート制限と、レート制限がキャッシュされていない場合のメッセージを追加 (@zhao-oai) | #5570 — adding messaging for stale rate limits + when no rate limits are cached (@zhao-oai) | new-features |
| #5578 — [codex][app-server] codex/event/raw_item イベントを導入 (@apanasenko-oai) | #5578 — [codex][app-server] introduce codex/event/raw_item events (@apanasenko-oai) | new-features |
| #5581 — token_info を ConversationHistory に移動 (@aibrahim-oai) | #5581 — Moving token_info to ConversationHistory (@aibrahim-oai) | new-features |
| #5582 — Mac のキーヒントに Option シンボルを使用 (@joshka-oai) | #5582 — Use Option symbol for mac key hints (@joshka-oai) | new-features |
| #5595 — [MCP] タイムアウトと github の起動エラーを改善 (@gpeal) | #5595 — [MCP] Improve startup errors for timeouts and github (@gpeal) | new-features |
| #5625 — 修正: 不安定なテスト (@jif-oai) | #5625 — fix: flaky tests (@jif-oai) | new-features |
| #5640 — brew を使用した codex のアップグレード手順を追加 (@shijie-oai) | #5640 — Add instruction for upgrading codex with brew (@shijie-oai) | new-features |
| #5642 — [app-server] account/read レスポンスのアノテーションを修正 (@owenlin0) | #5642 — [app-server] fix account/read response annotation (@owenlin0) | new-features |
| #5645 — より多くのタイプのリクエスト ID をログに記録 (@pakrym-oai) | #5645 — Log more types of request IDs (@pakrym-oai) | new-features |
| #5648 — [MCP] /mcp と mcp get で環境変数の値を秘匿 (@gpeal) | #5648 — [MCP] Redact environment variable values in /mcp and mcp get (@gpeal) | new-features |
| #5653 — [MCP] experimental_use_rmcp_client を使用した mcp add 後のログインを適切に制御 (@gpeal) | #5653 — [MCP] Properly gate login after mcp add with experimental_use_rmcp_client (@gpeal) | new-features |
| #5654 — 不安定な単体テストを修正 (@etraut-openai) | #5654 — Fixed flaky unit test (@etraut-openai) | new-features |
| #5661 — フィードバックを改善 (@aibrahim-oai) | #5661 — Improve feedback (@aibrahim-oai) | new-features |
| #5663 — フィードバックのフォローアップ (@aibrahim-oai) | #5663 — Followup feedback (@aibrahim-oai) | new-features |
| #5680 — 不安定なテストをスキップ (@pakrym-oai) | #5680 — Skip flaky test (@pakrym-oai) | new-features |

## 0.41.0

| 日本語 | English | Category |
|--------|---------|----------|
| レート制限の可視化: 制限がリセットされる時刻を確認できます (#4111)。また、レート制限時に使用状況を確認できます (#4102) | Rate limits visibility: You can see when is your limits resetting (#4111) and see your usage when rate limited (#4102) | new-features |
| `exec` モードで `output-schema` を使用して出力スキーマを指定できるようになりました (#4079) | You can specify output schema in `exec` mode using `output-schema`. (#4079) | new-features |
| Ripgrep (`rg`) が `npm` リリースにバンドルされるようになりました (#3660)。これにより、`npm` 経由で `codex` をインストールする際に `@vscode/ripgrep` の `postinstall` ステップが失敗することがある問題 (#3842 など) が修正されます | Ripgrep (`rg`) is now vendored into the `npm` release (#3660), which should fix issues such as #3842 where the `postinstall` step of `@vscode/ripgrep` would sometimes fail when installing `codex` via `npm`. | new-features |

## 0.39.0

| 日本語 | English | Category |
|--------|---------|----------|
| `/review` コマンドを追加 (#3774) | new `/review` command introduced in #3774 | new-features |

## 0.38.0

| 日本語 | English | Category |
|--------|---------|----------|
| [#3806] 修正: gh 呼び出し時に --repo を指定 | [#3806] fix: specify --repo when calling gh (#3806) | new-features |

## 0.36.0

| 日本語 | English | Category |
|--------|---------|----------|
| ログイン機能改善 (#3632); APIキーとログイン状態の同時使用を許可する問題を修正 (#3611); ログインURL文字列の残存を修正 (#3639); カスタムプロバイダーの `get_auth_status` を修正 (#3581) | login polish (#3632); fix issue allowing to be both logged in and using API key simultaneously (#3611); fix stray login URL characters (#3639); fix `get_auth_status` for custom providers (#3581). | new-features |
| 修正: show_animation が正しく計算されるよう MIN_ANIMATION_HEIGHT を変更 (#3656) | fix: change MIN_ANIMATION_HEIGHT so show_animation is calculated correctly (#3656) | new-features |
| 機能: オンボーディング文言を調整 (#3650) | feat: tweak onboarding strings (#3650) | new-features |
| ログインURL文字列がログイン画面に残存する問題を修正 (#3639) | fix stray login url characters persisting in login (#3639) | new-features |
| gpt-5 プロンプトにファイル参照ガイドラインを追加 (#3651) | Add file reference guidelines to gpt-5 prompt (#3651) | new-features |
| 機能: 小さい端末でアニメーションをスキップ (#3647) | feat: skip animations on small terminals (#3647) | new-features |
| 雑務: リネーム (#3648) | chore: rename (#3648) | new-features |
| 修正: 参照を追加 (#3633) | fix: add references (#3633) | new-features |
| 雑務: 当面 `prerelease:true` に設定 (#3645) | chore: set `prerelease:true` for now (#3645) | new-features |
| 修正: unified exec の競合状態 (#3644) | fix: race condition unified exec (#3644) | new-features |
| 機能: スプラッシュ画面を更新 (#3631) | feat: update splash (#3631) | new-features |
| 雑務(依存): tracing-subscriber を 0.3.19 から 0.3.20 にバンプ (codex-rs) (#3620) | chore(deps): bump tracing-subscriber from 0.3.19 to 0.3.20 in /codex-rs (#3620) | new-features |
| 雑務(依存): slab を 0.4.10 から 0.4.11 にバンプ (codex-rs) (#3635) | chore(deps): bump slab from 0.4.10 to 0.4.11 in /codex-rs (#3635) | new-features |
| ログインフロー改善 (#3632) | Login flow polish (#3632) | new-features |
| codex resume で cd、model、search などのフラグが動作するよう修正 (#3625) | Fix codex resume so flags (cd, model, search, etc.) still work (#3625) | new-features |
| 機能: プリセットフィルタを厳格化、ストレージ読み込みログを抑制、ロールアウトプロンプトをデフォルト有効化 (#3628) | feat: tighten preset filter, tame storage load logs, enable rollout prompt by default (#3628) | new-features |
| resume 時に中断を表示 (#3629) | Show abort in the resume (#3629) | new-features |
| アニメーションフレームを変更 (#3627) | Change animation frames (#3627) | new-features |
| 初期 MCP 追加インターフェース (#3543) | initial mcp add interface (#3543) | new-features |
| 雑務: gpt-5-code 用プロンプトを更新 (#3624) | chore: update prompts for gpt-5-code (#3624) | new-features |
| 機能: ヘッダーに推論レベルを追加 (#3622) | feat: add reasoning level to header (#3622) | new-features |
| 差し戻し「HistoryCells を扱うよう transcript view をリファクタリング」 (#3614) | Revert "refactor transcript view to handle HistoryCells" (#3614) | new-features |
| 会話再開時にヘッダーを表示 (#3615) | Show the header when resuming a conversation (#3615) | new-features |
| ChatGPT でログイン時に API キーを確実に上書き (#3611) | When logging in using ChatGPT, make sure to overwrite API key (#3611) | new-features |
| apikey 使用時はモデル名を表示しない (#3607) | Don't show the model for apikey (#3607) | new-features |
| カスタムプロバイダー使用時の get_auth_status レスポンスを修正 (#3581) | Fix get_auth_status response when using custom provider (#3581) | new-features |
| 修正: model family と apply_patch の一貫性 (#3603) | fix: model family and apply_patch consistency (#3603) | new-features |
| 修正(tui): full-auto をデフォルトプリセットに更新 (#3608) | fix(tui): update full-auto to default preset (#3608) | new-features |
| 修正(core): 不安定なテスト `completed_commands_do_not_persist_sessions` (#3596) | fix(core): flaky test `completed_commands_do_not_persist_sessions` (#3596) | new-features |
| codespell でフレームファイルをスキップ (#3606) | Skip frames files in codespell (#3606) | new-features |
| チャットウィジェットにセッションヘッダーを追加 (#3592) | Add session header to chat widget (#3592) | new-features |
| 完全な生の推論イベントテキストを追加 (#3605) | Append full raw reasoning event text (#3605) | new-features |
| 機能: UI アニメーション (#3590) | feat: UI animation (#3590) | new-features |
| EventMsg Optional を修正 (#3604) | Fix EventMsg Optional (#3604) | new-features |
| gpt-5-code 用の単一ブランチ (#3601) | Single branch for gpt-5-code (#3601) | new-features |
| resume 機能を有効化 (#3537) | enable-resume (#3537) | new-features |
| 機能: モデル保存を更新 (#3589) | feat: update model save (#3589) | new-features |
| 不安定な Windows テストを修正 (#3564) | Fix flaky windows test (#3564) | new-features |
| gpt-5-code モデルセレクターを修正 (#3598) | Fix gpt-5-code model selector (#3598) | new-features |
| モデルファミリーごとのプロンプトを追加 (#3597) | Add per-model-family prompts (#3597) | new-features |
| タイムアウトをモデルに送信する際にコマンド出力を含める (#3576) | Include command output when sending timeout to model (#3576) | new-features |
| ユーザー履歴メッセージのプレフィックス幅を整列 (#3467) | Align user history message prefix width (#3467) | new-features |
| モデルアップグレードプロンプトを ChatGPT 認証の裏に配置 (#3586) | Gate model upgrade prompt behind ChatGPT auth (#3586) | new-features |
| 雑務: `output_lines()` を bool ではなく struct を受け取るよう更新 (#3591) | chore: update `output_lines()` to take a struct instead of bools (#3591) | new-features |
| キュー状態インジケーターメッセージの前にスペースを追加 (#3474) | Add spacing before queued status indicator messages (#3474) | new-features |
| コンパクト後の再開/フォークを処理 (#3533) | Handle resuming/forking after compact (#3533) | new-features |
| リファクタリング: HistoryCells を扱うよう transcript view を変更 (#3538) | refactor transcript view to handle HistoryCells (#3538) | new-features |
| gpt-5-code モデルで実験的な推論サマリーをデフォルト化 (#3560) | Default gpt-5-code models to experimental reasoning summaries (#3560) | new-features |
| Azure でより多くのアイテムタイプの ID を保持 (#3542) | Preserve IDs for more item types in azure (#3542) | new-features |
| 常に暗号化された cot をリクエスト (#3539) | Always request encrypted cot (#3539) | new-features |
| レビューモード (Core) (#3401) | Review Mode (Core) (#3401) | new-features |
| 修正: NIT の None 推論努力 (#3536) | fix: NIT None reasoning effort (#3536) | new-features |
| NUX UI を修正 (#3534) | Fix NUX UI (#3534) | new-features |
| core: デフォルトサンドボックスを拡張 (#3483) | core: expand default sandbox (#3483) | new-features |
| Azure Responses API の回避策を追加 (#3528) | Add Azure Responses API workaround (#3528) | new-features |
| コマンドがパッチとして解析される場合は実行を試みない (#3382) | if a command parses as a patch, do not attempt to run it (#3382) | new-features |
| 中断エラーメッセージのスタイリングを更新 (#3470) | Update interruption error message styling (#3470) | new-features |
| 機能: コンテキストコンパクション (#3446) | feat: context compaction (#3446) | new-features |
| コンポーザーフッターヒントの前にスペースを追加 (#3469) | Add spacing before composer footer hints (#3469) | new-features |
| ドロップダウンヘッダーとアイテムの間にスペースを追加 (#3472) | Add spacing between dropdown headers and items (#3472) | new-features |
| 機能: 推論努力をオプショナル化 (#3527) | feat: reasoning effort as optional (#3527) | new-features |
| 機能: SetDefaultModel RPC の動作を変更し、None で値をクリアするように (#3529) | feat: change the behavior of SetDefaultModel RPC so None clears the value. (#3529) | new-features |
| シェル説明を標準化 (#3514) | standardize shell description (#3514) | new-features |
| バグ: モデル保存を修正 (#3525) | bug: fix model save (#3525) | new-features |
| タイマー期間フォーマットにスペースを追加 (#3471) | Add spacing to timer duration formats (#3471) | new-features |
| コードレビューでの MCP ドキュメント変更リクエスト (#3507) | MCP Documentation Changes Requests in Code Review (#3507) | new-features |
| 雑務: `just test` を追加し、`cargo nextest` を実行 (#3508) | chore: add `just test`, which runs `cargo nextest` (#3508) | new-features |
| 機能: JSON-RPC サーバーに SetDefaultModel を追加 (#3512) | feat: added SetDefaultModel to JSON-RPC server (#3512) | new-features |
| 機能: NewConversationResponse に reasoning_effort を含める (#3506) | feat: include reasoning_effort in NewConversationResponse (#3506) | new-features |
| 追加(readme): IDE (#3494) | add(readme): IDE (#3494) | new-features |
| クライアントトレースに cf-ray ヘッダーをログ出力 (#3488) | Log cf-ray header in client traces (#3488) | new-features |
| バグ: デフォルトを image に (#3501) | bug: default to image (#3501) | new-features |
| 機能: TUI オンボーディング (#3398) | feat: TUI onboarding (#3398) | new-features |
| 使用制限 CTA のフォーマット時に PlanType enum を使用 (#3495) | Use PlanType enum when formatting usage-limit CTA (#3495) | new-features |
| MCP サーバー使用に関する詳細ドキュメントを追加 (#3345) | Add more detailed documentation on MCP server usage (#3345) | new-features |
| 修正: `handle_sandbox_error` タイムアウトを改善 (#3435) | fix: improve `handle_sandbox_error` timeouts (#3435) | new-features |
| 雑務: `clippy::redundant_clone` を有効化 (#3489) | chore: enable `clippy::redundant_clone` (#3489) | new-features |
| gpt-5 モデルファミリー全体に同じ特性を割り当て (#3490) | Assign the entire gpt-5 model family same characteristics (#3490) | new-features |
| フォーク時にコンポーザーをクリア (#3445) | Clear composer on fork (#3445) | new-features |
| 修正: gh 呼び出しで force=true に -f ではなく -F を使用 (#3486) | fix: use -F instead of -f for force=true in gh call (#3486) | new-features |
| ロールアウト項目に Compact と Turn Context を追加 (#3444) | Add Compact and Turn Context to the rollout items (#3444) | new-features |
| NIT unified exec (#3479) | NIT unified exec (#3479) | new-features |
| 認証フローを簡素化し、ChatGPT と API キー認証の差異を統一 (#3189) | Simplify auth flow and reconcile differences between ChatGPT and API Key auth (#3189) | new-features |
| apply-patch: 置換をソートし、リグレッションテストを追加 (#3425) | apply-patch: sort replacements and add regression tests (#3425) | new-features |
| 雑務: rust-release.yml で latest-alpha-cli ブランチを更新するように (#3458) | chore: rust-release.yml should update the latest-alpha-cli branch (#3458) | new-features |
| 修正: `generate_mcp_types.py` の出力が `codex-rs/mcp-types/src/lib.rs` と一致することを確認するチェックを追加 (#3450) | fix: add check to ensure output of `generate_mcp_types.py` matches `codex-rs/mcp-types/src/lib.rs` (#3450) | new-features |
| フォーク時にファイルからロールアウトを読み取るよう変更 (#3440) | Change forking to read the rollout from file (#3440) | new-features |
| 統合実行 (#3288) | Unified execution (#3288) | new-features |
| 機能: JSON-RPC サーバーに UserInfo リクエストを追加 (#3428) | feat: add UserInfo request to JSON-RPC server (#3428) | new-features |
| 修正: `codex-rs/mcp-types/generate_mcp_types.py` の出力が `codex-rs/mcp-types/src/lib.rs` と一致することを保証 (#3439) | fix: ensure output of `codex-rs/mcp-types/generate_mcp_types.py` matches `codex-rs/mcp-types/src/lib.rs` (#3439) | new-features |
| 信頼済みディレクトリの受け入れ時に projects テーブルが上書きされる問題を修正 (#3434) | fix trampling projects table when accepting trusted dirs (#3434) | new-features |
| ワークスペースルートを環境コンテキストに配置 (#3375) | put workspace roots in the environment context (#3375) | new-features |

## 0.32.0

| 日本語 | English | Category |
|--------|---------|----------|
| MCP: サーバーとして動作する際にUA接尾辞を追加、いくつかの安定性/互換性の調整 | MCP: add UA suffix when acting as a server; a few stability/compat tweaks | new-features |
| OSS: `apply_patch`のOSS互換性を拡大 | OSS: Broader `apply_patch` OSS compatibility. | new-features |
| ロールアウト: 初期設定の追加とレスポンスへの`rollout_path`の含有 | Rollouts: initial groundwork and `rollout_path` included in responses. | new-features |
| TUI: Alt+Deleteで次の単語を削除 | TUI: Alt+Delete deletes the next word. | new-features |
| プロトコル/型: `ArchiveConversation`リクエストを追加、エクスポートとTypeScript型の小規模な改善 | Protocol/Types: `ArchiveConversation` request; small exports and TS type improvements. | new-features |
| CI/ビルド: `nextest`でテストを高速化、`shear`を追加、macOS権限の微調整 | CI/Build: faster tests with `nextest`, add `shear`; minor macOS permission adjustment. | new-features |
| ドキュメント: 設定ファイルのシェルクォート処理を明確化 | Docs: clarified shell quoting in config. | new-features |
| [#3395] MCPサーバーとして使用する際にユーザーエージェント接尾辞を設定 | [#3395] Set a user agent suffix when used as a mcp server | new-features |
| [#3394] Alt+Deleteでカーソルの右側の単語を削除(delete_forward_word) | [#3394] alt+delete deletes the word to the right of the cursor (delete_forward_word) | new-features |
| [#3390] 推論アイテムIDを送信しないように変更 | [#3390] Do not send reasoning item IDs | new-features |
| [#3388] config.responses_originator_header_internal_overrideをCODEX_INTERNAL_ORIGINATOR_OVERRIDE_ENV_VARに置換 | [#3388] Replace config.responses_originator_header_internal_override with CODEX_INTERNAL_ORIGINATOR_OVERRIDE_ENV_VAR | new-features |
| [#3387] フェイルファストを無効化 | [#3387] No fail fast | new-features |
| [#3380] ロールアウトアイテムを導入 | [#3380] Introduce rollout items | new-features |
| [#3374] apply_patchの「期待される行が見つかりませんでした」メッセージを調整 | [#3374] tweak "failed to find expected lines" message in apply_patch | new-features |
| [#3357] 不要な#[allow(dead_code)]アノテーションを削除 | [#3357] fix: remove unnecessary #[allow(dead_code)] annotation | new-features |
| [#3353] ClientRequestにArchiveConversationを追加 | [#3353] feat: add ArchiveConversation to ClientRequest | new-features |
| [#3352] NewConversationResponseにrollout_pathを含めるよう修正 | [#3352] fix: include rollout_path in NewConversationResponse | new-features |
| [#3338] CI中にcargo shearを実行 | [#3338] feat: Run cargo shear during CI | new-features |
| [#3334] com.apple.system.opendirectoryd.libinfoのmach-lookupを許可 | [#3334] allow mach-lookup for com.apple.system.opendirectoryd.libinfo | new-features |
| [#3323] CIビルドを高速化するためcargo nextestへの切り替えを試行 | [#3323] chore: try switching to cargo nextest to speed up CI builds | new-features |
| [#3222] LoginChatGptCompleteNotificationはprotocol-tsに明示的にリストする必要がないよう修正 | [#3222] fix: LoginChatGptCompleteNotification does not need to be listed explicitly in protocol-ts | new-features |
| [#3270] conversation_managerからInitialHistoryを再エクスポート | [#3270] feat(core): re-export InitialHistory from conversation_manager | new-features |
| [#3219] TypeScript型を追加生成し、ConversationSummaryと共に会話IDを返却 | [#3219] Generate more typescript types and return conversation id with ConversationSummary | new-features |
| [#3179] POSIX統合とスナップショットセッションの追加 | [#3179] feat: POSIX unification and snapshot sessions | new-features |
| [#3169] config.mdでシェルがクォートを処理する方法の説明を改善 | [#3169] Improve explanation of how the shell handles quotes in config.md | new-features |
| [#2811] 異なる命名規則を持つgpt-ossプロバイダーのOSSモデル(例: openai/gpt-oss-*)にapply_patchツールを含める | [#2811] Include apply_patch tool for oss models from gpt-oss providers with different naming convention (e.g. openai/gpt-oss-*) | new-features |

## 0.31.0

| 日本語 | English | Category |
|--------|---------|----------|
| MCPサーバー宣言時に `startup_timeout_ms` オプションのサポートを追加 [(ドキュメント)](https://github.com/openai/codex/blob/main/docs/config.md#mcp_servers)、特にWindowsユーザーから高い要望があった機能 | https://github.com/openai/codex/pull/3182 added support for a `startup_timeout_ms` option when declaring an MCP server [(docs)](https://github.com/openai/codex/blob/main/docs/config.md#mcp_servers), which has been a highly requested feature, particularly for Windows users: | new-features |
| Issue: https://github.com/openai/codex/issues/3196 | Issue: https://github.com/openai/codex/issues/3196 | new-features |
| Issue: https://github.com/openai/codex/issues/2346 | Issue: https://github.com/openai/codex/issues/2346 | new-features |
| Issue: https://github.com/openai/codex/issues/2555 | Issue: https://github.com/openai/codex/issues/2555 | new-features |
| PR: https://github.com/openai/codex/pull/3249 | PR: https://github.com/openai/codex/pull/3249 | new-features |
| PR: https://github.com/openai/codex/pull/3326 | PR: https://github.com/openai/codex/pull/3326 | new-features |
| PR: https://github.com/openai/codex/pull/3006 | PR: https://github.com/openai/codex/pull/3006 | new-features |
| その他... | and more... | new-features |
| @Bit-urd によるMCP起動時のフォルトトレランス向上に感謝 | Thanks to @Bit-urd for adding more fault tolerance to MCP startup: https://github.com/openai/codex/pull/3243 | new-features |
| macOSでFinderから `ctrl+v` による画像貼り付けを修正 | #3211 fixes image pasting from Finder with `ctrl+v` on macOS | new-features |
| 保留中のOAuthログインをキャンセルしてlocalhostポートを解放するロジックを追加 | [#3217] Added logic to cancel pending oauth login to free up localhost port | new-features |
| TUIの思考タイマーに分/時間表示を追加 | [#3220] feat(tui): show minutes/hours in thinking timer | new-features |
| `/status` 出力にCLIバージョンを追加 | [#3223] Added CLI version to `/status` output | new-features |
| TOMLファイルからのモデルファミリー設定のオーバーライドを尊重 | [#3176] [codex] respect overrides for model family configuration from toml file | new-features |
| codex-rs/scripts/create_github_release.sh をPythonで書き直し | [#3226] chore: rewrite codex-rs/scripts/create_github_release.sh in Python | new-features |
| create_github_release を一時ディレクトリに新しいクローンを作成するように変更 | [#3228] chore: change create_github_release to create a fresh clone in a temp directory | new-features |
| ローカルクローンのオーバーヘッドを避けるため git の代わりに gh を使用 | [#3230] chore: use gh instead of git to do work to avoid overhead of a local clone | new-features |
| create_github_release を --publish-alpha または --publish-release のいずれかを取るように変更 | [#3231] fix: change create_github_release to take either --publish-alpha or --publish-release | new-features |
| トークン使用量/コンテキスト情報をセッションレベルに移動 | [#3221] Move token usage/context information to session level | new-features |
| ctrl + c で空でないプロンプトをクリア | [#3285] Clear non-empty prompts with ctrl + c | new-features |
| 生のUuidの代わりにConversationIdを使用 | [#3282] Use ConversationId instead of raw Uuids | new-features |
| codex/README.md の「Memory with AGENTS.md」セクションへの壊れたリンクを修正 | [#3300] docs: fix broken link to the "Memory with AGENTS.md" section in codex/README.md | new-features |
| MCPサーバーごとの起動タイムアウトを追加 | [#3182] feat(mcp): per-server startup timeout | new-features |
| insta を 1.43.1 から 1.43.2 にバージョンアップ | [#3294] chore(deps): bump insta from 1.43.1 to 1.43.2 in /codex-rs | new-features |
| tree-sitter を 0.25.8 から 0.25.9 にバージョンアップ | [#3295] chore(deps): bump tree-sitter from 0.25.8 to 0.25.9 in /codex-rs | new-features |
| clap を 4.5.45 から 4.5.47 にバージョンアップ | [#3296] chore(deps): bump clap from 4.5.45 to 4.5.47 in /codex-rs | new-features |
| image を 0.25.6 から 0.25.8 にバージョンアップ | [#3297] chore(deps): bump image from 0.25.6 to 0.25.8 in /codex-rs | new-features |
| MCPサーバー初期化のエラーハンドリングを改善 | [#3243] fix: improve MCP server initialization error handling #3196 #2346 #2555 | new-features |
| TUIで ctrl+v による貼り付け時に file_list をチェック | [#3211] tui: paste with ctrl+v checks file_list | new-features |
| actions/setup-node@v5 にアップグレード | [#3316] chore: upgrade to actions/setup-node@v5 | new-features |
| getUserAgent MCPメソッドを追加 | [#3320] Add a getUserAgent MCP method | new-features |
| 提案されたコマンドプレビューをハイライト表示 | [#3319] Highlight Proposed Command preview | new-features |

## 0.30.0

| 日本語 | English | Category |
|--------|---------|----------|
| **破壊的変更**: プロジェクトの `.env` ファイルの自動読み込みを停止 | **Breaking**: Stop loading project `.env` files automatically. | new-features |
| **セキュリティ/動作**: リクエストを保存しない機能を追加。保留中の OAuth ログインをキャンセルしてポートを解放 | **Security/behavior**: Never store requests; free port by canceling pending OAuth login. | new-features |
| **コア/インフラ**: ロールアウトポリシーを導入。共有 HTTP クライアント、残りのコンテキストサイズの改善、推論サマリー設定/処理の改良、サンドボックス化されたシェルツールの説明を修正、サーバー通知のシリアライズを改善 | **Core/infra**: Introduce rollout policy; shared HTTP client; improved remaining context size; refined reasoning summary config/handling; corrected sandboxed shell tool description; improved server notification serialization. | new-features |
| **TUI/UX**: 大きなコマンドの承認ダイアログを修正。モーダル表示中はステータスタイマーを一時停止。ページャーの自動スクロール、bash のシンタックスハイライト、Mac のキー記号表示、ゼロ高さのパニックを回避、@ ファイル検索の改善(非表示ディレクトリ対応) | **TUI/UX**: Fix approval dialog for large commands; pause status timer during modals; pager auto‑scroll; bash syntax highlighting; mac key glyphs; avoid zero‑height panic; improved @ file search (hidden dirs). | new-features |
| **開発者体験/ドキュメント**: VS Code の推奨拡張機能、AGENTS.md のプロンプトと説明の明確化、API キーガイダンスの更新、CI の修正 | **DevEx/docs**: Recommended VS Code extensions; AGENTS.md prompt and clarifications; updated API key guidance; CI fixes. | new-features |
| **依存関係**: `uuid` と `wiremock` をバージョンアップ | **Deps**: Bump `uuid` and `wiremock`. | new-features |
| **Windows**: フルアクセスモードでの承認要求を廃止 | **Windows**: no more asking for approvals on Full Access mode | new-features |
| [#3218] 完了するまで resume を非表示に | [#3218] hide resume until it's complete | new-features |
| [#3217] localhost ポートを解放するため、保留中の OAuth ログインをキャンセルするロジックを追加 | [#3217] Added logic to cancel pending oauth login to free up localhost port | new-features |
| [#3212] リクエストを保存しないように変更 | [#3212] Never store requests | new-features |
| [#3193] chore: ServerNotification のシリアライズを改善 | [#3193] chore: improve serialization of ServerNotification | new-features |
| [#3191] refactor: AttachImage TUI イベントを削除 | [#3191] refactor: remove AttachImage tui event | new-features |
| [#3190] 残りのコンテキストサイズを正しく計算 | [#3190] Correctly calculate remaining context size | new-features |
| [#3187] UNIX システムでの ZSH 対応と検出機能の改善 | [#3187] ZSH on UNIX system and better detection | new-features |
| [#3185] MCP: セッション再開と履歴一覧機能を追加 | [#3185] MCP: add session resume + history listing; | new-features |
| [#3184] [破壊的変更] プロジェクト .env ファイルの読み込みを停止 | [#3184] [BREAKING] Stop loading project .env files | new-features |
| [#3172] chore: rust-lang.rust-analyzer と vadimcn.vscode-lldb を推奨拡張機能リストに追加 | [#3172] chore: add rust-lang.rust-analyzer and vadimcn.vscode-lldb to the list of recommended extensions | new-features |
| [#3171] [codex] 推論サマリー形式の設定をモデルファミリー設定タイプに移動 | [#3171] [codex] move configuration for reasoning summary format to model family config type | new-features |
| [#3170] fix: serde_as アノテーションを修正し、テストで検証 | [#3170] fix: fix serde_as annotation and verify with test | new-features |
| [#3167] tui: ページャーがスクロールを最下部に固定 | [#3167] tui: pager pins scroll to bottom | new-features |
| [#3163] fix: ExecCommandOutputDeltaEvent.chunk により効率的なワイヤーフォーマットを使用 | [#3163] fix: use a more efficient wire format for ExecCommandOutputDeltaEvent.chunk | new-features |
| [#3146] fix: 競合状態を修正するため、リクエスト送信前にコールバックをマップに追加 | [#3146] fix: add callback to map before sending request to fix race condition | new-features |
| [#3143] Mac のキーヒントに ⌥⇧⌃ 記号を使用 | [#3143] Use ⌥⇧⌃ glyphs for key hints on mac | new-features |
| [#3142] bash 行のシンタックスハイライトを追加 | [#3142] syntax-highlight bash lines | new-features |
| [#3138] [codex] 推論サマリーの処理を改善 | [#3138] [codex] improve handling of reasoning summary | new-features |
| [#3135] TUI: セッション再開ピッカー (--resume) とクイック再開 (--continue) を追加 | [#3135] TUI: Add session resume picker (--resume) and quick resume (--continue) | new-features |
| [#3134] [tui] /mcp 出力を更新 | [#3134] [tui] Update /mcp output | new-features |
| [#3133] tui: アクティブな実行セル領域の高さがゼロの時のパニックを回避 | [#3133] tui: avoid panic when active exec cell area is zero height | new-features |
| [#3132] AGENTS.md: codex-rs のテスト承認について明確化 | [#3132] AGENTS.md: clarify test approvals for codex-rs | new-features |
| [#3131] モーダルが開いている間はステータスタイマーを一時停止 | [#3131] Pause status timer while modals are open | new-features |
| [#3130] 失敗していた CI を修正 | [#3130] Fix failing CI | new-features |
| [#3128] MCP サンドボックス呼び出しを追加 | [#3128] MCP sandbox call | new-features |
| [#3127] UserMsgs をカテゴリに分類して TUI に送り返す処理を追加 | [#3127] Dividing UserMsgs into categories to send it back to the tui | new-features |
| [#3123] 履歴付きでセッションを再開する際に、Response Items から EventMsgs を再生 | [#3123] Replay EventMsgs from Response Items when resuming a session with history. | new-features |
| [#3122] AGENTS.md ファイルを読み込むプロンプトを追加 | [#3122] prompt to read AGENTS.md files | new-features |
| [#3121] プロンプトからキーワードの太字を削除 | [#3121] remove bold the keyword from prompt | new-features |
| [#3118] [codex] `use_experimental_reasoning_summary` toml キー設定をドキュメント化 | [#3118] [codex] document `use_experimental_reasoning_summary` toml key config | new-features |
| [#3117] 認証 URL パラメータに発信元を含める | [#3117] Include originator in authentication URL parameters | new-features |
| [#3116] ロールアウトポリシーを導入 | [#3116] Introduce Rollout Policy | new-features |
| [#3112] API キー権限に関するガイダンスを更新 | [#3112] Update guidance on API key permissions | new-features |
| [#3110] HTTP クライアントを作成する共通の方法を追加 | [#3110] Add a common way to create HTTP client | new-features |
| [#3093] [mcp-server] 読み取り設定インターフェースを更新 | [#3093] [mcp-server] Update read config interface | new-features |
| [#3087] tui: 大きなコマンドの承認ダイアログを修正 | [#3087] tui: fix approval dialog for large commands | new-features |
| [#3069] core: サンドボックス化されたシェルツールの説明を修正(任意の場所で読み取り可能) | [#3069] core: correct sandboxed shell tool description (reads allowed anywhere) | new-features |
| [#3056] chore: 冗長性設定をクリーンアップ | [#3056] chore: Clean up verbosity config | new-features |
| [#2988] サンドボックス化されていないプラットフォームで DangerFullAccess パッチを自動承認 | [#2988] Auto-approve DangerFullAccess patches on non-sandboxed platforms | new-features |
| [#2981] @ ファイル検索を改善: .github、.gitlab などの特定の非表示ディレクトリを含める | [#2981] Improve @ file search: include specific hidden dirs such as .github, .gitlab | new-features |
| [#2666] chore(deps): codex-rs の wiremock を 0.6.4 から 0.6.5 にバージョンアップ | [#2666] chore(deps): bump wiremock from 0.6.4 to 0.6.5 in /codex-rs | new-features |
| [#2493] chore(deps): codex-rs の uuid を 1.17.0 から 1.18.0 にバージョンアップ | [#2493] chore(deps): bump uuid from 1.17.0 to 1.18.0 in /codex-rs | new-features |

## 0.29.0

| 日本語 | English | Category |
|--------|---------|----------|
| **Android/Termux 対応** – サポートされていないターゲットで `arboard` を除外。 | **Android/Termux support** by gating `arboard` on unsupported targets. | new-features |
| **安定したクロスプラットフォームのファイルロック機能** – std `fs` API を使用。 | **Stable, cross‑platform file locking** using std `fs` APIs. | new-features |
| **認証機能の統合** – `CodexAuth` と `AuthManager` を `core` クレートに移動。 | **Auth consolidation**: `CodexAuth` and `AuthManager` moved into the `core` crate. | new-features |
| **レート制限処理の復元** – API キー使用時の対応。 | **Rate‑limit handling restored** for API‑key usage. | new-features |
| **Core rollout のリファクタリング** – `rollout` モジュールを抽出、リスト API を追加、ファイルヘッダーを返却。 | **Core rollout refactor**: extract `rollout` module, add listing API, return file heads. | new-features |
| **利便性の向上** – `exec`/`apply_patch` で `cd foo && ...` をサポート、TUI のちらつきを修正、ratatui `Stylize` を優先使用。 | **Quality of life**: support `cd foo && ...` in `exec`/`apply_patch`, fix TUI flicker, prefer ratatui `Stylize`. | new-features |
| **配布** – npm パッケージに Windows ARM64 実行ファイルを含める。 | **Distribution**: include Windows ARM64 executable in the npm package. | new-features |
| **最新の検索ツールに切り替え**。 | **Switch to the latest search tool**. | new-features |
| [#3086] 新しい検索ツールを使用 | [#3086] Use the new search tool | new-features |
| [#1634] core(rollout): rollout モジュールを抽出、リスト API を追加、ファイルヘッダーを返却 | [#1634] core(rollout): extract rollout module, add listing API, and return file heads | new-features |
| [#2895] arboard 依存関係を除外して Android/Termux 対応を追加 | [#2895] Add Android/Termux support by gating arboard dependency | new-features |
| [#2894] std::fs API を使用した安定したファイルロック機能を追加 | [#2894] Add stable file locking using std::fs APIs | new-features |
| [#3074] CodexAuth と AuthManager を core クレートに移動 | [#3074] Move CodexAuth and AuthManager to the core crate | new-features |
| [#3070] API キー使用時のレート制限エラー処理を復元 | [#3070] Add back rate‑limit error handling when using API key | new-features |
| [#3083] exec と apply_patch で "cd foo && ..." を解析 | [#3083] Parse “cd foo && ...” for exec and apply_patch | new-features |
| [#3068] 行/スパン構築に ratatui Stylize を優先使用 | [#3068] Prefer ratatui Stylize for constructing lines/spans | new-features |
| [#2918] TUI: UI の時折発生するちらつきを修正 | [#2918] TUI: fix occasional UI flicker | new-features |
| [#3061] @ 検索結果が保留中の場合にローディング状態を表示 | [#3061] Show loading state when @ search results are pending | new-features |
| [#2907] TUI: empty_mcp_output の MCP ドキュメントハイパーリンクを修正 | [#2907] TUI: fix MCP docs hyperlink in empty_mcp_output | new-features |
| [#3067] npm モジュールに arm64 Windows 実行ファイルを含める | [#3067] Include arm64 Windows executable in npm module | new-features |
| [#2736] 履歴読み込みを統一 | [#2736] Unify history loading | new-features |
| [#3071] 実験的な推論サマリーを使用 | [#3071] Use experimental reasoning summary | new-features |
| [#2461] gpt-oss 互換性を改善 | [#2461] Improve gpt‑oss compatibility | new-features |
| [#2651] apply-patch: lark 文法を修正 | [#2651] apply‑patch: fix lark grammar | new-features |
| [#3089] ドキュメント: リンクを https://agents.md/ に更新 | [#3089] Docs: update link to https://agents.md/ | new-features |
| [#3082] ドキュメント: config.md のタイポを修正 | [#3082] Docs: fix typo of config.md | new-features |
| [#2667] codex-rs の thiserror を 2.0.12 から 2.0.16 にバージョンアップ | [#2667] Bump thiserror from 2.0.12 to 2.0.16 in codex‑rs | new-features |

## 0.28.0

| 日本語 | English | Category |
|--------|---------|----------|
| [ハイライト] | [Highlights] | new-features |
| TUIの洗練と安定性の改善: タイピングラグの削減、ストリーミングメッセージのフォーマット改善、エラーハンドリングの向上、入力動作の改善 | TUI polish and stability improvements: reduced typing lag, cleaner streamed message formatting, better error handling, and improved input behavior. | new-features |
| Windows ARM ビルドの信頼性向上とリリース時のビルド高速化 | Better Windows ARM build reliability and faster release-time builds. | new-features |
| [TUI/UX] | [TUI/UX] | new-features |
| タイピングのラグを修正 (#2922) | Fix laggy typing (#2922) | new-features |
| メッセージスタイルを明確化するため再設計 (#2877) | Rework message styling for clarity (#2877) | new-features |
| ストリーミングエージェントメッセージの余分な空白行を削除 (#3065) | Remove extra blank lines in streamed agent messages (#3065) | new-features |
| `AGENTS.md` が存在する場合は "/init" の提案を非表示に (#3038) | Hide “/init” suggestion when `AGENTS.md` exists (#3038) | new-features |
| 空の入力での Enter キーを無視して空白メッセージのキューイングを回避 (#3047) | Ignore Enter on empty input to avoid queuing blank messages (#3047) | new-features |
| `get_cursor_position` のエラーをキャッチしてクラッシュを回避 (#2870) | Catch `get_cursor_position` errors to avoid crashes (#2870) | new-features |
| 無効化コマンドメッセージから余分な引用符を削除 (#3035) | Remove extra quote from disabled-command message (#3035) | new-features |
| [ビルド & CI] | [Build & CI] | new-features |
| Windows ARM ビルドに Windows 11 ARM を活用 (#3062) | Leverage Windows 11 ARM for Windows ARM builds (#3062) | new-features |
| リリース用 Windows 11 ARM イメージに `zstd` をインストール (#3066) | Install `zstd` on Windows 11 ARM image used for releases (#3066) | new-features |
| PR 作成時にリリースビルド用の Windows キャッシュを事前作成 (#2884) | Populate Windows cache for release builds when PRs are opened (#2884) | new-features |
| [ドキュメント] | [Docs] | new-features |
| 設定リファレンステーブルを修正 (#3063) | Fix config reference table (#3063) | new-features |
| ドキュメントリファクタ後の PR テンプレートリンクを更新 (#2982) | Update PR template link after docs refactor (#2982) | new-features |
| [ログ/テレメトリ] | [Logging/Telemetry] | new-features |
| ユーザーがモデルを変更した際のログを追加 (#3060) | Add logs when users change the model (#3060) | new-features |
| [依存関係] | [Dependencies] | new-features |
| `codex-rs` の `regex-lite` を 0.1.7 に更新 (#3010) | Bump `regex-lite` to 0.1.7 in `codex-rs` (#3010) | new-features |
| [#3066](https://github.com/openai/codex/pull/3066) fix: リリースカット用 windows-11-arm イメージに zstd をインストール | [#3066](https://github.com/openai/codex/pull/3066) fix: install zstd on the windows-11-arm image used to cut a release | new-features |
| [#3065](https://github.com/openai/codex/pull/3065) tui: ストリーミングエージェントメッセージの余分な空白行を修正 | [#3065](https://github.com/openai/codex/pull/3065) tui: fix extra blank lines in streamed agent messages | new-features |
| [#3063](https://github.com/openai/codex/pull/3063) 設定リファレンステーブルを修正 | [#3063](https://github.com/openai/codex/pull/3063) fix config reference table | new-features |
| [#3062](https://github.com/openai/codex/pull/3062) fix: Windows ARM ビルドに windows-11-arm を活用 | [#3062](https://github.com/openai/codex/pull/3062) fix: leverage windows-11-arm for Windows ARM builds | new-features |
| [#3060](https://github.com/openai/codex/pull/3060) ユーザーがモデルを変更した際のログを追加 | [#3060](https://github.com/openai/codex/pull/3060) Add logs to know when we users are changing the model | new-features |
| [#3047](https://github.com/openai/codex/pull/3047) バグ修正: 空の入力での Enter を無視して空白メッセージのキューイングを回避 | [#3047](https://github.com/openai/codex/pull/3047) Bug fix: ignore Enter on empty input to avoid queuing blank messages | new-features |
| [#3038](https://github.com/openai/codex/pull/3038) tui: AGENTS.md が存在する場合は '/init' の提案を非表示に | [#3038](https://github.com/openai/codex/pull/3038) tui: hide '/init' suggestion when AGENTS.md exists | new-features |
| [#3035](https://github.com/openai/codex/pull/3035) 無効化コマンドメッセージから余分な引用符を削除 | [#3035](https://github.com/openai/codex/pull/3035) remove extra quote from disabled-command message | new-features |
| [#3010](https://github.com/openai/codex/pull/3010) chore(deps): /codex-rs の regex-lite を 0.1.6 から 0.1.7 に更新 | [#3010](https://github.com/openai/codex/pull/3010) chore(deps): bump regex-lite from 0.1.6 to 0.1.7 in /codex-rs | new-features |
| [#2982](https://github.com/openai/codex/pull/2982) 修正: ドキュメントリファクタ後の正しいリンクで PR テンプレートを調整 | [#2982](https://github.com/openai/codex/pull/2982) Fix: Adapt pr template with correct link following doc refacto | new-features |
| [#2922](https://github.com/openai/codex/pull/2922) tui: タイピングのラグを修正 | [#2922](https://github.com/openai/codex/pull/2922) tui: fix laggy typing | new-features |
| [#2884](https://github.com/openai/codex/pull/2884) fix: PR レビュー時にリリースビルド用 Windows キャッシュの事前作成を試行 | [#2884](https://github.com/openai/codex/pull/2884) fix: try to populate the Windows cache for release builds when PRs are put up for review | new-features |
| [#2877](https://github.com/openai/codex/pull/2877) メッセージスタイルを再設計 | [#2877](https://github.com/openai/codex/pull/2877) rework message styling | new-features |
| [#2870](https://github.com/openai/codex/pull/2870) tui: get_cursor_position のエラーをキャッチ | [#2870](https://github.com/openai/codex/pull/2870) tui: catch get_cursor_position errors | new-features |

## 0.27.0

| 日本語 | English | Category |
|--------|---------|----------|
| **MCP 安定性**: mutex を早期に解放し、ロック順序の問題を回避 | **MCP stability**: drop mutexes earlier and avoid lock ordering pitfalls. | new-features |
| **チャネル信頼性**: 無制限チャネルに切り替えて停止を防止 | **Channel reliability**: switch to unbounded channel to prevent stalls. | new-features |
| **パフォーマンス/クリーンアップ**: 不要な flush() 呼び出しを削除 | **Performance/cleanup**: remove unnecessary flush() calls. | new-features |
| **CI**: リリースビルドを修正; `cargo clippy` に `--profile` を指定 | **CI**: fix release build; specify `--profile` for `cargo clippy`. | new-features |
| **ドキュメント**: Homebrew スニペットをより安全に; `AGENTS.md` で `just fix -p` を提案 | **Docs**: safer Homebrew snippet; suggest `just fix -p` in `AGENTS.md`. | new-features |
| [#2881] agents.md で just fix -p を提案 | [#2881] Suggest just fix -p in agents.md | new-features |
| [#2878] 修正: MCP サーバーで Mutex を早期に解放 | [#2878] fix: drop Mutexes earlier in MCP server | new-features |
| [#2876] 修正: tx_approve.send() を呼び出す前に Mutex を解放 | [#2876] fix: drop Mutex before calling tx_approve.send() | new-features |
| [#2874] 修正: 無制限チャネルに切り替え | [#2874] fix: switch to unbounded channel | new-features |
| [#2873] 修正: 不要な flush() 呼び出しを削除 | [#2873] fix: remove unnecessary flush() calls | new-features |
| [#2871] 修正: CI で cargo clippy に --profile を指定 | [#2871] fix: specify --profile to cargo clippy in CI | new-features |
| [#2868] バグ修正: コメント内の `brew install codex` が実行されないように修正 | [#2868] Bugfix: Prevents `brew install codex` in comment to be executed | new-features |
| [#2864] CI リリースビルドを修正 | [#2864] Fix CI release build | new-features |

## 0.23.0

| 日本語 | English | Category |
|--------|---------|----------|
| ハイライト | Highlights | new-features |
| 新しいコマンドとコントロール: TUI で `/mcp` をサポート (#2430) および承認を制御するスラッシュコマンド `/approvals` を追加 (#2474) | New commands and controls: support `/mcp` in TUI (#2430) and a slash command `/approvals` to control approvals (#2474). | new-features |
| 推論制御: 実行時に推論努力とモデルを変更可能に (#2435) `/model`; GPT‑5 モデル向けに「minimal」努力を追加 (#2326) | Reasoning controls: change reasoning effort and model at runtime (#2435) `/model`; add “minimal” effort for GPT‑5 models (#2326). | new-features |
| 認証の改善: ChatGPT でサインインしていない場合にログインオプションを表示 (#2440) および ChatGPT 認証トークンの自動更新 (#2484) | Auth improvements: show login options when not signed in with ChatGPT (#2440) and auto‑refresh ChatGPT auth token (#2484). | new-features |
| UI/UX の改善: Ghostty Ctrl‑b/Ctrl‑f フォールバック (#2427)、Ctrl+H をバックスペースとして対応 (#2412)、タブ補完後のカーソル位置調整 (#2442)、色とアクセシビリティの更新 (#2401, #2421) | UI/UX polish: Ghostty Ctrl‑b/Ctrl‑f fallback (#2427), Ctrl+H as backspace (#2412), cursor position tweak after tab completion (#2442), color/accessibility updates (#2401, #2421). | new-features |
| 配布/インフラ: リリースに zip アーカイブされたバイナリを追加 (#2438) および Windows x86_64 用 DotSlash エントリ (#2361); Rust 1.89 へアップグレード (#2465, #2467) | Distribution/infra: zip archived binaries added to releases (#2438) and DotSlash entry for Windows x86_64 (#2361); upgraded to Rust 1.89 (#2465, #2467). | new-features |
| マージされた PR の完全なリスト | Full list of merged PRs | new-features |
| [#2352](https://github.com/openai/codex/pull/2352) tui: ローカルコンポーザー履歴で同一の連続エントリをスキップ | [#2352](https://github.com/openai/codex/pull/2352) tui: skip identical consecutive entries in local composer history | new-features |
| [#2355](https://github.com/openai/codex/pull/2355) fix: codex-protocol クレートを導入 | [#2355](https://github.com/openai/codex/pull/2355) fix: introduce codex-protocol crate | new-features |
| [#2326](https://github.com/openai/codex/pull/2326) Fix #2296 GPT 5 モデル向けに「minimal」推論努力を追加 | [#2326](https://github.com/openai/codex/pull/2326) Fix #2296 Add "minimal" reasoning effort for GPT 5 models | new-features |
| [#2357](https://github.com/openai/codex/pull/2357) 重複した「Successfully logged in」メッセージを削除 | [#2357](https://github.com/openai/codex/pull/2357) Remove duplicated "Successfully logged in message" | new-features |
| [#2337](https://github.com/openai/codex/pull/2337) パッチ適用サマリーのステータス文字に色を付ける | [#2337](https://github.com/openai/codex/pull/2337) color the status letter in apply patch summary | new-features |
| [#2336](https://github.com/openai/codex/pull/2336) chore: 重複したロックファイルを削除 | [#2336](https://github.com/openai/codex/pull/2336) chore: remove duplicated lockfile | new-features |
| [#2361](https://github.com/openai/codex/pull/2361) fix: 生成された DotSlash ファイルに windows-x86_64 のエントリを含める | [#2361](https://github.com/openai/codex/pull/2361) fix: include an entry for windows-x86_64 in the generated DotSlash file | new-features |
| [#2245](https://github.com/openai/codex/pull/2245) /diff コマンドの進捗インジケーターを表示 | [#2245](https://github.com/openai/codex/pull/2245) Show progress indicator for /diff command | new-features |
| [#2314](https://github.com/openai/codex/pull/2314) /prompts をローテーションするプレースホルダーに置き換え | [#2314](https://github.com/openai/codex/pull/2314) replace /prompts with a rotating placeholder | new-features |
| [#2372](https://github.com/openai/codex/pull/2372) 実行中の codex CLI プロセスにアタッチするための起動プロファイルを追加 | [#2372](https://github.com/openai/codex/pull/2372) Added launch profile for attaching to a running codex CLI process | new-features |
| [#2373](https://github.com/openai/codex/pull/2373) ChatGPT を使用した認証を有効にする MCP サーバーコマンドを追加 | [#2373](https://github.com/openai/codex/pull/2373) Added MCP server command to enable authentication using ChatGPT | new-features |
| [#2388](https://github.com/openai/codex/pull/2388) fix: login/src/server.rs をリファクタリングして process_request() を別関数に分離 | [#2388](https://github.com/openai/codex/pull/2388) fix: refactor login/src/server.rs so process_request() is a separate function | new-features |
| [#2365](https://github.com/openai/codex/pull/2365) fix: EventMsg::TurnAborted を導入 | [#2365](https://github.com/openai/codex/pull/2365) fix: introduce EventMsg::TurnAborted | new-features |
| [#2360](https://github.com/openai/codex/pull/2360) mcp-server/src/mcp_protocol.rs とそれに依存するコードを削除 | [#2360](https://github.com/openai/codex/pull/2360) remove mcp-server/src/mcp_protocol.rs and the code that depends on it | new-features |
| [#2401](https://github.com/openai/codex/pull/2401) fix: スタイルと色をクリーンアップし styles.md で定義 | [#2401](https://github.com/openai/codex/pull/2401) fix: clean up styles & colors and define in styles.md | new-features |
| [#2411](https://github.com/openai/codex/pull/2411) chore(deps-dev): /.github/actions/codex の @types/node をバンプ | [#2411](https://github.com/openai/codex/pull/2411) chore(deps-dev): bump @types/node in /.github/actions/codex | new-features |
| [#2421](https://github.com/openai/codex/pull/2421) fix: ANSI blue の使用を停止 | [#2421](https://github.com/openai/codex/pull/2421) fix: stop using ANSI blue | new-features |
| [#2423](https://github.com/openai/codex/pull/2423) chore: mcp-server/src/wire_format.rs を protocol/src/mcp_protocol.rs に移動 | [#2423](https://github.com/openai/codex/pull/2423) chore: move mcp-server/src/wire_format.rs to protocol/src/mcp_protocol.rs | new-features |
| [#2424](https://github.com/openai/codex/pull/2424) chore: 生成された mcp-types に TS アノテーションを追加 | [#2424](https://github.com/openai/codex/pull/2424) chore: add TS annotation to generated mcp-types | new-features |
| [#2428](https://github.com/openai/codex/pull/2428) 推論の列挙型を1つに統合 | [#2428](https://github.com/openai/codex/pull/2428) consolidate reasoning enums into one | new-features |
| [#2431](https://github.com/openai/codex/pull/2431) 現在のタスクコンテキストをオーバーライドする操作を追加 | [#2431](https://github.com/openai/codex/pull/2431) Add an operation to override current task context | new-features |
| [#2425](https://github.com/openai/codex/pull/2425) protocol-ts | [#2425](https://github.com/openai/codex/pull/2425) protocol-ts | new-features |
| [#2432](https://github.com/openai/codex/pull/2432) UserTurn のキャッシュテストを追加 | [#2432](https://github.com/openai/codex/pull/2432) Add cache tests for UserTurn | new-features |
| [#2412](https://github.com/openai/codex/pull/2412) Fix #2391 Ctrl+H をバックスペースのキーボードショートカットとして追加 | [#2412](https://github.com/openai/codex/pull/2412) Fix #2391 Add Ctrl+H as backspace keyboard shortcut | new-features |
| [#2405](https://github.com/openai/codex/pull/2405) chore(deps): /codex-rs の anyhow をバンプ | [#2405](https://github.com/openai/codex/pull/2405) chore(deps): bump anyhow in /codex-rs | new-features |
| [#2406](https://github.com/openai/codex/pull/2406) chore(deps): /codex-rs の libc をバンプ | [#2406](https://github.com/openai/codex/pull/2406) chore(deps): bump libc in /codex-rs | new-features |
| [#2389](https://github.com/openai/codex/pull/2389) chore: expect() より Err を返すことを優先 | [#2389](https://github.com/openai/codex/pull/2389) chore: prefer returning Err to expect() | new-features |
| [#2393](https://github.com/openai/codex/pull/2393) fix: ログインフローを async 化 | [#2393](https://github.com/openai/codex/pull/2393) fix: async-ify login flow | new-features |
| [#2404](https://github.com/openai/codex/pull/2404) chore(deps): /codex-rs の clap をバンプ | [#2404](https://github.com/openai/codex/pull/2404) chore(deps): bump clap in /codex-rs | new-features |
| [#2394](https://github.com/openai/codex/pull/2394) fix: `shutdown_flag` を `Arc<AtomicBool>` から `tokio::sync::Notify` に変更 | [#2394](https://github.com/openai/codex/pull/2394) fix: change `shutdown_flag` from `Arc<AtomicBool>` to `tokio::sync::Notify` | new-features |
| [#2438](https://github.com/openai/codex/pull/2438) zip アーカイブされたバイナリをリリース | [#2438](https://github.com/openai/codex/pull/2438) Release zip archived binaries | new-features |
| [#2395](https://github.com/openai/codex/pull/2395) fix: ServerOptions.login_timeout を削除し tokio::time::timeout() を使用 | [#2395](https://github.com/openai/codex/pull/2395) fix: eliminate ServerOptions.login_timeout and use tokio::time::timeout() | new-features |
| [#2396](https://github.com/openai/codex/pull/2396) fix: ShutdownHandle を LoginServer のプライベートフィールドに変更 | [#2396](https://github.com/openai/codex/pull/2396) fix: make ShutdownHandle a private field of LoginServer | new-features |
| [#2398](https://github.com/openai/codex/pull/2398) fix: codex-login クレート内の Server への参照を削減 | [#2398](https://github.com/openai/codex/pull/2398) fix: reduce references to Server in codex-login crate | new-features |
| [#2399](https://github.com/openai/codex/pull/2399) fix: run_login_server() から shutdown_flag パラメータを削除 | [#2399](https://github.com/openai/codex/pull/2399) fix: remove shutdown_flag param to run_login_server() | new-features |
| [#2403](https://github.com/openai/codex/pull/2403) chore(deps): /codex-rs の clap_complete をバンプ | [#2403](https://github.com/openai/codex/pull/2403) chore(deps): bump clap_complete in /codex-rs | new-features |
| [#2440](https://github.com/openai/codex/pull/2440) ChatGPT でサインインしていない場合にログインオプションを表示 | [#2440](https://github.com/openai/codex/pull/2440) Show login options when not signed in with ChatGPT | new-features |
| [#2446](https://github.com/openai/codex/pull/2446) fix: sysprompt などをコンテキスト残量 % から除外 | [#2446](https://github.com/openai/codex/pull/2446) fix: exclude sysprompt etc from context left % | new-features |
| [#2430](https://github.com/openai/codex/pull/2430) [tui] /mcp コマンドをサポート | [#2430](https://github.com/openai/codex/pull/2430) [tui] Support /mcp command | new-features |
| [#2442](https://github.com/openai/codex/pull/2442) Fix #2429 タブ補完後のカーソル位置を調整 | [#2442](https://github.com/openai/codex/pull/2442) Fix #2429 Tweak the cursor position after tab completion | new-features |
| [#2457](https://github.com/openai/codex/pull/2457) fix: レビュー決定レスポンスの空白欠落を修正 | [#2457](https://github.com/openai/codex/pull/2457) fix: fix missing spacing in review decision response | new-features |
| [#2427](https://github.com/openai/codex/pull/2427) tui: Ghostty Ctrl-b/Ctrl-f フォールバックをサポート | [#2427](https://github.com/openai/codex/pull/2427) tui: support Ghostty Ctrl-b/Ctrl-f fallback | new-features |
| [#2407](https://github.com/openai/codex/pull/2407) chore(deps): actions/checkout を 4 から 5 にバンプ | [#2407](https://github.com/openai/codex/pull/2407) chore(deps): bump actions/checkout from 4 to 5 | new-features |
| [#2435](https://github.com/openai/codex/pull/2435) 推論努力の変更をサポート | [#2435](https://github.com/openai/codex/pull/2435) Support changing reasoning effort | new-features |
| [#2462](https://github.com/openai/codex/pull/2462) feat: /status でセッション ID の箇条書き位置を移動 | [#2462](https://github.com/openai/codex/pull/2462) feat: move session ID bullet in /status | new-features |
| [#2464](https://github.com/openai/codex/pull/2464) docs: sandbox_workspace_write の writable_roots をドキュメント化 | [#2464](https://github.com/openai/codex/pull/2464) docs: document writable_roots for sandbox_workspace_write | new-features |
| [#2466](https://github.com/openai/codex/pull/2466) fix: 時間とスペースを節約するため `cargo build` より `cargo check` を優先 | [#2466](https://github.com/openai/codex/pull/2466) fix: prefer `cargo check` to `cargo build` to save time and space | new-features |
| [#2465](https://github.com/openai/codex/pull/2465) chore: Rust 1.89 へアップグレード | [#2465](https://github.com/openai/codex/pull/2465) chore: upgrade to Rust 1.89 | new-features |
| [#2467](https://github.com/openai/codex/pull/2467) chore: Rust 1.89 でファイルロックが標準ライブラリに昇格 | [#2467](https://github.com/openai/codex/pull/2467) chore: Rust 1.89 promoted file locking to stdlib | new-features |
| [#2468](https://github.com/openai/codex/pull/2468) fix: 1つのファイルのみレンダリングされる場合のパッチ適用を修正 | [#2468](https://github.com/openai/codex/pull/2468) fix apply patch when only one file is rendered | new-features |
| [#2475](https://github.com/openai/codex/pull/2475) Fix: 他のプロバイダーを使用している場合でもサインインが表示される問題を修正 | [#2475](https://github.com/openai/codex/pull/2475) Fix: Sign in appear even if using other providers. | new-features |
| [#2460](https://github.com/openai/codex/pull/2460) Rust ツールチェーンの Dependabot 更新を有効化 | [#2460](https://github.com/openai/codex/pull/2460) Enable Dependabot updates for Rust toolchain | new-features |
| [#2476](https://github.com/openai/codex/pull/2476) Diff コマンド | [#2476](https://github.com/openai/codex/pull/2476) Diff command | new-features |
| [#2487](https://github.com/openai/codex/pull/2487) クライアントヘッダー | [#2487](https://github.com/openai/codex/pull/2487) Client headers | new-features |
| [#2484](https://github.com/openai/codex/pull/2484) ChatGPT 認証トークンを更新 | [#2484](https://github.com/openai/codex/pull/2484) Refresh ChatGPT auth token | new-features |
| [#2495](https://github.com/openai/codex/pull/2495) fix: 環境変数より設定変数を優先 | [#2495](https://github.com/openai/codex/pull/2495) fix: prefer config var to env var | new-features |
| [#2474](https://github.com/openai/codex/pull/2474) パーミッションを制御するスラッシュコマンドを追加 | [#2474](https://github.com/openai/codex/pull/2474) Add a slash command to control permissions | new-features |

## 0.22.0

| 日本語 | English | Category |
|--------|---------|----------|
| https://github.com/openai/codex/pull/2294 ログインサーバーをPythonからRustに移行し、https://github.com/openai/codex/issues/2000 と https://github.com/openai/codex/issues/2044 の両方の問題を解決 | https://github.com/openai/codex/pull/2294 moves the login server from Python to Rust, which should help with both https://github.com/openai/codex/issues/2000 and https://github.com/openai/codex/issues/2044. | new-features |
| https://github.com/openai/codex/pull/2029 Markdownストリーミングのサポートを追加 | https://github.com/openai/codex/pull/2029 adds support for markdown streaming | new-features |
| https://github.com/openai/codex/pull/2270 差分表示のUI処理を改善し、明るい背景でも読みやすく変更 | https://github.com/openai/codex/pull/2270 improves the UI treatment of diffs so they are more readable when using a light background | new-features |
| https://github.com/openai/codex/pull/2113 `ctrl-z` でTUIを一時停止できるように対応 | https://github.com/openai/codex/pull/2113 `ctrl-z` can be used to suspend the TUI | new-features |

## 0.21.0

| 日本語 | English | Category |
|--------|---------|----------|
| より良いキャッシングのためにプロンプトキャッシュキーを送信（トークン効率の改善が期待されます！） | https://github.com/openai/codex/pull/2200 send prompt cache key for better caching (should improve token efficiency!) | new-features |
| 複数行コマンドを分割して可読性を向上 | https://github.com/openai/codex/pull/2202 split multiline commands to improve readability | new-features |
| exec コマンドを解析して UI でより見やすくフォーマット | https://github.com/openai/codex/pull/2095 Parse exec commands and format them more nicely in the UI | new-features |
| `applypatch` コマンドを `apply_patch` コマンド文字列として認識 | https://github.com/openai/codex/pull/2186 recognize `applypatch` command as `apply_patch` command string | new-features |
| 出力切り詰めメッセージをツール呼び出し結果に含め、モデルが期待した完全な出力を受け取れなかったことを通知 | https://github.com/openai/codex/pull/2183 Include output truncation message in tool call results to tell the model when it did not get the full output from a command that it might have expected | new-features |
| `/compact` コマンド後にフィードバックメッセージを表示し、デルタが送信されなかった場合の問題を修正 | https://github.com/openai/codex/pull/2162 show feedback message after `/compact` command, fixing an issue when no deltas were sent | new-features |
| `apply_patch` の差分プレビューを表示 | https://github.com/openai/codex/pull/2050 show diff preview for `apply_patch` | new-features |
| MCP ツールに JSON スキーマサニタイゼーションを追加して内部 JsonSchema enum との互換性を確保 外部コントリビューター: @yaroslavyaroslav さんに感謝! | https://github.com/openai/codex/pull/1975 add JSON schema sanitization for MCP tools to ensure compatibility with internal JsonSchema enum external contributor: Thanks @yaroslavyaroslav! | new-features |

## 0.20.0

| 日本語 | English | Category |
|--------|---------|----------|
| https://github.com/openai/codex/pull/2035 `@openai/codex` の `npm` リリースが、旧 TypeScript CLI へのフォールバックではなく Rust CLI を実行するようになった(TypeScript コードは https://github.com/openai/codex/pull/2048 でリポジトリから削除された) | https://github.com/openai/codex/pull/2035 the `npm` release of `@openai/codex` now runs the Rust CLI instead of falling back to the old TypeScript CLI (TypeScript code was removed from the repo in https://github.com/openai/codex/pull/2048) | new-features |
| https://github.com/openai/codex/pull/2019 Windows における2つの問題を修正: | https://github.com/openai/codex/pull/2019 fixes two things for Windows: | new-features |
| Python プログラムを長い文字列引数ではなく一時ファイルに書き込むことで、ログインロジックの一部の問題を修正(なお、Python を Rust に置き換える予定: https://github.com/openai/codex/pull/2047) | fixes one class of issues with login logic by writing Python program to a temp file instead of long string arg (FYI, we are planning to replace the Python with Rust: https://github.com/openai/codex/pull/2047) | new-features |
| すべての Windows ターミナルがサポートしているわけではないため、`PopKeyboardEnhancementFlags` の失敗を無視するように変更 | ignores `PopKeyboardEnhancementFlags` failure since not all Windows terminals support it | new-features |
| https://github.com/openai/codex/pull/2042 `codex login` での Python 証明書問題の改善/修正: https://github.com/openai/codex/issues/2044 | https://github.com/openai/codex/pull/2042 should help/fix the Python certificates issue with `codex login`: https://github.com/openai/codex/issues/2044 | new-features |

## 0.16.0

| 日本語 | English | Category |
|--------|---------|----------|
| 容量に関するエラーメッセージの小さな修正: https://github.com/openai/codex/pull/1947 | Small fix for an error message around capacity: https://github.com/openai/codex/pull/1947 | new-features |
| ただし本日のより重要なアップグレードは 0.15.0 へのものです: https://github.com/openai/codex/releases/rust-v0.15.0 | Though the more significant upgrade today is to 0.15.0: https://github.com/openai/codex/releases/rust-v0.15.0 | new-features |

## 0.13.0

| 日本語 | English | Category |
|--------|---------|----------|
| （翻訳待ち） | https://github.com/openai/gpt-oss | new-features |
| （翻訳待ち） | https://github.com/openai/codex/pull/1848 | new-features |

## 0.12.0

| 日本語 | English | Category |
|--------|---------|----------|
| 0.11.0で発生した不具合を修正するため https://github.com/openai/codex/pull/1826 を含む: https://github.com/openai/codex/issues/1796。 | Includes https://github.com/openai/codex/pull/1826 to fix a regression introduced in 0.11.0: https://github.com/openai/codex/issues/1796. | new-features |

## 0.11.0

| 日本語 | English | Category |
|--------|---------|----------|
| https://github.com/openai/codex/issues/1247 コピー&ペーストが動作するようになりました | https://github.com/openai/codex/issues/1247 copy/paste works now | new-features |
| https://github.com/openai/codex/issues/1502 ターミナルのネイティブスクロールを使用するようになりました | https://github.com/openai/codex/issues/1502 use the terminal's native scrolling | new-features |
| https://github.com/openai/codex/pull/1527 `/compact` コマンドのサポートを追加 | https://github.com/openai/codex/pull/1527 adds support for the `/compact` command | new-features |
| https://github.com/openai/codex/pull/1726 実験的なプランニングツールを導入 | https://github.com/openai/codex/pull/1726 introduces an experimental planning tool | new-features |
| https://github.com/openai/codex/pull/1705 `apply_patch` がセッションのサンドボックス経由で実行されることを保証するセキュリティ修正 | https://github.com/openai/codex/pull/1705 security fix to ensure `apply_patch` is run through the sandbox for the session | new-features |
| https://github.com/openai/codex/pull/1764 CLI が新しいバージョンをチェックし、古いバージョンを使用している場合に通知するようになりました | https://github.com/openai/codex/pull/1764 CLI now checks for new versions and lets you know if you are out of date | new-features |

## 0.9.0

| 日本語 | English | Category |
|--------|---------|----------|
| `codex mcp` の多数の修正 | Numerous fixes to `codex mcp`. | new-features |
| Codex がキルされた際にシェルコマンドが `SIGTERM` を受け取るようにする修正(Linux のみ) https://github.com/openai/codex/pull/1626 | https://github.com/openai/codex/pull/1626 to ensure shell commands spawned by Codex get `SIGTERM` when `codex` is killed (Linux only) | new-features |
| ripgrep/`rg` の特定フラグを自動承認しないように変更 https://github.com/openai/codex/pull/1644 | Do not auto-approve certain flags for ripgrep/`rg` https://github.com/openai/codex/pull/1644 | new-features |

## 0.8.0

| 日本語 | English | Category |
|--------|---------|----------|
| https://github.com/openai/codex/pull/1594 により、TUI および `codex exec` 使用時にモデルからの応答をストリーミング表示するようになりました | As of https://github.com/openai/codex/pull/1594, we now stream the response from the model in the TUI and when using `codex exec` | new-features |
| https://github.com/openai/codex/pull/1589 により、`ctrl-d` はコンポーザーが空の場合のみ TUI を終了するように変更されました(Codex エージェントが思考中でコンポーザーが非表示の場合は引き続き TUI を終了します) | https://github.com/openai/codex/pull/1589 changes `ctrl-d` so it only exits the TUI if the composer is empty (it will still exit the TUI if the composer is hidden because the Codex agent is thinking) | new-features |
| https://github.com/openai/codex/pull/1596 により、`~/.codex/sessions` フォルダに `YYYY/MM/DD` サブフォルダが作成されるよう構成が変更されました。これにより最近のセッションを見つけやすくなり、`~/.codex/sessions` のエントリ数が無制限に増加してファイルシステムのパフォーマンスが低下する問題を回避できます | As a heads up, https://github.com/openai/codex/pull/1596 changes the organization of the `~/.codex/sessions` folder so it has `YYYY/MM/DD` subfolders. This should make it easier to find recent sessions and avoid degrading filesystem performance because previously `~/.codex/sessions` could end up with an unbounded number of entries | new-features |
| https://github.com/openai/codex/pull/1571 により、長い MCP ツール名を適切に処理できなかった長年の問題が修正されました(関連する GitHub issue は https://github.com/openai/codex/issues/1289) | https://github.com/openai/codex/pull/1571 fixes a longstanding issue where we failed to handle long MCP tool names gracefully (https://github.com/openai/codex/issues/1289 was the relevant GitHub issue) | new-features |
| https://github.com/openai/codex/pull/1603 により、`codex exec` に `--json` フラグが追加され、出力を JSONL 形式で stdout に出力できるようになりました | https://github.com/openai/codex/pull/1603 introduced a `--json` flag to `codex exec` so that it prints output as JSONL to stdout | new-features |
| https://github.com/openai/codex/pull/1590 により、`npm` 版で Node.js スクリプト経由で Codex CLI を起動した際に、Codex CLI プロセスと Node.js プロセスが一緒に終了するよう改善されましたが、https://github.com/openai/codex/issues/1570 の詳細によると、この特定の問題を修正するには不十分なようです | https://github.com/openai/codex/pull/1590 tries to ensure that when the Codex CLI is launched via the Node.js script in the `npm` version that both the Codex CLI process and Node.js process exit together, though from the additional details on https://github.com/openai/codex/issues/1570, it seems like it is not sufficient to fix that specific problem. | new-features |
| https://github.com/openai/codex/pull/1590 により、Windows 上で `npm` 版がクラッシュする代わりに(当面は)TypeScript 版にフォールバックするようになり、https://github.com/openai/codex/issues/1573 が修正されました | Though https://github.com/openai/codex/pull/1590 should make it so that, on Windows, the `npm` version will fall back to the TypeScript version (for now) rather than just crashing, fixing https://github.com/openai/codex/issues/1573. | new-features |

## 0.3.0

| 日本語 | English | Category |
|--------|---------|----------|
| 非ASCII文字によりCLIがクラッシュする問題を修正: https://github.com/openai/codex/issues/1450 (@ryozi-tn による修正 https://github.com/openai/codex/pull/1467 に感謝) | Fixes an issue where non-ASCII characters were crashing the CLI: https://github.com/openai/codex/issues/1450 (huge thanks to @ryozi-tn for the fix in https://github.com/openai/codex/pull/1467) | new-features |
| `--sandbox` フラグのサポートを追加し、このオプションに関する `config.toml` の破壊的変更を実施。詳細は https://github.com/openai/codex/pull/1476 を参照 | Adds support for a `--sandbox` flag and makes some breaking changes to `config.toml` around this option. See https://github.com/openai/codex/pull/1476 for details. | new-features |
| モデルプロバイダーへのリクエスト時にカスタムHTTPヘッダーを設定可能に: https://github.com/openai/codex/pull/1473 | Makes it possible to configure custom HTTP headers when making requests to model providers: https://github.com/openai/codex/pull/1473. | new-features |

