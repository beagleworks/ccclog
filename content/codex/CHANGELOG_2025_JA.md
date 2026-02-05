# OpenAI Codex 変更履歴 (2025年)

このファイルは OpenAI Codex の2025年リリース分の変更履歴を日本語で記載しています。

---

## 0.77.0

| 日本語 | English | Category |
|--------|---------|----------|
| TUI2: ターミナル間でマウスホイールとトラックパッドのスクロールを正規化、`tui.scroll_*` 設定を追加 (PR #8357) | TUI2: Normalize mouse wheel + trackpad scrolling across terminals; add `tui.scroll_*` config settings (PR #8357) | new-features |
| `requirements.toml` に `allowed_sandbox_modes` を追加して許可されるサンドボックスモードを制限 (PR #8298) | Add `allowed_sandbox_modes` to `requirements.toml` to constrain permitted sandbox modes (PR #8298) | new-features |
| MCP: ストリーム可能な HTTP MCP サーバーの OAuth ログインで `rmcp_client` フィーチャーフラグが不要に (PR #8087) | MCP: OAuth login for streamable HTTP MCP servers no longer requires the `rmcp_client` feature flag (PR #8087) | new-features |
| `codex-file-search` でファイル名導出を一元化してファジーファイル検索の表示と一貫性を改善 (PR #8334) | Improve fuzzy file search display/consistency by centralizing file-name derivation in `codex-file-search` (PR #8334) | new-features |
| バンドルされたモデルメタデータ (`models.json`) を更新 (PR #8168) | Update bundled model metadata (`models.json`) (PR #8168) | new-features |
| `/undo` が git ステージングやゴーストコミットと破壊的に相互作用する問題を修正 (PR #8303) | Fix `/undo` interacting destructively with git staging / ghost commits (PR #8303) | bug-fixes |
| TUI2: トランスクリプトのスクロール中の冗長な再描画を削減 (PR #8295) | TUI2: Reduce redundant redraws while scrolling transcripts (PR #8295) | bug-fixes |
| Docs: `experimental.md` 内の `contributing.md` へのリンクを修正 (PR #8311) | Docs: Fix link to `contributing.md` in `experimental.md` (PR #8311) | bug-fixes |

## 0.76.0

| 日本語 | English | Category |
|--------|---------|----------|
| macOS DMG ビルドターゲットを追加 (PR #8207) | Add a macOS DMG build target (PR #8207) | new-features |
| ターミナルごとのスクロール調整のためにターミナル検出メタデータを改善 (PR #8252) | Improve terminal detection metadata for per-terminal scroll tuning (PR #8252) | new-features |
| スキルポップアップの UI を微調整 (PR #8250) | UI tweaks on the skills popup (PR #8250) | new-features |
| TUI 検索セル描画を改善 (PR #8273) | TUI search cell rendering improvements (PR #8273) | new-features |
| /ps コマンドを追加 (PR #8279) | Add /ps command (PR #8279) | new-features |
| UNIX で /etc/codex/requirements.toml をサポート (PR #8277) | Add support for /etc/codex/requirements.toml on UNIX (PR #8277) | new-features |
| スキルの shortDescription をサポート (PR #8278, PR #8301) | Support shortDescription for skills (PR #8278, PR #8301) | new-features |
| モデル一覧 UI を追加 (PR #8286) | Add model list UI (PR #8286) | new-features |
| app-server v2 非推奨通知イベントを追加 (PR #8285) | Add app-server v2 deprecation notice event (PR #8285) | new-features |
| ExternalSandbox ポリシーを導入 (PR #8290) | Introduce ExternalSandbox policy (PR #8290) | new-features |
| スキルをデフォルトで有効化 (PR #8291) | Skills default on (PR #8297) | new-features |
| 管理者スコープのスキルをサポート (PR #8296) | Support admin-scoped skills (PR #8296) | new-features |
| バンドルされたシステムスキルを更新 (PR #8253, PR #8328) | Update bundled system skills (PR #8253, PR #8328) | new-features |
| app server で exclude のデフォルトを true に設定 (PR #8281) | Set exclude default to true in app server (PR #8281) | new-features |
| 制限付きサンドボックストークンでパイプが動作することを保証 (PR #8280) | Ensure pipes work in restricted sandbox tokens (PR #8280) | bug-fixes |
| command-runner ディレクトリへの読み取り ACL をより早期に付与 (PR #8275) | Grant read ACL to the command-runner directory earlier (PR #8275) | bug-fixes |
| 重複する shell_snapshot FeatureSpec の回帰を修正 (PR #8274) | Fix duplicate shell_snapshot FeatureSpec regression (PR #8274) | bug-fixes |
| request への切り替えにより sandbox-state 更新順序を修正 (PR #8142) | Fix sandbox-state update ordering by switching to request (PR #8142) | bug-fixes |

## 0.75.0

| 日本語 | English | Category |
|--------|---------|----------|
| #8270 — スプラッシュスクリーン | #8270 — splash screen | new-features |
| #8251 — 新しい制約ベースのロード戦略に移行 | #8251 — migrate to new constraint-based loading strategy | new-features |
| #7460 — cloud: cloud exec でカレントブランチをデフォルトに | #7460 — cloud: default to current branch in cloud exec | new-features |

## 0.74.0

| 日本語 | English | Category |
|--------|---------|----------|
| 知識、推論、コーディングを改善した最新のフロンティアモデル gpt-5.2-codex を導入。[詳細はこちら](https://openai.com/index/introducing-gpt-5-2-codex) | Introducing gpt-5.2-codex our latest frontier model with improvements across knowledge, reasoning and coding. [Learn more](https://openai.com/index/introducing-gpt-5-2-codex) | new-features |
| `experimental` 機能を試すための新しいスラッシュコマンド `/experimental` を追加 | Add new slash command `/experimental` for trying out `experimental` features | new-features |
| ゴーストスナップショット警告の無効化トグルを追加 (#8178) | Ghost snapshot warning disable toggle (#8178) | new-features |
| UI を改善（バックグラウンドターミナル、ピッカーのクリーンアップ）(#8255, #8232) | UI polish (background terminals, picker cleanup) (#8255, #8232). | new-features |

## 0.73.0

| 日本語 | English | Category |
|--------|---------|----------|
| セッションキャプチャ改善のためのゴーストスナップショット v2 を追加 (PR #8055) | Add ghost snapshot v2 for improved session capture (PR #8055) | new-features |
| 設定ファイルでゴーストコミットをサポート (PR #7873) | Support ghost commits in config (PR #7873) | new-features |
| 一貫した検出のため SkillsManager と skills/list によるスキル読み込みを再実装 (PR | Reimplement skills loading via SkillsManager and skills/list for consistent discovery (PR | new-features |
| Codex に OpenTelemetry トレーシングを追加 (PR #7844) | Add OpenTelemetry tracing for Codex (PR #7844) | new-features |
| 出力のないツール呼び出しを含むセッションでのパニックを防止 (PR #8048) | Prevent panic when session contains a tool call without an output (PR #8048) | bug-fixes |
| 入力バーストでキーバインディングビューが誤って起動するのを回避 (PR #7980) | Avoid triggering keybindings view on input bursts (PR #7980) | bug-fixes |
| デフォルトの折り返しアルゴリズムを OptimalFit から FirstFit に変更 (PR #7960) | Change default wrap algorithm from OptimalFit to FirstFit (PR #7960) | bug-fixes |
| サンドボックス設定の一部として AbsolutePathBuf を導入 (PR #7856) | Introduce AbsolutePathBuf as part of sandbox config (PR #7856) | bug-fixes |
| ログメッセージに Error を含めるよう変更 (PR #7955) | Include Error in log messages (PR #7955) | bug-fixes |

## 0.72.0

| 日本語 | English | Category |
|--------|---------|----------|
| Config API のクリーンアップ (#7924): 新しい config API とより明確な設定読み込みフロー | Config API cleanup (#7924): new config API and cleaner config loading flow. | new-features |
| API キーユーザー向けリモート圧縮 (#7835): キーベースセッションでリモート圧縮を有効化 | Remote compact for API-key users (#7835): enable remote compacting in key-based sessions. | new-features |
| MCP と TUI のステータス表示 (#7828, #7907): TUI での MCP 起動進捗メッセージを復元し、最新のディスク値を使用 | MCP and TUI status visibility (#7828, #7907): restore MCP startup progress messages in the TUI and use latest disk values | new-features |
| Windows と PowerShell の使い勝手向上 (#7607, #7893, #7942, #7137): pwsh/powershell を確実に検出し、PowerShell を解析 | Windows and PowerShell quality-of-life (#7607, #7893, #7942, #7137): locate pwsh/powershell reliably, parse PowerShell with | new-features |
| サンドボックスと安全性の更新 (#7809, #7889, #7728): Elevated Sandbox 3/4 と拡張された安全なコマンドリスト | Sandbox and safety updates (#7809, #7889, #7728): Elevated Sandbox 3/4 plus expanded safe command list. | new-features |
| gpt-5.2 向けモデル/プロンプト UX (#7934, #7910, #7874, #7911): プロンプトの更新とより明確な xhigh reasoning の警告/ドキュメント | Model/prompt UX for gpt-5.2 (#7934, #7910, #7874, #7911): prompt updates and clearer xhigh reasoning warnings/docs. | new-features |

## 0.71.0

| 日本語 | English | Category |
|--------|---------|----------|
| 知識、推論、コーディングを改善した最新のフロンティアモデル gpt-5.2 を導入。[詳細](https://openai.com/index/introducing-gpt-5-2/) | Introducing gpt-5.2 our latest frontier model with improvements across knowledge, reasoning and coding. [Learn More](https://openai.com/index/introducing-gpt-5-2/) | new-features |

## 0.69.0

| 日本語 | English | Category |
|--------|---------|----------|
| スキル: 明示的なスキル選択により SKILL.md の内容がターンに挿入されるようになり、スキルはセッションごとに1回読み込まれ、ファイルが存在しない場合は警告を表示 | Skills: Explicit skill selections now inject SKILL.md content into the turn; skills load once per session and warn if a file | new-features |
| Config API: config/read が完全に型付けされ、config の書き込み時にコメントと順序が保持され、実際の設定に合わせて model がオプショナルに変更 | Config API: config/read is fully typed; config writes preserve comments/order; model is optional to match real configs (#7658, | new-features |
| TUI/UX: ログファイルから ANSI コードを削除、オプション選択とトランスクリプトページャーに vim ナビゲーションを追加、トランスクリプトの連続性を修正、スラッシュコマンドの改善 | TUI/UX: Log files drop ANSI codes; vim navigation for option selection and transcript pager; transcript continuity fix; slash- | new-features |
| 実行とサンドボックス: シェルのスナップショット機能、unified-exec イベントの再設計、サンドボックスの許可範囲拡大(sendmsg/recvmsg)、レート制限のメッセージを明確化 | Exec & sandbox: Shell snapshotting, reworked unified-exec events, elevated sandbox allowances (sendmsg/recvmsg), clearer rate- | new-features |
| プラットフォーム/認証/ビルド: セッション内での MCP ログイン、リモートブランチレビューのサポート、Windows 署名の切り替え、ConPty のベンダリング、Nix ハッシュの更新 | Platform/auth/build: MCP in-session login, remote-branch review support, Windows signing toggles, ConPty vendoring, Nix hash | new-features |
| その他の修正: サポートされていない画像のエラー処理を改善、絶対パスでの設定ファイル指定に対応、並列テストの安定性向上、重複した機能仕様の削除など | Misc fixes: Unsupported images error cleanly, absolute config paths, parallel test stability, duplicated feature spec removal, | new-features |

## 0.66.0

| 日本語 | English | Category |
|--------|---------|----------|
| Execpolicy: TUI がコマンドプレフィックスの承認後にホワイトリストに追加可能に、サンドボックス拒否時に承認可能な修正案を提示、shell MCP が execpolicy で実行されるため MCP ツールも同じルールに従うように | Execpolicy: TUI can whitelist command prefixes after an approval, sandbox denials propose an amendment you can accept, shell MCP now runs execpolicy so MCP tools follow the same rules, and | new-features |
| 統合 exec & shell の安定性: ステータスラインがより明確な進捗を表示、Windows unified-exec のクラッシュを修正、長いコマンドがレイアウトを壊さずに折り返し、SSE/セッションのクリーンアップによりスタックやハングを削減 | Unified exec & shell stability: status line shows clearer progress, Windows unified-exec crash fixed, long commands wrap without breaking layout, and SSE/session cleanup reduces stuck or | new-features |
| TUI の更新: クロスプラットフォームのショートカット処理が一貫性を保持（Ctrl+N/P とリスト選択がすべての環境で動作）、オーバーレイ、リスト、テキストエリア間でナビゲーションが統一 (#7583, #7629) | TUI updates: cross-platform shortcut handling is consistent (Ctrl+N/P and list selection now work everywhere), so navigation matches between overlays, lists, and text areas (#7583, #7629). | new-features |
| Apply-patch: Windows の CRLF 改行が保持されるように、新しい e2e シナリオがより多くのパッチ形式をカバー、Windows 固有のテストカバレッジによりパッチフローのリグレッションを削減 (#7515, #7567, #7554)。この修正の[中核部分](https://github.com/openai/codex/pull/4017)に貢献した @cnaples79 に感謝! | Apply-patch: Windows CRLF line endings are preserved, new e2e scenarios cover more patch shapes, and Windows-specific test coverage reduces regressions in patch flows (#7515, #7567, #7554). Thanks to @cnaples79 who contributed the [core part](https://github.com/openai/codex/pull/4017) of this fix! | new-features |
| Cloud exec: codex cloud exec がリモート実行用の --branch を受け入れ、status/diff/apply フローを公開してクラウドパスからの変更を検査・適用可能に (#7602, #7614) | Cloud exec: codex cloud exec accepts --branch for remote runs and now exposes status/diff/apply flows so you can inspect and apply changes from the cloud path (#7602, #7614). | new-features |
| 署名: Linux アーティファクトが sigstore で署名されるように (#7674) | Signing: Linux artifacts are signed via sigstore. (#7674). | new-features |
| 一般的な修正: 並列ツール呼び出しチャットが正しく返されるように、ゴーストスナップショットトークンが課金されないように、ツール名の欠落が litellm プロキシをクラッシュさせないように、移行プロンプトが HTTPS リンクを使用するように | General fixes: parallel tool-call chat now returns correctly, ghost snapshot tokens aren’t billed, missing tool names no longer crash the litellm proxy, and migration prompts use HTTPS links | new-features |

## 0.65.0

| 日本語 | English | Category |
|--------|---------|----------|
| Codex Max をデフォルト化 (#7566): Codex Max がデフォルトモデルとなり、async-in-sync コードに関連する TUI パニックを修正 | Codex Max as default (#7566): Codex Max is now the default model, and a TUI panic related to async-in-sync code was fixed. | new-features |
| resume の UX 改善 (#7302, #7303): /resume スラッシュコマンドを追加し、resume のパフォーマンスを改善して作業再開を高速化 | Better resume UX (#7302, #7303): Added a /resume slash command and improved resume performance so picking work back up is snappier. | new-features |
| ツールチップとヒントの UX (#7557, #7440): ヒント/ツールチップを太字の「Tip」ラベル付きマークダウンでレンダリングし、アプリ全体で Codex のツールチップを充実化 | Tooltips & tips UX (#7557, #7440): Tips/tooltips are rendered via markdown with a bold “Tip” label and richer Codex tooltips across the app. | new-features |
| TUI の利便性向上 (#7530, #7448, #7514, #7461): TUI に Ctrl‑P/N ナビゲーション、画面行数制限付きシェル出力、Windows クリップボード画像ペーストの復元、レイアウトをクリーンにするリファクタリングを追加 | TUI quality-of-life (#7530, #7448, #7514, #7461): TUI gets Ctrl‑P/N navigation, screen-line-capped shell output, restored Windows clipboard image paste, and a refactor for cleaner layout. | new-features |
| 履歴とコンテキストの整備 (#6242, #7483, #7545, #7431, #7483): history.jsonl を history.max_bytes でトリミング、一般的な不要ディレクトリ(__pycache__ を含む)をデフォルトで除外、ペーストプレースホルダーを明確に区別 | History and context hygiene (#6242, #7483, #7545, #7431, #7483): history.jsonl is trimmed by history.max_bytes, common junk dirs (incl. __pycache__) are ignored by default, and paste placeholders stay distinct. | new-features |

## 0.64.0

| 日本語 | English | Category |
|--------|---------|----------|
| スレッドとターンに git 情報、カレントディレクトリ、CLI バージョン、ソースメタデータが含まれるようになり、すべてのアイテムとエラーにスレッド ID とターン ID が伝播されるように。差分、プラン更新、トークン使用量の変更、圧縮イベントの新しい通知を発行。ファイル変更アイテムは出力差分を提供し、ImageView アイテムは画像をインライン表示。 | Threads and turns now include git info, current working directory, CLI version, source metadata, and propagate thread and turn IDs on every item and error. They emit new notifications for diffs, plan updates, token-usage changes, and compaction events. File-change items provide output deltas, and ImageView items render images inline. | new-features |
| レビューフローを強化: 分離されたレビューモード、明示的な開始/終了イベント、レビュースレッド ID を追加。ロールアウトフィルタリング変更後もレビュー履歴が表示されるように。 | Review flow is enhanced with a detached review mode, explicit enter and exit events, review thread IDs, and review history remains visible after rollout filtering changes. | new-features |
| 実行機能の改善: 実験的な "exp" モデル、セッション肥大化を防ぐ統合された exec プルーニング、実行ごとのカスタム環境変数注入、ポリシー承認済みコマンドのバイパス、Windows でのリスクの高いブラウザや URL 起動の警告。Windows と WSL で履歴検索が動作するようになり、モデル選択が use_model を尊重。 | Execution gains an experimental “exp” model, unified exec pruning to limit session bloat, per-run custom environment injection, policy-approved command bypass, and Windows protections that flag risky browser or URL launches. History lookup now works on Windows and WSL, and model selection honors use_model. | new-features |
| セキュリティのデフォルト改善: 統合された world-writable スキャンと、読み取り専用 .git ディレクトリの workspace-write 強制。サンドボックス評価と承認フローが信頼ポリシーと整合。 | Safety defaults improve via consolidated world-writable scanning and workspace-write enforcement of read-only .git directories. Sandbox assessment and approval flows align with trust policies. | new-features |
| MCP とシェルツールに shell-tool MCP ログインサポート、明示的な機能宣言、サンドボックス認識、npm への公開、MCP elicitations を追加。rmcp クライアントを 0.10.0 にアップグレードして最新の通知に対応。 | MCP and shell tooling add shell-tool MCP login support, explicit capability declaration, sandbox awareness, publication to npm, and MCP elicitations. The rmcp client is upgraded to 0.10.0 for modern notifications. | new-features |
| 可観測性の向上: コマンドアイテムがプロセス ID を公開し、スレッドとターンがトークン使用量と圧縮イベントを発行。フィードバックメタデータがソース情報を取得。 | Observability increases as command items expose process IDs and threads and turns emit token-usage and compaction events. Feedback metadata captures source information. | new-features |
| ツールと運用の改善: app-server テストクライアントの follow-up v2、新しい設定管理ユーティリティ、承認ドキュメントとクイックスタート配置の刷新。 | Tooling and ops gain follow-up v2 in the app-server test client, new config management utilities, and refreshed approvals documentation and quickstart placement. | new-features |
| PowerShell の apply_patch パースを修正し、apply_patch テストが shell_command の動作をカバーするように。 | PowerShell apply_patch parsing is corrected, and apply_patch tests now cover shell_command behavior. | bug-fixes |
| サンドボックス評価の回帰を修正、ポリシー承認済みコマンドの尊重、Windows での危険なコマンドチェックの厳格化、workspace-write による .git 読み取り専用の強制。 | Sandbox assessment regression is fixed, policy-approved commands are honored, dangerous-command checks are tightened on Windows, and workspace-write enforces .git read-only. | bug-fixes |
| MCP 起動時に type フィールドが欠けていても許容し、ストリームエラーメッセージを明確化。rmcp の nix 出力ハッシュ問題を解決。 | MCP startup tolerates missing type fields, stream error messages are clarified, and rmcp nix output hash issues are resolved. | bug-fixes |
| デリゲートのキャンセルで統合 exec がハングしなくなり、早期終了セッションがクリーンアップされ、重複する "waited" レンダリングを抑制。 | Delegate cancellation no longer hangs unified exec, early-exit sessions are cleaned up, and duplicate “waited” renderings are suppressed. | bug-fixes |
| limit ゼロの recent_commits がゼロを返すようになり、NetBSD のプロセス強化ビルドのブロックを解除。 | recent_commits with limit zero now returns zero, and the NetBSD process-hardening build is unblocked. | bug-fixes |
| レビューのロールアウトフィルタリングを無効化して履歴を表示、承認プリセットが workspace-write を尊重、/approvals の信頼検出を修正、サンドボックスコマンド評価のエッジケースを修正。 | Review rollout filtering is disabled so history shows, approval presets respect workspace-write, /approvals trust detection is corrected, and sandbox command assessment edge cases are fixed. | bug-fixes |
| 圧縮が暗号化された推論を考慮し、トークン予算を正確に処理し、信頼性の高いトークン使用量と圧縮イベントを発行。 | Compaction accounts for encrypted reasoning, handles token budgets accurately, and emits reliable token-usage and compaction events. | bug-fixes |
| TTY の stdin を要求し、WSL のクリップボードパスを正規化。競合を避けるため /new で古い会話を破棄。 | TTY stdin is required, WSL clipboard paths are normalized, and stale conversations are dropped on /new to avoid conflicts. | bug-fixes |
| 大きな貼り付けでのカスタムプロンプト展開を修正、example-config の誤りを訂正、相対リンクと streamable_shell 参照をクリーンアップ。アップグレードメッセージを修正。 | Custom prompt expansion with large pastes is fixed, example-config mistakes are corrected, and relative links and streamable_shell references are cleaned up. Upgrade messaging is corrected. | bug-fixes |
| Windows サンドボックスが <workspace_root>/.git を読み取り専用として扱い、リスクの高いブラウザ起動を実行前に警告。 | Windows sandbox treats <workspace_root>/.git as read-only, and risky browser launches are flagged before execution. | bug-fixes |
| CLA 許可リストに dependabot バリアントを追加し、エンタープライズがアップグレードチェックとメッセージをスキップ可能に。 | CLA allowlist now includes dependabot variants, and enterprises can skip upgrade checks and messages. | bug-fixes |
| 不安定なテストを安定化し、セッションリサイクルを改善。ロールアウトセッション初期化がエラーを表面化して診断を容易に。 | Flaky tests are stabilized, session recycling is improved, and rollout session initialization surfaces errors for diagnosis. | bug-fixes |
| セキュリティと CI に cargo-audit と cargo-deny を追加。GitHub Actions を checkout v6 と upload-artifact v5 に更新。macOS 13 ビルドを廃止。不安定な Ubuntu バリアントをスキップ。next_minor_version スクリプトがパッチ番号を正しくリセットするように。 | Security and CI add cargo-audit and cargo-deny. GitHub Actions are updated to checkout v6 and upload-artifact v5. macOS 13 builds are dropped. A flaky Ubuntu variant is skipped. The next_minor_version script now resets the patch number correctly. | chores |
| 依存関係の更新: libc 0.2.177、webbrowser 1.0.6、regex 1.12.2、toml_edit 0.23.5、arboard 3.6.1、serde_with 3.16.1、image 0.25.9、reqwest 0.12.24、tracing 0.1.43、rmcp 0.10.0。 | Dependencies are updated: libc 0.2.177, webbrowser 1.0.6, regex 1.12.2, toml_edit 0.23.5, arboard 3.6.1, serde_with 3.16.1, image 0.25.9, reqwest 0.12.24, tracing 0.1.43, and rmcp 0.10.0. | chores |
| ドキュメントの刷新: 承認と設定のガイダンス、codex の max と xhigh のデフォルト、example-config の修正、CLA ガイダンス、streamable_shell 参照の削除。 | Documentation is refreshed: approvals and config guidance, codex max and xhigh defaults, example-config fixes, CLA guidance, and removal of streamable_shell references. | chores |

## 0.63.0

| 日本語 | English | Category |
|--------|---------|----------|
| Web検索を有効にすると `Invalid value: 'other'.` エラーが発生するバグを修正 | Fixes the bug where enabling web search can lead to `Invalid value: 'other'.` errors. | bug-fixes |

## 0.61.0

| 日本語 | English | Category |
|--------|---------|----------|
| ExecPolicy2 統合と exec-server 準備: コアに ExecPolicy2 を統合し、exec-server のリファクタリングと移行の基盤作業を実施。チームが新しいポリシーエンジンを導入しやすくするクイックスタートドキュメントも追加 | ExecPolicy2 integration and exec-server prep: core now integrates ExecPolicy2 with exec-server refactors and cutover groundwork, plus quickstart docs to help teams adopt the new policy engine. | new-features |
| 切り詰め処理とエラー報告の改善: シングルパス切り詰めにより重複作業を削減。エラーイベントにオプションでステータスコードを付与し、より明確な可観測性を実現 | Improved truncation and error reporting: single-pass truncation reduces duplicate work, and error events can now carry optional status codes for clearer observability. | new-features |
| シェルの信頼性とサンドボックス警告: フォールバックシェル選択を強化し、書き込み可能なディレクトリの警告を抑制。Windows でのメッセージ表示も改善 | Shell reliability and sandbox warnings: fallback shell selection is hardened and world-writable directory warnings are less noisy, including improved messaging on Windows. | new-features |
| UX 修正: 推論表示の修正、`/review` 後のレビューフッターコンテキストの保持、モデル移行画面を一度だけ表示するように変更 | UX fixes: corrected reasoning display, preserved review footer context after `/review`, and the model migration screen now shows only once. | new-features |

## 0.60.1

| 日本語 | English | Category |
|--------|---------|----------|
| APIユーザーのデフォルトモデルを `gpt-5.1-codex` に変更 | Default model for API users is now `gpt-5.1-codex` | new-features |

## 0.59.0

| 日本語 | English | Category |
|--------|---------|----------|
| GPT-5.1-Codex-Max: 最新のフロンティアエージェント型コーディングモデルを導入。GPT-5.1-Codex-Max は、より高い信頼性、高速な反復、長時間実行されるプロジェクトスケールのワークフローへの対応を提供。詳細は https://www.openai.com/index/gpt-5-1-codex-max を参照 | GPT-5.1-Codex-Max: introducing our newest frontier agentic coding model. GPT-5.1-Codex-Max delivers higher reliability, faster iteration, and support for long-running, project-scale workflows. Learn more at https://www.openai.com/index/gpt-5-1-codex-max | new-features |
| ネイティブ圧縮サポート: 圧縮機能のファーストクラスサポートを追加し、長時間のコーディングセッション全体でパフォーマンスを向上 | Native Compaction Support: added first-class support for Compaction, improving performance across extended coding sessions. | new-features |
| ツールトークン制限の拡張: codex モデルが最大10,000ツール出力トークンに対応。`config.toml` の `tool_output_token_limit` で設定可能 | Expanded Tool Token Limits: codex models now support up to 10,000 tool output tokens. Configure this via `tool_output_token_limit` in `config.toml`. | new-features |
| Windows エージェントモード: Windows ネイティブのエージェントモードを導入。Codex は作業フォルダー内でファイルの読み取り、書き込み、コマンド実行を、より少ない承認で実行可能。エージェントモードは新しい実験的な Windows サンドボックスを使用してファイルシステムとネットワークアクセスを制限。詳細は https://developers.openai.com/codex/windows を参照 | Windows Agent mode: Introduced Agent mode for native Windows. Codex can read files, write files, and run commands in your working folder with fewer approvals. Agent mode uses a new experimental Windows sandbox to limit filesystem and network access. Learn more at https://developers.openai.com/codex/windows | new-features |
| TUI と UX の改善 | TUI and UX Improvements | new-features |

## 0.58.0

| 日本語 | English | Category |
|--------|---------|----------|
| gpt5.1 モデルファミリーをサポート。[詳細はこちら](www.openai.com/index/gpt-5-1) | Support for gpt5.1 models family. [Read more](www.openai.com/index/gpt-5-1) | new-features |
| アプリサーバー機能強化: 新しい JSON スキーマジェネレーターコマンド、アイテム開始/完了イベント、マクロクリーンアップ、定型コード削減、重複コード管理の厳格化 (#6406 #6517 #6470 #6488) | App server enhancements: new JSON schema generator command, item started/completed events, macro cleanup, reduced boilerplate, and tightened duplicate-code hygiene (#6406 #6517 #6470 #6488). | new-features |
| 利便性の修正: ドキュメント更新 (web_search、SDK、config)、TUI ショートカットのインライン表示、seatbelt/Wayland/brew/compaction/cloud-tasks のバグ修正、警告メッセージの明確化、認証対応ステータス出力、OTEL テストの安定化 (#5889 #6424 #6425 #6376 #6421 #4824 #6238 #5856 #6446 #6529 #6541) | Quality of life fixes: doc updates (web_search, SDK, config), TUI shortcuts inline, seatbelt/Wayland/brew/compaction/cloud-tasks bugfixes, clearer warnings, auth-aware status output, and OTEL test stabilization (#5889 #6424 #6425 #6376 #6421 #4824 #6238 #5856 #6446 #6529 #6541). | new-features |

## 0.57.0

| 日本語 | English | Category |
|--------|---------|----------|
| TUI の操作性向上: スラッシュコマンドリストの ctrl-n/p ナビゲーションと、バックトラッキング時に /status のノイズをスキップ | TUI quality-of-life: ctrl-n/p navigation for slash command lists and backtracking skips the /status noise. | new-features |
| 長時間実行コマンドのタイムアウトを改善 | Improve timeout on long running commasnds | new-features |

## 0.56.0

| 日本語 | English | Category |
|--------|---------|----------|
| 新しいモデル GPT-5-Codex-Mini を導入 — GPT-5-Codex のよりコンパクトでコスト効率の高いバージョン | Introducing our new model GPT-5-Codex-Mini — a more compact and cost-efficient version of GPT-5-Codex | new-features |

## 0.55.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴エントリなし) | (No changelog entries) | chores |
## 0.54.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴なし) | (No changelog entries) | chores |
## 0.53.0

| 日本語 | English | Category |
|--------|---------|----------|
| エラー 400 の問題を修正 | Fixing error 400 issues | new-features |
| Java のサンドボックス化を改善 | Improve sandboxing for Java | new-features |
## 0.52.0

| 日本語 | English | Category |
|--------|---------|----------|
| TUI の洗練: ストリーミング中のキューメッセージ表示、Windows での自動モード案内、取り消し操作、圧縮プロンプトの設定可能化 | TUI polish: queued messages visible during streaming; Windows auto-mode guidance; undo op; compaction prompt configurable. | new-features |
| 画像: クライアント側での画像リサイズ、MIME 検証によるクラッシュ防止、SDK 画像転送テストの再有効化 | Images: client-side image resizing; prevent crashes with MIME verification; SDK image forwarding tests re-enabled. | new-features |
| `!<cmd>` で直接コマンドを実行 | Execute commands directly with `!<cmd>` | new-features |
| 追加使用量のクレジット購入機能。[詳細情報](https://help.openai.com/en/articles/12642688-using-credits-for-flexible-usage-in-chatgpt-pluspro) | Ability to buy credits for more usage. [More information](https://help.openai.com/en/articles/12642688-using-credits-for-flexible-usage-in-chatgpt-pluspro) | new-features |
## 0.50.0

| 日本語 | English | Category |
|--------|---------|----------|
| `/feedback` を改善し、より良い診断情報を取得できるようにしました。問題報告にご利用ください。(#5661, #5663) | Improved `/feedback` to get better diagnostics. Please use it to report any issues. (#5661, #5663). | new-features |
## 0.49.0

| 日本語 | English | Category |
|--------|---------|----------|
| `v0.48.0` と比較して大きな変更はなし - `v0.49.0` は homebrew アップグレードスクリプトのテストに使用 | No major changes comparing to `v0.48.0` - `v0.49.0` is used for testing homebrew upgrade script. | new-features |
## 0.48.0

| 日本語 | English | Category |
|--------|---------|----------|
| 追加の作業ディレクトリを指定する `--add-dir` オプションを追加 | `--add-dir` to add an additional working directory. | new-features |
| MCP の多数の改善 | Many MCP improvements: | new-features |
| stdio サーバーが公式 [rust MCP SDK](https://github.com/modelcontextprotocol/rust-sdk) ベースの新しいクライアントを使用するように変更 | stdio servers now use a new client backed by the official [rust MCP sdk](https://github.com/modelcontextprotocol/rust-sdk) | new-features |
| stdio サーバーで `cwd` を指定可能に | stdio servers can specify a `cwd` | new-features |
| すべてのサーバーで `enabled_tools` または `disabled_tools` を指定可能に | All servers can specify `enabled_tools` or `disabled_tools` | new-features |
| Streamable HTTP サーバーで `codex mcp login` 時に `scopes` を指定可能に | Streamable HTTP servers can specify `scopes` during `codex mcp login` | new-features |
| 起動時のエラーメッセージを改善 | Improved startup error messages | new-features |
| ツール呼び出しの指示追従性を向上 | Better instruction following for calling tools | new-features |
| `forced_login_method` と `forced_chatgpt_workspace_id` の設定オプションを追加。[マネージド設定](https://developers.openai.com/codex/security#managed-configuration)と組み合わせることで、企業が Codex の使用をより細かく制御可能に | Configuration options for `forced_login_method` and `forced_chatgpt_workspace_id` which can be paired with [managed configs](https://developers.openai.com/codex/security#managed-configuration) to give enterprises more control over Codex usage. | new-features |
## 0.47.0

| 日本語 | English | Category |
|--------|---------|----------|
| Codex CLI の改善とバグ修正 | Improvements and bug-fixes in Codex CLI | new-features |
| MacOS でのバイナリへのコード署名 | Code signing binaries on MacOS | new-features |
| 自動更新バナー | Auto update banner | new-features |
| :new: 「フルアクセス」モード有効化時の警告 | :new: Warning when enabling "full access" mode | new-features |
## 0.46.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴エントリなし) | (No changelog entries) | chores |
## 0.45.0

| 日本語 | English | Category |
|--------|---------|----------|
| #4517 OAuth MCP サーバー認証の実験的サポート | #4517 Experimental support for OAuth MCP server authentication | new-features |
## 0.44.0

| 日本語 | English | Category |
|--------|---------|----------|
| 新しい UI リフレッシュ! チャットコンポーザー、下部ペイン、モデルピッカー、アップグレード通知を更新 (#4240, #4316, #4178, #4405) | New UI refresh! Updated chat composer, bottom pane, model picker, and upgrade nudge (#4240, #4316, #4178, #4405) | new-features |
| カスタムプロンプトが名前付き引数と位置引数に対応 (#4474, #4470) | Custom prompts now support named & positional arguments (#4474, #4470) | new-features |
| ストリーマブル HTTP MCP サーバーのサポートを追加 (#4317) | Add support for streamable HTTP MCP servers (#4317) | new-features |
| (実験的) Windows での読み取り専用コマンドの繰り返し承認を削減 (#4269) | (experimental) Reduce repetitive approval for read-only commands on Windows (#4269) | new-features |
| (非常に実験的) `codex cloud` でクラウドタスクを管理 (#3197) | (very experimental) Manage cloud tasks with `codex cloud` (#3197) | new-features |
## 0.42.0

| 日本語 | English | Category |
|--------|---------|----------|
| 実験的な Rust SDK ベースの MCP クライアントを導入 (#4252) | Experimental Rust SDK–based MCP client introduced (#4252) | new-features |
| レスポンス処理/プロキシを簡素化・安全化する新しい `responses-api-proxy` コンポーネントを追加 (#4246) | New `responses-api-proxy` component to simplify and secure response handling/proxying (#4246) | new-features |
| セキュアモードを追加: `CODEX_SECURE_MODE=1` でプロセス監視を制限 (#4220) | Added secure mode: `CODEX_SECURE_MODE=1` to restrict process observability (#4220) | new-features |
| `codex exec` イベントを明示化、`item.started` の追加と出力表示を改善 (#4177, #4250, #4113) | More explicit `codex exec` events, including `item.started` and improved output display (#4177, #4250, #4113) | new-features |
| コマンド実行の安全性向上: コアに危険なコマンドチェックを追加、Windows固有の安全対策 (#4211, #4119) | Safer command execution: dangerous command checks in core and Windows-specific safety (#4211, #4119) | new-features |
| UX改善: `/status` の刷新による明確なプレゼンテーションと詳細表示、ページなしセッションリスト、承認を `ListSelectionView` に移動、MCPツール呼び出しスタイリングの改善、ストリーミング中のステータスインジケーター非表示 (#3194, #4275, #3871, #4101, #4196) | UX improvements: revamped `/status` with clearer presentation and details, pageless session list, approvals moved to `ListSelectionView`, better MCP tool call styling, and hiding status indicator during streaming (#3194, #4275, #3871, #4101, #4196) | new-features |
| 安定性と正確性: コンパクション時のトークン使用量を修正、SSEマウントの信頼性向上、過去の会話編集時のバグ改善 (#4281, #4264, #4237) | Stability and correctness: token usage fix for compaction, SSE mounting reliability, and improving bugs on editing previous conversations (#4281, #4264, #4237) | new-features |
| IDE拡張の信頼性向上: `.codex` ディレクトリが存在しない場合のAPIキーログイン失敗を修正 (#4258) | IDE extension reliability: fix login with API key when `.codex` directory is missing (#4258) | new-features |
| 状態管理、フッターロジック、未使用コードの内部クリーンアップとリファクタリング (#4174, #4259, #4310) | Internal cleanup and refactors for state, footer logic, and unused code (#4174, #4259, #4310) | new-features |
| `/status` のフォローアップ (#4304) | [#4304] /status followup (#4304) | new-features |
| 不要なコード削除、フレームカウントとステートフルレンダリングヘルパーを削除 (#4310) | [#4310] chore: dead code removal; remove frame count and stateful render helpers (#4310) | new-features |
| 実験的な公式Rust SDKベースのMCPクライアントを導入 (#4252) | [#4252] [MCP] Introduce an experimental official rust sdk based mcp client (#4252) | new-features |
| todo-listツールサポートを追加 (#4255) | [#4255] Add todo-list tool support (#4255) | new-features |
| responses-api-proxyを導入 (#4246) | [#4246] feat: introduce responses-api-proxy (#4246) | new-features |
| コンパクション時のトークン使用量を修正 (#4281) | [#4281] fix: token usage for compaction (#4281) | new-features |
| 成功時のexec出力を整形表示 (#4113) | [#4113] Show exec output on success with trimmed display (#4113) | new-features |
| 承認機能をListSelectionViewに移行 (#4275) | [#4275] Move approvals to use ListSelectionView (#4275) | new-features |
| フッターロジックを新しいファイルにリファクタリング (#4259) | [#4259] Refactor the footer logic to a new file (#4259) | new-features |
| 状態管理のリファクタリング - 2 (#4229) | [#4229] ref: state - 2 (#4229) | new-features |
| 潜在的に危険なコマンドのチェックをコアに追加 (#4211) | [#4211] core: add potentially dangerous command check (#4211) | new-features |
| SSEを一度だけマウントするように修正 (#4264) | [#4264] Actually mount sse once (#4264) | new-features |
| codex execのテストヘルパーを追加 (#4254) | [#4254] Add codex exec testing helpers (#4254) | new-features |
| IDE拡張で `.codex` ディレクトリが存在しない場合のAPIキーログイン失敗を修正 (#4258) | [#4258] Fixed login failure with API key in IDE extension when a `.codex` directory doesn't exist (#4258) | new-features |
| サンドボックスドキュメントのタイプミスを修正 (#4256) | [#4256] fix typo in sandbox doc (#4256) | new-features |
| item.startedを追加し、コマンド実行でサポート (#4250) | [#4250] [codex exec] Add item.started and support it for command execution (#4250) | new-features |
| 修正 (#4251) | [#4251] fix (#4251) | new-features |
| 幅を小さくリサイズした際のバグを修正 (#4248) | [#4248] fix bug when resizing to a smaller width (#4248) | new-features |
| サンドボックス環境でテストが正常に通るように修正 (#4067) | [#4067] make tests pass cleanly in sandbox (#4067) | new-features |
| エラーメッセージを修正 (#4204) | [#4204] Fix error message (#4204) | new-features |
| 明示的なcodex execイベントを追加 (#4177) | [#4177] Add explicit codex exec events (#4177) | new-features |
| attempt_stream_responses()をstream_responses()からリファクタリング (#4194) | [#4194] chore: refactor attempt_stream_responses() out of stream_responses() (#4194) | new-features |
| キューメッセージがある状態でESCを押すとコンポーザーの下書きが上書きされるバグを修正 (#4237) | [#4237] fix: esc w/ queued messages overwrites draft in composer (#4237) | new-features |
| CODEX_SECURE_MODE=1でプロセス監視を制限する機能を追加 (#4220) | [#4220] feat: add support for CODEX_SECURE_MODE=1 to restrict process observability (#4220) | new-features |
| /statusを刷新 (#4196) | [#4196] revamp /status (#4196) | new-features |
| 状態管理の完全リファクタリング (#4174) | [#4174] ref: full state refactor (#4174) | new-features |
| ワークフローのcodespellアクションをv2.1に更新 (#4205) | [#4205] github: update codespell action to v2.1 in workflow (#4205) | new-features |
| 非gpt-5モデル向けにtextパラメータを送信 (#4195) | [#4195] Send text parameter for non-gpt-5 models (#4195) | new-features |
| env_flagsから未使用の値を削除 (#4188) | [#4188] chore: drop unused values from env_flags (#4188) | new-features |
| Windowsでコマンドが安全かチェックするメソッドを追加 (#4119) | [#4119] adds a windows-specific method to check if a command is safe (#4119) | new-features |
| ページなしセッションリスト (#3194) | [#3194] pageless session list (#3194) | new-features |
| MCPツール呼び出しのスタイリングを改善 (#3871) | [#3871] improve MCP tool call styling (#3871) | new-features |
| 回答ストリーム開始時にステータスインジケーターを非表示 (#4101) | [#4101] hide the status indicator when the answer stream starts (#4101) | new-features |
| ツール実装を簡素化 (#4160) | [#4160] Simplify tool implemetations (#4160) | new-features |
## 0.41.0

| 日本語 | English | Category |
|--------|---------|----------|
| レート制限の可視化: 制限がリセットされる時刻を確認できるようになりました (#4111) また、レート制限時に使用状況を確認できます (#4102) | Rate limits visibility: You can see when is your limits resetting (#4111) and see your usage when rate limited (#4102) | new-features |
| `exec` モードで `output-schema` を使用して出力スキーマを指定できるようになりました (#4079) | You can specify output schema in `exec` mode using `output-schema`. (#4079) | new-features |
| Ripgrep (`rg`) が `npm` リリースにバンドルされるようになりました (#3660)。これにより、`npm` 経由で `codex` をインストールする際に `@vscode/ripgrep` の `postinstall` ステップが失敗する問題 (#3842 など) が修正されます | Ripgrep (`rg`) is now vendored into the `npm` release (#3660), which should fix issues such as #3842 where the `postinstall` step of `@vscode/ripgrep` would sometimes fail when installing `codex` via `npm`. | new-features |
## 0.40.0

| 日本語 | English | Category |
|--------|---------|----------|
| デフォルトモデルが `gpt-5-codex` になりました (#4076) | Default model is now `gpt-5-codex` (#4076) | new-features |
| `gpt-5-codex` で 220k トークンに達すると自動圧縮が自動的にトリガーされるようになりました (#4093) | Autocompaction is triggered automatically for `gpt-5-codex` when hitting 220k tokens (#4093) | new-features |
| `/status` で使用制限が表示されるようになりました (#4053) | Usage limits are now visible in `/status` (#4053) | new-features |
| 新しい `/review` コマンド(特定のコミット、ベースブランチとの比較、カスタム指示のレビュー) (#3961) | New `/review` commands (review specific commit, against a base branch, or custom instructions) (#3961) | new-features |
| MCP ツール呼び出しのデフォルトタイムアウトが `60s` になり、`config.toml` で個別の MCP サーバーの `tool_timeout_sec` を設定して上書きできるようになりました (#3959) | The default timeout for MCP tool calls is `60s` and can be overridden in `config.toml` by setting `tool_timeout_sec` for an individual MCP server. (#3959) | new-features |
| [#3881] try_parse_word_only_commands_sequence() が順序通りにコマンドを返すように修正 (#3881) | [#3881] fix: update try_parse_word_only_commands_sequence() to return commands in order (#3881) | new-features |
| [#3814] キャッシュを壊さないように統一されたシェル通知を使用 (#3814) | [#3814] Use a unified shell tell to not break cache (#3814) | new-features |
| [#3878] レスポンスモッキングヘルパーを共有ライブラリに移動 (#3878) | [#3878] Move responses mocking helpers to a shared lib (#3878) | new-features |
| [#3888] フィクスチャの代わりにヘルパーを使用 (#3888) | [#3888] Use helpers instead of fixtures (#3888) | new-features |
| [#3937] スラッシュコマンドポップアップの配置を修正 (#3937) | [#3937] fix alignment in slash command popup (#3937) | new-features |
| [#3925] 起動時に画面をクリアしないように変更 (#3925) | [#3925] don't clear screen on startup (#3925) | new-features |
| [#3950] イベントストリーム前にキーボード拡張検出をキャッシュ (#3950) | [#3950] Cache keyboard enhancement detection before event streams (#3950) | new-features |
| [#3965] レート制限を UI に転送 (#3965) | [#3965] Forward Rate limits to the UI (#3965) | new-features |
| [#3977] Tui: レート制限 (#3977) | [#3977] Tui: Rate limits (#3977) | new-features |
| [#3961] より多くの /review オプションを追加 (#3961) | [#3961] feat: Add more /review options (#3961) | new-features |
| [#3880] non_sandbox_test ヘルパーを追加 (#3880) | [#3880] Add non_sandbox_test helper (#3880) | new-features |
| [#4044] cargo バージョンを統一 (#4044) | [#4044] chore: unify cargo versions (#4044) | new-features |
| [#4057] clippy ルールを追加 2 (#4057) | [#4057] chore: more clippy rules 2 (#4057) | new-features |
| [#3959] MCP ツール呼び出しのタイムアウト (#3959) | [#3959] timeouts for mcp tool calls (#3959) | new-features |
| [#4053] /status に制限を追加 (#4053) | [#4053] Add limits to /status (#4053) | new-features |
| [#3928] StreamController を簡素化 (#3928) | [#3928] simplify StreamController (#3928) | new-features |
| [#4020] Tui: バックトラッキングを修正 (#4020) | [#4020] Tui: fix backtracking (#4020) | new-features |
| [#4055] /status への移行後に /limits を削除 (#4055) | [#4055] Remove /limits after moving to /status (#4055) | new-features |
| [#4026] BottomPane にビュースタックを追加 (#4026) | [#4026] feat: Add view stack to BottomPane (#4026) | new-features |
| [#4059] 制限警告の文言を変更 (#4059) | [#4059] Change limits warning copy (#4059) | new-features |
| [#4058] 冗長なクロージャに関する clippy (#4058) | [#4058] chore: clippy on redundant closure (#4058) | new-features |
| [#4061] /review のブランチモードプロンプトを修正 (#4061) | [#4061] Fix branch mode prompt for /review (#4061) | new-features |
| [#4060] レート制限のヘッダーと構造体を変更 (#4060) | [#4060] Change headers and struct of rate limits (#4060) | new-features |
| [#3952] ページ間のページャーオーバーレイクリアを修正 (#3952) | [#3952] Fix pager overlay clear between pages (#3952) | new-features |
| [#3957] セッション終了時の codex 再開メッセージを修正 (#3957) | [#3957] fix codex resume message at end of session (#3957) | new-features |
| [#4068] コンパクトメッセージで長くなる可能性のあるユーザーメッセージを切り詰め (#4068) | [#4068] Truncate potentially long user messages in compact message. (#4068) | new-features |
| [#4076] デフォルトを更新 (#4076) | [#4076] feat: update default (#4076) | new-features |
| [#4064] notifier テストを追加 (#4064) | [#4064] Add notifier tests (#4064) | new-features |
| [#4093] `gpt-5-codex` の自動圧縮を有効化 (#4093) | [#4093] chore: enable auto-compaction for `gpt-5-codex` (#4093) | new-features |
| [#4096] ストリーム再試行テストで TestCodex ビルダーを使用 (#4096) | [#4096] Use TestCodex builder in stream retry tests (#4096) | new-features |
| [#3914] undo 用の git ツールを追加 (#3914) | [#3914] feat: git tooling for undo (#3914) | new-features |
| [#4082] 使用データの調整を修正 (#4082) | [#4082] fix: usage data tweaks (#4082) | new-features |
| [#4075] レート制限警告 (#4075) | [#4075] Rate limits warning (#4075) | new-features |
## 0.39.0

| 日本語 | English | Category |
|--------|---------|----------|
| 新しい `/review` コマンドを導入 (#3774) | new `/review` command introduced in #3774 | new-features |
## 0.38.0

| 日本語 | English | Category |
|--------|---------|----------|
| [#3806] 修正: gh コマンド実行時に --repo オプションを指定 (#3806) | [#3806] fix: specify --repo when calling gh (#3806) | new-features |
## 0.37.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴エントリなし) | (No changelog entries) | chores |
## 0.36.0

| 日本語 | English | Category |
|--------|---------|----------|
| ログイン処理の改良 (#3632); ログイン状態とAPIキーの同時使用を許可していた問題を修正 (#3611); ログインURLに余分な文字が含まれる問題を修正 (#3639); カスタムプロバイダー向けの `get_auth_status` を修正 (#3581)。 | login polish (#3632); fix issue allowing to be both logged in and using API key simultaneously (#3611); fix stray login URL characters (#3639); fix `get_auth_status` for custom providers (#3581). | new-features |
## 0.35.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴なし) | (No changelog entries) | chores |
## 0.34.0

| 日本語 | English | Category |
|--------|---------|----------|
| [#2799] モデルと reasoning の変更を永続化 (#2799) | [#2799] Persist model & reasoning changes (#2799) | new-features |
| [#3436] user_agent をオプションに変更 (#3436) | [#3436] Make user_agent optional (#3436) | new-features |
## 0.33.0

| 日本語 | English | Category |
|--------|---------|----------|
| #3396 の新しい Markdown レンダラーを試す | Try out the new Markdown renderer on #3396. | new-features |
| [#3394] alt+delete でカーソル右側の単語を削除 (delete_forward_word) (#3394) | [#3394] alt+delete deletes the word to the right of the cursor (delete_forward_word) (#3394) | new-features |
| [#3380] ロールアウトアイテムを導入 (#3380) | [#3380] Introduce rollout items (#3380) | new-features |
| [#3395] MCP サーバーとして使用時にユーザーエージェントサフィックスを設定 (#3395) | [#3395] Set a user agent suffix when used as a mcp server (#3395) | new-features |
| [#3357] 修正: 不要な #[allow(dead_code)] アノテーションを削除 (#3357) | [#3357] fix: remove unnecessary #[allow(dead_code)] annotation (#3357) | new-features |
| [#3422] 初期履歴をプロトコルに移動 (#3422) | [#3422] Move initial history to protocol (#3422) | new-features |
| [#3400] `UserMessageEvent` に画像を追加 (#3400) | [#3400] Added images to `UserMessageEvent` (#3400) | new-features |
| [#3356] 修正: 空ファイル chatwidget_stream_tests.rs を削除 (#3356) | [#3356] fix: remove empty file: chatwidget_stream_tests.rs (#3356) | new-features |
| [#2703] ドキュメント: codex exec の見出しタイポを修正 (#2703) | [#2703] docs: fix codex exec heading typo (#2703) | new-features |
| [#2858] docs/getting-started.md 内の prompting_guide.md への壊れたリンクを削除 (#2858) | [#2858] Remove a broken link to prompting_guide.md in docs/getting-started.md (#2858) | new-features |
| [#3427] 認証関連の2つのテストの耐障害性を向上 (#3427) | [#3427] Improved resiliency of two auth-related tests (#3427) | new-features |
| [#3396] tui_markdown をカスタム Markdown レンダラーに置き換え (#3396) | [#3396] replace tui_markdown with a custom markdown renderer (#3396) | new-features |
| [#3430] "feat: POSIX unification and snapshot sessions (#3179)" を取り消し (#3430) | [#3430] Back out "feat: POSIX unification and snapshot sessions (#3179)" (#3430) | new-features |
## 0.32.0

| 日本語 | English | Category |
|--------|---------|----------|
| MCP: サーバーとして動作する際にUAサフィックスを追加、安定性・互換性の調整 | MCP: add UA suffix when acting as a server; a few stability/compat tweaks | new-features |
| OSS: より広範な `apply_patch` OSS 互換性対応 | OSS: Broader `apply_patch` OSS compatibility. | new-features |
| Rollouts: 初期実装と `rollout_path` をレスポンスに含めるよう対応 | Rollouts: initial groundwork and `rollout_path` included in responses. | new-features |
| TUI: Alt+Delete で次の単語を削除 | TUI: Alt+Delete deletes the next word. | new-features |
| Protocol/Types: `ArchiveConversation` リクエスト、エクスポートと TypeScript 型の改善 | Protocol/Types: `ArchiveConversation` request; small exports and TS type improvements. | new-features |
| CI/Build: `nextest` でテスト高速化、`shear` 追加、macOS 権限の微調整 | CI/Build: faster tests with `nextest`, add `shear`; minor macOS permission adjustment. | new-features |
| Docs: 設定ファイルでのシェルクォートの説明を明確化 | Docs: clarified shell quoting in config. | new-features |
| [#3395] MCP サーバーとして使用時にユーザーエージェントサフィックスを設定 | [#3395] Set a user agent suffix when used as a mcp server | new-features |
| [#3394] alt+delete でカーソルの右側の単語を削除 (delete_forward_word) | [#3394] alt+delete deletes the word to the right of the cursor (delete_forward_word) | new-features |
| [#3390] reasoning item ID を送信しないよう変更 | [#3390] Do not send reasoning item IDs | new-features |
| [#3388] config.responses_originator_header_internal_override を CODEX_INTERNAL_ORIGINATOR_OVERRIDE_ENV_VAR に置き換え | [#3388] Replace config.responses_originator_header_internal_override with CODEX_INTERNAL_ORIGINATOR_OVERRIDE_ENV_VAR | new-features |
| [#3387] fail fast を無効化 | [#3387] No fail fast | new-features |
| [#3380] rollout items を導入 | [#3380] Introduce rollout items | new-features |
| [#3374] apply_patch の "failed to find expected lines" メッセージを調整 | [#3374] tweak "failed to find expected lines" message in apply_patch | new-features |
| [#3357] 修正: 不要な #[allow(dead_code)] アノテーションを削除 | [#3357] fix: remove unnecessary #[allow(dead_code)] annotation | new-features |
| [#3353] 機能追加: ClientRequest に ArchiveConversation を追加 | [#3353] feat: add ArchiveConversation to ClientRequest | new-features |
| [#3352] 修正: NewConversationResponse に rollout_path を含めるよう対応 | [#3352] fix: include rollout_path in NewConversationResponse | new-features |
| [#3338] 機能追加: CI で cargo shear を実行 | [#3338] feat: Run cargo shear during CI | new-features |
| [#3334] com.apple.system.opendirectoryd.libinfo の mach-lookup を許可 | [#3334] allow mach-lookup for com.apple.system.opendirectoryd.libinfo | new-features |
| [#3323] CI ビルド高速化のため cargo nextest への切り替えを試行 | [#3323] chore: try switching to cargo nextest to speed up CI builds | new-features |
| [#3222] 修正: LoginChatGptCompleteNotification を protocol-ts で明示的にリストする必要がないよう対応 | [#3222] fix: LoginChatGptCompleteNotification does not need to be listed explicitly in protocol-ts | new-features |
| [#3270] 機能追加(core): conversation_manager から InitialHistory を再エクスポート | [#3270] feat(core): re-export InitialHistory from conversation_manager | new-features |
| [#3219] TypeScript 型を追加生成、ConversationSummary で conversation id を返すよう対応 | [#3219] Generate more typescript types and return conversation id with ConversationSummary | new-features |
| [#3179] 機能追加: POSIX 統合とスナップショットセッション | [#3179] feat: POSIX unification and snapshot sessions | new-features |
| [#3169] config.md でシェルがクォートを処理する方法の説明を改善 | [#3169] Improve explanation of how the shell handles quotes in config.md | new-features |
| [#2811] 異なる命名規則の gpt-oss プロバイダー（例: openai/gpt-oss-*）から OSS モデル用の apply_patch ツールを含めるよう対応 | [#2811] Include apply_patch tool for oss models from gpt-oss providers with different naming convention (e.g. openai/gpt-oss-*) | new-features |
## 0.31.0

| 日本語 | English | Category |
|--------|---------|----------|
| https://github.com/openai/codex/pull/3182 MCP サーバー宣言時に `startup_timeout_ms` オプションのサポートを追加 [(ドキュメント)](https://github.com/openai/codex/blob/main/docs/config.md#mcp_servers)、特に Windows ユーザーから多数のリクエストがあった機能 | https://github.com/openai/codex/pull/3182 added support for a `startup_timeout_ms` option when declaring an MCP server [(docs)](https://github.com/openai/codex/blob/main/docs/config.md#mcp_servers), which has been a highly requested feature, particularly for Windows users: | new-features |
| Issue: https://github.com/openai/codex/issues/3196 | Issue: https://github.com/openai/codex/issues/3196 | new-features |
| Issue: https://github.com/openai/codex/issues/2346 | Issue: https://github.com/openai/codex/issues/2346 | new-features |
| Issue: https://github.com/openai/codex/issues/2555 | Issue: https://github.com/openai/codex/issues/2555 | new-features |
| PR: https://github.com/openai/codex/pull/3249 | PR: https://github.com/openai/codex/pull/3249 | new-features |
| PR: https://github.com/openai/codex/pull/3326 | PR: https://github.com/openai/codex/pull/3326 | new-features |
| PR: https://github.com/openai/codex/pull/3006 | PR: https://github.com/openai/codex/pull/3006 | new-features |
| その他多数... | and more... | new-features |
| @Bit-urd による MCP 起動時のフォールトトレランス向上に感謝: https://github.com/openai/codex/pull/3243 | Thanks to @Bit-urd for adding more fault tolerance to MCP startup: https://github.com/openai/codex/pull/3243 | new-features |
| #3211 macOS で `ctrl+v` による Finder からの画像貼り付けを修正 | #3211 fixes image pasting from Finder with `ctrl+v` on macOS | new-features |
| [#3211] localhost ポート解放のため保留中の OAuth ログインをキャンセルするロジックを追加 | [#3217] Added logic to cancel pending oauth login to free up localhost port | new-features |
| [#3220] feat(tui): 思考タイマーに分/時間を表示 | [#3220] feat(tui): show minutes/hours in thinking timer | new-features |
| [#3223] `/status` 出力に CLI バージョンを追加 | [#3223] Added CLI version to `/status` output | new-features |
| [#3176] [codex] toml ファイルからのモデルファミリー設定の上書きに対応 | [#3176] [codex] respect overrides for model family configuration from toml file | new-features |
| [#3226] chore: codex-rs/scripts/create_github_release.sh を Python で書き直し | [#3226] chore: rewrite codex-rs/scripts/create_github_release.sh in Python | new-features |
| [#3228] chore: create_github_release を一時ディレクトリで新規クローンを作成するように変更 | [#3228] chore: change create_github_release to create a fresh clone in a temp directory | new-features |
| [#3230] chore: ローカルクローンのオーバーヘッドを避けるため git の代わりに gh を使用 | [#3230] chore: use gh instead of git to do work to avoid overhead of a local clone | new-features |
| [#3231] fix: create_github_release を --publish-alpha または --publish-release のいずれかを取るように変更 | [#3231] fix: change create_github_release to take either --publish-alpha or --publish-release | new-features |
| [#3221] トークン使用量/コンテキスト情報をセッションレベルに移動 | [#3221] Move token usage/context information to session level | new-features |
| [#3285] ctrl + c で空でないプロンプトをクリア | [#3285] Clear non-empty prompts with ctrl + c | new-features |
| [#3282] 生の Uuid の代わりに ConversationId を使用 | [#3282] Use ConversationId instead of raw Uuids | new-features |
| [#3300] docs: codex/README.md の「Memory with AGENTS.md」セクションへのリンク切れを修正 | [#3300] docs: fix broken link to the "Memory with AGENTS.md" section in codex/README.md | new-features |
| [#3182] feat(mcp): サーバーごとの起動タイムアウト | [#3182] feat(mcp): per-server startup timeout | new-features |
| [#3294] chore(deps): /codex-rs の insta を 1.43.1 から 1.43.2 にバージョンアップ | [#3294] chore(deps): bump insta from 1.43.1 to 1.43.2 in /codex-rs | new-features |
| [#3295] chore(deps): /codex-rs の tree-sitter を 0.25.8 から 0.25.9 にバージョンアップ | [#3295] chore(deps): bump tree-sitter from 0.25.8 to 0.25.9 in /codex-rs | new-features |
| [#3296] chore(deps): /codex-rs の clap を 4.5.45 から 4.5.47 にバージョンアップ | [#3296] chore(deps): bump clap from 4.5.45 to 4.5.47 in /codex-rs | new-features |
| [#3297] chore(deps): /codex-rs の image を 0.25.6 から 0.25.8 にバージョンアップ | [#3297] chore(deps): bump image from 0.25.6 to 0.25.8 in /codex-rs | new-features |
| [#3243] fix: MCP サーバー初期化のエラーハンドリングを改善 #3196 #2346 #2555 | [#3243] fix: improve MCP server initialization error handling #3196 #2346 #2555 | new-features |
| [#3211] tui: ctrl+v での貼り付けで file_list をチェック | [#3211] tui: paste with ctrl+v checks file_list | new-features |
| [#3316] chore: actions/setup-node@v5 にアップグレード | [#3316] chore: upgrade to actions/setup-node@v5 | new-features |
| [#3320] getUserAgent MCP メソッドを追加 | [#3320] Add a getUserAgent MCP method | new-features |
| [#3319] 提案されたコマンドのプレビューをハイライト表示 | [#3319] Highlight Proposed Command preview | new-features |
## 0.30.0

| 日本語 | English | Category |
|--------|---------|----------|
| **破壊的変更**: プロジェクトの `.env` ファイルの自動読み込みを停止 | **Breaking**: Stop loading project `.env` files automatically. | new-features |
| **セキュリティ/動作**: リクエストを保存しないよう変更; 保留中の OAuth ログインをキャンセルしてポートを解放 | **Security/behavior**: Never store requests; free port by canceling pending OAuth login. | new-features |
| **コア/インフラ**: ロールアウトポリシーの導入; 共有 HTTP クライアント; 残りコンテキストサイズの計算を改善; 推論サマリーの設定/処理を改良; サンドボックス化シェルツールの説明を修正; サーバー通知のシリアライズを改善 | **Core/infra**: Introduce rollout policy; shared HTTP client; improved remaining context size; refined reasoning summary config/handling; corrected sandboxed shell tool description; improved server notification serialization. | new-features |
| **TUI/UX**: 長いコマンドの承認ダイアログを修正; モーダル表示中にステータスタイマーを一時停止; ページャーの自動スクロール; bash のシンタックスハイライト; mac のキーグリフ表示; ゼロ高さパニックを回避; @ ファイル検索の改善(隠しディレクトリ対応) | **TUI/UX**: Fix approval dialog for large commands; pause status timer during modals; pager auto‑scroll; bash syntax highlighting; mac key glyphs; avoid zero‑height panic; improved @ file search (hidden dirs). | new-features |
| **開発者体験/ドキュメント**: VS Code 推奨拡張機能; AGENTS.md プロンプトと説明を明確化; API キーガイダンスを更新; CI 修正 | **DevEx/docs**: Recommended VS Code extensions; AGENTS.md prompt and clarifications; updated API key guidance; CI fixes. | new-features |
| **依存関係**: `uuid` と `wiremock` をバージョンアップ | **Deps**: Bump `uuid` and `wiremock`. | new-features |
| **Windows**: フルアクセスモードで承認を求めないよう変更 | **Windows**: no more asking for approvals on Full Access mode | new-features |
| [#3218] レジュームが完了するまで非表示に | [#3218] hide resume until it's complete | new-features |
| [#3217] 保留中の OAuth ログインをキャンセルして localhost ポートを解放するロジックを追加 | [#3217] Added logic to cancel pending oauth login to free up localhost port | new-features |
| [#3212] リクエストを保存しないよう変更 | [#3212] Never store requests | new-features |
| [#3193] chore: ServerNotification のシリアライズを改善 | [#3193] chore: improve serialization of ServerNotification | new-features |
| [#3191] refactor: AttachImage tui イベントを削除 | [#3191] refactor: remove AttachImage tui event | new-features |
| [#3190] 残りコンテキストサイズを正しく計算 | [#3190] Correctly calculate remaining context size | new-features |
| [#3187] UNIX システムでの ZSH と検出の改善 | [#3187] ZSH on UNIX system and better detection | new-features |
| [#3185] MCP: セッションレジューム + 履歴一覧機能を追加 | [#3185] MCP: add session resume + history listing; | new-features |
| [#3184] [破壊的変更] プロジェクト .env ファイルの読み込みを停止 | [#3184] [BREAKING] Stop loading project .env files | new-features |
| [#3172] chore: rust-lang.rust-analyzer と vadimcn.vscode-lldb を推奨拡張機能リストに追加 | [#3172] chore: add rust-lang.rust-analyzer and vadimcn.vscode-lldb to the list of recommended extensions | new-features |
| [#3171] [codex] 推論サマリーフォーマットの設定をモデルファミリー設定タイプに移動 | [#3171] [codex] move configuration for reasoning summary format to model family config type | new-features |
| [#3170] fix: serde_as アノテーションを修正し、テストで検証 | [#3170] fix: fix serde_as annotation and verify with test | new-features |
| [#3167] tui: ページャーのスクロールを下部に固定 | [#3167] tui: pager pins scroll to bottom | new-features |
| [#3163] fix: ExecCommandOutputDeltaEvent.chunk により効率的なワイヤーフォーマットを使用 | [#3163] fix: use a more efficient wire format for ExecCommandOutputDeltaEvent.chunk | new-features |
| [#3146] fix: 競合状態を修正するため、リクエスト送信前にコールバックをマップに追加 | [#3146] fix: add callback to map before sending request to fix race condition | new-features |
| [#3143] mac のキーヒントに ⌥⇧⌃ グリフを使用 | [#3143] Use ⌥⇧⌃ glyphs for key hints on mac | new-features |
| [#3142] bash 行のシンタックスハイライト | [#3142] syntax-highlight bash lines | new-features |
| [#3138] [codex] 推論サマリーの処理を改善 | [#3138] [codex] improve handling of reasoning summary | new-features |
| [#3135] TUI: セッションレジュームピッカー(--resume)とクイックレジューム(--continue)を追加 | [#3135] TUI: Add session resume picker (--resume) and quick resume (--continue) | new-features |
| [#3134] [tui] /mcp 出力を更新 | [#3134] [tui] Update /mcp output | new-features |
| [#3133] tui: アクティブな exec セル領域がゼロ高さの場合のパニックを回避 | [#3133] tui: avoid panic when active exec cell area is zero height | new-features |
| [#3132] AGENTS.md: codex-rs のテスト承認を明確化 | [#3132] AGENTS.md: clarify test approvals for codex-rs | new-features |
| [#3131] モーダル表示中にステータスタイマーを一時停止 | [#3131] Pause status timer while modals are open | new-features |
| [#3130] 失敗している CI を修正 | [#3130] Fix failing CI | new-features |
| [#3128] MCP サンドボックス呼び出し | [#3128] MCP sandbox call | new-features |
| [#3127] UserMsg をカテゴリ別に分けて tui に送信 | [#3127] Dividing UserMsgs into categories to send it back to the tui | new-features |
| [#3123] 履歴付きでセッションをレジュームする際に Response Items から EventMsg を再生 | [#3123] Replay EventMsgs from Response Items when resuming a session with history. | new-features |
| [#3122] AGENTS.md ファイルを読むプロンプト | [#3122] prompt to read AGENTS.md files | new-features |
| [#3121] プロンプトからキーワードの太字を削除 | [#3121] remove bold the keyword from prompt | new-features |
| [#3118] [codex] `use_experimental_reasoning_summary` toml キー設定をドキュメント化 | [#3118] [codex] document `use_experimental_reasoning_summary` toml key config | new-features |
| [#3117] 認証 URL パラメータに originator を含める | [#3117] Include originator in authentication URL parameters | new-features |
| [#3116] ロールアウトポリシーを導入 | [#3116] Introduce Rollout Policy | new-features |
| [#3112] API キー権限のガイダンスを更新 | [#3112] Update guidance on API key permissions | new-features |
| [#3110] HTTP クライアント作成の共通方法を追加 | [#3110] Add a common way to create HTTP client | new-features |
| [#3093] [mcp-server] 読み込み設定インターフェースを更新 | [#3093] [mcp-server] Update read config interface | new-features |
| [#3087] tui: 長いコマンドの承認ダイアログを修正 | [#3087] tui: fix approval dialog for large commands | new-features |
| [#3069] core: サンドボックス化シェルツールの説明を修正(読み込みはどこでも許可) | [#3069] core: correct sandboxed shell tool description (reads allowed anywhere) | new-features |
| [#3056] chore: 冗長性設定をクリーンアップ | [#3056] chore: Clean up verbosity config | new-features |
| [#2988] サンドボックス化されていないプラットフォームで DangerFullAccess パッチを自動承認 | [#2988] Auto-approve DangerFullAccess patches on non-sandboxed platforms | new-features |
| [#2981] @ ファイル検索を改善: .github、.gitlab などの特定の隠しディレクトリを含めるよう変更 | [#2981] Improve @ file search: include specific hidden dirs such as .github, .gitlab | new-features |
| [#2666] chore(deps): /codex-rs の wiremock を 0.6.4 から 0.6.5 にバージョンアップ | [#2666] chore(deps): bump wiremock from 0.6.4 to 0.6.5 in /codex-rs | new-features |
| [#2493] chore(deps): /codex-rs の uuid を 1.17.0 から 1.18.0 にバージョンアップ | [#2493] chore(deps): bump uuid from 1.17.0 to 1.18.0 in /codex-rs | new-features |
## 0.29.0

| 日本語 | English | Category |
|--------|---------|----------|
| **Android/Termux サポート**: 非対応ターゲットで `arboard` をゲートして対応 | **Android/Termux support** by gating `arboard` on unsupported targets. | new-features |
| **安定したクロスプラットフォームファイルロック**: std `fs` API を使用 | **Stable, cross‑platform file locking** using std `fs` APIs. | new-features |
| **認証の統合**: `CodexAuth` と `AuthManager` を `core` クレートに移動 | **Auth consolidation**: `CodexAuth` and `AuthManager` moved into the `core` crate. | new-features |
| **レート制限処理の復元**: API キー使用時の処理を復元 | **Rate‑limit handling restored** for API‑key usage. | new-features |
| **コアロールアウトのリファクタリング**: `rollout` モジュールの抽出、リスト API の追加、ファイルヘッドの返却 | **Core rollout refactor**: extract `rollout` module, add listing API, return file heads. | new-features |
| **品質改善**: `exec`/`apply_patch` で `cd foo && ...` をサポート、TUI のちらつきを修正、ratatui `Stylize` を優先使用 | **Quality of life**: support `cd foo && ...` in `exec`/`apply_patch`, fix TUI flicker, prefer ratatui `Stylize`. | new-features |
| **配布**: npm パッケージに Windows ARM64 実行ファイルを含める | **Distribution**: include Windows ARM64 executable in the npm package. | new-features |
| **最新の検索ツールに切り替え** | **Switch to the latest search tool**. | new-features |
| [#3086] 新しい検索ツールを使用 | [#3086] Use the new search tool | new-features |
| [#1634] core(rollout): rollout モジュールの抽出、リスト API の追加、ファイルヘッドの返却 | [#1634] core(rollout): extract rollout module, add listing API, and return file heads | new-features |
| [#2895] arboard 依存関係をゲートして Android/Termux サポートを追加 | [#2895] Add Android/Termux support by gating arboard dependency | new-features |
| [#2894] std::fs API を使用した安定したファイルロックを追加 | [#2894] Add stable file locking using std::fs APIs | new-features |
| [#3074] CodexAuth と AuthManager を core クレートに移動 | [#3074] Move CodexAuth and AuthManager to the core crate | new-features |
| [#3070] API キー使用時のレート制限エラー処理を復元 | [#3070] Add back rate‑limit error handling when using API key | new-features |
| [#3083] exec と apply_patch で「cd foo && ...」をパース | [#3083] Parse “cd foo && ...” for exec and apply_patch | new-features |
| [#3068] line/span の構築に ratatui Stylize を優先使用 | [#3068] Prefer ratatui Stylize for constructing lines/spans | new-features |
| [#2918] TUI: 時折発生する UI のちらつきを修正 | [#2918] TUI: fix occasional UI flicker | new-features |
| [#3061] @ 検索結果の保留中に読み込み状態を表示 | [#3061] Show loading state when @ search results are pending | new-features |
| [#2907] TUI: empty_mcp_output の MCP ドキュメントハイパーリンクを修正 | [#2907] TUI: fix MCP docs hyperlink in empty_mcp_output | new-features |
| [#3067] npm モジュールに arm64 Windows 実行ファイルを含める | [#3067] Include arm64 Windows executable in npm module | new-features |
| [#2736] 履歴読み込みを統一 | [#2736] Unify history loading | new-features |
| [#3071] 実験的な推論サマリーを使用 | [#3071] Use experimental reasoning summary | new-features |
| [#2461] gpt-oss 互換性を改善 | [#2461] Improve gpt‑oss compatibility | new-features |
| [#2651] apply-patch: lark 文法を修正 | [#2651] apply‑patch: fix lark grammar | new-features |
| [#3089] ドキュメント: https://agents.md/ へのリンクを更新 | [#3089] Docs: update link to https://agents.md/ | new-features |
| [#3082] ドキュメント: config.md のタイポを修正 | [#3082] Docs: fix typo of config.md | new-features |
| [#2667] codex-rs の thiserror を 2.0.12 から 2.0.16 にバージョンアップ | [#2667] Bump thiserror from 2.0.12 to 2.0.16 in codex‑rs | new-features |
## 0.28.0

| 日本語 | English | Category |
|--------|---------|----------|
| [ハイライト] | [Highlights] | new-features |
| TUI の洗練と安定性向上: タイピング遅延の削減、ストリーム配信メッセージのフォーマット改善、エラーハンドリングの改善、入力動作の改善 | TUI polish and stability improvements: reduced typing lag, cleaner streamed message formatting, better error handling, and improved input behavior. | new-features |
| Windows ARM ビルドの信頼性向上とリリース時のビルド高速化 | Better Windows ARM build reliability and faster release-time builds. | new-features |
| [TUI/UX] | [TUI/UX] | new-features |
| タイピング遅延を修正 (#2922) | Fix laggy typing (#2922) | new-features |
| 明瞭性のためにメッセージスタイルを再設計 (#2877) | Rework message styling for clarity (#2877) | new-features |
| ストリーム配信されるエージェントメッセージの余分な空白行を削除 (#3065) | Remove extra blank lines in streamed agent messages (#3065) | new-features |
| `AGENTS.md` が存在する場合は "/init" 提案を非表示 (#3038) | Hide “/init” suggestion when `AGENTS.md` exists (#3038) | new-features |
| 空の入力で Enter キーを無視し、空白メッセージのキューイングを回避 (#3047) | Ignore Enter on empty input to avoid queuing blank messages (#3047) | new-features |
| クラッシュを回避するために `get_cursor_position` エラーをキャッチ (#2870) | Catch `get_cursor_position` errors to avoid crashes (#2870) | new-features |
| 無効化コマンドメッセージから余分な引用符を削除 (#3035) | Remove extra quote from disabled-command message (#3035) | new-features |
| [ビルド & CI] | [Build & CI] | new-features |
| Windows ARM ビルドに Windows 11 ARM を活用 (#3062) | Leverage Windows 11 ARM for Windows ARM builds (#3062) | new-features |
| リリース用 Windows 11 ARM イメージに `zstd` をインストール (#3066) | Install `zstd` on Windows 11 ARM image used for releases (#3066) | new-features |
| PR オープン時にリリースビルド用の Windows キャッシュを生成 (#2884) | Populate Windows cache for release builds when PRs are opened (#2884) | new-features |
| [ドキュメント] | [Docs] | new-features |
| 設定リファレンステーブルを修正 (#3063) | Fix config reference table (#3063) | new-features |
| ドキュメントリファクタリング後の PR テンプレートリンクを更新 (#2982) | Update PR template link after docs refactor (#2982) | new-features |
| [ログ/テレメトリ] | [Logging/Telemetry] | new-features |
| ユーザーがモデルを変更した際のログを追加 (#3060) | Add logs when users change the model (#3060) | new-features |
| [依存関係] | [Dependencies] | new-features |
| `codex-rs` の `regex-lite` を 0.1.7 にバージョンアップ (#3010) | Bump `regex-lite` to 0.1.7 in `codex-rs` (#3010) | new-features |
| [#3066](https://github.com/openai/codex/pull/3066) fix: リリースカット用の windows-11-arm イメージに zstd をインストール | [#3066](https://github.com/openai/codex/pull/3066) fix: install zstd on the windows-11-arm image used to cut a release | new-features |
| [#3065](https://github.com/openai/codex/pull/3065) tui: ストリーム配信されるエージェントメッセージの余分な空白行を修正 | [#3065](https://github.com/openai/codex/pull/3065) tui: fix extra blank lines in streamed agent messages | new-features |
| [#3063](https://github.com/openai/codex/pull/3063) 設定リファレンステーブルを修正 | [#3063](https://github.com/openai/codex/pull/3063) fix config reference table | new-features |
| [#3062](https://github.com/openai/codex/pull/3062) fix: Windows ARM ビルドに windows-11-arm を活用 | [#3062](https://github.com/openai/codex/pull/3062) fix: leverage windows-11-arm for Windows ARM builds | new-features |
| [#3060](https://github.com/openai/codex/pull/3060) ユーザーがモデルを変更している時を把握するためのログを追加 | [#3060](https://github.com/openai/codex/pull/3060) Add logs to know when we users are changing the model | new-features |
| [#3047](https://github.com/openai/codex/pull/3047) Bug fix: 空の入力で Enter キーを無視し、空白メッセージのキューイングを回避 | [#3047](https://github.com/openai/codex/pull/3047) Bug fix: ignore Enter on empty input to avoid queuing blank messages | new-features |
| [#3038](https://github.com/openai/codex/pull/3038) tui: AGENTS.md が存在する場合は '/init' 提案を非表示 | [#3038](https://github.com/openai/codex/pull/3038) tui: hide '/init' suggestion when AGENTS.md exists | new-features |
| [#3035](https://github.com/openai/codex/pull/3035) 無効化コマンドメッセージから余分な引用符を削除 | [#3035](https://github.com/openai/codex/pull/3035) remove extra quote from disabled-command message | new-features |
| [#3010](https://github.com/openai/codex/pull/3010) chore(deps): /codex-rs の regex-lite を 0.1.6 から 0.1.7 にバージョンアップ | [#3010](https://github.com/openai/codex/pull/3010) chore(deps): bump regex-lite from 0.1.6 to 0.1.7 in /codex-rs | new-features |
| [#2982](https://github.com/openai/codex/pull/2982) Fix: ドキュメントリファクタリング後の正しいリンクに合わせて PR テンプレートを修正 | [#2982](https://github.com/openai/codex/pull/2982) Fix: Adapt pr template with correct link following doc refacto | new-features |
| [#2922](https://github.com/openai/codex/pull/2922) tui: タイピング遅延を修正 | [#2922](https://github.com/openai/codex/pull/2922) tui: fix laggy typing | new-features |
| [#2884](https://github.com/openai/codex/pull/2884) fix: PR レビュー時にリリースビルド用の Windows キャッシュを生成する試み | [#2884](https://github.com/openai/codex/pull/2884) fix: try to populate the Windows cache for release builds when PRs are put up for review | new-features |
| [#2877](https://github.com/openai/codex/pull/2877) メッセージスタイルを再設計 | [#2877](https://github.com/openai/codex/pull/2877) rework message styling | new-features |
| [#2870](https://github.com/openai/codex/pull/2870) tui: get_cursor_position エラーをキャッチ | [#2870](https://github.com/openai/codex/pull/2870) tui: catch get_cursor_position errors | new-features |
## 0.27.0

| 日本語 | English | Category |
|--------|---------|----------|
| **MCP 安定性**: mutex をより早く解放し、ロック順序の落とし穴を回避 | **MCP stability**: drop mutexes earlier and avoid lock ordering pitfalls. | new-features |
| **チャネル信頼性**: 無制限チャネルに切り替えてストールを防止 | **Channel reliability**: switch to unbounded channel to prevent stalls. | new-features |
| **パフォーマンス/クリーンアップ**: 不要な flush() 呼び出しを削除 | **Performance/cleanup**: remove unnecessary flush() calls. | new-features |
| **CI**: リリースビルドを修正; `cargo clippy` に `--profile` を指定 | **CI**: fix release build; specify `--profile` for `cargo clippy`. | new-features |
| **ドキュメント**: より安全な Homebrew スニペット; `AGENTS.md` で `just fix -p` を提案 | **Docs**: safer Homebrew snippet; suggest `just fix -p` in `AGENTS.md`. | new-features |
| [#2881] agents.md で just fix -p を提案 | [#2881] Suggest just fix -p in agents.md | new-features |
| [#2878] 修正: MCP サーバーで Mutex をより早く解放 | [#2878] fix: drop Mutexes earlier in MCP server | new-features |
| [#2876] 修正: tx_approve.send() を呼ぶ前に Mutex を解放 | [#2876] fix: drop Mutex before calling tx_approve.send() | new-features |
| [#2874] 修正: 無制限チャネルに切り替え | [#2874] fix: switch to unbounded channel | new-features |
| [#2873] 修正: 不要な flush() 呼び出しを削除 | [#2873] fix: remove unnecessary flush() calls | new-features |
| [#2871] 修正: CI で cargo clippy に --profile を指定 | [#2871] fix: specify --profile to cargo clippy in CI | new-features |
| [#2868] バグ修正: コメント内の `brew install codex` が実行されないように修正 | [#2868] Bugfix: Prevents `brew install codex` in comment to be executed | new-features |
| [#2864] CI リリースビルドを修正 | [#2864] Fix CI release build | new-features |
## 0.26.0

| 日本語 | English | Category |
|--------|---------|----------|
| `~/.codex/prompts` からカスタム `/prompts` を読み込み (#2696) | Custom `/prompts` loaded from `~/.codex/prompts` (#2696) | new-features |
| Codex がローカル画像をエージェント的に表示できる新しい「View Image」ツール (#2723) | New "View Image" tool to let Codex agentically view local images (#2723) | new-features |
| 解決された設定を検査するための MCP `GetConfig` エンドポイント (#2725) | MCP `GetConfig` endpoint to inspect resolved settings (#2725) | new-features |
## 0.25.0

| 日本語 | English | Category |
|--------|---------|----------|
| Core: 長時間稼働サーバーでの手動クリーンアップ用 remove_conversation API を追加 (#2613) | Core: remove_conversation API for manual cleanup in long‑lived servers (#2613) | new-features |
| TUI: トランスクリプト/diff ビューでマウスホイールによる代替スクロールに対応 (#2686) | TUI: mouse wheel alternate scrolling in transcript/diff views (#2686) | new-features |
| TUI: Alt+Ctrl+H で前の単語を削除（Alt+Backspace と同等）(#2717) | TUI: Alt+Ctrl+H deletes the previous word (parity with Alt+Backspace) (#2717) | new-features |
| Execution: task_started イベントにコンテキストウィンドウを含めるよう変更; ターンごとにモデルが変わる可能性に対応 (#2752) | Execution: include context window on task_started events; model may vary per turn (#2752) | new-features |
## 0.24.0

| 日本語 | English | Category |
|--------|---------|----------|
| メッセージのキューイング (#2637) | Queued messages (#2637) | new-features |
| 画像ファイルのコピー&ペースト / ドラッグ&ドロップ (#2567) | Copy Paste / Drag & Drop image files (#2567) | new-features |
| スクロール可能なトランスクリプトモード (Ctrl+T) (#2525) | Transcript mode (Ctrl+T) with scrolling ability (#2525) | new-features |
| 過去のメッセージから会話の編集/再開 (esc-esc) (#2607) | Edit/resume conversation (esc-esc) from previous messages (#2607) | new-features |
| --search オプション指定時のウェブ検索 (#2371) | Web search when using explicit --search option (#2371) | new-features |
## 0.23.0

| 日本語 | English | Category |
|--------|---------|----------|
| 新しいコマンドとコントロール: TUI で `/mcp` をサポート (#2430)、承認を制御する `/approvals` スラッシュコマンドを追加 (#2474) | New commands and controls: support `/mcp` in TUI (#2430) and a slash command `/approvals` to control approvals (#2474). | new-features |
| 推論制御: 実行時に推論の労力とモデルを変更可能に (#2435) `/model`、GPT-5 モデル向けに「minimal」労力を追加 (#2326) | Reasoning controls: change reasoning effort and model at runtime (#2435) `/model`; add “minimal” effort for GPT‑5 models (#2326). | new-features |
| 認証の改善: ChatGPT でサインインしていない場合にログインオプションを表示 (#2440)、ChatGPT 認証トークンの自動更新 (#2484) | Auth improvements: show login options when not signed in with ChatGPT (#2440) and auto‑refresh ChatGPT auth token (#2484). | new-features |
| UI/UX の改良: Ghostty の Ctrl-b/Ctrl-f フォールバック (#2427)、Ctrl+H をバックスペースとして処理 (#2412)、タブ補完後のカーソル位置を調整 (#2442)、色とアクセシビリティの更新 (#2401, #2421) | UI/UX polish: Ghostty Ctrl‑b/Ctrl‑f fallback (#2427), Ctrl+H as backspace (#2412), cursor position tweak after tab completion (#2442), color/accessibility updates (#2401, #2421). | new-features |
| 配布とインフラ: リリースに zip アーカイブされたバイナリを追加 (#2438)、Windows x86_64 用の DotSlash エントリ (#2361)、Rust 1.89 にアップグレード (#2465, #2467) | Distribution/infra: zip archived binaries added to releases (#2438) and DotSlash entry for Windows x86_64 (#2361); upgraded to Rust 1.89 (#2465, #2467). | new-features |
## 0.22.0

| 日本語 | English | Category |
|--------|---------|----------|
| https://github.com/openai/codex/pull/2294 ログインサーバーを Python から Rust に移行し、https://github.com/openai/codex/issues/2000 と https://github.com/openai/codex/issues/2044 の両方の問題を改善 | https://github.com/openai/codex/pull/2294 moves the login server from Python to Rust, which should help with both https://github.com/openai/codex/issues/2000 and https://github.com/openai/codex/issues/2044. | new-features |
| https://github.com/openai/codex/pull/2029 Markdown ストリーミングのサポートを追加 | https://github.com/openai/codex/pull/2029 adds support for markdown streaming | new-features |
| https://github.com/openai/codex/pull/2270 ライトテーマ使用時の差分表示の UI を改善し、可読性を向上 | https://github.com/openai/codex/pull/2270 improves the UI treatment of diffs so they are more readable when using a light background | new-features |
| https://github.com/openai/codex/pull/2113 `ctrl-z` で TUI を一時停止できるように対応 | https://github.com/openai/codex/pull/2113 `ctrl-z` can be used to suspend the TUI | new-features |
## 0.21.0

| 日本語 | English | Category |
|--------|---------|----------|
| https://github.com/openai/codex/pull/2200 プロンプトキャッシュキーの送信によりキャッシング効率を向上（トークン効率が改善されます！） | https://github.com/openai/codex/pull/2200 send prompt cache key for better caching (should improve token efficiency!) | new-features |
| https://github.com/openai/codex/pull/2202 複数行コマンドを分割して可読性を向上 | https://github.com/openai/codex/pull/2202 split multiline commands to improve readability | new-features |
| https://github.com/openai/codex/pull/2095 exec コマンドを解析して UI でより見やすくフォーマット | https://github.com/openai/codex/pull/2095 Parse exec commands and format them more nicely in the UI | new-features |
| https://github.com/openai/codex/pull/2186 `applypatch` コマンドを `apply_patch` コマンド文字列として認識 | https://github.com/openai/codex/pull/2186 recognize `applypatch` command as `apply_patch` command string | new-features |
| https://github.com/openai/codex/pull/2183 出力切り捨てメッセージをツール呼び出し結果に含めることで、期待していた完全な出力が得られなかったことをモデルに通知 | https://github.com/openai/codex/pull/2183 Include output truncation message in tool call results to tell the model when it did not get the full output from a command that it might have expected | new-features |
| https://github.com/openai/codex/pull/2162 `/compact` コマンド後のフィードバックメッセージを表示し、差分が送信されなかった場合の問題を修正 | https://github.com/openai/codex/pull/2162 show feedback message after `/compact` command, fixing an issue when no deltas were sent | new-features |
| https://github.com/openai/codex/pull/2050 `apply_patch` の差分プレビューを表示 | https://github.com/openai/codex/pull/2050 show diff preview for `apply_patch` | new-features |
| https://github.com/openai/codex/pull/1975 MCP ツールの JSON スキーマサニタイゼーションを追加し、内部 JsonSchema 列挙型との互換性を確保 外部コントリビューター: @yaroslavyaroslav さんに感謝！ | https://github.com/openai/codex/pull/1975 add JSON schema sanitization for MCP tools to ensure compatibility with internal JsonSchema enum external contributor: Thanks @yaroslavyaroslav! | new-features |
## 0.20.0

| 日本語 | English | Category |
|--------|---------|----------|
| `@openai/codex` の `npm` リリースが古い TypeScript CLI のフォールバックではなく Rust CLI を実行するように変更（TypeScript コードは https://github.com/openai/codex/pull/2048 でリポジトリから削除） | https://github.com/openai/codex/pull/2035 the `npm` release of `@openai/codex` now runs the Rust CLI instead of falling back to the old TypeScript CLI (TypeScript code was removed from the repo in https://github.com/openai/codex/pull/2048) | new-features |
| Windows 向けに2つの問題を修正 | https://github.com/openai/codex/pull/2019 fixes two things for Windows: | new-features |
| Python プログラムを長い文字列引数ではなく一時ファイルに書き込むことでログインロジックの問題を修正（なお、Python を Rust に置き換える予定: https://github.com/openai/codex/pull/2047） | fixes one class of issues with login logic by writing Python program to a temp file instead of long string arg (FYI, we are planning to replace the Python with Rust: https://github.com/openai/codex/pull/2047) | new-features |
| すべての Windows ターミナルが対応しているわけではないため `PopKeyboardEnhancementFlags` の失敗を無視するように変更 | ignores `PopKeyboardEnhancementFlags` failure since not all Windows terminals support it | new-features |
| `codex login` での Python 証明書の問題を修正: https://github.com/openai/codex/issues/2044 | https://github.com/openai/codex/pull/2042 should help/fix the Python certificates issue with `codex login`: https://github.com/openai/codex/issues/2044 | new-features |
## 0.19.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴エントリなし) | (No changelog entries) | chores |
## 0.16.0

| 日本語 | English | Category |
|--------|---------|----------|
| 容量に関するエラーメッセージの小さな修正: https://github.com/openai/codex/pull/1947 | Small fix for an error message around capacity: https://github.com/openai/codex/pull/1947 | new-features |
| 本日のより重要なアップグレードは 0.15.0 へのアップグレード: https://github.com/openai/codex/releases/rust-v0.15.0 | Though the more significant upgrade today is to 0.15.0: https://github.com/openai/codex/releases/rust-v0.15.0 | new-features |
## 0.15.0

| 日本語 | English | Category |
|--------|---------|----------|
| `gpt-5` がデフォルトモデルになりました! | `gpt-5` is the default model! | new-features |
| 新しい `--ask-for-approval on-request` オプションを追加。モデルがユーザーにプロンプトを表示するかどうかを判断します（既存の `on-failure` と `never` のバランスを取ったオプション） | new `--ask-for-approval on-request` option where the model decides whether to prompt the user (which is somewhat of a balance between the existing `on-failure` and `never`) options | new-features |
| 新しいオンボーディングフローを追加。ユーザーがフォルダを信頼済みとしてマークした際に、`--sandbox workspace-write` と `--ask-for-approval on-request` を設定として使用します（Git リポジトリで作業する際の推奨デフォルト） | new onboarding flow that uses `--sandbox workspace-write and --ask-for-approval on-request` as the configuration when users mark a folder is trusted (recommended default when working in a Git repo) | new-features |
## 0.14.0

| 日本語 | English | Category |
|--------|---------|----------|
| 会話ビューから一部の内部メッセージングを削除: https://github.com/openai/codex/pull/1868, https://github.com/openai/codex/pull/1866 | Removed some internal messaging from the conversation view: https://github.com/openai/codex/pull/1868, https://github.com/openai/codex/pull/1866 | new-features |
| `codex exec` が `InternalAgentDied` を出力していた問題を修正: https://github.com/openai/codex/pull/1864 | Fixed issue where `codex exec` was printing `InternalAgentDied `: https://github.com/openai/codex/pull/1864 | new-features |
## 0.13.0

| 日本語 | English | Category |
|--------|---------|----------|
| gpt-oss-120b と gpt-oss-20b は OpenAI による2つのオープンウェイト言語モデル | https://github.com/openai/gpt-oss | new-features |
| gpt-oss モデルを使用するための `--oss` フラグを導入 | https://github.com/openai/codex/pull/1848 | new-features |
## 0.12.0

| 日本語 | English | Category |
|--------|---------|----------|
| 0.11.0 で発生したリグレッション https://github.com/openai/codex/issues/1796 を修正する https://github.com/openai/codex/pull/1826 を含む | Includes https://github.com/openai/codex/pull/1826 to fix a regression introduced in 0.11.0: https://github.com/openai/codex/issues/1796. | new-features |
## 0.11.0

| 日本語 | English | Category |
|--------|---------|----------|
| https://github.com/openai/codex/issues/1247 コピー/ペーストが動作するように修正 | https://github.com/openai/codex/issues/1247 copy/paste works now | new-features |
| https://github.com/openai/codex/issues/1502 ターミナルのネイティブスクロールを使用するように変更 | https://github.com/openai/codex/issues/1502 use the terminal's native scrolling | new-features |
| https://github.com/openai/codex/pull/1527 `/compact` コマンドのサポートを追加 | https://github.com/openai/codex/pull/1527 adds support for the `/compact` command | new-features |
| https://github.com/openai/codex/pull/1726 実験的なプランニングツールを導入 | https://github.com/openai/codex/pull/1726 introduces an experimental planning tool | new-features |
| https://github.com/openai/codex/pull/1705 `apply_patch` がセッションのサンドボックスを通して実行されることを保証するセキュリティ修正 | https://github.com/openai/codex/pull/1705 security fix to ensure `apply_patch` is run through the sandbox for the session | new-features |
| https://github.com/openai/codex/pull/1764 CLI が新しいバージョンをチェックし、古いバージョンを使用している場合に通知する機能を追加 | https://github.com/openai/codex/pull/1764 CLI now checks for new versions and lets you know if you are out of date | new-features |
## 0.10.0

| 日本語 | English | Category |
|--------|---------|----------|
| より多くのコマンドがデフォルトで「信頼済み」に: https://github.com/openai/codex/pull/1668 | More commands are "trusted" by default: https://github.com/openai/codex/pull/1668 | new-features |
| @pbezglasny による TUI ヘッダーの UI 不整合の修正に感謝: https://github.com/openai/codex/pull/1675 | Thanks to @pbezglasny for fixing a UI inconsistency in the TUI header: https://github.com/openai/codex/pull/1675 | new-features |
| @vishnu-oai により `.jsonl` ログに Git 状態を記録するように: https://github.com/openai/codex/pull/1598 | We now record some Git state in the `.jsonl` log due to @vishnu-oai https://github.com/openai/codex/pull/1598 | new-features |
## 0.9.0

| 日本語 | English | Category |
|--------|---------|----------|
| `codex mcp` の多数の修正 | Numerous fixes to `codex mcp`. | new-features |
| `codex` が終了した際にCodexが起動したシェルコマンドが `SIGTERM` を受け取るよう保証（Linuxのみ） | https://github.com/openai/codex/pull/1626 to ensure shell commands spawned by Codex get `SIGTERM` when `codex` is killed (Linux only) | new-features |
| ripgrep/`rg` の特定のフラグを自動承認しないように変更 | Do not auto-approve certain flags for ripgrep/`rg` https://github.com/openai/codex/pull/1644 | new-features |
## 0.8.0

| 日本語 | English | Category |
|--------|---------|----------|
| https://github.com/openai/codex/pull/1594 により、TUI および `codex exec` 使用時にモデルからのレスポンスをストリーミング表示するようになりました | As of https://github.com/openai/codex/pull/1594, we now stream the response from the model in the TUI and when using `codex exec` | new-features |
| https://github.com/openai/codex/pull/1589 で `ctrl-d` の動作を変更し、コンポーザーが空の場合のみ TUI を終了するようになりました（Codex エージェントが処理中でコンポーザーが非表示の場合は引き続き終了します） | https://github.com/openai/codex/pull/1589 changes `ctrl-d` so it only exits the TUI if the composer is empty (it will still exit the TUI if the composer is hidden because the Codex agent is thinking) | new-features |
| https://github.com/openai/codex/pull/1596 で `~/.codex/sessions` フォルダの構成が変更され、`YYYY/MM/DD` サブフォルダを持つようになりました。これにより最近のセッションが見つけやすくなり、以前は `~/.codex/sessions` のエントリ数が無制限に増加してファイルシステムのパフォーマンスが低下する可能性がありましたが、それが解消されます | As a heads up, https://github.com/openai/codex/pull/1596 changes the organization of the `~/.codex/sessions` folder so it has `YYYY/MM/DD` subfolders. This should make it easier to find recent sessions and avoid degrading filesystem performance because previously `~/.codex/sessions` could end up with an unbounded number of entries | new-features |
| https://github.com/openai/codex/pull/1571 で、長い MCP ツール名を適切に処理できなかった長年の問題を修正しました（関連する GitHub issue は https://github.com/openai/codex/issues/1289 です） | https://github.com/openai/codex/pull/1571 fixes a longstanding issue where we failed to handle long MCP tool names gracefully (https://github.com/openai/codex/issues/1289 was the relevant GitHub issue) | new-features |
| https://github.com/openai/codex/pull/1603 で `codex exec` に `--json` フラグを追加し、出力を JSONL 形式で stdout に出力できるようになりました | https://github.com/openai/codex/pull/1603 introduced a `--json` flag to `codex exec` so that it prints output as JSONL to stdout | new-features |
| https://github.com/openai/codex/pull/1590 で、`npm` バージョンの Node.js スクリプト経由で Codex CLI を起動した際に、Codex CLI プロセスと Node.js プロセスが一緒に終了するよう試みましたが、https://github.com/openai/codex/issues/1570 の詳細によると、その特定の問題を修正するには不十分なようです | https://github.com/openai/codex/pull/1590 tries to ensure that when the Codex CLI is launched via the Node.js script in the `npm` version that both the Codex CLI process and Node.js process exit together, though from the additional details on https://github.com/openai/codex/issues/1570, it seems like it is not sufficient to fix that specific problem. | new-features |
| https://github.com/openai/codex/pull/1590 により、Windows 上で `npm` バージョンがクラッシュする代わりに TypeScript バージョンにフォールバックするようになり、https://github.com/openai/codex/issues/1573 が修正されました | Though https://github.com/openai/codex/pull/1590 should make it so that, on Windows, the `npm` version will fall back to the TypeScript version (for now) rather than just crashing, fixing https://github.com/openai/codex/issues/1573. | new-features |
## 0.7.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴エントリなし) | (No changelog entries) | chores |
## 0.6.0

| 日本語 | English | Category |
|--------|---------|----------|
| `codex` ツール呼び出しに関連する通知の `id` がリクエスト ID と一致するように修正: https://github.com/openai/codex/pull/1554 | `id` for notifications associated with a `codex` tool call now match the request id: https://github.com/openai/codex/pull/1554 | new-features |
| 大きなペーストに対するペースト要約機能を追加: https://github.com/openai/codex/pull/1549 | Paste summarization for large pastes: https://github.com/openai/codex/pull/1549 | new-features |
| Codex Web と連携する実験的な `codex apply` コマンドを追加: https://github.com/openai/codex/pull/1528 | Experimental `codex apply` command to interact with Codex Web: https://github.com/openai/codex/pull/1528 | new-features |
## 0.5.0

| 日本語 | English | Category |
|--------|---------|----------|
| 新しい設定オプション `model_supports_reasoning_summaries` を追加: https://github.com/openai/codex/pull/1524 | Added new config option: `model_supports_reasoning_summaries`: https://github.com/openai/codex/pull/1524 | new-features |
| @reneleonhardt による複数の依存関係の更新に感謝（現在 Rust 1.88 でビルド）: https://github.com/openai/codex/pull/1494 | Thanks to @reneleonhardt for helping update a number of our dependencies (we now build with Rust 1.88!): https://github.com/openai/codex/pull/1494 | new-features |
| まだサポートされていないため `/compact` への参照を削除: https://github.com/openai/codex/pull/1503、https://github.com/openai/codex/issues/1257 | Removed reference to `/compact` in https://github.com/openai/codex/pull/1503 because it is not supported yet: https://github.com/openai/codex/issues/1257 | new-features |
| `npm` 経由でインストールした Codex を実行する際、`process.platform === "android"` で Rust CLI が実行されるよう修正した @pchuri に感謝: https://github.com/openai/codex/pull/1488 | Thanks to @pchuri so that when running Codex installed via `npm`, `process.platform === "android"` will run the Rust CLI: https://github.com/openai/codex/pull/1488 | new-features |
| 生成されるシェル補完で `codex-cli` ではなく `codex` という名前を使用するよう修正: https://github.com/openai/codex/pull/1496 | Fix generated shell completions to use the name `codex` instead of `codex-cli`: https://github.com/openai/codex/pull/1496 | new-features |
## 0.4.0

| 日本語 | English | Category |
|--------|---------|----------|
| ビルトイン `openai` モデルプロバイダで `OPENAI_BASE_URL` 環境変数をサポート: https://github.com/openai/codex/pull/1487 | Honor the `OPENAI_BASE_URL ` environment variable for the built-in `openai` model provider: https://github.com/openai/codex/pull/1487 | new-features |
| プロファイル定義時の `model_reasoning_effort` と `model_reasoning_summary` をサポート: https://github.com/openai/codex/pull/1484 | Support `model_reasoning_effort` and `model_reasoning_summary` when defining a profile thanks to https://github.com/openai/codex/pull/1484 | new-features |
| Homebrew formula に `generate_completions_from_executable()` を追加できるよう、CLI に `completion` サブコマンドを追加: https://github.com/openai/codex/pull/1491, https://github.com/Homebrew/homebrew-core/blob/main/Formula/c/codex.rb | Add a `completion` subcommand to the CLI in https://github.com/openai/codex/pull/1491 so we can ultimately add `generate_completions_from_executable()` to our Homebrew formula: https://github.com/Homebrew/homebrew-core/blob/main/Formula/c/codex.rb | new-features |
## 0.3.0

| 日本語 | English | Category |
|--------|---------|----------|
| 非ASCII文字がCLIをクラッシュさせる問題を修正: https://github.com/openai/codex/issues/1450 (@ryozi-tn による https://github.com/openai/codex/pull/1467 での修正に感謝) | Fixes an issue where non-ASCII characters were crashing the CLI: https://github.com/openai/codex/issues/1450 (huge thanks to @ryozi-tn for the fix in https://github.com/openai/codex/pull/1467) | new-features |
| `--sandbox` フラグのサポートを追加し、このオプションに関連する `config.toml` の破壊的変更を実施。詳細は https://github.com/openai/codex/pull/1476 を参照 | Adds support for a `--sandbox` flag and makes some breaking changes to `config.toml` around this option. See https://github.com/openai/codex/pull/1476 for details. | new-features |
| モデルプロバイダーへのリクエスト時にカスタムHTTPヘッダーを設定可能に: https://github.com/openai/codex/pull/1473 | Makes it possible to configure custom HTTP headers when making requests to model providers: https://github.com/openai/codex/pull/1473. | new-features |
## 0.2.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更なし) | (No changelog entries) | chores |
