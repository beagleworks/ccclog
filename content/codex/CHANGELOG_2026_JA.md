# OpenAI Codex 変更履歴 (2026年)

このファイルは OpenAI Codex の2026年リリース分の変更履歴を日本語で記載しています。

---

## 0.95.0

| 日本語 | English | Category |
|--------|---------|----------|
| macOS で `codex app <path>` を追加し、CLI から Codex Desktop を起動できるようになりました。DMG が不足している場合は自動ダウンロードされます。(#10418) | Added `codex app <path>` on macOS to launch Codex Desktop from the CLI, with automatic DMG download if it is missing. (#10418) | new-features |
| `~/.agents/skills` からの個人スキル読み込みを追加（`~/.codex/skills` との互換性あり）し、公開リモートスキルを一覧表示・ダウンロードするための app-server API/イベントを追加しました。(#10437, #10448) | Added personal skill loading from `~/.agents/skills` (with `~/.codex/skills` compatibility), plus app-server APIs/events to list and download public remote skills. (#10437, #10448) | new-features |
| `/plan` でインライン プロンプト引数と画像の貼り付けがサポートされ、TUI でのスラッシュコマンドの編集/ハイライト表示が洗練されました。(#10269) | `/plan` now accepts inline prompt arguments and pasted images, and slash-command editing/highlighting in the TUI is more polished. (#10269) | new-features |
| シェル関連ツールが並列実行できるようになり、複数コマンド実行のスループットが向上しました。(#10505) | Shell-related tools can now run in parallel, improving multi-command execution throughput. (#10505) | new-features |
| シェル実行時に `CODEX_THREAD_ID` が渡されるようになり、スクリプトやスキルがアクティブなスレッド/セッションを検出できるようになりました。(#10096) | Shell executions now receive `CODEX_THREAD_ID`, so scripts and skills can detect the active thread/session. (#10096) | new-features |
| Linux サンドボックスに Bubblewrap と FFI 配線をベンダー化し、今後のランタイム統合の基盤を整備しました。(#10413) | Added vendored Bubblewrap + FFI wiring in the Linux sandbox as groundwork for upcoming runtime integration. (#10413) | new-features |
| Git コマンドの安全性を強化し、破壊的または書き込み可能な呼び出しが承認チェックをバイパスしなくなりました。(#10258) | Hardened Git command safety so destructive or write-capable invocations no longer bypass approval checks. (#10258) | bug-fixes |
| 保存されたスレッド名を正しく表示し、スレッド一覧の動作を修正することで、再開/スレッド閲覧の信頼性が向上しました。(#10340, #10383) | Improved resume/thread browsing reliability by correctly showing saved thread names and fixing thread listing behavior. (#10340, #10383) | bug-fixes |
| 初回実行時のトラストモード処理を修正し、サンドボックスモードが一貫して報告されるようになり、`$PWD/.agents` を `$PWD/.codex` と同様に読み取り専用にしました。(#10415, #10524) | Fixed first-run trust-mode handling so sandbox mode is reported consistently, and made `$PWD/.agents` read-only like `$PWD/.codex`. (#10415, #10524) | bug-fixes |
| WebSocket/ストリーミングフローで中断後に `codex exec` がハングする問題を修正し、中断されたターンがクリーンにシャットダウンされるようになりました。(#10519) | Fixed `codex exec` hanging after interrupt in websocket/streaming flows; interrupted turns now shut down cleanly. (#10519) | bug-fixes |
| レビューモードの承認イベント配線を改善し、`requestApproval` ID が対応するコマンド実行アイテムと一致するようになりました。(#10416) | Fixed review-mode approval event wiring so `requestApproval` IDs align with the corresponding command execution items. (#10416) | bug-fixes |
| 401 エラーの診断を改善し、サーバーメッセージ/本文の詳細に加えて `cf-ray` と `requestId` を含めるようにしました。(#10508) | Improved 401 error diagnostics by including server message/body details plus `cf-ray` and `requestId`. (#10508) | bug-fixes |
| TUI チャット コンポーザーのドキュメントを拡張し、plan/review フローでのスラッシュコマンド引数と添付ファイル処理をカバーするようにしました。(#10269) | Expanded TUI chat composer docs to cover slash-command arguments and attachment handling in plan/review flows. (#10269) | documentation |
| issue テンプレートとラベラー プロンプトを刷新し、CLI/アプリのバグ報告と機能リクエストをより適切に分離できるようにしました。(#10411, #10453, #10548, #10552) | Refreshed issue templates and labeler prompts to better separate CLI/app bug reporting and feature requests. (#10411, #10453, #10548, #10552) | documentation |
| 非推奨の `mcp-types` クレートから `rmcp` ベースのプロトコルタイプ/アダプターへの移行を完了し、レガシークレートを削除しました。(#10356, #10349, #10357) | Completed migration off the deprecated `mcp-types` crate to `rmcp`-based protocol types/adapters, then removed the legacy crate. (#10356, #10349, #10357) | chores |
| セキュリティアドバイザリに対応するために `bytes` 依存関係を更新し、解決されたアドバイザリ設定をクリーンアップしました。(#10525) | Updated the `bytes` dependency for a security advisory and cleaned up resolved advisory configuration. (#10525) | chores |

## 0.94.0

| 日本語 | English | Category |
|--------|---------|----------|
| プランモードがデフォルトで有効化され、プランプロンプト内のインタラクションガイダンスが更新されました。(#10313, #10308, #10329) | Plan mode is now enabled by default with updated interaction guidance in the plan prompt. (#10313, #10308, #10329) | new-features |
| パーソナリティ設定が安定版になりました。デフォルトはフレンドリー、設定キーは `personality`、既存の設定は前方移行されます。(#10305, #10314, #10310, #10307) | Personality configuration is now stable: default is friendly, the config key is `personality`, and existing settings migrate forward. (#10305, #10314, #10310, #10307) | new-features |
| スキルを `.agents/skills` から読み込めるようになり、相対パスの指示が明確化され、ネストされたフォルダマーカーがサポートされました。(#10317, #10282, #10350) | Skills can be loaded from `.agents/skills`, with clearer relative-path instructions and nested-folder markers supported. (#10317, #10282, #10350) | new-features |
| コンソール出力に診断を容易にするランタイムメトリクスが含まれるようになりました。(#10278) | Console output now includes runtime metrics for easier diagnostics. (#10278) | new-features |
| スレッドのアーカイブ解除時にタイムスタンプが更新され、サイドバーの並び順が更新されるようになりました。(#10280) | Unarchiving a thread updates its timestamp so sidebar ordering refreshes. (#10280) | bug-fixes |
| 会話ルールの出力が制限され、プレフィックスルールが重複排除されて繰り返しルールを回避します。(#10351, #10309) | Conversation rules output is capped and prefix rules are deduped to avoid repeated rules. (#10351, #10309) | bug-fixes |
| ターンコンテキストのオーバーライド時に余分な項目が追加されなくなりました。(#10354) | Override turn context no longer appends extra items. (#10354) | bug-fixes |
| npm README 内の壊れた画像リンクを修正しました。(#10303) | Fixed a broken image link in the npm README. (#10303) | documentation |

## 0.93.0

| 日本語 | English | Category |
|--------|---------|----------|
| SOCKS5プロキシリスナーをポリシー強制と設定ゲーティング付きで追加(#9803) | Added an optional SOCKS5 proxy listener with policy enforcement and config gating. (#9803) | new-features |
| プランモードで提案されたプランを専用TUIビューにストリーミング表示、クイックモード切替用の`/plan`ショートカットを機能ゲート付きで追加(#9786, #10103) | Plan mode now streams proposed plans into a dedicated TUI view, plus a feature-gated `/plan` shortcut for quick mode switching. (#9786, #10103) | new-features |
| TUIでコネクタを閲覧する`/apps`と、アプリプロンプト挿入用の`$`を追加(#9728) | Added `/apps` to browse connectors in TUI and `$` insertion for app prompts. (#9728) | new-features |
| app-serverが外部認証モードで動作可能に、ホストアプリからのChatGPT認証トークンを受け入れ、必要に応じて更新をリクエスト(#10012) | App-server can now run in external auth mode, accepting ChatGPT auth tokens from a host app and requesting refreshes when needed. (#10012) | new-features |
| スマート承認をデフォルトで有効化、MCPツール呼び出し時の明示的な承認プロンプトを追加(#10286, #10200) | Smart approvals are now enabled by default, with explicit approval prompts for MCP tool calls. (#10286, #10200) | new-features |
| SQLiteベースのログデータベースを導入、改善されたログクライアント、スレッドIDフィルタリング、保持期間、ヒューリスティックカラーリングを実装(#10086, #10087, #10150, #10151, #10229, #10228) | Introduced a SQLite-backed log database with an improved logs client, thread-id filtering, retention, and heuristic coloring. (#10086, #10087, #10150, #10151, #10229, #10228) | new-features |
| MCPツールの画像出力が、画像ブロックが最初でない場合や部分的に不正な場合でも確実にレンダリング(#9815) | MCP tool image outputs render reliably even when image blocks aren’t first or are partially malformed. (#9815) | bug-fixes |
| 入力履歴の呼び出し時にローカル画像添付とリッチテキスト要素を復元(#9628) | Input history recall now restores local image attachments and rich text elements. (#9628) | bug-fixes |
| ファイル検索がセッションのCWD変更を追跡、マルチルートトラバーサルをサポートし、パフォーマンスを改善(#9279, #9939, #10240) | File search now tracks session CWD changes and supports multi-root traversal with better performance. (#9279, #9939, #10240) | bug-fixes |
| スレッド再開時、最初のターンが実際に開始されるまで`updated_at`を更新しないように変更(#9950) | Resuming a thread no longer updates `updated_at` until the first turn actually starts. (#9950) | bug-fixes |
| シェルスナップショットがstdinを継承しなくなり、起動スクリプトによるハングを回避(#9735) | Shell snapshots no longer inherit stdin, avoiding hangs from startup scripts. (#9735) | bug-fixes |
| WebSocketプロキシが失敗した場合、HTTPにフォールバック(#10139) | Connections fall back to HTTP when WebSocket proxies fail. (#10139) | bug-fixes |
| app-serverのAuthMode使用方法と動作をドキュメント化(#10191) | Documented app-server AuthMode usage and behavior. (#10191) | documentation |
| Rustツールチェーンを1.93にアップグレード(#10080) | Upgraded the Rust toolchain to 1.93. (#10080) | chores |
| リポジトリで使用するpnpmバージョンを更新(#9992, #10161) | Updated pnpm versions used in the repo. (#9992, #10161) | chores |
| Bazelビルドとrunfilesハンドリングの改善、リモートキャッシュ圧縮を含む(#10079, #10098, #10102, #10104) | Bazel build and runfiles handling improvements, including remote cache compression. (#10079, #10098, #10102, #10104) | chores |

## 0.92.0

| 日本語 | English | Category |
|--------|---------|----------|
| API v2スレッドが起動時に動的ツールを注入し、サーバーおよびコアツールパイプライン全体を通じて呼び出し/レスポンスをエンドツーエンドでルーティングできるようになりました。(#9539) | API v2 threads can now inject dynamic tools at startup and route their calls/responses end-to-end through the server and core tool pipeline. (#9539) | new-features |
| アプリサーバーのスレッドリストにフィルタリングを追加し、大量のスレッドセットを閲覧しやすくしました。(#9897) | Added filtering on the thread list in the app server to make large thread sets easier to browse. (#9897) | new-features |
| アーカイブされたロールアウトをアクティブセッションに復元する `thread/unarchive` RPCを導入しました。(#9843) | Introduced a `thread/unarchive` RPC to restore archived rollouts back into active sessions. (#9843) | new-features |
| MCPサーバーが `config.toml` でOAuthスコープを定義できるようになり、ログイン時に `--scopes` を渡す必要性が減少しました。(#9647) | MCP servers can now define OAuth scopes in `config.toml`, reducing the need to pass `--scopes` on each login. (#9647) | new-features |
| マルチエージェントコラボレーションがより高性能で安全になり、エクスプローラーロール、改善されたコラボイベントマッピング、最大深度ガードレールが追加されました。(#9817, #9818, #9918, #9899) | Multi-agent collaboration is more capable and safer, with an explorer role, better collab event mapping, and max-depth guardrails. (#9817, #9818, #9918, #9899) | new-features |
| キャッシュされた `web_search` がデフォルトのクライアント動作になりました。(#9974) | Cached `web_search` is now the default client behavior. (#9974) | new-features |
| メインTokioスレッドでのブロッキング送信を回避することで、高ストリーミングスループット下でのTUIデッドロック/フリーズを修正しました。(#9951) | Fixed a TUI deadlock/freeze under high streaming throughput by avoiding blocking sends on the main Tokio thread. (#9951) | bug-fixes |
| `web_search` ツールがすべてのアクションタイプを処理および表示するようになり、スタックしているように見える代わりに進行中のアクティビティを表示するようになりました。(#9960) | The `web_search` tool now handles and displays all action types, and shows in-progress activity instead of appearing stuck. (#9960) | bug-fixes |
| サブエージェントでのビジーウェイトを排除することで、コラボレーションフローにおける高CPU使用率を削減しました。(#9776) | Reduced high CPU usage in collaboration flows by eliminating busy-waiting on subagents. (#9776) | bug-fixes |
| `codex resume --last --json` で引数の競合エラーなしにプロンプトが正しく解析されるように修正しました。(#9475) | Fixed `codex resume --last --json` so prompts parse correctly without conflicting argument errors. (#9475) | bug-fixes |
| Windowsサンドボックスログがマルチバイトコンテンツを切り詰める際の失敗を防ぐため、UTF-8を安全に処理するようになりました。(#8647) | Windows sandbox logging now handles UTF-8 safely, preventing failures when truncating multibyte content. (#8647) | bug-fixes |
| 無効なツール呼び出しを防ぐため、Plan/Pairモード以外では `request_user_input` が拒否されるようになりました。(#9955) | `request_user_input` is now rejected outside Plan/Pair modes to prevent invalid tool calls. (#9955) | bug-fixes |
| より明確なオンボーディングとワークフローの期待値のため、コントリビューションガイドラインを更新しました。(#9933) | Updated the contribution guidelines for clearer onboarding and workflow expectations. (#9933) | documentation |
| プロトコル/MCPドキュメントを更新し、`thread/unarchive` と更新された `request_user_input` の質問形式を反映しました。(#9843, #9890) | Refreshed protocol/MCP docs to reflect `thread/unarchive` and the updated `request_user_input` question shape. (#9843, #9890) | documentation |
| Homebrewによる自動更新で、警告と曖昧さを回避するため明示的なcaskアップグレードコマンドを使用するようになりました。(#9823) | Self-update via Homebrew now uses an explicit cask upgrade command to avoid warnings and ambiguity. (#9823) | chores |
| リリースパッケージングがバンドルzipを一貫して `dist/` に書き込むようになりました。(#9934) | Release packaging now consistently writes the bundle zip to `dist/`. (#9934) | chores |
| Rustワークスペースの主要な依存関係（`axum`、`tracing`、`globset`、`tokio-test` を含む）を更新しました。(#9880, #9882, #9883, #9884) | Updated key dependencies in the Rust workspace (including `axum`, `tracing`, `globset`, and `tokio-test`). (#9880, #9882, #9883, #9884) | chores |
| フィーチャーステージの命名を公開成熟度ステージに合わせ、開発中の機能に対するより明確な警告を追加しました。(#9929, #9954) | Aligned feature stage naming with public maturity stages and added clearer warnings for underdevelopment features. (#9929, #9954) | chores |

## 0.91.0

| 日本語 | English | Category |
|--------|---------|----------|
| サブエージェントの最大許可数を6に削減し、エージェント展開動作におけるリソース使用とガードレールを強化 | Reduced the maximum allowed number of sub-agents to 6 to tighten resource usage and guardrails in agent fan-out behavior (#9861) | new-features |
| サブエージェントの最大数を半分に変更 | #9861 chore: half max number of sub-agents @jif-oai | new-features |

## 0.90.0

| 日本語 | English | Category |
|--------|---------|----------|
| ネットワークサンドボックスプロキシにポリシー強制機能を追加し、アウトバウンドネットワークアクセスの制御を改善 (#8442) | Added a network sandbox proxy with policy enforcement to better control outbound network access. (#8442) | new-features |
| アプリサーバーとMCP統合を通じたコネクター機能のフェーズ1を導入、新しい設定/ドキュメントも更新 (#9667) | Introduced the first phase of connectors support via the app server and MCP integration, including new config/docs updates. (#9667) | new-features |
| TUIにコラボレーションモードをベータ版として提供開始、計画→実行のハンドオフを明確化し、モード選択(CodingとPlan)を簡素化 (#9690, #9712, #9802, #9834) | Shipped collaboration mode as beta in the TUI, with a clearer plan → execute handoff and simplified mode selection (Coding vs Plan). (#9690, #9712, #9802, #9834) | new-features |
| エフェメラルスレッドを追加し、生成されたスレッドのコラボレーションツール来歴メタデータを改善 (#9765, #9769) | Added ephemeral threads and improved collaboration tool provenance metadata for spawned threads. (#9765, #9769) | new-features |
| WebSocket接続でプロキシ設定をサポート (#9719) | WebSocket connections now support proxy configuration. (#9719) | new-features |
| マルチエージェントの制限を厳格化 | More strict limitation on multi-agents | new-features |
| 複数行のクォート引数に対する実行ポリシーのパース処理を修正 (#9565) | Fixed exec policy parsing for multiline quoted arguments. (#9565) | new-features |
| `--yolo`フラグ使用時、リポジトリ外での失敗ではなくgitリポジトリチェックをスキップするように変更 (#9590) | `--yolo` now skips the git repository check instead of failing outside a repo. (#9590) | new-features |
| 順序不同のイベント処理と、作業ディレクトリが異なる場合のプロンプト表示により、レジューム機能の信頼性を向上 (#9512, #9731) | Improved resume reliability by handling out-of-order events and prompting for the working directory when it differs. (#9512, #9731) | new-features |
| カーソルが要素の左端にある場合、Backspaceキーでテキスト要素が削除されないように修正 (#9630) | Backspace no longer deletes a text element when the cursor is at the element’s left edge. (#9630) | new-features |
| 設定ロードエラーのメッセージをより明確で実行可能な内容に改善 (#9746) | Config loading errors are clearer and more actionable across surfaces. (#9746) | new-features |
| デフォルトモデル選択が、フィルタリングされたプリセットを尊重し、無効なデフォルトを回避するように修正 (#9782) | Default model selection now respects filtered presets to avoid invalid defaults. (#9782) | new-features |
| 実験的コラボレーションプロンプトテンプレートのタイポを修正 (#9716) | Corrected a typo in the experimental collaboration prompt template. (#9716) | new-features |
| 新しいコネクター設定画面のドキュメントを追加 (#9667) | Added documentation for the new connectors configuration surface. (#9667) | new-features |
| バンドルされたモデルカタログ/プリセットを更新 (#9726) | Refreshed the bundled model catalog/presets. (#9726) | new-features |
| Node 24互換性のためGitHub Actionsを更新 (#9722) | Updated GitHub Actions for Node 24 compatibility. (#9722) | new-features |
| #9715 feat: `codex features list`のフォーマットを修正 @bolinfest | #9715 feat: fix formatting of `codex features list` @bolinfest | new-features |
| #9716 experimental_prompt.mdのタイポを修正 @iudizm | #9716 Fix typo in experimental_prompt.md @iudizm | new-features |
| #9719 feat: WebSocket接続のプロキシサポートを追加 @apanasenko-oai | #9719 feat: support proxy for ws connection @apanasenko-oai | new-features |
| #9712 TUI: 計画の実装を促し、実行モードに切り替え @charley-oai | #9712 TUI: prompt to implement plan and switch to Execute @charley-oai | new-features |
| #9713 ユーザースコープの代わりにマシンスコープをdpapiに使用 @iceweasel-oai | #9713 use machine scope instead of user scope for dpapi. @iceweasel-oai | new-features |
| #9726 models.jsonを更新 @github-actions | #9726 Update models.json @github-actions | new-features |
| #9667 [connectors] コネクターサポート第1弾 - アプリサーバーとMCP @mzeng-openai | #9667 [connectors] Support connectors part 1 - App server & MCP @mzeng-openai | new-features |
| #9674 feat(app-server) `personality`を公開 @dylan-hurd-oai | #9674 feat(app-server) Expose `personality` @dylan-hurd-oai | new-features |
| #9733 計画と推論努力のプロンプトを変更 @aibrahim-oai | #9733 Change the prompt for planning and reasoning effort @aibrahim-oai | new-features |
| #9730 タスク実行中はモード切替ヒントを非表示に @charley-oai | #9730 Hide mode cycle hint while a task is running @charley-oai | new-features |
| #9720 feat: otelメタデータタグとしてセッションソースを追加 @alexsong-oai | #9720 feat: add session source as otel metadata tag @alexsong-oai | new-features |
| #9565 複数行のクォート引数に対する実行ポリシーのパース処理を修正 @jdsalasca | #9565 Fix execpolicy parsing for multiline quoted args @jdsalasca | new-features |
| #9745 chore: クォート削減のため一部に生文字列を使用 @bolinfest | #9745 chore: use some raw strings to reduce quoting @bolinfest | new-features |
| #9753 nit: rcソーシングでPWDを除外 @jif-oai | #9753 nit: exclude PWD for rc sourcing @jif-oai | new-features |
| #9690 feat: コラボレーションのTUIベータ版 @jif-oai | #9690 feat: tui beta for collab @jif-oai | new-features |
| #9116 履歴/レジューム間でテキスト要素の範囲と添付画像を保持 @charley-oai | #9116 Persist text element ranges and attached images across history/resume @charley-oai | new-features |
| #9777 計画モードのプロンプトを変更 @aibrahim-oai | #9777 plan mode prompt change @aibrahim-oai | new-features |
| #9590 fix(exec): --yoloフラグ使用時、gitリポジトリチェックをスキップ @zerone0x | #9590 fix(exec): skip git repo check when --yolo flag is used @zerone0x | new-features |
| #9722 Node 24互換性のためGitHub Actionsをアップグレード @salmanmkc | #9722 Upgrade GitHub Actions for Node 24 compatibility @salmanmkc | new-features |
| #9611 設定ロードをスキップした場合の警告を出力 @gt-oai | #9611 Print warning if we skip config loading @gt-oai | new-features |
| #9782 フィルタリングされたプリセットからデフォルトモデルを選択 @aibrahim-oai | #9782 Select default model from filtered presets @aibrahim-oai | new-features |
| #9512 ユーザーイベントがヘッドより後に出現する場合のレジュームピッカーを修正 @jdsalasca | #9512 Fix resume picker when user event appears after head @jdsalasca | new-features |
| #9787 defs.bzlから古いTODOコメントを削除 @jcoens-openai | #9787 Remove stale TODO comment from defs.bzl @jcoens-openai | new-features |
| #9700 スキルのロードを継続 @gt-oai | #9700 still load skills @gt-oai | new-features |
| #9791 信頼されていないルールをロード @gt-oai | #9791 Load untrusted rules @gt-oai | new-features |
| #9707 winget向けに、サンドボックスヘルパーバイナリをメインzipにバンドル @iceweasel-oai | #9707 bundle sandbox helper binaries in main zip, for winget. @iceweasel-oai | new-features |
| #9792 Chore: ヘッダーからモードを削除 @aibrahim-oai | #9792 Chore: remove mode from header @aibrahim-oai | new-features |
| #9793 コラボレーションモードを構造体に変更 @aibrahim-oai | #9793 change collaboration mode to struct @aibrahim-oai | new-features |
| #8442 feat: ネットワークサンドボックスプロキシを導入 @viyatb-oai | #8442 feat: introducing a network sandbox proxy @viyatb-oai | new-features |
| #9802 コーディングモードを追加し、コーディングと計画のみを表示 @aibrahim-oai | #9802 Have a coding mode and only show coding and plan @aibrahim-oai | new-features |
| #9746 設定エラーメッセージのさらなる改善 @etraut-openai | #9746 Another round of improvements for config error messages @etraut-openai | new-features |
| #9812 実験的プロンプトからバットマンの参照を削除 @charley-oai | #9812 Remove batman reference from experimental prompt @charley-oai | new-features |
| #9769 feat: コラボレーションツールのスレッド生成ソースを追加 @jif-oai | #9769 feat: add thread spawn source for collab tools @jif-oai | new-features |
| #9765 feat: エフェメラルスレッド @jif-oai | #9765 feat: ephemeral threads @jif-oai | new-features |
| #9819 fix: libccリンクを修正 @jif-oai | #9819 fix: libcc link @jif-oai | new-features |
| #9820 fix: muslビルドを修正 @jif-oai | #9820 fix: musl build @jif-oai | new-features |
| #9316 fix(windows-sandbox): 読み取り後にリクエストファイルを削除 @MaxMiksa | #9316 fix(windows-sandbox): remove request files after read @MaxMiksa | new-features |
| #9630 カーソルが要素の左端にある場合、Backspaceキーでテキスト要素が削除されないように修正 @charley-oai | #9630 Prevent backspace from removing a text element when the cursor is at the element’s left edge @charley-oai | new-features |
| #9840 "fix: musl build"をリバート @aibrahim-oai | #9840 Revert "fix: musl build" @aibrahim-oai | new-features |
| #9778 ウェルカムアニメーションのブレークポイントを37行に引き上げ @mzeng-openai | #9778 Raise welcome animation breakpoint to 37 rows @mzeng-openai | new-features |
| #9731 異なるcwdからセッションをレジュームする際、cwd選択を確認 @charley-oai | #9731 Ask for cwd choice when resuming session from different cwd @charley-oai | new-features |
| #9841 "fix: libcc link"をリバート @aibrahim-oai | #9841 Revert "fix: libcc link" @aibrahim-oai | new-features |
| #9806 ベース設定を変更せずにコラボレーションモードマスクを使用 @aibrahim-oai | #9806 Use collaboration mode masks without mutating base settings @aibrahim-oai | new-features |
| #9834 コラボレーションをベータ版としてマーク @pakrym-oai | #9834 Mark collab as beta @pakrym-oai | new-features |
| #9847 "Revert "fix: musl build""をリバート @jif-oai | #9847 Revert "Revert "fix: musl build"" @jif-oai | new-features |
| #9855 feat: エージェント数に上限を設定 @jif-oai | #9855 feat: cap number of agents @jif-oai | new-features |

## 0.89.0

| 日本語 | English | Category |
|--------|---------|----------|
| 互換性維持のため `/approvals` を残しつつ、より短い承認セットを持つ `/permissions` コマンドを追加。(#9561) | Added a `/permissions` command with a shorter approval set while keeping `/approvals` for compatibility. (#9561) | new-features |
| 個別のスキルを有効/無効にできる `/skill` UI を追加。(#9627) | Added a `/skill` UI to enable or disable individual skills. (#9627) | new-features |
| ファジーマッチよりも完全一致と前方一致を優先することで、スラッシュコマンドの選択を改善。(#9629) | Improved slash-command selection by prioritizing exact and prefix matches over fuzzy matches. (#9629) | new-features |
| アプリサーバーが `thread/read` をサポートし、`thread/list` でアーカイブされたスレッドをフィルタリング可能に。(#9569, #9571) | App server now supports `thread/read` and can filter archived threads in `thread/list`. (#9569, #9571) | new-features |
| アプリサーバークライアントが階層的な `config.toml` 解決をサポートし、`config/read` が指定された cwd から有効な設定を計算可能に。(#9510) | App server clients now support layered `config.toml` resolution and `config/read` can compute effective config from a given cwd. (#9510) | new-features |
| リリース成果物に公開された設定スキーマの安定した URL を含めるように。(#9572) | Release artifacts now include a stable URL for the published config schema. (#9572) | new-features |
| `~//...` のようなパスで HOME からのチルダ展開のエスケープを防止。(#9621) | Prevented tilde expansion from escaping HOME on paths like `~//...`. (#9621) | bug-fixes |
| TUI のターン計測をアシスタントメッセージ間でリセットし、経過時間が最新の応答を反映するように。(#9599) | TUI turn timing now resets between assistant messages so elapsed time reflects the latest response. (#9599) | bug-fixes |
| MCP サブコマンドのドキュメントを現在の CLI 動作に合わせて更新。(#9622) | Updated MCP subcommand docs to match current CLI behavior. (#9622) | documentation |
| `skills/list` プロトコルの README 例を最新のレスポンス形式に合わせて更新。(#9623) | Refreshed the `skills/list` protocol README example to match the latest response shape. (#9623) | documentation |
| TUI2 実験とその関連設定/ドキュメントを削除し、Codex をターミナルネイティブ UI に維持。(#9640) | Removed the TUI2 experiment and its related config/docs, keeping Codex on the terminal-native UI. (#9640) | chores |

## 0.88.0

| 日本語 | English | Category |
|--------|---------|----------|
| ヘッドレス環境でデバイスコード認証をスタンドアロンのフォールバックとして追加 (#9333) | Added device-code auth as a standalone fallback in headless environments. (#9333) | new-features |
| 信頼されたフォルダからのみ設定を読み込み、シンボリックリンクされた `config.toml` の解決を修正 (#9533, #9445) | Load configs from trusted folders only and fix symlinked `config.toml` resolution. (#9533, #9445) | new-features |
| Azure エンドポイントの無効な入力エラーを修正 (#9387) | Fixed Azure endpoint invalid input errors. (#9387) | new-features |
| コアランタイムのメモリリークを解決 (#9543) | Resolved a memory leak in core runtime. (#9543) | new-features |
| 中断されたターンが繰り返されないように修正 (#9043) | Prevented interrupted turns from repeating. (#9043) | new-features |
| WSL TUI の画像ペースト機能の退行を修正 (#9473) | Fixed WSL TUI image paste regression. (#9473) | new-features |
| MCP ドキュメントのリンクを現在の宛先に更新 (#9490) | Updated MCP documentation link to the current destination. (#9490) | new-features |
| ドキュメント内の "Multi-agents" の表記ミスを修正 (#9542) | Corrected a “Multi-agents” naming typo in docs. (#9542) | new-features |
| コラボレーションモード用の開発者向け手順を追加 (#9424) | Added developer instructions for collaboration modes. (#9424) | new-features |
| Rust 1.92 にアップグレードし、コア Rust 依存関係を更新 (#8860, #9465, #9466, #9467, #9468, #9469) | Upgraded to Rust 1.92 and refreshed core Rust dependencies. (#8860, #9465, #9466, #9467, #9468, #9469) | new-features |
| #9373 修正: 不安定なテストを修正 @jif-oai | #9373 fix: flaky tests @jif-oai | new-features |
| #9333 [device-auth] ヘッドレス環境が検出された際のスタンドアロンオプションとしてデバイスコード認証を追加 @mzeng-openai | #9333 [device-auth] Add device code auth as a standalone option when headless environment is detected. @mzeng-openai | new-features |
| #9352 `codex exec resume --last` を `codex resume --last` と一貫性のある動作に変更 @etraut-openai | #9352 Made `codex exec resume --last` consistent with `codex resume --last` @etraut-openai | new-features |
| #9324 codex cloud list を追加 @nornagon-openai | #9324 add codex cloud list @nornagon-openai | new-features |
| #9332 ターンごとのターンステートスティッキールーティング @aibrahim-oai | #9332 Turn-state sticky routing per turn @aibrahim-oai | new-features |
| #9364 機能: ツール呼び出し時間メトリクス @jif-oai | #9364 feat: tool call duration metric @jif-oai | new-features |
| #8860 chore: Rust 1.92.0 にアップグレード @viyatb-oai | #8860 chore: upgrade to Rust 1.92.0 @viyatb-oai | new-features |
| #9385 機能: 現在のセッションを /fork でフォーク(セッションピッカーを開かない) @apanasenko-oai | #9385 feat: /fork the current session instead of opening session picker @apanasenko-oai | new-features |
| #9247 機能(app-server, core): created_at または updated_at でスレッドを返す @owenlin0 | #9247 feat(app-server, core): return threads by created_at or updated_at @owenlin0 | new-features |
| #9330 機能: /status でフォーク元のセッション ID を表示 @apanasenko-oai | #9330 feat: show forked from session id in /status @apanasenko-oai | new-features |
| #9340 コラボレーションモードを導入 @aibrahim-oai | #9340 Introduce collaboration modes @aibrahim-oai | new-features |
| #9328 設定/API 経由でスキルの有効化/無効化をサポート @xl-openai | #9328 Support enable/disable skill via config/api. @xl-openai | new-features |
| #9408 ターンに collaboration_mode オーバーライドを追加 @aibrahim-oai | #9408 Add collaboration_mode override to turns @aibrahim-oai | new-features |
| #9400 修正(codex-api): invalid_prompt を再試行不可として扱う @fouad-openai | #9400 fix(codex-api): treat invalid_prompt as non-retryable @fouad-openai | new-features |
| #9401 ロールバック確認までバックトラックトリミングを延期 @aibrahim-oai | #9401 Defer backtrack trim until rollback confirms @aibrahim-oai | new-features |
| #9414 修正: unified_exec::tests::unified_exec_timeouts でより一意な一致値を使用 @ahornby | #9414 fix unified_exec::tests::unified_exec_timeouts to use a more unique match value @ahornby | new-features |
| #9421 コラボレーションプリセットを公開 @aibrahim-oai | #9421 Expose collaboration presets @aibrahim-oai | new-features |
| #9422 chore(core) instructions モジュールを作成 @dylan-hurd-oai | #9422 chore(core) Create instructions module @dylan-hurd-oai | new-features |
| #9423 chore(instructions) 未使用の SessionMeta.instructions フィールドを削除 @dylan-hurd-oai | #9423 chore(instructions) Remove unread SessionMeta.instructions field @dylan-hurd-oai | new-features |
| #9424 コラボレーション開発者向け手順を追加 @aibrahim-oai | #9424 Add collaboration developer instructions @aibrahim-oai | new-features |
| #9425 検索でスラッシュコマンドの順序を維持 @aibrahim-oai | #9425 Preserve slash command order in search @aibrahim-oai | new-features |
| #9059 tui: バックトラックプレビューで前方ナビゲーションを許可 @slkzgm | #9059 tui: allow forward navigation in backtrack preview @slkzgm | new-features |
| #9443 コラボレーションモードのテストプロンプトを追加 @aibrahim-oai | #9443 Add collaboration modes test prompts @aibrahim-oai | new-features |
| #9457 修正(tui2): /mcp の実行時に別のイベントがフラッシュをトリガーするまで出力が表示されない問題を修正 @bolinfest | #9457 fix(tui2): running /mcp was not printing any output until another event triggered a flush @bolinfest | new-features |
| #9445 config.toml のシンボリックリンクサポートを修正 @etraut-openai | #9445 Fixed symlink support for config.toml @etraut-openai | new-features |
| #9466 chore(deps): log を 0.4.28 から 0.4.29 に更新 in /codex-rs @dependabot | #9466 chore(deps): bump log from 0.4.28 to 0.4.29 in /codex-rs @dependabot | new-features |
| #9467 chore(deps): tokio を 1.48.0 から 1.49.0 に更新 in /codex-rs @dependabot | #9467 chore(deps): bump tokio from 1.48.0 to 1.49.0 in /codex-rs @dependabot | new-features |
| #9468 chore(deps): arc-swap を 1.7.1 から 1.8.0 に更新 in /codex-rs @dependabot | #9468 chore(deps): bump arc-swap from 1.7.1 to 1.8.0 in /codex-rs @dependabot | new-features |
| #9469 chore(deps): ctor を 0.5.0 から 0.6.3 に更新 in /codex-rs @dependabot | #9469 chore(deps): bump ctor from 0.5.0 to 0.6.3 in /codex-rs @dependabot | new-features |
| #9465 chore(deps): chrono を 0.4.42 から 0.4.43 に更新 in /codex-rs @dependabot | #9465 chore(deps): bump chrono from 0.4.42 to 0.4.43 in /codex-rs @dependabot | new-features |
| #9473 WSL での画像ペーストに関する TUI の退行を修正 @etraut-openai | #9473 Fixed TUI regression related to image paste in WSL @etraut-openai | new-features |
| #9382 機能: ターン全体のタイマーメトリクス @jif-oai | #9382 feat: timer total turn metrics @jif-oai | new-features |
| #9478 機能: `/new` で全スレッドを閉じる @jif-oai | #9478 feat: close all threads in `/new` @jif-oai | new-features |
| #9477 機能: 非 tty の子プロセスをデタッチ @jif-oai | #9477 feat: detach non-tty childs @jif-oai | new-features |
| #9479 プロンプト 3 @jif-oai | #9479 prompt 3 @jif-oai | new-features |
| #9387 Azure エンドポイントの無効な入力エラーを修正 @etraut-openai | #9387 Fix invalid input error on Azure endpoint @etraut-openai | new-features |
| #9463 未使用のプロトコルコラボレーションモードプロンプトを削除 @aibrahim-oai | #9463 Remove unused protocol collaboration mode prompts @aibrahim-oai | new-features |
| #9487 chore: 警告メトリクス @jif-oai | #9487 chore: warning metric @jif-oai | new-features |
| #9490 MCP ドキュメントへの古いリンクを修正 @etraut-openai | #9490 Fixed stale link to MCP documentation @etraut-openai | new-features |
| #9461 TUI: コラボレーションモード UX + 有効時は常に `UserTurn` を送信 @aibrahim-oai | #9461 TUI: collaboration mode UX + always submit `UserTurn` when enabled @aibrahim-oai | new-features |
| #9472 機能: ユーザー入力リクエストツール @shijie-oai | #9472 Feat: request user input tool @shijie-oai | new-features |
| #9402 ターンごとに reasoning-included を適用 @aibrahim-oai | #9402 Act on reasoning-included per turn @aibrahim-oai | new-features |
| #9496 chore: beta と experimental を修正 @jif-oai | #9496 chore: fix beta VS experimental @jif-oai | new-features |
| #9495 機能: プランモードのプロンプトを更新 @shijie-oai | #9495 Feat: plan mode prompt update @shijie-oai | new-features |
| #9451 tui: スキルポップアップがアクティブな時は Esc による中断を回避 @prateek-oai | #9451 tui: avoid Esc interrupt when skill popup active @prateek-oai | new-features |
| #9497 tui を UserTurn を使用するように移行 @aibrahim-oai | #9497 Migrate tui to use UserTurn @aibrahim-oai | new-features |
| #9427 修正(core) SessionMeta で base_instructions を保持 @dylan-hurd-oai | #9427 fix(core) Preserve base_instructions in SessionMeta @dylan-hurd-oai | new-features |
| #9393 TUI 入力と履歴を通してテキスト要素を保持 @charley-oai | #9393 Persist text elements through TUI input and history @charley-oai | new-features |
| #9407 修正(tui) ユーザーメッセージのライトモード背景を修正 @dylan-hurd-oai | #9407 fix(tui) fix user message light mode background @dylan-hurd-oai | new-features |
| #9525 chore: experimental に collab を追加 @jif-oai | #9525 chore: collab in experimental @jif-oai | new-features |
| #9374 nit: タスクが実行されていない場合はターミナルインタラクションをレンダリングしない @jif-oai | #9374 nit: do not render terminal interactions if no task running @jif-oai | new-features |
| #9529 機能: 追加タグ付きのタイマーを記録 @jif-oai | #9529 feat: record timer with additional tags @jif-oai | new-features |
| #9528 機能: リモートモデルのメトリクス @jif-oai | #9528 feat: metrics on remote models @jif-oai | new-features |
| #9527 機能: シェルスナップショットのメトリクス @jif-oai | #9527 feat: metrics on shell snapshot @jif-oai | new-features |
| #9533 信頼されたフォルダからのみ設定を読み込む @gt-oai | #9533 Only load config from trusted folders @gt-oai | new-features |
| #9409 機能: ws 接続のプロキシをサポート @apanasenko-oai | #9409 feat: support proxy for ws connection @apanasenko-oai | new-features |
| #9507 Tui: モデルと effort の代わりにコラボレーションモードを使用 @aibrahim-oai | #9507 Tui: use collaboration mode instead of model and effort @aibrahim-oai | new-features |
| #9193 修正: `writable_roots` が非 Windows OS でホームディレクトリシンボルを認識しない @tiffanycitra | #9193 fix: `writable_roots` doesn't recognize home directory symbol in non-windows OS @tiffanycitra | new-features |
| #9542 機能名の誤字を 'Mult-agents' から 'Multi-agents' に修正 @simonw | #9542 Fix typo in feature name from 'Mult-agents' to 'Multi-agents' @simonw | new-features |
| #9459 機能(personality) model_personality 設定を導入 @dylan-hurd-oai | #9459 feat(personality) introduce model_personality config @dylan-hurd-oai | new-features |
| #9543 修正: メモリリーク問題 @jif-oai | #9543 fix: memory leak issue @jif-oai | new-features |
| #9509 プロファイルでの設定マージ問題を修正 @etraut-openai | #9509 Fixed config merging issue with profiles @etraut-openai | new-features |
| #9043 修正: 中断されたターンの繰り返しを防止 @swordfish444 | #9043 fix: prevent repeating interrupted turns @swordfish444 | new-features |
| #9553 修正(core): 再開時にファイルの mtime を更新しない @owenlin0 | #9553 fix(core): don't update the file's mtime on resume @owenlin0 | new-features |
| #9552 英語文字列をハードコードせずにシステム SID を検索 @iceweasel-oai | #9552 lookup system SIDs instead of hardcoding English strings. @iceweasel-oai | new-features |
| #9314 修正(windows-sandbox): writable roots 配下の .git ファイルエントリを拒否 @MaxMiksa | #9314 fix(windows-sandbox): deny .git file entries under writable roots @MaxMiksa | new-features |
| #9319 修正(windows-sandbox): audit roots の PATH リストエントリを解析 @MaxMiksa | #9319 fix(windows-sandbox): parse PATH list entries for audit roots @MaxMiksa | new-features |
| #9547 リモートモデルをマージ @aibrahim-oai | #9547 merge remote models @aibrahim-oai | new-features |
| #9545 完全な(部分的でない)TextElement プレースホルダーアクセサーを追加 @charley-oai | #9545 Add total (non-partial) TextElement placeholder accessors @charley-oai | new-features |
| #9532 修正(cli): bin/codex.js に実行権限を追加 @zerone0x | #9532 fix(cli): add execute permission to bin/codex.js @zerone0x | new-features |
| #9162 キューに入れられたメッセージの UI スペーシングを改善 @charley-oai | #9162 Improve UI spacing for queued messages @charley-oai | new-features |
| #9554 リモートモデルを有効化 @aibrahim-oai | #9554 Enable remote models @aibrahim-oai | new-features |
| #9558 タスクが実行中の時のみキューに入れる @aibrahim-oai | #9558 queue only when task is working @aibrahim-oai | new-features |
| #8590 修正(core): Windows での強制削除に承認を要求 @hdcodedev | #8590 fix(core): require approval for force delete on Windows @hdcodedev | new-features |
| #9293 [codex-tui] ターミナルが dumb の場合は終了 @jmickey-oai | #9293 [codex-tui] exit when terminal is dumb @jmickey-oai | new-features |
| #9562 機能(tui2): /experimental メニューを追加 @joshka-oai | #9562 feat(tui2): add /experimental menu @joshka-oai | new-features |
| #9563 修正: bminor/bash が GitHub にないため bolinfest/bash を使用 @bolinfest | #9563 fix: bminor/bash is no longer on GitHub so use bolinfest/bash instead @bolinfest | new-features |
| #9568 設定の前にセッションヘッダーを表示 @aibrahim-oai | #9568 Show session header before configuration @aibrahim-oai | new-features |
| #9555 機能: experimental_instructions_file を model_instructions_file に名称変更 @bolinfest | #9555 feat: rename experimental_instructions_file to model_instructions_file @bolinfest | new-features |
| #9518 プロンプト展開: テキスト要素を保持 @charley-oai | #9518 Prompt Expansion: Preserve Text Elements @charley-oai | new-features |
| #9560 Execute と Custom でユーザー質問ツールを拒否 @charley-oai | #9560 Reject ask user question tool in Execute and Custom @charley-oai | new-features |
| #9575 機能: スキル注入カウンターメトリクスを追加 @alexsong-oai | #9575 feat: add skill injected counter metric @alexsong-oai | new-features |
| #9578 機能: WebSocket トランスポートの自動有効化 @pakrym-oai | #9578 Feature to auto-enable websockets transport @pakrym-oai | new-features |
| #9587 pnpm を実行して CI を修正 @aibrahim-oai | #9587 fix CI by running pnpm @aibrahim-oai | new-features |
| #9586 `just fix` で承認を求めない @aibrahim-oai | #9586 don't ask for approval for `just fix` @aibrahim-oai | new-features |
| #9585 request-user-input オーバーレイを追加 @aibrahim-oai | #9585 Add request-user-input overlay @aibrahim-oai | new-features |
| #9596 メモ記入後の質問での上下移動を修正 @aibrahim-oai | #9596 fix going up and down on questions after writing notes @aibrahim-oai | new-features |
| #9483 機能: 最大スレッド数設定 @jif-oai | #9483 feat: max threads config @jif-oai | new-features |
| #9598 機能: ユーザーシェルに生のコマンドを表示 @jif-oai | #9598 feat: display raw command on user shell @jif-oai | new-features |
| #9594 "conversation.turn.count" メトリクス名に "codex." プレフィックスを追加 @etraut-openai | #9594 Added "codex." prefix to "conversation.turn.count" metric name @etraut-openai | new-features |
| #9600 機能: 非同期シェルスナップショット @jif-oai | #9600 feat: async shell snapshot @jif-oai | new-features |
| #9602 修正: ターミナルインタラクションの TUI の細かい調整 @jif-oai | #9602 fix: nit tui on terminal interactions @jif-oai | new-features |
| #9551 nit: collab tui を改善 @jif-oai | #9551 nit: better collab tui @jif-oai | new-features |

## 0.87.0

| 日本語 | English | Category |
|--------|---------|----------|
| ユーザーメッセージのメタデータ（テキスト要素とバイト範囲）が protocol/app-server/core を通じて維持されるようになり、履歴再構築時に UI 注釈が保持されるようになりました。(#9331) | User message metadata (text elements and byte ranges) now round-trips through protocol/app-server/core so UI annotations can survive history rebuilds. (#9331) | new-features |
| コラボレーション待機呼び出しが 1 回のリクエストで複数の ID をブロックできるようになり、マルチスレッド調整が簡素化されました。(#9294) | Collaboration wait calls can block on multiple IDs in one request, simplifying multi-thread coordination. (#9294) | new-features |
| ユーザーシェルコマンドがユーザースナップショット下で実行されるようになり、エイリアスとシェル設定が尊重されるようになりました。(#9357) | User shell commands now run under the user snapshot so aliases and shell config are honored. (#9357) | new-features |
| TUI が、生成された/未購読のスレッドからの承認リクエストを表示するようになりました。(#9232) | The TUI now surfaces approval requests from spawned/unsubscribed threads. (#9232) | new-features |
| 圧縮時のトークン推定が正確になり、長時間セッション中の予算管理が改善されました。(#9337) | Token estimation during compaction is now accurate, improving budgeting during long sessions. (#9337) | bug-fixes |
| MCP CallToolResult が `content` と `structuredContent` の両方に `threadId` を含むようになり、互換性のために定義された出力スキーマを返すようになりました。(#9338) | MCP CallToolResult now includes `threadId` in both `content` and `structuredContent`, and returns a defined output schema for compatibility. (#9338) | bug-fixes |
| TUI の「作業時間」セパレーターが、実際の作業が発生した後にのみ表示されるようになりました。(#8958) | The TUI “Worked for” separator only appears after actual work has occurred. (#8958) | bug-fixes |
| パイプされた非 PTY コマンドが標準入力待ちでハングしなくなりました。(#9369) | Piped non-PTY commands no longer hang waiting on stdin. (#9369) | bug-fixes |
| MCP インターフェースドキュメントが、構造化出力スキーマと `threadId` の動作を反映するように更新されました。(#9338) | MCP interface docs updated to reflect structured output schema and `threadId` behavior. (#9338) | documentation |
| Windows ビルドで PowerShell UTF-8 機能がデフォルトで有効化されました。(#9195) | Windows builds enable the PowerShell UTF-8 feature by default. (#9195) | chores |

## 0.86.0

| 日本語 | English | Category |
|--------|---------|----------|
| スキルメタデータを `SKILL.toml` で定義可能に(名前、説明、アイコン、ブランドカラー、デフォルトプロンプト)、アプリサーバーとTUIで利用可能 (#9125) | Skill metadata can now be defined in `SKILL.toml` (names, descriptions, icons, brand color, default prompt) and surfaced in the app server and TUI (#9125) | new-features |
| クライアントがウェブ検索を明示的に無効化し、ヘッダーで適格性を通知してサーバー側のロールアウト制御と連携 (#9249) | Clients can explicitly disable web search and signal eligibility via a header to align with server-side rollout controls (#9249) | new-features |
| MCPエリシテーションの承認時に、コンテンツを期待するサーバーのためnullではなく空のJSONペイロードを送信 (#9196) | Accepting an MCP elicitation now sends an empty JSON payload instead of null to satisfy servers expecting content (#9196) | bug-fixes |
| 入力プロンプトのプレースホルダーをイタリック体から通常体に戻し、ターミナルレンダリング問題を回避 (#9307) | Input prompt placeholder styling is back to non-italic to avoid terminal rendering issues (#9307) | bug-fixes |
| 空のペーストイベントでクリップボード画像読み取りをトリガーしないように修正 (#9318) | Empty paste events no longer trigger clipboard image reads (#9318) | bug-fixes |
| 統合execがバックグラウンドプロセスをクリーンアップし、リスナー停止後の遅延End イベントを防止 (#9304) | Unified exec cleans up background processes to prevent late End events after listeners stop (#9304) | bug-fixes |
| オーケストレーターのプロンプトを更新し、内部ルーティング動作を改善 (#9301) | Refresh the orchestrator prompt to improve internal routing behavior (#9301) | chores |
| 冗長な `needs_follow_up` エラーログを削減 (#9272) | Reduce noisy `needs_follow_up` error logging (#9272) | chores |

## 0.85.0

| 日本語 | English | Category |
|--------|---------|----------|
| App-server v2 がコラボレーションツール呼び出しを turn ストリーム内の item イベントとして送信するようになり、クライアントがエージェントの協調動作をリアルタイムでレンダリング可能に (#9213) | App-server v2 now emits collaboration tool calls as item events in the turn stream, so clients can render agent coordination in real time. (#9213) | new-features |
| コラボレーションツールでエージェント制御が強化され、`spawn_agent` がエージェントロールプリセットを受け入れ、`send_input` が実行中のエージェントをメッセージ配信前に中断可能に (#9275, #9276) | Collaboration tools gained richer agent control: `spawn_agent` accepts an agent role preset, and `send_input` can optionally interrupt a running agent before delivering the message. (#9275, #9276) | new-features |
| `/models` メタデータにアップグレード移行用のマークダウンが含まれ、クライアントがモデルアップグレードを提案する際により豊富なガイダンスを表示可能に (#9219) | `/models` metadata now includes upgrade migration markdown so clients can display richer guidance when suggesting model upgrades. (#9219) | new-features |
| [取り消し] Linux サンドボックスがユーザー名前空間が利用できない場合に Landlock のみの制限にフォールバックし、サンドボックスルールを適用する前に `no_new_privs` を設定 (#9250) | [revert] Linux sandboxing now falls back to Landlock-only restrictions when user namespaces are unavailable, and sets `no_new_privs` before applying sandbox rules. (#9250) | new-features |
| `codex resume --last` が現在の作業ディレクトリを尊重し、`--all` が明示的なオーバーライドとして機能 (#9245) | `codex resume --last` now respects the current working directory, with `--all` as an explicit override. (#9245) | new-features |
| 標準入力プロンプトのデコードが BOM/UTF-16 に対応し、無効なエンコーディングに対してより明確なエラーを提供 (#9151) | Stdin prompt decoding now handles BOMs/UTF-16 and provides clearer errors for invalid encodings. (#9151) | new-features |
| #9219 `model_info` に `migration_markdown` を追加 @aibrahim-oai | #9219 Add `migration_markdown` in `model_info` @aibrahim-oai | new-features |
| #9250 修正: ユーザー名前空間が利用不可の場合に Landlock のみにフォールバックし、PR_SET_NO_NEW_PRIVS を早期に設定 @viyatb-oai | #9250 fix: fallback to Landlock-only when user namespaces unavailable and set PR_SET_NO_NEW_PRIVS early @viyatb-oai | new-features |
| #9213 機能追加: コラボツールの app-server イベントマッピング @jif-oai | #9213 feat: collab tools app-server event mapping @jif-oai | new-features |
| #9275 機能追加: コラボツールにエージェントロールを追加 @jif-oai | #9275 feat: add agent roles to collab tools @jif-oai | new-features |
| #9276 機能追加: `send_input` に中断機能を追加 @jif-oai | #9276 feat: add interrupt capabilities to `send_input` @jif-oai | new-features |
| #9209 機能追加: イベント送信用の基本的な TUI @jif-oai | #9209 feat: basic tui for event emission @jif-oai | new-features |
| #9245 `codex resume --last` が現在の cwd を尊重するように変更 @etraut-openai | #9245 Changed `codex resume --last` to honor the current cwd @etraut-openai | new-features |
| #9207 MCP 無効化理由を伝播 @gt-oai | #9207 Propagate MCP disabled reason @gt-oai | new-features |
| #9151 修正(exec): 標準入力プロンプトのデコードを改善 @liqiongyu | #9151 fix(exec): improve stdin prompt decoding @liqiongyu | new-features |
| #9300 取り消し: Landlock 以前の bind マウント適用を削除 @viyatb-oai | #9300 revert: remove pre-Landlock bind mounts apply @viyatb-oai | new-features |

## 0.84.0

| 日本語 | English | Category |
|--------|---------|----------|
| テキスト要素に追加のメタデータを含めるように Rust プロトコル/型を拡張し、より豊かなクライアントレンダリングとスキーマの進化を実現 (#9235) | Extend the Rust protocol/types to include additional metadata on text elements, enabling richer client rendering and schema evolution (#9235) | new-features |
| リリースビルドジョブのタイムアウトを増やすことで、不安定な Rust リリースパイプライン（特に Windows 上）を削減 (#9242) | Reduce flaky Rust release pipelines (notably on Windows) by increasing the release build job timeout (#9242) | chores |

## 0.81.0

| 日本語 | English | Category |
|--------|---------|----------|
| デフォルトAPIモデルを gpt-5.2-codex に変更。(#9188) | Default API model moved to gpt-5.2-codex. (#9188) | new-features |
| `codex mcp-server` の `codex` ツールがレスポンスに `threadId` を含めるようになり、`codex-reply` ツールと併用可能に。#3712 を修正。ドキュメントを https://developers.openai.com/codex/guides/agents-sdk/ に更新。(#9192) | The `codex` tool in `codex mcp-server` now includes the `threadId` in the response so it can be used with the `codex-reply` tool, fixing #3712. The documentation has been updated at https://developers.openai.com/codex/guides/agents-sdk/. (#9192) | new-features |
| ヘッドレス実行時に自動的にデバイスコードログインに切り替え、ブラウザなしでサインインが可能に。(#8756) | Headless runs now switch to device-code login automatically so sign-in works without a browser. (#8756) | new-features |
| Linux サンドボックスがパスを読み取り専用でマウント可能になり、ファイルの書き込みをより適切に保護。(#9112) | Linux sandbox can mount paths read-only to better protect files from writes. (#9112) | new-features |
| `tui` で部分的なツール呼び出しレンダリングをサポート | Support partial tool calls rendering in `tui` | new-features |
| Alternate-screen 処理を改善し、Zellij のスクロールバックが壊れないように修正。設定/フラグで制御可能。(#8555) | Alternate-screen handling now avoids breaking Zellij scrollback and adds a config/flag to control it. (#8555) | new-features |
| Windows で読み取り専用サンドボックスポリシー実行時に、危険なコマンド前に正しくプロンプト表示。(#9117) | Windows correctly prompts before unsafe commands when running with a read-only sandbox policy. (#9117) | new-features |
| Config.toml とルールのパースエラーを app-server クライアント/TUI に報告するように修正（サイレント失敗を廃止）。(#9182, #9011) | Config.toml and rules parsing errors are reported to app-server clients/TUI instead of failing silently. (#9182, #9011) | new-features |
| macOS のプロキシ検出における system-configuration クラッシュを回避。(#8954) | Worked around a macOS system-configuration crash in proxy discovery. (#8954) | new-features |
| 無効なユーザー画像アップロード時に、サイレント置換ではなくエラーを表示。(#9146) | Invalid user image uploads now surface an error instead of being silently replaced. (#9146) | new-features |
| `config.toml` の検証用に生成された JSON Schema を `docs/` に公開。(#8956) | Published a generated JSON Schema for `config.toml` in `docs/` to validate configs. (#8956) | new-features |
| 信頼性の高いブラケットペーストがない端末向けの TUI ペーストバーストステートマシンを文書化。(#9020) | Documented the TUI paste-burst state machine for terminals without reliable bracketed paste. (#9020) | new-features |
| Bazel ビルドサポートと貢献者向け `just bazel-codex` ヘルパーを追加。(#8875, #9177) | Added Bazel build support plus a `just bazel-codex` helper for contributors. (#8875, #9177) | new-features |
| #8756 [device-auth] ヘッドレス環境検出時にデバイスログインフローを表示。@mzeng-openai | #8756 [device-auth] When headless environment is detected, show device login flow instead. @mzeng-openai | new-features |
| #8930 feat: clb ツールの初版実装 @jif-oai | #8930 feat: first pass on clb tool @jif-oai | new-features |
| #8966 nit: セッションメトリック名変更 @jif-oai | #8966 nit: rename session metric @jif-oai | new-features |
| #8969 chore: 仕様構築時に不変 btree を使用 @jif-oai | #8969 chore: non mutable btree when building specs @jif-oai | new-features |
| #8968 chore: otel プロバイダを trace モジュール外に移動 @jif-oai | #8968 chore: move otel provider outside of trace module @jif-oai | new-features |
| #8973 chore: mcp 呼び出しメトリックを追加 @jif-oai | #8973 chore: add mcp call metric @jif-oai | new-features |
| #8970 chore: 承認メトリックを追加 @jif-oai | #8970 chore: add approval metric @jif-oai | new-features |
| #8975 chore: ツール呼び出しメトリック追加 @jif-oai | #8975 chore: metrics tool call @jif-oai | new-features |
| #8901 chore: メトリックの temporality を更新 @jif-oai | #8901 chore: update metrics temporality @jif-oai | new-features |
| #8954 system-configuration ライブラリのクラッシュを回避 @etraut-openai | #8954 Work around crash in system-configuration library @etraut-openai | new-features |
| #8873 fix(app-server): initialize JSON-RPC リクエストから originator ヘッダーを設定 @owenlin0 | #8873 fix(app-server): set originator header from initialize JSON-RPC request @owenlin0 | new-features |
| #8909 /feedback を無効化する設定を追加 @gt-oai | #8909 Add config to disable /feedback @gt-oai | new-features |
| #8985 chore: telemetry ファイルを削除 @jif-oai | #8985 chore: nuke telemetry file @jif-oai | new-features |
| #8986 Revert "fix(app-server): initialize JSON-RPC リクエストから originator ヘッダーを設定" @jif-oai | #8986 Revert "fix(app-server): set originator header from initialize JSON-RPC request" @jif-oai | new-features |
| #8978 nit: analytics_enabled に名前変更 @jif-oai | #8978 nit: rename to analytics_enabled @jif-oai | new-features |
| #8963 renaming: task を turn に変更 @jif-oai | #8963 renaming: task to turn @jif-oai | new-features |
| #8555 fix: Zellij スクロールバック用に tui.alternate_screen 設定と --no-alt-screen CLI フラグを追加 @hjanuschka | #8555 fix: add tui.alternate_screen config and --no-alt-screen CLI flag for Zellij scrollback @hjanuschka | new-features |
| #8875 feat: Bazel ビルドサポートを追加 @zbarsky-openai | #8875 feat: add support for building with Bazel @zbarsky-openai | new-features |
| #8988 fix(app-server): initialize から originator ヘッダーを設定（再々リバート） @owenlin0 | #8988 fix(app-server): set originator header from initialize (re-revert) @owenlin0 | new-features |
| #8766 fix: arg0 ヘルパーの PATH 処理を堅牢化 @viyatb-oai | #8766 fix: harden arg0 helper PATH handling @viyatb-oai | new-features |
| #8949 未処理の sse イベントをログ出力 @pakrym-oai | #8949 Log unhandled sse events @pakrym-oai | new-features |
| #8996 階層的エージェントプロンプトを追加 @pakrym-oai | #8996 Add hierarchical agent prompt @pakrym-oai | new-features |
| #9003 announcement_tip.toml を削除 @pakrym-oai | #9003 Delete announcement_tip.toml @pakrym-oai | new-features |
| #8940 リモートモデルテストを TestCodex ビルダーを使用するようリファクタリング @aibrahim-oai | #8940 Refactor remote models tests to use TestCodex builder @aibrahim-oai | new-features |
| #8981 非デフォルト時にモデルプロバイダー情報を /status に追加 @gt-oai | #8981 Add model provider info to /status if non-default @gt-oai | new-features |
| #8984 レスポンスエラーメッセージに URL を追加 @gt-oai | #8984 Add URL to responses error messages @gt-oai | new-features |
| #9008 fix: .bazelignore に .git を追加 @bolinfest | #9008 fix: add .git to .bazelignore @bolinfest | new-features |
| #9010 fix: 統合テスト用にリポジトリルートマーカーとして AGENTS.md を含める @bolinfest | #9010 fix: include AGENTS.md as repo root marker for integration tests @bolinfest | new-features |
| #8950 添付画像にラベルを付け、エージェントがメッセージ内ラベルを理解できるように @charley-oai | #8950 Label attached images so agent can understand in-message labels @charley-oai | new-features |
| #9032 Revert "announcement_tip.toml を削除" @jif-oai | #9032 Revert "Delete announcement_tip.toml" @jif-oai | new-features |
| #9018 fix: リモート arm64 ビルドもサポート @zbarsky-openai | #9018 fix: support remote arm64 builds, as well @zbarsky-openai | new-features |
| #8983 feat: collab 1 のテストハーネス @jif-oai | #8983 feat: testing harness for collab 1 @jif-oai | new-features |
| #9088 feat: collab 用の wait ツール実装を追加 @jif-oai | #9088 feat: add wait tool implementation for collab @jif-oai | new-features |
| #9090 feat: collab 用の close ツール実装を追加 @jif-oai | #9090 feat: add close tool implementation for collab @jif-oai | new-features |
| #8971 静的 mcp コールバック URI サポートを追加 @WhammyLeaf | #8971 add static mcp callback uri support @WhammyLeaf | new-features |
| #9099 nit: docstring を追加 @jif-oai | #9099 nit: add docstring @jif-oai | new-features |
| #8994 feat: fork を codex cli に接続 @apanasenko-oai | #8994 feat: wire fork to codex cli @apanasenko-oai | new-features |
| #9071 chore(deps): codex-rs の tui-scrollbar を 0.2.1 から 0.2.2 に更新 @dependabot | #9071 chore(deps): bump tui-scrollbar from 0.2.1 to 0.2.2 in /codex-rs @dependabot | new-features |
| #9072 chore(deps): codex-rs の ts-rs を 11.0.1 から 11.1.0 に更新 @dependabot | #9072 chore(deps): bump ts-rs from 11.0.1 to 11.1.0 in /codex-rs @dependabot | new-features |
| #9074 chore(deps): codex-rs の which を 6.0.3 から 8.0.0 に更新 @dependabot | #9074 chore(deps): bump which from 6.0.3 to 8.0.0 in /codex-rs @dependabot | new-features |
| #9075 chore(deps): codex-rs の clap を 4.5.53 から 4.5.54 に更新 @dependabot | #9075 chore(deps): bump clap from 4.5.53 to 4.5.54 in /codex-rs @dependabot | new-features |
| #9076 chore(deps): codex-rs の tokio-util を 0.7.16 から 0.7.18 に更新 @dependabot | #9076 chore(deps): bump tokio-util from 0.7.16 to 0.7.18 in /codex-rs @dependabot | new-features |
| #8957 feat: mcp サーバーのホットリロード @shijie-oai | #8957 feat: hot reload mcp servers @shijie-oai | new-features |
| #9107 未使用の conversation_id ヘッダーを削除 @pakrym-oai | #9107 Remove unused conversation_id header @pakrym-oai | new-features |
| #9080 画像添付のテストを追加 @charley-oai | #9080 Add some tests for image attachments @charley-oai | new-features |
| #9114 単一レスポンス SSE イベントパーシングを抽出 @pakrym-oai | #9114 Extract single responses SSE event parsing @pakrym-oai | new-features |
| #8961 サンドボックス/承認/ネットワークプロンプトを動的にアセンブル @aibrahim-oai | #8961 Assemble sandbox/approval/network prompts dynamically @aibrahim-oai | new-features |
| #9102 モデルクライアントセッションを追加 @pakrym-oai | #9102 Add model client sessions @pakrym-oai | new-features |
| #8246 fix(tui): トランスクリプトオーバーレイで実行中の合体ツール呼び出しを表示 @Chriss4123 | #8246 fix(tui): show in-flight coalesced tool calls in transcript overlay @Chriss4123 | new-features |
| #9127 WebSocket 接続を再利用 @pakrym-oai | #9127 Reuse websocket connection @pakrym-oai | new-features |
| #9117 fix: Windows で危険なコマンドのプロンプト表示 @bolinfest | #9117 fix: prompt for unsafe commands on Windows @bolinfest | new-features |
| #9128 WebSocket 追加サポート @pakrym-oai | #9128 Websocket append support @pakrym-oai | new-features |
| #9077 ターン途中でデフォルトでメッセージを送信。タブごとにメッセージをキューイング @aibrahim-oai | #9077 Send message by default mid turn. queue messages by tab @aibrahim-oai | new-features |
| #9049 空のペーストイベントから画像ペーストを処理 @aibrahim-oai | #9049 Handle image paste from empty paste events @aibrahim-oai | new-features |
| #8952 移行画面でマークダウンを使用 @aibrahim-oai | #8952 Use markdown for migration screen @aibrahim-oai | new-features |
| #9109 ファイル変更を検出するツール呼び出しサマリーのヒューリスティックを更新 @etraut-openai | #9109 Updated heuristic for tool call summary to detect file modifications @etraut-openai | new-features |
| #9138 フッターにタブキューヒントを表示 @aibrahim-oai | #9138 Show tab queue hint in footer @aibrahim-oai | new-features |
| #9140 Esc バックトラックにスレッドロールバックを使用 @aibrahim-oai | #9140 Use thread rollback for Esc backtrack @aibrahim-oai | new-features |
| #9143 chore: collab ツールのエラーハンドリングを改善 @jif-oai | #9143 chore: better error handling on collab tools @jif-oai | new-features |
| #9147 nit: collab 送信入力のクリーニング @jif-oai | #9147 nit: collab send input cleaning @jif-oai | new-features |
| #9129 response.done をサポートし、統合テストを追加 @pakrym-oai | #9129 Support response.done and add integration tests @pakrym-oai | new-features |
| #8798 ollama: ビルトインに対してデフォルトで Responses API を使用 @drifkin | #8798 ollama: default to Responses API for built-ins @drifkin | new-features |
| #8956 config.toml の生成された jsonschema を追加 @sayan-oai | #8956 add generated jsonschema for config.toml @sayan-oai | new-features |
| #9122 /review 実行中のキューメッセージを修正 @charley-oai | #9122 Fix queued messages during /review @charley-oai | new-features |
| #9126 fix: セッション終了時に session span をドロップ @apanasenko-oai | #9126 fix: drop session span at end of the session @apanasenko-oai | new-features |
| #9101 `requirements.toml` から MCP サーバーを制限 @gt-oai | #9101 Restrict MCP servers from `requirements.toml` @gt-oai | new-features |
| #9020 fix(tui): paste-burst ステートマシンを文書化 @joshka-oai | #9020 fix(tui): document paste-burst state machine @joshka-oai | new-features |
| #9118 feat(app-server): --analytics-default-enabled フラグを追加 @owenlin0 | #9118 feat(app-server): add an --analytics-default-enabled flag @owenlin0 | new-features |
| #9130 ツールチップを刷新 @mzeng-openai | #9130 Fresh tooltips @mzeng-openai | new-features |
| #9134 fix(windows-sandbox-rs) SETUP_VERSION を更新 @dylan-hurd-oai | #9134 fix(windows-sandbox-rs) bump SETUP_VERSION @dylan-hurd-oai | new-features |
| #9121 test(tui): 決定的な paste-burst テストを追加 @joshka-oai | #9121 test(tui): add deterministic paste-burst tests @joshka-oai | new-features |
| #8661 MCP 起動がターン途中で完了した際のスピナー/Esc 割り込みを修正 @2mawi2 | #8661 Fix spinner/Esc interrupt when MCP startup completes mid-turn @2mawi2 | new-features |
| #9165 Esc でスキルポップアップを閉じられるように @xl-openai | #9165 Allow close skill popup with esc. @xl-openai | new-features |
| #9169 WebSocket テストの不安定性を修正 @pakrym-oai | #9169 Fix flakiness in WebSocket tests @pakrym-oai | new-features |
| #9011 fix: TUI で不正なルールに対する適切なエラーを報告 @bolinfest | #9011 fix: report an appropriate error in the TUI for malformed rules @bolinfest | new-features |
| #9166 fix: #9011 の統合テスト @bolinfest | #9166 fix: integration test for #9011 @bolinfest | new-features |
| #9177 feat: justfile に bazel-codex エントリを追加 @bolinfest | #9177 feat: add bazel-codex entry to justfile @bolinfest | new-features |
| #9175 WebSocket テストサーバースクリプト @pakrym-oai | #9175 WebSocket test server script @pakrym-oai | new-features |
| #9136 models.json を更新 @github-actions | #9136 Update models.json @github-actions | new-features |
| #9168 models manager をクリーンアップ @aibrahim-oai | #9168 clean models manager @aibrahim-oai | new-features |
| #8933 [CODEX-4427] パースされたコマンドを改善 @aibrahim-oai | #8933 [CODEX-4427] improve parsed commands @aibrahim-oai | new-features |
| #9174 etag マッチ時にキャッシュ TTL を更新 @aibrahim-oai | #9174 Renew cache ttl on etag match @aibrahim-oai | new-features |
| #9124 fix(tui): paste-burst ステート遷移を堅牢化 @joshka-oai | #9124 fix(tui): harden paste-burst state transitions @joshka-oai | new-features |
| #9186 tui migrations でオフラインキャッシュを使用 @aibrahim-oai | #9186 Use offline cache for tui migrations @aibrahim-oai | new-features |
| #9182 app server クライアント向けの config とルールエラーハンドリングを改善 @etraut-openai | #9182 Improve handling of config and rules errors for app server clients @etraut-openai | new-features |
| #8997 chore: unified_exec のデフォルトシェルを明確化 @sayan-oai | #8997 chore: clarify default shell for unified_exec @sayan-oai | new-features |
| #9192 feat: MCP サーバーメッセージに threadId を追加 @bolinfest | #9192 feat: add threadId to MCP server messages @bolinfest | new-features |
| #9188 API デフォルトモデルを変更 @aibrahim-oai | #9188 change api default model @aibrahim-oai | new-features |
| #9150 feat: シェルスナップショットに rc ファイルのソーシングを追加 @jif-oai | #9150 feat: add sourcing of rc files to shell snapshot @jif-oai | new-features |
| #9155 fix: シェルスナップショットのクリーンアップ @jif-oai | #9155 fix: shell snapshot clean-up @jif-oai | new-features |
| #9146 feat: ユーザーが送信した画像が不正な場合にエラーを返す @jif-oai | #9146 feat: return an error if the image sent by the user is a bad image @jif-oai | new-features |
| #9197 feat: シェルスナップショットファイルが存在する場合のみソース @jif-oai | #9197 feat: only source shell snapshot if the file exists @jif-oai | new-features |
| #9145 fix: TUI での二重待機ヘッダーを削除 @jif-oai | #9145 fix: drop double waiting header in TUI @jif-oai | new-features |
| #9194 exec 出力デルタをインラインレンダリング @aibrahim-oai | #9194 Render exec output deltas inline @aibrahim-oai | new-features |
| #9156 chore: 空の write_stdin の最小 yield 時間をクランプ @jif-oai | #9156 chore: clamp min yield time for empty write_stdin @jif-oai | new-features |
| #9105 feat: スレッドリスナーに自動リフレッシュを追加 @jif-oai | #9105 feat: add auto refresh on thread listeners @jif-oai | new-features |
| #9112 feat: Linux サンドボックスで読み取り専用バインドマウントのサポートを追加 @viyatb-oai | #9112 feat: add support for read-only bind mounts in the linux sandbox @viyatb-oai | new-features |
| #9179 レビューに現在のモデルを使用 @pakrym-oai | #9179 Use current model for review @pakrym-oai | new-features |

## 0.80.0

| 日本語 | English | Category |
|--------|---------|----------|
| プロトコルとアプリサーバーに会話/スレッドフォークエンドポイントを追加し、クライアントがセッションを新しいスレッドに分岐できるようにした。(#8866) | Add conversation/thread fork endpoints in the protocol and app server so clients can branch a session into a new thread. (#8866) | new-features |
| `requirement/list` を通じて要件を公開し、クライアントが `requirements.toml` を読み取ってエージェントモードの UX を調整できるようにした。(#8800) | Expose requirements via `requirement/list` so clients can read `requirements.toml` and adjust agent-mode UX. (#8800) | new-features |
| 可観測性のための追加カウンターを含むメトリクス機能を導入。(#8318, #8910) | Introduce metrics capabilities with additional counters for observability. (#8318, #8910) | new-features |
| アップグレード/デグレードモードのプロンプトと `/elevate-sandbox` コマンドを含む、昇格サンドボックスオンボーディングを追加。(#8789) | Add elevated sandbox onboarding with prompts for upgrade/degraded mode plus the `/elevate-sandbox` command. (#8789) | new-features |
| v2 API ユーザー入力を通じた明示的なスキル呼び出しを許可。(#8864) | Allow explicit skill invocations through v2 API user input. (#8864) | new-features |
| Codex CLI のサブプロセスが `LD_LIBRARY_PATH`/`DYLD_LIBRARY_PATH` などの環境変数を再び継承し、ランタイムの問題を回避するようにした。#8945 で説明されているように、これらの環境変数をサブプロセスに渡さないと(特に GPU 関連のもの)、10倍以上のパフォーマンス低下が発生していた!詳細な調査と #8945 への記述をしてくれた @johnzfitch に特別感謝。(#8951) | Codex CLI subprocesses again inherit env vars like `LD_LIBRARY_PATH`/`DYLD_LIBRARY_PATH` to avoid runtime issues. As explained in #8945, failure to pass along these environment variables to subprocesses that expect them (notably GPU-related ones), was causing 10x+ performance regressions! Special thanks to @johnzfitch for the detailed investigation and write-up in #8945. (#8951) | new-features |
| TUI/TUI2 の `/review <instructions>` がプレーンテキストを送信する代わりにレビューフローを起動するようにした。(#8823) | `/review <instructions>` in TUI/TUI2 now launches the review flow instead of sending plain text. (#8823) | new-features |
| パッチ承認の「このセッションで許可」が、以前に承認されたファイルに対して保持されるようにした。(#8451) | Patch approval “allow this session” now sticks for previously approved files. (#8451) | new-features |
| 現在のモデルがピッカーから非表示になっている場合でも、モデルアップグレードプロンプトが表示されるようにした。(#8802) | Model upgrade prompt now appears even if the current model is hidden from the picker. (#8802) | new-features |
| Windows のペースト処理が非 ASCII マルチライン入力を確実にサポートするようにした。#8021 でこの修正の基礎を築いてくれた @occurrent に特別感謝!(#8774) | Windows paste handling now supports non-ASCII multiline input reliably. Special thanks to @occurrent laying the groundwork for this fix in #8021! (#8774) | new-features |
| Git apply パス解析が、引用符/エスケープされたパスと `/dev/null` を正しく処理し、誤った変更分類を回避するようにした。(#8824) | Git apply path parsing now handles quoted/escaped paths and `/dev/null` correctly to avoid misclassified changes. (#8824) | new-features |
| アプリサーバーの README にスキルのサポートと使用方法を文書化。(#8853) | App-server README now documents skills support and usage. (#8853) | new-features |
| スキル作成ドキュメントで YAML フロントマターのフォーマットと引用規則を明確化。(#8610) | Skill-creator docs clarify YAML frontmatter formatting and quoting rules. (#8610) | new-features |
| #8734 修正: マルチラインコマンドを execpolicy に追加することを提案しないようにした @tibo-openai | #8734 fix: do not propose to add multiline commands to execpolicy @tibo-openai | new-features |
| #8802 選択されたモデルがピッカーになくなった場合でもモデルアップグレードポップアップを有効化 @charley-oai | #8802 Enable model upgrade popup even when selected model is no longer in picker @charley-oai | new-features |
| #8805 chore: コアツール並列処理テストを安定化 @tibo-openai | #8805 chore: stabilize core tool parallelism test @tibo-openai | new-features |
| #8820 chore: just fmt をサイレント化 @jif-oai | #8820 chore: silent just fmt @jif-oai | new-features |
| #8824 修正: git apply パスを正しく解析 @tibo-openai | #8824 fix: parse git apply paths correctly @tibo-openai | new-features |
| #8823 修正: TUI で /review 引数を処理 @tibo-openai | #8823 fix: handle /review arguments in TUI @tibo-openai | new-features |
| #8822 chore: 統合 exec セッションの名前変更 @jif-oai | #8822 chore: rename unified exec sessions @jif-oai | new-features |
| #8825 修正: codex exec の早期終了を処理 @tibo-openai | #8825 fix: handle early codex exec exit @tibo-openai | new-features |
| #8830 chore: conversation とスレッド名を統一 @jif-oai | #8830 chore: unify conversation with thread name @jif-oai | new-features |
| #8840 auth manager の下にテストを移動 @pakrym-oai | #8840 Move tests below auth manager @pakrym-oai | new-features |
| #8845 修正: lru クレートを 0.16.3 にアップグレード @bolinfest | #8845 fix: upgrade lru crate to 0.16.3 @bolinfest | new-features |
| #8763 Modelfamily を modelinfo にマージ @aibrahim-oai | #8763 Merge Modelfamily into modelinfo @aibrahim-oai | new-features |
| #8842 不要な todos を削除 @aibrahim-oai | #8842 remove unnecessary todos @aibrahim-oai | new-features |
| #8846 codex_home のソースとして AuthManager を使用しないようにした @pakrym-oai | #8846 Stop using AuthManager as the source of codex_home @pakrym-oai | new-features |
| #8844 修正: app-server の `write_models_cache` で優先度番号が小さいモデルをより高い優先度として扱うようにした。@aibrahim-oai | #8844 Fix app-server `write_models_cache` to treat models with less priority number as higher priority. @aibrahim-oai | new-features |
| #8850 chore: 無駄な機能フラグを削除 @jif-oai | #8850 chore: drop useless feature flags @jif-oai | new-features |
| #8848 chore: 非推奨のものを削除 @jif-oai | #8848 chore: drop some deprecated @jif-oai | new-features |
| #8853 [chore] スキルを含むようアプリサーバードキュメントを更新 @celia-oai | #8853 [chore] update app server doc with skills @celia-oai | new-features |
| #8451 修正: apply_patch 承認に「このセッションで許可」を実装 @owenlin0 | #8451 fix: implement 'Allow this session' for apply_patch approvals @owenlin0 | new-features |
| #8856 モデル情報レベルで切り捨てポリシーをオーバーライド @aibrahim-oai | #8856 Override truncation policy at model info level @aibrahim-oai | new-features |
| #8849 `run_turn` でのエラー管理を簡素化 @aibrahim-oai | #8849 Simplify error managment in `run_turn` @aibrahim-oai | new-features |
| #8767 オプションのリクエスト圧縮機能を追加 @cconger | #8767 Add feature for optional request compression @cconger | new-features |
| #8610 skill-creator で YAML フロントマターのフォーマットを明確化 @darlingm | #8610 Clarify YAML frontmatter formatting in skill-creator @darlingm | new-features |
| #8847 BASE_URL が設定されている場合は /model で警告 @gt-oai | #8847 Warn in /model if BASE_URL set @gt-oai | new-features |
| #8801 スキル検出でシンボリックリンクをサポート。@xl-openai | #8801 Support symlink for skills discovery. @xl-openai | new-features |
| #8800 機能: requirement.toml のための appServer.requirementList @shijie-oai | #8800 Feat: appServer.requirementList for requirement.toml @shijie-oai | new-features |
| #8861 修正: Bazel で動作するようリソースパス解決ロジックを更新 @bolinfest | #8861 fix: update resource path resolution logic so it works with Bazel @bolinfest | new-features |
| #8868 修正: 非同期関数での I/O に tokio を使用 @bolinfest | #8868 fix: use tokio for I/O in an async function @bolinfest | new-features |
| #8867 TUI にフッターノートを追加 @iceweasel-oai | #8867 add footer note to TUI @iceweasel-oai | new-features |
| #8879 機能: Cargo または Bazel で動作する find_resource! マクロを導入 @bolinfest | #8879 feat: introduce find_resource! macro that works with Cargo or Bazel @bolinfest | new-features |
| #8864 V2 API で UserInput::Skill をサポート。@xl-openai | #8864 Support UserInput::Skill in V2 API. @xl-openai | new-features |
| #8876 TUI で入力を一時的に無効にする機能を追加。@iceweasel-oai | #8876 add ability to disable input temporarily in the TUI. @iceweasel-oai | new-features |
| #8884 修正: absolutize() 呼び出しを find_resource! マクロの責任にした @bolinfest | #8884 fix: make the find_resource! macro responsible for the absolutize() call @bolinfest | new-features |
| #8774 修正: Windows で非 ASCII マルチラインテキストを貼り付けられるようにした @dylan-hurd-oai, @occurrent | #8774 fix: windows can now paste non-ascii multiline text @dylan-hurd-oai, @occurrent | new-features |
| #8855 chore: manager にスレッド ID リストを追加 @jif-oai | #8855 chore: add list thread ids on manager @jif-oai | new-features |
| #8318 機能: メトリクス機能 @jif-oai | #8318 feat: metrics capabilities @jif-oai | new-features |
| #8826 修正: list_dir ページネーション順序を安定化 @tibo-openai | #8826 fix: stabilize list_dir pagination order @tibo-openai | new-features |
| #8892 chore: メトリクスエクスポーター設定を削除 @jif-oai | #8892 chore: drop metrics exporter config @jif-oai | new-features |
| #8896 chore: エラー制限コメントを整列 @tibo-openai | #8896 chore: align error limit comment @tibo-openai | new-features |
| #8899 修正: /review サブエージェントにプロジェクト指示を含めた @tibo-openai | #8899 fix: include project instructions in /review subagent @tibo-openai | new-features |
| #8894 chore: 小さなデバッグクライアントを追加 @jif-oai | #8894 chore: add small debug client @jif-oai | new-features |
| #8888 修正: load_sse_fixture_with_id で find_resource! マクロを活用 @bolinfest | #8888 fix: leverage find_resource! macro in load_sse_fixture_with_id @bolinfest | new-features |
| #8691 macOS で継承された stdio に対する setpgid を回避 @seeekr | #8691 Avoid setpgid for inherited stdio on macOS @seeekr | new-features |
| #8887 修正: codex-rs/core/tests/suite で codex_utils_cargo_bin() を活用 @bolinfest | #8887 fix: leverage codex_utils_cargo_bin() in codex-rs/core/tests/suite @bolinfest | new-features |
| #8907 chore: 無駄な interaction_input を削除 @jif-oai | #8907 chore: drop useless interaction_input @jif-oai | new-features |
| #8903 nit: 未使用の関数呼び出しエラーを削除 @jif-oai | #8903 nit: drop unused function call error @jif-oai | new-features |
| #8910 機能: いくつかのメトリクスを追加 @jif-oai | #8910 feat: add a few metrics @jif-oai | new-features |
| #8911 gitignore に bazel-* を追加 @zbarsky-openai | #8911 gitignore bazel-* @zbarsky-openai | new-features |
| #8843 設定要件: 要件エラーメッセージを改善 @gt-oai | #8843 config requirements: improve requirement error messages @gt-oai | new-features |
| #8914 修正: 重複する include_str!() 呼び出しを削減 @bolinfest | #8914 fix: reduce duplicate include_str!() calls @bolinfest | new-features |
| #8902 機能: アプリサーバーにロードされたスレッドのリストを追加 @jif-oai | #8902 feat: add list loaded threads to app server @jif-oai | new-features |
| #8870 [修正] アプリサーバーの不安定な thread/resume テスト @celia-oai | #8870 [fix] app server flaky thread/resume tests @celia-oai | new-features |
| #8916 clean: 全履歴のクローン処理 @jif-oai | #8916 clean: all history cloning @jif-oai | new-features |
| #8915 otel テスト: WouldBlock エラーをリトライ @gt-oai | #8915 otel test: retry WouldBlock errors @gt-oai | new-features |
| #8792 models.json を更新 @github-actions | #8792 Update models.json @github-actions | new-features |
| #8897 修正: Windows でコア環境変数を保持 @tibo-openai | #8897 fix: preserve core env vars on Windows @tibo-openai | new-features |
| #8913 managed_config から要件をバックフィルする際に `read-only` を追加 @gt-oai | #8913 Add `read-only` when backfilling requirements from managed_config @gt-oai | new-features |
| #8926 シェルコマンド (!) にツールチップヒントを追加 @fps7806 | #8926 add tooltip hint for shell commands (!) @fps7806 | new-features |
| #8857 CodexAuth を不変にした @pakrym-oai | #8857 Immutable CodexAuth @pakrym-oai | new-features |
| #8927 nit: parse_arguments @jif-oai | #8927 nit: parse_arguments @jif-oai | new-features |
| #8932 修正: タイムアウトの問題で不安定になっているテストのタイムアウトを増やした @bolinfest | #8932 fix: increase timeout for tests that have been flaking with timeout issues @bolinfest | new-features |
| #8931 修正: accept_elicitation_for_prompt_rule() テストでのログインシェルの不一致を修正 @bolinfest | #8931 fix: correct login shell mismatch in the accept_elicitation_for_prompt_rule() test @bolinfest | new-features |
| #8874 [修正] アプリサーバーの不安定な send_messages テスト @celia-oai | #8874 [fix] app server flaky send_messages test @celia-oai | new-features |
| #8866 機能: conversation/thread をフォーク @apanasenko-oai | #8866 feat: fork conversation/thread @apanasenko-oai | new-features |
| #8858 `get_responses_requests` と `get_responses_request_bodies` を削除してインプレースマッチャーを使用 @aibrahim-oai | #8858 remove `get_responses_requests` and `get_responses_request_bodies` to use in-place matcher @aibrahim-oai | new-features |
| #8939 [chore] アプリサーバーテストをチャット完了から responses に移動 @celia-oai | #8939 [chore] move app server tests from chat completion to responses @celia-oai | new-features |
| #8880 401 リカバリーのステップとして認証の再ロードを試行 @pakrym-oai | #8880 Attempt to reload auth as a step in 401 recovery @pakrym-oai | new-features |
| #8946 修正: Bazel のために wait_for_event() のタイムアウトを増やした @bolinfest | #8946 fix: increase timeout for wait_for_event() for Bazel @bolinfest | new-features |
| #8789 昇格サンドボックス NUX @iceweasel-oai | #8789 Elevated sandbox NUX @iceweasel-oai | new-features |
| #8917 修正: null の MCP リソース引数を空として扱う @tibo-openai | #8917 fix: treat null MCP resource args as empty @tibo-openai | new-features |
| #8942 モデルリスト呼び出しに 5秒のタイムアウトと統合テストを追加 @aibrahim-oai | #8942 Add 5s timeout to models list call + integration test @aibrahim-oai | new-features |
| #8951 修正: Codex CLI から既存のプロセス強化処理を削除 @bolinfest | #8951 fix: remove existing process hardening from Codex CLI @bolinfest | new-features |

## 0.79.0

| 日本語 | English | Category |
|--------|---------|----------|
| セッションが他の会話をプログラムで起動またはメッセージ送信できるマルチ会話「エージェント制御」を追加 (#8783, #8788) | Add multi-conversation “agent control” so a session can spawn or message other conversations programmatically (#8783, #8788) | new-features |
| IDEクライアントが履歴を書き換えずに最後のN回のターンを取り消せるよう、app-serverに`thread/rollback`を追加 (#8454) | Add app-server `thread/rollback` so IDE clients can undo the last N turns without rewriting history (#8454) | new-features |
| ライブリクエストの安全な代替として、キャッシュのみのWeb検索結果を有効にする`web_search_cached`を追加 (#8795) | Add `web_search_cached` to enable cached-only Web Search results as a safer alternative to live requests (#8795) | new-features |
| `codex exec resume`の後にグローバル実行フラグ(model/json/sandboxトグル等)を渡せるように変更 (#8440) | Allow global exec flags (model/json/sandbox toggles, etc.) to be passed after `codex exec resume` (#8440) | new-features |
| リポジトリ内のTOMLファイルで管理される、時間/バージョン対象のアナウンスヒントをTUIに表示 (#8752) | Show time/version-targeted announcement tips in the TUI, driven by a TOML file in the repo (#8752) | new-features |
| 分析動作を制御する`[analytics] enabled=...`設定セクションを追加 (#8350) | Add an `[analytics] enabled=...` config section to control analytics behavior (#8350) | new-features |
| TUI2トランスクリプトでストリーム配信されたマークダウンがリサイズ時に再フローし、コピー&ペーストでソフトラップが保持されるように修正 (#8761) | Fix TUI2 transcripts so streamed markdown reflows on resize and copy/paste preserves soft wraps (#8761) | bug-fixes |
| 空白でパディングされた`*** Begin Patch` / `*** End Patch`マーカーに対して`apply_patch`のパース処理を寛容に変更 (#8746) | Make `apply_patch` parsing tolerant of whitespace-padded `*** Begin Patch` / `*** End Patch` markers (#8746) | bug-fixes |
| gitルートをチェックする前に現在の作業ディレクトリからの相対パスをレンダリングし、非gitワークスペースでの出力を改善 (#8771) | Render paths relative to the current working directory before checking git roots, improving output in non-git workspaces (#8771) | bug-fixes |
| `CODEX_MANAGED_CONFIG_PATH`が本番環境で管理設定を上書きするのを防止し、ポリシーバイパスを解消 (#8762) | Prevent `CODEX_MANAGED_CONFIG_PATH` from overriding managed config in production, closing a policy bypass (#8762) | bug-fixes |
| app-serverの会話がクライアントから渡された設定を尊重するように修正 (#8765) | Ensure app-server conversations respect the config passed in by the client (#8765) | bug-fixes |
| TUIのUX不具合を削減: 入力履歴閲覧時のポップアップを抑制、コピー「ピル」のレンダリングを修正、中断時にバックグラウンドターミナルをクリア (#8772, #8777, #8786) | Reduce TUI UX glitches: suppress popups when browsing input history, fix copy “pill” rendering, and clear background terminals on interrupt (#8772, #8777, #8786) | bug-fixes |
| ヘッドレス/リモートセットアップのオンボーディング/ログインガイダンスを明確化し、ユーザーを`codex login --device-auth`に誘導 (#8753) | Clarify onboarding/login guidance for headless/remote setups by steering users to `codex login --device-auth` (#8753) | documentation |
| ツール/設定で使用されるモデル例を現在の`gpt-5.2`命名に更新 (#8566) | Update model examples used in tooling/config to current `gpt-5.2` naming (#8566) | documentation |
| 設定されたすべてのスキルフォルダーが考慮されるよう、スキル検出を設定レイヤースタックを使用するようリファクタリング (#8497) | Refactor skills discovery to use the config layer stack so all configured skill folders are considered (#8497) | chores |
| リリース作成時にGitHubリリースノートを自動入力 (#8799) | Auto-populate GitHub release notes at release creation time (#8799) | chores |
| カバレッジを強化するため、`apply_patch`のテストシナリオを追加 (#8230) | Add more `apply_patch` test scenarios to harden coverage (#8230) | chores |
| PTYが存在する場合のみ「begin」を送信するよう、統一された実行イベント発行を調整 (#8780) | Tweak unified exec event emission to only send “begin” when a PTY is present (#8780) | chores |

## 0.78.0

| 日本語 | English | Category |
|--------|---------|----------|
| `Ctrl+G` で現在のプロンプトを設定済みの外部エディタ（`$VISUAL`/`$EDITOR`）で開き、編集内容を TUI に同期する機能を追加 (#7606) | Add `Ctrl+G` to open the current prompt in your configured external editor (`$VISUAL`/`$EDITOR`) and sync edits back into the TUI. (#7606) | new-features |
| プロジェクト対応の設定レイヤー機能をサポート: リポジトリローカルの `.codex/config.toml` を読み込み、設定可能な `project_root_markers` を尊重し、`/etc/codex/config.toml` などのシステム設定とマージ (#8354, #8359, #8461) | Support project-aware config layering: load repo-local `.codex/config.toml`, honor configurable `project_root_markers`, and merge that with system config like `/etc/codex/config.toml`. (#8354, #8359, #8461) | new-features |
| macOS で MDM 経由で提供される TOML ペイロードを使用したエンタープライズ管理設定要件をサポート (#8743) | Support enterprise-managed configuration requirements on macOS via an MDM-provided TOML payload. (#8743) | new-features |
| `tui2` のトランスクリプトナビゲーションをマルチクリック選択、コピーショートカット/表示、ドラッグ可能な自動非表示スクロールバーで改善 (#8462, #8471, #8728) | Improve `tui2` transcript navigation with multi-click selection, a copy shortcut/affordance, and a draggable auto-hiding scrollbar. (#8462, #8471, #8728) | new-features |
| Windows PowerShell セッションを UTF-8 モードで起動し、エンコーディング関連のプロンプト/出力問題を軽減 (#7902) | Start Windows PowerShell sessions in UTF-8 mode to reduce encoding-related prompt/output issues. (#7902) | new-features |
| 実行ポリシールールに人間が読める正当化理由を含めることが可能になり、ポリシー読み込みは統一された設定レイヤースタックに従うように (#8349, #8453, #8751) | Exec policy rules can now include human-readable justifications, and policy loading follows the unified config-layer stack. (#8349, #8453, #8751) | new-features |
| モデルが 1 ターンで複数のツール呼び出しを返す際の失敗を、Chat Completions API が期待する形式でツール呼び出しを出力することで修正 (#8556) | Fix failures when the model returns multiple tool calls in a single turn by emitting tool calls in the format the Chat Completions API expects. (#8556) | new-features |
| `/review` がセッションの作業ディレクトリから差分を計算し、ランタイム cwd オーバーライドで base-branch 検出が正しく動作するように修正 (#8738) | Make `/review` compute diffs from the session’s working directory so base-branch detection works correctly with runtime cwd overrides. (#8738) | new-features |
| レガシー Chat Completions ストリーミング終端をクリーンに処理し、誤った SSE 解析エラーを回避 (#8708) | Handle the legacy Chat Completions streaming terminator cleanly to avoid spurious SSE parse errors. (#8708) | new-features |
| `tui2` のレンダリング/入力のエッジケース（画面破損、スクロールの固着、選択/コピーの正確性）の一連の問題を修正 (#8463, #8695, #8449) | Fix a set of `tui2` rendering/input edge cases (screen corruption, scroll stickiness, and selection/copy correctness). (#8463, #8695, #8449) | new-features |
| CLI パッケージング中の `ripgrep` ダウンロード失敗時の診断を改善し、失敗のデバッグを容易化 (#8486) | Improve diagnostics when `ripgrep` download fails during CLI packaging so failures are easier to debug. (#8486) | new-features |
| alpha/stable バージョン文字列解析時のパニックを回避 (#8406) | Avoid a panic when parsing alpha/stable version strings. (#8406) | new-features |
| ユーザードキュメントを開発者ドキュメントサイトへのリンクに置き換え、重複を削除（スキルドキュメントを含む） (#8662, #8407) | Replace and de-duplicate user docs with links to the developer documentation site (including skills docs). (#8662, #8407) | new-features |
| `developer_instructions` オプションを含む設定ドキュメントを明確化 (#8376, #8701) | Clarify configuration documentation, including the `developer_instructions` option. (#8376, #8701) | new-features |
| README の壊れたリンクを修正 (#8682) | Fix broken README links. (#8682) | new-features |
| TUI のパフォーマンスチューニング: 再描画スケジューリングを制限し、ストリーミング中の不要な再レンダリングを削減して CPU 使用率を低減 (#8499, #8681, #8693) | Performance tuning for TUIs: cap redraw scheduling and reduce unnecessary rerenders during streaming to lower CPU usage. (#8499, #8681, #8693) | new-features |
| `codex-rs` 全体で Rust 依存関係を更新 (#8414, #8596, #8597) | Update Rust dependencies across `codex-rs`. (#8414, #8596, #8597) | new-features |
| #8407 スキルドキュメントを開発者ドキュメントサイトに誘導 @etraut-openai | #8407 Point skills docs to developer documentation site @etraut-openai | new-features |
| #8406 修正: alpha でパニックしないように @aibrahim-oai | #8406 fix: do not panic on alphas @aibrahim-oai | new-features |
| #8091 ghost_commit フラグの参照を undo に更新 @charlie-openai | #8091 Update ghost_commit flag reference to undo @charlie-openai | new-features |
| #8423 test(tui2): VT100 テスト用に ANSI を再有効化 @joshka-oai | #8423 test(tui2): re-enable ANSI for VT100 tests @joshka-oai | new-features |
| #8419 修正(tui2): トランスクリプトマウス選択範囲を制限 @joshka-oai | #8419 fix(tui2): constrain transcript mouse selection bounds @joshka-oai | new-features |
| #8424 作業: undo を非出荷に @jif-oai | #8424 chore: un-ship undo @jif-oai | new-features |
| #8376 ドキュメント: `developer_instructions` 設定オプションを追加し、説明を更新 @448523760 | #8376 docs: add `developer_instructions` config option and update descriptions @448523760 | new-features |
| #8431 作業: ドキュメントから undo を削除 @jif-oai | #8431 chore: drop undo from the docs @jif-oai | new-features |
| #8410 作業(deps): peter-evans/create-pull-request を 7 から 8 にバンプ @dependabot | #8410 chore(deps): bump peter-evans/create-pull-request from 7 to 8 @dependabot | new-features |
| #8412 作業(deps): test-log を 0.2.18 から 0.2.19 にバンプ in /codex-rs @dependabot | #8412 chore(deps): bump test-log from 0.2.18 to 0.2.19 in /codex-rs @dependabot | new-features |
| #8413 作業(deps): landlock を 0.4.2 から 0.4.4 にバンプ in /codex-rs @dependabot | #8413 chore(deps): bump landlock from 0.4.2 to 0.4.4 in /codex-rs @dependabot | new-features |
| #8414 作業(deps): clap を 4.5.47 から 4.5.53 にバンプ in /codex-rs @dependabot | #8414 chore(deps): bump clap from 4.5.47 to 4.5.53 in /codex-rs @dependabot | new-features |
| #8416 作業(deps): openssl-sys を 0.9.109 から 0.9.111 にバンプ in /codex-rs @dependabot | #8416 chore(deps): bump openssl-sys from 0.9.109 to 0.9.111 in /codex-rs @dependabot | new-features |
| #7902 機能(windows): powershell を utf-8 モードで起動 @dylan-hurd-oai | #7902 feat(windows) start powershell in utf-8 mode @dylan-hurd-oai | new-features |
| #8349 ExecPolicyManager を追加 @pakrym-oai | #8349 Add ExecPolicyManager @pakrym-oai | new-features |
| #8354 機能: リポジトリ内 .codex/config.toml エントリを設定情報のソースとしてサポート @bolinfest | #8354 feat: support in-repo .codex/config.toml entries as sources of config info @bolinfest | new-features |
| #8359 機能: config.toml での project_root_markers のサポートを追加 @bolinfest | #8359 feat: add support for project_root_markers in config.toml @bolinfest | new-features |
| #8395 実行ポリシー用の bash コマンドパーサーで連結ノードを処理 @ivanmurashko | #8395 Handle concatenation nodes in bash command parser for exec policy @ivanmurashko | new-features |
| #8446 models.json を更新 @github-actions | #8446 Update models.json @github-actions | new-features |
| #8444 読み取り ACL 適用中は cwd にジャンクションを使用 @iceweasel-oai | #8444 use a junction for the cwd while read ACLs are being applied @iceweasel-oai | new-features |
| #8447 最小クライアントバージョンを削除 @aibrahim-oai | #8447 remove minimal client version @aibrahim-oai | new-features |
| #8448 作業: ConfigLayerStack を Config のフィールドとして追加 @bolinfest | #8448 chore: add ConfigLayerStack as a field of Config @bolinfest | new-features |
| #7606 機能: 設定済み外部エディタでプロンプトを開く @sayan-oai | #7606 feat: open prompt in configured external editor @sayan-oai | new-features |
| #8449 修正(tui2): ビューポート外のトランスクリプト選択をコピー @joshka-oai | #8449 fix(tui2): copy transcript selection outside viewport @joshka-oai | new-features |
| #8418 作業(tui): ファイルログにトレーシングターゲットを含める @joshka-oai | #8418 chore(tui): include tracing targets in file logs @joshka-oai | new-features |
| #8456 作業: config.toml が空でも ConfigLayerStack に User レイヤーを含める @bolinfest | #8456 chore: include User layer in ConfigLayerStack even if config.toml is empty @bolinfest | new-features |
| #8453 機能: ConfigLayerStack から ExecPolicyManager を読み込み @bolinfest | #8453 feat: load ExecPolicyManager from ConfigLayerStack @bolinfest | new-features |
| #8462 機能(tui2): 選択コピーのショートカット + UI 表示を追加 @joshka-oai | #8462 feat(tui2): add copy selection shortcut + UI affordance @joshka-oai | new-features |
| #8461 機能: /etc/codex/config.toml を尊重 @bolinfest | #8461 feat: honor /etc/codex/config.toml @bolinfest | new-features |
| #8463 修正(tui2): 画面破損を修正 @joshka-oai | #8463 fix(tui2): fix screen corruption @joshka-oai | new-features |
| #8458 作業: ロールアウトログファイルにターンコンテキストをより多く保存 @apanasenko-oai | #8458 chore: save more about turn context in rollout log file @apanasenko-oai | new-features |
| #8466 修正(tui2): ドラッグでトランスクリプト選択を開始 @joshka-oai | #8466 fix(tui2): start transcript selection on drag @joshka-oai | new-features |
| #8293 [tui] TUI ステータスヘッダーにオプションの詳細を追加 @sayan-oai | #8293 [tui] add optional details to TUI status header @sayan-oai | new-features |
| #8471 機能(tui2): マルチクリックトランスクリプト選択を追加 @joshka-oai | #8471 feat(tui2): add multi-click transcript selection @joshka-oai | new-features |
| #8486 修正(codex-cli): ripgrep ダウンロード診断を改善 @joshka-oai | #8486 fix(codex-cli): improve ripgrep download diagnostics @joshka-oai | new-features |
| #8460 修正: 統一実行での exec コマンドの出力サイズを制限 @shijie-oai | #8460 fix: limit output size for exec command in unified exec @shijie-oai | new-features |
| #8493 修正: TMPDIR ではなく cwd に一時ファイルを書き込んでいたテストを修正 @bolinfest | #8493 fix: fix test that was writing temp file to cwd instead of TMPDIR @bolinfest | new-features |
| #8484 推論形式を削除 @aibrahim-oai | #8484 Remove reasoning format @aibrahim-oai | new-features |
| #8499 パフォーマンス(tui): 再描画スケジューリングを 60fps に制限 @joshka-oai | #8499 perf(tui): cap redraw scheduling to 60fps @joshka-oai | new-features |
| #8496 機能: assert_cmd::Command の代替として codex-utils-cargo-bin を導入 @bolinfest | #8496 feat: introduce codex-utils-cargo-bin as an alternative to assert_cmd::Command @bolinfest | new-features |
| #8498 修正: `$CARGO_MANIFEST_DIR` を基準としたテストパスを宣言 @bolinfest | #8498 fix: declare test path relative to `$CARGO_MANIFEST_DIR` @bolinfest | new-features |
| #8307 [作業] StreamErrorEvent に additional_details を追加 + 配線 @sayan-oai | #8307 [chore] add additional_details to StreamErrorEvent + wire through @sayan-oai | new-features |
| #8522 修正: windows-sys を Windows ターゲットに制限 @RunjiLiu | #8522 fix: restrict windows-sys to Windows target @RunjiLiu | new-features |
| #8595 作業(deps): toml_edit を 0.23.7 から 0.24.0+spec-1.1.0 にバンプ in /codex-rs @dependabot | #8595 chore(deps): bump toml_edit from 0.23.7 to 0.24.0+spec-1.1.0 in /codex-rs @dependabot | new-features |
| #8596 作業(deps): tracing-subscriber を 0.3.20 から 0.3.22 にバンプ in /codex-rs @dependabot | #8596 chore(deps): bump tracing-subscriber from 0.3.20 to 0.3.22 in /codex-rs @dependabot | new-features |
| #8597 作業(deps): tokio を 1.47.1 から 1.48.0 にバンプ in /codex-rs @dependabot | #8597 chore(deps): bump tokio from 1.47.1 to 1.48.0 in /codex-rs @dependabot | new-features |
| #8598 作業(deps): regex-lite を 0.1.7 から 0.1.8 にバンプ in /codex-rs @dependabot | #8598 chore(deps): bump regex-lite from 0.1.7 to 0.1.8 in /codex-rs @dependabot | new-features |
| #8491 models etag 不一致時に更新 @aibrahim-oai | #8491 Refresh on models etag mismatch @aibrahim-oai | new-features |
| #8483 各サンドボックスユーザーに個別に付与する代わりに ACL 用の SandboxUsers グループを使用 @iceweasel-oai | #8483 use a SandboxUsers group for ACLs instead of granting to each sandbox user separately @iceweasel-oai | new-features |
| #8676 圧縮リクエストボディをログ記録 @pakrym-oai | #8676 Log compaction request bodies @pakrym-oai | new-features |
| #8488 tui からモデルファミリーを削除 @aibrahim-oai | #8488 Remove model family from tui @aibrahim-oai | new-features |
| #8662 ユーザードキュメントを開発者ドキュメントサイトへのリンクに置き換え @etraut-openai | #8662 Replaced user documentation with links to developers docs site @etraut-openai | new-features |
| #8681 パフォーマンス(tui2): 不要な再描画を削減 @joshka-oai | #8681 perf(tui2): reduce unnecessary redraws @joshka-oai | new-features |
| #8682 README の壊れたリンクを修正 @etraut-openai | #8682 Fixed broken link in README @etraut-openai | new-features |
| #8677 再開時の最後のトークン数を考慮 @aibrahim-oai | #8677 Account for last token count on resume @aibrahim-oai | new-features |
| #8687 機能が無効の場合、リモートモデル更新を完全に無効化 @aibrahim-oai | #8687 hard disable remote models refresh when feature is disabled @aibrahim-oai | new-features |
| #8415 作業(deps): tracing-opentelemetry を 0.31.0 から 0.32.0 にバンプ in /codex-rs @dependabot | #8415 chore(deps): bump tracing-opentelemetry from 0.31.0 to 0.32.0 in /codex-rs @dependabot | new-features |
| #8688 フィードバック送信により多くのタグを添付 @pakrym-oai | #8688 Attach more tags to feedback submissions @pakrym-oai | new-features |
| #8701 作業: 古いドキュメントを更新 @tibo-openai | #8701 chore: update outdated docs @tibo-openai | new-features |
| #8693 パフォーマンス(tui2): トランスクリプトビューのレンダリングをキャッシュ @joshka-oai | #8693 perf(tui2): cache transcript view rendering @joshka-oai | new-features |
| #8697 修正: トランスクリプトコピー表示を明るく @joshka-oai | #8697 fix: brighten transcript copy affordance @joshka-oai | new-features |
| #8629 CI: フォークでのワークフロー実行を防止 @leezenn | #8629 ci: prevent workflows from running on forks @leezenn | new-features |
| #8695 修正(tui2): セル境界でのスクロール固着を回避 @joshka-oai | #8695 fix(tui2): avoid scroll stickiness at cell boundaries @joshka-oai | new-features |
| #8716 修正(tui2): ビューポート下部にコピーピルをレンダリング @joshka-oai | #8716 fix(tui2): render copy pill at viewport bottom @joshka-oai | new-features |
| #8718 tui2: 選択コピーでハイライトを解除 @joshka-oai | #8718 tui2: copy selection dismisses highlight @joshka-oai | new-features |
| #8721 作業(deps): clap_complete を 4.5.57 から 4.5.64 にバンプ in /codex-rs @dependabot | #8721 chore(deps): bump clap_complete from 4.5.57 to 4.5.64 in /codex-rs @dependabot | new-features |
| #8723 作業(deps): tokio-stream を 0.1.17 から 0.1.18 にバンプ in /codex-rs @dependabot | #8723 chore(deps): bump tokio-stream from 0.1.17 to 0.1.18 in /codex-rs @dependabot | new-features |
| #8724 作業(deps): derive_more を 2.0.1 から 2.1.1 にバンプ in /codex-rs @dependabot | #8724 chore(deps): bump derive_more from 2.0.1 to 2.1.1 in /codex-rs @dependabot | new-features |
| #8725 作業(deps): insta を 1.44.3 から 1.46.0 にバンプ in /codex-rs @dependabot | #8725 chore(deps): bump insta from 1.44.3 to 1.46.0 in /codex-rs @dependabot | new-features |
| #8556 修正: chat の複数ツール呼び出し @jif-oai | #8556 fix: chat multiple tool calls @jif-oai | new-features |
| #8738 修正: /review がセッション cwd を尊重 @tibo-openai | #8738 fix: /review to respect session cwd @tibo-openai | new-features |
| #8694 [MCP] MCP ツール名を Responses API と互換性があるようにサニタイズ @gpeal | #8694 [MCP] Sanitize MCP tool names to ensure they are compatible with the Responses APO @gpeal | new-features |
| #8728 機能(tui2): トランスクリプトスクロールバー（自動非表示 + ドラッグ） @joshka-oai | #8728 feat(tui2): transcript scrollbar (auto-hide + drag) @joshka-oai | new-features |
| #8708 修正(codex-api): Chat Completions DONE センチネルを処理 @joshka-oai | #8708 fix(codex-api): handle Chat Completions DONE sentinel @joshka-oai | new-features |
| #8743 (MacOS) MDM から設定要件を読み込み @gt-oai | #8743 (MacOS) Load config requirements from MDM @gt-oai | new-features |
| #8377 機能: outputSchema を user_turn/turn_start app_server API に公開 @apanasenko-oai | #8377 feat: expose outputSchema to user_turn/turn_start app_server API @apanasenko-oai | new-features |
| #8747 作業: GH ページャー @jif-oai | #8747 chore: GH pager @jif-oai | new-features |
| #8686 セットアップ中のファイアウォールルールの作成/更新の冪等性を向上 @iceweasel-oai | #8686 better idempotency for creating/updating firewall rules during setup. @iceweasel-oai | new-features |
| #8683 サンドボックスが .codex/ または .codex/.sandbox/ に書き込みできないように @iceweasel-oai | #8683 never let sandbox write to .codex/ or .codex/.sandbox/ @iceweasel-oai | new-features |
| #8459 作業: スキルレンダーセクションを改善 @gverma-openai | #8459 chore: improve skills render section @gverma-openai | new-features |
| #7858 デバイス認証プロンプトリンクで発行者 URL を使用 @abrar71 | #7858 Use issuer URL in device auth prompt link @abrar71 | new-features |
| #8492 Sandbox ユーザーを「非表示」にするベストエフォート @iceweasel-oai | #8492 best effort to "hide" Sandbox users @iceweasel-oai | new-features |
| #8751 機能: *.rules の prefix_rule() に justification 引数を追加 @bolinfest | #8751 feat: add justification arg to prefix_rule() in *.rules @bolinfest | new-features |

