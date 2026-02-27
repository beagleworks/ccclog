# OpenAI Codex 変更履歴 (2026年)

このファイルは OpenAI Codex の2026年リリース分の変更履歴を日本語で記載しています。

---

## 0.106.0

| 日本語 | English | Category |
|--------|---------|----------|
| macOS および Linux 向け直接インストールスクリプトを追加し、既存のプラットフォームペイロード（`codex` および `rg` を含む）を使用して GitHub リリースアセットとして公開 (#12740) | Added a direct install script for macOS and Linux and publish it as a GitHub release asset, using the existing platform payload (including `codex` and `rg`) (#12740) | new-features |
| app-server v2 スレッド API を拡張し、実験的なスレッドスコープのリアルタイムエンドポイント/通知と、アーカイブせずにライブスレッドをアンロードする `thread/unsubscribe` フローを追加 (#12715, #10954) | Expanded the app-server v2 thread API with experimental thread-scoped realtime endpoints/notifications and a `thread/unsubscribe` flow to unload live threads without archiving them (#12715, #10954) | new-features |
| `js_repl` を `/experimental` に昇格し、ユーザー向け警告付きの起動時互換性チェックを追加、検証済み最小 Node バージョンを `22.22.0` に引き下げ (#12712, #12824, #12857) | Promoted `js_repl` to `/experimental`, added startup compatibility checks with user-visible warnings, and lowered the validated minimum Node version to `22.22.0` (#12712, #12824, #12857) | new-features |
| Default コラボレーションモード（Plan モードのみでなく）でも `request_user_input` を有効化 (#12735) | Enabled `request_user_input` in Default collaboration mode (not just Plan mode) (#12735) | new-features |
| API ユーザー向け CLI モデル一覧に `5.3-codex` を表示 (#12808) | Made `5.3-codex` visible in the CLI model list for API users (#12808) | new-features |
| 差分ベースの忘却と使用状況を考慮したメモリ選択によりメモリ動作を改善 (#12900, #12909) | Improved memory behavior with diff-based forgetting and usage-aware memory selection (#12900, #12909) | new-features |
| タイムアウト関連の HTTP 400 ハンドシェイク失敗時のリトライと、選択モデルが対応している場合の WebSocket v2 優先使用により、リアルタイム WebSocket の信頼性を向上 (#12791, #12838) | Improved realtime websocket reliability by retrying timeout-related HTTP 400 handshake failures and preferring WebSocket v2 when supported by the selected model (#12791, #12838) | bug-fixes |
| サンドボックスラッパーが欠落し、期待されるファイルシステム制限をバイパスしうる zsh-fork シェル実行パスの問題を修正 (#12800) | Fixed a zsh-fork shell execution path that could drop sandbox wrappers and bypass expected filesystem restrictions (#12800) | bug-fixes |
| 過大なペーストによるハングやクラッシュを防ぐため、TUI および app-server に約 100 万文字の入力サイズ上限を追加し、明示的なエラーレスポンスを返すよう対応 (#12823) | Added a shared ~1M-character input size cap in the TUI and app-server to prevent hangs/crashes on oversized pastes, with explicit error responses (#12823) | bug-fixes |
| TUI のローカルファイルリンク表示を改善し、絶対パスを非表示にしつつ行・列参照は表示を維持 (#12705, #12870) | Improved TUI local file-link rendering to hide absolute paths while preserving visible line/column references (#12705, #12870) | bug-fixes |
| TUI でのサブエージェントに対する `Ctrl-C` ハンドリングを修正 (#12911) | Fixed `Ctrl-C` handling for sub-agents in the TUI (#12911) | bug-fixes |
| 認証/オンボーディングフローにおける古いサインイン成功リンクを修正 (#12805) | Fixed a stale sign-in success link in the auth/onboarding flow (#12805) | documentation |
| リモート/デバイス認証ログインシナリオ向け CLI ログインヒントを明確化 (#12813) | Clarified the CLI login hint for remote/device-auth login scenarios (#12813) | documentation |
| 組み込み `codex-network-proxy` のポリシー判定およびブロックに対する構造化 OTEL 監査ログを追加 (#12046) | Added structured OTEL audit logging for embedded `codex-network-proxy` policy decisions and blocks (#12046) | chores |
| `steer` フィーチャーフラグを削除し、TUI コンポーザーで常時有効の steer パスに統一 (#12026) | Removed the `steer` feature flag and standardized on the always-on steer path in the TUI composer (#12026) | chores |
| サブエージェント起動時に高コストな履歴メタデータスキャンをスキップすることでサブエージェントの起動オーバーヘッドを削減 (#12918) | Reduced sub-agent startup overhead by skipping expensive history metadata scans for subagent spawns (#12918) | chores |

## 0.105.0

| 日本語 | English | Category |
|--------|---------|----------|
| TUI でフェンスコードブロックおよび diff のシンタックスハイライトを追加、ライブプレビュー付き `/theme` ピッカーを追加、ライト/ダーク両ターミナル向けのテーマ対応 diff カラーを改善。(#11447, #12581) | The TUI now syntax-highlights fenced code blocks and diffs, adds a `/theme` picker with live preview, and uses better theme-aware diff colors for light and dark terminals. (#11447, #12581) | new-features |
| TUI でスペースバーを長押しすることで音声入力を録音・文字起こしし、プロンプトとして直接入力可能に。(#3381) | You can now dictate prompts by holding the spacebar to record and transcribe voice input directly in the TUI. (#3381) | new-features |
| マルチエージェントワークフローの実行・追跡を改善：`spawn_agents_on_csv` で CSV からの作業展開と進捗/ETA 表示に対応、ニックネーム・改善されたピッカー・子スレッド承認プロンプトの表示によりサブエージェントの追跡が容易に。(#10935, #12320, #12327, #12332, #12570, #12767) | Multi-agent workflows are easier to run and track: `spawn_agents_on_csv` can fan out work from a CSV with built-in progress/ETA, and sub-agents are easier to follow with nicknames, a cleaner picker, and visible child-thread approval prompts. (#10935, #12320, #12327, #12332, #12570, #12767) | new-features |
| TUI に新しい便利コマンドを追加：`/copy` で最新のアシスタント返答全文をコピー、`/clear` および `Ctrl-L` でスレッドコンテキストを保持したままスクリーンをクリア（`/clear` は新規チャット開始も可能）。(#12444, #12520, #12613, #12628) | The TUI picked up new convenience commands: `/copy` copies the latest complete assistant reply, while `/clear` and `Ctrl-L` clear the screen without losing thread context, with `/clear` also able to start a fresh chat. (#12444, #12520, #12613, #12628) | new-features |
| 承認制御をより柔軟化：コマンドに対する追加サンドボックス権限のリクエスト機能を追加、承認を完全に無効にすることなく特定の承認プロンプト種別を自動拒否する設定に対応。(#11871, #12087) | Approval controls are more flexible: Codex can now ask for extra sandbox permissions for a command, and you can auto-reject specific approval prompt types without turning approvals off entirely. (#11871, #12087) | new-features |
| アプリサーバークライアントのスレッド操作を強化：`thread/list` にタイトル検索を追加、read/list レスポンスおよび通知でスレッドステータスを公開、`thread/resume` で最新ターンをインライン返却することで再接続時のデータ損失を軽減。(#11776, #11786, #12578) | App-server clients can do more with threads: `thread/list` can search by title, thread status is exposed in read/list responses and notifications, and `thread/resume` returns the latest turn inline so reconnects are less lossy. (#11776, #11786, #12578) | new-features |
| TUI で折り返し表示された長いリンクのクリック可能性を維持、複数のビューにおける関連するクリッピングおよびレイアウトの問題も修正。(#12067) | Long links in the TUI stay clickable when wrapped, which also fixes related clipping and layout issues in several views. (#12067) | bug-fixes |
| TUI のインタラクションに関する複数のエッジケースを修正：より多くのターミナルでキュー済みメッセージの編集が可能に、最終回答のストリーミング中に Enter を押してもフォローアッププロンプトがスタックしなくなるよう修正、承認ダイアログが正しいリクエスト ID で応答するよう修正。(#12240, #12569, #12746) | Several TUI interaction edge cases were fixed: queued-message editing now works in more terminals, follow-up prompts no longer get stuck if you press Enter while a final answer is still streaming, and approval dialogs now respond with the correct request id. (#12240, #12569, #12746) | bug-fixes |
| チャットコンポーザーの `@` パースの信頼性を向上：`npx -y @scope/pkg@latest` のようなコマンドで誤ってファイルピッカーが開いたり送信がブロックされる問題を修正。(#12643) | `@` parsing in the chat composer is more reliable, so commands like `npx -y @scope/pkg@latest` no longer accidentally open the file picker or block submission. (#12643) | bug-fixes |
| アプリサーバーの WebSocket 処理の堅牢性を向上：切断後もスレッドリスナーを維持するよう改善、Ctrl-C で再起動前に処理中のターンの完了を待機するよう変更、`permessage-deflate` を送信する WebSocket クライアントの接続に対応。(#12373, #12517, #12629) | App-server websocket handling is more robust: thread listeners survive disconnects, Ctrl-C waits for in-flight turns before restarting, and websocket clients that send `permessage-deflate` can connect successfully. (#12373, #12517, #12629) | bug-fixes |
| Linux のサンドボックス化されたコマンドに最小限の `/dev` を提供し、エントロピーや標準デバイスノードを必要とするツールの失敗を修正。(#12081) | Linux sandboxed commands now get a minimal `/dev`, fixing failures in tools that need entropy or other standard device nodes. (#12081) | bug-fixes |
| `js_repl` でキャッチされないカーネル障害のエラー報告を改善、障害後のクリーンな回復に対応、ネストされたツール呼び出しからの `view_image` 結果の正しい添付に対応。(#12636, #12725) | `js_repl` now reports uncaught kernel failures more clearly, recovers cleanly afterward, and correctly attaches `view_image` results from nested tool calls. (#12636, #12725) | bug-fixes |
| Bugcrowd への報告ガイダンスを含む公開セキュリティポリシーを追加。(#12193) | Added a public security policy with Bugcrowd reporting guidance. (#12193) | documentation |
| インストールおよびローカルワークフローのドキュメントを更新：`cargo install --locked cargo-nextest` の使用、および完全なフィーチャーカバレッジが必要な場合を除く通常の `--all-features` ビルドの回避を推奨。(#12377, #12429) | Updated install and local workflow docs to use `cargo install --locked cargo-nextest` and to avoid routine `--all-features` builds unless you specifically need full feature coverage. (#12377, #12429) | documentation |

## 0.104.0

| 日本語 | English | Category |
|--------|---------|----------|
| ネットワークプロキシにおけるWebSocketプロキシ用の `WS_PROXY`/`WSS_PROXY` 環境変数（小文字バリアントを含む）のサポートを追加 | Added `WS_PROXY`/`WSS_PROXY` environment support (including lowercase variants) for websocket proxying in the network proxy. (#11784) | new-features |
| App-server v2 がスレッドのアーカイブ・アーカイブ解除時に通知を送出するようになり、クライアントがポーリング不要で反応可能に | App-server v2 now emits notifications when threads are archived or unarchived, enabling clients to react without polling. (#12030) | new-features |
| Protocol/core が単一シェルコマンド実行フロー内での複数承認に対応するため、コマンド承認に個別の承認IDを保持するよう変更 | Protocol/core now carry distinct approval IDs for command approvals to support multiple approvals within a single shell command execution flow. (#12051) | new-features |
| resume/fork フロー中の cwd 変更プロンプトで `Ctrl+C`/`Ctrl+D` が暗黙的な選択をせずにクリーンに終了するよう修正 | `Ctrl+C`/`Ctrl+D` now cleanly exits the cwd-change prompt during resume/fork flows instead of implicitly selecting an option. (#12040) | bug-fixes |
| レスポンスボディのモデルスラッグではなくレスポンスヘッダーのモデル（およびWebSocketトップレベルイベント）を参照することで、安全性チェックの誤ダウングレード動作を低減 | Reduced false-positive safety-check downgrade behavior by relying on the response header model (and websocket top-level events) rather than the response body model slug. (#12061) | bug-fixes |
| WebSocketプロキシ設定、スレッドアーカイブ・アーカイブ解除通知、コマンド承認IDの配線に関するドキュメントおよびスキーマを更新 | Updated docs and schemas to cover websocket proxy configuration, new thread archive/unarchive notifications, and the command approval ID plumbing. (#11784, #12030, #12051) | documentation |
| 公開済みバージョンへの `npm publish` を試みた際でも Rust リリースワークフローが正常に動作するよう改善 | Made the Rust release workflow resilient to `npm publish` attempts for an already-published version. (#12044) | chores |
| リモートコンパクションテストのモックを標準化し、デフォルトの本番相当の動作に合わせて関連スナップショットを更新 | Standardized remote compaction test mocking and refreshed related snapshots to align with the default production-shaped behavior. (#12050) | chores |

## 0.103.0

| 日本語 | English | Category |
|--------|---------|----------|
| アプリ一覧のレスポンスに`app_metadata`、ブランディング、ラベルなどの詳細情報を追加し、クライアントが追加リクエストなしでより完全なアプリカードを表示可能に。(#11706) | App listing responses now include richer app details (`app_metadata`, branding, and labels), so clients can render more complete app cards without extra requests. (#11706) | new-features |
| コミットの共同作成者帰属を`prepare-commit-msg`フックで管理するよう変更し、`command_attribution`による上書き（デフォルトラベル、カスタムラベル、無効化）に対応。(#11617) | Commit co-author attribution now uses a Codex-managed `prepare-commit-msg` hook, with `command_attribution` override support (default label, custom label, or disable). (#11617) | new-features |
| `remote_models`フィーチャーフラグを削除し、無効時のフォールバックモデルメタデータを排除することでモデル選択の信頼性とパフォーマンスを改善。(#11699) | Removed the `remote_models` feature flag to prevent fallback model metadata when it was disabled, improving model selection reliability and performance. (#11699) | bug-fixes |
| Rust依存関係（`clap`、`env_logger`、`arc-swap`）の更新およびBazelロック状態の定期メンテナンス。(#11888, #11889, #11890, #12032) | Updated Rust dependencies (`clap`, `env_logger`, `arc-swap`) and refreshed Bazel lock state as routine maintenance. (#11888, #11889, #11890, #12032) | chores |
| CIの破損を受け、Rustツールチェーンの`1.93.1`へのバージョンアップをリバート。(#11886, #12035) | Reverted the Rust toolchain bump to `1.93.1` after CI breakage. (#11886, #12035) | chores |

## 0.102.0

| 日本語 | English | Category |
|--------|---------|----------|
| TUIでの権限履歴の表示改善やサンドボックス読み取りアクセス付与のスラッシュコマンド追加など、権限フローを統一化。(#11633, #11512, #11550, #11639) | Added a more unified permissions flow, including clearer permissions history in the TUI and a slash command to grant sandbox read access when directories are blocked. (#11633, #11512, #11550, #11639) | new-features |
| 承認プロンプトにホスト/プロトコルの詳細情報を表示する、構造化されたネットワーク承認処理を導入。(#11672, #11674) | Introduced structured network approval handling, with richer host/protocol context shown directly in approval prompts. (#11672, #11674) | new-features |
| セッション完了シグナルを明示的に送信するようアプリサーバーのファジーファイル検索を拡張し、クライアントがローディング表示を確実に停止可能に。(#10268, #11773) | Expanded app-server fuzzy file search with explicit session-complete signaling so clients can stop loading indicators reliably. (#10268, #11773) | new-features |
| 新しいマルチエージェント命名/設定への移行を含む、設定によるカスタマイズ可能なマルチエージェントロールを追加。(#11917, #11982, #11939, #11918) | Added customizable multi-agent roles via config, including migration toward the new multi-agent naming/config surface. (#11917, #11982, #11939, #11918) | new-features |
| クライアントがモデル再ルーティングイベントを検知・表示できるよう `model/rerouted` 通知を追加。(#12001) | Added a `model/rerouted` notification so clients can detect and render model reroute events explicitly. (#12001) | new-features |
| TUIでの再開・巻き戻しや履歴リプレイ時にリモート画像添付が正しく保持されない問題を修正。(#10590) | Fixed remote image attachments so they persist correctly across resume/backtrack and history replay in the TUI. (#10590) | bug-fixes |
| スクリーンリーダー利用者向けのアニメーション制御が一貫して適用されないTUIアクセシビリティのリグレッションを修正。(#11860) | Fixed a TUI accessibility regression where animation gating for screen reader users was not consistently respected. (#11860) | bug-fixes |
| アクティブなインメモリスレッドへの再参加とスレッド再開の不正ケースの処理を改善するよう、アプリサーバーのスレッド再開動作を修正。(#11756) | Fixed app-server thread resume behavior to correctly rejoin active in-memory threads and tighten invalid resume cases. (#11756) | bug-fixes |
| `model/list` の出力がサーバー側で意図せずフィルタリングされないよう、完全なモデルデータと可視性メタデータを返すよう修正。(#11793) | Fixed `model/list` output to return full model data plus visibility metadata, avoiding unintended server-side filtering. (#11793) | bug-fixes |
| リセット時のハング、インフライトのツールコール競合、`view_image` のパニックパスなど、複数の `js_repl` 安定性問題を修正。(#11932, #11922, #11800, #11796) | Fixed several `js_repl` stability issues, including reset hangs, in-flight tool-call races, and a `view_image` panic path. (#11932, #11922, #11800, #11796) | bug-fixes |
| メンション解析およびアプリ一覧の読み込み/フィルタリング動作におけるアプリ連携のエッジケースを修正。(#11894, #11518, #11697) | Fixed app integration edge cases in mention parsing and app list loading/filtering behavior. (#11894, #11518, #11697) | bug-fixes |
| ユーザーに見えるTUIの変更にスナップショットカバレッジを義務付けるよう、コントリビューターガイドを更新。(#10669) | Updated contributor guidance to require snapshot coverage for user-visible TUI changes. (#10669) | documentation |
| CodexアプリおよびMCPコマンド利用に関するドキュメント/ヘルプテキストを更新。(#11926, #11813) | Updated docs/help text around Codex app and MCP command usage. (#11926, #11813) | documentation |
| `just log --search` および `just log --compact` モードを追加し、開発者向けログツールを改善。(#11995, #11994) | Improved developer log tooling with new `just log --search` and `just log --compact` modes. (#11995, #11994) | chores |
| ベンダー管理の `rg` を更新し、依存関係のずれを減らすためBazel/Cargoロックファイルの同期チェックを強化。(#12007, #11790) | Updated vendored `rg` and tightened Bazel/Cargo lockfile sync checks to reduce dependency drift. (#12007, #11790) | chores |

## 0.101.0

| 日本語 | English | Category |
|--------|---------|----------|
| メモリファイルに作業ディレクトリを含めるよう変更し、異なるプロジェクトディレクトリ間を切り替えた際のメモリ動作を改善 (#11591) | Memory files now include the working directory in stored context, improving memory behavior when switching between different project directories. (#11591) | new-features |
| モデル解決時にプレフィックスで選択した場合も、要求されたモデルスラッグを保持するよう変更し、モデル参照が書き換えられずに安定するよう改善 (#11602) | Model resolution now preserves the requested model slug when selecting by prefix, so model references stay stable instead of being rewritten. (#11602) | bug-fixes |
| 開発者メッセージをフェーズ1のメモリ入力から除外し、ノイズや無関係なコンテンツがメモリに入るのを削減 (#11608) | Developer messages are now excluded from phase-1 memory input, reducing noisy or irrelevant content entering memory. (#11608) | bug-fixes |
| メモリフェーズ処理の並行性を削減し、負荷時の統合/ステージング処理をより安定化 (#11614) | Memory phase processing concurrency was reduced to make consolidation/staging more stable under load. (#11614) | bug-fixes |
| フェーズ1メモリパイプラインのコードパスをクリーンアップし簡素化 (#11605) | Cleaned and simplified the phase-1 memory pipeline code paths. (#11605) | chores |
| リポジトリメンテナンス: リモートモデルテストのフォーマットとテストスイート整備を更新 (#11619) | Minor repository maintenance: formatting and test-suite hygiene updates in remote model tests. (#11619) | chores |

## 0.100.0

| 日本語 | English | Category |
|--------|---------|----------|
| ツールコール間で状態を永続化できる実験的なフィーチャーゲート付きJavaScript REPLランタイム（`js_repl`）を追加し、オプションでランタイムパスのオーバーライドに対応（#10674） | Added an experimental, feature-gated JavaScript REPL runtime (`js_repl`) that can persist state across tool calls, with optional runtime path overrides. (#10674) | new-features |
| プロトコル、バックエンドクライアント、TUIステータス画面全体で複数の同時レート制限をサポート（#11260） | Added support for multiple simultaneous rate limits across the protocol, backend client, and TUI status surfaces. (#11260) | new-features |
| アプリサーバーWebSocket転送を受信/送信分離アーキテクチャで再導入し、接続を認識するスレッド再開サブスクリプションを追加（#11370、#11474） | Reintroduced app-server websocket transport with a split inbound/outbound architecture, plus connection-aware thread resume subscriptions. (#11370, #11474) | new-features |
| TUIにメモリ管理スラッシュコマンド（`/m_update`、`/m_drop`）を追加し、メモリ読み取り/メトリクス処理を拡張（#11569、#11459、#11593） | Added memory management slash commands in the TUI (`/m_update`, `/m_drop`) and expanded memory-read/metrics plumbing. (#11569, #11459, #11593) | new-features |
| ChatGPTコネクタ処理でApps SDKアプリを有効化（#11486） | Enabled Apps SDK apps in ChatGPT connector handling. (#11486) | new-features |
| LinuxとWindows両方でサンドボックス機能を昇格し、読み取りアクセスを設定可能な新しい`ReadOnlyAccess`ポリシー形式を導入（#11381、#11341、#11387） | Promoted sandbox capabilities on both Linux and Windows, and introduced a new `ReadOnlyAccess` policy shape for configurable read access. (#11381, #11341, #11387) | new-features |
| WebSocketのインクリメンタル出力の重複を修正し、`response.completed`後の追加を防止、`response.incomplete`をエラーパスとして処理（#11383、#11402、#11558） | Fixed websocket incremental output duplication, prevented appends after `response.completed`, and treated `response.incomplete` as an error path. (#11383, #11402, #11558) | bug-fixes |
| アイドル時のping処理を継続し、高速再接続時のノイズの多い初回リトライエラーを抑制することでWebSocketセッションの安定性を改善（#11413、#11548） | Improved websocket session stability by continuing ping handling when idle and suppressing noisy first-retry errors during quick reconnects. (#11413, #11548) | bug-fixes |
| 欠落したロールアウトファイルを削除し、スレッド一覧表示時に古いDBメタデータをクリーンアップすることで古いスレッドエントリを修正（#11572） | Fixed stale thread entries by dropping missing rollout files and cleaning stale DB metadata during thread listing. (#11572) | bug-fixes |
| ペースト時のバースト間隔許容値を増加させ、Windows環境のターミナル（特にVS Code統合ターミナル）での複数行ペーストの信頼性を修正（#9348） | Fixed Windows multi-line paste reliability in terminals (especially VS Code integrated terminal) by increasing paste burst timing tolerance. (#9348) | bug-fixes |
| 部分的なレート制限更新をマージする際の`limit_name`の誤った継承を修正（#11557） | Fixed incorrect inheritance of `limit_name` when merging partial rate-limit updates. (#11557) | bug-fixes |
| ファイルウォッチャーのデバウンスを1秒から10秒に増加させ、アクティブな編集中のスキルパースエラーの繰り返しスパムを削減（#11494） | Reduced repeated skill parse-error spam during active edits by increasing file-watcher debounce from 1s to 10s. (#11494) | bug-fixes |
| 機能の有効化と設定のためのJavaScript REPLドキュメントと設定/スキーマガイダンスを追加（#10674） | Added JS REPL documentation and config/schema guidance for enabling and configuring the feature. (#10674) | documentation |
| アプリサーバーREADMEにアプリサーバーWebSocket転送のドキュメントを更新（#11370） | Updated app-server websocket transport documentation in the app-server README. (#11370) | documentation |
| Rustワークスペースコンポーネント間の依存関係境界を簡素化するため、`codex-common`を集中化された`codex-utils-*`クレートに分割（#11422） | Split `codex-common` into focused `codex-utils-*` crates to simplify dependency boundaries across Rust workspace components. (#11422) | chores |
| 並列Windowsビルドとmuslリンク修正を含め、WindowsおよびmuslターゲットのRustリリースパイプラインのスループットと信頼性を改善（#11488、#11500、#11556） | Improved Rust release pipeline throughput and reliability for Windows and musl targets, including parallel Windows builds and musl link fixes. (#11488, #11500, #11556) | chores |
| 重複する`cargo-timing.html`アーティファクトを除外し、GitHubリリースアセットアップロードの衝突を防止（#11564） | Prevented GitHub release asset upload collisions by excluding duplicate `cargo-timing.html` artifacts. (#11564) | chores |

## 0.99.0

| 日本語 | English | Category |
|--------|---------|----------|
| 実行中のターン中に直接シェルコマンドを実行しても中断されなくなり、ターンがアクティブな状態でコマンドを同時実行可能に (#10513) | Running direct shell commands no longer interrupts an in-flight turn; commands can execute concurrently when a turn is active. (#10513) | new-features |
| TUIフッターに表示するメタデータを対話的に設定できる `/statusline` を追加 (#10546) | Added `/statusline` to configure which metadata appears in the TUI footer interactively. (#10546) | new-features |
| TUI再開ピッカーで作成時刻と最終更新時刻の並び順を切り替え可能に、ピッカー内にモード表示を追加 (#10752) | The TUI resume picker can now toggle sort order between creation time and last-updated time with an in-picker mode indicator. (#10752) | new-features |
| app-serverクライアント向けに、アクティブターンの制御、実験的機能の一覧表示、エージェント再開、特定通知のオプトアウト用の専用APIを追加 (#10721, #10821, #10903, #11319) | App-server clients now get dedicated APIs for steering active turns, listing experimental features, resuming agents, and opting out of specific notifications. (#10721, #10821, #10903, #11319) | new-features |
| エンタープライズ/管理者要件で `requirements.toml` を通じてWeb検索モードの制限とネットワーク制約の定義が可能に (#10964, #10958) | Enterprise/admin requirements can now restrict web search modes and define network constraints through `requirements.toml`. (#10964, #10958) | new-features |
| 画像添付で既存形式に加えてGIFとWebP入力に対応 (#11237) | Image attachments now accept GIF and WebP inputs in addition to existing formats. (#11237) | new-features |
| シェル環境と `rc` ファイルのスナップショット機能を有効化 (#11172) | Enable snapshotting of the shell environment and `rc` files (#11172) | new-features |
| Windows起動時にバッファされたキー入力によってTUIサインインフローが即座に終了する問題を修正 (#10729) | Fixed a Windows startup issue where buffered keypresses could cause the TUI sign-in flow to exit immediately. (#10729) | bug-fixes |
| 必須MCPサーバーが起動/再開フロー中に破損状態で継続せず、即座に失敗するように修正 (#10902) | Required MCP servers now fail fast during start/resume flows instead of continuing in a broken state. (#10902) | bug-fixes |
| スキルリロードイベントの誤発生と非常に大きなログファイルが生成される可能性があったファイルウォッチャーのバグを修正 (#11217) | Fixed a file-watcher bug that emitted spurious skills reload events and could generate very large log files. (#11217) | bug-fixes |
| TUI入力の信頼性を改善: 長いオプションラベルの正しい折り返し、アイドル時のステアモードでのTab送信、履歴呼び出し時のカーソル位置の一貫性維持、保存された下書きの画像プレースホルダーの正しい復元 (#11123, #10035, #11295, #9040) | Improved TUI input reliability: long option labels wrap correctly, Tab submits in steer mode when idle, history recall keeps cursor placement consistent, and stashed drafts restore image placeholders correctly. (#11123, #10035, #11295, #9040) | bug-fixes |
| テキスト専用モデルでの `view_image` エラーの明確化とモデル切り替え時のサポート外画像履歴の除去により、モデルモダリティのエッジケースを修正 (#11336, #11349) | Fixed model-modality edge cases by surfacing clearer `view_image` errors on text-only models and stripping unsupported image history during model switches. (#11336, #11349) | bug-fixes |
| ラップ/heredocシェルコマンドの誤った承認ミスマッチを削減し、exec ポリシー評価時の空コマンドリストに対するガードを追加 (#10941, #11397) | Reduced false approval mismatches for wrapped/heredoc shell commands and guarded against empty command lists in exec policy evaluation. (#10941, #11397) | bug-fixes |
| `turn/steer`、実験的機能の検出、`resume_agent`、通知オプトアウト、null `developer_instructions` 正規化に関するapp-serverドキュメントとプロトコルリファレンスを拡充 (#10721, #10821, #10903, #10983, #11319) | Expanded app-server docs and protocol references for `turn/steer`, experimental-feature discovery, `resume_agent`, notification opt-outs, and null `developer_instructions` normalization. (#10721, #10821, #10903, #10983, #11319) | documentation |
| 下書き/画像復元、ステアモードでのTab送信動作、履歴ナビゲーションのカーソルセマンティクスを反映してTUIコンポーザードキュメントを更新 (#9040, #10035, #11295) | Updated TUI composer docs to reflect draft/image restoration, steer-mode Tab submit behavior, and history-navigation cursor semantics. (#9040, #10035, #11295) | documentation |
| npmリリースパッケージングを再構築し、プラットフォーム固有のバイナリを `@openai/codex` dist-tags経由で配布することでパッケージサイズの負担を軽減しつつ、プラットフォーム固有のインストール（`@alpha` 含む）を維持 (#11318, #11339) | Reworked npm release packaging so platform-specific binaries are distributed via `@openai/codex` dist-tags, reducing package-size pressure while preserving platform-specific installs (including `@alpha`). (#11318, #11339) | chores |
| `time` のセキュリティ関連の依存関係更新を適用 (RUSTSEC-2026-0009) (#10876) | Pulled in a security-driven dependency update for `time` (RUSTSEC-2026-0009). (#10876) | chores |

## 0.98.0

| 日本語 | English | Category |
|--------|---------|----------|
| GPT-5.3-Codex を導入。[詳細はこちら](https://openai.com/index/introducing-gpt-5-3-codex/) | Introducing GPT-5.3-Codex. [Learn More](https://openai.com/index/introducing-gpt-5-3-codex/) | new-features |
| ステアモードが安定版となりデフォルトで有効化され、タスク実行中は `Enter` で即座に送信、`Tab` で明示的にフォローアップ入力をキューに追加 (#10690) | Steer mode is now stable and enabled by default, so `Enter` sends immediately during running tasks while `Tab` explicitly queues follow-up input. (#10690) | new-features |
| TypeScript SDK の `resumeThread()` 引数順序を修正し、ローカル画像での再開時に意図しない新規セッションが開始されなくなった (#10709) | Fixed `resumeThread()` argument ordering in the TypeScript SDK so resuming with local images no longer starts an unintended new session. (#10709) | bug-fixes |
| 会話途中でのモデル変更や異なるモデルでの再開時のモデル命令処理を修正し、正しい開発者命令が適用されるようになった (#10651, #10719) | Fixed model-instruction handling when changing models mid-conversation or resuming with a different model, ensuring the correct developer instructions are applied. (#10651, #10719) | bug-fixes |
| リモート圧縮時の不整合を修正し、トークン事前推定と圧縮ペイロード生成で同じベース命令を使用することで、トリム精度を向上させコンテキストオーバーフローを回避 (#10692) | Fixed a remote compaction mismatch where token pre-estimation and compact payload generation could use different base instructions, improving trim accuracy and avoiding context overflows. (#10692) | bug-fixes |
| クラウド要件がログイン後に即座にリロードされるようになり、後続のリフレッシュパスを待つ必要がなくなった (#10725) | Cloud requirements now reload immediately after login instead of requiring a later refresh path to take effect. (#10725) | bug-fixes |
| デフォルトのアシスタントパーソナリティを Pragmatic に復元し、設定および関連するテスト/UI スナップショットに適用 (#10705) | Restored the default assistant personality to Pragmatic across config and related tests/UI snapshots. (#10705) | chores |
| コラボレーションモードの命名とメタデータをプロンプト、ツール、プロトコルタイプ、TUI ラベル全体で統一し、モード動作とメッセージングの一貫性を向上 (#10666) | Unified collaboration mode naming and metadata across prompts, tools, protocol types, and TUI labels for more consistent mode behavior and messaging. (#10666) | chores |

## 0.97.0

| 日本語 | English | Category |
|--------|---------|----------|
| MCP/アプリツール承認に対してセッション単位の「許可して記憶」オプションを追加し、同じツールへの繰り返し呼び出しをセッション中に自動承認可能に (#10584) | Added a session-scoped “Allow and remember” option for MCP/App tool approvals, so repeated calls to the same tool can be auto-approved during the session. (#10584) | new-features |
| スキルファイルの変更を再起動なしで検出するライブスキル更新検出機能を追加 (#10478) | Added live skill update detection, so skill file changes are picked up without restarting. (#10478) | new-features |
| アプリサーバー統合において動的ツール出力でテキストと画像の混合コンテンツをサポート (#10567) | Added support for mixed text and image content in dynamic tool outputs for app-server integrations. (#10567) | new-features |
| 有効な設定を検査するための新しい `/debug-config` スラッシュコマンドを TUI に追加 (#10642) | Added a new `/debug-config` slash command in the TUI to inspect effective configuration. (#10642) | new-features |
| スレッドメモリサマリーをサポートするための初期メモリ配管（API クライアント + ローカル永続化）を導入 (#10629, #10634) | Introduced initial memory plumbing (API client + local persistence) to support thread memory summaries. (#10629, #10634) | new-features |
| ログをより簡単にリダイレクト可能にするため（`-c` オーバーライドを含む）設定可能な `log_dir` を追加 (#10678) | Added configurable `log_dir` so logs can be redirected (including via `-c` overrides) more easily. (#10678) | new-features |
| 説明列のレンダリングを安定化させ TUI アプリ/コネクタピッカーのジッターを修正 (#10593) | Fixed jitter in the TUI apps/connectors picker by stabilizing description-column rendering. (#10593) | bug-fixes |
| プリアンブルおよび初期実行フロー中の TUI 「動作中」ステータスインジケーター/シマーを復元して安定化 (#10700, #10701) | Restored and stabilized the TUI “working” status indicator/shimmer during preamble and early exec flows. (#10700, #10701) | bug-fixes |
| より高いタイムアウト、リトライ、および MDM 設定に対する正しい優先順位によりクラウド要件の信頼性を改善 (#10631, #10633, #10659) | Improved cloud requirements reliability with higher timeouts, retries, and corrected precedence over MDM settings. (#10631, #10633, #10659) | bug-fixes |
| ターン途中で注入された入力処理のため、保留中の入力ユーザーイベントをより一貫して永続化 (#10656) | Persisted pending-input user events more consistently for mid-turn injected input handling. (#10656) | bug-fixes |
| 実験的なアプリサーバー API へのオプトイン方法を文書化 (#10667) | Documented how to opt in to the experimental app-server API. (#10667) | documentation |
| 新しい `log_dir` 設定動作に関するドキュメント/スキーマのカバレッジを更新 (#10678) | Updated docs/schema coverage for new `log_dir` configuration behavior. (#10678) | documentation |
| ファイルシステム分離オプションを改善するため、ゲート付き Bubblewrap (`bwrap`) Linux サンドボックスパスを追加 (#9938) | Added a gated Bubblewrap (`bwrap`) Linux sandbox path to improve filesystem isolation options. (#9938) | chores |
| モデルクライアントのライフサイクルをセッションスコープにリファクタリングし、暗黙的なクライアント状態を削減 (#10595, #10664) | Refactored model client lifecycle to be session-scoped and reduced implicit client state. (#10595, #10664) | chores |
| 多くのアプリをインストールしているユーザーの繰り返しロード遅延を削減するため、アプリからの MCP アクションのキャッシュを追加 (#10662) | Added caching for MCP actions from apps to reduce repeated load latency for users with many installed apps. (#10662) | chores |
| プロトコル/設定サーフェスに `none` パーソナリティオプションを追加 (#10688) | Added a `none` personality option in protocol/config surfaces. (#10688) | chores |

## 0.96.0

| 日本語 | English | Category |
|--------|---------|----------|
| `thread/compact` を v2 app-server API に非同期トリガー RPC として追加し、クライアントが圧縮を即座に開始して完了を別途追跡可能にした (#10445) | Added `thread/compact` to the v2 app-server API as an async trigger RPC, so clients can start compaction immediately and track completion separately. (#10445) | new-features |
| 新しい `codex.rate_limits` イベントを介した WebSocket 側のレート制限シグナリングを追加し、ETag/reasoning メタデータ処理で WebSocket のパリティを実現 (#10324) | Added websocket-side rate limit signaling via a new `codex.rate_limits` event, with websocket parity for ETag/reasoning metadata handling. (#10324) | new-features |
| Windows 以外のすべてのプラットフォームで `unified_exec` を有効化 (#10641) | Enabled `unified_exec` on all non-Windows platforms. (#10641) | new-features |
| 制約された要件値にソース来歴を含めるようにし、`/debug-config` などの UI フローでソースを意識した設定デバッグを可能にした (#10568) | Constrained requirement values now include source provenance, enabling source-aware config debugging in UI flows like `/debug-config`. (#10568) | new-features |
| TUI の `request_user_input` オーバーレイでの `Esc` 処理を修正: ノートが開いている場合、`Esc` はセッションを中断する代わりにノートモードを終了するように変更 (#10569) | Fixed `Esc` handling in the TUI `request_user_input` overlay: when notes are open, `Esc` now exits notes mode instead of interrupting the session. (#10569) | bug-fixes |
| スレッド一覧は、最初に状態 DB をクエリ(アーカイブされたスレッドを含む)し、必要な場合にのみファイルシステム走査にフォールバックするようにし、一覧表示の正確性と耐障害性を向上 (#10544) | Thread listing now queries the state DB first (including archived threads) and falls back to filesystem traversal only when needed, improving listing correctness and resilience. (#10544) | bug-fixes |
| スレッドパス検索を修正し、解決されたファイルが実際に存在することを要求するようにし、無効なスレッド ID 解決を防止 (#10618) | Fixed thread path lookup to require that the resolved file actually exists, preventing invalid thread-id resolutions. (#10618) | bug-fixes |
| 動的ツール注入を単一トランザクションで実行し、部分的な状態更新を回避 (#10614) | Dynamic tool injection now runs in a single transaction to avoid partial state updates. (#10614) | bug-fixes |
| 承認ポリシーのプロンプトで使用される `request_rule` ガイダンスを改良し、ルールの動作を修正 (#10379, #10598) | Refined `request_rule` guidance used in approval-policy prompting to correct rule behavior. (#10379, #10598) | bug-fixes |
| `thread/compact` の app-server ドキュメントを更新し、非同期動作とスレッドビジーライフサイクルを明確化 (#10445) | Updated app-server docs for `thread/compact` to clarify its asynchronous behavior and thread-busy lifecycle. (#10445) | documentation |
| TUI ドキュメントを更新し、`request_user_input` でのモード固有の `Esc` 動作に対応 (#10569) | Updated TUI docs to match the mode-specific `Esc` behavior in `request_user_input`. (#10569) | documentation |
| 状態 DB ヘルパーをバージョン管理された SQLite ファイル名スキームに移行し、ランタイム初期化中にレガシー状態ファイルをクリーンアップ (#10623) | Migrated state DB helpers to a versioned SQLite filename scheme and cleaned up legacy state files during runtime initialization. (#10623) | chores |
| ランタイムテレメトリーに WebSocket タイミングメトリクスを追加し、コアクライアント配管の内部メタデータフローを簡素化 (#10577, #10589) | Expanded runtime telemetry with websocket timing metrics and simplified internal metadata flow in core client plumbing. (#10577, #10589) | chores |

## 0.95.0

| 日本語 | English | Category |
|--------|---------|----------|
| macOS において `codex app <path>` を追加。CLI から Codex Desktop を起動し、不足している場合は DMG を自動ダウンロード (#10418) | Added `codex app <path>` on macOS to launch Codex Desktop from the CLI, with automatic DMG download if it is missing. (#10418) | new-features |
| `~/.agents/skills` からの個人スキル読み込みに対応（`~/.codex/skills` との互換性あり）。加えて、公開リモートスキルの一覧表示・ダウンロード用 app-server API/イベントを追加 (#10437, #10448) | Added personal skill loading from `~/.agents/skills` (with `~/.codex/skills` compatibility), plus app-server APIs/events to list and download public remote skills. (#10437, #10448) | new-features |
| `/plan` がインライン引数と画像の貼り付けに対応。TUI におけるスラッシュコマンドの編集・ハイライトを改善 (#10269) | `/plan` now accepts inline prompt arguments and pasted images, and slash-command editing/highlighting in the TUI is more polished. (#10269) | new-features |
| シェル関連ツールの並列実行に対応し、複数コマンド実行のスループットを向上 (#10505) | Shell-related tools can now run in parallel, improving multi-command execution throughput. (#10505) | new-features |
| シェル実行時に `CODEX_THREAD_ID` を受け取るよう変更。スクリプトとスキルがアクティブなスレッド/セッションを検知可能に (#10096) | Shell executions now receive `CODEX_THREAD_ID`, so scripts and skills can detect the active thread/session. (#10096) | new-features |
| Linux サンドボックスに Bubblewrap のベンダー版と FFI 配線を追加。今後のランタイム統合の基盤として導入 (#10413) | Added vendored Bubblewrap + FFI wiring in the Linux sandbox as groundwork for upcoming runtime integration. (#10413) | new-features |
| Git コマンドの安全性を強化。破壊的操作や書き込み可能な呼び出しが承認チェックをバイパスしないよう修正 (#10258) | Hardened Git command safety so destructive or write-capable invocations no longer bypass approval checks. (#10258) | bug-fixes |
| 再開/スレッド閲覧の信頼性を改善。保存されたスレッド名を正しく表示し、スレッド一覧の動作を修正 (#10340, #10383) | Improved resume/thread browsing reliability by correctly showing saved thread names and fixing thread listing behavior. (#10340, #10383) | bug-fixes |
| 初回実行時の trust-mode 処理を修正し、サンドボックスモードを一貫して報告。`$PWD/.agents` を `$PWD/.codex` 同様に読み取り専用に変更 (#10415, #10524) | Fixed first-run trust-mode handling so sandbox mode is reported consistently, and made `$PWD/.agents` read-only like `$PWD/.codex`. (#10415, #10524) | bug-fixes |
| websocket/ストリーミングフローにおいて、割り込み後に `codex exec` がハングする問題を修正。割り込まれたターンをクリーンにシャットダウン (#10519) | Fixed `codex exec` hanging after interrupt in websocket/streaming flows; interrupted turns now shut down cleanly. (#10519) | bug-fixes |
| review-mode の承認イベント配線を改善。`requestApproval` ID を対応するコマンド実行アイテムと整合 (#10416) | Fixed review-mode approval event wiring so `requestApproval` IDs align with the corresponding command execution items. (#10416) | bug-fixes |
| 401 エラー診断を改善。サーバーメッセージ/ボディ詳細に加え、`cf-ray` と `requestId` を含めるよう変更 (#10508) | Improved 401 error diagnostics by including server message/body details plus `cf-ray` and `requestId`. (#10508) | bug-fixes |
| TUI チャットコンポーザーのドキュメントを拡充。plan/review フローにおけるスラッシュコマンド引数と添付ファイル処理を説明 (#10269) | Expanded TUI chat composer docs to cover slash-command arguments and attachment handling in plan/review flows. (#10269) | documentation |
| issue テンプレートとラベラープロンプトを刷新。CLI/app のバグ報告と機能リクエストをより明確に分離 (#10411, #10453, #10548, #10552) | Refreshed issue templates and labeler prompts to better separate CLI/app bug reporting and feature requests. (#10411, #10453, #10548, #10552) | documentation |
| 非推奨の `mcp-types` クレートから `rmcp` ベースのプロトコル型/アダプターへの移行を完了し、レガシークレートを削除 (#10356, #10349, #10357) | Completed migration off the deprecated `mcp-types` crate to `rmcp`-based protocol types/adapters, then removed the legacy crate. (#10356, #10349, #10357) | chores |
| セキュリティアドバイザリに対応するため `bytes` 依存関係を更新し、解決済みアドバイザリ設定をクリーンアップ (#10525) | Updated the `bytes` dependency for a security advisory and cleaned up resolved advisory configuration. (#10525) | chores |

## 0.94.0

| 日本語 | English | Category |
|--------|---------|----------|
| プランモードがデフォルトで有効化され、プランプロンプトでのインタラクションガイダンスを更新 (#10313, #10308, #10329) | Plan mode is now enabled by default with updated interaction guidance in the plan prompt. (#10313, #10308, #10329) | new-features |
| パーソナリティ設定が安定版に：デフォルトは friendly、設定キーは `personality`、既存設定は自動移行 (#10305, #10314, #10310, #10307) | Personality configuration is now stable: default is friendly, the config key is `personality`, and existing settings migrate forward. (#10305, #10314, #10310, #10307) | new-features |
| スキルを `.agents/skills` から読み込み可能に、相対パス指示を明確化しネストフォルダマーカーに対応 (#10317, #10282, #10350) | Skills can be loaded from `.agents/skills`, with clearer relative-path instructions and nested-folder markers supported. (#10317, #10282, #10350) | new-features |
| コンソール出力にランタイムメトリクスを追加し診断を容易化 (#10278) | Console output now includes runtime metrics for easier diagnostics. (#10278) | new-features |
| スレッドのアーカイブ解除時にタイムスタンプを更新しサイドバーの並び順を反映 (#10280) | Unarchiving a thread updates its timestamp so sidebar ordering refreshes. (#10280) | bug-fixes |
| 会話ルール出力に上限を設定し、プレフィックスルールの重複を排除 (#10351, #10309) | Conversation rules output is capped and prefix rules are deduped to avoid repeated rules. (#10351, #10309) | bug-fixes |
| オーバーライドターンコンテキストで余分なアイテムが追加されなくなった (#10354) | Override turn context no longer appends extra items. (#10354) | bug-fixes |
| npm README 内の壊れた画像リンクを修正 (#10303) | Fixed a broken image link in the npm README. (#10303) | documentation |

## 0.93.0

| 日本語 | English | Category |
|--------|---------|----------|
| SOCKS5プロキシリスナーをポリシー制御と設定ゲーティング機能付きで追加 (#9803) | Added an optional SOCKS5 proxy listener with policy enforcement and config gating. (#9803) | new-features |
| プランモードで提案されたプランを専用TUIビューにストリーミング表示、クイックモード切替用の`/plan`ショートカットを機能ゲート追加 (#9786, #10103) | Plan mode now streams proposed plans into a dedicated TUI view, plus a feature-gated `/plan` shortcut for quick mode switching. (#9786, #10103) | new-features |
| TUIでコネクタを参照する`/apps`と、アプリプロンプト挿入用の`$`記法を追加 (#9728) | Added `/apps` to browse connectors in TUI and `$` insertion for app prompts. (#9728) | new-features |
| app-serverが外部認証モードで動作可能に、ホストアプリからChatGPT認証トークンを受け取り、必要時に更新を要求 (#10012) | App-server can now run in external auth mode, accepting ChatGPT auth tokens from a host app and requesting refreshes when needed. (#10012) | new-features |
| スマート承認をデフォルトで有効化、MCPツール呼び出し時に明示的な承認プロンプトを表示 (#10286, #10200) | Smart approvals are now enabled by default, with explicit approval prompts for MCP tool calls. (#10286, #10200) | new-features |
| SQLiteベースのログデータベースを導入、ログクライアント改善、thread-idフィルタリング、保持期間設定、ヒューリスティック着色に対応 (#10086, #10087, #10150, #10151, #10229, #10228) | Introduced a SQLite-backed log database with an improved logs client, thread-id filtering, retention, and heuristic coloring. (#10086, #10087, #10150, #10151, #10229, #10228) | new-features |
| MCPツールの画像出力が、画像ブロックが先頭でない場合や部分的に不正な形式でも確実にレンダリング (#9815) | MCP tool image outputs render reliably even when image blocks aren’t first or are partially malformed. (#9815) | bug-fixes |
| 入力履歴の呼び出し時にローカル画像添付とリッチテキスト要素を復元 (#9628) | Input history recall now restores local image attachments and rich text elements. (#9628) | bug-fixes |
| ファイル検索がセッションCWD変更を追跡、マルチルートトラバーサルとパフォーマンス向上に対応 (#9279, #9939, #10240) | File search now tracks session CWD changes and supports multi-root traversal with better performance. (#9279, #9939, #10240) | bug-fixes |
| スレッド再開時に最初のターンが実際に開始されるまで`updated_at`を更新しないよう変更 (#9950) | Resuming a thread no longer updates `updated_at` until the first turn actually starts. (#9950) | bug-fixes |
| シェルスナップショットがstdinを継承しないよう変更、起動スクリプトによるハングを回避 (#9735) | Shell snapshots no longer inherit stdin, avoiding hangs from startup scripts. (#9735) | bug-fixes |
| WebSocketプロキシ失敗時にHTTPにフォールバック (#10139) | Connections fall back to HTTP when WebSocket proxies fail. (#10139) | bug-fixes |
| app-serverのAuthMode使用方法と動作をドキュメント化 (#10191) | Documented app-server AuthMode usage and behavior. (#10191) | documentation |
| Rustツールチェーンをバージョン1.93にアップグレード (#10080) | Upgraded the Rust toolchain to 1.93. (#10080) | chores |
| リポジトリで使用するpnpmバージョンを更新 (#9992, #10161) | Updated pnpm versions used in the repo. (#9992, #10161) | chores |
| Bazelビルドとrunfilesハンドリングの改善、リモートキャッシュ圧縮を含む (#10079, #10098, #10102, #10104) | Bazel build and runfiles handling improvements, including remote cache compression. (#10079, #10098, #10102, #10104) | chores |

## 0.92.0

| 日本語 | English | Category |
|--------|---------|----------|
| API v2 スレッドが起動時に動的ツールを注入し、呼び出しと応答をサーバーとコアツールパイプライン経由でエンドツーエンドでルーティング可能に | API v2 threads can now inject dynamic tools at startup and route their calls/responses end-to-end through the server and core tool pipeline. (#9539) | new-features |
| アプリサーバーのスレッドリストにフィルタリングを追加し、大規模なスレッドセットの閲覧を容易化 | Added filtering on the thread list in the app server to make large thread sets easier to browse. (#9897) | new-features |
| アーカイブされたロールアウトをアクティブセッションに復元する `thread/unarchive` RPC を導入 | Introduced a `thread/unarchive` RPC to restore archived rollouts back into active sessions. (#9843) | new-features |
| MCP サーバーが `config.toml` で OAuth スコープを定義可能になり、ログイン時の `--scopes` 指定が不要に | MCP servers can now define OAuth scopes in `config.toml`, reducing the need to pass `--scopes` on each login. (#9647) | new-features |
| マルチエージェント連携を強化し、エクスプローラーロール、改善されたコラボレーションイベントマッピング、最大深度ガードレールを追加 | Multi-agent collaboration is more capable and safer, with an explorer role, better collab event mapping, and max-depth guardrails. (#9817, #9818, #9918, #9899) | new-features |
| キャッシュされた `web_search` をデフォルトのクライアント動作に設定 | Cached `web_search` is now the default client behavior. (#9974) | new-features |
| メイン Tokio スレッドでのブロッキング送信を回避し、高ストリーミングスループット下での TUI デッドロック/フリーズを修正 | Fixed a TUI deadlock/freeze under high streaming throughput by avoiding blocking sends on the main Tokio thread. (#9951) | bug-fixes |
| `web_search` ツールがすべてのアクションタイプを処理・表示し、スタック状態ではなく進行中のアクティビティを表示 | The `web_search` tool now handles and displays all action types, and shows in-progress activity instead of appearing stuck. (#9960) | bug-fixes |
| サブエージェントのビジーウェイト排除により、コラボレーションフローでの高 CPU 使用率を削減 | Reduced high CPU usage in collaboration flows by eliminating busy-waiting on subagents. (#9776) | bug-fixes |
| `codex resume --last --json` でプロンプトが引数の競合エラーなく正しくパースされるように修正 | Fixed `codex resume --last --json` so prompts parse correctly without conflicting argument errors. (#9475) | bug-fixes |
| Windows サンドボックスのログが UTF-8 を安全に処理し、マルチバイトコンテンツの切り捨て時の失敗を防止 | Windows sandbox logging now handles UTF-8 safely, preventing failures when truncating multibyte content. (#8647) | bug-fixes |
| `request_user_input` を Plan/Pair モード以外で拒否し、無効なツール呼び出しを防止 | `request_user_input` is now rejected outside Plan/Pair modes to prevent invalid tool calls. (#9955) | bug-fixes |
| コントリビューションガイドラインを更新し、オンボーディングとワークフローの期待値を明確化 | Updated the contribution guidelines for clearer onboarding and workflow expectations. (#9933) | documentation |
| プロトコル/MCP ドキュメントを更新し、`thread/unarchive` と更新された `request_user_input` の question 形状を反映 | Refreshed protocol/MCP docs to reflect `thread/unarchive` and the updated `request_user_input` question shape. (#9843, #9890) | documentation |
| Homebrew 経由のセルフアップデートで明示的な cask upgrade コマンドを使用し、警告と曖昧性を回避 | Self-update via Homebrew now uses an explicit cask upgrade command to avoid warnings and ambiguity. (#9823) | chores |
| リリースパッケージングでバンドル zip を一貫して `dist/` に書き込み | Release packaging now consistently writes the bundle zip to `dist/`. (#9934) | chores |
| Rust ワークスペースの主要な依存関係（`axum`、`tracing`、`globset`、`tokio-test` など）を更新 | Updated key dependencies in the Rust workspace (including `axum`, `tracing`, `globset`, and `tokio-test`). (#9880, #9882, #9883, #9884) | chores |
| 機能ステージの命名を公開成熟度ステージに統一し、開発中機能の警告を明確化 | Aligned feature stage naming with public maturity stages and added clearer warnings for underdevelopment features. (#9929, #9954) | chores |

## 0.91.0

| 日本語 | English | Category |
|--------|---------|----------|
| サブエージェントの最大許可数を6に削減し、エージェントのファンアウト動作におけるリソース使用量とガードレールを強化 | Reduced the maximum allowed number of sub-agents to 6 to tighten resource usage and guardrails in agent fan-out behavior (#9861) | chores |

## 0.90.0

| 日本語 | English | Category |
|--------|---------|----------|
| ネットワークサンドボックスプロキシにポリシー適用機能を追加し、外部ネットワークアクセスの制御を強化 (#8442) | Added a network sandbox proxy with policy enforcement to better control outbound network access. (#8442) | new-features |
| アプリサーバーとMCP統合を介したコネクタサポートの第一段階を導入、設定とドキュメントを更新 (#9667) | Introduced the first phase of connectors support via the app server and MCP integration, including new config/docs updates. (#9667) | new-features |
| TUIでコラボレーションモードをベータ版として提供、計画→実行の引き継ぎを明確化し、モード選択（コーディング vs プラン）を簡素化 (#9690, #9712, #9802, #9834) | Shipped collaboration mode as beta in the TUI, with a clearer plan → execute handoff and simplified mode selection (Coding vs Plan). (#9690, #9712, #9802, #9834) | new-features |
| エフェメラルスレッドを追加し、生成されたスレッドのコラボレーションツール来歴メタデータを改善 (#9765, #9769) | Added ephemeral threads and improved collaboration tool provenance metadata for spawned threads. (#9765, #9769) | new-features |
| WebSocket接続でプロキシ設定に対応 (#9719) | WebSocket connections now support proxy configuration. (#9719) | new-features |
| マルチエージェントの制限をより厳格化 | More strict limitation on multi-agents | new-features |
| 複数行の引用符付き引数に対する実行ポリシーの解析を修正 (#9565) | Fixed exec policy parsing for multiline quoted arguments. (#9565) | bug-fixes |
| `--yolo` がリポジトリ外で失敗する代わりに git リポジトリチェックをスキップするよう変更 (#9590) | `--yolo` now skips the git repository check instead of failing outside a repo. (#9590) | bug-fixes |
| 順序が前後するイベントの処理とワーキングディレクトリが異なる場合のプロンプト表示により、再開の信頼性を向上 (#9512, #9731) | Improved resume reliability by handling out-of-order events and prompting for the working directory when it differs. (#9512, #9731) | bug-fixes |
| カーソルが要素の左端にある場合、バックスペースでテキスト要素が削除されないよう修正 (#9630) | Backspace no longer deletes a text element when the cursor is at the element’s left edge. (#9630) | bug-fixes |
| 設定読み込みエラーをより明確で実用的な内容に改善 (#9746) | Config loading errors are clearer and more actionable across surfaces. (#9746) | bug-fixes |
| デフォルトモデル選択でフィルタされたプリセットを考慮し、無効なデフォルトを回避 (#9782) | Default model selection now respects filtered presets to avoid invalid defaults. (#9782) | bug-fixes |
| 実験的コラボレーションプロンプトテンプレートのタイポを修正 (#9716) | Corrected a typo in the experimental collaboration prompt template. (#9716) | documentation |
| 新しいコネクタ設定画面のドキュメントを追加 (#9667) | Added documentation for the new connectors configuration surface. (#9667) | documentation |
| バンドルされているモデルカタログとプリセットを更新 (#9726) | Refreshed the bundled model catalog/presets. (#9726) | chores |
| Node 24互換性のためGitHub Actionsを更新 (#9722) | Updated GitHub Actions for Node 24 compatibility. (#9722) | chores |

## 0.89.0

| 日本語 | English | Category |
|--------|---------|----------|
| 互換性のため `/approvals` を残しつつ、より短い承認セットを持つ `/permissions` コマンドを追加 (#9561) | Added a `/permissions` command with a shorter approval set while keeping `/approvals` for compatibility. (#9561) | new-features |
| 個別スキルの有効化・無効化を可能にする `/skill` UI を追加 (#9627) | Added a `/skill` UI to enable or disable individual skills. (#9627) | new-features |
| スラッシュコマンド選択を改善し、あいまい一致よりも完全一致と前方一致を優先 (#9629) | Improved slash-command selection by prioritizing exact and prefix matches over fuzzy matches. (#9629) | new-features |
| アプリサーバーが `thread/read` に対応し、`thread/list` でアーカイブされたスレッドをフィルタリング可能に (#9569, #9571) | App server now supports `thread/read` and can filter archived threads in `thread/list`. (#9569, #9571) | new-features |
| アプリサーバークライアントが階層的な `config.toml` 解決に対応し、`config/read` が指定された cwd から有効な設定を計算可能に (#9510) | App server clients now support layered `config.toml` resolution and `config/read` can compute effective config from a given cwd. (#9510) | new-features |
| リリース成果物に公開された設定スキーマの安定した URL を追加 (#9572) | Release artifacts now include a stable URL for the published config schema. (#9572) | new-features |
| `~//...` のようなパス上で HOME からチルダ展開がエスケープされるのを防止 (#9621) | Prevented tilde expansion from escaping HOME on paths like `~//...`. (#9621) | bug-fixes |
| TUI のターン計測をアシスタントメッセージ間でリセットし、経過時間が最新の応答を反映するように改善 (#9599) | TUI turn timing now resets between assistant messages so elapsed time reflects the latest response. (#9599) | bug-fixes |
| MCP サブコマンドのドキュメントを現在の CLI 動作に合わせて更新 (#9622) | Updated MCP subcommand docs to match current CLI behavior. (#9622) | documentation |
| `skills/list` プロトコルの README サンプルを最新のレスポンス形式に更新 (#9623) | Refreshed the `skills/list` protocol README example to match the latest response shape. (#9623) | documentation |
| TUI2 実験とその関連設定・ドキュメントを削除し、Codex をターミナルネイティブ UI に維持 (#9640) | Removed the TUI2 experiment and its related config/docs, keeping Codex on the terminal-native UI. (#9640) | chores |

## 0.88.0

| 日本語 | English | Category |
|--------|---------|----------|
| ヘッドレス環境でデバイスコード認証をスタンドアロンフォールバックとして追加 (#9333) | Added device-code auth as a standalone fallback in headless environments. (#9333) | new-features |
| 信頼されたフォルダからのみ設定を読み込み、シンボリックリンクされた `config.toml` の解決を修正 (#9533, #9445) | Load configs from trusted folders only and fix symlinked `config.toml` resolution. (#9533, #9445) | bug-fixes |
| Azure エンドポイントの無効な入力エラーを修正 (#9387) | Fixed Azure endpoint invalid input errors. (#9387) | bug-fixes |
| コアランタイムのメモリリークを解決 (#9543) | Resolved a memory leak in core runtime. (#9543) | bug-fixes |
| 中断されたターンの繰り返しを防止 (#9043) | Prevented interrupted turns from repeating. (#9043) | bug-fixes |
| WSL TUI の画像ペースト機能の不具合を修正 (#9473) | Fixed WSL TUI image paste regression. (#9473) | bug-fixes |
| MCP ドキュメントリンクを最新の宛先に更新 (#9490) | Updated MCP documentation link to the current destination. (#9490) | documentation |
| ドキュメント内の "Multi-agents" の命名誤りを修正 (#9542) | Corrected a “Multi-agents” naming typo in docs. (#9542) | documentation |
| コラボレーションモードの開発者向け手順を追加 (#9424) | Added developer instructions for collaboration modes. (#9424) | documentation |
| Rust 1.92 にアップグレードし、コア Rust 依存関係を更新 (#8860, #9465, #9466, #9467, #9468, #9469) | Upgraded to Rust 1.92 and refreshed core Rust dependencies. (#8860, #9465, #9466, #9467, #9468, #9469) | chores |

## 0.87.0

| 日本語 | English | Category |
|--------|---------|----------|
| ユーザーメッセージのメタデータ（テキスト要素とバイト範囲）がプロトコル/アプリサーバー/コアを通じてラウンドトリップするようになり、UI アノテーションが履歴の再構築後も保持されるように改善 (#9331) | User message metadata (text elements and byte ranges) now round-trips through protocol/app-server/core so UI annotations can survive history rebuilds. (#9331) | new-features |
| コラボレーション待機呼び出しが1つのリクエストで複数の ID をブロックできるようになり、マルチスレッド調整が簡素化 (#9294) | Collaboration wait calls can block on multiple IDs in one request, simplifying multi-thread coordination. (#9294) | new-features |
| ユーザーシェルコマンドがユーザースナップショット下で実行されるようになり、エイリアスとシェル設定が尊重されるように改善 (#9357) | User shell commands now run under the user snapshot so aliases and shell config are honored. (#9357) | new-features |
| TUI がスポーン/未購読スレッドからの承認リクエストを表示するように改善 (#9232) | The TUI now surfaces approval requests from spawned/unsubscribed threads. (#9232) | new-features |
| 圧縮時のトークン推定が正確になり、長時間セッション中の予算管理が改善 (#9337) | Token estimation during compaction is now accurate, improving budgeting during long sessions. (#9337) | bug-fixes |
| MCP CallToolResult が `content` と `structuredContent` の両方に `threadId` を含むようになり、互換性のために定義済み出力スキーマを返すように改善 (#9338) | MCP CallToolResult now includes `threadId` in both `content` and `structuredContent`, and returns a defined output schema for compatibility. (#9338) | bug-fixes |
| TUI の「Worked for」セパレーターが実際の作業が発生した後にのみ表示されるように改善 (#8958) | The TUI “Worked for” separator only appears after actual work has occurred. (#8958) | bug-fixes |
| パイプされた非 PTY コマンドが標準入力待ちでハングしなくなるよう修正 (#9369) | Piped non-PTY commands no longer hang waiting on stdin. (#9369) | bug-fixes |
| MCP インターフェースドキュメントが構造化出力スキーマと `threadId` の動作を反映するよう更新 (#9338) | MCP interface docs updated to reflect structured output schema and `threadId` behavior. (#9338) | documentation |
| Windows ビルドがデフォルトで PowerShell UTF-8 機能を有効化 (#9195) | Windows builds enable the PowerShell UTF-8 feature by default. (#9195) | chores |

## 0.86.0

| 日本語 | English | Category |
|--------|---------|----------|
| スキルのメタデータ（名前、説明、アイコン、ブランドカラー、デフォルトプロンプト）を `SKILL.toml` で定義可能にし、アプリサーバーとTUIで表示できるよう対応（#9125） | Skill metadata can now be defined in `SKILL.toml` (names, descriptions, icons, brand color, default prompt) and surfaced in the app server and TUI (#9125) | new-features |
| クライアントがウェブ検索を明示的に無効化し、ヘッダー経由で適格性を通知してサーバー側のロールアウト制御と連携可能に（#9249） | Clients can explicitly disable web search and signal eligibility via a header to align with server-side rollout controls (#9249) | new-features |
| MCPエリシテーションの受け入れ時に、コンテンツを期待するサーバーのためnullではなく空のJSONペイロードを送信するよう変更（#9196） | Accepting an MCP elicitation now sends an empty JSON payload instead of null to satisfy servers expecting content (#9196) | bug-fixes |
| 入力プロンプトのプレースホルダースタイルを非イタリックに戻し、ターミナルレンダリング問題を回避（#9307） | Input prompt placeholder styling is back to non-italic to avoid terminal rendering issues (#9307) | bug-fixes |
| 空のペーストイベントでクリップボード画像読み取りがトリガーされないよう修正（#9318） | Empty paste events no longer trigger clipboard image reads (#9318) | bug-fixes |
| 統合execがバックグラウンドプロセスをクリーンアップし、リスナー停止後の遅延Endイベントを防止（#9304） | Unified exec cleans up background processes to prevent late End events after listeners stop (#9304) | bug-fixes |
| オーケストレータープロンプトをリフレッシュし、内部ルーティング動作を改善（#9301） | Refresh the orchestrator prompt to improve internal routing behavior (#9301) | chores |
| `needs_follow_up` の冗長なエラーログ出力を削減（#9272） | Reduce noisy `needs_follow_up` error logging (#9272) | chores |

## 0.85.0

| 日本語 | English | Category |
|--------|---------|----------|
| App-server v2 がコラボレーションツールの呼び出しをターンストリーム内のアイテムイベントとして出力するようになり、クライアントでエージェント連携をリアルタイムでレンダリング可能に (#9213) | App-server v2 now emits collaboration tool calls as item events in the turn stream, so clients can render agent coordination in real time. (#9213) | new-features |
| コラボレーションツールのエージェント制御を強化: `spawn_agent` がエージェントロールプリセットを受け付け、`send_input` が実行中のエージェントを中断してからメッセージを配信可能に (#9275, #9276) | Collaboration tools gained richer agent control: `spawn_agent` accepts an agent role preset, and `send_input` can optionally interrupt a running agent before delivering the message. (#9275, #9276) | new-features |
| `/models` メタデータにアップグレード移行用のマークダウンを追加し、クライアントがモデルアップグレード提案時により詳細なガイダンスを表示可能に (#9219) | `/models` metadata now includes upgrade migration markdown so clients can display richer guidance when suggesting model upgrades. (#9219) | new-features |
| [revert] Linux サンドボックスが、ユーザー名前空間が利用できない場合に Landlock のみの制限にフォールバックし、サンドボックスルール適用前に `no_new_privs` を設定するように変更 (#9250) | [revert] Linux sandboxing now falls back to Landlock-only restrictions when user namespaces are unavailable, and sets `no_new_privs` before applying sandbox rules. (#9250) | bug-fixes |
| `codex resume --last` が現在の作業ディレクトリを尊重し、`--all` で明示的に上書き可能に (#9245) | `codex resume --last` now respects the current working directory, with `--all` as an explicit override. (#9245) | bug-fixes |
| 標準入力プロンプトのデコードが BOM/UTF-16 に対応し、無効なエンコーディングに対してより明確なエラーを提供 (#9151) | Stdin prompt decoding now handles BOMs/UTF-16 and provides clearer errors for invalid encodings. (#9151) | bug-fixes |

## 0.84.0

| 日本語 | English | Category |
|--------|---------|----------|
| テキスト要素に追加のメタデータを含めるよう Rust プロトコル/型を拡張し、より豊富なクライアントレンダリングとスキーマの進化を可能にする (#9235) | Extend the Rust protocol/types to include additional metadata on text elements, enabling richer client rendering and schema evolution (#9235) | new-features |
| リリースビルドジョブのタイムアウトを延長することで、Rust リリースパイプライン（特に Windows）の不安定性を軽減 (#9242) | Reduce flaky Rust release pipelines (notably on Windows) by increasing the release build job timeout (#9242) | chores |

## 0.81.0

| 日本語 | English | Category |
|--------|---------|----------|
| デフォルト API モデルを gpt-5.2-codex に変更 (#9188) | Default API model moved to gpt-5.2-codex. (#9188) | new-features |
| `codex mcp-server` の `codex` ツールがレスポンスに `threadId` を含むよう変更し、`codex-reply` ツールで使用可能に。#3712 を修正。ドキュメントを https://developers.openai.com/codex/guides/agents-sdk/ で更新 (#9192) | The `codex` tool in `codex mcp-server` now includes the `threadId` in the response so it can be used with the `codex-reply` tool, fixing #3712. The documentation has been updated at https://developers.openai.com/codex/guides/agents-sdk/. (#9192) | new-features |
| ヘッドレス実行時にデバイスコードログインへ自動切り替えし、ブラウザなしでのサインインに対応 (#8756) | Headless runs now switch to device-code login automatically so sign-in works without a browser. (#8756) | new-features |
| Linux サンドボックスでパスを読み取り専用でマウント可能にし、ファイルの書き込みからより保護 (#9112) | Linux sandbox can mount paths read-only to better protect files from writes. (#9112) | new-features |
| `tui` で部分的なツール呼び出しのレンダリングをサポート | Support partial tool calls rendering in `tui` | new-features |
| 代替スクリーン処理を改善し、Zellij のスクロールバックが壊れないよう修正。設定/フラグで制御可能に (#8555) | Alternate-screen handling now avoids breaking Zellij scrollback and adds a config/flag to control it. (#8555) | bug-fixes |
| Windows で読み取り専用サンドボックスポリシー実行時に、危険なコマンドの前に正しくプロンプト表示 (#9117) | Windows correctly prompts before unsafe commands when running with a read-only sandbox policy. (#9117) | bug-fixes |
| Config.toml とルールのパースエラーを、サイレント失敗ではなく app-server クライアント/TUI に報告 (#9182, #9011) | Config.toml and rules parsing errors are reported to app-server clients/TUI instead of failing silently. (#9182, #9011) | bug-fixes |
| macOS のシステム設定でプロキシ検出時のクラッシュを回避 (#8954) | Worked around a macOS system-configuration crash in proxy discovery. (#8954) | bug-fixes |
| 無効なユーザー画像アップロード時に、サイレント置換ではなくエラーを表示 (#9146) | Invalid user image uploads now surface an error instead of being silently replaced. (#9146) | bug-fixes |
| `config.toml` の検証用 JSON Schema を生成し `docs/` で公開 (#8956) | Published a generated JSON Schema for `config.toml` in `docs/` to validate configs. (#8956) | documentation |
| ブラケット付きペーストが信頼できない端末向けの TUI ペーストバースト状態マシンをドキュメント化 (#9020) | Documented the TUI paste-burst state machine for terminals without reliable bracketed paste. (#9020) | documentation |
| Bazel ビルドサポートを追加。コントリビューター向けに `just bazel-codex` ヘルパーも追加 (#8875, #9177) | Added Bazel build support plus a `just bazel-codex` helper for contributors. (#8875, #9177) | chores |

## 0.80.0

| 日本語 | English | Category |
|--------|---------|----------|
| プロトコルとアプリサーバーに会話/スレッドフォークエンドポイントを追加し、クライアントがセッションを新しいスレッドに分岐可能に (#8866) | Add conversation/thread fork endpoints in the protocol and app server so clients can branch a session into a new thread. (#8866) | new-features |
| `requirement/list` 経由で requirements を公開し、クライアントが `requirements.toml` を読み取ってエージェントモード UX を調整可能に (#8800) | Expose requirements via `requirement/list` so clients can read `requirements.toml` and adjust agent-mode UX. (#8800) | new-features |
| 可観測性のための追加カウンターを含むメトリクス機能を導入 (#8318, #8910) | Introduce metrics capabilities with additional counters for observability. (#8318, #8910) | new-features |
| アップグレード/縮退モード用のプロンプトと `/elevate-sandbox` コマンドを含む昇格サンドボックスのオンボーディングを追加 (#8789) | Add elevated sandbox onboarding with prompts for upgrade/degraded mode plus the `/elevate-sandbox` command. (#8789) | new-features |
| v2 API ユーザー入力を通じた明示的なスキル呼び出しに対応 (#8864) | Allow explicit skill invocations through v2 API user input. (#8864) | new-features |
| Codex CLI サブプロセスが再び `LD_LIBRARY_PATH`/`DYLD_LIBRARY_PATH` などの環境変数を継承し、ランタイム問題を回避。#8945 で説明されているように、これらの環境変数をサブプロセス(特に GPU 関連)に渡さないと 10 倍以上のパフォーマンス低下が発生していた。詳細な調査とレポートを提供した @johnzfitch に感謝 (#8951) | Codex CLI subprocesses again inherit env vars like `LD_LIBRARY_PATH`/`DYLD_LIBRARY_PATH` to avoid runtime issues. As explained in #8945, failure to pass along these environment variables to subprocesses that expect them (notably GPU-related ones), was causing 10x+ performance regressions! Special thanks to @johnzfitch for the detailed investigation and write-up in #8945. (#8951) | bug-fixes |
| TUI/TUI2 の `/review <instructions>` がプレーンテキスト送信ではなくレビューフローを起動するように変更 (#8823) | `/review <instructions>` in TUI/TUI2 now launches the review flow instead of sending plain text. (#8823) | bug-fixes |
| パッチ承認の「このセッションで許可」が以前承認されたファイルに対して保持されるように修正 (#8451) | Patch approval “allow this session” now sticks for previously approved files. (#8451) | bug-fixes |
| 現在のモデルがピッカーから非表示の場合でもモデルアップグレードプロンプトを表示 (#8802) | Model upgrade prompt now appears even if the current model is hidden from the picker. (#8802) | bug-fixes |
| Windows の貼り付け処理が非 ASCII マルチライン入力を確実にサポート。#8021 でこの修正の基礎を築いた @occurrent に感謝 (#8774) | Windows paste handling now supports non-ASCII multiline input reliably. Special thanks to @occurrent laying the groundwork for this fix in #8021! (#8774) | bug-fixes |
| Git apply のパス解析がクォート/エスケープされたパスと `/dev/null` を正しく処理し、変更の誤分類を回避 (#8824) | Git apply path parsing now handles quoted/escaped paths and `/dev/null` correctly to avoid misclassified changes. (#8824) | bug-fixes |
| アプリサーバーの README にスキルサポートと使用方法を文書化 (#8853) | App-server README now documents skills support and usage. (#8853) | documentation |
| スキル作成ドキュメントで YAML フロントマターのフォーマットとクォート規則を明確化 (#8610) | Skill-creator docs clarify YAML frontmatter formatting and quoting rules. (#8610) | documentation |

## 0.79.0

| 日本語 | English | Category |
|--------|---------|----------|
| マルチ会話「エージェント制御」を追加し、セッションがプログラム的に他の会話を生成またはメッセージ送信可能に (#8783, #8788) | Add multi-conversation “agent control” so a session can spawn or message other conversations programmatically (#8783, #8788) | new-features |
| app-server に `thread/rollback` を追加し、IDE クライアントが履歴を書き換えずに最後の N ターンを取り消し可能に (#8454) | Add app-server `thread/rollback` so IDE clients can undo the last N turns without rewriting history (#8454) | new-features |
| `web_search_cached` を追加し、ライブリクエストの代替としてキャッシュのみの Web 検索結果を有効化 (#8795) | Add `web_search_cached` to enable cached-only Web Search results as a safer alternative to live requests (#8795) | new-features |
| グローバル実行フラグ（model/json/sandbox トグル等）を `codex exec resume` の後に渡すことが可能に (#8440) | Allow global exec flags (model/json/sandbox toggles, etc.) to be passed after `codex exec resume` (#8440) | new-features |
| TUI にリポジトリの TOML ファイルで制御される時間/バージョン対象のアナウンスティップを表示 (#8752) | Show time/version-targeted announcement tips in the TUI, driven by a TOML file in the repo (#8752) | new-features |
| アナリティクス動作を制御する `[analytics] enabled=...` 設定セクションを追加 (#8350) | Add an `[analytics] enabled=...` config section to control analytics behavior (#8350) | new-features |
| TUI2 トランスクリプトを修正し、ストリーミングされたマークダウンがリサイズ時に再フローし、コピー/ペーストがソフトラップを保持するように改善 (#8761) | Fix TUI2 transcripts so streamed markdown reflows on resize and copy/paste preserves soft wraps (#8761) | bug-fixes |
| `apply_patch` のパースを空白でパディングされた `*** Begin Patch` / `*** End Patch` マーカーに対して寛容に (#8746) | Make `apply_patch` parsing tolerant of whitespace-padded `*** Begin Patch` / `*** End Patch` markers (#8746) | bug-fixes |
| git ルートをチェックする前に現在の作業ディレクトリからの相対パスをレンダリングし、非 git ワークスペースでの出力を改善 (#8771) | Render paths relative to the current working directory before checking git roots, improving output in non-git workspaces (#8771) | bug-fixes |
| `CODEX_MANAGED_CONFIG_PATH` が本番環境で管理設定を上書きしないようにし、ポリシーバイパスを解消 (#8762) | Prevent `CODEX_MANAGED_CONFIG_PATH` from overriding managed config in production, closing a policy bypass (#8762) | bug-fixes |
| app-server の会話がクライアントから渡された設定を尊重することを保証 (#8765) | Ensure app-server conversations respect the config passed in by the client (#8765) | bug-fixes |
| TUI UX の不具合を軽減: 入力履歴の閲覧時にポップアップを抑制、コピー「ピル」のレンダリングを修正、中断時にバックグラウンドターミナルをクリア (#8772, #8777, #8786) | Reduce TUI UX glitches: suppress popups when browsing input history, fix copy “pill” rendering, and clear background terminals on interrupt (#8772, #8777, #8786) | bug-fixes |
| ヘッドレス/リモートセットアップのオンボーディング/ログインガイダンスを明確化し、ユーザーを `codex login --device-auth` に誘導 (#8753) | Clarify onboarding/login guidance for headless/remote setups by steering users to `codex login --device-auth` (#8753) | documentation |
| ツール/設定で使用されるモデル例を現在の `gpt-5.2` ネーミングに更新 (#8566) | Update model examples used in tooling/config to current `gpt-5.2` naming (#8566) | documentation |
| スキル検出を設定レイヤースタックを使用するようにリファクタリングし、すべての設定済みスキルフォルダを考慮 (#8497) | Refactor skills discovery to use the config layer stack so all configured skill folders are considered (#8497) | chores |
| リリース作成時に GitHub リリースノートを自動生成 (#8799) | Auto-populate GitHub release notes at release creation time (#8799) | chores |
| `apply_patch` のテストシナリオを追加してカバレッジを強化 (#8230) | Add more `apply_patch` test scenarios to harden coverage (#8230) | chores |
| 統合された exec イベント発行を調整し、PTY が存在する場合のみ「begin」を送信 (#8780) | Tweak unified exec event emission to only send “begin” when a PTY is present (#8780) | chores |

## 0.78.0

| 日本語 | English | Category |
|--------|---------|----------|
| `Ctrl+G` で現在のプロンプトを設定済みの外部エディタ（`$VISUAL`/`$EDITOR`）で開き、編集内容をTUIに同期する機能を追加 (#7606) | Add `Ctrl+G` to open the current prompt in your configured external editor (`$VISUAL`/`$EDITOR`) and sync edits back into the TUI. (#7606) | new-features |
| プロジェクト対応の設定レイヤーをサポート: リポジトリローカルの `.codex/config.toml` を読み込み、設定可能な `project_root_markers` を尊重し、`/etc/codex/config.toml` などのシステム設定とマージ (#8354, #8359, #8461) | Support project-aware config layering: load repo-local `.codex/config.toml`, honor configurable `project_root_markers`, and merge that with system config like `/etc/codex/config.toml`. (#8354, #8359, #8461) | new-features |
| macOS で MDM 提供の TOML ペイロードによるエンタープライズ管理設定要件をサポート (#8743) | Support enterprise-managed configuration requirements on macOS via an MDM-provided TOML payload. (#8743) | new-features |
| `tui2` のトランスクリプトナビゲーションを改善: マルチクリック選択、コピーショートカット/アフォーダンス、ドラッグ可能な自動非表示スクロールバーを追加 (#8462, #8471, #8728) | Improve `tui2` transcript navigation with multi-click selection, a copy shortcut/affordance, and a draggable auto-hiding scrollbar. (#8462, #8471, #8728) | new-features |
| Windows PowerShell セッションを UTF-8 モードで開始し、エンコーディング関連のプロンプト/出力問題を軽減 (#7902) | Start Windows PowerShell sessions in UTF-8 mode to reduce encoding-related prompt/output issues. (#7902) | new-features |
| 実行ポリシールールに人間が読める形式の正当化理由を含めることが可能になり、ポリシー読み込みは統一された設定レイヤースタックに従うよう変更 (#8349, #8453, #8751) | Exec policy rules can now include human-readable justifications, and policy loading follows the unified config-layer stack. (#8349, #8453, #8751) | new-features |
| モデルが1ターンで複数のツール呼び出しを返す場合の失敗を修正: Chat Completions API が期待する形式でツール呼び出しを出力 (#8556) | Fix failures when the model returns multiple tool calls in a single turn by emitting tool calls in the format the Chat Completions API expects. (#8556) | bug-fixes |
| `/review` がセッションの作業ディレクトリから差分を計算するよう修正し、ランタイムcwdオーバーライド使用時もベースブランチ検出が正しく動作するよう改善 (#8738) | Make `/review` compute diffs from the session’s working directory so base-branch detection works correctly with runtime cwd overrides. (#8738) | bug-fixes |
| レガシーの Chat Completions ストリーミング終端文字を適切に処理し、不正な SSE パースエラーを回避 (#8708) | Handle the legacy Chat Completions streaming terminator cleanly to avoid spurious SSE parse errors. (#8708) | bug-fixes |
| `tui2` のレンダリング/入力エッジケースを修正（画面破損、スクロールの粘着性、選択/コピーの正確性） (#8463, #8695, #8449) | Fix a set of `tui2` rendering/input edge cases (screen corruption, scroll stickiness, and selection/copy correctness). (#8463, #8695, #8449) | bug-fixes |
| CLI パッケージング時の `ripgrep` ダウンロード失敗時の診断を改善し、失敗のデバッグを容易化 (#8486) | Improve diagnostics when `ripgrep` download fails during CLI packaging so failures are easier to debug. (#8486) | bug-fixes |
| alpha/stable バージョン文字列のパース時のパニックを回避 (#8406) | Avoid a panic when parsing alpha/stable version strings. (#8406) | bug-fixes |
| ユーザードキュメントを開発者ドキュメントサイトへのリンクに置き換え・重複排除（スキルドキュメントを含む） (#8662, #8407) | Replace and de-duplicate user docs with links to the developer documentation site (including skills docs). (#8662, #8407) | documentation |
| 設定ドキュメントを明確化（`developer_instructions` オプションを含む） (#8376, #8701) | Clarify configuration documentation, including the `developer_instructions` option. (#8376, #8701) | documentation |
| README の壊れたリンクを修正 (#8682) | Fix broken README links. (#8682) | documentation |
| TUI のパフォーマンスチューニング: 再描画スケジューリングの上限設定とストリーミング中の不要な再レンダリングを削減し、CPU 使用率を低減 (#8499, #8681, #8693) | Performance tuning for TUIs: cap redraw scheduling and reduce unnecessary rerenders during streaming to lower CPU usage. (#8499, #8681, #8693) | chores |
| `codex-rs` 全体の Rust 依存関係を更新 (#8414, #8596, #8597) | Update Rust dependencies across `codex-rs`. (#8414, #8596, #8597) | chores |

