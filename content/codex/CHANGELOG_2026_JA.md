# OpenAI Codex 変更履歴 (2026年)

このファイルは OpenAI Codex の2026年リリース分の変更履歴を日本語で記載しています。

---

## 0.95.0

| 日本語 | English |
|--------|---------|
| macOSで`codex app <path>`コマンドを追加。CLIからCodex Desktopを起動でき、DMGが見つからない場合は自動ダウンロードします。(#10418) | Added `codex app <path>` on macOS to launch Codex Desktop from the CLI, with automatic DMG download if it is missing. (#10418) |
| `~/.agents/skills`からの個人スキル読み込みを追加(`~/.codex/skills`互換性あり)。公開リモートスキルの一覧表示とダウンロード用のapp-server API/イベントも追加。(#10437, #10448) | Added personal skill loading from `~/.agents/skills` (with `~/.codex/skills` compatibility), plus app-server APIs/events to list and download public remote skills. (#10437, #10448) |
| `/plan`がインライン引数と画像の貼り付けに対応。TUIでのスラッシュコマンド編集/ハイライトも改善。(#10269) | `/plan` now accepts inline prompt arguments and pasted images, and slash-command editing/highlighting in the TUI is more polished. (#10269) |
| シェル関連ツールが並列実行可能になり、複数コマンド実行のスループットが向上。(#10505) | Shell-related tools can now run in parallel, improving multi-command execution throughput. (#10505) |
| シェル実行時に`CODEX_THREAD_ID`を受け取るようになり、スクリプトやスキルがアクティブなスレッド/セッションを検出可能に。(#10096) | Shell executions now receive `CODEX_THREAD_ID`, so scripts and skills can detect the active thread/session. (#10096) |
| Linuxサンドボックスに同梱されたBubblewrap + FFI配線を追加。今後のランタイム統合の基盤。(#10413) | Added vendored Bubblewrap + FFI wiring in the Linux sandbox as groundwork for upcoming runtime integration. (#10413) |
| Gitコマンドの安全性を強化し、破壊的または書き込み可能な操作が承認チェックをバイパスしないように修正。(#10258) | Hardened Git command safety so destructive or write-capable invocations no longer bypass approval checks. (#10258) |
| 保存されたスレッド名の正確な表示とスレッド一覧の動作修正により、再開/スレッド閲覧の信頼性が向上。(#10340, #10383) | Improved resume/thread browsing reliability by correctly showing saved thread names and fixing thread listing behavior. (#10340, #10383) |
| 初回実行時のトラストモード処理を修正。サンドボックスモードを一貫して報告し、`$PWD/.codex`と同様に`$PWD/.agents`を読み取り専用化。(#10415, #10524) | Fixed first-run trust-mode handling so sandbox mode is reported consistently, and made `$PWD/.agents` read-only like `$PWD/.codex`. (#10415, #10524) |
| websocket/ストリーミングフローで中断後に`codex exec`がハングする問題を修正。中断されたターンは正常にシャットダウンされるように。(#10519) | Fixed `codex exec` hanging after interrupt in websocket/streaming flows; interrupted turns now shut down cleanly. (#10519) |
| レビューモード承認イベントの配線を改善。`requestApproval` IDが対応するコマンド実行アイテムと一致するように。(#10416) | Fixed review-mode approval event wiring so `requestApproval` IDs align with the corresponding command execution items. (#10416) |
| 401エラーの診断を改善。サーバーメッセージ/ボディの詳細に加え、`cf-ray`と`requestId`を含めるように。(#10508) | Improved 401 error diagnostics by including server message/body details plus `cf-ray` and `requestId`. (#10508) |
| TUIチャット作成画面のドキュメントを拡充。plan/reviewフローでのスラッシュコマンド引数と添付ファイル処理をカバー。(#10269) | Expanded TUI chat composer docs to cover slash-command arguments and attachment handling in plan/review flows. (#10269) |
| 課題テンプレートとラベル付けプロンプトを更新。CLI/アプリのバグ報告と機能リクエストをより明確に分離。(#10411, #10453, #10548, #10552) | Refreshed issue templates and labeler prompts to better separate CLI/app bug reporting and feature requests. (#10411, #10453, #10548, #10552) |
| 非推奨の`mcp-types`クレートから`rmcp`ベースのプロトコル型/アダプターへの移行を完了し、レガシークレートを削除。(#10356, #10349, #10357) | Completed migration off the deprecated `mcp-types` crate to `rmcp`-based protocol types/adapters, then removed the legacy crate. (#10356, #10349, #10357) |
| セキュリティ勧告のため`bytes`依存関係を更新し、解決済み勧告の設定をクリーンアップ。(#10525) | Updated the `bytes` dependency for a security advisory and cleaned up resolved advisory configuration. (#10525) |

## 0.94.0

| 日本語 | English |
|--------|---------|
| プランモードがデフォルトで有効化され、プランプロンプトの対話ガイダンスが更新されました。(#10313, #10308, #10329) | Plan mode is now enabled by default with updated interaction guidance in the plan prompt. (#10313, #10308, #10329) |
| パーソナリティ設定が安定版に:デフォルトはフレンドリー、設定キーは`personality`、既存設定は自動移行されます。(#10305, #10314, #10310, #10307) | Personality configuration is now stable: default is friendly, the config key is `personality`, and existing settings migrate forward. (#10305, #10314, #10310, #10307) |
| スキルを`.agents/skills`から読み込み可能になり、相対パス指定が明確化され、ネストされたフォルダマーカーがサポートされました。(#10317, #10282, #10350) | Skills can be loaded from `.agents/skills`, with clearer relative-path instructions and nested-folder markers supported. (#10317, #10282, #10350) |
| コンソール出力にランタイムメトリクスが含まれ、診断が容易になりました。(#10278) | Console output now includes runtime metrics for easier diagnostics. (#10278) |
| スレッドのアーカイブ解除時にタイムスタンプが更新され、サイドバーの並び順が更新されるようになりました。(#10280) | Unarchiving a thread updates its timestamp so sidebar ordering refreshes. (#10280) |
| 会話ルールの出力が制限され、プレフィックスルールの重複が削除され、ルールの繰り返しが回避されるようになりました。(#10351, #10309) | Conversation rules output is capped and prefix rules are deduped to avoid repeated rules. (#10351, #10309) |
| オーバーライドターンコンテキストが余分なアイテムを追加しなくなりました。(#10354) | Override turn context no longer appends extra items. (#10354) |
| npm READMEの壊れた画像リンクを修正しました。(#10303) | Fixed a broken image link in the npm README. (#10303) |

## 0.93.0

| 日本語 | English |
|--------|---------|
| SOCKS5プロキシリスナーをポリシー制御と設定ゲートと共に追加 (#9803) | Added an optional SOCKS5 proxy listener with policy enforcement and config gating. (#9803) |
| プランモードでの提案プランをTUIビューにストリーミング表示、素早くモード切替できる`/plan`ショートカットを追加 (#9786, #10103) | Plan mode now streams proposed plans into a dedicated TUI view, plus a feature-gated `/plan` shortcut for quick mode switching. (#9786, #10103) |
| TUIでコネクタを閲覧できる`/apps`コマンドと、アプリプロンプトへの`$`挿入機能を追加 (#9728) | Added `/apps` to browse connectors in TUI and `$` insertion for app prompts. (#9728) |
| アプリサーバーが外部認証モードで動作可能に、ホストアプリからのChatGPT認証トークンを受け入れ、必要時に更新をリクエスト (#10012) | App-server can now run in external auth mode, accepting ChatGPT auth tokens from a host app and requesting refreshes when needed. (#10012) |
| スマート承認をデフォルトで有効化、MCPツール呼び出し時に明示的な承認プロンプトを表示 (#10286, #10200) | Smart approvals are now enabled by default, with explicit approval prompts for MCP tool calls. (#10286, #10200) |
| SQLiteベースのログデータベースを導入、改善されたログクライアント、スレッドIDフィルタリング、保持期間設定、ヒューリスティックな色分けを実装 (#10086, #10087, #10150, #10151, #10229, #10228) | Introduced a SQLite-backed log database with an improved logs client, thread-id filtering, retention, and heuristic coloring. (#10086, #10087, #10150, #10151, #10229, #10228) |
| MCPツールの画像出力を、画像ブロックが最初でない場合や部分的に不正な場合でも確実にレンダリング (#9815) | MCP tool image outputs render reliably even when image blocks aren’t first or are partially malformed. (#9815) |
| 入力履歴の復元時にローカル画像添付やリッチテキスト要素も復元 (#9628) | Input history recall now restores local image attachments and rich text elements. (#9628) |
| ファイル検索でセッションCWD変更を追跡、マルチルート探索をサポートしパフォーマンスを向上 (#9279, #9939, #10240) | File search now tracks session CWD changes and supports multi-root traversal with better performance. (#9279, #9939, #10240) |
| スレッド再開時に最初のターンが実際に開始されるまで`updated_at`を更新しないように変更 (#9950) | Resuming a thread no longer updates `updated_at` until the first turn actually starts. (#9950) |
| シェルスナップショットがstdinを継承しないように変更、起動スクリプトからのハングを回避 (#9735) | Shell snapshots no longer inherit stdin, avoiding hangs from startup scripts. (#9735) |
| WebSocketプロキシ失敗時にHTTPへフォールバック (#10139) | Connections fall back to HTTP when WebSocket proxies fail. (#10139) |
| アプリサーバーのAuthMode使用方法と動作をドキュメント化 (#10191) | Documented app-server AuthMode usage and behavior. (#10191) |
| Rustツールチェーンを1.93にアップグレード (#10080) | Upgraded the Rust toolchain to 1.93. (#10080) |
| リポジトリで使用するpnpmバージョンを更新 (#9992, #10161) | Updated pnpm versions used in the repo. (#9992, #10161) |
| Bazelビルドとrunfilesハンドリングを改善、リモートキャッシュ圧縮を含む (#10079, #10098, #10102, #10104) | Bazel build and runfiles handling improvements, including remote cache compression. (#10079, #10098, #10102, #10104) |

## 0.92.0

| 日本語 | English |
|--------|---------|
| API v2スレッドが起動時に動的ツールを注入し、サーバーとコアツールパイプラインを通じて呼び出し/レスポンスをエンドツーエンドでルーティングできるようになりました。(#9539) | API v2 threads can now inject dynamic tools at startup and route their calls/responses end-to-end through the server and core tool pipeline. (#9539) |
| アプリサーバーのスレッドリストにフィルタリング機能を追加し、大量のスレッドセットを閲覧しやすくしました。(#9897) | Added filtering on the thread list in the app server to make large thread sets easier to browse. (#9897) |
| アーカイブされたロールアウトをアクティブセッションに復元する`thread/unarchive` RPCを導入しました。(#9843) | Introduced a `thread/unarchive` RPC to restore archived rollouts back into active sessions. (#9843) |
| MCPサーバーが`config.toml`でOAuthスコープを定義できるようになり、各ログイン時に`--scopes`を渡す必要が減りました。(#9647) | MCP servers can now define OAuth scopes in `config.toml`, reducing the need to pass `--scopes` on each login. (#9647) |
| マルチエージェントコラボレーションがより高機能かつ安全になり、エクスプローラーロール、改善されたコラボイベントマッピング、最大深度ガードレールが追加されました。(#9817, #9818, #9918, #9899) | Multi-agent collaboration is more capable and safer, with an explorer role, better collab event mapping, and max-depth guardrails. (#9817, #9818, #9918, #9899) |
| キャッシュされた`web_search`がデフォルトのクライアント動作になりました。(#9974) | Cached `web_search` is now the default client behavior. (#9974) |
| メインTokioスレッドでのブロッキング送信を回避することで、高ストリーミングスループット下でのTUIデッドロック/フリーズを修正しました。(#9951) | Fixed a TUI deadlock/freeze under high streaming throughput by avoiding blocking sends on the main Tokio thread. (#9951) |
| `web_search`ツールがすべてのアクションタイプを処理・表示し、スタックしているように見える代わりに進行中のアクティビティを表示するようになりました。(#9960) | The `web_search` tool now handles and displays all action types, and shows in-progress activity instead of appearing stuck. (#9960) |
| サブエージェントでのビジーウェイトを排除することで、コラボレーションフローでの高CPU使用率を削減しました。(#9776) | Reduced high CPU usage in collaboration flows by eliminating busy-waiting on subagents. (#9776) |
| `codex resume --last --json`を修正し、引数の競合エラーなしにプロンプトが正しく解析されるようにしました。(#9475) | Fixed `codex resume --last --json` so prompts parse correctly without conflicting argument errors. (#9475) |
| Windowsサンドボックスログがマルチバイトコンテンツの切り詰め時に失敗しないよう、UTF-8を安全に処理するようになりました。(#8647) | Windows sandbox logging now handles UTF-8 safely, preventing failures when truncating multibyte content. (#8647) |
| `request_user_input`がPlan/Pairモード外では拒否され、無効なツール呼び出しを防ぐようになりました。(#9955) | `request_user_input` is now rejected outside Plan/Pair modes to prevent invalid tool calls. (#9955) |
| より明確なオンボーディングとワークフローの期待値を示すため、コントリビューションガイドラインを更新しました。(#9933) | Updated the contribution guidelines for clearer onboarding and workflow expectations. (#9933) |
| `thread/unarchive`と更新された`request_user_input`の質問形式を反映するため、プロトコル/MCPドキュメントを更新しました。(#9843, #9890) | Refreshed protocol/MCP docs to reflect `thread/unarchive` and the updated `request_user_input` question shape. (#9843, #9890) |
| Homebrewによる自己更新が明示的なcaskアップグレードコマンドを使用するようになり、警告や曖昧さを回避します。(#9823) | Self-update via Homebrew now uses an explicit cask upgrade command to avoid warnings and ambiguity. (#9823) |
| リリースパッケージングがバンドルzipを一貫して`dist/`に書き込むようになりました。(#9934) | Release packaging now consistently writes the bundle zip to `dist/`. (#9934) |
| Rustワークスペースの主要な依存関係（`axum`、`tracing`、`globset`、`tokio-test`を含む）を更新しました。(#9880, #9882, #9883, #9884) | Updated key dependencies in the Rust workspace (including `axum`, `tracing`, `globset`, and `tokio-test`). (#9880, #9882, #9883, #9884) |
| 機能ステージの命名を公開成熟度ステージに合わせ、開発中機能の警告をより明確にしました。(#9929, #9954) | Aligned feature stage naming with public maturity stages and added clearer warnings for underdevelopment features. (#9929, #9954) |

## 0.91.0

| 日本語 | English |
|--------|---------|
| サブエージェントの最大許可数を6に削減し、エージェントのファンアウト動作におけるリソース使用量とガードレールを強化 (#9861) | Reduced the maximum allowed number of sub-agents to 6 to tighten resource usage and guardrails in agent fan-out behavior (#9861) |

## 0.90.0

| 日本語 | English |
|--------|---------|
| アウトバウンドネットワークアクセスをより適切に制御するため、ポリシー適用機能を持つネットワークサンドボックスプロキシを追加 (#8442) | Added a network sandbox proxy with policy enforcement to better control outbound network access. (#8442) |
| アプリサーバーとMCP統合を介したコネクタサポートの第一段階を導入、新しい設定/ドキュメント更新を含む (#9667) | Introduced the first phase of connectors support via the app server and MCP integration, including new config/docs updates. (#9667) |
| TUIでコラボレーションモードをベータ版として提供、より明確な計画→実行の引き継ぎとモード選択の簡素化(コーディング vs プラン) (#9690, #9712, #9802, #9834) | Shipped collaboration mode as beta in the TUI, with a clearer plan → execute handoff and simplified mode selection (Coding vs Plan). (#9690, #9712, #9802, #9834) |
| エフェメラルスレッドを追加し、生成されたスレッドのコラボレーションツール来歴メタデータを改善 (#9765, #9769) | Added ephemeral threads and improved collaboration tool provenance metadata for spawned threads. (#9765, #9769) |
| WebSocket接続でプロキシ設定をサポート (#9719) | WebSocket connections now support proxy configuration. (#9719) |
| マルチエージェントの制限をより厳格化 | More strict limitation on multi-agents |
| 複数行の引用符付き引数に対する実行ポリシーの解析を修正 (#9565) | Fixed exec policy parsing for multiline quoted arguments. (#9565) |
| `--yolo`がリポジトリ外で失敗する代わりに、gitリポジトリチェックをスキップするように変更 (#9590) | `--yolo` now skips the git repository check instead of failing outside a repo. (#9590) |
| 順序が異なるイベントの処理と、作業ディレクトリが異なる場合のプロンプト表示により、再開の信頼性を向上 (#9512, #9731) | Improved resume reliability by handling out-of-order events and prompting for the working directory when it differs. (#9512, #9731) |
| カーソルが要素の左端にある場合、Backspaceでテキスト要素が削除されないように修正 (#9630) | Backspace no longer deletes a text element when the cursor is at the element’s left edge. (#9630) |
| 設定読み込みエラーをより明確で対処可能なものに改善 (#9746) | Config loading errors are clearer and more actionable across surfaces. (#9746) |
| デフォルトのモデル選択が、無効なデフォルトを避けるためにフィルタリングされたプリセットを尊重するように変更 (#9782) | Default model selection now respects filtered presets to avoid invalid defaults. (#9782) |
| 実験的なコラボレーションプロンプトテンプレートのタイポを修正 (#9716) | Corrected a typo in the experimental collaboration prompt template. (#9716) |
| 新しいコネクタ設定画面のドキュメントを追加 (#9667) | Added documentation for the new connectors configuration surface. (#9667) |
| バンドルされたモデルカタログ/プリセットを更新 (#9726) | Refreshed the bundled model catalog/presets. (#9726) |
| Node 24互換性のためにGitHub Actionsを更新 (#9722) | Updated GitHub Actions for Node 24 compatibility. (#9722) |

## 0.89.0

| 日本語 | English |
|--------|---------|
| `/approvals` を互換性のために残しつつ、より短い承認セットを持つ `/permissions` コマンドを追加。(#9561) | Added a `/permissions` command with a shorter approval set while keeping `/approvals` for compatibility. (#9561) |
| 個別のスキルを有効化・無効化できる `/skill` UIを追加。(#9627) | Added a `/skill` UI to enable or disable individual skills. (#9627) |
| スラッシュコマンド選択を改善し、あいまい一致よりも完全一致と前方一致を優先。(#9629) | Improved slash-command selection by prioritizing exact and prefix matches over fuzzy matches. (#9629) |
| アプリサーバーが `thread/read` をサポートし、`thread/list` でアーカイブされたスレッドをフィルタリング可能に。(#9569, #9571) | App server now supports `thread/read` and can filter archived threads in `thread/list`. (#9569, #9571) |
| アプリサーバークライアントが階層的な `config.toml` 解決をサポートし、`config/read` が指定されたcwdから有効な設定を計算可能に。(#9510) | App server clients now support layered `config.toml` resolution and `config/read` can compute effective config from a given cwd. (#9510) |
| リリース成果物に公開された設定スキーマの安定したURLを含めるように。(#9572) | Release artifacts now include a stable URL for the published config schema. (#9572) |
| `~//...` のようなパスでチルダ展開がHOMEからエスケープするのを防止。(#9621) | Prevented tilde expansion from escaping HOME on paths like `~//...`. (#9621) |
| TUIのターンタイミングがアシスタントメッセージ間でリセットされ、経過時間が最新の応答を反映するように。(#9599) | TUI turn timing now resets between assistant messages so elapsed time reflects the latest response. (#9599) |
| MCPサブコマンドのドキュメントを現在のCLI動作に合わせて更新。(#9622) | Updated MCP subcommand docs to match current CLI behavior. (#9622) |
| `skills/list` プロトコルのREADME例を最新のレスポンス形式に合わせて更新。(#9623) | Refreshed the `skills/list` protocol README example to match the latest response shape. (#9623) |
| TUI2実験とその関連設定・ドキュメントを削除し、CodexをターミナルネイティブなUIに維持。(#9640) | Removed the TUI2 experiment and its related config/docs, keeping Codex on the terminal-native UI. (#9640) |

## 0.88.0

| 日本語 | English |
|--------|---------|
| ヘッドレス環境でデバイスコード認証をスタンドアロンフォールバックとして追加。(#9333) | Added device-code auth as a standalone fallback in headless environments. (#9333) |
| 信頼されたフォルダーからのみ設定を読み込み、シンボリックリンクされた `config.toml` の解決を修正。(#9533, #9445) | Load configs from trusted folders only and fix symlinked `config.toml` resolution. (#9533, #9445) |
| Azure エンドポイントの無効な入力エラーを修正。(#9387) | Fixed Azure endpoint invalid input errors. (#9387) |
| コアランタイムのメモリリークを解決。(#9543) | Resolved a memory leak in core runtime. (#9543) |
| 中断されたターンが繰り返されるのを防止。(#9043) | Prevented interrupted turns from repeating. (#9043) |
| WSL TUI の画像ペースト機能の不具合を修正。(#9473) | Fixed WSL TUI image paste regression. (#9473) |
| MCP ドキュメントのリンクを現在の宛先に更新。(#9490) | Updated MCP documentation link to the current destination. (#9490) |
| ドキュメント内の「Multi-agents」の命名タイポを修正。(#9542) | Corrected a “Multi-agents” naming typo in docs. (#9542) |
| コラボレーションモードの開発者向け手順を追加。(#9424) | Added developer instructions for collaboration modes. (#9424) |
| Rust 1.92 にアップグレードし、コア Rust 依存関係を更新。(#8860, #9465, #9466, #9467, #9468, #9469) | Upgraded to Rust 1.92 and refreshed core Rust dependencies. (#8860, #9465, #9466, #9467, #9468, #9469) |

## 0.87.0

| 日本語 | English |
|--------|---------|
| ユーザーメッセージのメタデータ(テキスト要素とバイト範囲)がprotocol/app-server/core全体でラウンドトリップするようになり、UI注釈が履歴再構築後も保持されるようになりました。(#9331) | User message metadata (text elements and byte ranges) now round-trips through protocol/app-server/core so UI annotations can survive history rebuilds. (#9331) |
| コラボレーション待機呼び出しが1リクエストで複数IDをブロックできるようになり、マルチスレッド調整が簡素化されました。(#9294) | Collaboration wait calls can block on multiple IDs in one request, simplifying multi-thread coordination. (#9294) |
| ユーザーシェルコマンドがユーザースナップショット下で実行されるようになり、エイリアスとシェル設定が尊重されるようになりました。(#9357) | User shell commands now run under the user snapshot so aliases and shell config are honored. (#9357) |
| TUIが生成済み/未購読スレッドからの承認リクエストを表示するようになりました。(#9232) | The TUI now surfaces approval requests from spawned/unsubscribed threads. (#9232) |
| コンパクト化時のトークン推定が正確になり、長時間セッション中の予算管理が改善されました。(#9337) | Token estimation during compaction is now accurate, improving budgeting during long sessions. (#9337) |
| MCP CallToolResultの`content`と`structuredContent`の両方に`threadId`が含まれるようになり、互換性のために定義された出力スキーマを返すようになりました。(#9338) | MCP CallToolResult now includes `threadId` in both `content` and `structuredContent`, and returns a defined output schema for compatibility. (#9338) |
| TUIの「Worked for」セパレーターが実際の作業発生後にのみ表示されるようになりました。(#8958) | The TUI “Worked for” separator only appears after actual work has occurred. (#8958) |
| パイプされた非PTYコマンドがstdin待機でハングしなくなりました。(#9369) | Piped non-PTY commands no longer hang waiting on stdin. (#9369) |
| MCPインターフェースドキュメントが構造化出力スキーマと`threadId`の動作を反映するように更新されました。(#9338) | MCP interface docs updated to reflect structured output schema and `threadId` behavior. (#9338) |
| Windowsビルドで PowerShell UTF-8機能がデフォルトで有効化されました。(#9195) | Windows builds enable the PowerShell UTF-8 feature by default. (#9195) |

## 0.86.0

| 日本語 | English |
|--------|---------|
| スキルメタデータを`SKILL.toml`で定義可能に(名前、説明、アイコン、ブランドカラー、デフォルトプロンプト)、アプリサーバーとTUIで表示対応 (#9125) | Skill metadata can now be defined in `SKILL.toml` (names, descriptions, icons, brand color, default prompt) and surfaced in the app server and TUI (#9125) |
| クライアントがWebサーチを明示的に無効化し、ヘッダーで適格性を通知してサーバー側のロールアウト制御と連携可能に (#9249) | Clients can explicitly disable web search and signal eligibility via a header to align with server-side rollout controls (#9249) |
| MCP要求の承認時、コンテンツを期待するサーバーに対応するため、nullではなく空のJSONペイロードを送信するように変更 (#9196) | Accepting an MCP elicitation now sends an empty JSON payload instead of null to satisfy servers expecting content (#9196) |
| 入力プロンプトのプレースホルダースタイルを非イタリックに戻し、ターミナルレンダリングの問題を回避 (#9307) | Input prompt placeholder styling is back to non-italic to avoid terminal rendering issues (#9307) |
| 空のペーストイベントでクリップボード画像読み取りがトリガーされないように修正 (#9318) | Empty paste events no longer trigger clipboard image reads (#9318) |
| Unified execがバックグラウンドプロセスをクリーンアップし、リスナー停止後の遅延End イベントを防止 (#9304) | Unified exec cleans up background processes to prevent late End events after listeners stop (#9304) |
| オーケストレータープロンプトを更新し、内部ルーティング動作を改善 (#9301) | Refresh the orchestrator prompt to improve internal routing behavior (#9301) |
| ノイズの多い`needs_follow_up`エラーログを削減 (#9272) | Reduce noisy `needs_follow_up` error logging (#9272) |

## 0.85.0

| 日本語 | English |
|--------|---------|
| App-server v2 は、ターンストリーム内のアイテムイベントとしてコラボレーションツール呼び出しを送信するようになり、クライアントがエージェント連携をリアルタイムでレンダリングできるようになりました。(#9213) | App-server v2 now emits collaboration tool calls as item events in the turn stream, so clients can render agent coordination in real time. (#9213) |
| コラボレーションツールに豊富なエージェント制御機能を追加:`spawn_agent` がエージェントロールプリセットを受け入れ、`send_input` がメッセージを配信する前に実行中のエージェントをオプションで中断できるようになりました。(#9275, #9276) | Collaboration tools gained richer agent control: `spawn_agent` accepts an agent role preset, and `send_input` can optionally interrupt a running agent before delivering the message. (#9275, #9276) |
| `/models` メタデータに、クライアントがモデルアップグレードを提案する際により詳細なガイダンスを表示できるよう、アップグレード移行マークダウンを追加しました。(#9219) | `/models` metadata now includes upgrade migration markdown so clients can display richer guidance when suggesting model upgrades. (#9219) |
| [差し戻し] ユーザー名前空間が利用できない場合、Linux サンドボックスは Landlock のみの制限にフォールバックし、サンドボックスルールを適用する前に `no_new_privs` を設定するようになりました。(#9250) | [revert] Linux sandboxing now falls back to Landlock-only restrictions when user namespaces are unavailable, and sets `no_new_privs` before applying sandbox rules. (#9250) |
| `codex resume --last` は、明示的なオーバーライドとしての `--all` を使用して、現在の作業ディレクトリを尊重するようになりました。(#9245) | `codex resume --last` now respects the current working directory, with `--all` as an explicit override. (#9245) |
| 標準入力プロンプトのデコードが BOM/UTF-16 を処理し、無効なエンコーディングに対してより明確なエラーを提供するようになりました。(#9151) | Stdin prompt decoding now handles BOMs/UTF-16 and provides clearer errors for invalid encodings. (#9151) |

## 0.84.0

| 日本語 | English |
|--------|---------|
| クライアントレンダリングの高度化とスキーマ進化を可能にするため、テキスト要素に追加メタデータを含むようRustプロトコル/型を拡張 (#9235) | Extend the Rust protocol/types to include additional metadata on text elements, enabling richer client rendering and schema evolution (#9235) |
| リリースビルドジョブのタイムアウトを延長し、Rustリリースパイプラインの不安定性を削減(特にWindows環境) (#9242) | Reduce flaky Rust release pipelines (notably on Windows) by increasing the release build job timeout (#9242) |

## 0.81.0

| 日本語 | English |
|--------|---------|
| デフォルトAPIモデルをgpt-5.2-codexに変更。(#9188) | Default API model moved to gpt-5.2-codex. (#9188) |
| `codex mcp-server`の`codex`ツールが、レスポンスに`threadId`を含むようになり、`codex-reply`ツールで使用可能に。#3712を修正。ドキュメントはhttps://developers.openai.com/codex/guides/agents-sdk/で更新済み。(#9192) | The `codex` tool in `codex mcp-server` now includes the `threadId` in the response so it can be used with the `codex-reply` tool, fixing #3712. The documentation has been updated at https://developers.openai.com/codex/guides/agents-sdk/. (#9192) |
| ヘッドレス実行時に、デバイスコードログインに自動切り替えすることで、ブラウザなしでのサインインが可能に。(#8756) | Headless runs now switch to device-code login automatically so sign-in works without a browser. (#8756) |
| Linuxサンドボックスで、パスを読み取り専用でマウントし、書き込みからファイルをより適切に保護。(#9112) | Linux sandbox can mount paths read-only to better protect files from writes. (#9112) |
| `tui`での部分的なツール呼び出しレンダリングをサポート | Support partial tool calls rendering in `tui` |
| 代替スクリーン処理でZellijのスクロールバックが壊れないように改善し、制御用の設定/フラグを追加。(#8555) | Alternate-screen handling now avoids breaking Zellij scrollback and adds a config/flag to control it. (#8555) |
| Windowsで読み取り専用サンドボックスポリシー実行時に、危険なコマンド実行前に正しくプロンプトを表示。(#9117) | Windows correctly prompts before unsafe commands when running with a read-only sandbox policy. (#9117) |
| Config.tomlとルールの解析エラーを、サイレント失敗ではなくapp-serverクライアント/TUIに報告。(#9182、#9011) | Config.toml and rules parsing errors are reported to app-server clients/TUI instead of failing silently. (#9182, #9011) |
| macOSのプロキシ検出におけるsystem-configurationクラッシュを回避。(#8954) | Worked around a macOS system-configuration crash in proxy discovery. (#8954) |
| 無効なユーザー画像アップロードが、サイレント置換ではなくエラーを表示するように変更。(#9146) | Invalid user image uploads now surface an error instead of being silently replaced. (#9146) |
| `docs/`に`config.toml`用の生成JSONスキーマを公開し、設定の検証が可能に。(#8956) | Published a generated JSON Schema for `config.toml` in `docs/` to validate configs. (#8956) |
| ブラケット付きペーストが信頼できない端末向けに、TUIペーストバーストステートマシンを文書化。(#9020) | Documented the TUI paste-burst state machine for terminals without reliable bracketed paste. (#9020) |
| Bazelビルドサポートを追加し、コントリビューター向けに`just bazel-codex`ヘルパーを追加。(#8875、#9177) | Added Bazel build support plus a `just bazel-codex` helper for contributors. (#8875, #9177) |

## 0.80.0

| 日本語 | English |
|--------|---------|
| プロトコルとアプリサーバーに会話/スレッドのフォークエンドポイントを追加し、クライアントがセッションを新しいスレッドに分岐できるようにしました。(#8866) | Add conversation/thread fork endpoints in the protocol and app server so clients can branch a session into a new thread. (#8866) |
| `requirement/list`経由で要件を公開し、クライアントが`requirements.toml`を読み取ってエージェントモードのUXを調整できるようにしました。(#8800) | Expose requirements via `requirement/list` so clients can read `requirements.toml` and adjust agent-mode UX. (#8800) |
| 観測性向上のため、追加のカウンターを含むメトリクス機能を導入しました。(#8318, #8910) | Introduce metrics capabilities with additional counters for observability. (#8318, #8910) |
| アップグレード/縮退モード用のプロンプトと`/elevate-sandbox`コマンドを含む、昇格サンドボックスのオンボーディングを追加しました。(#8789) | Add elevated sandbox onboarding with prompts for upgrade/degraded mode plus the `/elevate-sandbox` command. (#8789) |
| v2 APIユーザー入力を通じて明示的なスキル呼び出しを可能にしました。(#8864) | Allow explicit skill invocations through v2 API user input. (#8864) |
| Codex CLIのサブプロセスが再び`LD_LIBRARY_PATH`/`DYLD_LIBRARY_PATH`などの環境変数を継承し、ランタイムの問題を回避するようにしました。#8945で説明されているように、これらの環境変数を期待するサブプロセス(特にGPU関連)に渡さないと、10倍以上のパフォーマンス低下が発生していました!詳細な調査と#8945での報告を提供してくれた@johnzfitchに特別な感謝を。(#8951) | Codex CLI subprocesses again inherit env vars like `LD_LIBRARY_PATH`/`DYLD_LIBRARY_PATH` to avoid runtime issues. As explained in #8945, failure to pass along these environment variables to subprocesses that expect them (notably GPU-related ones), was causing 10x+ performance regressions! Special thanks to @johnzfitch for the detailed investigation and write-up in #8945. (#8951) |
| TUI/TUI2での`/review <instructions>`が、プレーンテキストを送信する代わりにレビューフローを起動するようにしました。(#8823) | `/review <instructions>` in TUI/TUI2 now launches the review flow instead of sending plain text. (#8823) |
| パッチ承認の「このセッションで許可」が、以前承認されたファイルに対して保持されるようにしました。(#8451) | Patch approval “allow this session” now sticks for previously approved files. (#8451) |
| 現在のモデルがピッカーから非表示になっている場合でも、モデルアップグレードプロンプトが表示されるようにしました。(#8802) | Model upgrade prompt now appears even if the current model is hidden from the picker. (#8802) |
| Windowsのペースト処理が、非ASCII文字を含む複数行入力を確実にサポートするようにしました。この修正の基礎を#8021で築いてくれた@occurrentに特別な感謝を!(#8774) | Windows paste handling now supports non-ASCII multiline input reliably. Special thanks to @occurrent laying the groundwork for this fix in #8021! (#8774) |
| Gitのapplyパス解析が、引用符/エスケープされたパスと`/dev/null`を正しく処理し、変更の誤分類を回避するようにしました。(#8824) | Git apply path parsing now handles quoted/escaped paths and `/dev/null` correctly to avoid misclassified changes. (#8824) |
| アプリサーバーのREADMEに、スキルのサポートと使用方法を文書化しました。(#8853) | App-server README now documents skills support and usage. (#8853) |
| スキル作成者向けドキュメントで、YAMLフロントマターのフォーマットと引用規則を明確化しました。(#8610) | Skill-creator docs clarify YAML frontmatter formatting and quoting rules. (#8610) |

## 0.79.0

| 日本語 | English |
|--------|---------|
| セッションが他の会話をプログラム的に生成またはメッセージ送信できる複数会話「エージェント制御」を追加 (#8783, #8788) | Add multi-conversation “agent control” so a session can spawn or message other conversations programmatically (#8783, #8788) |
| IDE クライアントが履歴を書き換えずに最後の N ターンを元に戻せるよう、app-server に `thread/rollback` を追加 (#8454) | Add app-server `thread/rollback` so IDE clients can undo the last N turns without rewriting history (#8454) |
| ライブリクエストの代わりにキャッシュのみの Web 検索結果を有効にする `web_search_cached` を追加 (#8795) | Add `web_search_cached` to enable cached-only Web Search results as a safer alternative to live requests (#8795) |
| `codex exec resume` の後にグローバル実行フラグ(model/json/sandbox トグルなど)を渡せるように変更 (#8440) | Allow global exec flags (model/json/sandbox toggles, etc.) to be passed after `codex exec resume` (#8440) |
| リポジトリ内の TOML ファイルによって制御される、時間/バージョン対象のアナウンスヒントを TUI に表示 (#8752) | Show time/version-targeted announcement tips in the TUI, driven by a TOML file in the repo (#8752) |
| アナリティクス動作を制御する `[analytics] enabled=...` 設定セクションを追加 (#8350) | Add an `[analytics] enabled=...` config section to control analytics behavior (#8350) |
| TUI2 トランスクリプトを修正し、ストリーミングされたマークダウンがリサイズ時に再フローし、コピー/ペーストがソフトラップを保持するように改善 (#8761) | Fix TUI2 transcripts so streamed markdown reflows on resize and copy/paste preserves soft wraps (#8761) |
| 空白でパディングされた `*** Begin Patch` / `*** End Patch` マーカーに対して `apply_patch` 解析を寛容に処理するよう修正 (#8746) | Make `apply_patch` parsing tolerant of whitespace-padded `*** Begin Patch` / `*** End Patch` markers (#8746) |
| git ルートを確認する前に現在の作業ディレクトリからの相対パスをレンダリングし、非 git ワークスペースでの出力を改善 (#8771) | Render paths relative to the current working directory before checking git roots, improving output in non-git workspaces (#8771) |
| `CODEX_MANAGED_CONFIG_PATH` が本番環境でマネージド設定を上書きしないようにし、ポリシーバイパスを修正 (#8762) | Prevent `CODEX_MANAGED_CONFIG_PATH` from overriding managed config in production, closing a policy bypass (#8762) |
| app-server の会話がクライアントから渡された設定を尊重するよう保証 (#8765) | Ensure app-server conversations respect the config passed in by the client (#8765) |
| TUI UX の不具合を削減: 入力履歴を閲覧中のポップアップを抑制、コピー「ピル」のレンダリングを修正、中断時にバックグラウンドターミナルをクリア (#8772, #8777, #8786) | Reduce TUI UX glitches: suppress popups when browsing input history, fix copy “pill” rendering, and clear background terminals on interrupt (#8772, #8777, #8786) |
| ヘッドレス/リモートセットアップのオンボーディング/ログインガイダンスを明確化し、ユーザーを `codex login --device-auth` に誘導 (#8753) | Clarify onboarding/login guidance for headless/remote setups by steering users to `codex login --device-auth` (#8753) |
| ツール/設定で使用されるモデル例を現在の `gpt-5.2` 命名に更新 (#8566) | Update model examples used in tooling/config to current `gpt-5.2` naming (#8566) |
| 設定されたすべてのスキルフォルダが考慮されるよう、設定レイヤースタックを使用するようにスキル検出をリファクタリング (#8497) | Refactor skills discovery to use the config layer stack so all configured skill folders are considered (#8497) |
| リリース作成時に GitHub リリースノートを自動入力 (#8799) | Auto-populate GitHub release notes at release creation time (#8799) |
| カバレッジを強化するために `apply_patch` テストシナリオを追加 (#8230) | Add more `apply_patch` test scenarios to harden coverage (#8230) |
| PTY が存在する場合にのみ「begin」を送信するよう、統合実行イベント送出を調整 (#8780) | Tweak unified exec event emission to only send “begin” when a PTY is present (#8780) |

## 0.78.0

| 日本語 | English |
|--------|---------|
| `Ctrl+G` で現在のプロンプトを設定済みの外部エディタ (`$VISUAL`/`$EDITOR`) で開き、編集内容を TUI に同期する機能を追加 (#7606) | Add `Ctrl+G` to open the current prompt in your configured external editor (`$VISUAL`/`$EDITOR`) and sync edits back into the TUI. (#7606) |
| プロジェクト対応の設定レイヤリングをサポート: リポジトリローカルの `.codex/config.toml` を読み込み、設定可能な `project_root_markers` を尊重し、`/etc/codex/config.toml` などのシステム設定とマージ (#8354, #8359, #8461) | Support project-aware config layering: load repo-local `.codex/config.toml`, honor configurable `project_root_markers`, and merge that with system config like `/etc/codex/config.toml`. (#8354, #8359, #8461) |
| macOS で MDM 経由で提供される TOML ペイロードを使用したエンタープライズ管理設定要件をサポート (#8743) | Support enterprise-managed configuration requirements on macOS via an MDM-provided TOML payload. (#8743) |
| `tui2` のトランスクリプトナビゲーションを改善: マルチクリック選択、コピーショートカット/アフォーダンス、ドラッグ可能な自動非表示スクロールバーを追加 (#8462, #8471, #8728) | Improve `tui2` transcript navigation with multi-click selection, a copy shortcut/affordance, and a draggable auto-hiding scrollbar. (#8462, #8471, #8728) |
| エンコーディング関連のプロンプト/出力問題を軽減するため、Windows PowerShell セッションを UTF-8 モードで起動 (#7902) | Start Windows PowerShell sessions in UTF-8 mode to reduce encoding-related prompt/output issues. (#7902) |
| 実行ポリシールールに人間が読める形式の正当化理由を含めることが可能になり、ポリシー読み込みは統一された設定レイヤースタックに従うように変更 (#8349, #8453, #8751) | Exec policy rules can now include human-readable justifications, and policy loading follows the unified config-layer stack. (#8349, #8453, #8751) |
| モデルが 1 ターンで複数のツール呼び出しを返した際の失敗を修正: Chat Completions API が期待する形式でツール呼び出しを出力 (#8556) | Fix failures when the model returns multiple tool calls in a single turn by emitting tool calls in the format the Chat Completions API expects. (#8556) |
| `/review` がセッションの作業ディレクトリから差分を計算するように修正し、ランタイム cwd オーバーライドでベースブランチ検出が正しく動作するように改善 (#8738) | Make `/review` compute diffs from the session’s working directory so base-branch detection works correctly with runtime cwd overrides. (#8738) |
| レガシーの Chat Completions ストリーミング終端文字を適切に処理し、不要な SSE パースエラーを回避 (#8708) | Handle the legacy Chat Completions streaming terminator cleanly to avoid spurious SSE parse errors. (#8708) |
| `tui2` のレンダリング/入力エッジケース(画面破損、スクロールの固着、選択/コピーの正確性)を修正 (#8463, #8695, #8449) | Fix a set of `tui2` rendering/input edge cases (screen corruption, scroll stickiness, and selection/copy correctness). (#8463, #8695, #8449) |
| CLI パッケージング中の `ripgrep` ダウンロード失敗時の診断情報を改善し、失敗のデバッグを容易化 (#8486) | Improve diagnostics when `ripgrep` download fails during CLI packaging so failures are easier to debug. (#8486) |
| alpha/stable バージョン文字列のパース時のパニックを回避 (#8406) | Avoid a panic when parsing alpha/stable version strings. (#8406) |
| ユーザードキュメントを開発者ドキュメントサイト(スキルドキュメントを含む)へのリンクに置き換えて重複を削除 (#8662, #8407) | Replace and de-duplicate user docs with links to the developer documentation site (including skills docs). (#8662, #8407) |
| `developer_instructions` オプションを含む設定ドキュメントを明確化 (#8376, #8701) | Clarify configuration documentation, including the `developer_instructions` option. (#8376, #8701) |
| README の壊れたリンクを修正 (#8682) | Fix broken README links. (#8682) |
| TUI のパフォーマンスチューニング: 再描画スケジューリングに上限を設定し、ストリーミング中の不要な再レンダリングを削減して CPU 使用率を低減 (#8499, #8681, #8693) | Performance tuning for TUIs: cap redraw scheduling and reduce unnecessary rerenders during streaming to lower CPU usage. (#8499, #8681, #8693) |
| `codex-rs` 全体で Rust 依存関係を更新 (#8414, #8596, #8597) | Update Rust dependencies across `codex-rs`. (#8414, #8596, #8597) |

