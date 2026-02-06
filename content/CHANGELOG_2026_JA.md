# Claude Code 変更履歴 (2026年 - v2.1.0以降)

このファイルは Claude Code の2026年リリース分（バージョン2.1.0以降）の変更履歴を日本語で記載しています。

---

## 2.1.33

| 日本語 | English |
|--------|---------|
| tmux内のエージェントチームメイトセッションでのメッセージ送受信を修正 | Fixed agent teammate sessions in tmux to send and receive messages |
| 現在のプランでエージェントチームが利用できないという警告を修正 | Fixed warnings about agent teams not being available on your current plan |
| マルチエージェントワークフロー用の`TeammateIdle`と`TaskCompleted`フックイベントを追加 | Added `TeammateIdle` and `TaskCompleted` hook events for multi-agent workflows |
| エージェントのfrontmatter「tools」で`Task(agent_type)`構文によるサブエージェント生成の制限機能を追加 | Added support for restricting which sub-agents can be spawned via `Task(agent_type)` syntax in agent "tools" frontmatter |
| エージェント用の`memory` frontmatterフィールドを追加し、`user`、`project`、`local`スコープでの永続的メモリを実現 | Added `memory` frontmatter field support for agents, enabling persistent memory with `user`, `project`, or `local` scope |
| スキルの説明と`/skills`メニューにプラグイン名を追加し、発見性を向上 | Added plugin name to skill descriptions and `/skills` menu for better discoverability |
| モデルが拡張思考中に新しいメッセージを送信すると思考フェーズが中断される問題を修正 | Fixed an issue where submitting a new message while the model was in extended thinking would interrupt the thinking phase |
| ストリーミング中止時に空白テキストと思考ブロックが組み合わさることで正規化をバイパスし無効なリクエストを生成するAPIエラーを修正 | Fixed an API error that could occur when aborting mid-stream, where whitespace text combined with a thinking block would bypass normalization and produce an invalid request |
| ストリーミングエンドポイントでの404エラーが非ストリーミングフォールバックをトリガーしなくなったAPIプロキシ互換性の問題を修正 | Fixed API proxy compatibility issue where 404 errors on streaming endpoints no longer triggered non-streaming fallback |
| Node.jsビルドで`settings.json`環境変数で設定されたプロキシ設定がWebFetchやその他のHTTPリクエストに適用されない問題を修正 | Fixed an issue where proxy settings configured via `settings.json` environment variables were not applied to WebFetch and other HTTP requests on the Node.js build |
| `/resume`セッションピッカーがスラッシュコマンドで開始されたセッションのタイトルをクリーンに表示せず生のXMLマークアップを表示する問題を修正 | Fixed `/resume` session picker showing raw XML markup instead of clean titles for sessions started with slash commands |
| API接続失敗のエラーメッセージを改善し、汎用的な「接続エラー」の代わりに具体的な原因（ECONNREFUSED、SSLエラーなど）を表示 | Improved error messages for API connection failures — now shows specific cause (e.g., ECONNREFUSED, SSL errors) instead of generic "Connection error" |
| 無効な管理設定によるエラーが表示されるように修正 | Errors from invalid managed settings are now surfaced |
| VSCode: リモートセッションのサポートを追加し、OAuthユーザーがclaude.aiからセッションを閲覧・再開可能に | VSCode: Added support for remote sessions, allowing OAuth users to browse and resume sessions from claude.ai |
| VSCode: セッションピッカーにgitブランチとメッセージ数を追加し、ブランチ名による検索をサポート | VSCode: Added git branch and message count to the session picker, with support for searching by branch name |
| VSCode: 初回セッション読み込みとセッション切り替え時の最下部スクロールが不完全になる問題を修正 | VSCode: Fixed scroll-to-bottom under-scrolling on initial session load and session switch |

## 2.1.32

| 日本語 | English |
|--------|---------|
| Claude Opus 4.6 が利用可能になりました！ | Claude Opus 4.6 is now available! |
| マルチエージェント連携のためのリサーチプレビュー版エージェントチーム機能を追加（トークン消費が多い機能で、CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1 の設定が必要） | Added research preview agent teams feature for multi-agent collaboration (token-intensive feature, requires setting CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1) |
| Claude が作業中に自動的にメモリを記録・想起するようになりました | Claude now automatically records and recalls memories as it works |
| メッセージセレクターに「ここから要約」を追加し、会話の部分的な要約が可能になりました | Added "Summarize from here" to the message selector, allowing partial conversation summarization. |
| 追加ディレクトリ（`--add-dir`）内の `.claude/skills/` で定義されたスキルが自動的に読み込まれるようになりました | Skills defined in `.claude/skills/` within additional directories (`--add-dir`) are now loaded automatically. |
| サブディレクトリから実行した際に `@` ファイル補完が誤った相対パスを表示する問題を修正 | Fixed `@` file completion showing incorrect relative paths when running from a subdirectory |
| --resume オプションが以前の会話で指定された --agent の値をデフォルトで再利用するように更新 | Updated --resume to re-use --agent value specified in previous conversation by default. |
| 修正：Bash ツールがヒアドキュメント内に `${index + 1}` のような JavaScript テンプレートリテラルを含む場合に「Bad substitution」エラーを発生させなくなり、ツール実行の中断を防止 | Fixed: Bash tool no longer throws "Bad substitution" errors when heredocs contain JavaScript template literals like `${index + 1}`, which previously interrupted tool execution |
| スキルの文字数制限がコンテキストウィンドウに応じて拡張（コンテキストの2%）され、より大きなコンテキストウィンドウを持つユーザーが切り捨てなしでより多くのスキル説明を閲覧可能に | Skill character budget now scales with context window (2% of context), so users with larger context windows can see more skill descriptions without truncation |
| 入力フィールドでタイ語/ラオ語のスペーシング母音（สระ า, ำ）が正しくレンダリングされない問題を修正 | Fixed Thai/Lao spacing vowels (สระ า, ำ) not rendering correctly in the input field |
| VSCode：入力フィールドに先行テキストがある状態で Enter を押した際にスラッシュコマンドが誤って実行される問題を修正 | VSCode: Fixed slash commands incorrectly being executed when pressing Enter with preceding text in the input field |
| VSCode：過去の会話リストの読み込み中にスピナーを追加 | VSCode: Added spinner when loading past conversations list |

## 2.1.31

| 日本語 | English |
|--------|---------|
| セッション終了時に、後で会話を続ける方法を示す再開ヒントを追加 | Added session resume hint on exit, showing how to continue your conversation later |
| チェックボックス選択で日本語IMEからの全角スペース入力をサポート | Added support for full-width (zenkaku) space input from Japanese IME in checkbox selection |
| PDFが大きすぎるエラーによりセッションが完全にロックされ、新しい会話を開始する必要があった問題を修正 | Fixed PDF too large errors permanently locking up sessions, requiring users to start a new conversation |
| サンドボックスモードが有効な場合にbashコマンドが誤って「読み取り専用ファイルシステム」エラーで失敗を報告する問題を修正 | Fixed bash commands incorrectly reporting failure with "Read-only file system" errors when sandbox mode was enabled |
| `~/.claude.json`のプロジェクト設定にデフォルトフィールドが欠けている場合、プランモードに入った後にセッションが使用不能になるクラッシュを修正 | Fixed a crash that made sessions unusable after entering plan mode when project config in `~/.claude.json` was missing default fields |
| ストリーミングAPIパスで`temperatureOverride`が無視され、設定されたオーバーライドに関わらずすべてのストリーミングリクエストがデフォルト温度(1)を使用していた問題を修正 | Fixed `temperatureOverride` being silently ignored in the streaming API path, causing all streaming requests to use the default temperature (1) regardless of the configured override |
| nullパラメータを拒否する厳密な言語サーバーとのLSPシャットダウン/終了の互換性を修正 | Fixed LSP shutdown/exit compatibility with strict language servers that reject null params |
| bashコマンドの使用を減らすため、bash相当のコマンド(`cat`、`sed`、`grep`、`find`)の代わりに専用ツール(Read、Edit、Glob、Grep)を使用するようモデルを明確に誘導するシステムプロンプトを改善 | Improved system prompts to more clearly guide the model toward using dedicated tools (Read, Edit, Glob, Grep) instead of bash equivalents (`cat`, `sed`, `grep`, `find`), reducing unnecessary bash command usage |
| PDFとリクエストサイズのエラーメッセージに実際の制限(100ページ、20MB)を表示するよう改善 | Improved PDF and request size error messages to show actual limits (100 pages, 20MB) |
| ストリーミング中のスピナーの表示/非表示時にターミナルで発生するレイアウトのちらつきを軽減 | Reduced layout jitter in the terminal when the spinner appears and disappears during streaming |
| サードパーティプロバイダー(Bedrock、Vertex、Foundry)ユーザー向けのモデル選択画面から誤解を招くAnthropic API価格表示を削除 | Removed misleading Anthropic API pricing from model selector for third-party provider (Bedrock, Vertex, Foundry) users |

## 2.1.30

| 日本語 | English |
|--------|---------|
| PDFに対するReadツールに`pages`パラメータを追加し、特定のページ範囲を読み込めるように対応（例: `pages: "1-5"`）。大きなPDF（10ページ超）を`@`でメンションした際、コンテキストに展開せず軽量な参照を返すように変更 | Added `pages` parameter to the Read tool for PDFs, allowing specific page ranges to be read (e.g., `pages: "1-5"`). Large PDFs (>10 pages) now return a lightweight reference when `@` mentioned instead of being inlined into context. |
| Dynamic Client Registrationに非対応のMCPサーバー（Slackなど）向けに事前設定済みOAuthクライアント認証情報を追加。`claude mcp add`で`--client-id`と`--client-secret`を使用可能 | Added pre-configured OAuth client credentials for MCP servers that don't support Dynamic Client Registration (e.g., Slack). Use `--client-id` and `--client-secret` with `claude mcp add`. |
| 現在のセッションのトラブルシューティングをClaudeが支援する`/debug`コマンドを追加 | Added `/debug` for Claude to help troubleshoot the current session |
| 読み取り専用モードで追加の`git log`および`git show`フラグ（例: `--topo-order`、`--cherry-pick`、`--format`、`--raw`）をサポート | Added support for additional `git log` and `git show` flags in read-only mode (e.g., `--topo-order`, `--cherry-pick`, `--format`, `--raw`) |
| Taskツールの結果にトークン数、ツール使用回数、実行時間のメトリクスを追加 | Added token count, tool uses, and duration metrics to Task tool results |
| 設定にモーション軽減モードを追加 | Added reduced motion mode to the config |
| API会話履歴に幻の"(no content)"テキストブロックが出現する問題を修正し、トークンの無駄遣いとモデルの混乱を軽減 | Fixed phantom "(no content)" text blocks appearing in API conversation history, reducing token waste and potential model confusion |
| プロンプトキャッシュがツール名の変更時のみ無効化され、ツール説明や入力スキーマの変更時に正しく無効化されない問題を修正 | Fixed prompt cache not correctly invalidating when tool descriptions or input schemas changed, only when tool names changed |
| thinkingブロックを含む会話で`/login`実行後に発生する可能性のあった400エラーを修正 | Fixed 400 errors that could occur after running `/login` when the conversation contained thinking blocks |
| `parentUuid`の循環参照を含む破損したトランスクリプトファイルでセッション再開時にハングする問題を修正 | Fixed a hang when resuming sessions with corrupted transcript files containing `parentUuid` cycles |
| Max 20xユーザーが追加使用量を利用できない場合に表示される不正確な"/upgrade"提案を含むレート制限メッセージを修正 | Fixed rate limit message showing incorrect "/upgrade" suggestion for Max 20x users when extra-usage is unavailable |
| タイピング中に許可ダイアログがフォーカスを奪う問題を修正 | Fixed permission dialogs stealing focus while actively typing |
| SDK提供のMCPツールが共有アプリケーション状態に同期されないため、サブエージェントがアクセスできない問題を修正 | Fixed subagents not being able to access SDK-provided MCP tools because they were not synced to the shared application state |
| `.bashrc`ファイルを持つWindowsユーザーがbashコマンドを実行できないリグレッションを修正 | Fixed a regression where Windows users with a `.bashrc` file could not run bash commands |
| `--resume`のメモリ使用量を改善（多数のセッションを持つユーザーで68%削減）。セッションインデックスを軽量なstat基盤のロードと段階的エンリッチメントに置き換え | Improved memory usage for `--resume` (68% reduction for users with many sessions) by replacing the session index with lightweight stat-based loading and progressive enrichment |
| `TaskStop`ツールを改善し、汎用的な"Task stopped"メッセージの代わりに、停止されたコマンド/タスクの説明を結果行に表示 | Improved `TaskStop` tool to display the stopped command/task description in the result line instead of a generic "Task stopped" message |
| `/model`コマンドをキューではなく即座に実行するように変更 | Changed `/model` to execute immediately instead of being queued |
| [VSCode] 質問ダイアログの「その他」テキスト入力に複数行サポートを追加（Shift+Enterで改行） | [VSCode] Added multiline input support to the "Other" text input in question dialogs (use Shift+Enter for new lines) |
| [VSCode] 新しい会話開始時にセッションリストに重複したセッションが表示される問題を修正 | [VSCode] Fixed duplicate sessions appearing in the session list when starting a new conversation |

## 2.1.29

| 日本語 | English |
|--------|---------|
| `saved_hook_context` を持つセッション再開時の起動パフォーマンスの問題を修正 | Fixed startup performance issues when resuming sessions that have `saved_hook_context` |

## 2.1.27

| 日本語 | English |
|--------|---------|
| ツール呼び出しの失敗と拒否をデバッグログに追加 | Added tool call failures and denials to debug logs |
| ゲートウェイユーザーのコンテキスト管理検証エラーを修正し、`CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS=1` でエラーを回避できるように対応 | Fixed context management validation error for gateway users, ensuring `CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS=1` avoids the error |
| 特定の GitHub PR 番号または URL にリンクされたセッションを再開する `--from-pr` フラグを追加 | Added `--from-pr` flag to resume sessions linked to a specific GitHub PR number or URL |
| `gh pr create` で作成された際にセッションが自動的に PR にリンクされるように変更 | Sessions are now automatically linked to PRs when created via `gh pr create` |
| /context コマンドがカラー出力を表示しない問題を修正 | Fixed /context command not displaying colored output |
| PR ステータス表示時にステータスバーのバックグラウンドタスクインジケーターが重複する問題を修正 | Fixed status bar duplicating background task indicator when PR status was shown |
| Windows: `.bashrc` ファイルを持つユーザーで bash コマンド実行が失敗する問題を修正 | Windows: Fixed bash command execution failing for users with `.bashrc` files |
| Windows: 子プロセス生成時にコンソールウィンドウがちらつく問題を修正 | Windows: Fixed console windows flashing when spawning child processes |
| VSCode: 長時間のセッション後に OAuth トークンの期限切れで 401 エラーが発生する問題を修正 | VSCode: Fixed OAuth token expiration causing 401 errors after extended sessions |

## 2.1.25

| 日本語 | English |
|--------|---------|
| Bedrock と Vertex 上のゲートウェイユーザーに対する beta ヘッダー検証エラーを修正し、エラーを回避 | Fixed beta header validation error for gateway users on Bedrock and Vertex, ensuring `CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS=1` avoids the error |

## 2.1.23

| 日本語 | English |
|--------|---------|
| カスタマイズ可能なスピナー動詞設定（`spinnerVerbs`）を追加 | Added customizable spinner verbs setting (`spinnerVerbs`) |
| 企業プロキシ背後またはクライアント証明書を使用するユーザー向けのmTLSおよびプロキシ接続を修正 | Fixed mTLS and proxy connectivity for users behind corporate proxies or using client certificates |
| 共有システムでの権限競合を防ぐためのユーザーごとの一時ディレクトリ分離を修正 | Fixed per-user temp directory isolation to prevent permission conflicts on shared systems |
| プロンプトキャッシュスコープが有効な場合に400エラーを引き起こす可能性のある競合状態を修正 | Fixed a race condition that could cause 400 errors when prompt caching scope was enabled |
| ヘッドレスストリーミングセッション終了時に保留中の非同期フックがキャンセルされない問題を修正 | Fixed pending async hooks not being cancelled when headless streaming sessions ended |
| タブ補完で候補を受け入れた際に入力フィールドが更新されない問題を修正 | Fixed tab completion not updating the input field when accepting a suggestion |
| ripgrep検索タイムアウト時にエラー報告せず空の結果を返す問題を修正 | Fixed ripgrep search timeouts silently returning empty results instead of reporting errors |
| 最適化された画面データレイアウトによるターミナルレンダリングパフォーマンスの改善 | Improved terminal rendering performance with optimized screen data layout |
| Bashコマンドで経過時間と並んでタイムアウト時間を表示するように変更 | Changed Bash commands to show timeout duration alongside elapsed time |
| マージされたプルリクエストがプロンプトフッターに紫色のステータスインジケーターを表示するように変更 | Changed merged pull requests to show a purple status indicator in the prompt footer |
| [IDE] ヘッドレスモードでBedrockユーザーにモデルオプションが不正確なリージョン文字列を表示する問題を修正 | [IDE] Fixed model options displaying incorrect region strings for Bedrock users in headless mode |

## 2.1.22

| 日本語 | English |
|--------|---------|
| 非対話モード（-p）での構造化出力を修正 | Fixed structured outputs for non-interactive (-p) mode |

## 2.1.21

| 日本語 | English |
|--------|---------|
| オプション選択プロンプトで日本語IMEからの全角数字入力をサポート | Added support for full-width (zenkaku) number input from Japanese IME in option selection prompts |
| 終了時にシェル補完キャッシュファイルが切り捨てられる問題を修正 | Fixed shell completion cache files being truncated on exit |
| ツール実行中に中断されたセッションを再開する際のAPIエラーを修正 | Fixed API errors when resuming sessions that were interrupted during tool execution |
| 出力トークン制限が大きいモデルで自動コンパクトが早すぎるタイミングで発動する問題を修正 | Fixed auto-compact triggering too early on models with large output token limits |
| 削除後にタスクIDが再利用される可能性がある問題を修正 | Fixed task IDs potentially being reused after deletion |
| WindowsのVS Code拡張機能でファイル検索が動作しない問題を修正 | Fixed file search not working in VS Code extension on Windows |
| 読み込み/検索の進捗インジケーターを改善（進行中は「Reading…」、完了時は「Read」と表示） | Improved read/search progress indicators to show "Reading…" while in progress and "Read" when complete |
| Claudeがbashの同等コマンド（cat, sed, awk）よりもファイル操作ツール（Read, Edit, Write）を優先するように改善 | Improved Claude to prefer file operation tools (Read, Edit, Write) over bash equivalents (cat, sed, awk) |
| [VSCode] Python仮想環境の自動アクティベーションを追加（`claudeCode.usePythonEnvironment`設定で構成可能） | [VSCode] Added automatic Python virtual environment activation, ensuring `python` and `pip` commands use the correct interpreter (configurable via `claudeCode.usePythonEnvironment` setting) |
| [VSCode] メッセージアクションボタンの背景色が不正確だった問題を修正 | [VSCode] Fixed message action buttons having incorrect background colors |

## 2.1.20

| 日本語 | English |
|--------|---------|
| vimノーマルモードでカーソルがそれ以上移動できない場合の矢印キーによる履歴ナビゲーションを追加 | Added arrow key history navigation in vim normal mode when cursor cannot move further |
| 外部エディタショートカット（Ctrl+G）をヘルプメニューに追加し、発見しやすく改善 | Added external editor shortcut (Ctrl+G) to the help menu for better discoverability |
| プロンプトフッターにPRレビューステータスインジケーターを追加（承認済み、変更要求、保留中、ドラフトを色付きドットとクリック可能なリンクで表示） | Added PR review status indicator to the prompt footer, showing the current branch's PR state (approved, changes requested, pending, or draft) as a colored dot with a clickable link |
| `--add-dir`フラグで指定した追加ディレクトリからの`CLAUDE.md`ファイル読み込みをサポート（`CLAUDE_CODE_ADDITIONAL_DIRECTORIES_CLAUDE_MD=1`の設定が必要） | Added support for loading `CLAUDE.md` files from additional directories specified via `--add-dir` flag (requires setting `CLAUDE_CODE_ADDITIONAL_DIRECTORIES_CLAUDE_MD=1`) |
| `TaskUpdate`ツールでタスクを削除する機能を追加 | Added ability to delete tasks via the `TaskUpdate` tool |
| セッションコンパクションの問題を修正（コンパクトサマリーではなく完全な履歴をロードしてしまう問題） | Fixed session compaction issues that could cause resume to load full history instead of the compact summary |
| タスク作業中にエージェントがユーザーメッセージを無視することがある問題を修正 | Fixed agents sometimes ignoring user messages sent while actively working on a task |
| ワイド文字（絵文字、CJK）のレンダリングアーティファクトを修正（幅の狭い文字に置き換える際に末尾の列がクリアされない問題） | Fixed wide character (emoji, CJK) rendering artifacts where trailing columns were not cleared when replaced by narrower characters |
| MCPツールの応答に特殊なUnicode文字が含まれる場合のJSON解析エラーを修正 | Fixed JSON parsing errors when MCP tool responses contain special Unicode characters |
| 複数行やワードラップされたテキスト入力での上下矢印キーがカーソル移動を履歴ナビゲーションより優先するように修正 | Fixed up/down arrow keys in multi-line and wrapped text input to prioritize cursor movement over history navigation |
| UPキーを押してコマンド履歴をナビゲートする際にドラフトプロンプトが失われる問題を修正 | Fixed draft prompt being lost when pressing UP arrow to navigate command history |
| 入力の途中でスラッシュコマンドを入力した際のゴーストテキストのちらつきを修正 | Fixed ghost text flickering when typing slash commands mid-input |
| マーケットプレイスソースの削除で設定が適切に削除されない問題を修正 | Fixed marketplace source removal not properly deleting settings |
| `/context`などのコマンドで出力が重複する問題を修正 | Fixed duplicate output in some commands like `/context` |
| タスクリストがメイン会話ビューの外側に表示されることがある問題を修正 | Fixed task list sometimes showing outside the main conversation view |
| Pythonのドキュメント文字列などの複数行構造内でのdiffの構文ハイライトを修正 | Fixed syntax highlighting for diffs occurring within multiline constructs like Python docstrings |
| ツール使用をキャンセルする際のクラッシュを修正 | Fixed crashes when cancelling tool use |
| `/sandbox`コマンドのUIを改善（依存関係が不足している場合にステータスとインストール手順を表示） | Improved `/sandbox` command UI to show dependency status with installation instructions when dependencies are missing |
| 思考ステータステキストに微妙なシマーアニメーションを追加 | Improved thinking status text with a subtle shimmer animation |
| タスクリストをターミナルの高さに基づいて表示項目を動的に調整するように改善 | Improved task list to dynamically adjust visible items based on terminal height |
| フォーク会話のヒントを元のセッションを再開する方法を表示するように改善 | Improved fork conversation hint to show how to resume the original session |
| 折りたたまれた読み込み/検索グループを進行中は現在形（「Reading」、「Searching for」）、完了時は過去形（「Read」、「Searched for」）で表示するように変更 | Changed collapsed read/search groups to show present tense ("Reading", "Searching for") while in progress, and past tense ("Read", "Searched for") when complete |
| `ToolSearch`の結果を会話内のインラインではなく簡潔な通知として表示するように変更 | Changed `ToolSearch` results to appear as a brief notification instead of inline in the conversation |
| `/commit-push-pr`スキルがMCPツール経由で設定されている場合にPR URLを自動的にSlackチャンネルに投稿するように変更 | Changed the `/commit-push-pr` skill to automatically post PR URLs to Slack channels when configured via MCP tools |
| `/copy`コマンドをすべてのユーザーが利用可能に変更 | Changed the `/copy` command to be available to all users |
| バックグラウンドエージェントが起動前にツール権限のプロンプトを表示するように変更 | Changed background agents to prompt for tool permissions before launching |
| `Bash(*)`のような権限ルールを`Bash`と同等として受け入れるように変更 | Changed permission rules like `Bash(*)` to be accepted and treated as equivalent to `Bash` |
| 設定バックアップをタイムスタンプ付きでローテーション（最新5件を保持）してデータ損失を防ぐように変更 | Changed config backups to be timestamped and rotated (keeping 5 most recent) to prevent data loss |

## 2.1.19

| 日本語 | English |
|--------|---------|
| 環境変数`CLAUDE_CODE_ENABLE_TASKS`を追加（一時的に古いシステムを維持するには`false`に設定） | Added env var `CLAUDE_CODE_ENABLE_TASKS`, set to `false` to keep the old system temporarily |
| カスタムコマンドで個々の引数にアクセスするための省略記法`$0`、`$1`などを追加 | Added shorthand `$0`, `$1`, etc. for accessing individual arguments in custom commands |
| AVX命令セットをサポートしていないプロセッサでのクラッシュを修正 | Fixed crashes on processors without AVX instruction support |
| ターミナルが閉じられた際に`process.exit()`からのEIOエラーをキャッチし、フォールバックとしてSIGKILLを使用することでClaude Codeプロセスが残留する問題を修正 | Fixed dangling Claude Code processes when terminal is closed by catching EIO errors from `process.exit()` and using SIGKILL as fallback |
| 異なるディレクトリ（例：gitワークツリー）から再開した場合に`/rename`と`/tag`が正しいセッションを更新しない問題を修正 | Fixed `/rename` and `/tag` not updating the correct session when resuming from a different directory (e.g., git worktrees) |
| 異なるディレクトリから実行した場合にカスタムタイトルでセッションを再開できない問題を修正 | Fixed resuming sessions by custom title not working when run from a different directory |
| プロンプトスタッシュ（Ctrl+S）と復元を使用する際にペーストしたテキストコンテンツが失われる問題を修正 | Fixed pasted text content being lost when using prompt stash (Ctrl+S) and restore |
| エージェントリストで明示的なモデル設定がないエージェントが「Sonnet (default)」ではなく「Inherit (default)」と表示されるように修正 | Fixed agent list displaying "Sonnet (default)" instead of "Inherit (default)" for agents without an explicit model setting |
| バックグラウンドで実行されたフックコマンドが早期に返らず、意図的にバックグラウンドで実行されたプロセスをセッションが待ってしまう問題を修正 | Fixed backgrounded hook commands not returning early, potentially causing the session to wait on a process that was intentionally backgrounded |
| ファイル書き込みプレビューで空行が省略される問題を修正 | Fixed file write preview omitting empty lines |
| 追加の権限やフックのないスキルは承認なしで許可されるように変更 | Changed skills without additional permissions or hooks to be allowed without requiring approval |
| インデックス付き引数構文を`$ARGUMENTS.0`から`$ARGUMENTS[0]`（ブラケット構文）に変更 | Changed indexed argument syntax from `$ARGUMENTS.0` to `$ARGUMENTS[0]` (bracket syntax) |
| [SDK] `replayUserMessages`が有効な場合、`queued_command`添付メッセージを`SDKUserMessageReplay`イベントとして再生する機能を追加 | [SDK] Added replay of `queued_command` attachment messages as `SDKUserMessageReplay` events when `replayUserMessages` is enabled |
| [VSCode] すべてのユーザーにセッションフォークと巻き戻し機能を有効化 | [VSCode] Enabled session forking and rewind functionality for all users |

## 2.1.18

| 日本語 | English |
|--------|---------|
| カスタマイズ可能なキーボードショートカットを追加。コンテキストごとにキーバインディングを設定し、コードシーケンスを作成し、ワークフローをパーソナライズ可能。`/keybindings`を実行して開始。詳細: https://code.claude.com/docs/en/keybindings | Added customizable keyboard shortcuts. Configure keybindings per context, create chord sequences, and personalize your workflow. Run `/keybindings` to get started. Learn more at https://code.claude.com/docs/en/keybindings |

## 2.1.17

| 日本語 | English |
|--------|---------|
| AVX命令セットをサポートしていないプロセッサでのクラッシュを修正 | Fixed crashes on processors without AVX instruction support |

## 2.1.16

| 日本語 | English |
|--------|---------|
| 依存関係追跡などの新機能を含む新しいタスク管理システムを追加 | Added new task management system, including new capabilities like dependency tracking |
| [VSCode] ネイティブプラグイン管理サポートを追加 | [VSCode] Added native plugin management support |
| [VSCode] OAuthユーザーがセッションダイアログからリモートClaudeセッションを参照および再開する機能を追加 | [VSCode] Added ability for OAuth users to browse and resume remote Claude sessions from the Sessions dialog |
| サブエージェントを多用したセッションを再開する際のメモリ不足クラッシュを修正 | Fixed out-of-memory crashes when resuming sessions with heavy subagent usage |
| `/compact`を実行した後に「context remaining」警告が非表示にならない問題を修正 | Fixed an issue where the "context remaining" warning was not hidden after running `/compact` |
| 再開画面のセッションタイトルがユーザーの言語設定を尊重しない問題を修正 | Fixed session titles on the resume screen not respecting the user's language setting |
| [IDE] Windowsで起動時にClaude Codeサイドバービューコンテナが表示されないことがある競合状態を修正 | [IDE] Fixed a race condition on Windows where the Claude Code sidebar view container would not appear on start |

## 2.1.15

| 日本語 | English |
|--------|---------|
| npmインストールの非推奨通知を追加 - `claude install`を実行するか、https://docs.anthropic.com/en/docs/claude-code/getting-started で他のオプションを参照 | Added deprecation notification for npm installations - run `claude install` or see https://docs.anthropic.com/en/docs/claude-code/getting-started for more options |
| React CompilerによるUIレンダリングパフォーマンスの改善 | Improved UI rendering performance with React Compiler |
| `/compact`を実行した後に「Context left until auto-compact」警告が消えない問題を修正 | Fixed the "Context left until auto-compact" warning not disappearing after running `/compact` |
| MCP stdioサーバーのタイムアウトで子プロセスが終了されず、UIがフリーズする可能性がある問題を修正 | Fixed MCP stdio server timeout not killing child process, which could cause UI freezes |

## 2.1.14

| 日本語 | English |
|--------|---------|
| bashモードでの履歴ベースの自動補完を追加（`!`）- 部分的なコマンドを入力してTabを押すとbashコマンド履歴から補完 | Added history-based autocomplete in bash mode (`!`) - type a partial command and press Tab to complete from your bash command history |
| インストール済みプラグインリストに検索機能を追加 - 名前や説明でフィルタリング可能 | Added search to installed plugins list - type to filter by name or description |
| プラグインを特定のgitコミットSHAにピン留めするサポートを追加（マーケットプレイスエントリが正確なバージョンをインストール可能） | Added support for pinning plugins to specific git commit SHAs, allowing marketplace entries to install exact versions |
| コンテキストウィンドウのブロック制限が積極的に計算されすぎて、意図した約98%ではなく約65%のコンテキスト使用率でユーザーをブロックしていた回帰を修正 | Fixed a regression where the context window blocking limit was calculated too aggressively, blocking users at ~65% context usage instead of the intended ~98% |
| 並列サブエージェント実行時のクラッシュを引き起こすメモリ問題を修正 | Fixed memory issues that could cause crashes when running parallel subagents |
| シェルコマンド完了後にストリームリソースがクリーンアップされない長時間実行セッションでのメモリリークを修正 | Fixed memory leak in long-running sessions where stream resources were not cleaned up after shell commands completed |
| bashモードで`@`シンボルが誤ってファイル自動補完候補をトリガーする問題を修正 | Fixed `@` symbol incorrectly triggering file autocomplete suggestions in bash mode |
| `@`メンションメニューのフォルダクリック動作をディレクトリ選択ではなくディレクトリ内へのナビゲートに修正 | Fixed `@`-mention menu folder click behavior to navigate into directories instead of selecting them |
| `/feedback`コマンドで説明が非常に長い場合に無効なGitHub Issue URLを生成する問題を修正 | Fixed `/feedback` command generating invalid GitHub issue URLs when description is very long |
| `/context`コマンドで詳細モードのステータスラインと同じトークン数とパーセンテージを表示するように修正 | Fixed `/context` command to show the same token count and percentage as the status line in verbose mode |
| `/config`、`/context`、`/model`、`/todos`コマンドのオーバーレイが予期せず閉じることがある問題を修正 | Fixed an issue where `/config`, `/context`, `/model`, and `/todos` command overlays could close unexpectedly |
| 類似コマンドを入力する際にスラッシュコマンド自動補完が間違ったコマンドを選択する問題を修正（例：`/context` vs `/compact`） | Fixed slash command autocomplete selecting wrong command when typing similar commands (e.g., `/context` vs `/compact`) |
| マーケットプレイスが1つだけ設定されている場合のプラグインマーケットプレイスでの戻るナビゲーションの不整合を修正 | Fixed inconsistent back navigation in plugin marketplace when only one marketplace is configured |
| iTerm2のプログレスバーが終了時に適切にクリアされず、インジケーターとベル音が残る問題を修正 | Fixed iTerm2 progress bar not clearing properly on exit, preventing lingering indicators and bell sounds |
| バックスペースでペーストしたテキストを1文字ずつではなく単一のトークンとして削除するように改善 | Improved backspace to delete pasted text as a single token instead of one character at a time |
| [VSCode] 現在のプラン使用状況を表示する`/usage`コマンドを追加 | [VSCode] Added `/usage` command to display current plan usage |

## 2.1.12

| 日本語 | English |
|--------|---------|
| メッセージレンダリングのバグを修正 | Fixed message rendering bug |

## 2.1.11

| 日本語 | English |
|--------|---------|
| HTTP/SSEトランスポートでのMCP接続要求の過剰を修正 | Fixed excessive MCP connection requests for HTTP/SSE transports |

## 2.1.10

| 日本語 | English |
|--------|---------|
| リポジトリのセットアップとメンテナンス操作のために`--init`、`--init-only`、または`--maintenance` CLIフラグ経由でトリガーできる新しい`Setup`フックイベントを追加 | Added new `Setup` hook event that can be triggered via `--init`, `--init-only`, or `--maintenance` CLI flags for repository setup and maintenance operations |
| ログイン時にブラウザが自動的に開かない場合にOAuth URLをコピーするキーボードショートカット'c'を追加 | Added keyboard shortcut 'c' to copy OAuth URL when browser doesn't open automatically during login |
| `${index + 1}`のようなJavaScriptテンプレートリテラルを含むヒアドキュメントを含むbashコマンドを実行する際のクラッシュを修正 | Fixed a crash when running bash commands containing heredocs with JavaScript template literals like `${index + 1}` |
| REPLが完全に準備される前に入力されたキーストロークをキャプチャするよう起動を改善 | Improved startup to capture keystrokes typed before the REPL is fully ready |
| ファイル候補をテキスト挿入ではなく削除可能な添付ファイルとして表示するように改善 | Improved file suggestions to show as removable attachments instead of inserting text when accepted |
| [VSCode] プラグインリストにインストール数表示を追加 | [VSCode] Added install count display to plugin listings |
| [VSCode] プラグインインストール時に信頼警告を追加 | [VSCode] Added trust warning when installing plugins |

## 2.1.9

| 日本語 | English |
|--------|---------|
| MCPツール検索自動有効化しきい値を設定するための`auto:N`構文を追加（Nはコンテキストウィンドウのパーセンテージ0-100） | Added `auto:N` syntax for configuring the MCP tool search auto-enable threshold, where N is the context window percentage (0-100) |
| プランファイルの保存場所をカスタマイズするための`plansDirectory`設定を追加 | Added `plansDirectory` setting to customize where plan files are stored |
| AskUserQuestionの「Other」入力フィールドで外部エディタサポート（Ctrl+G）を追加 | Added external editor support (Ctrl+G) in AskUserQuestion "Other" input field |
| Webセッションから作成されたコミットとPRにセッションURL帰属を追加 | Added session URL attribution to commits and PRs created from web sessions |
| `PreToolUse`フックがモデルに`additionalContext`を返すサポートを追加 | Added support for `PreToolUse` hooks to return `additionalContext` to the model |
| スキルが現在のセッションIDにアクセスするための`${CLAUDE_SESSION_ID}`文字列置換を追加 | Added `${CLAUDE_SESSION_ID}` string substitution for skills to access the current session ID |
| 並列ツール呼び出しを含む長いセッションで孤立したtool_resultブロックに関するAPIエラーで失敗する問題を修正 | Fixed long sessions with parallel tool calls failing with an API error about orphan tool_result blocks |
| キャッシュされた接続プロミスが解決しない場合のMCPサーバー再接続のハングを修正 | Fixed MCP server reconnection hanging when cached connection promise never resolves |
| Kittyキーボードプロトコルを使用するターミナル（Ghostty、iTerm2、kitty、WezTerm）でCtrl+Zのサスペンドが動作しない問題を修正 | Fixed Ctrl+Z suspend not working in terminals using Kitty keyboard protocol (Ghostty, iTerm2, kitty, WezTerm) |

## 2.1.7

| 日本語 | English |
|--------|---------|
| ターン時間メッセージ（例：「Cooked for 1m 6s」）を非表示にする`showTurnDuration`設定を追加 | Added `showTurnDuration` setting to hide turn duration messages (e.g., "Cooked for 1m 6s") |
| 権限プロンプトを受け入れる際にフィードバックを提供する機能を追加 | Added ability to provide feedback when accepting permission prompts |
| タスク通知にエージェントの最終応答をインライン表示し、完全なトランスクリプトファイルを読まずに結果を確認しやすく改善 | Added inline display of agent's final response in task notifications, making it easier to see results without reading the full transcript file |
| ワイルドカード権限ルールがシェル演算子を含む複合コマンドにマッチする可能性があるセキュリティ脆弱性を修正 | Fixed security vulnerability where wildcard permission rules could match compound commands containing shell operators |
| クラウド同期ツール、ウイルス対策スキャナー、またはGitがコンテンツを変更せずにファイルのタイムスタンプを更新した場合のWindowsでの誤った「file modified」エラーを修正 | Fixed false "file modified" errors on Windows when cloud sync tools, antivirus scanners, or Git touch file timestamps without changing content |
| ストリーミング実行中に兄弟ツールが失敗した場合の孤立したtool_resultエラーを修正 | Fixed orphaned tool_result errors when sibling tools fail during streaming execution |
| コンテキストウィンドウのブロック制限が有効なコンテキストウィンドウ（最大出力トークン用のスペースを確保）ではなく完全なコンテキストウィンドウを使用して計算されていた問題を修正 | Fixed context window blocking limit being calculated using the full context window instead of the effective context window (which reserves space for max output tokens) |
| `/model`や`/theme`などのローカルスラッシュコマンドを実行する際にスピナーが一瞬フラッシュする問題を修正 | Fixed spinner briefly flashing when running local slash commands like `/model` or `/theme` |
| 固定幅の点字文字を使用してターミナルタイトルアニメーションのジッターを修正 | Fixed terminal title animation jitter by using fixed-width braille characters |
| gitサブモジュールを持つプラグインがインストール時に完全に初期化されない問題を修正 | Fixed plugins with git submodules not being fully initialized when installed |
| 一時ディレクトリパスに`t`や`n`などのエスケープシーケンスとして誤解される文字が含まれている場合のWindowsでのbashコマンド失敗を修正 | Fixed bash commands failing on Windows when temp directory paths contained characters like `t` or `n` that were misinterpreted as escape sequences |
| ターミナルレンダリングでのメモリ割り当てオーバーヘッドを削減してタイピングの応答性を改善 | Improved typing responsiveness by reducing memory allocation overhead in terminal rendering |
| すべてのユーザーに対してMCPツール検索自動モードをデフォルトで有効化 | Enabled MCP tool search auto mode by default for all users |
| OAuthとAPIコンソールのURLをconsole.anthropic.comからplatform.claude.comに変更 | Changed OAuth and API Console URLs from console.anthropic.com to platform.claude.com |
| [VSCode] `claudeProcessWrapper`設定がClaude Codeバイナリパスではなくラッパーパスを渡していた問題を修正 | [VSCode] Fixed `claudeProcessWrapper` setting passing the wrapper path instead of the Claude binary path |

## 2.1.6

| 日本語 | English |
|--------|---------|
| `/config`コマンドに設定を素早くフィルタリングするための検索機能を追加 | Added search functionality to `/config` command for quickly filtering settings |
| `/doctor`にアップデートセクションを追加（自動更新チャンネルと利用可能なnpmバージョン（stable/latest）を表示） | Added Updates section to `/doctor` showing auto-update channel and available npm versions (stable/latest) |
| `/stats`コマンドに日付範囲フィルタリングを追加 - `r`を押して過去7日間、過去30日間、全期間を切り替え | Added date range filtering to `/stats` command - press `r` to cycle between Last 7 days, Last 30 days, and All time |
| サブディレクトリのファイルを操作する際にネストされた`.claude/skills`ディレクトリからのスキルの自動検出を追加 | Added automatic discovery of skills from nested `.claude/skills` directories when working with files in subdirectories |
| ステータスライン入力に`context_window.used_percentage`と`context_window.remaining_percentage`フィールドを追加 | Added `context_window.used_percentage` and `context_window.remaining_percentage` fields to status line input for easier context window display |
| Ctrl+G中にエディタが失敗した場合のエラー表示を追加 | Added an error display when the editor fails during Ctrl+G |
| シェル行継続を使用した権限バイパスを修正 | Fixed permission bypass via shell line continuation that could allow blocked commands to execute |
| 誤った「File has been unexpectedly modified」エラーを修正 | Fixed false "File has been unexpectedly modified" errors when file watchers touch files without changing content |
| 複数行の応答でテキストスタイリング（太字、色）が徐々にずれる問題を修正 | Fixed text styling (bold, colors) getting progressively misaligned in multi-line responses |
| フィードバックパネルで'n'を入力すると予期せず閉じる問題を修正 | Fixed the feedback panel closing unexpectedly when typing 'n' in the description field |
| 週次リセット後の低使用率でレート制限警告が表示される問題を修正（70%の使用率が必要に） | Fixed rate limit warning appearing at low usage after weekly reset (now requires 70% usage) |
| 以前のセッションを再開する際にレート制限オプションメニューが誤って自動的に開く問題を修正 | Fixed rate limit options menu incorrectly auto-opening when resuming a previous session |
| Kittyキーボードプロトコルターミナルでテンキーがエスケープシーケンスを出力する問題を修正 | Fixed numpad keys outputting escape sequences instead of characters in Kitty keyboard protocol terminals |
| KittyキーボードプロトコルターミナルでOption+Returnが改行を挿入しない問題を修正 | Fixed Option+Return not inserting newlines in Kitty keyboard protocol terminals |
| ホームディレクトリに破損した設定バックアップファイルが蓄積する問題を修正 | Fixed corrupted config backup files accumulating in the home directory |
| `mcp list`と`mcp get`コマンドが孤立したMCPサーバープロセスを残す問題を修正 | Fixed `mcp list` and `mcp get` commands leaving orphaned MCP server processes |
| ink2モードでノードが非表示になった際のビジュアルアーティファクトを修正 | Fixed visual artifacts in ink2 mode when nodes become hidden via `display:none` |
| 外部CLAUDE.mdインポートの承認ダイアログを改善 | Improved the external CLAUDE.md imports approval dialog to show which files are being imported and from where |
| `/tasks`ダイアログを改善 | Improved the `/tasks` dialog to go directly to task details when there's only one background task running |
| @自動補完をアイコンと単一行フォーマットで改善 | Improved @ autocomplete with icons for different suggestion types and single-line formatting |
| タスク通知表示を3行に制限しオーバーフローサマリーを表示するように変更 | Changed task notification display to cap at 3 lines with overflow summary when multiple background tasks complete simultaneously |
| 起動時のターミナルタイトルを「Claude Code」に変更 | Changed terminal title to "Claude Code" on startup for better window identification |
| MCPサーバーの@メンション機能を削除 - 代わりに`/mcp enable <name>`を使用 | Removed ability to @-mention MCP servers to enable/disable - use `/mcp enable <name>` instead |
| [VSCode] 手動コンパクト後に使用状況インジケーターが更新されない問題を修正 | [VSCode] Fixed usage indicator not updating after manual compact |

## 2.1.5

| 日本語 | English |
|--------|---------|
| 一時ディレクトリをオーバーライドするための`CLAUDE_CODE_TMPDIR`環境変数を追加 | Added `CLAUDE_CODE_TMPDIR` environment variable to override the temp directory used for internal temp files, useful for environments with custom temp directory requirements |

## 2.1.4

| 日本語 | English |
|--------|---------|
| バックグラウンドタスク機能を無効にするための`CLAUDE_CODE_DISABLE_BACKGROUND_TASKS`環境変数を追加 | Added `CLAUDE_CODE_DISABLE_BACKGROUND_TASKS` environment variable to disable all background task functionality including auto-backgrounding and the Ctrl+B shortcut |
| 古いOAuthトークンにより設定取得が失敗した場合の修正 | Fixed "Help improve Claude" setting fetch to refresh OAuth and retry when it fails due to a stale OAuth token |

## 2.1.3

| 日本語 | English |
|--------|---------|
| スラッシュコマンドとスキルを統合し、メンタルモデルを簡素化 | Merged slash commands and skills, simplifying the mental model with no change in behavior |
| `/config`にリリースチャンネル（`stable`または`latest`）の切り替えを追加 | Added release channel (`stable` or `latest`) toggle to `/config` |
| 到達不能な権限ルールの検出と警告を追加 | Added detection and warnings for unreachable permission rules, with warnings in `/doctor` and after saving rules that include the source of each rule and actionable fix guidance |
| `/clear`コマンド後のプランファイル永続化を修正 | Fixed plan files persisting across `/clear` commands, now ensuring a fresh plan file is used after clearing a conversation |
| 大きなinodeを持つファイルシステムでのスキル重複検出を修正 | Fixed false skill duplicate detection on filesystems with large inodes (e.g., ExFAT) by using 64-bit precision for inode values |
| ステータスバーのバックグラウンドタスク数の不一致を修正 | Fixed mismatch between background task count in status bar and items shown in tasks dialog |
| サブエージェントが間違ったモデルを使用する問題を修正 | Fixed sub-agents using the wrong model during conversation compaction |
| ホームディレクトリからのトラストダイアログ受け入れの問題を修正 | Fixed trust dialog acceptance when running from the home directory not enabling trust-requiring features like hooks during the session |
| ターミナルレンダリングの安定性を改善 | Improved terminal rendering stability by preventing uncontrolled writes from corrupting cursor state |
| スラッシュコマンド候補の可読性を改善 | Improved slash command suggestion readability by truncating long descriptions to 2 lines |
| ツールフック実行タイムアウトを60秒から10分に変更 | Changed tool hook execution timeout from 60 seconds to 10 minutes |
| [VSCode] 権限リクエストにクリック可能な宛先セレクターを追加 | [VSCode] Added clickable destination selector for permission requests, allowing you to choose where settings are saved (this project, all projects, shared with team, or session only) |

## 2.1.2

| 日本語 | English |
|--------|---------|
| 画像にソースパスメタデータを追加 | Added source path metadata to images dragged onto the terminal, helping Claude understand where images originated |
| ファイルパスにクリック可能なハイパーリンクを追加（OSC 8対応ターミナル） | Added clickable hyperlinks for file paths in tool output in terminals that support OSC 8 (like iTerm) |
| Windows Package Manager（winget）インストールのサポートを追加 | Added support for Windows Package Manager (winget) installations with automatic detection and update instructions |
| プランモードでのShift+Tabショートカットを追加 | Added Shift+Tab keyboard shortcut in plan mode to quickly select "auto-accept edits" option |
| `FORCE_AUTOUPDATE_PLUGINS`環境変数を追加 | Added `FORCE_AUTOUPDATE_PLUGINS` environment variable to allow plugin autoupdate even when the main auto-updater is disabled |
| SessionStartフック入力に`agent_type`を追加 | Added `agent_type` to SessionStart hook input, populated if `--agent` is specified |
| bashコマンド処理のコマンドインジェクション脆弱性を修正 | Fixed a command injection vulnerability in bash command processing where malformed input could execute arbitrary commands |
| tree-sitterパースツリーのメモリリークを修正 | Fixed a memory leak where tree-sitter parse trees were not being freed, causing WASM memory to grow unbounded over long sessions |
| バイナリファイルがメモリに含まれる問題を修正 | Fixed binary files (images, PDFs, etc.) being accidentally included in memory when using `@include` directives in CLAUDE.md files |
| アップデートの誤った進行中表示を修正 | Fixed updates incorrectly claiming another installation is in progress |
| 監視ディレクトリのソケットファイルによるクラッシュを修正 | Fixed crash when socket files exist in watched directories (defense-in-depth for EOPNOTSUPP errors) |
| Option-as-Metaヒントを改善 | Improved Option-as-Meta hint on macOS to show terminal-specific instructions for native CSIu terminals like iTerm2, Kitty, and WezTerm |
| SSH経由での画像ペーストエラーメッセージを改善 | Improved error message when pasting images over SSH to suggest using `scp` instead of the unhelpful clipboard shortcut hint |
| 大きなツール出力をディスクに永続化するように変更 | Changed large tool outputs to be persisted to disk instead of truncated, providing full output access via file references |
| Windowsの管理設定パスを非推奨に | Deprecated Windows managed settings path `C:\ProgramData\ClaudeCode\managed-settings.json` - administrators should migrate to `C:\Program Files\ClaudeCode\managed-settings.json` |
| [SDK] zodピア依存関係の最小バージョンを^4.0.0に変更 | [SDK] Changed minimum zod peer dependency to ^4.0.0 |

## 2.1.0

| 日本語 | English |
|--------|---------|
| 自動スキルホットリロードを追加 - スキルがセッション再起動なしで即座に利用可能に | Added automatic skill hot-reload - skills created or modified in `~/.claude/skills` or `.claude/skills` are now immediately available without restarting the session |
| `context: fork`でフォークされたサブエージェントコンテキストでの実行をサポート | Added support for running skills and slash commands in a forked sub-agent context using `context: fork` in skill frontmatter |
| スキルの`agent`フィールドをサポート | Added support for `agent` field in skills to specify agent type for execution |
| Claudeの応答言語を設定するための`language`設定を追加 | Added `language` setting to configure Claude's response language (e.g., language: "japanese") |
| iTerm2、WezTerm、Ghostty、KittyでShift+Enterがそのまま動作するように変更 | Changed Shift+Enter to work out of the box in iTerm2, WezTerm, Ghostty, and Kitty without modifying terminal configs |
| `respectGitignore`サポートを追加 | Added `respectGitignore` support in `settings.json` for per-project control over @-mention file picker behavior |
| `IS_DEMO`環境変数を追加 | Added `IS_DEMO` environment variable to hide email and organization from the UI, useful for streaming or recording sessions |
| デバッグログでの機密データ公開のセキュリティ問題を修正 | Fixed security issue where sensitive data (OAuth tokens, API keys, passwords) could be exposed in debug logs |
| セッション再開時のファイルとスキル検出を修正 | Fixed files and skills not being properly discovered when resuming sessions with `-c` or `--resume` |
| 履歴再生時のペーストコンテンツ消失を修正 | Fixed pasted content being lost when replaying prompts from history using up arrow or Ctrl+R search |
| Escキーの動作を修正 | Fixed Esc key with queued prompts to only move them to input without canceling the running task |
| 複雑なbashコマンドの権限プロンプトを削減 | Reduced permission prompts for complex bash commands |
| Bashツール権限にワイルドカードパターンマッチングを追加 | Added wildcard pattern matching for Bash tool permissions using `*` at any position in rules (e.g., `Bash(npm *)`, `Bash(* install)`, `Bash(git * main)`) |
| Ctrl+Bによる統一バックグラウンド化を追加 | Added unified Ctrl+B backgrounding for both bash commands and agents - pressing Ctrl+B now backgrounds all running foreground tasks simultaneously |
| MCPの`list_changed`通知をサポート | Added support for MCP `list_changed` notifications, allowing MCP servers to dynamically update their available tools, prompts, and resources without requiring reconnection |
| `/teleport`と`/remote-env`スラッシュコマンドを追加 | Added `/teleport` and `/remote-env` slash commands for claude.ai subscribers, allowing them to resume and configure remote sessions |
| 特定のエージェントを無効にする`Task(AgentName)`構文をサポート | Added support for disabling specific agents using `Task(AgentName)` syntax in settings.json permissions or the `--disallowedTools` CLI flag |
| エージェントフロントマターにフックサポートを追加 | Added hooks support to agent frontmatter, allowing agents to define PreToolUse, PostToolUse, and Stop hooks scoped to the agent's lifecycle |
| 新しいVimモーション多数追加（`;`、`,`、`y`、`p`/`P`、テキストオブジェクト、`>>`/`<<`、`J`） | Added new Vim motions: `;` and `,` to repeat f/F/t/T motions, `y` operator for yank with `yy`/`Y`, `p`/`P` for paste, text objects (`iw`, `aw`, `iW`, `aW`, `i"`, `a"`, `i'`, `a'`, `i(`, `a(`, `i[`, `a[`, `i{`, `a{`), `>>` and `<<` for indent/dedent, and `J` to join lines |
| `/plan`コマンドショートカットを追加 | Added `/plan` command shortcut to enable plan mode directly from the prompt |
| 入力の任意の場所でのスラッシュコマンド自動補完をサポート | Added slash command autocomplete support when `/` appears anywhere in input, not just at the beginning |
| `--tools`フラグサポートを対話モードに追加 | Added `--tools` flag support in interactive mode to restrict which built-in tools Claude can use during interactive sessions |
| `CLAUDE_CODE_FILE_READ_MAX_OUTPUT_TOKENS`環境変数を追加 | Added `CLAUDE_CODE_FILE_READ_MAX_OUTPUT_TOKENS` environment variable to override the default file read token limit |
| フックの`once: true`設定をサポート | Added support for `once: true` config for hooks |
| YAML形式の`allowed-tools`をサポート | Added support for YAML-style lists in frontmatter `allowed-tools` field for cleaner skill declarations |
| プラグインからのフックタイプをサポート | Added support for prompt and agent hook types from plugins (previously only command hooks were supported) |
| iTerm2でのCmd+Vサポートを追加 | Added Cmd+V support for image paste in iTerm2 (maps to Ctrl+V) |
| ダイアログのタブ循環用左右矢印キーナビゲーションを追加 | Added left/right arrow key navigation for cycling through tabs in dialogs |
| Ctrl+Oトランスクリプトモードでのリアルタイム思考ブロック表示を追加 | Added real-time thinking block display in Ctrl+O transcript mode |
| コンテキスト可視化でスキルを別カテゴリとして追加 | Added Skills as a separate category in the context visualization |
| 多数のバグ修正とパフォーマンス改善 | Multiple optimizations to improve startup performance |
| サブエージェントが権限拒否後も作業を継続できるように改善 | Improved subagents (Task tool) to continue working after permission denial, allowing them to try alternative approaches |
| スキルが実行中に進捗を表示するように改善 | Improved skills to show progress while executing, displaying tool uses as they happen |
| プランモードに入る際の権限プロンプトを削除 | Removed permission prompt when entering plan mode - users can now enter plan mode without approval |
| [VSCode] 現在選択されているモデル名をコンテキストメニューに追加 | [VSCode] Added currently selected model name to the context menu |
| [VSCode] 自動承認権限ボタンに説明的なラベルを追加 | [VSCode] Added descriptive labels on auto-accept permission button (e.g., "Yes, allow npm for this project" instead of "Yes, and don't ask again") |
| [Windows] 不適切なレンダリングの問題を修正 | [Windows] Fixed issue with improper rendering |

---

*このファイルは [Claude Code](https://github.com/anthropics/claude-code) のCHANGELOGを元に翻訳されました。*
