# Claude Code 変更履歴 (2026年 - v2.1.0以降)

このファイルは Claude Code の2026年リリース分（バージョン2.1.0以降）の変更履歴を日本語で記載しています。

---

## 2.1.92

| 日本語 | English | Category |
|--------|---------|----------|
| リモート管理設定が最新の状態で取得されるまで CLI の起動をブロックし、取得失敗時は終了する `forceRemoteSettingsRefresh` ポリシー設定を追加 | Added `forceRemoteSettingsRefresh` policy setting: when set, the CLI blocks startup until remote managed settings are freshly fetched, and exits if the fetch fails (fail-closed) | added |
| ログイン画面の「サードパーティプラットフォーム」選択時にアクセス可能な、AWS 認証・リージョン設定・認証情報の検証・モデル固定をガイドする対話型 Bedrock セットアップウィザードを追加 | Added interactive Bedrock setup wizard accessible from the login screen when selecting "3rd-party platform" — guides you through AWS authentication, region configuration, credential verification, and model pinning | added |
| サブスクリプションユーザー向け `/cost` にモデル別・キャッシュヒット別の内訳を追加 | Added per-model and cache-hit breakdown to `/cost` for subscription users | added |
| `/release-notes` を対話型バージョン選択式に変更 | `/release-notes` is now an interactive version picker | changed |
| Remote Control のセッション名がデフォルトでホスト名をプレフィックスとして使用するように変更（例: `myhost-graceful-unicorn`）、`--remote-control-session-name-prefix` で上書き可能 | Remote Control session names now use your hostname as the default prefix (e.g. `myhost-graceful-unicorn`), overridable with `--remote-control-session-name-prefix` | changed |
| プロンプトキャッシュの有効期限切れ後にセッションへ戻った際、次のターンでキャッシュなしで送信されるおおよそのトークン数を示すフッターヒントを Pro ユーザー向けに追加 | Pro users now see a footer hint when returning to a session after the prompt cache has expired, showing roughly how many tokens the next turn will send uncached | added |
| 長時間実行セッション中に tmux ウィンドウが削除・番号変更された後、「Could not determine pane count」エラーでサブエージェントの生成が永続的に失敗する問題を修正 | Fixed subagent spawning permanently failing with "Could not determine pane count" after tmux windows are killed or renumbered during a long-running session | fixed |
| 小型高速モデルが `ok:false` を返した際に prompt-type Stop フックが誤って失敗する問題を修正し、非 Stop prompt-type フックの `preventContinuation:true` セマンティクスを復元 | Fixed prompt-type Stop hooks incorrectly failing when the small fast model returns `ok:false`, and restored `preventContinuation:true` semantics for non-Stop prompt-type hooks | fixed |
| ストリーミング時に配列・オブジェクトフィールドが JSON エンコード文字列として送出される場合のツール入力バリデーション失敗を修正 | Fixed tool input validation failures when streaming emits array/object fields as JSON-encoded strings | fixed |
| 拡張思考がホワイトスペースのみのテキストブロックを実際のコンテンツと一緒に生成した際に発生する API 400 エラーを修正 | Fixed an API 400 error that could occur when extended thinking produced a whitespace-only text block alongside real content | fixed |
| オートパイロットのキー入力や連続プロンプトの数字衝突によるフィードバックサーベイの誤送信を修正 | Fixed accidental feedback survey submissions from auto-pilot keypresses and consecutive-prompt digit collisions | fixed |
| フルスクリーンモードの処理中にテキスト選択が存在する際、「esc to clear」と並んで「esc to interrupt」ヒントが誤表示される問題を修正 | Fixed misleading "esc to interrupt" hint appearing alongside "esc to clear" when a text selection exists in fullscreen mode during processing | fixed |
| Homebrew インストールの更新プロンプトが正しい cask のリリースチャンネルを使用するよう修正（`claude-code` → stable、`claude-code@latest` → latest） | Fixed Homebrew install update prompts to use the cask's release channel (`claude-code` → stable, `claude-code@latest` → latest) | fixed |
| 複数行プロンプトで行末にいる際に `ctrl+e` が次の行末にジャンプする問題を修正 | Fixed `ctrl+e` jumping to the end of the next line when already at end of line in multiline prompts | fixed |
| DEC 2026 対応端末（iTerm2・Ghostty 等）のフルスクリーンモードでスクロールアップ時に同一メッセージが2か所に表示される問題を修正 | Fixed an issue where the same message could appear at two positions when scrolling up in fullscreen mode (iTerm2, Ghostty, and other terminals with DEC 2026 support) | fixed |
| アイドル復帰時の「/clear to save X tokens」ヒントがセッションの累計トークン数ではなく現在のコンテキストサイズを表示するよう修正 | Fixed idle-return "/clear to save X tokens" hint showing cumulative session tokens instead of current context size | fixed |
| claude.ai の未認証コネクタと重複するプラグイン MCP サーバーがセッション開始時に「connecting」のまま固まる問題を修正 | Fixed plugin MCP servers stuck "connecting" on session start when they duplicate a claude.ai connector that is unauthenticated | fixed |
| 大きなファイルに対する Write ツールの差分計算速度を改善（タブ・`&`・`$` を含むファイルで 60% 高速化） | Improved Write tool diff computation speed for large files (60% faster on files with tabs/`&`/`$`) | improved |
| `/tag` コマンドを削除 | Removed `/tag` command | changed |
| `/vim` コマンドを削除（Vim モードの切り替えは `/config` → Editor mode から） | Removed `/vim` command (toggle vim mode via `/config` → Editor mode) | changed |
| Linux サンドボックスで npm ビルドとネイティブビルドの両方に `apply-seccomp` ヘルパーを同梱し、サンドボックス化されたコマンドの Unix ソケットブロック機能を復元 | Linux sandbox now ships the `apply-seccomp` helper in both npm and native builds, restoring unix-socket blocking for sandboxed commands | fixed |

## 2.1.91

| 日本語 | English | Category |
|--------|---------|----------|
| `_meta["anthropic/maxResultSizeChars"]` アノテーション（最大500K）による MCP ツール結果の永続化オーバーライドを追加し、DBスキーマなど大きな結果をトランケーションなしで通過可能に | Added MCP tool result persistence override via `_meta["anthropic/maxResultSizeChars"]` annotation (up to 500K), allowing larger results like DB schemas to pass through without truncation | added |
| スキル・カスタムスラッシュコマンド・プラグインコマンドのインラインシェル実行を無効化する `disableSkillShellExecution` 設定を追加 | Added `disableSkillShellExecution` setting to disable inline shell execution in skills, custom slash commands, and plugin commands | added |
| `claude-cli://open?q=` ディープリンクでの複数行プロンプトをサポート（エンコードされた改行 `%0A` が拒否されなくなった） | Added support for multi-line prompts in `claude-cli://open?q=` deep links (encoded newlines `%0A` no longer rejected) | added |
| プラグインが `bin/` 以下に実行ファイルを同梱し、Bash ツールからベアコマンドとして呼び出し可能に | Plugins can now ship executables under `bin/` and invoke them as bare commands from the Bash tool | added |
| 非同期トランスクリプト書き込みのサイレント失敗時に `--resume` で会話履歴が失われる可能性があったトランスクリプトチェーン切断を修正 | Fixed transcript chain breaks on `--resume` that could lose conversation history when async transcript writes fail silently | fixed |
| iTerm2・kitty・WezTerm・Ghostty・Windows Terminal で `cmd+delete` が行頭まで削除されない不具合を修正 | Fixed `cmd+delete` not deleting to start of line on iTerm2, kitty, WezTerm, Ghostty, and Windows Terminal | fixed |
| コンテナ再起動後にリモートセッションのプランモードがプランファイルを見失い、プラン編集時の権限プロンプトやプラン承認モーダルが空になる不具合を修正 | Fixed plan mode in remote sessions losing track of the plan file after a container restart, which caused permission prompts on plan edits and an empty plan-approval modal | fixed |
| settings.json の `permissions.defaultMode: "auto"` に対する JSON スキーマバリデーションを修正 | Fixed JSON schema validation for `permissions.defaultMode: "auto"` in settings.json | fixed |
| Windows のバージョンクリーンアップがアクティブバージョンのロールバックコピーを保護しない不具合を修正 | Fixed Windows version cleanup not protecting the active version's rollback copy | fixed |
| `/feedback` がスラッシュメニューから消えるのではなく、利用不可の理由を表示するように改善 | `/feedback` now explains why it's unavailable instead of disappearing from the slash menu | improved |
| `/claude-api` スキルのエージェント設計パターンに関するガイダンスを改善（ツールサーフェスの決定・コンテキスト管理・キャッシュ戦略を含む） | Improved `/claude-api` skill guidance for agent design patterns including tool surface decisions, context management, and caching strategy | improved |
| `Bun.stripANSI` を経由することで Bun 上の `stripAnsi` を高速化し、パフォーマンスを改善 | Improved performance: faster `stripAnsi` on Bun by routing through `Bun.stripANSI` | improved |
| Edit ツールがより短い `old_string` アンカーを使用するようになり、出力トークン数を削減 | Edit tool now uses shorter `old_string` anchors, reducing output tokens | improved |

## 2.1.90

| 日本語 | English | Category |
|--------|---------|----------|
| `/powerup` を追加 — アニメーションデモ付きで Claude Code の機能を学べるインタラクティブレッスン | Added `/powerup` — interactive lessons teaching Claude Code features with animated demos | added |
| `git pull` 失敗時に既存のマーケットプレイスキャッシュを保持する環境変数 `CLAUDE_CODE_PLUGIN_KEEP_MARKETPLACE_ON_FAILURE` を追加（オフライン環境で有用） | Added `CLAUDE_CODE_PLUGIN_KEEP_MARKETPLACE_ON_FAILURE` env var to keep the existing marketplace cache when `git pull` fails, useful in offline environments | added |
| `.husky` を保護対象ディレクトリに追加（acceptEdits モード） | Added `.husky` to protected directories (acceptEdits mode) | added |
| 使用制限に達した際にレート制限ダイアログが繰り返し自動表示され、最終的にセッションがクラッシュする無限ループを修正 | Fixed an infinite loop where the rate-limit options dialog would repeatedly auto-open after hitting your usage limit, eventually crashing the session | fixed |
| deferred tools・MCP サーバー・カスタムエージェントを使用するユーザーで `--resume` が初回リクエスト時にプロンプトキャッシュを完全にミスする問題を修正（v2.1.69 以降のリグレッション） | Fixed `--resume` causing a full prompt-cache miss on the first request for users with deferred tools, MCP servers, or custom agents (regression since v2.1.69) | fixed |
| PostToolUse のフォーマット保存フックが連続編集の間にファイルを書き換えた場合に `Edit`/`Write` が「File content has changed」で失敗する問題を修正 | Fixed `Edit`/`Write` failing with "File content has changed" when a PostToolUse format-on-save hook rewrites the file between consecutive edits | fixed |
| JSON を stdout に出力してコード 2 で終了する `PreToolUse` フックがツール呼び出しを正しくブロックしない問題を修正 | Fixed `PreToolUse` hooks that emit JSON to stdout and exit with code 2 not correctly blocking the tool call | fixed |
| ツール呼び出し中に CLAUDE.md が自動読み込みされた際、折りたたまれた検索・読み取りのサマリーバッジがフルスクリーンのスクロールバックに複数表示される問題を修正 | Fixed collapsed search/read summary badge appearing multiple times in fullscreen scrollback when a CLAUDE.md file auto-loads during a tool call | fixed |
| auto モードで、本来許可された操作であっても明示的なユーザー指示（「push しないで」「X の前に Y を待って」など）が無視される問題を修正 | Fixed auto mode not respecting explicit user boundaries ("don't push", "wait for X before Y") even when the action would otherwise be allowed | fixed |
| ライトテーマのターミナルでクリック展開のホバーテキストがほぼ見えない問題を修正 | Fixed click-to-expand hover text being nearly invisible on light terminal themes | fixed |
| 不正なツール入力がパーミッションダイアログに到達した際の UI クラッシュを修正 | Fixed UI crash when malformed tool input reached the permission dialog | fixed |
| `/model`・`/config` などの選択画面でスクロール時にヘッダーが消える問題を修正 | Fixed headers disappearing when scrolling `/model`, `/config`, and other selection screens | fixed |
| PowerShell のツールパーミッションチェックを強化：末尾の `&` によるバックグラウンドジョブ回避・`-ErrorAction Break` によるデバッガーハング・アーカイブ展開の TOCTOU・パース失敗時のフォールバック deny ルール劣化を修正 | Hardened PowerShell tool permission checks: fixed trailing `&` background job bypass, `-ErrorAction Break` debugger hang, archive-extraction TOCTOU, and parse-fail fallback deny-rule degradation | fixed |
| キャッシュキー検索時に MCP ツールスキーマをターンごとに JSON.stringify していた処理を削除しパフォーマンスを改善 | Improved performance: eliminated per-turn JSON.stringify of MCP tool schemas on cache-key lookup | improved |
| SSE トランスポートの大きなストリームフレーム処理を二乗時間から線形時間に改善 | Improved performance: SSE transport now handles large streamed frames in linear time (was quadratic) | improved |
| 長い会話の SDK セッションでトランスクリプト書き込みが二乗的に遅くなる問題を改善 | Improved performance: SDK sessions with long conversations no longer slow down quadratically on transcript writes | improved |
| 多数のプロジェクトを持つユーザーの読み込み時間改善のため、`/resume` の全プロジェクトビューでプロジェクトセッションを並列読み込みするよう改善 | Improved `/resume` all-projects view to load project sessions in parallel, improving load times for users with many projects | improved |
| `--resume` ピッカーで `claude -p` や SDK 経由で作成されたセッションを表示しないよう変更 | Changed `--resume` picker to no longer show sessions created by `claude -p` or SDK invocations | changed |
| `Get-DnsClientCache` および `ipconfig /displaydns` を自動許可から削除（DNS キャッシュのプライバシー保護） | Removed `Get-DnsClientCache` and `ipconfig /displaydns` from auto-allow (DNS cache privacy) | changed |

## 2.1.89

| 日本語 | English | Category |
|--------|---------|----------|
| `PreToolUse` フックに `"defer"` 権限決定を追加 — ヘッドレスセッションがツール呼び出し時に一時停止し、`-p --resume` で再開してフックが再評価できるように対応 | Added `"defer"` permission decision to `PreToolUse` hooks — headless sessions can pause at a tool call and resume with `-p --resume` to have the hook re-evaluate | added |
| フリッカーのない代替スクリーンレンダリングと仮想スクロールバックを有効にする環境変数 `CLAUDE_CODE_NO_FLICKER=1` を追加 | Added `CLAUDE_CODE_NO_FLICKER=1` environment variable to opt into flicker-free alt-screen rendering with virtualized scrollback | added |
| 自動モードの分類器による拒否後に発火する `PermissionDenied` フックを追加 — `{retry: true}` を返すことでモデルに再試行を指示可能 | Added `PermissionDenied` hook that fires after auto mode classifier denials — return `{retry: true}` to tell the model it can retry | added |
| `@` メンションの入力補完候補に名前付きサブエージェントを追加 | Added named subagents to `@` mention typeahead suggestions | added |
| `-p` モード向けに `MCP_CONNECTION_NONBLOCKING=true` を追加してMCP接続待機を完全にスキップできるようにし、`--mcp-config` のサーバー接続を最も遅いサーバーへのブロッキングではなく5秒で上限を設けるよう変更 | Added `MCP_CONNECTION_NONBLOCKING=true` for `-p` mode to skip the MCP connection wait entirely, and bounded `--mcp-config` server connections at 5s instead of blocking on the slowest server | added |
| 自動モード：拒否されたコマンドが通知を表示するようになり、`/permissions` → Recent タブに表示され、`r` で再試行可能 | Auto mode: denied commands now show a notification and appear in `/permissions` → Recent tab where you can retry with `r` | improved |
| `Edit(//path/**)` および `Read(//path/**)` のルールが、リクエストされたパスだけでなく解決済みシンボリックリンクのターゲットもチェックするよう修正 | Fixed `Edit(//path/**)` and `Read(//path/**)` allow rules to check the resolved symlink target, not just the requested path | fixed |
| 一部の修飾キー組み合わせでボイスプッシュトゥトークが有効化されない問題、およびWindowsでボイスモードが "WebSocket upgrade rejected with HTTP 101" で失敗する問題を修正 | Fixed voice push-to-talk not activating for some modifier-combo bindings, and voice mode on Windows failing with "WebSocket upgrade rejected with HTTP 101" | fixed |
| WindowsでのEdit/WriteツールによるCRLFの二重化およびMarkdownのハード改行（末尾2スペース）の削除を修正 | Fixed Edit/Write tools doubling CRLF on Windows and stripping Markdown hard line breaks (two trailing spaces) | fixed |
| 複数スキーマ使用時に約50%の失敗率を引き起こす `StructuredOutput` スキーマキャッシュのバグを修正 | Fixed `StructuredOutput` schema cache bug causing ~50% failure rate when using multiple schemas | other |
| 長時間セッションにおいて大きな JSON 入力が LRU キャッシュキーとして保持されるメモリリークを修正 | Fixed memory leak where large JSON inputs were retained as LRU cache keys in long-running sessions | fixed |
| 非常に大きなセッションファイル（50MB超）からメッセージを削除した際のクラッシュを修正 | Fixed a crash when removing a message from very large session files (over 50MB) | fixed |
| クラッシュ後のLSPサーバーのゾンビ状態を修正 — セッション再起動まで失敗し続ける代わりに、次のリクエスト時にサーバーが再起動するように変更 | Fixed LSP server zombie state after crash — server now restarts on next request instead of failing until session restart | fixed |
| `~/.claude/history.jsonl` の 4KB 境界にかかる CJK 文字や絵文字を含むプロンプト履歴エントリがサイレントに削除される問題を修正 | Fixed prompt history entries containing CJK or emoji being silently dropped when they fall on a 4KB boundary in `~/.claude/history.jsonl` | fixed |
| `/stats` でサブエージェントの使用量が除外されることによるトークン数の過少カウントと、統計キャッシュフォーマット変更時に30日超の履歴データが失われる問題を修正 | Fixed `/stats` undercounting tokens by excluding subagent usage, and losing historical data beyond 30 days when the stats cache format changes | fixed |
| `-p --resume` において遅延ツールの入力が 64KB を超えるまたは遅延マーカーが存在しない場合にハングする問題、および `-p --continue` で遅延ツールが再開されない問題を修正 | Fixed `-p --resume` hangs when the deferred tool input exceeds 64KB or no deferred marker exists, and `-p --continue` not resuming deferred tools | fixed |
| macOS で `claude-cli://` ディープリンクが開かない問題を修正 | Fixed `claude-cli://` deep links not opening on macOS | fixed |
| MCPツールエラーがサーバーから複数要素のエラーコンテンツを返す際に最初のコンテンツブロックのみに切り捨てられる問題を修正 | Fixed MCP tool errors truncating to only the first content block when the server returns multi-element error content | fixed |
| SDKを通じて画像付きメッセージを送信する際に、スキルリマインダーやその他のシステムコンテキストが欠落する問題を修正 | Fixed skill reminders and other system context being dropped when sending messages with images via the SDK | fixed |
| Write/Edit/Read ツールにおいて PreToolUse/PostToolUse フックが `file_path` を絶対パスで受け取るよう修正し、ドキュメントの仕様と一致させた | Fixed PreToolUse/PostToolUse hooks to receive `file_path` as an absolute path for Write/Edit/Read tools, matching the documented behavior | fixed |
| autocompact のスラッシュループを修正 — コンパクト後にコンテキストが即座に上限まで再充填される状況を3回連続で検出した場合、APIコールを浪費し続ける代わりに、対処可能なエラーメッセージを出力して停止するように変更 | Fixed autocompact thrash loop — now detects when context refills to the limit immediately after compacting three times in a row and stops with an actionable error instead of burning API calls | fixed |
| 長時間セッション中にツールスキーマのバイト列が変化することで発生していたプロンプトキャッシュのキャッシュミスを修正 | Fixed prompt cache misses in long sessions caused by tool schema bytes changing mid-session | fixed |
| 多数のファイルを読み込む長いセッションで、ネストされた CLAUDE.md ファイルが何十回も再注入される問題を修正 | Fixed nested CLAUDE.md files being re-injected dozens of times in long sessions that read many files | fixed |
| 古いCLIバージョンまたは中断された書き込みによるツール結果がトランスクリプトに含まれている場合に`--resume`がクラッシュする問題を修正 | Fixed `--resume` crash when transcript contains a tool result from an older CLI version or interrupted write | fixed |
| APIがエンタイトルメントエラーを返した際に誤って表示されていた「Rate limit reached」メッセージを修正し、実際のエラーと対処のヒントを表示するように変更 | Fixed misleading "Rate limit reached" message when the API returned an entitlement error — now shows the actual error with actionable hints | fixed |
| フック `if` 条件フィルタリングが複合コマンド（`ls && git push`）や環境変数プレフィックス付きコマンド（`FOO=bar git push`）にマッチしない問題を修正 | Fixed hooks `if` condition filtering not matching compound commands (`ls && git push`) or commands with env-var prefixes (`FOO=bar git push`) | fixed |
| 並列ツールの多用時にターミナルのスクロールバックで折りたたまれた検索/読み取りグループバッジが重複する問題を修正 | Fixed collapsed search/read group badges duplicating in terminal scrollback during heavy parallel tool use | fixed |
| 通知の `invalidates` が現在表示中の通知を即座にクリアしない問題を修正 | Fixed notification `invalidates` not clearing the currently-displayed notification immediately | fixed |
| 処理中にバックグラウンドメッセージが届いた際、送信後にプロンプトが一瞬消える問題を修正 | Fixed prompt briefly disappearing after submit when background messages arrived during processing | fixed |
| アシスタント出力でデーヴァナーガリーやその他の結合文字テキストが切り捨てられる問題を修正 | Fixed Devanagari and other combining-mark text being truncated in assistant output | fixed |
| レイアウトシフト後のメイン画面ターミナルにおけるレンダリングアーティファクトを修正 | Fixed rendering artifacts on main-screen terminals after layout shifts | fixed |
| macOS Apple Silicon でボイスモードがマイク権限を要求できない問題を修正 (#なし) | Fixed voice mode failing to request microphone permission on macOS Apple Silicon | fixed |
| Windows Terminal Preview 1.25 で Shift+Enter が改行挿入ではなく送信される問題を修正 (#なし) | Fixed Shift+Enter submitting instead of inserting a newline on Windows Terminal Preview 1.25 | fixed |
| tmux 内で実行中の iTerm2 におけるストリーミング中の断続的な UI のちらつきを修正 | Fixed periodic UI jitter during streaming in iTerm2 when running inside tmux | fixed |
| Windows PowerShell 5.1 で `git push` などのコマンドが stderr に進捗を出力する際、PowerShell ツールが誤って失敗と報告する問題を修正 | Fixed PowerShell tool incorrectly reporting failures when commands like `git push` wrote progress to stderr on Windows PowerShell 5.1 | fixed |
| Editツールを非常に大きなファイル（1 GiB超）に使用した際のメモリ不足クラッシュの可能性を修正 | Fixed a potential out-of-memory crash when the Edit tool was used on very large files (>1 GiB) | fixed |
| `ls`/`tree`/`du` コマンドの折りたたみツールサマリーを「Read N files」から「Listed N directories」に改善 | Improved collapsed tool summary to show "Listed N directories" for `ls`/`tree`/`du` instead of "Read N files" | improved |
| Bashツールにフォーマッター/リンターコマンドが既読ファイルを変更した際に警告を表示する機能を追加し、古い編集エラーを防止 | Improved Bash tool to warn when a formatter/linter command modifies files you have previously read, preventing stale-edit errors | improved |
| `@`メンションのタイプアヘッドで、類似した名前のMCPリソースよりもソースファイルを上位に表示するよう改善 | Improved `@`-mention typeahead to rank source files above MCP resources with similar names | improved |
| PowerShell ツールプロンプトにバージョン別（5.1 vs 7+）の構文ガイダンスを追加 | Improved PowerShell tool prompt with version-appropriate syntax guidance (5.1 vs 7+) | improved |
| `Bash` で `sed -n` や `cat` を使って参照したファイルに対し、別途 `Read` を呼び出さずに `Edit` が動作するよう変更 | Changed `Edit` to work on files viewed via `Bash` with `sed -n` or `cat`, without requiring a separate `Read` call first | changed |
| 50K文字を超えるフックの出力を、コンテキストに直接注入する代わりに、ファイルパスとプレビューとともにディスクに保存するよう変更 | Changed hook output over 50K characters to be saved to disk with a file path + preview instead of being injected directly into context | changed |
| settings.json の `cleanupPeriodDays: 0` をバリデーションエラーで拒否するように変更（以前はサイレントにトランスクリプトの永続化を無効化していた） | Changed `cleanupPeriodDays: 0` in settings.json to be rejected with a validation error — it previously silently disabled transcript persistence | fixed |
| インタラクティブセッションでのシンキングサマリーをデフォルトで非生成に変更 — 復元するには settings.json で `showThinkingSummaries: true` を設定 | Changed thinking summaries to no longer be generated by default in interactive sessions — set `showThinkingSummaries: true` in settings.json to restore | changed |
| `TaskCreated` フックイベントとそのブロッキング動作をドキュメント化 | Documented `TaskCreated` hook event and its blocking behavior | other |
| Ctrl+B で実行中のコマンドをバックグラウンド化した際にタスク通知を保持するよう修正 | Preserved task notifications when backgrounding a running command with Ctrl+B | fixed |
| Windows の PowerShell ツールにおいて、ダブルクォートと空白の両方を含む外部コマンド引数は自動許可の代わりにプロンプトを表示するよう変更（PS 5.1 引数分割のセキュリティ強化） | PowerShell tool on Windows: external-command arguments containing both a double-quote and whitespace now prompt instead of auto-allowing (PS 5.1 argument-splitting hardening) | improved |
| `/env` が PowerShell ツールコマンドにも適用されるように対応（以前は Bash のみ） | `/env` now applies to PowerShell tool commands (previously only affected Bash) | improved |
| Pro および Enterprise プランで冗長な「今週（Sonnet のみ）」バーを `/usage` で非表示化 | `/usage` now hides redundant "Current week (Sonnet only)" bar for Pro and Enterprise plans | improved |
| 画像の貼り付け後に末尾のスペースが挿入されなくなった修正 | Image paste no longer inserts a trailing space | fixed |
| 空のプロンプトに `!command` を貼り付けるとbashモードに入るようになり、`!` を直接入力した場合の動作と一致するように修正 | Pasting `!command` into an empty prompt now enters bash mode, matching typed `!` behavior | fixed |
| エイプリルフール限定で `/buddy` が登場 — コードを見守る小さな生き物を孵化させる | `/buddy` is here for April 1st — hatch a small creature that watches you code | added |

## 2.1.87

| 日本語 | English | Category |
|--------|---------|----------|
| Cowork Dispatch のメッセージが配信されない問題を修正 | Fixed messages in Cowork Dispatch not getting delivered | fixed |

## 2.1.86

| 日本語 | English | Category |
|--------|---------|----------|
| APIリクエストに `X-Claude-Code-Session-Id` ヘッダーを追加し、プロキシがボディを解析せずにセッション単位でリクエストを集約できるよう対応 | Added `X-Claude-Code-Session-Id` header to API requests so proxies can aggregate requests by session without parsing the body | added |
| GrepおよびファイルオートコンプリートがJujutsuおよびSaplingのメタデータを走査しないよう、VCSディレクトリ除外リストに `.jj` および `.sl` を追加 | Added `.jj` and `.sl` to VCS directory exclusion lists so Grep and file autocomplete don't descend into Jujutsu or Sapling metadata | added |
| v2.1.85以前に作成されたセッションで `--resume` が "tool_use ids were found without tool_result blocks" エラーで失敗する不具合を修正 | Fixed `--resume` failing with "tool_use ids were found without tool_result blocks" on sessions created before v2.1.85 | fixed |
| 条件付きスキルやルールが設定されている場合に、プロジェクトルート外のファイル（例: `~/.claude/CLAUDE.md`）でWrite/Edit/Readが失敗する不具合を修正 | Fixed Write/Edit/Read failing on files outside the project root (e.g., `~/.claude/CLAUDE.md`) when conditional skills or rules are configured | fixed |
| スキル呼び出しのたびに不要な設定のディスク書き込みが発生し、Windowsでパフォーマンス低下や設定ファイル破損を引き起こす不具合を修正 | Fixed unnecessary config disk writes on every skill invocation that could cause performance issues and config corruption on Windows | fixed |
| トランスクリプトファイルが大きい長時間セッションで `/feedback` 使用時にメモリ不足クラッシュが発生する可能性を修正 | Fixed potential out-of-memory crash when using `/feedback` on very long sessions with large transcript files | fixed |
| `--bare` モードでインタラクティブセッション中にMCPツールが失われ、ターン中にエンキューされたメッセージが無音で破棄される不具合を修正 | Fixed `--bare` mode dropping MCP tools in interactive sessions and silently discarding messages enqueued mid-turn | fixed |
| `c` ショートカットがOAuthログインURLの完全なURLではなく約20文字しかコピーしない不具合を修正 | Fixed the `c` shortcut copying only ~20 characters of the OAuth login URL instead of the full URL | fixed |
| 狭いターミナルで複数行にわたる場合、マスク入力（例: OAuthコードのペースト）でトークンの先頭が漏れる不具合を修正 | Fixed masked input (e.g., OAuth code paste) leaking the start of the token when wrapping across multiple lines on narrow terminals | fixed |
| v2.1.83以降、macOS/LinuxでオフィシャルマーケットプレイスのプラグインスクリプトがPermission deniedで失敗する不具合を修正 | Fixed official marketplace plugin scripts failing with "Permission denied" on macOS/Linux since v2.1.83 | fixed |
| 複数のClaude Codeインスタンスを起動中に一方で `/model` を使用した際、ステータスラインに別セッションのモデルが表示される不具合を修正 | Fixed statusline showing another session's model when running multiple Claude Code instances and using `/model` in one of them | fixed |
| 長い会話の末尾でホイールスクロールまたはクリック選択後、新しいメッセージにスクロールが追従しない不具合を修正 | Fixed scroll not following new messages after wheel scroll or click-to-select at the bottom of a long conversation | fixed |
| `/plugin` のアンインストールダイアログで `n` を押した際、データディレクトリを保持したまま正しくプラグインをアンインストールするよう修正 | Fixed `/plugin` uninstall dialog: pressing `n` now correctly uninstalls the plugin while preserving its data directory | fixed |
| クリック後にEnterを押すとレスポンスが届くまでトランスクリプトが空白になるリグレッションを修正 | Fixed a regression where pressing Enter after clicking could leave the transcript blank until the response arrived | fixed |
| キーワードを削除した後も `ultrathink` ヒントが残り続ける不具合を修正 | Fixed `ultrathink` hint lingering after deleting the keyword | fixed |
| 長いセッションでmarkdown/ハイライトのレンダーキャッシュがコンテンツ文字列全体を保持し続けることによるメモリ増加を修正 | Fixed memory growth in long sessions from markdown/highlight render caches retaining full content strings | fixed |
| 多数のclaude.ai MCPコネクタが設定されている場合の起動時イベントループのストールを低減（macOSキーチェーンキャッシュを5秒から30秒に延長） | Reduced startup event-loop stalls when many claude.ai MCP connectors are configured (macOS keychain cache extended from 5s to 30s) | improved |
| `@` でファイルを参照する際のトークンオーバーヘッドを削減（生の文字列コンテンツをJSONエスケープしないよう変更） | Reduced token overhead when mentioning files with `@` — raw string content no longer JSON-escaped | improved |
| ツール説明から動的コンテンツを除去することで、Bedrock・Vertex・Foundryユーザーのプロンプトキャッシュヒット率を改善 | Improved prompt cache hit rate for Bedrock, Vertex, and Foundry users by removing dynamic content from tool descriptions | improved |
| 「Saved N memories」通知内のメモリファイル名がホバー時にハイライト表示され、クリックで開けるよう対応 | Memory filenames in the "Saved N memories" notice now highlight on hover and open on click | improved |
| コンテキスト使用量削減のため、`/skills` 一覧のスキル説明を250文字に制限 | Skill descriptions in the `/skills` listing are now capped at 250 characters to reduce context usage | changed |
| `/skills` メニューをアルファベット順にソートし、スキャンしやすく変更 | Changed `/skills` menu to sort alphabetically for easier scanning | changed |
| プランの制限によってAutoモードが無効な場合、「temporarily unavailable」に代わり「unavailable for your plan」を表示するよう変更 | Auto mode now shows "unavailable for your plan" when disabled by plan restrictions (was "temporarily unavailable") | changed |
| [VSCode] 長時間の処理中に拡張機能が誤って「Not responding」を表示する不具合を修正 | [VSCode] Fixed extension incorrectly showing "Not responding" during long-running operations | fixed |
| [VSCode] OAuthトークン更新後（ログインから8時間後）にMaxプランユーザーのモデルがSonnetにリセットされる不具合を修正 | [VSCode] Fixed extension defaulting Max plan users to Sonnet after the OAuth token refreshes (8 hours after login) | fixed |
| Readツールがコンパクトな行番号形式を採用し、変更のない再読み込みを重複排除することでトークン使用量を削減 | Read tool now uses compact line-number format and deduplicates unchanged re-reads, reducing token usage | improved |

## 2.1.85

| 日本語 | English | Category |
|--------|---------|----------|
| `CLAUDE_CODE_MCP_SERVER_NAME` および `CLAUDE_CODE_MCP_SERVER_URL` 環境変数を MCP `headersHelper` スクリプトに追加し、1つのヘルパーで複数のサーバーに対応可能に | Added `CLAUDE_CODE_MCP_SERVER_NAME` and `CLAUDE_CODE_MCP_SERVER_URL` environment variables to MCP `headersHelper` scripts, allowing one helper to serve multiple servers | added |
| パーミッションルール構文（例: `Bash(git *)`）を使用したフックへの条件付き `if` フィールドを追加し、プロセスの生成オーバーヘッドを削減 | Added conditional `if` field for hooks using permission rule syntax (e.g., `Bash(git *)`) to filter when they run, reducing process spawning overhead | added |
| スケジュールタスク（`/loop`、`CronCreate`）の実行時にトランスクリプトへタイムスタンプマーカーを追加 | Added timestamp markers in transcripts when scheduled tasks (`/loop`, `CronCreate`) fire | added |
| 画像ペースト時の `[Image #N]` プレースホルダーの末尾にスペースを追加 | Added trailing space after `[Image #N]` placeholder when pasting images | added |
| ディープリンククエリ（`claude-cli://open?q=…`）が最大5,000文字をサポートし、長い事前入力プロンプトに対して「スクロールして確認」の警告を表示 | Deep link queries (`claude-cli://open?q=…`) now support up to 5,000 characters, with a "scroll to review" warning for long pre-filled prompts | added |
| MCP OAuth が RFC 9728 Protected Resource Metadata ディスカバリーに従って認可サーバーを検索するように対応 | MCP OAuth now follows RFC 9728 Protected Resource Metadata discovery to find the authorization server | added |
| 組織ポリシー（`managed-settings.json`）によってブロックされたプラグインのインストール・有効化を禁止し、マーケットプレイスビューからも非表示に | Plugins blocked by organization policy (`managed-settings.json`) can no longer be installed or enabled, and are hidden from marketplace views | changed |
| PreToolUse フックが `updatedInput` と `permissionDecision: "allow"` を同時に返すことで `AskUserQuestion` を解決できるようになり、独自 UI で回答を収集するヘッドレス統合に対応 | PreToolUse hooks can now satisfy `AskUserQuestion` by returning `updatedInput` alongside `permissionDecision: "allow"`, enabling headless integrations that collect answers via their own UI | added |
| OpenTelemetry の tool_result イベントにおける `tool_parameters` を `OTEL_LOG_TOOL_DETAILS=1` でのみ出力するように変更 | `tool_parameters` in OpenTelemetry tool_result events are now gated behind `OTEL_LOG_TOOL_DETAILS=1` | changed |
| 会話がコンパクトリクエスト自体に収まらないほど大きくなった場合に `/compact` が「context exceeded」で失敗する問題を修正 | Fixed `/compact` failing with "context exceeded" when the conversation has grown too large for the compact request itself to fit | fixed |
| プラグインのインストール先と設定ファイル内の宣言先が異なる場合に `/plugin enable` および `/plugin disable` が失敗する問題を修正 | Fixed `/plugin enable` and `/plugin disable` failing when a plugin's install location differs from where it's declared in settings | fixed |
| `WorktreeCreate` フックが実行される前に非 git リポジトリで `--worktree` がエラー終了する問題を修正 | Fixed `--worktree` exiting with an error in non-git repositories before the `WorktreeCreate` hook could run | fixed |
| `deniedMcpServers` 設定が claude.ai MCP サーバーをブロックしない問題を修正 | Fixed `deniedMcpServers` setting not blocking claude.ai MCP servers | fixed |
| マルチモニター環境でコンピューターユースツールの `switch_display` が「このセッションでは利用不可」を返す問題を修正 | Fixed `switch_display` in the computer-use tool returning "not available in this session" on multi-monitor setups | fixed |
| `OTEL_LOGS_EXPORTER`、`OTEL_METRICS_EXPORTER`、または `OTEL_TRACES_EXPORTER` を `none` に設定した際にクラッシュする問題を修正 | Fixed crash when `OTEL_LOGS_EXPORTER`, `OTEL_METRICS_EXPORTER`, or `OTEL_TRACES_EXPORTER` is set to `none` | fixed |
| ネイティブビルド以外で diff のシンタックスハイライトが機能しない問題を修正 | Fixed diff syntax highlighting not working in non-native builds | fixed |
| リフレッシュトークンが存在する場合に MCP ステップアップ認可が失敗する問題を修正 — `403 insufficient_scope` で昇格スコープを要求するサーバーが再認可フローを正しくトリガーするように | Fixed MCP step-up authorization failing when a refresh token exists — servers requesting elevated scopes via `403 insufficient_scope` now correctly trigger the re-authorization flow | fixed |
| ストリーミングレスポンスが中断された際のリモートセッションにおけるメモリリークを修正 | Fixed memory leak in remote sessions when a streaming response is interrupted | fixed |
| リトライ時に新しい TCP 接続を使用することで、エッジ接続の切り替え時に発生する持続的な ECONNRESET エラーを修正 | Fixed persistent ECONNRESET errors during edge connection churn by using a fresh TCP connection on retry | fixed |
| 特定のスラッシュコマンド実行後にプロンプトがキューに詰まり、上矢印キーで履歴を取得できなくなる問題を修正 | Fixed prompts getting stuck in the queue after running certain slash commands, with up-arrow unable to retrieve them | fixed |
| Python Agent SDK 修正: `--mcp-config` 経由で渡された `type:'sdk'` の MCP サーバーが起動時に除外される問題を修正 | Fixed Python Agent SDK: `type:'sdk'` MCP servers passed via `--mcp-config` are no longer dropped during startup | fixed |
| SSH 経由または VS Code 統合ターミナルで実行時にプロンプトに生のキーシーケンスが表示される問題を修正 | Fixed raw key sequences appearing in the prompt when running over SSH or in the VS Code integrated terminal | fixed |
| パーミッションが解決された後もリモートコントロールのセッションステータスが「要対応」のままになる問題を修正 | Fixed Remote Control session status staying stuck on "Requires Action" after a permission is resolved | fixed |
| 先読みサジェストが shift+enter および meta+enter を横取りして改行が挿入できない問題を修正 | Fixed shift+enter and meta+enter being intercepted by typeahead suggestions instead of inserting newlines | fixed |
| ストリーミング中に上スクロールすると古いコンテンツが残留して表示される問題を修正 | Fixed stale content bleeding through when scrolling up during streaming | fixed |
| Ghostty、Kitty、WezTerm 等 Kitty キーボードプロトコル対応ターミナルにおいて、終了後も拡張キーボードモードが解除されずに Ctrl+C や Ctrl+D が正常に動作しない問題を修正 | Fixed terminal left in enhanced keyboard mode after exit in Ghostty, Kitty, WezTerm, and other terminals supporting the Kitty keyboard protocol — Ctrl+C and Ctrl+D now work correctly after quitting | fixed |
| 大規模リポジトリでの @メンション ファイル自動補完のパフォーマンスを改善 | Improved @-mention file autocomplete performance on large repositories | improved |
| PowerShell の危険なコマンド検出を改善 | Improved PowerShell dangerous command detection | improved |
| WASM の yoga-layout を純粋な TypeScript 実装に置き換え、大きなトランスクリプトでのスクロールパフォーマンスを改善 | Improved scroll performance with large transcripts by replacing WASM yoga-layout with a pure TypeScript implementation | improved |
| 大規模セッションでコンパクション実行時の UI のちらつきを軽減 | Reduced UI stutter when compaction triggers on large sessions | improved |

## 2.1.84

| 日本語 | English | Category |
|--------|---------|----------|
| Windows 向け PowerShell ツールをオプトインプレビューとして追加 | Added PowerShell tool for Windows as an opt-in preview. Learn more at https://code.claude.com/docs/en/tools-reference#powershell-tool | added |
| サードパーティ（Bedrock、Vertex、Foundry）のピン留めデフォルトモデルに対するefffort/thinkingケイパビリティ検出をオーバーライドする環境変数 `ANTHROPIC_DEFAULT_{OPUS,SONNET,HAIKU}_MODEL_SUPPORTS` と、`/model` ピッカーのラベルをカスタマイズする `_MODEL_NAME`/`_DESCRIPTION` を追加 | Added `ANTHROPIC_DEFAULT_{OPUS,SONNET,HAIKU}_MODEL_SUPPORTS` env vars to override effort/thinking capability detection for pinned default models for 3p (Bedrock, Vertex, Foundry), and `_MODEL_NAME`/`_DESCRIPTION` to customize the `/model` picker label | added |
| ストリーミングのアイドル監視タイムアウト閾値を設定する環境変数 `CLAUDE_STREAM_IDLE_TIMEOUT_MS` を追加（デフォルト90秒） | Added `CLAUDE_STREAM_IDLE_TIMEOUT_MS` env var to configure the streaming idle watchdog threshold (default 90s) | added |
| `TaskCreate` でタスクが作成された際に発火する `TaskCreated` フックを追加 | Added `TaskCreated` hook that fires when a task is created via `TaskCreate` | added |
| `WorktreeCreate` フックの `type: "http"` サポートを追加 — レスポンス JSON の `hookSpecificOutput.worktreePath` で作成した worktree パスを返すことが可能 | Added `WorktreeCreate` hook support for `type: "http"` — return the created worktree path via `hookSpecificOutput.worktreePath` in the response JSON | added |
| チーム/エンタープライズ管理者がチャンネルプラグインの許可リストを定義できる管理設定 `allowedChannelPlugins` を追加 | Added `allowedChannelPlugins` managed setting for team/enterprise admins to define a channel plugin allowlist | added |
| デバッグのタイムアウト調査のため、APIリクエストに `x-client-request-id` ヘッダーを追加 | Added `x-client-request-id` header to API requests for debugging timeouts | added |
| 75分以上経過後に戻ったユーザーに `/clear` を促すアイドルリターンプロンプトを追加し、古いセッションでの不要なトークン再キャッシュを削減 | Added idle-return prompt that nudges users returning after 75+ minutes to `/clear`, reducing unnecessary token re-caching on stale sessions | added |
| ディープリンク（`claude-cli://`）が、検出リストの先頭にあるターミナルではなく、ユーザーが優先するターミナルで開くように変更 | Deep links (`claude-cli://`) now open in your preferred terminal instead of whichever terminal happens to be first in the detection list | improved |
| ルールとスキルの `paths:` フロントマターが glob の YAML リスト形式に対応 | Rules and skills `paths:` frontmatter now accepts a YAML list of globs | added |
| MCPツールの説明とサーバー指示を2KBに制限し、OpenAPI生成サーバーによるコンテキストの肥大化を防止 | MCP tool descriptions and server instructions are now capped at 2KB to prevent OpenAPI-generated servers from bloating context | changed |
| ローカルおよびclaude.aiコネクタの両方で設定されたMCPサーバーの重複を排除 — ローカル設定を優先 | MCP servers configured both locally and via claude.ai connectors are now deduplicated — the local config wins | improved |
| バックグラウンドの bash タスクがインタラクティブなプロンプトで止まっているように見える場合、約45秒後に通知を表示するように対応 | Background bash tasks that appear stuck on an interactive prompt now surface a notification after ~45 seconds | improved |
| トークン数が1M以上の場合、"1512.6k" の代わりに "1.5m" と表示されるよう変更 | Token counts ≥1M now display as "1.5m" instead of "1512.6k" | improved |
| `ToolSearch` が有効な場合（MCPツールを設定しているユーザーを含む）のグローバルシステムプロンプトキャッシュに対応 | Global system-prompt caching now works when `ToolSearch` is enabled, including for users with MCP tools configured | fixed |
| ボイスプッシュトゥトークを修正: ボイスキー長押し時にテキスト入力へ文字が漏れる問題を解消し、トランスクリプトが正しい位置に挿入されるよう修正 | Fixed voice push-to-talk: holding the voice key no longer leaks characters into the text input, and transcripts now insert at the correct position | fixed |
| フッターアイテムにフォーカスがある際に上下矢印キーが反応しない問題を修正 | Fixed up/down arrow keys being unresponsive when a footer item is focused | fixed |
| 複数行入力の行頭で `Ctrl+U`（行頭までを削除）が無効になっていた不具合を修正し、連続して `Ctrl+U` を押すと行をまたいでクリアされるように対応 | Fixed `Ctrl+U` (kill-to-line-start) being a no-op at line boundaries in multiline input, so repeated `Ctrl+U` now clears across lines | fixed |
| デフォルトのコードバインディングを null でアンバインド（例: `"ctrl+x ctrl+k": null`）した際、プレフィックスキーが解放されずコード待機モードに入ってしまう問題を修正 | Fixed null-unbinding a default chord binding (e.g. `"ctrl+x ctrl+k": null`) still entering chord-wait mode instead of freeing the prefix key | fixed |
| マウスイベントによってトランスクリプト検索入力欄にリテラルの "mouse" テキストが挿入される問題を修正 | Fixed mouse events inserting literal "mouse" text into transcript search input | fixed |
| 外部セッションが `--json-schema` を使用し、サブエージェントもスキーマを指定する場合にワークフローのサブエージェントが API 400 で失敗する問題を修正 | Fixed workflow subagents failing with API 400 when the outer session uses `--json-schema` and the subagent also specifies a schema | fixed |
| 一部のターミナルでユーザーメッセージバブル内の特定の絵文字の背景色が欠落していた問題を修正 | Fixed missing background color behind certain emoji in user message bubbles on some terminals | fixed |
| `Edit(.claude)` の許可ルールを持つユーザーで「このセッション中に Claude が自身の設定を編集することを許可する」権限オプションが保持されない問題を修正 (#なし) | Fixed the "allow Claude to edit its own settings for this session" permission option not sticking for users with `Edit(.claude)` allow rules | fixed |
| 大きなファイル編集時に添付スニペットの生成でハングする問題を修正 | Fixed a hang when generating attachment snippets for large edited files | fixed |
| MCPツール/リソースキャッシュのサーバー再接続時のリークを修正 | Fixed MCP tool/resource cache leak on server reconnect | fixed |
| 部分クローンリポジトリ（Scalar/GVFS）で大量の blob ダウンロードが発生する起動パフォーマンス問題を修正 | Fixed a startup performance issue where partial clone repositories (Scalar/GVFS) triggered mass blob downloads | fixed |
| ネイティブターミナルのカーソルがテキスト入力キャレットを追跡しない問題を修正し、IMEコンポジション（CJK入力）のインライン表示とスクリーンリーダーによる入力位置の追跡に対応 | Fixed native terminal cursor not tracking the text input caret, so IME composition (CJK input) now renders inline and screen readers can follow the input position | fixed |
| macOS でのキーチェーン読み取りの一時的な失敗によって発生する「Not logged in」エラーの誤検知を修正 | Fixed spurious "Not logged in" errors on macOS caused by transient keychain read failures | fixed |
| コアツールがバイパス有効化前に遅延される可能性があったコールドスタート時の競合状態を修正し、型付きパラメータでの Edit/Write が InputValidationError で失敗する問題を解消 | Fixed cold-start race where core tools could be deferred without their bypass active, causing Edit/Write to fail with InputValidationError on typed parameters | fixed |
| Windows ドライブルート（`C:\`、`C:\Windows` など）の危険な削除に対する検出を改善 | Improved detection for dangerous removals of Windows drive roots (`C:\`, `C:\Windows`, etc.) | improved |
| スラッシュコマンドおよびエージェントの読み込みと並行して `setup()` を実行することで、インタラクティブ起動を約30ms改善 | Improved interactive startup by ~30ms by running `setup()` in parallel with slash command and agent loading | improved |
| MCPサーバー使用時の `claude "prompt"` 起動を改善 — すべてのサーバーの接続を待たずに REPL を即時レンダリングするように変更 | Improved startup for `claude "prompt"` with MCP servers — the REPL now renders immediately instead of blocking until all servers connect | improved |
| ブロック時に汎用的な「未有効化」メッセージの代わりに具体的な理由を表示するよう Remote Control を改善 | Improved Remote Control to show a specific reason when blocked instead of a generic "not yet enabled" message | improved |
| p90 プロンプトキャッシュ率を改善 | Improved p90 prompt cache rate | improved |
| メッセージウィンドウをコンパクションおよびグループ変更の影響を受けないようにすることで、長いセッションでのスクロール先頭へのリセットを削減 | Reduced scroll-to-top resets in long sessions by making the message window immune to compaction and grouping changes | improved |
| アニメーション付きツールの進行状況がビューポート上部にスクロールした際のターミナルのちらつきを軽減 | Reduced terminal flickering when animated tool progress scrolls above the viewport | improved |
| issue/PR参照のクリック可能リンク化を`owner/repo#123`形式で記述した場合のみに変更 — 単独の`#123`は自動リンクされなくなった | Changed issue/PR references to only become clickable links when written as `owner/repo#123` — bare `#123` is no longer auto-linked | changed |
| 現在の認証設定で利用できないスラッシュコマンド（`/voice`、`/mobile`、`/chrome`、`/upgrade` など）を表示から非表示に変更 | Slash commands unavailable for the current auth setup (`/voice`, `/mobile`, `/chrome`, `/upgrade`, etc.) are now hidden instead of shown | changed |
| [VSCode] レート制限警告バナーに使用率とリセット時間を追加 | [VSCode] Added rate limit warning banner with usage percentage and reset time | added |
| すべてのビルドで `/stats` のスクリーンショット（Ctrl+S）が動作するようになり、16倍高速化 | Stats screenshot (Ctrl+S in /stats) now works in all builds and is 16× faster | improved |

## 2.1.83

| 日本語 | English | Category |
|--------|---------|----------|
| `managed-settings.d/` ドロップインディレクトリを `managed-settings.json` と並行して追加し、独立したポリシーフラグメントをアルファベット順にマージしてデプロイできるようにした | Added `managed-settings.d/` drop-in directory alongside `managed-settings.json`, letting separate teams deploy independent policy fragments that merge alphabetically | added |
| `CwdChanged` および `FileChanged` フックイベントを追加（direnv などのリアクティブな環境管理に対応） | Added `CwdChanged` and `FileChanged` hook events for reactive environment management (e.g., direnv) | added |
| サンドボックスが有効だが起動できない場合に、非サンドボックスで実行する代わりにエラーで終了する `sandbox.failIfUnavailable` 設定を追加 | Added `sandbox.failIfUnavailable` setting to exit with an error when sandbox is enabled but cannot start, instead of running unsandboxed | added |
| `disableDeepLinkRegistration` 設定を追加し、`claude-cli://` プロトコルハンドラの登録を無効化可能に (#なし) | Added `disableDeepLinkRegistration` setting to prevent `claude-cli://` protocol handler registration | added |
| サブプロセス環境（Bash ツール、フック、MCP stdio サーバー）から Anthropic およびクラウドプロバイダーの認証情報を除去するための `CLAUDE_CODE_SUBPROCESS_ENV_SCRUB=1` を追加 | Added `CLAUDE_CODE_SUBPROCESS_ENV_SCRUB=1` to strip Anthropic and cloud provider credentials from subprocess environments (Bash tool, hooks, MCP stdio servers) | added |
| トランスクリプト検索を追加 — トランスクリプトモード（`Ctrl+O`）で `/` を押すと検索、`n`/`N` でマッチ箇所を移動可能 | Added transcript search — press `/` in transcript mode (`Ctrl+O`) to search, `n`/`N` to step through matches | added |
| 外部エディタを開くエイリアスとして `Ctrl+X Ctrl+E` を追加（readline ネイティブバインディング；`Ctrl+G` も引き続き使用可能） | Added `Ctrl+X Ctrl+E` as an alias for opening the external editor (readline-native binding; `Ctrl+G` still works) | added |
| 画像を貼り付けるとカーソル位置に `[Image #N]` チップが挿入され、プロンプト内で位置による参照が可能に | Pasted images now insert an `[Image #N]` chip at the cursor so you can reference them positionally in your prompt | added |
| エージェントがフロントマターで `initialPrompt` を宣言することで最初のターンを自動送信可能に | Agents can now declare `initialPrompt` in frontmatter to auto-submit a first turn | added |
| `chat:killAgents` と `chat:fastMode` が `~/.claude/keybindings.json` によるキーバインドの再割り当てに対応 | `chat:killAgents` and `chat:fastMode` are now rebindable via `~/.claude/keybindings.json` | added |
| 終了後にマウストラッキングエスケープシーケンスがシェルプロンプトに漏れる問題を修正 | Fixed mouse tracking escape sequences leaking to shell prompt after exit | fixed |
| macOS でのClaud Code の終了時ハング を修正 | Fixed Claude Code hanging on exit on macOS | fixed |
| 数秒間アイドル状態になった後に画面が一瞬白くなる問題を修正 | Fixed screen flashing blank after being idle for a few seconds | fixed |
| 共通行が少ない非常に大きなファイルの差分表示時にハングする問題を修正 — 差分処理は5秒後にタイムアウトし、適切にフォールバックするように変更 | Fixed a hang when diffing very large files with few common lines — diffs now time out after 5 seconds and fall back gracefully | fixed |
| 音声入力が有効な場合にネイティブオーディオモジュールを先行ロードすることで起きていた、起動時1〜8秒のUIフリーズを修正 | Fixed a 1–8 second UI freeze on startup when voice input was enabled, caused by eagerly loading the native audio module | fixed |
| 起動時のリグレッションを修正: claude.ai の MCP 設定取得で約3秒待機してしまう問題を解消 | Fixed a startup regression where Claude Code would wait ~3s for claude.ai MCP config fetch before proceeding | fixed |
| `--mcp-config` CLIフラグが `allowedMcpServers`/`deniedMcpServers` の管理ポリシー適用を回避できていた問題を修正 | Fixed `--mcp-config` CLI flag bypassing `allowedMcpServers`/`deniedMcpServers` managed policy enforcement | fixed |
| claude.ai の MCP コネクター（Slack、Gmail 等）がシングルターンの `--print` モードで利用できない問題を修正 | Fixed claude.ai MCP connectors (Slack, Gmail, etc.) not being available in single-turn `--print` mode | fixed |
| Claude Code 終了時に `caffeinate` プロセスが正常に終了せず Mac がスリープしない問題を修正 (#なし) | Fixed `caffeinate` process not properly terminating when Claude Code exits, preventing Mac from sleeping | fixed |
| タブ補完で `!` プレフィックスのコマンド候補を選択した際に bash モードが有効にならない問題を修正 | Fixed bash mode not activating when tab-accepting `!`-prefixed command suggestions | fixed |
| 候補をナビゲート後にスラッシュコマンドの選択状態が古いまま残り、誤ったコマンドがハイライトされる問題を修正 | Fixed stale slash command selection showing wrong highlighted command after navigating suggestions | fixed |
| `/config` メニューで検索カーソルとリスト選択が同時に表示される問題を修正 | Fixed `/config` menu showing both the search cursor and list selection at the same time | fixed |
| コンテキスト圧縮後にバックグラウンドサブエージェントが見えなくなり、重複エージェントが生成される可能性がある問題を修正 | Fixed background subagents becoming invisible after context compaction, which could cause duplicate agents to be spawned | fixed |
| クリーンアップ中に git または API 呼び出しがハングした際、バックグラウンドエージェントのタスクが「実行中」状態のまま止まる問題を修正 | Fixed background agent tasks staying stuck in "running" state when git or API calls hang during cleanup | fixed |
| アップグレード後の初回起動時に `--channels` が「Channels are not currently available」と表示される問題を修正 | Fixed `--channels` showing "Channels are not currently available" on first launch after upgrade | fixed |
| アンインストール済みプラグインのフックが次のセッションまで発火し続ける問題を修正 | Fixed uninstalled plugin hooks continuing to fire until the next session | fixed |
| ストリーミングレスポンス中のキューコマンドのちらつきを修正 | Fixed queued commands flickering during streaming responses | fixed |
| メッセージ処理中にスラッシュコマンドを送信した際、テキストとしてモデルに送信されてしまう問題を修正 | Fixed slash commands being sent to the model as text when submitted while a message is processing | fixed |
| 折りたたまれたread/searchグループが画面外にスクロールした後に完了した際のスクロールバックのジャンプを修正 | Fixed scrollback jumping when collapsed read/search groups finish after scrolling offscreen | fixed |
| モデルの思考開始・終了時にスクロールバックが先頭に飛ぶ問題を修正 | Fixed scrollback jumping to top when the model starts or stops thinking | fixed |
| フックのプログレス/アタッチメントメッセージが parentUuid チェーンを分岐させることで発生する、再開時の SDK セッション履歴消失を修正 | Fixed SDK session history loss on resume caused by hook progress/attachment messages forking the parentUuid chain | fixed |
| マウスをターミナルウィンドウの外でリリースした際に選択時コピーが発火しない問題を修正 | Fixed copy-on-select not firing when you release the mouse outside the terminal window | fixed |
| 高さが制限されたリストでアイテムがオーバーフローした際にゴースト文字が表示される問題を修正 | Fixed ghost characters appearing in height-constrained lists when items overflow | fixed |
| アイドル状態のプロンプトで `Ctrl+B` が readline の backward-char と干渉する問題を修正 — フォアグラウンドタスクをバックグラウンド化できる場合のみ発火するように変更 | Fixed `Ctrl+B` interfering with readline backward-char at an idle prompt — it now only fires when a foreground task can be backgrounded | fixed |
| `cleanupPeriodDays` 設定が無視され、ツール結果ファイルが削除されない問題を修正 | Fixed tool result files never being cleaned up, ignoring the `cleanupPeriodDays` setting | fixed |
| ボイスのホールドトゥトークを離した後、最大3秒間スペースキーが無効になる問題を修正 | Fixed space key being swallowed for up to 3 seconds after releasing voice hold-to-talk | fixed |
| Linuxの音声ハードウェアなし（Docker、ヘッドレス、WSL1）環境で音声モード使用時にALSAライブラリエラーがターミナルUIを破損する問題を修正 | Fixed ALSA library errors corrupting the terminal UI when using voice mode on Linux without audio hardware (Docker, headless, WSL1) | fixed |
| Termux/Android 環境で `which` の起動がカーネルにより制限される場合のボイスモード SoX 検出を修正 | Fixed voice mode SoX detection on Termux/Android where spawning `which` is kernel-restricted | fixed |
| リモートコントロールセッションが実行中にもかかわらずウェブセッション一覧でアイドル状態と表示される問題を修正 | Fixed Remote Control sessions showing as Idle in the web session list while actively running | fixed |
| 設定駆動モードにおいて、フッターナビゲーションが非表示の Remote Control ピルを選択してしまう問題を修正 | Fixed footer navigation selecting an invisible Remote Control pill in config-driven mode | fixed |
| リモートセッションでツール使用IDが無限に蓄積するメモリリークを修正 | Fixed memory leak in remote sessions where tool use IDs accumulate indefinitely | fixed |
| Bedrock SDK のコールドスタートレイテンシをプロファイル取得と他の起動処理を並列化して改善 | Improved Bedrock SDK cold-start latency by overlapping profile fetch with other boot work | improved |
| 大規模セッションにおける `--resume` のメモリ使用量と起動レイテンシを改善 | Improved `--resume` memory usage and startup latency on large sessions | improved |
| プラグイン起動を改善 — コマンド、スキル、エージェントが再取得なしにディスクキャッシュから読み込まれるように | Improved plugin startup — commands, skills, and agents now load from disk cache without re-fetching | improved |
| リモートコントロールのセッションタイトルを改善: AI生成タイトルが最初のメッセージから数秒以内に表示されるように | Improved Remote Control session titles: AI-generated titles now appear within seconds of the first message | improved |
| `WebFetch` がサイト運営者に Claude Code のトラフィックを `robots.txt` で識別・許可リスト登録できるよう、`Claude-User` として識別するように改善 | Improved `WebFetch` to identify as `Claude-User` so site operators can recognize and allowlist Claude Code traffic via `robots.txt` | improved |
| 大きなページに対する `WebFetch` のピークメモリ使用量を削減 | Reduced `WebFetch` peak memory usage for large pages | improved |
| 長時間セッションにおけるスクロールバックのリセット頻度をターンごとから約50メッセージごとに削減 | Reduced scrollback resets in long sessions from once per turn to once per ~50 messages | improved |
| 未認証 HTTP/SSE MCP サーバー使用時の `claude -p` 起動を高速化（約600ms短縮） | Faster `claude -p` startup with unauthenticated HTTP/SSE MCP servers (~600ms saved) | improved |
| Bashゴーストテキスト候補に、直前に実行したコマンドを即座に含めるよう改善 | Bash ghost-text suggestions now include just-submitted commands immediately | improved |
| 非ストリーミングフォールバックのトークン上限（21k → 64k）とタイムアウト（120s → 300s ローカル）を拡大し、フォールバックリクエストが途中で打ち切られる可能性を低減 | Increased non-streaming fallback token cap (21k → 64k) and timeout (120s → 300s local) so fallback requests are less likely to be truncated | improved |
| レスポンスが返る前にプロンプトを中断した場合、入力内容が自動的に復元され、編集して再送信できるように | Interrupting a prompt before any response now automatically restores your input so you can edit and resubmit | improved |
| Claude が応答中でも `/status` が機能するように改善（ターン終了まで待機する必要がなくなった） | `/status` now works while Claude is responding, instead of being queued until the turn finishes | improved |
| org管理コネクタと重複するプラグインMCPサーバーを、2つ目の接続として実行する代わりに抑制するように変更 | Plugin MCP servers that duplicate an org-managed connector are now suppressed instead of running a second connection | changed |
| Linux: `claude-cli://` プロトコルハンドラの登録時に `XDG_DATA_HOME` を尊重するよう対応 | Linux: respect `XDG_DATA_HOME` when registering the `claude-cli://` protocol handler | fixed |
| readline の forward-char をシャドウしないよう、「バックグラウンドエージェントをすべて停止」のキーバインドを `Ctrl+F` から `Ctrl+X Ctrl+K` に変更 | Changed "stop all background agents" keybinding from `Ctrl+F` to `Ctrl+X Ctrl+K` to stop shadowing readline forward-char | changed |
| バックグラウンドタスクの出力ファイルパスに対して `Read` を使用する方式に移行し、`TaskOutput` ツールを非推奨化 | Deprecated `TaskOutput` tool in favor of using `Read` on the background task's output file path | changed |
| ストリーミング失敗時のノンストリーミングフォールバックを無効化する環境変数 `CLAUDE_CODE_DISABLE_NONSTREAMING_FALLBACK` を追加 | Added `CLAUDE_CODE_DISABLE_NONSTREAMING_FALLBACK` env var to disable the non-streaming fallback when streaming fails | added |
| プラグインオプション（`manifest.userConfig`）を外部から利用可能に — プラグインは有効化時に設定を促すことができ、`sensitive: true` の値は macOS ではキーチェーン、その他のプラットフォームでは保護された認証情報ファイルに保存される | Plugin options (`manifest.userConfig`) now available externally — plugins can prompt for configuration at enable time, with `sensitive: true` values stored in keychain (macOS) or protected credentials file (other platforms) | added |
| クリップボードから貼り付けた画像のディスク上のパスをファイル操作で参照可能に | Claude can now reference the on-disk path of clipboard-pasted images for file operations | added |
| `Ctrl+L` で画面をクリアして強制的に全再描画 — Cmd+K で UI が部分的に空白になった際の復旧に使用。プロンプト入力のクリアには `Ctrl+U` またはダブル Esc を使用 | `Ctrl+L` now clears the screen and forces a full redraw — use this to recover when Cmd+K leaves the UI partially blank. Use `Ctrl+U` or double-Esc to clear prompt input. | added |
| `--bare -p`（SDK パターン）の API リクエストまでの速度を約 14% 向上 | `--bare -p` (SDK pattern) is ~14% faster to the API request | improved |
| Memory: `MEMORY.md` インデックスのトランケートを 200 行に加え 25KB でも適用 | Memory: `MEMORY.md` index now truncates at 25KB as well as 200 lines | changed |
| `--channels` が有効な場合に `AskUserQuestion` およびプランモードのツールを無効化 | Disabled `AskUserQuestion` and plan-mode tools when `--channels` is active | changed |
| ツール呼び出し失敗中に貼り付け画像がキューに入ると発生する API 400 エラーを修正 | Fixed API 400 error when a pasted image was queued during a failing tool call | fixed |
| SSE 接続が呼び出し中に切断され再接続の試みが尽きた場合に MCP ツール呼び出しが無限にハングする問題を修正 | Fixed MCP tool calls hanging indefinitely when an SSE connection drops mid-call and exhausts its reconnection attempts | fixed |
| バックグラウンドエージェントが最初のユーザーメッセージより前に完了した場合に Remote Control のセッションタイトルに生の XML が表示される問題を修正 | Fixed Remote Control session titles showing raw XML when a background agent completed before the first user message | fixed |
| 再開したトランスクリプトチェーンのプログレスメッセージのギャップにより、コンテナ再起動後にリモートセッションの会話履歴が失われる問題を修正 | Fixed remote sessions forgetting conversation history after a container restart due to progress-message gaps in the resumed transcript chain | fixed |
| 一時的な認証エラー発生時にリモートセッションが自動的にリトライせず再ログインを要求する問題を修正 | Fixed remote sessions requiring re-login on transient auth errors instead of retrying automatically | fixed |
| Linux のサンドボックスモードで `rg ... \| wc -l` などのパイプコマンドがハングして `0` を返す問題を修正 | Fixed `rg ... \| wc -l` and similar piped commands hanging and returning `0` in sandbox mode on Linux | fixed |
| CJK IME が全角スペースを挿入する際に音声入力のホールド操作が反応しない問題を修正 | Fixed voice input hold-to-talk not activating when a CJK IME inserts a full-width space | fixed |
| ワークツリー名にスラッシュが含まれる場合に `--worktree` がサイレントにハングする問題を修正 | Fixed `--worktree` hanging silently when the worktree name contained a forward slash | fixed |
| [VSCode] バックエンドが60秒間応答しない場合、スピナーが赤くなり「応答なし」と表示されるように | [VSCode] Spinner now turns red with "Not responding" when the backend hasn't responded for 60 seconds | improved |
| [VSCode] URLからセッションを再開した際、または再起動後にセッション履歴が正しく読み込まれない問題を修正 | [VSCode] Fixed session history not loading correctly when reopening a session via URL or after restart | fixed |
| [VSCode] キーボードナビゲーション可能な rewind ピッカーを開く Esc 二回押し（または `/rewind`）を追加 | [VSCode] Added Esc-twice (or `/rewind`) to open a keyboard-navigable rewind picker | added |
| [VSCode] セッションキャッシュが古くなった後に「Fork conversation from here」および rewind 操作がサイレントに失敗する問題を修正 | [VSCode] Fixed "Fork conversation from here" and rewind actions failing silently after the session cache goes stale | fixed |

## 2.1.81

| 日本語 | English | Category |
|--------|---------|----------|
| スクリプト向け `-p` 呼び出し用の `--bare` フラグを追加 — フック、LSP、プラグイン同期、スキルディレクトリ走査をスキップ。`ANTHROPIC_API_KEY` または `--settings` 経由の `apiKeyHelper` が必須（OAuthおよびキーチェーン認証は無効）、自動メモリも完全無効 | Added `--bare` flag for scripted `-p` calls — skips hooks, LSP, plugin sync, and skill directory walks; requires `ANTHROPIC_API_KEY` or an `apiKeyHelper` via `--settings` (OAuth and keychain auth disabled); auto-memory fully disabled | added |
| `--channels` 権限リレーを追加 — permission capability を宣言したチャンネルサーバーがツール承認プロンプトをスマートフォンに転送可能 | Added `--channels` permission relay — channel servers that declare the permission capability can forward tool approval prompts to your phone | added |
| 1つのセッションがOAuthトークンをリフレッシュした際に、複数の同時セッションで再認証が繰り返し要求される問題を修正 | Fixed multiple concurrent Claude Code sessions requiring repeated re-authentication when one session refreshes its OAuth token | fixed |
| ボイスモードでリトライ失敗が握り潰され、実際のエラーの代わりに誤解を招く「ネットワークを確認してください」メッセージが表示される問題を修正 | Fixed voice mode silently swallowing retry failures and showing a misleading "check your network" message instead of the actual error | fixed |
| サーバーがWebSocket接続を無通知で切断した際にボイスモードのオーディオが復旧しない問題を修正 | Fixed voice mode audio not recovering when the server silently drops the WebSocket connection | fixed |
| `CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS` が structured-outputs ベータヘッダーを抑制せず、Vertex/Bedrock に転送するプロキシゲートウェイで400エラーが発生する問題を修正 | Fixed `CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS` not suppressing the structured-outputs beta header, causing 400 errors on proxy gateways forwarding to Vertex/Bedrock | fixed |
| 他のマネージド設定が未構成のTeam/Enterpriseオーグで `--channels` が迂回されてしまう問題を修正 | Fixed `--channels` bypass for Team/Enterprise orgs with no other managed settings configured | fixed |
| Node.js 18 でのクラッシュを修正 | Fixed a crash on Node.js 18 | fixed |
| 文字列にダッシュを含む Bash コマンドで不要な権限プロンプトが表示される問題を修正 | Fixed unnecessary permission prompts for Bash commands containing dashes in strings | fixed |
| セッション中にプラグインディレクトリが削除された際、プラグインフックがプロンプト送信をブロックする問題を修正 | Fixed plugin hooks blocking prompt submission when the plugin directory is deleted mid-session | fixed |
| タスクがポーリング間隔の間に完了した場合にバックグラウンドエージェントのタスク出力が無限にハングするレース条件を修正 | Fixed a race condition where background agent task output could hang indefinitely when the task completed between polling intervals | fixed |
| ワークツリー内のセッションを再開した際に、そのワークツリーへ自動的に切り替えるように対応 | Resuming a session that was in a worktree now switches back to that worktree | fixed |
| アクティブなレスポンス中に使用した際に `/btw` がペーストしたテキストを含めない問題を修正 | Fixed `/btw` not including pasted text when used during an active response | fixed |
| tmux 環境下で素早い Cmd+Tab 後のペーストがクリップボードコピーより先行する可能性があるレース条件を修正 | Fixed a race where fast Cmd+Tab followed by paste could beat the clipboard copy under tmux | fixed |
| 自動生成されたセッション説明でターミナルのタブタイトルが更新されない問題を修正 | Fixed terminal tab title not updating with an auto-generated session description | fixed |
| 非表示のフックアタッチメントがトランスクリプトモードのメッセージ数を水増しする問題を修正 | Fixed invisible hook attachments inflating the message count in transcript mode | fixed |
| Remote Control セッションが汎用タイトルを表示し、最初のプロンプトから派生したタイトルにならない問題を修正 | Fixed Remote Control sessions showing a generic title instead of deriving from the first prompt | fixed |
| `/rename` が Remote Control セッションのタイトルを同期しない問題を修正 | Fixed `/rename` not syncing the title for Remote Control sessions | fixed |
| Remote Control の `/exit` がセッションを確実にアーカイブしない問題を修正 | Fixed Remote Control `/exit` not reliably archiving the session | fixed |
| MCP の読み取り・検索ツール呼び出しを「Queried {server}」の1行に折りたたむよう改善（Ctrl+O で展開可能） | Improved MCP read/search tool calls to collapse into a single "Queried {server}" line (expand with Ctrl+O) | improved |
| `!` bash モードの発見性を改善 — インタラクティブなコマンド実行が必要な際にClaudeが提案するように対応 | Improved `!` bash mode discoverability — Claude now suggests it when you need to run an interactive command | improved |
| プラグインの鮮度を改善 — refトラッキングされたプラグインが上流の変更を取得するために毎回ロード時に再クローンするように対応 | Improved plugin freshness — ref-tracked plugins now re-clone on every load to pick up upstream changes | improved |
| Remote Control セッションのタイトルが3番目のメッセージ以降に更新されるよう改善 | Improved Remote Control session titles to refresh after your third message | improved |
| Dynamic Client Registration 未対応のサーバー向けに、MCP OAuthがClient ID Metadata Document（CIMD / SEP-991）をサポートするよう更新 | Updated MCP OAuth to support Client ID Metadata Document (CIMD / SEP-991) for servers without Dynamic Client Registration | changed |
| プランモードでデフォルトの「コンテキストをクリア」オプションを非表示に変更（`"showClearContextOnPlanAccept": true` で復元可能） | Changed plan mode to hide the "clear context" option by default (restore with `"showClearContextOnPlanAccept": true`) | changed |
| 描画の問題により、Windows（Windows Terminal上のWSLを含む）での行単位レスポンスストリーミングを無効化 | Disabled line-by-line response streaming on Windows (including WSL in Windows Terminal) due to rendering issues | changed |
| [VSCode] Git Bash使用時のBashツールにおけるWindows PATH継承を修正（v2.1.78のリグレッション） | [VSCode] Fixed Windows PATH inheritance for Bash tool when using Git Bash (regression in v2.1.78) | fixed |

## 2.1.80

| 日本語 | English | Category |
|--------|---------|----------|
| ステータスラインスクリプトに `rate_limits` フィールドを追加 — Claude.ai のレート制限使用状況（5時間・7日間ウィンドウの `used_percentage` と `resets_at`）を表示可能に | Added `rate_limits` field to statusline scripts for displaying Claude.ai rate limit usage (5-hour and 7-day windows with `used_percentage` and `resets_at`) | added |
| `source: 'settings'` プラグインマーケットプレイスソースを追加 — settings.json にプラグインエントリをインラインで宣言可能に | Added `source: 'settings'` plugin marketplace source — declare plugin entries inline in settings.json | added |
| ファイルパターンマッチングに加え、プラグインヒントへの CLI ツール使用検出を追加 | Added CLI tool usage detection to plugin tips, in addition to file pattern matching | added |
| スキルおよびスラッシュコマンドのフロントマターに `effort` サポートを追加 — 呼び出し時にモデルのエフォートレベルを上書き可能に | Added `effort` frontmatter support for skills and slash commands to override the model effort level when invoked | added |
| `--channels`（リサーチプレビュー）を追加 — MCP サーバーからセッションへのメッセージプッシュを許可 | Added `--channels` (research preview) — allow MCP servers to push messages into your session | added |
| `--resume` で並列ツール結果が欠落する問題を修正 — 並列ツール呼び出しを含むセッションで、`[Tool result missing]` プレースホルダーではなくすべての tool_use/tool_result ペアが正しく復元されるように | Fixed `--resume` dropping parallel tool results — sessions with parallel tool calls now restore all tool_use/tool_result pairs instead of showing `[Tool result missing]` placeholders | fixed |
| ブラウザ以外の TLS フィンガープリントに対する Cloudflare ボット検出が原因で音声モードの WebSocket が失敗する問題を修正 | Fixed voice mode WebSocket failures caused by Cloudflare bot detection on non-browser TLS fingerprints | fixed |
| API プロキシ・Bedrock・Vertex 経由でファイングレインなツールストリーミングを使用した際に 400 エラーが発生する問題を修正 | Fixed 400 errors when using fine-grained tool streaming through API proxies, Bedrock, or Vertex | fixed |
| ゲートウェイおよびサードパーティプロバイダーのデプロイ環境（機能しない環境）で `/remote-control` が表示される問題を修正 | Fixed `/remote-control` appearing for gateway and third-party provider deployments where it cannot function | fixed |
| `/sandbox` タブ切り替えが Tab キーおよび矢印キーに反応しない問題を修正 | Fixed `/sandbox` tab switching not responding to Tab or arrow keys | fixed |
| 大規模 git リポジトリにおける `@` ファイルオートコンプリートの応答性を改善 | Improved responsiveness of `@` file autocomplete in large git repositories | improved |
| `/effort` に auto が現在解決するレベルの表示を追加し、ステータスバーの表示と一致するように改善 | Improved `/effort` to show what auto currently resolves to, matching the status bar indicator | improved |
| `/permissions` を改善 — リスト内から Tab キーおよび矢印キーでタブ切り替えが可能に | Improved `/permissions` — Tab and arrow keys now switch tabs from within a list | improved |
| バックグラウンドタスクパネルを改善 — リストビューから左矢印キーで閉じられるように | Improved background tasks panel — left arrow now closes from the list view | improved |
| プラグインインストールのヒントを簡略化 — 2ステップのフローではなく単一の `/plugin install` コマンドに統一 | Simplified plugin install tips to use a single `/plugin install` command instead of a two-step flow | changed |
| 大規模リポジトリでの起動時メモリ使用量を削減（25万ファイルのリポジトリで約 80 MB 削減） | Reduced memory usage on startup in large repositories (~80 MB saved on 250k-file repos) | improved |
| `remote-settings.json` が前回セッションからキャッシュされている場合に、マネージド設定（`enabledPlugins`・`permissions.defaultMode`・ポリシー設定の環境変数）が起動時に適用されない問題を修正 | Fixed managed settings (`enabledPlugins`, `permissions.defaultMode`, policy-set env vars) not being applied at startup when `remote-settings.json` was cached from a prior session | fixed |

## 2.1.79

| 日本語 | English | Category |
|--------|---------|----------|
| `claude auth login` に Anthropic Console（API課金）認証用の `--console` フラグを追加 (#なし) | Added `--console` flag to `claude auth login` for Anthropic Console (API billing) authentication | added |
| `/config` メニューに「ターン所要時間を表示」トグルを追加 | Added "Show turn duration" toggle to the `/config` menu | added |
| 明示的な stdin なしでサブプロセスとして起動した場合（例: Python の `subprocess.run`）に `claude -p` がハングする問題を修正 | Fixed `claude -p` hanging when spawned as a subprocess without explicit stdin (e.g. Python `subprocess.run`) | fixed |
| `-p`（print）モードで Ctrl+C が機能しない問題を修正 | Fixed Ctrl+C not working in `-p` (print) mode | fixed |
| ストリーミング中に `/btw` がトリガーされた際、サイドの質問に答える代わりにメインエージェントの出力を返す問題を修正 | Fixed `/btw` returning the main agent's output instead of answering the side question when triggered during streaming | fixed |
| `voiceEnabled: true` が設定されている場合に起動時ボイスモードが正しく有効化されない問題を修正 | Fixed voice mode not activating correctly on startup when `voiceEnabled: true` is set | fixed |
| `/permissions` での左右矢印キーによるタブナビゲーションが機能しない問題を修正 | Fixed left/right arrow tab navigation in `/permissions` | fixed |
| `CLAUDE_CODE_DISABLE_TERMINAL_TITLE` が起動時のターミナルタイトル設定を抑制しない問題を修正 | Fixed `CLAUDE_CODE_DISABLE_TERMINAL_TITLE` not preventing terminal title from being set on startup | fixed |
| ワークスペーストラストによりブロックされている場合にカスタムステータスラインが何も表示されない問題を修正 | Fixed custom status line showing nothing when workspace trust is blocking it | fixed |
| エンタープライズユーザーがレートリミット（429）エラー時に再試行できない問題を修正 | Fixed enterprise users being unable to retry on rate limit (429) errors | fixed |
| インタラクティブな `/resume` でセッションを切り替えた際に `SessionEnd` フックが発火しない問題を修正 | Fixed `SessionEnd` hooks not firing when using interactive `/resume` to switch sessions | fixed |
| 全シナリオで起動時のメモリ使用量を約18MB削減 | Improved startup memory usage by ~18MB across all scenarios | improved |
| 非ストリーミングAPIフォールバックに1回あたり2分のタイムアウトを追加し、セッションが無期限にハングするのを防止 | Improved non-streaming API fallback with a 2-minute per-attempt timeout, preventing sessions from hanging indefinitely | improved |
| `CLAUDE_CODE_PLUGIN_SEED_DIR` がプラットフォームのパス区切り文字（Unix では `:`、Windows では `;`）で区切られた複数のシードディレクトリをサポート | `CLAUDE_CODE_PLUGIN_SEED_DIR` now supports multiple seed directories separated by the platform path delimiter (`:` on Unix, `;` on Windows) | changed |
| [VSCode] `/remote-control` を追加 — セッションを claude.ai/code にブリッジしてブラウザやスマートフォンから続行可能 | [VSCode] Added `/remote-control` — bridge your session to claude.ai/code to continue from a browser or phone | added |
| [VSCode] セッションタブに最初のメッセージをもとにAI生成タイトルを付与する機能を追加 | [VSCode] Session tabs now get AI-generated titles based on your first message | added |
| [VSCode] レスポンス完了後にthinkingピルが「Thought for Ns」ではなく「Thinking」と表示される問題を修正 | [VSCode] Fixed the thinking pill showing "Thinking" instead of "Thought for Ns" after a response completes | fixed |
| [VSCode] 左サイドバーからセッションを開いた際にセッションdiffボタンが表示されない問題を修正 | [VSCode] Fixed missing session diff button when opening sessions from the left sidebar | fixed |

## 2.1.78

| 日本語 | English | Category |
|--------|---------|----------|
| APIエラー（レート制限、認証失敗など）によりターンが終了した際に発火する `StopFailure` フックイベントを追加 (#なし) | Added `StopFailure` hook event that fires when the turn ends due to an API error (rate limit, auth failure, etc.) | added |
| プラグインのアップデート後も状態が保持されるプラグイン永続ステート用変数 `${CLAUDE_PLUGIN_DATA}` を追加。`/plugin uninstall` 実行時に削除前の確認プロンプトを表示 | Added `${CLAUDE_PLUGIN_DATA}` variable for plugin persistent state that survives plugin updates; `/plugin uninstall` prompts before deleting it | added |
| プラグイン同梱エージェントのフロントマターに `effort`・`maxTurns`・`disallowedTools` のサポートを追加 | Added `effort`, `maxTurns`, and `disallowedTools` frontmatter support for plugin-shipped agents | added |
| tmux 上で `set -g allow-passthrough on` を設定時、ターミナル通知（iTerm2/Kitty/Ghostty のポップアップ、プログレスバー）が外側のターミナルに正しく伝達されるよう対応 | Terminal notifications (iTerm2/Kitty/Ghostty popups, progress bar) now reach the outer terminal when running inside tmux with `set -g allow-passthrough on` | fixed |
| レスポンステキストを生成しながら1行ずつストリーミング表示するよう変更 | Response text now streams line-by-line as it's generated | improved |
| Linux のサンドボックス Bash 上で `git log HEAD` が「ambiguous argument」エラーで失敗する問題、およびスタブファイルが作業ディレクトリの `git status` を汚染する問題を修正 | Fixed `git log HEAD` failing with "ambiguous argument" inside sandboxed Bash on Linux, and stub files polluting `git status` in the working directory | fixed |
| サブエージェントを使用した大規模セッション（5MB超）で `cc log` および `--resume` が会話履歴をサイレントに切り捨てる問題を修正 | Fixed `cc log` and `--resume` silently truncating conversation history on large sessions (>5 MB) that used subagents | fixed |
| APIエラーがストップフックをトリガーし、ブロッキングエラーがモデルに再送されることで発生する無限ループを修正 | Fixed infinite loop when API errors triggered stop hooks that re-fed blocking errors to the model | fixed |
| `deny: ["mcp__servername"]` の権限ルールがモデルへの送信前に MCP サーバーツールを除外せず、ブロック対象のツールを参照・実行できてしまう問題を修正 | Fixed `deny: ["mcp__servername"]` permission rules not removing MCP server tools before sending to the model, allowing it to see and attempt blocked tools | fixed |
| `sandbox.filesystem.allowWrite` が絶対パスで機能しない問題を修正（従来は `//` プレフィックスが必要だった） | Fixed `sandbox.filesystem.allowWrite` not working with absolute paths (previously required `//` prefix) | fixed |
| `/sandbox` の Dependencies タブが macOS 上で macOS 固有の情報ではなく Linux の前提条件を表示する問題を修正 | Fixed `/sandbox` Dependencies tab showing Linux prerequisites on macOS instead of macOS-specific info | fixed |
| **セキュリティ:** `sandbox.enabled: true` が設定されているが依存関係が不足している場合にサンドボックスがサイレント無効化される問題を修正 — 起動時に警告を明示表示するよう変更 | **Security:** Fixed silent sandbox disable when `sandbox.enabled: true` is set but dependencies are missing — now shows a visible startup warning | fixed |
| `bypassPermissions` モードで `.git`・`.claude` 等の保護ディレクトリがプロンプトなしに書き込み可能になっていた問題を修正 | Fixed `.git`, `.claude`, and other protected directories being writable without a prompt in `bypassPermissions` mode | fixed |
| ノーマルモードでの ctrl+u がreadline の kill-line ではなくスクロールになっていた問題を修正（ctrl+u/ctrl+d の半ページスクロールはトランスクリプトモード専用に移動） | Fixed ctrl+u in normal mode scrolling instead of readline kill-line (ctrl+u/ctrl+d half-page scroll moved to transcript mode only) | fixed |
| ボイスモードのモディファイアキー組み合わせによるプッシュトゥトーク（例: ctrl+k）が即時起動せず長押しが必要になっていた問題を修正 | Fixed voice mode modifier-combo push-to-talk keybindings (e.g. ctrl+k) requiring a hold instead of activating immediately | fixed |
| WSL2（WSLg、Windows 11）でボイスモードが動作しない問題を修正。WSL1/Windows 10 ユーザーには明確なエラーメッセージを表示 | Fixed voice mode not working on WSL2 with WSLg (Windows 11); WSL1/Win10 users now get a clear error | fixed |
| `--worktree` フラグがワークツリーディレクトリからスキルとフックを読み込まない問題を修正 | Fixed `--worktree` flag not loading skills and hooks from the worktree directory | fixed |
| `CLAUDE_CODE_DISABLE_GIT_INSTRUCTIONS` および `includeGitInstructions` 設定がシステムプロンプトの git ステータスセクションを抑制しない問題を修正 | Fixed `CLAUDE_CODE_DISABLE_GIT_INSTRUCTIONS` and `includeGitInstructions` setting not suppressing the git status section in the system prompt | fixed |
| VS Code を Dock/Spotlight から起動した際に Bash ツールが Homebrew 等の PATH 依存バイナリを検出できない問題を修正 | Fixed Bash tool not finding Homebrew and other PATH-dependent binaries when VS Code is launched from Dock/Spotlight | fixed |
| トゥルーカラーをアドバタイズしない VS Code/Cursor/code-server ターミナルで Claude のオレンジ色が薄くなる問題を修正 | Fixed washed-out Claude orange color in VS Code/Cursor/code-server terminals that don't advertise truecolor support | fixed |
| `/model` ピッカーにカスタムエントリを追加できる環境変数 `ANTHROPIC_CUSTOM_MODEL_OPTION` を追加。表示名と説明用に `_NAME`・`_DESCRIPTION` サフィックス付き変数もサポート | Added `ANTHROPIC_CUSTOM_MODEL_OPTION` env var to add a custom entry to the `/model` picker, with optional `_NAME` and `_DESCRIPTION` suffixed vars for display | added |
| Haiku モデル使用時に環境変数 `ANTHROPIC_BETAS` がサイレントに無視される問題を修正 | Fixed `ANTHROPIC_BETAS` environment variable being silently ignored when using Haiku models | fixed |
| キューに積まれたプロンプトが改行なしで連結される問題を修正 | Fixed queued prompts being concatenated without a newline separator | fixed |
| 大規模セッション再開時のメモリ使用量と起動時間を改善 | Improved memory usage and startup time when resuming large sessions | improved |
| [VSCode] 認証済み状態でサイドバーを開いた際にログイン画面が一瞬フラッシュする問題を修正 | [VSCode] Fixed a brief flash of the login screen when opening the sidebar while already authenticated | fixed |
| [VSCode] Opus 選択時に「API Error: Rate limit reached」が発生する問題を修正 — プラン階層が不明なサブスクライバーにはモデルドロップダウンで 1M コンテキスト版を表示しないよう変更 | [VSCode] Fixed "API Error: Rate limit reached" when selecting Opus — model dropdown no longer offers 1M context variant to subscribers whose plan tier is unknown | fixed |

## 2.1.77

| 日本語 | English | Category |
|--------|---------|----------|
| Claude Opus 4.6 のデフォルト最大出力トークン上限を 64k トークンに、Opus 4.6 および Sonnet 4.6 モデルの上限を 128k トークンに引き上げ | Increased default maximum output token limits for Claude Opus 4.6 to 64k tokens, and the upper bound for Opus 4.6 and Sonnet 4.6 models to 128k tokens | changed |
| `denyRead` 領域内での読み取りアクセスを再許可する `allowRead` サンドボックスファイルシステム設定を追加 | Added `allowRead` sandbox filesystem setting to re-allow read access within `denyRead` regions | added |
| `/copy` にオプションのインデックス指定を追加：`/copy N` で N 番目に新しいアシスタントの返答をコピー可能 | `/copy` now accepts an optional index: `/copy N` copies the Nth-latest assistant response | added |
| 複合 bash コマンド（例：`cd src && npm test`）に対する「Always Allow」が、サブコマンド単位ではなく文字列全体に対して単一のルールを保存し、無効なルールと繰り返しの権限プロンプトが発生する不具合を修正 | Fixed "Always Allow" on compound bash commands (e.g. `cd src && npm test`) saving a single rule for the full string instead of per-subcommand, leading to dead rules and repeated permission prompts | fixed |
| スラッシュコマンドオーバーレイの繰り返し開閉時に自動アップデーターが重複してバイナリダウンロードを開始し、数十ギガバイトのメモリを消費する不具合を修正 | Fixed auto-updater starting overlapping binary downloads when the slash-command overlay repeatedly opened and closed, accumulating tens of gigabytes of memory | fixed |
| メモリ抽出書き込みとメイントランスクリプトの競合により、`--resume` が最近の会話履歴を無通知でトランケートする不具合を修正 | Fixed `--resume` silently truncating recent conversation history due to a race between memory-extraction writes and the main transcript | fixed |
| PreToolUse フックが `"allow"` を返すことで、エンタープライズ管理設定を含む `deny` 権限ルールを迂回できる不具合を修正 | Fixed PreToolUse hooks returning `"allow"` bypassing `deny` permission rules, including enterprise managed settings | fixed |
| CRLF ファイルの上書きや CRLF ディレクトリへのファイル作成時に、Write ツールが無通知で改行コードを変換する不具合を修正 | Fixed Write tool silently converting line endings when overwriting CRLF files or creating files in CRLF directories | fixed |
| 進捗メッセージがコンパクション後も残ることによる長時間セッションでのメモリ増加を修正 | Fixed memory growth in long-running sessions from progress messages surviving compaction | fixed |
| API が非ストリーミングモードにフォールバックした際にコストとトークン使用量が記録されない不具合を修正 | Fixed cost and token usage not being tracked when the API falls back to non-streaming mode | fixed |
| `CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS` がベータツールスキーマフィールドを除去せず、プロキシゲートウェイがリクエストを拒否する不具合を修正 | Fixed `CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS` not stripping beta tool-schema fields, causing proxy gateways to reject requests | fixed |
| システム一時ディレクトリのパスにスペースが含まれる場合、Bash ツールが成功したコマンドに対してエラーを報告する不具合を修正 | Fixed Bash tool reporting errors for successful commands when the system temp directory path contains spaces | fixed |
| ペースト直後に入力した際にペースト内容が失われる不具合を修正 | Fixed paste being lost when typing immediately after pasting | fixed |
| `/feedback` テキスト入力内での Ctrl+D が前方削除として動作し、2 回目の押下でセッションを終了できない不具合を修正 | Fixed Ctrl+D in `/feedback` text input deleting forward instead of the second press exiting the session | fixed |
| 0 バイトの画像ファイルをプロンプトにドラッグした際の API エラーを修正 | Fixed API error when dragging a 0-byte image file into the prompt | fixed |
| Claude Desktop セッションが OAuth の代わりにターミナル CLI で設定した API キーを誤って使用する不具合を修正 | Fixed Claude Desktop sessions incorrectly using the terminal CLI's configured API key instead of OAuth | fixed |
| 同一モノレポの異なるサブディレクトリの `git-subdir` プラグインがプラグインキャッシュで衝突する不具合を修正 | Fixed `git-subdir` plugins at different subdirectories of the same monorepo commit colliding in the plugin cache | fixed |
| ターミナル UI で順序付きリストの番号が描画されない不具合を修正 | Fixed ordered list numbers not rendering in terminal UI | fixed |
| 以前のクラッシュから再開したエージェントワークツリーが、古いワークツリーのクリーンアップ処理によって削除されることがある競合状態を修正 | Fixed a race condition where stale-worktree cleanup could delete an agent worktree just resumed from a previous crash | fixed |
| エージェント実行中に `/mcp` 等のダイアログを開いた際の入力デッドロックを修正 | Fixed input deadlock when opening `/mcp` or similar dialogs while the agent is running | fixed |
| vim NORMAL モードで Backspace キーと Delete キーが機能しない不具合を修正 | Fixed Backspace and Delete keys not working in vim NORMAL mode | fixed |
| vim モードのオン・オフ切り替え時にステータスラインが更新されない不具合を修正 | Fixed status line not updating when vim mode is toggled on or off | fixed |
| VS Code、Cursor およびその他の xterm.js ベースのターミナルで Cmd+クリック時にハイパーリンクが 2 回開く不具合を修正 | Fixed hyperlinks opening twice on Cmd+click in VS Code, Cursor, and other xterm.js-based terminals | fixed |
| デフォルト設定の tmux 内でバックグラウンドカラーがターミナルデフォルトとして描画される不具合を修正 | Fixed background colors rendering as terminal-default inside tmux with default configuration | fixed |
| SSH 経由の tmux 上でテキストを選択した際に iTerm2 セッションがクラッシュする不具合を修正 | Fixed iTerm2 session crash when selecting text inside tmux over SSH | fixed |
| tmux セッションでのクリップボードコピーが無通知で失敗する不具合を修正；コピー完了のトーストに `⌘V` または tmux の `prefix+]` どちらで貼り付けるかを表示するよう改善 | Fixed clipboard copy silently failing in tmux sessions; copy toast now indicates whether to paste with `⌘V` or tmux `prefix+]` | fixed |
| 設定・権限・サンドボックスダイアログのリスト操作中に `←`/`→` キーが誤ってタブを切り替える不具合を修正 | Fixed `←`/`→` accidentally switching tabs in settings, permissions, and sandbox dialogs while navigating lists | fixed |
| tmux または screen 内で Claude Code を起動した際に IDE 連携が自動接続されない不具合を修正 | Fixed IDE integration not auto-connecting when Claude Code is launched inside tmux or screen | fixed |
| 右端でクリップされた CJK 文字が隣接する UI 要素にはみ出して表示される不具合を修正 | Fixed CJK characters visually bleeding into adjacent UI elements when clipped at the right edge | fixed |
| リーダーが終了した際にチームメイトペインが閉じない不具合を修正 | Fixed teammate panes not closing when the leader exits | fixed |
| iTerm2 オートモードでネイティブ分割ペインのチームメイト向けに iTerm2 が検出されない不具合を修正 | Fixed iTerm2 auto mode not detecting iTerm2 for native split-pane teammates | fixed |
| キーチェーン認証情報をモジュールロードと並列で読み込むことにより、macOS での起動を高速化（約 60ms 短縮） | Faster startup on macOS (~60ms) by reading keychain credentials in parallel with module loading | improved |
| フォークの多いセッションや非常に大きなセッションでの `--resume` を高速化 — 読み込みを最大 45% 高速化、ピークメモリを約 100〜150MB 削減 | Faster `--resume` on fork-heavy and very large sessions — up to 45% faster loading and ~100-150MB less peak memory | improved |
| Esc による非ストリーミング API リクエストの中断を改善 | Improved Esc to abort in-flight non-streaming API requests | improved |
| `claude plugin validate` でスキル・エージェント・コマンドのフロントマターおよび `hooks/hooks.json` のチェックを追加し、YAML パースエラーとスキーマ違反を検出可能に改善 | Improved `claude plugin validate` to check skill, agent, and command frontmatter plus `hooks/hooks.json`, catching YAML parse errors and schema violations | improved |
| バックグラウンド bash タスクの出力が 5GB を超えた場合に強制終了し、ディスクを使い果たすプロセスの暴走を防止 | Background bash tasks are now killed if output exceeds 5GB, preventing runaway processes from filling disk | added |
| プランを承認した際にプランの内容からセッション名を自動生成するよう対応 | Sessions are now auto-named from plan content when you accept a plan | added |
| ヘッドレスモードのプラグインインストールを `CLAUDE_CODE_PLUGIN_SEED_DIR` と正しく組み合わせられるよう改善 | Improved headless mode plugin installation to compose correctly with `CLAUDE_CODE_PLUGIN_SEED_DIR` | improved |
| `apiKeyHelper` が 10 秒以上かかる場合にメインループをブロックしないよう通知を表示 | Show a notice when `apiKeyHelper` takes longer than 10s, preventing it from blocking the main loop | improved |
| Agent ツールの `resume` パラメーターを廃止 — 以前に起動したエージェントを継続するには `SendMessage({to: agentId})` を使用 | The Agent tool no longer accepts a `resume` parameter — use `SendMessage({to: agentId})` to continue a previously spawned agent | changed |
| `SendMessage` がエラーを返す代わりに、停止中のエージェントをバックグラウンドで自動再開するよう変更 | `SendMessage` now auto-resumes stopped agents in the background instead of returning an error | changed |
| `/fork` を `/branch` に改名（`/fork` はエイリアスとして継続使用可能） | Renamed `/fork` to `/branch` (`/fork` still works as an alias) | changed |
| [VSCode] プランプレビュータブのタイトルを「Claude's Plan」ではなくプランの見出しを使用するよう改善 | [VSCode] Improved plan preview tab titles to use the plan's heading instead of "Claude's Plan" | improved |
| [VSCode] macOS で option+クリックがネイティブ選択を起動しない場合、フッターに `macOptionClickForcesSelection` 設定への案内を表示 | [VSCode] When option+click doesn't trigger native selection on macOS, the footer now points to the `macOptionClickForcesSelection` setting | improved |

## 2.1.76

| 日本語 | English | Category |
|--------|---------|----------|
| MCP エリシテーションのサポートを追加 — MCP サーバーがインタラクティブなダイアログ（フォームフィールドまたはブラウザ URL）経由でタスク中に構造化された入力を要求できるように | Added MCP elicitation support — MCP servers can now request structured input mid-task via an interactive dialog (form fields or browser URL) | added |
| レスポンスをサーバーに返す前にインターセプト・オーバーライドするための `Elicitation` および `ElicitationResult` フックを追加 | Added new `Elicitation` and `ElicitationResult` hooks to intercept and override responses before they're sent back | added |
| セッションの表示名を起動時に設定する `-n` / `--name <name>` CLI フラグを追加 | Added `-n` / `--name <name>` CLI flag to set a display name for the session at startup | added |
| 大規模モノレポで必要なディレクトリのみを git sparse-checkout でチェックアウトするための `claude --worktree` 用 `worktree.sparsePaths` 設定を追加 | Added `worktree.sparsePaths` setting for `claude --worktree` in large monorepos to check out only the directories you need via git sparse-checkout | added |
| コンパクション完了後に発火する `PostCompact` フックを追加 | Added `PostCompact` hook that fires after compaction completes | added |
| モデルのエフォートレベルを設定する `/effort` スラッシュコマンドを追加 | Added `/effort` slash command to set model effort level | added |
| セッション品質サーベイを追加 — エンタープライズ管理者は `feedbackSurveyRate` 設定でサンプルレートを設定可能 | Added session quality survey — enterprise admins can configure the sample rate via the `feedbackSurveyRate` setting | added |
| 会話のコンパクション後に遅延ツール（`ToolSearch` 経由でロード）の入力スキーマが失われ、配列・数値パラメータが型エラーで拒否される問題を修正 | Fixed deferred tools (loaded via `ToolSearch`) losing their input schemas after conversation compaction, causing array and number parameters to be rejected with type errors | fixed |
| スラッシュコマンドに「Unknown skill」が表示される問題を修正 | Fixed slash commands showing "Unknown skill" | fixed |
| プランが承認済みにもかかわらずプランモードが再承認を求める問題を修正 | Fixed plan mode asking for re-approval after the plan was already accepted | fixed |
| パーミッションダイアログまたはプランエディタが開いている間、ボイスモードがキー入力を飲み込む問題を修正 | Fixed voice mode swallowing keypresses while a permission dialog or plan editor was open | fixed |
| npm 経由でインストールした場合に Windows で `/voice` が動作しない問題を修正 | Fixed `/voice` not working on Windows when installed via npm | fixed |
| 1M コンテキストのセッションで `model:` フロントマターを持つスキル呼び出し時に「Context limit reached」が誤って表示される問題を修正 | Fixed spurious "Context limit reached" when invoking a skill with `model:` frontmatter on a 1M-context session | fixed |
| 非標準モデル文字列使用時に「adaptive thinking is not supported on this model」エラーが発生する問題を修正 | Fixed "adaptive thinking is not supported on this model" error when using non-standard model strings | fixed |
| クォートされた引数に `#` が含まれる場合に `Bash(cmd:*)` パーミッションルールがマッチしない問題を修正 | Fixed `Bash(cmd:*)` permission rules not matching when a quoted argument contains `#` | fixed |
| Bash パーミッションダイアログの「次回から確認しない」でパイプや複合コマンドの生のコマンド全体が表示される問題を修正 | Fixed "don't ask again" in the Bash permission dialog showing the full raw command for pipes and compound commands | fixed |
| 連続した失敗後に自動コンパクションが無限リトライし続ける問題を修正 — サーキットブレーカーが 3 回試行後に停止するように | Fixed auto-compaction retrying indefinitely after consecutive failures — a circuit breaker now stops after 3 attempts | fixed |
| 再接続成功後も MCP の再接続スピナーが残り続ける問題を修正 | Fixed MCP reconnect spinner persisting after successful reconnection | fixed |
| LSP マネージャーがマーケットプレイスの調整前に初期化された際に LSP プラグインがサーバーを登録しない問題を修正 | Fixed LSP plugins not registering servers when the LSP Manager initialized before marketplaces were reconciled | fixed |
| tmux over SSH でのクリップボードコピーを修正 — ターミナルへの直接書き込みと tmux クリップボード統合の両方を試みるように | Fixed clipboard copying in tmux over SSH — now attempts both direct terminal write and tmux clipboard integration | fixed |
| `/export` の成功メッセージにフルファイルパスでなくファイル名のみが表示される問題を修正 | Fixed `/export` showing only the filename instead of the full file path in the success message | fixed |
| テキスト選択後に新しいメッセージへトランスクリプトが自動スクロールしない問題を修正 | Fixed transcript not auto-scrolling to new messages after selecting text | fixed |
| ログイン方法選択画面で Escape キーが機能しない問題を修正 | Fixed Escape key not working to exit the login method selection screen | fixed |
| リモートコントロールの複数の問題を修正: サーバーがアイドル環境を回収した際にセッションがサイレントに終了する問題、高速なメッセージが一括処理されず一件ずつキューイングされる問題、JWT 更新後に古い作業アイテムが再配信される問題 | Fixed several Remote Control issues: sessions silently dying when the server reaps an idle environment, rapid messages being queued one-at-a-time instead of batched, and stale work items causing redelivery after JWT refresh | fixed |
| WebSocket の長時間切断後にブリッジセッションが回復できない問題を修正 | Fixed bridge sessions failing to recover after extended WebSocket disconnects | fixed |
| ソフト非表示コマンドの正確な名前を入力してもスラッシュコマンドが見つからない問題を修正 | Fixed slash commands not found when typing the exact name of a soft-hidden command | fixed |
| git refs を直接読み取り、リモートブランチがすでにローカルで利用可能な場合の冗長な `git fetch` をスキップすることで `--worktree` の起動パフォーマンスを改善 | Improved `--worktree` startup performance by reading git refs directly and skipping redundant `git fetch` when the remote branch is already available locally | improved |
| バックグラウンドエージェントの動作を改善 — バックグラウンドエージェントを強制終了した際に途中の結果が会話コンテキストに保持されるように | Improved background agent behavior — killing a background agent now preserves its partial results in the conversation context | improved |
| モデルフォールバック通知を改善 — 冗長モードの裏に隠れることなく常に表示され、人間が読みやすいモデル名を使用するように | Improved model fallback notifications — now always visible instead of hidden behind verbose mode, with human-friendly model names | improved |
| ダークターミナルテーマでのブロック引用の可読性を改善 — テキストが薄暗い表示ではなく左バー付きのイタリック体で表示されるように | Improved blockquote readability on dark terminal themes — text is now italic with a left bar instead of dim | improved |
| 古いワークツリーのクリーンアップを改善 — 並列実行の中断後に残ったワークツリーが自動的にクリーンアップされるように | Improved stale worktree cleanup — worktrees left behind after an interrupted parallel run are now automatically cleaned up | improved |
| リモートコントロールのセッションタイトルを改善 — 「Interactive session」ではなく最初のプロンプトから導出されるように | Improved Remote Control session titles — now derived from your first prompt instead of showing "Interactive session" | improved |
| `/voice` を改善 — 有効化時にディクテーション言語を表示し、音声入力で `language` 設定がサポートされていない場合に警告を表示するように | Improved `/voice` to show your dictation language on enable and warn when your `language` setting isn't supported for voice input | improved |
| `--plugin-dir` がサブコマンドをサポートするために 1 つのパスのみ受け付けるように変更 — 複数ディレクトリの指定には `--plugin-dir` を繰り返し使用 | Updated `--plugin-dir` to only accept one path to support subcommands — use repeated `--plugin-dir` for multiple directories | changed |
| [VSCode] gitignore のパターンにカンマが含まれている場合、@メンションのファイルピッカーからファイルタイプ全体がサイレントに除外される問題を修正 | [VSCode] Fixed gitignore patterns containing commas silently excluding entire filetypes from the @-mention file picker | fixed |

## 2.1.75

| 日本語 | English | Category |
|--------|---------|----------|
| MaxプランおよびTeam・Enterpriseプランにおいて、Opus 4.6のデフォルトコンテキストウィンドウを1Mトークンに拡大（従来は追加使用が必要だった） | Added 1M context window for Opus 4.6 by default for Max, Team, and Enterprise plans (previously required extra usage) | added |
| セッションのプロンプトバーの色を設定できる `/color` コマンドを全ユーザー向けに追加 | Added `/color` command for all users to set a prompt-bar color for your session | added |
| `/rename` 使用時にプロンプトバーへのセッション名表示を追加 | Added session name display on the prompt bar when using `/rename` | added |
| メモリファイルに最終更新タイムスタンプを追加し、Claudeが記憶の新旧を判断しやすくなるように改善 | Added last-modified timestamps to memory files, helping Claude reason about which memories are fresh vs. stale | added |
| フック確認のパーミッションプロンプトにフックのソース（settings/plugin/skill）表示を追加 | Added hook source display (settings/plugin/skill) in permission prompts when a hook requires confirmation | added |
| 新規インストール時に `/voice` を2回トグルしないと音声モードが正しく起動しない問題を修正 | Fixed voice mode not activating correctly on fresh installs without toggling `/voice` twice | fixed |
| `/model` または Option+P でモデルを切り替えた後、Claude Codeヘッダーのモデル名表示が更新されない問題を修正 | Fixed the Claude Code header not updating the displayed model name after switching models with `/model` or Option+P | fixed |
| 添付ファイルメッセージの計算結果が undefined を返した際にセッションがクラッシュする問題を修正 | Fixed session crash when an attachment message computation returns undefined values | fixed |
| パイプを含むコマンドで `!` が壊れるBashツールの問題を修正（例: `jq 'select(.x != .y)'` が正しく動作するように） | Fixed Bash tool mangling `!` in piped commands (e.g., `jq 'select(.x != .y)'` now works correctly) | fixed |
| 組織によって強制無効化されているプラグインが `/plugin` のInstalledタブに表示される問題を修正 | Fixed managed-disabled plugins showing up in the `/plugin` Installed tab — plugins force-disabled by your organization are now hidden | fixed |
| thinkingブロックおよび `tool_use` ブロックのトークン推定が過剰にカウントされ、コンテキスト圧縮が早まる問題を修正 | Fixed token estimation over-counting for thinking and `tool_use` blocks, preventing premature context compaction | fixed |
| マーケットプレイス設定パスが破損した際のハンドリングを修正 | Fixed corrupted marketplace config path handling | fixed |
| フォークまたは継続したセッションを `/resume` した後にセッション名が失われる問題を修正 | Fixed `/resume` losing session names after resuming a forked or continued session | fixed |
| Configタブを開いた後、Escキーで `/status` ダイアログが閉じられない問題を修正 | Fixed Esc not closing the `/status` dialog after visiting the Config tab | fixed |
| プランの承認・却下時における入力処理の問題を修正 | Fixed input handling when accepting or rejecting a plan | fixed |
| エージェントチームのフッターヒントに「↓ to expand」と誤表示される問題を修正（正しくは「shift + ↓ to expand」） | Fixed footer hint in agent teams showing "↓ to expand" instead of the correct "shift + ↓ to expand" | fixed |
| macOSの非MDM環境における起動パフォーマンスを改善（不要なサブプロセス生成をスキップ） | Improved startup performance on macOS non-MDM machines by skipping unnecessary subprocess spawns | improved |
| 非同期フックの完了メッセージをデフォルトで非表示に変更（`--verbose` またはトランスクリプトモードで確認可能） | Suppressed async hook completion messages by default (visible with `--verbose` or transcript mode) | changed |
| 破壊的変更: `C:\ProgramData\ClaudeCode\managed-settings.json` への非推奨Windowsマネージド設定フォールバックを削除（`C:\Program Files\ClaudeCode\managed-settings.json` を使用すること） | Breaking change: Removed deprecated Windows managed settings fallback at `C:\ProgramData\ClaudeCode\managed-settings.json` — use `C:\Program Files\ClaudeCode\managed-settings.json` | changed |

## 2.1.74

| 日本語 | English | Category |
|--------|---------|----------|
| `/context` コマンドに実行可能な提案を追加 — コンテキストが重いツール、メモリの肥大化、容量警告を特定し、具体的な最適化ヒントを提示 | Added actionable suggestions to `/context` command — identifies context-heavy tools, memory bloat, and capacity warnings with specific optimization tips | added |
| 自動メモリの保存先をカスタムディレクトリで指定できる `autoMemoryDirectory` 設定を追加 | Added `autoMemoryDirectory` setting to configure a custom directory for auto-memory storage | added |
| ジェネレーターが途中で終了した際にストリーミング API レスポンスバッファが解放されず、Node.js/npm コードパスで RSS が際限なく増加するメモリリークを修正 | Fixed memory leak where streaming API response buffers were not released when the generator was terminated early, causing unbounded RSS growth on the Node.js/npm code path | fixed |
| マネージドポリシーの `ask` ルールがユーザーの `allow` ルールやスキルの `allowed-tools` によって回避される問題を修正 | Fixed managed policy `ask` rules being bypassed by user `allow` rules or skill `allowed-tools` | fixed |
| エージェントのフロントマター `model:` フィールドおよび `--agents` JSON 設定でフルモデル ID（例: `claude-opus-4-5`）が警告なく無視される問題を修正 — エージェントが `--model` と同じモデル値を受け付けるように対応 | Fixed full model IDs (e.g., `claude-opus-4-5`) being silently ignored in agent frontmatter `model:` field and `--agents` JSON config — agents now accept the same model values as `--model` | fixed |
| コールバックポートが使用中の場合に MCP OAuth 認証がハングする問題を修正 | Fixed MCP OAuth authentication hanging when the callback port is already in use | fixed |
| HTTP 200 でエラーを返す OAuth サーバー（例: Slack）において、リフレッシュトークン期限切れ後に再認証が促されない問題を修正 | Fixed MCP OAuth refresh never prompting for re-auth after the refresh token expires, for OAuth servers that return errors with HTTP 200 (e.g. Slack) | fixed |
| マイクのアクセス許可を一度も付与していないユーザーの macOS ネイティブバイナリで音声モードが警告なく失敗する問題を修正 — バイナリに `audio-input` エンタイトルメントを追加し macOS が正しくプロンプトを表示するように対応 | Fixed voice mode silently failing on the macOS native binary for users whose terminal had never been granted microphone permission — the binary now includes the `audio-input` entitlement so macOS prompts correctly | fixed |
| `SessionEnd` フック が `hook.timeout` の設定に関わらず終了時に 1.5 秒後に強制終了される問題を修正 — `CLAUDE_CODE_SESSIONEND_HOOKS_TIMEOUT_MS` で設定可能に | Fixed `SessionEnd` hooks being killed after 1.5 s on exit regardless of `hook.timeout` — now configurable via `CLAUDE_CODE_SESSIONEND_HOOKS_TIMEOUT_MS` | fixed |
| マーケットプレイスプラグインのローカルソースに対して REPL 内で `/plugin install` が失敗する問題を修正 | Fixed `/plugin install` failing inside the REPL for marketplace plugins with local sources | fixed |
| マーケットプレイスの更新時に git サブモジュールが同期されない問題を修正 — サブモジュール内のプラグインソースが更新後に壊れないように対応 | Fixed marketplace update not syncing git submodules — plugin sources in submodules no longer break after update | fixed |
| 引数を含む未知のスラッシュコマンドが入力を警告なく破棄する問題を修正 — 入力内容を警告として表示するように対応 | Fixed unknown slash commands with arguments silently dropping input — now shows your input as a warning | fixed |
| Windows Terminal、conhost、VS Code 統合ターミナルでヘブライ語・アラビア語などの RTL テキストが正しく表示されない問題を修正 | Fixed Hebrew, Arabic, and other RTL text not rendering correctly in Windows Terminal, conhost, and VS Code integrated terminal | fixed |
| ファイル URI の形式が不正なために LSP サーバーが Windows で動作しない問題を修正 | Fixed LSP servers not working on Windows due to malformed file URIs | fixed |
| `--plugin-dir` を変更し、同名のインストール済みマーケットプレイスプラグインをローカル開発コピーで上書きできるように対応（マネージド設定で強制有効化されているプラグインを除く） | Changed `--plugin-dir` so local dev copies now override installed marketplace plugins with the same name (unless that plugin is force-enabled by managed settings) | changed |
| [VSCode] Untitled セッションの削除ボタンが機能しない問題を修正 | [VSCode] Fixed delete button not working for Untitled sessions | fixed |
| [VSCode] 統合ターミナルでのスクロールホイールの応答性をターミナル対応のアクセラレーションで改善 | [VSCode] Improved scroll wheel responsiveness in the integrated terminal with terminal-aware acceleration | improved |

## 2.1.73

| 日本語 | English | Category |
|--------|---------|----------|
| モデルピッカーのエントリをカスタムプロバイダーのモデルID（例: Bedrock 推論プロファイル ARN）にマッピングする `modelOverrides` 設定を追加 | Added `modelOverrides` setting to map model picker entries to custom provider model IDs (e.g. Bedrock inference profile ARNs) | added |
| 企業プロキシや `NODE_EXTRA_CA_CERTS` による SSL 証明書エラーで OAuth ログインや接続確認が失敗した際に、実行可能なガイダンスを表示するよう追加 | Added actionable guidance when OAuth login or connectivity checks fail due to SSL certificate errors (corporate proxies, `NODE_EXTRA_CA_CERTS`) | added |
| 複雑な Bash コマンドへの権限プロンプトが原因で発生するフリーズおよび CPU 100% ループを修正 | Fixed freezes and 100% CPU loops triggered by permission prompts for complex bash commands | fixed |
| 大規模な `.claude/skills/` ディレクトリを持つリポジトリで `git pull` 実行時など、多数のスキルファイルが同時に変更された際に Claude Code がフリーズするデッドロックを修正 | Fixed a deadlock that could freeze Claude Code when many skill files changed at once (e.g. during `git pull` in a repo with a large `.claude/skills/` directory) | fixed |
| 同一プロジェクトディレクトリで複数の Claude Code セッションを実行した際に Bash ツールの出力が失われる問題を修正 | Fixed Bash tool output being lost when running multiple Claude Code sessions in the same project directory | fixed |
| Bedrock・Vertex・Microsoft Foundry 上で `model: opus`/`sonnet`/`haiku` を指定したサブエージェントが古いモデルバージョンに暗黙的にダウングレードされる問題を修正 | Fixed subagents with `model: opus`/`sonnet`/`haiku` being silently downgraded to older model versions on Bedrock, Vertex, and Microsoft Foundry | fixed |
| サブエージェントが起動したバックグラウンドの Bash プロセスがエージェント終了時にクリーンアップされない問題を修正 | Fixed background bash processes spawned by subagents not being cleaned up when the agent exits | fixed |
| `/resume` のピッカーに現在のセッションが表示される問題を修正 | Fixed `/resume` showing the current session in the picker | fixed |
| `/ide` でエクステンションの自動インストール時に `onInstall is not defined` でクラッシュする問題を修正 | Fixed `/ide` crashing with `onInstall is not defined` when auto-installing the extension | fixed |
| Bedrock・Vertex・Foundry 上およびテレメトリ無効時に `/loop` が利用できない問題を修正 | Fixed `/loop` not being available on Bedrock/Vertex/Foundry and when telemetry was disabled | fixed |
| `--resume` または `--continue` でセッションを再開した際に SessionStart フックが二重に発火する問題を修正 | Fixed SessionStart hooks firing twice when resuming a session via `--resume` or `--continue` | fixed |
| JSON 出力フックがターンごとにモデルのコンテキストへ no-op の system-reminder メッセージを注入する問題を修正 | Fixed JSON-output hooks injecting no-op system-reminder messages into the model's context on every turn | fixed |
| 低速な接続と新規録音が重なった際にボイスモードのセッションが破損する問題を修正 | Fixed voice mode session corruption when a slow connection overlaps a new recording | fixed |
| ネイティブビルドで Linux サンドボックスが "ripgrep (rg) not found" により起動に失敗する問題を修正 | Fixed Linux sandbox failing to start with "ripgrep (rg) not found" on native builds | fixed |
| Amazon Linux 2 およびその他の glibc 2.26 系システムで Linux ネイティブモジュールが読み込まれない問題を修正 | Fixed Linux native modules not loading on Amazon Linux 2 and other glibc 2.26 systems | fixed |
| Remote Control 経由で画像を受信した際に発生する "media_type: Field required" API エラーを修正 | Fixed "media_type: Field required" API error when receiving images via Remote Control | fixed |
| Desktop フォルダが既に存在する Windows 環境で `/heapdump` が `EEXIST` エラーで失敗する問題を修正 | Fixed `/heapdump` failing on Windows with `EEXIST` error when the Desktop folder already exists | fixed |
| Claude の応答を中断した後の上矢印キーの動作を改善 — 中断されたプロンプトの復元と会話の巻き戻しを一操作で実行するよう変更 | Improved Up arrow after interrupting Claude — now restores the interrupted prompt and rewinds the conversation in one step | improved |
| 起動時の IDE 検出速度を改善 | Improved IDE detection speed at startup | improved |
| macOS におけるクリップボードからの画像貼り付けパフォーマンスを改善 | Improved clipboard image pasting performance on macOS | improved |
| `/effort` を Claude の応答中でも `/model` と同様に機能するよう改善 | Improved `/effort` to work while Claude is responding, matching `/model` behavior | improved |
| 素早いプッシュ・トゥ・トーク再押下時の一時的な接続障害を自動リトライするよう、ボイスモードを改善 | Improved voice mode to automatically retry transient connection failures during rapid push-to-talk re-press | improved |
| Remote Control のスポーンモード選択プロンプトにコンテキスト情報を追加し改善 | Improved the Remote Control spawn mode selection prompt with better context | improved |
| Bedrock・Vertex・Microsoft Foundry におけるデフォルトの Opus モデルを Opus 4.6 に変更（旧: Opus 4.1） | Changed default Opus model on Bedrock, Vertex, and Microsoft Foundry to Opus 4.6 (was Opus 4.1) | changed |
| `/output-style` コマンドを非推奨化 — 代わりに `/config` を使用。出力スタイルはプロンプトキャッシュの最適化のためセッション開始時に固定されるよう変更 | Deprecated `/output-style` command — use `/config` instead. Output style is now fixed at session start for better prompt caching | changed |
| VSCode: プロキシ環境下または Bedrock/Vertex 上で Claude 4.5 モデルを使用するユーザーに発生する HTTP 400 エラーを修正 | VSCode: Fixed HTTP 400 errors for users behind proxies or on Bedrock/Vertex with Claude 4.5 models | fixed |

## 2.1.72

| 日本語 | English | Category |
|--------|---------|----------|
| `ENABLE_TOOL_SEARCH` が設定されている場合、`ANTHROPIC_BASE_URL` があってもツール検索が有効になるよう修正 | Fixed tool search to activate even with `ANTHROPIC_BASE_URL` as long as `ENABLE_TOOL_SEARCH` is set. | fixed |
| `/copy` に `w` キーを追加 — クリップボードを介さずフォーカス中の選択をファイルに直接書き込む（SSH環境で有用） | Added `w` key in `/copy` to write the focused selection directly to a file, bypassing the clipboard (useful over SSH) | added |
| `/plan` にオプションの説明引数を追加（例: `/plan fix the auth bug`）— プランモードに入り即座に開始 | Added optional description argument to `/plan` (e.g., `/plan fix the auth bug`) that enters plan mode and immediately starts | added |
| `EnterWorktree` セッションを終了する `ExitWorktree` ツールを追加 | Added `ExitWorktree` tool to leave an `EnterWorktree` session | added |
| セッション途中でスケジュール済みcronジョブを即時停止する環境変数 `CLAUDE_CODE_DISABLE_CRON` を追加 | Added `CLAUDE_CODE_DISABLE_CRON` environment variable to immediately stop scheduled cron jobs mid-session | added |
| `lsof`、`pgrep`、`tput`、`ss`、`fd`、`fdfind` をbash自動承認許可リストに追加し、一般的な読み取り専用操作の権限プロンプトを削減 | Added `lsof`, `pgrep`, `tput`, `ss`, `fd`, and `fdfind` to the bash auto-approval allowlist, reducing permission prompts for common read-only operations | added |
| Agent ツールの `model` パラメータを復元し、呼び出しごとのモデル上書きに対応 | Restored the `model` parameter on the Agent tool for per-invocation model overrides | fixed |
| エフォートレベルをlow/medium/highに簡略化（maxを廃止）し、新しいシンボル（○ ◐ ●）と常時表示アイコンの代わりに短い通知を採用。`/effort auto` でデフォルトにリセット可能 | Simplified effort levels to low/medium/high (removed max) with new symbols (○ ◐ ●) and a brief notification instead of a persistent icon. Use `/effort auto` to reset to default | changed |
| `/config` を改善 — Escapeで変更をキャンセル、Enterで保存して閉じる、Spaceで設定をトグル | Improved `/config` — Escape now cancels changes, Enter saves and closes, Space toggles settings | improved |
| 複数セッションを同時実行している場合、上矢印の履歴で現在のセッションのメッセージを優先表示するよう改善 | Improved up-arrow history to show current session's messages first when running multiple concurrent sessions | improved |
| リポジトリ名や一般的な開発用語（regex、OAuth、JSON）に対する音声入力の文字起こし精度を改善 | Improved voice input transcription accuracy for repo names and common dev terms (regex, OAuth, JSON) | improved |
| bashコマンドのパースをネイティブモジュールに切り替え、初期化の高速化とメモリリークを解消 | Improved bash command parsing by switching to a native module — faster initialization and no memory leak | improved |
| バンドルサイズを約510KB削減 | Reduced bundle size by ~510 KB | improved |
| 自動インジェクト時にCLAUDE.mdのHTMLコメント（`<!-- ... -->`）をClaudeから非表示に変更。Readツールで読み込んだ場合は引き続き表示される | Changed CLAUDE.md HTML comments (`<!-- ... -->`) to be hidden from Claude when auto-injected. Comments remain visible when read with the Read tool | changed |
| バックグラウンドタスクやフックの応答が遅い場合に終了が遅くなる問題を修正 | Fixed slow exits when background tasks or hooks were slow to respond | fixed |
| エージェントタスクの進捗が「Initializing…」で止まる問題を修正 | Fixed agent task progress stuck on "Initializing…" | fixed |
| フック有効スキルがモデルから呼び出された際にスキルフックがイベントごとに2回発火する問題を修正 | Fixed skill hooks firing twice per event when a hooks-enabled skill is invoked by the model | fixed |
| 音声モードの複数の問題を修正: 断続的な入力遅延、プッシュトゥトーク解放後の誤った「No speech detected」エラー、送信後に古いトランスクリプトがプロンプトに再入力される問題 | Fixed several voice mode issues: occasional input lag, false "No speech detected" errors after releasing push-to-talk, and stale transcripts re-filling the prompt after submission | fixed |
| `--compact` 後に `--continue` が最新地点から再開されない問題を修正 | Fixed `--continue` not resuming from the most recent point after `--compact` | fixed |
| bashセキュリティパースのエッジケースを修正 | Fixed bash security parsing edge cases | fixed |
| `.git` サフィックスなしのマーケットプレイスgit URL（Azure DevOps、AWS CodeCommit）に対応 | Added support for marketplace git URLs without `.git` suffix (Azure DevOps, AWS CodeCommit) | added |
| gitがstderrを出力しない場合でも診断情報を表示するよう、マーケットプレイスのクローン失敗メッセージを改善 | Improved marketplace clone failure messages to show diagnostic info even when git produces no stderr | improved |
| プラグインの複数の問題を修正: OneDriveフォルダでの `EEXIST` エラーによるWindows上インストール失敗、プロジェクトスコープのインストールが存在する場合にマーケットプレイスがユーザースコープのインストールをブロックする問題、`CLAUDE_CODE_PLUGIN_CACHE_DIR` がリテラルの `~` ディレクトリを作成する問題、マーケットプレイス専用フィールドを含む `plugin.json` の読み込み失敗 | Fixed several plugin issues: installation failing on Windows with `EEXIST` error in OneDrive folders, marketplace blocking user-scope installs when a project-scope install exists, `CLAUDE_CODE_PLUGIN_CACHE_DIR` creating literal `~` directories, and `plugin.json` with marketplace-only fields failing to load | fixed |
| 長時間セッションでフィードバックサーベイが頻繁に表示される問題を修正 | Fixed feedback survey appearing too frequently in long sessions | fixed |
| 起動時に無関係な設定書き込みで `--effort` CLIフラグがリセットされる問題を修正 | Fixed `--effort` CLI flag being reset by unrelated settings writes on startup | fixed |
| バックグラウンドのCtrl+Bクエリが `/clear` 後にトランスクリプトを失う、または新しい会話を破壊する問題を修正 | Fixed backgrounded Ctrl+B queries losing their transcript or corrupting the new conversation after `/clear` | fixed |
| `/clear` がバックグラウンドのエージェント・bashタスクを強制終了する問題を修正 — フォアグラウンドのタスクのみクリア対象に変更 | Fixed `/clear` killing background agent/bash tasks — only foreground tasks are now cleared | fixed |
| ワークツリーの分離に関する問題を修正: Taskツールの再開時にcwdが復元されない問題、およびバックグラウンドタスク通知に `worktreePath` と `worktreeBranch` が欠落する問題 | Fixed worktree isolation issues: Task tool resume not restoring cwd, and background task notifications missing `worktreePath` and `worktreeBranch` | fixed |
| Claudeが処理中に `/model` を実行しても結果が表示されない問題を修正 | Fixed `/model` not displaying results when run while Claude is working | fixed |
| プランモードの権限プロンプトのテキスト入力で数字キーが入力の代わりにメニュー選択として処理される問題を修正 | Fixed digit keys selecting menu options instead of typing in plan mode permission prompt's text input | fixed |
| サンドボックスの権限に関する問題を修正: 特定のファイル書き込み操作がプロンプトなく誤って許可される問題、および `/tmp/claude/` などの許可リスト済みディレクトリへの出力リダイレクトが不要なプロンプトを表示する問題 | Fixed sandbox permission issues: certain file write operations incorrectly allowed without prompting, and output redirections to allowlisted directories (like `/tmp/claude/`) prompting unnecessarily | fixed |
| 長時間セッションでのCPU使用率を改善 | Improved CPU utilization in long sessions | improved |
| SDK `query()` 呼び出しのプロンプトキャッシュ無効化を修正し、入力トークンコストを最大12倍削減 | Fixed prompt cache invalidation in SDK `query()` calls, reducing input token costs up to 12x | fixed |
| クエリキャンセル後にEscapeキーが無反応になる問題を修正 | Fixed Escape key becoming unresponsive after cancelling a query | fixed |
| バックグラウンドエージェントまたはタスク実行中にCtrl+Cの二重押しで終了できない問題を修正 | Fixed double Ctrl+C not exiting when background agents or tasks are running | fixed |
| チームエージェントがリーダーのモデルを継承するよう修正 | Fixed team agents to inherit the leader's model | fixed |
| 「Always Allow」が以後マッチしない権限ルールを保存してしまう問題を修正 | Fixed "Always Allow" saving permission rules that never match again | fixed |
| フックの複数の問題を修正: `transcript_path` が再開・フォークされたセッションで誤ったディレクトリを指す問題、エージェントの `prompt` が設定書き込みのたびにsettings.jsonから削除される問題、PostToolUseのブロック理由が二重表示される問題、非同期フックがbashの `read -r` でstdinを受け取れない問題、バリデーションエラーメッセージが検証に失敗するサンプルを表示する問題 | Fixed several hooks issues: `transcript_path` pointing to the wrong directory for resumed/forked sessions, agent `prompt` being silently deleted from settings.json on every settings write, PostToolUse block reason displaying twice, async hooks not receiving stdin with bash `read -r`, and validation error message showing an example that fails validation | fixed |
| ReadがU+2028/U+2029文字を含むファイルを返した際のDesktop/SDKのセッションクラッシュを修正 | Fixed session crashes in Desktop/SDK when Read returned files containing U+2028/U+2029 characters | fixed |
| `CLAUDE_CODE_DISABLE_TERMINAL_TITLE` が設定されている場合でも終了時にターミナルタイトルがクリアされる問題を修正 | Fixed terminal title being cleared on exit even when `CLAUDE_CODE_DISABLE_TERMINAL_TITLE` was set | fixed |
| 権限ルールのマッチングに関する複数の問題を修正: ヒアドキュメント・埋め込み改行・引数なしのコマンドにワイルドカードルールがマッチしない問題、環境変数プレフィックス付きコマンドで `sandbox.excludedCommands` が機能しない問題、ネストされたCLIツールで「always allow」が過度に広いプレフィックスを提案する問題、denyルールがすべてのコマンド形式に適用されない問題 | Fixed several permission rule matching issues: wildcard rules not matching commands with heredocs, embedded newlines, or no arguments; `sandbox.excludedCommands` failing with env var prefixes; "always allow" suggesting overly broad prefixes for nested CLI tools; and deny rules not applying to all command forms | fixed |
| Bashのdata-URL出力から生成される画像のサイズ超過・切り詰め問題を修正 | Fixed oversized and truncated images from Bash data-URL output | fixed |
| Bedrock APIエラーを含むセッションを再開した際のクラッシュを修正 | Fixed a crash when resuming sessions that contained Bedrock API errors | fixed |
| Edit、Bash、Grepツール入力での断続的な「expected boolean, received string」バリデーションエラーを修正 | Fixed intermittent "expected boolean, received string" validation errors on Edit, Bash, and Grep tool inputs | fixed |
| 最初のメッセージに改行を含む会話からフォークした際にセッションタイトルが複数行になる問題を修正 | Fixed multi-line session titles when forking from a conversation whose first message contained newlines | fixed |
| キュー済みメッセージに添付画像が表示されない問題、および↑キーでキュー済みメッセージを編集する際に画像が失われる問題を修正 | Fixed queued messages not showing attached images, and images being lost when pressing ↑ to edit a queued message | fixed |
| 並列ツール呼び出しでRead/WebFetch/Globの失敗が兄弟タスクをキャンセルする問題を修正 — カスケードはBashエラーのみに限定 | Fixed parallel tool calls where a failed Read/WebFetch/Glob would cancel its siblings — only Bash errors now cascade | fixed |
| VSCode: 統合ターミナルのスクロール速度がネイティブターミナルと一致しない問題を修正 | VSCode: Fixed scroll speed in integrated terminals not matching native terminals | fixed |
| VSCode: 旧キーバインドを使用するユーザーでShift+Enterが改行挿入の代わりに入力を送信してしまう問題を修正 | VSCode: Fixed Shift+Enter submitting input instead of inserting a newline for users with older keybindings | fixed |
| VSCode: 入力ボーダーにエフォートレベルインジケーターを追加 | VSCode: Added effort level indicator on the input border | added |
| VSCode: `vscode://anthropic.claude-code/open` URIハンドラーを追加 — `prompt` および `session` クエリパラメータ付きで新しいClaude Codeタブをプログラムから開くことが可能 | VSCode: Added `vscode://anthropic.claude-code/open` URI handler to open a new Claude Code tab programmatically, with optional `prompt` and `session` query parameters | added |

## 2.1.71

| 日本語 | English | Category |
|--------|---------|----------|
| 定期的な間隔でプロンプトまたはスラッシュコマンドを実行する `/loop` コマンドを追加（例: `/loop 5m check the deploy`） | Added `/loop` command to run a prompt or slash command on a recurring interval (e.g. `/loop 5m check the deploy`) | added |
| セッション内で繰り返しプロンプトを実行するクロンスケジューリングツールを追加 | Added cron scheduling tools for recurring prompts within a session | added |
| `keybindings.json` でボイスアクティベーションキーをリバインド可能にする `voice:pushToTalk` キーバインドを追加（デフォルト: スペース）— `meta+k` のような modifier+letter の組み合わせはタイピングへの干渉がゼロ | Added `voice:pushToTalk` keybinding to make the voice activation key rebindable in `keybindings.json` (default: space) — modifier+letter combos like `meta+k` have zero typing interference | added |
| `fmt`、`comm`、`cmp`、`numfmt`、`expr`、`test`、`printf`、`getconf`、`seq`、`tsort`、`pr` を bash 自動承認許可リストに追加 | Added `fmt`, `comm`, `cmp`, `numfmt`, `expr`, `test`, `printf`, `getconf`, `seq`, `tsort`, and `pr` to the bash auto-approval allowlist | added |
| キーストロークの処理が停止するがプロセスは生き続けるという、長時間セッションでの stdin フリーズを修正 | Fixed stdin freeze in long-running sessions where keystrokes stop being processed but the process stays alive | fixed |
| システムスリープ復帰後に CoreAudio の初期化がメインスレッドをブロックすることで発生していた、ボイスモード有効時の起動時 5〜8 秒のフリーズを修正 | Fixed a 5–8 second startup freeze for users with voice mode enabled, caused by CoreAudio initialization blocking the main thread after system wake | fixed |
| 多数の claude.ai プロキシコネクターが期限切れの OAuth トークンを同時にリフレッシュする際に発生していた起動時 UI フリーズを修正 | Fixed startup UI freeze when many claude.ai proxy connectors refresh an expired OAuth token simultaneously | fixed |
| フォークされた会話（`/fork`）が同一のプランファイルを共有し、一方のフォークでのプラン編集が他方を上書きしていた問題を修正 | Fixed forked conversations (`/fork`) sharing the same plan file, which caused plan edits in one fork to overwrite the other | fixed |
| 画像処理失敗時に Read ツールが過大な画像をコンテキストに追加し、画像が多い長時間セッションでその後のターンが壊れる問題を修正 | Fixed the Read tool putting oversized images into context when image processing failed, breaking subsequent turns in long image-heavy sessions | fixed |
| ヒアドキュメントのコミットメッセージを含む複合 bash コマンドに対する誤検知の権限プロンプトを修正 | Fixed false-positive permission prompts for compound bash commands containing heredoc commit messages | fixed |
| 複数の Claude Code インスタンスを同時実行した際にプラグインのインストールが失われる問題を修正 | Fixed plugin installations being lost when running multiple Claude Code instances | fixed |
| OAuth トークンのリフレッシュ後に claude.ai コネクターが再接続できなくなる問題を修正 | Fixed claude.ai connectors failing to reconnect after OAuth token refresh | fixed |
| claude.ai MCP コネクターの起動通知が、以前に接続済みのものだけでなく組織設定済みのすべてのコネクターに表示されていた問題を修正 | Fixed claude.ai MCP connector startup notifications appearing for every org-configured connector instead of only previously connected ones | fixed |
| バックグラウンドエージェントの完了通知に出力ファイルパスが含まれず、コンテキスト圧縮後に親エージェントがエージェントの結果を回復しにくかった問題を修正 | Fixed background agent completion notifications missing the output file path, which made it difficult for parent agents to recover agent results after context compaction | fixed |
| コマンドがゼロ以外のステータスで終了した際の Bash ツールのエラーメッセージに出力が重複していた問題を修正 | Fixed duplicate output in Bash tool error messages when commands exit with non-zero status | fixed |
| ローカルに Chrome がないマシンで実行した後、Chrome 拡張機能の自動検出が「未インストール」のまま永続的にスタックする問題を修正 | Fixed Chrome extension auto-detection getting permanently stuck on "not installed" after running on a machine without local Chrome | fixed |
| マーケットプレイスがブランチ/タグの ref に固定されている場合に `/plugin marketplace update` がマージコンフリクトで失敗する問題を修正 | Fixed `/plugin marketplace update` failing with merge conflicts when the marketplace is pinned to a branch/tag ref | fixed |
| `/plugin marketplace add owner/repo@ref` で `@` の解析が誤っていた問題を修正 — 以前は `#` のみが ref セパレーターとして機能しており、`strictKnownMarketplaces` 使用時に診断困難なエラーが発生していた | Fixed `/plugin marketplace add owner/repo@ref` incorrectly parsing `@` — previously only `#` worked as a ref separator, causing undiagnosable errors with `strictKnownMarketplaces` | fixed |
| 末尾スラッシュあり・なしで同じディレクトリを追加した際に `/permissions` の Workspace タブに重複エントリが表示される問題を修正 | Fixed duplicate entries in `/permissions` Workspace tab when the same directory is added with and without a trailing slash | fixed |
| チームエージェントが設定されている場合に `--print` が永久にハングする問題を修正 — 終了ループが長期実行中の `in_process_teammate` タスクを待機しないように変更 | Fixed `--print` hanging forever when team agents are configured — the exit loop no longer waits on long-lived `in_process_teammate` tasks | fixed |
| `ToolSearch` 呼び出しのたびに REPL に「❯ Tool loaded.」が表示される問題を修正 | Fixed "❯ Tool loaded." appearing in the REPL after every `ToolSearch` call | fixed |
| モデルが mingw スタイルのパスを使用する際に Windows で `cd <cwd> && git ...` の確認プロンプトが表示される問題を修正 | Fixed prompting for `cd <cwd> && git ...` on Windows when the model uses a mingw-style path | fixed |
| ネイティブ画像プロセッサーの読み込みを初回使用時まで遅延させることで起動時間を改善 | Improved startup time by deferring native image processor loading to first use | improved |
| ラップトップのスリープ復帰後のブリッジセッション再接続を、最大 10 分待機する代わりに数秒以内に完了するよう改善 | Improved bridge session reconnection to complete within seconds after laptop wake from sleep, instead of waiting up to 10 minutes | improved |
| `/plugin uninstall` がプロジェクトスコープのプラグインを `.claude/settings.json` ではなく `.claude/settings.local.json` で無効化するよう改善し、チームメンバーへの影響を回避 | Improved `/plugin uninstall` to disable project-scoped plugins in `.claude/settings.local.json` instead of modifying `.claude/settings.json`, so changes don't affect teammates | improved |
| プラグイン提供の MCP サーバーの重複排除を改善 — 手動設定済みサーバーと重複するサーバー（同一コマンド/URL）はスキップされ、接続やツールセットの重複を防止。抑制済みサーバーは `/plugin` メニューに表示 | Improved plugin-provided MCP server deduplication — servers that duplicate a manually-configured server (same command/URL) are now skipped, preventing duplicate connections and tool sets. Suppressions are shown in the `/plugin` menu. | improved |
| デバッグログがデフォルトで書き込まれなくなったため、`/debug` がセッション途中でデバッグログのトグルに変更 | Updated `/debug` to toggle debug logging on mid-session, since debug logs are no longer written by default | changed |
| 未認証の組織登録済み claude.ai コネクターに対する起動時の通知ノイズを削除 | Removed startup notification noise for unauthenticated org-registered claude.ai connectors | changed |

## 2.1.70

| 日本語 | English | Category |
|--------|---------|----------|
| サードパーティゲートウェイで `ANTHROPIC_BASE_URL` を使用した際のAPI 400エラーを修正 — ツール検索がプロキシエンドポイントを正しく検出し、`tool_reference` ブロックを無効化するよう対応 | Fixed API 400 errors when using `ANTHROPIC_BASE_URL` with a third-party gateway — tool search now correctly detects proxy endpoints and disables `tool_reference` blocks | fixed |
| カスタムBedrockの推論プロファイルや標準的なClaudeの命名パターンに一致しないモデル識別子を使用した際の `API Error: 400 This model does not support the effort parameter` を修正 | Fixed `API Error: 400 This model does not support the effort parameter` when using custom Bedrock inference profiles or other model identifiers not matching standard Claude naming patterns | fixed |
| `ToolSearch` 直後にモデルのレスポンスが空になる問題を修正 — サーバーがプロンプト末尾にシステムプロンプト形式のタグでツールスキーマをレンダリングし、モデルが早期停止してしまう問題に対処 | Fixed empty model responses immediately after `ToolSearch` — the server renders tool schemas with system-prompt-style tags at the prompt tail, which could confuse models into stopping early | fixed |
| `instructions` を持つMCPサーバーが最初のターン後に接続した際のプロンプトキャッシュバストを修正 | Fixed prompt-cache bust when an MCP server with `instructions` connects after the first turn | fixed |
| 低速SSH接続での入力時にEnterキーが送信の代わりに改行を挿入する問題を修正 | Fixed Enter inserting a newline instead of submitting when typing over a slow SSH connection | fixed |
| PowerShell の `Set-Clipboard` を使用することで、Windows/WSL 上でクリップボードが非ASCII文字（CJK、絵文字）を破損する問題を修正 | Fixed clipboard corrupting non-ASCII text (CJK, emoji) on Windows/WSL by using PowerShell `Set-Clipboard` | fixed |
| VS Code統合ターミナルから起動した際にWindows上で余分なVS Codeウィンドウが開く問題を修正 | Fixed extra VS Code windows opening at startup on Windows when running from the VS Code integrated terminal | fixed |
| Windowsネイティブバイナリでボイスモードが「native audio module could not be loaded」で失敗する問題を修正 | Fixed voice mode failing on Windows native binary with "native audio module could not be loaded" | fixed |
| 設定で `voiceEnabled: true` が指定されている場合にセッション開始時にプッシュトゥトークが有効にならない問題を修正 | Fixed push-to-talk not activating on session start when `voiceEnabled: true` was set in settings | fixed |
| `#NNN` 形式の参照を含むMarkdownリンクが、リンク先URLではなく現在のリポジトリを誤って参照する問題を修正 | Fixed markdown links containing `#NNN` references incorrectly pointing to the current repository instead of the linked URL | fixed |
| プロジェクトの `.claude/settings.json` にレガシーなOpusモデル文字列が固定されている場合に「Model updated to Opus 4.6」通知が繰り返し表示される問題を修正 | Fixed repeated "Model updated to Opus 4.6" notification when a project's `.claude/settings.json` has a legacy Opus model string pinned | fixed |
| `/plugin` でプラグインがインストール済みとして誤表示される問題を修正 | Fixed plugins showing as inaccurately installed in `/plugin` | fixed |
| マーケットプレイスインストール後に自動更新を行うことで、起動直後にプラグインが「not found in marketplace」エラーを表示する問題を修正 | Fixed plugins showing "not found in marketplace" errors on fresh startup by auto-refreshing after marketplace installation | fixed |
| 古いgitバージョンで `/security-review` コマンドが `unknown option merge-base` で失敗する問題を修正 | Fixed `/security-review` command failing with `unknown option merge-base` on older git versions | fixed |
| `/color` コマンドでデフォルトカラーに戻す手段がなかった問題を修正 — `/color default`、`/color gray`、`/color reset`、`/color none` でデフォルトに復元可能に | Fixed `/color` command having no way to reset back to the default color — `/color default`, `/color gray`, `/color reset`, and `/color none` now restore the default | fixed |
| `AskUserQuestion` プレビューダイアログで、ノート入力欄へのキーストロークごとにMarkdownレンダリングが再実行されるパフォーマンス低下を修正 | Fixed a performance regression in the `AskUserQuestion` preview dialog that re-ran markdown rendering on every keystroke in the notes input | fixed |
| 起動初期に読み込まれた機能フラグのディスクキャッシュが更新されず、セッションをまたいで古い値が残り続ける問題を修正 | Fixed feature flags read during early startup never refreshing their disk cache, causing stale values to persist across sessions | fixed |
| Claude Code Remote環境で `permissions.defaultMode` の `acceptEdits` および `plan` 以外の設定値が適用される問題を修正 — 該当値は無視されるよう対応 | Fixed `permissions.defaultMode` settings values other than `acceptEdits` or `plan` being applied in Claude Code Remote environments — they are now ignored | fixed |
| `--resume` のたびにスキルリストが再注入される問題を修正（再開ごとに約600トークンの節約） | Fixed skill listing being re-injected on every `--resume` (~600 tokens saved per resume) | fixed |
| VS Codeのテレポートセッションでテレポートマーカーがレンダリングされない問題を修正 | Fixed teleport marker not rendering in VS Code teleported sessions | fixed |
| マイクが無音を検出した際のエラーメッセージを改善し、「音声が検出されない」場合との区別を明確化 | Improved error message when microphone captures silence to distinguish from "no speech detected" | improved |
| 要約リクエストで画像を保持するようコンパクションを改善し、プロンプトキャッシュの再利用による高速化・低コスト化を実現 | Improved compaction to preserve images in the summarizer request, allowing prompt cache reuse for faster and cheaper compaction | improved |
| Claudeの処理中でも `/rename` が機能するよう改善（従来はサイレントにキューイングされていた） | Improved `/rename` to work while Claude is processing, instead of being silently queued | improved |
| ターン中のプロンプト入力の再レンダリングを約74%削減 | Reduced prompt input re-renders during turns by ~74% | improved |
| カスタムCA証明書を使用しないユーザーの起動時メモリを約426KB削減 | Reduced startup memory by ~426KB for users without custom CA certificates | improved |
| Remote Control の `/poll` レートを接続中は10分に1回に削減（従来は1〜2秒）し、サーバー負荷を約300分の1に低減。再接続への影響はなく、トランスポートロスト時は即座に高速ポーリングに復帰 | Reduced Remote Control `/poll` rate to once per 10 minutes while connected (was 1–2s), cutting server load ~300×. Reconnection is unaffected — transport loss immediately wakes fast polling. | improved |
| [VSCode] VS CodeのアクティビティバーにすべてのClaude Codeセッションを一覧表示するスパークアイコンを追加 — セッションはフルエディターとして開く | [VSCode] Added spark icon in VS Code activity bar that lists all Claude Code sessions, with sessions opening as full editors | added |
| [VSCode] VS Codeでプランのフルマークダウンドキュメントビューを追加 — フィードバック提供のためのコメント追加に対応 | [VSCode] Added full markdown document view for plans in VS Code, with support for adding comments to provide feedback | added |
| [VSCode] ネイティブMCPサーバー管理ダイアログを追加 — チャットパネルで `/mcp` を使用してサーバーの有効化・無効化、再接続、ターミナルを切り替えずにOAuth認証の管理が可能 | [VSCode] Added native MCP server management dialog — use `/mcp` in the chat panel to enable/disable servers, reconnect, and manage OAuth authentication without switching to the terminal | added |

## 2.1.69

| 日本語 | English | Category |
|--------|---------|----------|
| Claude API および Anthropic SDK を使用したアプリケーション構築のための `/claude-api` スキルを追加 | Added the `/claude-api` skill for building applications with the Claude API and Anthropic SDK | added |
| 空のbashプロンプト（`!`）でCtrl+Uを押すとbashモードを終了できるように追加（`escape`および`backspace`と同様の動作） | Added Ctrl+U on an empty bash prompt (`!`) to exit bash mode, matching `escape` and `backspace` | added |
| インタビュー質問の選択肢選択にテンキー入力を追加（以前はQWERTY上部の数字キーのみ対応） | Added numeric keypad support for selecting options in Claude's interview questions (previously only the number row above QWERTY worked) | added |
| `/remote-control` および `claude remote-control` にオプションの名前引数を追加（`/remote-control My Project` または `--name "My Project"`）し、claude.ai/code に表示されるカスタムセッションタイトルを設定可能に | Added optional name argument to `/remote-control` and `claude remote-control` (`/remote-control My Project` or `--name "My Project"`) to set a custom session title visible in claude.ai/code | added |
| 音声STTの対応言語を10言語追加（合計20言語）— ロシア語、ポーランド語、トルコ語、オランダ語、ウクライナ語、ギリシャ語、チェコ語、デンマーク語、スウェーデン語、ノルウェー語 | Added Voice STT support for 10 new languages (20 total) — Russian, Polish, Turkish, Dutch, Ukrainian, Greek, Czech, Danish, Swedish, Norwegian | added |
| ロゴとスピナーにエフォートレベルの表示（例：「with low effort」）を追加し、どのエフォート設定が有効か確認しやすくなった | Added effort level display (e.g., "with low effort") to the logo and spinner, making it easier to see which effort setting is active | added |
| `claude --agent` 使用時のターミナルタイトルへのエージェント名表示を追加 | Added agent name display in terminal title when using `claude --agent` | added |
| `sandbox.enableWeakerNetworkIsolation` 設定を追加（macOS のみ）。`httpProxyPort` でカスタム MITM プロキシを使用する際に、`gh`、`gcloud`、`terraform` などの Go プログラムが TLS 証明書を検証できるようにする | Added `sandbox.enableWeakerNetworkIsolation` setting (macOS only) to allow Go programs like `gh`, `gcloud`, and `terraform` to verify TLS certificates when using a custom MITM proxy with `httpProxyPort` | added |
| `includeGitInstructions` 設定（および `CLAUDE_CODE_DISABLE_GIT_INSTRUCTIONS` 環境変数）を追加し、Claudeのシステムプロンプトから組み込みのコミット・PRワークフロー手順を削除可能に | Added `includeGitInstructions` setting (and `CLAUDE_CODE_DISABLE_GIT_INSTRUCTIONS` env var) to remove built-in commit and PR workflow instructions from Claude's system prompt | added |
| 再起動なしに保留中のプラグイン変更を有効化する `/reload-plugins` コマンドを追加 | Added `/reload-plugins` command to activate pending plugin changes without restarting | added |
| macOSおよびWindowsでClaude Code Desktopを提案する起動時ワンタイムプロンプトを追加（最大3回表示、非表示化可能） | Added a one-time startup prompt suggesting Claude Code Desktop on macOS and Windows (max 3 showings, dismissible) | added |
| スキルが SKILL.md コンテンツ内で自身のディレクトリを参照できる `${CLAUDE_SKILL_DIR}` 変数を追加 | Added `${CLAUDE_SKILL_DIR}` variable for skills to reference their own directory in SKILL.md content | added |
| CLAUDE.md または `.claude/rules/*.md` ファイルがコンテキストに読み込まれた際に発火する `InstructionsLoaded` フックイベントを追加 | Added `InstructionsLoaded` hook event that fires when CLAUDE.md or `.claude/rules/*.md` files are loaded into context | added |
| フック イベントに `agent_id`（サブエージェント用）と `agent_type`（サブエージェントおよび `--agent` 用）を追加 | Added `agent_id` (for subagents) and `agent_type` (for subagents and `--agent`) to hook events | added |
| `--worktree` セッション実行時に、名前・パス・ブランチ・元リポジトリディレクトリを含む `worktree` フィールドをステータスラインフックコマンドに追加 | Added `worktree` field to status line hook commands with name, path, branch, and original repo directory when running in a `--worktree` session | added |
| マネージド設定に `pluginTrustMessage` を追加し、インストール前に表示されるプラグイン信頼警告に組織固有のコンテキストを追記できるように対応 | Added `pluginTrustMessage` in managed settings to append organization-specific context to the plugin trust warning shown before installation | added |
| チームプランのOAuthユーザーにも、エンタープライズ限定だったポリシー制限取得（例: リモートコントロール制限）を対応 | Added policy limit fetching (e.g., remote control restrictions) for Team plan OAuth users, not just Enterprise | added |
| `strictKnownMarketplaces` に `pathPattern` を追加し、`hostPattern` の制限に加えてファイル/ディレクトリのマーケットプレイスソースの正規表現マッチングに対応 | Added `pathPattern` to `strictKnownMarketplaces` for regex-matching file/directory marketplace sources alongside `hostPattern` restrictions | added |
| gitリポジトリ内のサブディレクトリを指定するプラグインソースタイプ `git-subdir` を追加 | Added plugin source type `git-subdir` to point to a subdirectory within a git repo | added |
| MCP サーバーで標準ディスカバリーが失敗した場合にカスタム OAuth メタデータディスカバリー URL を指定できる `oauth.authServerMetadataUrl` 設定オプションを追加 | Added `oauth.authServerMetadataUrl` config option for MCP servers to specify a custom OAuth metadata discovery URL when standard discovery fails | added |
| ネストされたスキル探索が `node_modules` などの gitignore 対象ディレクトリからスキルを読み込む可能性があったセキュリティ問題を修正 | Fixed a security issue where nested skill discovery could load skills from gitignored directories like `node_modules` | fixed |
| 初回実行時に `.mcp.json` のすべてのサーバーが暗黙的に有効化される信頼ダイアログの不具合を修正。サーバーごとの承認ダイアログが期待通り表示されるように | Fixed trust dialog silently enabling all `.mcp.json` servers on first run. You'll now see the per-server approval dialog as expected | fixed |
| `claude remote-control` が npm インストール時に "bad option: --sdk-url" でクラッシュする問題を修正 (anthropics/claude-code#28334) | Fixed `claude remote-control` crashing immediately on npm installs with "bad option: --sdk-url" (anthropics/claude-code#28334) | fixed |
| `--model claude-opus-4-0` および `--model claude-opus-4-1` が非推奨の Opus バージョンに解決される問題を修正 | Fixed `--model claude-opus-4-0` and `--model claude-opus-4-1` resolving to deprecated Opus versions instead of current | fixed |
| 複数のOAuth MCPサーバー使用時にmacOSキーチェーンが破損する問題を修正。大きなOAuthメタデータのblobが`security -i`の標準入力バッファをオーバーフローし、古い認証情報がサイレントに残留して`/login`プロンプトが繰り返し表示される原因となっていた問題に対処 | Fixed macOS keychain corruption when using multiple OAuth MCP servers. Large OAuth metadata blobs could overflow the `security -i` stdin buffer, silently leaving stale credentials behind and causing repeated `/login` prompts. | fixed |
| トークンリフレッシュ中にプロファイルエンドポイントが一時的に失敗した際、`.credentials.json` の `subscriptionType` が失われる（"Claude Pro"/"Claude Max" の代わりに "Claude API" と表示される）問題を修正 (anthropics/claude-code#30185) | Fixed `.credentials.json` losing `subscriptionType` (showing "Claude API" instead of "Claude Pro"/"Claude Max") when the profile endpoint transiently fails during token refresh (anthropics/claude-code#30185) | fixed |
| サンドボックス化された Bash コマンド実行後に、Linux の作業ディレクトリにゴーストドットファイル（`.bashrc`、`HEAD` など）が未追跡ファイルとして表示される問題を修正 | Fixed ghost dotfiles (`.bashrc`, `HEAD`, etc.) appearing as untracked files in the working directory after sandboxed Bash commands on Linux | fixed |
| SSH経由のGhosttyでShift+Enterが改行を挿入せず`[27;2;13~`を出力してしまう問題を修正 | Fixed Shift+Enter printing `[27;2;13~` instead of inserting a newline in Ghostty over SSH | fixed |
| Claudeの処理中にメッセージを送信した際にスタッシュ（Ctrl+S）がクリアされるバグを修正 | Fixed stash (Ctrl+S) being cleared when submitting a message while Claude is working | fixed |
| 多数のファイル編集を含む長いセッションで ctrl+o（トランスクリプト切り替え）が数秒間フリーズする問題を修正 | Fixed ctrl+o (transcript toggle) freezing for many seconds in long sessions with lots of file edits | fixed |
| プランモードのフィードバック入力で複数行テキスト入力がサポートされていなかった問題を修正（バックスラッシュ+EnterおよびShift+Enterで改行を挿入可能に） | Fixed plan mode feedback input not supporting multi-line text entry (backslash+Enter and Shift+Enter now insert newlines) | fixed |
| 入力ボックス上部の空行にカーソルが移動しない問題を修正 | Fixed cursor not moving down into blank lines at the top of the input box | fixed |
| トランスクリプトファイルにタイムスタンプが欠落または不正なエントリが含まれる場合に `/stats` がクラッシュする問題を修正 | Fixed `/stats` crash when transcript files contain entries with missing or malformed timestamps | fixed |
| 長いセッションでストリーミングエラー発生後に一時的なフリーズが起きる問題を修正（1行削除のためにトランスクリプト全体を書き直していたが、その場での切り捨てに変更） | Fixed a brief hang after a streaming error on long sessions (the transcript was being fully rewritten to drop one line; it is now truncated in place) | fixed |
| `--setting-sources user` 指定時に動的に検出されたプロジェクトスキルがブロックされない問題を修正 | Fixed `--setting-sources user` not blocking dynamically discovered project skills | fixed |
| ワークツリーがメインリポジトリ内にネストされている場合（例: `claude -w`）に CLAUDE.md、スラッシュコマンド、エージェント、ルールが重複して読み込まれる問題を修正 | Fixed duplicate CLAUDE.md, slash commands, agents, and rules when running from a worktree nested inside its main repo (e.g. `claude -w`) | fixed |
| `/plugin` 操作後にプラグインの Stop/SessionEnd 等のフックが発火しない問題を修正 | Fixed plugin Stop/SessionEnd/etc hooks not firing after any `/plugin` operation | fixed |
| 2つのプラグインが同じ `${CLAUDE_PLUGIN_ROOT}/...` コマンドテンプレートを使用している場合にプラグインフックがサイレントに破棄される問題を修正 | Fixed plugin hooks being silently dropped when two plugins use the same `${CLAUDE_PLUGIN_ROOT}/...` command template | fixed |
| 長時間実行される SDK/CCR セッションで会話メッセージが不必要に保持されていたメモリリークを修正 | Fixed memory leak in long-running SDK/CCR sessions where conversation messages were retained unnecessarily | fixed |
| セッションがツールバッチ途中で中断された後に再開する際、フォークされたエージェント（自動圧縮・要約）で発生していた API 400 エラーを修正 | Fixed API 400 errors in forked agents (autocompact, summarization) when resuming sessions that were interrupted mid-tool-batch | fixed |
| 孤立したツール結果から始まる会話を再開した際に発生する「unexpected tool_use_id found in tool_result blocks」エラーを修正 | Fixed "unexpected tool_use_id found in tool_result blocks" error when resuming conversations that start with an orphaned tool result | fixed |
| Agent ツールの `name` パラメータを通じてチームメイトが意図せずネストされたチームメイトを生成してしまう問題を修正 | Fixed teammates accidentally spawning nested teammates via the Agent tool's `name` parameter | fixed |
| 会話の圧縮中に `CLAUDE_CODE_MAX_OUTPUT_TOKENS` が無視される問題を修正 | Fixed `CLAUDE_CODE_MAX_OUTPUT_TOKENS` being ignored during conversation compaction | fixed |
| SDKコンシューマー（Claude Code Remote Web UI、VSCode拡張機能）において `/compact` のサマリーがユーザーバブルとしてレンダリングされる問題を修正 | Fixed `/compact` summary rendering as a user bubble in SDK consumers (Claude Code Remote web UI, VSCode extension) | fixed |
| 音声認識の起動失敗後（モジュールロードの競合状態、コールドGrowthBook）にスペースバーが押しっぱなし状態になる不具合を修正 | Fixed voice space bar getting stuck after a failed voice activation (module loading race, cold GrowthBook) | fixed |
| Windows でのワークツリーファイルコピーを修正 (#なし) | Fixed worktree file copy on Windows | fixed |
| Windows でのグローバル `.claude` フォルダ検出を修正 | Fixed global `.claude` folder detection on Windows | fixed |
| `acceptEdits` モードにおいて、シンボリックリンクされた親ディレクトリ経由で新規ファイルを書き込む際に作業ディレクトリを脱出できるシンボリックリンクバイパスを修正 | Fixed symlink bypass where writing new files through a symlinked parent directory could escape the working directory in `acceptEdits` mode | fixed |
| マネージド設定で `allowManagedDomainsOnly` が有効な場合に、許可されていないドメインへのアクセス承認をユーザーに求めていたサンドボックスの問題を修正 — 非許可ドメインはバイパス不可で自動的にブロックされるように変更 | Fixed sandbox prompting users to approve non-allowed domains when `allowManagedDomainsOnly` is enabled in managed settings — non-allowed domains are now blocked automatically with no bypass | fixed |
| スキルの allowed-tools に列挙されたインタラクティブツール（例: `AskUserQuestion`）が、権限プロンプトをバイパスして空の回答で自動許可されていた問題を修正 | Fixed interactive tools (e.g., `AskUserQuestion`) being silently auto-allowed when listed in a skill's allowed-tools, bypassing the permission prompt and running with empty answers | fixed |
| 作業ツリーに大容量の未追跡バイナリファイルが存在する場合にコミット時に発生する数GB規模のメモリスパイクを修正 | Fixed multi-GB memory spike when committing with large untracked binary files in the working tree | fixed |
| 入力ボックスに下書きテキストがある状態でも、Escapeキーで実行中のターンを中断できない問題を修正。キューに積まれたメッセージを編集用に引き戻すには上矢印キー、入力行をクリアするにはCtrl+Uを使用する。 | Fixed Escape not interrupting a running turn when the input box has draft text. Use Up arrow to pull queued messages back for editing, or Ctrl+U to clear the input line. | fixed |
| リモートコントロールセッションでローカルスラッシュコマンド（`/voice`、`/cost`）を実行した際にAndroidアプリがクラッシュする問題を修正 | Fixed Android app crash when running local slash commands (`/voice`, `/cost`) in Remote Control sessions | fixed |
| 長時間セッションで古いメッセージ配列のバージョンが React Compiler の `memoCache` に蓄積するメモリリークを修正 | Fixed a memory leak where old message array versions accumulated in React Compiler `memoCache` over long sessions | fixed |
| 長時間セッションでREPLレンダースコープが蓄積するメモリリークを修正（1000ターンで約35MB） | Fixed a memory leak where REPL render scopes accumulated over long sessions (~35MB over 1000 turns) | fixed |
| インプロセスのチームメートにおけるメモリ保持の問題を修正（親の完全な会話履歴がチームメートのライフタイム中にピン留めされ、`/clear` または自動コンパクト後にGCが妨げられていた問題） | Fixed memory retention in in-process teammates where the parent's full conversation history was pinned for the teammate's lifetime, preventing GC after `/clear` or auto-compact | fixed |
| インタラクティブモードにおいて、長時間セッション中にフックイベントが無制限に蓄積されるメモリリークを修正 | Fixed a memory leak in interactive mode where hook events could accumulate unboundedly during long sessions | fixed |
| `--mcp-config` が破損ファイルを指す際のハング現象を修正 | Fixed hang when `--mcp-config` points to a corrupted file | fixed |
| スキルやプラグインが多数インストールされている場合の起動の遅延を修正 | Fixed slow startup when many skills/plugins are installed | fixed |
| `cd <outside-dir> && <cmd>` の権限プロンプトで、「Yes, allow reading from <dir>/」のみが表示される問題を修正し、連結されたコマンドも表示されるように対応 | Fixed `cd <outside-dir> && <cmd>` permission prompt to surface the chained command instead of only showing "Yes, allow reading from <dir>/" | fixed |
| 条件付き `.claude/rules/*.md` ファイル（`paths:` frontmatter を含む）およびネストされた CLAUDE.md ファイルが、プリントモード（`claude -p`）で読み込まれない不具合を修正 | Fixed conditional `.claude/rules/*.md` files (with `paths:` frontmatter) and nested CLAUDE.md files not loading in print mode (`claude -p`) | fixed |
| `/clear` がセッションキャッシュを完全にクリアしない問題を修正し、長時間セッションでのメモリ保持を削減 | Fixed `/clear` not fully clearing all session caches, reducing memory retention in long sessions | fixed |
| スクロールバック境界でのアニメーション要素によるターミナルのちらつきを修正 | Fixed terminal flicker caused by animated elements at the scrollback boundary | fixed |
| macOSでOAuth使用のMCPサーバー利用時にUIのフレームドロップが発生する問題を修正（2.1.xからのリグレッション） | Fixed UI frame drops on macOS when using MCP servers with OAuth (regression from 2.1.x) | fixed |
| タイピング中に同期デバッグログのフラッシュが引き起こす断続的なフレームストールを修正 | Fixed occasional frame stalls during typing caused by synchronous debug log flushes | fixed |
| `TeammateIdle` および `TaskCompleted` フックで `{"continue": false, "stopReason": "..."}` によるチームメートの停止をサポートするよう修正（`Stop` フックの挙動に合わせる） | Fixed `TeammateIdle` and `TaskCompleted` hooks to support `{"continue": false, "stopReason": "..."}` to stop the teammate, matching `Stop` hook behavior | fixed |
| `WorktreeCreate` および `WorktreeRemove` プラグインフックが無視される不具合を修正 | Fixed `WorktreeCreate` and `WorktreeRemove` plugin hooks being silently ignored | fixed |
| SKILL.md のフロントマターからコロンを含むスキル説明（例: "Triggers include: X, Y, Z"）が読み込めない不具合を修正 | Fixed skill descriptions with colons (e.g., "Triggers include: X, Y, Z") failing to load from SKILL.md frontmatter | fixed |
| `description:` フロントマターフィールドのないプロジェクトスキルが Claude の利用可能なスキル一覧に表示されない問題を修正 | Fixed project skills without a `description:` frontmatter field not appearing in Claude's available skills list | fixed |
| `/context` でMCPサーバーの全ツールに同一のトークン数が表示される問題を修正 | Fixed `/context` showing identical token counts for all MCP tools from a server | fixed |
| Windows 環境で Git Bash 使用時にモデルが CMD 形式の `2>nul` リダイレクトを使用した際にリテラルの `nul` ファイルが作成される問題を修正 | Fixed literal `nul` file creation on Windows when the model uses CMD-style `2>nul` redirection in Git Bash | fixed |
| サブエージェントのトランスクリプト展開表示（Ctrl+O）で、各ツール呼び出しの下に余分な空行が表示される問題を修正 | Fixed extra blank lines appearing below each tool call in the expanded subagent transcript view (Ctrl+O) | fixed |
| `/config` の検索ボックスにフォーカスがあり空の状態でも、Tab/矢印キーで設定タブを切り替えられない問題を修正 | Fixed Tab/arrow keys not cycling Settings tabs when `/config` search box is focused but empty | fixed |
| サービスキー OAuth セッション（CCR コンテナ）がプロファイルスコープのエンドポイントへの 403 により `[ERROR]` ログを大量出力する問題を修正 | Fixed service key OAuth sessions (CCR containers) spamming `[ERROR]` logs with 403s from profile-scoped endpoints | fixed |
| 「リモートコントロール有効」ステータスインジケーターの色の不一致を修正 | Fixed inconsistent color for "Remote Control active" status indicator | fixed |
| 入力途中でディクテーション中に音声波形カーソルが最初のサフィックス文字を覆う問題を修正 | Fixed Voice waveform cursor covering the first suffix letter when dictating mid-input | fixed |
| ウォームアップ中に音声入力が最大2スペース程度に収まらず5スペースすべて表示される不具合を修正（「keep holding…」ヒントの表示と統一） | Fixed Voice input showing all 5 spaces during warmup instead of capping at ~2 (aligning with the "keep holding…" hint) | fixed |
| スピナーのアニメーションループ（50ms）を周囲のシェルから分離することでパフォーマンスを改善し、ターン中のレンダリングおよびCPUオーバーヘッドを削減 | Improved spinner performance by isolating the 50ms animation loop from the surrounding shell, reducing render and CPU overhead during turns | improved |
| React Compiler によるネイティブバイナリの UI レンダリングパフォーマンスを改善 | Improved UI rendering performance in native binaries with React Compiler | improved |
| `--worktree` 起動時のgitサブプロセスを排除し、起動パスを改善 | Improved `--worktree` startup by eliminating a git subprocess on the startup path | improved |
| 管理設定の解決時に冗長な設定ファイルの再読み込みを排除することで、macOS の起動を改善 | Improved macOS startup by eliminating redundant settings-file reloads when managed settings resolve | improved |
| 不要なキーチェーン検索をスキップすることで、Claude.ai エンタープライズ/チームユーザーの macOS 起動を改善 | Improved macOS startup for Claude.ai enterprise/team users by skipping an unnecessary keychain lookup | improved |
| MCP `-p` 起動時に claude.ai 設定の取得とローカル接続をパイプライン化し、逐次バッチ処理の代わりに並行プールを使用することで起動を改善 | Improved MCP `-p` startup by pipelining claude.ai config fetch with local connections and using a concurrency pool instead of sequential batching | improved |
| 再レンダリングのカクつきを引き起こしていた、知覚できないウォームアップパルスアニメーションを削除し、音声起動を改善 | Improved voice startup by removing imperceptible warmup pulse animations that were causing re-render stutter | improved |
| MCPバイナリコンテンツの処理を改善：PDF、Officeドキュメント、音声を返すツールが、生のbase64をコンテキストにダンプする代わりに、正しい拡張子でデコードされたバイト列をディスクに保存するよう変更。WebFetchもバイナリレスポンスをサマリーとともに保存するよう対応 | Improved MCP binary content handling: tools returning PDFs, Office documents, or audio now save decoded bytes to disk with the correct file extension instead of dumping raw base64 into the conversation context. WebFetch also saves binary responses alongside its summary. | improved |
| メッセージ更新をまたいで `onSubmit` を安定化させることで、長時間セッションにおけるメモリ使用量を改善 | Improved memory usage in long sessions by stabilizing `onSubmit` across message updates | improved |
| LSPツールのレンダリングとメモリコンテキスト構築を改善し、ファイル全体を読み込まないように変更 | Improved LSP tool rendering and memory context building to no longer read entire files | improved |
| サイズ・バイナリチェック前に大容量ファイルをメモリに読み込まないよう、セッションアップロードとメモリ同期を改善 | Improved session upload and memory sync to avoid reading large files into memory before size/binary checks | improved |
| ファイル存在確認における内容読み込みを回避し、ファイル操作のパフォーマンスを改善（6箇所） | Improved file operation performance by avoiding reading file contents for existence checks (6 sites) | improved |
| `--append-system-prompt-file` および `--system-prompt-file` がインタラクティブモードでも動作することを明確化するためにドキュメントを改善（以前はプリントモードのみと記載されていた） | Improved documentation to clarify that `--append-system-prompt-file` and `--system-prompt-file` work in interactive mode (the docs previously said print mode only) | improved |
| Yoga WASMの事前読み込みを遅延させることでベースラインメモリを約16MB削減 | Reduced baseline memory by ~16MB by deferring Yoga WASM preloading | improved |
| stream-json出力を使用したSDKおよびCCRセッションのメモリ使用量を削減 | Reduced memory footprint for SDK and CCR sessions using stream-json output | improved |
| 大規模セッション（圧縮済み履歴を含む）の再開時のメモリ使用量を削減 | Reduced memory usage when resuming large sessions (including compacted history) | improved |
| マルチエージェントタスクにおいて、サブエージェントの最終レポートをより簡潔にすることでトークン使用量を削減 | Reduced token usage on multi-agent tasks with more concise subagent final reports | improved |
| Pro/Max/Team Premium の Sonnet 4.5 ユーザーを Sonnet 4.6 へ自動移行するよう変更 | Changed Sonnet 4.5 users on Pro/Max/Team Premium to be automatically migrated to Sonnet 4.6 | changed |
| `/resume` ピッカーに最初のプロンプトではなく最新のプロンプトを表示するよう変更。これにより、一部のタイトルが `(session)` と表示される問題も解消 | Changed the `/resume` picker to show your most recent prompt instead of the first one. This also resolves some titles appearing as `(session)`. | fixed |
| claude.ai MCPコネクタの接続失敗時に、ツールリストから黙って消える代わりに通知を表示するよう変更 | Changed claude.ai MCP connector failures to show a notification instead of silently disappearing from the tool list | improved |
| サンプルコマンド候補の生成をHaiku呼び出しから決定的な方法に変更 | Changed example command suggestions to be generated deterministically instead of calling Haiku | changed |
| コンパクション後の再開時に、続行前のプリアンブル要約を生成しないよう変更 | Changed resuming after compaction to no longer produce a preamble recap before continuing | changed |
| [SDK] タスク作成時に `activeForm` フィールドが不要になるよう変更 — スピナーはタスクのサブジェクトにフォールバック | [SDK] Changed task creation to no longer require the `activeForm` field — the spinner falls back to the task subject | changed |
| [VSCode] 圧縮表示を折りたたみ可能な「Compacted chat」カードとして追加し、その内部にサマリーを表示 | [VSCode] Added compaction display as a collapsible "Compacted chat" card with the summary inside | added |
| [VSCode] パーミッションモードピッカーが、有効なClaude Code設定（管理/ポリシー設定を含む）の `permissions.disableBypassPermissionsMode` を参照するよう対応。`disable` に設定された場合、バイパスパーミッションモードがピッカーから非表示になる | [VSCode] The permission mode picker now respects `permissions.disableBypassPermissionsMode` from your effective Claude Code settings (including managed/policy settings) — when set to `disable`, bypass permissions mode is hidden from the picker | added |
| [VSCode] チャットパネルでRTLテキスト（アラビア語、ヘブライ語、ペルシャ語）が逆向きに表示される問題を修正（v2.1.63のリグレッション） | [VSCode] Fixed RTL text (Arabic, Hebrew, Persian) rendering reversed in the chat panel (regression in v2.1.63) | fixed |

## 2.1.68

| 日本語 | English | Category |
|--------|---------|----------|
| Max および Team サブスクライバーにおける Opus 4.6 のデフォルト effort を中程度に変更。ほとんどのタスクに適した速度と精度のバランスが取れた設定で、`/model` でいつでも変更可能 | Opus 4.6 now defaults to medium effort for Max and Team subscribers. Medium effort works well for most tasks — it's the sweet spot between speed and thoroughness. You can change this anytime with `/model` | changed |
| 次のターンで高い effort を有効にする "ultrathink" キーワードを再導入 | Re-introduced the "ultrathink" keyword to enable high effort for the next turn | added |
| ファーストパーティ API の Claude Code から Opus 4 および 4.1 を削除し、これらのモデルを固定していたユーザーは自動的に Opus 4.6 へ移行 | Removed Opus 4 and 4.1 from Claude Code on the first-party API — users with these models pinned are automatically moved to Opus 4.6 | changed |

## 2.1.66

| 日本語 | English | Category |
|--------|---------|----------|
| 不要なエラーログ出力を削減 | Reduced spurious error logging | improved |

## 2.1.63

| 日本語 | English | Category |
|--------|---------|----------|
| `/simplify` および `/batch` バンドルスラッシュコマンドを追加 | Added `/simplify` and `/batch` bundled slash commands | added |
| `/cost` などのローカルスラッシュコマンドの出力がUIでシステムメッセージではなくユーザー送信メッセージとして表示される不具合を修正 | Fixed local slash command output like /cost appearing as user-sent messages instead of system messages in the UI | fixed |
| 同一リポジトリの git ワークツリー間でプロジェクト設定と自動メモリを共有するよう変更 | Project configs & auto memory now shared across git worktrees of the same repository | changed |
| claude.ai の MCP サーバーを利用不可にするための環境変数 `ENABLE_CLAUDEAI_MCP_SERVERS=false` を追加 | Added `ENABLE_CLAUDEAI_MCP_SERVERS=false` env var to opt out from making claude.ai MCP servers available | added |
| `/model` コマンドのスラッシュコマンドメニューに現在アクティブなモデルを表示するよう改善 | Improved `/model` command to show the currently active model in the slash command menu | improved |
| シェルコマンドの代わりに URL へ JSON を POST し JSON を受け取る HTTP フックを追加 | Added HTTP hooks, which can POST JSON to a URL and receive JSON instead of running a shell command | added |
| ブリッジポーリングループにおけるリスナーリークを修正 | Fixed listener leak in bridge polling loop | fixed |
| MCP OAuth フローのクリーンアップにおけるリスナーリークを修正 | Fixed listener leak in MCP OAuth flow cleanup | fixed |
| MCP OAuth 認証時に手動での URL 貼り付けによるフォールバックを追加。localhost への自動リダイレクトが機能しない場合、コールバック URL を貼り付けて認証を完了可能 | Added manual URL paste fallback during MCP OAuth authentication. If the automatic localhost redirect doesn't work, you can paste the callback URL to complete authentication. | added |
| フック設定メニューのナビゲーション時のメモリリークを修正 | Fixed memory leak when navigating hooks configuration menu | fixed |
| 自動承認時のインタラクティブなパーミッションハンドラーにおけるリスナーリークを修正 | Fixed listener leak in interactive permission handler during auto-approvals | fixed |
| ファイル数キャッシュが glob の除外パターンを無視する不具合を修正 | Fixed file count cache ignoring glob ignore patterns | fixed |
| bash コマンドプレフィックスキャッシュのメモリリークを修正 | Fixed memory leak in bash command prefix cache | fixed |
| サーバー再接続時の MCP ツール・リソースキャッシュのリークを修正 | Fixed MCP tool/resource cache leak on server reconnect | fixed |
| IDE ホスト IP 検出キャッシュがポートをまたいで誤って結果を共有する不具合を修正 | Fixed IDE host IP detection cache incorrectly sharing results across ports | fixed |
| トランスポート再接続時の WebSocket リスナーリークを修正 | Fixed WebSocket listener leak on transport reconnect | fixed |
| 長時間セッションで無制限に増大する可能性があった git ルート検出キャッシュのメモリリークを修正 | Fixed memory leak in git root detection cache that could cause unbounded growth in long-running sessions | fixed |
| 長時間セッションで無制限に増大する JSON パースキャッシュのメモリリークを修正 | Fixed memory leak in JSON parsing cache that grew unbounded over long sessions | fixed |
| VSCode: リモートセッションが会話履歴に表示されない不具合を修正 | VSCode: Fixed remote sessions not appearing in conversation history | fixed |
| 初回接続フラッシュ中に新規メッセージが過去メッセージと混在してサーバーに届き、メッセージ順序の乱れを引き起こす REPL ブリッジの競合状態を修正 | Fixed a race condition in the REPL bridge where new messages could arrive at the server interleaved with historical messages during the initial connection flush, causing message ordering issues. | fixed |
| 長時間稼働するチームメートが会話コンパクション後も AppState に全メッセージを保持し続けるメモリリークを修正 | Fixed memory leak where long-running teammates retained all messages in AppState even after conversation compaction | fixed |
| MCP サーバーの fetch キャッシュが切断時にクリアされず、頻繁に再接続するサーバーでメモリ使用量が増大するメモリリークを修正 | Fixed a memory leak where MCP server fetch caches were not cleared on disconnect, causing growing memory usage with servers that reconnect frequently | fixed |
| コンテキストコンパクション時にサブエージェントの重いプログレスメッセージのペイロードを除去し、長時間セッションにおけるメモリ使用量を改善 | Improved memory usage in long sessions with subagents by stripping heavy progress message payloads during context compaction | improved |
| `/copy` ピッカーに「常に全レスポンスをコピー」オプションを追加。選択後、以降の `/copy` コマンドはコードブロックピッカーをスキップして全レスポンスを直接コピー | Added "Always copy full response" option to the `/copy` picker. When selected, future `/copy` commands will skip the code block picker and copy the full response directly. | added |
| VSCode: セッション一覧にセッションのリネームおよび削除アクションを追加 | VSCode: Added session rename and remove actions to the sessions list | added |
| `/clear` 実行時にキャッシュ済みスキルがリセットされず、新しい会話に古いスキルの内容が残存する不具合を修正 | Fixed `/clear` not resetting cached skills, which could cause stale skill content to persist in the new conversation | fixed |

## 2.1.62

| 日本語 | English | Category |
|--------|---------|----------|
| プロンプト提案キャッシュのキャッシュヒット率が低下する不具合を修正 | Fixed prompt suggestion cache regression that reduced cache hit rates | fixed |

## 2.1.61

| 日本語 | English | Category |
|--------|---------|----------|
| Windows上での同時書き込みによるconfigファイルの破損を修正 | Fixed concurrent writes corrupting config file on Windows | fixed |

## 2.1.59

| 日本語 | English | Category |
|--------|---------|----------|
| 有用なコンテキストをauto-memoryに自動保存するように対応。/memory で管理可能 | Claude automatically saves useful context to auto-memory. Manage with /memory | added |
| コードブロックが存在する場合にインタラクティブな選択UIを表示する `/copy` コマンドを追加。個別のコードブロックまたは全レスポンスの選択が可能 | Added `/copy` command to show an interactive picker when code blocks are present, allowing selection of individual code blocks or the full response. | added |
| 複合 bash コマンド（例: `cd /tmp && git fetch && git push`）に対する「常に許可」プレフィックス候補を改善。コマンド全体を一つとして扱う代わりに、サブコマンドごとにより適切なプレフィックスを算出するように変更 | Improved "always allow" prefix suggestions for compound bash commands (e.g. `cd /tmp && git fetch && git push`) to compute smarter per-subcommand prefixes instead of treating the whole command as one | improved |
| 短いタスクリストの並び順を改善 | Improved ordering of short task lists | improved |
| 完了済みサブエージェントのタスク状態を解放することで、マルチエージェントセッションのメモリ使用量を改善 | Improved memory usage in multi-agent sessions by releasing completed subagent task state | improved |
| 複数の Claude Code インスタンスを同時実行した際の MCP OAuth トークン更新の競合状態を修正 | Fixed MCP OAuth token refresh race condition when running multiple Claude Code instances simultaneously | fixed |
| 作業ディレクトリが削除された際にシェルコマンドが明確なエラーメッセージを表示しない不具合を修正 | Fixed shell commands not showing a clear error message when the working directory has been deleted | fixed |
| 複数のClaude Codeインスタンスが同時実行された際に認証情報が消去される可能性があった設定ファイルの破損を修正 | Fixed config file corruption that could wipe authentication when multiple Claude Code instances ran simultaneously | fixed |

## 2.1.58

| 日本語 | English | Category |
|--------|---------|----------|
| リモートコントロールをより多くのユーザーに展開 | Expand Remote Control to more users | changed |

## 2.1.56

| 日本語 | English | Category |
|--------|---------|----------|
| VS Code: "command 'claude-vscode.editor.openLast' not found" クラッシュの別原因を修正 | VS Code: Fixed another cause of "command 'claude-vscode.editor.openLast' not found" crashes | fixed |

## 2.1.55

| 日本語 | English | Category |
|--------|---------|----------|
| WindowsでEINVALエラーが発生するBashToolの不具合を修正 | Fixed BashTool failing on Windows with EINVAL error | fixed |

## 2.1.53

| 日本語 | English | Category |
|--------|---------|----------|
| メッセージのレンダリング前にユーザー入力が一時的に消えるUIのちらつきを修正 | Fixed a UI flicker where user input would briefly disappear after submission before the message rendered | fixed |
| エージェントの一括終了（ctrl+f）でエージェントごとではなく単一の集約通知を送信するよう修正し、コマンドキューを適切にクリアするよう修正 | Fixed bulk agent kill (ctrl+f) to send a single aggregate notification instead of one per agent, and to properly clear the command queue | fixed |
| Remote Control 使用時にグレースフルシャットダウンで古いセッションが残ることがある問題を、テアダウンのネットワーク呼び出しを並列化することで修正 | Fixed graceful shutdown sometimes leaving stale sessions when using Remote Control by parallelizing teardown network calls | fixed |
| 初回起動時に `--worktree` が無視されることがある問題を修正 | Fixed `--worktree` sometimes being ignored on first launch | fixed |
| Windows でのパニック（"switch on corrupted value"）を修正 | Fixed a panic ("switch on corrupted value") on Windows | fixed |
| Windows で多数のプロセスを起動した際にクラッシュが発生する問題を修正 | Fixed a crash that could occur when spawning many processes on Windows | fixed |
| Linux x64 および Windows x64 の WebAssembly インタープリタのクラッシュを修正 | Fixed a crash in the WebAssembly interpreter on Linux x64 & Windows x64 | fixed |
| Windows ARM64 で2分後にクラッシュが発生することがある問題を修正 | Fixed a crash that sometimes occurred after 2 minutes on Windows ARM64 | fixed |

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
