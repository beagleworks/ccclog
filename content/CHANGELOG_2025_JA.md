# Claude Code 変更履歴 (2025年 - v2.0.x以前)

このファイルは Claude Code の2025年リリース分（バージョン2.0.x以前）の変更履歴を日本語で記載しています。

---

## 2.0.76

| 日本語 | English | Category |
|--------|---------|----------|
| Chrome 連携使用時の macOS コード署名警告の問題を修正 | Fixed issue with macOS code-sign warning when using Claude in Chrome integration | fixed |

## 2.0.75

| 日本語 | English | Category |
|--------|---------|----------|
| 軽微なバグ修正 | Minor bugfixes | fixed |

## 2.0.74

| 日本語 | English | Category |
|--------|---------|----------|
| LSP（Language Server Protocol）ツールを追加し、定義へのジャンプ、参照検索、ホバードキュメントなどのコードインテリジェンス機能に対応 | Added LSP (Language Server Protocol) tool for code intelligence features like go-to-definition, find references, and hover documentation | added |
| Kitty、Alacritty、Zed、Warp ターミナルの `/terminal-setup` サポートを追加 | Added `/terminal-setup` support for Kitty, Alacritty, Zed, and Warp terminals | added |
| `/theme` コマンドに Ctrl+T ショートカットを追加し、シンタックスハイライトのオン/オフ切り替えに対応 | Added ctrl+t shortcut in `/theme` to toggle syntax highlighting on/off | added |
| テーマピッカーにシンタックスハイライト情報を追加 | Added syntax highlighting info to theme picker | added |
| macOS ユーザー向けに、Alt ショートカットがターミナル設定により動作しない場合のガイダンスを追加 | Added guidance for macOS users when Alt shortcuts fail due to terminal configuration | added |
| スキルの `allowed-tools` がスキルから呼び出されたツールに適用されない問題を修正 | Fixed skill `allowed-tools` not being applied to tools invoked by the skill | fixed |
| ユーザーが既に Opus を使用している場合に Opus 4.5 のヒントが誤って表示される問題を修正 | Fixed Opus 4.5 tip incorrectly showing when user was already using Opus | fixed |
| シンタックスハイライトが正しく初期化されない場合のクラッシュの可能性を修正 | Fixed a potential crash when syntax highlighting isn't initialized correctly | fixed |
| `/plugins discover` で検索ボックスにフォーカスがある状態でリスト選択インジケーターが表示される表示不具合を修正 | Fixed visual bug in `/plugins discover` where list selection indicator showed while search box was focused | fixed |
| macOS のキーボードショートカット表示を 'alt' から 'opt' に修正 | Fixed macOS keyboard shortcuts to display 'opt' instead of 'alt' | fixed |
| `/context` コマンドの表示を改善し、ソース別のスキルとエージェントのグループ化、スラッシュコマンド、トークン数のソートに対応 | Improved `/context` command visualization with grouped skills and agents by source, slash commands, and sorted token count | improved |
| [Windows] 不適切なレンダリングの問題を修正 | [Windows] Fixed issue with improper rendering | fixed |
| [VSCode] 年末プロモーションメッセージ用のギフトタグ絵文字を追加 | [VSCode] Added gift tag pictogram for year-end promotion message | added |

## 2.0.73

| 日本語 | English | Category |
|--------|---------|----------|
| 添付画像をデフォルトビューアで開くクリック可能な `[Image #N]` リンクを追加 | Added clickable `[Image #N]` links that open attached images in the default viewer | added |
| ctrl-y yank 後にキルリング履歴を巡回する alt-y yank-pop を追加 | Added alt-y yank-pop to cycle through kill ring history after ctrl-y yank | added |
| プラグイン検索画面に検索フィルタリングを追加（名前、説明、マーケットプレイスで絞り込み可能） | Added search filtering to the plugin discover screen (type to filter by name, description, or marketplace) | added |
| `--session-id` と `--resume` または `--continue` および `--fork-session` を組み合わせてセッションをフォークする際のカスタムセッション ID のサポートを追加 | Added support for custom session IDs when forking sessions with `--session-id` combined with `--resume` or `--continue` and `--fork-session` | added |
| 入力履歴の巡回が遅くなる問題とメッセージ送信後にテキストが上書きされる可能性のある競合状態を修正 | Fixed slow input history cycling and race condition that could overwrite text after message submission | fixed |
| `/theme` コマンドがテーマピッカーを直接開くように改善 | Improved `/theme` command to open theme picker directly | improved |
| テーマピッカー UI を改善 | Improved theme picker UI | improved |
| 統一された SearchBox コンポーネントによるセッション再開、権限、プラグイン画面全体の検索 UX を改善 | Improved search UX across resume session, permissions, and plugins screens with a unified SearchBox component | improved |
| [VSCode] 保留中の権限（青）と未読の補完（オレンジ）を示すタブアイコンバッジを追加 | [VSCode] Added tab icon badges showing pending permissions (blue) and unread completions (orange) | added |

## 2.0.72

| 日本語 | English | Category |
|--------|---------|----------|
| Chrome拡張機能（https://claude.ai/chrome）と連携してブラウザを直接操作できる Claude in Chrome（ベータ）機能を追加 | Added Claude in Chrome (Beta) feature that works with the Chrome extension (https://claude.ai/chrome) to let you control your browser directly from Claude Code | added |
| ターミナルのちらつきを軽減 | Reduced terminal flickering | improved |
| モバイルアプリのダウンロードを促すヒントにスキャン可能なQRコードを追加 | Added scannable QR code to mobile app tip for quick app downloads | added |
| 会話の再開時にローディングインジケーターを追加してフィードバックを改善 | Added loading indicator when resuming conversations for better feedback | improved |
| 非インタラクティブモードで `/context` コマンドがカスタムシステムプロンプトを尊重しない問題を修正 | Fixed `/context` command not respecting custom system prompts in non-interactive mode | fixed |
| Ctrl+Yで貼り付け時に連続するCtrl+K行の順序が正しくない問題を修正 | Fixed order of consecutive Ctrl+K lines when pasting with Ctrl+Y | fixed |
| @ メンションのファイル提案速度を改善（gitリポジトリで約3倍高速化） | Improved @ mention file suggestion speed (~3× faster in git repositories) | improved |
| `.ignore` または `.rgignore` ファイルを含むリポジトリでのファイル提案パフォーマンスを改善 | Improved file suggestion performance in repos with `.ignore` or `.rgignore` files | improved |
| 設定の検証エラーをより目立つように改善 | Improved settings validation errors to be more prominent | improved |
| 誤操作を防ぐため、思考トグルのショートカットをTabからAlt+Tに変更 | Changed thinking toggle from Tab to Alt+T to avoid accidental triggers | changed |

## 2.0.71

| 日本語 | English | Category |
|--------|---------|----------|
| プロンプト候補の有効化/無効化のための /config トグルを追加 | Added /config toggle to enable/disable prompt suggestions | added |
| /config コマンドのエイリアスとして `/settings` を追加 | Added `/settings` as an alias for the `/config` command | added |
| カーソルがパス途中にある場合の @ ファイル参照候補が誤って発動する問題を修正 | Fixed @ file reference suggestions incorrectly triggering when cursor is in the middle of a path | fixed |
| `--dangerously-skip-permissions` 使用時に `.mcp.json` の MCP サーバーが読み込まれない問題を修正 | Fixed MCP servers from `.mcp.json` not loading when using `--dangerously-skip-permissions` | fixed |
| シェル glob パターンを含む有効な bash コマンド（例: `ls *.txt`、`for f in *.png`）を誤って拒否するパーミッションルールを修正 | Fixed permission rules incorrectly rejecting valid bash commands containing shell glob patterns (e.g., `ls *.txt`, `for f in *.png`) | fixed |
| Bedrock: トークンカウントと推論プロファイル取得で環境変数 `ANTHROPIC_BEDROCK_BASE_URL` を考慮するように対応 | Bedrock: Environment variable `ANTHROPIC_BEDROCK_BASE_URL` is now respected for token counting and inference profile listing | changed |
| ネイティブビルド向けの新しいシンタックスハイライトエンジン | New syntax highlighting engine for native build | added |

## 2.0.70

| 日本語 | English | Category |
|--------|---------|----------|
| プロンプト候補をEnterキーで即座に受け入れて送信可能に（Tabキーは編集のための受け入れのまま） | Added Enter key to accept and submit prompt suggestions immediately (tab still accepts for editing) | added |
| MCPツール権限にワイルドカード構文 `mcp__server__*` を追加し、サーバーの全ツールを一括許可・拒否可能に | Added wildcard syntax `mcp__server__*` for MCP tool permissions to allow or deny all tools from a server | added |
| プラグインマーケットプレイスごとに自動更新を制御できる自動更新トグルを追加 | Added auto-update toggle for plugin marketplaces, allowing per-marketplace control over automatic updates | added |
| ステータスラインに `current_usage` フィールドを追加し、コンテキストウィンドウの正確な使用率計算を実現 | Added `current_usage` field to status line input, enabling accurate context window percentage calculations | added |
| ユーザーの入力中にキューコマンドを処理する際に入力がクリアされる問題を修正 | Fixed input being cleared when processing queued commands while the user was typing | fixed |
| Tabキー押下時にプロンプト候補が入力済みテキストを置き換える問題を修正 | Fixed prompt suggestions replacing typed input when pressing Tab | fixed |
| ターミナルのリサイズ時に差分ビューが更新されない問題を修正 | Fixed diff view not updating when terminal is resized | fixed |
| 大規模な会話におけるメモリ使用量を3分の1に改善 | Improved memory usage by 3x for large conversations | improved |
| クリップボードにコピーされた統計スクリーンショット（Ctrl+S）の解像度を向上し、より鮮明な画像を実現 | Improved resolution of stats screenshots copied to clipboard (Ctrl+S) for crisper images | improved |
| クイックメモリエントリの # ショートカットを削除（代わりにClaudeにCLAUDE.mdの編集を依頼） | Removed # shortcut for quick memory entry (tell Claude to edit your CLAUDE.md instead) | changed |
| /config のシンキングモードトグルが正しく永続化されない問題を修正 | Fix thinking mode toggle in /config not persisting correctly | fixed |
| ファイル作成権限ダイアログのUIを改善 | Improve UI for file creation permission dialog | improved |

## 2.0.69

| 日本語 | English | Category |
|--------|---------|----------|
| 軽微なバグを修正 | Minor bugfixes | fixed |

## 2.0.68

| 日本語 | English | Category |
|--------|---------|----------|
| IME（入力メソッドエディタ）における中国語・日本語・韓国語などの入力時に、変換候補ウィンドウがカーソル位置に正しく表示されるよう修正 | Fixed IME (Input Method Editor) support for languages like Chinese, Japanese, and Korean by correctly positioning the composition window at the cursor | fixed |
| 許可されていない MCP ツールがモデルに表示される問題を修正 | Fixed a bug where disallowed MCP tools were visible to the model | fixed |
| サブエージェント動作中にステアリングメッセージが失われる問題を修正 | Fixed an issue where steering messages could be lost while a subagent is working | fixed |
| Option+Arrow キーによる単語ナビゲーション時に、CJK（中国語・日本語・韓国語）テキストが単語境界で移動せず全体を1単語として扱う問題を修正 | Fixed Option+Arrow word navigation treating entire CJK (Chinese, Japanese, Korean) text sequences as a single word instead of navigating by word boundaries | fixed |
| プラン終了時の UX を改善：プランが空または存在しない場合、エラーを投げる代わりにシンプルな yes/no ダイアログを表示 | Improved plan mode exit UX: show simplified yes/no dialog when exiting with empty or missing plan instead of throwing an error | improved |
| エンタープライズ管理設定のサポートを追加（この機能を有効化するには Anthropic アカウントチームに連絡が必要） | Add support for enterprise managed settings. Contact your Anthropic account team to enable this feature. | added |

## 2.0.67

| 日本語 | English | Category |
|--------|---------|----------|
| Opus 4.5 で思考モードがデフォルトで有効化 | Thinking mode is now enabled by default for Opus 4.5 | changed |
| 思考モードの設定を /config に移動 | Thinking mode configuration has moved to /config | changed |
| `/permissions` コマンドに検索機能を追加し、`/` キーボードショートカットでツール名によるルールのフィルタリングに対応 | Added search functionality to `/permissions` command with `/` keyboard shortcut for filtering rules by tool name | added |
| `/doctor` で自動更新が無効になっている理由を表示 | Show reason why autoupdater is disabled in `/doctor` | improved |
| 別のインスタンスが既に最新バージョンの場合に `claude update` 実行時に誤った「別のプロセスが更新中」エラーが表示される問題を修正 | Fixed false "Another process is currently updating Claude" error when running `claude update` while another instance is already on the latest version | fixed |
| 非対話モード（`-p` フラグまたはパイプ入力）実行時に `.mcp.json` の MCP サーバーが保留状態のままになる問題を修正 | Fixed MCP servers from `.mcp.json` being stuck in pending state when running in non-interactive mode (`-p` flag or piped input) | fixed |
| `/permissions` で権限ルール削除後にスクロール位置がリセットされる問題を修正 | Fixed scroll position resetting after deleting a permission rule in `/permissions` | fixed |
| キリル文字、ギリシャ文字、アラビア文字、ヘブライ文字、タイ文字、中国語などの非ラテン文字で単語削除（opt+delete）と単語ナビゲーション（opt+arrow）が正しく動作しない問題を修正 | Fixed word deletion (opt+delete) and word navigation (opt+arrow) not working correctly with non-Latin text such as Cyrillic, Greek, Arabic, Hebrew, Thai, and Chinese | fixed |
| `claude install --force` が古いロックファイルをバイパスしない問題を修正 | Fixed `claude install --force` not bypassing stale lock files | fixed |
| CLAUDE.md 内の連続した @~/ ファイル参照がマークダウンの取り消し線の干渉により誤って解析される問題を修正 | Fixed consecutive @~/ file references in CLAUDE.md being incorrectly parsed due to markdown strikethrough interference | fixed |
| Windows: ログディレクトリパスのコロンが原因でプラグイン MCP サーバーが失敗する問題を修正 | Windows: Fixed plugin MCP servers failing due to colons in log directory paths | fixed |

## 2.0.65

| 日本語 | English | Category |
|--------|---------|----------|
| プロンプト入力中にalt+p（Linux、Windows）またはoption+p（macOS）でモデルを切り替える機能を追加 | Added ability to switch models while writing a prompt using alt+p (linux, windows), option+p (macos). | added |
| ステータスラインの入力部分にコンテキストウィンドウ情報を追加 | Added context window information to status line input | added |
| カスタム `@` ファイル検索コマンド用の `fileSuggestion` 設定を追加 | Added `fileSuggestion` setting for custom `@` file search commands | added |
| 自動シェル検出を上書きする `CLAUDE_CODE_SHELL` 環境変数を追加（ログインシェルと実際の作業シェルが異なる場合に有用） | Added `CLAUDE_CODE_SHELL` environment variable to override automatic shell detection (useful when login shell differs from actual working shell) | added |
| Escapeキーでクエリを中断した際にプロンプトが履歴に保存されない問題を修正 | Fixed prompt not being saved to history when aborting a query with Escape | fixed |
| Readツールの画像処理において、ファイル拡張子ではなくバイト列から形式を識別するように修正 | Fixed Read tool image handling to identify format from bytes instead of file extension | fixed |

## 2.0.64

| 日本語 | English | Category |
|--------|---------|----------|
| 自動圧縮を即時実行に変更 | Made auto-compacting instant | improved |
| エージェントとbashコマンドの非同期実行およびメインエージェントへのメッセージ送信に対応 | Agents and bash commands can run asynchronously and send messages to wake up the main agent | added |
| /stats コマンドで使用統計（お気に入りモデル、使用グラフ、連続使用日数）を表示 | /stats now provides users with interesting CC stats, such as favorite model, usage graph, usage streak | added |
| 名前付きセッション機能を追加（`/rename` で命名、`/resume <name>` または `claude --resume <name>` で再開） | Added named session support: use `/rename` to name sessions, `/resume <name>` in REPL or `claude --resume <name>` from the terminal to resume them | added |
| `.claude/rules/` のサポートを追加（詳細は https://code.claude.com/docs/en/memory を参照） | Added support for .claude/rules/`.  See https://code.claude.com/docs/en/memory for details. | added |
| 画像リサイズ時の寸法メタデータを追加し、大きな画像の座標マッピングを正確化 | Added image dimension metadata when images are resized, enabling accurate coordinate mappings for large images | added |
| ネイティブインストーラー使用時の .env 自動読み込みを修正 | Fixed auto-loading .env when using native installer | fixed |
| `--continue` または `--resume` フラグ使用時に `--system-prompt` が無視される問題を修正 | Fixed `--system-prompt` being ignored when using `--continue` or `--resume` flags | fixed |
| `/resume` 画面を改善（フォークされたセッションをグループ化、プレビュー(P)とリネーム(R)のキーボードショートカット追加） | Improved `/resume` screen with grouped forked sessions and keyboard shortcuts for preview (P) and rename (R) | improved |
| VSCode: コードブロックとbashツール入力にクリップボードコピーボタンを追加 | VSCode: Added copy-to-clipboard button on code blocks and bash tool inputs | added |
| VSCode: Windows ARM64 でエミュレーション経由で x64 バイナリにフォールバックし、拡張機能の動作を修正 | VSCode: Fixed extension not working on Windows ARM64 by falling back to x64 binary via emulation | fixed |
| Bedrock: トークンカウントの効率を改善 | Bedrock: Improve efficiency of token counting | improved |
| Bedrock: `aws login` による AWS Management Console 認証情報に対応 | Bedrock: Add support for `aws login` AWS Management Console credentials | added |
| AgentOutputTool と BashOutputTool を廃止し、新しい統合 TaskOutputTool に移行 | Unshipped AgentOutputTool and BashOutputTool, in favor of a new unified TaskOutputTool | changed |

## 2.0.62

| 日本語 | English | Category |
|--------|---------|----------|
| 複数選択式の質問に「（推奨）」インジケーターを追加し、推奨オプションをリスト最上部に配置 | Added "(Recommended)" indicator for multiple-choice questions, with the recommended option moved to the top of the list | added |
| コミットとPRの署名をカスタマイズする `attribution` 設定を追加（`includeCoAuthoredBy` を非推奨化） | Added `attribution` setting to customize commit and PR bylines (deprecates `includeCoAuthoredBy`) | added |
| ~/.claude がプロジェクトディレクトリにシンボリックリンクされている場合にスラッシュコマンドが重複表示される問題を修正 | Fixed duplicate slash commands appearing when ~/.claude is symlinked to a project directory | fixed |
| 複数のコマンドが同じ名前を共有している場合にスラッシュコマンドの選択が機能しない問題を修正 | Fixed slash command selection not working when multiple commands share the same name | fixed |
| シンボリックリンクされたスキルディレクトリ内のスキルファイルが循環シンボリックリンクになる問題を修正 | Fixed an issue where skill files inside symlinked skill directories could become circular symlinks | fixed |
| ロックファイルが誤って古くなることで実行中のバージョンが削除される問題を修正 | Fixed running versions getting removed because lock file incorrectly going stale | fixed |
| ファイル変更を拒否した際にIDE差分タブが閉じない問題を修正 | Fixed IDE diff tab not closing when rejecting file changes | fixed |

## 2.0.61

| 日本語 | English | Category |
|--------|---------|----------|
| VSCode での複数ターミナルクライアントサポートを応答性の問題により差し戻し | Reverted VSCode support for multiple terminal clients due to responsiveness issues. | changed |

## 2.0.60

| 日本語 | English | Category |
|--------|---------|----------|
| バックグラウンドエージェント対応を追加：作業中にエージェントがバックグラウンドで実行される | Added background agent support. Agents run in the background while you work | added |
| すべてのスラッシュコマンドを無効化する --disable-slash-commands CLI フラグを追加 | Added --disable-slash-commands CLI flag to disable all slash commands | added |
| "Co-Authored-By" コミットメッセージにモデル名を追加 | Added model name to "Co-Authored-By" commit messages | added |
| "/mcp enable [server-name]" または "/mcp disable [server-name]" ですべてのサーバーを素早く切り替え可能に | Enabled "/mcp enable [server-name]" or "/mcp disable [server-name]" to quickly toggle all servers | added |
| 事前承認済みウェブサイトの要約をスキップするよう Fetch を更新 | Updated Fetch to skip summarization for pre-approved websites | changed |
| VSCode: IDE サーバーへの複数ターミナルクライアントの同時接続に対応 | VSCode: Added support for multiple terminal clients connecting to the IDE server simultaneously | added |

## 2.0.59

| 日本語 | English | Category |
|--------|---------|----------|
| 現在のセッションのエージェント設定を上書きする --agent CLI フラグを追加 | Added --agent CLI flag to override the agent setting for the current session | added |
| 特定エージェントのシステムプロンプト、ツール制限、モデルでメインスレッドを設定する `agent` 設定を追加 | Added `agent` setting to configure main thread with a specific agent's system prompt, tool restrictions, and model | added |
| VS Code: .claude.json 設定ファイルが誤った場所から読み込まれる問題を修正 | VS Code: Fixed .claude.json config file being read from incorrect location | fixed |

## 2.0.58

| 日本語 | English | Category |
|--------|---------|----------|
| Pro ユーザーはサブスクリプションの一部として Opus 4.5 にアクセス可能 | Pro users now have access to Opus 4.5 as part of their subscription! | added |
| タイマー表示が「12m 0s」ではなく「11m 60s」と表示される問題を修正 | Fixed timer duration showing "11m 60s" instead of "12m 0s" | fixed |
| Windows: 管理設定は `C:\Program Files\ClaudeCode` が存在する場合はそちらを優先。`C:\ProgramData\ClaudeCode` のサポートは将来のバージョンで削除予定 | Windows: Managed settings now prefer `C:\Program Files\ClaudeCode` if it exists. Support for `C:\ProgramData\ClaudeCode` will be removed in a future version. | changed |

## 2.0.57

| 日本語 | English | Category |
|--------|---------|----------|
| プラン却下時にフィードバック入力を追加し、Claude に変更点を伝達可能に | Added feedback input when rejecting plans, allowing users to tell Claude what to change | added |
| VSCode: リアルタイム応答表示のためストリーミングメッセージ対応を追加 | VSCode: Added streaming message support for real-time response display | added |

## 2.0.56

| 日本語 | English | Category |
|--------|---------|----------|
| ターミナル進捗バーを有効化/無効化する設定を追加（OSC 9;4） | Added setting to enable/disable terminal progress bar (OSC 9;4) | added |
| VSCode 拡張機能: VS Code のセカンダリサイドバー（VS Code 1.97以降）に対応し、左側にファイルエクスプローラーを保持したまま右側のサイドバーに Claude Code を表示可能に。設定で Preferred Location としてサイドバーを指定する必要あり | VSCode Extension: Added support for VS Code's secondary sidebar (VS Code 1.97+), allowing Claude Code to be displayed in the right sidebar while keeping the file explorer on the left. Requires setting sidebar as Preferred Location in the config. | added |

## 2.0.55

| 日本語 | English | Category |
|--------|---------|----------|
| プロキシ DNS 解決がデフォルトで強制的に有効化されていた問題を修正。現在は `CLAUDE_CODE_PROXY_RESOLVES_HOSTS=true` 環境変数によるオプトイン方式 | Fixed proxy DNS resolution being forced on by default. Now opt-in via `CLAUDE_CODE_PROXY_RESOLVES_HOSTS=true` environment variable | fixed |
| メモリロケーションセレクタで矢印キーを押し続けるとキーボードナビゲーションが応答しなくなる問題を修正 | Fixed keyboard navigation becoming unresponsive when holding down arrow keys in memory location selector | fixed |
| AskUserQuestion ツールを改善し、最後の質問が単一選択の場合は自動送信することで、シンプルな質問フローにおける追加のレビュー画面を削減 | Improved AskUserQuestion tool to auto-submit single-select questions on the last question, eliminating the extra review screen for simple question flows | improved |
| `@` ファイル提案のあいまい検索を改善し、より高速で正確な結果を提供 | Improved fuzzy matching for `@` file suggestions with faster, more accurate results | improved |

## 2.0.54

| 日本語 | English | Category |
|--------|---------|----------|
| Hooks: PermissionRequest フックで「常に許可」提案の処理とパーミッション更新の適用に対応 | Hooks: Enable PermissionRequest hooks to process 'always allow' suggestions and apply permission updates | added |
| iTerm 通知が過剰に表示される問題を修正 | Fix issue with excessive iTerm notifications | fixed |

## 2.0.52

| 日本語 | English | Category |
|--------|---------|----------|
| コマンドライン引数で Claude を起動した際に重複メッセージが表示される問題を修正 | Fixed duplicate message display when starting Claude with a command line argument | fixed |
| `/usage` コマンドの進行状況バーを使用量の増加に応じて埋まるよう修正（残り割合表示から変更） | Fixed `/usage` command progress bars to fill up as usage increases (instead of showing remaining percentage) | fixed |
| Wayland 実行中の Linux システムで画像貼り付けが動作しない問題を修正（xclip が利用不可の場合 wl-paste にフォールバック） | Fixed image pasting not working on Linux systems running Wayland (now falls back to wl-paste when xclip is unavailable) | fixed |
| bash コマンドでの `$!` の一部使用を許可 | Permit some uses of `$!` in bash commands | changed |

## 2.0.51

| 日本語 | English | Category |
|--------|---------|----------|
| Opus 4.5 を追加 https://www.anthropic.com/news/claude-opus-4-5 | Added Opus 4.5! https://www.anthropic.com/news/claude-opus-4-5 | added |
| Claude Code for Desktop を公開 https://claude.com/download | Introducing Claude Code for Desktop: https://claude.com/download | added |
| 新モデルを試せるよう、Claude Code ユーザーの使用制限を更新（詳細は Claude Opus 4.5 ブログを参照） | To give you room to try out our new model, we've updated usage limits for Claude Code users. See the Claude Opus 4.5 blog for full details | changed |
| Pro ユーザーは Claude Code で Opus 4.5 にアクセスするための追加使用量を購入可能に | Pro users can now purchase extra usage for access to Opus 4.5 in Claude Code | added |
| Plan Mode でより正確な計画を立て、より徹底的に実行するように改善 | Plan Mode now builds more precise plans and executes more thoroughly | improved |
| 使用制限の通知をより分かりやすく改善 | Usage limit notifications now easier to understand | improved |
| `/usage` を「% used」表示に戻す変更 | Switched `/usage` back to "% used" | changed |
| thinking エラーのハンドリングを修正 | Fixed handling of thinking errors | fixed |
| パフォーマンス低下を修正 | Fixed performance regression | fixed |

## 2.0.50

| 日本語 | English | Category |
|--------|---------|----------|
| 入力スキーマにネストされた参照を持つMCPツールの呼び出しを妨げるバグを修正 | Fixed bug preventing calling MCP tools that have nested references in their input schemas | fixed |
| アップグレード中の無害で煩雑なエラーを抑制 | Silenced a noisy but harmless error during upgrades | improved |
| ultrathinのテキスト表示を改善 | Improved ultrathink text display | improved |
| 5時間セッション制限の警告メッセージの明確性を改善 | Improved clarity of 5-hour session limit warning message | improved |

## 2.0.49

| 日本語 | English | Category |
|--------|---------|----------|
| readline スタイルの Ctrl-Y によるカットテキスト貼り付けを追加 | Added readline-style ctrl-y for pasting deleted text | added |
| 使用制限の警告メッセージの明確化を改善 | Improved clarity of usage limit warning message | improved |
| サブエージェントのパーミッション処理を修正 | Fixed handling of subagent permissions | fixed |

## 2.0.47

| 日本語 | English | Category |
|--------|---------|----------|
| `claude --teleport` のエラーメッセージとバリデーションを改善 | Improved error messages and validation for `claude --teleport` | improved |
| `/usage` のエラーハンドリングを改善 | Improved error handling in `/usage` | improved |
| 終了時に履歴エントリが記録されない競合状態を修正 | Fixed race condition with history entry not getting logged at exit | fixed |
| `settings.json` から Vertex AI 設定が適用されない問題を修正 | Fixed Vertex AI configuration not being applied from `settings.json` | fixed |

## 2.0.46

| 日本語 | English | Category |
|--------|---------|----------|
| メタデータからフォーマットを検出できない場合に画像ファイルが誤ったメディアタイプで報告される不具合を修正 | Fixed image files being reported with incorrect media type when format cannot be detected from metadata | fixed |

## 2.0.45

| 日本語 | English | Category |
|--------|---------|----------|
| Microsoft Foundry のサポートを追加 https://code.claude.com/docs/en/azure-ai-foundry を参照 | Added support for Microsoft Foundry! See https://code.claude.com/docs/en/azure-ai-foundry | added |
| カスタムロジックでツール権限リクエストを自動承認または拒否する `PermissionRequest` フックを追加 | Added `PermissionRequest` hook to automatically approve or deny tool permission requests with custom logic | added |
| メッセージを `&` で開始することで、バックグラウンドタスクを Web 版 Claude Code に送信可能に | Send background tasks to Claude Code on the web by starting a message with `&` | added |

## 2.0.43

| 日本語 | English | Category |
|--------|---------|----------|
| カスタムエージェントに `permissionMode` フィールドを追加 | Added `permissionMode` field for custom agents | added |
| `PreToolUseHookInput` と `PostToolUseHookInput` 型に `tool_use_id` フィールドを追加 | Added `tool_use_id` field to `PreToolUseHookInput` and `PostToolUseHookInput` types | added |
| サブエージェント用に自動ロードするスキルを宣言する frontmatter フィールドを追加 | Added skills frontmatter field to declare skills to auto-load for subagents | added |
| `SubagentStart` フックイベントを追加 | Added the `SubagentStart` hook event | added |
| ファイルを @-mention した際にネストした `CLAUDE.md` が読み込まれない問題を修正 | Fixed nested `CLAUDE.md` files not loading when @-mentioning files | fixed |
| UI で一部のメッセージが重複レンダリングされる問題を修正 | Fixed duplicate rendering of some messages in the UI | fixed |
| 視覚的なちらつきを修正 | Fixed some visual flickers | fixed |
| セル ID が `cell-N` パターンに一致する際に NotebookEdit ツールが誤った位置にセルを挿入する問題を修正 | Fixed NotebookEdit tool inserting cells at incorrect positions when cell IDs matched the pattern `cell-N` | fixed |

## 2.0.42

| 日本語 | English | Category |
|--------|---------|----------|
| `SubagentStop` フックに `agent_id` および `agent_transcript_path` フィールドを追加 | Added `agent_id` and `agent_transcript_path` fields to `SubagentStop` hooks. | added |

## 2.0.41

| 日本語 | English | Category |
|--------|---------|----------|
| プロンプトベースの停止フックに `model` パラメータを追加し、フック評価用のカスタムモデルを指定可能に | Added `model` parameter to prompt-based stop hooks, allowing users to specify a custom model for hook evaluation | added |
| ユーザー設定からのスラッシュコマンドが2回読み込まれる問題を修正（レンダリング問題の原因となっていた） | Fixed slash commands from user settings being loaded twice, which could cause rendering issues | fixed |
| コマンド説明におけるユーザー設定とプロジェクト設定の誤ったラベル付けを修正 | Fixed incorrect labeling of user settings vs project settings in command descriptions | fixed |
| プラグインコマンドフックの実行中にタイムアウトが発生した際のクラッシュを修正 | Fixed crash when plugin command hooks timeout during execution | fixed |
| Bedrock ユーザーが `--model haiku` 使用時に /model ピッカーで Opus エントリが重複表示される問題を修正 | Fixed: Bedrock users no longer see duplicate Opus entries in the /model picker when using `--model haiku` | fixed |
| 信頼ダイアログとオンボーディングにおけるセキュリティドキュメントのリンク切れを修正 | Fixed broken security documentation links in trust dialogs and onboarding | fixed |
| diff モーダルを閉じるために ESC を押すとモデルも中断される問題を修正 | Fixed issue where pressing ESC to close the diff modal would also interrupt the model | fixed |
| ctrl-r 履歴検索でスラッシュコマンドに到達した際に検索がキャンセルされなくなった | ctrl-r history search landing on a slash command no longer cancels the search | fixed |
| SDK: フックのカスタムタイムアウトに対応 | SDK: Support custom timeouts for hooks | added |
| より多くの安全な git コマンドを承認なしで実行可能に | Allow more safe git commands to run without approval | improved |
| プラグイン: 出力スタイルの共有とインストールに対応 | Plugins: Added support for sharing and installing output styles | added |
| Web からのセッション転送時に上流ブランチを自動設定 | Teleporting a session from web will automatically set the upstream branch | improved |

## 2.0.37

| 日本語 | English | Category |
|--------|---------|----------|
| 通知のアイドル状態の計算方法を修正 | Fixed how idleness is computed for notifications | fixed |
| フック: 通知フックイベントにマッチャー値を追加 | Hooks: Added matcher values for Notification hook events | added |
| 出力スタイル: frontmatter に `keep-coding-instructions` オプションを追加 | Output Styles: Added `keep-coding-instructions` option to frontmatter | added |

## 2.0.36

| 日本語 | English | Category |
|--------|---------|----------|
| DISABLE_AUTOUPDATER 環境変数がパッケージマネージャー更新通知を正しく無効化するよう修正 | Fixed: DISABLE_AUTOUPDATER environment variable now properly disables package manager update notifications | fixed |
| キューに入ったメッセージが誤って bash コマンドとして実行される問題を修正 | Fixed queued messages being incorrectly executed as bash commands | fixed |
| キューに入ったメッセージ処理中に入力が失われる問題を修正 | Fixed input being lost when typing while a queued message is processed | fixed |

## 2.0.35

| 日本語 | English | Category |
|--------|---------|----------|
| コマンド検索時のファジー検索結果を改善 | Improve fuzzy search results when searching commands | improved |
| VS Code 拡張機能で `chat.fontSize` および `chat.fontFamily` 設定を UI 全体に反映し、再読み込み不要でフォント変更を即座に適用 | Improved VS Code extension to respect `chat.fontSize` and `chat.fontFamily` settings throughout the entire UI, and apply font changes immediately without requiring reload | improved |
| `CLAUDE_CODE_EXIT_AFTER_STOP_DELAY` 環境変数を追加し、指定したアイドル時間後に SDK モードを自動終了（自動化ワークフローやスクリプトで有用） | Added `CLAUDE_CODE_EXIT_AFTER_STOP_DELAY` environment variable to automatically exit SDK mode after a specified idle duration, useful for automated workflows and scripts | added |
| `ignorePatterns` をプロジェクト設定から localSettings の拒否権限へ移行 | Migrated `ignorePatterns` from project config to deny permissions in the localSettings. | changed |
| 空文字列や falsy 値を持つ項目（例: `/hooks` メニュー）でメニューナビゲーションが固まる問題を修正 | Fixed menu navigation getting stuck on items with empty string or other falsy values (e.g., in the `/hooks` menu) | fixed |

## 2.0.34

| 日本語 | English | Category |
|--------|---------|----------|
| VSCode 拡張機能: 新規会話の初期権限モードを設定する機能を追加 | VSCode Extension: Added setting to configure the initial permission mode for new conversations | added |
| ネイティブ Rust ベースのファジーファインダーによるファイルパス提案のパフォーマンス改善 | Improved file path suggestion performance with native Rust-based fuzzy finder | improved |
| OAuth を使用する MCP サーバー（Slack など）の接続時にハングアップを引き起こす無限トークンリフレッシュループを修正 | Fixed infinite token refresh loop that caused MCP servers with OAuth (e.g., Slack) to hang during connection | other |
| 大きなファイル（特に base64 エンコード画像）の読み書き時のメモリクラッシュを修正 | Fixed memory crash when reading or writing large files (especially base64-encoded images) | fixed |

## 2.0.33

| 日本語 | English | Category |
|--------|---------|----------|
| ネイティブバイナリのインストールが高速化 | Native binary installs now launch quicker. | improved |
| `claude doctor` が Homebrew と npm-global のインストールを誤検出する問題を修正（シンボリックリンクの適切な解決により） | Fixed `claude doctor` incorrectly detecting Homebrew vs npm-global installations by properly resolving symlinks | fixed |
| `claude mcp serve` が互換性のない outputSchema を持つツールを公開する問題を修正 | Fixed `claude mcp serve` exposing tools with incompatible outputSchemas | fixed |

## 2.0.32

| 日本語 | English | Category |
|--------|---------|----------|
| コミュニティのフィードバックに基づき、出力スタイルの非推奨化を解除 | Un-deprecate output styles based on community feedback | changed |
| 起動時に通知を表示する`companyAnnouncements`設定を追加 | Added `companyAnnouncements` setting for displaying announcements on startup | added |
| PostToolUseフック実行中にフック進行状況メッセージが正しく更新されない問題を修正 | Fixed hook progress messages not updating correctly during PostToolUse hook execution | fixed |

## 2.0.31

| 日本語 | English | Category |
|--------|---------|----------|
| Windows: ネイティブインストールにおいて、モード切り替えショートカットを alt+m から shift+tab に変更 | Windows: native installation uses shift+tab as shortcut for mode switching, instead of alt+m | changed |
| Vertex: 対応モデルにおいてウェブ検索のサポートを追加 | Vertex: add support for Web Search on supported models | added |
| VSCode: ファイル検索で .gitignore されたファイルを含めるための respectGitIgnore 設定を追加（デフォルトは true） | VSCode: Adding the respectGitIgnore configuration to include .gitignored files in file searches (defaults to true) | added |
| サブエージェントと MCP サーバーに関する「Tool names must be unique」エラーのバグを修正 | Fixed a bug with subagents and MCP servers related to "Tool names must be unique" error | fixed |
| `/compact` が既存の compact 境界を尊重せず `prompt_too_long` で失敗する問題を修正 | Fixed issue causing `/compact` to fail with `prompt_too_long` by making it respect existing compact boundaries | fixed |
| プラグインのアンインストール時にプラグインが削除されない問題を修正 | Fixed plugin uninstall not removing plugins | fixed |

## 2.0.30

| 日本語 | English | Category |
|--------|---------|----------|
| macOS でキーチェーンがロックされている場合の API キー エラーに対する `security unlock-keychain` 実行のヒントを追加 | Added helpful hint to run `security unlock-keychain` when encountering API key errors on macOS with locked keychain | added |
| ポリシーレベルで dangerouslyDisableSandbox のエスケープハッチを無効化する `allowUnsandboxedCommands` サンドボックス設定を追加 | Added `allowUnsandboxedCommands` sandbox setting to disable the dangerouslyDisableSandbox escape hatch at policy level | added |
| カスタムエージェント定義に明示的なツールブロック用の `disallowedTools` フィールドを追加 | Added `disallowedTools` field to custom agent definitions for explicit tool blocking | added |
| プロンプトベースの停止フックを追加 | Added prompt-based stop hooks | added |
| VSCode: ファイル検索で .gitignore されたファイルを含めるための respectGitIgnore 設定を追加（デフォルトは true） | VSCode: Added respectGitIgnore configuration to include .gitignored files in file searches (defaults to true) | added |
| ネイティブビルドで SSE MCP サーバーを有効化 | Enabled SSE MCP servers on native build | added |
| 出力スタイルを非推奨化。`/output-style` でオプションを確認し、代わりに --system-prompt-file、--system-prompt、--append-system-prompt、CLAUDE.md、またはプラグインを使用 | Deprecated output styles. Review options in `/output-style` and use --system-prompt-file, --system-prompt, --append-system-prompt, CLAUDE.md, or plugins instead | changed |
| カスタム ripgrep 設定のサポートを削除し、検索結果が返されない問題と設定検出の失敗を解消 | Removed support for custom ripgrep configuration, resolving an issue where Search returns no results and config discovery fails | changed |
| Explore エージェントがコードベース探索中に不要な .md 調査ファイルを作成する問題を修正 | Fixed Explore agent creating unwanted .md investigation files during codebase exploration | fixed |
| `/context` が "max_tokens must be greater than thinking.budget_tokens" エラーで失敗することがある問題を修正 | Fixed a bug where `/context` would sometimes fail with "max_tokens must be greater than thinking.budget_tokens" error message | fixed |
| `--mcp-config` フラグがファイルベースの MCP 設定を正しく上書きするように修正 | Fixed `--mcp-config` flag to correctly override file-based MCP configurations | fixed |
| セッションのパーミッションがローカル設定に保存される問題を修正 | Fixed bug that saved session permissions to local settings | fixed |
| MCP ツールがサブエージェントで利用できない問題を修正 | Fixed MCP tools not being available to sub-agents | fixed |
| --dangerously-skip-permissions フラグを使用している場合にフックとプラグインが実行されない問題を修正 | Fixed hooks and plugins not executing when using --dangerously-skip-permissions flag | fixed |
| 矢印キーでタイプアヘッド候補をナビゲートする際の遅延を修正 | Fixed delay when navigating through typeahead suggestions with arrow keys | fixed |
| VSCode: 入力フッターに現在のファイルまたはコード選択状態を表示する選択インジケーターを復元 | VSCode: Restored selection indicator in input footer showing current file or code selection status | fixed |

## 2.0.28

| 日本語 | English | Category |
|--------|---------|----------|
| Plan モードに新しい Plan サブエージェントを導入 | Plan mode: introduced new Plan subagent | added |
| サブエージェントの再開をサポート | Subagents: claude can now choose to resume subagents | added |
| サブエージェントが使用するモデルを動的に選択可能に変更 | Subagents: claude can dynamically choose the model used by its subagents | added |
| SDK に --max-budget-usd フラグを追加 | SDK: added --max-budget-usd flag | added |
| カスタムスラッシュコマンド、サブエージェント、出力スタイルの検出で .gitignore を無視するように変更 | Discovery of custom slash commands, subagents, and output styles no longer respects .gitignore | changed |
| `/terminal-setup` が VS Code の `Shift + Enter` にバックスラッシュを追加する問題を修正 | Stop `/terminal-setup` from adding backslash to `Shift + Enter` in VS Code | fixed |
| Git ベースのプラグインとマーケットプレイスにブランチとタグのサポートを追加（fragment 構文を使用、例: `owner/repo#branch`） | Add branch and tag support for git-based plugins and marketplaces using fragment syntax (e.g., `owner/repo#branch`) | added |
| ホームディレクトリから起動時に macOS の権限プロンプトが表示される不具合を修正 | Fixed a bug where macOS permission prompts would show up upon initial launch when launching from home directory | fixed |
| その他のバグ修正 | Various other bug fixes | fixed |

## 2.0.27

| 日本語 | English | Category |
|--------|---------|----------|
| パーミッションプロンプトの新しい UI | New UI for permission prompts | added |
| セッション再開画面に現在のブランチフィルタリングと検索を追加し、ナビゲーションを容易化 | Added current branch filtering and search to session resume screen for easier navigation | added |
| ディレクトリ @-mention が "No assistant message found" エラーを引き起こす問題を修正 | Fixed directory @-mention causing "No assistant message found" error | fixed |
| VSCode 拡張機能: ファイル検索に .gitignore されたファイルを含める設定を追加 | VSCode Extension: Add config setting to include .gitignored files in file searches | added |
| VSCode 拡張機能: 無関係な 'Warmup' 会話の不具合と、設定がデフォルトにリセットされることがある問題を修正 | VSCode Extension: Bug fixes for unrelated 'Warmup' conversations, and configuration/settings occasionally being reset to defaults | fixed |

## 2.0.25

| 日本語 | English | Category |
|--------|---------|----------|
| 旧式のSDKエントリーポイントを削除。今後のSDKアップデートに備えて@anthropic-ai/claude-agent-sdkへ移行すること: https://platform.claude.com/docs/en/agent-sdk/migration-guide | Removed legacy SDK entrypoint. Please migrate to @anthropic-ai/claude-agent-sdk for future SDK updates: https://platform.claude.com/docs/en/agent-sdk/migration-guide | changed |

## 2.0.24

| 日本語 | English | Category |
|--------|---------|----------|
| --setting-sources 'project' が指定されている場合にプロジェクトレベルのスキルが読み込まれないバグを修正 | Fixed a bug where project-level skills were not loading when --setting-sources 'project' was specified | fixed |
| Claude Code Web: Web から CLI へのテレポート機能に対応 | Claude Code Web: Support for Web -> CLI teleport | added |
| Sandbox: Linux & Mac 向け BashTool のサンドボックスモードをリリース | Sandbox: Releasing a sandbox mode for the BashTool on Linux & Mac | added |
| Bedrock: 認証が必要な場合に awsAuthRefresh の出力を表示 | Bedrock: Display awsAuthRefresh output when auth is required | improved |

## 2.0.22

| 日本語 | English | Category |
|--------|---------|----------|
| スラッシュコマンドのスクロール時にコンテンツレイアウトがずれる問題を修正 | Fixed content layout shift when scrolling through slash commands | fixed |
| IDE: thinking の有効/無効を切り替えるトグルを追加 | IDE: Add toggle to enable/disable thinking. | added |
| 並列ツール呼び出し時に重複した権限プロンプトが表示されるバグを修正 | Fix bug causing duplicate permission prompts with parallel tool calls | fixed |
| エンタープライズ管理の MCP 許可リスト・拒否リストに対応 | Add support for enterprise managed MCP allowlist and denylist | added |

## 2.0.21

| 日本語 | English | Category |
|--------|---------|----------|
| MCP のツールレスポンスにおける `structuredContent` フィールドに対応 | Support MCP `structuredContent` field in tool responses | added |
| インタラクティブな質問ツールを追加 | Added an interactive question tool | added |
| プランモードでの質問頻度を増加 | Claude will now ask you questions more often in plan mode | changed |
| Pro ユーザー向けモデルオプションに Haiku 4.5 を追加 | Added Haiku 4.5 as a model option for Pro users | added |
| キューに入ったコマンドが以前のメッセージ出力にアクセスできない問題を修正 | Fixed an issue where queued commands don't have access to previous messages' output | fixed |

## 2.0.20

| 日本語 | English | Category |
|--------|---------|----------|
| Claude Skills に対応 | Added support for Claude Skills | added |

## 2.0.19

| 日本語 | English | Category |
|--------|---------|----------|
| 長時間実行される bash コマンドを終了せずに自動的にバックグラウンド実行に切り替え。BASH_DEFAULT_TIMEOUT_MS でカスタマイズ可能 | Auto-background long-running bash commands instead of killing them. Customize with BASH_DEFAULT_TIMEOUT_MS | added |
| print モードで不要な Haiku 呼び出しが発生していたバグを修正 | Fixed a bug where Haiku was unnecessarily called in print mode | fixed |

## 2.0.17

| 日本語 | English | Category |
|--------|---------|----------|
| モデルセレクターにHaiku 4.5を追加 | Added Haiku 4.5 to model selector! | added |
| Haiku 4.5は計画モードで自動的にSonnetを使用し、実行時にHaikuを使用（デフォルトでSonnetPlan） | Haiku 4.5 automatically uses Sonnet in plan mode, and Haiku for execution (i.e. SonnetPlan by default) | changed |
| サードパーティ（BedrockとVertex）はまだ自動アップグレード未対応。`ANTHROPIC_DEFAULT_HAIKU_MODEL`設定による手動アップグレードが可能 | 3P (Bedrock and Vertex) are not automatically upgraded yet. Manual upgrading can be done through setting `ANTHROPIC_DEFAULT_HAIKU_MODEL` | other |
| Exploreサブエージェントの導入。Haikuを活用してコードベースを効率的に検索し、コンテキストを節約 | Introducing the Explore subagent. Powered by Haiku it'll search through your codebase efficiently to save context! | added |
| OTEL: HTTP_PROXYとHTTPS_PROXYに対応 | OTEL: support HTTP_PROXY and HTTPS_PROXY | added |
| `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC`がリリースノート取得を無効化するように変更 | `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC` now disables release notes fetching | changed |

## 2.0.15

| 日本語 | English | Category |
|--------|---------|----------|
| 一度作成したファイルを書き込む前に再読み込みが必要だった再開時のバグを修正 | Fixed bug with resuming where previously created files needed to be read again before writing | fixed |
| `-p` モードで @メンションされたファイルを書き込む前に再読み込みが必要だったバグを修正 | Fixed bug with `-p` mode where @-mentioned files needed to be read again before writing | fixed |

## 2.0.14

| 日本語 | English | Category |
|--------|---------|----------|
| @メンションによる MCP サーバーの切り替え機能を修正 | Fix @-mentioning MCP servers to toggle them on/off | fixed |
| 環境変数を含む bash の権限チェックを改善 | Improve permission checks for bash with inline env vars | improved |
| ultrathink と thinking トグルの問題を修正 | Fix ultrathink + thinking toggle | fixed |
| 不要なログイン処理を削減 | Reduce unnecessary logins | improved |
| --system-prompt をドキュメント化 | Document --system-prompt | changed |
| レンダリング処理に複数の改善を実施 | Several improvements to rendering | improved |
| プラグイン UI の改善 | Plugins UI polish | improved |

## 2.0.13

| 日本語 | English | Category |
|--------|---------|----------|
| ネイティブビルドで `/plugin` が動作しない問題を修正 | Fixed `/plugin` not working on native build | fixed |

## 2.0.12

| 日本語 | English | Category |
|--------|---------|----------|
| プラグインシステムのリリース：カスタムコマンド、エージェント、フック、MCPサーバーによる Claude Code の拡張に対応 | **Plugin System Released**: Extend Claude Code with custom commands, agents, hooks, and MCP servers from marketplaces | added |
| プラグイン管理のための `/plugin install`、`/plugin enable/disable`、`/plugin marketplace` コマンドを追加 | `/plugin install`, `/plugin enable/disable`, `/plugin marketplace` commands for plugin management | added |
| チーム連携のためのリポジトリレベルのプラグイン設定（`extraKnownMarketplaces`）に対応 | Repository-level plugin configuration via `extraKnownMarketplaces` for team collaboration | added |
| プラグインの構造と設定を検証する `/plugin validate` コマンドを追加 | `/plugin validate` command for validating plugin structure and configuration | added |
| プラグイン発表のブログ記事を公開（https://www.anthropic.com/news/claude-code-plugins） | Plugin announcement blog post at https://www.anthropic.com/news/claude-code-plugins | other |
| プラグインのドキュメントを公開（https://code.claude.com/docs/en/plugins） | Plugin documentation available at https://code.claude.com/docs/en/plugins | other |
| `/doctor` コマンドによる包括的なエラーメッセージと診断機能を追加 | Comprehensive error messages and diagnostics via `/doctor` command | added |
| `/model` セレクターのちらつきを解消 | Avoid flickering in `/model` selector | fixed |
| `/help` コマンドを改善 | Improvements to `/help` | improved |
| `/resume` サマリーでのフック言及を回避 | Avoid mentioning hooks in `/resume` summaries | changed |
| `/config` での "verbose" 設定の変更がセッション間で永続化されるように変更 | Changes to the "verbose" setting in `/config` now persist across sessions | changed |

## 2.0.11

| 日本語 | English | Category |
|--------|---------|----------|
| システムプロンプトのサイズを1.4kトークン削減 | Reduced system prompt size by 1.4k tokens | improved |
| IDE: キーボードショートカットとフォーカスの問題を修正し、よりスムーズな操作を実現 | IDE: Fixed keyboard shortcuts and focus issues for smoother interaction | fixed |
| Opus フォールバック時のレート制限エラーが誤って表示される問題を修正 | Fixed Opus fallback rate limit errors appearing incorrectly | fixed |
| /add-dir コマンドが誤ったデフォルトタブを選択する問題を修正 | Fixed /add-dir command selecting wrong default tab | fixed |

## 2.0.10

| 日本語 | English | Category |
|--------|---------|----------|
| バター のように滑らかな UI を実現するため、ターミナルレンダラーを全面書き換え | Rewrote terminal renderer for buttery smooth UI | improved |
| MCP サーバーを @メンションまたは /mcp で有効化・無効化可能に | Enable/disable MCP servers by @mentioning, or in /mcp | added |
| bash モードでシェルコマンドのタブ補完に対応 | Added tab completion for shell commands in bash mode | added |
| PreToolUse フックがツール入力を変更可能に | PreToolUse hooks can now modify tool inputs | added |
| Ctrl-G でシステム設定のテキストエディタによるプロンプト編集に対応 | Press Ctrl-G to edit your prompt in your system's configured text editor | added |
| コマンド内の環境変数を含む bash パーミッションチェックの不具合を修正 | Fixes for bash permission checks with environment variables in the command | fixed |

## 2.0.9

| 日本語 | English | Category |
|--------|---------|----------|
| Bash のバックグラウンド実行が動作しなくなった回帰を修正 | Fix regression where bash backgrounding stopped working | fixed |

## 2.0.8

| 日本語 | English | Category |
|--------|---------|----------|
| Bedrock のデフォルト Sonnet モデルを `global.anthropic.claude-sonnet-4-5-20250929-v1:0` に更新 | Update Bedrock default Sonnet model to `global.anthropic.claude-sonnet-4-5-20250929-v1:0` | changed |
| IDE: チャットへのファイルとフォルダのドラッグ&ドロップに対応 | IDE: Add drag-and-drop support for files and folders in chat | added |
| /context: thinking ブロックのカウント処理を修正 | /context: Fix counting for thinking blocks | fixed |
| ダークターミナル上でライトテーマを使用するユーザー向けのメッセージ表示を改善 | Improve message rendering for users with light themes on dark terminals | improved |
| 非推奨の .claude.json 設定オプション（allowedTools、ignorePatterns、env、todoFeatureEnabled）を削除（これらは settings.json で設定すること） | Remove deprecated .claude.json allowedTools, ignorePatterns, env, and todoFeatureEnabled config options (instead, configure these in your settings.json) | changed |

## 2.0.5

| 日本語 | English | Category |
|--------|---------|----------|
| IDE: Enter と Tab による IME の意図しないメッセージ送信を修正 | IDE: Fix IME unintended message submission with Enter and Tab | fixed |
| IDE: ログイン画面に「ターミナルで開く」リンクを追加 | IDE: Add "Open in Terminal" link in login screen | added |
| 未処理の OAuth 有効期限切れ 401 API エラーを修正 | Fix unhandled OAuth expiration 401 API errors | fixed |
| SDK: 重複メッセージを防ぐため SDKUserMessageReplay.isReplay を追加 | SDK: Added SDKUserMessageReplay.isReplay to prevent duplicate messages | added |

## 2.0.1

| 日本語 | English | Category |
|--------|---------|----------|
| Bedrock と Vertex で Sonnet 4.5 のデフォルトモデル設定変更をスキップ | Skip Sonnet 4.5 default model setting change for Bedrock and Vertex | changed |
| 各種バグ修正とプレゼンテーション改善 | Various bug fixes and presentation improvements | fixed |

## 2.0.0

| 日本語 | English | Category |
|--------|---------|----------|
| VS Code ネイティブ拡張機能を追加 | New native VS Code extension | added |
| アプリ全体の UI を刷新 | Fresh coat of paint throughout the whole app | changed |
| `/rewind` でコード変更を巻き戻す会話機能を追加 | /rewind a conversation to undo code changes | added |
| `/usage` コマンドでプラン制限を確認可能に | /usage command to see plan limits | added |
| Tab キーで思考表示を切り替え（セッション間で保持） | Tab to toggle thinking (sticky across sessions) | added |
| Ctrl-R で履歴検索が可能に | Ctrl-R to search history | added |
| 未リリースの claude config コマンドを追加 | Unshipped claude config command | added |
| フック機能で PostToolUse の 'tool_use' ids が 'tool_result' ブロックなしで見つかるエラーを削減 | Hooks: Reduced PostToolUse 'tool_use' ids were found without 'tool_result' blocks errors | improved |
| Claude Code SDK を Claude Agent SDK に名称変更 | SDK: The Claude Code SDK is now the Claude Agent SDK | changed |
| `--agents` フラグでサブエージェントを動的に追加可能に | Add subagents dynamically with `--agents` flag | added |

---

## 1.0.x

---

## 1.0.126

| 日本語 | English | Category |
|--------|---------|----------|
| Bedrock と Vertex で /context コマンドを有効化 | Enable /context command for Bedrock and Vertex | added |
| HTTP ベースの OpenTelemetry エクスポーターに mTLS サポートを追加 | Add mTLS support for HTTP-based OpenTelemetry exporters | added |

## 1.0.124

| 日本語 | English | Category |
|--------|---------|----------|
| BashTool でログインシェルをスキップする `CLAUDE_BASH_NO_LOGIN` 環境変数（1 または true）に対応 | Set `CLAUDE_BASH_NO_LOGIN` environment variable to 1 or true to to skip login shell for BashTool | added |
| Bedrock と Vertex の環境変数がすべての文字列を真と評価する不具合を修正 | Fix Bedrock and Vertex environment variables evaluating all strings as truthy | fixed |
| 許可が拒否された際に許可されたツールのリストを Claude に通知しないように変更 | No longer inform Claude of the list of allowed tools when permission is denied | changed |
| Bash ツールの権限チェックにおけるセキュリティ脆弱性を修正 | Fixed security vulnerability in Bash tool permission checks | fixed |
| 大きなファイルに対する VSCode 拡張機能のパフォーマンスを改善 | Improved VSCode extension performance for large files | improved |

## 1.0.123

| 日本語 | English | Category |
|--------|---------|----------|
| Bash パーミッションルールが出力リダイレクションのマッチングに対応（例: `Bash(python:*)` が `python script.py > output.txt` にマッチ） | Bash permission rules now support output redirections when matching (e.g., `Bash(python:*)` matches `python script.py > output.txt`) | improved |
| "don't think" などの否定表現で思考モードが誤って起動する問題を修正 | Fixed thinking mode triggering on negation phrases like "don't think" | fixed |
| トークンストリーミング中のレンダリングパフォーマンス低下を修正 | Fixed rendering performance degradation during token streaming | fixed |
| スラッシュコマンドを呼び出し可能にする SlashCommand ツールを追加 https://code.claude.com/docs/en/slash-commands#SlashCommand-tool | Added SlashCommand tool, which enables Claude to invoke your slash commands. https://code.claude.com/docs/en/slash-commands#SlashCommand-tool | added |
| BashTool 環境スナップショットのロギングを強化 | Enhanced BashTool environment snapshot logging | improved |
| ヘッドレスモードで会話を再開した際に思考モードが不必要に有効化される問題を修正 | Fixed a bug where resuming a conversation in headless mode would sometimes enable thinking unnecessarily | fixed |
| --debug ログをファイルに移行し、tail やフィルタリングを容易に | Migrated --debug logging to a file, to enable easy tailing & filtering | improved |

## 1.0.120

| 日本語 | English | Category |
|--------|---------|----------|
| 大きなプロンプト入力時に顕著だった入力遅延を修正 | Fix input lag during typing, especially noticeable with large prompts | fixed |
| VSCode 拡張のコマンドレジストリとセッションダイアログのユーザー体験を改善 | Improved VSCode extension command registry and sessions dialog user experience | improved |
| セッションダイアログの応答性と視覚的フィードバックを強化 | Enhanced sessions dialog responsiveness and visual feedback | improved |
| worktree サポートチェックを削除し IDE 互換性の問題を修正 | Fixed IDE compatibility issue by removing worktree support check | fixed |
| Bash ツールのパーミッションチェックがプレフィックスマッチングで回避される脆弱性を修正 | Fixed security vulnerability where Bash tool permission checks could be bypassed using prefix matching | fixed |

## 1.0.119

| 日本語 | English | Category |
|--------|---------|----------|
| 対話モード開始時に Windows でプロセスが視覚的にフリーズする問題を修正 | Fix Windows issue where process visually freezes on entering interactive mode | fixed |
| MCP サーバーの動的ヘッダーを headersHelper 設定でサポート | Support dynamic headers for MCP servers via headersHelper configuration | added |
| ヘッドレスセッションで思考モードが動作しない問題を修正 | Fix thinking mode not working in headless sessions | fixed |
| スラッシュコマンドが許可ツールを置き換えではなく更新するように修正 | Fix slash commands now properly update allowed tools instead of replacing them | fixed |

## 1.0.117

| 日本語 | English | Category |
|--------|---------|----------|
| Ctrl-R による履歴検索を追加し、bash/zsh のように以前のコマンドを呼び出せるように対応 | Add Ctrl-R history search to recall previous commands like bash/zsh | added |
| 入力中のラグを修正（特に Windows 環境） | Fix input lag while typing, especially on Windows | fixed |
| acceptEdits モードで sed コマンドを自動許可コマンドに追加 | Add sed command to auto-allowed commands in acceptEdits mode | added |
| Windows の PATH 比較をドライブレターに対して大文字小文字を区別しないよう修正 | Fix Windows PATH comparison to be case-insensitive for drive letters | fixed |
| /add-dir の出力に権限管理のヒントを追加 | Add permissions management hint to /add-dir output | added |

## 1.0.115

| 日本語 | English | Category |
|--------|---------|----------|
| 思考モードの表示を視覚効果の強化により改善 | Improve thinking mode display with enhanced visual effects | improved |
| プロンプトで /t を入力して一時的に思考モードを無効化可能に | Type /t to temporarily disable thinking mode in your prompt | added |
| glob および grep ツールのパス検証を改善 | Improve path validation for glob and grep tools | improved |
| ツール実行後フックの出力を簡潔化し視覚的なノイズを削減 | Show condensed output for post-tool hooks to reduce visual clutter | improved |
| ローディング状態完了時の視覚フィードバックを修正 | Fix visual feedback when loading state completes | fixed |
| 権限リクエストダイアログの UI 一貫性を改善 | Improve UI consistency for permission request dialogs | improved |

## 1.0.113

| 日本語 | English | Category |
|--------|---------|----------|
| インタラクティブモードでのパイプ入力を非推奨化 | Deprecated piped input in interactive mode | changed |
| トランスクリプト切り替えのキーバインドを Ctrl+R から Ctrl+O に変更 | Move Ctrl+R keybinding for toggling transcript to Ctrl+O | changed |

## 1.0.112

| 日本語 | English | Category |
|--------|---------|----------|
| トランスクリプトモード（Ctrl+R）：各アシスタントメッセージの生成に使用されたモデルを追加 | Transcript mode (Ctrl+R): Added the model used to generate each assistant message | added |
| 一部の Claude Max ユーザーが誤って Claude Pro ユーザーとして認識される問題を修正 | Addressed issue where some Claude Max users were incorrectly recognized as Claude Pro users | fixed |
| フック：SessionEnd フックに systemMessage サポートを追加 | Hooks: Added systemMessage support for SessionEnd hooks | added |
| スピナーチップを無効化する `spinnerTipsEnabled` 設定を追加 | Added `spinnerTipsEnabled` setting to disable spinner tips | added |
| IDE：各種改善とバグ修正 | IDE: Various improvements and bug fixes | improved |

## 1.0.111

| 日本語 | English | Category |
|--------|---------|----------|
| /model でモデル名の妥当性を検証 | /model now validates provided model names | added |
| 誤ったシェル構文解析が原因の Bash ツールのクラッシュを修正 | Fixed Bash tool crashes caused by malformed shell syntax parsing | fixed |

## 1.0.110

| 日本語 | English | Category |
|--------|---------|----------|
| /terminal-setup コマンドが WezTerm をサポート | /terminal-setup command now supports WezTerm | added |
| MCP: OAuth トークンを有効期限前に自動更新 | MCP: OAuth tokens now proactively refresh before expiration | improved |
| バックグラウンド Bash プロセスの信頼性の問題を修正 | Fixed reliability issues with background Bash processes | fixed |

## 1.0.109

| 日本語 | English | Category |
|--------|---------|----------|
| SDK: `--include-partial-messages` CLI フラグによる部分メッセージストリーミングサポートを追加 | SDK: Added partial message streaming support via `--include-partial-messages` CLI flag | added |

## 1.0.106

| 日本語 | English | Category |
|--------|---------|----------|
| Windows: パス権限マッチングを修正し、POSIX 形式（例: `Read(//c/Users/...)`）を一貫して使用するように改善 | Windows: Fixed path permission matching to consistently use POSIX format (e.g., `Read(//c/Users/...)`) | fixed |

## 1.0.97

| 日本語 | English | Category |
|--------|---------|----------|
| 設定: /doctor でパーミッションルール構文の検証と修正提案に対応 | Settings: /doctor now validates permission rule syntax and suggests corrections | improved |

## 1.0.94

| 日本語 | English | Category |
|--------|---------|----------|
| Vertex: サポートされているモデルのグローバルエンドポイントに対応 | Vertex: add support for global endpoints for supported models | added |
| /memory コマンドでインポートされたすべてのメモリファイルの直接編集が可能に | /memory command now allows direct editing of all imported memory files | improved |
| SDK: コールバックとしてカスタムツールを追加 | SDK: Add custom tools as callbacks | added |
| /todos コマンドで現在の TODO アイテムを一覧表示する機能を追加 | Added /todos command to list current todo items | added |

## 1.0.93

| 日本語 | English | Category |
|--------|---------|----------|
| Windows: クリップボードからの画像貼り付け用に alt + v ショートカットを追加 | Windows: Add alt + v shortcut for pasting images from clipboard | added |
| NO_PROXY 環境変数に対応し特定のホスト名・IP のプロキシをバイパス | Support NO_PROXY environment variable to bypass proxy for specified hostnames and IPs | added |

## 1.0.90

| 日本語 | English | Category |
|--------|---------|----------|
| 設定ファイルの変更を即座に反映（再起動不要） | Settings file changes take effect immediately - no restart required | improved |

## 1.0.88

| 日本語 | English | Category |
|--------|---------|----------|
| 「OAuth 認証は現在サポートされていません」エラーを修正 | Fixed issue causing "OAuth authentication is currently not supported" | fixed |
| ステータスライン入力に `exceeds_200k_tokens` を追加 | Status line input now includes `exceeds_200k_tokens` | added |
| /cost コマンドの誤った使用量トラッキングを修正 | Fixed incorrect usage tracking in /cost. | fixed |
| モデルエイリアス opusplan、opus、sonnet を制御するための `ANTHROPIC_DEFAULT_SONNET_MODEL` および `ANTHROPIC_DEFAULT_OPUS_MODEL` を導入 | Introduced `ANTHROPIC_DEFAULT_SONNET_MODEL` and `ANTHROPIC_DEFAULT_OPUS_MODEL` for controlling model aliases opusplan, opus, and sonnet. | added |
| Bedrock: デフォルトの Sonnet モデルを Sonnet 4 に更新 | Bedrock: Updated default Sonnet model to Sonnet 4 | changed |

## 1.0.86

| 日本語 | English | Category |
|--------|---------|----------|
| ユーザーがコンテキスト問題をセルフデバッグできるよう /context を追加 | Added /context to help users self-serve debug context issues | added |
| SDK: すべてのSDKメッセージにUUIDサポートを追加 | SDK: Added UUID support for all SDK messages | added |
| SDK: ユーザーメッセージをstdoutに再生する `--replay-user-messages` を追加 | SDK: Added `--replay-user-messages` to replay user messages back to stdout | added |

## 1.0.85

| 日本語 | English | Category |
|--------|---------|----------|
| ステータスライン入力にセッションコスト情報を表示 | Status line input now includes session cost info | improved |
| SessionEnd フックを導入 | Hooks: Introduced SessionEnd hook | added |

## 1.0.84

| 日本語 | English | Category |
|--------|---------|----------|
| ネットワークが不安定な場合の tool_use/tool_result ID 不一致エラーを修正 | Fix tool_use/tool_result id mismatch error when network is unstable | fixed |
| タスク完了時に Claude がリアルタイムステアリングを無視することがある問題を修正 | Fix Claude sometimes ignoring real-time steering when wrapping up a task | fixed |
| @メンション: エージェント、出力スタイル、スラッシュコマンドの編集を容易にするため ~/.claude/* ファイルをサジェストに追加 | @-mention: Add ~/.claude/\* files to suggestions for easier agent, output style, and slash command editing | added |
| デフォルトでビルトイン ripgrep を使用（無効化する場合は USE_BUILTIN_RIPGREP=0 を設定） | Use built-in ripgrep by default; to opt out of this behavior, set USE_BUILTIN_RIPGREP=0 | changed |

## 1.0.83

| 日本語 | English | Category |
|--------|---------|----------|
| @-mention: パス内のスペースを含むファイルに対応 | @-mention: Support files with spaces in path | improved |
| 新しいシマリングスピナー | New shimmering spinner | added |

## 1.0.82

| 日本語 | English | Category |
|--------|---------|----------|
| SDK: リクエストのキャンセル機能に対応 | SDK: Add request cancellation support | added |
| SDK: カスタムパスを検索する additionalDirectories オプションを追加し、スラッシュコマンドの処理を改善 | SDK: New additionalDirectories option to search custom paths, improved slash command processing | improved |
| Settings: .claude/settings.json の無効なフィールドを防ぐバリデーションを追加 | Settings: Validation prevents invalid fields in .claude/settings.json files | added |
| MCP: ツール名の一貫性を改善 | MCP: Improve tool name consistency | improved |
| Bash: 大きなファイルを自動読み込み時にクラッシュする問題を修正 | Bash: Fix crash when Claude tries to automatically read large files | fixed |

## 1.0.81

| 日本語 | English | Category |
|--------|---------|----------|
| 出力スタイルをリリース。「Explanatory」「Learning」の教育的スタイルを組み込み。ドキュメント: https://code.claude.com/docs/en/output-styles | Released output styles, including new built-in educational output styles "Explanatory" and "Learning". Docs: https://code.claude.com/docs/en/output-styles | added |
| カスタムエージェントファイルが解析不能な場合の読み込みを修正 | Agents: Fix custom agent loading when agent files are unparsable | fixed |

## 1.0.80

| 日本語 | English | Category |
|--------|---------|----------|
| UI改善: カスタムサブエージェントの色のテキストコントラストとスピナーレンダリングの問題を修正 | UI improvements: Fix text contrast for custom subagent colors and spinner rendering issues | improved |

## 1.0.77

| 日本語 | English | Category |
|--------|---------|----------|
| Bash ツール: ヒアドキュメントと複数行文字列のエスケープを修正し、標準エラー出力リダイレクト処理を改善 | Bash tool: Fix heredoc and multiline string escaping, improve stderr redirection handling | fixed |
| SDK: セッションサポートと権限拒否トラッキングを追加 | SDK: Add session support and permission denial tracking | added |
| 会話の要約時におけるトークン上限エラーを修正 | Fix token limit errors in conversation summarization | fixed |
| Opus プランモード: `/model` コマンドに Opus をプランモードのみで実行し、それ以外は Sonnet を使用する設定を追加 | Opus Plan Mode: New setting in `/model` to run Opus only in plan mode, Sonnet otherwise | added |

## 1.0.73

| 日本語 | English | Category |
|--------|---------|----------|
| MCP: 複数の設定ファイルを `--mcp-config file1.json file2.json` でサポート | MCP: Support multiple config files with `--mcp-config file1.json file2.json` | added |
| MCP: OAuth 認証フロー中に Esc キーでキャンセル可能に | MCP: Press Esc to cancel OAuth authentication flows | added |
| Bash: コマンド検証を改善し、誤ったセキュリティ警告を削減 | Bash: Improved command validation and reduced false security warnings | improved |
| UI: スピナーアニメーションとステータスラインの視覚的階層を強化 | UI: Enhanced spinner animations and status line visual hierarchy | improved |
| Linux: Alpine および musl ベースのディストリビューションをサポート（ripgrep の別途インストールが必要） | Linux: Added support for Alpine and musl-based distributions (requires separate ripgrep installation) | added |

## 1.0.72

| 日本語 | English | Category |
|--------|---------|----------|
| `/permissions` で特定のツール使用時に常に確認を求めるよう設定可能に | Ask permissions: have Claude Code always ask for confirmation to use specific tools with /permissions | added |

## 1.0.71

| 日本語 | English | Category |
|--------|---------|----------|
| バックグラウンドコマンド: 任意の Bash コマンドをバックグラウンドで実行可能に（Ctrl-b）、Claude が作業を継続できる（開発サーバーやログ監視などに有用） | Background commands: (Ctrl-b) to run any Bash command in the background so Claude can keep working (great for dev servers, tailing logs, etc.) | added |
| ステータスラインのカスタマイズ: /statusline でターミナルプロンプトを Claude Code に追加可能 | Customizable status line: add your terminal prompt to Claude Code with /statusline | added |

## 1.0.70

| 日本語 | English | Category |
|--------|---------|----------|
| 大規模なコンテキストにおけるメッセージレンダリングのパフォーマンスを最適化 | Performance: Optimized message rendering for better performance with large contexts | improved |
| Windows環境でのネイティブファイル検索、ripgrep、サブエージェント機能を修正 | Windows: Fixed native file search, ripgrep, and subagent functionality | fixed |
| スラッシュコマンド引数での@メンション記法に対応 | Added support for @-mentions in slash command arguments | added |

## 1.0.69

| 日本語 | English | Category |
|--------|---------|----------|
| Opus をバージョン 4.1 にアップグレード | Upgraded Opus to version 4.1 | changed |

## 1.0.68

| 日本語 | English | Category |
|--------|---------|----------|
| `/pr-comments` などの特定のコマンドで誤ったモデル名が使用されていた問題を修正 | Fix incorrect model names being used for certain commands like `/pr-comments` | fixed |
| Windows: allow/deny ツールとプロジェクト信頼の権限チェックを改善（`.claude.json` に新しいプロジェクトエントリが作成される場合あり。必要に応じて history フィールドを手動でマージ） | Windows: improve permissions checks for allow / deny tools and project trust. This may create a new project entry in `.claude.json` - manually merge the history field if desired. | improved |
| Windows: pnpm などのコマンド実行時に「No such file or directory」エラーが発生する問題を解消するため、サブプロセスの起動処理を改善 | Windows: improve sub-process spawning to eliminate "No such file or directory" when running commands like pnpm | improved |
| /doctor コマンドに CLAUDE.md と MCP ツールコンテキストを追加し、セルフサービスデバッグ機能を強化 | Enhanced /doctor command with CLAUDE.md and MCP tool context for self-serve debugging | improved |
| SDK: ツール確認用の canUseTool コールバックサポートを追加 | SDK: Added canUseTool callback support for tool confirmation | added |
| `disableAllHooks` 設定を追加 | Added `disableAllHooks` setting | added |
| 大規模リポジトリにおけるファイル候補表示のパフォーマンスを改善 | Improved file suggestions performance in large repos | improved |

## 1.0.65

| 日本語 | English | Category |
|--------|---------|----------|
| IDE: 診断の接続安定性の問題とエラー処理を修正 | IDE: Fixed connection stability issues and error handling for diagnostics | fixed |
| Windows: .bashrc ファイルがないユーザーのシェル環境セットアップを修正 | Windows: Fixed shell environment setup for users without .bashrc files | fixed |

## 1.0.64

| 日本語 | English | Category |
|--------|---------|----------|
| Agents: モデルのカスタマイズに対応 - エージェントが使用するモデルを指定可能 | Agents: Added model customization support - you can now specify which model an agent should use | added |
| Agents: 再帰的エージェントツールへの意図しないアクセスを修正 | Agents: Fixed unintended access to the recursive agent tool | fixed |
| Hooks: フックJSON出力に systemMessage フィールドを追加し、警告とコンテキストの表示に対応 | Hooks: Added systemMessage field to hook JSON output for displaying warnings and context | added |
| SDK: 複数ターン会話におけるユーザー入力の追跡を修正 | SDK: Fixed user input tracking across multi-turn conversations | fixed |
| ファイル検索と@メンション候補に隠しファイルを追加 | Added hidden files to file search and @-mention suggestions | added |

## 1.0.63

| 日本語 | English | Category |
|--------|---------|----------|
| Windows: ファイル検索、@agent メンション、カスタムスラッシュコマンドの動作を修正 | Windows: Fixed file search, @agent mentions, and custom slash commands functionality | fixed |

## 1.0.62

| 日本語 | English | Category |
|--------|---------|----------|
| カスタムエージェント用の @-mention サポートと入力補完を追加。@<your-custom-agent> で呼び出し可能 | Added @-mention support with typeahead for custom agents. @<your-custom-agent> to invoke it | added |
| 新規セッション初期化用の SessionStart フックを追加 | Hooks: Added SessionStart hook for new session initialization | added |
| /add-dir コマンドがディレクトリパスの入力補完に対応 | /add-dir command now supports typeahead for directory paths | improved |
| ネットワーク接続チェックの信頼性を改善 | Improved network connectivity check reliability | improved |

## 1.0.61

| 日本語 | English | Category |
|--------|---------|----------|
| トランスクリプトモード（Ctrl+R）: トランスクリプトモードを終了するキーを中断ではなくEscに変更 | Transcript mode (Ctrl+R): Changed Esc to exit transcript mode rather than interrupt | changed |
| 設定: JSONファイルから設定を読み込む `--settings` フラグを追加 | Settings: Added `--settings` flag to load settings from a JSON file | added |
| 設定: シンボリックリンクである設定ファイルパスの解決を修正 | Settings: Fixed resolution of settings files paths that are symlinks | fixed |
| OTEL: 認証変更後に誤った組織が報告される問題を修正 | OTEL: Fixed reporting of wrong organization after authentication changes | fixed |
| スラッシュコマンド: Bashでのallowed-toolsの権限チェックを修正 | Slash commands: Fixed permissions checking for allowed-tools with Bash | fixed |
| IDE: VSCode MacOSで⌘+Vによる画像貼り付けに対応 | IDE: Added support for pasting images in VSCode MacOS using ⌘+V | added |
| IDE: IDE自動接続を無効化する `CLAUDE_CODE_AUTO_CONNECT_IDE=false` を追加 | IDE: Added `CLAUDE_CODE_AUTO_CONNECT_IDE=false` for disabling IDE auto-connection | added |
| Claude CodeによるClaude及びユーザー提供のシェルコマンドをラップする `CLAUDE_CODE_SHELL_PREFIX` を追加 | Added `CLAUDE_CODE_SHELL_PREFIX` for wrapping Claude and user-provided shell commands run by Claude Code | added |

## 1.0.60

| 日本語 | English | Category |
|--------|---------|----------|
| 特定タスク用のカスタムサブエージェントの作成に対応。/agents で開始 | You can now create custom subagents for specialized tasks! Run /agents to get started | added |

## 1.0.59

| 日本語 | English | Category |
|--------|---------|----------|
| SDK: ツール確認サポートを追加（canUseTool コールバック） | SDK: Added tool confirmation support with canUseTool callback | added |
| SDK: 生成されたプロセスの環境変数を指定可能に | SDK: Allow specifying env for spawned process | added |
| Hooks: PermissionDecision をフックに公開（「ask」を含む） | Hooks: Exposed PermissionDecision to hooks (including "ask") | added |
| Hooks: UserPromptSubmit が高度な JSON 出力で additionalContext に対応 | Hooks: UserPromptSubmit now supports additionalContext in advanced JSON output | improved |
| Max ユーザーが Opus を指定しても Sonnet にフォールバックする問題を修正 | Fixed issue where some Max users that specified Opus would still see fallback to Sonnet | fixed |

## 1.0.58

| 日本語 | English | Category |
|--------|---------|----------|
| PDF ファイルの読み取りに対応 | Added support for reading PDFs | added |
| MCP: 'claude mcp list' でのサーバーヘルスステータス表示を改善 | MCP: Improved server health status display in 'claude mcp list' | improved |
| Hooks: フックコマンド用の CLAUDE_PROJECT_DIR 環境変数を追加 | Hooks: Added CLAUDE_PROJECT_DIR env var for hook commands | added |

## 1.0.57

| 日本語 | English | Category |
|--------|---------|----------|
| スラッシュコマンドでのモデル指定に対応 | Added support for specifying a model in slash commands | added |
| 許可されたツールを Claude が理解しやすくするため、権限メッセージを改善 | Improved permission messages to help Claude understand allowed tools | improved |
| ターミナルラップにおいて bash 出力の末尾改行を削除する不具合を修正 | Fix: Remove trailing newlines from bash output in terminal wrapping | fixed |

## 1.0.56

| 日本語 | English | Category |
|--------|---------|----------|
| Windows: ターミナル VT モード対応の Node.js バージョンで shift+tab によるモード切り替えを有効化 | Windows: Enabled shift+tab for mode switching on versions of Node.js that support terminal VT mode | added |
| WSL IDE 検出の修正 | Fixes for WSL IDE detection | fixed |
| awsRefreshHelper が .aws ディレクトリへの変更を検出できない問題を修正 | Fix an issue causing awsRefreshHelper changes to .aws directory not to be picked up | fixed |

## 1.0.55

| 日本語 | English | Category |
|--------|---------|----------|
| Opus 4 および Sonnet 4 モデルの知識カットオフを明確化 | Clarified knowledge cutoff for Opus 4 and Sonnet 4 models | improved |
| Windows: Ctrl+Z によるクラッシュを修正 | Windows: fixed Ctrl+Z crash | fixed |
| SDK: エラーログのキャプチャ機能を追加 | SDK: Added ability to capture error logging | added |
| プリントモードでシステムプロンプトを上書きする --system-prompt-file オプションを追加 | Add --system-prompt-file option to override system prompt in print mode | added |

## 1.0.54

| 日本語 | English | Category |
|--------|---------|----------|
| Hooks: UserPromptSubmit フックとカレントディレクトリをフック入力に追加 | Hooks: Added UserPromptSubmit hook and the current working directory to hook inputs | added |
| カスタムスラッシュコマンド: フロントマターに argument-hint を追加 | Custom slash commands: Added argument-hint to frontmatter | added |
| Windows: OAuth でポート 45454 を使用し、ブラウザ URL を適切に構築 | Windows: OAuth uses port 45454 and properly constructs browser URL | fixed |
| Windows: モード切り替えを alt + m に変更し、プランモードを適切にレンダリング | Windows: mode switching now uses alt + m, and plan mode renders properly | fixed |
| Shell: ファイル関連エラーを修正するためインメモリシェルスナップショットに切り替え | Shell: Switch to in-memory shell snapshot to fix file-related errors | fixed |

## 1.0.53

| 日本語 | English | Category |
|--------|---------|----------|
| @メンションのファイル切り詰めを100行から2000行に更新 | Updated @-mention file truncation from 100 lines to 2000 lines | changed |
| AWS トークン更新用のヘルパースクリプト設定を追加: awsAuthRefresh（aws sso login のようなフォアグラウンド操作用）と awsCredentialExport（STS 形式のレスポンスを返すバックグラウンド操作用） | Add helper script settings for AWS token refresh: awsAuthRefresh (for foreground operations like aws sso login) and awsCredentialExport (for background operation with STS-like response). | added |

## 1.0.52

| 日本語 | English | Category |
|--------|---------|----------|
| MCPサーバー指示のサポートを追加 | Added support for MCP server instructions | added |

## 1.0.51

| 日本語 | English | Category |
|--------|---------|----------|
| ネイティブWindowsに対応（Git for Windowsが必要） | Added support for native Windows (requires Git for Windows) | added |
| 環境変数AWS_BEARER_TOKEN_BEDROCKによるBedrock APIキーに対応 | Added support for Bedrock API keys through environment variable AWS_BEARER_TOKEN_BEDROCK | added |
| 設定: /doctorで無効な設定ファイルの識別と修正が可能に | Settings: /doctor can now help you identify and fix invalid setting files | added |
| `--append-system-prompt`を対話モードでも使用可能に（--print/-pのみでなく） | `--append-system-prompt` can now be used in interactive mode, not just --print/-p. | changed |
| 自動圧縮警告の閾値を60%から80%に引き上げ | Increased auto-compact warning threshold from 60% to 80% | changed |
| シェルスナップショットでスペースを含むユーザーディレクトリの処理問題を修正 | Fixed an issue with handling user directories with spaces for shell snapshots | fixed |
| OTELリソースにos.type、os.version、host.arch、wsl.version（WSL上で実行時）を含めるよう変更 | OTEL resource now includes os.type, os.version, host.arch, and wsl.version (if running on Windows Subsystem for Linux) | changed |
| カスタムスラッシュコマンド: サブディレクトリ内のユーザーレベルコマンドの問題を修正 | Custom slash commands: Fixed user-level commands in subdirectories | fixed |
| プランモード: サブタスクから拒否されたプランが破棄される問題を修正 | Plan mode: Fixed issue where rejected plan from sub-task would get discarded | fixed |

## 1.0.48

| 日本語 | English | Category |
|--------|---------|----------|
| v1.0.45 で起動時にアプリがフリーズする不具合を修正 | Fixed a bug in v1.0.45 where the app would sometimes freeze on launch | fixed |
| Bash ツールにコマンド出力の最後の5行に基づく進行状況メッセージを追加 | Added progress messages to Bash tool based on the last 5 lines of command output | added |
| MCP サーバー設定での変数展開サポートを追加 | Added expanding variables support for MCP server configuration | added |
| Bash ツール呼び出しの信頼性向上のため、シェルスナップショットを /tmp から ~/.claude に移動 | Moved shell snapshots from /tmp to ~/.claude for more reliable Bash tool calls | changed |
| Claude Code が WSL で動作する際の IDE 拡張機能パス処理を改善 | Improved IDE extension path handling when Claude Code runs in WSL | improved |
| Hooks: PreCompact フックを追加 | Hooks: Added a PreCompact hook | added |
| Vim モード: c、f/F、t/T を追加 | Vim mode: Added c, f/F, t/T | added |

## 1.0.45

| 日本語 | English | Category |
|--------|---------|----------|
| Search（Grep）ツールを再設計し、新しい入力パラメータと機能を追加 | Redesigned Search (Grep) tool with new tool input parameters and features | added |
| notebook ファイルの IDE diff を無効化し「1000ms 待機後のタイムアウト」エラーを修正 | Disabled IDE diffs for notebook files, fixing "Timeout waiting after 1000ms" error | fixed |
| アトミック書き込みを強制し、設定ファイル破損の問題を修正 | Fixed config file corruption issue by enforcing atomic writes | fixed |
| プロンプト入力の undo を Ctrl+\_ に変更し、既存の Ctrl+U 動作の破壊を回避（zsh の undo ショートカットに合わせる） | Updated prompt input undo to Ctrl+\_ to avoid breaking existing Ctrl+U behavior, matching zsh's undo shortcut | changed |
| Stop Hooks: /clear 後のトランスクリプトパスを修正し、ツール呼び出しでループが終了する際のトリガーを修正 | Stop Hooks: Fixed transcript path after /clear and fixed triggering when loop ends with tool call | fixed |
| カスタムスラッシュコマンド: サブディレクトリに基づくコマンド名の名前空間を復元（例: .claude/commands/frontend/component.md は /component ではなく /frontend:component になる） | Custom slash commands: Restored namespacing in command names based on subdirectories. For example, .claude/commands/frontend/component.md is now /frontend:component, not /component. | fixed |

## 1.0.44

| 日本語 | English | Category |
|--------|---------|----------|
| 会話を共有するための /export コマンドを追加 | New /export command lets you quickly export a conversation for sharing | added |
| MCP の resource_link ツール結果に対応 | MCP: resource_link tool results are now supported | added |
| MCP のツールアノテーションとツールタイトルを /mcp view に表示 | MCP: tool annotations and tool titles now display in /mcp view | improved |
| Ctrl+Z を Claude Code の一時停止に変更し、fg で再開可能に。プロンプト入力の取り消しは Ctrl+U に変更 | Changed Ctrl+Z to suspend Claude Code. Resume by running `fg`. Prompt input undo is now Ctrl+U. | changed |

## 1.0.43

| 日本語 | English | Category |
|--------|---------|----------|
| テーマセレクターの過度な保存を修正 | Fixed a bug where the theme selector was saving excessively | fixed |
| Hooks に EPIPE システムエラーのハンドリングを追加 | Hooks: Added EPIPE system error handling | added |

## 1.0.42

| 日本語 | English | Category |
|--------|---------|----------|
| `/add-dir` コマンドにチルダ（`~`）展開のサポートを追加 | Added tilde (`~`) expansion support to `/add-dir` command | added |

## 1.0.41

| 日本語 | English | Category |
|--------|---------|----------|
| Hooks: Stop フックのトリガーを Stop と SubagentStop に分割 | Hooks: Split Stop hook triggering into Stop and SubagentStop | changed |
| Hooks: コマンドごとのオプションタイムアウト設定を有効化 | Hooks: Enabled optional timeout configuration for each command | added |
| Hooks: フック入力に "hook_event_name" を追加 | Hooks: Added "hook_event_name" to hook input | added |
| MCP ツールがツールリストに二重表示されるバグを修正 | Fixed a bug where MCP tools would display twice in tool list | fixed |
| `tool_decision` イベントの Bash ツール用に新しいツールパラメータ JSON を追加 | New tool parameters JSON for Bash tool in `tool_decision` event | added |

## 1.0.40

| 日本語 | English | Category |
|--------|---------|----------|
| `NODE_EXTRA_CA_CERTS` が設定されていた場合に UNABLE_TO_GET_ISSUER_CERT_LOCALLY エラーで API 接続に失敗するバグを修正 | Fixed a bug causing API connection errors with UNABLE_TO_GET_ISSUER_CERT_LOCALLY if `NODE_EXTRA_CA_CERTS` was set | fixed |

## 1.0.39

| 日本語 | English | Category |
|--------|---------|----------|
| OpenTelemetry ログにアクティブ時間メトリックを追加 | New Active Time metric in OpenTelemetry logging | added |

## 1.0.38

| 日本語 | English | Category |
|--------|---------|----------|
| フックをリリース。コミュニティからの意見（https://github.com/anthropics/claude-code/issues/712）に感謝。ドキュメント: https://code.claude.com/docs/en/hooks | Released hooks. Special thanks to community input in https://github.com/anthropics/claude-code/issues/712. Docs: https://code.claude.com/docs/en/hooks | added |

## 1.0.37

| 日本語 | English | Category |
|--------|---------|----------|
| ANTHROPIC_AUTH_TOKEN や apiKeyHelper 経由での `Proxy-Authorization` ヘッダー設定機能を削除 | Remove ability to set `Proxy-Authorization` header via ANTHROPIC_AUTH_TOKEN or apiKeyHelper | changed |

## 1.0.36

| 日本語 | English | Category |
|--------|---------|----------|
| Web検索で今日の日付を文脈に考慮するように対応 | Web search now takes today's date into context | improved |
| 終了時にstdio MCP serverが正常に終了しない不具合を修正 | Fixed a bug where stdio MCP servers were not terminating properly on exit | fixed |

## 1.0.35

| 日本語 | English | Category |
|--------|---------|----------|
| MCP OAuth 認証サーバーの自動検出に対応 | Added support for MCP OAuth Authorization Server discovery | added |

## 1.0.34

| 日本語 | English | Category |
|--------|---------|----------|
| MaxListenersExceededWarning メッセージを引き起こすメモリリークを修正 | Fixed a memory leak causing a MaxListenersExceededWarning message to appear | fixed |

## 1.0.33

| 日本語 | English | Category |
|--------|---------|----------|
| セッションID対応によるロギング機能の改善 | Improved logging functionality with session ID support | improved |
| プロンプト入力のアンドゥ機能を追加（Ctrl+Zとvimの'u'コマンド） | Added prompt input undo functionality (Ctrl+Z and vim 'u' command) | added |
| プランモードの改善 | Improvements to plan mode | improved |

## 1.0.32

| 日本語 | English | Category |
|--------|---------|----------|
| litellm の loopback 設定を更新 | Updated loopback config for litellm | changed |
| ログイン選択画面をバイパスする forceLoginMethod 設定を追加 | Added forceLoginMethod setting to bypass login selection screen | added |

## 1.0.31

| 日本語 | English | Category |
|--------|---------|----------|
| 不正なJSONを含む~/.claude.jsonがリセットされるバグを修正 | Fixed a bug where ~/.claude.json would get reset when file contained invalid JSON | fixed |

## 1.0.30

| 日本語 | English | Category |
|--------|---------|----------|
| カスタムスラッシュコマンド：bash 出力の実行、ファイルの @-メンション、思考キーワードによる思考モードの有効化 | Custom slash commands: Run bash output, @-mention files, enable thinking with thinking keywords | added |
| ファイル名マッチングによるファイルパス自動補完の改善 | Improved file path autocomplete with filename matching | improved |
| Ctrl-r モードにタイムスタンプを追加し、Ctrl-c の処理を修正 | Added timestamps in Ctrl-r mode and fixed Ctrl-c handling | added |
| パイプと select を用いた複雑なフィルタに対応した jq 正規表現サポートの強化 | Enhanced jq regex support for complex filters with pipes and select | improved |

## 1.0.29

| 日本語 | English | Category |
|--------|---------|----------|
| カーソル移動とレンダリングでのCJK文字サポートを改善 | Improved CJK character support in cursor navigation and rendering | improved |

## 1.0.28

| 日本語 | English | Category |
|--------|---------|----------|
| スラッシュコマンド: 履歴ナビゲーション中のセレクター表示を修正 | Slash commands: Fix selector display during history navigation | fixed |
| API サイズ制限エラーを防ぐため、アップロード前に画像をリサイズ | Resizes images before upload to prevent API size limit errors | fixed |
| 設定ディレクトリに XDG_CONFIG_HOME サポートを追加 | Added XDG_CONFIG_HOME support to configuration directory | added |
| メモリ使用量のパフォーマンス最適化 | Performance optimizations for memory usage | improved |
| OpenTelemetry ロギングに新しい属性（terminal.type、language）を追加 | New attributes (terminal.type, language) in OpenTelemetry logging | added |

## 1.0.27

| 日本語 | English | Category |
|--------|---------|----------|
| Streamable HTTP MCP サーバーに対応 | Streamable HTTP MCP servers are now supported | added |
| リモート MCP サーバー（SSE および HTTP）で OAuth に対応 | Remote MCP servers (SSE and HTTP) now support OAuth | added |
| MCP リソースを @ メンションで参照可能に | MCP resources can now be @-mentioned | added |
| /resume スラッシュコマンドで Claude Code 内の会話を切り替え可能に | /resume slash command to switch conversations within Claude Code | added |

## 1.0.25

| 日本語 | English | Category |
|--------|---------|----------|
| スラッシュコマンド: "project" と "user" プレフィックスを説明欄に移動 | Slash commands: moved "project" and "user" prefixes to descriptions | changed |
| スラッシュコマンド: コマンド検出の信頼性を改善 | Slash commands: improved reliability for command discovery | improved |
| Ghostty のサポートを改善 | Improved support for Ghostty | improved |
| Web 検索の信頼性を改善 | Improved web search reliability | improved |

## 1.0.24

| 日本語 | English | Category |
|--------|---------|----------|
| /mcp の出力を改善 | Improved /mcp output | improved |
| 設定の配列がマージされずに上書きされるバグを修正 | Fixed a bug where settings arrays got overwritten instead of merged | fixed |

## 1.0.23

| 日本語 | English | Category |
|--------|---------|----------|
| TypeScript SDK をリリース: @anthropic-ai/claude-code をインポートして開始 | Released TypeScript SDK: import @anthropic-ai/claude-code to get started | added |
| Python SDK をリリース: pip install claude-code-sdk で開始 | Released Python SDK: pip install claude-code-sdk to get started | added |

## 1.0.22

| 日本語 | English | Category |
|--------|---------|----------|
| SDK: `total_cost` を `total_cost_usd` に名称変更 | SDK: Renamed `total_cost` to `total_cost_usd` | changed |

## 1.0.21

| 日本語 | English | Category |
|--------|---------|----------|
| タブベースインデントのファイル編集を改善 | Improved editing of files with tab-based indentation | improved |
| tool_result が一致しない tool_use エラーを修正 | Fix for tool_use without matching tool_result errors | fixed |
| Claude Code 終了後に stdio MCP サーバープロセスが残る不具合を修正 | Fixed a bug where stdio MCP server processes would linger after quitting Claude Code | fixed |

## 1.0.18

| 日本語 | English | Category |
|--------|---------|----------|
| 追加の作業ディレクトリを指定するための --add-dir CLI 引数を追加 | Added --add-dir CLI argument for specifying additional working directories | added |
| -p フラグなしでストリーミング入力サポートを追加 | Added streaming input support without require -p flag | added |
| 起動パフォーマンスとセッションストレージのパフォーマンスを改善 | Improved startup performance and session storage performance | improved |
| bash コマンドの作業ディレクトリを固定する CLAUDE_BASH_MAINTAIN_PROJECT_WORKING_DIR 環境変数を追加 | Added CLAUDE_BASH_MAINTAIN_PROJECT_WORKING_DIR environment variable to freeze working directory for bash commands | added |
| MCP サーバーツールの詳細表示（/mcp）を追加 | Added detailed MCP server tools display (/mcp) | added |
| MCP の認証と権限管理を改善 | MCP authentication and permission improvements | improved |
| MCP SSE 接続の切断時の自動再接続機能を追加 | Added auto-reconnection for MCP SSE connections on disconnect | added |
| ダイアログ表示時に貼り付けたコンテンツが失われる問題を修正 | Fixed issue where pasted content was lost when dialogs appeared | fixed |

## 1.0.17

| 日本語 | English | Category |
|--------|---------|----------|
| -p モードでサブタスクからのメッセージを出力（parent_tool_use_id プロパティを確認） | We now emit messages from sub-tasks in -p mode (look for the parent_tool_use_id property) | added |
| VS Code差分ツールが連続して素早く呼び出された際のクラッシュを修正 | Fixed crashes when the VS Code diff tool is invoked multiple times quickly | fixed |
| MCPサーバーリストのUI改善 | MCP server list UI improvements | improved |
| Claude Codeのプロセスタイトルを「node」から「claude」に変更 | Update Claude Code process title to display "claude" instead of "node" | changed |

## 1.0.11

| 日本語 | English | Category |
|--------|---------|----------|
| Claude Pro サブスクリプションでも Claude Code が利用可能に | Claude Code can now also be used with a Claude Pro subscription | added |
| Claude Max プランへのスムーズな切り替えのため /upgrade を追加 | Added /upgrade for smoother switching to Claude Max plans | added |
| API キーと Bedrock/Vertex/外部認証トークンからの認証 UI を改善 | Improved UI for authentication from API keys and Bedrock/Vertex/external auth tokens | improved |
| シェル設定のエラーハンドリングを改善 | Improved shell configuration error handling | improved |
| コンパクション時の TODO リスト処理を改善 | Improved todo list handling during compaction | improved |

## 1.0.10

| 日本語 | English | Category |
|--------|---------|----------|
| Markdown テーブルのサポートを追加 | Added markdown table support | added |
| ストリーミングパフォーマンスを改善 | Improved streaming performance | improved |

## 1.0.8

| 日本語 | English | Category |
|--------|---------|----------|
| CLOUD_ML_REGION 使用時の Vertex AI リージョンフォールバックを修正 | Fixed Vertex AI region fallback when using CLOUD_ML_REGION | fixed |
| デフォルトの otel 間隔を 1秒から 5秒に変更 | Increased default otel interval from 1s -> 5s | changed |
| MCP_TIMEOUT と MCP_TOOL_TIMEOUT が尊重されないエッジケースを修正 | Fixed edge cases where MCP_TIMEOUT and MCP_TOOL_TIMEOUT weren't being respected | fixed |
| 検索ツールが不必要に権限を要求していたリグレッションを修正 | Fixed a regression where search tools unnecessarily asked for permissions | fixed |
| 英語以外の言語での思考トリガーに対応 | Added support for triggering thinking non-English languages | added |
| コンパクト化 UI を改善 | Improved compacting UI | improved |

## 1.0.7

| 日本語 | English | Category |
|--------|---------|----------|
| `/allowed-tools` を `/permissions` にリネーム | Renamed /allowed-tools -> /permissions | changed |
| `.claude.json` の `allowedTools` と `ignorePatterns` を `settings.json` に移行 | Migrated allowedTools and ignorePatterns from .claude.json -> settings.json | changed |
| `claude config` コマンドを非推奨化し、`settings.json` の直接編集を推奨 | Deprecated claude config commands in favor of editing settings.json | changed |
| --print モードで --dangerously-skip-permissions が動作しないことがあるバグを修正 | Fixed a bug where --dangerously-skip-permissions sometimes didn't work in --print mode | fixed |
| `/install-github-app` のエラーハンドリングを改善 | Improved error handling for /install-github-app | improved |
| バグ修正、UI の洗練、ツールの信頼性向上 | Bugfixes, UI polish, and tool reliability improvements | fixed |

## 1.0.6

| 日本語 | English | Category |
|--------|---------|----------|
| タブインデントファイルの編集信頼性を改善 | Improved edit reliability for tab-indented files | improved |
| CLAUDE_CONFIG_DIR を全箇所で尊重 | Respect CLAUDE_CONFIG_DIR everywhere | changed |
| 不要なツール権限プロンプトを削減 | Reduced unnecessary tool permission prompts | improved |
| @file の先行入力でシンボリックリンクに対応 | Added support for symlinks in @file typeahead | added |
| バグ修正、UI 改良、ツール信頼性の改善 | Bugfixes, UI polish, and tool reliability improvements | improved |

## 1.0.4

| 日本語 | English | Category |
|--------|---------|----------|
| MCP ツールエラーが正しく解析されなかったバグを修正 | Fixed a bug where MCP tool errors weren't being parsed correctly | fixed |

## 1.0.1

| 日本語 | English | Category |
|--------|---------|----------|
| インタリーブ思考をオプトアウトする `DISABLE_INTERLEAVED_THINKING` を追加 | Added `DISABLE_INTERLEAVED_THINKING` to give users the option to opt out of interleaved thinking. | added |
| モデル参照をプロバイダー固有の名前（Bedrock は Sonnet 3.7、Console は Sonnet 4）で表示するよう改善 | Improved model references to show provider-specific names (Sonnet 3.7 for Bedrock, Sonnet 4 for Console) | improved |
| ドキュメントリンクと OAuth プロセスの説明を更新 | Updated documentation links and OAuth process descriptions | changed |

## 1.0.0

| 日本語 | English | Category |
|--------|---------|----------|
| Claude Code が正式リリース | Claude Code is now generally available | added |
| Sonnet 4 と Opus 4 モデルを導入 | Introducing Sonnet 4 and Opus 4 models | added |

---

## 0.2.x

---

## 0.2.125

| 日本語 | English | Category |
|--------|---------|----------|
| 破壊的変更: Bedrock ARN を `ANTHROPIC_MODEL` または `ANTHROPIC_SMALL_FAST_MODEL` に渡す際、エスケープされたスラッシュ（`%2F`）ではなく通常のスラッシュ（`/`）を使用する仕様に変更 | Breaking change: Bedrock ARN passed to `ANTHROPIC_MODEL` or `ANTHROPIC_SMALL_FAST_MODEL` should no longer contain an escaped slash (specify `/` instead of `%2F`) | changed |
| `DEBUG=true` を削除し、全リクエストのログ記録には `ANTHROPIC_LOG=debug` を使用するよう変更 | Removed `DEBUG=true` in favor of `ANTHROPIC_LOG=debug`, to log all requests | changed |

## 0.2.117

| 日本語 | English | Category |
|--------|---------|----------|
| 破壊的変更: --print の JSON 出力が新しいメタデータフィールド導入に向けてネストされたメッセージオブジェクトを返すように変更 | Breaking change: --print JSON output now returns nested message objects, for forwards-compatibility as we introduce new metadata fields | changed |
| settings.cleanupPeriodDays の導入 | Introduced settings.cleanupPeriodDays | added |
| CLAUDE_CODE_API_KEY_HELPER_TTL_MS 環境変数の導入 | Introduced CLAUDE_CODE_API_KEY_HELPER_TTL_MS env var | added |
| --debug モードを導入 | Introduced --debug mode | added |

## 0.2.108

| 日本語 | English | Category |
|--------|---------|----------|
| Claude の動作中にメッセージを送信してリアルタイムで誘導可能 | You can now send messages to Claude while it works to steer Claude in real-time | added |
| BASH_DEFAULT_TIMEOUT_MS と BASH_MAX_TIMEOUT_MS 環境変数を導入 | Introduced BASH_DEFAULT_TIMEOUT_MS and BASH_MAX_TIMEOUT_MS env vars | added |
| -p モードで thinking が動作しないバグを修正 | Fixed a bug where thinking was not working in -p mode | fixed |
| /cost コマンドのレポート機能の不具合を修正 | Fixed a regression in /cost reporting | fixed |
| MCP ウィザードインターフェースを非推奨化し他の MCP コマンドに移行 | Deprecated MCP wizard interface in favor of other MCP commands | changed |
| その他多数のバグ修正と改善 | Lots of other bugfixes and improvements | improved |

## 0.2.107

| 日本語 | English | Category |
|--------|---------|----------|
| CLAUDE.md ファイルから他のファイルをインポート可能に。./CLAUDE.md に @path/to/file.md を追加すると起動時に追加ファイルを読み込む | CLAUDE.md files can now import other files. Add @path/to/file.md to ./CLAUDE.md to load additional files on launch | added |

## 0.2.106

| 日本語 | English | Category |
|--------|---------|----------|
| MCP SSE サーバー設定でカスタムヘッダーを指定可能に | MCP SSE server configs can now specify custom headers | added |
| MCP 権限プロンプトが正しく表示されないバグを修正 | Fixed a bug where MCP permission prompt didn't always show correctly | fixed |

## 0.2.105

| 日本語 | English | Category |
|--------|---------|----------|
| Web 検索に対応 | Claude can now search the web | added |
| システムおよびアカウントステータスを /status に移動 | Moved system & account status to /status | other |
| Vim のワード移動キーバインディングを追加 | Added word movement keybindings for Vim | added |
| 起動、todoツール、ファイル編集のレイテンシを改善 | Improved latency for startup, todo tool, and file edits | improved |

## 0.2.102

| 日本語 | English | Category |
|--------|---------|----------|
| thinking の起動信頼性を改善 | Improved thinking triggering reliability | improved |
| 画像とフォルダに対する @mention の信頼性を改善 | Improved @mention reliability for images and folders | improved |
| 1つのプロンプトに複数の大きなチャンクを貼り付け可能に | You can now paste multiple large chunks into one prompt | added |

## 0.2.100

| 日本語 | English | Category |
|--------|---------|----------|
| スタックオーバーフローエラーによるクラッシュを修正 | Fixed a crash caused by a stack overflow error | fixed |
| db ストレージをオプション化し、db サポートなしの場合は --continue と --resume を無効化 | Made db storage optional; missing db support disables --continue and --resume | changed |

## 0.2.98

| 日本語 | English | Category |
|--------|---------|----------|
| auto-compact が2回実行される問題を修正 | Fixed an issue where auto-compact was running twice | fixed |

## 0.2.96

| 日本語 | English | Category |
|--------|---------|----------|
| Claude Code が Claude Max サブスクリプションでも利用可能に (https://claude.ai/upgrade) | Claude Code can now also be used with a Claude Max subscription (https://claude.ai/upgrade) | changed |

## 0.2.93

| 日本語 | English | Category |
|--------|---------|----------|
| "claude --continue" と "claude --resume" で中断した会話を再開可能に | Resume conversations from where you left off from with "claude --continue" and "claude --resume" | added |
| Claude がタスク管理用の Todo リストにアクセスできるようになり、作業の追跡と整理が改善 | Claude now has access to a Todo list that helps it stay on track and be more organized | improved |

## 0.2.82

| 日本語 | English | Category |
|--------|---------|----------|
| --disallowedTools のサポートを追加 | Added support for --disallowedTools | added |
| 一貫性のためツールをリネーム: LSTool → LS、View → Read など | Renamed tools for consistency: LSTool -> LS, View -> Read, etc. | changed |

## 0.2.75

| 日本語 | English | Category |
|--------|---------|----------|
| Claude の作業中に Enter キーで追加メッセージをキューに追加可能 | Hit Enter to queue up additional messages while Claude is working | added |
| 画像ファイルをプロンプトに直接ドラッグまたは貼り付け可能 | Drag in or copy/paste image files directly into the prompt | added |
| ファイルを @ メンションでコンテキストに直接追加可能 | @-mention files to directly add them to context | added |
| `claude --mcp-config <path-to-file>` でワンオフ MCP サーバーの実行に対応 | Run one-off MCP servers with `claude --mcp-config <path-to-file>` | added |
| ファイル名オートコンプリートのパフォーマンス改善 | Improved performance for filename auto-complete | improved |

## 0.2.74

| 日本語 | English | Category |
|--------|---------|----------|
| 動的に生成された API キー（apiKeyHelper 経由）のリフレッシュに対応、TTL は 5 分 | Added support for refreshing dynamically generated API keys (via apiKeyHelper), with a 5 minute TTL | added |
| Task ツールでファイルの書き込みと Bash コマンドの実行が可能に | Task tool can now perform writes and run bash commands | added |

## 0.2.72

| 日本語 | English | Category |
|--------|---------|----------|
| トークン読み込みとツール使用を示すスピナー表示を改善 | Updated spinner to indicate tokens loaded and tool usage | improved |

## 0.2.70

| 日本語 | English | Category |
|--------|---------|----------|
| curl などのネットワークコマンドを Claude が使用可能に | Network commands like curl are now available for Claude to use | added |
| Claude が複数のウェブクエリを並列実行可能に | Claude can now run multiple web queries in parallel | added |
| Auto-accept モードで ESC キー1回押下により Claude を即座に中断可能に | Pressing ESC once immediately interrupts Claude in Auto-accept mode | added |

## 0.2.69

| 日本語 | English | Category |
|--------|---------|----------|
| Select コンポーネントの動作改善により UI の不具合を修正 | Fixed UI glitches with improved Select component behavior | fixed |
| ターミナル出力表示の改善（テキスト切り詰めロジックを改良） | Enhanced terminal output display with better text truncation logic | improved |

## 0.2.67

| 日本語 | English | Category |
|--------|---------|----------|
| 共有プロジェクトの権限ルールを .claude/settings.json に保存可能 | Shared project permission rules can be saved in .claude/settings.json | changed |

## 0.2.66

| 日本語 | English | Category |
|--------|---------|----------|
| プリントモード (-p) が --output-format=stream-json によるストリーミング出力に対応 | Print mode (-p) now supports streaming output via --output-format=stream-json | added |
| ペースト時にメモリまたは bash モードが予期せず起動する問題を修正 | Fixed issue where pasting could trigger memory or bash mode unexpectedly | fixed |

## 0.2.63

| 日本語 | English | Category |
|--------|---------|----------|
| MCP ツールが二重に読み込まれてツール呼び出しエラーが発生していた問題を修正 | Fixed an issue where MCP tools were loaded twice, which caused tool call errors | fixed |

## 0.2.61

| 日本語 | English | Category |
|--------|---------|----------|
| メニューのvimスタイルキー（j/k）またはbash/emacsショートカット（Ctrl+n/p）による高速操作に対応 | Navigate menus with vim-style keys (j/k) or bash/emacs shortcuts (Ctrl+n/p) for faster interaction | added |
| クリップボード画像の貼り付け機能向上のため画像検出を強化 | Enhanced image detection for more reliable clipboard paste functionality | improved |
| ESCキーで会話履歴セレクターがクラッシュする問題を修正 | Fixed an issue where ESC key could crash the conversation history selector | fixed |

## 0.2.59

| 日本語 | English | Category |
|--------|---------|----------|
| プロンプトへの画像の直接コピー&ペースト対応 | Copy+paste images directly into your prompt | added |
| bash および fetch ツールの進捗インジケーターを改善 | Improved progress indicators for bash and fetch tools | improved |
| 非対話モード (-p) のバグ修正 | Bugfixes for non-interactive mode (-p) | fixed |

## 0.2.54

| 日本語 | English | Category |
|--------|---------|----------|
| メッセージを「#」で始めることで素早くメモリーに追加 | Quickly add to Memory by starting your message with '#' | added |
| ctrl+r を押すと長いツール結果の完全な出力を表示 | Press ctrl+r to see full output for long tool results | added |
| MCP SSE トランスポートのサポートを追加 | Added support for MCP SSE transport | added |

## 0.2.53

| 日本語 | English | Category |
|--------|---------|----------|
| URL ペーストによる Web ページ表示機能を追加 | New web fetch tool lets Claude view URLs that you paste in | added |
| JPEG 検出のバグを修正 | Fixed a bug with JPEG detection | fixed |

## 0.2.50

| 日本語 | English | Category |
|--------|---------|----------|
| 新しいMCP "project" スコープにより、MCPサーバーを .mcp.json ファイルに追加してリポジトリにコミット可能に | New MCP "project" scope now allows you to add MCP servers to .mcp.json files and commit them to your repository | added |

## 0.2.49

| 日本語 | English | Category |
|--------|---------|----------|
| 以前の MCP サーバースコープを改名: project スコープは local に、global スコープは user に変更 | Previous MCP server scopes have been renamed: previous "project" scope is now "local" and "global" scope is now "user" | changed |

## 0.2.47

| 日本語 | English | Category |
|--------|---------|----------|
| Tab キーでファイル名とフォルダ名を自動補完 | Press Tab to auto-complete file and folder names | added |
| Shift + Tab キーでファイル編集の自動承認を切り替え | Press Shift + Tab to toggle auto-accept for file edits | added |
| 無限の会話長のための自動会話圧縮（/config で切り替え可能） | Automatic conversation compaction for infinite conversation length (toggle with /config) | added |

## 0.2.44

| 日本語 | English | Category |
|--------|---------|----------|
| 「think」「think harder」「ultrathink」と指示するだけで Claude に思考モードでの計画立案を依頼可能 | Ask Claude to make a plan with thinking mode: just say 'think' or 'think harder' or even 'ultrathink' | added |

## 0.2.41

| 日本語 | English | Category |
|--------|---------|----------|
| MCP_TIMEOUT 環境変数による MCP サーバー起動タイムアウトの設定に対応 | MCP server startup timeout can now be configured via MCP_TIMEOUT environment variable | added |
| MCP サーバー起動時にアプリの起動をブロックしないように改善 | MCP server startup no longer blocks the app from starting up | improved |

## 0.2.37

| 日本語 | English | Category |
|--------|---------|----------|
| いつでもリリースノートを表示できる /release-notes コマンドを追加 | New /release-notes command lets you view release notes at any time | added |
| `claude config add/remove` コマンドでカンマまたはスペース区切りの複数値に対応 | `claude config add/remove` commands now accept multiple values separated by commas or spaces | improved |

## 0.2.36

| 日本語 | English | Category |
|--------|---------|----------|
| Claude Desktop から `claude mcp add-from-claude-desktop` で MCP サーバーをインポート | Import MCP servers from Claude Desktop with `claude mcp add-from-claude-desktop` | added |
| `claude mcp add-json <n> <json>` で MCP サーバーを JSON 文字列として追加 | Add MCP servers as JSON strings with `claude mcp add-json <n> <json>` | added |

## 0.2.34

| 日本語 | English | Category |
|--------|---------|----------|
| テキスト入力用の Vim キーバインド - /vim または /config で有効化 | Vim bindings for text input - enable with /vim or /config | added |

## 0.2.32

| 日本語 | English | Category |
|--------|---------|----------|
| MCP サーバー追加用の対話的なセットアップウィザードを追加（「claude mcp add」コマンドで利用可能） | Interactive MCP setup wizard: Run "claude mcp add" to add MCP servers with a step-by-step interface | added |
| PersistentShell の一部の問題を修正 | Fix for some PersistentShell issues | fixed |

## 0.2.31

| 日本語 | English | Category |
|--------|---------|----------|
| カスタムスラッシュコマンド: .claude/commands/ ディレクトリの Markdown ファイルがカスタムスラッシュコマンドとして表示され、会話にプロンプトを挿入可能 | Custom slash commands: Markdown files in .claude/commands/ directories now appear as custom slash commands to insert prompts into your conversation | added |
| MCP デバッグモード: --mcp-debug フラグで実行すると、MCP サーバーエラーに関する詳細情報を取得可能 | MCP debug mode: Run with --mcp-debug flag to get more information about MCP server errors | added |

## 0.2.30

| 日本語 | English | Category |
|--------|---------|----------|
| より良いターミナル互換性のため ANSI カラーテーマを追加 | Added ANSI color theme for better terminal compatibility | added |
| スラッシュコマンドの引数が正しく送信されない問題を修正 | Fixed issue where slash command arguments weren't being sent properly | fixed |
| (Mac のみ) API キーを macOS キーチェーンに保存するよう変更 | (Mac-only) API keys are now stored in macOS Keychain | changed |

## 0.2.26

| 日本語 | English | Category |
|--------|---------|----------|
| ツール権限管理用の /approved-tools コマンドを追加 | New /approved-tools command for managing tool permissions | added |
| コード可読性向上のための単語レベルの差分表示 | Word-level diff display for improved code readability | improved |
| スラッシュコマンドのあいまい一致機能 | Fuzzy matching for slash commands | added |

## 0.2.21

| 日本語 | English | Category |
|--------|---------|----------|
| /commands のあいまい検索に対応 | Fuzzy matching for /commands | added |

---

*このファイルは [Claude Code](https://github.com/anthropics/claude-code) のCHANGELOGを元に翻訳されました。*
