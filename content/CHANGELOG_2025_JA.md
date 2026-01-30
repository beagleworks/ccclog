# Claude Code 変更履歴 (2025年 - v2.0.x以前)

このファイルは Claude Code の2025年リリース分（バージョン2.0.x以前）の変更履歴を日本語で記載しています。

---

## 2.0.76

| 日本語 | English |
|--------|---------|
| Chrome連携でClaude使用時のmacOSコード署名警告の問題を修正 | Fixed issue with macOS code-sign warning when using Claude in Chrome integration |

## 2.0.75

| 日本語 | English |
|--------|---------|
| 軽微なバグ修正 | Minor bugfixes |

## 2.0.74

| 日本語 | English |
|--------|---------|
| 定義への移動、参照検索、ホバードキュメントなどのコードインテリジェンス機能のためのLSP（Language Server Protocol）ツールを追加 | Added LSP (Language Server Protocol) tool for code intelligence features like go-to-definition, find references, and hover documentation |
| Kitty、Alacritty、Zed、Warpターミナルの`/terminal-setup`サポートを追加 | Added `/terminal-setup` support for Kitty, Alacritty, Zed, and Warp terminals |
| `/theme`でCtrl+Tショートカットを追加して構文ハイライトのオン/オフを切り替え | Added ctrl+t shortcut in `/theme` to toggle syntax highlighting on/off |
| テーマピッカーに構文ハイライト情報を追加 | Added syntax highlighting info to theme picker |
| ターミナル設定によりAltショートカットが失敗する場合のmacOSユーザー向けガイダンスを追加 | Added guidance for macOS users when Alt shortcuts fail due to terminal configuration |
| スキルの`allowed-tools`がスキルによって呼び出されるツールに適用されない問題を修正 | Fixed skill `allowed-tools` not being applied to tools invoked by the skill |
| ユーザーがすでにOpusを使用している場合にOpus 4.5のヒントが誤って表示される問題を修正 | Fixed Opus 4.5 tip incorrectly showing when user was already using Opus |
| 構文ハイライトが正しく初期化されていない場合の潜在的なクラッシュを修正 | Fixed a potential crash when syntax highlighting isn't initialized correctly |
| `/plugins discover`で検索ボックスにフォーカスがある際にリスト選択インジケーターが表示される視覚的バグを修正 | Fixed visual bug in `/plugins discover` where list selection indicator showed while search box was focused |
| macOSキーボードショートカットで'alt'の代わりに'opt'を表示するように修正 | Fixed macOS keyboard shortcuts to display 'opt' instead of 'alt' |
| `/context`コマンドの視覚化を改善（スキルとエージェントをソース別にグループ化、スラッシュコマンド、トークン数でソート） | Improved `/context` command visualization with grouped skills and agents by source, slash commands, and sorted token count |
| [Windows] 不適切なレンダリングの問題を修正 | [Windows] Fixed issue with improper rendering |
| [VSCode] 年末プロモーションメッセージ用のギフトタグピクトグラムを追加 | [VSCode] Added gift tag pictogram for year-end promotion message |

## 2.0.73

| 日本語 | English |
|--------|---------|
| 添付画像をデフォルトビューアで開くクリック可能な`[Image #N]`リンクを追加 | Added clickable `[Image #N]` links that open attached images in the default viewer |
| Ctrl+Yヤンク後にキルリング履歴を循環するAlt+Yヤンクポップを追加 | Added alt-y yank-pop to cycle through kill ring history after ctrl-y yank |
| プラグイン検出画面に検索フィルタリングを追加（名前、説明、マーケットプレイスでフィルタリング可能） | Added search filtering to the plugin discover screen (type to filter by name, description, or marketplace) |
| `--session-id`を`--resume`または`--continue`および`--fork-session`と組み合わせてセッションをフォークする際のカスタムセッションIDのサポートを追加 | Added support for custom session IDs when forking sessions with `--session-id` combined with `--resume` or `--continue` and `--fork-session` |
| 入力履歴の循環が遅い問題とメッセージ送信後にテキストを上書きする可能性のある競合状態を修正 | Fixed slow input history cycling and race condition that could overwrite text after message submission |
| `/theme`コマンドを改善してテーマピッカーを直接開くように変更 | Improved `/theme` command to open theme picker directly |
| テーマピッカーUIを改善 | Improved theme picker UI |
| 統一されたSearchBoxコンポーネントでセッション再開、権限、プラグイン画面の検索UXを改善 | Improved search UX across resume session, permissions, and plugins screens with a unified SearchBox component |
| [VSCode] 保留中の権限（青）と未読の完了（オレンジ）を示すタブアイコンバッジを追加 | [VSCode] Added tab icon badges showing pending permissions (blue) and unread completions (orange) |

## 2.0.72

| 日本語 | English |
|--------|---------|
| Chrome拡張機能と連携してブラウザを直接Claude Codeから操作できるClaude in Chrome（ベータ）機能を追加 | Added Claude in Chrome (Beta) feature that works with the Chrome extension (https://claude.ai/chrome) to let you control your browser directly from Claude Code |
| ターミナルのちらつきを軽減 | Reduced terminal flickering |
| 素早いアプリダウンロード用のスキャン可能なQRコードをモバイルアプリのヒントに追加 | Added scannable QR code to mobile app tip for quick app downloads |
| 会話再開時のフィードバック改善のためのローディングインジケーターを追加 | Added loading indicator when resuming conversations for better feedback |
| `/context`コマンドが非対話モードでカスタムシステムプロンプトを尊重しない問題を修正 | Fixed `/context` command not respecting custom system prompts in non-interactive mode |
| Ctrl+Yでペースト時の連続Ctrl+K行の順序を修正 | Fixed order of consecutive Ctrl+K lines when pasting with Ctrl+Y |
| @メンションファイル候補の速度を改善（gitリポジトリで約3倍高速化） | Improved @ mention file suggestion speed (~3× faster in git repositories) |
| `.ignore`または`.rgignore`ファイルを持つリポジトリでのファイル候補パフォーマンスを改善 | Improved file suggestion performance in repos with `.ignore` or `.rgignore` files |
| 設定検証エラーをより目立つように改善 | Improved settings validation errors to be more prominent |
| 思考モード切り替えをTabからAlt+Tに変更して誤操作を防止 | Changed thinking toggle from Tab to Alt+T to avoid accidental triggers |

## 2.0.71

| 日本語 | English |
|--------|---------|
| プロンプト候補の有効/無効を切り替える/config設定を追加 | Added /config toggle to enable/disable prompt suggestions |
| `/config`コマンドのエイリアスとして`/settings`を追加 | Added `/settings` as an alias for the `/config` command |
| カーソルがパスの途中にある時に@ファイル参照候補が誤ってトリガーされる問題を修正 | Fixed @ file reference suggestions incorrectly triggering when cursor is in the middle of a path |
| `--dangerously-skip-permissions`使用時に`.mcp.json`からのMCPサーバーが読み込まれない問題を修正 | Fixed MCP servers from `.mcp.json` not loading when using `--dangerously-skip-permissions` |
| シェルグロブパターンを含む有効なbashコマンドを権限ルールが誤って拒否する問題を修正 | Fixed permission rules incorrectly rejecting valid bash commands containing shell glob patterns (e.g., `ls *.txt`, `for f in *.png`) |
| Bedrock: 環境変数`ANTHROPIC_BEDROCK_BASE_URL`がトークンカウントと推論プロファイルリストで尊重されるように | Bedrock: Environment variable `ANTHROPIC_BEDROCK_BASE_URL` is now respected for token counting and inference profile listing |
| ネイティブビルド用の新しい構文ハイライトエンジン | New syntax highlighting engine for native build |

## 2.0.70

| 日本語 | English |
|--------|---------|
| Enterキーでプロンプト候補を即座に受け入れて送信するように追加（Tabは編集用に受け入れ） | Added Enter key to accept and submit prompt suggestions immediately (tab still accepts for editing) |
| サーバーからの全ツールを許可または拒否するMCPツール権限用ワイルドカード構文`mcp__server__*`を追加 | Added wildcard syntax `mcp__server__*` for MCP tool permissions to allow or deny all tools from a server |
| プラグインマーケットプレイスの自動更新トグルを追加（マーケットプレイスごとの自動更新制御が可能） | Added auto-update toggle for plugin marketplaces, allowing per-marketplace control over automatic updates |
| ステータスライン入力に`current_usage`フィールドを追加（正確なコンテキストウィンドウ割合計算が可能） | Added `current_usage` field to status line input, enabling accurate context window percentage calculations |
| ユーザーが入力中にキューされたコマンドを処理する際に入力がクリアされる問題を修正 | Fixed input being cleared when processing queued commands while the user was typing |
| Tabを押した時にプロンプト候補が入力テキストを置き換える問題を修正 | Fixed prompt suggestions replacing typed input when pressing Tab |
| ターミナルリサイズ時にdiffビューが更新されない問題を修正 | Fixed diff view not updating when terminal is resized |
| 大規模な会話でメモリ使用量を3倍改善 | Improved memory usage by 3x for large conversations |
| クリップボードにコピーされた統計スクリーンショット（Ctrl+S）の解像度を改善 | Improved resolution of stats screenshots copied to clipboard (Ctrl+S) for crisper images |
| クイックメモリ入力用の#ショートカットを削除（代わりにClaudeにCLAUDE.mdを編集させてください） | Removed # shortcut for quick memory entry (tell Claude to edit your CLAUDE.md instead) |
| /configの思考モードトグルが正しく永続化されない問題を修正 | Fix thinking mode toggle in /config not persisting correctly |
| ファイル作成権限ダイアログのUIを改善 | Improve UI for file creation permission dialog |

## 2.0.69

| 日本語 | English |
|--------|---------|
| 軽微なバグ修正 | Minor bugfixes |

## 2.0.68

| 日本語 | English |
|--------|---------|
| 中国語、日本語、韓国語などの言語向けIME（入力メソッドエディタ）サポートを修正（変換ウィンドウをカーソル位置に正しく配置） | Fixed IME (Input Method Editor) support for languages like Chinese, Japanese, and Korean by correctly positioning the composition window at the cursor |
| 禁止されたMCPツールがモデルに表示されるバグを修正 | Fixed a bug where disallowed MCP tools were visible to the model |
| サブエージェントが作業中にステアリングメッセージが失われる可能性がある問題を修正 | Fixed an issue where steering messages could be lost while a subagent is working |
| Option+矢印キーでの単語ナビゲーションがCJK（中国語、日本語、韓国語）テキストシーケンス全体を単一の単語として扱う問題を修正 | Fixed Option+Arrow word navigation treating entire CJK (Chinese, Japanese, Korean) text sequences as a single word instead of navigating by word boundaries |
| プランモード終了UXを改善（空または欠落したプランで終了時にエラーの代わりに簡素化されたyes/noダイアログを表示） | Improved plan mode exit UX: show simplified yes/no dialog when exiting with empty or missing plan instead of throwing an error |
| 企業管理設定のサポートを追加（この機能を有効にするにはAnthropicアカウントチームにお問い合わせください） | Add support for enterprise managed settings. Contact your Anthropic account team to enable this feature. |

## 2.0.67

| 日本語 | English |
|--------|---------|
| Opus 4.5で思考モードがデフォルトで有効に | Thinking mode is now enabled by default for Opus 4.5 |
| 思考モード設定が/configに移動 | Thinking mode configuration has moved to /config |
| `/permissions`コマンドにツール名でルールをフィルタリングする`/`キーボードショートカット付き検索機能を追加 | Added search functionality to `/permissions` command with `/` keyboard shortcut for filtering rules by tool name |
| `/doctor`で自動更新が無効になっている理由を表示 | Show reason why autoupdater is disabled in `/doctor` |
| 別のインスタンスがすでに最新バージョンの場合に`claude update`実行時の誤った「Another process is currently updating Claude」エラーを修正 | Fixed false "Another process is currently updating Claude" error when running `claude update` while another instance is already on the latest version |
| 非対話モード（`-p`フラグまたはパイプ入力）で`.mcp.json`からのMCPサーバーが保留状態のままになる問題を修正 | Fixed MCP servers from `.mcp.json` being stuck in pending state when running in non-interactive mode (`-p` flag or piped input) |
| `/permissions`で権限ルール削除後にスクロール位置がリセットされる問題を修正 | Fixed scroll position resetting after deleting a permission rule in `/permissions` |
| キリル文字、ギリシャ語、アラビア語、ヘブライ語、タイ語、中国語などの非ラテン文字で単語削除（opt+delete）と単語ナビゲーション（opt+矢印）が正しく動作しない問題を修正 | Fixed word deletion (opt+delete) and word navigation (opt+arrow) not working correctly with non-Latin text such as Cyrillic, Greek, Arabic, Hebrew, Thai, and Chinese |
| `claude install --force`が古いロックファイルをバイパスしない問題を修正 | Fixed `claude install --force` not bypassing stale lock files |
| マークダウン取り消し線の干渉によりCLAUDE.md内の連続した@~/ファイル参照が誤ってパースされる問題を修正 | Fixed consecutive @~/ file references in CLAUDE.md being incorrectly parsed due to markdown strikethrough interference |
| Windows: ログディレクトリパスのコロンによりプラグインMCPサーバーが失敗する問題を修正 | Windows: Fixed plugin MCP servers failing due to colons in log directory paths |

## 2.0.65

| 日本語 | English |
|--------|---------|
| プロンプト作成中にalt+p（Linux、Windows）、option+p（macOS）でモデルを切り替える機能を追加 | Added ability to switch models while writing a prompt using alt+p (linux, windows), option+p (macos). |
| ステータスライン入力にコンテキストウィンドウ情報を追加 | Added context window information to status line input |
| カスタム`@`ファイル検索コマンド用の`fileSuggestion`設定を追加 | Added `fileSuggestion` setting for custom `@` file search commands |
| 自動シェル検出をオーバーライドする`CLAUDE_CODE_SHELL`環境変数を追加（ログインシェルが実際の作業シェルと異なる場合に便利） | Added `CLAUDE_CODE_SHELL` environment variable to override automatic shell detection (useful when login shell differs from actual working shell) |
| Escapeでクエリを中断した際にプロンプトが履歴に保存されない問題を修正 | Fixed prompt not being saved to history when aborting a query with Escape |
| Readツールの画像処理を修正（ファイル拡張子ではなくバイトからフォーマットを識別） | Fixed Read tool image handling to identify format from bytes instead of file extension |

## 2.0.64

| 日本語 | English |
|--------|---------|
| 自動コンパクトを瞬時に実行するように改善 | Made auto-compacting instant |
| エージェントとbashコマンドが非同期で実行され、メインエージェントを起動するメッセージを送信可能に | Agents and bash commands can run asynchronously and send messages to wake up the main agent |
| /statsがお気に入りモデル、使用量グラフ、使用継続日数などの興味深いCC統計を提供するように | /stats now provides users with interesting CC stats, such as favorite model, usage graph, usage streak |
| 名前付きセッションサポートを追加（`/rename`でセッション名を付け、REPLで`/resume <name>`またはターミナルから`claude --resume <name>`で再開） | Added named session support: use `/rename` to name sessions, `/resume <name>` in REPL or `claude --resume <name>` from the terminal to resume them |
| .claude/rules/のサポートを追加（詳細はhttps://code.claude.com/docs/en/memoryを参照） | Added support for .claude/rules/`.  See https://code.claude.com/docs/en/memory for details. |
| 画像リサイズ時に画像寸法メタデータを追加（大きな画像の正確な座標マッピングが可能） | Added image dimension metadata when images are resized, enabling accurate coordinate mappings for large images |
| ネイティブインストーラー使用時の.env自動読み込みを修正 | Fixed auto-loading .env when using native installer |
| `--continue`または`--resume`フラグ使用時に`--system-prompt`が無視される問題を修正 | Fixed `--system-prompt` being ignored when using `--continue` or `--resume` flags |
| `/resume`画面を改善（フォークされたセッションのグループ化とプレビュー(P)、リネーム(R)のキーボードショートカット） | Improved `/resume` screen with grouped forked sessions and keyboard shortcuts for preview (P) and rename (R) |
| VSCode: コードブロックとbashツール入力にクリップボードへコピーボタンを追加 | VSCode: Added copy-to-clipboard button on code blocks and bash tool inputs |
| VSCode: Windows ARM64でx64バイナリのエミュレーションにフォールバックして拡張機能が動作しない問題を修正 | VSCode: Fixed extension not working on Windows ARM64 by falling back to x64 binary via emulation |
| Bedrock: トークンカウントの効率を改善 | Bedrock: Improve efficiency of token counting |
| Bedrock: `aws login` AWS Management Console資格情報のサポートを追加 | Bedrock: Add support for `aws login` AWS Management Console credentials |
| AgentOutputToolとBashOutputToolを廃止し、新しい統一されたTaskOutputToolを採用 | Unshipped AgentOutputTool and BashOutputTool, in favor of a new unified TaskOutputTool |

## 2.0.62

| 日本語 | English |
|--------|---------|
| 複数選択質問に「(Recommended)」インジケーターを追加（推奨オプションがリストの先頭に移動） | Added "(Recommended)" indicator for multiple-choice questions, with the recommended option moved to the top of the list |
| コミットとPRのバイラインをカスタマイズする`attribution`設定を追加（`includeCoAuthoredBy`を非推奨化） | Added `attribution` setting to customize commit and PR bylines (deprecates `includeCoAuthoredBy`) |
| ~/.claudeがプロジェクトディレクトリにシンボリックリンクされている場合に重複スラッシュコマンドが表示される問題を修正 | Fixed duplicate slash commands appearing when ~/.claude is symlinked to a project directory |
| 複数のコマンドが同じ名前を共有する場合にスラッシュコマンド選択が機能しない問題を修正 | Fixed slash command selection not working when multiple commands share the same name |
| シンボリックリンクされたスキルディレクトリ内のスキルファイルが循環シンボリックリンクになる可能性がある問題を修正 | Fixed an issue where skill files inside symlinked skill directories could become circular symlinks |
| ロックファイルが誤って古くなることで実行中のバージョンが削除される問題を修正 | Fixed running versions getting removed because lock file incorrectly going stale |
| ファイル変更を拒否した際にIDE diffタブが閉じない問題を修正 | Fixed IDE diff tab not closing when rejecting file changes |

## 2.0.61

| 日本語 | English |
|--------|---------|
| 応答性の問題により複数ターミナルクライアントのVSCodeサポートを元に戻し | Reverted VSCode support for multiple terminal clients due to responsiveness issues. |

## 2.0.60

| 日本語 | English |
|--------|---------|
| バックグラウンドエージェントサポートを追加（作業中にエージェントがバックグラウンドで実行） | Added background agent support. Agents run in the background while you work |
| すべてのスラッシュコマンドを無効にする--disable-slash-commands CLIフラグを追加 | Added --disable-slash-commands CLI flag to disable all slash commands |
| 「Co-Authored-By」コミットメッセージにモデル名を追加 | Added model name to "Co-Authored-By" commit messages |
| 「/mcp enable [server-name]」または「/mcp disable [server-name]」ですべてのサーバーを素早く切り替え可能に | Enabled "/mcp enable [server-name]" or "/mcp disable [server-name]" to quickly toggle all servers |
| 事前承認されたウェブサイトの要約をスキップするようFetchを更新 | Updated Fetch to skip summarization for pre-approved websites |
| VSCode: 複数のターミナルクライアントがIDEサーバーに同時接続するサポートを追加 | VSCode: Added support for multiple terminal clients connecting to the IDE server simultaneously |

## 2.0.59

| 日本語 | English |
|--------|---------|
| 現在のセッションでエージェント設定を上書きするための --agent CLI フラグを追加 | Added --agent CLI flag to override the agent setting for the current session |
| 特定のエージェントのシステムプロンプト、ツール制限、モデルでメインスレッドを設定するための `agent` 設定を追加 | Added `agent` setting to configure main thread with a specific agent's system prompt, tool restrictions, and model |
| VS Code: .claude.json 設定ファイルが誤った場所から読み込まれる問題を修正 | VS Code: Fixed .claude.json config file being read from incorrect location |

## 2.0.58

| 日本語 | English |
|--------|---------|
| Pro ユーザーがサブスクリプションの一部として Opus 4.5 にアクセスできるようになりました！ | Pro users now have access to Opus 4.5 as part of their subscription! |
| タイマー表示が「12m 0s」ではなく「11m 60s」と表示される問題を修正 | Fixed timer duration showing "11m 60s" instead of "12m 0s" |
| Windows: マネージド設定が `C:\Program Files\ClaudeCode` が存在する場合はそちらを優先するようになりました。`C:\ProgramData\ClaudeCode` のサポートは将来のバージョンで削除される予定です。 | Windows: Managed settings now prefer `C:\Program Files\ClaudeCode` if it exists. Support for `C:\ProgramData\ClaudeCode` will be removed in a future version. |

## 2.0.57

| 日本語 | English |
|--------|---------|
| プランを拒否する際のフィードバック入力を追加し、ユーザーが Claude に変更内容を伝えられるようになりました | Added feedback input when rejecting plans, allowing users to tell Claude what to change |
| VSCode: リアルタイムレスポンス表示のためのストリーミングメッセージサポートを追加 | VSCode: Added streaming message support for real-time response display |

## 2.0.56

| 日本語 | English |
|--------|---------|
| ターミナルプログレスバー（OSC 9;4）の有効/無効を切り替える設定を追加 | Added setting to enable/disable terminal progress bar (OSC 9;4) |
| VSCode 拡張機能: VS Code のセカンダリサイドバー（VS Code 1.97+）をサポートし、ファイルエクスプローラーを左側に保持したまま Claude Code を右側のサイドバーに表示できるようになりました。設定でサイドバーを優先場所として設定する必要があります。 | VSCode Extension: Added support for VS Code's secondary sidebar (VS Code 1.97+), allowing Claude Code to be displayed in the right sidebar while keeping the file explorer on the left. Requires setting sidebar as Preferred Location in the config. |

## 2.0.55

| 日本語 | English |
|--------|---------|
| プロキシ DNS 解決がデフォルトで強制的にオンになっていた問題を修正。`CLAUDE_CODE_PROXY_RESOLVES_HOSTS=true` 環境変数でオプトインするようになりました | Fixed proxy DNS resolution being forced on by default. Now opt-in via `CLAUDE_CODE_PROXY_RESOLVES_HOSTS=true` environment variable |
| メモリ場所セレクターで矢印キーを押し続けるとキーボードナビゲーションが反応しなくなる問題を修正 | Fixed keyboard navigation becoming unresponsive when holding down arrow keys in memory location selector |
| AskUserQuestion ツールを改善し、最後の質問で単一選択の質問を自動送信するようになり、シンプルな質問フローの余分なレビュー画面を排除 | Improved AskUserQuestion tool to auto-submit single-select questions on the last question, eliminating the extra review screen for simple question flows |
| `@` ファイル候補のファジーマッチングを改善し、より高速で正確な結果を提供 | Improved fuzzy matching for `@` file suggestions with faster, more accurate results |

## 2.0.54

| 日本語 | English |
|--------|---------|
| Hooks: PermissionRequest フックが「常に許可」の提案を処理し、許可の更新を適用できるようになりました | Hooks: Enable PermissionRequest hooks to process 'always allow' suggestions and apply permission updates |
| 過剰な iTerm 通知の問題を修正 | Fix issue with excessive iTerm notifications |

## 2.0.52

| 日本語 | English |
|--------|---------|
| コマンドライン引数で Claude を起動した際にメッセージが重複表示される問題を修正 | Fixed duplicate message display when starting Claude with a command line argument |
| `/usage` コマンドのプログレスバーが使用量に応じて埋まるように修正（残りのパーセンテージを表示する代わりに） | Fixed `/usage` command progress bars to fill up as usage increases (instead of showing remaining percentage) |
| Wayland を実行している Linux システムで画像貼り付けが機能しない問題を修正（xclip が利用できない場合は wl-paste にフォールバック） | Fixed image pasting not working on Linux systems running Wayland (now falls back to wl-paste when xclip is unavailable) |
| bash コマンドでの `$!` の一部の使用を許可 | Permit some uses of `$!` in bash commands |

## 2.0.51

| 日本語 | English |
|--------|---------|
| Opus 4.5 を追加！ https://www.anthropic.com/news/claude-opus-4-5 | Added Opus 4.5! https://www.anthropic.com/news/claude-opus-4-5 |
| Claude Code for Desktop を発表: https://claude.com/download | Introducing Claude Code for Desktop: https://claude.com/download |
| 新モデルをお試しいただくため、Claude Code ユーザーの使用制限を更新しました。詳細は Claude Opus 4.5 のブログをご覧ください | To give you room to try out our new model, we've updated usage limits for Claude Code users. See the Claude Opus 4.5 blog for full details |
| Pro ユーザーは追加使用量を購入して Claude Code で Opus 4.5 にアクセスできるようになりました | Pro users can now purchase extra usage for access to Opus 4.5 in Claude Code |
| プランモードがより正確なプランを構築し、より徹底的に実行するようになりました | Plan Mode now builds more precise plans and executes more thoroughly |
| 使用制限通知がより理解しやすくなりました | Usage limit notifications now easier to understand |
| `/usage` を「使用率%」に戻しました | Switched `/usage` back to "% used" |
| thinking エラーの処理を修正 | Fixed handling of thinking errors |
| パフォーマンスの低下を修正 | Fixed performance regression |

## 2.0.50

| 日本語 | English |
|--------|---------|
| 入力スキーマにネストされた参照を持つ MCP ツールの呼び出しを妨げるバグを修正 | Fixed bug preventing calling MCP tools that have nested references in their input schemas |
| アップグレード中のノイズの多い（しかし無害な）エラーを抑制 | Silenced a noisy but harmless error during upgrades |
| ultrathink テキスト表示を改善 | Improved ultrathink text display |
| 5時間セッション制限の警告メッセージの明確さを改善 | Improved clarity of 5-hour session limit warning message |

## 2.0.49

| 日本語 | English |
|--------|---------|
| 削除されたテキストを貼り付けるための readline スタイルの ctrl-y を追加 | Added readline-style ctrl-y for pasting deleted text |
| 使用制限の警告メッセージの明確さを改善 | Improved clarity of usage limit warning message |
| サブエージェントの許可の処理を修正 | Fixed handling of subagent permissions |

## 2.0.47

| 日本語 | English |
|--------|---------|
| `claude --teleport` のエラーメッセージと検証を改善 | Improved error messages and validation for `claude --teleport` |
| `/usage` のエラー処理を改善 | Improved error handling in `/usage` |
| 終了時に履歴エントリがログに記録されない競合状態を修正 | Fixed race condition with history entry not getting logged at exit |
| `settings.json` から Vertex AI 設定が適用されない問題を修正 | Fixed Vertex AI configuration not being applied from `settings.json` |

## 2.0.46

| 日本語 | English |
|--------|---------|
| メタデータから形式を検出できない場合に画像ファイルが誤ったメディアタイプで報告される問題を修正 | Fixed image files being reported with incorrect media type when format cannot be detected from metadata |

## 2.0.45

| 日本語 | English |
|--------|---------|
| Microsoft Foundry のサポートを追加！ https://code.claude.com/docs/en/azure-ai-foundry を参照 | Added support for Microsoft Foundry! See https://code.claude.com/docs/en/azure-ai-foundry |
| カスタムロジックでツール許可リクエストを自動的に承認または拒否する `PermissionRequest` フックを追加 | Added `PermissionRequest` hook to automatically approve or deny tool permission requests with custom logic |
| `&` でメッセージを開始して、Web 上の Claude Code にバックグラウンドタスクを送信 | Send background tasks to Claude Code on the web by starting a message with `&` |

## 2.0.43

| 日本語 | English |
|--------|---------|
| カスタムエージェント用の `permissionMode` フィールドを追加 | Added `permissionMode` field for custom agents |
| `PreToolUseHookInput` と `PostToolUseHookInput` タイプに `tool_use_id` フィールドを追加 | Added `tool_use_id` field to `PreToolUseHookInput` and `PostToolUseHookInput` types |
| サブエージェント用に自動ロードするスキルを宣言するスキルフロントマターフィールドを追加 | Added skills frontmatter field to declare skills to auto-load for subagents |
| `SubagentStart` フックイベントを追加 | Added the `SubagentStart` hook event |
| ファイルを @メンションした際にネストされた `CLAUDE.md` ファイルが読み込まれない問題を修正 | Fixed nested `CLAUDE.md` files not loading when @-mentioning files |
| UI で一部のメッセージが重複してレンダリングされる問題を修正 | Fixed duplicate rendering of some messages in the UI |
| 一部の視覚的なちらつきを修正 | Fixed some visual flickers |
| セル ID が `cell-N` パターンに一致する場合に NotebookEdit ツールがセルを誤った位置に挿入する問題を修正 | Fixed NotebookEdit tool inserting cells at incorrect positions when cell IDs matched the pattern `cell-N` |

## 2.0.42

| 日本語 | English |
|--------|---------|
| `SubagentStop` フックに `agent_id` と `agent_transcript_path` フィールドを追加 | Added `agent_id` and `agent_transcript_path` fields to `SubagentStop` hooks. |

## 2.0.41

| 日本語 | English |
|--------|---------|
| プロンプトベースの停止フックに `model` パラメータを追加し、フック評価用のカスタムモデルを指定可能に | Added `model` parameter to prompt-based stop hooks, allowing users to specify a custom model for hook evaluation |
| ユーザー設定からのスラッシュコマンドが2回読み込まれ、レンダリングの問題を引き起こす可能性があった問題を修正 | Fixed slash commands from user settings being loaded twice, which could cause rendering issues |
| コマンドの説明でユーザー設定とプロジェクト設定の表示が正しくない問題を修正 | Fixed incorrect labeling of user settings vs project settings in command descriptions |
| プラグインコマンドフックの実行中にタイムアウトが発生するとクラッシュする問題を修正 | Fixed crash when plugin command hooks timeout during execution |
| 修正: `--model haiku` を使用している場合、Bedrock ユーザーに /model ピッカーで重複した Opus エントリが表示されなくなりました | Fixed: Bedrock users no longer see duplicate Opus entries in the /model picker when using `--model haiku` |
| 信頼ダイアログとオンボーディングでセキュリティドキュメントのリンクが壊れている問題を修正 | Fixed broken security documentation links in trust dialogs and onboarding |
| ESC キーを押して diff モーダルを閉じるとモデルも中断される問題を修正 | Fixed issue where pressing ESC to close the diff modal would also interrupt the model |
| ctrl-r 履歴検索でスラッシュコマンドにランディングしても検索がキャンセルされなくなりました | ctrl-r history search landing on a slash command no longer cancels the search |
| SDK: フックのカスタムタイムアウトをサポート | SDK: Support custom timeouts for hooks |
| より多くの安全な git コマンドを承認なしで実行できるようになりました | Allow more safe git commands to run without approval |
| プラグイン: 出力スタイルの共有とインストールをサポート | Plugins: Added support for sharing and installing output styles |
| Web からセッションをテレポートすると、自動的に upstream ブランチが設定されます | Teleporting a session from web will automatically set the upstream branch |

## 2.0.37

| 日本語 | English |
|--------|---------|
| 通知のアイドル状態の計算方法を修正 | Fixed how idleness is computed for notifications |
| Hooks: Notification フックイベントのマッチャー値を追加 | Hooks: Added matcher values for Notification hook events |
| 出力スタイル: フロントマターに `keep-coding-instructions` オプションを追加 | Output Styles: Added `keep-coding-instructions` option to frontmatter |

## 2.0.36

| 日本語 | English |
|--------|---------|
| 修正: DISABLE_AUTOUPDATER 環境変数がパッケージマネージャーの更新通知を適切に無効化するようになりました | Fixed: DISABLE_AUTOUPDATER environment variable now properly disables package manager update notifications |
| キューに入れられたメッセージが誤って bash コマンドとして実行される問題を修正 | Fixed queued messages being incorrectly executed as bash commands |
| キューに入れられたメッセージの処理中に入力が失われる問題を修正 | Fixed input being lost when typing while a queued message is processed |

## 2.0.35

| 日本語 | English |
|--------|---------|
| コマンド検索時のファジー検索結果を改善 | Improve fuzzy search results when searching commands |
| VS Code 拡張機能を改善し、UI 全体で `chat.fontSize` と `chat.fontFamily` 設定を尊重し、再読み込みなしでフォント変更を即座に適用 | Improved VS Code extension to respect `chat.fontSize` and `chat.fontFamily` settings throughout the entire UI, and apply font changes immediately without requiring reload |
| 指定されたアイドル時間後に SDK モードを自動終了する `CLAUDE_CODE_EXIT_AFTER_STOP_DELAY` 環境変数を追加（自動化ワークフローやスクリプトに便利） | Added `CLAUDE_CODE_EXIT_AFTER_STOP_DELAY` environment variable to automatically exit SDK mode after a specified idle duration, useful for automated workflows and scripts |
| `ignorePatterns` をプロジェクト設定から localSettings の deny permissions に移行 | Migrated `ignorePatterns` from project config to deny permissions in the localSettings. |
| `/hooks` メニューなどで空文字列やその他の偽値を持つアイテムでメニューナビゲーションがスタックする問題を修正 | Fixed menu navigation getting stuck on items with empty string or other falsy values (e.g., in the `/hooks` menu) |

## 2.0.34

| 日本語 | English |
|--------|---------|
| VSCode 拡張機能: 新しい会話の初期許可モードを設定するオプションを追加 | VSCode Extension: Added setting to configure the initial permission mode for new conversations |
| ネイティブ Rust ベースのファジーファインダーによるファイルパス候補のパフォーマンスを改善 | Improved file path suggestion performance with native Rust-based fuzzy finder |
| OAuth を使用する MCP サーバー（例: Slack）の接続中にハングする原因となった無限トークン更新ループを修正 | Fixed infinite token refresh loop that caused MCP servers with OAuth (e.g., Slack) to hang during connection |
| 大きなファイル（特に base64 エンコードされた画像）の読み書き時のメモリクラッシュを修正 | Fixed memory crash when reading or writing large files (especially base64-encoded images) |

## 2.0.33

| 日本語 | English |
|--------|---------|
| ネイティブバイナリインストールの起動が速くなりました | Native binary installs now launch quicker. |
| `claude doctor` がシンボリックリンクを適切に解決せず、Homebrew vs npm-global インストールを誤検出する問題を修正 | Fixed `claude doctor` incorrectly detecting Homebrew vs npm-global installations by properly resolving symlinks |
| `claude mcp serve` が互換性のない outputSchemas を持つツールを公開する問題を修正 | Fixed `claude mcp serve` exposing tools with incompatible outputSchemas |

## 2.0.32

| 日本語 | English |
|--------|---------|
| コミュニティのフィードバックに基づき出力スタイルの非推奨を取り消し | Un-deprecate output styles based on community feedback |
| 起動時にアナウンスを表示するための `companyAnnouncements` 設定を追加 | Added `companyAnnouncements` setting for displaying announcements on startup |
| PostToolUse フック実行中にフックの進捗メッセージが正しく更新されない問題を修正 | Fixed hook progress messages not updating correctly during PostToolUse hook execution |

## 2.0.31

| 日本語 | English |
|--------|---------|
| Windows: ネイティブインストールでモード切り替えのショートカットとして alt+m の代わりに shift+tab を使用 | Windows: native installation uses shift+tab as shortcut for mode switching, instead of alt+m |
| Vertex: サポートされているモデルで Web Search のサポートを追加 | Vertex: add support for Web Search on supported models |
| VSCode: .gitignore されたファイルをファイル検索に含めるための respectGitIgnore 設定を追加（デフォルトは true） | VSCode: Adding the respectGitIgnore configuration to include .gitignored files in file searches (defaults to true) |
| 「ツール名は一意である必要があります」エラーに関連するサブエージェントと MCP サーバーのバグを修正 | Fixed a bug with subagents and MCP servers related to "Tool names must be unique" error |
| `/compact` が既存のコンパクト境界を尊重することで `prompt_too_long` で失敗する問題を修正 | Fixed issue causing `/compact` to fail with `prompt_too_long` by making it respect existing compact boundaries |
| プラグインのアンインストールでプラグインが削除されない問題を修正 | Fixed plugin uninstall not removing plugins |

## 2.0.30

| 日本語 | English |
|--------|---------|
| macOS でキーチェーンがロックされている場合に API キーエラーが発生した際に `security unlock-keychain` を実行するヒントを追加 | Added helpful hint to run `security unlock-keychain` when encountering API key errors on macOS with locked keychain |
| ポリシーレベルで dangerouslyDisableSandbox エスケープハッチを無効にする `allowUnsandboxedCommands` サンドボックス設定を追加 | Added `allowUnsandboxedCommands` sandbox setting to disable the dangerouslyDisableSandbox escape hatch at policy level |
| 明示的なツールブロッキング用のカスタムエージェント定義に `disallowedTools` フィールドを追加 | Added `disallowedTools` field to custom agent definitions for explicit tool blocking |
| プロンプトベースの停止フックを追加 | Added prompt-based stop hooks |
| VSCode: .gitignore されたファイルをファイル検索に含めるための respectGitIgnore 設定を追加（デフォルトは true） | VSCode: Added respectGitIgnore configuration to include .gitignored files in file searches (defaults to true) |
| ネイティブビルドで SSE MCP サーバーを有効化 | Enabled SSE MCP servers on native build |
| 出力スタイルを非推奨に。`/output-style` でオプションを確認し、代わりに --system-prompt-file、--system-prompt、--append-system-prompt、CLAUDE.md、またはプラグインを使用してください | Deprecated output styles. Review options in `/output-style` and use --system-prompt-file, --system-prompt, --append-system-prompt, CLAUDE.md, or plugins instead |
| カスタム ripgrep 設定のサポートを削除し、Search が結果を返さず設定の検出が失敗する問題を解決 | Removed support for custom ripgrep configuration, resolving an issue where Search returns no results and config discovery fails |
| Explore エージェントがコードベース探索中に不要な .md 調査ファイルを作成する問題を修正 | Fixed Explore agent creating unwanted .md investigation files during codebase exploration |
| `/context` が「max_tokens must be greater than thinking.budget_tokens」エラーメッセージで失敗することがある問題を修正 | Fixed a bug where `/context` would sometimes fail with "max_tokens must be greater than thinking.budget_tokens" error message |
| `--mcp-config` フラグがファイルベースの MCP 設定を正しく上書きするように修正 | Fixed `--mcp-config` flag to correctly override file-based MCP configurations |
| セッション許可がローカル設定に保存されるバグを修正 | Fixed bug that saved session permissions to local settings |
| MCP ツールがサブエージェントで利用できない問題を修正 | Fixed MCP tools not being available to sub-agents |
| --dangerously-skip-permissions フラグを使用している場合にフックとプラグインが実行されない問題を修正 | Fixed hooks and plugins not executing when using --dangerously-skip-permissions flag |
| 矢印キーでタイプアヘッド候補をナビゲートする際の遅延を修正 | Fixed delay when navigating through typeahead suggestions with arrow keys |
| VSCode: 現在のファイルまたはコード選択状態を表示する入力フッターの選択インジケーターを復元 | VSCode: Restored selection indicator in input footer showing current file or code selection status |

## 2.0.28

| 日本語 | English |
|--------|---------|
| プランモード: 新しい Plan サブエージェントを導入 | Plan mode: introduced new Plan subagent |
| サブエージェント: claude がサブエージェントを再開できるようになりました | Subagents: claude can now choose to resume subagents |
| サブエージェント: claude がサブエージェントで使用されるモデルを動的に選択できるようになりました | Subagents: claude can dynamically choose the model used by its subagents |
| SDK: --max-budget-usd フラグを追加 | SDK: added --max-budget-usd flag |
| カスタムスラッシュコマンド、サブエージェント、出力スタイルの検出が .gitignore を尊重しなくなりました | Discovery of custom slash commands, subagents, and output styles no longer respects .gitignore |
| VS Code で `/terminal-setup` が `Shift + Enter` にバックスラッシュを追加するのを停止 | Stop `/terminal-setup` from adding backslash to `Shift + Enter` in VS Code |
| フラグメント構文を使用した git ベースのプラグインとマーケットプレイスのブランチとタグのサポートを追加（例: `owner/repo#branch`） | Add branch and tag support for git-based plugins and marketplaces using fragment syntax (e.g., `owner/repo#branch`) |
| ホームディレクトリから起動した際に初回起動時に macOS の許可プロンプトが表示されるバグを修正 | Fixed a bug where macOS permission prompts would show up upon initial launch when launching from home directory |
| その他のバグ修正 | Various other bug fixes |

## 2.0.27

| 日本語 | English |
|--------|---------|
| 許可プロンプトの新しい UI | New UI for permission prompts |
| セッション再開画面に現在のブランチフィルタリングと検索を追加し、ナビゲーションを容易に | Added current branch filtering and search to session resume screen for easier navigation |
| ディレクトリの @メンションが「No assistant message found」エラーを引き起こす問題を修正 | Fixed directory @-mention causing "No assistant message found" error |
| VSCode 拡張機能: ファイル検索に .gitignore されたファイルを含める設定オプションを追加 | VSCode Extension: Add config setting to include .gitignored files in file searches |
| VSCode 拡張機能: 無関係な「Warmup」会話と、設定がデフォルトにリセットされることがあるバグを修正 | VSCode Extension: Bug fixes for unrelated 'Warmup' conversations, and configuration/settings occasionally being reset to defaults |

## 2.0.25

| 日本語 | English |
|--------|---------|
| レガシー SDK エントリポイントを削除。今後の SDK アップデートについては @anthropic-ai/claude-agent-sdk に移行してください: https://platform.claude.com/docs/en/agent-sdk/migration-guide | Removed legacy SDK entrypoint. Please migrate to @anthropic-ai/claude-agent-sdk for future SDK updates: https://platform.claude.com/docs/en/agent-sdk/migration-guide |

## 2.0.24

| 日本語 | English |
|--------|---------|
| --setting-sources 'project' が指定されている場合にプロジェクトレベルのスキルが読み込まれないバグを修正 | Fixed a bug where project-level skills were not loading when --setting-sources 'project' was specified |
| Claude Code Web: Web -> CLI テレポートをサポート | Claude Code Web: Support for Web -> CLI teleport |
| サンドボックス: Linux & Mac で BashTool のサンドボックスモードをリリース | Sandbox: Releasing a sandbox mode for the BashTool on Linux & Mac |
| Bedrock: 認証が必要な場合に awsAuthRefresh 出力を表示 | Bedrock: Display awsAuthRefresh output when auth is required |

## 2.0.22

| 日本語 | English |
|--------|---------|
| スラッシュコマンドをスクロールする際のコンテンツレイアウトのシフトを修正 | Fixed content layout shift when scrolling through slash commands |
| IDE: thinking の有効/無効を切り替えるトグルを追加 | IDE: Add toggle to enable/disable thinking. |
| 並列ツール呼び出しで重複した許可プロンプトが表示されるバグを修正 | Fix bug causing duplicate permission prompts with parallel tool calls |
| エンタープライズマネージド MCP の許可リストと拒否リストのサポートを追加 | Add support for enterprise managed MCP allowlist and denylist |

## 2.0.21

| 日本語 | English |
|--------|---------|
| ツールレスポンスの MCP `structuredContent` フィールドをサポート | Support MCP `structuredContent` field in tool responses |
| インタラクティブな質問ツールを追加 | Added an interactive question tool |
| プランモードで Claude がより頻繁に質問するようになりました | Claude will now ask you questions more often in plan mode |
| Pro ユーザー向けのモデルオプションとして Haiku 4.5 を追加 | Added Haiku 4.5 as a model option for Pro users |
| キューに入れられたコマンドが以前のメッセージの出力にアクセスできない問題を修正 | Fixed an issue where queued commands don't have access to previous messages' output |

## 2.0.20

| 日本語 | English |
|--------|---------|
| Claude Skills のサポートを追加 | Added support for Claude Skills |

## 2.0.19

| 日本語 | English |
|--------|---------|
| 長時間実行される bash コマンドを強制終了する代わりに自動的にバックグラウンド化。BASH_DEFAULT_TIMEOUT_MS でカスタマイズ可能 | Auto-background long-running bash commands instead of killing them. Customize with BASH_DEFAULT_TIMEOUT_MS |
| print モードで Haiku が不必要に呼び出されるバグを修正 | Fixed a bug where Haiku was unnecessarily called in print mode |

## 2.0.17

| 日本語 | English |
|--------|---------|
| モデルセレクターに Haiku 4.5 を追加！ | Added Haiku 4.5 to model selector! |
| Haiku 4.5 はプランモードで自動的に Sonnet を使用し、実行には Haiku を使用（デフォルトで SonnetPlan） | Haiku 4.5 automatically uses Sonnet in plan mode, and Haiku for execution (i.e. SonnetPlan by default) |
| 3P（Bedrock と Vertex）はまだ自動的にアップグレードされません。`ANTHROPIC_DEFAULT_HAIKU_MODEL` の設定で手動アップグレード可能 | 3P (Bedrock and Vertex) are not automatically upgraded yet. Manual upgrading can be done through setting `ANTHROPIC_DEFAULT_HAIKU_MODEL` |
| Explore サブエージェントを導入。Haiku を搭載し、コンテキストを節約するために効率的にコードベースを検索します！ | Introducing the Explore subagent. Powered by Haiku it'll search through your codebase efficiently to save context! |
| OTEL: HTTP_PROXY と HTTPS_PROXY をサポート | OTEL: support HTTP_PROXY and HTTPS_PROXY |
| `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC` でリリースノートの取得も無効化されるようになりました | `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC` now disables release notes fetching |

## 2.0.15

| 日本語 | English |
|--------|---------|
| 以前作成したファイルを書き込む前に再度読み取る必要があった再開のバグを修正 | Fixed bug with resuming where previously created files needed to be read again before writing |
| @メンションされたファイルを書き込む前に再度読み取る必要があった `-p` モードのバグを修正 | Fixed bug with `-p` mode where @-mentioned files needed to be read again before writing |

## 2.0.14

| 日本語 | English |
|--------|---------|
| MCP サーバーの @メンションでオン/オフを切り替える機能を修正 | Fix @-mentioning MCP servers to toggle them on/off |
| インライン環境変数を含む bash の許可チェックを改善 | Improve permission checks for bash with inline env vars |
| ultrathink + thinking トグルを修正 | Fix ultrathink + thinking toggle |
| 不要なログインを削減 | Reduce unnecessary logins |
| --system-prompt をドキュメント化 | Document --system-prompt |
| レンダリングの改善 | Several improvements to rendering |
| プラグイン UI のポリッシュ | Plugins UI polish |

## 2.0.13

| 日本語 | English |
|--------|---------|
| ネイティブビルドで `/plugin` が動作しない問題を修正 | Fixed `/plugin` not working on native build |

## 2.0.12

| 日本語 | English |
|--------|---------|
| **プラグインシステムリリース**: マーケットプレイスからカスタムコマンド、エージェント、フック、MCP サーバーで Claude Code を拡張 | **Plugin System Released**: Extend Claude Code with custom commands, agents, hooks, and MCP servers from marketplaces |
| プラグイン管理用の `/plugin install`、`/plugin enable/disable`、`/plugin marketplace` コマンド | `/plugin install`, `/plugin enable/disable`, `/plugin marketplace` commands for plugin management |
| チームコラボレーション用の `extraKnownMarketplaces` によるリポジトリレベルのプラグイン設定 | Repository-level plugin configuration via `extraKnownMarketplaces` for team collaboration |
| プラグインの構造と設定を検証するための `/plugin validate` コマンド | `/plugin validate` command for validating plugin structure and configuration |
| プラグイン発表ブログ記事: https://www.anthropic.com/news/claude-code-plugins | Plugin announcement blog post at https://www.anthropic.com/news/claude-code-plugins |
| プラグインドキュメント: https://code.claude.com/docs/en/plugins | Plugin documentation available at https://code.claude.com/docs/en/plugins |
| `/doctor` コマンドによる包括的なエラーメッセージと診断 | Comprehensive error messages and diagnostics via `/doctor` command |
| `/model` セレクターのちらつきを回避 | Avoid flickering in `/model` selector |
| `/help` の改善 | Improvements to `/help` |
| `/resume` のサマリーでフックに言及することを回避 | Avoid mentioning hooks in `/resume` summaries |
| `/config` の「verbose」設定の変更がセッション間で永続化されるようになりました | Changes to the "verbose" setting in `/config` now persist across sessions |

## 2.0.11

| 日本語 | English |
|--------|---------|
| システムプロンプトのサイズを 1.4k トークン削減 | Reduced system prompt size by 1.4k tokens |
| IDE: よりスムーズなインタラクションのためのキーボードショートカットとフォーカスの問題を修正 | IDE: Fixed keyboard shortcuts and focus issues for smoother interaction |
| Opus フォールバックのレート制限エラーが誤って表示される問題を修正 | Fixed Opus fallback rate limit errors appearing incorrectly |
| /add-dir コマンドが誤ったデフォルトタブを選択する問題を修正 | Fixed /add-dir command selecting wrong default tab |

## 2.0.10

| 日本語 | English |
|--------|---------|
| スムーズな UI のためにターミナルレンダラーを書き直し | Rewrote terminal renderer for buttery smooth UI |
| @メンション、または /mcp で MCP サーバーの有効/無効を切り替え | Enable/disable MCP servers by @mentioning, or in /mcp |
| bash モードでシェルコマンドのタブ補完を追加 | Added tab completion for shell commands in bash mode |
| PreToolUse フックがツール入力を変更できるようになりました | PreToolUse hooks can now modify tool inputs |
| Ctrl-G を押してシステム設定のテキストエディターでプロンプトを編集 | Press Ctrl-G to edit your prompt in your system's configured text editor |
| コマンド内の環境変数を含む bash の許可チェックの修正 | Fixes for bash permission checks with environment variables in the command |

## 2.0.9

| 日本語 | English |
|--------|---------|
| bash のバックグラウンド化が動作しなくなった退行を修正 | Fix regression where bash backgrounding stopped working |

## 2.0.8

| 日本語 | English |
|--------|---------|
| Bedrock のデフォルト Sonnet モデルを `global.anthropic.claude-sonnet-4-5-20250929-v1:0` に更新 | Update Bedrock default Sonnet model to `global.anthropic.claude-sonnet-4-5-20250929-v1:0` |
| IDE: チャットでファイルとフォルダのドラッグ＆ドロップサポートを追加 | IDE: Add drag-and-drop support for files and folders in chat |
| /context: thinking ブロックのカウントを修正 | /context: Fix counting for thinking blocks |
| ダークターミナルでライトテーマを使用しているユーザーのメッセージレンダリングを改善 | Improve message rendering for users with light themes on dark terminals |
| 非推奨の .claude.json の allowedTools、ignorePatterns、env、todoFeatureEnabled 設定オプションを削除（代わりに settings.json で設定してください） | Remove deprecated .claude.json allowedTools, ignorePatterns, env, and todoFeatureEnabled config options (instead, configure these in your settings.json) |

## 2.0.5

| 日本語 | English |
|--------|---------|
| IDE: Enter と Tab での IME による意図しないメッセージ送信を修正 | IDE: Fix IME unintended message submission with Enter and Tab |
| IDE: ログイン画面に「Open in Terminal」リンクを追加 | IDE: Add "Open in Terminal" link in login screen |
| 未処理の OAuth 有効期限切れ 401 API エラーを修正 | Fix unhandled OAuth expiration 401 API errors |
| SDK: 重複メッセージを防ぐために SDKUserMessageReplay.isReplay を追加 | SDK: Added SDKUserMessageReplay.isReplay to prevent duplicate messages |

## 2.0.1

| 日本語 | English |
|--------|---------|
| Bedrock と Vertex 向けの Sonnet 4.5 デフォルトモデル設定変更をスキップ | Skip Sonnet 4.5 default model setting change for Bedrock and Vertex |
| 各種バグ修正とプレゼンテーションの改善 | Various bug fixes and presentation improvements |

## 2.0.0

| 日本語 | English |
|--------|---------|
| 新しいネイティブ VS Code 拡張機能 | New native VS Code extension |
| アプリ全体の新しいデザイン | Fresh coat of paint throughout the whole app |
| コードの変更を元に戻すための /rewind | /rewind a conversation to undo code changes |
| プランの制限を確認するための /usage コマンド | /usage command to see plan limits |
| Tab で thinking を切り替え（セッション間で維持） | Tab to toggle thinking (sticky across sessions) |
| Ctrl-R で履歴検索 | Ctrl-R to search history |
| 未出荷の claude config コマンド | Unshipped claude config command |
| Hooks: PostToolUse の「'tool_use' ids were found without 'tool_result' blocks」エラーを削減 | Hooks: Reduced PostToolUse 'tool_use' ids were found without 'tool_result' blocks errors |
| SDK: Claude Code SDK は Claude Agent SDK になりました | SDK: The Claude Code SDK is now the Claude Agent SDK |
| `--agents` フラグでサブエージェントを動的に追加 | Add subagents dynamically with `--agents` flag |

---

## 1.0.x

---

## 1.0.126

| 日本語 | English |
|--------|---------|
| Bedrock と Vertex で /context コマンドを有効化 | Enable /context command for Bedrock and Vertex |
| HTTP ベースの OpenTelemetry エクスポーター向けに mTLS サポートを追加 | Add mTLS support for HTTP-based OpenTelemetry exporters |

## 1.0.124

| 日本語 | English |
|--------|---------|
| `CLAUDE_BASH_NO_LOGIN` 環境変数を 1 または true に設定すると、BashTool でログインシェルをスキップ | Set `CLAUDE_BASH_NO_LOGIN` environment variable to 1 or true to to skip login shell for BashTool |
| Bedrock と Vertex の環境変数がすべての文字列を truthy として評価するバグを修正 | Fix Bedrock and Vertex environment variables evaluating all strings as truthy |
| 権限が拒否された場合、Claude に許可ツールのリストを通知しないように変更 | No longer inform Claude of the list of allowed tools when permission is denied |
| Bash ツールの権限チェックにおけるセキュリティ脆弱性を修正 | Fixed security vulnerability in Bash tool permission checks |
| 大きなファイルに対する VSCode 拡張機能のパフォーマンスを改善 | Improved VSCode extension performance for large files |

## 1.0.123

| 日本語 | English |
|--------|---------|
| Bash 権限ルールでマッチング時に出力リダイレクトをサポート（例: `Bash(python:*)` が `python script.py > output.txt` にマッチ） | Bash permission rules now support output redirections when matching (e.g., `Bash(python:*)` matches `python script.py > output.txt`) |
| "don't think" などの否定フレーズで思考モードが誤ってトリガーされるバグを修正 | Fixed thinking mode triggering on negation phrases like "don't think" |
| トークンストリーミング中のレンダリングパフォーマンス低下を修正 | Fixed rendering performance degradation during token streaming |
| SlashCommand ツールを追加。Claude がスラッシュコマンドを呼び出せるように。https://code.claude.com/docs/en/slash-commands#SlashCommand-tool | Added SlashCommand tool, which enables Claude to invoke your slash commands. https://code.claude.com/docs/en/slash-commands#SlashCommand-tool |
| BashTool 環境スナップショットのログ記録を強化 | Enhanced BashTool environment snapshot logging |
| ヘッドレスモードで会話を再開した際に、思考モードが不必要に有効になることがあるバグを修正 | Fixed a bug where resuming a conversation in headless mode would sometimes enable thinking unnecessarily |
| --debug ログをファイルに移行し、tail やフィルタリングを容易に | Migrated --debug logging to a file, to enable easy tailing & filtering |

## 1.0.120

| 日本語 | English |
|--------|---------|
| 入力時のラグを修正（特に大きなプロンプトで顕著） | Fix input lag during typing, especially noticeable with large prompts |
| VSCode 拡張機能のコマンドレジストリとセッションダイアログのユーザー体験を改善 | Improved VSCode extension command registry and sessions dialog user experience |
| セッションダイアログの応答性とビジュアルフィードバックを強化 | Enhanced sessions dialog responsiveness and visual feedback |
| worktree サポートチェックを削除して IDE 互換性の問題を修正 | Fixed IDE compatibility issue by removing worktree support check |
| プレフィックスマッチングを使用して Bash ツールの権限チェックがバイパスされるセキュリティ脆弱性を修正 | Fixed security vulnerability where Bash tool permission checks could be bypassed using prefix matching |

## 1.0.119

| 日本語 | English |
|--------|---------|
| インタラクティブモードに入る際にプロセスが視覚的にフリーズする Windows の問題を修正 | Fix Windows issue where process visually freezes on entering interactive mode |
| headersHelper 設定により MCP サーバーの動的ヘッダーをサポート | Support dynamic headers for MCP servers via headersHelper configuration |
| ヘッドレスセッションで思考モードが動作しない問題を修正 | Fix thinking mode not working in headless sessions |
| スラッシュコマンドが許可ツールを置き換えるのではなく、適切に更新するように修正 | Fix slash commands now properly update allowed tools instead of replacing them |

## 1.0.117

| 日本語 | English |
|--------|---------|
| Ctrl-R 履歴検索を追加。bash/zsh のように以前のコマンドを呼び出し可能に | Add Ctrl-R history search to recall previous commands like bash/zsh |
| 入力時のラグを修正（特に Windows で顕著） | Fix input lag while typing, especially on Windows |
| acceptEdits モードで sed コマンドを自動許可コマンドに追加 | Add sed command to auto-allowed commands in acceptEdits mode |
| Windows のパス比較でドライブレターの大文字小文字を区別しないように修正 | Fix Windows PATH comparison to be case-insensitive for drive letters |
| /add-dir の出力に権限管理のヒントを追加 | Add permissions management hint to /add-dir output |

## 1.0.115

| 日本語 | English |
|--------|---------|
| 視覚効果を強化して思考モードの表示を改善 | Improve thinking mode display with enhanced visual effects |
| /t を入力すると、プロンプト内で思考モードを一時的に無効化 | Type /t to temporarily disable thinking mode in your prompt |
| glob および grep ツールのパス検証を改善 | Improve path validation for glob and grep tools |
| ポストツールフックの出力を簡潔に表示し、視覚的な煩雑さを軽減 | Show condensed output for post-tool hooks to reduce visual clutter |
| 読み込み状態が完了した際のビジュアルフィードバックを修正 | Fix visual feedback when loading state completes |
| 権限リクエストダイアログの UI の一貫性を改善 | Improve UI consistency for permission request dialogs |

## 1.0.113

| 日本語 | English |
|--------|---------|
| インタラクティブモードでのパイプ入力を非推奨化 | Deprecated piped input in interactive mode |
| Ctrl+R のキーバインディングをトランスクリプト切り替えから Ctrl+O に変更 | Move Ctrl+R keybinding for toggling transcript to Ctrl+O |

## 1.0.112

| 日本語 | English |
|--------|---------|
| トランスクリプトモード（Ctrl+R）: 各アシスタントメッセージの生成に使用されたモデルを追加 | Transcript mode (Ctrl+R): Added the model used to generate each assistant message |
| 一部の Claude Max ユーザーが誤って Claude Pro ユーザーとして認識される問題に対処 | Addressed issue where some Claude Max users were incorrectly recognized as Claude Pro users |
| Hooks: SessionEnd フックに systemMessage サポートを追加 | Hooks: Added systemMessage support for SessionEnd hooks |
| スピナーのヒントを無効にする `spinnerTipsEnabled` 設定を追加 | Added `spinnerTipsEnabled` setting to disable spinner tips |
| IDE: 各種改善とバグ修正 | IDE: Various improvements and bug fixes |

## 1.0.111

| 日本語 | English |
|--------|---------|
| /model が提供されたモデル名を検証するように変更 | /model now validates provided model names |
| 不正なシェル構文解析による Bash ツールのクラッシュを修正 | Fixed Bash tool crashes caused by malformed shell syntax parsing |

## 1.0.110

| 日本語 | English |
|--------|---------|
| /terminal-setup コマンドが WezTerm をサポート | /terminal-setup command now supports WezTerm |
| MCP: OAuth トークンが有効期限前にプロアクティブにリフレッシュされるように | MCP: OAuth tokens now proactively refresh before expiration |
| バックグラウンド Bash プロセスの信頼性の問題を修正 | Fixed reliability issues with background Bash processes |

## 1.0.109

| 日本語 | English |
|--------|---------|
| SDK: `--include-partial-messages` CLI フラグによる部分メッセージストリーミングサポートを追加 | SDK: Added partial message streaming support via `--include-partial-messages` CLI flag |

## 1.0.106

| 日本語 | English |
|--------|---------|
| Windows: パス権限マッチングを POSIX 形式で一貫して使用するように修正（例: `Read(//c/Users/...)`） | Windows: Fixed path permission matching to consistently use POSIX format (e.g., `Read(//c/Users/...)`) |

## 1.0.97

| 日本語 | English |
|--------|---------|
| Settings: /doctor が権限ルールの構文を検証し、修正案を提案するように | Settings: /doctor now validates permission rule syntax and suggests corrections |

## 1.0.94

| 日本語 | English |
|--------|---------|
| Vertex: サポートされているモデルのグローバルエンドポイントをサポート | Vertex: add support for global endpoints for supported models |
| /memory コマンドでインポートされたすべてのメモリファイルを直接編集可能に | /memory command now allows direct editing of all imported memory files |
| SDK: カスタムツールをコールバックとして追加 | SDK: Add custom tools as callbacks |
| 現在の todo アイテムを一覧表示する /todos コマンドを追加 | Added /todos command to list current todo items |

## 1.0.93

| 日本語 | English |
|--------|---------|
| Windows: クリップボードから画像を貼り付けるショートカット alt + v を追加 | Windows: Add alt + v shortcut for pasting images from clipboard |
| 指定されたホスト名と IP のプロキシをバイパスする NO_PROXY 環境変数をサポート | Support NO_PROXY environment variable to bypass proxy for specified hostnames and IPs |

## 1.0.90

| 日本語 | English |
|--------|---------|
| 設定ファイルの変更が即座に反映されるように - 再起動不要 | Settings file changes take effect immediately - no restart required |

## 1.0.88

| 日本語 | English |
|--------|---------|
| "OAuth authentication is currently not supported" エラーの問題を修正 | Fixed issue causing "OAuth authentication is currently not supported" |
| ステータスライン入力に `exceeds_200k_tokens` を追加 | Status line input now includes `exceeds_200k_tokens` |
| /cost での不正確な使用量追跡を修正 | Fixed incorrect usage tracking in /cost. |
| モデルエイリアス opusplan、opus、sonnet を制御する `ANTHROPIC_DEFAULT_SONNET_MODEL` と `ANTHROPIC_DEFAULT_OPUS_MODEL` を導入 | Introduced `ANTHROPIC_DEFAULT_SONNET_MODEL` and `ANTHROPIC_DEFAULT_OPUS_MODEL` for controlling model aliases opusplan, opus, and sonnet. |
| Bedrock: デフォルトの Sonnet モデルを Sonnet 4 に更新 | Bedrock: Updated default Sonnet model to Sonnet 4 |

## 1.0.86

| 日本語 | English |
|--------|---------|
| コンテキストの問題を自己解決するための /context を追加 | Added /context to help users self-serve debug context issues |
| SDK: すべての SDK メッセージに UUID サポートを追加 | SDK: Added UUID support for all SDK messages |
| SDK: ユーザーメッセージを stdout に再生する `--replay-user-messages` を追加 | SDK: Added `--replay-user-messages` to replay user messages back to stdout |

## 1.0.85

| 日本語 | English |
|--------|---------|
| ステータスライン入力にセッションコスト情報を追加 | Status line input now includes session cost info |
| Hooks: SessionEnd フックを導入 | Hooks: Introduced SessionEnd hook |

## 1.0.84

| 日本語 | English |
|--------|---------|
| ネットワークが不安定な場合の tool_use/tool_result ID 不一致エラーを修正 | Fix tool_use/tool_result id mismatch error when network is unstable |
| タスク終了時に Claude がリアルタイムステアリングを無視することがあるバグを修正 | Fix Claude sometimes ignoring real-time steering when wrapping up a task |
| @-mention: エージェント、出力スタイル、スラッシュコマンドの編集を容易にするため ~/.claude/\* ファイルを候補に追加 | @-mention: Add ~/.claude/\* files to suggestions for easier agent, output style, and slash command editing |
| 組み込みの ripgrep をデフォルトで使用。この動作を無効にするには USE_BUILTIN_RIPGREP=0 を設定 | Use built-in ripgrep by default; to opt out of this behavior, set USE_BUILTIN_RIPGREP=0 |

## 1.0.83

| 日本語 | English |
|--------|---------|
| @-mention: パスにスペースを含むファイルをサポート | @-mention: Support files with spaces in path |
| 新しいきらめくスピナー | New shimmering spinner |

## 1.0.82

| 日本語 | English |
|--------|---------|
| SDK: リクエストキャンセルサポートを追加 | SDK: Add request cancellation support |
| SDK: カスタムパスを検索する新しい additionalDirectories オプション、スラッシュコマンド処理を改善 | SDK: New additionalDirectories option to search custom paths, improved slash command processing |
| Settings: .claude/settings.json ファイル内の無効なフィールドを検証で防止 | Settings: Validation prevents invalid fields in .claude/settings.json files |
| MCP: ツール名の一貫性を改善 | MCP: Improve tool name consistency |
| Bash: Claude が大きなファイルを自動的に読み取ろうとした際のクラッシュを修正 | Bash: Fix crash when Claude tries to automatically read large files |

## 1.0.81

| 日本語 | English |
|--------|---------|
| 出力スタイルをリリース。新しい組み込み教育用出力スタイル「Explanatory」と「Learning」を含む。ドキュメント: https://code.claude.com/docs/en/output-styles | Released output styles, including new built-in educational output styles "Explanatory" and "Learning". Docs: https://code.claude.com/docs/en/output-styles |
| Agents: エージェントファイルが解析できない場合のカスタムエージェント読み込みを修正 | Agents: Fix custom agent loading when agent files are unparsable |

## 1.0.80

| 日本語 | English |
|--------|---------|
| UI 改善: カスタムサブエージェントの色のテキストコントラストとスピナーのレンダリング問題を修正 | UI improvements: Fix text contrast for custom subagent colors and spinner rendering issues |

## 1.0.77

| 日本語 | English |
|--------|---------|
| Bash ツール: ヒアドキュメントと複数行文字列のエスケープを修正、stderr リダイレクト処理を改善 | Bash tool: Fix heredoc and multiline string escaping, improve stderr redirection handling |
| SDK: セッションサポートと権限拒否追跡を追加 | SDK: Add session support and permission denial tracking |
| 会話要約でのトークン制限エラーを修正 | Fix token limit errors in conversation summarization |
| Opus プランモード: プランモードでのみ Opus を実行し、それ以外は Sonnet を使用する新しい `/model` 設定 | Opus Plan Mode: New setting in `/model` to run Opus only in plan mode, Sonnet otherwise |

## 1.0.73

| 日本語 | English |
|--------|---------|
| MCP: `--mcp-config file1.json file2.json` で複数の設定ファイルをサポート | MCP: Support multiple config files with `--mcp-config file1.json file2.json` |
| MCP: Esc キーで OAuth 認証フローをキャンセル可能に | MCP: Press Esc to cancel OAuth authentication flows |
| Bash: コマンド検証を改善し、誤ったセキュリティ警告を減少 | Bash: Improved command validation and reduced false security warnings |
| UI: スピナーアニメーションとステータスラインの視覚的階層を強化 | UI: Enhanced spinner animations and status line visual hierarchy |
| Linux: Alpine および musl ベースのディストリビューションをサポート（別途 ripgrep のインストールが必要） | Linux: Added support for Alpine and musl-based distributions (requires separate ripgrep installation) |

## 1.0.72

| 日本語 | English |
|--------|---------|
| Ask 権限: /permissions で Claude Code が特定のツールを使用する前に常に確認を求めるように設定可能 | Ask permissions: have Claude Code always ask for confirmation to use specific tools with /permissions |

## 1.0.71

| 日本語 | English |
|--------|---------|
| バックグラウンドコマンド: (Ctrl-b) で任意の Bash コマンドをバックグラウンドで実行し、Claude が作業を続行可能に（開発サーバー、ログの tail など） | Background commands: (Ctrl-b) to run any Bash command in the background so Claude can keep working (great for dev servers, tailing logs, etc.) |
| カスタマイズ可能なステータスライン: /statusline でターミナルプロンプトを Claude Code に追加 | Customizable status line: add your terminal prompt to Claude Code with /statusline |

## 1.0.70

| 日本語 | English |
|--------|---------|
| パフォーマンス: 大きなコンテキストでのパフォーマンス向上のためにメッセージレンダリングを最適化 | Performance: Optimized message rendering for better performance with large contexts |
| Windows: ネイティブファイル検索、ripgrep、サブエージェント機能を修正 | Windows: Fixed native file search, ripgrep, and subagent functionality |
| スラッシュコマンドの引数で @-mentions をサポート | Added support for @-mentions in slash command arguments |

## 1.0.69

| 日本語 | English |
|--------|---------|
| Opus をバージョン 4.1 にアップグレード | Upgraded Opus to version 4.1 |

## 1.0.68

| 日本語 | English |
|--------|---------|
| `/pr-comments` などの特定のコマンドで誤ったモデル名が使用される問題を修正 | Fix incorrect model names being used for certain commands like `/pr-comments` |
| Windows: ツールの許可/拒否とプロジェクト信頼の権限チェックを改善。`.claude.json` に新しいプロジェクトエントリが作成される場合があります - 必要に応じて履歴フィールドを手動でマージしてください | Windows: improve permissions checks for allow / deny tools and project trust. This may create a new project entry in `.claude.json` - manually merge the history field if desired. |
| Windows: pnpm などのコマンド実行時の "No such file or directory" を排除するためサブプロセス生成を改善 | Windows: improve sub-process spawning to eliminate "No such file or directory" when running commands like pnpm |
| 自己解決型デバッグのために /doctor コマンドを CLAUDE.md と MCP ツールコンテキストで強化 | Enhanced /doctor command with CLAUDE.md and MCP tool context for self-serve debugging |
| SDK: ツール確認用の canUseTool コールバックサポートを追加 | SDK: Added canUseTool callback support for tool confirmation |
| `disableAllHooks` 設定を追加 | Added `disableAllHooks` setting |
| 大規模リポジトリでのファイル候補のパフォーマンスを改善 | Improved file suggestions performance in large repos |

## 1.0.65

| 日本語 | English |
|--------|---------|
| IDE: 接続安定性の問題と診断のエラー処理を修正 | IDE: Fixed connection stability issues and error handling for diagnostics |
| Windows: .bashrc ファイルを持たないユーザーのシェル環境設定を修正 | Windows: Fixed shell environment setup for users without .bashrc files |

## 1.0.64

| 日本語 | English |
|--------|---------|
| Agents: モデルカスタマイズサポートを追加 - エージェントが使用するモデルを指定可能に | Agents: Added model customization support - you can now specify which model an agent should use |
| Agents: 再帰的エージェントツールへの意図しないアクセスを修正 | Agents: Fixed unintended access to the recursive agent tool |
| Hooks: 警告やコンテキストを表示するためのフック JSON 出力に systemMessage フィールドを追加 | Hooks: Added systemMessage field to hook JSON output for displaying warnings and context |
| SDK: マルチターン会話でのユーザー入力追跡を修正 | SDK: Fixed user input tracking across multi-turn conversations |
| ファイル検索と @-mention 候補に隠しファイルを追加 | Added hidden files to file search and @-mention suggestions |

## 1.0.63

| 日本語 | English |
|--------|---------|
| Windows: ファイル検索、@agent メンション、カスタムスラッシュコマンド機能を修正 | Windows: Fixed file search, @agent mentions, and custom slash commands functionality |

## 1.0.62

| 日本語 | English |
|--------|---------|
| カスタムエージェント用の先行入力付き @-mention サポートを追加。@<your-custom-agent> で呼び出し可能 | Added @-mention support with typeahead for custom agents. @<your-custom-agent> to invoke it |
| Hooks: 新しいセッション初期化のための SessionStart フックを追加 | Hooks: Added SessionStart hook for new session initialization |
| /add-dir コマンドでディレクトリパスの先行入力をサポート | /add-dir command now supports typeahead for directory paths |
| ネットワーク接続チェックの信頼性を改善 | Improved network connectivity check reliability |

## 1.0.61

| 日本語 | English |
|--------|---------|
| トランスクリプトモード（Ctrl+R）: Esc キーで中断ではなくトランスクリプトモードを終了するように変更 | Transcript mode (Ctrl+R): Changed Esc to exit transcript mode rather than interrupt |
| Settings: JSON ファイルから設定を読み込む `--settings` フラグを追加 | Settings: Added `--settings` flag to load settings from a JSON file |
| Settings: シンボリックリンクである設定ファイルパスの解決を修正 | Settings: Fixed resolution of settings files paths that are symlinks |
| OTEL: 認証変更後に誤った組織が報告される問題を修正 | OTEL: Fixed reporting of wrong organization after authentication changes |
| スラッシュコマンド: Bash での許可ツールの権限チェックを修正 | Slash commands: Fixed permissions checking for allowed-tools with Bash |
| IDE: VSCode MacOS で ⌘+V を使用した画像貼り付けサポートを追加 | IDE: Added support for pasting images in VSCode MacOS using ⌘+V |
| IDE: IDE 自動接続を無効にする `CLAUDE_CODE_AUTO_CONNECT_IDE=false` を追加 | IDE: Added `CLAUDE_CODE_AUTO_CONNECT_IDE=false` for disabling IDE auto-connection |
| Claude Code によって実行される Claude およびユーザー提供のシェルコマンドをラップする `CLAUDE_CODE_SHELL_PREFIX` を追加 | Added `CLAUDE_CODE_SHELL_PREFIX` for wrapping Claude and user-provided shell commands run by Claude Code |

## 1.0.60

| 日本語 | English |
|--------|---------|
| 専門的なタスク用のカスタムサブエージェントを作成可能に！/agents で開始 | You can now create custom subagents for specialized tasks! Run /agents to get started |

## 1.0.59

| 日本語 | English |
|--------|---------|
| SDK: canUseTool コールバックによるツール確認サポートを追加 | SDK: Added tool confirmation support with canUseTool callback |
| SDK: 生成されたプロセスの環境変数指定を許可 | SDK: Allow specifying env for spawned process |
| Hooks: PermissionDecision をフックに公開（"ask" を含む） | Hooks: Exposed PermissionDecision to hooks (including "ask") |
| Hooks: UserPromptSubmit が高度な JSON 出力で additionalContext をサポート | Hooks: UserPromptSubmit now supports additionalContext in advanced JSON output |
| Opus を指定した一部の Max ユーザーがまだ Sonnet にフォールバックする問題を修正 | Fixed issue where some Max users that specified Opus would still see fallback to Sonnet |

## 1.0.58

| 日本語 | English |
|--------|---------|
| PDF の読み取りサポートを追加 | Added support for reading PDFs |
| MCP: 'claude mcp list' でのサーバーヘルスステータス表示を改善 | MCP: Improved server health status display in 'claude mcp list' |
| Hooks: フックコマンド用の CLAUDE_PROJECT_DIR 環境変数を追加 | Hooks: Added CLAUDE_PROJECT_DIR env var for hook commands |

## 1.0.57

| 日本語 | English |
|--------|---------|
| スラッシュコマンドでモデルを指定するサポートを追加 | Added support for specifying a model in slash commands |
| Claude が許可ツールを理解しやすいように権限メッセージを改善 | Improved permission messages to help Claude understand allowed tools |
| 修正: ターミナルラッピングでの bash 出力から末尾の改行を削除 | Fix: Remove trailing newlines from bash output in terminal wrapping |

## 1.0.56

| 日本語 | English |
|--------|---------|
| Windows: ターミナル VT モードをサポートする Node.js バージョンで shift+tab によるモード切り替えを有効化 | Windows: Enabled shift+tab for mode switching on versions of Node.js that support terminal VT mode |
| WSL IDE 検出の修正 | Fixes for WSL IDE detection |
| awsRefreshHelper による .aws ディレクトリの変更が反映されない問題を修正 | Fix an issue causing awsRefreshHelper changes to .aws directory not to be picked up |

## 1.0.55

| 日本語 | English |
|--------|---------|
| Opus 4 および Sonnet 4 モデルの知識カットオフを明確化 | Clarified knowledge cutoff for Opus 4 and Sonnet 4 models |
| Windows: Ctrl+Z クラッシュを修正 | Windows: fixed Ctrl+Z crash |
| SDK: エラーログのキャプチャ機能を追加 | SDK: Added ability to capture error logging |
| print モードでシステムプロンプトを上書きする --system-prompt-file オプションを追加 | Add --system-prompt-file option to override system prompt in print mode |

## 1.0.54

| 日本語 | English |
|--------|---------|
| Hooks: UserPromptSubmit フックと現在の作業ディレクトリをフック入力に追加 | Hooks: Added UserPromptSubmit hook and the current working directory to hook inputs |
| カスタムスラッシュコマンド: フロントマターに argument-hint を追加 | Custom slash commands: Added argument-hint to frontmatter |
| Windows: OAuth がポート 45454 を使用し、ブラウザ URL を適切に構築 | Windows: OAuth uses port 45454 and properly constructs browser URL |
| Windows: モード切り替えが alt + m を使用し、プランモードが適切にレンダリング | Windows: mode switching now uses alt + m, and plan mode renders properly |
| Shell: ファイル関連のエラーを修正するためインメモリシェルスナップショットに切り替え | Shell: Switch to in-memory shell snapshot to fix file-related errors |

## 1.0.53

| 日本語 | English |
|--------|---------|
| @-mention ファイルの切り捨てを 100 行から 2000 行に更新 | Updated @-mention file truncation from 100 lines to 2000 lines |
| AWS トークンリフレッシュ用のヘルパースクリプト設定を追加: awsAuthRefresh（aws sso login などのフォアグラウンド操作用）と awsCredentialExport（STS 風レスポンスによるバックグラウンド操作用） | Add helper script settings for AWS token refresh: awsAuthRefresh (for foreground operations like aws sso login) and awsCredentialExport (for background operation with STS-like response). |

## 1.0.52

| 日本語 | English |
|--------|---------|
| MCP サーバーインストラクションのサポートを追加 | Added support for MCP server instructions |

## 1.0.51

| 日本語 | English |
|--------|---------|
| ネイティブ Windows のサポートを追加（Git for Windows が必要） | Added support for native Windows (requires Git for Windows) |
| 環境変数 AWS_BEARER_TOKEN_BEDROCK による Bedrock API キーのサポートを追加 | Added support for Bedrock API keys through environment variable AWS_BEARER_TOKEN_BEDROCK |
| Settings: /doctor が無効な設定ファイルの特定と修正を支援 | Settings: /doctor can now help you identify and fix invalid setting files |
| `--append-system-prompt` が --print/-p だけでなくインタラクティブモードでも使用可能に | `--append-system-prompt` can now be used in interactive mode, not just --print/-p. |
| 自動コンパクト警告のしきい値を 60% から 80% に引き上げ | Increased auto-compact warning threshold from 60% to 80% |
| シェルスナップショットでスペースを含むユーザーディレクトリの処理問題を修正 | Fixed an issue with handling user directories with spaces for shell snapshots |
| OTEL リソースに os.type、os.version、host.arch、wsl.version（Windows Subsystem for Linux で実行中の場合）を追加 | OTEL resource now includes os.type, os.version, host.arch, and wsl.version (if running on Windows Subsystem for Linux) |
| カスタムスラッシュコマンド: サブディレクトリ内のユーザーレベルコマンドを修正 | Custom slash commands: Fixed user-level commands in subdirectories |
| プランモード: サブタスクから拒否されたプランが破棄される問題を修正 | Plan mode: Fixed issue where rejected plan from sub-task would get discarded |

## 1.0.48

| 日本語 | English |
|--------|---------|
| v1.0.45 でアプリが起動時にフリーズすることがあるバグを修正 | Fixed a bug in v1.0.45 where the app would sometimes freeze on launch |
| コマンド出力の最後の 5 行に基づいて Bash ツールに進捗メッセージを追加 | Added progress messages to Bash tool based on the last 5 lines of command output |
| MCP サーバー設定で変数展開サポートを追加 | Added expanding variables support for MCP server configuration |
| より信頼性の高い Bash ツール呼び出しのため、シェルスナップショットを /tmp から ~/.claude に移動 | Moved shell snapshots from /tmp to ~/.claude for more reliable Bash tool calls |
| Claude Code が WSL で実行される際の IDE 拡張機能パス処理を改善 | Improved IDE extension path handling when Claude Code runs in WSL |
| Hooks: PreCompact フックを追加 | Hooks: Added a PreCompact hook |
| Vim モード: c、f/F、t/T を追加 | Vim mode: Added c, f/F, t/T |

## 1.0.45

| 日本語 | English |
|--------|---------|
| 新しいツール入力パラメータと機能を備えた Search (Grep) ツールを再設計 | Redesigned Search (Grep) tool with new tool input parameters and features |
| ノートブックファイルの IDE diff を無効化し、"Timeout waiting after 1000ms" エラーを修正 | Disabled IDE diffs for notebook files, fixing "Timeout waiting after 1000ms" error |
| アトミック書き込みを強制して設定ファイルの破損問題を修正 | Fixed config file corruption issue by enforcing atomic writes |
| 既存の Ctrl+U 動作を壊さないようにプロンプト入力の undo を Ctrl+\_ に更新（zsh の undo ショートカットに一致） | Updated prompt input undo to Ctrl+\_ to avoid breaking existing Ctrl+U behavior, matching zsh's undo shortcut |
| Stop Hooks: /clear 後のトランスクリプトパスを修正し、ループがツール呼び出しで終了する際のトリガーを修正 | Stop Hooks: Fixed transcript path after /clear and fixed triggering when loop ends with tool call |
| カスタムスラッシュコマンド: サブディレクトリに基づくコマンド名の名前空間を復元。例: .claude/commands/frontend/component.md は /component ではなく /frontend:component に | Custom slash commands: Restored namespacing in command names based on subdirectories. For example, .claude/commands/frontend/component.md is now /frontend:component, not /component. |

## 1.0.44

| 日本語 | English |
|--------|---------|
| 新しい /export コマンドで会話を素早くエクスポートして共有可能 | New /export command lets you quickly export a conversation for sharing |
| MCP: resource_link ツール結果をサポート | MCP: resource_link tool results are now supported |
| MCP: /mcp ビューでツールアノテーションとツールタイトルを表示 | MCP: tool annotations and tool titles now display in /mcp view |
| Ctrl+Z を Claude Code のサスペンドに変更。`fg` を実行して再開。プロンプト入力の undo は Ctrl+U に | Changed Ctrl+Z to suspend Claude Code. Resume by running `fg`. Prompt input undo is now Ctrl+U. |

## 1.0.43

| 日本語 | English |
|--------|---------|
| テーマセレクターが過剰に保存するバグを修正 | Fixed a bug where the theme selector was saving excessively |
| Hooks: EPIPE システムエラー処理を追加 | Hooks: Added EPIPE system error handling |

## 1.0.42

| 日本語 | English |
|--------|---------|
| `/add-dir` コマンドでチルダ（`~`）展開をサポート | Added tilde (`~`) expansion support to `/add-dir` command |

## 1.0.41

| 日本語 | English |
|--------|---------|
| Hooks: Stop フックのトリガーを Stop と SubagentStop に分割 | Hooks: Split Stop hook triggering into Stop and SubagentStop |
| Hooks: 各コマンドのオプションのタイムアウト設定を有効化 | Hooks: Enabled optional timeout configuration for each command |
| Hooks: フック入力に "hook_event_name" を追加 | Hooks: Added "hook_event_name" to hook input |
| MCP ツールがツールリストに 2 回表示されるバグを修正 | Fixed a bug where MCP tools would display twice in tool list |
| `tool_decision` イベントで Bash ツール用の新しいツールパラメータ JSON | New tool parameters JSON for Bash tool in `tool_decision` event |

## 1.0.40

| 日本語 | English |
|--------|---------|
| `NODE_EXTRA_CA_CERTS` が設定されている場合に UNABLE_TO_GET_ISSUER_CERT_LOCALLY で API 接続エラーが発生するバグを修正 | Fixed a bug causing API connection errors with UNABLE_TO_GET_ISSUER_CERT_LOCALLY if `NODE_EXTRA_CA_CERTS` was set |

## 1.0.39

| 日本語 | English |
|--------|---------|
| OpenTelemetry ログに新しい Active Time メトリクスを追加 | New Active Time metric in OpenTelemetry logging |

## 1.0.38

| 日本語 | English |
|--------|---------|
| フックをリリース。https://github.com/anthropics/claude-code/issues/712 でのコミュニティの意見に特別な感謝。ドキュメント: https://code.claude.com/docs/en/hooks | Released hooks. Special thanks to community input in https://github.com/anthropics/claude-code/issues/712. Docs: https://code.claude.com/docs/en/hooks |

## 1.0.37

| 日本語 | English |
|--------|---------|
| ANTHROPIC_AUTH_TOKEN または apiKeyHelper 経由での `Proxy-Authorization` ヘッダー設定機能を削除 | Remove ability to set `Proxy-Authorization` header via ANTHROPIC_AUTH_TOKEN or apiKeyHelper |

## 1.0.36

| 日本語 | English |
|--------|---------|
| Web 検索が今日の日付をコンテキストに考慮するように | Web search now takes today's date into context |
| 終了時に stdio MCP サーバーが適切に終了しないバグを修正 | Fixed a bug where stdio MCP servers were not terminating properly on exit |

## 1.0.35

| 日本語 | English |
|--------|---------|
| MCP OAuth Authorization Server 検出のサポートを追加 | Added support for MCP OAuth Authorization Server discovery |

## 1.0.34

| 日本語 | English |
|--------|---------|
| MaxListenersExceededWarning メッセージが表示されるメモリリークを修正 | Fixed a memory leak causing a MaxListenersExceededWarning message to appear |

## 1.0.33

| 日本語 | English |
|--------|---------|
| セッション ID サポートによるログ機能を改善 | Improved logging functionality with session ID support |
| プロンプト入力の undo 機能を追加（Ctrl+Z と vim の 'u' コマンド） | Added prompt input undo functionality (Ctrl+Z and vim 'u' command) |
| プランモードの改善 | Improvements to plan mode |

## 1.0.32

| 日本語 | English |
|--------|---------|
| litellm のループバック設定を更新 | Updated loopback config for litellm |
| ログイン選択画面をバイパスする forceLoginMethod 設定を追加 | Added forceLoginMethod setting to bypass login selection screen |

## 1.0.31

| 日本語 | English |
|--------|---------|
| ファイルに無効な JSON が含まれている場合に ~/.claude.json がリセットされるバグを修正 | Fixed a bug where ~/.claude.json would get reset when file contained invalid JSON |

## 1.0.30

| 日本語 | English |
|--------|---------|
| カスタムスラッシュコマンド: bash 出力の実行、@-mention ファイル、思考キーワードでの思考モード有効化 | Custom slash commands: Run bash output, @-mention files, enable thinking with thinking keywords |
| ファイル名マッチングによるファイルパス自動補完を改善 | Improved file path autocomplete with filename matching |
| Ctrl-r モードにタイムスタンプを追加し、Ctrl-c 処理を修正 | Added timestamps in Ctrl-r mode and fixed Ctrl-c handling |
| パイプと select を含む複雑なフィルター用の jq 正規表現サポートを強化 | Enhanced jq regex support for complex filters with pipes and select |

## 1.0.29

| 日本語 | English |
|--------|---------|
| カーソルナビゲーションとレンダリングでの CJK 文字サポートを改善 | Improved CJK character support in cursor navigation and rendering |

## 1.0.28

| 日本語 | English |
|--------|---------|
| スラッシュコマンド: 履歴ナビゲーション中のセレクター表示を修正 | Slash commands: Fix selector display during history navigation |
| API サイズ制限エラーを防ぐためアップロード前に画像をリサイズ | Resizes images before upload to prevent API size limit errors |
| 設定ディレクトリに XDG_CONFIG_HOME サポートを追加 | Added XDG_CONFIG_HOME support to configuration directory |
| メモリ使用量のパフォーマンス最適化 | Performance optimizations for memory usage |
| OpenTelemetry ログに新しい属性（terminal.type、language）を追加 | New attributes (terminal.type, language) in OpenTelemetry logging |

## 1.0.27

| 日本語 | English |
|--------|---------|
| Streamable HTTP MCP サーバーをサポート | Streamable HTTP MCP servers are now supported |
| リモート MCP サーバー（SSE および HTTP）が OAuth をサポート | Remote MCP servers (SSE and HTTP) now support OAuth |
| MCP リソースを @-mention 可能に | MCP resources can now be @-mentioned |
| Claude Code 内で会話を切り替える /resume スラッシュコマンド | /resume slash command to switch conversations within Claude Code |

## 1.0.25

| 日本語 | English |
|--------|---------|
| スラッシュコマンド: "project" と "user" プレフィックスを説明に移動 | Slash commands: moved "project" and "user" prefixes to descriptions |
| スラッシュコマンド: コマンド検出の信頼性を改善 | Slash commands: improved reliability for command discovery |
| Ghostty のサポートを改善 | Improved support for Ghostty |
| Web 検索の信頼性を改善 | Improved web search reliability |

## 1.0.24

| 日本語 | English |
|--------|---------|
| /mcp 出力を改善 | Improved /mcp output |
| 設定の配列がマージされずに上書きされるバグを修正 | Fixed a bug where settings arrays got overwritten instead of merged |

## 1.0.23

| 日本語 | English |
|--------|---------|
| TypeScript SDK をリリース: @anthropic-ai/claude-code をインポートして開始 | Released TypeScript SDK: import @anthropic-ai/claude-code to get started |
| Python SDK をリリース: pip install claude-code-sdk で開始 | Released Python SDK: pip install claude-code-sdk to get started |

## 1.0.22

| 日本語 | English |
|--------|---------|
| SDK: `total_cost` を `total_cost_usd` にリネーム | SDK: Renamed `total_cost` to `total_cost_usd` |

## 1.0.21

| 日本語 | English |
|--------|---------|
| タブベースのインデントを持つファイルの編集を改善 | Improved editing of files with tab-based indentation |
| 一致する tool_result のない tool_use エラーを修正 | Fix for tool_use without matching tool_result errors |
| Claude Code を終了した後に stdio MCP サーバープロセスが残るバグを修正 | Fixed a bug where stdio MCP server processes would linger after quitting Claude Code |

## 1.0.18

| 日本語 | English |
|--------|---------|
| 追加の作業ディレクトリを指定する --add-dir CLI 引数を追加 | Added --add-dir CLI argument for specifying additional working directories |
| -p フラグなしでストリーミング入力サポートを追加 | Added streaming input support without require -p flag |
| 起動パフォーマンスとセッションストレージパフォーマンスを改善 | Improved startup performance and session storage performance |
| bash コマンドの作業ディレクトリを固定する CLAUDE_BASH_MAINTAIN_PROJECT_WORKING_DIR 環境変数を追加 | Added CLAUDE_BASH_MAINTAIN_PROJECT_WORKING_DIR environment variable to freeze working directory for bash commands |
| 詳細な MCP サーバーツール表示を追加（/mcp） | Added detailed MCP server tools display (/mcp) |
| MCP 認証と権限の改善 | MCP authentication and permission improvements |
| 切断時の MCP SSE 接続の自動再接続を追加 | Added auto-reconnection for MCP SSE connections on disconnect |
| ダイアログ表示時に貼り付けたコンテンツが失われる問題を修正 | Fixed issue where pasted content was lost when dialogs appeared |

## 1.0.17

| 日本語 | English |
|--------|---------|
| -p モードでサブタスクからのメッセージを出力（parent_tool_use_id プロパティを確認） | We now emit messages from sub-tasks in -p mode (look for the parent_tool_use_id property) |
| VS Code diff ツールが連続して呼び出された際のクラッシュを修正 | Fixed crashes when the VS Code diff tool is invoked multiple times quickly |
| MCP サーバーリスト UI の改善 | MCP server list UI improvements |
| Claude Code プロセスタイトルを "node" ではなく "claude" と表示するように更新 | Update Claude Code process title to display "claude" instead of "node" |

## 1.0.11

| 日本語 | English |
|--------|---------|
| Claude Code が Claude Pro サブスクリプションでも使用可能に | Claude Code can now also be used with a Claude Pro subscription |
| Claude Max プランへのスムーズな切り替えのための /upgrade を追加 | Added /upgrade for smoother switching to Claude Max plans |
| API キーと Bedrock/Vertex/外部認証トークンからの認証 UI を改善 | Improved UI for authentication from API keys and Bedrock/Vertex/external auth tokens |
| シェル設定のエラー処理を改善 | Improved shell configuration error handling |
| コンパクション中の todo リスト処理を改善 | Improved todo list handling during compaction |

## 1.0.10

| 日本語 | English |
|--------|---------|
| マークダウンテーブルサポートを追加 | Added markdown table support |
| ストリーミングパフォーマンスを改善 | Improved streaming performance |

## 1.0.8

| 日本語 | English |
|--------|---------|
| CLOUD_ML_REGION 使用時の Vertex AI リージョンフォールバックを修正 | Fixed Vertex AI region fallback when using CLOUD_ML_REGION |
| デフォルトの OTEL インターバルを 1 秒から 5 秒に増加 | Increased default otel interval from 1s -> 5s |
| MCP_TIMEOUT と MCP_TOOL_TIMEOUT が尊重されないエッジケースを修正 | Fixed edge cases where MCP_TIMEOUT and MCP_TOOL_TIMEOUT weren't being respected |
| 検索ツールが不必要に権限を要求するリグレッションを修正 | Fixed a regression where search tools unnecessarily asked for permissions |
| 英語以外の言語で思考モードをトリガーするサポートを追加 | Added support for triggering thinking non-English languages |
| コンパクト UI を改善 | Improved compacting UI |

## 1.0.7

| 日本語 | English |
|--------|---------|
| /allowed-tools を /permissions にリネーム | Renamed /allowed-tools -> /permissions |
| allowedTools と ignorePatterns を .claude.json から settings.json に移行 | Migrated allowedTools and ignorePatterns from .claude.json -> settings.json |
| settings.json の編集を優先し、claude config コマンドを非推奨化 | Deprecated claude config commands in favor of editing settings.json |
| --print モードで --dangerously-skip-permissions が動作しないことがあるバグを修正 | Fixed a bug where --dangerously-skip-permissions sometimes didn't work in --print mode |
| /install-github-app のエラー処理を改善 | Improved error handling for /install-github-app |
| バグ修正、UI ポリッシュ、ツール信頼性の改善 | Bugfixes, UI polish, and tool reliability improvements |

## 1.0.6

| 日本語 | English |
|--------|---------|
| タブインデントファイルの編集信頼性を改善 | Improved edit reliability for tab-indented files |
| どこでも CLAUDE_CONFIG_DIR を尊重 | Respect CLAUDE_CONFIG_DIR everywhere |
| 不必要なツール権限プロンプトを削減 | Reduced unnecessary tool permission prompts |
| @file 先行入力でシンボリックリンクをサポート | Added support for symlinks in @file typeahead |
| バグ修正、UI ポリッシュ、ツール信頼性の改善 | Bugfixes, UI polish, and tool reliability improvements |

## 1.0.4

| 日本語 | English |
|--------|---------|
| MCP ツールエラーが正しく解析されないバグを修正 | Fixed a bug where MCP tool errors weren't being parsed correctly |

## 1.0.1

| 日本語 | English |
|--------|---------|
| インターリーブ思考をオプトアウトするための `DISABLE_INTERLEAVED_THINKING` を追加 | Added `DISABLE_INTERLEAVED_THINKING` to give users the option to opt out of interleaved thinking. |
| プロバイダー固有の名前を表示するようにモデル参照を改善（Bedrock は Sonnet 3.7、Console は Sonnet 4） | Improved model references to show provider-specific names (Sonnet 3.7 for Bedrock, Sonnet 4 for Console) |
| ドキュメントリンクと OAuth プロセスの説明を更新 | Updated documentation links and OAuth process descriptions |

## 1.0.0

| 日本語 | English |
|--------|---------|
| Claude Code が一般提供開始 | Claude Code is now generally available |
| Sonnet 4 および Opus 4 モデルを導入 | Introducing Sonnet 4 and Opus 4 models |

---

## 0.2.x

---

## 0.2.125

| 日本語 | English |
|--------|---------|
| 破壊的変更: `ANTHROPIC_MODEL` または `ANTHROPIC_SMALL_FAST_MODEL` に渡す Bedrock ARN は、エスケープされたスラッシュを含まないようにする必要があります（`%2F` ではなく `/` を指定） | Breaking change: Bedrock ARN passed to `ANTHROPIC_MODEL` or `ANTHROPIC_SMALL_FAST_MODEL` should no longer contain an escaped slash (specify `/` instead of `%2F`) |
| すべてのリクエストをログに記録するため、`DEBUG=true` を廃止し `ANTHROPIC_LOG=debug` に変更 | Removed `DEBUG=true` in favor of `ANTHROPIC_LOG=debug`, to log all requests |

## 0.2.117

| 日本語 | English |
|--------|---------|
| 破壊的変更: --print の JSON 出力がネストされたメッセージオブジェクトを返すようになりました（新しいメタデータフィールド導入時の前方互換性のため） | Breaking change: --print JSON output now returns nested message objects, for forwards-compatibility as we introduce new metadata fields |
| settings.cleanupPeriodDays を導入 | Introduced settings.cleanupPeriodDays |
| CLAUDE_CODE_API_KEY_HELPER_TTL_MS 環境変数を導入 | Introduced CLAUDE_CODE_API_KEY_HELPER_TTL_MS env var |
| --debug モードを導入 | Introduced --debug mode |

## 0.2.108

| 日本語 | English |
|--------|---------|
| Claude の作業中にメッセージを送信して、リアルタイムで Claude を誘導できるようになりました | You can now send messages to Claude while it works to steer Claude in real-time |
| BASH_DEFAULT_TIMEOUT_MS と BASH_MAX_TIMEOUT_MS 環境変数を導入 | Introduced BASH_DEFAULT_TIMEOUT_MS and BASH_MAX_TIMEOUT_MS env vars |
| -p モードで thinking が動作しないバグを修正 | Fixed a bug where thinking was not working in -p mode |
| /cost レポートのリグレッションを修正 | Fixed a regression in /cost reporting |
| MCP ウィザードインターフェースを廃止し、他の MCP コマンドを推奨 | Deprecated MCP wizard interface in favor of other MCP commands |
| その他多数のバグ修正と改善 | Lots of other bugfixes and improvements |

## 0.2.107

| 日本語 | English |
|--------|---------|
| CLAUDE.md ファイルから他のファイルをインポートできるようになりました。./CLAUDE.md に @path/to/file.md を追加すると、起動時に追加ファイルを読み込みます | CLAUDE.md files can now import other files. Add @path/to/file.md to ./CLAUDE.md to load additional files on launch |

## 0.2.106

| 日本語 | English |
|--------|---------|
| MCP SSE サーバー設定でカスタムヘッダーを指定できるようになりました | MCP SSE server configs can now specify custom headers |
| MCP 権限プロンプトが正しく表示されないことがあるバグを修正 | Fixed a bug where MCP permission prompt didn't always show correctly |

## 0.2.105

| 日本語 | English |
|--------|---------|
| Claude が Web 検索できるようになりました | Claude can now search the web |
| システムとアカウントのステータスを /status に移動 | Moved system & account status to /status |
| Vim 用の単語移動キーバインドを追加 | Added word movement keybindings for Vim |
| 起動、todo ツール、ファイル編集のレイテンシを改善 | Improved latency for startup, todo tool, and file edits |

## 0.2.102

| 日本語 | English |
|--------|---------|
| thinking トリガーの信頼性を向上 | Improved thinking triggering reliability |
| 画像とフォルダの @メンション の信頼性を向上 | Improved @mention reliability for images and folders |
| 1つのプロンプトに複数の大きなチャンクを貼り付けられるようになりました | You can now paste multiple large chunks into one prompt |

## 0.2.100

| 日本語 | English |
|--------|---------|
| スタックオーバーフローエラーによるクラッシュを修正 | Fixed a crash caused by a stack overflow error |
| DB ストレージをオプション化。DB サポートがない場合、--continue と --resume が無効になります | Made db storage optional; missing db support disables --continue and --resume |

## 0.2.98

| 日本語 | English |
|--------|---------|
| auto-compact が2回実行される問題を修正 | Fixed an issue where auto-compact was running twice |

## 0.2.96

| 日本語 | English |
|--------|---------|
| Claude Code を Claude Max サブスクリプションでも使用できるようになりました (https://claude.ai/upgrade) | Claude Code can now also be used with a Claude Max subscription (https://claude.ai/upgrade) |

## 0.2.93

| 日本語 | English |
|--------|---------|
| "claude --continue" と "claude --resume" で中断したところから会話を再開できます | Resume conversations from where you left off from with "claude --continue" and "claude --resume" |
| Claude が Todo リストにアクセスして、タスクを整理し軌道に乗せることができるようになりました | Claude now has access to a Todo list that helps it stay on track and be more organized |

## 0.2.82

| 日本語 | English |
|--------|---------|
| --disallowedTools のサポートを追加 | Added support for --disallowedTools |
| 一貫性のためツール名を変更: LSTool -> LS、View -> Read など | Renamed tools for consistency: LSTool -> LS, View -> Read, etc. |

## 0.2.75

| 日本語 | English |
|--------|---------|
| Enter キーを押して、Claude の作業中に追加メッセージをキューに入れられます | Hit Enter to queue up additional messages while Claude is working |
| 画像ファイルをプロンプトに直接ドラッグ、またはコピー＆ペーストできます | Drag in or copy/paste image files directly into the prompt |
| @ でファイルをメンションして直接コンテキストに追加できます | @-mention files to directly add them to context |
| `claude --mcp-config <path-to-file>` でワンオフの MCP サーバーを実行できます | Run one-off MCP servers with `claude --mcp-config <path-to-file>` |
| ファイル名オートコンプリートのパフォーマンスを改善 | Improved performance for filename auto-complete |

## 0.2.74

| 日本語 | English |
|--------|---------|
| 動的に生成される API キー（apiKeyHelper 経由）のリフレッシュをサポート（TTL 5分） | Added support for refreshing dynamically generated API keys (via apiKeyHelper), with a 5 minute TTL |
| Task ツールで書き込みと bash コマンドの実行が可能になりました | Task tool can now perform writes and run bash commands |

## 0.2.72

| 日本語 | English |
|--------|---------|
| スピナーを更新して、読み込まれたトークン数とツール使用状況を表示 | Updated spinner to indicate tokens loaded and tool usage |

## 0.2.70

| 日本語 | English |
|--------|---------|
| curl などのネットワークコマンドを Claude が使用できるようになりました | Network commands like curl are now available for Claude to use |
| Claude が複数の Web クエリを並列実行できるようになりました | Claude can now run multiple web queries in parallel |
| ESC を1回押すと、自動承認モードで即座に Claude を中断できます | Pressing ESC once immediately interrupts Claude in Auto-accept mode |

## 0.2.69

| 日本語 | English |
|--------|---------|
| Select コンポーネントの動作改善により UI の不具合を修正 | Fixed UI glitches with improved Select component behavior |
| テキスト切り詰めロジックの改善によりターミナル出力表示を強化 | Enhanced terminal output display with better text truncation logic |

## 0.2.67

| 日本語 | English |
|--------|---------|
| 共有プロジェクト権限ルールを .claude/settings.json に保存できるようになりました | Shared project permission rules can be saved in .claude/settings.json |

## 0.2.66

| 日本語 | English |
|--------|---------|
| Print モード（-p）で --output-format=stream-json によるストリーミング出力をサポート | Print mode (-p) now supports streaming output via --output-format=stream-json |
| 貼り付け時にメモリモードや bash モードが予期せず起動する問題を修正 | Fixed issue where pasting could trigger memory or bash mode unexpectedly |

## 0.2.63

| 日本語 | English |
|--------|---------|
| MCP ツールが2回読み込まれ、ツール呼び出しエラーが発生する問題を修正 | Fixed an issue where MCP tools were loaded twice, which caused tool call errors |

## 0.2.61

| 日本語 | English |
|--------|---------|
| vim スタイルのキー（j/k）または bash/emacs ショートカット（Ctrl+n/p）でメニューを操作できます | Navigate menus with vim-style keys (j/k) or bash/emacs shortcuts (Ctrl+n/p) for faster interaction |
| クリップボード貼り付け機能の信頼性向上のため画像検出を強化 | Enhanced image detection for more reliable clipboard paste functionality |
| ESC キーで会話履歴セレクターがクラッシュする問題を修正 | Fixed an issue where ESC key could crash the conversation history selector |

## 0.2.59

| 日本語 | English |
|--------|---------|
| 画像をプロンプトに直接コピー＆ペーストできます | Copy+paste images directly into your prompt |
| bash ツールと fetch ツールの進捗インジケーターを改善 | Improved progress indicators for bash and fetch tools |
| 非インタラクティブモード（-p）のバグ修正 | Bugfixes for non-interactive mode (-p) |

## 0.2.54

| 日本語 | English |
|--------|---------|
| メッセージを '#' で始めると素早くメモリに追加できます | Quickly add to Memory by starting your message with '#' |
| ctrl+r を押すと長いツール結果の全出力を表示できます | Press ctrl+r to see full output for long tool results |
| MCP SSE トランスポートのサポートを追加 | Added support for MCP SSE transport |

## 0.2.53

| 日本語 | English |
|--------|---------|
| 新しい web fetch ツールにより、Claude が貼り付けた URL を表示できるようになりました | New web fetch tool lets Claude view URLs that you paste in |
| JPEG 検出のバグを修正 | Fixed a bug with JPEG detection |

## 0.2.50

| 日本語 | English |
|--------|---------|
| 新しい MCP「project」スコープにより、.mcp.json ファイルに MCP サーバーを追加してリポジトリにコミットできるようになりました | New MCP "project" scope now allows you to add MCP servers to .mcp.json files and commit them to your repository |

## 0.2.49

| 日本語 | English |
|--------|---------|
| 以前の MCP サーバースコープの名前を変更: 以前の「project」スコープは「local」に、「global」スコープは「user」になりました | Previous MCP server scopes have been renamed: previous "project" scope is now "local" and "global" scope is now "user" |

## 0.2.47

| 日本語 | English |
|--------|---------|
| Tab を押してファイル名やフォルダ名をオートコンプリートできます | Press Tab to auto-complete file and folder names |
| Shift + Tab を押してファイル編集の自動承認を切り替えられます | Press Shift + Tab to toggle auto-accept for file edits |
| 無限の会話長のための自動会話圧縮（/config で切り替え可能） | Automatic conversation compaction for infinite conversation length (toggle with /config) |

## 0.2.44

| 日本語 | English |
|--------|---------|
| Claude に thinking モードで計画を立てさせることができます: 'think'、'think harder'、または 'ultrathink' と言うだけです | Ask Claude to make a plan with thinking mode: just say 'think' or 'think harder' or even 'ultrathink' |

## 0.2.41

| 日本語 | English |
|--------|---------|
| MCP サーバー起動タイムアウトを MCP_TIMEOUT 環境変数で設定できるようになりました | MCP server startup timeout can now be configured via MCP_TIMEOUT environment variable |
| MCP サーバーの起動がアプリの起動をブロックしなくなりました | MCP server startup no longer blocks the app from starting up |

## 0.2.37

| 日本語 | English |
|--------|---------|
| 新しい /release-notes コマンドでいつでもリリースノートを表示できます | New /release-notes command lets you view release notes at any time |
| `claude config add/remove` コマンドがカンマまたはスペースで区切られた複数の値を受け付けるようになりました | `claude config add/remove` commands now accept multiple values separated by commas or spaces |

## 0.2.36

| 日本語 | English |
|--------|---------|
| `claude mcp add-from-claude-desktop` で Claude Desktop から MCP サーバーをインポートできます | Import MCP servers from Claude Desktop with `claude mcp add-from-claude-desktop` |
| `claude mcp add-json <n> <json>` で MCP サーバーを JSON 文字列として追加できます | Add MCP servers as JSON strings with `claude mcp add-json <n> <json>` |

## 0.2.34

| 日本語 | English |
|--------|---------|
| テキスト入力用の Vim バインディング - /vim または /config で有効化 | Vim bindings for text input - enable with /vim or /config |

## 0.2.32

| 日本語 | English |
|--------|---------|
| インタラクティブな MCP セットアップウィザード: "claude mcp add" を実行してステップバイステップのインターフェースで MCP サーバーを追加できます | Interactive MCP setup wizard: Run "claude mcp add" to add MCP servers with a step-by-step interface |
| 一部の PersistentShell の問題を修正 | Fix for some PersistentShell issues |

## 0.2.31

| 日本語 | English |
|--------|---------|
| カスタムスラッシュコマンド: .claude/commands/ ディレクトリ内の Markdown ファイルがカスタムスラッシュコマンドとして表示され、会話にプロンプトを挿入できます | Custom slash commands: Markdown files in .claude/commands/ directories now appear as custom slash commands to insert prompts into your conversation |
| MCP デバッグモード: --mcp-debug フラグを付けて実行すると、MCP サーバーエラーの詳細情報を取得できます | MCP debug mode: Run with --mcp-debug flag to get more information about MCP server errors |

## 0.2.30

| 日本語 | English |
|--------|---------|
| ターミナル互換性向上のため ANSI カラーテーマを追加 | Added ANSI color theme for better terminal compatibility |
| スラッシュコマンドの引数が正しく送信されない問題を修正 | Fixed issue where slash command arguments weren't being sent properly |
| （Mac のみ）API キーが macOS キーチェーンに保存されるようになりました | (Mac-only) API keys are now stored in macOS Keychain |

## 0.2.26

| 日本語 | English |
|--------|---------|
| ツール権限管理用の新しい /approved-tools コマンド | New /approved-tools command for managing tool permissions |
| コード可読性向上のための単語レベル差分表示 | Word-level diff display for improved code readability |
| スラッシュコマンドのファジーマッチング | Fuzzy matching for slash commands |

## 0.2.21

| 日本語 | English |
|--------|---------|
| /commands のファジーマッチング | Fuzzy matching for /commands |

---

*このファイルは [Claude Code](https://github.com/anthropics/claude-code) のCHANGELOGを元に翻訳されました。*
