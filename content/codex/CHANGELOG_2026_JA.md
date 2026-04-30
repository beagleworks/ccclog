# OpenAI Codex 変更履歴 (2026年)

このファイルは OpenAI Codex の2026年リリース分の変更履歴を日本語で記載しています。

---

## 0.128.0

| 日本語 | English | Category |
|--------|---------|----------|
| アプリサーバー API、モデルツール、ランタイム継続、TUI コントロール（作成・一時停止・再開・クリア）を備えた永続化 `/goal` ワークフローを追加。(#18073, #18074, #18075, #18076, #18077, #20082) | Added persisted `/goal` workflows with app-server APIs, model tools, runtime continuation, and TUI controls for create, pause, resume, and clear. (#18073, #18074, #18075, #18076, #18077, #20082) | new-features |
| `codex update`、設定可能な TUI キーマップ、プランモードの促し、アクション要求時のターミナルタイトル、アクティブターン中の `/statusline` および `/title` 編集を追加。(#19933, #18593, #19901, #18372, #19917) | Added `codex update`, configurable TUI keymaps, plan-mode nudges, action-required terminal titles, and active-turn `/statusline` and `/title` edits. (#19933, #18593, #19901, #18372, #19917) | new-features |
| 組み込みデフォルト、サンドボックス CLI プロファイル選択、cwd 制御、クライアント向けアクティブプロファイルメタデータを含むパーミッションプロファイルを拡張。(#19900, #20117, #20118, #20095) | Expanded permission profiles with built-in defaults, sandbox CLI profile selection, cwd controls, and active-profile metadata for clients. (#19900, #20117, #20118, #20095) | new-features |
| マーケットプレイスインストール、リモートバンドルキャッシュ、リモートアンインストール、プラグインバンドルフック、フック有効化状態、外部エージェント設定インポートを含むプラグインワークフローを改善。(#18704, #19914, #19456, #19705, #19840, #19949) | Improved plugin workflows with marketplace installation, remote bundle caching, remote uninstall, plugin-bundled hooks, hook enablement state, and external-agent config import. (#18704, #19914, #19456, #19705, #19840, #19949) | new-features |
| バックグラウンドインポートおよびインポート済みセッションのタイトル処理を含む外部エージェントセッションインポートを追加。(#19895, #20284, #20261) | Added external agent session import, including background imports and imported-session title handling. (#19895, #20284, #20261) | new-features |
| スレッド上限、待機時間制御、ルート/サブエージェントヒント、v2 固有の深さ処理により MultiAgentV2 設定をより明示的に変更。(#19360, #19792, #19805, #20052, #20180) | Made MultiAgentV2 configuration more explicit with thread caps, wait-time controls, root/subagent hints, and v2-specific depth handling. (#19360, #19792, #19805, #20052, #20180) | new-features |
| 古い割り込みのハング、永続化プロバイダーの復元、大規模リモート再開レスポンス、フィルタ済み再開リストの低速化を含む複数の再開・割り込み問題を修正。(#18392, #19287, #19920, #19591) | Fixed several resume and interruption issues, including stale interrupt hangs, persisted provider restoration, large remote resume responses, and slow filtered resume lists. (#18392, #19287, #19920, #19591) | bug-fixes |
| ターミナルリサイズ時のリフロー、マークダウンリストの間隔、スラッシュコマンドポップアップのレイアウト、キーボードクリーンアップ、シェルモードエスケープ、動作ステータス更新に関する TUI の信頼性を改善。(#18575, #19706, #19511, #19625, #19986, #19939) | Improved TUI reliability around terminal resize reflow, markdown list spacing, slash-command popup layout, keyboard cleanup, shell-mode escape, and working status updates. (#18575, #19706, #19511, #19625, #19986, #19939) | bug-fixes |
| 遅延拒否、プロキシバイパスのデフォルト、解決済みターゲットチェック、IPv6 ホストマッチング、`git -C` 承認処理に関するマネージドネットワーク動作を堅牢化。(#19184, #20002, #19999, #19995, #20085) | Hardened managed network behavior for deferred denials, proxy bypass defaults, resolved target checks, IPv6 host matching, and `git -C` approval handling. (#19184, #20002, #19999, #19995, #20085) | bug-fixes |
| 擬似コンソール起動、昇格ランナープロセス処理、コアシェル環境の継承、名前付きパイプの検証を含む Windows サンドボックスおよび PTY のエッジケースを修正。(#20042, #19211, #20089, #19283) | Fixed Windows sandbox and PTY edge cases, including pseudoconsole startup, elevated runner process handling, core shell environment inheritance, and named-pipe validation. (#20042, #19211, #20089, #19283) | bug-fixes |
| `apply_patch` の Bedrock モデルサポート、GPT-5.4 推論レベル、Bedrock GPT-5.4 エンドポイント/モデルメタデータの更新を修正。(#19416, #19461, #20109) | Fixed Bedrock model support for `apply_patch`, GPT-5.4 reasoning levels, and updated Bedrock GPT-5.4 endpoint/model metadata. (#19416, #19461, #20109) | bug-fixes |
| stdio サーバーのクリーンアップ、プラグイン MCP 承認の永続化、カスタム MCP メタデータの分離に関する MCP/プラグインのエッジケースを修正。(#19753, #19537, #19836, #19875) | Fixed MCP/plugin edge cases around stdio server cleanup, plugin MCP approval persistence, and custom MCP metadata isolation. (#19753, #19537, #19836, #19875) | bug-fixes |
| GPT-5.5、`gpt-image-2`、およびより明確なアップグレードガイダンスに向けてバンドル済み OpenAI Docs スキルを更新。(#19407, #19443, #19422) | Updated the bundled OpenAI Docs skill for GPT-5.5, `gpt-image-2`, and clearer upgrade guidance. (#19407, #19443, #19422) | documentation |
| PR テンプレート、Rust async trait のガイダンス、README の記述を含むコントリビューター向けドキュメントを明確化。(#19912, #20242, #19514) | Clarified contributor-facing docs, including the PR template, Rust async trait guidance, and README wording. (#19912, #20242, #19514) | documentation |
| チェックイン済みの `codex-core` 公開 API 一覧と ThreadManager サンプルクレートを追加。(#20243, #20141) | Added a checked-in `codex-core` public API listing and a ThreadManager sample crate. (#20243, #20141) | documentation |
| `codex-app-server` リリース成果物を公開、GNU Linux バイナリの公開を停止、リリースワークフローのタイムアウトを延長。(#19447, #19445, #20271, #20343) | Published `codex-app-server` release artifacts, stopped publishing GNU Linux binaries, and increased release workflow timeouts. (#19447, #19445, #20271, #20343) | chores |
| Python アプリサーバー SDK パッケージに Codex 固定バージョニングを追加。(#18996) | Added Codex-pinned versioning for the Python app-server SDK package. (#18996) | chores |
| 明示的なパーミッションプロファイルおよびトラストフローへの移行を促しつつ `--full-auto` を非推奨化。(#20133) | Deprecated `--full-auto` while steering users toward explicit permission profiles and trust flows. (#20133) | chores |
| Bazel セットアップの移行、リリーススモークテストのピン留め、ワークフローのピン/タイムアウト更新により CI およびリリース基盤を安定化。(#19851, #19854, #19472, #19609) | Stabilized CI and release plumbing with Bazel setup migration, release smoke-test pinning, and updated workflow pins/timeouts. (#19851, #19854, #19472, #19609) | chores |

## 0.125.0

| 日本語 | English | Category |
|--------|---------|----------|
| アプリサーバー統合が Unix ソケットトランスポート、ページネーション対応の resume/fork、スティッキー環境、リモートスレッドの config/store 配線をサポート。(#18255, #18892, #18897, #18908, #19008, #19014) | App-server integrations now support Unix socket transport, pagination-friendly resume/fork, sticky environments, and remote thread config/store plumbing. (#18255, #18892, #18897, #18908, #19008, #19014) | new-features |
| アプリサーバーのプラグイン管理がリモートプラグインのインストールおよび設定済みマーケットプレイスのアップグレードに対応。(#18917, #19074) | App-server plugin management can install remote plugins and upgrade configured marketplaces. (#18917, #19074) | new-features |
| パーミッションプロファイルが TUI セッション、ユーザーターン、MCP サンドボックス状態、シェルエスカレーション、アプリサーバー API 間でのラウンドトリップに対応。(#18284, #18285, #18286, #18287, #19231) | Permission profiles now round-trip across TUI sessions, user turns, MCP sandbox state, shell escalation, and app-server APIs. (#18284, #18285, #18286, #18287, #19231) | new-features |
| モデルプロバイダーがモデルディスカバリーを管理するようになり、AWS/Bedrock のアカウント状態をアプリクライアントに公開。(#18950, #19048) | Model providers now own model discovery, with AWS/Bedrock account state exposed to app clients. (#18950, #19048) | new-features |
| `codex exec --json` がプログラム利用向けに推論トークン使用量を報告するように改善。(#19308) | `codex exec --json` now reports reasoning-token usage for programmatic consumers. (#19308) | new-features |
| ロールアウトトレースがツール、コードモード、セッション、マルチエージェントの関係を記録するようになり、デバッグ用リデューサーコマンドを追加。(#18878, #18879, #18880) | Rollout tracing now records tool, code-mode, session, and multi-agent relationships, with a debug reducer command for inspection. (#18878, #18879, #18880) | new-features |
| `/review` の中断および TUI 終了時にデリゲートの起動やアンサブスクライブ処理でインターフェースがハングする問題を修正。(#18921) | Interrupting `/review` and exiting the TUI no longer leaves the interface wedged on delegate startup or unsubscribe. (#18921) | bug-fixes |
| exec サーバーがプロセス終了後にバッファされた出力を破棄する問題を修正し、ストリームのクローズを正しく待機するように改善。(#18946, #19130) | Exec-server no longer drops buffered output after process exit and now waits correctly for stream closure. (#18946, #19130) | bug-fixes |
| アプリサーバーが明示的に非信頼とされたプロジェクト設定を自動的に信頼永続化せず尊重するように修正。(#18626) | App-server now respects explicitly untrusted project config instead of auto-persisting trust. (#18626) | bug-fixes |
| WebSocket アプリサーバークライアントがターンおよびツール出力通知のバースト時に切断されにくくなるよう改善。(#19246) | WebSocket app-server clients are less likely to disconnect during bursts of turn and tool-output notifications. (#19246) | bug-fixes |
| Windows サンドボックス起動時の複数 CLI バージョンおよびインストール済みアプリディレクトリの処理を改善し、バックグラウンドの `Start-Process` 呼び出しで PowerShell ウィンドウが表示されないように修正。(#19044, #19180, #19214) | Windows sandbox startup handles multiple CLI versions and installed app directories better, and background `Start-Process` calls avoid visible PowerShell windows. (#19044, #19180, #19214) | bug-fixes |
| config/スキーマ処理において、MultiAgentV2 スレッド上限の競合を拒否、エージェントロール設定パスの相対解決、非サポートの MCP ベアラートークンフィールドの非表示、不正な `js_repl` イメージ MIME タイプの拒否に対応。(#19129, #19261, #19294, #19292) | Config/schema handling now rejects conflicting MultiAgentV2 thread limits, resolves relative agent-role config paths, hides unsupported MCP bearer-token fields, and rejects invalid `js_repl` image MIME types. (#19129, #19261, #19294, #19292) | bug-fixes |
| アプリサーバーのドキュメントおよび生成済みスキーマを新しいトランスポート、スレッド、マーケットプレイス、スティッキー環境、パーミッションプロファイル API に合わせて更新。(#18255, #18897, #19014, #19074, #19231) | App-server docs and generated schemas were refreshed for the new transport, thread, marketplace, sticky environment, and permission-profile APIs. (#18255, #18897, #19014, #19074, #19231) | documentation |
| ロールアウトトレースのドキュメントにデバッグトレースリダクションのワークフローを追記。(#18880) | Rollout-trace documentation now covers the debug trace reduction workflow. (#18880) | documentation |
| `models.json` および関連するコア、アプリサーバー、SDK、TUI フィクスチャを最新のモデルカタログおよび推論デフォルトに合わせて更新。(#19323) | Refreshed `models.json` and related core, app-server, SDK, and TUI fixtures for the latest model catalog and reasoning defaults. (#19323) | chores |
| Windows Bazel CI でより良いキャッシュ再利用のために安定した PATH と共有クエリスタートアップパスを使用するように改善。(#19161, #19232) | Windows Bazel CI now uses a stable PATH and shared query startup path for better cache reuse. (#19161, #19232) | chores |
| プラグインマーケットプレイスの追加/削除/起動時同期の内部処理を `codex-core` から分離し、キュレーション済みプラグインのキャッシュバージョンに短縮 SHA を使用するように変更。(#19099, #19095) | Plugin marketplace add/remove/startup-sync internals moved out of `codex-core`, and curated plugin cache versions now use short SHAs. (#19099, #19095) | chores |
| macOS 署名エンタイトルメントの変更がアルファ版の起動失敗を引き起こしたためリバート。(#19167, #19350) | Reverted a macOS signing entitlement change after it caused alpha startup failures. (#19167, #19350) | chores |
| 承認ポップアップおよびプラグイン MCP ツールディスカバリーの不安定なテストを安定化。(#19178, #19191) | Stabilized flaky approval-popup and plugin MCP tool-discovery tests. (#19178, #19191) | chores |

## 0.124.0

| 日本語 | English | Category |
|--------|---------|----------|
| TUI にクイック推論コントロールを追加: `Alt+,` で推論を下げ、`Alt+.` で推論を上げ、モデルアップグレードの承認時に古い設定を引き継がず新モデルのデフォルト値にリセット。(#18866, #19085) | The TUI now has quick reasoning controls: `Alt+,` lowers reasoning, `Alt+.` raises it, and accepted model upgrades now reset reasoning to the new model’s default instead of carrying over stale settings. (#18866, #19085) | new-features |
| アプリサーバーセッションで複数の環境を管理し、ターンごとに環境と作業ディレクトリを選択可能に。マルチワークスペースやリモート環境の精密なターゲット指定が容易に。(#18401, #18416) | App-server sessions can now manage multiple environments and choose an environment and working directory per turn, which makes multi-workspace and remote setups easier to target precisely. (#18401, #18416) | new-features |
| AWS SigV4 署名および AWS 認証情報ベースの認証を含む、OpenAI 互換プロバイダー向け Amazon Bedrock の正式サポートを追加。(#17820) | Added first-class Amazon Bedrock support for OpenAI-compatible providers, including AWS SigV4 signing and AWS credential-based auth. (#17820) | new-features |
| リモートプラグインマーケットプレイスの一覧表示と直接読み取りに対応。詳細検索の信頼性向上と検索結果ページの大容量化。(#18452, #19079) | Remote plugin marketplaces can now be listed and read directly, with more reliable detail lookups and larger result pages. (#18452, #19079) | new-features |
| フックを安定化。`config.toml` へのインライン設定と `requirements.toml` での管理に対応。MCP ツール、`apply_patch`、長時間実行の Bash セッションの監視も可能に。(#18893, #18385, #18391, #18888, #19012) | Hooks are now stable, can be configured inline in `config.toml` and managed `requirements.toml`, and can observe MCP tools as well as `apply_patch` and long-running Bash sessions. (#18893, #18385, #18391, #18888, #19012) | new-features |
| 対象 ChatGPT プランでは、明示的にオプトアウトしない限り Fast サービスティアをデフォルトに変更。(#19053) | Eligible ChatGPT plans now default to the Fast service tier unless you explicitly opt out. (#19053) | new-features |
| 承認済み ChatGPT ホスト間で Cloudflare Cookie を保持し、HTTP バックエンドの ChatGPT フローにおける認証失敗を低減。(#17783) | Preserved Cloudflare cookies across approved ChatGPT hosts, reducing auth breakage in HTTP-backed ChatGPT flows. (#17783) | bug-fixes |
| リモートアプリサーバーの信頼性問題を修正。負荷時の WebSocket イベント処理継続と、クリーンアップ中のリモートワーカー終了時にシャットダウンが失敗しない問題を修正。(#18932, #18936) | Fixed remote app-server reliability issues so websocket events keep draining under load and shutdown no longer fails when the remote worker exits during cleanup. (#18932, #18936) | bug-fixes |
| パーミッションモードのドリフトを修正。`/permissions` の変更がサイド会話を経ても保持され、Full Access の状態が MCP 承認処理に正しく反映されるように修正。(#18924, #19033) | Fixed permission-mode drift so `/permissions` changes survive side conversations and updated Full Access state is correctly reflected in MCP approval handling. (#18924, #19033) | bug-fixes |
| `wait_agent` がメールボックスに処理待ち作業が既にキューイングされている場合に、新規通知の待機やタイムアウトを経ずに即座に返るよう修正。(#18968) | Fixed `wait_agent` so it returns promptly when mailbox work is already queued instead of waiting for a fresh notification or timing out. (#18968) | bug-fixes |
| 明示的な `cwd` を持たない相対コマンドのローカル stdio MCP 起動を修正。フォールバックのパス解決を CLI の挙動に準拠。(#19031) | Fixed local stdio MCP launches for relative commands without an explicit `cwd`, bringing fallback path resolution in line with CLI behavior. (#19031) | bug-fixes |
| 管理設定のエッジケースによる起動失敗を低減。未知の機能要件は中断せず警告を表示し、クラウド要件エラーは失敗内容をより明確に表示するよう改善。(#19038, #19078) | Startup now fails less often on managed config edge cases: unknown feature requirements warn instead of aborting, and cloud-requirements errors are clearer about what failed. (#19038, #19078) | bug-fixes |

## 0.123.0

| 日本語 | English | Category |
|--------|---------|----------|
| AWS プロファイル設定に対応した組み込み `amazon-bedrock` モデルプロバイダーを追加 (#18744)。 | Added a built-in `amazon-bedrock` model provider with configurable AWS profile support (#18744). | new-features |
| `/mcp verbose` で MCP サーバーの詳細診断・リソース・リソーステンプレートを表示可能にしつつ、通常の `/mcp` は高速なままを維持 (#18610)。 | Added `/mcp verbose` for full MCP server diagnostics, resources, and resource templates while keeping plain `/mcp` fast (#18610). | new-features |
| プラグイン MCP 読み込みで `.mcp.json` の `mcpServers` とトップレベルのサーバーマップの両形式に対応 (#18780)。 | Made plugin MCP loading accept both `mcpServers` and top-level server maps in `.mcp.json` (#18780). | new-features |
| バックグラウンドエージェントがトランスクリプトの差分を受け取り、適切な場合に明示的に沈黙できるよう、リアルタイムハンドオフを改善 (#18597, #18761, #18635)。 | Improved realtime handoffs so background agents receive transcript deltas and can explicitly stay silent when appropriate (#18597, #18761, #18635). | new-features |
| リモート環境向けにホスト固有の `remote_sandbox_config` 要件を追加 (#18763)。 | Added host-specific `remote_sandbox_config` requirements for remote environments (#18763). | new-features |
| 現在のデフォルト `gpt-5.4` を含むバンドル済みモデルメタデータを更新 (#18586, #18388, #18719)。 | Refreshed bundled model metadata, including the current `gpt-5.4` default (#18586, #18388, #18719). | new-features |
| ロールバック後の `/copy` でロールバック前のレスポンスではなく最新の表示済みアシスタントレスポンスをコピーするよう修正 (#18739)。 | Fixed `/copy` after rollback so it copies the latest visible assistant response, not a pre-rollback response (#18739). | bug-fixes |
| 手動シェルコマンド実行中に送信された通常のフォローアップテキストをキューに入れ、`Working` 状態のフリーズを防止 (#18820)。 | Queued normal follow-up text submitted while a manual shell command is running, preventing stuck `Working` states (#18820). | bug-fixes |
| VS Code WSL ターミナルで拡張キーボードモードを無効化することで Unicode/デッドキー入力の問題を修正 (#18741)。 | Fixed Unicode/dead-key input in VS Code WSL terminals by disabling the enhanced keyboard mode there (#18741). | bug-fixes |
| シェルスナップショットからの古いプロキシ環境変数の復元を防止 (#17271)。 | Prevented stale proxy environment variables from being restored from shell snapshots (#17271). | bug-fixes |
| `codex exec` でサンドボックスやモデルオプション等のルートレベルの共有フラグを継承するよう対応 (#18630)。 | Made `codex exec` inherit root-level shared flags such as sandbox and model options (#18630). | bug-fixes |
| TUI トランスクリプトへのレビュープロンプトの漏洩を修正 (#18659)。 | Removed leaked review prompts from TUI transcripts (#18659). | bug-fixes |
| Codex 駆動レビューで使用するコードレビュースキルの指示を追加・強化 (#18746, #18818)。 | Added and tightened the Code Review skill instructions used by Codex-driven reviews (#18746, #18818). | documentation |
| ロックをまたぐ意図的な await のケースをドキュメント化し、Clippy によるリントを有効化 (#18423, #18698)。 | Documented intentional await-across-lock cases and enabled Clippy linting for them (#18423, #18698). | documentation |
| スレッドレスな MCP リソース読み取りと名前空間付き動的ツールに関するアプリサーバープロトコルドキュメントを更新 (#18292, #18413)。 | Updated app-server protocol docs for threadless MCP resource reads and namespaced dynamic tools (#18292, #18413). | documentation |
| パッチ済みの JS および Rust 依存関係をピン留めすることで高深刻度の依存関係アラートを修正 (#18167)。 | Fixed high-severity dependency alerts by pinning patched JS and Rust dependencies (#18167). | chores |
| 有用なバックトレースを維持しつつ、Rust 開発ビルドのデバッグ情報によるオーバーヘッドを削減 (#18844)。 | Reduced Rust dev build debug-info overhead while preserving useful backtraces (#18844). | chores |
| 現在のスキーマから生成済み Python アプリサーバー SDK 型を更新 (#18862)。 | Refreshed generated Python app-server SDK types from the current schema (#18862). | chores |

## 0.122.0

| 日本語 | English | Category |
|--------|---------|----------|
| スタンドアロンインストールをより自己完結型に改善し、`codex app` が Windows および Intel Mac でデスクトップを正しく開く・インストールするように対応 (#17022, #18500)。 | Standalone installs are more self-contained, and `codex app` now opens or installs Desktop correctly on Windows and Intel Macs (#17022, #18500). | new-features |
| TUI に `/side` でサイド会話を開く機能を追加し、処理実行中のキュー入力でスラッシュコマンドおよび `!` シェルプロンプトをサポート (#18190, #18542)。 | The TUI can open `/side` conversations for quick side questions, and queued input now supports slash commands and `!` shell prompts while work is running (#18190, #18542). | new-features |
| プランモードで新規コンテキストから実装を開始できるようにし、プランニングスレッドを引き継ぐかどうかの判断前にコンテキスト使用量を表示 (#17499, #18573)。 | Plan Mode can start implementation in a fresh context, with context-usage shown before deciding whether to carry the planning thread forward (#17499, #18573). | new-features |
| プラグインワークフローにタブブラウジング、インラインの有効/無効トグル、マーケットプレイス削除、リモート・クロスリポジトリ・ローカルマーケットプレイスソースを追加 (#18222, #18395, #17752, #17751, #17277, #18017, #18246)。 | Plugin workflows now include tabbed browsing, inline enable/disable toggles, marketplace removal, and remote, cross-repo, or local marketplace sources (#18222, #18395, #17752, #17751, #17277, #18017, #18246). | new-features |
| ファイルシステムパーミッションに deny-read グロブポリシー、管理された deny-read 要件、プラットフォームサンドボックス強制、ユーザー設定・ルールを無視した隔離 `codex exec` 実行をサポート (#15979, #17740, #18096, #18646)。 | Filesystem permissions now support deny-read glob policies, managed deny-read requirements, platform sandbox enforcement, and isolated `codex exec` runs that ignore user config or rules (#15979, #17740, #18096, #18646). | new-features |
| ツールディスカバリーと画像生成をデフォルト有効化し、高詳細画像処理および MCP・`js_repl` 画像出力のオリジナル詳細メタデータをサポート (#17854, #17153, #17714, #18386)。 | Tool discovery and image generation are now enabled by default, with higher-detail image handling and original-detail metadata support for MCP and `js_repl` image outputs (#17854, #17153, #17714, #18386). | new-features |
| 別クライアントが解決済みの app-server 承認・ユーザー入力プロンプト・MCP エリシテーションを TUI から削除し、古いプロンプトが残留しないよう修正 (#15134)。 | App-server approvals, user-input prompts, and MCP elicitations now disappear from the TUI when another client resolves them, instead of leaving stale prompts behind (#15134). | bug-fixes |
| リモートコントロール起動時に ChatGPT 認証が欠落していてもエラーを許容するよう修正し、app-server セッション経由の MCP 起動キャンセルを再び動作するよう修正 (#18117, #18078)。 | Remote-control startup now tolerates missing ChatGPT auth, and MCP startup cancellation works again through app-server sessions (#18117, #18078). | bug-fixes |
| 再開・フォークした app-server スレッドがトークン使用量を即座に再生するよう改善し、コンテキスト/ステータス UI が復元済み状態で起動するよう対応 (#18023)。 | Resumed and forked app-server threads now replay token usage immediately so context/status UI starts with the restored state (#18023). | bug-fixes |
| セキュリティ重要フローを強化：ログアウト時に管理 ChatGPT トークンを失効、プロジェクトフックと exec ポリシーに信頼済みワークスペースを要求、Windows サンドボックスセットアップでの広範なユーザープロファイル・SSH ルート権限付与を回避 (#17825, #14718, #18443, #18493)。 | Security-sensitive flows were tightened: logout revokes managed ChatGPT tokens, project hooks and exec policies require trusted workspaces, and Windows sandbox setup avoids broad user-profile and SSH-root grants (#17825, #14718, #18443, #18493). | bug-fixes |
| 分割ファイルシステムポリシーでのサンドボックス化 `apply_patch` 書き込みを修正し、ウォッチ開始後に作成されたファイルをファイルウォッチャーが検知するよう修正 (#18296, #18492)。 | Sandboxed `apply_patch` writes work correctly with split filesystem policies, and file watchers now notice files created after watching begins (#18296, #18492). | bug-fixes |
| TUI の不具合を複数修正：スキル一覧の致命的エラー、無効な再開ヒント、コンテキストステータスラインの重複エントリ、`/model` メニューのループ、冗長なメモリ通知、iTerm2 でのターミナルタイトルのクォート (#18061, #18059, #18054, #18154, #18580, #18261)。 | Several TUI rough edges were fixed, including fatal skills-list failures, invalid resume hints, duplicate context statusline entries, `/model` menu loops, redundant memory notices, and terminal title quoting in iTerm2 (#18061, #18059, #18054, #18154, #18580, #18261). | bug-fixes |
| サンドボックス・承認・ネットワーク制御に関するセキュリティ境界リファレンスを `SECURITY.md` に追加 (#17848, #18004)。 | Added a security-boundaries reference to `SECURITY.md` for sandboxing, approvals, and network controls (#17848, #18004). | documentation |
| カスタム MCP サーバー承認デフォルトおよび exec-server の stdin 動作をドキュメント化 (#17843, #18086)。 | Documented custom MCP server approval defaults and exec-server stdin behavior (#17843, #18086). | documentation |
| プラグイン API 変更、マーケットプレイス削除、再開/フォークのトークン使用量リプレイ、警告通知に関する app-server ドキュメントを更新 (#17277, #17751, #18023, #18298)。 | Updated app-server docs for plugin API changes, marketplace removal, resume/fork token-usage replay, and warning notifications (#17277, #17751, #18023, #18298). | documentation |
| responses API プロキシの簡易ガイドを追加 (#18604)。 | Added a short guide for the responses API proxy (#18604). | documentation |
| プラグインおよびマーケットプレイスコードを `codex-core-plugins` に分離し、コネクタコードを `connectors` に移動、大規模なコアセッション/ターンモジュールの分割を継続 (#18070, #18158, #18200, #18206, #18244, #18249)。 | Split plugin and marketplace code into `codex-core-plugins`, moved more connector code into `connectors`, and continued breaking up the large core session/turn modules (#18070, #18158, #18200, #18206, #18244, #18249). | chores |
| 設定読み込みおよび `AGENTS.md` 探索をファイルシステムとマネージャーの狭いインターフェース経由にリファクタリング (#18209, #18035)。 | Refactored config loading and `AGENTS.md` discovery behind narrower filesystem and manager abstractions (#18209, #18035). | chores |
| フレーク修正、ネイティブ Rust テストシャーディング、スコープ付きリポジトリキャッシュ、強化した Windows clippy カバレッジ、`rules_rs`/LLVM ピンの更新により Bazel および CI を安定化 (#17791, #18082, #18366, #18350, #18397)。 | Stabilized Bazel and CI with flake fixes, native Rust test sharding, scoped repository caches, stronger Windows clippy coverage, and updated `rules_rs`/LLVM pins (#17791, #18082, #18366, #18350, #18397). | chores |
| コア CODEOWNERS および小規模な開発ビルドプロファイルを追加 (#18362, #18612)。 | Added core CODEOWNERS and a smaller development build profile (#18362, #18612). | chores |
| 古くなったコアの `models.json` を削除し、リリース準備でアクティブなモデルカタログを更新するよう対応 (#18585)。 | Removed the stale core `models.json` and updated release preparation to refresh the active model catalog (#18585). | chores |

## 0.121.0

| 日本語 | English | Category |
|--------|---------|----------|
| GitHubリポジトリ・git URL・ローカルディレクトリ・`marketplace.json` URL から直接プラグインマーケットプレイスをインストールする `codex marketplace add` コマンドおよびアプリサーバーサポートを追加 (#17087, #17717, #17756) | Added `codex marketplace add` and app-server support for installing plugin marketplaces from GitHub, git URLs, local directories, and direct `marketplace.json` URLs (#17087, #17717, #17756). | new-features |
| `Ctrl+R` による逆順検索や受け入れ済みスラッシュコマンドのローカル履歴再呼び出しなど、TUI プロンプト履歴機能を改善 (#17550, #17336) | Added TUI prompt history improvements, including `Ctrl+R` reverse search and local recall for accepted slash commands (#17550, #17336). | new-features |
| メモリモードの切り替え、メモリのリセット／削除、メモリ拡張クリーンアップに関する TUI およびアプリサーバーの制御機能を追加 (#17632, #17626, #17913, #17937, #17844) | Added TUI and app-server controls for memory mode, memory reset/deletion, and memory-extension cleanup (#17632, #17626, #17913, #17937, #17844). | new-features |
| MCP Apps ツール呼び出し、名前空間付き MCP 登録、並列呼び出しオプトイン、MCP サーバー向けサンドボックス状態メタデータを追加し、MCP／プラグインサポートを拡張 (#17364, #17404, #17667, #17763) | Expanded MCP/plugin support with MCP Apps tool calls, namespaced MCP registration, parallel-call opt-in, and sandbox-state metadata for MCP servers (#17364, #17404, #17667, #17763). | new-features |
| 出力モダリティ、トランスクリプト完了イベント、ロー Turn アイテム注入、シンボリックリンク対応ファイルシステムメタデータ向けのリアルタイムおよびアプリサーバー API を追加 (#17701, #17703, #17719) | Added realtime and app-server APIs for output modality, transcript completion events, raw turn item injection, and symlink-aware filesystem metadata (#17701, #17703, #17719). | new-features |
| bubblewrap サポートを備えたセキュアな devcontainer プロファイルを追加し、Unix ソケット向け macOS サンドボックス許可リストを追加 (#10431, #17547, #17654) | Added a secure devcontainer profile with bubblewrap support, plus macOS sandbox allowlists for Unix sockets (#10431, #17547, #17654). | new-features |
| プライベート DNS に関する macOS サンドボックス／プロキシ処理を修正し、`danger-full-access` の拒否リスト専用ネットワークモードを削除 (#17370, #17732) | Fixed macOS sandbox/proxy handling for private DNS and removed the `danger-full-access` denylist-only network mode (#17370, #17732). | bug-fixes |
| パスに verbatim プレフィックスが含まれる場合に `resume --last` および `thread/list` が動作するよう Windows の cwd／セッションマッチングを修正 (#17414) | Fixed Windows cwd/session matching so `resume --last` and `thread/list` work when paths use verbatim prefixes (#17414). | bug-fixes |
| `prolite` プランのレート制限／アカウント処理を修正し、未知の WHAM プラン値をデコード可能に対応 (#17419) | Fixed rate-limit/account handling for `prolite` plans and made unknown WHAM plan values decodable (#17419). | bug-fixes |
| Guardian のタイムアウトをポリシー拒否と区別し、タイムアウト固有のガイダンス表示および TUI 履歴への表示エントリを追加 (#17381, #17486, #17521, #17557) | Made Guardian timeouts distinct from policy denials, with timeout-specific guidance and visible TUI history entries (#17381, #17486, #17521, #17557). | bug-fixes |
| スレッドの早期アンロード回避、起動時の信頼永続化失敗への耐性追加、`fs/readDirectory` での壊れたシンボリックリンクのスキップにより、アプリサーバーの動作を安定化 (#17398, #17595, #17907) | Stabilized app-server behavior by avoiding premature thread unloads, tolerating failed trust persistence on startup, and skipping broken symlinks in `fs/readDirectory` (#17398, #17595, #17907). | bug-fixes |
| 遅延ツール名のフラット化、elicitation タイムアウトの計算、空の名前空間説明に関する MCP／ツール呼び出しのエッジケースを修正 (#17556, #17566, #17946) | Fixed MCP/tool-call edge cases including flattened deferred tool names, elicitation timeout accounting, and empty namespace descriptions (#17556, #17566, #17946). | bug-fixes |
| セキュアな devcontainer プロファイルおよびその bubblewrap 要件をドキュメント化 (#10431, #17547) | Documented the secure devcontainer profile and its bubblewrap requirements (#10431, #17547). | documentation |
| TUI コンポーザーの履歴検索動作に関するドキュメントを追加 (#17550) | Added TUI composer documentation for history search behavior (#17550). | documentation |
| MCP、マーケットプレイス、ターン注入、メモリリセット、ファイルシステムメタデータ、外部エージェント移行、WebSocket トークンハッシュ API に関するアプリサーバードキュメントを更新 (#17364, #17717, #17703, #17913, #17719, #17855, #17871) | Updated app-server docs for new MCP, marketplace, turn injection, memory reset, filesystem metadata, external-agent migration, and websocket token-hash APIs (#17364, #17717, #17703, #17913, #17719, #17855, #17871). | documentation |
| WSL1 の bubblewrap 制限と WSL2 の動作をドキュメント化 (#17559) | Documented WSL1 bubblewrap limitations and WSL2 behavior (#17559). | documentation |
| 拡張クリーンアップに関するメモリパイプラインのドキュメントを追加 (#17844) | Added memory pipeline documentation for extension cleanup (#17844). | documentation |
| GitHub Actions、cargo インストール、git 依存関係、V8 チェックサム、cargo-deny ソース許可リストをピン留めし、サプライチェーンおよび CI 入力のセキュリティを強化 (#17471) | Hardened supply-chain and CI inputs by pinning GitHub Actions, cargo installs, git dependencies, V8 checksums, and cargo-deny source allowlists (#17471). | chores |
| PR CI にてリリース専用 Rust コードがコンパイルされるよう、Bazel リリースビルド検証を追加 (#17704, #17705) | Added Bazel release-build verification so release-only Rust code is compiled in PR CI (#17704, #17705). | chores |
| `codex-thread-store` クレート／インターフェイスを導入し、ローカルスレッド一覧取得をその背後に移行 (#17659, #17824) | Introduced the `codex-thread-store` crate/interface and moved local thread listing behind it (#17659, #17824). | chores |
| ワークスペースインストールにおける pnpm 依存関係ビルドスクリプトのレビュー必須化 (#17558) | Required reviewed pnpm dependency build scripts for workspace installs (#17558). | chores |
| 絶対パス型の適用範囲拡大および未使用ヘルパー API の削除により、Rust のメンテナンスコストを低減 (#17407, #17792, #17146) | Reduced Rust maintenance surface with broader absolute-path types and removal of unused helper APIs (#17407, #17792, #17146). | chores |

## 0.120.0

| 日本語 | English | Category |
|--------|---------|----------|
| Realtime V2 がバックグラウンドエージェントの進捗をリアルタイムでストリーミングし、アクティブなレスポンス完了までフォローアップレスポンスをキュー管理する機能に対応 (#17264, #17306) | Realtime V2 can now stream background agent progress while work is still running and queue follow-up responses until the active response completes (#17264, #17306) | new-features |
| TUI のフック表示を改善し、実行中のフックを個別に表示、完了したフックの出力は必要な場合のみ保持するよう変更 (#17266) | Hook activity in the TUI is easier to scan, with live running hooks shown separately and completed hook output kept only when useful (#17266) | new-features |
| カスタム TUI ステータスラインに変更後のスレッドタイトルを含めることが可能に (#17187) | Custom TUI status lines can include the renamed thread title (#17187) | new-features |
| コードモードのツール宣言に MCP の `outputSchema` 詳細を追加し、構造化されたツール結果の型をより厳密に指定 (#17210) | Code-mode tool declarations now include MCP `outputSchema` details so structured tool results are typed more precisely (#17210) | new-features |
| SessionStart フックで `/clear` によるセッションと、新規起動または再開セッションを区別可能に (#17073) | SessionStart hooks can distinguish sessions created by `/clear` from fresh startup or resume sessions (#17073) | new-features |
| 書き込み可能ルート配下の読み取り専用カーブアウトを含む、分割ファイルシステムポリシーにおける Windows 昇格サンドボックス処理を修正 (#14568) | Fixed Windows elevated sandbox handling for split filesystem policies, including read-only carveouts under writable roots (#14568) | bug-fixes |
| シンボリックリンクされた書き込み可能ルートおよびカーブアウトのサンドボックスパーミッション処理を修正し、シェルおよび `apply_patch` ワークフローでの失敗を解消 (#15981) | Fixed sandbox permission handling for symlinked writable roots and carveouts, preventing failures in shell and `apply_patch` workflows (#15981) | bug-fixes |
| TLS WebSocket 接続前に Rustls 暗号プロバイダーを初期化することで `codex --remote wss://...` のパニックを修正 (#17288) | Fixed `codex --remote wss://...` panics by installing the Rustls crypto provider before TLS websocket connections (#17288) | bug-fixes |
| ツール検索結果のアルファベット順ソートをやめ、元の順序を維持するよう修正 (#17263) | Preserved tool search result ordering instead of alphabetically reordering results (#17263) | bug-fixes |
| ライブ Stop フックのプロンプトがスレッド履歴の再読み込み後でなく即時表示されるよう修正 (#17189) | Fixed live Stop-hook prompts so they appear immediately instead of only after thread history reloads (#17189) | bug-fixes |
| アプリサーバー MCP の切断時クリーンアップを修正し、サブスクリプション解除済みのスレッドとリソースが正しく破棄されるよう対応 (#17223) | Fixed app-server MCP cleanup on disconnect so unsubscribed threads and resources are torn down correctly (#17223) | bug-fixes |
| コア README に Windows サンドボックスの昇格トークンと制限付きトークンのサポート分割を記載 (#14568) | Documented the elevated vs restricted-token Windows sandbox support split in the core README (#14568) | documentation |
| 新しい `/clear` SessionStart ソースに対応したアプリサーバープロトコルドキュメントを更新 (#17073) | Updated app-server protocol documentation for the new `/clear` SessionStart source (#17073) | documentation |
| 失敗したフラッシュのリトライと耐久性障害の通知を追加し、バッファアイテムをドロップせずロールアウト記録の信頼性を向上 (#17214) | Made rollout recording more reliable by retrying failed flushes and surfacing durability failures instead of dropping buffered items (#17214) | chores |
| コンパクションおよび Guardian レビューイベント向けの分析スキーマとメタデータ配線を追加 (#17155, #17055) | Added analytics schemas and metadata wiring for compaction and Guardian review events (#17155, #17055) | chores |
| 全履歴を繰り返し送信する代わりにトランスクリプトの差分を送信することで Guardian フォローアップの効率を改善 (#17269) | Improved Guardian follow-up efficiency by sending transcript deltas instead of repeatedly resending full history (#17269) | chores |
| アプリサーバーイベントと内部承認状態をまたいで安定した Guardian レビュー ID を追加 (#17298) | Added stable Guardian review IDs across app-server events and internal approval state (#17298) | chores |

## 0.119.0

| 日本語 | English | Category |
|--------|---------|----------|
| リアルタイム音声セッションがデフォルトで v2 WebRTC パスを使用するようになり、トランスポートの設定、音声選択、ネイティブ TUI メディアサポート、新フローのアプリサーバー対応を追加 (#16960, #17057, #17058, #17093, #17097, #17145, #17165, #17176, #17183, #17188)。 | Realtime voice sessions now default to the v2 WebRTC path, with configurable transport, voice selection, native TUI media support, and app-server coverage for the new flow (#16960, #17057, #17058, #17093, #17097, #17145, #17165, #17176, #17183, #17188). | new-features |
| MCP アプリおよびカスタム MCP サーバーのサポートを強化し、リソース読み取り、ツール呼び出しメタデータ、カスタムサーバーのツール検索、サーバー主導の Elicitation、ファイルパラメータのアップロード、プラグインキャッシュの更新安定性を改善 (#16082, #16465, #16944, #17043, #15197, #16191, #16947)。 | MCP Apps and custom MCP servers gained richer support, including resource reads, tool-call metadata, custom-server tool search, server-driven elicitations, file-parameter uploads, and more reliable plugin cache refreshes (#16082, #16465, #16944, #17043, #15197, #16191, #16947). | new-features |
| リモート／アプリサーバーワークフローに Egress WebSocket トランスポート、リモート `--cd` 転送、ランタイムによるリモートコントロール有効化、サンドボックス対応ファイルシステム API、実験的サブコマンド `codex exec-server` を追加 (#15951, #16700, #16973, #16751, #17059, #17142, #17162)。 | Remote/app-server workflows now support egress websocket transport, remote `--cd` forwarding, runtime remote-control enablement, sandbox-aware filesystem APIs, and an experimental `codex exec-server` subcommand (#15951, #16700, #16973, #16751, #17059, #17142, #17162). | new-features |
| TUI で `Ctrl+O` による最新エージェントレスポンスのコピーを追加し、SSH 環境やクロスプラットフォームでのクリップボード動作を改善 (#16966)。 | The TUI can copy the latest agent response with `Ctrl+O`, including better clipboard behavior over SSH and across platforms (#16966). | new-features |
| `/resume` でセッション ID または名前を指定して TUI から直接セッションへジャンプ可能に (#17222)。 | `/resume` can now jump directly to a session by ID or name from the TUI (#17222). | new-features |
| TUI 通知の設定項目を拡充し、Warp OSC 9 サポートとターミナルフォーカス中でも通知を受け取るオプトインモードを追加 (#17174, #17175)。 | TUI notifications are more configurable, including Warp OSC 9 support and an opt-in mode for notifications even while the terminal is focused (#17174, #17175). | new-features |
| レート制限の非同期取得により TUI の起動を高速化し、`/status` がフリーズまたは誤ったクォータ情報を表示する代わりに古い制限情報を更新するよう修正 (#16201, #17039)。 | The TUI starts faster by fetching rate limits asynchronously, and `/status` now refreshes stale limits instead of showing frozen or misleading quota information (#16201, #17039). | bug-fixes |
| 再開フローを安定化し、ピッカーが誤った空状態をフラッシュしない修正、スレッド名の鮮度向上、タイムスタンプラベルの安定化、ゼロトークン終了時の再開ヒント保持、現在のスレッド再開時のクラッシュ修正を実施 (#16591, #16601, #16822, #16987, #17086)。 | Resume flows are more stable: the picker no longer flashes false empty states, uses fresher thread names, stabilizes timestamp labels, preserves resume hints on zero-token exits, and avoids crashing when resuming the current thread (#16591, #16601, #16822, #16987, #17086). | bug-fixes |
| コンポーザーおよびチャットの動作を改善し、ペースト後処理の修正、CJK 単語ナビゲーション、`/copy` の出力古化、パーセントデコードされたローカルファイルリンク、実行出力の切り捨て時のヒント表示を修正 (#16202, #16829, #16648, #16810, #17076)。 | Composer and chat behavior are smoother, including fixed paste teardown, CJK word navigation, stale `/copy` output, percent-decoded local file links, and clearer truncated exec-output hints (#16202, #16829, #16648, #16810, #17076). | bug-fixes |
| アプリサーバー接続の TUI セッションで `/fast off` 後も Fast Mode がオンのままになる問題を修正 (#16833)。 | Fast Mode no longer stays stuck on after `/fast off` in app-server-backed TUI sessions (#16833). | bug-fixes |
| MCP のステータス表示とスタートアップのノイズを削減・高速化し、ハイフン入りサーバー名のツール一覧表示修正、`/mcp` の低速フルインベントリプローブ回避、無効サーバーの認証プローブスキップ、`codex mcp-server` によるレジデンシーヘッダーの反映を対応 (#16674, #16831, #17098, #16952)。 | MCP status and startup are less noisy and faster: hyphenated server names list tools correctly, `/mcp` avoids slow full inventory probes, disabled servers skip auth probing, and residency headers are honored by `codex mcp-server` (#16674, #16831, #17098, #16952). | bug-fixes |
| サンドボックス・ネットワーク・プラットフォーム固有の問題を修正し、読み取り専用時の `apply_patch` エラーメッセージ改善、サンドボックス変更後のネットワークプロキシポリシー更新、無関係な bubblewrap 警告の抑制、macOS HTTP クライアントサンドボックスのパニック修正、Windows ファイアウォールのアドレス処理を改善 (#16885, #17040, #16667, #16670, #17053)。 | Sandbox, network, and platform edge cases were tightened, including clearer read-only `apply_patch` errors, refreshed network proxy policy after sandbox changes, suppressed irrelevant bubblewrap warnings, a macOS HTTP-client sandbox panic fix, and Windows firewall address handling (#16885, #17040, #16667, #16670, #17053). | bug-fixes |
| README に記載の ChatGPT ビジネスプラン名を現行の名称に更新 (#16348)。 | The README now uses the current ChatGPT Business plan name (#16348). | documentation |
| `argument_comment_lint` の開発者向けガイダンスを更新し、低速なローカル lint の完了を待つよりも CI を先に開始することを推奨するよう変更 (#16375)。 | Developer guidance for `argument_comment_lint` was updated to favor getting CI started instead of blocking on slow local lint runs (#16375). | documentation |
| 古い `codex-cli` README の内容を削除し、陳腐化したセットアップガイダンスを排除 (#17096)。 | Obsolete `codex-cli` README content was removed to avoid stale setup guidance (#17096). | documentation |
| `codex exec --help` の使用方法と承認モードの説明をわかりやすく改善 (#16881, #16888)。 | `codex exec --help` now shows clearer usage and approval-mode wording (#16881, #16888). | documentation |
| MCP、ツール、設定、モデル管理、認証、フィードバック、プロトコル等の主要クレートを分離することで `codex-core` をスリム化 (#15919, #16379, #16508, #16523, #16962)。 | `codex-core` was slimmed down through major crate extractions for MCP, tools, config, model management, auth, feedback, protocol, and related ownership boundaries (#15919, #16379, #16508, #16523, #16962). | chores |
| 新規クレートフィーチャーのブロックと定例の `--all-features` 実行の廃止により Rust CI とワークスペースのガードレールを簡略化 (#16455, #16473)。 | Rust CI and workspace guardrails were simplified by blocking new crate features and dropping routine `--all-features` runs (#16455, #16473). | chores |
| 頻繁に使用されるツール／タスク抽象から高コストな async-trait 展開を削除し、コアのコンパイル時間を短縮 (#16630, #16631)。 | Core compile times were reduced by removing expensive async-trait expansion from hot tool/task abstractions (#16630, #16631). | chores |
| コンパクトな実行ログ、リポジトリキャッシュの永続化、リモートダウンローダーサポート、複数のプラットフォーム固有ビルド修正により Bazel の診断と依存関係の配線を改善 (#16577, #16926, #16928, #16634, #16744)。 | Bazel diagnostics and dependency wiring improved with compact execution logs, repository-cache persistence, remote downloader support, and several platform-specific build fixes (#16577, #16926, #16928, #16634, #16744). | chores |

## 0.118.0

| 日本語 | English | Category |
|--------|---------|----------|
| Windowsサンドボックスの実行で、環境変数だけに頼らずOSレベルの通信制御によるプロキシ限定ネットワークを強制可能に。 (#12220) | Windows sandbox runs can now enforce proxy-only networking with OS-level egress rules, instead of relying on environment variables alone. (#12220) | new-features |
| app-serverクライアントがデバイスコードフローによるChatGPTサインインに対応。ブラウザコールバックログインが不安定または利用不可な場合に有効。 (#15525) | App-server clients can now start ChatGPT sign-in with a device code flow, which helps when browser callback login is unreliable or unavailable. (#15525) | new-features |
| `codex exec` がプロンプトと標準入力を併用するワークフローに対応。パイプ入力しながらコマンドライン引数で別途プロンプトを渡すことが可能に。 (#15917) | `codex exec` now supports the prompt-plus-stdin workflow, so you can pipe input and still pass a separate prompt on the command line. (#15917) | new-features |
| カスタムモデルプロバイダーが短命なBearerトークンを動的に取得・更新可能に。設定や環境変数の静的な認証情報に限定されなくなった。 (#16286, #16287, #16288) | Custom model providers can now fetch and refresh short-lived bearer tokens dynamically, instead of being limited to static credentials from config or environment variables. (#16286, #16287, #16288) | new-features |
| プロジェクトローカルの `.codex` ファイルを初回作成時も保護するよう修正。初回書き込みで通常の承認チェックが迂回されていた問題を解消。 (#15067) | Project-local `.codex` files are now protected even on first creation, closing a gap where the initial write could bypass normal approval checks. (#15067) | bug-fixes |
| Linuxサンドボックスの起動が安定化。通常のマルチエントリ `PATH` でも信頼済みシステムの `bwrap` を正しく検出できるよう修正。 (#15791, #15973) | Linux sandbox launches are more reliable because Codex once again finds a trusted system `bwrap` on normal multi-entry `PATH`s. (#15791, #15973) | bug-fixes |
| app-serverバックエンドのTUIで複数のワークフローを修復。フック通知の再生、`/copy` と `/resume <name>` の動作、`/agent` の古いスレッド表示、スキルピッカーの2ページ目以降のスクロールをそれぞれ修正。 (#16013, #16021, #16050, #16014, #16109, #16110) | The app-server-backed TUI regained several missing workflows: hook notifications replay correctly, `/copy` and `/resume <name>` work again, `/agent` no longer shows stale threads, and the skills picker scrolls past the first page. (#16013, #16021, #16050, #16014, #16109, #16110) | bug-fixes |
| MCPの起動が安定化。ローカルサーバーの起動待機時間を延長し、ハンドシェイク失敗時に正常起動に見えていた問題を修正してTUIに警告を表示するよう改善。 (#16080, #16041) | MCP startup is more robust: local servers get a longer startup window, and failed handshakes surface warnings in the TUI again instead of looking like clean startups. (#16080, #16041) | bug-fixes |
| Windowsで `apply_patch` が不要な書き込み可能ルートを追加しなくなり、不必要なACL処理によるエラーが発生しにくくなった。 (#16030) | On Windows, `apply_patch` is less likely to fail because it no longer adds redundant writable roots that could trigger unnecessary ACL churn. (#16030) | bug-fixes |

## 0.117.0

| 日本語 | English | Category |
|--------|---------|----------|
| プラグインがファーストクラスのワークフローに昇格：起動時にプロダクトスコープのプラグインを同期し、`/plugins` で一覧表示、より明確な認証・セットアップ処理でインストール・削除に対応。(#15041, #15042, #15195, #15215, #15217, #15264, #15275, #15342, #15580, #15606, #15802) | Plugins are now a first-class workflow: Codex can sync product-scoped plugins at startup, browse them in `/plugins`, and install or remove them with clearer auth/setup handling. (#15041, #15042, #15195, #15215, #15217, #15264, #15275, #15342, #15580, #15606, #15802) | new-features |
| サブエージェントが `/root/agent_a` のような可読なパスベースのアドレスを使用するようになり、マルチエージェント v2 ワークフロー向けに構造化されたエージェント間メッセージングとエージェント一覧表示を追加。(#15313, #15515, #15556, #15570, #15621, #15647) | Sub-agents now use readable path-based addresses like `/root/agent_a`, with structured inter-agent messaging and agent listing for multi-agent v2 workflows. (#15313, #15515, #15556, #15570, #15621, #15647) | new-features |
| `/title` によるターミナルタイトル選択が従来の TUI とアプリサーバー TUI の両方で動作するようになり、並列セッションの識別が容易に。(#12334, #15860) | The `/title` terminal-title picker now works in both the classic TUI and the app-server TUI, making parallel sessions easier to tell apart. (#12334, #15860) | new-features |
| アプリサーバークライアントが `!` シェルコマンドの送信、ファイルシステム変更の監視、Bearer トークン認証によるリモート WebSocket サーバーへの接続に対応。(#14988, #14533, #14847, #14853) | App-server clients can now send `!` shell commands, watch filesystem changes, and connect to remote websocket servers with bearer-token auth. (#14988, #14533, #14847, #14853) | new-features |
| 画像ワークフローを改善：コードモードで `view_image` が画像 URL を返すように変更、生成画像を TUI から再オープン可能に、画像生成履歴がセッション再開後も保持されるように修正。(#15072, #15154, #15223) | Image workflows got smoother: `view_image` now returns image URLs for code mode, generated images are reopenable from the TUI, and image-generation history survives resume. (#15072, #15154, #15223) | new-features |
| アプリサーバー TUI でプロンプト履歴の呼び出しがセッションをまたいで機能するように対応。(#14945) | Prompt history recall now works in the app-server TUI, including across sessions. (#14945) | new-features |
| `tui_app_server` でライブ推論サマリーや `/review` 出力が重複表示される問題を修正、バックプレッシャー時にトランスクリプトテキストが破棄される問題も解消。(#15758, #15839, #15759) | `tui_app_server` no longer duplicates live reasoning summaries or `/review` output, and it preserves transcript text instead of dropping it under backpressure. (#15758, #15839, #15759) | bug-fixes |
| `tui_app_server` での ChatGPT ログインがローカルブラウザを再度開くように修正、`Ctrl+C` でクリーンにキャンセル可能に、ログアウト状態での起動失敗も解消。(#15672, #15673, #15670) | ChatGPT login in `tui_app_server` now opens the local browser again, cancels cleanly on `Ctrl+C`, and no longer fails startup when you're logged out. (#15672, #15673, #15670) | bug-fixes |
| 早期終了時のターミナル状態復元を安定化してシェル破損を回避、tmux ユーザー向けに `Shift+Left` のキューメッセージ編集ショートカットも修正。(#15671, #15480) | Early exits now restore terminal state reliably, avoiding broken shell state after quitting; tmux users also get a working queued-message edit shortcut on `Shift+Left`. (#15671, #15480) | bug-fixes |
| 古い `bubblewrap` を使用する旧ディストリビューションでの Linux サンドボックスツール呼び出しの安定性を改善、Windows の制限トークンサンドボックスでより多くのスプリットポリシーカーブアウトレイアウトに対応。(#15693, #14172) | Linux sandboxed tool calls are more reliable on older distributions with older `bubblewrap`, and Windows restricted-token sandboxing now supports more split-policy carveout layouts. (#15693, #14172) | bug-fixes |
| リモートマルチエージェントセッションでエージェントの生 ID の代わりに名前を表示するように変更、ターンステアリングの競合状態からのより安定した復旧に対応。(#15513, #15714, #15163) | Remote multi-agent sessions now show agent names instead of raw IDs and recover more gracefully from stale turn-steering races. (#15513, #15714, #15163) | bug-fixes |
| プラグインバックのメンション処理とプロダクトゲーティングの動作を改善：明示的なメンションのコンテキストが失われる問題とプラグインが誤ってフィルタリングされる問題を修正。(#15372, #15263, #15279) | Plugin-backed mentions and product gating now behave more predictably, fixing cases where explicit mentions lost context or plugins were filtered incorrectly. (#15372, #15263, #15279) | bug-fixes |
| アプリサーバーおよび exec サーバーのドキュメント・スキーマフィクスチャを拡充：exec サーバーセットアップ、ファイルシステム監視 RPC、リアルタイムトランスクリプト通知、Python の新しい `thread.run(...)` クイックスタートフローを追加。(#15089, #14533, #15344, #15088) | Expanded the app-server and exec-server docs/schema fixtures to cover exec-server setup, filesystem watch RPCs, realtime transcript notifications, and the new Python `thread.run(...)` quickstart flow. (#15089, #14533, #15344, #15088) | documentation |
| アプリサーバーバックの TUI をデフォルトで有効化、通常ビルドでプラグイン・アプリのロールアウトフラグもオンに変更。(#15661, #15713, #15719, #15820) | The app-server-backed TUI is now enabled by default, and the plugin/app rollout flags have been flipped on in normal builds. (#15661, #15713, #15719, #15820) | chores |
| レガシーアーティファクトツールを削除、ツールサーフェス整理の一環として旧 `read_file` および `grep_files` ハンドラを廃止。(#15851, #15864, #15773, #15775) | Removed the legacy artifact tool and retired the old `read_file` and `grep_files` handlers as part of ongoing tool-surface cleanup. (#15851, #15864, #15773, #15775) | chores |

## 0.116.0

| 日本語 | English | Category |
|--------|---------|----------|
| App-server TUI にオンボーディング中のデバイスコード認証による ChatGPT サインインのサポートを追加し、既存の ChatGPT トークンの更新にも対応。(#14952) | App-server TUI now supports device-code ChatGPT sign-in during onboarding and can refresh existing ChatGPT tokens. (#14952) | new-features |
| プラグインのセットアップを改善：不足しているプラグインやコネクタのインストール促進、設定済みサジェストの許可リスト適用、リモートでのインストール/アンインストール状態の同期に対応。(#14896, #15022, #14878) | Plugin setup is smoother: Codex can prompt to install missing plugins or connectors, honor a configured suggestion allowlist, and sync install/uninstall state remotely. (#14896, #15022, #14878) | new-features |
| プロンプトを実行前・履歴への記録前にブロックまたは補完できる `userpromptsubmit` フックを追加。(#14626) | Added a `userpromptsubmit` hook so prompts can be blocked or augmented before execution and before they enter history. (#14626) | new-features |
| リアルタイムセッションの開始時に直近のスレッドコンテキストを反映するよう改善し、音声再生中の自己割り込みを抑制。(#14829, #14827) | Realtime sessions now start with recent thread context and are less likely to self-interrupt during audio playback. (#14829, #14827) | new-features |
| WebSocket のプレウォームが `turn/start` を遅延させる初回ターンのストール問題を修正；起動時にタイムアウトしてクリーンにフォールバックするよう改善。(#14838) | Fixed a first-turn stall where websocket prewarm could delay `turn/start`; startup now times out and falls back cleanly. (#14838) | bug-fixes |
| App-server TUI のリモート再開/フォーク時の会話履歴を復元し、レガシーストリームイベントによる重複ライブ字幕出力を解消。(#14930, #14892) | Restored conversation history for remote resume/fork in the app-server TUI and stopped duplicate live transcript output from legacy stream events. (#14930, #14892) | bug-fixes |
| シンボリックリンクのチェックアウト、書き込み可能ルートの欠如、Ubuntu/AppArmor ホストにおける Linux サンドボックスの起動を改善；利用可能な場合はシステムの `bwrap` を優先使用するよう変更。(#14849, #14890, #14963) | Improved Linux sandbox startup on symlinked checkouts, missing writable roots, and Ubuntu/AppArmor hosts by preferring system `bwrap` when available. (#14849, #14890, #14963) | bug-fixes |
| エージェントジョブのファイナライズ競合状態を修正し、ワーカースレッドのステータスポーリング過多を軽減。(#14843) | Fixed an agent job finalization race and reduced status polling churn for worker threads. (#14843) | bug-fixes |
| 生成された app-server モデルに関する Python SDK の公開 API ドキュメント、サンプル、ウォークスルーを更新。(#14446) | Refreshed the Python SDK public API docs, examples, and walkthrough around the generated app-server models. (#14446) | documentation |
| CI の再現性向上のため、`setup-zig` GitHub Action をイミュータブルな SHA に固定。(#14858) | Pinned the `setup-zig` GitHub Action to an immutable SHA for more reproducible CI. (#14858) | chores |

## 0.115.0

| 日本語 | English | Category |
|--------|---------|----------|
| サポート対象モデルが `view_image` および `codex.emitImage(..., detail: "original")` を通じてフル解像度の画像検査をリクエスト可能になり、精密な視覚タスクに対応。 (#14175) | Supported models can now request full-resolution image inspection through both `view_image` and `codex.emitImage(..., detail: "original")`, which helps with precision visual tasks. (#14175) | new-features |
| `js_repl` に `codex.cwd` と `codex.homeDir` を公開し、保存済みの `codex.tool(...)` / `codex.emitImage(...)` 参照がセル間で継続して機能するように改善。 (#14385, #14503) | `js_repl` now exposes `codex.cwd` and `codex.homeDir`, and saved `codex.tool(...)` / `codex.emitImage(...)` references keep working across cells. (#14385, #14503) | new-features |
| リアルタイム WebSocket セッションに専用の文字起こしモードを追加し、`codex` ツールを通じた v2 ハンドオフと統一された `[realtime]` セッション設定をサポート。 (#14554, #14556, #14606) | Realtime websocket sessions gained a dedicated transcription mode, plus v2 handoff support through the `codex` tool, with a unified `[realtime]` session config. (#14554, #14556, #14606) | new-features |
| v2 アプリサーバーにファイルの読み書き・コピー・ディレクトリ操作・パス監視のファイルシステム RPC を公開し、同 API と連携するための新しい Python SDK を追加。 (#14245, #14435) | The v2 app-server now exposes filesystem RPCs for file reads, writes, copies, directory operations, and path watching, and there is a new Python SDK for integrating with that API. (#14245, #14435) | new-features |
| Smart Approvals がコア・アプリサーバー・TUI においてレビューリクエストをガーディアンサブエージェント経由でルーティング可能になり、フォローアップ承認時の繰り返し設定を削減。 (#13860, #14668) | Smart Approvals can now route review requests through a guardian subagent in core, app-server, and TUI, reducing repeated setup work on follow-up approvals. (#13860, #14668) | new-features |
| アプリ統合で Responses API のツール検索フローを採用し、不足ツールの提案機能を追加、アクティブモデルが検索ベースのルックアップに対応していない場合のフォールバック処理を改善。 (#14274, #14287, #14732) | App integrations now use the Responses API tool-search flow, can suggest missing tools, and fall back cleanly when the active model does not support search-based lookup. (#14274, #14287, #14732) | new-features |
| 生成されたサブエージェントがサンドボックスおよびネットワークルールをより確実に継承するよう改善（プロジェクトプロファイルの階層適用・ホスト承認の永続化・シンボリックリンクによる書き込み可能ルートを含む）。 (#14619, #14650, #14674, #14807) | Spawned subagents now inherit sandbox and network rules more reliably, including project-profile layering, persisted host approvals, and symlinked writable roots. (#14619, #14650, #14674, #14807) | bug-fixes |
| 動的ツールのレスポンスに U+2028 または U+2029 文字が含まれる場合に `js_repl` がハングする問題を修正。 (#14421) | `js_repl` no longer hangs when dynamic tool responses contain literal U+2028 or U+2029 characters. (#14421) | bug-fixes |
| サブエージェント作成後に TUI の終了がスタックする問題を修正し、ターン割り込み時にバックグラウンドターミナルがデフォルトで破棄されないよう変更。 (#14816, #14602) | The TUI no longer stalls on exit after creating subagents, and interrupting a turn no longer tears down background terminals by default. (#14816, #14602) | bug-fixes |
| `codex exec --profile` がスレッドの開始・再開時にプロファイルスコープの設定を正しく保持するよう修正。 (#14524) | `codex exec --profile` once again preserves profile-scoped settings when starting or resuming a thread. (#14524) | bug-fixes |
| MCP およびエリシテーションフローの堅牢性を向上（安全なツール名の正規化・承認プロンプトでの `tool_params` 保持を含む）。 (#14491, #14605, #14769) | MCP and elicitation flows are more robust, with safer tool-name normalization and preserved `tool_params` in approval prompts. (#14491, #14605, #14769) | bug-fixes |
| ローカルネットワークプロキシが CONNECT トラフィックを明示的な HTTP/1 として処理するよう変更し、HTTP プロキシクライアントとの互換性を改善。 (#14395) | The local network proxy now serves CONNECT traffic as explicit HTTP/1, improving compatibility with HTTP proxy clients. (#14395) | bug-fixes |
| サブエージェント待機ツールの名称を `wait_agent` に統一し、`spawn_agent` および `send_input` との命名を整合。 (#14631) | The subagent wait tool is now consistently named `wait_agent`, aligning it with `spawn_agent` and `send_input`. (#14631) | chores |

## 0.114.0

| 日本語 | English | Category |
|--------|---------|----------|
| より独立したコーディングワークフローのための実験的なコードモードを追加。(#13418) | Added an experimental code mode for more isolated coding workflows. (#13418) | new-features |
| `SessionStart` および `Stop` フックイベントを持つ実験的なフックエンジンを追加。(#13276) | Added an experimental hooks engine with `SessionStart` and `Stop` hook events. (#13276) | new-features |
| WebSocket アプリサーバーのデプロイにおいて、同一リスナー上で `GET /readyz` および `GET /healthz` を公開し、ヘルスチェックを容易化。(#13782) | WebSocket app-server deployments now expose `GET /readyz` and `GET /healthz` on the same listener for easier health checks. (#13782) | new-features |
| バンドル済みシステムスキルを完全に無効化する設定スイッチを追加。(#13792) | Added a config switch to disable bundled system skills entirely. (#13792) | new-features |
| ハンドオフ時にリアルタイムのトランスクリプトコンテキストを引き継ぐようにし、ターン間の作業移譲時の継続性を改善。(#14132) | Handoffs now carry realtime transcript context, which improves continuity when work is transferred between turns. (#14132) | new-features |
| `$` メンションピッカーにおいてスキル・アプリ・プラグインのラベルを明確化し、プラグインを優先表示するよう改善。(#14147, #14163) | Improved the `$` mention picker by clearly labeling Skills, Apps, and Plugins, and by surfacing plugins first. (#14147, #14163) | new-features |
| Linux 環境で並行ユーザーシェル検索により発生する `tmux` クラッシュを修正。(#13900) | Fixed a Linux `tmux` crash caused by concurrent user-shell lookups. (#13900) | bug-fixes |
| 有効化チェックを厳格化し、非対応セッションでアプリが有効になる問題を修正。(#14011) | Fixed apps being enabled in unsupported sessions by tightening the enablement check. (#14011) | bug-fixes |
| 実行途中で終了後に再開した際、再オープンされたスレッドが進行中のまま停止する問題を修正。(#14125) | Fixed reopened threads getting stuck as in-progress after quitting mid-run and then resuming later. (#14125) | bug-fixes |
| レガシーの `workspace-write` 動作を維持しつつ、新しいパーミッションプロファイルが旧ビルドでより安全にデグレードするようパーミッション処理を修正。(#13957, #14107) | Fixed permission handling so legacy `workspace-write` behavior is preserved and newer permission profiles degrade more safely on older builds. (#13957, #14107) | bug-fixes |
| 付与されたパーミッションがターンをまたいで持続し、拒否スタイルの設定や `apply_patch` でも正しく機能するよう承認フローを修正。(#14009, #14055, #14118, #14165) | Fixed approval flows so granted permissions persist across turns, work with reject-style configs, and are honored by `apply_patch`. (#14009, #14055, #14118, #14165) | bug-fixes |
| Python SDK の生成された v2 スキーマ型の基盤を整備し、プラットフォーム固有のランタイムバイナリをピン留め。(#13953) | Laid the groundwork for the Python SDK’s generated v2 schema types and pinned platform-specific runtime binaries. (#13953) | chores |

## 0.113.0

| 日本語 | English | Category |
|--------|---------|----------|
| 実行中のターンがランタイムで追加権限を要求できる組み込み `request_permissions` ツールを追加し、承認コールの新しい TUI レンダリングにも対応。(#13092, #14004) | Added a built-in `request_permissions` tool so running turns can request additional permissions at runtime, with new TUI rendering for those approval calls. (#13092, #14004) | new-features |
| プラグインワークフローを拡張し、厳選マーケットプレイスの検索、`plugin/list` メタデータの充実、インストール時の認証チェック、`plugin/uninstall` エンドポイントを追加。(#13712, #13540, #13685, #14111) | Expanded plugin workflows with curated marketplace discovery, richer `plugin/list` metadata, install-time auth checks, and a `plugin/uninstall` endpoint. (#13712, #13540, #13685, #14111) | new-features |
| アプリサーバーのコマンド実行を stdin/stdout/stderr のストリーミングおよび TTY/PTY サポートで強化し、`exec` を新しいインプロセスアプリサーバーパスに接続。(#13640, #14005) | Upgraded app-server command execution with streaming stdin/stdout/stderr plus TTY/PTY support, and wired `exec` to the new in-process app server path. (#13640, #14005) | new-features |
| Web 検索設定でオン/オフだけでなく、フィルターやロケーションなどのツール設定全体を指定可能に。(#13675) | Web search settings now support full tool configuration (for example filters and location), not just on/off. (#13675) | new-features |
| 新しい permission-profile 設定言語を追加し、より精密なポリシー制御のためにファイルシステム/ネットワークサンドボックスポリシーの処理を分離。(#13434, #13439, #13440, #13448, #13449, #13453) | Added the new permission-profile config language and split filesystem/network sandbox policy plumbing for more precise policy control. (#13434, #13439, #13440, #13448, #13449, #13453) | new-features |
| 画像生成の出力ファイルをカレントワーキングディレクトリに保存するよう変更。(#13607) | Image generation now saves output files into the current working directory. (#13607) | new-features |
| クラウド要件フェッチの認証エラーハンドリングを修正し、401 エラーで汎用的なワークスペース設定エラーの代わりに通常の認証回復メッセージを表示するよう修正。(#14049) | Fixed auth error handling for cloud requirements fetch so 401s trigger the normal auth-recovery messaging instead of a generic workspace-config failure. (#14049) | bug-fixes |
| プロジェクトの信頼確立前に `git` コマンドが実行されないよう、トラストブートストラップを修正。(#13804) | Fixed trust bootstrap to avoid running `git` commands before project trust is established. (#13804) | bug-fixes |
| PTY の `TerminateProcess` 成功ハンドリングの誤りやサンドボックス起動時の cwd バリデーション強化など、Windows 実行時のエッジケースを修正。(#13989, #13833, #13742) | Fixed Windows execution edge cases, including incorrect PTY `TerminateProcess` success handling and stricter sandbox startup cwd validation. (#13989, #13833, #13742) | bug-fixes |
| TUI セッションで厳選プラグインが期待通りに読み込まれるよう、プラグイン起動時の動作を修正。(#14050) | Fixed plugin startup behavior so curated plugins are loaded in TUI sessions as expected. (#14050) | bug-fixes |
| グローバルワイルドカード（`*`）ドメインを拒否しつつスコープ付きワイルドカードは維持することで、ネットワークプロキシポリシーのパース処理を堅牢化。(#13789) | Hardened network proxy policy parsing by rejecting global wildcard (`*`) domains while preserving scoped wildcard support. (#13789) | bug-fixes |
| macOS 自動化権限の承認ペイロードについて、サポートされる両方の入力形式を受け入れるよう互換性を修正。(#13683) | Fixed approval payload compatibility for macOS automation permissions by accepting both supported input shapes. (#13683) | bug-fixes |
| 不要な REPL エラー低減のため、永続バインディングおよび再宣言リカバリに関する `js_repl` のガイダンスを明確化。(#13803) | Clarified `js_repl` guidance for persistent bindings and redeclaration recovery to reduce avoidable REPL errors. (#13803) | documentation |
| ログを専用 SQLite DB に移行、フィードバックログへのタイムスタンプ追加、古いデータの削除、保持期間/行数制限の厳格化により、ログ/ストレージのオーバーヘッドを削減。(#13645, #13688, #13734, #13763, #13772, #13781) | Reduced log/storage overhead by moving logs to a dedicated SQLite DB, adding timestamps to feedback logs, pruning old data, and tightening retention/row limits. (#13645, #13688, #13734, #13763, #13772, #13781) | chores |
| CLI リリースを winget に公開することで、Windows ディストリビューションの自動化を改善。(#12943) | Improved Windows distribution automation by publishing CLI releases to winget. (#12943) | chores |

## 0.112.0

| 日本語 | English | Category |
|--------|---------|----------|
| ユーザーがチャット内でプラグインを直接参照し、関連する MCP/アプリ/スキルのコンテキストを自動インクルードできるよう、`@plugin` メンションを追加。(#13510) | Added `@plugin` mentions so users can reference plugins directly in chat and auto-include their associated MCP/app/skill context. (#13510) | new-features |
| TUI ピッカーフローに最新モデルカタログの変更を反映する新しいモデル選択画面を追加。(#13617) | Added a new model-selection surface update so the latest model catalog changes are surfaced in the TUI picker flow. (#13617) | new-features |
| zsh-fork スキル実行において、実行可能パーミッションプロファイルをターンごとのサンドボックスポリシーに統合し、ツール実行における安全で加算的な権限ハンドリングを実現。(#13496) | Merged executable permission profiles into per-turn sandbox policy for zsh-fork skill execution, allowing safer, additive privilege handling for tool runs. (#13496) | new-features |
| JS REPL の状態管理を修正し、セル実行失敗後も初期化済みのバインディングを維持することで、反復的なセッション中の不安定な再起動を軽減。(#13482) | Fixed JS REPL state handling so previously-initialized bindings persist after a failed cell, reducing brittle restarts during iterative sessions. (#13482) | bug-fixes |
| アプリサーバーのWebSocketを即時切断ではなくグレースフルシャットダウンするため、`SIGTERM` を Ctrl-C と同様に処理するよう変更。(#13594) | Treated `SIGTERM` like Ctrl-C for graceful app-server websocket shutdown instead of abrupt termination behavior. (#13594) | bug-fixes |
| `emitImage` 経由での外部 URL 転送を防ぐため、js_repl の画像出力を `data:` URL のみ受け付けるよう強化。(#13507) | Hardened js_repl image emission to accept only `data:` URLs, preventing external URL forwarding through `emitImage`. (#13507) | bug-fixes |
| Linux bubblewrap サンドボックスが root 所有の呼び出しでも常にユーザー名前空間をアンシェアし、分離の一貫性を維持するよう対応。(#13624) | Ensured Linux bubblewrap sandbox runs always unshare the user namespace to keep isolation consistent even for root-owned invocations. (#13624) | bug-fixes |
| macOS サンドボックスのネットワークおよび unix ソケット処理を Seatbelt で改善し、制約付きサブプロセス環境での信頼性を向上。(#12702) | Improved macOS sandbox network and unix-socket handling in Seatbelt, improving reliability for constrained subprocess environments. (#12702) | bug-fixes |
| ワークフローの早い段階でフィードバック/診断情報を表示し、後続ステップの前に接続状況と診断が確認できるように改善。(#13604) | Surfaced feedback/diagnostics earlier in the workflow so connectivity and diagnostics are visible before later steps. (#13604) | bug-fixes |
| `emitImage` の繰り返し呼び出しに関する説明を含め、js_repl の画像ガイダンス（出力およびエンコードのセマンティクス）を明確化。 (#13639) | Clarified js_repl image guidance (emission and encoding semantics), including clearer usage around repeated `emitImage` calls. (#13639) | documentation |
| TUIテーマピッカーのパスにおける軽微なcodespell警告を修正。(#13605) | Fixed a small codespell warning in the TUI theme picker path. (#13605) | chores |

## 0.111.0

| 日本語 | English | Category |
|--------|---------|----------|
| Fast モードがデフォルトで有効になり、TUI ヘッダーにセッションが Fast モードか Standard モードかを表示。(#13450, #13446) | Fast mode is now enabled by default, and the TUI header shows whether the session is running in Fast or Standard mode. (#13450, #13446) | new-features |
| `js_repl` でローカルの `.js` および `.mjs` ファイルを動的インポート可能になり、REPL からワークスペーススクリプトを再利用しやすく改善。(#13437) | `js_repl` can now dynamically import local `.js` and `.mjs` files, making it easier to reuse workspace scripts from the REPL. (#13437) | new-features |
| セッション開始時に有効なプラグインをモデルへ通知するようになり、インストール済みの MCP・アプリ・スキルの検出を改善。(#13433) | Codex now tells the model which plugins are enabled at session start, improving discovery of installed MCPs, apps, and skills. (#13433) | new-features |
| App-server v2 において MCP elicitation を生イベントではなく構造化されたリクエスト/レスポンスフローとして公開し、クライアント統合を簡素化。(#13425) | App-server v2 now exposes MCP elicitation as a structured request/response flow instead of raw events, which simplifies client integrations. (#13425) | new-features |
| クライアント向けの画像ワークフローサポートを拡張。画像生成イベントのクライアントサイド処理と、画像対応 Web 検索のモデルメタデータに対応。(#13512, #13538) | Expanded image workflow support for clients, including client-side handling of image-generation events and model metadata for image-capable web search. (#13512, #13538) | new-features |
| スレッド再開時に保存済みの git コンテキストを維持しアプリを有効状態に保つことで、`codex resume` 後の破損した状態を回避。(#13504, #13533) | Resuming a thread now preserves its stored git context and keeps apps enabled, avoiding broken state after `codex resume`. (#13504, #13533) | bug-fixes |
| スライドデッキやスプレッドシートの例を含む、アーティファクトワークフロー向けのサンプルスキルドキュメントを追加。(#13525) | Added sample skill documentation for artifact workflows, including slide deck and spreadsheet examples. (#13525) | documentation |

## 0.110.0

| 日本語 | English | Category |
|--------|---------|----------|
| スキル、MCPエントリ、アプリコネクタをコンフィグまたはローカルマーケットプレイスから読み込めるプラグインシステムを追加し、アプリサーバーからプラグインを有効化するインストールエンドポイントを実装。(#12864, #13333, #13401, #13422) | Added a plugin system that can load skills, MCP entries, and app connectors from config or a local marketplace, with an install endpoint for enabling plugins from the app server. (#12864, #13333, #13401, #13422) | new-features |
| TUIマルチエージェントフローを拡張し、承認プロンプト、`/agent`による有効化、明確化されたプロンプト、序数ニックネーム、ロールラベル付きハンドオフコンテキストを追加。(#12995, #13246, #13404, #13412, #13505) | Expanded the TUI multi-agent flow with approval prompts, `/agent`-based enablement, clearer prompts, ordinal nicknames, and role-labeled handoff context. (#12995, #13246, #13404, #13412, #13505) | new-features |
| TUIへの永続的な `/fast` トグルと、アプリサーバーへの `fast` および `flex` サービスティアのサポートを追加。(#13212, #13334, #13391) | Added a persisted `/fast` toggle in the TUI and app-server support for `fast` and `flex` service tiers. (#13212, #13334, #13391) | new-features |
| ワークスペーススコープの書き込み、メモリ設定のリネーム、古い情報や汚染されたデータの保存を防ぐガードレールによりメモリ機能を改善。(#13008, #13088, #13237, #13467) | Improved memories with workspace-scoped writes, renamed memory settings, and guardrails against saving stale or polluted facts. (#13008, #13088, #13237, #13467) | new-features |
| Windows用の直接インストーラースクリプトをリリース成果物に追加。(#12741) | Added a direct Windows installer script to published release artifacts. (#12741) | new-features |
| `@` ファイルメンションにおいて、親ディレクトリの `.gitignore` ルールが有効なリポジトリファイルを隠す問題を修正。(#13250) | Fixed `@` file mentions so parent-directory `.gitignore` rules no longer hide valid repository files. (#13250) | bug-fixes |
| シェル状態の正しい再利用および `/status`・`Esc`・保留メッセージ処理・起動/プロファイルの競合状態を修正し、サブエージェントの速度と安定性を向上。(#12935, #13052, #13130, #13131, #13235, #13240, #13248) | Made sub-agents faster and more reliable by reusing shell state correctly and fixing `/status`, `Esc`, pending-message handling, and startup/profile race conditions. (#12935, #13052, #13130, #13131, #13235, #13240, #13248) | bug-fixes |
| CLIオーバーライドが信頼済みプロジェクトローカルMCPトランスポートに正しく適用されるよう、プロジェクトトラストのパース処理を修正。(#13090) | Fixed project trust parsing so CLI overrides apply correctly to trusted project-local MCP transports. (#13090) | bug-fixes |
| 読み取り専用サンドボックスポリシーにおいて、ネットワークアクセスが明示的に有効化されている場合に正しく保持されるよう修正。(#13409) | Fixed read-only sandbox policies so network access is preserved when it is explicitly enabled. (#13409) | bug-fixes |
| 複数行の環境変数エクスポートのキャプチャとセッション状態におけるWindows状態DBパスの処理を修正。(#12642, #13336) | Fixed multiline environment export capture and Windows state DB path handling in session state. (#12642, #13336) | bug-fixes |
| TUIでターミナルテーマカラーが正しくレンダリングされるよう、ANSI/base16シンタックスハイライトを修正。(#13382) | Fixed ANSI/base16 syntax highlighting so terminal-themed colors render correctly in the TUI. (#13382) | bug-fixes |
| サービスティア、プラグインインストール、未読み込みスレッドのリネーム、新しい `skills/changed` 通知に関するアプリサーバードキュメントを拡充。(#13282, #13391, #13414, #13422) | Expanded app-server docs around service tiers, plugin installation, renaming unloaded threads, and the new `skills/changed` notification. (#13282, #13391, #13414, #13422) | documentation |
| 現行プロトコルへの移行に伴い、レガシーアプリサーバーv1のWebSocket/RPC インターフェースを削除。(#13364, #13375, #13397) | Removed the remaining legacy app-server v1 websocket/RPC surfaces in favor of the current protocol. (#13364, #13375, #13397) | chores |

## 0.107.0

| 日本語 | English | Category |
|--------|---------|----------|
| スレッドをサブエージェントにフォークできるようになり、現在の会話を離れずに作業を分岐しやすくなった。(#12499) | You can now fork a thread into sub-agents, making it easier to branch work without leaving the current conversation. (#12499) | new-features |
| リアルタイム音声セッションでマイクとスピーカーデバイスの選択・設定の永続化が可能になり、文字起こしとの整合性を高めたフォーマットで音声を送信するよう改善。(#12849, #12850, #13030) | Realtime voice sessions now let you pick microphone and speaker devices, persist those choices, and send audio in a format better aligned with transcription. (#12849, #12850, #13030) | new-features |
| カスタムツールがプレーンテキストに限らず、画像などの構造化コンテンツを含むマルチモーダル出力を返せるように対応。(#12948) | Custom tools can now return multimodal output, including structured content like images, instead of being limited to plain text. (#12948) | new-features |
| アプリサーバーがより豊富なモデル可用性とアップグレードメタデータを公開するようになり、TUI がそれを利用してプランで制限されたモデルを限定実行ツールチップで説明するように改善。(#12958, #12972, #13021) | The app server now exposes richer model availability and upgrade metadata, and the TUI uses it to explain plan-gated models with limited-run tooltips. (#12958, #12972, #13021) | new-features |
| メモリが設定可能になり、保存済みメモリ状態を完全リセットするための新コマンド `codex debug clear-memories` を追加。(#12997, #12999, #13002, #13085) | Memories are now configurable, and there is a new `codex debug clear-memories` command to fully reset saved memory state when needed. (#12997, #12999, #13002, #13085) | new-features |
| `thread/resume` による再接続時に、保留中の承認・入力要求を復元するようになり、クライアントの状態不整合を解消。(#12560) | Reconnecting with `thread/resume` now restores pending approval and input requests instead of leaving clients out of sync. (#12560) | bug-fixes |
| `thread/start` が無関係なアプリサーバーリクエストをブロックしなくなり、MCP 認証チェックなどの低速な起動パスでの停止を軽減。(#13033) | `thread/start` no longer blocks unrelated app-server requests, reducing stalls during slow startup paths such as MCP auth checks. (#13033) | bug-fixes |
| インタラクティブなターミナルセッションで最終アシスタント応答が二重に表示される問題を修正。(#13082) | Interactive terminal sessions no longer print the final assistant response twice. (#13082) | bug-fixes |
| 大きな貼り付けコンテンツのプレースホルダーがファイル補完後も正しく保持されるようになり、`0.106.0` からのリグレッションを修正。(#13070) | Large pasted-content placeholders now survive file completion correctly, fixing a regression from `0.106.0`. (#13070) | bug-fixes |
| プラン情報なしで登録された ChatGPT アカウントがアカウント読み込みを正しく処理するようになり、繰り返しログイン問題を修正。(#13072) | ChatGPT accounts that arrive without plan info now handle account reads correctly instead of triggering repeated login issues. (#13072) | bug-fixes |
| TUI における差分レンダリングがテーマカラーをより適切に反映するようになり、Windows Terminal などの低色環境でもより見やすく表示されるよう改善。(#13016, #13037) | Diff rendering in the TUI now respects theme colors better and displays more cleanly in Windows Terminal and other low-color environments. (#13016, #13037) | bug-fixes |
| MCP OAuth ログインフローで、`resource` パラメータを必要とするサーバー向けに設定済みの `oauth_resource` 値を正しく転送するよう修正。(#12866) | MCP OAuth login flows now forward configured `oauth_resource` values correctly for servers that require a `resource` parameter. (#12866) | bug-fixes |
| サンドボックス化されたネットワークアクセスによる依存関係インストール失敗をエスカレーション候補として明確に扱うよう、サンドボックスエスカレーションのガイダンスを更新。(#13051) | Updated sandbox escalation guidance so dependency-install failures caused by sandboxed network access are more clearly treated as escalation candidates. (#13051) | documentation |
| Linux での制限付き読み取り専用処理の改善と Windows での `~/.ssh` などの機密ディレクトリへのアクセス回避により、サンドボックスのファイルシステム動作を強化。(#12369, #12835) | Tightened sandbox filesystem behavior by improving restricted read-only handling on Linux and avoiding sensitive directories like `~/.ssh` on Windows. (#12369, #12835) | chores |
| エスカレートされたシェルコマンドが再実行時にサンドボックス設定を維持するようになり、承認時に意図した制限が失われる問題を修正。(#12839) | Escalated shell commands now keep their sandbox configuration when rerun, closing a gap where approvals could lose the intended restrictions. (#12839) | chores |

## 0.106.0

| 日本語 | English | Category |
|--------|---------|----------|
| macOS および Linux 向け直接インストールスクリプトを追加し、既存のプラットフォームペイロード（`codex` および `rg` を含む）を使用して GitHub リリースアセットとして公開 (#12740) | Added a direct install script for macOS and Linux and publish it as a GitHub release asset, using the existing platform payload (including `codex` and `rg`) (#12740) | new-features |
| app-server v2 スレッド API を拡張し、実験的なスレッドスコープのリアルタイムエンドポイント/通知と、アーカイブせずにライブスレッドをアンロードする `thread/unsubscribe` フローを追加 (#12715, #10954) | Expanded the app-server v2 thread API with experimental thread-scoped realtime endpoints/notifications and a `thread/unsubscribe` flow to unload live threads without archiving them (#12715, #10954) | new-features |
| `js_repl` を `/experimental` に昇格し、ユーザー向け警告付きの起動時互換性チェックを追加、検証済み最小 Node バージョンを `22.22.0` に引き下げ (#12712, #12824, #12857) | Promoted `js_repl` to `/experimental`, added startup compatibility checks with user-visible warnings, and lowered the validated minimum Node version to `22.22.0` (#12712, #12824, #12857) | new-features |
| Default コラボレーションモード（Plan モードのみでなく）でも `request_user_input` を有効化 (#12735) | Enabled `request_user_input` in Default collaboration mode (not just Plan mode) (#12735) | new-features |
| API ユーザー向け CLI モデル一覧に `5.3-codex` を表示 (#12808) | Made `5.3-codex` visible in the CLI model list for API users (#12808) | new-features |
| 差分ベースの忘却と使用状況を考慮したメモリ選択によりメモリ動作を改善 (#12900, #12909) | Improved memory behavior with diff-based forgetting and usage-aware memory selection (#12900, #12909) | new-features |
| タイムアウト関連の HTTP 400 ハンドシェイク失敗時のリトライと、選択モデルが対応している場合の WebSocket v2 優先使用により、リアルタイム WebSocket の信頼性を向上 (#12791, #12838) | Improved realtime websocket reliability by retrying timeout-related HTTP 400 handshake failures and preferring WebSocket v2 when supported by the selected model (#12791, #12838) | bug-fixes |
| サンドボックスラッパーが欠落し、期待されるファイルシステム制限をバイパスしうる zsh-fork シェル実行パスの問題を修正 (#12800) | Fixed a zsh-fork shell execution path that could drop sandbox wrappers and bypass expected filesystem restrictions (#12800) | bug-fixes |
| 過大なペーストによるハングやクラッシュを防ぐため、TUI および app-server に約 100 万文字の入力サイズ上限を追加し、明示的なエラーレスポンスを返すよう対応 (#12823) | Added a shared ~1M-character input size cap in the TUI and app-server to prevent hangs/crashes on oversized pastes, with explicit error responses (#12823) | bug-fixes |
| TUI のローカルファイルリンク表示を改善し、絶対パスを非表示にしつつ行・列参照は表示を維持 (#12705, #12870) | Improved TUI local file-link rendering to hide absolute paths while preserving visible line/column references (#12705, #12870) | bug-fixes |
| TUI でのサブエージェントに対する `Ctrl-C` ハンドリングを修正 (#12911) | Fixed `Ctrl-C` handling for sub-agents in the TUI (#12911) | bug-fixes |
| 認証/オンボーディングフローにおける古いサインイン成功リンクを修正 (#12805) | Fixed a stale sign-in success link in the auth/onboarding flow (#12805) | documentation |
| リモート/デバイス認証ログインシナリオ向け CLI ログインヒントを明確化 (#12813) | Clarified the CLI login hint for remote/device-auth login scenarios (#12813) | documentation |
| 組み込み `codex-network-proxy` のポリシー判定およびブロックに対する構造化 OTEL 監査ログを追加 (#12046) | Added structured OTEL audit logging for embedded `codex-network-proxy` policy decisions and blocks (#12046) | chores |
| `steer` フィーチャーフラグを削除し、TUI コンポーザーで常時有効の steer パスに統一 (#12026) | Removed the `steer` feature flag and standardized on the always-on steer path in the TUI composer (#12026) | chores |
| サブエージェント起動時に高コストな履歴メタデータスキャンをスキップすることでサブエージェントの起動オーバーヘッドを削減 (#12918) | Reduced sub-agent startup overhead by skipping expensive history metadata scans for subagent spawns (#12918) | chores |

## 0.105.0

| 日本語 | English | Category |
|--------|---------|----------|
| TUI でフェンスコードブロックおよび diff のシンタックスハイライトを追加、ライブプレビュー付き `/theme` ピッカーを追加、ライト/ダーク両ターミナル向けのテーマ対応 diff カラーを改善。(#11447, #12581) | The TUI now syntax-highlights fenced code blocks and diffs, adds a `/theme` picker with live preview, and uses better theme-aware diff colors for light and dark terminals. (#11447, #12581) | new-features |
| TUI でスペースバーを長押しすることで音声入力を録音・文字起こしし、プロンプトとして直接入力可能に。(#3381) | You can now dictate prompts by holding the spacebar to record and transcribe voice input directly in the TUI. (#3381) | new-features |
| マルチエージェントワークフローの実行・追跡を改善：`spawn_agents_on_csv` で CSV からの作業展開と進捗/ETA 表示に対応、ニックネーム・改善されたピッカー・子スレッド承認プロンプトの表示によりサブエージェントの追跡が容易に。(#10935, #12320, #12327, #12332, #12570, #12767) | Multi-agent workflows are easier to run and track: `spawn_agents_on_csv` can fan out work from a CSV with built-in progress/ETA, and sub-agents are easier to follow with nicknames, a cleaner picker, and visible child-thread approval prompts. (#10935, #12320, #12327, #12332, #12570, #12767) | new-features |
| TUI に新しい便利コマンドを追加：`/copy` で最新のアシスタント返答全文をコピー、`/clear` および `Ctrl-L` でスレッドコンテキストを保持したままスクリーンをクリア（`/clear` は新規チャット開始も可能）。(#12444, #12520, #12613, #12628) | The TUI picked up new convenience commands: `/copy` copies the latest complete assistant reply, while `/clear` and `Ctrl-L` clear the screen without losing thread context, with `/clear` also able to start a fresh chat. (#12444, #12520, #12613, #12628) | new-features |
| 承認制御をより柔軟化：コマンドに対する追加サンドボックス権限のリクエスト機能を追加、承認を完全に無効にすることなく特定の承認プロンプト種別を自動拒否する設定に対応。(#11871, #12087) | Approval controls are more flexible: Codex can now ask for extra sandbox permissions for a command, and you can auto-reject specific approval prompt types without turning approvals off entirely. (#11871, #12087) | new-features |
| アプリサーバークライアントのスレッド操作を強化：`thread/list` にタイトル検索を追加、read/list レスポンスおよび通知でスレッドステータスを公開、`thread/resume` で最新ターンをインライン返却することで再接続時のデータ損失を軽減。(#11776, #11786, #12578) | App-server clients can do more with threads: `thread/list` can search by title, thread status is exposed in read/list responses and notifications, and `thread/resume` returns the latest turn inline so reconnects are less lossy. (#11776, #11786, #12578) | new-features |
| TUI で折り返し表示された長いリンクのクリック可能性を維持、複数のビューにおける関連するクリッピングおよびレイアウトの問題も修正。(#12067) | Long links in the TUI stay clickable when wrapped, which also fixes related clipping and layout issues in several views. (#12067) | bug-fixes |
| TUI のインタラクションに関する複数のエッジケースを修正：より多くのターミナルでキュー済みメッセージの編集が可能に、最終回答のストリーミング中に Enter を押してもフォローアッププロンプトがスタックしなくなるよう修正、承認ダイアログが正しいリクエスト ID で応答するよう修正。(#12240, #12569, #12746) | Several TUI interaction edge cases were fixed: queued-message editing now works in more terminals, follow-up prompts no longer get stuck if you press Enter while a final answer is still streaming, and approval dialogs now respond with the correct request id. (#12240, #12569, #12746) | bug-fixes |
| チャットコンポーザーの `@` パースの信頼性を向上：`npx -y @scope/pkg@latest` のようなコマンドで誤ってファイルピッカーが開いたり送信がブロックされる問題を修正。(#12643) | `@` parsing in the chat composer is more reliable, so commands like `npx -y @scope/pkg@latest` no longer accidentally open the file picker or block submission. (#12643) | bug-fixes |
| アプリサーバーの WebSocket 処理の堅牢性を向上：切断後もスレッドリスナーを維持するよう改善、Ctrl-C で再起動前に処理中のターンの完了を待機するよう変更、`permessage-deflate` を送信する WebSocket クライアントの接続に対応。(#12373, #12517, #12629) | App-server websocket handling is more robust: thread listeners survive disconnects, Ctrl-C waits for in-flight turns before restarting, and websocket clients that send `permessage-deflate` can connect successfully. (#12373, #12517, #12629) | bug-fixes |
| Linux のサンドボックス化されたコマンドに最小限の `/dev` を提供し、エントロピーや標準デバイスノードを必要とするツールの失敗を修正。(#12081) | Linux sandboxed commands now get a minimal `/dev`, fixing failures in tools that need entropy or other standard device nodes. (#12081) | bug-fixes |
| `js_repl` でキャッチされないカーネル障害のエラー報告を改善、障害後のクリーンな回復に対応、ネストされたツール呼び出しからの `view_image` 結果の正しい添付に対応。(#12636, #12725) | `js_repl` now reports uncaught kernel failures more clearly, recovers cleanly afterward, and correctly attaches `view_image` results from nested tool calls. (#12636, #12725) | bug-fixes |
| Bugcrowd への報告ガイダンスを含む公開セキュリティポリシーを追加。(#12193) | Added a public security policy with Bugcrowd reporting guidance. (#12193) | documentation |
| インストールおよびローカルワークフローのドキュメントを更新：`cargo install --locked cargo-nextest` の使用、および完全なフィーチャーカバレッジが必要な場合を除く通常の `--all-features` ビルドの回避を推奨。(#12377, #12429) | Updated install and local workflow docs to use `cargo install --locked cargo-nextest` and to avoid routine `--all-features` builds unless you specifically need full feature coverage. (#12377, #12429) | documentation |

## 0.104.0

| 日本語 | English | Category |
|--------|---------|----------|
| ネットワークプロキシにおけるWebSocketプロキシ用の `WS_PROXY`/`WSS_PROXY` 環境変数（小文字バリアントを含む）のサポートを追加 | Added `WS_PROXY`/`WSS_PROXY` environment support (including lowercase variants) for websocket proxying in the network proxy. (#11784) | new-features |
| App-server v2 がスレッドのアーカイブ・アーカイブ解除時に通知を送出するようになり、クライアントがポーリング不要で反応可能に | App-server v2 now emits notifications when threads are archived or unarchived, enabling clients to react without polling. (#12030) | new-features |
| Protocol/core が単一シェルコマンド実行フロー内での複数承認に対応するため、コマンド承認に個別の承認IDを保持するよう変更 | Protocol/core now carry distinct approval IDs for command approvals to support multiple approvals within a single shell command execution flow. (#12051) | new-features |
| resume/fork フロー中の cwd 変更プロンプトで `Ctrl+C`/`Ctrl+D` が暗黙的な選択をせずにクリーンに終了するよう修正 | `Ctrl+C`/`Ctrl+D` now cleanly exits the cwd-change prompt during resume/fork flows instead of implicitly selecting an option. (#12040) | bug-fixes |
| レスポンスボディのモデルスラッグではなくレスポンスヘッダーのモデル（およびWebSocketトップレベルイベント）を参照することで、安全性チェックの誤ダウングレード動作を低減 | Reduced false-positive safety-check downgrade behavior by relying on the response header model (and websocket top-level events) rather than the response body model slug. (#12061) | bug-fixes |
| WebSocketプロキシ設定、スレッドアーカイブ・アーカイブ解除通知、コマンド承認IDの配線に関するドキュメントおよびスキーマを更新 | Updated docs and schemas to cover websocket proxy configuration, new thread archive/unarchive notifications, and the command approval ID plumbing. (#11784, #12030, #12051) | documentation |
| 公開済みバージョンへの `npm publish` を試みた際でも Rust リリースワークフローが正常に動作するよう改善 | Made the Rust release workflow resilient to `npm publish` attempts for an already-published version. (#12044) | chores |
| リモートコンパクションテストのモックを標準化し、デフォルトの本番相当の動作に合わせて関連スナップショットを更新 | Standardized remote compaction test mocking and refreshed related snapshots to align with the default production-shaped behavior. (#12050) | chores |

## 0.103.0

| 日本語 | English | Category |
|--------|---------|----------|
| アプリ一覧のレスポンスに`app_metadata`、ブランディング、ラベルなどの詳細情報を追加し、クライアントが追加リクエストなしでより完全なアプリカードを表示可能に。(#11706) | App listing responses now include richer app details (`app_metadata`, branding, and labels), so clients can render more complete app cards without extra requests. (#11706) | new-features |
| コミットの共同作成者帰属を`prepare-commit-msg`フックで管理するよう変更し、`command_attribution`による上書き（デフォルトラベル、カスタムラベル、無効化）に対応。(#11617) | Commit co-author attribution now uses a Codex-managed `prepare-commit-msg` hook, with `command_attribution` override support (default label, custom label, or disable). (#11617) | new-features |
| `remote_models`フィーチャーフラグを削除し、無効時のフォールバックモデルメタデータを排除することでモデル選択の信頼性とパフォーマンスを改善。(#11699) | Removed the `remote_models` feature flag to prevent fallback model metadata when it was disabled, improving model selection reliability and performance. (#11699) | bug-fixes |
| Rust依存関係（`clap`、`env_logger`、`arc-swap`）の更新およびBazelロック状態の定期メンテナンス。(#11888, #11889, #11890, #12032) | Updated Rust dependencies (`clap`, `env_logger`, `arc-swap`) and refreshed Bazel lock state as routine maintenance. (#11888, #11889, #11890, #12032) | chores |
| CIの破損を受け、Rustツールチェーンの`1.93.1`へのバージョンアップをリバート。(#11886, #12035) | Reverted the Rust toolchain bump to `1.93.1` after CI breakage. (#11886, #12035) | chores |

## 0.102.0

| 日本語 | English | Category |
|--------|---------|----------|
| TUIでの権限履歴の表示改善やサンドボックス読み取りアクセス付与のスラッシュコマンド追加など、権限フローを統一化。(#11633, #11512, #11550, #11639) | Added a more unified permissions flow, including clearer permissions history in the TUI and a slash command to grant sandbox read access when directories are blocked. (#11633, #11512, #11550, #11639) | new-features |
| 承認プロンプトにホスト/プロトコルの詳細情報を表示する、構造化されたネットワーク承認処理を導入。(#11672, #11674) | Introduced structured network approval handling, with richer host/protocol context shown directly in approval prompts. (#11672, #11674) | new-features |
| セッション完了シグナルを明示的に送信するようアプリサーバーのファジーファイル検索を拡張し、クライアントがローディング表示を確実に停止可能に。(#10268, #11773) | Expanded app-server fuzzy file search with explicit session-complete signaling so clients can stop loading indicators reliably. (#10268, #11773) | new-features |
| 新しいマルチエージェント命名/設定への移行を含む、設定によるカスタマイズ可能なマルチエージェントロールを追加。(#11917, #11982, #11939, #11918) | Added customizable multi-agent roles via config, including migration toward the new multi-agent naming/config surface. (#11917, #11982, #11939, #11918) | new-features |
| クライアントがモデル再ルーティングイベントを検知・表示できるよう `model/rerouted` 通知を追加。(#12001) | Added a `model/rerouted` notification so clients can detect and render model reroute events explicitly. (#12001) | new-features |
| TUIでの再開・巻き戻しや履歴リプレイ時にリモート画像添付が正しく保持されない問題を修正。(#10590) | Fixed remote image attachments so they persist correctly across resume/backtrack and history replay in the TUI. (#10590) | bug-fixes |
| スクリーンリーダー利用者向けのアニメーション制御が一貫して適用されないTUIアクセシビリティのリグレッションを修正。(#11860) | Fixed a TUI accessibility regression where animation gating for screen reader users was not consistently respected. (#11860) | bug-fixes |
| アクティブなインメモリスレッドへの再参加とスレッド再開の不正ケースの処理を改善するよう、アプリサーバーのスレッド再開動作を修正。(#11756) | Fixed app-server thread resume behavior to correctly rejoin active in-memory threads and tighten invalid resume cases. (#11756) | bug-fixes |
| `model/list` の出力がサーバー側で意図せずフィルタリングされないよう、完全なモデルデータと可視性メタデータを返すよう修正。(#11793) | Fixed `model/list` output to return full model data plus visibility metadata, avoiding unintended server-side filtering. (#11793) | bug-fixes |
| リセット時のハング、インフライトのツールコール競合、`view_image` のパニックパスなど、複数の `js_repl` 安定性問題を修正。(#11932, #11922, #11800, #11796) | Fixed several `js_repl` stability issues, including reset hangs, in-flight tool-call races, and a `view_image` panic path. (#11932, #11922, #11800, #11796) | bug-fixes |
| メンション解析およびアプリ一覧の読み込み/フィルタリング動作におけるアプリ連携のエッジケースを修正。(#11894, #11518, #11697) | Fixed app integration edge cases in mention parsing and app list loading/filtering behavior. (#11894, #11518, #11697) | bug-fixes |
| ユーザーに見えるTUIの変更にスナップショットカバレッジを義務付けるよう、コントリビューターガイドを更新。(#10669) | Updated contributor guidance to require snapshot coverage for user-visible TUI changes. (#10669) | documentation |
| CodexアプリおよびMCPコマンド利用に関するドキュメント/ヘルプテキストを更新。(#11926, #11813) | Updated docs/help text around Codex app and MCP command usage. (#11926, #11813) | documentation |
| `just log --search` および `just log --compact` モードを追加し、開発者向けログツールを改善。(#11995, #11994) | Improved developer log tooling with new `just log --search` and `just log --compact` modes. (#11995, #11994) | chores |
| ベンダー管理の `rg` を更新し、依存関係のずれを減らすためBazel/Cargoロックファイルの同期チェックを強化。(#12007, #11790) | Updated vendored `rg` and tightened Bazel/Cargo lockfile sync checks to reduce dependency drift. (#12007, #11790) | chores |

## 0.101.0

| 日本語 | English | Category |
|--------|---------|----------|
| メモリファイルに作業ディレクトリを含めるよう変更し、異なるプロジェクトディレクトリ間を切り替えた際のメモリ動作を改善 (#11591) | Memory files now include the working directory in stored context, improving memory behavior when switching between different project directories. (#11591) | new-features |
| モデル解決時にプレフィックスで選択した場合も、要求されたモデルスラッグを保持するよう変更し、モデル参照が書き換えられずに安定するよう改善 (#11602) | Model resolution now preserves the requested model slug when selecting by prefix, so model references stay stable instead of being rewritten. (#11602) | bug-fixes |
| 開発者メッセージをフェーズ1のメモリ入力から除外し、ノイズや無関係なコンテンツがメモリに入るのを削減 (#11608) | Developer messages are now excluded from phase-1 memory input, reducing noisy or irrelevant content entering memory. (#11608) | bug-fixes |
| メモリフェーズ処理の並行性を削減し、負荷時の統合/ステージング処理をより安定化 (#11614) | Memory phase processing concurrency was reduced to make consolidation/staging more stable under load. (#11614) | bug-fixes |
| フェーズ1メモリパイプラインのコードパスをクリーンアップし簡素化 (#11605) | Cleaned and simplified the phase-1 memory pipeline code paths. (#11605) | chores |
| リポジトリメンテナンス: リモートモデルテストのフォーマットとテストスイート整備を更新 (#11619) | Minor repository maintenance: formatting and test-suite hygiene updates in remote model tests. (#11619) | chores |

## 0.100.0

| 日本語 | English | Category |
|--------|---------|----------|
| ツールコール間で状態を永続化できる実験的なフィーチャーゲート付きJavaScript REPLランタイム（`js_repl`）を追加し、オプションでランタイムパスのオーバーライドに対応（#10674） | Added an experimental, feature-gated JavaScript REPL runtime (`js_repl`) that can persist state across tool calls, with optional runtime path overrides. (#10674) | new-features |
| プロトコル、バックエンドクライアント、TUIステータス画面全体で複数の同時レート制限をサポート（#11260） | Added support for multiple simultaneous rate limits across the protocol, backend client, and TUI status surfaces. (#11260) | new-features |
| アプリサーバーWebSocket転送を受信/送信分離アーキテクチャで再導入し、接続を認識するスレッド再開サブスクリプションを追加（#11370、#11474） | Reintroduced app-server websocket transport with a split inbound/outbound architecture, plus connection-aware thread resume subscriptions. (#11370, #11474) | new-features |
| TUIにメモリ管理スラッシュコマンド（`/m_update`、`/m_drop`）を追加し、メモリ読み取り/メトリクス処理を拡張（#11569、#11459、#11593） | Added memory management slash commands in the TUI (`/m_update`, `/m_drop`) and expanded memory-read/metrics plumbing. (#11569, #11459, #11593) | new-features |
| ChatGPTコネクタ処理でApps SDKアプリを有効化（#11486） | Enabled Apps SDK apps in ChatGPT connector handling. (#11486) | new-features |
| LinuxとWindows両方でサンドボックス機能を昇格し、読み取りアクセスを設定可能な新しい`ReadOnlyAccess`ポリシー形式を導入（#11381、#11341、#11387） | Promoted sandbox capabilities on both Linux and Windows, and introduced a new `ReadOnlyAccess` policy shape for configurable read access. (#11381, #11341, #11387) | new-features |
| WebSocketのインクリメンタル出力の重複を修正し、`response.completed`後の追加を防止、`response.incomplete`をエラーパスとして処理（#11383、#11402、#11558） | Fixed websocket incremental output duplication, prevented appends after `response.completed`, and treated `response.incomplete` as an error path. (#11383, #11402, #11558) | bug-fixes |
| アイドル時のping処理を継続し、高速再接続時のノイズの多い初回リトライエラーを抑制することでWebSocketセッションの安定性を改善（#11413、#11548） | Improved websocket session stability by continuing ping handling when idle and suppressing noisy first-retry errors during quick reconnects. (#11413, #11548) | bug-fixes |
| 欠落したロールアウトファイルを削除し、スレッド一覧表示時に古いDBメタデータをクリーンアップすることで古いスレッドエントリを修正（#11572） | Fixed stale thread entries by dropping missing rollout files and cleaning stale DB metadata during thread listing. (#11572) | bug-fixes |
| ペースト時のバースト間隔許容値を増加させ、Windows環境のターミナル（特にVS Code統合ターミナル）での複数行ペーストの信頼性を修正（#9348） | Fixed Windows multi-line paste reliability in terminals (especially VS Code integrated terminal) by increasing paste burst timing tolerance. (#9348) | bug-fixes |
| 部分的なレート制限更新をマージする際の`limit_name`の誤った継承を修正（#11557） | Fixed incorrect inheritance of `limit_name` when merging partial rate-limit updates. (#11557) | bug-fixes |
| ファイルウォッチャーのデバウンスを1秒から10秒に増加させ、アクティブな編集中のスキルパースエラーの繰り返しスパムを削減（#11494） | Reduced repeated skill parse-error spam during active edits by increasing file-watcher debounce from 1s to 10s. (#11494) | bug-fixes |
| 機能の有効化と設定のためのJavaScript REPLドキュメントと設定/スキーマガイダンスを追加（#10674） | Added JS REPL documentation and config/schema guidance for enabling and configuring the feature. (#10674) | documentation |
| アプリサーバーREADMEにアプリサーバーWebSocket転送のドキュメントを更新（#11370） | Updated app-server websocket transport documentation in the app-server README. (#11370) | documentation |
| Rustワークスペースコンポーネント間の依存関係境界を簡素化するため、`codex-common`を集中化された`codex-utils-*`クレートに分割（#11422） | Split `codex-common` into focused `codex-utils-*` crates to simplify dependency boundaries across Rust workspace components. (#11422) | chores |
| 並列Windowsビルドとmuslリンク修正を含め、WindowsおよびmuslターゲットのRustリリースパイプラインのスループットと信頼性を改善（#11488、#11500、#11556） | Improved Rust release pipeline throughput and reliability for Windows and musl targets, including parallel Windows builds and musl link fixes. (#11488, #11500, #11556) | chores |
| 重複する`cargo-timing.html`アーティファクトを除外し、GitHubリリースアセットアップロードの衝突を防止（#11564） | Prevented GitHub release asset upload collisions by excluding duplicate `cargo-timing.html` artifacts. (#11564) | chores |

## 0.99.0

| 日本語 | English | Category |
|--------|---------|----------|
| 実行中のターン中に直接シェルコマンドを実行しても中断されなくなり、ターンがアクティブな状態でコマンドを同時実行可能に (#10513) | Running direct shell commands no longer interrupts an in-flight turn; commands can execute concurrently when a turn is active. (#10513) | new-features |
| TUIフッターに表示するメタデータを対話的に設定できる `/statusline` を追加 (#10546) | Added `/statusline` to configure which metadata appears in the TUI footer interactively. (#10546) | new-features |
| TUI再開ピッカーで作成時刻と最終更新時刻の並び順を切り替え可能に、ピッカー内にモード表示を追加 (#10752) | The TUI resume picker can now toggle sort order between creation time and last-updated time with an in-picker mode indicator. (#10752) | new-features |
| app-serverクライアント向けに、アクティブターンの制御、実験的機能の一覧表示、エージェント再開、特定通知のオプトアウト用の専用APIを追加 (#10721, #10821, #10903, #11319) | App-server clients now get dedicated APIs for steering active turns, listing experimental features, resuming agents, and opting out of specific notifications. (#10721, #10821, #10903, #11319) | new-features |
| エンタープライズ/管理者要件で `requirements.toml` を通じてWeb検索モードの制限とネットワーク制約の定義が可能に (#10964, #10958) | Enterprise/admin requirements can now restrict web search modes and define network constraints through `requirements.toml`. (#10964, #10958) | new-features |
| 画像添付で既存形式に加えてGIFとWebP入力に対応 (#11237) | Image attachments now accept GIF and WebP inputs in addition to existing formats. (#11237) | new-features |
| シェル環境と `rc` ファイルのスナップショット機能を有効化 (#11172) | Enable snapshotting of the shell environment and `rc` files (#11172) | new-features |
| Windows起動時にバッファされたキー入力によってTUIサインインフローが即座に終了する問題を修正 (#10729) | Fixed a Windows startup issue where buffered keypresses could cause the TUI sign-in flow to exit immediately. (#10729) | bug-fixes |
| 必須MCPサーバーが起動/再開フロー中に破損状態で継続せず、即座に失敗するように修正 (#10902) | Required MCP servers now fail fast during start/resume flows instead of continuing in a broken state. (#10902) | bug-fixes |
| スキルリロードイベントの誤発生と非常に大きなログファイルが生成される可能性があったファイルウォッチャーのバグを修正 (#11217) | Fixed a file-watcher bug that emitted spurious skills reload events and could generate very large log files. (#11217) | bug-fixes |
| TUI入力の信頼性を改善: 長いオプションラベルの正しい折り返し、アイドル時のステアモードでのTab送信、履歴呼び出し時のカーソル位置の一貫性維持、保存された下書きの画像プレースホルダーの正しい復元 (#11123, #10035, #11295, #9040) | Improved TUI input reliability: long option labels wrap correctly, Tab submits in steer mode when idle, history recall keeps cursor placement consistent, and stashed drafts restore image placeholders correctly. (#11123, #10035, #11295, #9040) | bug-fixes |
| テキスト専用モデルでの `view_image` エラーの明確化とモデル切り替え時のサポート外画像履歴の除去により、モデルモダリティのエッジケースを修正 (#11336, #11349) | Fixed model-modality edge cases by surfacing clearer `view_image` errors on text-only models and stripping unsupported image history during model switches. (#11336, #11349) | bug-fixes |
| ラップ/heredocシェルコマンドの誤った承認ミスマッチを削減し、exec ポリシー評価時の空コマンドリストに対するガードを追加 (#10941, #11397) | Reduced false approval mismatches for wrapped/heredoc shell commands and guarded against empty command lists in exec policy evaluation. (#10941, #11397) | bug-fixes |
| `turn/steer`、実験的機能の検出、`resume_agent`、通知オプトアウト、null `developer_instructions` 正規化に関するapp-serverドキュメントとプロトコルリファレンスを拡充 (#10721, #10821, #10903, #10983, #11319) | Expanded app-server docs and protocol references for `turn/steer`, experimental-feature discovery, `resume_agent`, notification opt-outs, and null `developer_instructions` normalization. (#10721, #10821, #10903, #10983, #11319) | documentation |
| 下書き/画像復元、ステアモードでのTab送信動作、履歴ナビゲーションのカーソルセマンティクスを反映してTUIコンポーザードキュメントを更新 (#9040, #10035, #11295) | Updated TUI composer docs to reflect draft/image restoration, steer-mode Tab submit behavior, and history-navigation cursor semantics. (#9040, #10035, #11295) | documentation |
| npmリリースパッケージングを再構築し、プラットフォーム固有のバイナリを `@openai/codex` dist-tags経由で配布することでパッケージサイズの負担を軽減しつつ、プラットフォーム固有のインストール（`@alpha` 含む）を維持 (#11318, #11339) | Reworked npm release packaging so platform-specific binaries are distributed via `@openai/codex` dist-tags, reducing package-size pressure while preserving platform-specific installs (including `@alpha`). (#11318, #11339) | chores |
| `time` のセキュリティ関連の依存関係更新を適用 (RUSTSEC-2026-0009) (#10876) | Pulled in a security-driven dependency update for `time` (RUSTSEC-2026-0009). (#10876) | chores |

## 0.98.0

| 日本語 | English | Category |
|--------|---------|----------|
| GPT-5.3-Codex を導入。[詳細はこちら](https://openai.com/index/introducing-gpt-5-3-codex/) | Introducing GPT-5.3-Codex. [Learn More](https://openai.com/index/introducing-gpt-5-3-codex/) | new-features |
| ステアモードが安定版となりデフォルトで有効化され、タスク実行中は `Enter` で即座に送信、`Tab` で明示的にフォローアップ入力をキューに追加 (#10690) | Steer mode is now stable and enabled by default, so `Enter` sends immediately during running tasks while `Tab` explicitly queues follow-up input. (#10690) | new-features |
| TypeScript SDK の `resumeThread()` 引数順序を修正し、ローカル画像での再開時に意図しない新規セッションが開始されなくなった (#10709) | Fixed `resumeThread()` argument ordering in the TypeScript SDK so resuming with local images no longer starts an unintended new session. (#10709) | bug-fixes |
| 会話途中でのモデル変更や異なるモデルでの再開時のモデル命令処理を修正し、正しい開発者命令が適用されるようになった (#10651, #10719) | Fixed model-instruction handling when changing models mid-conversation or resuming with a different model, ensuring the correct developer instructions are applied. (#10651, #10719) | bug-fixes |
| リモート圧縮時の不整合を修正し、トークン事前推定と圧縮ペイロード生成で同じベース命令を使用することで、トリム精度を向上させコンテキストオーバーフローを回避 (#10692) | Fixed a remote compaction mismatch where token pre-estimation and compact payload generation could use different base instructions, improving trim accuracy and avoiding context overflows. (#10692) | bug-fixes |
| クラウド要件がログイン後に即座にリロードされるようになり、後続のリフレッシュパスを待つ必要がなくなった (#10725) | Cloud requirements now reload immediately after login instead of requiring a later refresh path to take effect. (#10725) | bug-fixes |
| デフォルトのアシスタントパーソナリティを Pragmatic に復元し、設定および関連するテスト/UI スナップショットに適用 (#10705) | Restored the default assistant personality to Pragmatic across config and related tests/UI snapshots. (#10705) | chores |
| コラボレーションモードの命名とメタデータをプロンプト、ツール、プロトコルタイプ、TUI ラベル全体で統一し、モード動作とメッセージングの一貫性を向上 (#10666) | Unified collaboration mode naming and metadata across prompts, tools, protocol types, and TUI labels for more consistent mode behavior and messaging. (#10666) | chores |

## 0.97.0

| 日本語 | English | Category |
|--------|---------|----------|
| MCP/アプリツール承認に対してセッション単位の「許可して記憶」オプションを追加し、同じツールへの繰り返し呼び出しをセッション中に自動承認可能に (#10584) | Added a session-scoped “Allow and remember” option for MCP/App tool approvals, so repeated calls to the same tool can be auto-approved during the session. (#10584) | new-features |
| スキルファイルの変更を再起動なしで検出するライブスキル更新検出機能を追加 (#10478) | Added live skill update detection, so skill file changes are picked up without restarting. (#10478) | new-features |
| アプリサーバー統合において動的ツール出力でテキストと画像の混合コンテンツをサポート (#10567) | Added support for mixed text and image content in dynamic tool outputs for app-server integrations. (#10567) | new-features |
| 有効な設定を検査するための新しい `/debug-config` スラッシュコマンドを TUI に追加 (#10642) | Added a new `/debug-config` slash command in the TUI to inspect effective configuration. (#10642) | new-features |
| スレッドメモリサマリーをサポートするための初期メモリ配管（API クライアント + ローカル永続化）を導入 (#10629, #10634) | Introduced initial memory plumbing (API client + local persistence) to support thread memory summaries. (#10629, #10634) | new-features |
| ログをより簡単にリダイレクト可能にするため（`-c` オーバーライドを含む）設定可能な `log_dir` を追加 (#10678) | Added configurable `log_dir` so logs can be redirected (including via `-c` overrides) more easily. (#10678) | new-features |
| 説明列のレンダリングを安定化させ TUI アプリ/コネクタピッカーのジッターを修正 (#10593) | Fixed jitter in the TUI apps/connectors picker by stabilizing description-column rendering. (#10593) | bug-fixes |
| プリアンブルおよび初期実行フロー中の TUI 「動作中」ステータスインジケーター/シマーを復元して安定化 (#10700, #10701) | Restored and stabilized the TUI “working” status indicator/shimmer during preamble and early exec flows. (#10700, #10701) | bug-fixes |
| より高いタイムアウト、リトライ、および MDM 設定に対する正しい優先順位によりクラウド要件の信頼性を改善 (#10631, #10633, #10659) | Improved cloud requirements reliability with higher timeouts, retries, and corrected precedence over MDM settings. (#10631, #10633, #10659) | bug-fixes |
| ターン途中で注入された入力処理のため、保留中の入力ユーザーイベントをより一貫して永続化 (#10656) | Persisted pending-input user events more consistently for mid-turn injected input handling. (#10656) | bug-fixes |
| 実験的なアプリサーバー API へのオプトイン方法を文書化 (#10667) | Documented how to opt in to the experimental app-server API. (#10667) | documentation |
| 新しい `log_dir` 設定動作に関するドキュメント/スキーマのカバレッジを更新 (#10678) | Updated docs/schema coverage for new `log_dir` configuration behavior. (#10678) | documentation |
| ファイルシステム分離オプションを改善するため、ゲート付き Bubblewrap (`bwrap`) Linux サンドボックスパスを追加 (#9938) | Added a gated Bubblewrap (`bwrap`) Linux sandbox path to improve filesystem isolation options. (#9938) | chores |
| モデルクライアントのライフサイクルをセッションスコープにリファクタリングし、暗黙的なクライアント状態を削減 (#10595, #10664) | Refactored model client lifecycle to be session-scoped and reduced implicit client state. (#10595, #10664) | chores |
| 多くのアプリをインストールしているユーザーの繰り返しロード遅延を削減するため、アプリからの MCP アクションのキャッシュを追加 (#10662) | Added caching for MCP actions from apps to reduce repeated load latency for users with many installed apps. (#10662) | chores |
| プロトコル/設定サーフェスに `none` パーソナリティオプションを追加 (#10688) | Added a `none` personality option in protocol/config surfaces. (#10688) | chores |

## 0.96.0

| 日本語 | English | Category |
|--------|---------|----------|
| `thread/compact` を v2 app-server API に非同期トリガー RPC として追加し、クライアントが圧縮を即座に開始して完了を別途追跡可能にした (#10445) | Added `thread/compact` to the v2 app-server API as an async trigger RPC, so clients can start compaction immediately and track completion separately. (#10445) | new-features |
| 新しい `codex.rate_limits` イベントを介した WebSocket 側のレート制限シグナリングを追加し、ETag/reasoning メタデータ処理で WebSocket のパリティを実現 (#10324) | Added websocket-side rate limit signaling via a new `codex.rate_limits` event, with websocket parity for ETag/reasoning metadata handling. (#10324) | new-features |
| Windows 以外のすべてのプラットフォームで `unified_exec` を有効化 (#10641) | Enabled `unified_exec` on all non-Windows platforms. (#10641) | new-features |
| 制約された要件値にソース来歴を含めるようにし、`/debug-config` などの UI フローでソースを意識した設定デバッグを可能にした (#10568) | Constrained requirement values now include source provenance, enabling source-aware config debugging in UI flows like `/debug-config`. (#10568) | new-features |
| TUI の `request_user_input` オーバーレイでの `Esc` 処理を修正: ノートが開いている場合、`Esc` はセッションを中断する代わりにノートモードを終了するように変更 (#10569) | Fixed `Esc` handling in the TUI `request_user_input` overlay: when notes are open, `Esc` now exits notes mode instead of interrupting the session. (#10569) | bug-fixes |
| スレッド一覧は、最初に状態 DB をクエリ(アーカイブされたスレッドを含む)し、必要な場合にのみファイルシステム走査にフォールバックするようにし、一覧表示の正確性と耐障害性を向上 (#10544) | Thread listing now queries the state DB first (including archived threads) and falls back to filesystem traversal only when needed, improving listing correctness and resilience. (#10544) | bug-fixes |
| スレッドパス検索を修正し、解決されたファイルが実際に存在することを要求するようにし、無効なスレッド ID 解決を防止 (#10618) | Fixed thread path lookup to require that the resolved file actually exists, preventing invalid thread-id resolutions. (#10618) | bug-fixes |
| 動的ツール注入を単一トランザクションで実行し、部分的な状態更新を回避 (#10614) | Dynamic tool injection now runs in a single transaction to avoid partial state updates. (#10614) | bug-fixes |
| 承認ポリシーのプロンプトで使用される `request_rule` ガイダンスを改良し、ルールの動作を修正 (#10379, #10598) | Refined `request_rule` guidance used in approval-policy prompting to correct rule behavior. (#10379, #10598) | bug-fixes |
| `thread/compact` の app-server ドキュメントを更新し、非同期動作とスレッドビジーライフサイクルを明確化 (#10445) | Updated app-server docs for `thread/compact` to clarify its asynchronous behavior and thread-busy lifecycle. (#10445) | documentation |
| TUI ドキュメントを更新し、`request_user_input` でのモード固有の `Esc` 動作に対応 (#10569) | Updated TUI docs to match the mode-specific `Esc` behavior in `request_user_input`. (#10569) | documentation |
| 状態 DB ヘルパーをバージョン管理された SQLite ファイル名スキームに移行し、ランタイム初期化中にレガシー状態ファイルをクリーンアップ (#10623) | Migrated state DB helpers to a versioned SQLite filename scheme and cleaned up legacy state files during runtime initialization. (#10623) | chores |
| ランタイムテレメトリーに WebSocket タイミングメトリクスを追加し、コアクライアント配管の内部メタデータフローを簡素化 (#10577, #10589) | Expanded runtime telemetry with websocket timing metrics and simplified internal metadata flow in core client plumbing. (#10577, #10589) | chores |

## 0.95.0

| 日本語 | English | Category |
|--------|---------|----------|
| macOS において `codex app <path>` を追加。CLI から Codex Desktop を起動し、不足している場合は DMG を自動ダウンロード (#10418) | Added `codex app <path>` on macOS to launch Codex Desktop from the CLI, with automatic DMG download if it is missing. (#10418) | new-features |
| `~/.agents/skills` からの個人スキル読み込みに対応（`~/.codex/skills` との互換性あり）。加えて、公開リモートスキルの一覧表示・ダウンロード用 app-server API/イベントを追加 (#10437, #10448) | Added personal skill loading from `~/.agents/skills` (with `~/.codex/skills` compatibility), plus app-server APIs/events to list and download public remote skills. (#10437, #10448) | new-features |
| `/plan` がインライン引数と画像の貼り付けに対応。TUI におけるスラッシュコマンドの編集・ハイライトを改善 (#10269) | `/plan` now accepts inline prompt arguments and pasted images, and slash-command editing/highlighting in the TUI is more polished. (#10269) | new-features |
| シェル関連ツールの並列実行に対応し、複数コマンド実行のスループットを向上 (#10505) | Shell-related tools can now run in parallel, improving multi-command execution throughput. (#10505) | new-features |
| シェル実行時に `CODEX_THREAD_ID` を受け取るよう変更。スクリプトとスキルがアクティブなスレッド/セッションを検知可能に (#10096) | Shell executions now receive `CODEX_THREAD_ID`, so scripts and skills can detect the active thread/session. (#10096) | new-features |
| Linux サンドボックスに Bubblewrap のベンダー版と FFI 配線を追加。今後のランタイム統合の基盤として導入 (#10413) | Added vendored Bubblewrap + FFI wiring in the Linux sandbox as groundwork for upcoming runtime integration. (#10413) | new-features |
| Git コマンドの安全性を強化。破壊的操作や書き込み可能な呼び出しが承認チェックをバイパスしないよう修正 (#10258) | Hardened Git command safety so destructive or write-capable invocations no longer bypass approval checks. (#10258) | bug-fixes |
| 再開/スレッド閲覧の信頼性を改善。保存されたスレッド名を正しく表示し、スレッド一覧の動作を修正 (#10340, #10383) | Improved resume/thread browsing reliability by correctly showing saved thread names and fixing thread listing behavior. (#10340, #10383) | bug-fixes |
| 初回実行時の trust-mode 処理を修正し、サンドボックスモードを一貫して報告。`$PWD/.agents` を `$PWD/.codex` 同様に読み取り専用に変更 (#10415, #10524) | Fixed first-run trust-mode handling so sandbox mode is reported consistently, and made `$PWD/.agents` read-only like `$PWD/.codex`. (#10415, #10524) | bug-fixes |
| websocket/ストリーミングフローにおいて、割り込み後に `codex exec` がハングする問題を修正。割り込まれたターンをクリーンにシャットダウン (#10519) | Fixed `codex exec` hanging after interrupt in websocket/streaming flows; interrupted turns now shut down cleanly. (#10519) | bug-fixes |
| review-mode の承認イベント配線を改善。`requestApproval` ID を対応するコマンド実行アイテムと整合 (#10416) | Fixed review-mode approval event wiring so `requestApproval` IDs align with the corresponding command execution items. (#10416) | bug-fixes |
| 401 エラー診断を改善。サーバーメッセージ/ボディ詳細に加え、`cf-ray` と `requestId` を含めるよう変更 (#10508) | Improved 401 error diagnostics by including server message/body details plus `cf-ray` and `requestId`. (#10508) | bug-fixes |
| TUI チャットコンポーザーのドキュメントを拡充。plan/review フローにおけるスラッシュコマンド引数と添付ファイル処理を説明 (#10269) | Expanded TUI chat composer docs to cover slash-command arguments and attachment handling in plan/review flows. (#10269) | documentation |
| issue テンプレートとラベラープロンプトを刷新。CLI/app のバグ報告と機能リクエストをより明確に分離 (#10411, #10453, #10548, #10552) | Refreshed issue templates and labeler prompts to better separate CLI/app bug reporting and feature requests. (#10411, #10453, #10548, #10552) | documentation |
| 非推奨の `mcp-types` クレートから `rmcp` ベースのプロトコル型/アダプターへの移行を完了し、レガシークレートを削除 (#10356, #10349, #10357) | Completed migration off the deprecated `mcp-types` crate to `rmcp`-based protocol types/adapters, then removed the legacy crate. (#10356, #10349, #10357) | chores |
| セキュリティアドバイザリに対応するため `bytes` 依存関係を更新し、解決済みアドバイザリ設定をクリーンアップ (#10525) | Updated the `bytes` dependency for a security advisory and cleaned up resolved advisory configuration. (#10525) | chores |

## 0.94.0

| 日本語 | English | Category |
|--------|---------|----------|
| プランモードがデフォルトで有効化され、プランプロンプトでのインタラクションガイダンスを更新 (#10313, #10308, #10329) | Plan mode is now enabled by default with updated interaction guidance in the plan prompt. (#10313, #10308, #10329) | new-features |
| パーソナリティ設定が安定版に：デフォルトは friendly、設定キーは `personality`、既存設定は自動移行 (#10305, #10314, #10310, #10307) | Personality configuration is now stable: default is friendly, the config key is `personality`, and existing settings migrate forward. (#10305, #10314, #10310, #10307) | new-features |
| スキルを `.agents/skills` から読み込み可能に、相対パス指示を明確化しネストフォルダマーカーに対応 (#10317, #10282, #10350) | Skills can be loaded from `.agents/skills`, with clearer relative-path instructions and nested-folder markers supported. (#10317, #10282, #10350) | new-features |
| コンソール出力にランタイムメトリクスを追加し診断を容易化 (#10278) | Console output now includes runtime metrics for easier diagnostics. (#10278) | new-features |
| スレッドのアーカイブ解除時にタイムスタンプを更新しサイドバーの並び順を反映 (#10280) | Unarchiving a thread updates its timestamp so sidebar ordering refreshes. (#10280) | bug-fixes |
| 会話ルール出力に上限を設定し、プレフィックスルールの重複を排除 (#10351, #10309) | Conversation rules output is capped and prefix rules are deduped to avoid repeated rules. (#10351, #10309) | bug-fixes |
| オーバーライドターンコンテキストで余分なアイテムが追加されなくなった (#10354) | Override turn context no longer appends extra items. (#10354) | bug-fixes |
| npm README 内の壊れた画像リンクを修正 (#10303) | Fixed a broken image link in the npm README. (#10303) | documentation |

## 0.93.0

| 日本語 | English | Category |
|--------|---------|----------|
| SOCKS5プロキシリスナーをポリシー制御と設定ゲーティング機能付きで追加 (#9803) | Added an optional SOCKS5 proxy listener with policy enforcement and config gating. (#9803) | new-features |
| プランモードで提案されたプランを専用TUIビューにストリーミング表示、クイックモード切替用の`/plan`ショートカットを機能ゲート追加 (#9786, #10103) | Plan mode now streams proposed plans into a dedicated TUI view, plus a feature-gated `/plan` shortcut for quick mode switching. (#9786, #10103) | new-features |
| TUIでコネクタを参照する`/apps`と、アプリプロンプト挿入用の`$`記法を追加 (#9728) | Added `/apps` to browse connectors in TUI and `$` insertion for app prompts. (#9728) | new-features |
| app-serverが外部認証モードで動作可能に、ホストアプリからChatGPT認証トークンを受け取り、必要時に更新を要求 (#10012) | App-server can now run in external auth mode, accepting ChatGPT auth tokens from a host app and requesting refreshes when needed. (#10012) | new-features |
| スマート承認をデフォルトで有効化、MCPツール呼び出し時に明示的な承認プロンプトを表示 (#10286, #10200) | Smart approvals are now enabled by default, with explicit approval prompts for MCP tool calls. (#10286, #10200) | new-features |
| SQLiteベースのログデータベースを導入、ログクライアント改善、thread-idフィルタリング、保持期間設定、ヒューリスティック着色に対応 (#10086, #10087, #10150, #10151, #10229, #10228) | Introduced a SQLite-backed log database with an improved logs client, thread-id filtering, retention, and heuristic coloring. (#10086, #10087, #10150, #10151, #10229, #10228) | new-features |
| MCPツールの画像出力が、画像ブロックが先頭でない場合や部分的に不正な形式でも確実にレンダリング (#9815) | MCP tool image outputs render reliably even when image blocks aren’t first or are partially malformed. (#9815) | bug-fixes |
| 入力履歴の呼び出し時にローカル画像添付とリッチテキスト要素を復元 (#9628) | Input history recall now restores local image attachments and rich text elements. (#9628) | bug-fixes |
| ファイル検索がセッションCWD変更を追跡、マルチルートトラバーサルとパフォーマンス向上に対応 (#9279, #9939, #10240) | File search now tracks session CWD changes and supports multi-root traversal with better performance. (#9279, #9939, #10240) | bug-fixes |
| スレッド再開時に最初のターンが実際に開始されるまで`updated_at`を更新しないよう変更 (#9950) | Resuming a thread no longer updates `updated_at` until the first turn actually starts. (#9950) | bug-fixes |
| シェルスナップショットがstdinを継承しないよう変更、起動スクリプトによるハングを回避 (#9735) | Shell snapshots no longer inherit stdin, avoiding hangs from startup scripts. (#9735) | bug-fixes |
| WebSocketプロキシ失敗時にHTTPにフォールバック (#10139) | Connections fall back to HTTP when WebSocket proxies fail. (#10139) | bug-fixes |
| app-serverのAuthMode使用方法と動作をドキュメント化 (#10191) | Documented app-server AuthMode usage and behavior. (#10191) | documentation |
| Rustツールチェーンをバージョン1.93にアップグレード (#10080) | Upgraded the Rust toolchain to 1.93. (#10080) | chores |
| リポジトリで使用するpnpmバージョンを更新 (#9992, #10161) | Updated pnpm versions used in the repo. (#9992, #10161) | chores |
| Bazelビルドとrunfilesハンドリングの改善、リモートキャッシュ圧縮を含む (#10079, #10098, #10102, #10104) | Bazel build and runfiles handling improvements, including remote cache compression. (#10079, #10098, #10102, #10104) | chores |

## 0.92.0

| 日本語 | English | Category |
|--------|---------|----------|
| API v2 スレッドが起動時に動的ツールを注入し、呼び出しと応答をサーバーとコアツールパイプライン経由でエンドツーエンドでルーティング可能に | API v2 threads can now inject dynamic tools at startup and route their calls/responses end-to-end through the server and core tool pipeline. (#9539) | new-features |
| アプリサーバーのスレッドリストにフィルタリングを追加し、大規模なスレッドセットの閲覧を容易化 | Added filtering on the thread list in the app server to make large thread sets easier to browse. (#9897) | new-features |
| アーカイブされたロールアウトをアクティブセッションに復元する `thread/unarchive` RPC を導入 | Introduced a `thread/unarchive` RPC to restore archived rollouts back into active sessions. (#9843) | new-features |
| MCP サーバーが `config.toml` で OAuth スコープを定義可能になり、ログイン時の `--scopes` 指定が不要に | MCP servers can now define OAuth scopes in `config.toml`, reducing the need to pass `--scopes` on each login. (#9647) | new-features |
| マルチエージェント連携を強化し、エクスプローラーロール、改善されたコラボレーションイベントマッピング、最大深度ガードレールを追加 | Multi-agent collaboration is more capable and safer, with an explorer role, better collab event mapping, and max-depth guardrails. (#9817, #9818, #9918, #9899) | new-features |
| キャッシュされた `web_search` をデフォルトのクライアント動作に設定 | Cached `web_search` is now the default client behavior. (#9974) | new-features |
| メイン Tokio スレッドでのブロッキング送信を回避し、高ストリーミングスループット下での TUI デッドロック/フリーズを修正 | Fixed a TUI deadlock/freeze under high streaming throughput by avoiding blocking sends on the main Tokio thread. (#9951) | bug-fixes |
| `web_search` ツールがすべてのアクションタイプを処理・表示し、スタック状態ではなく進行中のアクティビティを表示 | The `web_search` tool now handles and displays all action types, and shows in-progress activity instead of appearing stuck. (#9960) | bug-fixes |
| サブエージェントのビジーウェイト排除により、コラボレーションフローでの高 CPU 使用率を削減 | Reduced high CPU usage in collaboration flows by eliminating busy-waiting on subagents. (#9776) | bug-fixes |
| `codex resume --last --json` でプロンプトが引数の競合エラーなく正しくパースされるように修正 | Fixed `codex resume --last --json` so prompts parse correctly without conflicting argument errors. (#9475) | bug-fixes |
| Windows サンドボックスのログが UTF-8 を安全に処理し、マルチバイトコンテンツの切り捨て時の失敗を防止 | Windows sandbox logging now handles UTF-8 safely, preventing failures when truncating multibyte content. (#8647) | bug-fixes |
| `request_user_input` を Plan/Pair モード以外で拒否し、無効なツール呼び出しを防止 | `request_user_input` is now rejected outside Plan/Pair modes to prevent invalid tool calls. (#9955) | bug-fixes |
| コントリビューションガイドラインを更新し、オンボーディングとワークフローの期待値を明確化 | Updated the contribution guidelines for clearer onboarding and workflow expectations. (#9933) | documentation |
| プロトコル/MCP ドキュメントを更新し、`thread/unarchive` と更新された `request_user_input` の question 形状を反映 | Refreshed protocol/MCP docs to reflect `thread/unarchive` and the updated `request_user_input` question shape. (#9843, #9890) | documentation |
| Homebrew 経由のセルフアップデートで明示的な cask upgrade コマンドを使用し、警告と曖昧性を回避 | Self-update via Homebrew now uses an explicit cask upgrade command to avoid warnings and ambiguity. (#9823) | chores |
| リリースパッケージングでバンドル zip を一貫して `dist/` に書き込み | Release packaging now consistently writes the bundle zip to `dist/`. (#9934) | chores |
| Rust ワークスペースの主要な依存関係（`axum`、`tracing`、`globset`、`tokio-test` など）を更新 | Updated key dependencies in the Rust workspace (including `axum`, `tracing`, `globset`, and `tokio-test`). (#9880, #9882, #9883, #9884) | chores |
| 機能ステージの命名を公開成熟度ステージに統一し、開発中機能の警告を明確化 | Aligned feature stage naming with public maturity stages and added clearer warnings for underdevelopment features. (#9929, #9954) | chores |

## 0.91.0

| 日本語 | English | Category |
|--------|---------|----------|
| サブエージェントの最大許可数を6に削減し、エージェントのファンアウト動作におけるリソース使用量とガードレールを強化 | Reduced the maximum allowed number of sub-agents to 6 to tighten resource usage and guardrails in agent fan-out behavior (#9861) | chores |

## 0.90.0

| 日本語 | English | Category |
|--------|---------|----------|
| ネットワークサンドボックスプロキシにポリシー適用機能を追加し、外部ネットワークアクセスの制御を強化 (#8442) | Added a network sandbox proxy with policy enforcement to better control outbound network access. (#8442) | new-features |
| アプリサーバーとMCP統合を介したコネクタサポートの第一段階を導入、設定とドキュメントを更新 (#9667) | Introduced the first phase of connectors support via the app server and MCP integration, including new config/docs updates. (#9667) | new-features |
| TUIでコラボレーションモードをベータ版として提供、計画→実行の引き継ぎを明確化し、モード選択（コーディング vs プラン）を簡素化 (#9690, #9712, #9802, #9834) | Shipped collaboration mode as beta in the TUI, with a clearer plan → execute handoff and simplified mode selection (Coding vs Plan). (#9690, #9712, #9802, #9834) | new-features |
| エフェメラルスレッドを追加し、生成されたスレッドのコラボレーションツール来歴メタデータを改善 (#9765, #9769) | Added ephemeral threads and improved collaboration tool provenance metadata for spawned threads. (#9765, #9769) | new-features |
| WebSocket接続でプロキシ設定に対応 (#9719) | WebSocket connections now support proxy configuration. (#9719) | new-features |
| マルチエージェントの制限をより厳格化 | More strict limitation on multi-agents | new-features |
| 複数行の引用符付き引数に対する実行ポリシーの解析を修正 (#9565) | Fixed exec policy parsing for multiline quoted arguments. (#9565) | bug-fixes |
| `--yolo` がリポジトリ外で失敗する代わりに git リポジトリチェックをスキップするよう変更 (#9590) | `--yolo` now skips the git repository check instead of failing outside a repo. (#9590) | bug-fixes |
| 順序が前後するイベントの処理とワーキングディレクトリが異なる場合のプロンプト表示により、再開の信頼性を向上 (#9512, #9731) | Improved resume reliability by handling out-of-order events and prompting for the working directory when it differs. (#9512, #9731) | bug-fixes |
| カーソルが要素の左端にある場合、バックスペースでテキスト要素が削除されないよう修正 (#9630) | Backspace no longer deletes a text element when the cursor is at the element’s left edge. (#9630) | bug-fixes |
| 設定読み込みエラーをより明確で実用的な内容に改善 (#9746) | Config loading errors are clearer and more actionable across surfaces. (#9746) | bug-fixes |
| デフォルトモデル選択でフィルタされたプリセットを考慮し、無効なデフォルトを回避 (#9782) | Default model selection now respects filtered presets to avoid invalid defaults. (#9782) | bug-fixes |
| 実験的コラボレーションプロンプトテンプレートのタイポを修正 (#9716) | Corrected a typo in the experimental collaboration prompt template. (#9716) | documentation |
| 新しいコネクタ設定画面のドキュメントを追加 (#9667) | Added documentation for the new connectors configuration surface. (#9667) | documentation |
| バンドルされているモデルカタログとプリセットを更新 (#9726) | Refreshed the bundled model catalog/presets. (#9726) | chores |
| Node 24互換性のためGitHub Actionsを更新 (#9722) | Updated GitHub Actions for Node 24 compatibility. (#9722) | chores |

## 0.89.0

| 日本語 | English | Category |
|--------|---------|----------|
| 互換性のため `/approvals` を残しつつ、より短い承認セットを持つ `/permissions` コマンドを追加 (#9561) | Added a `/permissions` command with a shorter approval set while keeping `/approvals` for compatibility. (#9561) | new-features |
| 個別スキルの有効化・無効化を可能にする `/skill` UI を追加 (#9627) | Added a `/skill` UI to enable or disable individual skills. (#9627) | new-features |
| スラッシュコマンド選択を改善し、あいまい一致よりも完全一致と前方一致を優先 (#9629) | Improved slash-command selection by prioritizing exact and prefix matches over fuzzy matches. (#9629) | new-features |
| アプリサーバーが `thread/read` に対応し、`thread/list` でアーカイブされたスレッドをフィルタリング可能に (#9569, #9571) | App server now supports `thread/read` and can filter archived threads in `thread/list`. (#9569, #9571) | new-features |
| アプリサーバークライアントが階層的な `config.toml` 解決に対応し、`config/read` が指定された cwd から有効な設定を計算可能に (#9510) | App server clients now support layered `config.toml` resolution and `config/read` can compute effective config from a given cwd. (#9510) | new-features |
| リリース成果物に公開された設定スキーマの安定した URL を追加 (#9572) | Release artifacts now include a stable URL for the published config schema. (#9572) | new-features |
| `~//...` のようなパス上で HOME からチルダ展開がエスケープされるのを防止 (#9621) | Prevented tilde expansion from escaping HOME on paths like `~//...`. (#9621) | bug-fixes |
| TUI のターン計測をアシスタントメッセージ間でリセットし、経過時間が最新の応答を反映するように改善 (#9599) | TUI turn timing now resets between assistant messages so elapsed time reflects the latest response. (#9599) | bug-fixes |
| MCP サブコマンドのドキュメントを現在の CLI 動作に合わせて更新 (#9622) | Updated MCP subcommand docs to match current CLI behavior. (#9622) | documentation |
| `skills/list` プロトコルの README サンプルを最新のレスポンス形式に更新 (#9623) | Refreshed the `skills/list` protocol README example to match the latest response shape. (#9623) | documentation |
| TUI2 実験とその関連設定・ドキュメントを削除し、Codex をターミナルネイティブ UI に維持 (#9640) | Removed the TUI2 experiment and its related config/docs, keeping Codex on the terminal-native UI. (#9640) | chores |

## 0.88.0

| 日本語 | English | Category |
|--------|---------|----------|
| ヘッドレス環境でデバイスコード認証をスタンドアロンフォールバックとして追加 (#9333) | Added device-code auth as a standalone fallback in headless environments. (#9333) | new-features |
| 信頼されたフォルダからのみ設定を読み込み、シンボリックリンクされた `config.toml` の解決を修正 (#9533, #9445) | Load configs from trusted folders only and fix symlinked `config.toml` resolution. (#9533, #9445) | bug-fixes |
| Azure エンドポイントの無効な入力エラーを修正 (#9387) | Fixed Azure endpoint invalid input errors. (#9387) | bug-fixes |
| コアランタイムのメモリリークを解決 (#9543) | Resolved a memory leak in core runtime. (#9543) | bug-fixes |
| 中断されたターンの繰り返しを防止 (#9043) | Prevented interrupted turns from repeating. (#9043) | bug-fixes |
| WSL TUI の画像ペースト機能の不具合を修正 (#9473) | Fixed WSL TUI image paste regression. (#9473) | bug-fixes |
| MCP ドキュメントリンクを最新の宛先に更新 (#9490) | Updated MCP documentation link to the current destination. (#9490) | documentation |
| ドキュメント内の "Multi-agents" の命名誤りを修正 (#9542) | Corrected a “Multi-agents” naming typo in docs. (#9542) | documentation |
| コラボレーションモードの開発者向け手順を追加 (#9424) | Added developer instructions for collaboration modes. (#9424) | documentation |
| Rust 1.92 にアップグレードし、コア Rust 依存関係を更新 (#8860, #9465, #9466, #9467, #9468, #9469) | Upgraded to Rust 1.92 and refreshed core Rust dependencies. (#8860, #9465, #9466, #9467, #9468, #9469) | chores |

## 0.87.0

| 日本語 | English | Category |
|--------|---------|----------|
| ユーザーメッセージのメタデータ（テキスト要素とバイト範囲）がプロトコル/アプリサーバー/コアを通じてラウンドトリップするようになり、UI アノテーションが履歴の再構築後も保持されるように改善 (#9331) | User message metadata (text elements and byte ranges) now round-trips through protocol/app-server/core so UI annotations can survive history rebuilds. (#9331) | new-features |
| コラボレーション待機呼び出しが1つのリクエストで複数の ID をブロックできるようになり、マルチスレッド調整が簡素化 (#9294) | Collaboration wait calls can block on multiple IDs in one request, simplifying multi-thread coordination. (#9294) | new-features |
| ユーザーシェルコマンドがユーザースナップショット下で実行されるようになり、エイリアスとシェル設定が尊重されるように改善 (#9357) | User shell commands now run under the user snapshot so aliases and shell config are honored. (#9357) | new-features |
| TUI がスポーン/未購読スレッドからの承認リクエストを表示するように改善 (#9232) | The TUI now surfaces approval requests from spawned/unsubscribed threads. (#9232) | new-features |
| 圧縮時のトークン推定が正確になり、長時間セッション中の予算管理が改善 (#9337) | Token estimation during compaction is now accurate, improving budgeting during long sessions. (#9337) | bug-fixes |
| MCP CallToolResult が `content` と `structuredContent` の両方に `threadId` を含むようになり、互換性のために定義済み出力スキーマを返すように改善 (#9338) | MCP CallToolResult now includes `threadId` in both `content` and `structuredContent`, and returns a defined output schema for compatibility. (#9338) | bug-fixes |
| TUI の「Worked for」セパレーターが実際の作業が発生した後にのみ表示されるように改善 (#8958) | The TUI “Worked for” separator only appears after actual work has occurred. (#8958) | bug-fixes |
| パイプされた非 PTY コマンドが標準入力待ちでハングしなくなるよう修正 (#9369) | Piped non-PTY commands no longer hang waiting on stdin. (#9369) | bug-fixes |
| MCP インターフェースドキュメントが構造化出力スキーマと `threadId` の動作を反映するよう更新 (#9338) | MCP interface docs updated to reflect structured output schema and `threadId` behavior. (#9338) | documentation |
| Windows ビルドがデフォルトで PowerShell UTF-8 機能を有効化 (#9195) | Windows builds enable the PowerShell UTF-8 feature by default. (#9195) | chores |

## 0.86.0

| 日本語 | English | Category |
|--------|---------|----------|
| スキルのメタデータ（名前、説明、アイコン、ブランドカラー、デフォルトプロンプト）を `SKILL.toml` で定義可能にし、アプリサーバーとTUIで表示できるよう対応（#9125） | Skill metadata can now be defined in `SKILL.toml` (names, descriptions, icons, brand color, default prompt) and surfaced in the app server and TUI (#9125) | new-features |
| クライアントがウェブ検索を明示的に無効化し、ヘッダー経由で適格性を通知してサーバー側のロールアウト制御と連携可能に（#9249） | Clients can explicitly disable web search and signal eligibility via a header to align with server-side rollout controls (#9249) | new-features |
| MCPエリシテーションの受け入れ時に、コンテンツを期待するサーバーのためnullではなく空のJSONペイロードを送信するよう変更（#9196） | Accepting an MCP elicitation now sends an empty JSON payload instead of null to satisfy servers expecting content (#9196) | bug-fixes |
| 入力プロンプトのプレースホルダースタイルを非イタリックに戻し、ターミナルレンダリング問題を回避（#9307） | Input prompt placeholder styling is back to non-italic to avoid terminal rendering issues (#9307) | bug-fixes |
| 空のペーストイベントでクリップボード画像読み取りがトリガーされないよう修正（#9318） | Empty paste events no longer trigger clipboard image reads (#9318) | bug-fixes |
| 統合execがバックグラウンドプロセスをクリーンアップし、リスナー停止後の遅延Endイベントを防止（#9304） | Unified exec cleans up background processes to prevent late End events after listeners stop (#9304) | bug-fixes |
| オーケストレータープロンプトをリフレッシュし、内部ルーティング動作を改善（#9301） | Refresh the orchestrator prompt to improve internal routing behavior (#9301) | chores |
| `needs_follow_up` の冗長なエラーログ出力を削減（#9272） | Reduce noisy `needs_follow_up` error logging (#9272) | chores |

## 0.85.0

| 日本語 | English | Category |
|--------|---------|----------|
| App-server v2 がコラボレーションツールの呼び出しをターンストリーム内のアイテムイベントとして出力するようになり、クライアントでエージェント連携をリアルタイムでレンダリング可能に (#9213) | App-server v2 now emits collaboration tool calls as item events in the turn stream, so clients can render agent coordination in real time. (#9213) | new-features |
| コラボレーションツールのエージェント制御を強化: `spawn_agent` がエージェントロールプリセットを受け付け、`send_input` が実行中のエージェントを中断してからメッセージを配信可能に (#9275, #9276) | Collaboration tools gained richer agent control: `spawn_agent` accepts an agent role preset, and `send_input` can optionally interrupt a running agent before delivering the message. (#9275, #9276) | new-features |
| `/models` メタデータにアップグレード移行用のマークダウンを追加し、クライアントがモデルアップグレード提案時により詳細なガイダンスを表示可能に (#9219) | `/models` metadata now includes upgrade migration markdown so clients can display richer guidance when suggesting model upgrades. (#9219) | new-features |
| [revert] Linux サンドボックスが、ユーザー名前空間が利用できない場合に Landlock のみの制限にフォールバックし、サンドボックスルール適用前に `no_new_privs` を設定するように変更 (#9250) | [revert] Linux sandboxing now falls back to Landlock-only restrictions when user namespaces are unavailable, and sets `no_new_privs` before applying sandbox rules. (#9250) | bug-fixes |
| `codex resume --last` が現在の作業ディレクトリを尊重し、`--all` で明示的に上書き可能に (#9245) | `codex resume --last` now respects the current working directory, with `--all` as an explicit override. (#9245) | bug-fixes |
| 標準入力プロンプトのデコードが BOM/UTF-16 に対応し、無効なエンコーディングに対してより明確なエラーを提供 (#9151) | Stdin prompt decoding now handles BOMs/UTF-16 and provides clearer errors for invalid encodings. (#9151) | bug-fixes |

## 0.84.0

| 日本語 | English | Category |
|--------|---------|----------|
| テキスト要素に追加のメタデータを含めるよう Rust プロトコル/型を拡張し、より豊富なクライアントレンダリングとスキーマの進化を可能にする (#9235) | Extend the Rust protocol/types to include additional metadata on text elements, enabling richer client rendering and schema evolution (#9235) | new-features |
| リリースビルドジョブのタイムアウトを延長することで、Rust リリースパイプライン（特に Windows）の不安定性を軽減 (#9242) | Reduce flaky Rust release pipelines (notably on Windows) by increasing the release build job timeout (#9242) | chores |

## 0.81.0

| 日本語 | English | Category |
|--------|---------|----------|
| デフォルト API モデルを gpt-5.2-codex に変更 (#9188) | Default API model moved to gpt-5.2-codex. (#9188) | new-features |
| `codex mcp-server` の `codex` ツールがレスポンスに `threadId` を含むよう変更し、`codex-reply` ツールで使用可能に。#3712 を修正。ドキュメントを https://developers.openai.com/codex/guides/agents-sdk/ で更新 (#9192) | The `codex` tool in `codex mcp-server` now includes the `threadId` in the response so it can be used with the `codex-reply` tool, fixing #3712. The documentation has been updated at https://developers.openai.com/codex/guides/agents-sdk/. (#9192) | new-features |
| ヘッドレス実行時にデバイスコードログインへ自動切り替えし、ブラウザなしでのサインインに対応 (#8756) | Headless runs now switch to device-code login automatically so sign-in works without a browser. (#8756) | new-features |
| Linux サンドボックスでパスを読み取り専用でマウント可能にし、ファイルの書き込みからより保護 (#9112) | Linux sandbox can mount paths read-only to better protect files from writes. (#9112) | new-features |
| `tui` で部分的なツール呼び出しのレンダリングをサポート | Support partial tool calls rendering in `tui` | new-features |
| 代替スクリーン処理を改善し、Zellij のスクロールバックが壊れないよう修正。設定/フラグで制御可能に (#8555) | Alternate-screen handling now avoids breaking Zellij scrollback and adds a config/flag to control it. (#8555) | bug-fixes |
| Windows で読み取り専用サンドボックスポリシー実行時に、危険なコマンドの前に正しくプロンプト表示 (#9117) | Windows correctly prompts before unsafe commands when running with a read-only sandbox policy. (#9117) | bug-fixes |
| Config.toml とルールのパースエラーを、サイレント失敗ではなく app-server クライアント/TUI に報告 (#9182, #9011) | Config.toml and rules parsing errors are reported to app-server clients/TUI instead of failing silently. (#9182, #9011) | bug-fixes |
| macOS のシステム設定でプロキシ検出時のクラッシュを回避 (#8954) | Worked around a macOS system-configuration crash in proxy discovery. (#8954) | bug-fixes |
| 無効なユーザー画像アップロード時に、サイレント置換ではなくエラーを表示 (#9146) | Invalid user image uploads now surface an error instead of being silently replaced. (#9146) | bug-fixes |
| `config.toml` の検証用 JSON Schema を生成し `docs/` で公開 (#8956) | Published a generated JSON Schema for `config.toml` in `docs/` to validate configs. (#8956) | documentation |
| ブラケット付きペーストが信頼できない端末向けの TUI ペーストバースト状態マシンをドキュメント化 (#9020) | Documented the TUI paste-burst state machine for terminals without reliable bracketed paste. (#9020) | documentation |
| Bazel ビルドサポートを追加。コントリビューター向けに `just bazel-codex` ヘルパーも追加 (#8875, #9177) | Added Bazel build support plus a `just bazel-codex` helper for contributors. (#8875, #9177) | chores |

## 0.80.0

| 日本語 | English | Category |
|--------|---------|----------|
| プロトコルとアプリサーバーに会話/スレッドフォークエンドポイントを追加し、クライアントがセッションを新しいスレッドに分岐可能に (#8866) | Add conversation/thread fork endpoints in the protocol and app server so clients can branch a session into a new thread. (#8866) | new-features |
| `requirement/list` 経由で requirements を公開し、クライアントが `requirements.toml` を読み取ってエージェントモード UX を調整可能に (#8800) | Expose requirements via `requirement/list` so clients can read `requirements.toml` and adjust agent-mode UX. (#8800) | new-features |
| 可観測性のための追加カウンターを含むメトリクス機能を導入 (#8318, #8910) | Introduce metrics capabilities with additional counters for observability. (#8318, #8910) | new-features |
| アップグレード/縮退モード用のプロンプトと `/elevate-sandbox` コマンドを含む昇格サンドボックスのオンボーディングを追加 (#8789) | Add elevated sandbox onboarding with prompts for upgrade/degraded mode plus the `/elevate-sandbox` command. (#8789) | new-features |
| v2 API ユーザー入力を通じた明示的なスキル呼び出しに対応 (#8864) | Allow explicit skill invocations through v2 API user input. (#8864) | new-features |
| Codex CLI サブプロセスが再び `LD_LIBRARY_PATH`/`DYLD_LIBRARY_PATH` などの環境変数を継承し、ランタイム問題を回避。#8945 で説明されているように、これらの環境変数をサブプロセス(特に GPU 関連)に渡さないと 10 倍以上のパフォーマンス低下が発生していた。詳細な調査とレポートを提供した @johnzfitch に感謝 (#8951) | Codex CLI subprocesses again inherit env vars like `LD_LIBRARY_PATH`/`DYLD_LIBRARY_PATH` to avoid runtime issues. As explained in #8945, failure to pass along these environment variables to subprocesses that expect them (notably GPU-related ones), was causing 10x+ performance regressions! Special thanks to @johnzfitch for the detailed investigation and write-up in #8945. (#8951) | bug-fixes |
| TUI/TUI2 の `/review <instructions>` がプレーンテキスト送信ではなくレビューフローを起動するように変更 (#8823) | `/review <instructions>` in TUI/TUI2 now launches the review flow instead of sending plain text. (#8823) | bug-fixes |
| パッチ承認の「このセッションで許可」が以前承認されたファイルに対して保持されるように修正 (#8451) | Patch approval “allow this session” now sticks for previously approved files. (#8451) | bug-fixes |
| 現在のモデルがピッカーから非表示の場合でもモデルアップグレードプロンプトを表示 (#8802) | Model upgrade prompt now appears even if the current model is hidden from the picker. (#8802) | bug-fixes |
| Windows の貼り付け処理が非 ASCII マルチライン入力を確実にサポート。#8021 でこの修正の基礎を築いた @occurrent に感謝 (#8774) | Windows paste handling now supports non-ASCII multiline input reliably. Special thanks to @occurrent laying the groundwork for this fix in #8021! (#8774) | bug-fixes |
| Git apply のパス解析がクォート/エスケープされたパスと `/dev/null` を正しく処理し、変更の誤分類を回避 (#8824) | Git apply path parsing now handles quoted/escaped paths and `/dev/null` correctly to avoid misclassified changes. (#8824) | bug-fixes |
| アプリサーバーの README にスキルサポートと使用方法を文書化 (#8853) | App-server README now documents skills support and usage. (#8853) | documentation |
| スキル作成ドキュメントで YAML フロントマターのフォーマットとクォート規則を明確化 (#8610) | Skill-creator docs clarify YAML frontmatter formatting and quoting rules. (#8610) | documentation |

## 0.79.0

| 日本語 | English | Category |
|--------|---------|----------|
| マルチ会話「エージェント制御」を追加し、セッションがプログラム的に他の会話を生成またはメッセージ送信可能に (#8783, #8788) | Add multi-conversation “agent control” so a session can spawn or message other conversations programmatically (#8783, #8788) | new-features |
| app-server に `thread/rollback` を追加し、IDE クライアントが履歴を書き換えずに最後の N ターンを取り消し可能に (#8454) | Add app-server `thread/rollback` so IDE clients can undo the last N turns without rewriting history (#8454) | new-features |
| `web_search_cached` を追加し、ライブリクエストの代替としてキャッシュのみの Web 検索結果を有効化 (#8795) | Add `web_search_cached` to enable cached-only Web Search results as a safer alternative to live requests (#8795) | new-features |
| グローバル実行フラグ（model/json/sandbox トグル等）を `codex exec resume` の後に渡すことが可能に (#8440) | Allow global exec flags (model/json/sandbox toggles, etc.) to be passed after `codex exec resume` (#8440) | new-features |
| TUI にリポジトリの TOML ファイルで制御される時間/バージョン対象のアナウンスティップを表示 (#8752) | Show time/version-targeted announcement tips in the TUI, driven by a TOML file in the repo (#8752) | new-features |
| アナリティクス動作を制御する `[analytics] enabled=...` 設定セクションを追加 (#8350) | Add an `[analytics] enabled=...` config section to control analytics behavior (#8350) | new-features |
| TUI2 トランスクリプトを修正し、ストリーミングされたマークダウンがリサイズ時に再フローし、コピー/ペーストがソフトラップを保持するように改善 (#8761) | Fix TUI2 transcripts so streamed markdown reflows on resize and copy/paste preserves soft wraps (#8761) | bug-fixes |
| `apply_patch` のパースを空白でパディングされた `*** Begin Patch` / `*** End Patch` マーカーに対して寛容に (#8746) | Make `apply_patch` parsing tolerant of whitespace-padded `*** Begin Patch` / `*** End Patch` markers (#8746) | bug-fixes |
| git ルートをチェックする前に現在の作業ディレクトリからの相対パスをレンダリングし、非 git ワークスペースでの出力を改善 (#8771) | Render paths relative to the current working directory before checking git roots, improving output in non-git workspaces (#8771) | bug-fixes |
| `CODEX_MANAGED_CONFIG_PATH` が本番環境で管理設定を上書きしないようにし、ポリシーバイパスを解消 (#8762) | Prevent `CODEX_MANAGED_CONFIG_PATH` from overriding managed config in production, closing a policy bypass (#8762) | bug-fixes |
| app-server の会話がクライアントから渡された設定を尊重することを保証 (#8765) | Ensure app-server conversations respect the config passed in by the client (#8765) | bug-fixes |
| TUI UX の不具合を軽減: 入力履歴の閲覧時にポップアップを抑制、コピー「ピル」のレンダリングを修正、中断時にバックグラウンドターミナルをクリア (#8772, #8777, #8786) | Reduce TUI UX glitches: suppress popups when browsing input history, fix copy “pill” rendering, and clear background terminals on interrupt (#8772, #8777, #8786) | bug-fixes |
| ヘッドレス/リモートセットアップのオンボーディング/ログインガイダンスを明確化し、ユーザーを `codex login --device-auth` に誘導 (#8753) | Clarify onboarding/login guidance for headless/remote setups by steering users to `codex login --device-auth` (#8753) | documentation |
| ツール/設定で使用されるモデル例を現在の `gpt-5.2` ネーミングに更新 (#8566) | Update model examples used in tooling/config to current `gpt-5.2` naming (#8566) | documentation |
| スキル検出を設定レイヤースタックを使用するようにリファクタリングし、すべての設定済みスキルフォルダを考慮 (#8497) | Refactor skills discovery to use the config layer stack so all configured skill folders are considered (#8497) | chores |
| リリース作成時に GitHub リリースノートを自動生成 (#8799) | Auto-populate GitHub release notes at release creation time (#8799) | chores |
| `apply_patch` のテストシナリオを追加してカバレッジを強化 (#8230) | Add more `apply_patch` test scenarios to harden coverage (#8230) | chores |
| 統合された exec イベント発行を調整し、PTY が存在する場合のみ「begin」を送信 (#8780) | Tweak unified exec event emission to only send “begin” when a PTY is present (#8780) | chores |

## 0.78.0

| 日本語 | English | Category |
|--------|---------|----------|
| `Ctrl+G` で現在のプロンプトを設定済みの外部エディタ（`$VISUAL`/`$EDITOR`）で開き、編集内容をTUIに同期する機能を追加 (#7606) | Add `Ctrl+G` to open the current prompt in your configured external editor (`$VISUAL`/`$EDITOR`) and sync edits back into the TUI. (#7606) | new-features |
| プロジェクト対応の設定レイヤーをサポート: リポジトリローカルの `.codex/config.toml` を読み込み、設定可能な `project_root_markers` を尊重し、`/etc/codex/config.toml` などのシステム設定とマージ (#8354, #8359, #8461) | Support project-aware config layering: load repo-local `.codex/config.toml`, honor configurable `project_root_markers`, and merge that with system config like `/etc/codex/config.toml`. (#8354, #8359, #8461) | new-features |
| macOS で MDM 提供の TOML ペイロードによるエンタープライズ管理設定要件をサポート (#8743) | Support enterprise-managed configuration requirements on macOS via an MDM-provided TOML payload. (#8743) | new-features |
| `tui2` のトランスクリプトナビゲーションを改善: マルチクリック選択、コピーショートカット/アフォーダンス、ドラッグ可能な自動非表示スクロールバーを追加 (#8462, #8471, #8728) | Improve `tui2` transcript navigation with multi-click selection, a copy shortcut/affordance, and a draggable auto-hiding scrollbar. (#8462, #8471, #8728) | new-features |
| Windows PowerShell セッションを UTF-8 モードで開始し、エンコーディング関連のプロンプト/出力問題を軽減 (#7902) | Start Windows PowerShell sessions in UTF-8 mode to reduce encoding-related prompt/output issues. (#7902) | new-features |
| 実行ポリシールールに人間が読める形式の正当化理由を含めることが可能になり、ポリシー読み込みは統一された設定レイヤースタックに従うよう変更 (#8349, #8453, #8751) | Exec policy rules can now include human-readable justifications, and policy loading follows the unified config-layer stack. (#8349, #8453, #8751) | new-features |
| モデルが1ターンで複数のツール呼び出しを返す場合の失敗を修正: Chat Completions API が期待する形式でツール呼び出しを出力 (#8556) | Fix failures when the model returns multiple tool calls in a single turn by emitting tool calls in the format the Chat Completions API expects. (#8556) | bug-fixes |
| `/review` がセッションの作業ディレクトリから差分を計算するよう修正し、ランタイムcwdオーバーライド使用時もベースブランチ検出が正しく動作するよう改善 (#8738) | Make `/review` compute diffs from the session’s working directory so base-branch detection works correctly with runtime cwd overrides. (#8738) | bug-fixes |
| レガシーの Chat Completions ストリーミング終端文字を適切に処理し、不正な SSE パースエラーを回避 (#8708) | Handle the legacy Chat Completions streaming terminator cleanly to avoid spurious SSE parse errors. (#8708) | bug-fixes |
| `tui2` のレンダリング/入力エッジケースを修正（画面破損、スクロールの粘着性、選択/コピーの正確性） (#8463, #8695, #8449) | Fix a set of `tui2` rendering/input edge cases (screen corruption, scroll stickiness, and selection/copy correctness). (#8463, #8695, #8449) | bug-fixes |
| CLI パッケージング時の `ripgrep` ダウンロード失敗時の診断を改善し、失敗のデバッグを容易化 (#8486) | Improve diagnostics when `ripgrep` download fails during CLI packaging so failures are easier to debug. (#8486) | bug-fixes |
| alpha/stable バージョン文字列のパース時のパニックを回避 (#8406) | Avoid a panic when parsing alpha/stable version strings. (#8406) | bug-fixes |
| ユーザードキュメントを開発者ドキュメントサイトへのリンクに置き換え・重複排除（スキルドキュメントを含む） (#8662, #8407) | Replace and de-duplicate user docs with links to the developer documentation site (including skills docs). (#8662, #8407) | documentation |
| 設定ドキュメントを明確化（`developer_instructions` オプションを含む） (#8376, #8701) | Clarify configuration documentation, including the `developer_instructions` option. (#8376, #8701) | documentation |
| README の壊れたリンクを修正 (#8682) | Fix broken README links. (#8682) | documentation |
| TUI のパフォーマンスチューニング: 再描画スケジューリングの上限設定とストリーミング中の不要な再レンダリングを削減し、CPU 使用率を低減 (#8499, #8681, #8693) | Performance tuning for TUIs: cap redraw scheduling and reduce unnecessary rerenders during streaming to lower CPU usage. (#8499, #8681, #8693) | chores |
| `codex-rs` 全体の Rust 依存関係を更新 (#8414, #8596, #8597) | Update Rust dependencies across `codex-rs`. (#8414, #8596, #8597) | chores |

