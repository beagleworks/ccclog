# Claude Code 変更履歴 (2025年 - v2.0.x以前)

このファイルは Claude Code の2025年リリース分（バージョン2.0.x以前）の変更履歴を日本語で記載しています。

---

## 2.0.76

| 日本語 | English |
|--------|---------|
| Chrome統合利用時のmacOS code-sign警告の問題を修正 | Fixed issue with macOS code-sign warning when using Claude in Chrome integration |

## 2.0.75

| 日本語 | English |
|--------|---------|
| 軽微なバグ修正 | Minor bugfixes |

## 2.0.74

| 日本語 | English |
|--------|---------|
| LSP (Language Server Protocol) ツールを追加し、定義へのジャンプ、参照の検索、ホバードキュメントなどのコードインテリジェンス機能に対応 | Added LSP (Language Server Protocol) tool for code intelligence features like go-to-definition, find references, and hover documentation |
| Kitty、Alacritty、Zed、Warp ターミナルの `/terminal-setup` サポートを追加 | Added `/terminal-setup` support for Kitty, Alacritty, Zed, and Warp terminals |
| `/theme` に構文ハイライトのオン/オフを切り替える ctrl+t ショートカットを追加 | Added ctrl+t shortcut in `/theme` to toggle syntax highlighting on/off |
| テーマピッカーに構文ハイライト情報を追加 | Added syntax highlighting info to theme picker |
| macOS ユーザー向けに、ターミナル設定により Alt ショートカットが失敗する場合のガイダンスを追加 | Added guidance for macOS users when Alt shortcuts fail due to terminal configuration |
| スキルの `allowed-tools` がスキルから呼び出されたツールに適用されない問題を修正 | Fixed skill `allowed-tools` not being applied to tools invoked by the skill |
| ユーザーが既に Opus を使用している場合に Opus 4.5 のヒントが誤って表示される問題を修正 | Fixed Opus 4.5 tip incorrectly showing when user was already using Opus |
| 構文ハイライトが正しく初期化されない場合の潜在的なクラッシュを修正 | Fixed a potential crash when syntax highlighting isn't initialized correctly |
| `/plugins discover` で検索ボックスにフォーカスがある間にリスト選択インジケーターが表示される視覚的なバグを修正 | Fixed visual bug in `/plugins discover` where list selection indicator showed while search box was focused |
| macOS のキーボードショートカットで 'alt' の代わりに 'opt' を表示するよう修正 | Fixed macOS keyboard shortcuts to display 'opt' instead of 'alt' |
| `/context` コマンドの表示を改善し、スキルとエージェントをソース別にグループ化、スラッシュコマンドの表示、トークン数のソートに対応 | Improved `/context` command visualization with grouped skills and agents by source, slash commands, and sorted token count |
| [Windows] 不適切なレンダリングの問題を修正 | [Windows] Fixed issue with improper rendering |
| [VSCode] 年末プロモーションメッセージ用のギフトタグ絵文字を追加 | [VSCode] Added gift tag pictogram for year-end promotion message |

## 2.0.73

| 日本語 | English |
|--------|---------|
| 添付画像をデフォルトビューアで開けるクリック可能な `[Image #N]` リンクを追加 | Added clickable `[Image #N]` links that open attached images in the default viewer |
| ctrl-y yank 後に alt-y yank-pop でキルリング履歴を循環可能に | Added alt-y yank-pop to cycle through kill ring history after ctrl-y yank |
| プラグイン検索画面にフィルタリング機能を追加(名前、説明、マーケットプレイスで絞り込み可能) | Added search filtering to the plugin discover screen (type to filter by name, description, or marketplace) |
| `--session-id` を `--resume` または `--continue` と `--fork-session` と組み合わせてセッションをフォークする際のカスタムセッション ID に対応 | Added support for custom session IDs when forking sessions with `--session-id` combined with `--resume` or `--continue` and `--fork-session` |
| 入力履歴の循環が遅い問題と、メッセージ送信後にテキストが上書きされる可能性がある競合状態を修正 | Fixed slow input history cycling and race condition that could overwrite text after message submission |
| `/theme` コマンドでテーマピッカーを直接開くように改善 | Improved `/theme` command to open theme picker directly |
| テーマピッカーの UI を改善 | Improved theme picker UI |
| 統一された SearchBox コンポーネントにより、セッション再開、権限、プラグイン画面の検索 UX を改善 | Improved search UX across resume session, permissions, and plugins screens with a unified SearchBox component |
| [VSCode] 保留中の権限(青)と未読の補完(オレンジ)を示すタブアイコンバッジを追加 | [VSCode] Added tab icon badges showing pending permissions (blue) and unread completions (orange) |

## 2.0.72

| 日本語 | English |
|--------|---------|
| Chrome拡張機能（https://claude.ai/chrome）と連携し、Claude CodeからブラウザをClaude in Chrome（ベータ版）機能として直接制御可能に | Added Claude in Chrome (Beta) feature that works with the Chrome extension (https://claude.ai/chrome) to let you control your browser directly from Claude Code |
| ターミナルのちらつきを軽減 | Reduced terminal flickering |
| モバイルアプリのTipにスキャン可能なQRコードを追加し、アプリのダウンロードを迅速化 | Added scannable QR code to mobile app tip for quick app downloads |
| 会話再開時にローディングインジケータを追加し、フィードバックを改善 | Added loading indicator when resuming conversations for better feedback |
| 非インタラクティブモードで`/context`コマンドがカスタムシステムプロンプトを尊重しない問題を修正 | Fixed `/context` command not respecting custom system prompts in non-interactive mode |
| Ctrl+Yで貼り付ける際の連続したCtrl+K行の順序を修正 | Fixed order of consecutive Ctrl+K lines when pasting with Ctrl+Y |
| @メンションのファイル提案速度を改善（gitリポジトリで約3倍高速化） | Improved @ mention file suggestion speed (~3× faster in git repositories) |
| `.ignore`または`.rgignore`ファイルを持つリポジトリでのファイル提案パフォーマンスを改善 | Improved file suggestion performance in repos with `.ignore` or `.rgignore` files |
| 設定の検証エラーをより目立つように改善 | Improved settings validation errors to be more prominent |
| 思考トグルをTabからAlt+Tに変更し、誤操作を防止 | Changed thinking toggle from Tab to Alt+T to avoid accidental triggers |

## 2.0.71

| 日本語 | English |
|--------|---------|
| `/config` にプロンプト提案の有効/無効を切り替えるトグルを追加 | Added /config toggle to enable/disable prompt suggestions |
| `/config` コマンドのエイリアスとして `/settings` を追加 | Added `/settings` as an alias for the `/config` command |
| カーソルがパスの途中にある場合に @ ファイル参照サジェスチョンが誤って表示される問題を修正 | Fixed @ file reference suggestions incorrectly triggering when cursor is in the middle of a path |
| `--dangerously-skip-permissions` 使用時に `.mcp.json` の MCP サーバーが読み込まれない問題を修正 | Fixed MCP servers from `.mcp.json` not loading when using `--dangerously-skip-permissions` |
| シェルグロブパターンを含む有効な bash コマンド(例: `ls *.txt`、`for f in *.png`)が誤って拒否される権限ルールの問題を修正 | Fixed permission rules incorrectly rejecting valid bash commands containing shell glob patterns (e.g., `ls *.txt`, `for f in *.png`) |
| Bedrock: トークンカウントと推論プロファイル一覧取得時に環境変数 `ANTHROPIC_BEDROCK_BASE_URL` を尊重するよう対応 | Bedrock: Environment variable `ANTHROPIC_BEDROCK_BASE_URL` is now respected for token counting and inference profile listing |
| ネイティブビルド用の新しいシンタックスハイライトエンジンを導入 | New syntax highlighting engine for native build |

## 2.0.70

| 日本語 | English |
|--------|---------|
| プロンプト候補を即座に確定して送信する Enter キー機能を追加（Tab は編集用の確定のまま維持） | Added Enter key to accept and submit prompt suggestions immediately (tab still accepts for editing) |
| MCP ツール権限にワイルドカード構文 `mcp__server__*` を追加し、サーバー単位での一括許可・拒否に対応 | Added wildcard syntax `mcp__server__*` for MCP tool permissions to allow or deny all tools from a server |
| プラグインマーケットプレイス向けの自動更新トグルを追加し、マーケットプレイスごとに自動更新を制御可能に | Added auto-update toggle for plugin marketplaces, allowing per-marketplace control over automatic updates |
| ステータスライン入力に `current_usage` フィールドを追加し、コンテキストウィンドウの正確なパーセンテージ計算を実現 | Added `current_usage` field to status line input, enabling accurate context window percentage calculations |
| ユーザーの入力中にキューイングされたコマンドが処理されると入力内容がクリアされる問題を修正 | Fixed input being cleared when processing queued commands while the user was typing |
| Tab キーでプロンプト候補が入力済みテキストを置き換える問題を修正 | Fixed prompt suggestions replacing typed input when pressing Tab |
| ターミナルのリサイズ時に差分ビューが更新されない問題を修正 | Fixed diff view not updating when terminal is resized |
| 大規模な会話でのメモリ使用量を 3 倍改善 | Improved memory usage by 3x for large conversations |
| クリップボードにコピーされる統計スクリーンショット（Ctrl+S）の解像度を向上し、より鮮明な画像を実現 | Improved resolution of stats screenshots copied to clipboard (Ctrl+S) for crisper images |
| クイックメモリエントリ用の # ショートカットを削除（代わりに Claude に CLAUDE.md の編集を依頼） | Removed # shortcut for quick memory entry (tell Claude to edit your CLAUDE.md instead) |
| /config での思考モードトグルが正しく永続化されない問題を修正 | Fix thinking mode toggle in /config not persisting correctly |
| ファイル作成の権限ダイアログの UI を改善 | Improve UI for file creation permission dialog |

## 2.0.69

| 日本語 | English |
|--------|---------|
| 軽微なバグ修正 | Minor bugfixes |

## 2.0.68

| 日本語 | English |
|--------|---------|
| カーソル位置にコンポジションウィンドウを正しく配置することで、中国語、日本語、韓国語などの IME（インプットメソッドエディタ）サポートを修正 | Fixed IME (Input Method Editor) support for languages like Chinese, Japanese, and Korean by correctly positioning the composition window at the cursor |
| 許可されていない MCP ツールがモデルに表示される不具合を修正 | Fixed a bug where disallowed MCP tools were visible to the model |
| サブエージェント動作中にステアリングメッセージが失われる問題を修正 | Fixed an issue where steering messages could be lost while a subagent is working |
| Option+Arrow キーによる単語ナビゲーションが CJK（中国語、日本語、韓国語）テキストシーケンス全体を単一の単語として扱い、単語境界でナビゲートしない問題を修正 | Fixed Option+Arrow word navigation treating entire CJK (Chinese, Japanese, Korean) text sequences as a single word instead of navigating by word boundaries |
| プランモード終了時の UX を改善: 空または欠落したプランで終了する際、エラーをスローする代わりにシンプルな yes/no ダイアログを表示 | Improved plan mode exit UX: show simplified yes/no dialog when exiting with empty or missing plan instead of throwing an error |
| エンタープライズマネージド設定のサポートを追加。この機能を有効にするには Anthropic アカウントチームに連絡 | Add support for enterprise managed settings. Contact your Anthropic account team to enable this feature. |

## 2.0.67

| 日本語 | English |
|--------|---------|
| Opus 4.5 で思考モードがデフォルトで有効化 | Thinking mode is now enabled by default for Opus 4.5 |
| 思考モードの設定を /config に移動 | Thinking mode configuration has moved to /config |
| `/permissions` コマンドに検索機能を追加し、`/` キーボードショートカットでツール名によるルールフィルタリングに対応 | Added search functionality to `/permissions` command with `/` keyboard shortcut for filtering rules by tool name |
| `/doctor` で自動更新が無効化されている理由を表示 | Show reason why autoupdater is disabled in `/doctor` |
| 最新バージョン実行中に `claude update` を実行した際の誤った「別のプロセスが更新中」エラーを修正 | Fixed false "Another process is currently updating Claude" error when running `claude update` while another instance is already on the latest version |
| 非インタラクティブモード（`-p` フラグまたはパイプ入力）実行時に `.mcp.json` の MCP サーバーが保留状態のままになる問題を修正 | Fixed MCP servers from `.mcp.json` being stuck in pending state when running in non-interactive mode (`-p` flag or piped input) |
| `/permissions` で権限ルール削除後にスクロール位置がリセットされる問題を修正 | Fixed scroll position resetting after deleting a permission rule in `/permissions` |
| キリル文字、ギリシャ文字、アラビア文字、ヘブライ文字、タイ文字、中国語などの非ラテン文字で単語削除（opt+delete）と単語ナビゲーション（opt+arrow）が正しく動作しない問題を修正 | Fixed word deletion (opt+delete) and word navigation (opt+arrow) not working correctly with non-Latin text such as Cyrillic, Greek, Arabic, Hebrew, Thai, and Chinese |
| `claude install --force` が古いロックファイルをバイパスしない問題を修正 | Fixed `claude install --force` not bypassing stale lock files |
| CLAUDE.md 内の連続した @~/ ファイル参照が Markdown の取り消し線処理により誤って解析される問題を修正 | Fixed consecutive @~/ file references in CLAUDE.md being incorrectly parsed due to markdown strikethrough interference |
| Windows: ログディレクトリパスのコロンによりプラグイン MCP サーバーが失敗する問題を修正 | Windows: Fixed plugin MCP servers failing due to colons in log directory paths |

## 2.0.65

| 日本語 | English |
|--------|---------|
| プロンプト入力中に alt+p (Linux/Windows) または option+p (macOS) でモデルを切り替える機能を追加 | Added ability to switch models while writing a prompt using alt+p (linux, windows), option+p (macos). |
| ステータスラインの入力欄にコンテキストウィンドウ情報を追加 | Added context window information to status line input |
| カスタム `@` ファイル検索コマンド用の `fileSuggestion` 設定を追加 | Added `fileSuggestion` setting for custom `@` file search commands |
| 自動シェル検出をオーバーライドする `CLAUDE_CODE_SHELL` 環境変数を追加(ログインシェルと実際の作業シェルが異なる場合に有用) | Added `CLAUDE_CODE_SHELL` environment variable to override automatic shell detection (useful when login shell differs from actual working shell) |
| Escape キーでクエリを中断した際にプロンプトが履歴に保存されない問題を修正 | Fixed prompt not being saved to history when aborting a query with Escape |
| Read ツールの画像処理でファイル拡張子ではなくバイト列から形式を識別するよう修正 | Fixed Read tool image handling to identify format from bytes instead of file extension |

## 2.0.64

| 日本語 | English |
|--------|---------|
| 自動圧縮を即座に実行するよう変更 | Made auto-compacting instant |
| エージェントと bash コマンドが非同期実行可能になり、メインエージェントを起動するメッセージを送信可能に | Agents and bash commands can run asynchronously and send messages to wake up the main agent |
| `/stats` でお気に入りモデル、使用状況グラフ、連続使用日数などの統計情報を表示 | /stats now provides users with interesting CC stats, such as favorite model, usage graph, usage streak |
| 名前付きセッションに対応：`/rename` でセッション名を設定し、REPL では `/resume <name>`、ターミナルでは `claude --resume <name>` で再開可能 | Added named session support: use `/rename` to name sessions, `/resume <name>` in REPL or `claude --resume <name>` from the terminal to resume them |
| `.claude/rules/` に対応。詳細は https://code.claude.com/docs/en/memory を参照 | Added support for .claude/rules/`.  See https://code.claude.com/docs/en/memory for details. |
| 画像リサイズ時に寸法メタデータを追加し、大きな画像の座標マッピングを正確に処理 | Added image dimension metadata when images are resized, enabling accurate coordinate mappings for large images |
| ネイティブインストーラー使用時に .env が自動読み込みされない問題を修正 | Fixed auto-loading .env when using native installer |
| `--continue` または `--resume` フラグ使用時に `--system-prompt` が無視される問題を修正 | Fixed `--system-prompt` being ignored when using `--continue` or `--resume` flags |
| `/resume` 画面を改善し、フォークされたセッションをグループ化、プレビュー (P) とリネーム (R) のキーボードショートカットを追加 | Improved `/resume` screen with grouped forked sessions and keyboard shortcuts for preview (P) and rename (R) |
| VSCode: コードブロックと bash ツール入力にクリップボードへのコピーボタンを追加 | VSCode: Added copy-to-clipboard button on code blocks and bash tool inputs |
| VSCode: Windows ARM64 でエミュレーション経由で x64 バイナリにフォールバックし、拡張機能が動作しない問題を修正 | VSCode: Fixed extension not working on Windows ARM64 by falling back to x64 binary via emulation |
| Bedrock: トークンカウントの効率を改善 | Bedrock: Improve efficiency of token counting |
| Bedrock: `aws login` による AWS Management Console 認証情報に対応 | Bedrock: Add support for `aws login` AWS Management Console credentials |
| AgentOutputTool と BashOutputTool を廃止し、新しい統合 TaskOutputTool に移行 | Unshipped AgentOutputTool and BashOutputTool, in favor of a new unified TaskOutputTool |

## 2.0.62

| 日本語 | English |
|--------|---------|
| 複数選択の質問で推奨オプションを示す「(Recommended)」インジケーターを追加し、推奨オプションをリストの先頭に配置 | Added "(Recommended)" indicator for multiple-choice questions, with the recommended option moved to the top of the list |
| コミットとPRの署名をカスタマイズする `attribution` 設定を追加（`includeCoAuthoredBy` は非推奨） | Added `attribution` setting to customize commit and PR bylines (deprecates `includeCoAuthoredBy`) |
| ~/.claude がプロジェクトディレクトリにシンボリックリンクされている場合にスラッシュコマンドが重複表示される問題を修正 | Fixed duplicate slash commands appearing when ~/.claude is symlinked to a project directory |
| 複数のコマンドが同じ名前を共有している場合にスラッシュコマンドの選択が機能しない問題を修正 | Fixed slash command selection not working when multiple commands share the same name |
| シンボリックリンクされたスキルディレクトリ内のスキルファイルが循環シンボリックリンクになる問題を修正 | Fixed an issue where skill files inside symlinked skill directories could become circular symlinks |
| ロックファイルが誤って古くなることで実行中のバージョンが削除される問題を修正 | Fixed running versions getting removed because lock file incorrectly going stale |
| ファイル変更を拒否した際にIDE差分タブが閉じない問題を修正 | Fixed IDE diff tab not closing when rejecting file changes |

## 2.0.61

| 日本語 | English |
|--------|---------|
| 応答性の問題により、複数ターミナルクライアントに対する VSCode サポートを取り消し | Reverted VSCode support for multiple terminal clients due to responsiveness issues. |

## 2.0.60

| 日本語 | English |
|--------|---------|
| バックグラウンドエージェント機能を追加。作業中にエージェントをバックグラウンドで実行可能 | Added background agent support. Agents run in the background while you work |
| すべてのスラッシュコマンドを無効化する --disable-slash-commands CLI フラグを追加 | Added --disable-slash-commands CLI flag to disable all slash commands |
| "Co-Authored-By" コミットメッセージにモデル名を追加 | Added model name to "Co-Authored-By" commit messages |
| "/mcp enable [server-name]" または "/mcp disable [server-name]" ですべてのサーバーを素早く切り替え可能に | Enabled "/mcp enable [server-name]" or "/mcp disable [server-name]" to quickly toggle all servers |
| 事前承認済みウェブサイトの要約をスキップするように Fetch を更新 | Updated Fetch to skip summarization for pre-approved websites |
| VSCode: IDE サーバーへの複数ターミナルクライアント同時接続に対応 | VSCode: Added support for multiple terminal clients connecting to the IDE server simultaneously |

## 2.0.59

| 日本語 | English |
|--------|---------|
| 現在のセッションでエージェント設定を上書きする --agent CLI フラグを追加 | Added --agent CLI flag to override the agent setting for the current session |
| メインスレッドに特定エージェントのシステムプロンプト、ツール制限、モデルを設定する `agent` 設定を追加 | Added `agent` setting to configure main thread with a specific agent's system prompt, tool restrictions, and model |
| VS Code: .claude.json 設定ファイルが誤った場所から読み込まれる問題を修正 | VS Code: Fixed .claude.json config file being read from incorrect location |

## 2.0.58

| 日本語 | English |
|--------|---------|
| ProユーザーはサブスクリプションでOpus 4.5にアクセス可能 | Pro users now have access to Opus 4.5 as part of their subscription! |
| タイマー表示が"12m 0s"の代わりに"11m 60s"と表示される問題を修正 | Fixed timer duration showing "11m 60s" instead of "12m 0s" |
| Windows: 管理設定で`C:\Program Files\ClaudeCode`が存在する場合は優先使用。`C:\ProgramData\ClaudeCode`のサポートは将来のバージョンで削除予定 | Windows: Managed settings now prefer `C:\Program Files\ClaudeCode` if it exists. Support for `C:\ProgramData\ClaudeCode` will be removed in a future version. |

## 2.0.57

| 日本語 | English |
|--------|---------|
| プラン却下時にフィードバック入力を追加し、ユーザーが変更内容を Claude に伝えられるように対応 | Added feedback input when rejecting plans, allowing users to tell Claude what to change |
| VSCode: リアルタイム応答表示のためのストリーミングメッセージサポートを追加 | VSCode: Added streaming message support for real-time response display |

## 2.0.56

| 日本語 | English |
|--------|---------|
| ターミナルプログレスバー (OSC 9;4) の有効/無効を切り替える設定を追加 | Added setting to enable/disable terminal progress bar (OSC 9;4) |
| VSCode Extension: VS Code のセカンダリサイドバー (VS Code 1.97+) に対応し、左側にファイルエクスプローラーを表示したまま右側のサイドバーに Claude Code を表示可能に (設定で sidebar を Preferred Location として指定する必要あり) | VSCode Extension: Added support for VS Code's secondary sidebar (VS Code 1.97+), allowing Claude Code to be displayed in the right sidebar while keeping the file explorer on the left. Requires setting sidebar as Preferred Location in the config. |

## 2.0.55

| 日本語 | English |
|--------|---------|
| プロキシ DNS 解決がデフォルトで強制有効化される問題を修正。環境変数 `CLAUDE_CODE_PROXY_RESOLVES_HOSTS=true` によるオプトイン方式に変更 | Fixed proxy DNS resolution being forced on by default. Now opt-in via `CLAUDE_CODE_PROXY_RESOLVES_HOSTS=true` environment variable |
| メモリ位置セレクタで矢印キーを押し続けた際にキーボードナビゲーションが応答しなくなる問題を修正 | Fixed keyboard navigation becoming unresponsive when holding down arrow keys in memory location selector |
| AskUserQuestion ツールを改善し、単一選択質問の最後の質問で自動送信することで、シンプルな質問フローの余分な確認画面を削除 | Improved AskUserQuestion tool to auto-submit single-select questions on the last question, eliminating the extra review screen for simple question flows |
| `@` ファイル提案のファジーマッチングを改善し、より高速で正確な結果を実現 | Improved fuzzy matching for `@` file suggestions with faster, more accurate results |

## 2.0.54

| 日本語 | English |
|--------|---------|
| フック: PermissionRequest フックで「常に許可」の提案を処理し、権限更新を適用可能に | Hooks: Enable PermissionRequest hooks to process 'always allow' suggestions and apply permission updates |
| iTerm の過剰な通知の問題を修正 | Fix issue with excessive iTerm notifications |

## 2.0.52

| 日本語 | English |
|--------|---------|
| コマンドライン引数を指定して Claude を起動した際にメッセージが重複表示される問題を修正 | Fixed duplicate message display when starting Claude with a command line argument |
| `/usage` コマンドの進捗バーが使用量の増加に応じて埋まるように修正（残り割合ではなく） | Fixed `/usage` command progress bars to fill up as usage increases (instead of showing remaining percentage) |
| Wayland 環境の Linux システムで画像の貼り付けが動作しない問題を修正（xclip が利用不可能な場合は wl-paste にフォールバック） | Fixed image pasting not working on Linux systems running Wayland (now falls back to wl-paste when xclip is unavailable) |
| bash コマンドでの `$!` の一部使用を許可 | Permit some uses of `$!` in bash commands |

## 2.0.51

| 日本語 | English |
|--------|---------|
| Opus 4.5 を追加 https://www.anthropic.com/news/claude-opus-4-5 | Added Opus 4.5! https://www.anthropic.com/news/claude-opus-4-5 |
| Claude Code for Desktop を導入 https://claude.com/download | Introducing Claude Code for Desktop: https://claude.com/download |
| 新モデルを試用できるよう、Claude Code ユーザーの使用制限を更新。詳細は Claude Opus 4.5 ブログを参照 | To give you room to try out our new model, we've updated usage limits for Claude Code users. See the Claude Opus 4.5 blog for full details |
| Pro ユーザーは Claude Code で Opus 4.5 にアクセスするための追加使用量を購入可能 | Pro users can now purchase extra usage for access to Opus 4.5 in Claude Code |
| Plan Mode でより正確なプランを構築し、より徹底的に実行するよう改善 | Plan Mode now builds more precise plans and executes more thoroughly |
| 使用制限通知をより理解しやすく改善 | Usage limit notifications now easier to understand |
| `/usage` を「使用率 %」表示に戻す | Switched `/usage` back to "% used" |
| thinking エラーの処理を修正 | Fixed handling of thinking errors |
| パフォーマンス低下を修正 | Fixed performance regression |

## 2.0.50

| 日本語 | English |
|--------|---------|
| 入力スキーマにネストされた参照を持つ MCP ツール呼び出しを妨げるバグを修正 | Fixed bug preventing calling MCP tools that have nested references in their input schemas |
| アップグレード中の無害だが頻繁に表示されるエラーを抑制 | Silenced a noisy but harmless error during upgrades |
| ultrathink テキスト表示を改善 | Improved ultrathink text display |
| 5時間セッション制限警告メッセージの明確性を向上 | Improved clarity of 5-hour session limit warning message |

## 2.0.49

| 日本語 | English |
|--------|---------|
| 削除テキストの貼り付けに readline スタイルの ctrl-y を追加 | Added readline-style ctrl-y for pasting deleted text |
| 使用制限警告メッセージの明確性を改善 | Improved clarity of usage limit warning message |
| サブエージェント権限の処理を修正 | Fixed handling of subagent permissions |

## 2.0.47

| 日本語 | English |
|--------|---------|
| `claude --teleport` のエラーメッセージとバリデーションを改善 | Improved error messages and validation for `claude --teleport` |
| `/usage` のエラーハンドリングを改善 | Improved error handling in `/usage` |
| 終了時に履歴エントリがログに記録されない競合状態を修正 | Fixed race condition with history entry not getting logged at exit |
| `settings.json` からの Vertex AI 設定が適用されない問題を修正 | Fixed Vertex AI configuration not being applied from `settings.json` |

## 2.0.46

| 日本語 | English |
|--------|---------|
| 画像ファイルのフォーマットがメタデータから検出できない場合に誤ったメディアタイプが報告される問題を修正 | Fixed image files being reported with incorrect media type when format cannot be detected from metadata |

## 2.0.45

| 日本語 | English |
|--------|---------|
| Microsoft Foundry をサポート! 詳細は https://code.claude.com/docs/en/azure-ai-foundry を参照 | Added support for Microsoft Foundry! See https://code.claude.com/docs/en/azure-ai-foundry |
| カスタムロジックでツールの権限リクエストを自動承認・拒否する `PermissionRequest` フックを追加 | Added `PermissionRequest` hook to automatically approve or deny tool permission requests with custom logic |
| メッセージを `&` で開始することで、バックグラウンドタスクを Web 版 Claude Code に送信可能 | Send background tasks to Claude Code on the web by starting a message with `&` |

## 2.0.43

| 日本語 | English |
|--------|---------|
| カスタムエージェントに `permissionMode` フィールドを追加 | Added `permissionMode` field for custom agents |
| `PreToolUseHookInput` および `PostToolUseHookInput` 型に `tool_use_id` フィールドを追加 | Added `tool_use_id` field to `PreToolUseHookInput` and `PostToolUseHookInput` types |
| サブエージェントで自動ロードするスキルを宣言する skills フロントマターフィールドを追加 | Added skills frontmatter field to declare skills to auto-load for subagents |
| `SubagentStart` フックイベントを追加 | Added the `SubagentStart` hook event |
| @メンションでファイルを参照する際にネストした `CLAUDE.md` ファイルが読み込まれない問題を修正 | Fixed nested `CLAUDE.md` files not loading when @-mentioning files |
| UI で一部のメッセージが重複してレンダリングされる問題を修正 | Fixed duplicate rendering of some messages in the UI |
| 一部の視覚的なちらつきを修正 | Fixed some visual flickers |
| セル ID が `cell-N` パターンに一致する場合に NotebookEdit ツールがセルを誤った位置に挿入する問題を修正 | Fixed NotebookEdit tool inserting cells at incorrect positions when cell IDs matched the pattern `cell-N` |

## 2.0.42

| 日本語 | English |
|--------|---------|
| `SubagentStop` フックに `agent_id` および `agent_transcript_path` フィールドを追加 | Added `agent_id` and `agent_transcript_path` fields to `SubagentStop` hooks. |

## 2.0.41

| 日本語 | English |
|--------|---------|
| プロンプトベースのストップフックに `model` パラメータを追加し、フック評価用のカスタムモデル指定に対応 | Added `model` parameter to prompt-based stop hooks, allowing users to specify a custom model for hook evaluation |
| ユーザー設定のスラッシュコマンドが二重読み込みされてレンダリング問題を引き起こす不具合を修正 | Fixed slash commands from user settings being loaded twice, which could cause rendering issues |
| コマンド説明におけるユーザー設定とプロジェクト設定の誤ったラベリングを修正 | Fixed incorrect labeling of user settings vs project settings in command descriptions |
| プラグインコマンドフックの実行中にタイムアウトが発生した際のクラッシュを修正 | Fixed crash when plugin command hooks timeout during execution |
| Bedrock ユーザーが `--model haiku` 使用時に /model ピッカーで Opus エントリが重複表示される問題を修正 | Fixed: Bedrock users no longer see duplicate Opus entries in the /model picker when using `--model haiku` |
| トラストダイアログとオンボーディングにおける壊れたセキュリティドキュメントリンクを修正 | Fixed broken security documentation links in trust dialogs and onboarding |
| diff モーダルを閉じるために ESC を押すとモデルも中断される問題を修正 | Fixed issue where pressing ESC to close the diff modal would also interrupt the model |
| ctrl-r 履歴検索でスラッシュコマンドに到達した際に検索がキャンセルされなくなるよう修正 | ctrl-r history search landing on a slash command no longer cancels the search |
| SDK: フックのカスタムタイムアウトに対応 | SDK: Support custom timeouts for hooks |
| より多くの安全な git コマンドを承認なしで実行可能に変更 | Allow more safe git commands to run without approval |
| プラグイン: 出力スタイルの共有とインストールに対応 | Plugins: Added support for sharing and installing output styles |
| Web からセッションをテレポートすると自動的に upstream ブランチを設定 | Teleporting a session from web will automatically set the upstream branch |

## 2.0.37

| 日本語 | English |
|--------|---------|
| 通知におけるアイドル状態の計算方法を修正 | Fixed how idleness is computed for notifications |
| フック：通知フックイベントに対するマッチャー値を追加 | Hooks: Added matcher values for Notification hook events |
| 出力スタイル：フロントマターに `keep-coding-instructions` オプションを追加 | Output Styles: Added `keep-coding-instructions` option to frontmatter |

## 2.0.36

| 日本語 | English |
|--------|---------|
| DISABLE_AUTOUPDATER 環境変数がパッケージマネージャーの更新通知を正しく無効化するように修正 | Fixed: DISABLE_AUTOUPDATER environment variable now properly disables package manager update notifications |
| キューに入れられたメッセージが誤って bash コマンドとして実行される問題を修正 | Fixed queued messages being incorrectly executed as bash commands |
| キューに入れられたメッセージの処理中に入力が失われる問題を修正 | Fixed input being lost when typing while a queued message is processed |

## 2.0.35

| 日本語 | English |
|--------|---------|
| コマンド検索時のファジー検索結果を改善 | Improve fuzzy search results when searching commands |
| VS Code 拡張機能が UI 全体で `chat.fontSize` と `chat.fontFamily` 設定を反映し、リロード不要でフォント変更を即座に適用 | Improved VS Code extension to respect `chat.fontSize` and `chat.fontFamily` settings throughout the entire UI, and apply font changes immediately without requiring reload |
| SDK モードで指定したアイドル時間後に自動終了する `CLAUDE_CODE_EXIT_AFTER_STOP_DELAY` 環境変数を追加、自動化ワークフローやスクリプトで有用 | Added `CLAUDE_CODE_EXIT_AFTER_STOP_DELAY` environment variable to automatically exit SDK mode after a specified idle duration, useful for automated workflows and scripts |
| `ignorePatterns` をプロジェクト設定から localSettings の拒否パーミッションに移行 | Migrated `ignorePatterns` from project config to deny permissions in the localSettings. |
| メニューナビゲーションが空文字列や falsy な値を持つ項目でスタックする問題を修正（例: `/hooks` メニュー） | Fixed menu navigation getting stuck on items with empty string or other falsy values (e.g., in the `/hooks` menu) |

## 2.0.34

| 日本語 | English |
|--------|---------|
| VSCode 拡張: 新規会話の初期権限モードを設定可能に | VSCode Extension: Added setting to configure the initial permission mode for new conversations |
| ネイティブ Rust ベースのファジーファインダーによるファイルパス提案のパフォーマンスを改善 | Improved file path suggestion performance with native Rust-based fuzzy finder |
| OAuth を使用する MCP サーバー（Slack など）が接続時にハングする無限トークン更新ループを修正 | Fixed infinite token refresh loop that caused MCP servers with OAuth (e.g., Slack) to hang during connection |
| 大きなファイル（特に base64 エンコードされた画像）の読み書き時にメモリクラッシュが発生する問題を修正 | Fixed memory crash when reading or writing large files (especially base64-encoded images) |

## 2.0.33

| 日本語 | English |
|--------|---------|
| ネイティブバイナリのインストール後の起動速度を向上 | Native binary installs now launch quicker. |
| `claude doctor` がシンボリックリンクを正しく解決せず Homebrew と npm-global のインストールを誤検出する問題を修正 | Fixed `claude doctor` incorrectly detecting Homebrew vs npm-global installations by properly resolving symlinks |
| `claude mcp serve` が互換性のない outputSchemas を持つツールを公開する問題を修正 | Fixed `claude mcp serve` exposing tools with incompatible outputSchemas |

## 2.0.32

| 日本語 | English |
|--------|---------|
| コミュニティフィードバックを受けて出力スタイルの非推奨化を撤回 | Un-deprecate output styles based on community feedback |
| 起動時のお知らせ表示用 `companyAnnouncements` 設定を追加 | Added `companyAnnouncements` setting for displaying announcements on startup |
| PostToolUse フック実行中に進捗メッセージが正しく更新されない問題を修正 | Fixed hook progress messages not updating correctly during PostToolUse hook execution |

## 2.0.31

| 日本語 | English |
|--------|---------|
| Windows: ネイティブインストール版でモード切り替えのショートカットを alt+m から shift+tab に変更 | Windows: native installation uses shift+tab as shortcut for mode switching, instead of alt+m |
| Vertex: 対応モデルでの Web Search サポートを追加 | Vertex: add support for Web Search on supported models |
| VSCode: ファイル検索で .gitignore されたファイルを含めるための respectGitIgnore 設定を追加(デフォルトは true) | VSCode: Adding the respectGitIgnore configuration to include .gitignored files in file searches (defaults to true) |
| サブエージェントと MCP サーバーに関する「Tool names must be unique」エラーのバグを修正 | Fixed a bug with subagents and MCP servers related to "Tool names must be unique" error |
| `/compact` が既存の compact 境界を尊重せず `prompt_too_long` で失敗する問題を修正 | Fixed issue causing `/compact` to fail with `prompt_too_long` by making it respect existing compact boundaries |
| プラグインのアンインストール時にプラグインが削除されない問題を修正 | Fixed plugin uninstall not removing plugins |

## 2.0.30

| 日本語 | English |
|--------|---------|
| macOS でキーチェーンがロックされている際の API キーエラーに対し、`security unlock-keychain` の実行を促すヒントを追加 | Added helpful hint to run `security unlock-keychain` when encountering API key errors on macOS with locked keychain |
| サンドボックス設定に `allowUnsandboxedCommands` を追加し、ポリシーレベルで dangerouslyDisableSandbox エスケープハッチを無効化可能に | Added `allowUnsandboxedCommands` sandbox setting to disable the dangerouslyDisableSandbox escape hatch at policy level |
| カスタムエージェント定義に `disallowedTools` フィールドを追加し、明示的なツールブロックに対応 | Added `disallowedTools` field to custom agent definitions for explicit tool blocking |
| プロンプトベースの停止フックを追加 | Added prompt-based stop hooks |
| VSCode: ファイル検索で .gitignore されたファイルを含めるための `respectGitIgnore` 設定を追加(デフォルトは true) | VSCode: Added respectGitIgnore configuration to include .gitignored files in file searches (defaults to true) |
| ネイティブビルドで SSE MCP サーバーを有効化 | Enabled SSE MCP servers on native build |
| 出力スタイルを非推奨化し、`/output-style` でオプションを確認の上、--system-prompt-file、--system-prompt、--append-system-prompt、CLAUDE.md、またはプラグインの使用を推奨 | Deprecated output styles. Review options in `/output-style` and use --system-prompt-file, --system-prompt, --append-system-prompt, CLAUDE.md, or plugins instead |
| カスタム ripgrep 設定のサポートを削除し、検索結果が返されず設定の検出に失敗する問題を解決 | Removed support for custom ripgrep configuration, resolving an issue where Search returns no results and config discovery fails |
| Explore エージェントがコードベース探索中に不要な .md 調査ファイルを作成する問題を修正 | Fixed Explore agent creating unwanted .md investigation files during codebase exploration |
| `/context` が "max_tokens must be greater than thinking.budget_tokens" エラーで失敗することがある問題を修正 | Fixed a bug where `/context` would sometimes fail with "max_tokens must be greater than thinking.budget_tokens" error message |
| `--mcp-config` フラグがファイルベースの MCP 設定を正しく上書きするように修正 | Fixed `--mcp-config` flag to correctly override file-based MCP configurations |
| セッション権限がローカル設定に保存されるバグを修正 | Fixed bug that saved session permissions to local settings |
| MCP ツールがサブエージェントで利用できない問題を修正 | Fixed MCP tools not being available to sub-agents |
| --dangerously-skip-permissions フラグを使用している場合にフックとプラグインが実行されない問題を修正 | Fixed hooks and plugins not executing when using --dangerously-skip-permissions flag |
| 矢印キーで typeahead 候補を移動する際の遅延を修正 | Fixed delay when navigating through typeahead suggestions with arrow keys |
| VSCode: 入力フッターで現在のファイルまたはコード選択状態を示す選択インジケーターを復元 | VSCode: Restored selection indicator in input footer showing current file or code selection status |

## 2.0.28

| 日本語 | English |
|--------|---------|
| Plan mode: 新しい Plan サブエージェントを導入 | Plan mode: introduced new Plan subagent |
| Subagents: Claude がサブエージェントを再開できるように対応 | Subagents: claude can now choose to resume subagents |
| Subagents: Claude がサブエージェントの使用モデルを動的に選択可能に | Subagents: claude can dynamically choose the model used by its subagents |
| SDK: `--max-budget-usd` フラグを追加 | SDK: added --max-budget-usd flag |
| カスタムスラッシュコマンド、サブエージェント、出力スタイルの検出で `.gitignore` を無視するように変更 | Discovery of custom slash commands, subagents, and output styles no longer respects .gitignore |
| `/terminal-setup` が VS Code で `Shift + Enter` にバックスラッシュを追加する問題を修正 | Stop `/terminal-setup` from adding backslash to `Shift + Enter` in VS Code |
| git ベースのプラグインとマーケットプレイスでフラグメント構文によるブランチとタグのサポートを追加（例: `owner/repo#branch`） | Add branch and tag support for git-based plugins and marketplaces using fragment syntax (e.g., `owner/repo#branch`) |
| ホームディレクトリから起動時に macOS の権限プロンプトが表示される不具合を修正 | Fixed a bug where macOS permission prompts would show up upon initial launch when launching from home directory |
| その他のバグ修正 | Various other bug fixes |

## 2.0.27

| 日本語 | English |
|--------|---------|
| パーミッションプロンプトの UI を刷新 | New UI for permission prompts |
| セッション再開画面に現在のブランチフィルタリングと検索機能を追加し、ナビゲーションを改善 | Added current branch filtering and search to session resume screen for easier navigation |
| ディレクトリの @-mention で「No assistant message found」エラーが発生する問題を修正 | Fixed directory @-mention causing "No assistant message found" error |
| VSCode 拡張機能: ファイル検索に .gitignore されたファイルを含める設定を追加 | VSCode Extension: Add config setting to include .gitignored files in file searches |
| VSCode 拡張機能: 無関係な 'Warmup' 会話の発生と、設定がデフォルトにリセットされる問題を修正 | VSCode Extension: Bug fixes for unrelated 'Warmup' conversations, and configuration/settings occasionally being reset to defaults |

## 2.0.25

| 日本語 | English |
|--------|---------|
| レガシー SDK エントリポイントを削除。今後の SDK アップデートは @anthropic-ai/claude-agent-sdk への移行が必要: https://platform.claude.com/docs/en/agent-sdk/migration-guide | Removed legacy SDK entrypoint. Please migrate to @anthropic-ai/claude-agent-sdk for future SDK updates: https://platform.claude.com/docs/en/agent-sdk/migration-guide |

## 2.0.24

| 日本語 | English |
|--------|---------|
| --setting-sources 'project' が指定されている場合にプロジェクトレベルのスキルが読み込まれないバグを修正 | Fixed a bug where project-level skills were not loading when --setting-sources 'project' was specified |
| Claude Code Web: Web → CLI テレポート機能に対応 | Claude Code Web: Support for Web -> CLI teleport |
| Sandbox: Linux と Mac の BashTool にサンドボックスモードを追加 | Sandbox: Releasing a sandbox mode for the BashTool on Linux & Mac |
| Bedrock: 認証が必要な場合に awsAuthRefresh の出力を表示 | Bedrock: Display awsAuthRefresh output when auth is required |

## 2.0.22

| 日本語 | English |
|--------|---------|
| スラッシュコマンドのスクロール時に発生するコンテンツレイアウトのずれを修正 | Fixed content layout shift when scrolling through slash commands |
| IDE: thinking の有効/無効を切り替えるトグルを追加 | IDE: Add toggle to enable/disable thinking. |
| 並列ツール呼び出し時に重複する権限プロンプトが表示される不具合を修正 | Fix bug causing duplicate permission prompts with parallel tool calls |
| エンタープライズ管理の MCP 許可リスト/拒否リストに対応 | Add support for enterprise managed MCP allowlist and denylist |

## 2.0.21

| 日本語 | English |
|--------|---------|
| MCP ツールレスポンスの `structuredContent` フィールドに対応 | Support MCP `structuredContent` field in tool responses |
| インタラクティブな質問ツールを追加 | Added an interactive question tool |
| プランモードでより頻繁に質問を行うように改善 | Claude will now ask you questions more often in plan mode |
| Pro ユーザー向けに Haiku 4.5 モデルオプションを追加 | Added Haiku 4.5 as a model option for Pro users |
| キューに入ったコマンドが前のメッセージの出力にアクセスできない問題を修正 | Fixed an issue where queued commands don't have access to previous messages' output |

## 2.0.20

| 日本語 | English |
|--------|---------|
| Claude Skills のサポートを追加 | Added support for Claude Skills |

## 2.0.19

| 日本語 | English |
|--------|---------|
| 長時間実行される bash コマンドを強制終了せずに自動的にバックグラウンド実行。BASH_DEFAULT_TIMEOUT_MS でカスタマイズ可能 | Auto-background long-running bash commands instead of killing them. Customize with BASH_DEFAULT_TIMEOUT_MS |
| プリントモードで不要に Haiku が呼び出されるバグを修正 | Fixed a bug where Haiku was unnecessarily called in print mode |

## 2.0.17

| 日本語 | English |
|--------|---------|
| Haiku 4.5 をモデルセレクタに追加 | Added Haiku 4.5 to model selector! |
| Haiku 4.5 は計画モードで自動的に Sonnet を使用し、実行時は Haiku を使用する（デフォルトで SonnetPlan） | Haiku 4.5 automatically uses Sonnet in plan mode, and Haiku for execution (i.e. SonnetPlan by default) |
| サードパーティ（Bedrock および Vertex）はまだ自動アップグレード非対応、手動アップグレードは `ANTHROPIC_DEFAULT_HAIKU_MODEL` 設定で可能 | 3P (Bedrock and Vertex) are not automatically upgraded yet. Manual upgrading can be done through setting `ANTHROPIC_DEFAULT_HAIKU_MODEL` |
| Explore サブエージェントを導入、Haiku を活用してコンテキストを節約しながら効率的にコードベースを検索 | Introducing the Explore subagent. Powered by Haiku it'll search through your codebase efficiently to save context! |
| OTEL: HTTP_PROXY および HTTPS_PROXY をサポート | OTEL: support HTTP_PROXY and HTTPS_PROXY |
| `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC` でリリースノート取得を無効化 | `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC` now disables release notes fetching |

## 2.0.15

| 日本語 | English |
|--------|---------|
| 再開時に以前作成したファイルを書き込む前に再度読み込む必要があったバグを修正 | Fixed bug with resuming where previously created files needed to be read again before writing |
| `-p` モードで @-メンションされたファイルを書き込む前に再度読み込む必要があったバグを修正 | Fixed bug with `-p` mode where @-mentioned files needed to be read again before writing |

## 2.0.14

| 日本語 | English |
|--------|---------|
| MCP サーバーを @-メンションでオン/オフ切り替えする機能の修正 | Fix @-mentioning MCP servers to toggle them on/off |
| インライン環境変数を使用した bash の権限チェックを改善 | Improve permission checks for bash with inline env vars |
| ultrathink + thinking トグルの修正 | Fix ultrathink + thinking toggle |
| 不要なログインを削減 | Reduce unnecessary logins |
| --system-prompt をドキュメント化 | Document --system-prompt |
| レンダリングに関する複数の改善 | Several improvements to rendering |
| プラグイン UI の洗練 | Plugins UI polish |

## 2.0.13

| 日本語 | English |
|--------|---------|
| ネイティブビルドで `/plugin` が動作しない問題を修正 | Fixed `/plugin` not working on native build |

## 2.0.12

| 日本語 | English |
|--------|---------|
| **プラグインシステムをリリース**: カスタムコマンド、エージェント、フック、MCPサーバーでClaude Codeを拡張可能に | **Plugin System Released**: Extend Claude Code with custom commands, agents, hooks, and MCP servers from marketplaces |
| プラグイン管理用の `/plugin install`、`/plugin enable/disable`、`/plugin marketplace` コマンドを追加 | `/plugin install`, `/plugin enable/disable`, `/plugin marketplace` commands for plugin management |
| チームコラボレーション向けに `extraKnownMarketplaces` によるリポジトリレベルのプラグイン設定に対応 | Repository-level plugin configuration via `extraKnownMarketplaces` for team collaboration |
| プラグインの構造と設定を検証する `/plugin validate` コマンドを追加 | `/plugin validate` command for validating plugin structure and configuration |
| プラグイン発表のブログ記事を https://www.anthropic.com/news/claude-code-plugins に公開 | Plugin announcement blog post at https://www.anthropic.com/news/claude-code-plugins |
| プラグインドキュメントを https://code.claude.com/docs/en/plugins で提供 | Plugin documentation available at https://code.claude.com/docs/en/plugins |
| `/doctor` コマンドによる包括的なエラーメッセージと診断機能を追加 | Comprehensive error messages and diagnostics via `/doctor` command |
| `/model` セレクターのちらつきを回避 | Avoid flickering in `/model` selector |
| `/help` を改善 | Improvements to `/help` |
| `/resume` の要約でフックへの言及を回避 | Avoid mentioning hooks in `/resume` summaries |
| `/config` の「verbose」設定がセッション間で永続化されるように変更 | Changes to the "verbose" setting in `/config` now persist across sessions |

## 2.0.11

| 日本語 | English |
|--------|---------|
| システムプロンプトサイズを1.4kトークン削減 | Reduced system prompt size by 1.4k tokens |
| IDE: キーボードショートカットとフォーカス問題を修正し、よりスムーズな操作を実現 | IDE: Fixed keyboard shortcuts and focus issues for smoother interaction |
| Opusフォールバック時のレート制限エラーが誤って表示される問題を修正 | Fixed Opus fallback rate limit errors appearing incorrectly |
| /add-dirコマンドが誤ったデフォルトタブを選択する問題を修正 | Fixed /add-dir command selecting wrong default tab |

## 2.0.10

| 日本語 | English |
|--------|---------|
| 滑らかな UI を実現するターミナルレンダラーの書き直し | Rewrote terminal renderer for buttery smooth UI |
| @メンション または /mcp による MCP サーバーの有効化・無効化 | Enable/disable MCP servers by @mentioning, or in /mcp |
| bash モードでのシェルコマンドのタブ補完を追加 | Added tab completion for shell commands in bash mode |
| PreToolUse フックによるツール入力の変更が可能に | PreToolUse hooks can now modify tool inputs |
| Ctrl-G でシステム設定のテキストエディタによるプロンプト編集が可能に | Press Ctrl-G to edit your prompt in your system's configured text editor |
| コマンド内の環境変数を含む bash パーミッションチェックの修正 | Fixes for bash permission checks with environment variables in the command |

## 2.0.9

| 日本語 | English |
|--------|---------|
| Bash のバックグラウンド実行が動作しなくなった不具合を修正 | Fix regression where bash backgrounding stopped working |

## 2.0.8

| 日本語 | English |
|--------|---------|
| Bedrock のデフォルト Sonnet モデルを `global.anthropic.claude-sonnet-4-5-20250929-v1:0` に更新 | Update Bedrock default Sonnet model to `global.anthropic.claude-sonnet-4-5-20250929-v1:0` |
| IDE: チャットへのファイルやフォルダのドラッグ&ドロップに対応 | IDE: Add drag-and-drop support for files and folders in chat |
| /context: thinking ブロックのカウント処理を修正 | /context: Fix counting for thinking blocks |
| ダークターミナルでライトテーマを使用するユーザー向けのメッセージ表示を改善 | Improve message rendering for users with light themes on dark terminals |
| 非推奨の .claude.json 設定オプション（allowedTools、ignorePatterns、env、todoFeatureEnabled）を削除（代わりに settings.json で設定） | Remove deprecated .claude.json allowedTools, ignorePatterns, env, and todoFeatureEnabled config options (instead, configure these in your settings.json) |

## 2.0.5

| 日本語 | English |
|--------|---------|
| IDE: Enter・Tabキーによる意図しないIMEメッセージ送信を修正 | IDE: Fix IME unintended message submission with Enter and Tab |
| IDE: ログイン画面に「ターミナルで開く」リンクを追加 | IDE: Add "Open in Terminal" link in login screen |
| 未処理のOAuth有効期限切れ401 APIエラーを修正 | Fix unhandled OAuth expiration 401 API errors |
| SDK: 重複メッセージ防止のため SDKUserMessageReplay.isReplay を追加 | SDK: Added SDKUserMessageReplay.isReplay to prevent duplicate messages |

## 2.0.1

| 日本語 | English |
|--------|---------|
| Bedrock と Vertex で Sonnet 4.5 のデフォルトモデル設定変更をスキップ | Skip Sonnet 4.5 default model setting change for Bedrock and Vertex |
| 各種バグ修正とプレゼンテーション改善 | Various bug fixes and presentation improvements |

## 2.0.0

| 日本語 | English |
|--------|---------|
| ネイティブ VS Code 拡張機能の提供 | New native VS Code extension |
| アプリ全体の UI を刷新 | Fresh coat of paint throughout the whole app |
| /rewind コマンドでコード変更を元に戻す機能 | /rewind a conversation to undo code changes |
| /usage コマンドでプラン制限を確認 | /usage command to see plan limits |
| Tab キーで思考過程の表示を切り替え（セッション間で保持） | Tab to toggle thinking (sticky across sessions) |
| Ctrl-R で履歴を検索 | Ctrl-R to search history |
| 未公開の claude config コマンド | Unshipped claude config command |
| Hooks: PostToolUse で 'tool_result' ブロックのない 'tool_use' ID エラーを削減 | Hooks: Reduced PostToolUse 'tool_use' ids were found without 'tool_result' blocks errors |
| SDK: Claude Code SDK を Claude Agent SDK に名称変更 | SDK: The Claude Code SDK is now the Claude Agent SDK |
| `--agents` フラグでサブエージェントを動的に追加 | Add subagents dynamically with `--agents` flag |

---

## 1.0.x

---

## 1.0.126

| 日本語 | English |
|--------|---------|
| Bedrock と Vertex で /context コマンドを有効化 | Enable /context command for Bedrock and Vertex |
| HTTP ベースの OpenTelemetry エクスポーターに mTLS サポートを追加 | Add mTLS support for HTTP-based OpenTelemetry exporters |

## 1.0.124

| 日本語 | English |
|--------|---------|
| BashTool でログインシェルをスキップするには環境変数 `CLAUDE_BASH_NO_LOGIN` を 1 または true に設定 | Set `CLAUDE_BASH_NO_LOGIN` environment variable to 1 or true to to skip login shell for BashTool |
| Bedrock と Vertex の環境変数がすべての文字列を truthy と評価する問題を修正 | Fix Bedrock and Vertex environment variables evaluating all strings as truthy |
| パーミッション拒否時に許可されたツールのリストを Claude に通知しないように変更 | No longer inform Claude of the list of allowed tools when permission is denied |
| Bash ツールのパーミッションチェックにおけるセキュリティ脆弱性を修正 | Fixed security vulnerability in Bash tool permission checks |
| VSCode 拡張機能の大規模ファイルに対するパフォーマンスを改善 | Improved VSCode extension performance for large files |

## 1.0.123

| 日本語 | English |
|--------|---------|
| Bash パーミッションルールが出力リダイレクトのマッチングに対応（例: `Bash(python:*)` が `python script.py > output.txt` にマッチ） | Bash permission rules now support output redirections when matching (e.g., `Bash(python:*)` matches `python script.py > output.txt`) |
| "don't think" のような否定表現で思考モードが誤って起動する問題を修正 | Fixed thinking mode triggering on negation phrases like "don't think" |
| トークンストリーミング中のレンダリングパフォーマンス低下を修正 | Fixed rendering performance degradation during token streaming |
| Claude がスラッシュコマンドを呼び出せる SlashCommand ツールを追加。https://code.claude.com/docs/en/slash-commands#SlashCommand-tool | Added SlashCommand tool, which enables Claude to invoke your slash commands. https://code.claude.com/docs/en/slash-commands#SlashCommand-tool |
| BashTool 環境スナップショットのロギングを強化 | Enhanced BashTool environment snapshot logging |
| ヘッドレスモードで会話を再開した際に思考モードが不必要に有効化される問題を修正 | Fixed a bug where resuming a conversation in headless mode would sometimes enable thinking unnecessarily |
| --debug ログをファイルに移行し、tail やフィルタリングを容易に | Migrated --debug logging to a file, to enable easy tailing & filtering |

## 1.0.120

| 日本語 | English |
|--------|---------|
| 大きなプロンプトで顕著だった入力時の遅延を修正 | Fix input lag during typing, especially noticeable with large prompts |
| VSCode 拡張機能のコマンドレジストリとセッションダイアログのユーザー体験を改善 | Improved VSCode extension command registry and sessions dialog user experience |
| セッションダイアログの応答性と視覚的フィードバックを強化 | Enhanced sessions dialog responsiveness and visual feedback |
| worktree サポートチェックを削除し IDE 互換性の問題を修正 | Fixed IDE compatibility issue by removing worktree support check |
| プレフィックスマッチングによって Bash ツールの権限チェックを回避できるセキュリティ脆弱性を修正 | Fixed security vulnerability where Bash tool permission checks could be bypassed using prefix matching |

## 1.0.119

| 日本語 | English |
|--------|---------|
| Windowsで対話モードに入る際にプロセスが視覚的にフリーズする問題を修正 | Fix Windows issue where process visually freezes on entering interactive mode |
| headersHelper設定によるMCPサーバーの動的ヘッダーに対応 | Support dynamic headers for MCP servers via headersHelper configuration |
| ヘッドレスセッションでシンキングモードが動作しない問題を修正 | Fix thinking mode not working in headless sessions |
| スラッシュコマンドが許可ツールを置き換えではなく更新するように修正 | Fix slash commands now properly update allowed tools instead of replacing them |

## 1.0.117

| 日本語 | English |
|--------|---------|
| Bash/zsh のようなコマンド履歴検索のための Ctrl-R を追加 | Add Ctrl-R history search to recall previous commands like bash/zsh |
| 特に Windows におけるタイピング時の入力遅延を修正 | Fix input lag while typing, especially on Windows |
| acceptEdits モードの自動許可コマンドに sed コマンドを追加 | Add sed command to auto-allowed commands in acceptEdits mode |
| Windows の PATH 比較でドライブレターの大文字小文字を区別しないように修正 | Fix Windows PATH comparison to be case-insensitive for drive letters |
| /add-dir 出力にパーミッション管理のヒントを追加 | Add permissions management hint to /add-dir output |

## 1.0.115

| 日本語 | English |
|--------|---------|
| 思考モードの表示を視覚効果の強化により改善 | Improve thinking mode display with enhanced visual effects |
| プロンプトで /t と入力すると一時的に思考モードを無効化 | Type /t to temporarily disable thinking mode in your prompt |
| glob と grep ツールのパス検証を改善 | Improve path validation for glob and grep tools |
| ツール実行後フックの出力を簡潔化し視覚的な雑音を削減 | Show condensed output for post-tool hooks to reduce visual clutter |
| 読み込み状態完了時の視覚フィードバックを修正 | Fix visual feedback when loading state completes |
| パーミッション要求ダイアログの UI 一貫性を改善 | Improve UI consistency for permission request dialogs |

## 1.0.113

| 日本語 | English |
|--------|---------|
| インタラクティブモードでのパイプ入力を非推奨化 | Deprecated piped input in interactive mode |
| トランスクリプト切り替えのキーバインドを Ctrl+R から Ctrl+O に変更 | Move Ctrl+R keybinding for toggling transcript to Ctrl+O |

## 1.0.112

| 日本語 | English |
|--------|---------|
| トランスクリプトモード (Ctrl+R): 各アシスタントメッセージの生成に使用されたモデルを追加 | Transcript mode (Ctrl+R): Added the model used to generate each assistant message |
| 一部の Claude Max ユーザーが Claude Pro ユーザーとして誤認識される問題を修正 | Addressed issue where some Claude Max users were incorrectly recognized as Claude Pro users |
| フック: SessionEnd フックに systemMessage サポートを追加 | Hooks: Added systemMessage support for SessionEnd hooks |
| スピナーのヒントを無効化する `spinnerTipsEnabled` 設定を追加 | Added `spinnerTipsEnabled` setting to disable spinner tips |
| IDE: 各種改善とバグ修正 | IDE: Various improvements and bug fixes |

## 1.0.111

| 日本語 | English |
|--------|---------|
| /model コマンドで指定されたモデル名を検証 | /model now validates provided model names |
| 不正なシェル構文の解析によって発生する Bash ツールのクラッシュを修正 | Fixed Bash tool crashes caused by malformed shell syntax parsing |

## 1.0.110

| 日本語 | English |
|--------|---------|
| /terminal-setup コマンドが WezTerm に対応 | /terminal-setup command now supports WezTerm |
| MCP: OAuth トークンを有効期限前に自動更新 | MCP: OAuth tokens now proactively refresh before expiration |
| バックグラウンド Bash プロセスの信頼性問題を修正 | Fixed reliability issues with background Bash processes |

## 1.0.109

| 日本語 | English |
|--------|---------|
| SDK: `--include-partial-messages` CLI フラグによる部分メッセージストリーミングサポートを追加 | SDK: Added partial message streaming support via `--include-partial-messages` CLI flag |

## 1.0.106

| 日本語 | English |
|--------|---------|
| Windows: パス権限のマッチングを POSIX 形式（例: `Read(//c/Users/...)`）に統一して修正 | Windows: Fixed path permission matching to consistently use POSIX format (e.g., `Read(//c/Users/...)`) |

## 1.0.97

| 日本語 | English |
|--------|---------|
| Settings: /doctor でパーミッションルール構文を検証し、修正案を提示 | Settings: /doctor now validates permission rule syntax and suggests corrections |

## 1.0.94

| 日本語 | English |
|--------|---------|
| Vertex: サポート対象モデルのグローバルエンドポイントに対応 | Vertex: add support for global endpoints for supported models |
| /memory コマンドでインポートされた全メモリファイルの直接編集が可能に | /memory command now allows direct editing of all imported memory files |
| SDK: カスタムツールをコールバックとして追加 | SDK: Add custom tools as callbacks |
| 現在の TODO 項目を一覧表示する /todos コマンドを追加 | Added /todos command to list current todo items |

## 1.0.93

| 日本語 | English |
|--------|---------|
| Windows: クリップボードからの画像貼り付けに alt + v ショートカットを追加 | Windows: Add alt + v shortcut for pasting images from clipboard |
| 指定したホスト名とIPのプロキシをバイパスするための NO_PROXY 環境変数に対応 | Support NO_PROXY environment variable to bypass proxy for specified hostnames and IPs |

## 1.0.90

| 日本語 | English |
|--------|---------|
| 設定ファイルの変更が即座に反映されるようになり、再起動不要に対応 | Settings file changes take effect immediately - no restart required |

## 1.0.88

| 日本語 | English |
|--------|---------|
| "OAuth authentication is currently not supported" エラーを修正 | Fixed issue causing "OAuth authentication is currently not supported" |
| ステータスライン入力に `exceeds_200k_tokens` を追加 | Status line input now includes `exceeds_200k_tokens` |
| /cost の使用量トラッキングの誤りを修正 | Fixed incorrect usage tracking in /cost. |
| opusplan、opus、sonnet のモデルエイリアス制御のため `ANTHROPIC_DEFAULT_SONNET_MODEL` と `ANTHROPIC_DEFAULT_OPUS_MODEL` を導入 | Introduced `ANTHROPIC_DEFAULT_SONNET_MODEL` and `ANTHROPIC_DEFAULT_OPUS_MODEL` for controlling model aliases opusplan, opus, and sonnet. |
| Bedrock: デフォルトの Sonnet モデルを Sonnet 4 に更新 | Bedrock: Updated default Sonnet model to Sonnet 4 |

## 1.0.86

| 日本語 | English |
|--------|---------|
| コンテキストの問題をユーザー自身でデバッグできるよう /context を追加 | Added /context to help users self-serve debug context issues |
| SDK: すべての SDK メッセージに UUID サポートを追加 | SDK: Added UUID support for all SDK messages |
| SDK: ユーザーメッセージを標準出力に再生する `--replay-user-messages` を追加 | SDK: Added `--replay-user-messages` to replay user messages back to stdout |

## 1.0.85

| 日本語 | English |
|--------|---------|
| ステータスラインの入力にセッションコスト情報を含めるように変更 | Status line input now includes session cost info |
| フック: SessionEnd フックを導入 | Hooks: Introduced SessionEnd hook |

## 1.0.84

| 日本語 | English |
|--------|---------|
| ネットワークが不安定な場合の tool_use/tool_result ID 不一致エラーを修正 | Fix tool_use/tool_result id mismatch error when network is unstable |
| タスク完了時に Claude がリアルタイム操縦を無視することがある問題を修正 | Fix Claude sometimes ignoring real-time steering when wrapping up a task |
| @-mention: エージェント、出力スタイル、スラッシュコマンドの編集を容易にするため、~/.claude/* ファイルを候補に追加 | @-mention: Add ~/.claude/\* files to suggestions for easier agent, output style, and slash command editing |
| デフォルトでビルトイン ripgrep を使用。この動作を無効にするには USE_BUILTIN_RIPGREP=0 を設定 | Use built-in ripgrep by default; to opt out of this behavior, set USE_BUILTIN_RIPGREP=0 |

## 1.0.83

| 日本語 | English |
|--------|---------|
| @メンション: パス内にスペースを含むファイルに対応 | @-mention: Support files with spaces in path |
| 新しいシマリングスピナー | New shimmering spinner |

## 1.0.82

| 日本語 | English |
|--------|---------|
| SDK: リクエストキャンセル機能を追加 | SDK: Add request cancellation support |
| SDK: カスタムパスを検索する additionalDirectories オプションを追加し、スラッシュコマンド処理を改善 | SDK: New additionalDirectories option to search custom paths, improved slash command processing |
| Settings: .claude/settings.json ファイルの無効なフィールドを防ぐバリデーション機能を追加 | Settings: Validation prevents invalid fields in .claude/settings.json files |
| MCP: ツール名の一貫性を改善 | MCP: Improve tool name consistency |
| Bash: Claude が大きなファイルを自動読み込みしようとした際のクラッシュを修正 | Bash: Fix crash when Claude tries to automatically read large files |

## 1.0.81

| 日本語 | English |
|--------|---------|
| 出力スタイル機能をリリース。新しい組み込み教育スタイル「Explanatory」と「Learning」を含む。ドキュメント: https://code.claude.com/docs/en/output-styles | Released output styles, including new built-in educational output styles "Explanatory" and "Learning". Docs: https://code.claude.com/docs/en/output-styles |
| Agents: エージェントファイルが解析不能な場合のカスタムエージェント読み込みを修正 | Agents: Fix custom agent loading when agent files are unparsable |

## 1.0.80

| 日本語 | English |
|--------|---------|
| UI の改善: カスタムサブエージェントの色におけるテキストコントラストとスピナーのレンダリング問題を修正 | UI improvements: Fix text contrast for custom subagent colors and spinner rendering issues |

## 1.0.77

| 日本語 | English |
|--------|---------|
| Bash ツール: ヒアドキュメントと複数行文字列のエスケープを修正、stderr リダイレクト処理を改善 | Bash tool: Fix heredoc and multiline string escaping, improve stderr redirection handling |
| SDK: セッションサポートと権限拒否トラッキングを追加 | SDK: Add session support and permission denial tracking |
| 会話要約におけるトークン制限エラーを修正 | Fix token limit errors in conversation summarization |
| Opus プランモード: `/model` に Opus をプランモードのみで実行し、それ以外は Sonnet を使用する設定を追加 | Opus Plan Mode: New setting in `/model` to run Opus only in plan mode, Sonnet otherwise |

## 1.0.73

| 日本語 | English |
|--------|---------|
| MCP: `--mcp-config file1.json file2.json` で複数の設定ファイルに対応 | MCP: Support multiple config files with `--mcp-config file1.json file2.json` |
| MCP: Esc キーで OAuth 認証フローをキャンセル可能に | MCP: Press Esc to cancel OAuth authentication flows |
| Bash: コマンド検証を改善し、誤ったセキュリティ警告を削減 | Bash: Improved command validation and reduced false security warnings |
| UI: スピナーアニメーションとステータスラインの視覚的階層を強化 | UI: Enhanced spinner animations and status line visual hierarchy |
| Linux: Alpine および musl ベースのディストリビューションに対応（ripgrep の別途インストールが必要） | Linux: Added support for Alpine and musl-based distributions (requires separate ripgrep installation) |

## 1.0.72

| 日本語 | English |
|--------|---------|
| 特定ツールの使用確認を /permissions で設定可能に | Ask permissions: have Claude Code always ask for confirmation to use specific tools with /permissions |

## 1.0.71

| 日本語 | English |
|--------|---------|
| バックグラウンドコマンド: Bash コマンドをバックグラウンドで実行可能 (Ctrl-b)、Claude が作業を継続できる (開発サーバーやログ監視などに有用) | Background commands: (Ctrl-b) to run any Bash command in the background so Claude can keep working (great for dev servers, tailing logs, etc.) |
| カスタマイズ可能なステータスライン: /statusline でターミナルプロンプトを Claude Code に追加 | Customizable status line: add your terminal prompt to Claude Code with /statusline |

## 1.0.70

| 日本語 | English |
|--------|---------|
| パフォーマンス: 大規模なコンテキストでのメッセージレンダリングを最適化 | Performance: Optimized message rendering for better performance with large contexts |
| Windows: ネイティブファイル検索、ripgrep、サブエージェント機能を修正 | Windows: Fixed native file search, ripgrep, and subagent functionality |
| スラッシュコマンド引数での@メンションに対応 | Added support for @-mentions in slash command arguments |

## 1.0.69

| 日本語 | English |
|--------|---------|
| Opus をバージョン 4.1 にアップグレード | Upgraded Opus to version 4.1 |

## 1.0.68

| 日本語 | English |
|--------|---------|
| `/pr-comments` などの特定のコマンドで誤ったモデル名が使用される問題を修正 | Fix incorrect model names being used for certain commands like `/pr-comments` |
| Windows: allow / deny ツールおよびプロジェクト信頼に関する権限チェックを改善。`.claude.json` に新しいプロジェクトエントリが作成される場合があるため、必要に応じて history フィールドを手動でマージすること | Windows: improve permissions checks for allow / deny tools and project trust. This may create a new project entry in `.claude.json` - manually merge the history field if desired. |
| Windows: pnpm などのコマンド実行時に "No such file or directory" が発生する問題を解消するため、サブプロセス生成を改善 | Windows: improve sub-process spawning to eliminate "No such file or directory" when running commands like pnpm |
| /doctor コマンドに CLAUDE.md と MCP ツールコンテキストを追加し、セルフサービスデバッグを強化 | Enhanced /doctor command with CLAUDE.md and MCP tool context for self-serve debugging |
| SDK: ツール確認のための canUseTool コールバックサポートを追加 | SDK: Added canUseTool callback support for tool confirmation |
| `disableAllHooks` 設定を追加 | Added `disableAllHooks` setting |
| 大規模リポジトリにおけるファイル提案のパフォーマンスを改善 | Improved file suggestions performance in large repos |

## 1.0.65

| 日本語 | English |
|--------|---------|
| IDE: 診断の接続安定性とエラー処理を修正 | IDE: Fixed connection stability issues and error handling for diagnostics |
| Windows: .bashrc ファイルを持たないユーザーのシェル環境設定を修正 | Windows: Fixed shell environment setup for users without .bashrc files |

## 1.0.64

| 日本語 | English |
|--------|---------|
| エージェント: モデルのカスタマイズサポートを追加。エージェントが使用するモデルを指定可能に | Agents: Added model customization support - you can now specify which model an agent should use |
| エージェント: 再帰的エージェントツールへの意図しないアクセスを修正 | Agents: Fixed unintended access to the recursive agent tool |
| フック: フックのJSON出力に警告とコンテキストを表示するための systemMessage フィールドを追加 | Hooks: Added systemMessage field to hook JSON output for displaying warnings and context |
| SDK: 複数ターンの会話におけるユーザー入力の追跡を修正 | SDK: Fixed user input tracking across multi-turn conversations |
| ファイル検索と@メンションの候補に隠しファイルを追加 | Added hidden files to file search and @-mention suggestions |

## 1.0.63

| 日本語 | English |
|--------|---------|
| Windows: ファイル検索、@agent メンション、カスタムスラッシュコマンド機能を修正 | Windows: Fixed file search, @agent mentions, and custom slash commands functionality |

## 1.0.62

| 日本語 | English |
|--------|---------|
| @メンション機能にカスタムエージェント用の入力補完機能を追加。@<カスタムエージェント名> で呼び出し可能 | Added @-mention support with typeahead for custom agents. @<your-custom-agent> to invoke it |
| Hooks: 新規セッション初期化用の SessionStart フックを追加 | Hooks: Added SessionStart hook for new session initialization |
| /add-dir コマンドにディレクトリパスの入力補完機能を追加 | /add-dir command now supports typeahead for directory paths |
| ネットワーク接続チェックの信頼性を向上 | Improved network connectivity check reliability |

## 1.0.61

| 日本語 | English |
|--------|---------|
| トランスクリプトモード（Ctrl+R）: トランスクリプトモードの終了を中断ではなく Esc キーで行うように変更 | Transcript mode (Ctrl+R): Changed Esc to exit transcript mode rather than interrupt |
| 設定: JSON ファイルから設定を読み込むための `--settings` フラグを追加 | Settings: Added `--settings` flag to load settings from a JSON file |
| 設定: シンボリックリンクである設定ファイルパスの解決を修正 | Settings: Fixed resolution of settings files paths that are symlinks |
| OTEL: 認証変更後に誤った組織が報告される問題を修正 | OTEL: Fixed reporting of wrong organization after authentication changes |
| スラッシュコマンド: Bash での allowed-tools の権限チェックを修正 | Slash commands: Fixed permissions checking for allowed-tools with Bash |
| IDE: VSCode MacOS で ⌘+V による画像貼り付けに対応 | IDE: Added support for pasting images in VSCode MacOS using ⌘+V |
| IDE: IDE 自動接続を無効化する `CLAUDE_CODE_AUTO_CONNECT_IDE=false` を追加 | IDE: Added `CLAUDE_CODE_AUTO_CONNECT_IDE=false` for disabling IDE auto-connection |
| Claude Code が実行する Claude とユーザー提供のシェルコマンドをラップする `CLAUDE_CODE_SHELL_PREFIX` を追加 | Added `CLAUDE_CODE_SHELL_PREFIX` for wrapping Claude and user-provided shell commands run by Claude Code |

## 1.0.60

| 日本語 | English |
|--------|---------|
| カスタムサブエージェントを作成して専門的なタスクに対応可能に。/agents で開始 | You can now create custom subagents for specialized tasks! Run /agents to get started |

## 1.0.59

| 日本語 | English |
|--------|---------|
| SDK: ツール確認サポートを追加、canUseTool コールバックに対応 | SDK: Added tool confirmation support with canUseTool callback |
| SDK: 生成されたプロセスに対する環境変数の指定が可能に | SDK: Allow specifying env for spawned process |
| Hooks: PermissionDecision を公開（"ask" を含む） | Hooks: Exposed PermissionDecision to hooks (including "ask") |
| Hooks: UserPromptSubmit が高度な JSON 出力で additionalContext をサポート | Hooks: UserPromptSubmit now supports additionalContext in advanced JSON output |
| Max ユーザーが Opus を指定しても Sonnet にフォールバックする問題を修正 | Fixed issue where some Max users that specified Opus would still see fallback to Sonnet |

## 1.0.58

| 日本語 | English |
|--------|---------|
| PDF の読み取りに対応 | Added support for reading PDFs |
| MCP: 'claude mcp list' でのサーバーヘルス状態表示を改善 | MCP: Improved server health status display in 'claude mcp list' |
| Hooks: フックコマンド用に CLAUDE_PROJECT_DIR 環境変数を追加 | Hooks: Added CLAUDE_PROJECT_DIR env var for hook commands |

## 1.0.57

| 日本語 | English |
|--------|---------|
| スラッシュコマンドでのモデル指定に対応 | Added support for specifying a model in slash commands |
| 許可されたツールをClaudeが理解しやすくなるよう、パーミッションメッセージを改善 | Improved permission messages to help Claude understand allowed tools |
| 修正: ターミナルラッピング時のbash出力から末尾の改行を削除 | Fix: Remove trailing newlines from bash output in terminal wrapping |

## 1.0.56

| 日本語 | English |
|--------|---------|
| Windows: Node.js の terminal VT モードをサポートするバージョンで、shift+tab によるモード切り替えを有効化 | Windows: Enabled shift+tab for mode switching on versions of Node.js that support terminal VT mode |
| WSL の IDE 検出に関する修正 | Fixes for WSL IDE detection |
| awsRefreshHelper による .aws ディレクトリの変更が反映されない問題を修正 | Fix an issue causing awsRefreshHelper changes to .aws directory not to be picked up |

## 1.0.55

| 日本語 | English |
|--------|---------|
| Opus 4 および Sonnet 4 モデルの知識カットオフを明確化 | Clarified knowledge cutoff for Opus 4 and Sonnet 4 models |
| Windows: Ctrl+Z によるクラッシュを修正 | Windows: fixed Ctrl+Z crash |
| SDK: エラーログのキャプチャ機能を追加 | SDK: Added ability to capture error logging |
| print モードでシステムプロンプトを上書きする --system-prompt-file オプションを追加 | Add --system-prompt-file option to override system prompt in print mode |

## 1.0.54

| 日本語 | English |
|--------|---------|
| フック: UserPromptSubmit フックを追加し、現在の作業ディレクトリをフック入力に含める | Hooks: Added UserPromptSubmit hook and the current working directory to hook inputs |
| カスタムスラッシュコマンド: frontmatter に argument-hint を追加 | Custom slash commands: Added argument-hint to frontmatter |
| Windows: OAuth でポート 45454 を使用し、ブラウザ URL を適切に構築 | Windows: OAuth uses port 45454 and properly constructs browser URL |
| Windows: モード切替を alt + m に変更し、プランモードを適切にレンダリング | Windows: mode switching now uses alt + m, and plan mode renders properly |
| シェル: インメモリシェルスナップショットに切り替え、ファイル関連エラーを修正 | Shell: Switch to in-memory shell snapshot to fix file-related errors |

## 1.0.53

| 日本語 | English |
|--------|---------|
| @メンションファイルの切り詰め行数を100行から2000行に更新 | Updated @-mention file truncation from 100 lines to 2000 lines |
| AWS トークン更新用のヘルパースクリプト設定を追加: awsAuthRefresh（aws sso login などのフォアグラウンド操作用）と awsCredentialExport（STS レスポンス形式のバックグラウンド操作用） | Add helper script settings for AWS token refresh: awsAuthRefresh (for foreground operations like aws sso login) and awsCredentialExport (for background operation with STS-like response). |

## 1.0.52

| 日本語 | English |
|--------|---------|
| MCP サーバー指示のサポートを追加 | Added support for MCP server instructions |

## 1.0.51

| 日本語 | English |
|--------|---------|
| ネイティブ Windows に対応(Git for Windows が必要) | Added support for native Windows (requires Git for Windows) |
| 環境変数 AWS_BEARER_TOKEN_BEDROCK による Bedrock API キーに対応 | Added support for Bedrock API keys through environment variable AWS_BEARER_TOKEN_BEDROCK |
| Settings: /doctor で無効な設定ファイルの特定と修正が可能に | Settings: /doctor can now help you identify and fix invalid setting files |
| `--append-system-prompt` を対話モードでも使用可能に(--print/-p のみでなく) | `--append-system-prompt` can now be used in interactive mode, not just --print/-p. |
| 自動圧縮の警告閾値を 60% から 80% に引き上げ | Increased auto-compact warning threshold from 60% to 80% |
| シェルスナップショットでスペースを含むユーザーディレクトリの処理に関する問題を修正 | Fixed an issue with handling user directories with spaces for shell snapshots |
| OTEL リソースに os.type、os.version、host.arch、wsl.version(Windows Subsystem for Linux 上で実行時)を追加 | OTEL resource now includes os.type, os.version, host.arch, and wsl.version (if running on Windows Subsystem for Linux) |
| カスタムスラッシュコマンド: サブディレクトリ内のユーザーレベルコマンドを修正 | Custom slash commands: Fixed user-level commands in subdirectories |
| プランモード: サブタスクから拒否されたプランが破棄される問題を修正 | Plan mode: Fixed issue where rejected plan from sub-task would get discarded |

## 1.0.48

| 日本語 | English |
|--------|---------|
| v1.0.45 で起動時にアプリが時々フリーズする不具合を修正 | Fixed a bug in v1.0.45 where the app would sometimes freeze on launch |
| Bash ツールにコマンド出力の最後の5行に基づく進捗メッセージを追加 | Added progress messages to Bash tool based on the last 5 lines of command output |
| MCP サーバー設定で環境変数の展開に対応 | Added expanding variables support for MCP server configuration |
| シェルスナップショットを /tmp から ~/.claude に移動し、Bash ツールの信頼性を向上 | Moved shell snapshots from /tmp to ~/.claude for more reliable Bash tool calls |
| Claude Code が WSL で動作する際の IDE 拡張パス処理を改善 | Improved IDE extension path handling when Claude Code runs in WSL |
| フック機能に PreCompact フックを追加 | Hooks: Added a PreCompact hook |
| Vim モードに c、f/F、t/T キーバインドを追加 | Vim mode: Added c, f/F, t/T |

## 1.0.45

| 日本語 | English |
|--------|---------|
| 検索(Grep)ツールの再設計により新しいツール入力パラメータと機能を追加 | Redesigned Search (Grep) tool with new tool input parameters and features |
| ノートブックファイルのIDE差分表示を無効化し、「1000ms後のタイムアウト」エラーを修正 | Disabled IDE diffs for notebook files, fixing "Timeout waiting after 1000ms" error |
| アトミック書き込みを強制することで設定ファイル破損の問題を修正 | Fixed config file corruption issue by enforcing atomic writes |
| プロンプト入力の取り消しをCtrl+\_に変更し、既存のCtrl+U動作の破壊を回避、zshの取り消しショートカットに一致 | Updated prompt input undo to Ctrl+\_ to avoid breaking existing Ctrl+U behavior, matching zsh's undo shortcut |
| Stop Hooks: /clear後のトランスクリプトパスを修正し、ループがツール呼び出しで終了する際のトリガーを修正 | Stop Hooks: Fixed transcript path after /clear and fixed triggering when loop ends with tool call |
| カスタムスラッシュコマンド: サブディレクトリに基づくコマンド名の名前空間を復元(例: .claude/commands/frontend/component.mdは/componentではなく/frontend:componentに対応) | Custom slash commands: Restored namespacing in command names based on subdirectories. For example, .claude/commands/frontend/component.md is now /frontend:component, not /component. |

## 1.0.44

| 日本語 | English |
|--------|---------|
| 会話を素早くエクスポートして共有できる新しい /export コマンドを追加 | New /export command lets you quickly export a conversation for sharing |
| MCP: resource_link ツール結果に対応 | MCP: resource_link tool results are now supported |
| MCP: /mcp view でツールアノテーションとツールタイトルを表示 | MCP: tool annotations and tool titles now display in /mcp view |
| Ctrl+Z で Claude Code を一時停止し、`fg` で再開するように変更。プロンプト入力の取り消しは Ctrl+U に変更 | Changed Ctrl+Z to suspend Claude Code. Resume by running `fg`. Prompt input undo is now Ctrl+U. |

## 1.0.43

| 日本語 | English |
|--------|---------|
| テーマセレクターが過剰に保存される不具合を修正 | Fixed a bug where the theme selector was saving excessively |
| Hooks: EPIPE システムエラーハンドリングを追加 | Hooks: Added EPIPE system error handling |

## 1.0.42

| 日本語 | English |
|--------|---------|
| `/add-dir` コマンドにチルダ（`~`）展開のサポートを追加 | Added tilde (`~`) expansion support to `/add-dir` command |

## 1.0.41

| 日本語 | English |
|--------|---------|
| Hooks: Stop フックのトリガーを Stop と SubagentStop に分割 | Hooks: Split Stop hook triggering into Stop and SubagentStop |
| Hooks: 各コマンドにオプションのタイムアウト設定を追加 | Hooks: Enabled optional timeout configuration for each command |
| Hooks: フック入力に "hook_event_name" を追加 | Hooks: Added "hook_event_name" to hook input |
| MCP ツールがツールリストに二重表示される不具合を修正 | Fixed a bug where MCP tools would display twice in tool list |
| `tool_decision` イベントの Bash ツールに新しいツールパラメータ JSON を追加 | New tool parameters JSON for Bash tool in `tool_decision` event |

## 1.0.40

| 日本語 | English |
|--------|---------|
| `NODE_EXTRA_CA_CERTS` が設定されている場合に UNABLE_TO_GET_ISSUER_CERT_LOCALLY エラーで API 接続が失敗するバグを修正 | Fixed a bug causing API connection errors with UNABLE_TO_GET_ISSUER_CERT_LOCALLY if `NODE_EXTRA_CA_CERTS` was set |

## 1.0.39

| 日本語 | English |
|--------|---------|
| OpenTelemetry ログに Active Time メトリクスを追加 | New Active Time metric in OpenTelemetry logging |

## 1.0.38

| 日本語 | English |
|--------|---------|
| フックをリリース。https://github.com/anthropics/claude-code/issues/712 でのコミュニティからの意見に感謝。ドキュメント: https://code.claude.com/docs/en/hooks | Released hooks. Special thanks to community input in https://github.com/anthropics/claude-code/issues/712. Docs: https://code.claude.com/docs/en/hooks |

## 1.0.37

| 日本語 | English |
|--------|---------|
| ANTHROPIC_AUTH_TOKEN または apiKeyHelper による `Proxy-Authorization` ヘッダー設定機能を削除 | Remove ability to set `Proxy-Authorization` header via ANTHROPIC_AUTH_TOKEN or apiKeyHelper |

## 1.0.36

| 日本語 | English |
|--------|---------|
| Web検索で本日の日付がコンテキストに含まれるように対応 | Web search now takes today's date into context |
| 終了時にstdio MCPサーバーが適切に終了しない不具合を修正 | Fixed a bug where stdio MCP servers were not terminating properly on exit |

## 1.0.35

| 日本語 | English |
|--------|---------|
| MCP OAuth 認証サーバーディスカバリーに対応 | Added support for MCP OAuth Authorization Server discovery |

## 1.0.34

| 日本語 | English |
|--------|---------|
| MaxListenersExceededWarning メッセージを引き起こすメモリリークを修正 | Fixed a memory leak causing a MaxListenersExceededWarning message to appear |

## 1.0.33

| 日本語 | English |
|--------|---------|
| セッション ID サポートによるログ機能の改善 | Improved logging functionality with session ID support |
| プロンプト入力の取り消し機能を追加（Ctrl+Z および vim の 'u' コマンド） | Added prompt input undo functionality (Ctrl+Z and vim 'u' command) |
| プランモードの改善 | Improvements to plan mode |

## 1.0.32

| 日本語 | English |
|--------|---------|
| litellm のループバック設定を更新 | Updated loopback config for litellm |
| ログイン選択画面をスキップする forceLoginMethod 設定を追加 | Added forceLoginMethod setting to bypass login selection screen |

## 1.0.31

| 日本語 | English |
|--------|---------|
| ~/.claude.json に無効な JSON が含まれている場合にファイルがリセットされるバグを修正 | Fixed a bug where ~/.claude.json would get reset when file contained invalid JSON |

## 1.0.30

| 日本語 | English |
|--------|---------|
| カスタムスラッシュコマンド: Bash出力の実行、@によるファイルのメンション、thinking キーワードによる思考モードの有効化に対応 | Custom slash commands: Run bash output, @-mention files, enable thinking with thinking keywords |
| ファイル名マッチングによるファイルパス自動補完の改善 | Improved file path autocomplete with filename matching |
| Ctrl-rモードでのタイムスタンプ追加とCtrl-c処理の修正 | Added timestamps in Ctrl-r mode and fixed Ctrl-c handling |
| パイプとselectを使用した複雑なフィルタ向けのjq正規表現サポートの強化 | Enhanced jq regex support for complex filters with pipes and select |

## 1.0.29

| 日本語 | English |
|--------|---------|
| カーソル移動とレンダリングにおける CJK 文字サポートの改善 | Improved CJK character support in cursor navigation and rendering |

## 1.0.28

| 日本語 | English |
|--------|---------|
| スラッシュコマンド: 履歴ナビゲーション中のセレクタ表示を修正 | Slash commands: Fix selector display during history navigation |
| API サイズ制限エラーを防ぐため、アップロード前に画像をリサイズ | Resizes images before upload to prevent API size limit errors |
| 設定ディレクトリに XDG_CONFIG_HOME サポートを追加 | Added XDG_CONFIG_HOME support to configuration directory |
| メモリ使用量のパフォーマンス最適化 | Performance optimizations for memory usage |
| OpenTelemetry ログに新しい属性 (terminal.type, language) を追加 | New attributes (terminal.type, language) in OpenTelemetry logging |

## 1.0.27

| 日本語 | English |
|--------|---------|
| Streamable HTTP MCP サーバーに対応 | Streamable HTTP MCP servers are now supported |
| リモート MCP サーバー（SSE および HTTP）で OAuth に対応 | Remote MCP servers (SSE and HTTP) now support OAuth |
| MCP リソースを @ メンションで参照可能に | MCP resources can now be @-mentioned |
| /resume スラッシュコマンドで Claude Code 内の会話を切り替え可能に | /resume slash command to switch conversations within Claude Code |

## 1.0.25

| 日本語 | English |
|--------|---------|
| スラッシュコマンド: "project" と "user" のプレフィックスを説明部分に移動 | Slash commands: moved "project" and "user" prefixes to descriptions |
| スラッシュコマンド: コマンド検出の信頼性を向上 | Slash commands: improved reliability for command discovery |
| Ghostty のサポートを改善 | Improved support for Ghostty |
| Web 検索の信頼性を向上 | Improved web search reliability |

## 1.0.24

| 日本語 | English |
|--------|---------|
| /mcp 出力を改善 | Improved /mcp output |
| 設定の配列がマージされず上書きされるバグを修正 | Fixed a bug where settings arrays got overwritten instead of merged |

## 1.0.23

| 日本語 | English |
|--------|---------|
| TypeScript SDK をリリース: @anthropic-ai/claude-code をインポートして開始 | Released TypeScript SDK: import @anthropic-ai/claude-code to get started |
| Python SDK をリリース: pip install claude-code-sdk で開始 | Released Python SDK: pip install claude-code-sdk to get started |

## 1.0.22

| 日本語 | English |
|--------|---------|
| SDK: `total_cost` を `total_cost_usd` に変更 | SDK: Renamed `total_cost` to `total_cost_usd` |

## 1.0.21

| 日本語 | English |
|--------|---------|
| タブベースのインデント付きファイルの編集を改善 | Improved editing of files with tab-based indentation |
| tool_result に一致しない tool_use エラーを修正 | Fix for tool_use without matching tool_result errors |
| Claude Code 終了後に stdio MCP サーバープロセスが残る不具合を修正 | Fixed a bug where stdio MCP server processes would linger after quitting Claude Code |

## 1.0.18

| 日本語 | English |
|--------|---------|
| 追加の作業ディレクトリを指定する --add-dir CLI 引数を追加 | Added --add-dir CLI argument for specifying additional working directories |
| -p フラグなしでストリーミング入力サポートを追加 | Added streaming input support without require -p flag |
| 起動パフォーマンスとセッションストレージのパフォーマンスを改善 | Improved startup performance and session storage performance |
| bash コマンドの作業ディレクトリを固定する CLAUDE_BASH_MAINTAIN_PROJECT_WORKING_DIR 環境変数を追加 | Added CLAUDE_BASH_MAINTAIN_PROJECT_WORKING_DIR environment variable to freeze working directory for bash commands |
| MCP サーバーツールの詳細表示機能を追加（/mcp） | Added detailed MCP server tools display (/mcp) |
| MCP の認証とパーミッション機能を改善 | MCP authentication and permission improvements |
| MCP SSE 接続の切断時に自動再接続する機能を追加 | Added auto-reconnection for MCP SSE connections on disconnect |
| ダイアログ表示時に貼り付けた内容が失われる問題を修正 | Fixed issue where pasted content was lost when dialogs appeared |

## 1.0.17

| 日本語 | English |
|--------|---------|
| -p モードでサブタスクからのメッセージを出力（parent_tool_use_id プロパティを確認） | We now emit messages from sub-tasks in -p mode (look for the parent_tool_use_id property) |
| VS Code の差分ツールを素早く複数回実行した際のクラッシュを修正 | Fixed crashes when the VS Code diff tool is invoked multiple times quickly |
| MCP サーバーリスト UI を改善 | MCP server list UI improvements |
| Claude Code のプロセス名を「node」ではなく「claude」として表示するよう更新 | Update Claude Code process title to display "claude" instead of "node" |

## 1.0.11

| 日本語 | English |
|--------|---------|
| Claude CodeがClaude Proサブスクリプションでも利用可能に | Claude Code can now also be used with a Claude Pro subscription |
| Claude Maxプランへのスムーズな切り替えのため /upgrade を追加 | Added /upgrade for smoother switching to Claude Max plans |
| APIキーおよびBedrock/Vertex/外部認証トークンからの認証UIを改善 | Improved UI for authentication from API keys and Bedrock/Vertex/external auth tokens |
| シェル設定のエラーハンドリングを改善 | Improved shell configuration error handling |
| コンパクション中のTodoリスト処理を改善 | Improved todo list handling during compaction |

## 1.0.10

| 日本語 | English |
|--------|---------|
| Markdown テーブルのサポートを追加 | Added markdown table support |
| ストリーミングパフォーマンスを改善 | Improved streaming performance |

## 1.0.8

| 日本語 | English |
|--------|---------|
| CLOUD_ML_REGION 使用時の Vertex AI リージョンフォールバックを修正 | Fixed Vertex AI region fallback when using CLOUD_ML_REGION |
| デフォルトの otel 間隔を 1秒から 5秒に増加 | Increased default otel interval from 1s -> 5s |
| MCP_TIMEOUT と MCP_TOOL_TIMEOUT が尊重されないエッジケースを修正 | Fixed edge cases where MCP_TIMEOUT and MCP_TOOL_TIMEOUT weren't being respected |
| 検索ツールが不必要に権限を要求していた回帰を修正 | Fixed a regression where search tools unnecessarily asked for permissions |
| 非英語言語での思考トリガーに対応 | Added support for triggering thinking non-English languages |
| コンパクト表示 UI を改善 | Improved compacting UI |

## 1.0.7

| 日本語 | English |
|--------|---------|
| /allowed-tools を /permissions に名称変更 | Renamed /allowed-tools -> /permissions |
| allowedTools と ignorePatterns を .claude.json から settings.json に移行 | Migrated allowedTools and ignorePatterns from .claude.json -> settings.json |
| claude config コマンドを非推奨化し、settings.json の直接編集を推奨 | Deprecated claude config commands in favor of editing settings.json |
| --print モードで --dangerously-skip-permissions が動作しないことがあるバグを修正 | Fixed a bug where --dangerously-skip-permissions sometimes didn't work in --print mode |
| /install-github-app のエラーハンドリングを改善 | Improved error handling for /install-github-app |
| バグ修正、UI 改善、およびツールの信頼性向上 | Bugfixes, UI polish, and tool reliability improvements |

## 1.0.6

| 日本語 | English |
|--------|---------|
| タブインデントファイルの編集信頼性を改善 | Improved edit reliability for tab-indented files |
| CLAUDE_CONFIG_DIR をすべての箇所で尊重 | Respect CLAUDE_CONFIG_DIR everywhere |
| 不要なツール許可プロンプトを削減 | Reduced unnecessary tool permission prompts |
| @file タイプアヘッドでシンボリックリンクに対応 | Added support for symlinks in @file typeahead |
| バグ修正、UI 改善、ツールの信頼性向上 | Bugfixes, UI polish, and tool reliability improvements |

## 1.0.4

| 日本語 | English |
|--------|---------|
| MCP ツールエラーが正しく解析されない不具合を修正 | Fixed a bug where MCP tool errors weren't being parsed correctly |

## 1.0.1

| 日本語 | English |
|--------|---------|
| インターリーブシンキングをオプトアウトするための `DISABLE_INTERLEAVED_THINKING` を追加 | Added `DISABLE_INTERLEAVED_THINKING` to give users the option to opt out of interleaved thinking. |
| プロバイダー固有の名称を表示するようモデル参照を改善（Bedrock は Sonnet 3.7、Console は Sonnet 4） | Improved model references to show provider-specific names (Sonnet 3.7 for Bedrock, Sonnet 4 for Console) |
| ドキュメントリンクと OAuth プロセスの説明を更新 | Updated documentation links and OAuth process descriptions |

## 1.0.0

| 日本語 | English |
|--------|---------|
| Claude Code の一般提供を開始 | Claude Code is now generally available |
| Sonnet 4 および Opus 4 モデルを導入 | Introducing Sonnet 4 and Opus 4 models |

---

## 0.2.x

---

## 0.2.125

| 日本語 | English |
|--------|---------|
| 破壊的変更: `ANTHROPIC_MODEL` または `ANTHROPIC_SMALL_FAST_MODEL` に渡す Bedrock ARN でエスケープされたスラッシュ（`%2F`）が不要に（`/` を使用） | Breaking change: Bedrock ARN passed to `ANTHROPIC_MODEL` or `ANTHROPIC_SMALL_FAST_MODEL` should no longer contain an escaped slash (specify `/` instead of `%2F`) |
| `DEBUG=true` を削除し `ANTHROPIC_LOG=debug` に変更、全リクエストをログ出力 | Removed `DEBUG=true` in favor of `ANTHROPIC_LOG=debug`, to log all requests |

## 0.2.117

| 日本語 | English |
|--------|---------|
| 破壊的変更: --print の JSON 出力が入れ子のメッセージオブジェクトを返すよう変更（新しいメタデータフィールド導入に向けた前方互換性のため） | Breaking change: --print JSON output now returns nested message objects, for forwards-compatibility as we introduce new metadata fields |
| settings.cleanupPeriodDays を追加 | Introduced settings.cleanupPeriodDays |
| CLAUDE_CODE_API_KEY_HELPER_TTL_MS 環境変数を追加 | Introduced CLAUDE_CODE_API_KEY_HELPER_TTL_MS env var |
| --debug モードを導入 | Introduced --debug mode |

## 0.2.108

| 日本語 | English |
|--------|---------|
| Claude の作業中にメッセージを送信してリアルタイムで指示が可能に | You can now send messages to Claude while it works to steer Claude in real-time |
| BASH_DEFAULT_TIMEOUT_MS と BASH_MAX_TIMEOUT_MS 環境変数を導入 | Introduced BASH_DEFAULT_TIMEOUT_MS and BASH_MAX_TIMEOUT_MS env vars |
| -p モードで thinking が動作しないバグを修正 | Fixed a bug where thinking was not working in -p mode |
| /cost レポート機能の不具合を修正 | Fixed a regression in /cost reporting |
| MCP ウィザードインターフェースを非推奨化し、他の MCP コマンドを推奨 | Deprecated MCP wizard interface in favor of other MCP commands |
| その他多数のバグ修正と改善 | Lots of other bugfixes and improvements |

## 0.2.107

| 日本語 | English |
|--------|---------|
| CLAUDE.mdファイルで他のファイルをインポート可能に。./CLAUDE.mdに@path/to/file.mdを追加することで起動時に追加ファイルを読み込み | CLAUDE.md files can now import other files. Add @path/to/file.md to ./CLAUDE.md to load additional files on launch |

## 0.2.106

| 日本語 | English |
|--------|---------|
| MCP SSE サーバー設定でカスタムヘッダーの指定が可能に | MCP SSE server configs can now specify custom headers |
| MCP パーミッションプロンプトが正しく表示されないバグを修正 | Fixed a bug where MCP permission prompt didn't always show correctly |

## 0.2.105

| 日本語 | English |
|--------|---------|
| Claude がウェブ検索に対応 | Claude can now search the web |
| システムおよびアカウントのステータスを /status に移動 | Moved system & account status to /status |
| Vim のワード移動キーバインディングを追加 | Added word movement keybindings for Vim |
| 起動、todoツール、ファイル編集のレイテンシを改善 | Improved latency for startup, todo tool, and file edits |

## 0.2.102

| 日本語 | English |
|--------|---------|
| 思考トリガーの信頼性を改善 | Improved thinking triggering reliability |
| 画像とフォルダに対する@mentionの信頼性を改善 | Improved @mention reliability for images and folders |
| 1つのプロンプトに複数の大きなチャンクを貼り付け可能に | You can now paste multiple large chunks into one prompt |

## 0.2.100

| 日本語 | English |
|--------|---------|
| スタックオーバーフローエラーによるクラッシュを修正 | Fixed a crash caused by a stack overflow error |
| データベースストレージをオプション化し、データベース非対応時は --continue と --resume を無効化 | Made db storage optional; missing db support disables --continue and --resume |

## 0.2.98

| 日本語 | English |
|--------|---------|
| 自動圧縮が2回実行される問題を修正 | Fixed an issue where auto-compact was running twice |

## 0.2.96

| 日本語 | English |
|--------|---------|
| Claude Max サブスクリプションでも Claude Code を利用可能に (https://claude.ai/upgrade) | Claude Code can now also be used with a Claude Max subscription (https://claude.ai/upgrade) |

## 0.2.93

| 日本語 | English |
|--------|---------|
| `claude --continue` と `claude --resume` で中断した会話を再開可能に | Resume conversations from where you left off from with "claude --continue" and "claude --resume" |
| Claude がタスク管理用の Todo リストを利用可能になり、作業の追跡と整理が改善 | Claude now has access to a Todo list that helps it stay on track and be more organized |

## 0.2.82

| 日本語 | English |
|--------|---------|
| --disallowedTools のサポートを追加 | Added support for --disallowedTools |
| 一貫性のためツール名を変更:LSTool → LS、View → Read など | Renamed tools for consistency: LSTool -> LS, View -> Read, etc. |

## 0.2.75

| 日本語 | English |
|--------|---------|
| Claude の作業中に Enter キーで追加メッセージをキューイング | Hit Enter to queue up additional messages while Claude is working |
| 画像ファイルのドラッグ&ドロップまたはコピー&ペーストでプロンプトに直接追加 | Drag in or copy/paste image files directly into the prompt |
| @メンションでファイルをコンテキストに直接追加 | @-mention files to directly add them to context |
| `claude --mcp-config <path-to-file>` でワンオフ MCP サーバーを実行 | Run one-off MCP servers with `claude --mcp-config <path-to-file>` |
| ファイル名自動補完のパフォーマンスを改善 | Improved performance for filename auto-complete |

## 0.2.74

| 日本語 | English |
|--------|---------|
| 動的生成APIキー（apiKeyHelper経由）のリフレッシュに対応、TTLは5分 | Added support for refreshing dynamically generated API keys (via apiKeyHelper), with a 5 minute TTL |
| TaskツールでWrite実行とBashコマンド実行が可能に | Task tool can now perform writes and run bash commands |

## 0.2.72

| 日本語 | English |
|--------|---------|
| トークン読み込みとツール使用状況を示すスピナーを更新 | Updated spinner to indicate tokens loaded and tool usage |

## 0.2.70

| 日本語 | English |
|--------|---------|
| curl などのネットワークコマンドが Claude で利用可能に | Network commands like curl are now available for Claude to use |
| Claude が複数の Web クエリを並列実行可能に | Claude can now run multiple web queries in parallel |
| 自動承認モードで ESC キーを1回押すと Claude を即座に中断 | Pressing ESC once immediately interrupts Claude in Auto-accept mode |

## 0.2.69

| 日本語 | English |
|--------|---------|
| Select コンポーネントの動作を改善し、UI の不具合を修正 | Fixed UI glitches with improved Select component behavior |
| テキスト切り詰めロジックを改善し、ターミナル出力の表示を強化 | Enhanced terminal output display with better text truncation logic |

## 0.2.67

| 日本語 | English |
|--------|---------|
| 共有プロジェクト権限ルールを .claude/settings.json に保存可能に | Shared project permission rules can be saved in .claude/settings.json |

## 0.2.66

| 日本語 | English |
|--------|---------|
| Print モード (-p) で --output-format=stream-json によるストリーミング出力に対応 | Print mode (-p) now supports streaming output via --output-format=stream-json |
| ペースト時に意図せずメモリモードや bash モードが起動する問題を修正 | Fixed issue where pasting could trigger memory or bash mode unexpectedly |

## 0.2.63

| 日本語 | English |
|--------|---------|
| MCP ツールが二重に読み込まれてツール呼び出しエラーが発生する問題を修正 | Fixed an issue where MCP tools were loaded twice, which caused tool call errors |

## 0.2.61

| 日本語 | English |
|--------|---------|
| vim スタイルキー (j/k) または bash/emacs ショートカット (Ctrl+n/p) でメニューをナビゲート可能に | Navigate menus with vim-style keys (j/k) or bash/emacs shortcuts (Ctrl+n/p) for faster interaction |
| 画像検出を強化しクリップボード貼り付け機能の信頼性を向上 | Enhanced image detection for more reliable clipboard paste functionality |
| ESC キーで会話履歴セレクターがクラッシュする問題を修正 | Fixed an issue where ESC key could crash the conversation history selector |

## 0.2.59

| 日本語 | English |
|--------|---------|
| 画像を直接プロンプトにコピー&ペーストが可能に | Copy+paste images directly into your prompt |
| bash および fetch ツールの進捗表示を改善 | Improved progress indicators for bash and fetch tools |
| 非インタラクティブモード (-p) のバグを修正 | Bugfixes for non-interactive mode (-p) |

## 0.2.54

| 日本語 | English |
|--------|---------|
| メッセージを '#' で始めることで Memory に素早く追加 | Quickly add to Memory by starting your message with '#' |
| ctrl+r を押すことで長いツール結果の完全な出力を表示 | Press ctrl+r to see full output for long tool results |
| MCP SSE トランスポートに対応 | Added support for MCP SSE transport |

## 0.2.53

| 日本語 | English |
|--------|---------|
| 新しい Web フェッチツールにより、貼り付けた URL を Claude が閲覧可能に | New web fetch tool lets Claude view URLs that you paste in |
| JPEG 検出のバグを修正 | Fixed a bug with JPEG detection |

## 0.2.50

| 日本語 | English |
|--------|---------|
| 新しい MCP "project" スコープにより、MCP サーバーを .mcp.json ファイルに追加してリポジトリにコミット可能 | New MCP "project" scope now allows you to add MCP servers to .mcp.json files and commit them to your repository |

## 0.2.49

| 日本語 | English |
|--------|---------|
| 以前の MCP サーバースコープを改名: 旧 "project" スコープは "local" に、"global" スコープは "user" に変更 | Previous MCP server scopes have been renamed: previous "project" scope is now "local" and "global" scope is now "user" |

## 0.2.47

| 日本語 | English |
|--------|---------|
| Tab キーでファイル名とフォルダ名の自動補完 | Press Tab to auto-complete file and folder names |
| Shift + Tab でファイル編集の自動承認を切り替え | Press Shift + Tab to toggle auto-accept for file edits |
| 無限の会話長を実現する自動会話圧縮機能（/config で切り替え可能） | Automatic conversation compaction for infinite conversation length (toggle with /config) |

## 0.2.44

| 日本語 | English |
|--------|---------|
| 「think」「think harder」「ultrathink」と指示することで、Claude に思考モードで計画を立てさせることが可能 | Ask Claude to make a plan with thinking mode: just say 'think' or 'think harder' or even 'ultrathink' |

## 0.2.41

| 日本語 | English |
|--------|---------|
| MCP サーバー起動タイムアウトを MCP_TIMEOUT 環境変数で設定可能に | MCP server startup timeout can now be configured via MCP_TIMEOUT environment variable |
| MCP サーバー起動がアプリケーション起動をブロックしないように変更 | MCP server startup no longer blocks the app from starting up |

## 0.2.37

| 日本語 | English |
|--------|---------|
| 新しい /release-notes コマンドでリリースノートをいつでも表示可能に | New /release-notes command lets you view release notes at any time |
| `claude config add/remove` コマンドでカンマまたはスペース区切りの複数値を受付 | `claude config add/remove` commands now accept multiple values separated by commas or spaces |

## 0.2.36

| 日本語 | English |
|--------|---------|
| `claude mcp add-from-claude-desktop` で Claude Desktop から MCP サーバーをインポート | Import MCP servers from Claude Desktop with `claude mcp add-from-claude-desktop` |
| `claude mcp add-json <n> <json>` で MCP サーバーを JSON 文字列として追加 | Add MCP servers as JSON strings with `claude mcp add-json <n> <json>` |

## 0.2.34

| 日本語 | English |
|--------|---------|
| テキスト入力用の Vim バインディング - /vim または /config で有効化 | Vim bindings for text input - enable with /vim or /config |

## 0.2.32

| 日本語 | English |
|--------|---------|
| 対話型MCPセットアップウィザードを追加：`claude mcp add` で段階的なインターフェースによるMCPサーバー追加に対応 | Interactive MCP setup wizard: Run "claude mcp add" to add MCP servers with a step-by-step interface |
| PersistentShellの一部問題を修正 | Fix for some PersistentShell issues |

## 0.2.31

| 日本語 | English |
|--------|---------|
| カスタムスラッシュコマンド: .claude/commands/ ディレクトリ内の Markdown ファイルを、プロンプトを会話に挿入するカスタムスラッシュコマンドとして利用可能 | Custom slash commands: Markdown files in .claude/commands/ directories now appear as custom slash commands to insert prompts into your conversation |
| MCP デバッグモード: --mcp-debug フラグで実行すると、MCP サーバーエラーに関する詳細情報を取得可能 | MCP debug mode: Run with --mcp-debug flag to get more information about MCP server errors |

## 0.2.30

| 日本語 | English |
|--------|---------|
| ターミナル互換性向上のため ANSI カラーテーマを追加 | Added ANSI color theme for better terminal compatibility |
| スラッシュコマンドの引数が正しく送信されない問題を修正 | Fixed issue where slash command arguments weren't being sent properly |
| (Mac のみ) API キーを macOS キーチェーンに保存するよう変更 | (Mac-only) API keys are now stored in macOS Keychain |

## 0.2.26

| 日本語 | English |
|--------|---------|
| ツール権限を管理する新しい /approved-tools コマンドを追加 | New /approved-tools command for managing tool permissions |
| コードの可読性を向上させる単語レベルの差分表示 | Word-level diff display for improved code readability |
| スラッシュコマンドのファジーマッチングに対応 | Fuzzy matching for slash commands |

## 0.2.21

| 日本語 | English |
|--------|---------|
| `/commands` のあいまい検索に対応 | Fuzzy matching for /commands |

---

*このファイルは [Claude Code](https://github.com/anthropics/claude-code) のCHANGELOGを元に翻訳されました。*
