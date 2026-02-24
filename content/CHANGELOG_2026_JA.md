# Claude Code 変更履歴 (2026年 - v2.1.0以降)

このファイルは Claude Code の2026年リリース分（バージョン2.1.0以降）の変更履歴を日本語で記載しています。

---

## 2.1.52

| 日本語 | English | Category |
|--------|---------|----------|
| VS Code: Windows での拡張機能クラッシュを修正（"command 'claude-vscode.editor.openLast' not found"） | VS Code: Fixed extension crash on Windows ("command 'claude-vscode.editor.openLast' not found") | fixed |

## 2.1.51

| 日本語 | English | Category |
|--------|---------|----------|
| 外部ビルド向けの `claude remote-control` サブコマンドを追加し、すべてのユーザーがローカル環境でのサービングを利用可能に | Added `claude remote-control` subcommand for external builds, enabling local environment serving for all users. | added |
| プラグインマーケットプレイスのデフォルト git タイムアウトを 30 秒から 120 秒に変更し、`CLAUDE_CODE_PLUGIN_GIT_TIMEOUT_MS` による設定に対応 | Updated plugin marketplace default git timeout from 30s to 120s and added `CLAUDE_CODE_PLUGIN_GIT_TIMEOUT_MS` to configure. | changed |
| npm ソースからプラグインをインストールする際のカスタム npm レジストリおよびバージョン固定のサポートを追加 | Added support for custom npm registries and specific version pinning when installing plugins from npm sources | added |
| シェルスナップショットが利用可能な場合、BashTool がデフォルトでログインシェル（`-l` フラグ）をスキップするよう変更し、コマンド実行パフォーマンスを改善（以前は `CLAUDE_BASH_NO_LOGIN=true` の設定が必要） | BashTool now skips login shell (`-l` flag) by default when a shell snapshot is available, improving command execution performance. Previously this required setting `CLAUDE_BASH_NO_LOGIN=true`. | improved |
| インタラクティブモードでワークスペーストラストの承認なしに `statusLine` および `fileSuggestion` フックコマンドが実行可能なセキュリティ問題を修正 | Fixed a security issue where `statusLine` and `fileSuggestion` hook commands could execute without workspace trust acceptance in interactive mode. | fixed |
| ツール結果のディスク永続化の閾値を 100K 文字から 50K 文字に縮小し、コンテキストウィンドウ使用量の削減と会話の継続性を改善 | Tool results larger than 50K characters are now persisted to disk (previously 100K). This reduces context window usage and improves conversation longevity. | improved |
| WebSocket 再接続などによる `control_response` メッセージの重複が API 400 エラーを引き起こすバグを修正 | Fixed a bug where duplicate `control_response` messages (e.g. from WebSocket reconnects) could cause API 400 errors by pushing duplicate assistant messages into the conversation. | fixed |
| SDK 呼び出し元がアカウント情報を同期的に提供できる環境変数 `CLAUDE_CODE_ACCOUNT_UUID`、`CLAUDE_CODE_USER_EMAIL`、`CLAUDE_CODE_ORGANIZATION_UUID` を追加し、初期テレメトリイベントにアカウントメタデータが欠落するレースコンディションを解消 | Added `CLAUDE_CODE_ACCOUNT_UUID`, `CLAUDE_CODE_USER_EMAIL`, and `CLAUDE_CODE_ORGANIZATION_UUID` environment variables for SDK callers to provide account info synchronously, eliminating a race condition where early telemetry events lacked account metadata. | added |
| プラグインの SKILL.md の description が YAML 配列またはその他の非文字列型の場合にスラッシュコマンドのオートコンプリートがクラッシュするバグを修正 | Fixed slash command autocomplete crashing when a plugin's SKILL.md description is a YAML array or other non-string type | fixed |
| `/model` ピッカーでピン留めされたモデルバージョンの表示を生のモデル ID から人間が読みやすいラベル（例: "Sonnet 4.5"）に変更し、新バージョン利用可能時のアップグレードヒントを追加 | The `/model` picker now shows human-readable labels (e.g., "Sonnet 4.5") instead of raw model IDs for pinned model versions, with an upgrade hint when a newer version is available. | improved |
| macOS plist または Windows Registry による管理設定の指定に対応（詳細: https://code.claude.com/docs/en/settings#settings-files） | Managed settings can now be set via macOS plist or Windows Registry. Learn more at https://code.claude.com/docs/en/settings#settings-files | added |

## 2.1.50

| 日本語 | English | Category |
|--------|---------|----------|
| LSPサーバーの`startupTimeout`設定のサポートを追加 | Added support for `startupTimeout` configuration for LSP servers | added |
| エージェントのワークツリー分離によるワークツリーの作成・削除時にカスタムVCSのセットアップとティアダウンを可能にする`WorktreeCreate`および`WorktreeRemove`フックイベントを追加 | Added `WorktreeCreate` and `WorktreeRemove` hook events, enabling custom VCS setup and teardown when agent worktree isolation creates or removes worktrees. | added |
| 作業ディレクトリにシンボリックリンクが含まれる場合に再開セッションが表示されなくなるバグを修正。また、グレースフルシャットダウン中にフックとアナリティクスより先にセッションデータをフラッシュすることでSSH切断時のセッションデータ損失を修正 | Fixed a bug where resumed sessions could be invisible when the working directory involved symlinks, because the session storage path was resolved at different times during startup. Also fixed session data loss on SSH disconnect by flushing session data before hooks and analytics in the graceful shutdown sequence. | fixed |
| Linux: glibc 2.30未満のシステム（RHEL 8等）でネイティブモジュールが読み込まれない問題を修正 | Linux: Fixed native modules not loading on systems with glibc older than 2.30 (e.g., RHEL 8) | fixed |
| エージェントチームで完了済みのチームメイトタスクがセッション状態からガベージコレクションされないメモリリークを修正 | Fixed memory leak in agent teams where completed teammate tasks were never garbage collected from session state | fixed |
| `CLAUDE_CODE_SIMPLE`がスキル、セッションメモリ、カスタムエージェント、CLAUDE.mdのトークンカウントを完全に除去しない問題を修正 | Fixed `CLAUDE_CODE_SIMPLE` to fully strip down skills, session memory, custom agents, and CLAUDE.md token counting | fixed |
| 存在しないサーバー名を指定した際に`/mcp reconnect`がCLIをフリーズさせる問題を修正 | Fixed `/mcp reconnect` freezing the CLI when given a server name that doesn't exist | fixed |
| 完了済みタスクの状態オブジェクトがAppStateから削除されないメモリリークを修正 | Fixed memory leak where completed task state objects were never removed from AppState | fixed |
| エージェント定義に`isolation: worktree`のサポートを追加し、エージェントが分離されたgitワークツリー上で宣言的に動作可能に | Added support for `isolation: worktree` in agent definitions, allowing agents to declaratively run in isolated git worktrees. | added |
| `CLAUDE_CODE_SIMPLE`モードがMCPツール、添付ファイル、フック、CLAUDE.mdファイルの読み込みも無効化し、完全にミニマルな体験を提供するよう変更 | `CLAUDE_CODE_SIMPLE` mode now also disables MCP tools, attachments, hooks, and CLAUDE.md file loading for a fully minimal experience. | changed |
| ツール検索が有効でプロンプトが起動引数として渡された場合にMCPツールが検出されないバグを修正 | Fixed bug where MCP tools were not discovered when tool search is enabled and a prompt is passed in as a launch argument | fixed |
| コンパクション後に内部キャッシュをクリアすることで、長時間セッションのメモリ使用量を改善 | Improved memory usage during long sessions by clearing internal caches after compaction | improved |
| 設定済みエージェントの一覧を表示する`claude agents` CLIコマンドを追加 | Added `claude agents` CLI command to list all configured agents | added |
| 処理済みの大きなツール結果をクリアすることで、長時間セッションのメモリ使用量を改善 | Improved memory usage during long sessions by clearing large tool results after they have been processed | improved |
| LSP診断データが配信後にクリーンアップされず長時間セッションでメモリが際限なく増加するメモリリークを修正 | Fixed a memory leak where LSP diagnostic data was never cleaned up after delivery, causing unbounded memory growth in long sessions | fixed |
| 完了済みタスクの出力がメモリから解放されないメモリリークを修正し、多数のタスクを含む長時間セッションのメモリ使用量を削減 | Fixed a memory leak where completed task output was not freed from memory, reducing memory usage in long sessions with many tasks | fixed |
| Yoga WASMとUIコンポーネントのインポートを遅延させることで、ヘッドレスモード（`-p`フラグ）の起動パフォーマンスを改善 | Improved startup performance for headless mode (`-p` flag) by deferring Yoga WASM and UI component imports | improved |
| キャッシュヒット率を低下させるプロンプト候補キャッシュのリグレッションを修正 | Fixed prompt suggestion cache regression that reduced cache hit rates | fixed |
| ファイル履歴スナップショットに上限を設けることで、長時間セッションでのメモリの際限ない増加を修正 | Fixed unbounded memory growth in long sessions by capping file history snapshots | fixed |
| 1Mコンテキストウィンドウのサポートを無効化する`CLAUDE_CODE_DISABLE_1M_CONTEXT`環境変数を追加 | Added `CLAUDE_CODE_DISABLE_1M_CONTEXT` environment variable to disable 1M context window support | added |
| Opus 4.6（ファストモード）が1Mコンテキストウィンドウの完全サポートを提供 | Opus 4.6 (fast mode) now includes the full 1M context window | improved |
| VSCode: VS Codeセッションへの`/extra-usage`コマンドのサポートを追加 | VSCode: Added `/extra-usage` command support in VS Code sessions | added |
| クリーンアップ後もTaskOutputが直近の行を保持し続けるメモリリークを修正 | Fixed memory leak where TaskOutput retained recent lines after cleanup | fixed |
| クリア済みのアイテムがバッキング配列に保持されるCircularBufferのメモリリークを修正 | Fixed memory leak in CircularBuffer where cleared items were retained in the backing array | fixed |
| クリーンアップ後もChildProcessおよびAbortControllerの参照が保持されるシェルコマンド実行のメモリリークを修正 | Fixed memory leak in shell command execution where ChildProcess and AbortController references were retained after cleanup | fixed |

## 2.1.49

| 日本語 | English | Category |
|--------|---------|----------|
| MCP OAuth 認証にステップアップ認証サポートとディスカバリーキャッシュを追加し、サーバー接続時の冗長なネットワークリクエストを削減 | Improved MCP OAuth authentication with step-up auth support and discovery caching, reducing redundant network requests during server connections | improved |
| 隔離された git worktree で Claude を起動する `--worktree`（`-w`）フラグを追加 | Added `--worktree` (`-w`) flag to start Claude in an isolated git worktree | added |
| サブエージェントが一時的な git worktree で作業するための `isolation: "worktree"` をサポート | Subagents support `isolation: "worktree"` for working in a temporary git worktree | added |
| バックグラウンドエージェントを終了する Ctrl+F キーバインドを追加（3秒以内に2回押しで確認） | Added Ctrl+F keybinding to kill background agents (two-press confirmation) | added |
| エージェント定義で `background: true` を指定することでバックグラウンドタスクとして常時実行するサポートを追加 | Agent definitions support `background: true` to always run as a background task | added |
| プラグインがデフォルト設定用の `settings.json` を同梱可能に | Plugins can ship `settings.json` for default configuration | added |
| モデルがリポジトリフォルダを省略した際、ファイルが見つからないエラーで修正候補パスを提案するよう修正 | Fixed file-not-found errors to suggest corrected paths when the model drops the repo folder | fixed |
| バックグラウンドエージェント実行中にメインスレッドがアイドル状態のとき Ctrl+C および ESC が無視されていた問題を修正。3秒以内に2回押すことで全バックグラウンドエージェントを終了するよう変更 | Fixed Ctrl+C and ESC being silently ignored when background agents are running and the main thread is idle. Pressing twice within 3 seconds now kills all background agents. | fixed |
| キャッシュヒット率を低下させていたプロンプト候補キャッシュのリグレッションを修正 | Fixed prompt suggestion cache regression that reduced cache hit rates. | fixed |
| `--scope` 未指定時に `plugin enable` および `plugin disable` が常にユーザースコープへフォールバックしていた問題を修正し、正しいスコープを自動検出するよう変更 | Fixed `plugin enable` and `plugin disable` to auto-detect the correct scope when `--scope` is not specified, instead of always defaulting to user scope | fixed |
| シンプルモード（`CLAUDE_CODE_SIMPLE`）に Bash ツールに加えてファイル編集ツールを追加し、シンプルモードでの直接ファイル編集を可能に | Simple mode (`CLAUDE_CODE_SIMPLE`) now includes the file edit tool in addition to the Bash tool, allowing direct file editing in simple mode. | added |
| 安全チェックが確認応答をトリガーした際にパーミッション候補を自動設定するようになり、SDK コンシューマがパーミッションオプションを表示可能に | Permission suggestions are now populated when safety checks trigger an ask response, enabling SDK consumers to display permission options | added |
| Max プランから 1M コンテキスト対応の Sonnet 4.5 を廃止し、同じく 1M コンテキストに対応したフロンティアモデル Sonnet 4.6 へ移行。`/model` で切り替え | Sonnet 4.5 with 1M context is being removed from the Max plan in favor of our frontier Sonnet 4.6 model, which now has 1M context. Please switch in /model. | changed |
| `/config` で verbose モードを切り替えてもシンキングブロックの表示が更新されなかった問題を修正。メモコンパレータが verbose の変更を正しく検出するよう対応 | Fixed verbose mode not updating thinking block display when toggled via `/config` — memo comparators now correctly detect verbose changes | fixed |
| tree-sitter パーサーを定期的にリセットすることで、長時間セッション中の WASM メモリの無制限増大を修正 | Fixed unbounded WASM memory growth during long sessions by periodically resetting the tree-sitter parser | fixed |
| 古い yoga レイアウト参照によって引き起こされる潜在的なレンダリング問題を修正 | Fixed potential rendering issues caused by stale yoga layout references | fixed |
| 起動時の不要な API 呼び出しをスキップすることで、非インタラクティブモード（`-p`）のパフォーマンスを改善 | Improved performance in non-interactive mode (`-p`) by skipping unnecessary API calls during startup | improved |
| HTTP および SSE MCP サーバーの認証失敗をキャッシュし、認証が必要なサーバーへの繰り返し接続試行を回避することでパフォーマンスを改善 | Improved performance by caching authentication failures for HTTP and SSE MCP servers, avoiding repeated connection attempts to servers requiring auth | improved |
| Yoga WASM のリニアメモリが縮小しないことによる、長時間セッション中のメモリ無制限増大を修正 | Fixed unbounded memory growth during long-running sessions caused by Yoga WASM linear memory never shrinking | fixed |
| SDK のモデル情報に `supportsEffort`、`supportedEffortLevels`、`supportsAdaptiveThinking` フィールドを追加し、コンシューマがモデル機能を検出可能に | SDK model info now includes `supportsEffort`, `supportedEffortLevels`, and `supportsAdaptiveThinking` fields so consumers can discover model capabilities. | added |
| セッション中に設定ファイルが変更された際に発火する `ConfigChange` フックイベントを追加し、エンタープライズのセキュリティ監査と設定変更のブロックを可能に | Added `ConfigChange` hook event that fires when configuration files change during a session, enabling enterprise security auditing and optional blocking of settings changes. | added |
| MCP 認証失敗をキャッシュして冗長な接続試行を回避することで、起動パフォーマンスを改善 | Improved startup performance by caching MCP auth failures to avoid redundant connection attempts | improved |
| アナリティクスのトークンカウントにおける HTTP 呼び出しを削減し、起動パフォーマンスを改善 | Improved startup performance by reducing HTTP calls for analytics token counting | improved |
| MCP ツールのトークンカウントを単一の API 呼び出しにまとめることで、起動パフォーマンスを改善 | Improved startup performance by batching MCP tool token counting into a single API call | improved |
| `disableAllHooks` 設定が管理設定の階層を尊重するよう修正。非管理設定でポリシーにより設定された管理フックを無効化できないよう変更 (#26637) | Fixed `disableAllHooks` setting to respect managed settings hierarchy — non-managed settings can no longer disable managed hooks set by policy (#26637) | fixed |
| `/clear` のようなコマンドで始まるセッションで `--resume` のセッションピッカーに生の XML タグが表示されていた問題を修正。セッション ID フォールバックへ正しくフォールスルーするよう変更 | Fixed `--resume` session picker showing raw XML tags for sessions that start with commands like `/clear`. Now correctly falls through to the session ID fallback. | fixed |
| パス安全性および作業ディレクトリブロックに関するパーミッションプロンプトを改善し、コンテキストのない素のプロンプトの代わりに制限理由を表示するよう変更 | Improved permission prompts for path safety and working directory blocks to show the reason for the restriction instead of a bare prompt with no context | improved |

## 2.1.47

| 日本語 | English | Category |
|--------|---------|----------|
| FileWriteTool の行数カウントを修正し、`trimEnd()` による意図的な末尾の空白行の削除を防止 | Fixed FileWriteTool line counting to preserve intentional trailing blank lines instead of stripping them with `trimEnd()`. | fixed |
| `os.EOL`（`\r\n`）が表示コードに引き起こすWindowsターミナルのレンダリングバグを修正 — 行数が常に1と表示される問題を解消し、正しい値を表示 | Fixed Windows terminal rendering bugs caused by `os.EOL` (`\r\n`) in display code — line counts now show correct values instead of always showing 1 on Windows. | fixed |
| VS Code のプランプレビューを改善: Claude の反復処理に合わせた自動更新、レビュー準備完了時のみコメントを有効化、拒否時も Claude が修正できるようプレビューを維持 | Improved VS Code plan preview: auto-updates as Claude iterates, enables commenting only when the plan is ready for review, and keeps the preview open when rejecting so Claude can revise. | improved |
| Windowsの`\r\n`改行コードにより、マークダウン出力の太字・色付きテキストが誤った文字にずれるバグを修正 | Fixed a bug where bold and colored text in markdown output could shift to the wrong characters on Windows due to `\r\n` line endings. | fixed |
| 会話に多数のPDFドキュメントが含まれる場合にコンパクションAPIへの送信前にドキュメントブロックを画像とともに除去することでコンパクションが失敗する問題を修正 | Fixed compaction failing when conversation contains many PDF documents by stripping document blocks alongside images before sending to the compaction API (anthropics/claude-code#26188) | fixed |
| APIストリームバッファ、エージェントコンテキスト、スキル状態を使用後に解放することで、長時間セッションのメモリ使用量を改善 | Improved memory usage in long-running sessions by releasing API stream buffers, agent context, and skill state after use | improved |
| SessionStart フックの実行を遅延させることで起動パフォーマンスを改善し、インタラクティブになるまでの時間を約500ms短縮 | Improved startup performance by deferring SessionStart hook execution, reducing time-to-interactive by ~500ms. | improved |
| MSYS2またはCygwinシェル使用時にWindowsでbashツールの出力が無言で破棄される問題を修正 | Fixed an issue where bash tool output was silently discarded on Windows when using MSYS2 or Cygwin shells. | fixed |
| `@` ファイルメンションのパフォーマンス改善 - 起動時のインデックス事前ウォームアップとバックグラウンド更新付きセッションキャッシュにより、ファイル候補の表示が高速化 | Improved performance of `@` file mentions - file suggestions now appear faster by pre-warming the index on startup and using session-based caching with background refresh. | improved |
| タスク完了後にエージェントタスクのメッセージ履歴をトリミングすることでメモリ使用量を改善 | Improved memory usage by trimming agent task message history after tasks complete | improved |
| 進捗更新における O(n²) のメッセージ蓄積を解消し、長時間エージェントセッション中のメモリ使用量を改善 | Improved memory usage during long agent sessions by eliminating O(n²) message accumulation in progress updates | improved |
| bashパーミッション分類器において返されたマッチの説明が実際の入力ルールと対応していることを検証するよう修正し、ハルシネーションによる誤った権限付与を防止 | Fixed the bash permission classifier to validate that returned match descriptions correspond to actual input rules, preventing hallucinated descriptions from incorrectly granting permissions | fixed |
| NFS/FUSEファイルシステムでinodeが0と報告される場合にユーザー定義エージェントが1ファイルしか読み込まれない問題を修正 | Fixed user-defined agents only loading one file on NFS/FUSE filesystems that report zero inodes (anthropics/claude-code#26044) | fixed |
| プラグインエージェントスキルが完全修飾プラグイン名でなく短縮名で参照された際にサイレントに読み込み失敗する問題を修正 | Fixed plugin agent skills silently failing to load when referenced by bare name instead of fully-qualified plugin name (anthropics/claude-code#25834) | fixed |
| 折りたたまれたツール結果の検索パターンを引用符付きで表示するように変更 | Search patterns in collapsed tool results are now displayed in quotes for clarity | improved |
| Windows: CWD追跡の一時ファイルが削除されず無限に蓄積される問題を修正 | Windows: Fixed CWD tracking temp files never being cleaned up, causing them to accumulate indefinitely (anthropics/claude-code#17600) | fixed |
| バックグラウンドエージェントの全終了キーをESC二重押しから`ctrl+f`に変更。ESCでメインスレッドをキャンセルしてもバックグラウンドエージェントは継続実行されるよう動作を変更 | Use `ctrl+f` to kill all background agents instead of double-pressing ESC. Background agents now continue running when you press ESC to cancel the main thread, giving you more control over agent lifecycle. | changed |
| 並行エージェントセッションでストリーミングコンテンツブロックの混在によるメッセージマージ失敗が原因で発生していたAPI 400エラー（"thinking blocks cannot be modified"）を修正 | Fixed API 400 errors ("thinking blocks cannot be modified") that occurred in sessions with concurrent agents, caused by interleaved streaming content blocks preventing proper message merging. | fixed |
| チームメイトナビゲーションをShift+UpとShift+Downの両方ではなく、Shift+Down（折り返しあり）のみに簡略化 | Simplified teammate navigation to use only Shift+Down (with wrapping) instead of both Shift+Up and Shift+Down. | changed |
| 単一ファイルの書き込み/編集エラーが並列ファイル操作全体を中断する問題を修正。独立したファイル変更は他の操作が失敗しても完了するよう対応。 | Fixed an issue where a single file write/edit error would abort all other parallel file write/edit operations. Independent file mutations now complete even when a sibling fails. | fixed |
| StopおよびSubagentStopフックの入力に`last_assistant_message`フィールドを追加、トランスクリプトファイルを解析せずにアシスタントの最終レスポンステキストへのアクセスに対応 | Added `last_assistant_message` field to Stop and SubagentStop hook inputs, providing the final assistant response text so hooks can access it without parsing transcript files. | added |
| `/rename` で設定したカスタムセッションタイトルが会話再開後に失われる問題を修正 | Fixed custom session titles set via `/rename` being lost after resuming a conversation (anthropics/claude-code#23610) | fixed |
| 狭いターミナルで折りたたまれた読み込み/検索ヒントテキストがはみ出す問題を、先頭からの切り詰めで修正 | Fixed collapsed read/search hint text overflowing on narrow terminals by truncating from the start. | fixed |
| バックスラッシュ改行による継続行（`\`で複数行に分割された長いコマンド）を含むbashコマンドが不正な空引数を生成し、コマンド実行が破壊される可能性がある問題を修正 | Fixed an issue where bash commands with backslash-newline continuation lines (e.g., long commands split across multiple lines with `\`) would produce spurious empty arguments, potentially breaking command execution. | fixed |
| 多数のユーザースキルがインストールされている場合に、組み込みスラッシュコマンド（`/help`、`/model`、`/compact` など）がオートコンプリートのドロップダウンに表示されない問題を修正 | Fixed built-in slash commands (`/help`, `/model`, `/compact`, etc.) being hidden from the autocomplete dropdown when many user skills are installed (anthropics/claude-code#22020) | fixed |
| 遅延読み込み後にMCPサーバーがMCP管理ダイアログに表示されない問題を修正 | Fixed MCP servers not appearing in the MCP Management Dialog after deferred loading | fixed |
| `/clear` コマンド実行後にステータスバーにセッション名が残り続ける問題を修正 | Fixed session name persisting in status bar after `/clear` command (anthropics/claude-code#26082) | fixed |
| SKILL.mdのフロントマターで`name`や`description`に数値のみ（例: `name: 3000`）が指定された場合にクラッシュする問題を修正。値を適切に文字列へ変換するよう対応 | Fixed crash when a skill's `name` or `description` in SKILL.md frontmatter is a bare number (e.g., `name: 3000`) — the value is now properly coerced to a string (anthropics/claude-code#25837) | fixed |
| `/resume` で最初のメッセージが16KBを超えるか配列形式のコンテンツを使用する場合にセッションが暗黙的に破棄される問題を修正 | Fixed /resume silently dropping sessions when the first message exceeds 16KB or uses array-format content (anthropics/claude-code#25721) | fixed |
| 設定可能な複数行入力用の `chat:newline` キーバインディングアクションを追加 | Added `chat:newline` keybinding action for configurable multi-line input (anthropics/claude-code#26075) | added |
| ステータスラインJSONの`workspace`セクションに`added_dirs`を追加し、`/add-dir`で追加されたディレクトリを外部スクリプトに公開 | Added `added_dirs` to the statusline JSON `workspace` section, exposing directories added via `/add-dir` to external scripts (anthropics/claude-code#26096) | added |
| `claude doctor` が mise および asdf 管理のインストールをネイティブインストールとして誤分類する問題を修正 | Fixed `claude doctor` misclassifying mise and asdf-managed installations as native installs (anthropics/claude-code#26033) | fixed |
| サンドボックスコマンドで zsh ヒアドキュメントが "read-only file system" エラーで失敗する問題を修正 | Fixed zsh heredoc failing with "read-only file system" error in sandboxed commands (anthropics/claude-code#25990) | fixed |
| エージェントの進行状況インジケーターがツール使用数を過大に表示する問題を修正 | Fixed agent progress indicator showing inflated tool use count (anthropics/claude-code#26023) | fixed |
| WSL2環境でWindowsがBMP形式で画像をコピーした際に画像の貼り付けが機能しない問題を修正 | Fixed image pasting not working on WSL2 systems where Windows copies images as BMP format (anthropics/claude-code#25935) | fixed |
| バックグラウンドエージェントの結果がエージェントの最終回答ではなく生のトランスクリプトデータを返す問題を修正 | Fixed background agent results returning raw transcript data instead of the agent's final answer (anthropics/claude-code#26012) | fixed |
| WarpターミナルがShift+Enterをネイティブサポートしているにもかかわらず、セットアップを誤って促す問題を修正 | Fixed Warp terminal incorrectly prompting for Shift+Enter setup when it supports it natively (anthropics/claude-code#25957) | fixed |
| TUIでCJK全角文字がタイムスタンプとレイアウト要素のずれを引き起こす問題を修正 | Fixed CJK wide characters causing misaligned timestamps and layout elements in the TUI (anthropics/claude-code#26084) | fixed |
| `.claude/agents/*.md` 内のカスタムエージェントの `model` フィールドがチームメイト起動時に無視される問題を修正 | Fixed custom agent `model` field in `.claude/agents/*.md` being ignored when spawning team teammates (anthropics/claude-code#26064) | fixed |
| コンテキスト圧縮後にプランモードが失われ、モデルが計画モードから実装モードに切り替わる問題を修正 | Fixed plan mode being lost after context compaction, causing the model to switch from planning to implementation mode (anthropics/claude-code#26061) | fixed |
| `settings.json`で`alwaysThinkingEnabled: true`を設定してもBedrockおよびVertexプロバイダーでthinkingモードが有効にならない問題を修正 | Fixed `alwaysThinkingEnabled: true` in settings.json not enabling thinking mode on Bedrock and Vertex providers (anthropics/claude-code#26074) | fixed |
| ヘッドレス/SDKモードで`tool_decision` OTelテレメトリイベントが送信されない不具合を修正 | Fixed `tool_decision` OTel telemetry event not being emitted in headless/SDK mode (anthropics/claude-code#26059) | fixed |
| コンテキスト圧縮後にセッション名が失われる問題を修正（リネームされたセッションが圧縮後もカスタムタイトルを保持するように） | Fixed session name being lost after context compaction — renamed sessions now preserve their custom title through compaction (anthropics/claude-code#26121) | fixed |
| 再開ピッカーの初期セッション表示数を10から50に増加し、セッション検索を高速化 | Increased initial session count in resume picker from 10 to 50 for faster session discovery (anthropics/claude-code#26123) | improved |
| Windows: ドライブレターの大文字小文字が異なる場合のワークツリーセッションマッチングを修正 | Windows: fixed worktree session matching when drive letter casing differs (anthropics/claude-code#26123) | fixed |
| `/resume <session-id>` で最初のメッセージが16KBを超えるセッションが見つからない不具合を修正 | Fixed `/resume <session-id>` failing to find sessions whose first message exceeds 16KB (anthropics/claude-code#25920) | fixed |
| 複数行のbashコマンドで「常に許可」を使用した際に無効な権限パターンが生成され設定が破損する問題を修正 | Fixed "Always allow" on multiline bash commands creating invalid permission patterns that corrupt settings (anthropics/claude-code#25909) | fixed |
| SKILL.mdのフロントマターで`argument-hint`にYAMLシーケンス構文（例: `[topic: foo \| bar]`）を使用した際にReactがクラッシュする問題（エラー #31）を修正、値を適切に文字列へ変換するよう対応 | Fixed React crash (error #31) when a skill's `argument-hint` in SKILL.md frontmatter uses YAML sequence syntax (e.g., `[topic: foo \| bar]`) — the value is now properly coerced to a string (anthropics/claude-code#25826) | fixed |
| ウェブ検索を使用したセッションで `/fork` を使用した際のクラッシュを修正 — トランスクリプトのデシリアライズ時に検索結果に含まれる null エントリを適切に処理 | Fixed crash when using `/fork` on sessions that used web search — null entries in search results from transcript deserialization are now handled gracefully (anthropics/claude-code#25811) | fixed |
| 読み取り専用のgitコマンドがmacOSのFSEventsファイルウォッチャーループを引き起こす問題を`--no-optional-locks`フラグの追加により修正 | Fixed read-only git commands triggering FSEvents file watcher loops on macOS by adding --no-optional-locks flag (anthropics/claude-code#25750) | fixed |
| git worktreeから実行した際にカスタムエージェントとスキルが検出されない問題を修正（メインリポジトリのプロジェクトレベルの`.claude/agents/`と`.claude/skills/`も参照対象に追加） | Fixed custom agents and skills not being discovered when running from a git worktree — project-level `.claude/agents/` and `.claude/skills/` from the main repository are now included (anthropics/claude-code#25816) | fixed |
| ネストされたClaudeセッション内で`claude doctor`や`claude plugin validate`などの非インタラクティブなサブコマンドがブロックされる問題を修正 | Fixed non-interactive subcommands like `claude doctor` and `claude plugin validate` being blocked inside nested Claude sessions (anthropics/claude-code#25803) | fixed |
| Windows: パス間でドライブレターの大文字・小文字が異なる場合に同じCLAUDE.mdが二重読み込みされる問題を修正 | Windows: Fixed the same CLAUDE.md file being loaded twice when drive letter casing differs between paths (anthropics/claude-code#25756) | fixed |
| マークダウンのインラインコードスパンが誤ってbashコマンドとして解析される問題を修正 | Fixed inline code spans in markdown being incorrectly parsed as bash commands (anthropics/claude-code#25792) | fixed |
| 設定のカスタム `spinnerVerbs` がチームメイトのスピナーに反映されない問題を修正 | Fixed teammate spinners not respecting custom spinnerVerbs from settings (anthropics/claude-code#25748) | fixed |
| コマンドが自身の作業ディレクトリを削除した後、シェルコマンドが永続的に失敗する問題を修正 | Fixed shell commands permanently failing after a command deletes its own working directory (anthropics/claude-code#26136) | fixed |
| Windowsでcmd.exeの代わりにGit Bashを使用するよう修正し、フック（PreToolUse、PostToolUse）がサイレントに実行失敗していた問題を解消 | Fixed hooks (PreToolUse, PostToolUse) silently failing to execute on Windows by using Git Bash instead of cmd.exe (anthropics/claude-code#25981) | fixed |
| LSPの`findReferences`などの位置ベース操作がgitignore対象ファイル（`node_modules/`、`venv/`など）の結果を返す問題を修正 | Fixed LSP `findReferences` and other location-based operations returning results from gitignored files (e.g., `node_modules/`, `venv/`) (anthropics/claude-code#26051) | fixed |
| 設定バックアップファイルをホームディレクトリのルートから `~/.claude/backups/` へ移動 | Moved config backup files from home directory root to `~/.claude/backups/` to reduce home directory clutter (anthropics/claude-code#26130) | changed |
| 最初のプロンプトが大きい場合（16KB超）に /resume リストからセッションが消える問題を修正 | Fixed sessions with large first prompts (>16KB) disappearing from the /resume list (anthropics/claude-code#26140) | fixed |
| ダブルアンダースコアプレフィックスを持つシェル関数（例: `__git_ps1`）がシェルセッションをまたいで保持されない問題を修正 | Fixed shell functions with double-underscore prefixes (e.g., `__git_ps1`) not being preserved across shell sessions (anthropics/claude-code#25824) | fixed |
| トークン受信前にスピナーが「0トークン」カウンターを表示する問題を修正 | Fixed spinner showing "0 tokens" counter before any tokens have been received (anthropics/claude-code#26105) | fixed |
| VSCode: AskUserQuestion ダイアログが開いている間、会話メッセージが暗く表示される問題を修正 | VSCode: Fixed conversation messages appearing dimmed while the AskUserQuestion dialog is open (anthropics/claude-code#26078) | fixed |
| git worktreeでリモートURL解決がメインリポジトリの設定ではなくworktree固有のgitdirを参照することによりバックグラウンドタスクが失敗する問題を修正 | Fixed background tasks failing in git worktrees due to remote URL resolution reading from worktree-specific gitdir instead of the main repository config (anthropics/claude-code#26065) | fixed |
| Windows/Git Bash ターミナルで右Altキー押下時に入力フィールドへ `[25~` エスケープシーケンスが残留する不具合を修正 | Fixed Right Alt key leaving visible `[25~` escape sequence residue in the input field on Windows/Git Bash terminals (anthropics/claude-code#25943) | fixed |
| `/rename` コマンドがデフォルトでターミナルタブのタイトルを更新するように変更 | The `/rename` command now updates the terminal tab title by default (anthropics/claude-code#25789) | changed |
| EditツールがUnicodeの曲引用符（\u201c\u201d \u2018\u2019）をストレート引用符に無言で置換・破損していた問題を修正 | Fixed Edit tool silently corrupting Unicode curly quotes (\u201c\u201d \u2018\u2019) by replacing them with straight quotes when making edits (anthropics/claude-code#26141) | fixed |
| OSC 8 ハイパーリンクのテキストが複数のターミナル行に折り返される際、最初の行のみクリック可能だった問題を修正 | Fixed OSC 8 hyperlinks only being clickable on the first line when link text wraps across multiple terminal lines. | fixed |

## 2.1.46

| 日本語 | English | Category |
|--------|---------|----------|
| macOSでターミナル切断後に残存するCCプロセスの問題を修正 | Fixed orphaned CC processes after terminal disconnect on macOS | fixed |
| Claude Codeでclaude.aiのMCPコネクタを使用するサポートを追加 | Added support for using claude.ai MCP connectors in Claude Code | added |

## 2.1.45

| 日本語 | English | Category |
|--------|---------|----------|
| Claude Sonnet 4.6 のサポートを追加 | Added support for Claude Sonnet 4.6 | added |
| `--add-dir` ディレクトリからの `enabledPlugins` および `extraKnownMarketplaces` の読み込みに対応 | Added support for reading `enabledPlugins` and `extraKnownMarketplaces` from `--add-dir` directories | added |
| スピナーのヒントをカスタマイズする `spinnerTipsOverride` 設定を追加（`tips` にカスタム文字列の配列を設定可能、`excludeDefault: true` で組み込みヒントを非表示にして独自ヒントのみ表示） | Added `spinnerTipsOverride` setting to customize spinner tips — configure `tips` with an array of custom tip strings, and optionally set `excludeDefault: true` to show only your custom tips instead of the built-in ones | added |
| レート制限の状態更新（使用率・リセット時刻・超過情報を含む）をコンシューマーが受け取れるよう、`SDKRateLimitInfo` および `SDKRateLimitEvent` 型を SDK に追加 | Added `SDKRateLimitInfo` and `SDKRateLimitEvent` types to the SDK, enabling consumers to receive rate limit status updates including utilization, reset times, and overage information | added |
| tmux で生成されたプロセスへ API プロバイダーの環境変数を伝播することで、Bedrock・Vertex・Foundry 上での Agent Teams チームメイトの失敗を修正 | Fixed Agent Teams teammates failing on Bedrock, Vertex, and Foundry by propagating API provider environment variables to tmux-spawned processes (anthropics/claude-code#23561) | fixed |
| ユーザーごとの正しい一時ディレクトリを使用することで、macOS での一時ファイル書き込み時に発生するサンドボックスの「operation not permitted」エラーを修正 | Fixed sandbox "operation not permitted" errors when writing temporary files on macOS by using the correct per-user temp directory (anthropics/claude-code#21654) | fixed |
| 完了時に `ReferenceError` でクラッシュする Task ツール（バックグラウンドエージェント）を修正 | Fixed Task tool (backgrounded agents) crashing with a `ReferenceError` on completion (anthropics/claude-code#22087) | fixed |
| 入力欄に画像を貼り付けた際に Enter キーでオートコンプリートの候補が確定されない問題を修正 | Fixed autocomplete suggestions not being accepted on Enter when images are pasted in the input | fixed |
| サブエージェントから呼び出されたスキルがコンパクション後にメインセッションのコンテキストへ誤って表示される問題を修正 | Fixed skills invoked by subagents incorrectly appearing in main session context after compaction | fixed |
| 起動のたびに `.claude.json.backup` ファイルが過剰に蓄積する問題を修正 | Fixed excessive `.claude.json.backup` files accumulating on every startup | fixed |
| プラグインが提供するコマンド・エージェント・フックが、再起動なしでインストール直後から利用できない問題を修正 | Fixed plugin-provided commands, agents, and hooks not being available immediately after installation without requiring a restart | fixed |
| 統計キャッシュ用のセッション履歴の先行読み込みを廃止し、起動パフォーマンスを改善 | Improved startup performance by removing eager loading of session history for stats caching | improved |
| 大量出力を生成するシェルコマンドのメモリ使用量を改善（コマンド出力サイズに応じた RSS の際限ない増加を解消） | Improved memory usage for shell commands that produce large output — RSS no longer grows unboundedly with command output size | improved |
| 折りたたまれた読み取り／検索グループに、アクティブ中はサマリー行の下に処理中のファイルまたは検索パターンを表示するよう改善 | Improved collapsed read/search groups to show the current file or search pattern being processed beneath the summary line while active | improved |
| [VSCode] 権限の保存先選択（プロジェクト／ユーザー／セッション）がセッションをまたいで維持されるよう改善 | [VSCode] Improved permission destination choice (project/user/session) to persist across sessions | improved |

## 2.1.44

| 日本語 | English | Category |
|--------|---------|----------|
| 深くネストされたディレクトリパスでENAMETOOLONGエラーが発生する問題を修正 | Fixed ENAMETOOLONG errors for deeply-nested directory paths | fixed |
| 認証更新エラーを修正 | Fixed auth refresh errors | fixed |

## 2.1.43

| 日本語 | English | Category |
|--------|---------|----------|
| AWSの認証リフレッシュが無限にハングする問題を3分タイムアウトの追加により修正 | Fixed AWS auth refresh hanging indefinitely by adding a 3-minute timeout | fixed |
| `.claude/agents/` ディレクトリ内の非エージェントMarkdownファイルに対する誤警告を修正 | Fixed spurious warnings for non-agent markdown files in `.claude/agents/` directory | fixed |
| Vertex/Bedrockで構造化出力のベータヘッダーが無条件に送信される問題を修正 | Fixed structured-outputs beta header being sent unconditionally on Vertex/Bedrock | fixed |

## 2.1.42

| 日本語 | English | Category |
|--------|---------|----------|
| Zodスキーマ構築の遅延による起動パフォーマンスの改善 | Improved startup performance by deferring Zod schema construction | improved |
| システムプロンプトから日付を移動してプロンプトキャッシュヒット率を改善 | Improved prompt cache hit rates by moving date out of system prompt | improved |
| 対象ユーザー向けのOpus 4.6エフォート表示を1回限りで追加 | Added one-time Opus 4.6 effort callout for eligible users | added |
| /resumeで中断メッセージがセッションタイトルとして表示される問題を修正 | Fixed /resume showing interrupt messages as session titles | fixed |
| 画像サイズ制限エラーで/compactの使用を提案するように修正 | Fixed image dimension limit errors to suggest /compact | fixed |

## 2.1.41

| 日本語 | English | Category |
|--------|---------|----------|
| Claude Code内で別のClaude Codeセッションを起動できないようガードを追加 | Added guard against launching Claude Code inside another Claude Code session | added |
| Agent TeamsがBedrock、Vertex、Foundryユーザーに対して誤ったモデル識別子を使用する問題を修正 | Fixed Agent Teams using wrong model identifier for Bedrock, Vertex, and Foundry customers | fixed |
| MCPツールがストリーミング中に画像コンテンツを返した際のクラッシュを修正 | Fixed a crash when MCP tools return image content during streaming | fixed |
| /resumeセッションプレビューが読みやすいコマンド名ではなく生のXMLタグを表示する問題を修正 | Fixed /resume session previews showing raw XML tags instead of readable command names | fixed |
| Bedrock/Vertex/Foundryユーザー向けのモデルエラーメッセージをフォールバック提案付きで改善 | Improved model error messages for Bedrock/Vertex/Foundry users with fallback suggestions | improved |
| プラグインブラウザが既にインストール済みのプラグインに対して誤解を招く「Space to Toggle」ヒントを表示する問題を修正 | Fixed plugin browse showing misleading "Space to Toggle" hint for already-installed plugins | fixed |
| フックブロッキングエラー（終了コード2）がstderrをユーザーに表示しない問題を修正 | Fixed hook blocking errors (exit code 2) not showing stderr to the user | fixed |
| 高速モードの可視性のためにOTelイベントとトレーススパンに`speed`属性を追加 | Added `speed` attribute to OTel events and trace spans for fast mode visibility | added |
| `claude auth login`、`claude auth status`、`claude auth logout` CLIサブコマンドを追加 | Added `claude auth login`, `claude auth status`, and `claude auth logout` CLI subcommands | added |
| Windows ARM64 (win32-arm64) ネイティブバイナリサポートを追加 | Added Windows ARM64 (win32-arm64) native binary support | added |
| 引数なしで呼び出された際に会話コンテキストからセッション名を自動生成するよう `/rename` を改善 | Improved `/rename` to auto-generate session name from conversation context when called without arguments | improved |
| 狭い端末レイアウトにおけるプロンプトフッターの表示を改善 | Improved narrow terminal layout for prompt footer | improved |
| アンカーフラグメント付き@メンション(例: `@README.md#installation`)でファイル解決が失敗する問題を修正 | Fixed file resolution failing for @-mentions with anchor fragments (e.g., `@README.md#installation`) | fixed |
| FIFO、`/dev/stdin`、大容量ファイルでFileReadToolがプロセスをブロックする問題を修正 | Fixed FileReadTool blocking the process on FIFOs, `/dev/stdin`, and large files | fixed |
| ストリーミングAgent SDKモードでバックグラウンドタスク通知が配信されない問題を修正 | Fixed background task notifications not being delivered in streaming Agent SDK mode | fixed |
| 分類ルール入力欄で各キー入力時にカーソルが末尾にジャンプする問題を修正 | Fixed cursor jumping to end on each keystroke in classifier rule input | fixed |
| 生URLに対するマークダウンリンクの表示テキストが削除される問題を修正 | Fixed markdown link display text being dropped for raw URL | fixed |
| 自動コンパクト失敗のエラー通知がユーザーに表示される問題を修正 | Fixed auto-compact failure error notifications being shown to users | fixed |
| サブエージェントの経過時間表示に権限待機時間が含まれる問題を修正 | Fixed permission wait time being included in subagent elapsed time display | fixed |
| プランモード中にproactive ticksが発火する問題を修正 | Fixed proactive ticks firing while in plan mode | fixed |
| 設定ファイルがディスク上で変更された際に古い権限ルールをクリアするよう修正 | Fixed clear stale permission rules when settings change on disk | fixed |
| フックのブロッキングエラーがUI上でstderrの内容を表示する問題を修正 | Fixed hook blocking errors showing stderr content in UI | fixed |

## 2.1.39

| 日本語 | English | Category |
|--------|---------|----------|
| ターミナルレンダリングのパフォーマンス改善 | Improved terminal rendering performance | improved |
| 致命的エラーが表示されずに握りつぶされる問題を修正 | Fixed fatal errors being swallowed instead of displayed | fixed |
| セッション終了後にプロセスがハングする問題を修正 | Fixed process hanging after session close | fixed |
| ターミナル画面境界で文字が失われる問題を修正 | Fixed character loss at terminal screen boundary | fixed |
| 詳細トランスクリプトビューの空白行を修正 | Fixed blank lines in verbose transcript view | fixed |

## 2.1.38

| 日本語 | English | Category |
|--------|---------|----------|
| 2.1.37で発生したVS Codeターミナルの最上部へのスクロール動作の不具合を修正 | Fixed VS Code terminal scroll-to-top regression introduced in 2.1.37 | fixed |
| Tabキーでスラッシュコマンドがキューイングされ、オートコンプリートが機能しない問題を修正 | Fixed Tab key queueing slash commands instead of autocompleting | fixed |
| 環境変数ラッパーを使用するコマンドのbash権限マッチングを修正 | Fixed bash permission matching for commands using environment variable wrappers | fixed |
| ストリーミングを使用しない場合にツール使用間のテキストが消失する問題を修正 | Fixed text between tool uses disappearing when not using streaming | fixed |
| VS Code拡張機能で再開時にセッションが重複する問題を修正 | Fixed duplicate sessions when resuming in VS Code extension | fixed |
| heredocデリミタのパース処理を改善し、コマンドインジェクションを防止 | Improved heredoc delimiter parsing to prevent command smuggling | improved |
| サンドボックスモードで`.claude/skills`ディレクトリへの書き込みをブロック | Blocked writes to `.claude/skills` directory in sandbox mode | added |

## 2.1.37

| 日本語 | English | Category |
|--------|---------|----------|
| /extra-usage 有効化後に /fast がすぐに利用できない問題を修正 | Fixed an issue where /fast was not immediately available after enabling /extra-usage | fixed |

## 2.1.36

| 日本語 | English | Category |
|--------|---------|----------|
| Opus 4.6 で Fast モードが利用可能に。詳細は https://code.claude.com/docs/en/fast-mode を参照 | Fast mode is now available for Opus 4.6. Learn more at https://code.claude.com/docs/en/fast-mode | added |

## 2.1.34

| 日本語 | English | Category |
|--------|---------|----------|
| レンダリング間でエージェントチーム設定が変更された際のクラッシュを修正 | Fixed a crash when agent teams setting changed between renders | fixed |
| `autoAllowBashIfSandboxed` 有効時にサンドボックスから除外されたコマンド（`sandbox.excludedCommands` または `dangerouslyDisableSandbox` 経由）が Bash の確認許可ルールをバイパス可能だったバグを修正 | Fixed a bug where commands excluded from sandboxing (via `sandbox.excludedCommands` or `dangerouslyDisableSandbox`) could bypass the Bash ask permission rule when `autoAllowBashIfSandboxed` was enabled | fixed |

## 2.1.33

| 日本語 | English | Category |
|--------|---------|----------|
| tmux 内のエージェント teammate セッションでのメッセージ送受信を修正 | Fixed agent teammate sessions in tmux to send and receive messages | fixed |
| 現在のプランでエージェントチームが利用できない場合の警告を修正 | Fixed warnings about agent teams not being available on your current plan | fixed |
| マルチエージェントワークフロー用の `TeammateIdle` および `TaskCompleted` フックイベントを追加 | Added `TeammateIdle` and `TaskCompleted` hook events for multi-agent workflows | added |
| エージェントの frontmatter "tools" フィールドで `Task(agent_type)` 構文によるサブエージェント起動制限をサポート | Added support for restricting which sub-agents can be spawned via `Task(agent_type)` syntax in agent "tools" frontmatter | added |
| エージェント用の `memory` frontmatter フィールドをサポートし、`user`、`project`、`local` スコープでの永続メモリを有効化 | Added `memory` frontmatter field support for agents, enabling persistent memory with `user`, `project`, or `local` scope | added |
| スキルの説明と `/skills` メニューにプラグイン名を追加し、発見性を向上 | Added plugin name to skill descriptions and `/skills` menu for better discoverability | added |
| モデルが拡張思考中に新しいメッセージを送信すると思考フェーズが中断される問題を修正 | Fixed an issue where submitting a new message while the model was in extended thinking would interrupt the thinking phase | fixed |
| ストリーミング中断時に空白テキストと thinking ブロックが正規化をバイパスして無効なリクエストを生成する API エラーを修正 | Fixed an API error that could occur when aborting mid-stream, where whitespace text combined with a thinking block would bypass normalization and produce an invalid request | fixed |
| ストリーミングエンドポイントでの 404 エラーが非ストリーミングフォールバックをトリガーしなくなった API プロキシ互換性の問題を修正 | Fixed API proxy compatibility issue where 404 errors on streaming endpoints no longer triggered non-streaming fallback | fixed |
| `settings.json` の環境変数で設定されたプロキシ設定が Node.js ビルドの WebFetch および他の HTTP リクエストに適用されない問題を修正 | Fixed an issue where proxy settings configured via `settings.json` environment variables were not applied to WebFetch and other HTTP requests on the Node.js build | fixed |
| スラッシュコマンドで開始されたセッションで `/resume` セッションピッカーが生の XML マークアップを表示する問題を修正 | Fixed `/resume` session picker showing raw XML markup instead of clean titles for sessions started with slash commands | fixed |
| API 接続失敗時のエラーメッセージを改善し、汎用的な「接続エラー」ではなく具体的な原因（ECONNREFUSED、SSL エラーなど）を表示 | Improved error messages for API connection failures — now shows specific cause (e.g., ECONNREFUSED, SSL errors) instead of generic "Connection error" | improved |
| 無効な管理設定によるエラーを表示するように改善 | Errors from invalid managed settings are now surfaced | improved |
| VSCode: リモートセッションをサポートし、OAuth ユーザーが claude.ai からセッションを閲覧・再開可能に | VSCode: Added support for remote sessions, allowing OAuth users to browse and resume sessions from claude.ai | added |
| VSCode: セッションピッカーに git ブランチとメッセージ数を追加し、ブランチ名での検索をサポート | VSCode: Added git branch and message count to the session picker, with support for searching by branch name | added |
| VSCode: 初回セッション読み込みおよびセッション切り替え時の下スクロール不足を修正 | VSCode: Fixed scroll-to-bottom under-scrolling on initial session load and session switch | fixed |

## 2.1.32

| 日本語 | English | Category |
|--------|---------|----------|
| Claude Opus 4.6 が利用可能に | Claude Opus 4.6 is now available! | added |
| マルチエージェント協調のための研究プレビュー版エージェントチーム機能を追加（トークン集約型機能、CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1 の設定が必要） | Added research preview agent teams feature for multi-agent collaboration (token-intensive feature, requires setting CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1) | added |
| Claude が作業中に自動的にメモリを記録・想起する機能を追加 | Claude now automatically records and recalls memories as it works | added |
| メッセージセレクターに「ここから要約」を追加し、部分的な会話要約が可能に | Added "Summarize from here" to the message selector, allowing partial conversation summarization. | added |
| 追加ディレクトリ（`--add-dir`）内の `.claude/skills/` で定義されたスキルが自動読み込みされるように変更 | Skills defined in `.claude/skills/` within additional directories (`--add-dir`) are now loaded automatically. | changed |
| サブディレクトリから実行時に `@` ファイル補完が誤った相対パスを表示する問題を修正 | Fixed `@` file completion showing incorrect relative paths when running from a subdirectory | fixed |
| --resume オプションが以前の会話で指定された --agent の値をデフォルトで再利用するように更新 | Updated --resume to re-use --agent value specified in previous conversation by default. | changed |
| Bash ツールが JavaScript テンプレートリテラル（`${index + 1}` など）を含む heredoc で「Bad substitution」エラーを発生させ、ツール実行を中断していた問題を修正 | Fixed: Bash tool no longer throws "Bad substitution" errors when heredocs contain JavaScript template literals like `${index + 1}`, which previously interrupted tool execution | fixed |
| スキルの文字数制限がコンテキストウィンドウに応じて拡張（コンテキストの 2%）され、大きなコンテキストウィンドウを持つユーザーが切り捨てなしでより多くのスキル説明を閲覧可能に | Skill character budget now scales with context window (2% of context), so users with larger context windows can see more skill descriptions without truncation | improved |
| タイ語・ラオ語のスペーシング母音（สระ า、ำ）が入力フィールドで正しくレンダリングされない問題を修正 | Fixed Thai/Lao spacing vowels (สระ า, ำ) not rendering correctly in the input field | fixed |
| VSCode: 入力フィールドに先行テキストがある状態で Enter を押すとスラッシュコマンドが誤って実行される問題を修正 | VSCode: Fixed slash commands incorrectly being executed when pressing Enter with preceding text in the input field | fixed |
| VSCode: 過去の会話リスト読み込み時にスピナーを追加 | VSCode: Added spinner when loading past conversations list | improved |

## 2.1.31

| 日本語 | English | Category |
|--------|---------|----------|
| 終了時にセッション再開のヒントを表示し、後で会話を続ける方法を案内 | Added session resume hint on exit, showing how to continue your conversation later | added |
| チェックボックス選択で日本語IMEの全角スペース入力に対応 | Added support for full-width (zenkaku) space input from Japanese IME in checkbox selection | added |
| PDFサイズ超過エラーによりセッションが永続的にロックされ、新しい会話の開始が必要になる問題を修正 | Fixed PDF too large errors permanently locking up sessions, requiring users to start a new conversation | fixed |
| サンドボックスモード有効時にbashコマンドが誤って「Read-only file system」エラーで失敗と報告される問題を修正 | Fixed bash commands incorrectly reporting failure with "Read-only file system" errors when sandbox mode was enabled | fixed |
| `~/.claude.json`のプロジェクト設定にデフォルトフィールドが不足している場合、プランモード開始後にセッションが使用不能になるクラッシュを修正 | Fixed a crash that made sessions unusable after entering plan mode when project config in `~/.claude.json` was missing default fields | fixed |
| ストリーミングAPIパスで`temperatureOverride`が無視され、設定した値に関わらずすべてのストリーミングリクエストがデフォルト温度（1）を使用する問題を修正 | Fixed `temperatureOverride` being silently ignored in the streaming API path, causing all streaming requests to use the default temperature (1) regardless of the configured override | fixed |
| nullパラメータを拒否する厳格な言語サーバーとのLSP shutdown/exit互換性を修正 | Fixed LSP shutdown/exit compatibility with strict language servers that reject null params | fixed |
| bash同等コマンド（`cat`、`sed`、`grep`、`find`）の代わりに専用ツール（Read、Edit、Glob、Grep）を使用するようモデルを誘導するシステムプロンプトを改善し、不要なbashコマンド使用を削減 | Improved system prompts to more clearly guide the model toward using dedicated tools (Read, Edit, Glob, Grep) instead of bash equivalents (`cat`, `sed`, `grep`, `find`), reducing unnecessary bash command usage | improved |
| PDFとリクエストサイズのエラーメッセージに実際の制限値（100ページ、20MB）を表示するよう改善 | Improved PDF and request size error messages to show actual limits (100 pages, 20MB) | improved |
| ストリーミング中のスピナー表示・非表示時のターミナルレイアウトのちらつきを軽減 | Reduced layout jitter in the terminal when the spinner appears and disappears during streaming | improved |
| サードパーティプロバイダ（Bedrock、Vertex、Foundry）ユーザー向けのモデルセレクターから誤解を招くAnthropic API価格表示を削除 | Removed misleading Anthropic API pricing from model selector for third-party provider (Bedrock, Vertex, Foundry) users | changed |

## 2.1.30

| 日本語 | English | Category |
|--------|---------|----------|
| PDF に対応した Read ツールに `pages` パラメータを追加し、特定のページ範囲（例: `pages: "1-5"`）を読み取り可能に。大きな PDF（10 ページ超）を `@` でメンションした際、コンテキストへの直接埋め込みではなく軽量な参照を返すように変更 | Added `pages` parameter to the Read tool for PDFs, allowing specific page ranges to be read (e.g., `pages: "1-5"`). Large PDFs (>10 pages) now return a lightweight reference when `@` mentioned instead of being inlined into context. | added |
| Dynamic Client Registration に対応していない MCP サーバー（Slack など）向けに、事前設定された OAuth クライアント認証情報を追加。`claude mcp add` で `--client-id` と `--client-secret` を使用可能 | Added pre-configured OAuth client credentials for MCP servers that don't support Dynamic Client Registration (e.g., Slack). Use `--client-id` and `--client-secret` with `claude mcp add`. | added |
| Claude が現在のセッションのトラブルシューティングを支援する `/debug` コマンドを追加 | Added `/debug` for Claude to help troubleshoot the current session | added |
| 読み取り専用モードで追加の `git log` および `git show` フラグ（例: `--topo-order`、`--cherry-pick`、`--format`、`--raw`）に対応 | Added support for additional `git log` and `git show` flags in read-only mode (e.g., `--topo-order`, `--cherry-pick`, `--format`, `--raw`) | added |
| Task ツールの結果にトークン数、ツール使用回数、実行時間の指標を追加 | Added token count, tool uses, and duration metrics to Task tool results | added |
| 設定に視覚効果低減モードを追加 | Added reduced motion mode to the config | added |
| API 会話履歴に幻の「(no content)」テキストブロックが出現する問題を修正し、トークンの無駄遣いとモデルの混乱を防止 | Fixed phantom "(no content)" text blocks appearing in API conversation history, reducing token waste and potential model confusion | fixed |
| プロンプトキャッシュがツール名の変更時のみ無効化され、ツールの説明や入力スキーマの変更時に正しく無効化されない問題を修正 | Fixed prompt cache not correctly invalidating when tool descriptions or input schemas changed, only when tool names changed | fixed |
| thinking ブロックを含む会話で `/login` を実行した後に 400 エラーが発生する可能性がある問題を修正 | Fixed 400 errors that could occur after running `/login` when the conversation contained thinking blocks | fixed |
| `parentUuid` の循環を含む破損したトランスクリプトファイルでセッションを再開する際のハングを修正 | Fixed a hang when resuming sessions with corrupted transcript files containing `parentUuid` cycles | fixed |
| extra-usage が利用できない Max 20x ユーザーに対し、レート制限メッセージが誤った「/upgrade」の提案を表示する問題を修正 | Fixed rate limit message showing incorrect "/upgrade" suggestion for Max 20x users when extra-usage is unavailable | fixed |
| 入力中にパーミッションダイアログがフォーカスを奪う問題を修正 | Fixed permission dialogs stealing focus while actively typing | fixed |
| サブエージェントが SDK 提供の MCP ツールにアクセスできない問題を修正（共有アプリケーション状態に同期されていなかったため） | Fixed subagents not being able to access SDK-provided MCP tools because they were not synced to the shared application state | fixed |
| `.bashrc` ファイルを持つ Windows ユーザーが bash コマンドを実行できないリグレッションを修正 | Fixed a regression where Windows users with a `.bashrc` file could not run bash commands | fixed |
| セッションインデックスを軽量な stat ベースの読み込みと段階的なエンリッチメントに置き換え、`--resume` のメモリ使用量を改善（多数のセッションを持つユーザーで 68% 削減） | Improved memory usage for `--resume` (68% reduction for users with many sessions) by replacing the session index with lightweight stat-based loading and progressive enrichment | improved |
| `TaskStop` ツールの結果行に汎用的な「Task stopped」メッセージではなく、停止されたコマンド／タスクの説明を表示するよう改善 | Improved `TaskStop` tool to display the stopped command/task description in the result line instead of a generic "Task stopped" message | improved |
| `/model` コマンドをキューに入れずに即座に実行するよう変更 | Changed `/model` to execute immediately instead of being queued | changed |
| [VSCode] 質問ダイアログの「その他」テキスト入力に複数行入力対応を追加（Shift+Enter で改行） | [VSCode] Added multiline input support to the "Other" text input in question dialogs (use Shift+Enter for new lines) | added |
| [VSCode] 新しい会話を開始した際にセッションリストに重複したセッションが表示される問題を修正 | [VSCode] Fixed duplicate sessions appearing in the session list when starting a new conversation | fixed |

## 2.1.29

| 日本語 | English | Category |
|--------|---------|----------|
| `saved_hook_context` を持つセッション再開時の起動パフォーマンスの問題を修正 | Fixed startup performance issues when resuming sessions that have `saved_hook_context` | fixed |

## 2.1.27

| 日本語 | English | Category |
|--------|---------|----------|
| ツールコール失敗と拒否をデバッグログに追加 | Added tool call failures and denials to debug logs | added |
| ゲートウェイユーザー向けのコンテキスト管理検証エラーを修正し、`CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS=1` でエラーを回避可能に | Fixed context management validation error for gateway users, ensuring `CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS=1` avoids the error | fixed |
| 特定の GitHub PR 番号または URL にリンクされたセッションを再開する `--from-pr` フラグを追加 | Added `--from-pr` flag to resume sessions linked to a specific GitHub PR number or URL | added |
| `gh pr create` で作成時にセッションが自動的に PR にリンクされるように変更 | Sessions are now automatically linked to PRs when created via `gh pr create` | changed |
| /context コマンドで色付き出力が表示されない問題を修正 | Fixed /context command not displaying colored output | fixed |
| PR ステータス表示時にステータスバーがバックグラウンドタスクインジケーターを重複表示する問題を修正 | Fixed status bar duplicating background task indicator when PR status was shown | fixed |
| Windows: `.bashrc` ファイルを持つユーザーで bash コマンド実行が失敗する問題を修正 | Windows: Fixed bash command execution failing for users with `.bashrc` files | fixed |
| Windows: 子プロセス生成時にコンソールウィンドウが点滅する問題を修正 | Windows: Fixed console windows flashing when spawning child processes | fixed |
| VSCode: 長時間セッション後に OAuth トークン期限切れで 401 エラーが発生する問題を修正 | VSCode: Fixed OAuth token expiration causing 401 errors after extended sessions | fixed |

## 2.1.25

| 日本語 | English | Category |
|--------|---------|----------|
| Bedrock と Vertex のゲートウェイユーザーに対するベータヘッダー検証エラーを修正し、`CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS=1` でエラー回避を保証 | Fixed beta header validation error for gateway users on Bedrock and Vertex, ensuring `CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS=1` avoids the error | fixed |

## 2.1.23

| 日本語 | English | Category |
|--------|---------|----------|
| カスタマイズ可能なスピナー動詞設定（`spinnerVerbs`）を追加 | Added customizable spinner verbs setting (`spinnerVerbs`) | added |
| 企業プロキシまたはクライアント証明書使用環境における mTLS とプロキシ接続の問題を修正 | Fixed mTLS and proxy connectivity for users behind corporate proxies or using client certificates | fixed |
| 共有システムにおける権限競合を防ぐためのユーザーごとの一時ディレクトリ分離を修正 | Fixed per-user temp directory isolation to prevent permission conflicts on shared systems | fixed |
| プロンプトキャッシュスコープ有効時に 400 エラーを引き起こす可能性のある競合状態を修正 | Fixed a race condition that could cause 400 errors when prompt caching scope was enabled | fixed |
| ヘッドレスストリーミングセッション終了時に保留中の非同期フックがキャンセルされない問題を修正 | Fixed pending async hooks not being cancelled when headless streaming sessions ended | fixed |
| タブ補完で候補を受け入れた際に入力フィールドが更新されない問題を修正 | Fixed tab completion not updating the input field when accepting a suggestion | fixed |
| ripgrep 検索タイムアウト時にエラーを報告せず空の結果を返す問題を修正 | Fixed ripgrep search timeouts silently returning empty results instead of reporting errors | fixed |
| 最適化された画面データレイアウトによるターミナルレンダリングパフォーマンスの改善 | Improved terminal rendering performance with optimized screen data layout | improved |
| Bash コマンドで経過時間と共にタイムアウト時間を表示するように変更 | Changed Bash commands to show timeout duration alongside elapsed time | changed |
| マージされたプルリクエストをプロンプトフッターで紫色のステータスインジケーターで表示するように変更 | Changed merged pull requests to show a purple status indicator in the prompt footer | changed |
| [IDE] ヘッドレスモードで Bedrock ユーザーに対してモデルオプションが誤ったリージョン文字列を表示する問題を修正 | [IDE] Fixed model options displaying incorrect region strings for Bedrock users in headless mode | fixed |

## 2.1.22

| 日本語 | English | Category |
|--------|---------|----------|
| 非対話モード (-p) における構造化出力を修正 | Fixed structured outputs for non-interactive (-p) mode | fixed |

## 2.1.21

| 日本語 | English | Category |
|--------|---------|----------|
| 日本語IMEからの全角数字入力に対応（オプション選択プロンプト） | Added support for full-width (zenkaku) number input from Japanese IME in option selection prompts | added |
| シェル補完キャッシュファイルが終了時に切り詰められる問題を修正 | Fixed shell completion cache files being truncated on exit | fixed |
| ツール実行中に中断されたセッションの再開時に発生するAPIエラーを修正 | Fixed API errors when resuming sessions that were interrupted during tool execution | fixed |
| 大きな出力トークン制限を持つモデルで自動コンパクト化が早期にトリガーされる問題を修正 | Fixed auto-compact triggering too early on models with large output token limits | fixed |
| タスクID削除後に再利用される可能性がある問題を修正 | Fixed task IDs potentially being reused after deletion | fixed |
| VS Code拡張機能のWindows環境でファイル検索が機能しない問題を修正 | Fixed file search not working in VS Code extension on Windows | fixed |
| 読み取り/検索の進行状況インジケーターを改善（進行中は「Reading…」、完了時は「Read」と表示） | Improved read/search progress indicators to show "Reading…" while in progress and "Read" when complete | improved |
| bashコマンド（cat、sed、awk）より専用ファイル操作ツール（Read、Edit、Write）を優先するよう改善 | Improved Claude to prefer file operation tools (Read, Edit, Write) over bash equivalents (cat, sed, awk) | improved |
| [VSCode] Python仮想環境の自動アクティベーション機能を追加（`python`と`pip`コマンドが正しいインタープリターを使用、`claudeCode.usePythonEnvironment`設定で制御可能） | [VSCode] Added automatic Python virtual environment activation, ensuring `python` and `pip` commands use the correct interpreter (configurable via `claudeCode.usePythonEnvironment` setting) | added |
| [VSCode] メッセージアクションボタンの背景色が不正確な問題を修正 | [VSCode] Fixed message action buttons having incorrect background colors | fixed |

## 2.1.20

| 日本語 | English | Category |
|--------|---------|----------|
| vim ノーマルモードでカーソルが移動できない場合に矢印キーで履歴ナビゲーションを追加 | Added arrow key history navigation in vim normal mode when cursor cannot move further | added |
| 外部エディタショートカット（Ctrl+G）をヘルプメニューに追加して発見性を向上 | Added external editor shortcut (Ctrl+G) to the help menu for better discoverability | added |
| プロンプトフッターに PR レビューステータスインジケーターを追加し、現在のブランチの PR 状態（承認済み、変更要求、保留中、ドラフト）を色付きドットとクリック可能なリンクで表示 | Added PR review status indicator to the prompt footer, showing the current branch's PR state (approved, changes requested, pending, or draft) as a colored dot with a clickable link | added |
| `--add-dir` フラグで指定した追加ディレクトリからの `CLAUDE.md` ファイル読み込みに対応（`CLAUDE_CODE_ADDITIONAL_DIRECTORIES_CLAUDE_MD=1` の設定が必要） | Added support for loading `CLAUDE.md` files from additional directories specified via `--add-dir` flag (requires setting `CLAUDE_CODE_ADDITIONAL_DIRECTORIES_CLAUDE_MD=1`) | added |
| `TaskUpdate` ツールによるタスク削除機能を追加 | Added ability to delete tasks via the `TaskUpdate` tool | added |
| セッション圧縮時にレジューム時へ完全な履歴が読み込まれる問題を修正 | Fixed session compaction issues that could cause resume to load full history instead of the compact summary | fixed |
| エージェントがタスク実行中にユーザーメッセージを無視することがある問題を修正 | Fixed agents sometimes ignoring user messages sent while actively working on a task | fixed |
| 絵文字や CJK 文字などのワイド文字がより狭い文字に置き換えられた際に末尾カラムがクリアされない表示不具合を修正 | Fixed wide character (emoji, CJK) rendering artifacts where trailing columns were not cleared when replaced by narrower characters | fixed |
| MCP ツールレスポンスに特殊な Unicode 文字が含まれる場合の JSON パースエラーを修正 | Fixed JSON parsing errors when MCP tool responses contain special Unicode characters | fixed |
| 複数行およびラップされたテキスト入力での上下矢印キーの動作を改善し、履歴ナビゲーションよりカーソル移動を優先 | Fixed up/down arrow keys in multi-line and wrapped text input to prioritize cursor movement over history navigation | improved |
| UP 矢印キーでコマンド履歴をナビゲートした際にドラフトプロンプトが失われる問題を修正 | Fixed draft prompt being lost when pressing UP arrow to navigate command history | fixed |
| スラッシュコマンド入力中のゴーストテキストのちらつきを修正 | Fixed ghost text flickering when typing slash commands mid-input | fixed |
| マーケットプレイスソースの削除時に設定が適切に削除されない問題を修正 | Fixed marketplace source removal not properly deleting settings | fixed |
| `/context` などの一部コマンドで出力が重複する問題を修正 | Fixed duplicate output in some commands like `/context` | fixed |
| タスクリストがメイン会話ビューの外に表示されることがある問題を修正 | Fixed task list sometimes showing outside the main conversation view | fixed |
| Python docstring などの複数行構造内で発生する diff のシンタックスハイライトを修正 | Fixed syntax highlighting for diffs occurring within multiline constructs like Python docstrings | fixed |
| ツール使用キャンセル時のクラッシュを修正 | Fixed crashes when cancelling tool use | fixed |
| `/sandbox` コマンドの UI を改善し、依存関係が不足している場合にインストール手順付きのステータスを表示 | Improved `/sandbox` command UI to show dependency status with installation instructions when dependencies are missing | improved |
| thinking ステータステキストに微細なシマーアニメーションを追加して改善 | Improved thinking status text with a subtle shimmer animation | improved |
| タスクリストをターミナルの高さに応じて表示項目を動的調整するように改善 | Improved task list to dynamically adjust visible items based on terminal height | improved |
| フォーク会話のヒント表示を改善し、元のセッションを再開する方法を表示 | Improved fork conversation hint to show how to resume the original session | improved |
| 折りたたまれた読み取り・検索グループの表示を変更し、進行中は現在進行形（「Reading」「Searching for」）、完了後は過去形（「Read」「Searched for」）で表示 | Changed collapsed read/search groups to show present tense ("Reading", "Searching for") while in progress, and past tense ("Read", "Searched for") when complete | changed |
| `ToolSearch` の結果を会話内インライン表示から簡潔な通知表示に変更 | Changed `ToolSearch` results to appear as a brief notification instead of inline in the conversation | changed |
| `/commit-push-pr` スキルを変更し、MCP ツール経由で設定されている場合に PR URL を Slack チャンネルに自動投稿 | Changed the `/commit-push-pr` skill to automatically post PR URLs to Slack channels when configured via MCP tools | changed |
| `/copy` コマンドを全ユーザーが利用可能に変更 | Changed the `/copy` command to be available to all users | changed |
| バックグラウンドエージェントが起動前にツール権限のプロンプトを表示するように変更 | Changed background agents to prompt for tool permissions before launching | changed |
| `Bash(*)` のような権限ルールを受け入れ、`Bash` と同等に扱うように変更 | Changed permission rules like `Bash(*)` to be accepted and treated as equivalent to `Bash` | changed |
| 設定バックアップをタイムスタンプ付きでローテーション（最新 5 件を保持）し、データ損失を防止するように変更 | Changed config backups to be timestamped and rotated (keeping 5 most recent) to prevent data loss | changed |

## 2.1.19

| 日本語 | English | Category |
|--------|---------|----------|
| 環境変数 `CLAUDE_CODE_ENABLE_TASKS` を追加、`false` に設定することで一時的に旧システムを維持可能 | Added env var `CLAUDE_CODE_ENABLE_TASKS`, set to `false` to keep the old system temporarily | added |
| カスタムコマンドで個別の引数にアクセスするための短縮記法 `$0`、`$1` などを追加 | Added shorthand `$0`, `$1`, etc. for accessing individual arguments in custom commands | added |
| AVX命令セットをサポートしないプロセッサでのクラッシュを修正 | Fixed crashes on processors without AVX instruction support | fixed |
| `process.exit()` からの EIO エラーをキャッチし SIGKILL をフォールバックとして使用することで、ターミナルを閉じた際の Claude Code プロセスの残留を修正 | Fixed dangling Claude Code processes when terminal is closed by catching EIO errors from `process.exit()` and using SIGKILL as fallback | fixed |
| `/rename` および `/tag` が異なるディレクトリ（例: git worktree）から再開した際に正しいセッションを更新しない問題を修正 | Fixed `/rename` and `/tag` not updating the correct session when resuming from a different directory (e.g., git worktrees) | fixed |
| カスタムタイトルによるセッション再開が異なるディレクトリから実行した際に機能しない問題を修正 | Fixed resuming sessions by custom title not working when run from a different directory | fixed |
| プロンプトスタッシュ（Ctrl+S）と復元を使用した際に貼り付けたテキストコンテンツが失われる問題を修正 | Fixed pasted text content being lost when using prompt stash (Ctrl+S) and restore | fixed |
| エージェントリストで明示的なモデル設定がないエージェントに対して「Inherit (default)」ではなく「Sonnet (default)」と表示される問題を修正 | Fixed agent list displaying "Sonnet (default)" instead of "Inherit (default)" for agents without an explicit model setting | fixed |
| バックグラウンド化されたフックコマンドが早期リターンせず、意図的にバックグラウンド化されたプロセスをセッションが待機してしまう可能性がある問題を修正 | Fixed backgrounded hook commands not returning early, potentially causing the session to wait on a process that was intentionally backgrounded | fixed |
| ファイル書き込みプレビューで空行が省略される問題を修正 | Fixed file write preview omitting empty lines | fixed |
| 追加の権限やフックを必要としないスキルを承認なしで許可するように変更 | Changed skills without additional permissions or hooks to be allowed without requiring approval | changed |
| インデックス付き引数の構文を `$ARGUMENTS.0` から `$ARGUMENTS[0]`（ブラケット構文）に変更 | Changed indexed argument syntax from `$ARGUMENTS.0` to `$ARGUMENTS[0]` (bracket syntax) | changed |
| [SDK] `replayUserMessages` が有効な場合に `queued_command` 添付メッセージを `SDKUserMessageReplay` イベントとして再生する機能を追加 | [SDK] Added replay of `queued_command` attachment messages as `SDKUserMessageReplay` events when `replayUserMessages` is enabled | added |
| [VSCode] セッションフォークおよび巻き戻し機能をすべてのユーザーに対して有効化 | [VSCode] Enabled session forking and rewind functionality for all users | changed |

## 2.1.18

| 日本語 | English | Category |
|--------|---------|----------|
| キーボードショートカットのカスタマイズに対応。コンテキストごとのキーバインド設定、コードシーケンスの作成、ワークフローのパーソナライズが可能に。`/keybindings` で開始 | Added customizable keyboard shortcuts. Configure keybindings per context, create chord sequences, and personalize your workflow. Run `/keybindings` to get started. Learn more at https://code.claude.com/docs/en/keybindings | added |

## 2.1.17

| 日本語 | English | Category |
|--------|---------|----------|
| AVX命令非対応プロセッサでのクラッシュを修正 | Fixed crashes on processors without AVX instruction support | fixed |

## 2.1.16

| 日本語 | English | Category |
|--------|---------|----------|
| 依存関係追跡を含む新しいタスク管理システムを追加 | Added new task management system, including new capabilities like dependency tracking | added |
| [VSCode] ネイティブプラグイン管理のサポートを追加 | [VSCode] Added native plugin management support | added |
| [VSCode] OAuth ユーザーがセッションダイアログからリモート Claude セッションを閲覧・再開できる機能を追加 | [VSCode] Added ability for OAuth users to browse and resume remote Claude sessions from the Sessions dialog | added |
| サブエージェントを大量に使用したセッションの再開時にメモリ不足でクラッシュする問題を修正 | Fixed out-of-memory crashes when resuming sessions with heavy subagent usage | fixed |
| `/compact` 実行後に「残りコンテキスト」警告が非表示にならない問題を修正 | Fixed an issue where the "context remaining" warning was not hidden after running `/compact` | fixed |
| 再開画面のセッションタイトルがユーザーの言語設定を反映しない問題を修正 | Fixed session titles on the resume screen not respecting the user's language setting | fixed |
| [IDE] Windows 環境で起動時に Claude Code サイドバービューコンテナが表示されない競合状態を修正 | [IDE] Fixed a race condition on Windows where the Claude Code sidebar view container would not appear on start | fixed |

## 2.1.15

| 日本語 | English | Category |
|--------|---------|----------|
| npm インストールの非推奨通知を追加（`claude install` を実行するか https://docs.anthropic.com/en/docs/claude-code/getting-started で他のオプションを確認） | Added deprecation notification for npm installations - run `claude install` or see https://docs.anthropic.com/en/docs/claude-code/getting-started for more options | added |
| React Compiler による UI レンダリングパフォーマンスを改善 | Improved UI rendering performance with React Compiler | improved |
| `/compact` 実行後に「Context left until auto-compact」警告が消えない問題を修正 | Fixed the "Context left until auto-compact" warning not disappearing after running `/compact` | fixed |
| MCP stdio サーバーのタイムアウト時に子プロセスが終了せず UI フリーズを引き起こす問題を修正 | Fixed MCP stdio server timeout not killing child process, which could cause UI freezes | fixed |

## 2.1.14

| 日本語 | English | Category |
|--------|---------|----------|
| Bash モード (`!`) に履歴ベースのオートコンプリートを追加 - コマンドの一部を入力して Tab を押すと bash コマンド履歴から補完 | Added history-based autocomplete in bash mode (`!`) - type a partial command and press Tab to complete from your bash command history | added |
| インストール済みプラグイン一覧に検索機能を追加 - 名前や説明でフィルタリングが可能 | Added search to installed plugins list - type to filter by name or description | added |
| プラグインを特定の git コミット SHA にピン留めする機能を追加し、マーケットプレイスエントリから正確なバージョンをインストール可能に | Added support for pinning plugins to specific git commit SHAs, allowing marketplace entries to install exact versions | added |
| コンテキストウィンドウのブロック制限が過度に厳密に計算され、意図した 98% ではなく 65% でユーザーがブロックされる不具合を修正 | Fixed a regression where the context window blocking limit was calculated too aggressively, blocking users at ~65% context usage instead of the intended ~98% | fixed |
| 並列サブエージェント実行時にクラッシュを引き起こす可能性があったメモリ問題を修正 | Fixed memory issues that could cause crashes when running parallel subagents | fixed |
| シェルコマンド完了後にストリームリソースがクリーンアップされず、長時間セッションでメモリリークが発生する問題を修正 | Fixed memory leak in long-running sessions where stream resources were not cleaned up after shell commands completed | fixed |
| Bash モードで `@` 記号が誤ってファイルオートコンプリート候補をトリガーする問題を修正 | Fixed `@` symbol incorrectly triggering file autocomplete suggestions in bash mode | fixed |
| `@` メンションメニューでフォルダクリック時に選択ではなくディレクトリ内に移動するよう動作を修正 | Fixed `@`-mention menu folder click behavior to navigate into directories instead of selecting them | fixed |
| `/feedback` コマンドで説明が非常に長い場合に無効な GitHub issue URL が生成される問題を修正 | Fixed `/feedback` command generating invalid GitHub issue URLs when description is very long | fixed |
| `/context` コマンドの詳細モードでステータスラインと同じトークン数とパーセンテージを表示するよう修正 | Fixed `/context` command to show the same token count and percentage as the status line in verbose mode | fixed |
| `/config`、`/context`、`/model`、`/todos` コマンドのオーバーレイが予期せず閉じる問題を修正 | Fixed an issue where `/config`, `/context`, `/model`, and `/todos` command overlays could close unexpectedly | fixed |
| 類似コマンドを入力した際にスラッシュコマンドのオートコンプリートが誤ったコマンドを選択する問題を修正（例: `/context` vs `/compact`） | Fixed slash command autocomplete selecting wrong command when typing similar commands (e.g., `/context` vs `/compact`) | fixed |
| マーケットプレイスが 1 つのみ設定されている場合のプラグインマーケットプレイスでの戻るナビゲーションの不整合を修正 | Fixed inconsistent back navigation in plugin marketplace when only one marketplace is configured | fixed |
| iTerm2 のプログレスバーが終了時に適切にクリアされず、インジケーターやベル音が残る問題を修正 | Fixed iTerm2 progress bar not clearing properly on exit, preventing lingering indicators and bell sounds | fixed |
| バックスペースで貼り付けたテキストを 1 文字ずつではなく単一トークンとして削除するよう改善 | Improved backspace to delete pasted text as a single token instead of one character at a time | improved |
| [VSCode] 現在のプラン使用状況を表示する `/usage` コマンドを追加 | [VSCode] Added `/usage` command to display current plan usage | added |

## 2.1.12

| 日本語 | English | Category |
|--------|---------|----------|
| メッセージレンダリングのバグを修正 | Fixed message rendering bug | fixed |

## 2.1.11

| 日本語 | English | Category |
|--------|---------|----------|
| HTTP/SSE トランスポートにおける過剰な MCP 接続リクエストを修正 | Fixed excessive MCP connection requests for HTTP/SSE transports | fixed |

## 2.1.10

| 日本語 | English | Category |
|--------|---------|----------|
| リポジトリのセットアップとメンテナンス操作のために `--init`、`--init-only`、または `--maintenance` CLI フラグで実行できる新しい `Setup` フックイベントを追加 | Added new `Setup` hook event that can be triggered via `--init`, `--init-only`, or `--maintenance` CLI flags for repository setup and maintenance operations | added |
| ログイン時にブラウザが自動的に開かない場合に OAuth URL をコピーするキーボードショートカット 'c' を追加 | Added keyboard shortcut 'c' to copy OAuth URL when browser doesn't open automatically during login | added |
| JavaScript テンプレートリテラル（`${index + 1}` など）を含むヒアドキュメントを含む bash コマンド実行時のクラッシュを修正 | Fixed a crash when running bash commands containing heredocs with JavaScript template literals like `${index + 1}` | fixed |
| REPL が完全に起動する前に入力されたキーストロークをキャプチャするよう起動処理を改善 | Improved startup to capture keystrokes typed before the REPL is fully ready | improved |
| ファイル提案を受け入れ時にテキスト挿入ではなく削除可能な添付ファイルとして表示するよう改善 | Improved file suggestions to show as removable attachments instead of inserting text when accepted | improved |
| [VSCode] プラグイン一覧にインストール数の表示を追加 | [VSCode] Added install count display to plugin listings | added |
| [VSCode] プラグインインストール時に信頼性に関する警告を追加 | [VSCode] Added trust warning when installing plugins | added |

## 2.1.9

| 日本語 | English | Category |
|--------|---------|----------|
| MCP ツールの自動有効化しきい値を設定する `auto:N` 構文を追加（N はコンテキストウィンドウのパーセンテージ、0-100） | Added `auto:N` syntax for configuring the MCP tool search auto-enable threshold, where N is the context window percentage (0-100) | added |
| プランファイルの保存場所をカスタマイズする `plansDirectory` 設定を追加 | Added `plansDirectory` setting to customize where plan files are stored | added |
| AskUserQuestion の「その他」入力フィールドに外部エディタサポート（Ctrl+G）を追加 | Added external editor support (Ctrl+G) in AskUserQuestion "Other" input field | added |
| Web セッションから作成されたコミットと PR にセッション URL の帰属情報を追加 | Added session URL attribution to commits and PRs created from web sessions | added |
| `PreToolUse` フックがモデルに `additionalContext` を返す機能をサポート | Added support for `PreToolUse` hooks to return `additionalContext` to the model | added |
| スキルが現在のセッション ID にアクセスするための `${CLAUDE_SESSION_ID}` 文字列置換を追加 | Added `${CLAUDE_SESSION_ID}` string substitution for skills to access the current session ID | added |
| 並列ツール呼び出しを含む長時間セッションで孤立した tool_result ブロックに関する API エラーで失敗する問題を修正 | Fixed long sessions with parallel tool calls failing with an API error about orphan tool_result blocks | fixed |
| キャッシュされた接続プロミスが解決されない場合に MCP サーバーの再接続がハングする問題を修正 | Fixed MCP server reconnection hanging when cached connection promise never resolves | fixed |
| Kitty キーボードプロトコルを使用するターミナル（Ghostty、iTerm2、kitty、WezTerm）で Ctrl+Z サスペンドが動作しない問題を修正 | Fixed Ctrl+Z suspend not working in terminals using Kitty keyboard protocol (Ghostty, iTerm2, kitty, WezTerm) | fixed |

## 2.1.7

| 日本語 | English | Category |
|--------|---------|----------|
| ターン処理時間メッセージ（例: "Cooked for 1m 6s"）を非表示にする `showTurnDuration` 設定を追加 | Added `showTurnDuration` setting to hide turn duration messages (e.g., "Cooked for 1m 6s") | added |
| 許可プロンプト承認時にフィードバックを提供する機能を追加 | Added ability to provide feedback when accepting permission prompts | added |
| タスク通知にエージェントの最終応答をインライン表示する機能を追加し、完全なトランスクリプトファイルを読まずに結果を確認可能に | Added inline display of agent's final response in task notifications, making it easier to see results without reading the full transcript file | added |
| ワイルドカード権限ルールがシェル演算子を含む複合コマンドにマッチする脆弱性を修正 | Fixed security vulnerability where wildcard permission rules could match compound commands containing shell operators | other |
| Windows でクラウド同期ツール、アンチウイルススキャナー、Git がコンテンツを変更せずにファイルのタイムスタンプのみを更新した際に発生する誤った「ファイル変更」エラーを修正 | Fixed false "file modified" errors on Windows when cloud sync tools, antivirus scanners, or Git touch file timestamps without changing content | fixed |
| ストリーミング実行中に並列ツールが失敗した際の孤立した tool_result エラーを修正 | Fixed orphaned tool_result errors when sibling tools fail during streaming execution | fixed |
| コンテキストウィンドウのブロック制限が最大出力トークン用のスペースを確保した有効コンテキストウィンドウではなく、フルコンテキストウィンドウを使用して計算されていた問題を修正 | Fixed context window blocking limit being calculated using the full context window instead of the effective context window (which reserves space for max output tokens) | other |
| `/model` や `/theme` などのローカルスラッシュコマンド実行時にスピナーが一瞬表示される問題を修正 | Fixed spinner briefly flashing when running local slash commands like `/model` or `/theme` | fixed |
| 固定幅ブライユ文字を使用してターミナルタイトルアニメーションのちらつきを修正 | Fixed terminal title animation jitter by using fixed-width braille characters | fixed |
| プラグインインストール時に git サブモジュールが完全に初期化されない問題を修正 | Fixed plugins with git submodules not being fully initialized when installed | fixed |
| Windows 環境において一時ディレクトリのパスに `t` や `n` などの文字が含まれている場合にエスケープシーケンスとして誤解釈され bash コマンドが失敗する問題を修正 | Fixed bash commands failing on Windows when temp directory paths contained characters like `t` or `n` that were misinterpreted as escape sequences | fixed |
| ターミナルレンダリングのメモリ割り当てオーバーヘッドを削減し、入力応答性を改善 | Improved typing responsiveness by reducing memory allocation overhead in terminal rendering | improved |
| すべてのユーザーに対して MCP ツール検索の自動モードをデフォルトで有効化 | Enabled MCP tool search auto mode by default for all users | added |
| OAuth および API コンソールの URL を console.anthropic.com から platform.claude.com に変更 | Changed OAuth and API Console URLs from console.anthropic.com to platform.claude.com | changed |
| VSCodeにおいて、`claudeProcessWrapper`設定がClaude本体のパスではなくラッパーのパスを渡していた問題を修正 | [VSCode] Fixed `claudeProcessWrapper` setting passing the wrapper path instead of the Claude binary path | fixed |

## 2.1.6

| 日本語 | English | Category |
|--------|---------|----------|
| `/config` コマンドに設定を素早く絞り込むための検索機能を追加 | Added search functionality to `/config` command for quickly filtering settings | added |
| `/doctor` コマンドに自動更新チャネルと利用可能な npm バージョン（stable/latest）を表示するアップデート情報セクションを追加 | Added Updates section to `/doctor` showing auto-update channel and available npm versions (stable/latest) | added |
| `/stats` コマンドに日付範囲フィルタを追加、`r` キーで直近7日間・直近30日間・全期間を切り替え可能 | Added date range filtering to `/stats` command - press `r` to cycle between Last 7 days, Last 30 days, and All time | added |
| サブディレクトリ内のファイル操作時に、ネストされた `.claude/skills` ディレクトリからのスキル自動検出を追加 | Added automatic discovery of skills from nested `.claude/skills` directories when working with files in subdirectories | added |
| ステータスラインの入力に `context_window.used_percentage` と `context_window.remaining_percentage` フィールドを追加し、コンテキストウィンドウの表示を容易化 | Added `context_window.used_percentage` and `context_window.remaining_percentage` fields to status line input for easier context window display | added |
| Ctrl+G 実行時にエディタが失敗した場合のエラー表示を追加 | Added an error display when the editor fails during Ctrl+G | added |
| シェル行継続によるパーミッションバイパスを修正し、ブロックされたコマンドの実行を防止 | Fixed permission bypass via shell line continuation that could allow blocked commands to execute | fixed |
| ファイル監視機能がファイル内容を変更せずにタッチした際に発生する誤った「ファイルが予期せず変更されました」エラーを修正 | Fixed false "File has been unexpectedly modified" errors when file watchers touch files without changing content | fixed |
| 複数行の応答でテキストスタイル（太字、色）が徐々にずれる問題を修正 | Fixed text styling (bold, colors) getting progressively misaligned in multi-line responses | fixed |
| フィードバックパネルで説明欄に「n」を入力した際に予期せず閉じてしまう問題を修正 | Fixed the feedback panel closing unexpectedly when typing 'n' in the description field | fixed |
| 週次リセット後の低使用率時にレート制限警告が表示される問題を修正（現在は70%以上の使用率で表示） | Fixed rate limit warning appearing at low usage after weekly reset (now requires 70% usage) | fixed |
| セッション再開時にレート制限オプションメニューが誤って開く不具合を修正 | Fixed rate limit options menu incorrectly auto-opening when resuming a previous session | fixed |
| Kitty keyboard protocol 対応ターミナルにおけるテンキー入力時のエスケープシーケンス出力問題を修正 | Fixed numpad keys outputting escape sequences instead of characters in Kitty keyboard protocol terminals | fixed |
| Kitty キーボードプロトコル端末で Option+Return が改行を挿入しない問題を修正 | Fixed Option+Return not inserting newlines in Kitty keyboard protocol terminals | fixed |
| ホームディレクトリに破損した設定バックアップファイルが蓄積する問題を修正 | Fixed corrupted config backup files accumulating in the home directory | fixed |
| `mcp list` と `mcp get` コマンドで MCP サーバープロセスが孤立したまま残る問題を修正 | Fixed `mcp list` and `mcp get` commands leaving orphaned MCP server processes | fixed |
| ink2 モードでノードが `display:none` により非表示になった際の表示不具合を修正 | Fixed visual artifacts in ink2 mode when nodes become hidden via `display:none` | fixed |
| 外部 CLAUDE.md のインポート承認ダイアログを改善し、どのファイルがどこからインポートされるかを表示 | Improved the external CLAUDE.md imports approval dialog to show which files are being imported and from where | improved |
| バックグラウンドタスクが1つのみの場合、`/tasks` ダイアログで直接タスク詳細に遷移するよう改善 | Improved the `/tasks` dialog to go directly to task details when there's only one background task running | other |
| @ オートコンプリートでアイコンによる候補種別表示と単行フォーマットに対応 | Improved @ autocomplete with icons for different suggestion types and single-line formatting | improved |
| 複数のバックグラウンドタスクが同時に完了した際、タスク通知の表示を3行に制限し、超過分を要約表示するように変更 | Changed task notification display to cap at 3 lines with overflow summary when multiple background tasks complete simultaneously | changed |
| ウィンドウ識別を容易にするため、起動時のターミナルタイトルを "Claude Code" に変更 | Changed terminal title to "Claude Code" on startup for better window identification | other |
| MCP サーバーの有効化/無効化における @メンション機能を削除し、代わりに `/mcp enable <name>` を使用 | Removed ability to @-mention MCP servers to enable/disable - use `/mcp enable <name>` instead | changed |
| [VSCode] 手動コンパクト後に使用状況インジケーターが更新されない問題を修正 | [VSCode] Fixed usage indicator not updating after manual compact | fixed |

## 2.1.5

| 日本語 | English | Category |
|--------|---------|----------|
| 内部一時ファイル用の一時ディレクトリを上書きする `CLAUDE_CODE_TMPDIR` 環境変数を追加（カスタム一時ディレクトリ要件を持つ環境に有用） | Added `CLAUDE_CODE_TMPDIR` environment variable to override the temp directory used for internal temp files, useful for environments with custom temp directory requirements | added |

## 2.1.4

| 日本語 | English | Category |
|--------|---------|----------|
| すべてのバックグラウンドタスク機能（自動バックグラウンド化と Ctrl+B ショートカットを含む）を無効化する `CLAUDE_CODE_DISABLE_BACKGROUND_TASKS` 環境変数を追加 | Added `CLAUDE_CODE_DISABLE_BACKGROUND_TASKS` environment variable to disable all background task functionality including auto-backgrounding and the Ctrl+B shortcut | added |
| 古い OAuth トークンによる失敗時に OAuth を更新して再試行するよう「Help improve Claude」設定の取得処理を修正 | Fixed "Help improve Claude" setting fetch to refresh OAuth and retry when it fails due to a stale OAuth token | fixed |

## 2.1.3

| 日本語 | English | Category |
|--------|---------|----------|
| スラッシュコマンドとスキルを統合し、動作を変更せずにメンタルモデルを簡素化 | Merged slash commands and skills, simplifying the mental model with no change in behavior | changed |
| `/config` にリリースチャネル（`stable` または `latest`）の切り替え機能を追加 | Added release channel (`stable` or `latest`) toggle to `/config` | added |
| 到達不能なパーミッションルールの検出と警告を追加（`/doctor` での警告表示、ルール保存後に各ルールの出所と修正ガイダンスを提供） | Added detection and warnings for unreachable permission rules, with warnings in `/doctor` and after saving rules that include the source of each rule and actionable fix guidance | added |
| `/clear` コマンド実行後もプランファイルが残る問題を修正し、会話クリア後に新しいプランファイルを使用するよう改善 | Fixed plan files persisting across `/clear` commands, now ensuring a fresh plan file is used after clearing a conversation | fixed |
| 大きな inode を持つファイルシステム（ExFAT 等）でのスキル重複誤検出を修正（inode 値に 64 ビット精度を使用） | Fixed false skill duplicate detection on filesystems with large inodes (e.g., ExFAT) by using 64-bit precision for inode values | fixed |
| ステータスバーのバックグラウンドタスク数とタスクダイアログ表示項目の不一致を修正 | Fixed mismatch between background task count in status bar and items shown in tasks dialog | fixed |
| サブエージェントが会話圧縮時に誤ったモデルを使用する問題を修正 | Fixed sub-agents using the wrong model during conversation compaction | fixed |
| ホームディレクトリから実行時に信頼ダイアログを承認してもフックなどの信頼必須機能が有効にならない問題を修正 | Fixed trust dialog acceptance when running from the home directory not enabling trust-requiring features like hooks during the session | fixed |
| ターミナルレンダリングの安定性を改善（制御されていない書き込みによるカーソル状態の破損を防止） | Improved terminal rendering stability by preventing uncontrolled writes from corrupting cursor state | improved |
| スラッシュコマンド候補の可読性を改善（長い説明を 2 行に切り詰め） | Improved slash command suggestion readability by truncating long descriptions to 2 lines | improved |
| ツールフック実行のタイムアウトを 60 秒から 10 分に変更 | Changed tool hook execution timeout from 60 seconds to 10 minutes | changed |
| [VSCode] パーミッションリクエストにクリック可能な保存先セレクタを追加（このプロジェクト、すべてのプロジェクト、チームと共有、またはセッションのみを選択可能） | [VSCode] Added clickable destination selector for permission requests, allowing you to choose where settings are saved (this project, all projects, shared with team, or session only) | added |

## 2.1.2

| 日本語 | English | Category |
|--------|---------|----------|
| ターミナルにドラッグした画像に元のパスメタデータを追加し、Claude が画像の出所を理解できるように対応 | Added source path metadata to images dragged onto the terminal, helping Claude understand where images originated | added |
| OSC 8 対応ターミナル（iTerm など）でツール出力内のファイルパスをクリック可能なハイパーリンクとして表示 | Added clickable hyperlinks for file paths in tool output in terminals that support OSC 8 (like iTerm) | added |
| Windows Package Manager（winget）インストールのサポートを追加し、自動検出と更新手順を提供 | Added support for Windows Package Manager (winget) installations with automatic detection and update instructions | added |
| プランモードで Shift+Tab キーボードショートカットを追加し、「自動編集承認」オプションを素早く選択可能に対応 | Added Shift+Tab keyboard shortcut in plan mode to quickly select "auto-accept edits" option | added |
| `FORCE_AUTOUPDATE_PLUGINS` 環境変数を追加し、メイン自動更新が無効でもプラグイン自動更新を許可 | Added `FORCE_AUTOUPDATE_PLUGINS` environment variable to allow plugin autoupdate even when the main auto-updater is disabled | added |
| `--agent` 指定時に SessionStart フック入力に `agent_type` を追加 | Added `agent_type` to SessionStart hook input, populated if `--agent` is specified | added |
| bash コマンド処理における不正な入力で任意のコマンドが実行されるコマンドインジェクション脆弱性を修正 | Fixed a command injection vulnerability in bash command processing where malformed input could execute arbitrary commands | fixed |
| tree-sitter パースツリーが解放されず、長時間セッションで WASM メモリが無制限に増加するメモリリークを修正 | Fixed a memory leak where tree-sitter parse trees were not being freed, causing WASM memory to grow unbounded over long sessions | fixed |
| CLAUDE.md ファイルの `@include` ディレクティブ使用時に、バイナリファイル（画像、PDF など）が誤ってメモリに含まれる問題を修正 | Fixed binary files (images, PDFs, etc.) being accidentally included in memory when using `@include` directives in CLAUDE.md files | fixed |
| 別のインストールが進行中と誤って表示される更新の問題を修正 | Fixed updates incorrectly claiming another installation is in progress | fixed |
| 監視ディレクトリにソケットファイルが存在する場合のクラッシュを修正（EOPNOTSUPP エラーの多重防御） | Fixed crash when socket files exist in watched directories (defense-in-depth for EOPNOTSUPP errors) | fixed |
| macOS の Option-as-Meta ヒントを改善し、iTerm2、Kitty、WezTerm などネイティブ CSIu ターミナル固有の手順を表示 | Improved Option-as-Meta hint on macOS to show terminal-specific instructions for native CSIu terminals like iTerm2, Kitty, and WezTerm | improved |
| SSH 経由で画像を貼り付ける際のエラーメッセージを改善し、役に立たないクリップボードショートカットヒントの代わりに `scp` の使用を提案 | Improved error message when pasting images over SSH to suggest using `scp` instead of the unhelpful clipboard shortcut hint | improved |
| 大きなツール出力を切り捨てではなくディスクに保存し、ファイル参照経由で完全な出力にアクセス可能に変更 | Changed large tool outputs to be persisted to disk instead of truncated, providing full output access via file references | changed |
| Windows 管理設定パス `C:\ProgramData\ClaudeCode\managed-settings.json` を非推奨化し、管理者は `C:\Program Files\ClaudeCode\managed-settings.json` への移行が必要 | Deprecated Windows managed settings path `C:\ProgramData\ClaudeCode\managed-settings.json` - administrators should migrate to `C:\Program Files\ClaudeCode\managed-settings.json` | changed |
| [SDK] zod の最小 peer dependency を ^4.0.0 に変更 | [SDK] Changed minimum zod peer dependency to ^4.0.0 | changed |

## 2.1.0

| 日本語 | English | Category |
|--------|---------|----------|
| スキルのホットリロードに対応し、`~/.claude/skills` または `.claude/skills` で作成・変更したスキルはセッション再起動なしで即座に利用可能に | Added automatic skill hot-reload - skills created or modified in `~/.claude/skills` or `.claude/skills` are now immediately available without restarting the session | added |
| スキルのフロントマターで `context: fork` を指定することでフォークしたサブエージェントコンテキストでスキルやスラッシュコマンドを実行可能に | Added support for running skills and slash commands in a forked sub-agent context using `context: fork` in skill frontmatter | added |
| スキルに `agent` フィールドを追加し、実行時のエージェントタイプを指定可能に | Added support for `agent` field in skills to specify agent type for execution | added |
| Claude の応答言語を設定する `language` 設定を追加（例: language: "japanese"） | Added `language` setting to configure Claude's response language (e.g., language: "japanese") | added |
| Shift+Enter が iTerm2、WezTerm、Ghostty、Kitty でターミナル設定の変更なしで動作するように変更 | Changed Shift+Enter to work out of the box in iTerm2, WezTerm, Ghostty, and Kitty without modifying terminal configs | changed |
| `settings.json` に `respectGitignore` サポートを追加し、プロジェクトごとに @ メンションファイルピッカーの動作を制御可能に | Added `respectGitignore` support in `settings.json` for per-project control over @-mention file picker behavior | added |
| `IS_DEMO` 環境変数を追加し、ストリーミングや録画時に UI からメールアドレスと組織名を非表示に | Added `IS_DEMO` environment variable to hide email and organization from the UI, useful for streaming or recording sessions | added |
| デバッグログに機密データ（OAuth トークン、API キー、パスワード）が露出する可能性があるセキュリティ問題を修正 | Fixed security issue where sensitive data (OAuth tokens, API keys, passwords) could be exposed in debug logs | fixed |
| `-c` または `--resume` でセッションを再開した際にファイルとスキルが適切に検出されない問題を修正 | Fixed files and skills not being properly discovered when resuming sessions with `-c` or `--resume` | fixed |
| 上矢印キーまたは Ctrl+R 検索で履歴からプロンプトを再生した際に貼り付けた内容が失われる問題を修正 | Fixed pasted content being lost when replaying prompts from history using up arrow or Ctrl+R search | fixed |
| Esc キーの動作を改善し、キューされたプロンプトを実行中のタスクをキャンセルせずに入力欄に移動 | Fixed Esc key with queued prompts to only move them to input without canceling the running task | fixed |
| 複雑な bash コマンドの権限プロンプトを削減 | Reduced permission prompts for complex bash commands | improved |
| Bash ツールの権限に `*` を使用したワイルドカードパターンマッチングを追加（例: `Bash(npm *)`、`Bash(* install)`、`Bash(git * main)`） | Added wildcard pattern matching for Bash tool permissions using `*` at any position in rules (e.g., `Bash(npm *)`, `Bash(* install)`, `Bash(git * main)`) | added |
| Ctrl+B によるバックグラウンド化を統合し、bash コマンドとエージェントの両方で動作するようになり、実行中のすべてのフォアグラウンドタスクを同時にバックグラウンド化 | Added unified Ctrl+B backgrounding for both bash commands and agents - pressing Ctrl+B now backgrounds all running foreground tasks simultaneously | added |
| MCP の `list_changed` 通知に対応し、MCP サーバーが再接続なしで利用可能なツール、プロンプト、リソースを動的に更新可能に | Added support for MCP `list_changed` notifications, allowing MCP servers to dynamically update their available tools, prompts, and resources without requiring reconnection | added |
| claude.ai サブスクライバー向けに `/teleport` および `/remote-env` スラッシュコマンドを追加し、リモートセッションの再開と設定を可能に | Added `/teleport` and `/remote-env` slash commands for claude.ai subscribers, allowing them to resume and configure remote sessions | added |
| settings.json の権限または `--disallowedTools` CLI フラグで `Task(AgentName)` 構文を使用して特定のエージェントを無効化可能に | Added support for disabling specific agents using `Task(AgentName)` syntax in settings.json permissions or the `--disallowedTools` CLI flag | added |
| エージェントのフロントマターにフックサポートを追加し、エージェントのライフサイクルにスコープされた PreToolUse、PostToolUse、Stop フックを定義可能に | Added hooks support to agent frontmatter, allowing agents to define PreToolUse, PostToolUse, and Stop hooks scoped to the agent's lifecycle | added |
| 新しい Vim モーションを追加: `;` と `,` で f/F/t/T モーションの繰り返し、`y` オペレーター（`yy`/`Y`）、`p`/`P` でペースト、テキストオブジェクト（`iw`、`aw`、`iW`、`aW`、`i"`、`a"`、`i'`、`a'`、`i(`、`a(`、`i[`、`a[`、`i{`、`a{`）、`>>` と `<<` でインデント/アンインデント、`J` で行の結合 | Added new Vim motions: `;` and `,` to repeat f/F/t/T motions, `y` operator for yank with `yy`/`Y`, `p`/`P` for paste, text objects (`iw`, `aw`, `iW`, `aW`, `i"`, `a"`, `i'`, `a'`, `i(`, `a(`, `i[`, `a[`, `i{`, `a{`), `>>` and `<<` for indent/dedent, and `J` to join lines | added |
| `/plan` コマンドショートカットを追加し、プロンプトから直接プランモードを有効化 | Added `/plan` command shortcut to enable plan mode directly from the prompt | added |
| スラッシュコマンドのオートコンプリートを改善し、入力の先頭だけでなく任意の位置の `/` で動作 | Added slash command autocomplete support when `/` appears anywhere in input, not just at the beginning | improved |
| インタラクティブモードで `--tools` フラグを追加し、Claude が使用できる組み込みツールを制限可能に | Added `--tools` flag support in interactive mode to restrict which built-in tools Claude can use during interactive sessions | added |
| `CLAUDE_CODE_FILE_READ_MAX_OUTPUT_TOKENS` 環境変数を追加し、デフォルトのファイル読み込みトークン制限をオーバーライド可能に | Added `CLAUDE_CODE_FILE_READ_MAX_OUTPUT_TOKENS` environment variable to override the default file read token limit | added |
| フックに `once: true` 設定のサポートを追加 | Added support for `once: true` config for hooks | added |
| フロントマターの `allowed-tools` フィールドで YAML スタイルのリストに対応し、スキル宣言を簡潔に | Added support for YAML-style lists in frontmatter `allowed-tools` field for cleaner skill declarations | added |
| プラグインからのプロンプトおよびエージェントフックタイプに対応（以前はコマンドフックのみサポート） | Added support for prompt and agent hook types from plugins (previously only command hooks were supported) | added |
| iTerm2 で Cmd+V による画像貼り付けに対応（Ctrl+V にマッピング） | Added Cmd+V support for image paste in iTerm2 (maps to Ctrl+V) | added |
| ダイアログでタブを切り替えるための左右矢印キーナビゲーションを追加 | Added left/right arrow key navigation for cycling through tabs in dialogs | added |
| Ctrl+O トランスクリプトモードで思考ブロックのリアルタイム表示を追加 | Added real-time thinking block display in Ctrl+O transcript mode | added |
| コンテキスト可視化でスキルを独立したカテゴリとして表示 | Added Skills as a separate category in the context visualization | added |
| 起動パフォーマンスを改善するための複数の最適化 | Multiple optimizations to improve startup performance | improved |
| サブエージェント（Task ツール）を改善し、権限拒否後も動作を継続し代替アプローチを試行可能に | Improved subagents (Task tool) to continue working after permission denial, allowing them to try alternative approaches | improved |
| スキルを改善し、実行中に進行状況を表示しツール使用をリアルタイムで表示 | Improved skills to show progress while executing, displaying tool uses as they happen | improved |
| プランモード移行時の権限プロンプトを削除し、承認なしでプランモードに移行可能に | Removed permission prompt when entering plan mode - users can now enter plan mode without approval | changed |
| [VSCode] コンテキストメニューに現在選択されているモデル名を追加 | [VSCode] Added currently selected model name to the context menu | added |
| [VSCode] 自動承認権限ボタンにわかりやすいラベルを追加（例: 「Yes, and don't ask again」の代わりに「Yes, allow npm for this project」） | [VSCode] Added descriptive labels on auto-accept permission button (e.g., "Yes, allow npm for this project" instead of "Yes, and don't ask again") | improved |
| [Windows] 不適切なレンダリング問題を修正 | [Windows] Fixed issue with improper rendering | fixed |

---

*このファイルは [Claude Code](https://github.com/anthropics/claude-code) のCHANGELOGを元に翻訳されました。*
