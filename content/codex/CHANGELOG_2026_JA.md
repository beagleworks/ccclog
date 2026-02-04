# OpenAI Codex 変更履歴 (2026年)

このファイルは OpenAI Codex の2026年リリース分の変更履歴を日本語で記載しています。

---

## 0.95.0

| 日本語 | English | Category |
|--------|---------|----------|
| macOS に `codex app <path>` を追加。CLI から Codex Desktop を起動可能になり、不足している場合は DMG を自動ダウンロードします。(#10418) | Added `codex app <path>` on macOS to launch Codex Desktop from the CLI, with automatic DMG download if it is missing. (#10418) | new-features |
| `~/.agents/skills` からの個人スキル読み込みを追加（`~/.codex/skills` との互換性あり）、さらにアプリサーバー API/イベントでパブリックリモートスキルの一覧表示とダウンロードが可能になりました。(#10437, #10448) | Added personal skill loading from `~/.agents/skills` (with `~/.codex/skills` compatibility), plus app-server APIs/events to list and download public remote skills. (#10437, #10448) | new-features |
| `/plan` がインライン引数と画像の貼り付けに対応し、TUI でのスラッシュコマンド編集/ハイライトがより洗練されました。(#10269) | `/plan` now accepts inline prompt arguments and pasted images, and slash-command editing/highlighting in the TUI is more polished. (#10269) | new-features |
| シェル関連ツールが並列実行可能になり、複数コマンド実行のスループットが向上しました。(#10505) | Shell-related tools can now run in parallel, improving multi-command execution throughput. (#10505) | new-features |
| シェル実行時に `CODEX_THREAD_ID` を受け取るようになり、スクリプトやスキルがアクティブなスレッド/セッションを検出できるようになりました。(#10096) | Shell executions now receive `CODEX_THREAD_ID`, so scripts and skills can detect the active thread/session. (#10096) | new-features |
| Linux サンドボックスに組み込み Bubblewrap と FFI 配線を追加し、今後のランタイム統合の基盤を整備しました。(#10413) | Added vendored Bubblewrap + FFI wiring in the Linux sandbox as groundwork for upcoming runtime integration. (#10413) | new-features |
| Git コマンドの安全性を強化し、破壊的または書き込み可能な実行が承認チェックをバイパスしないようにしました。(#10258) | Hardened Git command safety so destructive or write-capable invocations no longer bypass approval checks. (#10258) | bug-fixes |
| 保存されたスレッド名を正しく表示し、スレッド一覧の動作を修正することで、再開/スレッド閲覧の信頼性を向上させました。(#10340, #10383) | Improved resume/thread browsing reliability by correctly showing saved thread names and fixing thread listing behavior. (#10340, #10383) | bug-fixes |
| 初回実行時の信頼モード処理を修正し、サンドボックスモードが一貫して報告されるようにし、`$PWD/.agents` を `$PWD/.codex` と同様に読み取り専用にしました。(#10415, #10524) | Fixed first-run trust-mode handling so sandbox mode is reported consistently, and made `$PWD/.agents` read-only like `$PWD/.codex`. (#10415, #10524) | bug-fixes |
| WebSocket/ストリーミングフローでの中断後に `codex exec` がハングする問題を修正。中断されたターンがクリーンにシャットダウンされるようになりました。(#10519) | Fixed `codex exec` hanging after interrupt in websocket/streaming flows; interrupted turns now shut down cleanly. (#10519) | bug-fixes |
| レビューモードの承認イベント配線を改善し、`requestApproval` ID が対応するコマンド実行アイテムと整合するようにしました。(#10416) | Fixed review-mode approval event wiring so `requestApproval` IDs align with the corresponding command execution items. (#10416) | bug-fixes |
| 401 エラー診断を改善し、サーバーメッセージ/ボディの詳細に加えて `cf-ray` と `requestId` を含めるようにしました。(#10508) | Improved 401 error diagnostics by including server message/body details plus `cf-ray` and `requestId`. (#10508) | bug-fixes |
| TUI チャットコンポーザーのドキュメントを拡充し、plan/review フローでのスラッシュコマンド引数と添付ファイル処理をカバーしました。(#10269) | Expanded TUI chat composer docs to cover slash-command arguments and attachment handling in plan/review flows. (#10269) | documentation |
| Issue テンプレートとラベラープロンプトを更新し、CLI/アプリのバグ報告と機能リクエストをより明確に分離しました。(#10411, #10453, #10548, #10552) | Refreshed issue templates and labeler prompts to better separate CLI/app bug reporting and feature requests. (#10411, #10453, #10548, #10552) | documentation |
| 非推奨の `mcp-types` crate から `rmcp` ベースのプロトコル型/アダプターへの移行を完了し、レガシー crate を削除しました。(#10356, #10349, #10357) | Completed migration off the deprecated `mcp-types` crate to `rmcp`-based protocol types/adapters, then removed the legacy crate. (#10356, #10349, #10357) | chores |
| セキュリティ勧告に対応して `bytes` 依存関係を更新し、解決済み勧告の設定をクリーンアップしました。(#10525) | Updated the `bytes` dependency for a security advisory and cleaned up resolved advisory configuration. (#10525) | chores |

## 0.94.0

| 日本語 | English | Category |
|--------|---------|----------|
| プランモードがデフォルトで有効化され、プランプロンプトでの対話ガイダンスが更新されました。(#10313, #10308, #10329) | Plan mode is now enabled by default with updated interaction guidance in the plan prompt. (#10313, #10308, #10329) | new-features |
| パーソナリティ設定が安定版になりました：デフォルトは friendly、設定キーは `personality`、既存の設定は自動的に移行されます。(#10305, #10314, #10310, #10307) | Personality configuration is now stable: default is friendly, the config key is `personality`, and existing settings migrate forward. (#10305, #10314, #10310, #10307) | new-features |
| スキルを `.agents/skills` から読み込めるようになり、相対パス指定が明確化され、ネストフォルダーのマーカーがサポートされました。(#10317, #10282, #10350) | Skills can be loaded from `.agents/skills`, with clearer relative-path instructions and nested-folder markers supported. (#10317, #10282, #10350) | new-features |
| コンソール出力に診断を容易にするランタイムメトリクスが含まれるようになりました。(#10278) | Console output now includes runtime metrics for easier diagnostics. (#10278) | new-features |
| スレッドのアーカイブ解除時にタイムスタンプが更新され、サイドバーの並び順が更新されるようになりました。(#10280) | Unarchiving a thread updates its timestamp so sidebar ordering refreshes. (#10280) | bug-fixes |
| 会話ルール出力に上限が設けられ、プレフィックスルールが重複排除されるようになり、ルールの繰り返しが回避されます。(#10351, #10309) | Conversation rules output is capped and prefix rules are deduped to avoid repeated rules. (#10351, #10309) | bug-fixes |
| オーバーライドターンコンテキストが余分な項目を追加しなくなりました。(#10354) | Override turn context no longer appends extra items. (#10354) | bug-fixes |
| npm README の壊れた画像リンクを修正しました。(#10303) | Fixed a broken image link in the npm README. (#10303) | documentation |

## 0.93.0

| 日本語 | English | Category |
|--------|---------|----------|
| SOCKS5 プロキシリスナーをポリシー適用と設定ゲーティングのオプション付きで追加 (#9803) | Added an optional SOCKS5 proxy listener with policy enforcement and config gating. (#9803) | new-features |
| プランモードで提案されたプランを専用 TUI ビューにストリーミング表示、モード切り替え用の `/plan` ショートカットを機能ゲート付きで追加 (#9786, #10103) | Plan mode now streams proposed plans into a dedicated TUI view, plus a feature-gated `/plan` shortcut for quick mode switching. (#9786, #10103) | new-features |
| TUI でコネクタを閲覧する `/apps` コマンドと、アプリプロンプト挿入用の `$` 記号を追加 (#9728) | Added `/apps` to browse connectors in TUI and `$` insertion for app prompts. (#9728) | new-features |
| アプリサーバーが外部認証モードで実行可能に、ホストアプリからの ChatGPT 認証トークンを受け入れ、必要に応じて更新を要求 (#10012) | App-server can now run in external auth mode, accepting ChatGPT auth tokens from a host app and requesting refreshes when needed. (#10012) | new-features |
| スマート承認をデフォルトで有効化、MCP ツール呼び出しに明示的な承認プロンプトを追加 (#10286, #10200) | Smart approvals are now enabled by default, with explicit approval prompts for MCP tool calls. (#10286, #10200) | new-features |
| SQLite ベースのログデータベースを導入、ログクライアントの改善、スレッド ID フィルタリング、保持期間、ヒューリスティックな色付けを実装 (#10086, #10087, #10150, #10151, #10229, #10228) | Introduced a SQLite-backed log database with an improved logs client, thread-id filtering, retention, and heuristic coloring. (#10086, #10087, #10150, #10151, #10229, #10228) | new-features |
| MCP ツールの画像出力が、画像ブロックが最初でない場合や部分的に不正な場合でも確実にレンダリングされるよう改善 (#9815) | MCP tool image outputs render reliably even when image blocks aren’t first or are partially malformed. (#9815) | bug-fixes |
| 入力履歴の復元時にローカル画像添付とリッチテキスト要素を復元 (#9628) | Input history recall now restores local image attachments and rich text elements. (#9628) | bug-fixes |
| ファイル検索でセッション CWD 変更を追跡、マルチルート探索のサポートとパフォーマンス向上 (#9279, #9939, #10240) | File search now tracks session CWD changes and supports multi-root traversal with better performance. (#9279, #9939, #10240) | bug-fixes |
| スレッド再開時、最初のターンが実際に開始されるまで `updated_at` を更新しないよう変更 (#9950) | Resuming a thread no longer updates `updated_at` until the first turn actually starts. (#9950) | bug-fixes |
| シェルスナップショットが stdin を継承しないよう変更、スタートアップスクリプトによるハングを回避 (#9735) | Shell snapshots no longer inherit stdin, avoiding hangs from startup scripts. (#9735) | bug-fixes |
| WebSocket プロキシ失敗時に HTTP へのフォールバックを実装 (#10139) | Connections fall back to HTTP when WebSocket proxies fail. (#10139) | bug-fixes |
| アプリサーバーの AuthMode 使用方法と動作をドキュメント化 (#10191) | Documented app-server AuthMode usage and behavior. (#10191) | documentation |
| Rust ツールチェーンを 1.93 にアップグレード (#10080) | Upgraded the Rust toolchain to 1.93. (#10080) | chores |
| リポジトリで使用する pnpm バージョンを更新 (#9992, #10161) | Updated pnpm versions used in the repo. (#9992, #10161) | chores |
| Bazel ビルドと runfiles ハンドリングの改善、リモートキャッシュ圧縮を含む (#10079, #10098, #10102, #10104) | Bazel build and runfiles handling improvements, including remote cache compression. (#10079, #10098, #10102, #10104) | chores |

## 0.92.0

| 日本語 | English | Category |
|--------|---------|----------|
| API v2 スレッドが起動時に動的ツールを注入し、サーバーとコアツールパイプラインを通じて呼び出しと応答をエンドツーエンドでルーティングできるようになりました。(#9539) | API v2 threads can now inject dynamic tools at startup and route their calls/responses end-to-end through the server and core tool pipeline. (#9539) | new-features |
| アプリサーバーのスレッドリストにフィルタリングを追加し、大規模なスレッドセットの閲覧を容易にしました。(#9897) | Added filtering on the thread list in the app server to make large thread sets easier to browse. (#9897) | new-features |
| アーカイブされたロールアウトをアクティブセッションに復元する `thread/unarchive` RPC を導入しました。(#9843) | Introduced a `thread/unarchive` RPC to restore archived rollouts back into active sessions. (#9843) | new-features |
| MCP サーバーが `config.toml` で OAuth スコープを定義できるようになり、ログインごとに `--scopes` を渡す必要性が軽減されました。(#9647) | MCP servers can now define OAuth scopes in `config.toml`, reducing the need to pass `--scopes` on each login. (#9647) | new-features |
| マルチエージェントコラボレーションがより高機能かつ安全になり、エクスプローラーロール、改善されたコラボイベントマッピング、最大深度ガードレールが追加されました。(#9817, #9818, #9918, #9899) | Multi-agent collaboration is more capable and safer, with an explorer role, better collab event mapping, and max-depth guardrails. (#9817, #9818, #9918, #9899) | new-features |
| キャッシュされた `web_search` がデフォルトのクライアント動作になりました。(#9974) | Cached `web_search` is now the default client behavior. (#9974) | new-features |
| メインの Tokio スレッドでのブロッキング送信を回避することで、高ストリーミングスループット下での TUI デッドロック/フリーズを修正しました。(#9951) | Fixed a TUI deadlock/freeze under high streaming throughput by avoiding blocking sends on the main Tokio thread. (#9951) | bug-fixes |
| `web_search` ツールがすべてのアクションタイプを処理して表示するようになり、スタックしているように見える代わりに進行中のアクティビティを表示するようになりました。(#9960) | The `web_search` tool now handles and displays all action types, and shows in-progress activity instead of appearing stuck. (#9960) | bug-fixes |
| サブエージェントでのビジーウェイトを排除することで、コラボレーションフローにおける高い CPU 使用率を削減しました。(#9776) | Reduced high CPU usage in collaboration flows by eliminating busy-waiting on subagents. (#9776) | bug-fixes |
| `codex resume --last --json` を修正し、引数の競合エラーなしでプロンプトが正しく解析されるようにしました。(#9475) | Fixed `codex resume --last --json` so prompts parse correctly without conflicting argument errors. (#9475) | bug-fixes |
| Windows サンドボックスログが UTF-8 を安全に処理するようになり、マルチバイトコンテンツを切り詰める際の失敗を防止しました。(#8647) | Windows sandbox logging now handles UTF-8 safely, preventing failures when truncating multibyte content. (#8647) | bug-fixes |
| 無効なツール呼び出しを防ぐため、Plan/Pair モード外では `request_user_input` が拒否されるようになりました。(#9955) | `request_user_input` is now rejected outside Plan/Pair modes to prevent invalid tool calls. (#9955) | bug-fixes |
| より明確なオンボーディングとワークフロー期待のために、コントリビューションガイドラインを更新しました。(#9933) | Updated the contribution guidelines for clearer onboarding and workflow expectations. (#9933) | documentation |
| `thread/unarchive` と更新された `request_user_input` の質問形式を反映するため、プロトコル/MCP ドキュメントを更新しました。(#9843, #9890) | Refreshed protocol/MCP docs to reflect `thread/unarchive` and the updated `request_user_input` question shape. (#9843, #9890) | documentation |
| Homebrew 経由の自動更新が、警告と曖昧さを回避するために明示的な cask アップグレードコマンドを使用するようになりました。(#9823) | Self-update via Homebrew now uses an explicit cask upgrade command to avoid warnings and ambiguity. (#9823) | chores |
| リリースパッケージングが一貫して `dist/` にバンドル zip を書き込むようになりました。(#9934) | Release packaging now consistently writes the bundle zip to `dist/`. (#9934) | chores |
| Rust ワークスペースの主要な依存関係（`axum`、`tracing`、`globset`、`tokio-test` を含む）を更新しました。(#9880, #9882, #9883, #9884) | Updated key dependencies in the Rust workspace (including `axum`, `tracing`, `globset`, and `tokio-test`). (#9880, #9882, #9883, #9884) | chores |
| フィーチャーステージの命名を公開成熟度ステージに合わせ、開発中フィーチャーに対するより明確な警告を追加しました。(#9929, #9954) | Aligned feature stage naming with public maturity stages and added clearer warnings for underdevelopment features. (#9929, #9954) | chores |

## 0.91.0

| 日本語 | English | Category |
|--------|---------|----------|
| サブエージェントの最大許可数を 6 に削減し、エージェントの拡散動作におけるリソース使用とガードレールを強化 (#9861) | Reduced the maximum allowed number of sub-agents to 6 to tighten resource usage and guardrails in agent fan-out behavior (#9861) | chores |

## 0.90.0

| 日本語 | English | Category |
|--------|---------|----------|
| ネットワークサンドボックスプロキシにポリシー適用機能を追加し、外部ネットワークアクセスの制御を強化。(#8442) | Added a network sandbox proxy with policy enforcement to better control outbound network access. (#8442) | new-features |
| アプリサーバーとMCP連携による connectors サポートの第1フェーズを導入(新しい設定/ドキュメント更新を含む)。(#9667) | Introduced the first phase of connectors support via the app server and MCP integration, including new config/docs updates. (#9667) | new-features |
| TUIでコラボレーションモードをベータ版として提供開始。計画→実行のハンドオフを明確化し、モード選択(Coding vs Plan)を簡素化。(#9690, #9712, #9802, #9834) | Shipped collaboration mode as beta in the TUI, with a clearer plan → execute handoff and simplified mode selection (Coding vs Plan). (#9690, #9712, #9802, #9834) | new-features |
| エフェメラルスレッドを追加し、生成されたスレッドのコラボレーションツールプロビナンスメタデータを改善。(#9765, #9769) | Added ephemeral threads and improved collaboration tool provenance metadata for spawned threads. (#9765, #9769) | new-features |
| WebSocket接続でプロキシ設定をサポート。(#9719) | WebSocket connections now support proxy configuration. (#9719) | new-features |
| マルチエージェントの制限を強化 | More strict limitation on multi-agents | new-features |
| 複数行のクォート引数に対する実行ポリシーのパースを修正。(#9565) | Fixed exec policy parsing for multiline quoted arguments. (#9565) | bug-fixes |
| `--yolo` オプションでリポジトリ外でも失敗せず、git リポジトリチェックをスキップするように変更。(#9590) | `--yolo` now skips the git repository check instead of failing outside a repo. (#9590) | bug-fixes |
| 順序不同のイベント処理と、作業ディレクトリが異なる場合のプロンプト表示により、再開の信頼性を向上。(#9512, #9731) | Improved resume reliability by handling out-of-order events and prompting for the working directory when it differs. (#9512, #9731) | bug-fixes |
| カーソルが要素の左端にある場合、Backspaceでテキスト要素が削除されないように修正。(#9630) | Backspace no longer deletes a text element when the cursor is at the element’s left edge. (#9630) | bug-fixes |
| 設定ロードエラーを各画面でより明確かつ対処しやすく改善。(#9746) | Config loading errors are clearer and more actionable across surfaces. (#9746) | bug-fixes |
| デフォルトモデルの選択で、無効なデフォルト値を避けるためにフィルター済みプリセットを尊重するように変更。(#9782) | Default model selection now respects filtered presets to avoid invalid defaults. (#9782) | bug-fixes |
| 実験的なコラボレーションプロンプトテンプレートのタイポを修正。(#9716) | Corrected a typo in the experimental collaboration prompt template. (#9716) | documentation |
| 新しい connectors 設定画面のドキュメントを追加。(#9667) | Added documentation for the new connectors configuration surface. (#9667) | documentation |
| バンドルされたモデルカタログ/プリセットを更新。(#9726) | Refreshed the bundled model catalog/presets. (#9726) | chores |
| Node 24対応のため GitHub Actions を更新。(#9722) | Updated GitHub Actions for Node 24 compatibility. (#9722) | chores |

## 0.89.0

| 日本語 | English | Category |
|--------|---------|----------|
| 互換性のため `/approvals` を維持しつつ、より短い承認セットを持つ `/permissions` コマンドを追加。(#9561) | Added a `/permissions` command with a shorter approval set while keeping `/approvals` for compatibility. (#9561) | new-features |
| 個別のスキルを有効化・無効化できる `/skill` UI を追加。(#9627) | Added a `/skill` UI to enable or disable individual skills. (#9627) | new-features |
| ファジーマッチよりも完全一致と前方一致を優先することで、スラッシュコマンドの選択を改善。(#9629) | Improved slash-command selection by prioritizing exact and prefix matches over fuzzy matches. (#9629) | new-features |
| App サーバーが `thread/read` をサポートし、`thread/list` でアーカイブされたスレッドをフィルタリング可能に。(#9569, #9571) | App server now supports `thread/read` and can filter archived threads in `thread/list`. (#9569, #9571) | new-features |
| App サーバークライアントが階層的な `config.toml` 解決をサポートし、`config/read` が指定された cwd から有効な設定を計算可能に。(#9510) | App server clients now support layered `config.toml` resolution and `config/read` can compute effective config from a given cwd. (#9510) | new-features |
| リリース成果物に公開された設定スキーマの安定した URL を含めるように変更。(#9572) | Release artifacts now include a stable URL for the published config schema. (#9572) | new-features |
| `~//...` のようなパスで HOME をエスケープするチルダ展開を防止。(#9621) | Prevented tilde expansion from escaping HOME on paths like `~//...`. (#9621) | bug-fixes |
| TUI のターン計測をアシスタントメッセージ間でリセットし、経過時間が最新の応答を反映するように変更。(#9599) | TUI turn timing now resets between assistant messages so elapsed time reflects the latest response. (#9599) | bug-fixes |
| MCP サブコマンドのドキュメントを現在の CLI 動作に合わせて更新。(#9622) | Updated MCP subcommand docs to match current CLI behavior. (#9622) | documentation |
| `skills/list` プロトコルの README サンプルを最新のレスポンス形式に合わせて更新。(#9623) | Refreshed the `skills/list` protocol README example to match the latest response shape. (#9623) | documentation |
| TUI2 実験とその関連設定・ドキュメントを削除し、Codex をターミナルネイティブ UI に維持。(#9640) | Removed the TUI2 experiment and its related config/docs, keeping Codex on the terminal-native UI. (#9640) | chores |

## 0.88.0

| 日本語 | English | Category |
|--------|---------|----------|
| ヘッドレス環境でデバイスコード認証をスタンドアロンフォールバックとして追加。(#9333) | Added device-code auth as a standalone fallback in headless environments. (#9333) | new-features |
| 信頼されたフォルダからのみ設定を読み込み、シンボリックリンクされた `config.toml` の解決を修正。(#9533, #9445) | Load configs from trusted folders only and fix symlinked `config.toml` resolution. (#9533, #9445) | bug-fixes |
| Azure エンドポイントの無効な入力エラーを修正。(#9387) | Fixed Azure endpoint invalid input errors. (#9387) | bug-fixes |
| コアランタイムのメモリリークを解決。(#9543) | Resolved a memory leak in core runtime. (#9543) | bug-fixes |
| 中断されたターンの繰り返しを防止。(#9043) | Prevented interrupted turns from repeating. (#9043) | bug-fixes |
| WSL TUI での画像ペースト機能の退行を修正。(#9473) | Fixed WSL TUI image paste regression. (#9473) | bug-fixes |
| MCP ドキュメントのリンクを現在の宛先に更新。(#9490) | Updated MCP documentation link to the current destination. (#9490) | documentation |
| ドキュメント内の「Multi-agents」の命名誤字を修正。(#9542) | Corrected a “Multi-agents” naming typo in docs. (#9542) | documentation |
| コラボレーションモードの開発者向け手順を追加。(#9424) | Added developer instructions for collaboration modes. (#9424) | documentation |
| Rust 1.92 へアップグレードし、コア Rust 依存関係を更新。(#8860, #9465, #9466, #9467, #9468, #9469) | Upgraded to Rust 1.92 and refreshed core Rust dependencies. (#8860, #9465, #9466, #9467, #9468, #9469) | chores |

## 0.87.0

| 日本語 | English | Category |
|--------|---------|----------|
| ユーザーメッセージのメタデータ(テキスト要素とバイト範囲)がprotocol/app-server/coreを経由して往復するようになり、履歴の再構築時にUIアノテーションが保持されるようになりました。(#9331) | User message metadata (text elements and byte ranges) now round-trips through protocol/app-server/core so UI annotations can survive history rebuilds. (#9331) | new-features |
| コラボレーション待機呼び出しが1リクエストで複数のIDをブロックできるようになり、マルチスレッド調整が簡素化されました。(#9294) | Collaboration wait calls can block on multiple IDs in one request, simplifying multi-thread coordination. (#9294) | new-features |
| ユーザーシェルコマンドがユーザースナップショット下で実行されるようになり、エイリアスとシェル設定が適用されるようになりました。(#9357) | User shell commands now run under the user snapshot so aliases and shell config are honored. (#9357) | new-features |
| TUIが生成/未購読スレッドからの承認リクエストを表示するようになりました。(#9232) | The TUI now surfaces approval requests from spawned/unsubscribed threads. (#9232) | new-features |
| 圧縮時のトークン推定が正確になり、長時間セッション中の予算管理が改善されました。(#9337) | Token estimation during compaction is now accurate, improving budgeting during long sessions. (#9337) | bug-fixes |
| MCP CallToolResultが`content`と`structuredContent`の両方に`threadId`を含むようになり、互換性のために定義された出力スキーマを返すようになりました。(#9338) | MCP CallToolResult now includes `threadId` in both `content` and `structuredContent`, and returns a defined output schema for compatibility. (#9338) | bug-fixes |
| TUIの「作業時間」セパレーターが実際の作業後にのみ表示されるようになりました。(#8958) | The TUI “Worked for” separator only appears after actual work has occurred. (#8958) | bug-fixes |
| パイプされた非PTYコマンドがstdinの待機でハングしなくなりました。(#9369) | Piped non-PTY commands no longer hang waiting on stdin. (#9369) | bug-fixes |
| MCPインターフェースのドキュメントが構造化出力スキーマと`threadId`の動作を反映するように更新されました。(#9338) | MCP interface docs updated to reflect structured output schema and `threadId` behavior. (#9338) | documentation |
| Windowsビルドでデフォルトで PowerShell UTF-8機能が有効になりました。(#9195) | Windows builds enable the PowerShell UTF-8 feature by default. (#9195) | chores |

## 0.86.0

| 日本語 | English | Category |
|--------|---------|----------|
| スキルメタデータを `SKILL.toml` で定義可能に（名前、説明、アイコン、ブランドカラー、デフォルトプロンプト）、アプリサーバーと TUI で表示 (#9125) | Skill metadata can now be defined in `SKILL.toml` (names, descriptions, icons, brand color, default prompt) and surfaced in the app server and TUI (#9125) | new-features |
| クライアントがウェブ検索を明示的に無効化し、ヘッダー経由で利用可否をサーバー側ロールアウト制御に合わせて通知可能に (#9249) | Clients can explicitly disable web search and signal eligibility via a header to align with server-side rollout controls (#9249) | new-features |
| MCP elicitation の承認時、コンテンツを期待するサーバーに対応するため null ではなく空の JSON ペイロードを送信 (#9196) | Accepting an MCP elicitation now sends an empty JSON payload instead of null to satisfy servers expecting content (#9196) | bug-fixes |
| 入力プロンプトのプレースホルダースタイルを非イタリックに戻し、ターミナルレンダリング問題を回避 (#9307) | Input prompt placeholder styling is back to non-italic to avoid terminal rendering issues (#9307) | bug-fixes |
| 空のペーストイベントでクリップボード画像の読み込みがトリガーされなくなった (#9318) | Empty paste events no longer trigger clipboard image reads (#9318) | bug-fixes |
| 統合 exec がバックグラウンドプロセスをクリーンアップし、リスナー停止後の遅延 End イベントを防止 (#9304) | Unified exec cleans up background processes to prevent late End events after listeners stop (#9304) | bug-fixes |
| オーケストレーターのプロンプトを更新し、内部ルーティング動作を改善 (#9301) | Refresh the orchestrator prompt to improve internal routing behavior (#9301) | chores |
| `needs_follow_up` エラーログの冗長性を削減 (#9272) | Reduce noisy `needs_follow_up` error logging (#9272) | chores |

## 0.85.0

| 日本語 | English | Category |
|--------|---------|----------|
| App-server v2 がコラボレーションツール呼び出しをターンストリームのアイテムイベントとして発行するようになり、クライアントがエージェント調整をリアルタイムでレンダリングできるようになりました。(#9213) | App-server v2 now emits collaboration tool calls as item events in the turn stream, so clients can render agent coordination in real time. (#9213) | new-features |
| コラボレーションツールでエージェント制御が強化され、`spawn_agent` がエージェントロールプリセットを受け入れ、`send_input` がメッセージ配信前に実行中のエージェントをオプションで中断できるようになりました。(#9275, #9276) | Collaboration tools gained richer agent control: `spawn_agent` accepts an agent role preset, and `send_input` can optionally interrupt a running agent before delivering the message. (#9275, #9276) | new-features |
| `/models` メタデータにアップグレード移行マークダウンが含まれるようになり、クライアントがモデルアップグレードを提案する際により詳細なガイダンスを表示できるようになりました。(#9219) | `/models` metadata now includes upgrade migration markdown so clients can display richer guidance when suggesting model upgrades. (#9219) | new-features |
| [revert] Linux サンドボックスが、ユーザー名前空間が利用できない場合に Landlock のみの制限にフォールバックし、サンドボックスルール適用前に `no_new_privs` を設定するようになりました。(#9250) | [revert] Linux sandboxing now falls back to Landlock-only restrictions when user namespaces are unavailable, and sets `no_new_privs` before applying sandbox rules. (#9250) | bug-fixes |
| `codex resume --last` が現在の作業ディレクトリを尊重するようになり、`--all` が明示的なオーバーライドとして機能するようになりました。(#9245) | `codex resume --last` now respects the current working directory, with `--all` as an explicit override. (#9245) | bug-fixes |
| 標準入力プロンプトのデコードが BOM/UTF-16 を処理し、無効なエンコーディングに対してより明確なエラーを提供するようになりました。(#9151) | Stdin prompt decoding now handles BOMs/UTF-16 and provides clearer errors for invalid encodings. (#9151) | bug-fixes |

## 0.84.0

| 日本語 | English | Category |
|--------|---------|----------|
| リッチなクライアントレンダリングとスキーマ進化を可能にするため、テキスト要素に追加メタデータを含むよう Rust プロトコル/型を拡張 (#9235) | Extend the Rust protocol/types to include additional metadata on text elements, enabling richer client rendering and schema evolution (#9235) | new-features |
| リリースビルドジョブのタイムアウトを延長することで、不安定な Rust リリースパイプライン（特に Windows）を削減 (#9242) | Reduce flaky Rust release pipelines (notably on Windows) by increasing the release build job timeout (#9242) | chores |

## 0.81.0

| 日本語 | English | Category |
|--------|---------|----------|
| デフォルトのAPIモデルが gpt-5.2-codex に移行しました。(#9188) | Default API model moved to gpt-5.2-codex. (#9188) | new-features |
| `codex mcp-server` の `codex` ツールがレスポンスに `threadId` を含むようになり、`codex-reply` ツールで使用できるようになりました。#3712 を修正。ドキュメントは https://developers.openai.com/codex/guides/agents-sdk/ で更新されています。(#9192) | The `codex` tool in `codex mcp-server` now includes the `threadId` in the response so it can be used with the `codex-reply` tool, fixing #3712. The documentation has been updated at https://developers.openai.com/codex/guides/agents-sdk/. (#9192) | new-features |
| ヘッドレス実行時にデバイスコードログインへ自動的に切り替わり、ブラウザなしでサインインが機能するようになりました。(#8756) | Headless runs now switch to device-code login automatically so sign-in works without a browser. (#8756) | new-features |
| Linuxサンドボックスがパスを読み取り専用でマウントできるようになり、ファイルの書き込みをより適切に保護します。(#9112) | Linux sandbox can mount paths read-only to better protect files from writes. (#9112) | new-features |
| `tui` での部分的なツール呼び出しのレンダリングをサポート | Support partial tool calls rendering in `tui` | new-features |
| 代替スクリーン処理が Zellij のスクロールバックを壊さないように改善され、制御用の設定/フラグが追加されました。(#8555) | Alternate-screen handling now avoids breaking Zellij scrollback and adds a config/flag to control it. (#8555) | bug-fixes |
| Windows で読み取り専用サンドボックスポリシーで実行時、危険なコマンドの前に正しくプロンプトが表示されるようになりました。(#9117) | Windows correctly prompts before unsafe commands when running with a read-only sandbox policy. (#9117) | bug-fixes |
| Config.toml とルールの解析エラーがサイレントに失敗せず、app-server クライアント/TUI に報告されるようになりました。(#9182, #9011) | Config.toml and rules parsing errors are reported to app-server clients/TUI instead of failing silently. (#9182, #9011) | bug-fixes |
| macOS のプロキシ検出における system-configuration クラッシュの回避策を実装しました。(#8954) | Worked around a macOS system-configuration crash in proxy discovery. (#8954) | bug-fixes |
| 無効なユーザー画像アップロードが、サイレントに置き換えられずにエラーとして表示されるようになりました。(#9146) | Invalid user image uploads now surface an error instead of being silently replaced. (#9146) | bug-fixes |
| `config.toml` の生成された JSON スキーマを `docs/` に公開し、設定の検証が可能になりました。(#8956) | Published a generated JSON Schema for `config.toml` in `docs/` to validate configs. (#8956) | documentation |
| ブラケットペーストが信頼できない端末向けの TUI ペーストバーストステートマシンをドキュメント化しました。(#9020) | Documented the TUI paste-burst state machine for terminals without reliable bracketed paste. (#9020) | documentation |
| Bazel ビルドサポートを追加し、コントリビューター向けに `just bazel-codex` ヘルパーを追加しました。(#8875, #9177) | Added Bazel build support plus a `just bazel-codex` helper for contributors. (#8875, #9177) | chores |

## 0.80.0

| 日本語 | English | Category |
|--------|---------|----------|
| プロトコルとアプリサーバーに会話/スレッドフォークエンドポイントを追加し、クライアントがセッションを新しいスレッドに分岐できるようにしました。(#8866) | Add conversation/thread fork endpoints in the protocol and app server so clients can branch a session into a new thread. (#8866) | new-features |
| `requirement/list` を通じて要件を公開し、クライアントが `requirements.toml` を読み取ってエージェントモード UX を調整できるようにしました。(#8800) | Expose requirements via `requirement/list` so clients can read `requirements.toml` and adjust agent-mode UX. (#8800) | new-features |
| 可観測性のための追加カウンターを含むメトリクス機能を導入しました。(#8318, #8910) | Introduce metrics capabilities with additional counters for observability. (#8318, #8910) | new-features |
| 昇格サンドボックスのオンボーディングを追加し、アップグレード/縮退モードのプロンプトと `/elevate-sandbox` コマンドを実装しました。(#8789) | Add elevated sandbox onboarding with prompts for upgrade/degraded mode plus the `/elevate-sandbox` command. (#8789) | new-features |
| v2 API ユーザー入力を通じて明示的なスキル呼び出しを可能にしました。(#8864) | Allow explicit skill invocations through v2 API user input. (#8864) | new-features |
| Codex CLI のサブプロセスが `LD_LIBRARY_PATH`/`DYLD_LIBRARY_PATH` などの環境変数を再び継承し、ランタイムの問題を回避できるようになりました。#8945 で説明されているように、これらの環境変数をサブプロセス(特に GPU 関連)に渡さないと、10 倍以上のパフォーマンス低下が発生していました!詳細な調査と報告をしてくれた @johnzfitch に感謝します。(#8951) | Codex CLI subprocesses again inherit env vars like `LD_LIBRARY_PATH`/`DYLD_LIBRARY_PATH` to avoid runtime issues. As explained in #8945, failure to pass along these environment variables to subprocesses that expect them (notably GPU-related ones), was causing 10x+ performance regressions! Special thanks to @johnzfitch for the detailed investigation and write-up in #8945. (#8951) | bug-fixes |
| TUI/TUI2 の `/review <instructions>` がプレーンテキストを送信する代わりにレビューフローを起動するようになりました。(#8823) | `/review <instructions>` in TUI/TUI2 now launches the review flow instead of sending plain text. (#8823) | bug-fixes |
| パッチ承認の「このセッションで許可」が、以前承認されたファイルに対して保持されるようになりました。(#8451) | Patch approval “allow this session” now sticks for previously approved files. (#8451) | bug-fixes |
| 現在のモデルがピッカーから非表示になっている場合でも、モデルアップグレードプロンプトが表示されるようになりました。(#8802) | Model upgrade prompt now appears even if the current model is hidden from the picker. (#8802) | bug-fixes |
| Windows のペースト処理が非 ASCII マルチライン入力を確実にサポートするようになりました。#8021 でこの修正の基礎を築いてくれた @occurrent に感謝します!(#8774) | Windows paste handling now supports non-ASCII multiline input reliably. Special thanks to @occurrent laying the groundwork for this fix in #8021! (#8774) | bug-fixes |
| Git apply のパス解析が引用符/エスケープされたパスと `/dev/null` を正しく処理し、変更の誤分類を回避するようになりました。(#8824) | Git apply path parsing now handles quoted/escaped paths and `/dev/null` correctly to avoid misclassified changes. (#8824) | bug-fixes |
| アプリサーバーの README にスキルサポートと使用方法を文書化しました。(#8853) | App-server README now documents skills support and usage. (#8853) | documentation |
| スキル作成者ドキュメントで YAML フロントマターのフォーマットと引用符のルールを明確化しました。(#8610) | Skill-creator docs clarify YAML frontmatter formatting and quoting rules. (#8610) | documentation |

## 0.79.0

| 日本語 | English | Category |
|--------|---------|----------|
| セッションがプログラムで他の会話を生成またはメッセージングできるようマルチ会話「エージェント制御」を追加 (#8783, #8788) | Add multi-conversation “agent control” so a session can spawn or message other conversations programmatically (#8783, #8788) | new-features |
| IDE クライアントが履歴を書き換えずに最後の N ターンを元に戻せるよう app-server `thread/rollback` を追加 (#8454) | Add app-server `thread/rollback` so IDE clients can undo the last N turns without rewriting history (#8454) | new-features |
| ライブリクエストの安全な代替として、キャッシュのみの Web 検索結果を有効にする `web_search_cached` を追加 (#8795) | Add `web_search_cached` to enable cached-only Web Search results as a safer alternative to live requests (#8795) | new-features |
| `codex exec resume` の後にグローバル実行フラグ（model/json/sandbox トグルなど）を渡せるように変更 (#8440) | Allow global exec flags (model/json/sandbox toggles, etc.) to be passed after `codex exec resume` (#8440) | new-features |
| リポジトリ内の TOML ファイルで駆動される、時刻/バージョンターゲットのアナウンスティップを TUI に表示 (#8752) | Show time/version-targeted announcement tips in the TUI, driven by a TOML file in the repo (#8752) | new-features |
| アナリティクスの動作を制御する `[analytics] enabled=...` 設定セクションを追加 (#8350) | Add an `[analytics] enabled=...` config section to control analytics behavior (#8350) | new-features |
| ストリームされた Markdown がリサイズ時にリフローし、コピー/ペースト時にソフトラップが保持されるよう TUI2 トランスクリプトを修正 (#8761) | Fix TUI2 transcripts so streamed markdown reflows on resize and copy/paste preserves soft wraps (#8761) | bug-fixes |
| 空白でパディングされた `*** Begin Patch` / `*** End Patch` マーカーを許容するよう `apply_patch` のパースを改善 (#8746) | Make `apply_patch` parsing tolerant of whitespace-padded `*** Begin Patch` / `*** End Patch` markers (#8746) | bug-fixes |
| git ルートをチェックする前に現在の作業ディレクトリに対して相対パスをレンダリングし、非 git ワークスペースでの出力を改善 (#8771) | Render paths relative to the current working directory before checking git roots, improving output in non-git workspaces (#8771) | bug-fixes |
| `CODEX_MANAGED_CONFIG_PATH` が本番環境でマネージド設定をオーバーライドしないようにし、ポリシーバイパスを修正 (#8762) | Prevent `CODEX_MANAGED_CONFIG_PATH` from overriding managed config in production, closing a policy bypass (#8762) | bug-fixes |
| app-server の会話がクライアントから渡された設定を尊重するように修正 (#8765) | Ensure app-server conversations respect the config passed in by the client (#8765) | bug-fixes |
| TUI の UX 不具合を軽減：入力履歴閲覧時のポップアップ抑制、コピー「ピル」レンダリング修正、中断時のバックグラウンドターミナルクリア (#8772, #8777, #8786) | Reduce TUI UX glitches: suppress popups when browsing input history, fix copy “pill” rendering, and clear background terminals on interrupt (#8772, #8777, #8786) | bug-fixes |
| ヘッドレス/リモートセットアップのオンボーディング/ログインガイダンスを明確化し、ユーザーを `codex login --device-auth` に誘導 (#8753) | Clarify onboarding/login guidance for headless/remote setups by steering users to `codex login --device-auth` (#8753) | documentation |
| ツール/設定で使用されるモデル例を現在の `gpt-5.2` 命名規則に更新 (#8566) | Update model examples used in tooling/config to current `gpt-5.2` naming (#8566) | documentation |
| 設定されたすべてのスキルフォルダーが考慮されるよう、スキル検出を設定レイヤースタックを使用するようリファクタリング (#8497) | Refactor skills discovery to use the config layer stack so all configured skill folders are considered (#8497) | chores |
| リリース作成時に GitHub リリースノートを自動生成 (#8799) | Auto-populate GitHub release notes at release creation time (#8799) | chores |
| カバレッジを強化するため、`apply_patch` のテストシナリオを追加 (#8230) | Add more `apply_patch` test scenarios to harden coverage (#8230) | chores |
| PTY が存在する場合にのみ「begin」を送信するよう、統合 exec イベント発行を調整 (#8780) | Tweak unified exec event emission to only send “begin” when a PTY is present (#8780) | chores |

## 0.78.0

| 日本語 | English | Category |
|--------|---------|----------|
| 現在のプロンプトを設定された外部エディタ（`$VISUAL`/`$EDITOR`）で開き、編集内容をTUIに同期する `Ctrl+G` を追加 (#7606) | Add `Ctrl+G` to open the current prompt in your configured external editor (`$VISUAL`/`$EDITOR`) and sync edits back into the TUI. (#7606) | new-features |
| プロジェクト対応の設定レイヤリングをサポート: リポジトリローカルの `.codex/config.toml` を読み込み、設定可能な `project_root_markers` を尊重し、`/etc/codex/config.toml` などのシステム設定とマージ (#8354, #8359, #8461) | Support project-aware config layering: load repo-local `.codex/config.toml`, honor configurable `project_root_markers`, and merge that with system config like `/etc/codex/config.toml`. (#8354, #8359, #8461) | new-features |
| macOS で MDM 提供の TOML ペイロード経由でエンタープライズ管理された設定要件をサポート (#8743) | Support enterprise-managed configuration requirements on macOS via an MDM-provided TOML payload. (#8743) | new-features |
| `tui2` のトランスクリプトナビゲーションを改善: マルチクリック選択、コピーショートカット/操作性、ドラッグ可能な自動非表示スクロールバーを追加 (#8462, #8471, #8728) | Improve `tui2` transcript navigation with multi-click selection, a copy shortcut/affordance, and a draggable auto-hiding scrollbar. (#8462, #8471, #8728) | new-features |
| Windows PowerShell セッションを UTF-8 モードで開始し、エンコーディング関連のプロンプト/出力問題を軽減 (#7902) | Start Windows PowerShell sessions in UTF-8 mode to reduce encoding-related prompt/output issues. (#7902) | new-features |
| 実行ポリシールールに人間が読める正当化理由を含めることが可能になり、ポリシー読み込みは統一された設定レイヤースタックに従うように変更 (#8349, #8453, #8751) | Exec policy rules can now include human-readable justifications, and policy loading follows the unified config-layer stack. (#8349, #8453, #8751) | new-features |
| モデルが1ターンで複数のツール呼び出しを返した際の失敗を修正: Chat Completions API が期待する形式でツール呼び出しを出力 (#8556) | Fix failures when the model returns multiple tool calls in a single turn by emitting tool calls in the format the Chat Completions API expects. (#8556) | bug-fixes |
| `/review` がセッションの作業ディレクトリから差分を計算するように修正し、ランタイムの cwd オーバーライドでベースブランチ検出が正しく動作するように改善 (#8738) | Make `/review` compute diffs from the session’s working directory so base-branch detection works correctly with runtime cwd overrides. (#8738) | bug-fixes |
| レガシー Chat Completions ストリーミング終端記号をクリーンに処理し、誤った SSE パースエラーを回避 (#8708) | Handle the legacy Chat Completions streaming terminator cleanly to avoid spurious SSE parse errors. (#8708) | bug-fixes |
| `tui2` のレンダリング/入力のエッジケース（画面破損、スクロール固着、選択/コピーの正確性）を修正 (#8463, #8695, #8449) | Fix a set of `tui2` rendering/input edge cases (screen corruption, scroll stickiness, and selection/copy correctness). (#8463, #8695, #8449) | bug-fixes |
| CLI パッケージング中の `ripgrep` ダウンロード失敗時の診断を改善し、失敗のデバッグを容易化 (#8486) | Improve diagnostics when `ripgrep` download fails during CLI packaging so failures are easier to debug. (#8486) | bug-fixes |
| alpha/stable バージョン文字列のパース時のパニックを回避 (#8406) | Avoid a panic when parsing alpha/stable version strings. (#8406) | bug-fixes |
| ユーザードキュメントを開発者ドキュメントサイト（スキルドキュメントを含む）へのリンクに置き換え、重複を削除 (#8662, #8407) | Replace and de-duplicate user docs with links to the developer documentation site (including skills docs). (#8662, #8407) | documentation |
| `developer_instructions` オプションを含む設定ドキュメントを明確化 (#8376, #8701) | Clarify configuration documentation, including the `developer_instructions` option. (#8376, #8701) | documentation |
| README の壊れたリンクを修正 (#8682) | Fix broken README links. (#8682) | documentation |
| TUI のパフォーマンスチューニング: 再描画スケジューリングに上限を設定し、ストリーミング中の不要な再レンダリングを削減して CPU 使用率を低減 (#8499, #8681, #8693) | Performance tuning for TUIs: cap redraw scheduling and reduce unnecessary rerenders during streaming to lower CPU usage. (#8499, #8681, #8693) | chores |
| `codex-rs` 全体で Rust 依存関係を更新 (#8414, #8596, #8597) | Update Rust dependencies across `codex-rs`. (#8414, #8596, #8597) | chores |

