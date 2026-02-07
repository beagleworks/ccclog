# Claude Code 変更履歴 (2026年 - v2.1.0以降)

このファイルは Claude Code の2026年リリース分（バージョン2.1.0以降）の変更履歴を日本語で記載しています。

---

## 2.1.34

| 日本語 | English |
|--------|---------|
| agent teams 設定がレンダリング間で変更された際のクラッシュを修正 | Fixed a crash when agent teams setting changed between renders |
| サンドボックスから除外されたコマンド（`sandbox.excludedCommands` または `dangerouslyDisableSandbox` 経由）が `autoAllowBashIfSandboxed` 有効時に Bash 許可ルールをバイパスできるバグを修正 | Fixed a bug where commands excluded from sandboxing (via `sandbox.excludedCommands` or `dangerouslyDisableSandbox`) could bypass the Bash ask permission rule when `autoAllowBashIfSandboxed` was enabled |

## 2.1.33

| 日本語 | English |
|--------|---------|
| tmux 内のエージェントチームメイトセッションでのメッセージ送受信を修正 | Fixed agent teammate sessions in tmux to send and receive messages |
| 現在のプランでエージェントチームが利用できない旨の警告表示を修正 | Fixed warnings about agent teams not being available on your current plan |
| マルチエージェントワークフロー向けに `TeammateIdle` と `TaskCompleted` フックイベントを追加 | Added `TeammateIdle` and `TaskCompleted` hook events for multi-agent workflows |
| エージェントの "tools" frontmatter で `Task(agent_type)` 構文によるサブエージェントの起動制限に対応 | Added support for restricting which sub-agents can be spawned via `Task(agent_type)` syntax in agent "tools" frontmatter |
| エージェント向けに `memory` frontmatter フィールドを追加し、`user`、`project`、`local` スコープでの永続的メモリに対応 | Added `memory` frontmatter field support for agents, enabling persistent memory with `user`, `project`, or `local` scope |
| スキルの説明と `/skills` メニューにプラグイン名を表示し、発見性を向上 | Added plugin name to skill descriptions and `/skills` menu for better discoverability |
| モデルが拡張思考中に新しいメッセージを送信すると思考フェーズが中断される問題を修正 | Fixed an issue where submitting a new message while the model was in extended thinking would interrupt the thinking phase |
| ストリーム中の中止時に、空白テキストと thinking ブロックが組み合わさることで正規化がバイパスされ無効なリクエストが生成される API エラーを修正 | Fixed an API error that could occur when aborting mid-stream, where whitespace text combined with a thinking block would bypass normalization and produce an invalid request |
| ストリーミングエンドポイントでの 404 エラーが非ストリーミングフォールバックをトリガーしなくなる API プロキシ互換性の問題を修正 | Fixed API proxy compatibility issue where 404 errors on streaming endpoints no longer triggered non-streaming fallback |
| Node.js ビルドで `settings.json` の環境変数で設定されたプロキシ設定が WebFetch やその他の HTTP リクエストに適用されない問題を修正 | Fixed an issue where proxy settings configured via `settings.json` environment variables were not applied to WebFetch and other HTTP requests on the Node.js build |
| `/resume` のセッション選択画面でスラッシュコマンドで開始されたセッションのタイトルが生の XML マークアップで表示される問題を修正 | Fixed `/resume` session picker showing raw XML markup instead of clean titles for sessions started with slash commands |
| API 接続エラーのエラーメッセージを改善し、汎用的な「接続エラー」ではなく具体的な原因(例: ECONNREFUSED、SSL エラー)を表示 | Improved error messages for API connection failures — now shows specific cause (e.g., ECONNREFUSED, SSL errors) instead of generic "Connection error" |
| 無効な管理設定によるエラーを表示するように変更 | Errors from invalid managed settings are now surfaced |
| VSCode: リモートセッションに対応し、OAuth ユーザーが claude.ai からセッションを参照・再開可能に | VSCode: Added support for remote sessions, allowing OAuth users to browse and resume sessions from claude.ai |
| VSCode: セッション選択画面に git ブランチとメッセージ数を追加し、ブランチ名での検索に対応 | VSCode: Added git branch and message count to the session picker, with support for searching by branch name |
| VSCode: 初回セッション読み込みとセッション切り替え時の最下部スクロールの不足を修正 | VSCode: Fixed scroll-to-bottom under-scrolling on initial session load and session switch |

## 2.1.32

| 日本語 | English |
|--------|---------|
| Claude Opus 4.6 が利用可能に | Claude Opus 4.6 is now available! |
| マルチエージェント連携のためのリサーチプレビュー機能「エージェントチーム」を追加（トークン集約的機能、CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1 の設定が必要） | Added research preview agent teams feature for multi-agent collaboration (token-intensive feature, requires setting CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1) |
| Claude が作業中に自動的にメモリを記録・参照する機能を追加 | Claude now automatically records and recalls memories as it works |
| メッセージセレクターに「ここから要約」を追加し、会話の部分的な要約が可能に | Added "Summarize from here" to the message selector, allowing partial conversation summarization. |
| 追加ディレクトリ（`--add-dir`）内の `.claude/skills/` で定義されたスキルが自動的に読み込まれるように変更 | Skills defined in `.claude/skills/` within additional directories (`--add-dir`) are now loaded automatically. |
| サブディレクトリから実行時に `@` ファイル補完が誤った相対パスを表示する問題を修正 | Fixed `@` file completion showing incorrect relative paths when running from a subdirectory |
| --resume オプションが以前の会話で指定された --agent の値をデフォルトで再利用するように更新 | Updated --resume to re-use --agent value specified in previous conversation by default. |
| Bash ツールで heredoc 内に `${index + 1}` のような JavaScript テンプレートリテラルが含まれる場合に「Bad substitution」エラーが発生しツール実行が中断される問題を修正 | Fixed: Bash tool no longer throws "Bad substitution" errors when heredocs contain JavaScript template literals like `${index + 1}`, which previously interrupted tool execution |
| スキル文字予算がコンテキストウィンドウに応じてスケール（コンテキストの 2%）するように変更し、大きなコンテキストウィンドウを持つユーザーがより多くのスキル説明を切り捨てなしで閲覧可能に | Skill character budget now scales with context window (2% of context), so users with larger context windows can see more skill descriptions without truncation |
| タイ語/ラオ語のスペーシング母音（สระ า, ำ）が入力フィールドで正しくレンダリングされない問題を修正 | Fixed Thai/Lao spacing vowels (สระ า, ำ) not rendering correctly in the input field |
| VSCode: 入力フィールドに先行テキストがある状態で Enter を押すとスラッシュコマンドが誤って実行される問題を修正 | VSCode: Fixed slash commands incorrectly being executed when pressing Enter with preceding text in the input field |
| VSCode: 過去の会話リスト読み込み時にスピナーを追加 | VSCode: Added spinner when loading past conversations list |

## 2.1.31

| 日本語 | English |
|--------|---------|
| セッション終了時に、後で会話を再開する方法を示すヒントを追加 | Added session resume hint on exit, showing how to continue your conversation later |
| チェックボックス選択で日本語IMEからの全角スペース入力に対応 | Added support for full-width (zenkaku) space input from Japanese IME in checkbox selection |
| PDF が大きすぎるエラーでセッションが永続的にロックされ、新しい会話の開始を強制される問題を修正 | Fixed PDF too large errors permanently locking up sessions, requiring users to start a new conversation |
| サンドボックスモードが有効な場合に bash コマンドが誤って "Read-only file system" エラーで失敗と報告される問題を修正 | Fixed bash commands incorrectly reporting failure with "Read-only file system" errors when sandbox mode was enabled |
| `~/.claude.json` のプロジェクト設定にデフォルトフィールドが欠けている場合、プランモード移行後にセッションが使用不能になるクラッシュを修正 | Fixed a crash that made sessions unusable after entering plan mode when project config in `~/.claude.json` was missing default fields |
| ストリーミング API パスで `temperatureOverride` が無視され、設定された上書き値に関わらずすべてのストリーミングリクエストがデフォルト温度(1)を使用する問題を修正 | Fixed `temperatureOverride` being silently ignored in the streaming API path, causing all streaming requests to use the default temperature (1) regardless of the configured override |
| null パラメータを拒否する厳格な言語サーバーとの LSP shutdown/exit 互換性を修正 | Fixed LSP shutdown/exit compatibility with strict language servers that reject null params |
| bash の代わりに専用ツール(Read, Edit, Glob, Grep)を使用するようモデルをより明確に誘導するようシステムプロンプトを改善し、不要な bash コマンド使用を削減 | Improved system prompts to more clearly guide the model toward using dedicated tools (Read, Edit, Glob, Grep) instead of bash equivalents (`cat`, `sed`, `grep`, `find`), reducing unnecessary bash command usage |
| PDF およびリクエストサイズエラーメッセージで実際の制限(100ページ、20MB)を表示するよう改善 | Improved PDF and request size error messages to show actual limits (100 pages, 20MB) |
| ストリーミング中にスピナーが表示/非表示になる際のターミナルのレイアウトジッターを削減 | Reduced layout jitter in the terminal when the spinner appears and disappears during streaming |
| サードパーティプロバイダー(Bedrock, Vertex, Foundry)ユーザー向けのモデル選択から誤解を招く Anthropic API 価格表示を削除 | Removed misleading Anthropic API pricing from model selector for third-party provider (Bedrock, Vertex, Foundry) users |

## 2.1.30

| 日本語 | English |
|--------|---------|
| Read ツールに PDF 用の `pages` パラメータを追加し、特定のページ範囲の読み込みに対応（例: `pages: "1-5"`）。大きな PDF（10ページ超）を `@` でメンションした際、コンテキストに展開せず軽量な参照を返すように変更 | Added `pages` parameter to the Read tool for PDFs, allowing specific page ranges to be read (e.g., `pages: "1-5"`). Large PDFs (>10 pages) now return a lightweight reference when `@` mentioned instead of being inlined into context. |
| Dynamic Client Registration 非対応の MCP サーバー（Slack など）向けに事前設定済み OAuth クライアント認証情報を追加。`claude mcp add` で `--client-id` と `--client-secret` を使用可能 | Added pre-configured OAuth client credentials for MCP servers that don't support Dynamic Client Registration (e.g., Slack). Use `--client-id` and `--client-secret` with `claude mcp add`. |
| 現在のセッションのトラブルシューティングを Claude が支援する `/debug` コマンドを追加 | Added `/debug` for Claude to help troubleshoot the current session |
| 読み取り専用モードで追加の `git log` および `git show` フラグをサポート（例: `--topo-order`、`--cherry-pick`、`--format`、`--raw`） | Added support for additional `git log` and `git show` flags in read-only mode (e.g., `--topo-order`, `--cherry-pick`, `--format`, `--raw`) |
| Task ツールの結果にトークン数、ツール使用回数、実行時間のメトリクスを追加 | Added token count, tool uses, and duration metrics to Task tool results |
| 設定にモーション軽減モードを追加 | Added reduced motion mode to the config |
| API 会話履歴に出現する幻の「(no content)」テキストブロックを修正し、トークンの無駄遣いとモデルの混乱を軽減 | Fixed phantom "(no content)" text blocks appearing in API conversation history, reducing token waste and potential model confusion |
| ツール名のみ変更時にプロンプトキャッシュが無効化され、ツールの説明や入力スキーマ変更時に正しく無効化されなかった問題を修正 | Fixed prompt cache not correctly invalidating when tool descriptions or input schemas changed, only when tool names changed |
| thinking ブロックを含む会話で `/login` 実行後に発生する 400 エラーを修正 | Fixed 400 errors that could occur after running `/login` when the conversation contained thinking blocks |
| `parentUuid` 循環を含む破損したトランスクリプトファイルでセッション再開時にハングする問題を修正 | Fixed a hang when resuming sessions with corrupted transcript files containing `parentUuid` cycles |
| Max 20x ユーザーが extra-usage 利用不可の場合に、レート制限メッセージが誤った「/upgrade」提案を表示する問題を修正 | Fixed rate limit message showing incorrect "/upgrade" suggestion for Max 20x users when extra-usage is unavailable |
| 入力中にパーミッションダイアログがフォーカスを奪う問題を修正 | Fixed permission dialogs stealing focus while actively typing |
| SDK 提供の MCP ツールが共有アプリケーション状態に同期されず、サブエージェントがアクセスできなかった問題を修正 | Fixed subagents not being able to access SDK-provided MCP tools because they were not synced to the shared application state |
| `.bashrc` ファイルを持つ Windows ユーザーが bash コマンドを実行できなかったリグレッションを修正 | Fixed a regression where Windows users with a `.bashrc` file could not run bash commands |
| セッションインデックスを軽量な stat ベースの読み込みと段階的エンリッチメントに置き換え、`--resume` のメモリ使用量を改善（多数のセッションを持つユーザーで 68% 削減） | Improved memory usage for `--resume` (68% reduction for users with many sessions) by replacing the session index with lightweight stat-based loading and progressive enrichment |
| `TaskStop` ツールの結果行に、汎用的な「Task stopped」メッセージではなく、停止されたコマンド/タスクの説明を表示するように改善 | Improved `TaskStop` tool to display the stopped command/task description in the result line instead of a generic "Task stopped" message |
| `/model` コマンドがキューに入らず即座に実行されるように変更 | Changed `/model` to execute immediately instead of being queued |
| [VSCode] 質問ダイアログの「その他」テキスト入力で複数行入力をサポート（Shift+Enter で改行） | [VSCode] Added multiline input support to the "Other" text input in question dialogs (use Shift+Enter for new lines) |
| [VSCode] 新しい会話開始時にセッションリストに重複したセッションが表示される問題を修正 | [VSCode] Fixed duplicate sessions appearing in the session list when starting a new conversation |

## 2.1.29

| 日本語 | English |
|--------|---------|
| `saved_hook_context` を持つセッションを再開する際の起動パフォーマンス問題を修正 | Fixed startup performance issues when resuming sessions that have `saved_hook_context` |

## 2.1.27

| 日本語 | English |
|--------|---------|
| ツール呼び出しの失敗と拒否をデバッグログに追加 | Added tool call failures and denials to debug logs |
| ゲートウェイユーザーのコンテキスト管理検証エラーを修正し、`CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS=1` でエラーを回避可能に | Fixed context management validation error for gateway users, ensuring `CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS=1` avoids the error |
| 特定の GitHub PR 番号または URL にリンクされたセッションを再開する `--from-pr` フラグを追加 | Added `--from-pr` flag to resume sessions linked to a specific GitHub PR number or URL |
| `gh pr create` 経由で作成された際にセッションが PR に自動リンクされるように変更 | Sessions are now automatically linked to PRs when created via `gh pr create` |
| /context コマンドがカラー出力を表示しない問題を修正 | Fixed /context command not displaying colored output |
| PR ステータス表示時にステータスバーがバックグラウンドタスクインジケーターを重複表示する問題を修正 | Fixed status bar duplicating background task indicator when PR status was shown |
| Windows: `.bashrc` ファイルを持つユーザーで bash コマンド実行が失敗する問題を修正 | Windows: Fixed bash command execution failing for users with `.bashrc` files |
| Windows: 子プロセス起動時にコンソールウィンドウが点滅する問題を修正 | Windows: Fixed console windows flashing when spawning child processes |
| VSCode: 長時間セッション後に OAuth トークンの期限切れで 401 エラーが発生する問題を修正 | VSCode: Fixed OAuth token expiration causing 401 errors after extended sessions |

## 2.1.25

| 日本語 | English |
|--------|---------|
| Bedrock および Vertex のゲートウェイユーザーに対するベータヘッダー検証エラーを修正し、`CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS=1` でエラーを回避可能に | Fixed beta header validation error for gateway users on Bedrock and Vertex, ensuring `CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS=1` avoids the error |

## 2.1.23

| 日本語 | English |
|--------|---------|
| カスタマイズ可能なスピナー動詞設定（`spinnerVerbs`）を追加 | Added customizable spinner verbs setting (`spinnerVerbs`) |
| 企業プロキシ配下またはクライアント証明書使用時の mTLS とプロキシ接続を修正 | Fixed mTLS and proxy connectivity for users behind corporate proxies or using client certificates |
| 共有システムにおける権限競合を防ぐため、ユーザーごとの一時ディレクトリ分離を修正 | Fixed per-user temp directory isolation to prevent permission conflicts on shared systems |
| プロンプトキャッシングスコープ有効時に 400 エラーを引き起こす可能性のある競合状態を修正 | Fixed a race condition that could cause 400 errors when prompt caching scope was enabled |
| ヘッドレスストリーミングセッション終了時に未処理の非同期フックがキャンセルされない問題を修正 | Fixed pending async hooks not being cancelled when headless streaming sessions ended |
| タブ補完で候補を受け入れた際に入力フィールドが更新されない問題を修正 | Fixed tab completion not updating the input field when accepting a suggestion |
| ripgrep 検索のタイムアウトがエラー報告なしに空の結果を返す問題を修正 | Fixed ripgrep search timeouts silently returning empty results instead of reporting errors |
| 最適化された画面データレイアウトによりターミナルレンダリングパフォーマンスを改善 | Improved terminal rendering performance with optimized screen data layout |
| Bash コマンドで経過時間に加えてタイムアウト時間を表示するよう変更 | Changed Bash commands to show timeout duration alongside elapsed time |
| マージされたプルリクエストをプロンプトフッターで紫色のステータスインジケータ表示に変更 | Changed merged pull requests to show a purple status indicator in the prompt footer |
| [IDE] ヘッドレスモードの Bedrock ユーザーに対してモデルオプションが不正なリージョン文字列を表示する問題を修正 | [IDE] Fixed model options displaying incorrect region strings for Bedrock users in headless mode |

## 2.1.22

| 日本語 | English |
|--------|---------|
| 非対話モード（-p）における構造化出力を修正 | Fixed structured outputs for non-interactive (-p) mode |

## 2.1.21

| 日本語 | English |
|--------|---------|
| オプション選択プロンプトで日本語 IME からの全角数字入力に対応 | Added support for full-width (zenkaku) number input from Japanese IME in option selection prompts |
| 終了時にシェル補完キャッシュファイルが切り詰められる問題を修正 | Fixed shell completion cache files being truncated on exit |
| ツール実行中に中断されたセッションの再開時に API エラーが発生する問題を修正 | Fixed API errors when resuming sessions that were interrupted during tool execution |
| 出力トークン制限が大きいモデルで自動コンパクトが早期に発動する問題を修正 | Fixed auto-compact triggering too early on models with large output token limits |
| 削除後にタスク ID が再利用される可能性がある問題を修正 | Fixed task IDs potentially being reused after deletion |
| VS Code 拡張機能で Windows 上のファイル検索が動作しない問題を修正 | Fixed file search not working in VS Code extension on Windows |
| 読み込み・検索の進行状況インジケーターを改善し、進行中は「Reading…」、完了時は「Read」と表示 | Improved read/search progress indicators to show "Reading…" while in progress and "Read" when complete |
| Claude が bash コマンド（cat、sed、awk）よりもファイル操作ツール（Read、Edit、Write）を優先するよう改善 | Improved Claude to prefer file operation tools (Read, Edit, Write) over bash equivalents (cat, sed, awk) |
| [VSCode] Python 仮想環境の自動アクティベーションを追加し、`python` および `pip` コマンドが正しいインタープリターを使用するよう対応（`claudeCode.usePythonEnvironment` 設定で変更可能） | [VSCode] Added automatic Python virtual environment activation, ensuring `python` and `pip` commands use the correct interpreter (configurable via `claudeCode.usePythonEnvironment` setting) |
| [VSCode] メッセージアクションボタンの背景色が不適切だった問題を修正 | [VSCode] Fixed message action buttons having incorrect background colors |

## 2.1.20

| 日本語 | English |
|--------|---------|
| Vim ノーマルモードでカーソルがそれ以上移動できない場合に矢印キーによる履歴ナビゲーションを追加 | Added arrow key history navigation in vim normal mode when cursor cannot move further |
| 外部エディタショートカット（Ctrl+G）をヘルプメニューに追加し発見性を向上 | Added external editor shortcut (Ctrl+G) to the help menu for better discoverability |
| プロンプトフッターに PR レビュー状態インジケーターを追加し、現在のブランチの PR 状態（承認済み、変更要求、保留中、ドラフト）を色付きドットとクリック可能なリンクで表示 | Added PR review status indicator to the prompt footer, showing the current branch's PR state (approved, changes requested, pending, or draft) as a colored dot with a clickable link |
| `--add-dir` フラグで指定した追加ディレクトリからの `CLAUDE.md` ファイル読み込みに対応（`CLAUDE_CODE_ADDITIONAL_DIRECTORIES_CLAUDE_MD=1` の設定が必要） | Added support for loading `CLAUDE.md` files from additional directories specified via `--add-dir` flag (requires setting `CLAUDE_CODE_ADDITIONAL_DIRECTORIES_CLAUDE_MD=1`) |
| `TaskUpdate` ツールによるタスク削除機能を追加 | Added ability to delete tasks via the `TaskUpdate` tool |
| セッション圧縮の問題を修正し、レジュームが完全な履歴ではなく圧縮サマリーを読み込むように改善 | Fixed session compaction issues that could cause resume to load full history instead of the compact summary |
| タスク実行中に送信されたユーザーメッセージをエージェントが無視する問題を修正 | Fixed agents sometimes ignoring user messages sent while actively working on a task |
| 絵文字や CJK 文字などのワイド文字がより狭い文字に置き換えられた際に、末尾の列がクリアされずに残るレンダリングの問題を修正 | Fixed wide character (emoji, CJK) rendering artifacts where trailing columns were not cleared when replaced by narrower characters |
| MCP ツールレスポンスに特殊な Unicode 文字が含まれる場合の JSON パース エラーを修正 | Fixed JSON parsing errors when MCP tool responses contain special Unicode characters |
| 複数行および折り返しテキスト入力での上下矢印キーが履歴ナビゲーションよりもカーソル移動を優先するように修正 | Fixed up/down arrow keys in multi-line and wrapped text input to prioritize cursor movement over history navigation |
| コマンド履歴ナビゲーションで UP キーを押した際にドラフトプロンプトが失われる問題を修正 | Fixed draft prompt being lost when pressing UP arrow to navigate command history |
| 入力中にスラッシュコマンドを入力した際のゴーストテキストのちらつきを修正 | Fixed ghost text flickering when typing slash commands mid-input |
| マーケットプレイスソース削除時に設定が正しく削除されない問題を修正 | Fixed marketplace source removal not properly deleting settings |
| `/context` などの一部コマンドで出力が重複する問題を修正 | Fixed duplicate output in some commands like `/context` |
| タスクリストがメイン会話ビューの外に表示されることがある問題を修正 | Fixed task list sometimes showing outside the main conversation view |
| Python docstring などの複数行構文内での diff のシンタックスハイライトを修正 | Fixed syntax highlighting for diffs occurring within multiline constructs like Python docstrings |
| ツール使用のキャンセル時にクラッシュする問題を修正 | Fixed crashes when cancelling tool use |
| `/sandbox` コマンドの UI を改善し、依存関係が不足している場合にインストール手順付きで依存関係の状態を表示 | Improved `/sandbox` command UI to show dependency status with installation instructions when dependencies are missing |
| シンキング状態テキストに微妙なシマーアニメーションを追加 | Improved thinking status text with a subtle shimmer animation |
| タスクリストがターミナルの高さに応じて表示項目を動的に調整するように改善 | Improved task list to dynamically adjust visible items based on terminal height |
| 会話のフォークヒントを改善し、元のセッションを再開する方法を表示 | Improved fork conversation hint to show how to resume the original session |
| 折りたたまれた読み取り・検索グループが進行中は現在形（「Reading」「Searching for」）、完了後は過去形（「Read」「Searched for」）で表示されるように変更 | Changed collapsed read/search groups to show present tense ("Reading", "Searching for") while in progress, and past tense ("Read", "Searched for") when complete |
| `ToolSearch` の結果が会話内インラインではなく簡潔な通知として表示されるように変更 | Changed `ToolSearch` results to appear as a brief notification instead of inline in the conversation |
| `/commit-push-pr` スキルが MCP ツール経由で設定された場合に自動的に PR URL を Slack チャンネルに投稿するように変更 | Changed the `/commit-push-pr` skill to automatically post PR URLs to Slack channels when configured via MCP tools |
| `/copy` コマンドを全ユーザーが利用可能に変更 | Changed the `/copy` command to be available to all users |
| バックグラウンドエージェントが起動前にツール権限のプロンプトを表示するように変更 | Changed background agents to prompt for tool permissions before launching |
| `Bash(*)` のような権限ルールが受け入れられ `Bash` と同等に扱われるように変更 | Changed permission rules like `Bash(*)` to be accepted and treated as equivalent to `Bash` |
| データ損失を防ぐため、設定バックアップをタイムスタンプ付きでローテーション（直近5つを保持）するように変更 | Changed config backups to be timestamped and rotated (keeping 5 most recent) to prevent data loss |

## 2.1.19

| 日本語 | English |
|--------|---------|
| 環境変数 `CLAUDE_CODE_ENABLE_TASKS` を追加、`false` に設定することで一時的に旧システムを維持可能 | Added env var `CLAUDE_CODE_ENABLE_TASKS`, set to `false` to keep the old system temporarily |
| カスタムコマンドで個別の引数にアクセスするための短縮記法 `$0`、`$1` などを追加 | Added shorthand `$0`, `$1`, etc. for accessing individual arguments in custom commands |
| AVX 命令セットをサポートしないプロセッサでのクラッシュを修正 | Fixed crashes on processors without AVX instruction support |
| `process.exit()` からの EIO エラーをキャッチし、フォールバックとして SIGKILL を使用することで、ターミナル終了時に残る Claude Code プロセスを修正 | Fixed dangling Claude Code processes when terminal is closed by catching EIO errors from `process.exit()` and using SIGKILL as fallback |
| git worktree などの異なるディレクトリから再開した際に `/rename` と `/tag` が正しいセッションを更新しない問題を修正 | Fixed `/rename` and `/tag` not updating the correct session when resuming from a different directory (e.g., git worktrees) |
| 異なるディレクトリから実行した際にカスタムタイトルでのセッション再開が機能しない問題を修正 | Fixed resuming sessions by custom title not working when run from a different directory |
| プロンプト一時保存（Ctrl+S）と復元を使用した際に貼り付けたテキストコンテンツが失われる問題を修正 | Fixed pasted text content being lost when using prompt stash (Ctrl+S) and restore |
| 明示的なモデル設定のないエージェントに対してエージェントリストが "Inherit (default)" ではなく "Sonnet (default)" と表示される問題を修正 | Fixed agent list displaying "Sonnet (default)" instead of "Inherit (default)" for agents without an explicit model setting |
| バックグラウンド実行されたフックコマンドが早期リターンせず、意図的にバックグラウンド化されたプロセスをセッションが待機する可能性がある問題を修正 | Fixed backgrounded hook commands not returning early, potentially causing the session to wait on a process that was intentionally backgrounded |
| ファイル書き込みプレビューで空行が省略される問題を修正 | Fixed file write preview omitting empty lines |
| 追加の権限やフックを必要としないスキルを承認なしで許可するように変更 | Changed skills without additional permissions or hooks to be allowed without requiring approval |
| インデックス付き引数の構文を `$ARGUMENTS.0` から `$ARGUMENTS[0]`（ブラケット構文）に変更 | Changed indexed argument syntax from `$ARGUMENTS.0` to `$ARGUMENTS[0]` (bracket syntax) |
| [SDK] `replayUserMessages` が有効な場合に `queued_command` アタッチメントメッセージを `SDKUserMessageReplay` イベントとして再生する機能を追加 | [SDK] Added replay of `queued_command` attachment messages as `SDKUserMessageReplay` events when `replayUserMessages` is enabled |
| [VSCode] すべてのユーザーに対してセッションのフォークと巻き戻し機能を有効化 | [VSCode] Enabled session forking and rewind functionality for all users |

## 2.1.18

| 日本語 | English |
|--------|---------|
| キーボードショートカットのカスタマイズに対応。コンテキスト別のキー割り当て、コードシーケンスの作成、ワークフローのパーソナライズが可能。`/keybindings` で設定を開始。詳細は https://code.claude.com/docs/en/keybindings を参照 | Added customizable keyboard shortcuts. Configure keybindings per context, create chord sequences, and personalize your workflow. Run `/keybindings` to get started. Learn more at https://code.claude.com/docs/en/keybindings |

## 2.1.17

| 日本語 | English |
|--------|---------|
| AVX 命令セット非対応プロセッサでのクラッシュを修正 | Fixed crashes on processors without AVX instruction support |

## 2.1.16

| 日本語 | English |
|--------|---------|
| 依存関係追跡などの新機能を含む、新しいタスク管理システムを追加 | Added new task management system, including new capabilities like dependency tracking |
| [VSCode] ネイティブプラグイン管理サポートを追加 | [VSCode] Added native plugin management support |
| [VSCode] OAuth ユーザーがセッションダイアログからリモート Claude セッションを閲覧・再開できる機能を追加 | [VSCode] Added ability for OAuth users to browse and resume remote Claude sessions from the Sessions dialog |
| サブエージェントを多用したセッション再開時のメモリ不足クラッシュを修正 | Fixed out-of-memory crashes when resuming sessions with heavy subagent usage |
| `/compact` 実行後に「残りコンテキスト」警告が非表示にならない問題を修正 | Fixed an issue where the "context remaining" warning was not hidden after running `/compact` |
| 再開画面のセッションタイトルがユーザーの言語設定を反映しない問題を修正 | Fixed session titles on the resume screen not respecting the user's language setting |
| [IDE] Windows 環境で起動時に Claude Code サイドバービューコンテナが表示されない競合状態を修正 | [IDE] Fixed a race condition on Windows where the Claude Code sidebar view container would not appear on start |

## 2.1.15

| 日本語 | English |
|--------|---------|
| npm インストールの非推奨通知を追加 - `claude install` を実行するか、詳細は https://docs.anthropic.com/en/docs/claude-code/getting-started を参照 | Added deprecation notification for npm installations - run `claude install` or see https://docs.anthropic.com/en/docs/claude-code/getting-started for more options |
| React Compiler による UI レンダリングパフォーマンスの改善 | Improved UI rendering performance with React Compiler |
| `/compact` 実行後に「自動圧縮までの残りコンテキスト」警告が消えない問題を修正 | Fixed the "Context left until auto-compact" warning not disappearing after running `/compact` |
| MCP stdio サーバーのタイムアウトが子プロセスを終了せず UI フリーズを引き起こす可能性がある問題を修正 | Fixed MCP stdio server timeout not killing child process, which could cause UI freezes |

## 2.1.14

| 日本語 | English |
|--------|---------|
| bash モード（`!`）に履歴ベースのオートコンプリート機能を追加 - コマンドの一部を入力して Tab を押すと bash コマンド履歴から補完 | Added history-based autocomplete in bash mode (`!`) - type a partial command and press Tab to complete from your bash command history |
| インストール済みプラグインリストに検索機能を追加 - 名前や説明で絞り込み可能 | Added search to installed plugins list - type to filter by name or description |
| プラグインを特定の git コミット SHA にピン留めする機能に対応し、マーケットプレイスから正確なバージョンをインストール可能に | Added support for pinning plugins to specific git commit SHAs, allowing marketplace entries to install exact versions |
| コンテキストウィンドウのブロック制限が過剰に計算され、意図した〜98%ではなく〜65%でブロックされていた不具合を修正 | Fixed a regression where the context window blocking limit was calculated too aggressively, blocking users at ~65% context usage instead of the intended ~98% |
| 並列サブエージェント実行時にクラッシュを引き起こす可能性があったメモリ問題を修正 | Fixed memory issues that could cause crashes when running parallel subagents |
| シェルコマンド完了後にストリームリソースがクリーンアップされず、長時間セッションでメモリリークが発生していた問題を修正 | Fixed memory leak in long-running sessions where stream resources were not cleaned up after shell commands completed |
| bash モードで `@` 記号が誤ってファイルオートコンプリート候補をトリガーしていた問題を修正 | Fixed `@` symbol incorrectly triggering file autocomplete suggestions in bash mode |
| `@` メンション メニューでフォルダをクリックした際、選択ではなくディレクトリ内に移動するよう動作を修正 | Fixed `@`-mention menu folder click behavior to navigate into directories instead of selecting them |
| `/feedback` コマンドで説明が非常に長い場合に無効な GitHub issue URL が生成されていた問題を修正 | Fixed `/feedback` command generating invalid GitHub issue URLs when description is very long |
| `/context` コマンドの詳細モードで、ステータスラインと同じトークン数とパーセンテージを表示するよう修正 | Fixed `/context` command to show the same token count and percentage as the status line in verbose mode |
| `/config`、`/context`、`/model`、`/todos` コマンドのオーバーレイが予期せず閉じることがあった問題を修正 | Fixed an issue where `/config`, `/context`, `/model`, and `/todos` command overlays could close unexpectedly |
| 類似コマンド（例: `/context` と `/compact`）を入力した際にスラッシュコマンドのオートコンプリートが誤ったコマンドを選択していた問題を修正 | Fixed slash command autocomplete selecting wrong command when typing similar commands (e.g., `/context` vs `/compact`) |
| マーケットプレイスが 1 つだけ設定されている場合のプラグインマーケットプレイスでの戻るナビゲーションの不整合を修正 | Fixed inconsistent back navigation in plugin marketplace when only one marketplace is configured |
| iTerm2 のプログレスバーが終了時に正しくクリアされず、インジケーターやベル音が残り続けていた問題を修正 | Fixed iTerm2 progress bar not clearing properly on exit, preventing lingering indicators and bell sounds |
| バックスペースでペーストしたテキストを 1 文字ずつではなく 1 トークンとして削除するよう改善 | Improved backspace to delete pasted text as a single token instead of one character at a time |
| [VSCode] 現在のプラン使用状況を表示する `/usage` コマンドを追加 | [VSCode] Added `/usage` command to display current plan usage |

## 2.1.12

| 日本語 | English |
|--------|---------|
| メッセージ表示バグを修正 | Fixed message rendering bug |

## 2.1.11

| 日本語 | English |
|--------|---------|
| HTTP/SSE トランスポートでの過剰な MCP 接続リクエストを修正 | Fixed excessive MCP connection requests for HTTP/SSE transports |

## 2.1.10

| 日本語 | English |
|--------|---------|
| リポジトリのセットアップとメンテナンス操作用に `--init`、`--init-only`、`--maintenance` CLI フラグでトリガー可能な新しい `Setup` フック イベントを追加 | Added new `Setup` hook event that can be triggered via `--init`, `--init-only`, or `--maintenance` CLI flags for repository setup and maintenance operations |
| ログイン時にブラウザが自動的に開かない場合に OAuth URL をコピーするキーボード ショートカット 'c' を追加 | Added keyboard shortcut 'c' to copy OAuth URL when browser doesn't open automatically during login |
| `${index + 1}` のような JavaScript テンプレートリテラルを含むヒアドキュメントを含む bash コマンド実行時のクラッシュを修正 | Fixed a crash when running bash commands containing heredocs with JavaScript template literals like `${index + 1}` |
| REPL が完全に準備される前に入力されたキーストロークをキャプチャするよう起動処理を改善 | Improved startup to capture keystrokes typed before the REPL is fully ready |
| ファイル サジェスチョンを受け入れ時にテキスト挿入ではなく削除可能な添付ファイルとして表示するよう改善 | Improved file suggestions to show as removable attachments instead of inserting text when accepted |
| [VSCode] プラグイン一覧にインストール数の表示を追加 | [VSCode] Added install count display to plugin listings |
| [VSCode] プラグインインストール時に信頼性警告を追加 | [VSCode] Added trust warning when installing plugins |

## 2.1.9

| 日本語 | English |
|--------|---------|
| MCP ツール検索の自動有効化しきい値を設定する `auto:N` 構文を追加（N はコンテキストウィンドウのパーセンテージ 0-100） | Added `auto:N` syntax for configuring the MCP tool search auto-enable threshold, where N is the context window percentage (0-100) |
| プランファイルの保存場所をカスタマイズする `plansDirectory` 設定を追加 | Added `plansDirectory` setting to customize where plan files are stored |
| AskUserQuestion の「その他」入力フィールドで外部エディタサポート（Ctrl+G）を追加 | Added external editor support (Ctrl+G) in AskUserQuestion "Other" input field |
| Web セッションから作成されたコミットと PR にセッション URL の帰属情報を追加 | Added session URL attribution to commits and PRs created from web sessions |
| `PreToolUse` フックから `additionalContext` をモデルに返す機能を追加 | Added support for `PreToolUse` hooks to return `additionalContext` to the model |
| スキルが現在のセッション ID にアクセスするための `${CLAUDE_SESSION_ID}` 文字列置換を追加 | Added `${CLAUDE_SESSION_ID}` string substitution for skills to access the current session ID |
| 並列ツール呼び出しを含む長時間セッションで孤立した tool_result ブロックに関する API エラーが発生する問題を修正 | Fixed long sessions with parallel tool calls failing with an API error about orphan tool_result blocks |
| キャッシュされた接続 Promise が解決されない場合に MCP サーバーの再接続がハングする問題を修正 | Fixed MCP server reconnection hanging when cached connection promise never resolves |
| Kitty キーボードプロトコルを使用する端末（Ghostty、iTerm2、kitty、WezTerm）で Ctrl+Z サスペンドが機能しない問題を修正 | Fixed Ctrl+Z suspend not working in terminals using Kitty keyboard protocol (Ghostty, iTerm2, kitty, WezTerm) |

## 2.1.7

| 日本語 | English |
|--------|---------|
| ターン実行時間メッセージ（例：「Cooked for 1m 6s」）を非表示にする `showTurnDuration` 設定を追加 | Added `showTurnDuration` setting to hide turn duration messages (e.g., "Cooked for 1m 6s") |
| パーミッションプロンプトの承認時にフィードバックを提供する機能を追加 | Added ability to provide feedback when accepting permission prompts |
| タスク通知にエージェントの最終応答をインライン表示し、完全なトランスクリプトファイルを読まなくても結果を確認可能に | Added inline display of agent's final response in task notifications, making it easier to see results without reading the full transcript file |
| ワイルドカードパーミッションルールがシェル演算子を含む複合コマンドにマッチする可能性があったセキュリティ脆弱性を修正 | Fixed security vulnerability where wildcard permission rules could match compound commands containing shell operators |
| Windows 環境でクラウド同期ツール、アンチウイルススキャナー、Git がコンテンツを変更せずにファイルのタイムスタンプのみを更新した際に発生する誤った「ファイル変更」エラーを修正 | Fixed false "file modified" errors on Windows when cloud sync tools, antivirus scanners, or Git touch file timestamps without changing content |
| ストリーミング実行中に兄弟ツールが失敗した際の孤立した tool_result エラーを修正 | Fixed orphaned tool_result errors when sibling tools fail during streaming execution |
| コンテキストウィンドウのブロック制限が、最大出力トークン用のスペースを確保した実効コンテキストウィンドウではなく、完全なコンテキストウィンドウで計算されていた問題を修正 | Fixed context window blocking limit being calculated using the full context window instead of the effective context window (which reserves space for max output tokens) |
| `/model` や `/theme` などのローカルスラッシュコマンド実行時にスピナーが一瞬表示される問題を修正 | Fixed spinner briefly flashing when running local slash commands like `/model` or `/theme` |
| 固定幅のブレイル文字を使用してターミナルタイトルアニメーションのちらつきを修正 | Fixed terminal title animation jitter by using fixed-width braille characters |
| git サブモジュールを含むプラグインがインストール時に完全に初期化されない問題を修正 | Fixed plugins with git submodules not being fully initialized when installed |
| Windows 環境で一時ディレクトリパスに `t` や `n` などの文字が含まれている場合、エスケープシーケンスとして誤解釈され bash コマンドが失敗する問題を修正 | Fixed bash commands failing on Windows when temp directory paths contained characters like `t` or `n` that were misinterpreted as escape sequences |
| ターミナルレンダリングにおけるメモリ割り当てオーバーヘッドを削減し、タイピングの応答性を改善 | Improved typing responsiveness by reducing memory allocation overhead in terminal rendering |
| すべてのユーザーに対して MCP ツール検索自動モードをデフォルトで有効化 | Enabled MCP tool search auto mode by default for all users |
| OAuth と API コンソールの URL を console.anthropic.com から platform.claude.com に変更 | Changed OAuth and API Console URLs from console.anthropic.com to platform.claude.com |
| [VSCode] `claudeProcessWrapper` 設定が Claude バイナリパスではなくラッパーパスを渡していた問題を修正 | [VSCode] Fixed `claudeProcessWrapper` setting passing the wrapper path instead of the Claude binary path |

## 2.1.6

| 日本語 | English |
|--------|---------|
| `/config` コマンドに設定を素早く絞り込む検索機能を追加 | Added search functionality to `/config` command for quickly filtering settings |
| `/doctor` に自動更新チャンネルと利用可能な npm バージョン（stable/latest）を表示する Updates セクションを追加 | Added Updates section to `/doctor` showing auto-update channel and available npm versions (stable/latest) |
| `/stats` コマンドに日付範囲フィルタを追加 - `r` キーで「過去7日間」「過去30日間」「全期間」を切り替え可能 | Added date range filtering to `/stats` command - press `r` to cycle between Last 7 days, Last 30 days, and All time |
| サブディレクトリ内のファイルで作業する際、ネストされた `.claude/skills` ディレクトリからのスキル自動検出に対応 | Added automatic discovery of skills from nested `.claude/skills` directories when working with files in subdirectories |
| ステータスライン入力に `context_window.used_percentage` と `context_window.remaining_percentage` フィールドを追加し、コンテキストウィンドウの表示を容易化 | Added `context_window.used_percentage` and `context_window.remaining_percentage` fields to status line input for easier context window display |
| Ctrl+G 実行時にエディタが失敗した場合のエラー表示を追加 | Added an error display when the editor fails during Ctrl+G |
| シェルの行継続を利用した権限バイパスにより、ブロックされたコマンドが実行可能だった問題を修正 | Fixed permission bypass via shell line continuation that could allow blocked commands to execute |
| ファイル監視機能がコンテンツを変更せずにファイルに触れた際に「ファイルが予期せず変更されました」という誤ったエラーが表示される問題を修正 | Fixed false "File has been unexpectedly modified" errors when file watchers touch files without changing content |
| 複数行の応答でテキストスタイル（太字、色）の位置が徐々にずれる問題を修正 | Fixed text styling (bold, colors) getting progressively misaligned in multi-line responses |
| フィードバックパネルの説明欄で「n」を入力すると予期せず閉じてしまう問題を修正 | Fixed the feedback panel closing unexpectedly when typing 'n' in the description field |
| 週次リセット後の低使用率時にレート制限警告が表示される問題を修正（現在は70%使用率が必要） | Fixed rate limit warning appearing at low usage after weekly reset (now requires 70% usage) |
| 以前のセッションを再開する際にレート制限オプションメニューが誤って自動的に開く問題を修正 | Fixed rate limit options menu incorrectly auto-opening when resuming a previous session |
| Kitty キーボードプロトコル対応ターミナルでテンキーがエスケープシーケンスを出力し、文字として入力されない問題を修正 | Fixed numpad keys outputting escape sequences instead of characters in Kitty keyboard protocol terminals |
| Kitty キーボードプロトコル対応ターミナルで Option+Return が改行を挿入しない問題を修正 | Fixed Option+Return not inserting newlines in Kitty keyboard protocol terminals |
| ホームディレクトリに破損した設定バックアップファイルが蓄積される問題を修正 | Fixed corrupted config backup files accumulating in the home directory |
| `mcp list` および `mcp get` コマンドが孤立した MCP サーバープロセスを残す問題を修正 | Fixed `mcp list` and `mcp get` commands leaving orphaned MCP server processes |
| ink2 モードでノードが `display:none` により非表示になった際の表示上の不具合を修正 | Fixed visual artifacts in ink2 mode when nodes become hidden via `display:none` |
| 外部 CLAUDE.md インポートの承認ダイアログを改善し、どのファイルがどこからインポートされるかを表示 | Improved the external CLAUDE.md imports approval dialog to show which files are being imported and from where |
| `/tasks` ダイアログを改善し、バックグラウンドタスクが1つのみ実行中の場合は直接タスク詳細画面を表示 | Improved the `/tasks` dialog to go directly to task details when there's only one background task running |
| @ オートコンプリートを改善し、候補タイプ別のアイコンと1行表示に対応 | Improved @ autocomplete with icons for different suggestion types and single-line formatting |
| 複数のバックグラウンドタスクが同時に完了した際、タスク通知の表示を3行までに制限し、超過分は要約表示に変更 | Changed task notification display to cap at 3 lines with overflow summary when multiple background tasks complete simultaneously |
| 起動時のターミナルタイトルを「Claude Code」に変更し、ウィンドウ識別を改善 | Changed terminal title to "Claude Code" on startup for better window identification |
| @ メンションによる MCP サーバーの有効化/無効化機能を削除 - 代わりに `/mcp enable <name>` を使用 | Removed ability to @-mention MCP servers to enable/disable - use `/mcp enable <name>` instead |
| [VSCode] 手動コンパクト実行後に使用状況インジケータが更新されない問題を修正 | [VSCode] Fixed usage indicator not updating after manual compact |

## 2.1.5

| 日本語 | English |
|--------|---------|
| 内部的な一時ファイル用のディレクトリをオーバーライドする `CLAUDE_CODE_TMPDIR` 環境変数を追加、カスタム一時ディレクトリが必要な環境に対応 | Added `CLAUDE_CODE_TMPDIR` environment variable to override the temp directory used for internal temp files, useful for environments with custom temp directory requirements |

## 2.1.4

| 日本語 | English |
|--------|---------|
| すべてのバックグラウンドタスク機能（自動バックグラウンド化と Ctrl+B ショートカットを含む）を無効化する `CLAUDE_CODE_DISABLE_BACKGROUND_TASKS` 環境変数を追加 | Added `CLAUDE_CODE_DISABLE_BACKGROUND_TASKS` environment variable to disable all background task functionality including auto-backgrounding and the Ctrl+B shortcut |
| OAuth トークンの期限切れによる失敗時に OAuth を更新して再試行するよう「Help improve Claude」設定の取得処理を修正 | Fixed "Help improve Claude" setting fetch to refresh OAuth and retry when it fails due to a stale OAuth token |

## 2.1.3

| 日本語 | English |
|--------|---------|
| スラッシュコマンドとスキルを統合し、動作を変えずにメンタルモデルを簡素化 | Merged slash commands and skills, simplifying the mental model with no change in behavior |
| `/config` にリリースチャンネル（`stable` または `latest`）の切り替えを追加 | Added release channel (`stable` or `latest`) toggle to `/config` |
| 到達不能なパーミッションルールの検出と警告を追加。`/doctor` および保存時に各ルールのソースと実用的な修正ガイダンスを表示 | Added detection and warnings for unreachable permission rules, with warnings in `/doctor` and after saving rules that include the source of each rule and actionable fix guidance |
| `/clear` コマンド後もプランファイルが残る問題を修正。会話をクリアした後は新しいプランファイルを使用するよう改善 | Fixed plan files persisting across `/clear` commands, now ensuring a fresh plan file is used after clearing a conversation |
| 大きな inode を持つファイルシステム（ExFAT など）でスキルの重複検出が誤動作する問題を修正。inode 値に 64 ビット精度を使用 | Fixed false skill duplicate detection on filesystems with large inodes (e.g., ExFAT) by using 64-bit precision for inode values |
| ステータスバーのバックグラウンドタスク数とタスクダイアログに表示される項目数の不一致を修正 | Fixed mismatch between background task count in status bar and items shown in tasks dialog |
| サブエージェントが会話の圧縮中に誤ったモデルを使用する問題を修正 | Fixed sub-agents using the wrong model during conversation compaction |
| ホームディレクトリから実行時に信頼ダイアログを承認しても、フックなどの信頼が必要な機能がセッション中に有効にならない問題を修正 | Fixed trust dialog acceptance when running from the home directory not enabling trust-requiring features like hooks during the session |
| 制御されていない書き込みがカーソル状態を破壊しないようにし、ターミナルレンダリングの安定性を向上 | Improved terminal rendering stability by preventing uncontrolled writes from corrupting cursor state |
| 長い説明を 2 行に切り詰めることで、スラッシュコマンドのサジェストの可読性を改善 | Improved slash command suggestion readability by truncating long descriptions to 2 lines |
| ツールフックの実行タイムアウトを 60 秒から 10 分に変更 | Changed tool hook execution timeout from 60 seconds to 10 minutes |
| [VSCode] パーミッションリクエストにクリック可能な保存先セレクターを追加。設定の保存場所（このプロジェクト、全プロジェクト、チームと共有、セッションのみ）を選択可能に | [VSCode] Added clickable destination selector for permission requests, allowing you to choose where settings are saved (this project, all projects, shared with team, or session only) |

## 2.1.2

| 日本語 | English |
|--------|---------|
| ターミナルにドラッグされた画像に元のパスメタデータを追加し、Claude が画像の出所を理解できるように改善 | Added source path metadata to images dragged onto the terminal, helping Claude understand where images originated |
| OSC 8 対応ターミナル（iTerm など）でツール出力内のファイルパスをクリック可能なハイパーリンクに対応 | Added clickable hyperlinks for file paths in tool output in terminals that support OSC 8 (like iTerm) |
| Windows Package Manager（winget）によるインストールに対応し、自動検出とアップデート手順を追加 | Added support for Windows Package Manager (winget) installations with automatic detection and update instructions |
| プランモードで Shift+Tab キーボードショートカットを追加し、「編集を自動承認」オプションを素早く選択可能に | Added Shift+Tab keyboard shortcut in plan mode to quickly select "auto-accept edits" option |
| `FORCE_AUTOUPDATE_PLUGINS` 環境変数を追加し、メインの自動アップデーターが無効でもプラグインの自動更新を許可 | Added `FORCE_AUTOUPDATE_PLUGINS` environment variable to allow plugin autoupdate even when the main auto-updater is disabled |
| SessionStart フック入力に `agent_type` を追加し、`--agent` 指定時に値を設定 | Added `agent_type` to SessionStart hook input, populated if `--agent` is specified |
| bash コマンド処理における不正な入力が任意のコマンドを実行可能なコマンドインジェクション脆弱性を修正 | Fixed a command injection vulnerability in bash command processing where malformed input could execute arbitrary commands |
| tree-sitter パースツリーが解放されず、長時間セッションで WASM メモリが無制限に増加するメモリリークを修正 | Fixed a memory leak where tree-sitter parse trees were not being freed, causing WASM memory to grow unbounded over long sessions |
| CLAUDE.md ファイルで `@include` ディレクティブ使用時にバイナリファイル（画像、PDF など）が誤ってメモリに含まれる問題を修正 | Fixed binary files (images, PDFs, etc.) being accidentally included in memory when using `@include` directives in CLAUDE.md files |
| 他のインストールが進行中と誤って表示されるアップデートの問題を修正 | Fixed updates incorrectly claiming another installation is in progress |
| 監視対象ディレクトリにソケットファイルが存在する場合のクラッシュを修正（EOPNOTSUPP エラーの多層防御） | Fixed crash when socket files exist in watched directories (defense-in-depth for EOPNOTSUPP errors) |
| macOS の Option-as-Meta ヒントを改善し、iTerm2、Kitty、WezTerm などのネイティブ CSIu ターミナル向けの個別手順を表示 | Improved Option-as-Meta hint on macOS to show terminal-specific instructions for native CSIu terminals like iTerm2, Kitty, and WezTerm |
| SSH 経由で画像をペーストする際のエラーメッセージを改善し、役に立たないクリップボードのヒントではなく `scp` の使用を提案 | Improved error message when pasting images over SSH to suggest using `scp` instead of the unhelpful clipboard shortcut hint |
| 大きなツール出力を切り詰める代わりにディスクに永続化し、ファイル参照経由で完全な出力にアクセス可能に変更 | Changed large tool outputs to be persisted to disk instead of truncated, providing full output access via file references |
| Windows 管理設定パス `C:\ProgramData\ClaudeCode\managed-settings.json` を非推奨化し、管理者は `C:\Program Files\ClaudeCode\managed-settings.json` への移行が必要 | Deprecated Windows managed settings path `C:\ProgramData\ClaudeCode\managed-settings.json` - administrators should migrate to `C:\Program Files\ClaudeCode\managed-settings.json` |
| [SDK] zod ピア依存関係の最小バージョンを ^4.0.0 に変更 | [SDK] Changed minimum zod peer dependency to ^4.0.0 |

## 2.1.0

| 日本語 | English |
|--------|---------|
| スキルの自動ホットリロードを追加 - `~/.claude/skills` または `.claude/skills` に作成・変更されたスキルはセッション再起動なしで即座に利用可能 | Added automatic skill hot-reload - skills created or modified in `~/.claude/skills` or `.claude/skills` are now immediately available without restarting the session |
| スキルのフロントマターに `context: fork` を指定することで、フォークされたサブエージェントコンテキストでスキルやスラッシュコマンドを実行可能に | Added support for running skills and slash commands in a forked sub-agent context using `context: fork` in skill frontmatter |
| スキルに `agent` フィールドを追加し、実行時のエージェントタイプを指定可能に | Added support for `agent` field in skills to specify agent type for execution |
| Claude の応答言語を設定する `language` 設定を追加（例: language: "japanese"） | Added `language` setting to configure Claude's response language (e.g., language: "japanese") |
| iTerm2、WezTerm、Ghostty、Kitty でターミナル設定を変更せずに Shift+Enter が使用可能に | Changed Shift+Enter to work out of the box in iTerm2, WezTerm, Ghostty, and Kitty without modifying terminal configs |
| `settings.json` に `respectGitignore` サポートを追加し、@メンションファイルピッカーの動作をプロジェクトごとに制御可能に | Added `respectGitignore` support in `settings.json` for per-project control over @-mention file picker behavior |
| ストリーミングや録画セッションに便利な `IS_DEMO` 環境変数を追加し、UI からメールアドレスと組織名を非表示に | Added `IS_DEMO` environment variable to hide email and organization from the UI, useful for streaming or recording sessions |
| デバッグログに機密データ（OAuth トークン、API キー、パスワード）が露出する可能性があったセキュリティ問題を修正 | Fixed security issue where sensitive data (OAuth tokens, API keys, passwords) could be exposed in debug logs |
| `-c` または `--resume` でセッションを再開した際にファイルとスキルが適切に検出されない問題を修正 | Fixed files and skills not being properly discovered when resuming sessions with `-c` or `--resume` |
| 上矢印キーまたは Ctrl+R 検索で履歴からプロンプトを再生する際に、ペーストされたコンテンツが失われる問題を修正 | Fixed pasted content being lost when replaying prompts from history using up arrow or Ctrl+R search |
| キューに入っているプロンプトがある状態で Esc キーを押した際、実行中のタスクをキャンセルせずに入力欄に移動するだけにするよう修正 | Fixed Esc key with queued prompts to only move them to input without canceling the running task |
| 複雑な bash コマンドに対する権限プロンプトを削減 | Reduced permission prompts for complex bash commands |
| Bash ツール権限にワイルドカードパターンマッチングを追加し、`*` を任意の位置で使用可能に（例: `Bash(npm *)`、`Bash(* install)`、`Bash(git * main)`） | Added wildcard pattern matching for Bash tool permissions using `*` at any position in rules (e.g., `Bash(npm *)`, `Bash(* install)`, `Bash(git * main)`) |
| bash コマンドとエージェントの両方に対する統一的な Ctrl+B バックグラウンド化を追加 - Ctrl+B を押すと実行中のすべてのフォアグラウンドタスクを同時にバックグラウンド化 | Added unified Ctrl+B backgrounding for both bash commands and agents - pressing Ctrl+B now backgrounds all running foreground tasks simultaneously |
| MCP の `list_changed` 通知をサポートし、MCP サーバーが再接続なしで利用可能なツール、プロンプト、リソースを動的に更新可能に | Added support for MCP `list_changed` notifications, allowing MCP servers to dynamically update their available tools, prompts, and resources without requiring reconnection |
| claude.ai サブスクライバー向けに `/teleport` および `/remote-env` スラッシュコマンドを追加し、リモートセッションの再開と設定が可能に | Added `/teleport` and `/remote-env` slash commands for claude.ai subscribers, allowing them to resume and configure remote sessions |
| settings.json 権限または `--disallowedTools` CLI フラグで `Task(AgentName)` 構文を使用して特定のエージェントを無効化可能に | Added support for disabling specific agents using `Task(AgentName)` syntax in settings.json permissions or the `--disallowedTools` CLI flag |
| エージェントのフロントマターにフックサポートを追加し、エージェントのライフサイクルにスコープされた PreToolUse、PostToolUse、Stop フックを定義可能に | Added hooks support to agent frontmatter, allowing agents to define PreToolUse, PostToolUse, and Stop hooks scoped to the agent's lifecycle |
| 新しい Vim モーションを追加: `;` と `,` で f/F/t/T モーションの繰り返し、`y` オペレーター（`yy`/`Y` でヤンク）、`p`/`P` でペースト、テキストオブジェクト（`iw`、`aw`、`iW`、`aW`、`i"`、`a"`、`i'`、`a'`、`i(`、`a(`、`i[`、`a[`、`i{`、`a{`）、`>>` と `<<` でインデント/アンインデント、`J` で行結合 | Added new Vim motions: `;` and `,` to repeat f/F/t/T motions, `y` operator for yank with `yy`/`Y`, `p`/`P` for paste, text objects (`iw`, `aw`, `iW`, `aW`, `i"`, `a"`, `i'`, `a'`, `i(`, `a(`, `i[`, `a[`, `i{`, `a{`), `>>` and `<<` for indent/dedent, and `J` to join lines |
| プロンプトから直接プランモードを有効にする `/plan` コマンドショートカットを追加 | Added `/plan` command shortcut to enable plan mode directly from the prompt |
| `/` が入力の先頭だけでなく任意の位置に現れた場合にスラッシュコマンドのオートコンプリートをサポート | Added slash command autocomplete support when `/` appears anywhere in input, not just at the beginning |
| インタラクティブモードで `--tools` フラグをサポートし、インタラクティブセッション中に Claude が使用できる組み込みツールを制限可能に | Added `--tools` flag support in interactive mode to restrict which built-in tools Claude can use during interactive sessions |
| デフォルトのファイル読み取りトークン制限を上書きする `CLAUDE_CODE_FILE_READ_MAX_OUTPUT_TOKENS` 環境変数を追加 | Added `CLAUDE_CODE_FILE_READ_MAX_OUTPUT_TOKENS` environment variable to override the default file read token limit |
| フックの設定に `once: true` をサポート | Added support for `once: true` config for hooks |
| フロントマターの `allowed-tools` フィールドで YAML スタイルのリストをサポートし、スキル宣言をより簡潔に記述可能に | Added support for YAML-style lists in frontmatter `allowed-tools` field for cleaner skill declarations |
| プラグインからのプロンプトおよびエージェントフックタイプをサポート（以前はコマンドフックのみサポート） | Added support for prompt and agent hook types from plugins (previously only command hooks were supported) |
| iTerm2 で画像ペースト用の Cmd+V をサポート（Ctrl+V にマッピング） | Added Cmd+V support for image paste in iTerm2 (maps to Ctrl+V) |
| ダイアログ内でタブ間を移動するための左右矢印キーナビゲーションを追加 | Added left/right arrow key navigation for cycling through tabs in dialogs |
| Ctrl+O トランスクリプトモードで思考ブロックをリアルタイム表示 | Added real-time thinking block display in Ctrl+O transcript mode |
| コンテキスト可視化でスキルを独立したカテゴリとして表示 | Added Skills as a separate category in the context visualization |
| 起動パフォーマンスを改善する複数の最適化 | Multiple optimizations to improve startup performance |
| サブエージェント（Task ツール）を改善し、権限拒否後も動作を継続して代替アプローチを試行可能に | Improved subagents (Task tool) to continue working after permission denial, allowing them to try alternative approaches |
| スキルを改善し、実行中の進捗を表示してツール使用をリアルタイムで確認可能に | Improved skills to show progress while executing, displaying tool uses as they happen |
| プランモード移行時の権限プロンプトを削除 - ユーザーは承認なしでプランモードに移行可能に | Removed permission prompt when entering plan mode - users can now enter plan mode without approval |
| [VSCode] コンテキストメニューに現在選択中のモデル名を追加 | [VSCode] Added currently selected model name to the context menu |
| [VSCode] 自動承認権限ボタンに説明的なラベルを追加（例:「はい、再度確認しない」の代わりに「はい、このプロジェクトで npm を許可」） | [VSCode] Added descriptive labels on auto-accept permission button (e.g., "Yes, allow npm for this project" instead of "Yes, and don't ask again") |
| [Windows] 不適切なレンダリングの問題を修正 | [Windows] Fixed issue with improper rendering |

---

*このファイルは [Claude Code](https://github.com/anthropics/claude-code) のCHANGELOGを元に翻訳されました。*
