# OpenAI Codex 変更履歴 (2025年)

このファイルは OpenAI Codex の2025年リリース分の変更履歴を日本語で記載しています。

---

## 0.74.0

| 日本語 | English | Category |
|--------|---------|----------|
| 知識、推論、コーディングを改善した最新のフロンティアモデル gpt-5.2-codex を発表。[詳細はこちら](https://openai.com/index/introducing-gpt-5-2-codex) | Introducing gpt-5.2-codex our latest frontier model with improvements across knowledge, reasoning and coding. [Learn more](https://openai.com/index/introducing-gpt-5-2-codex) | new-features |
| `experimental` 機能を試すための新しいスラッシュコマンド `/experimental` を追加 | Add new slash command `/experimental` for trying out `experimental` features | new-features |
| ゴーストスナップショット警告の無効化トグル (#8178) | Ghost snapshot warning disable toggle (#8178) | new-features |
| UI の改善（バックグラウンドターミナル、ピッカーのクリーンアップ）(#8255, #8232) | UI polish (background terminals, picker cleanup) (#8255, #8232). | new-features |
| #8266 feat: ベータ機能に名前を追加 | #8266 feat: add name to beta features | new-features |
| #8265 caribou | #8265 caribou | new-features |
| #8264 docs: codex resume --all の説明を明確化（CWD 列とフィルタリング） | #8264 docs: clarify codex resume --all (CWD column & filtering) | new-features |
| #8255 nit: UI バックグラウンドターミナル | #8255 nit: ui background terminals | new-features |
| #8249 chore: &Path より AsRef<Path> を優先 | #8249 chore: prefer AsRef<Path> to &Path | new-features |
| #8248 chore: config_loader での Mac 固有ロジックの読み込みを簡素化 | #8248 chore: simplify loading of Mac-specific logic in config_loader | new-features |
| #8244 スキル用の機能フラグを再導入 | #8244 Reintroduce feature flags for skills. | new-features |
| #8243 不正なスキルの読み込みをフェイルオープンに変更 | #8243 Make loading malformed skills fail-open | new-features |
| #8235 fix: ConfigBuilder を導入 | #8235 fix: introduce ConfigBuilder | new-features |
| #8232 chores: ピッカーをクリーンアップ | #8232 chores: clean picker | new-features |
| #8228 移行リンクを表示 | #8228 Show migration link | new-features |
| #8226 chore: Config インスタンス化のコードパスをクリーンアップ | #8226 chore: cleanup Config instantiation codepaths | new-features |
| #8221 「Team」を「Business」に変更し、Education を追加 | #8221 Change “Team” to “Buisness” and add Education | new-features |
| #8220 SYSTEM スキルをサポート | #8220 Support SYSTEM skills. | new-features |
| #8216 ACL 読み取りの速度と信頼性を向上 | #8216 speed and reliability improvements for setting reads ACLs | new-features |
| #8209 feat: モデルピッカー | #8209 feat: model picker | new-features |
| #8205 fix: ConfigToml 構造体の PathBuf → AbsolutePathBuf | #8205 fix: PathBuf -> AbsolutePathBuf in ConfigToml struct | new-features |
| #8203 npm パッケージのステージング時に新しい Windows バイナリをダウンロード | #8203 download new windows binaries when staging npm package | new-features |
| #8201 chore: ベータ機能を追加 | #8201 chore: add beta features | new-features |
| #8199 chore: ベータプログラムから機能を戻す | #8199 chore: move back stuff out of beta program | new-features |
| #8198 feat: list_models をノンブロッキング化 | #8198 feat: make list_models non-blocking | new-features |
| #8196 fix: セッションのダウングレード | #8196 fix: session downgrade | new-features |
| #8194 fix: スキルディレクトリの適切なクリーンアップ | #8194 fix: proper skills dir cleanup | new-features |
| #8186 nit: ドキュメント | #8186 nit: doc | new-features |
| #8182 nit: unified_exec ツールのデッドブランチを削除 | #8182 nit: drop dead branch with unified_exec tool | new-features |
| #8181 nit: イベントレンダリングの競合を防止 | #8181 nit: prevent race in event rendering | new-features |
| #8178 feat: ゴーストスナップショット警告を無効化する設定を追加 | #8178 feat: add config to disable warnings around ghost snapshot | new-features |
| #8175 fix: 不安定なテスト 6 | #8175 fix: flaky test 6 | new-features |
| #8163 models スクリプトを修正 | #8163 fix the models script | new-features |
| #8153 静的ファイルからモデルを読み込み | #8153 Load models from static file | new-features |
| #8152 [app-server] 新しい RawResponseItem v2 イベントを追加 | #8152 [app-server] add new RawResponseItem v2 event | new-features |
| #8151 chore: listMcpServerStatus をノンブロッキング化 | #8151 chore: update listMcpServerStatus to be non-blocking | new-features |
| #8149 user_agent ヘッダーを追加 | #8149 Add user_agent header | new-features |
| #8141 chore(apply-patch) Unicode シナリオ | #8141 chore(apply-patch) unicode scenario | new-features |
| #8140 npm パッケージに新しい Windows バイナリを含める | #8140 include new windows binaries in npm package. | new-features |
| #8127 「chore: review in read-only (#7593)」を Revert | #8127 Revert “chore: review in read-only (#7593)” | new-features |
| #8124 tui2 のコンパイルエラーを修正 | #8124 fix tui2 compile error | new-features |
| #8122 docs: tui2 viewport ロードマップを改良 | #8122 docs: refine tui2 viewport roadmap | new-features |
| #8118 ハードコードされたモデルバージョン用のワークフローを追加 | #8118 Add a workflow for a hardcoded version of models | new-features |
| #8117 feat: unified exec フッター | #8117 feat: unified exec footer | new-features |
| #8114 chore: listMcpServers を listMcpServerStatus に更新 | #8114 chore: update listMcpServers to listMcpServerStatus | new-features |
| #8111 chore(apply-patch) 実行テストを移動 | #8111 chore(apply-patch) move invocation tests | new-features |
| #8109 「feat: unified exec footer」を Revert | #8109 Revert “feat: unified exec footer” | new-features |
| #8108 feat(sdk): TypeScript SDK に xhigh reasoning effort サポートを追加 | #8108 feat(sdk): add xhigh reasoning effort support to TypeScript SDK | new-features |
| #8102 Node 24 互換性のために GitHub Actions をアップグレード | #8102 Upgrade GitHub Actions for Node 24 compatibility | new-features |
| #8098 パブリックスキルを追加し、リポジトリスキルの検出とエラー UX を改善 | #8098 Add public skills + improve repo skill discovery and error UX | new-features |
| #8095 feat: ConfigLayerName を単純な enum ではなく disjoint union に変更 | #8095 feat: change ConfigLayerName into a disjoint union rather than a simple enum | new-features |
| #8094 elevated sandbox セットアップのバグ修正とパフォーマンス改善 | #8094 bug fixes and perf improvements for elevated sandbox setup | new-features |
| #8089 refactor(tui2): トランスクリプト行のメタデータを明示的に | #8089 refactor(tui2): make transcript line metadata explicit | new-features |
| #8088 feat: .codex が書き込み可能なルートのサブフォルダの場合、サンドボックスに対して読み取り専用にする | #8088 feat: if .codex is a sub-folder of a writable root, then make it read-only to the sandbox | new-features |
| #8086 chore(app-server): スタブ化された thread/compact API を削除 | #8086 chore(app-server): remove stubbed thread/compact API | new-features |
| #8085 chore: Mac コード署名のリファクタリング | #8085 chore: mac codesign refactor | new-features |
| #8084 chore(ci): macOS ランナーの Homebrew origin/main 回避策を削除 | #8084 chore(ci): drop Homebrew origin/main workaround for macOS runners | new-features |
| #8079 docs: config.md の gpt-5.2 タイポを修正 | #8079 docs: fix gpt-5.2 typo in config.md | new-features |
| #8077 Windows サンドボックス機能のより良い名前 | #8077 better name for windows sandbox features | new-features |
| #8075 feat: unified_exec を shell_command にフォールバック | #8075 feat: fallback unified_exec to shell_command | new-features |
| #8071 feat: experimental メニュー | #8071 feat: experimental menu | new-features |
| #8067 feat: unified exec フッター | #8067 feat: unified exec footer | new-features |
| #8060 feat: 最後のユーザーターンでは compact しない | #8060 feat: do not compact on last user turn | new-features |
| #8057 chore: レビュー結果の重複を排除 | #8057 chore: dedup review result duplication | new-features |
| #8053 nit: 通常タスクのトレーススパン | #8053 nit: trace span for regular task | new-features |
| #8052 feat: ターン終了時に unified_exec をクローズ | #8052 feat: close unified_exec at end of turn | new-features |
| #8020 ローカル実行時に失敗する mcp elicitation テストを修正 | #8020 Fixes mcp elicitation test that fails for me when run locally | new-features |
| #8004 Fix: パスチェックによる Bun グローバルインストールの検出 | #8004 Fix: Detect Bun global install via path check | new-features |
| #8000 WSL マウントポイント使用時の大文字小文字を区別しない resume マッチングを修正 | #8000 Fixed resume matching to respect case insensitivity when using WSL mount points | new-features |
| #7997 feat: リモートモデルを破棄せずにマージ | #7997 feat: merge remote models instead of destructing | new-features |
| #7969 Fix: Option<()> のスキーマ生成をスキップして無効な Windows ファイル名を回避 (#7479) | #7969 Fix: Skip Option<()> schema generation to avoid invalid Windows filenames (#7479) | new-features |
| #7961 crossterm イベントストリームの削除と再作成を可能にするため TUI イベントループをリファクタリング | #7961 refactor TUI event loop to enable dropping + recreating crossterm event stream | new-features |
| #7956 並列ツール呼び出しを修正 | #7956 fix parallel tool calls | new-features |
| #7935 exec-server: エラーの追加コンテキスト | #7935 exec-server: additional context for errors | new-features |
| #7931 chore: edit でコメントを保持 | #7931 chore: persist comments in edit | new-features |
| #7791 chore(shell_command) フリーフォームタイムアウト出力を修正 | #7791 chore(shell_command) fix freeform timeout output | new-features |
| #7778 feat: approval_policy の値を制約 | #7778 feat: Constrain values for approval_policy | new-features |
| #7601 WIP: TUI viewport、履歴表示、選択/コピーを再設計 | #7601 WIP: Rework TUI viewport, history printing, and selection/copy | new-features |

## 0.71.0

| 日本語 | English | Category |
|--------|---------|----------|
| 知識、推論、コーディングの向上を実現した最新のフロンティアモデル gpt-5.2 を導入。[詳細を見る](https://openai.com/index/introducing-gpt-5-2/) | Introducing gpt-5.2 our latest frontier model with improvements across knowledge, reasoning and coding. [Learn More](https://openai.com/index/introducing-gpt-5-2/) | new-features |

## 0.65.0

| 日本語 | English | Category |
|--------|---------|----------|
| Codex Max をデフォルトに (#7566): Codex Max がデフォルトモデルになり、async-in-sync コードに関連する TUI パニックを修正 | Codex Max as default (#7566): Codex Max is now the default model, and a TUI panic related to async-in-sync code was fixed. | new-features |
| 再開 UX の改善 (#7302, #7303): /resume スラッシュコマンドを追加し、再開パフォーマンスを改善して作業再開を高速化 | Better resume UX (#7302, #7303): Added a /resume slash command and improved resume performance so picking work back up is snappier. | new-features |
| ツールチップ & ヒント UX (#7557, #7440): ヒント/ツールチップを太字の「Tip」ラベル付きマークダウンでレンダリングし、アプリ全体で Codex ツールチップを充実化 | Tooltips & tips UX (#7557, #7440): Tips/tooltips are rendered via markdown with a bold “Tip” label and richer Codex tooltips across the app. | new-features |
| TUI の利便性向上 (#7530, #7448, #7514, #7461): TUI に Ctrl‑P/N ナビゲーション、画面行数制限付きシェル出力、Windows クリップボード画像ペーストの復元、およびレイアウトを整理するリファクタリングを追加 | TUI quality-of-life (#7530, #7448, #7514, #7461): TUI gets Ctrl‑P/N navigation, screen-line-capped shell output, restored Windows clipboard image paste, and a refactor for cleaner layout. | new-features |
| 履歴とコンテキストの整理 (#6242, #7483, #7545, #7431, #7483): history.jsonl を history.max_bytes でトリミング、一般的なジャンクディレクトリ（__pycache__ を含む）をデフォルトで無視、ペーストプレースホルダーを区別して保持 | History and context hygiene (#6242, #7483, #7545, #7431, #7483): history.jsonl is trimmed by history.max_bytes, common junk dirs (incl. __pycache__) are ignored by default, and paste placeholders stay distinct. | new-features |
| ヒントのレンダリングにマークダウンを使用 #7557 @[Jeremy Rose] | use markdown for rendering tips #7557 @[Jeremy Rose] | new-features |
| Codex Max へ移行 #7566 @[Ahmed Ibrahim] | Migrate codex max #7566 @[Ahmed Ibrahim] | new-features |
| あまり価値を追加しない #7481 のテストを削除 #7558 @[Eric Traut] | Remove test from #7481 that doesn't add much value #7558 @[Eric Traut] | new-features |
| [app-server] 設定の `file_path` をオプションに変更 #7560 @[Celia Chen] | [app-server] make `file_path` for config optional #7560 @[Celia Chen] | new-features |
| モデルファミリーをモデルマネージャーへ移行 #7565 @[Ahmed Ibrahim] | Migrate model family to models manager #7565 @[Ahmed Ibrahim] | new-features |
| `tui` をモデルマネージャー使用へ移行 #7555 @[Ahmed Ibrahim] | Migrate `tui` to use models manager #7555 @[Ahmed Ibrahim] | new-features |
| `ModelsManager` を導入し、`app-server` を移行 #7552 @[Ahmed Ibrahim] | Introduce `ModelsManager` and migrate `app-server` to use it. #7552 @[Ahmed Ibrahim] | new-features |
| 修正: トランスクリプトオーバーレイで長い実行行を折り返し #7481 @[muyuanjin] | fix: wrap long exec lines in transcript overlay #7481 @[muyuanjin] | new-features |
| 修正: Features はセッション/スレッドの生存期間中不変であるべき #7540 @[Michael Bolin] | fix: Features should be immutable over the lifetime of a session/thread #7540 @[Michael Bolin] | new-features |
| 機能追加: $ または /skills によるスキルの一覧表示と選択をサポート #7506 @[xl-openai] | feat: Support listing and selecting skills via $ or /skills #7506 @[xl-openai] | new-features |
| [app-server] 修正: turn/plan/updated に thread_id を追加 #7553 @[Owen Lin] | [app-server] fix: add thread_id to turn/plan/updated #7553 @[Owen Lin] | new-features |
| 機能追加(tui): textarea で Ctrl-P/N を矢印ナビゲーションにマップ #7530 @[Aofei Sheng] | feat(tui): map Ctrl-P/N to arrow navigation in textarea #7530 @[Aofei Sheng] | new-features |
| 修正(tui): ユーザーシェル出力を画面行数で制限 #7448 @[muyuanjin] | fix(tui): limit user shell output by screen lines #7448 @[muyuanjin] | new-features |
| モデルプリセットを移行 #7542 @[Ahmed Ibrahim] | Migrate model preset #7542 @[Ahmed Ibrahim] | new-features |
| 修正: main #7546 @[jif-oai] | fix: main #7546 @[jif-oai] | new-features |
| 機能追加: pycache を除外ディレクトリに追加 #7545 @[jif-oai] | feat: add pycache to excluded directories #7545 @[jif-oai] | new-features |
| 雑務: 統合 exec サンドボックス検出を更新 #7541 @[jif-oai] | chore: update unified exec sandboxing detection #7541 @[jif-oai] | new-features |
| スラッシュ resume を追加 #7302 @[Ahmed Ibrahim] | add slash resume #7302 @[Ahmed Ibrahim] | new-features |
| 雑務: app-server feedback/upload で conversation_id を thread_id に変更 #7538 @[Owen Lin] | chore: conversation_id -> thread_id in app-server feedback/upload #7538 @[Owen Lin] | new-features |
| 雑務: app-server から未使用の TodoList アイテムを削除 #7537 @[Owen Lin] | chore: delete unused TodoList item from app-server #7537 @[Owen Lin] | new-features |
| 雑務: app-server README を更新 #7510 @[Owen Lin] | chore: update app-server README #7510 @[Owen Lin] | new-features |
| 雑務: bun 環境変数検出を削除 #7534 @[Shijie Rao] | chore: remove bun env var detect #7534 @[Shijie Rao] | new-features |
| 機能追加: app server で MCP サーバーの一覧表示をサポート #7505 @[Shijie Rao] | feat: support list mcp servers in app server #7505 @[Shijie Rao] | new-features |
| seatbelt: openpty() を許可 #7507 @[Jeremy Rose] | seatbelt: allow openpty() #7507 @[Jeremy Rose] | new-features |
| 機能追加: codex ツールヒント #7440 @[jif-oai] | feat: codex tool tips #7440 @[jif-oai] | new-features |
| 機能追加: 汚染防止のための遡及的画像プレースホルダー #6774 @[jif-oai] | feat: retroactive image placeholder to prevent poisoning #6774 @[jif-oai] | new-features |
| 機能追加: パッチ適用時のモデル警告 #7494 @[jif-oai] | feat: model warning in case of apply patch #7494 @[jif-oai] | new-features |
| 修正(tui) ネイティブ Windows でクリップボードからの画像ペーストをサポート #7514 @[Dylan Hurd] | fix(tui) Support image paste from clipboard on native Windows #7514 @[Dylan Hurd] | new-features |
| 修正(unified_exec): unified_exec shell 時にプラットフォームデフォルトシェルを使用 #7486 @[Robby He] | fix(unified_exec): use platform default shell when unified_exec shell… #7486 @[Robby He] | new-features |
| デバイスコード認証文字列を更新 #7498 @[Matthew Zeng] | Update device code auth strings. #7498 @[Matthew Zeng] | new-features |
| 修正: デッドコードとマークされたインライン関数 #7508 @[Michael Bolin] | fix: inline function marked as dead code #7508 @[Michael Bolin] | new-features |
| 再開パフォーマンスを改善 #7303 @[Ahmed Ibrahim] | improve resume performance #7303 @[Ahmed Ibrahim] | new-features |
| 修正: npx のパス解決バグ #7134 @[Michael Bolin] | fix: path resolution bug in npx #7134 @[Michael Bolin] | new-features |
| 重複長ペーストプレースホルダーを区別して保持 #7431 @[Joshua Sutton] | Ensure duplicate-length paste placeholders stay distinct #7431 @[Joshua Sutton] | new-features |
| 機能追加: @openai/codex-shell-tool-mcp の --version フラグをサポート #7504 @[Michael Bolin] | feat: support --version flag for @openai/codex-shell-tool-mcp #7504 @[Michael Bolin] | new-features |
| リファクタリング: tui.rs の複数部分を抽出 #7461 @[Josh McKinney] | refactor: tui.rs extract several pieces #7461 @[Josh McKinney] | new-features |
| 雑務: create_approval_requirement_for_command を async fn に変更 #7501 @[Michael Bolin] | chore: make create_approval_requirement_for_command an async fn #7501 @[Michael Bolin] | new-features |
| `history.max_bytes` 設定時に `history.jsonl` をトリミング #6242 @[liam] | Trim `history.jsonl` when `history.max_bytes` is set #6242 @[liam] | new-features |
| 修正: TurnError の serde(flatten) アノテーションを削除 #7499 @[Owen Lin] | fix: remove serde(flatten) annotation for TurnError #7499 @[Owen Lin] | new-features |
| 新しいスナップショットにクレジット情報がない場合にクレジットを永続化 #7490 @[zhao-oai] | persisting credits if new snapshot does not contain credit info #7490 @[zhao-oai] | new-features |
| 修正: 不要になったらロックを解放 #7500 @[Michael Bolin] | fix: drop lock once it is no longer needed #7500 @[Michael Bolin] | new-features |
| execpolicy ヘルパー #7032 @[zhao-oai] | execpolicy helpers #7032 @[zhao-oai] | new-features |
| コンテキストウィンドウが不明な場合に使用トークンを表示 #7497 @[Ahmed Ibrahim] | Show token used when context window is unknown #7497 @[Ahmed Ibrahim] | new-features |
| 非ブロッキング mutex を使用 #7467 @[Ahmed Ibrahim] | Use non-blocking mutex #7467 @[Ahmed Ibrahim] | new-features |
| 修正: ゴーストスナップショットで未追跡パスのみを追跡 #7470 @[lionel-oai] | Fix: track only untracked paths in ghost snapshots #7470 @[lionel-oai] | new-features |
| 機能追加: 標準ディレクトリを無視 #7483 @[jif-oai] | feat: ignore standard directories #7483 @[jif-oai] | new-features |
| 修正: app-server v2 型に TypeScript 数値アノテーションを追加 #7492 @[Owen Lin] | fix: add ts number annotations for app-server v2 types #7492 @[Owen Lin] | new-features |
| 機能追加: unified_exec の apply_patch をインターセプト #7446 @[jif-oai] | feat: intercept apply_patch for unified_exec #7446 @[jif-oai] | new-features |
| 雑務: app-server README から experimental/unstable の記載を削除 #7474 @[Owen Lin] | chore: remove mention of experimental/unstable from app-server README #7474 @[Owen Lin] | new-features |
| リクエストログを復元 #7471 @[pakrym-oai] | Add request logging back #7471 @[pakrym-oai] | new-features |
| 機能追加: app-server v2 にワンオフコマンドを追加 #7452 @[jif-oai] | feat: add one off commands to app-server v2 #7452 @[jif-oai] | new-features |
| 機能追加: モデルの警告メッセージを追加 #7445 @[jif-oai] | feat: add warning message for the model #7445 @[jif-oai] | new-features |
| 雑務: 全体的にレビュー #7444 @[jif-oai] | chore: review everywhere #7444 @[jif-oai] | new-features |
| 機能追加: エイリアスの圧縮 #7442 @[jif-oai] | feat: alias compaction #7442 @[jif-oai] | new-features |
| 機能追加: skills.md の実験的サポート #7412 @[Thibault Sottiaux] | feat: experimental support for skills.md #7412 @[Thibault Sottiaux] | new-features |

## 0.63.0

| 日本語 | English | Category |
|--------|---------|----------|
| ウェブ検索を有効にすると `Invalid value: 'other'.` エラーが発生するバグを修正 | Fixes the bug where enabling web search can lead to `Invalid value: 'other'.` errors. | bug-fixes |

## 0.61.0

| 日本語 | English | Category |
|--------|---------|----------|
| ExecPolicy2統合とexec-serverの準備: coreがExecPolicy2をexec-serverのリファクタリングおよび移行準備作業と統合、新しいポリシーエンジンの導入を支援するクイックスタートドキュメントを追加 | ExecPolicy2 integration and exec-server prep: core now integrates ExecPolicy2 with exec-server refactors and cutover groundwork, plus quickstart docs to help teams adopt the new policy engine. | new-features |
| 切り詰め処理とエラー報告の改善: シングルパス切り詰めにより重複作業を削減、エラーイベントにオプションのステータスコードを追加して観測性を向上 | Improved truncation and error reporting: single-pass truncation reduces duplicate work, and error events can now carry optional status codes for clearer observability. | new-features |
| シェルの信頼性とサンドボックス警告: フォールバックシェル選択を強化、書き込み可能ディレクトリの警告を抑制、Windowsでのメッセージング改善を含む | Shell reliability and sandbox warnings: fallback shell selection is hardened and world-writable directory warnings are less noisy, including improved messaging on Windows. | new-features |
| UX修正: 推論表示の修正、`/review`後のレビューフッターコンテキストの保持、モデル移行画面を初回のみ表示 | UX fixes: corrected reasoning display, preserved review footer context after `/review`, and the model migration screen now shows only once. | new-features |
| fix(app-server) Windowsの書き込み可能警告を移動 (#6916) — @dylan-hurd-oai | fix(app-server) move windows world writable warning (#6916) — @dylan-hurd-oai | new-features |
| [core] エラーイベントにオプションのstatus_codeを追加 (#6865) — @celia-oai | [core] add optional status_code to error events (#6865) — @celia-oai | new-features |
| fix: exec-serverのExecPolicyをexecpolicy2移行に向けて準備 (#6888) — @bolinfest | fix: prepare ExecPolicy in exec-server for execpolicy2 cutover (#6888) — @bolinfest | new-features |
| 書き込み可能ディレクトリの過剰報告を停止 (#6936) — @iceweasel-oai | stop over-reporting world-writable directories (#6936) — @iceweasel-oai | new-features |
| fix(レビュー後のコンテキスト残存): `/review`後のレビューフッターコンテキスト (#5610) — @guidedways | fix(context left after review): review footer context after `/review` (#5610) — @guidedways | new-features |
| Fix/推論表示の修正 (#6749) — @lionelchg | Fix/correct reasoning display (#6749) — @lionelchg | new-features |
| chore: exec-serverをスタンドアロンMCP使用に向けてリファクタリング (#6944) — @bolinfest | chore: refactor exec-server to prepare it for standalone MCP use (#6944) — @bolinfest | new-features |
| fix(shell) フォールバックシェル (#6948) — @dylan-hurd-oai | fix(shell) fallback shells (#6948) — @dylan-hurd-oai | new-features |
| execpolicy2のコア統合 (#6641) — @zhao-oai | execpolicy2 core integration (#6641) — @zhao-oai | new-features |
| シングルパス切り詰め処理 (#6914) — @pakrym-oai | Single pass truncation (#6914) — @pakrym-oai | new-features |
| execpolicyクイックスタートのreadmeを更新 (#6952) — @zhao-oai | update execpolicy quickstart readme (#6952) — @zhao-oai | new-features |
| モデル移行画面を初回のみ表示 (#6954) — @aibrahim-oai | stop model migration screen after first time. (#6954) — @aibrahim-oai | new-features |

## 0.59.0

| 日本語 | English | Category |
|--------|---------|----------|
| GPT-5.1-Codex-Max: 最新のフロンティアエージェント型コーディングモデルを導入。GPT-5.1-Codex-Maxは、より高い信頼性、高速なイテレーション、長時間実行およびプロジェクトスケールワークフローのサポートを提供します。詳細は https://www.openai.com/index/gpt-5-1-codex-max をご覧ください | GPT-5.1-Codex-Max: introducing our newest frontier agentic coding model. GPT-5.1-Codex-Max delivers higher reliability, faster iteration, and support for long-running, project-scale workflows. Learn more at https://www.openai.com/index/gpt-5-1-codex-max | new-features |
| ネイティブCompactionサポート: Compactionのファーストクラスサポートを追加し、長時間のコーディングセッション全体でパフォーマンスを向上 | Native Compaction Support: added first-class support for Compaction, improving performance across extended coding sessions. | new-features |
| ツールトークン制限の拡張: codexモデルが最大10,000トークンのツール出力をサポート。`config.toml`の`tool_output_token_limit`で設定可能 | Expanded Tool Token Limits: codex models now support up to 10,000 tool output tokens. Configure this via `tool_output_token_limit` in `config.toml`. | new-features |
| Windows Agentモード: Windows向けネイティブAgentモードを導入。Codexは承認を減らして作業フォルダ内でファイルの読み書きとコマンド実行が可能に。Agentモードは新しい実験的なWindowsサンドボックスを使用してファイルシステムとネットワークアクセスを制限。詳細は https://developers.openai.com/codex/windows をご覧ください | Windows Agent mode: Introduced Agent mode for native Windows. Codex can read files, write files, and run commands in your working folder with fewer approvals. Agent mode uses a new experimental Windows sandbox to limit filesystem and network access. Learn more at https://developers.openai.com/codex/windows | new-features |
| TUIとUXの改善 | TUI and UX Improvements | new-features |
| 修正: 改行で切り捨てないように修正 (#6907) — @aibrahim | fix: don't truncate at new lines (#6907) — @aibrahim | new-features |
| 機能追加: arcticfox in the wild (#6906) — @aibrahim | feat: arcticfox in the wild (#6906) — @aibrahim | new-features |
| [app-server] thread/resumeでthread>turns>itemsを追加 (#6848) — @owenlin0 | [app-server] populate thread>turns>items on thread/resume (#6848) — @owenlin0 | new-features |
| nit: デバッグ用の不要なログ (#6898) — @jif | nit: useless log to debug (#6898) — @jif | new-features |
| 修正(core) 会話前に/approvalsの変更をサポート (#6836) — @dylan.hurd | fix(core) Support changing /approvals before conversation (#6836) — @dylan.hurd | new-features |
| chore: compactionトークン使用量の統合 (#6894) — @jif | chore: consolidate compaction token usage (#6894) — @jif | new-features |
| chore(app-server) world-writable windows notification (#6880) — @dylan.hurd | chore(app-server) world-writable windows notification (#6880) — @dylan.hurd | new-features |
| 修正: 並列ツール呼び出し命令のインジェクション (#6893) — @jif | fix: parallel tool call instruction injection (#6893) — @jif | new-features |
| nit: stable (#6895) — @jif | nit: stable (#6895) — @jif | new-features |
| 機能追加: 大規模コミットの警告 (#6838) — @jif | feat: warning large commits (#6838) — @jif | new-features |
| ラベル修正 (#6892) — @tibo | fix label (#6892) — @tibo | new-features |
| シェルを`truncate_text`使用に移行 (#6842) — @aibrahim | Move shell to use `truncate_text` (#6842) — @aibrahim | new-features |
| リモート自動compactionを実行 (#6879) — @pakrym | Run remote auto compaction (#6879) — @pakrym | new-features |
| flaky-unified_exec_formats_large_output_summary (#6884) — @aibrahim | flaky-unified_exec_formats_large_output_summary (#6884) — @aibrahim | new-features |
| shell_commandがフリーフォーム出力を返すように変更 (#6860) — @pakrym | shell_command returns freeform output (#6860) — @pakrym | new-features |
| chore(core) arcticfox (#6876) — @dylan.hurd | chore(core) arcticfox (#6876) — @dylan.hurd | new-features |
| 修正(tui) ゴーストスナップショット通知 (#6881) — @dylan.hurd | fix(tui) ghost snapshot notifications (#6881) — @dylan.hurd | new-features |
| 修正: モデルピッカーのタイプミス (#6859) — @aibrahim | fix: typos in model picker (#6859) — @aibrahim | new-features |
| chore: windowsドキュメントURLの更新 (#6877) — @ae | chore: update windows docs url (#6877) — @ae | new-features |
| 機能追加: windowsサンドボックス文字列の調整 (#6875) — @ae | feat: tweak windows sandbox strings (#6875) — @ae | new-features |
| 修正: ThreadStartResponseとThreadResumeResponseにフィールドを追加 (#6847) — @mbolin | fix: add more fields to ThreadStartResponse and ThreadResumeResponse (#6847) — @mbolin | new-features |
| chore: windowsサンドボックスドキュメントの更新 (#6872) — @ae | chore: update windows sandbox docs (#6872) — @ae | new-features |
| リモートcompactionをデフォルトで有効化 (#6866) — @pakrym | Remote compaction on by-default (#6866) — @pakrym | new-features |
| [app-server] `turn/completed` v2イベントを導入 (#6800) — @celia | [app-server] introduce `turn/completed` v2 event (#6800) — @celia | new-features |
| クレジットステータス詳細の更新 (#6862) — @zhao | update credit status details (#6862) — @zhao | new-features |
| tui: 'codex resume'にブランチを追加、cwdでフィルタリング (#6232) — @172423086+nornagon-openai | tui: add branch to 'codex resume', filter by cwd (#6232) — @172423086+nornagon-openai | new-features |
| ブラウザ脆弱性のスモークテスト、Windowsセキュリティドキュメントのドラフト (#6822) — @iceweasel | smoketest for browser vuln, rough draft of Windows security doc (#6822) — @iceweasel | new-features |
| windowsサンドボックス: 複数のワークスペースルートをサポート (#6854) — @iceweasel | windows sandbox: support multiple workspace roots (#6854) — @iceweasel | new-features |
| codexバックエンドモデルの更新 (#6855) — @zhao | updating codex backend models (#6855) — @zhao | new-features |
| exec-server (#6630) — @172423086+nornagon-openai | exec-server (#6630) — @172423086+nornagon-openai | new-features |
| ソースツリーに余分な`config.toml`を出力しないようテストを修正 (#6853) — @etraut | Fix tests so they don't emit an extraneous `config.toml` in the source tree (#6853) — @etraut | new-features |
| [app-server-test-client] 機能追加: 自動承認コマンド (#6852) — @owenlin0 | [app-server-test-client] feat: auto approve command (#6852) — @owenlin0 | new-features |
| `generated_ts_has_no_optional_nullable_fields`テストの実行時間を改善 (#6851) — @etraut | Improved runtime of `generated_ts_has_no_optional_nullable_fields` test (#6851) — @etraut | new-features |
| 修正: ローカルcompaction (#6844) — @jif | fix: local compaction (#6844) — @jif | new-features |
| MCPサーバーのconfig.mdのタイプミスを修正 (#6845) — @simcoea | Fix typo in config.md for MCP server (#6845) — @simcoea | new-features |
| [codex][otel] mtls設定のサポート (#6228) — @apanasenko | [codex][otel] support mtls configuration (#6228) — @apanasenko | new-features |
| 機能追加: app serverでのレビュー (#6613) — @jif | feat: review in app server (#6613) — @jif | new-features |
| chore(config) shell_commandを有効化 (#6843) — @dylan.hurd | chore(config) enable shell_command (#6843) — @dylan.hurd | new-features |
| 自動モード選択時にwindowsサンドボックスを有効にするプロンプト (#6618) — @iceweasel | Prompt to turn on windows sandbox when auto mode selected. (#6618) — @iceweasel | new-features |
| トークンで切り捨てるユーティリティを追加 (#6746) — @aibrahim | Add the utility to truncate by tokens (#6746) — @aibrahim | new-features |
| faq.mdのサポートモデルセクションを更新 (#6832) — @adpena | Update faq.md section on supported models (#6832) — @adpena | new-features |
| localshellツール呼び出しの修正 (#6823) — @zhao | fixing localshell tool calls (#6823) — @zhao | new-features |
| 機能追加: 並列ツール呼び出しを有効化 (#6796) — @jif | feat: enable parallel tool calls (#6796) — @jif | new-features |
| 機能追加: リモートcompaction (#6795) — @jif | feat: remote compaction (#6795) — @jif | new-features |
| nit: app server (#6830) — @jif | nit: app server (#6830) — @jif | new-features |
| nit: ゴーストコミットをstableとしてマーク (#6833) — @jif | nit: mark ghost commit as stable (#6833) — @jif | new-features |
| 機能追加: gitブランチツール (#6831) — @jif | feat: git branch tooling (#6831) — @jif | new-features |
| :bug: 修正(rmcp-client): expires_atを使用してOAuthトークンを更新 (#6574) — @LaelLuo | :bug: fix(rmcp-client): refresh OAuth tokens using expires_at (#6574) — @LaelLuo | new-features |
| 修正(windows) windows上のshell_command、軽微なパース修正 (#6811) — @dylan.hurd | fix(windows) shell_command on windows, minor parsing (#6811) — @dylan.hurd | new-features |
| chore(core) shell_serializationカバレッジを追加 (#6810) — @dylan.hurd | chore(core) Add shell_serialization coverage (#6810) — @dylan.hurd | new-features |
| デフォルトをgpt-5.1に更新 (#6652) — @aibrahim | Update defaults to gpt-5.1 (#6652) — @aibrahim | new-features |
| ノイズの多いエラーレベルstderrを回避するため、関数呼び出しペイロードログをデバッグレベルに降格 (#6808) — @cassirer | Demote function call payload log to debug to avoid noisy error-level stderr (#6808) — @cassirer | new-features |
| execpolicy2拡張 (#6627) — @zhao | execpolicy2 extension (#6627) — @zhao | new-features |
| [app-server] 機能追加: v2コマンド実行承認フローを追加 (#6758) — @owenlin0 | [app-server] feat: add v2 command execution approval flow (#6758) — @owenlin0 | new-features |
| バックグラウンドレート制限の取得 (#6789) — @zhao | background rate limits fetch (#6789) — @zhao | new-features |
| サンドボックスが上書きできないようcap_sidファイルを~/.codexに移動 (#6798) — @iceweasel | move cap_sid file into ~/.codex so the sandbox cannot overwrite it (#6798) — @iceweasel | new-features |
| Windows上のAlt-GrのTUI問題を修正 (#6799) — @etraut | Fix TUI issues with Alt-Gr on Windows (#6799) — @etraut | new-features |
| core: シェルツールを無効化する機能を追加 (#6481) — @172423086+nornagon-openai | core: add a feature to disable the shell tool (#6481) — @172423086+nornagon-openai | new-features |
| chore(core) シェル命令の更新 (#6679) — @dylan.hurd | chore(core) Update shell instructions (#6679) — @dylan.hurd | new-features |
| 修正: すべてのapp server v2型をcamelCaseで注釈 (#6791) — @owenlin0 | fix: annotate all app server v2 types with camelCase (#6791) — @owenlin0 | new-features |
| LM Studio OSSサポート (#2312) — @rugved | LM Studio OSS Support (#2312) — @rugved | new-features |
| [app-server] readmeにイベントを追加 (#6690) — @celia | [app-server] add events to readme (#6690) — @celia | new-features |
| core/tui: ノンブロッキングMCP起動 (#6334) — @172423086+nornagon-openai | core/tui: non-blocking MCP startup (#6334) — @172423086+nornagon-openai | new-features |
| chore: chatwidget::tests::binary_size_transcript_snapshot tuiテストを削除 (#6759) — @owenlin0 | chore: delete chatwidget::tests::binary_size_transcript_snapshot tui test (#6759) — @owenlin0 | new-features |
| 機能追加: execpolicy v2 (#6467) — @zhao | feat: execpolicy v2 (#6467) — @zhao | new-features |
| nit: 個人用git ignore (#6787) — @jif | nit: personal git ignore (#6787) — @jif | new-features |
| tmp: windows 2でsccacheを削除 (#6775) — @jif | tmp: drop sccache for windows 2 (#6775) — @jif | new-features |
| 機能追加: デコードできない画像のプレースホルダーで400を防止 (#6773) — @jif | feat: placeholder for image that can't be decoded to prevent 400 (#6773) — @jif | new-features |
| 修正(core) shell_commandをシリアライズ (#6744) — @dylan.hurd | fix(core) serialize shell_command (#6744) — @dylan.hurd | new-features |
| FreeBSD/OpenBSDビルドの修正: ターゲット固有のkeyring機能とBSDハードニング (#6680) — @jinxiaoyong | Fix FreeBSD/OpenBSD builds: target-specific keyring features and BSD hardening (#6680) — @jinxiaoyong | new-features |
| "codex" githubユーザーをCLA署名から除外 (#6724) — @etraut | Exempt the "codex" github user from signing the CLA (#6724) — @etraut | new-features |
| chore(deps): actions/github-scriptを7から8にバンプ (#6755) — @49699333+dependabot[bot] | chore(deps): bump actions/github-script from 7 to 8 (#6755) — @49699333+dependabot[bot] | new-features |
| 修正: Claudeモデルが空のfinish_reason処理により不完全な応答を返す問題 (#6728) — @dulikaifazr | Fix: Claude models return incomplete responses due to empty finish_reason handling (#6728) — @dulikaifazr | new-features |
| 修正: Windows Codex端末でのAltGr/バックスラッシュ入力 (#6720) — @pornotato | Fix AltGr/backslash input on Windows Codex terminal (#6720) — @pornotato | new-features |
| "tmp: drop sccache for windows (#6673)"をリバート (#6751) — @etraut | Revert "tmp: drop sccache for windows (#6673)" (#6751) — @etraut | new-features |
| 修正: スクリプトベースツールのWindows MCPサーバー実行を解決 (#3828) — @jlee14281 | fix: resolve Windows MCP server execution for script-based tools (#3828) — @jlee14281 | new-features |
| カスタムプロンプトの名前付き引数のドキュメントエラーを修正し、正規の例を追加 (#5910) — @169171880+Sayeem3051 | Fix documentation errors for Custom Prompts named arguments and add canonical examples (#5910) — @169171880+Sayeem3051 | new-features |
| 二重切り捨て時のパニックを厳格化 (#6701) — @aibrahim | Tighten panic on double truncation (#6701) — @aibrahim | new-features |
| compactを改善 (#6692) — @aibrahim | Improve compact (#6692) — @aibrahim | new-features |
| 切り捨てヘルパーを独自のファイルにリファクタリング (#6683) — @aibrahim | Refactor truncation helpers into its own file (#6683) — @aibrahim | new-features |
| "templates and build step for validating/submitting winget package"をリバート (#6696) — @aibrahim | Revert "templates and build step for validating/submitting winget package" (#6696) — @aibrahim | new-features |
| ci: openai orgリポジトリのみでCLAアシスタントを実行 (#6687) — @joshka | ci: only run CLA assistant for openai org repos (#6687) — @joshka | new-features |
| オンボーディングで「信頼しない」ディレクトリ選択を処理 (#4941) — @viniciusmotta8 | Handle "Don't Trust" directory selection in onboarding (#4941) — @viniciusmotta8 | new-features |
| unified_exec_respects_workdir_overrideを無視 (#6693) — @pakrym | Ignore unified_exec_respects_workdir_override (#6693) — @pakrym | new-features |
| 入力の前に出力を順序付け (#6691) — @pakrym | Order outputs before inputs (#6691) — @pakrym | new-features |
| 機能追加: 内部使用向けapp-server-test-clientクレートを追加 (#5391) — @owenlin0 | feat: add app-server-test-client crate for internal use (#5391) — @owenlin0 | new-features |
| codex検出を修正、新しいセキュリティ重視のスモークテストを追加 (#6682) — @iceweasel | fix codex detection, add new security-focused smoketests. (#6682) — @iceweasel | new-features |
| 機能追加(ts-sdk): CLI環境のオーバーライドを許可 (#6648) — @lopopolo | feat(ts-sdk): allow overriding CLI environment (#6648) — @lopopolo | new-features |
| wingetパッケージの検証/提出用テンプレートとビルドステップ (#6485) — @iceweasel | templates and build step for validating/submitting winget package (#6485) — @iceweasel | new-features |
| テストタイムアウトを追加 (#6612) — @pakrym | Add test timeout (#6612) — @pakrym | new-features |
| TUI通知をデフォルトで有効化 (#6633) — @172423086+nornagon-openai | Enable TUI notifications by default (#6633) — @172423086+nornagon-openai | new-features |
| tmp: windowsでsccacheを削除 (#6673) — @jif | tmp: drop sccache for windows (#6673) — @jif | new-features |
| [App server] mcpツール呼び出しitem started/completedイベントを追加 (#6642) — @celia | [App server] add mcp tool call item started/completed events (#6642) — @celia | new-features |
| 機能追加: トークナイザーをキャッシュ (#6609) — @jif | feat: cache tokenizer (#6609) — @jif | new-features |
| 機能追加: unified_execのUIを改善 (#6515) — @jif | feat: better UI for unified_exec (#6515) — @jif | new-features |
| 機能追加: /new実行時に再開ログを追加 (#6660) — @jif | feat: add resume logs when doing /new (#6660) — @jif | new-features |
| tests: SSEモックでmount_sse_once_matchをmount_sse_onceに置換 (#6640) — @pakrym | tests: replace mount_sse_once_match with mount_sse_once for SSE mocking (#6640) — @pakrym | new-features |
| スイートテスト用の共有ヘルパーを昇格 (#6460) — @aibrahim | Promote shared helpers for suite tests (#6460) — @aibrahim | new-features |
| チャット補完テストで共有ネットワークゲーティングヘルパーを使用 (#6461) — @aibrahim | Use shared network gating helper in chat completion tests (#6461) — @aibrahim | new-features |
| 二重切り捨てを回避 (#6631) — @aibrahim | Avoid double truncation (#6631) — @aibrahim | new-features |
| "Revert \"Overhaul shell detection and centralize command generation for unified exec\""をリバート (#6607) — @pakrym | Revert "Revert \"Overhaul shell detection and centralize command generation for unified exec\"" (#6607) — @pakrym | new-features |
| [app-server] JSONスキーマエクスポートとone-of型の小さな修正 (#6614) — @owenlin0 | [app-server] small fixes for JSON schema export and one-of types (#6614) — @owenlin0 | new-features |
| [App-server] 新しいv2イベントを追加:`item/reasoning/delta`、`item/agentMessage/delta`、`item/reasoning/summaryPartAdded` (#6559) — @celia | [App-server] add new v2 events:`item/reasoning/delta`, `item/agentMessage/delta` & `item/reasoning/summaryPartAdded` (#6559) — @celia | new-features |
| chore(core) apply_patchテストを統合 (#6545) — @dylan.hurd | chore(core) Consolidate apply_patch tests (#6545) — @dylan.hurd | new-features |
| 失敗したテストのみをリスト表示 (#6619) — @pakrym | Only list failed tests (#6619) — @pakrym | new-features |
| 機能追加: execとTypeScript SDKに--add-dirサポートを追加 (#6565) — @33551757+danfhernandez | feat: Add support for --add-dir to exec and TypeScript SDK (#6565) — @33551757+danfhernandez | new-features |
| TypeScript SDKにAbortSignalサポートを追加 (#6378) — @33551757+danfhernandez | Add AbortSignal support to TypeScript SDK (#6378) — @33551757+danfhernandez | new-features |
| close-stale-contributor-prs.ymlワークフローを有効化 (#6615) — @pakrym | Enable close-stale-contributor-prs.yml workflow (#6615) — @pakrym | new-features |
| デフォルトのyield時間を更新 (#6610) — @pakrym | Update default yield time (#6610) — @pakrym | new-features |
| 古いPRを閉じるワークフロー (#6594) — @pakrym | Close stale PRs workflow (#6594) — @pakrym | new-features |
| プロンプトキャッシングテストをtest_codexに移行 (#6605) — @pakrym | Migrate prompt caching tests to test_codex (#6605) — @pakrym | new-features |
| "Overhaul shell detection and centralize command generation for unified exec"をリバート (#6606) — @pakrym | Revert "Overhaul shell detection and centralize command generation for unified exec" (#6606) — @pakrym | new-features |
| シェル検出を刷新し、unified execのコマンド生成を一元化 (#6577) — @pakrym | Overhaul shell detection and centralize command generation for unified exec (#6577) — @pakrym | new-features |

## 0.58.0

| 日本語 | English | Category |
|--------|---------|----------|
| GPT-5.1 モデルファミリーのサポート。[詳細](www.openai.com/index/gpt-5-1) | Support for gpt5.1 models family. [Read more](www.openai.com/index/gpt-5-1) | new-features |
| アプリサーバー機能強化: 新しいJSONスキーマジェネレーターコマンド、アイテム開始/完了イベント、マクロのクリーンアップ、ボイラープレートの削減、重複コードの衛生管理の強化 (#6406 #6517 #6470 #6488) | App server enhancements: new JSON schema generator command, item started/completed events, macro cleanup, reduced boilerplate, and tightened duplicate-code hygiene (#6406 #6517 #6470 #6488). | new-features |
| 利便性の修正: ドキュメント更新(web_search、SDK、config)、TUIショートカットのインライン表示、seatbelt/Wayland/brew/compaction/cloud-tasksのバグ修正、警告の明確化、認証対応のステータス出力、OTELテストの安定化 (#5889 #6424 #6425 #6376 #6421 #4824 #6238 #5856 #6446 #6529 #6541) | Quality of life fixes: doc updates (web_search, SDK, config), TUI shortcuts inline, seatbelt/Wayland/brew/compaction/cloud-tasks bugfixes, clearer warnings, auth-aware status output, and OTEL test stabilization (#5889 #6424 #6425 #6376 #6421 #4824 #6238 #5856 #6446 #6529 #6541). | new-features |
| #6381 — world-writableスキャンの改善 (`917f39ec1`) | #6381 — Improve world-writable scan (`917f39ec1`) | new-features |
| #5889 — feat(tui): 承認オプションのキーボードショートカットをインライン表示 (`5beb6167c`) | #5889 — feat(tui): Display keyboard shortcuts inline for approval options (`5beb6167c`) | new-features |
| #6389 — world-writable警告の更なる改善 (`a47181e47`) | #6389 — more world-writable warning improvements (`a47181e47`) | new-features |
| #6425 — SDKドキュメントの修正: 「file diffs」を「file change notifications」に置き換え (`8b80a0a26`) | #6425 — Fix SDK documentation: replace “file diffs” with “file change notifications” (`8b80a0a26`) | new-features |
| #6421 — fix(seatbelt): hw.physicalcpuの読み取りを許可 (`c07461e6f`) | #6421 — fix(seatbelt): Allow reading hw.physicalcpu (`c07461e6f`) | new-features |
| #5856 — fix(cloud-tasks): `cli_auth_credentials_store`設定を尊重 (`5f1fab0e7`) | #5856 — fix(cloud-tasks): respect `cli_auth_credentials_store` config (`5f1fab0e7`) | new-features |
| #6387 — Windows上のnpmアップグレードでcmd.exeを経由してパストラバーサルを動作させる (`625f2208c`) | #6387 — For npm upgrade on Windows, go through cmd.exe to get path traversal working (`625f2208c`) | new-features |
| #6437 — chore(deps): codespell-project/actions-codespellを2.1から2.2にバンプ (`7c7c7567d`) | #6437 — chore(deps): bump codespell-project/actions-codespell from 2.1 to 2.2 (`7c7c7567d`) | new-features |
| #6438 — chore(deps): taiki-e/install-actionを2.60.0から2.62.49にバンプ (`082d2fa19`) | #6438 — chore(deps): bump taiki-e/install-action from 2.60.0 to 2.62.49 (`082d2fa19`) | new-features |
| #6443 — chore(deps): codex-rs内のaskasmaを0.12.1から0.14.0にバンプ (`78b2aeea5`) | #6443 — chore(deps): bump askama from 0.12.1 to 0.14.0 in /codex-rs (`78b2aeea5`) | new-features |
| #6444 — chore(deps): codex-rs内のzeroizeを1.8.1から1.8.2にバンプ (`e2598f509`) | #6444 — chore(deps): bump zeroize from 1.8.1 to 1.8.2 in /codex-rs (`e2598f509`) | new-features |
| #6446 — 警告メッセージの表現を修正 (`131c38436`) | #6446 — Fix warning message phrasing (`131c38436`) | new-features |
| #6424 — 設定ドキュメントの修正: TOML解析の説明を訂正 (`557ac6309`) | #6424 — Fix config documentation: correct TOML parsing description (`557ac6309`) | new-features |
| #6454 — compactの移動 (`50a77dc13`) | #6454 — Move compact (`50a77dc13`) | new-features |
| #6376 — `web_search`設定の最近の変更を反映するようドキュメントを更新 (`65cb1a1b7`) | #6376 — Updated docs to reflect recent changes in `web_search` configuration (`65cb1a1b7`) | new-features |
| #6407 — fix: app_server_protocolのgenerate_tsを使用 (`42683dadf`) | #6407 — fix: use generate_ts from app_server_protocol (`42683dadf`) | new-features |
| #6419 — ログインメニューからの終了をサポート (`b46012e48`) | #6419 — Support exiting from the login menu (`b46012e48`) | new-features |
| #6422 — マージせずにクローズされたPRをロックしないように変更 (`591615315`) | #6422 — Don’t lock PRs that have been closed without merging (`591615315`) | new-features |
| #6406 — [app-server] feat: JSONスキーマを生成するコマンドを追加 (`fbdedd9a0`) | #6406 — [app-server] feat: add command to generate json schema (`fbdedd9a0`) | new-features |
| #6238 — fix: brewの自動更新バージョンチェックを更新 (`788badd22`) | #6238 — fix: update brew auto update version check (`788badd22`) | new-features |
| #6433 — レート制限モデル通知のオプトアウトを追加 (`e743d251a`) | #6433 — Add opt-out for rate limit model nudge (`e743d251a`) | new-features |
| #6246 — ユーザーコマンドイベントタイプを追加 (`980886498`) | #6246 — Add user command event types (`980886498`) | new-features |
| #6466 — feat: unified_execにworkdirを追加 (`f01f2ec9e`) | #6466 — feat: add workdir to unified_exec (`f01f2ec9e`) | new-features |
| #6468 — [app-server] chore: initializeを非推奨APIセクションから移動 (`2ac49fea5`) | #6468 — [app-server] chore: move initialize out of deprecated API section (`2ac49fea5`) | new-features |
| #4824 — Waylandの画像ペーストエラーを修正 (`52e97b9b6`) | #4824 — Fix wayland image paste error (`52e97b9b6`) | new-features |
| #4098 — codex debug seatbelt --log-denialsを追加 (`0271c20d8`) | #4098 — add codex debug seatbelt --log-denials (`0271c20d8`) | new-features |
| #6477 — refactor(tui): Ctrl-Z処理のためのジョブコントロール (`60deb6773`) | #6477 — refactor(tui): job-control for Ctrl-Z handling (`60deb6773`) | new-features |
| #6470 — [app-server] メソッド名変更時のボイラープレートを削減するマクロを更新 (`3838d6739`) | #6470 — [app-server] update macro to make renaming methods less boilerplate-y (`3838d6739`) | new-features |
| #6478 — CLIリリース用のWindows .exeファイルアーティファクトをアップロード (`9aff64e01`) | #6478 — upload Windows .exe file artifacts for CLI releases (`9aff64e01`) | new-features |
| #6482 — レート制限ステータスバーを反転 (`930f81a17`) | #6482 — flip rate limit status bar (`930f81a17`) | new-features |
| #6480 — unified execでcodex-linux-sandboxを使用 (`6c36318bd`) | #6480 — Use codex-linux-sandbox in unified exec (`6c36318bd`) | new-features |
| #6489 — bash解析の配置をより集約 (`bb7b0213a`) | #6489 — Colocate more of bash parsing (`bb7b0213a`) | new-features |
| #6488 — [hygiene][app-server] turn APIの重複コード用のヘルパー関数を追加 (`695187277`) | #6488 — [hygiene][app-server] have a helper function for duplicate code in turn APIs (`695187277`) | new-features |
| #6041 — ghost_commit機能をデフォルトで有効化 (`052b05283`) | #6041 — Enable ghost_commit feature by default (`052b05283`) | new-features |
| #6503 — nit: logsをtraceに変更 (`ad279eacd`) | #6503 — nit: logs to trace (`ad279eacd`) | new-features |
| #6492 — unified execのエスカレーション処理とテストを追加 (`807e2c27f`) | #6492 — Add unified exec escalation handling and tests (`807e2c27f`) | new-features |
| #6517 — [app-server] ターンアイテムのitem started/completedイベントを追加 (`e357fc723`) | #6517 — [app-server] add item started/completed events for turn items (`e357fc723`) | new-features |
| #6523 — full-autoの説明をon-requestで更新 (`eb1c651c0`) | #6523 — Update full-auto description with on-request (`eb1c651c0`) | new-features |
| #6528 — generate-tsにprettier log-level=warnを再追加 (`424bfecd0`) | #6528 — Re-add prettier log-level=warn to generate-ts (`424bfecd0`) | new-features |
| #6507 — feat: 再開時のモデル切り替え警告 (`530db0ad7`) | #6507 — feat: warning switch model on resume (`530db0ad7`) | new-features |
| #6510 — feat: shell_commandツール (`29364f3a9`) | #6510 — feat: shell_command tool (`29364f3a9`) | new-features |
| #6516 — chore: boolean値が設定オーバーライドとしてパース可能であることを検証 (`c3a710ee1`) | #6516 — chore: verify boolean values can be parsed as config overrides (`c3a710ee1`) | new-features |
| #6541 — otelテストを修正 (`7d9ad3eff`) | #6541 — Fix otel tests (`7d9ad3eff`) | new-features |
| #6534 — feat: ghost commit用の変更系ツールのみを待機 (`e00eb50db`) | #6534 — feat: only wait for mutating tools for ghost commit (`e00eb50db`) | new-features |
| #6529 — AuthManagerからの認証情報を使用するようステータス出力を修正 (`ad09c138b`) | #6529 — Fixed status output to use auth information from AuthManager (`ad09c138b`) | new-features |
| #6551 — gpt-5.1モデル定義を追加 (`ec69a4a81`) | #6551 — Add gpt-5.1 model definitions (`ec69a4a81`) | new-features |
| #6558 — ログ出力でリクエストボディを二重エンコードしないように修正 (`2f58e6999`) | #6558 — Do not double encode request bodies in logging (`2f58e6999`) | new-features |
| #6483 — [app-server] feat: thread/resumeがhistory、path、overridesをサポート (`964220ac9`) | #6483 — [app-server] feat: thread/resume supports history, path, and overrides (`964220ac9`) | new-features |
| #6561 — gpt5.1のNUX (新規ユーザー体験) (`e63ab0dd6`) | #6561 — NUX for gpt5.1 (`e63ab0dd6`) | new-features |
| #6568 — 5.1の詳細度をlowに設定 (`f97874093`) | #6568 — Set verbosity to low for 5.1 (`f97874093`) | new-features |
| #6567 — NUXの一部としてモデルピッカーのサブタイトルを更新 (`966d71c02`) | #6567 — Update subtitle of model picker as part of the nux (`966d71c02`) | new-features |
| #6569 — gpt5.1を含むようモデルピッカーを変更 (`ad7eaa80f`) | #6569 — Change model picker to include gpt5.1 (`ad7eaa80f`) | new-features |
| #6575 — ツールのプロセスがstderr/stdoutを共有する孫プロセスを生成した際のハングを回避 (`73ed30d7e`) | #6575 — Avoid hang when tool’s process spawns grandchild that shares stderr/stdout (`73ed30d7e`) | new-features |
| #6580 — porcupineモデルスラッグを削除 (`b1979b70a`) | #6580 — remove porcupine model slug (`b1979b70a`) | new-features |
| #6583 — feat: gpt miniを表示 (`e3aaee00c`) | #6583 — feat: show gpt mini (`e3aaee00c`) | new-features |
| #6585 — モデル移行通知のコピー (`305fe73d8`) | #6585 — copy for model migration nudge (`305fe73d8`) | new-features |
| #6586 — 推論レベルの更新 (`e3dd362c9`) | #6586 — Reasoning level update (`e3dd362c9`) | new-features |
| #6593 — 5.1のデフォルトを明示的なmedium推論に設定 (`34621166d`) | #6593 — Default to explicit medium reasoning for 5.1 (`34621166d`) | new-features |
| #6588 — chore(core) gpt-5.1のプロンプトを更新 (`8dcbd29ed`) | #6588 — chore(core) Update prompt for gpt-5.1 (`8dcbd29ed`) | new-features |
| #6597 — feat: compaction後のコンテキスト残量をプロキシ (`2a417c47a`) | #6597 — feat: proxy context left after compaction (`2a417c47a`) | new-features |
| #6589 — fix モデルピッカーの折り返しを修正 (`ba74cee6f`) | #6589 — fix model picker wrapping (`ba74cee6f`) | new-features |

## 0.57.0

| 日本語 | English | Category |
|--------|---------|----------|
| TUI の操作性向上: スラッシュコマンドリストの ctrl-n/p ナビゲーションと、バックトラック時に `/status` ノイズをスキップ | TUI quality-of-life: ctrl-n/p navigation for slash command lists and backtracking skips the /status noise. | new-features |
| 長時間実行コマンドのタイムアウトを改善 | Improve timeout on long running commasnds | new-features |
| #6233 – フリーフォーム統合実行出力のフォーマット | #6233 – Freeform unified exec output formatting | new-features |
| #6342 – `generate_ts` の prettier 出力を警告のみに変更 | #6342 – Make `generate_ts` prettier output warn-only | new-features |
| #6335 – TUI: `/status` を過ぎたバックトラックを修正 | #6335 – TUI: fix backtracking past `/status` | new-features |
| #1994 – スラッシュコマンド、ファイル、履歴のナビゲーションに CTRL-n/CTRL-p を有効化 | #1994 – Enable CTRL-n/CTRL-p for navigating slash commands, files, history | new-features |
| #6340 – `insufficient_quota` エラー時のリトライをスキップ | #6340 – Skip retries on `insufficient_quota` errors | new-features |
| #6345 – 統合実行が有効な場合、シェルツールを削除 | #6345 – Remove shell tool when unified exec is enabled | new-features |
| #6347 – AI ラベラールールを課題トラッカーラベルに合わせて更新 | #6347 – Refresh AI labeler rules to match issue tracker labels | new-features |
| #6346 – `wait_for_event_with_timeout` より `wait_for_event` を優先（初回更新) | #6346 – Prefer `wait_for_event` over `wait_for_event_with_timeout` (initial update) | new-features |
| #5486 – `apply_patch` のリネーム/移動パス解決を修正 | #5486 – Fix `apply_patch` rename/move path resolution | new-features |
| #6349 – `wait_for_event_with_timeout` より `wait_for_event` を優先(フォローアップ) | #6349 – Prefer `wait_for_event` over `wait_for_event_with_timeout` (follow-up) | new-features |
| #6336 – App-server: `account/read` エンドポイントを実装 | #6336 – App-server: implement `account/read` endpoint | new-features |
| #6338 – App-server: `Thread` に追加フィールドを公開 | #6338 – App-server: expose additional fields on `Thread` | new-features |
| #6353 – App-server: 認証 v2 ドキュメント追加と Codex MCP インターフェースセクションを更新 | #6353 – App-server: add auth v2 doc & update Codex MCP interface section | new-features |
| #6368 – App-server: スレッドとターンの README を更新 | #6368 – App-server: README updates for threads and turns | new-features |
| #6351 – シェル設定ツールをモデルファミリー設定に昇格 | #6351 – Promote shell config tool to model family config | new-features |
| #6369 – TUI: `tui.rs` にインラインコメントを追加 | #6369 – TUI: add inline comments to `tui.rs` | new-features |
| #6370 – `create_github_release` スクリプトに `--promote-alpha` オプションを追加 | #6370 – Add `--promote-alpha` option to `create_github_release` script | new-features |
| #6367 – SDK: TypeScript SDK に `network_access` と `web_search` オプションを追加 | #6367 – SDK: add `network_access` and `web_search` options to TypeScript SDK | new-features |
| #6097 (#6086 の作業を含む) – WSL: 更新時に Windows パスを正規化 | #6097 (includes work from #6086) – WSL: normalize Windows paths during update | new-features |
| #6377 – App-server ドキュメント: 初期化セクションを追加 | #6377 – App-server docs: add initialization section | new-features |
| #6373 – ターミナルリファクタリング: 非推奨の flush ロジックを削除 | #6373 – Terminal refactor: remove deprecated flush logic | new-features |
| #6252 – Core: Cloudflare 403 HTML をフレンドリーなメッセージに置換 | #6252 – Core: replace Cloudflare 403 HTML with friendly message | new-features |
| #6380 – 統合実行: 安全なコマンドを承認なしで許可 | #6380 – Unified exec: allow safe commands without approval | new-features |
| #5258 – タイムアウト時にシェルツールのプロセスグループを終了 | #5258 – Kill shell tool process groups on timeout | new-features |

## 0.53.0

| 日本語 | English | Category |
|--------|---------|----------|
| エラー 400 の問題を修正 | Fixing error 400 issues | new-features |
| Java のサンドボックス化を改善 | Improve sandboxing for Java | new-features |

## 0.52.0

| 日本語 | English | Category |
|--------|---------|----------|
| TUI 改善: ストリーミング中のキューメッセージ表示、Windows 自動モードガイダンス、元に戻す操作、圧縮プロンプトを設定可能に | TUI polish: queued messages visible during streaming; Windows auto-mode guidance; undo op; compaction prompt configurable. | new-features |
| 画像: クライアント側画像リサイズ、MIME 検証によるクラッシュ防止、SDK 画像転送テストを再有効化 | Images: client-side image resizing; prevent crashes with MIME verification; SDK image forwarding tests re-enabled. | new-features |
| `!<cmd>` でコマンドを直接実行 | Execute commands directly with `!<cmd>` | new-features |
| より多くの使用量のためにクレジットを購入可能に。[詳細情報](https://help.openai.com/en/articles/12642688-using-credits-for-flexible-usage-in-chatgpt-pluspro) | Ability to buy credits for more usage. [More information](https://help.openai.com/en/articles/12642688-using-credits-for-flexible-usage-in-chatgpt-pluspro) | new-features |
| 認証: キーリング対応と設定可能なバックエンドを備えた新しい CLI 認証ストレージ抽象化 | Auth: new CLI auth storage abstraction with keyring support and configurable backend. | new-features |
| アプリサーバー: GetConversationSummary RPC、ID による会話サマリーの取得・再開、アカウント・プロトコル型の改良 | App server: GetConversationSummary RPC; fetch/resume conversation summaries by id; refined account/protocol types. | new-features |
| 実行・イベント: アイテムストリーミングイベント、ゴーストコミット、明確な非推奨警告、トークンリフレッシュ処理とログの改善 | Execution/events: item streaming events; ghost commits; clearer deprecation warnings; better token refresh handling and logs. | new-features |
| 会話管理: すべてのツール出力の統一的な切り詰め、前ターン推論のフィルタリング、会話に model_provider を注釈 | Conversation management: centralized truncation for all tool outputs; filter out prior-turn reasoning; annotate conversations with model_provider. | new-features |

## 0.50.0

| 日本語 | English | Category |
|--------|---------|----------|
| `/feedback` を改善し、より詳細な診断情報を取得できるようにしました。問題の報告にご利用ください。(#5661, #5663) | Improved `/feedback` to get better diagnostics. Please use it to report any issues. (#5661, #5663). | new-features |

## 0.41.0

| 日本語 | English | Category |
|--------|---------|----------|
| レート制限の可視化: レート制限のリセット時刻を確認可能 (#4111)、およびレート制限時の使用状況を表示 (#4102) | Rate limits visibility: You can see when is your limits resetting (#4111) and see your usage when rate limited (#4102) | new-features |
| `exec` モードで `output-schema` を使用して出力スキーマを指定可能 (#4079) | You can specify output schema in `exec` mode using `output-schema`. (#4079) | new-features |
| Ripgrep (`rg`) を `npm` リリースにバンドル化 (#3660)、これにより `npm` 経由で `codex` をインストールする際に `@vscode/ripgrep` の `postinstall` ステップが失敗する問題 (#3842 など) を修正 | Ripgrep (`rg`) is now vendored into the `npm` release (#3660), which should fix issues such as #3842 where the `postinstall` step of `@vscode/ripgrep` would sometimes fail when installing `codex` via `npm`. | new-features |

## 0.39.0

| 日本語 | English | Category |
|--------|---------|----------|
| `/review` コマンドを追加 (#3774) | new `/review` command introduced in #3774 | new-features |

## 0.38.0

| 日本語 | English | Category |
|--------|---------|----------|
| [#3806] 修正: gh コマンド呼び出し時に --repo を指定 | [#3806] fix: specify --repo when calling gh (#3806) | new-features |

## 0.36.0

| 日本語 | English | Category |
|--------|---------|----------|
| ログイン画面の改善 (#3632); APIキーとログイン状態が同時に存在する問題を修正 (#3611); ログインURL文字列の不具合を修正 (#3639); カスタムプロバイダー向けの `get_auth_status` を修正 (#3581) | login polish (#3632); fix issue allowing to be both logged in and using API key simultaneously (#3611); fix stray login URL characters (#3639); fix `get_auth_status` for custom providers (#3581). | new-features |
| 修正: show_animation が正しく計算されるよう MIN_ANIMATION_HEIGHT を変更 (#3656) | fix: change MIN_ANIMATION_HEIGHT so show_animation is calculated correctly (#3656) | new-features |
| 機能: オンボーディング文言を調整 (#3650) | feat: tweak onboarding strings (#3650) | new-features |
| ログイン時に残存するログインURL文字列を修正 (#3639) | fix stray login url characters persisting in login (#3639) | new-features |
| gpt-5 プロンプトにファイル参照ガイドラインを追加 (#3651) | Add file reference guidelines to gpt-5 prompt (#3651) | new-features |
| 機能: 小さいターミナルでアニメーションをスキップ (#3647) | feat: skip animations on small terminals (#3647) | new-features |
| 雑務: 名称変更 (#3648) | chore: rename (#3648) | new-features |
| 修正: 参照を追加 (#3633) | fix: add references (#3633) | new-features |
| 雑務: 当面 `prerelease:true` を設定 (#3645) | chore: set `prerelease:true` for now (#3645) | new-features |
| 修正: unified exec の競合状態 (#3644) | fix: race condition unified exec (#3644) | new-features |
| 機能: スプラッシュ画面を更新 (#3631) | feat: update splash (#3631) | new-features |
| 雑務(deps): codex-rs の tracing-subscriber を 0.3.19 から 0.3.20 へ更新 (#3620) | chore(deps): bump tracing-subscriber from 0.3.19 to 0.3.20 in /codex-rs (#3620) | new-features |
| 雑務(deps): codex-rs の slab を 0.4.10 から 0.4.11 へ更新 (#3635) | chore(deps): bump slab from 0.4.10 to 0.4.11 in /codex-rs (#3635) | new-features |
| ログインフローの改善 (#3632) | Login flow polish (#3632) | new-features |
| codex resume でフラグ (cd, model, search など) が機能するよう修正 (#3625) | Fix codex resume so flags (cd, model, search, etc.) still work (#3625) | new-features |
| 機能: プリセットフィルタを厳格化、ストレージロードログを抑制、ロールアウトプロンプトをデフォルト有効化 (#3628) | feat: tighten preset filter, tame storage load logs, enable rollout prompt by default (#3628) | new-features |
| resume に中止表示を追加 (#3629) | Show abort in the resume (#3629) | new-features |
| アニメーションフレームを変更 (#3627) | Change animation frames (#3627) | new-features |
| 初期 MCP 追加インターフェース (#3543) | initial mcp add interface (#3543) | new-features |
| 雑務: gpt-5-code 向けプロンプトを更新 (#3624) | chore: update prompts for gpt-5-code (#3624) | new-features |
| 機能: ヘッダーに推論レベルを追加 (#3622) | feat: add reasoning level to header (#3622) | new-features |
| 「HistoryCells を扱うよう transcript view をリファクタリング」を取り消し (#3614) | Revert "refactor transcript view to handle HistoryCells" (#3614) | new-features |
| 会話再開時にヘッダーを表示 (#3615) | Show the header when resuming a conversation (#3615) | new-features |
| ChatGPT でログイン時、API キーを必ず上書き (#3611) | When logging in using ChatGPT, make sure to overwrite API key (#3611) | new-features |
| API キー使用時にモデル名を表示しない (#3607) | Don't show the model for apikey (#3607) | new-features |
| カスタムプロバイダー使用時の get_auth_status レスポンスを修正 (#3581) | Fix get_auth_status response when using custom provider (#3581) | new-features |
| 修正: model family と apply_patch の一貫性 (#3603) | fix: model family and apply_patch consistency (#3603) | new-features |
| 修正(tui): full-auto をデフォルトプリセットに更新 (#3608) | fix(tui): update full-auto to default preset (#3608) | new-features |
| 修正(core): 不安定なテスト `completed_commands_do_not_persist_sessions` (#3596) | fix(core): flaky test `completed_commands_do_not_persist_sessions` (#3596) | new-features |
| codespell でフレームファイルをスキップ (#3606) | Skip frames files in codespell (#3606) | new-features |
| チャットウィジェットにセッションヘッダーを追加 (#3592) | Add session header to chat widget (#3592) | new-features |
| 推論イベントの生テキスト全体を追加 (#3605) | Append full raw reasoning event text (#3605) | new-features |
| 機能: UI アニメーション (#3590) | feat: UI animation (#3590) | new-features |
| EventMsg の Optional を修正 (#3604) | Fix EventMsg Optional (#3604) | new-features |
| gpt-5-code 用の単一ブランチ (#3601) | Single branch for gpt-5-code (#3601) | new-features |
| resume を有効化 (#3537) | enable-resume (#3537) | new-features |
| 機能: モデル保存を更新 (#3589) | feat: update model save (#3589) | new-features |
| Windows の不安定なテストを修正 (#3564) | Fix flaky windows test (#3564) | new-features |
| gpt-5-code モデルセレクターを修正 (#3598) | Fix gpt-5-code model selector (#3598) | new-features |
| モデルファミリーごとのプロンプトを追加 (#3597) | Add per-model-family prompts (#3597) | new-features |
| タイムアウトをモデルに送信する際にコマンド出力を含める (#3576) | Include command output when sending timeout to model (#3576) | new-features |
| ユーザー履歴メッセージのプレフィックス幅を揃える (#3467) | Align user history message prefix width (#3467) | new-features |
| モデルアップグレードプロンプトを ChatGPT 認証時のみに制限 (#3586) | Gate model upgrade prompt behind ChatGPT auth (#3586) | new-features |
| 雑務: `output_lines()` を真偽値の代わりに構造体を受け取るよう更新 (#3591) | chore: update `output_lines()` to take a struct instead of bools (#3591) | new-features |
| キューイング状態インジケーターメッセージの前にスペースを追加 (#3474) | Add spacing before queued status indicator messages (#3474) | new-features |
| コンパクト化後の resume/fork を処理 (#3533) | Handle resuming/forking after compact (#3533) | new-features |
| HistoryCells を扱うよう transcript view をリファクタリング (#3538) | refactor transcript view to handle HistoryCells (#3538) | new-features |
| gpt-5-code モデルで実験的な推論サマリーをデフォルト化 (#3560) | Default gpt-5-code models to experimental reasoning summaries (#3560) | new-features |
| Azure でより多くのアイテムタイプの ID を保持 (#3542) | Preserve IDs for more item types in azure (#3542) | new-features |
| 常に暗号化された CoT をリクエスト (#3539) | Always request encrypted cot (#3539) | new-features |
| レビューモード (コア) (#3401) | Review Mode (Core) (#3401) | new-features |
| 修正: NIT None 推論努力 (#3536) | fix: NIT None reasoning effort (#3536) | new-features |
| NUX UI を修正 (#3534) | Fix NUX UI (#3534) | new-features |
| コア: デフォルトサンドボックスを拡張 (#3483) | core: expand default sandbox (#3483) | new-features |
| Azure Responses API の回避策を追加 (#3528) | Add Azure Responses API workaround (#3528) | new-features |
| コマンドがパッチとして解析される場合は実行を試みない (#3382) | if a command parses as a patch, do not attempt to run it (#3382) | new-features |
| 中断エラーメッセージのスタイリングを更新 (#3470) | Update interruption error message styling (#3470) | new-features |
| 機能: コンテキストコンパクション (#3446) | feat: context compaction (#3446) | new-features |
| コンポーザーフッターヒントの前にスペースを追加 (#3469) | Add spacing before composer footer hints (#3469) | new-features |
| ドロップダウンヘッダーとアイテムの間にスペースを追加 (#3472) | Add spacing between dropdown headers and items (#3472) | new-features |
| 機能: 推論努力をオプショナル化 (#3527) | feat: reasoning effort as optional (#3527) | new-features |
| 機能: SetDefaultModel RPC の動作を変更し None で値をクリア (#3529) | feat: change the behavior of SetDefaultModel RPC so None clears the value. (#3529) | new-features |
| シェルの説明を標準化 (#3514) | standardize shell description (#3514) | new-features |
| バグ: モデル保存を修正 (#3525) | bug: fix model save (#3525) | new-features |
| タイマー時間フォーマットにスペースを追加 (#3471) | Add spacing to timer duration formats (#3471) | new-features |
| コードレビューにおける MCP ドキュメント変更リクエスト (#3507) | MCP Documentation Changes Requests in Code Review (#3507) | new-features |
| 雑務: `cargo nextest` を実行する `just test` を追加 (#3508) | chore: add `just test`, which runs `cargo nextest` (#3508) | new-features |
| 機能: JSON-RPC サーバーに SetDefaultModel を追加 (#3512) | feat: added SetDefaultModel to JSON-RPC server (#3512) | new-features |
| 機能: NewConversationResponse に reasoning_effort を含める (#3506) | feat: include reasoning_effort in NewConversationResponse (#3506) | new-features |
| 追加(readme): IDE (#3494) | add(readme): IDE (#3494) | new-features |
| クライアントトレースに cf-ray ヘッダーをログ出力 (#3488) | Log cf-ray header in client traces (#3488) | new-features |
| バグ: デフォルトを image に設定 (#3501) | bug: default to image (#3501) | new-features |
| 機能: TUI オンボーディング (#3398) | feat: TUI onboarding (#3398) | new-features |
| usage-limit CTA のフォーマット時に PlanType enum を使用 (#3495) | Use PlanType enum when formatting usage-limit CTA (#3495) | new-features |
| MCP サーバー使用に関する詳細なドキュメントを追加 (#3345) | Add more detailed documentation on MCP server usage (#3345) | new-features |
| 修正: `handle_sandbox_error` のタイムアウトを改善 (#3435) | fix: improve `handle_sandbox_error` timeouts (#3435) | new-features |
| 雑務: `clippy::redundant_clone` を有効化 (#3489) | chore: enable `clippy::redundant_clone` (#3489) | new-features |
| gpt-5 モデルファミリー全体に同じ特性を割り当て (#3490) | Assign the entire gpt-5 model family same characteristics (#3490) | new-features |
| フォーク時にコンポーザーをクリア (#3445) | Clear composer on fork (#3445) | new-features |
| 修正: gh 呼び出しで force=true に -f の代わりに -F を使用 (#3486) | fix: use -F instead of -f for force=true in gh call (#3486) | new-features |
| ロールアウトアイテムに Compact と Turn Context を追加 (#3444) | Add Compact and Turn Context to the rollout items (#3444) | new-features |
| NIT unified exec (#3479) | NIT unified exec (#3479) | new-features |
| 認証フローを簡素化し ChatGPT と API キー認証の差異を統一 (#3189) | Simplify auth flow and reconcile differences between ChatGPT and API Key auth (#3189) | new-features |
| apply-patch: 置換をソートしリグレッションテストを追加 (#3425) | apply-patch: sort replacements and add regression tests (#3425) | new-features |
| 雑務: rust-release.yml で latest-alpha-cli ブランチを更新 (#3458) | chore: rust-release.yml should update the latest-alpha-cli branch (#3458) | new-features |
| 修正: `generate_mcp_types.py` の出力が `codex-rs/mcp-types/src/lib.rs` と一致することを確認するチェックを追加 (#3450) | fix: add check to ensure output of `generate_mcp_types.py` matches `codex-rs/mcp-types/src/lib.rs` (#3450) | new-features |
| フォーク処理をファイルからロールアウトを読み込むよう変更 (#3440) | Change forking to read the rollout from file (#3440) | new-features |
| 実行処理の統合 (#3288) | Unified execution (#3288) | new-features |
| 機能: JSON-RPC サーバーに UserInfo リクエストを追加 (#3428) | feat: add UserInfo request to JSON-RPC server (#3428) | new-features |
| 修正: `codex-rs/mcp-types/generate_mcp_types.py` の出力が `codex-rs/mcp-types/src/lib.rs` と一致することを保証 (#3439) | fix: ensure output of `codex-rs/mcp-types/generate_mcp_types.py` matches `codex-rs/mcp-types/src/lib.rs` (#3439) | new-features |
| 信頼済みディレクトリ承認時に projects テーブルが上書きされる問題を修正 (#3434) | fix trampling projects table when accepting trusted dirs (#3434) | new-features |
| 環境コンテキストにワークスペースルートを配置 (#3375) | put workspace roots in the environment context (#3375) | new-features |

## 0.32.0

| 日本語 | English | Category |
|--------|---------|----------|
| MCP: サーバーとして動作する際に UA サフィックスを追加、安定性・互換性の微調整 | MCP: add UA suffix when acting as a server; a few stability/compat tweaks | new-features |
| OSS: `apply_patch` の OSS 互換性を拡張 | OSS: Broader `apply_patch` OSS compatibility. | new-features |
| Rollouts: 初期実装と `rollout_path` をレスポンスに含める | Rollouts: initial groundwork and `rollout_path` included in responses. | new-features |
| TUI: Alt+Delete で次の単語を削除 | TUI: Alt+Delete deletes the next word. | new-features |
| Protocol/Types: `ArchiveConversation` リクエスト追加、エクスポートと TypeScript 型定義の改善 | Protocol/Types: `ArchiveConversation` request; small exports and TS type improvements. | new-features |
| CI/Build: `nextest` によるテスト高速化、`shear` 追加、macOS パーミッションの微調整 | CI/Build: faster tests with `nextest`, add `shear`; minor macOS permission adjustment. | new-features |
| Docs: 設定におけるシェルクォートの説明を明確化 | Docs: clarified shell quoting in config. | new-features |
| [#3395] MCP サーバーとして使用する際にユーザーエージェントサフィックスを設定 | [#3395] Set a user agent suffix when used as a mcp server | new-features |
| [#3394] Alt+Delete でカーソルの右側の単語を削除 (delete_forward_word) | [#3394] alt+delete deletes the word to the right of the cursor (delete_forward_word) | new-features |
| [#3390] 推論アイテム ID を送信しないように変更 | [#3390] Do not send reasoning item IDs | new-features |
| [#3388] config.responses_originator_header_internal_override を CODEX_INTERNAL_ORIGINATOR_OVERRIDE_ENV_VAR に置き換え | [#3388] Replace config.responses_originator_header_internal_override with CODEX_INTERNAL_ORIGINATOR_OVERRIDE_ENV_VAR | new-features |
| [#3387] フェイルファースト無効化 | [#3387] No fail fast | new-features |
| [#3380] ロールアウトアイテム導入 | [#3380] Introduce rollout items | new-features |
| [#3374] apply_patch における「期待される行が見つかりません」メッセージの調整 | [#3374] tweak "failed to find expected lines" message in apply_patch | new-features |
| [#3357] 修正: 不要な #[allow(dead_code)] アノテーションを削除 | [#3357] fix: remove unnecessary #[allow(dead_code)] annotation | new-features |
| [#3353] 機能: ClientRequest に ArchiveConversation を追加 | [#3353] feat: add ArchiveConversation to ClientRequest | new-features |
| [#3352] 修正: NewConversationResponse に rollout_path を含める | [#3352] fix: include rollout_path in NewConversationResponse | new-features |
| [#3338] 機能: CI で cargo shear を実行 | [#3338] feat: Run cargo shear during CI | new-features |
| [#3334] com.apple.system.opendirectoryd.libinfo の mach-lookup を許可 | [#3334] allow mach-lookup for com.apple.system.opendirectoryd.libinfo | new-features |
| [#3323] 雑務: CI ビルド高速化のため cargo nextest への切り替えを試行 | [#3323] chore: try switching to cargo nextest to speed up CI builds | new-features |
| [#3222] 修正: LoginChatGptCompleteNotification は protocol-ts に明示的にリストする必要なし | [#3222] fix: LoginChatGptCompleteNotification does not need to be listed explicitly in protocol-ts | new-features |
| [#3270] 機能(core): conversation_manager から InitialHistory を再エクスポート | [#3270] feat(core): re-export InitialHistory from conversation_manager | new-features |
| [#3219] TypeScript 型定義を追加生成、ConversationSummary で conversation id を返す | [#3219] Generate more typescript types and return conversation id with ConversationSummary | new-features |
| [#3179] 機能: POSIX 統一とスナップショットセッション | [#3179] feat: POSIX unification and snapshot sessions | new-features |
| [#3169] config.md におけるシェルのクォート処理の説明を改善 | [#3169] Improve explanation of how the shell handles quotes in config.md | new-features |
| [#2811] 異なる命名規則を持つ gpt-oss プロバイダ (例: openai/gpt-oss-*) の OSS モデルに apply_patch ツールを含める | [#2811] Include apply_patch tool for oss models from gpt-oss providers with different naming convention (e.g. openai/gpt-oss-*) | new-features |

## 0.31.0

| 日本語 | English | Category |
|--------|---------|----------|
| MCP サーバー宣言時の `startup_timeout_ms` オプションのサポートを追加 [(ドキュメント)](https://github.com/openai/codex/blob/main/docs/config.md#mcp_servers)、特に Windows ユーザーから要望の多かった機能 | https://github.com/openai/codex/pull/3182 added support for a `startup_timeout_ms` option when declaring an MCP server [(docs)](https://github.com/openai/codex/blob/main/docs/config.md#mcp_servers), which has been a highly requested feature, particularly for Windows users: | new-features |
| @Bit-urd による MCP 起動時のフォールトトレランス向上 | Thanks to @Bit-urd for adding more fault tolerance to MCP startup: https://github.com/openai/codex/pull/3243 | new-features |
| macOS で Finder からの `ctrl+v` による画像貼り付けを修正 | #3211 fixes image pasting from Finder with `ctrl+v` on macOS | new-features |
| 保留中の OAuth ログインをキャンセルして localhost ポートを解放するロジックを追加 | [#3217] Added logic to cancel pending oauth login to free up localhost port | new-features |
| TUI の思考タイマーに分/時間の表示を追加 | [#3220] feat(tui): show minutes/hours in thinking timer | new-features |
| `/status` 出力に CLI バージョンを追加 | [#3223] Added CLI version to `/status` output | new-features |
| TOML ファイルからのモデルファミリー設定のオーバーライドに対応 | [#3176] [codex] respect overrides for model family configuration from toml file | new-features |
| codex-rs/scripts/create_github_release.sh を Python で書き直し | [#3226] chore: rewrite codex-rs/scripts/create_github_release.sh in Python | new-features |
| create_github_release を一時ディレクトリに新規クローンを作成するよう変更 | [#3228] chore: change create_github_release to create a fresh clone in a temp directory | new-features |
| ローカルクローンのオーバーヘッドを避けるため、git の代わりに gh を使用するよう変更 | [#3230] chore: use gh instead of git to do work to avoid overhead of a local clone | new-features |
| create_github_release が --publish-alpha または --publish-release のいずれかを受け取るよう修正 | [#3231] fix: change create_github_release to take either --publish-alpha or --publish-release | new-features |
| トークン使用量/コンテキスト情報をセッションレベルに移動 | [#3221] Move token usage/context information to session level | new-features |
| Ctrl + C で空でないプロンプトをクリア | [#3285] Clear non-empty prompts with ctrl + c | new-features |
| 生の UUID の代わりに ConversationId を使用 | [#3282] Use ConversationId instead of raw Uuids | new-features |
| codex/README.md の "Memory with AGENTS.md" セクションへの壊れたリンクを修正 | [#3300] docs: fix broken link to the "Memory with AGENTS.md" section in codex/README.md | new-features |
| MCP サーバーごとの起動タイムアウト機能を追加 | [#3182] feat(mcp): per-server startup timeout | new-features |
| insta を 1.43.1 から 1.43.2 にバージョンアップ (codex-rs) | [#3294] chore(deps): bump insta from 1.43.1 to 1.43.2 in /codex-rs | new-features |
| tree-sitter を 0.25.8 から 0.25.9 にバージョンアップ (codex-rs) | [#3295] chore(deps): bump tree-sitter from 0.25.8 to 0.25.9 in /codex-rs | new-features |
| clap を 4.5.45 から 4.5.47 にバージョンアップ (codex-rs) | [#3296] chore(deps): bump clap from 4.5.45 to 4.5.47 in /codex-rs | new-features |
| image を 0.25.6 から 0.25.8 にバージョンアップ (codex-rs) | [#3297] chore(deps): bump image from 0.25.6 to 0.25.8 in /codex-rs | new-features |
| MCP サーバー初期化のエラーハンドリングを改善 | [#3243] fix: improve MCP server initialization error handling #3196 #2346 #2555 | new-features |
| TUI で ctrl+v による貼り付け時に file_list をチェックするよう修正 | [#3211] tui: paste with ctrl+v checks file_list | new-features |
| actions/setup-node@v5 にアップグレード | [#3316] chore: upgrade to actions/setup-node@v5 | new-features |
| getUserAgent MCP メソッドを追加 | [#3320] Add a getUserAgent MCP method | new-features |
| 提案されたコマンドプレビューのハイライト表示を追加 | [#3319] Highlight Proposed Command preview | new-features |

## 0.30.0

| 日本語 | English | Category |
|--------|---------|----------|
| **破壊的変更**: プロジェクト `.env` ファイルの自動読み込みを停止 | **Breaking**: Stop loading project `.env` files automatically. | new-features |
| **セキュリティ/動作**: リクエストを保存しないように変更、OAuth ログインのキャンセルによるポート解放 | **Security/behavior**: Never store requests; free port by canceling pending OAuth login. | new-features |
| **コア/インフラ**: ロールアウトポリシーの導入、共有 HTTP クライアント、残りコンテキストサイズの改善、推論サマリー設定/処理の改良、サンドボックスシェルツール説明の修正、サーバー通知のシリアライズ改善 | **Core/infra**: Introduce rollout policy; shared HTTP client; improved remaining context size; refined reasoning summary config/handling; corrected sandboxed shell tool description; improved server notification serialization. | new-features |
| **TUI/UX**: 大きなコマンドの承認ダイアログ修正、モーダル表示中のステータスタイマー一時停止、ページャーの自動スクロール、bash シンタックスハイライト、mac キーグリフ、高さゼロのパニック回避、@ ファイル検索の改善(隠しディレクトリ対応) | **TUI/UX**: Fix approval dialog for large commands; pause status timer during modals; pager auto‑scroll; bash syntax highlighting; mac key glyphs; avoid zero‑height panic; improved @ file search (hidden dirs). | new-features |
| **DevEx/ドキュメント**: 推奨 VS Code 拡張機能、AGENTS.md のプロンプトと説明の明確化、API キーガイダンスの更新、CI 修正 | **DevEx/docs**: Recommended VS Code extensions; AGENTS.md prompt and clarifications; updated API key guidance; CI fixes. | new-features |
| **依存関係**: `uuid` と `wiremock` のバージョンアップ | **Deps**: Bump `uuid` and `wiremock`. | new-features |
| **Windows**: フルアクセスモードでの承認要求を廃止 | **Windows**: no more asking for approvals on Full Access mode | new-features |
| [#3218] 完了するまで resume を非表示に | [#3218] hide resume until it's complete | new-features |
| [#3217] localhost ポートを解放するため、保留中の OAuth ログインをキャンセルするロジックを追加 | [#3217] Added logic to cancel pending oauth login to free up localhost port | new-features |
| [#3212] リクエストを保存しないように変更 | [#3212] Never store requests | new-features |
| [#3193] chore: ServerNotification のシリアライズを改善 | [#3193] chore: improve serialization of ServerNotification | new-features |
| [#3191] refactor: AttachImage tui イベントを削除 | [#3191] refactor: remove AttachImage tui event | new-features |
| [#3190] 残りコンテキストサイズの計算を修正 | [#3190] Correctly calculate remaining context size | new-features |
| [#3187] UNIX システムでの ZSH と検出の改善 | [#3187] ZSH on UNIX system and better detection | new-features |
| [#3185] MCP: セッション再開と履歴一覧機能を追加 | [#3185] MCP: add session resume + history listing; | new-features |
| [#3184] [破壊的変更] プロジェクト .env ファイルの読み込みを停止 | [#3184] [BREAKING] Stop loading project .env files | new-features |
| [#3172] chore: 推奨拡張機能のリストに rust-lang.rust-analyzer と vadimcn.vscode-lldb を追加 | [#3172] chore: add rust-lang.rust-analyzer and vadimcn.vscode-lldb to the list of recommended extensions | new-features |
| [#3171] [codex] 推論サマリー形式の設定をモデルファミリー設定タイプに移動 | [#3171] [codex] move configuration for reasoning summary format to model family config type | new-features |
| [#3170] fix: serde_as アノテーションを修正しテストで検証 | [#3170] fix: fix serde_as annotation and verify with test | new-features |
| [#3167] tui: ページャーのスクロールを最下部に固定 | [#3167] tui: pager pins scroll to bottom | new-features |
| [#3163] fix: ExecCommandOutputDeltaEvent.chunk により効率的なワイヤーフォーマットを使用 | [#3163] fix: use a more efficient wire format for ExecCommandOutputDeltaEvent.chunk | new-features |
| [#3146] fix: レースコンディションを修正するため、リクエスト送信前にコールバックをマップに追加 | [#3146] fix: add callback to map before sending request to fix race condition | new-features |
| [#3143] mac のキーヒントに ⌥⇧⌃ グリフを使用 | [#3143] Use ⌥⇧⌃ glyphs for key hints on mac | new-features |
| [#3142] bash 行のシンタックスハイライト | [#3142] syntax-highlight bash lines | new-features |
| [#3138] [codex] 推論サマリーの処理を改善 | [#3138] [codex] improve handling of reasoning summary | new-features |
| [#3135] TUI: セッション再開ピッカー (--resume) とクイック再開 (--continue) を追加 | [#3135] TUI: Add session resume picker (--resume) and quick resume (--continue) | new-features |
| [#3134] [tui] /mcp 出力を更新 | [#3134] [tui] Update /mcp output | new-features |
| [#3133] tui: アクティブな exec セル領域の高さがゼロの場合のパニックを回避 | [#3133] tui: avoid panic when active exec cell area is zero height | new-features |
| [#3132] AGENTS.md: codex-rs のテスト承認について明確化 | [#3132] AGENTS.md: clarify test approvals for codex-rs | new-features |
| [#3131] モーダル表示中はステータスタイマーを一時停止 | [#3131] Pause status timer while modals are open | new-features |
| [#3130] 失敗していた CI を修正 | [#3130] Fix failing CI | new-features |
| [#3128] MCP サンドボックス呼び出し | [#3128] MCP sandbox call | new-features |
| [#3127] UserMsgs をカテゴリに分割して TUI に送り返す | [#3127] Dividing UserMsgs into categories to send it back to the tui | new-features |
| [#3123] 履歴付きセッション再開時に Response Items から EventMsgs を再生 | [#3123] Replay EventMsgs from Response Items when resuming a session with history. | new-features |
| [#3122] AGENTS.md ファイルを読み込むプロンプト | [#3122] prompt to read AGENTS.md files | new-features |
| [#3121] プロンプトからキーワードの太字を削除 | [#3121] remove bold the keyword from prompt | new-features |
| [#3118] [codex] `use_experimental_reasoning_summary` toml キー設定を文書化 | [#3118] [codex] document `use_experimental_reasoning_summary` toml key config | new-features |
| [#3117] 認証 URL パラメータに originator を含める | [#3117] Include originator in authentication URL parameters | new-features |
| [#3116] ロールアウトポリシーを導入 | [#3116] Introduce Rollout Policy | new-features |
| [#3112] API キーの権限に関するガイダンスを更新 | [#3112] Update guidance on API key permissions | new-features |
| [#3110] HTTP クライアント作成の共通方法を追加 | [#3110] Add a common way to create HTTP client | new-features |
| [#3093] [mcp-server] 読み取り設定インターフェースを更新 | [#3093] [mcp-server] Update read config interface | new-features |
| [#3087] tui: 大きなコマンドの承認ダイアログを修正 | [#3087] tui: fix approval dialog for large commands | new-features |
| [#3069] core: サンドボックスシェルツールの説明を修正(読み取りはどこでも許可) | [#3069] core: correct sandboxed shell tool description (reads allowed anywhere) | new-features |
| [#3056] chore: 冗長性設定をクリーンアップ | [#3056] chore: Clean up verbosity config | new-features |
| [#2988] サンドボックス非対応プラットフォームで DangerFullAccess パッチを自動承認 | [#2988] Auto-approve DangerFullAccess patches on non-sandboxed platforms | new-features |
| [#2981] @ ファイル検索を改善: .github、.gitlab などの特定の隠しディレクトリを含めるように変更 | [#2981] Improve @ file search: include specific hidden dirs such as .github, .gitlab | new-features |
| [#2666] chore(deps): /codex-rs の wiremock を 0.6.4 から 0.6.5 にアップデート | [#2666] chore(deps): bump wiremock from 0.6.4 to 0.6.5 in /codex-rs | new-features |
| [#2493] chore(deps): /codex-rs の uuid を 1.17.0 から 1.18.0 にアップデート | [#2493] chore(deps): bump uuid from 1.17.0 to 1.18.0 in /codex-rs | new-features |

## 0.29.0

| 日本語 | English | Category |
|--------|---------|----------|
| [#3086] 新しい検索ツールを使用 | [#3086] Use the new search tool | new-features |
| [#1634] core(rollout): rollout モジュールを抽出、リスティング API を追加、ファイルヘッドを返却 | [#1634] core(rollout): extract rollout module, add listing API, and return file heads | new-features |
| [#2895] arboard 依存関係をゲート化して Android/Termux サポートを追加 | [#2895] Add Android/Termux support by gating arboard dependency | new-features |
| [#2894] std::fs API を使用した安定したファイルロックを追加 | [#2894] Add stable file locking using std::fs APIs | new-features |
| [#3074] CodexAuth と AuthManager を core クレートに移動 | [#3074] Move CodexAuth and AuthManager to the core crate | new-features |
| [#3070] API キー使用時のレート制限エラーハンドリングを復元 | [#3070] Add back rate‑limit error handling when using API key | new-features |
| [#3083] exec と apply_patch で "cd foo && ..." をパース | [#3083] Parse “cd foo && ...” for exec and apply_patch | new-features |
| [#3068] 行/スパン構築に ratatui Stylize を優先使用 | [#3068] Prefer ratatui Stylize for constructing lines/spans | new-features |
| [#2918] TUI: 時折発生する UI フリッカーを修正 | [#2918] TUI: fix occasional UI flicker | new-features |
| [#3061] @ 検索結果が保留中の際にローディング状態を表示 | [#3061] Show loading state when @ search results are pending | new-features |
| [#2907] TUI: empty_mcp_output 内の MCP ドキュメントハイパーリンクを修正 | [#2907] TUI: fix MCP docs hyperlink in empty_mcp_output | new-features |
| [#3067] npm モジュールに arm64 Windows 実行ファイルを含める | [#3067] Include arm64 Windows executable in npm module | new-features |
| [#2736] 履歴読み込みを統合 | [#2736] Unify history loading | new-features |
| [#3071] 実験的な推論サマリーを使用 | [#3071] Use experimental reasoning summary | new-features |
| [#2461] gpt-oss 互換性を改善 | [#2461] Improve gpt‑oss compatibility | new-features |
| [#2651] apply-patch: lark 文法を修正 | [#2651] apply‑patch: fix lark grammar | new-features |
| [#3089] Docs: リンクを https://agents.md/ に更新 | [#3089] Docs: update link to https://agents.md/ | new-features |
| [#3082] Docs: config.md のタイポを修正 | [#3082] Docs: fix typo of config.md | new-features |
| [#2667] codex-rs の thiserror を 2.0.12 から 2.0.16 にバンプ | [#2667] Bump thiserror from 2.0.12 to 2.0.16 in codex‑rs | new-features |

## 0.28.0

| 日本語 | English | Category |
|--------|---------|----------|
| [注目の変更] | [Highlights] | new-features |
| [TUI/UX] | [TUI/UX] | new-features |
| [ビルド & CI] | [Build & CI] | new-features |
| [ドキュメント] | [Docs] | new-features |
| [ログ/テレメトリ] | [Logging/Telemetry] | new-features |
| [依存関係] | [Dependencies] | new-features |
| [#3066](https://github.com/openai/codex/pull/3066) 修正: リリースに使用する windows-11-arm イメージに zstd をインストール | [#3066](https://github.com/openai/codex/pull/3066) fix: install zstd on the windows-11-arm image used to cut a release | new-features |
| [#3065](https://github.com/openai/codex/pull/3065) tui: ストリーム配信されたエージェントメッセージの余分な空行を修正 | [#3065](https://github.com/openai/codex/pull/3065) tui: fix extra blank lines in streamed agent messages | new-features |
| [#3063](https://github.com/openai/codex/pull/3063) 設定リファレンステーブルを修正 | [#3063](https://github.com/openai/codex/pull/3063) fix config reference table | new-features |
| [#3062](https://github.com/openai/codex/pull/3062) 修正: Windows ARM ビルドに windows-11-arm を活用 | [#3062](https://github.com/openai/codex/pull/3062) fix: leverage windows-11-arm for Windows ARM builds | new-features |
| [#3060](https://github.com/openai/codex/pull/3060) ユーザーがモデルを変更したタイミングを把握するためのログを追加 | [#3060](https://github.com/openai/codex/pull/3060) Add logs to know when we users are changing the model | new-features |
| [#3047](https://github.com/openai/codex/pull/3047) バグ修正: 空の入力での Enter キーを無視し、空白メッセージのキューイングを回避 | [#3047](https://github.com/openai/codex/pull/3047) Bug fix: ignore Enter on empty input to avoid queuing blank messages | new-features |
| [#3038](https://github.com/openai/codex/pull/3038) tui: AGENTS.md が存在する場合は '/init' の提案を非表示 | [#3038](https://github.com/openai/codex/pull/3038) tui: hide '/init' suggestion when AGENTS.md exists | new-features |
| [#3035](https://github.com/openai/codex/pull/3035) disabled-command メッセージから余分な引用符を削除 | [#3035](https://github.com/openai/codex/pull/3035) remove extra quote from disabled-command message | new-features |
| [#3010](https://github.com/openai/codex/pull/3010) chore(deps): codex-rs の regex-lite を 0.1.6 から 0.1.7 にバージョンアップ | [#3010](https://github.com/openai/codex/pull/3010) chore(deps): bump regex-lite from 0.1.6 to 0.1.7 in /codex-rs | new-features |
| [#2982](https://github.com/openai/codex/pull/2982) 修正: ドキュメントリファクタリング後の正しいリンクで PR テンプレートを適応 | [#2982](https://github.com/openai/codex/pull/2982) Fix: Adapt pr template with correct link following doc refacto | new-features |
| [#2922](https://github.com/openai/codex/pull/2922) tui: タイピングの遅延を修正 | [#2922](https://github.com/openai/codex/pull/2922) tui: fix laggy typing | new-features |
| [#2884](https://github.com/openai/codex/pull/2884) 修正: PR がレビュー用に提出された際にリリースビルド用の Windows キャッシュを読み込むよう試行 | [#2884](https://github.com/openai/codex/pull/2884) fix: try to populate the Windows cache for release builds when PRs are put up for review | new-features |
| [#2877](https://github.com/openai/codex/pull/2877) メッセージスタイリングを再構築 | [#2877](https://github.com/openai/codex/pull/2877) rework message styling | new-features |
| [#2870](https://github.com/openai/codex/pull/2870) tui: get_cursor_position のエラーをキャッチ | [#2870](https://github.com/openai/codex/pull/2870) tui: catch get_cursor_position errors | new-features |

## 0.27.0

| 日本語 | English | Category |
|--------|---------|----------|
| [#2881] agents.md で単に fix -p を提案するよう修正 | [#2881] Suggest just fix -p in agents.md | new-features |
| [#2878] fix: MCP サーバーで Mutex を早期に解放 | [#2878] fix: drop Mutexes earlier in MCP server | new-features |
| [#2876] fix: tx_approve.send() 呼び出し前に Mutex を解放 | [#2876] fix: drop Mutex before calling tx_approve.send() | new-features |
| [#2874] fix: unbounded channel に切り替え | [#2874] fix: switch to unbounded channel | new-features |
| [#2873] fix: 不要な flush() 呼び出しを削除 | [#2873] fix: remove unnecessary flush() calls | new-features |
| [#2871] fix: CI で cargo clippy に --profile を指定 | [#2871] fix: specify --profile to cargo clippy in CI | new-features |
| [#2868] バグ修正: コメント内の `brew install codex` が実行されるのを防止 | [#2868] Bugfix: Prevents `brew install codex` in comment to be executed | new-features |
| [#2864] CI リリースビルドを修正 | [#2864] Fix CI release build | new-features |

## 0.23.0

| 日本語 | English | Category |
|--------|---------|----------|
| ハイライト | Highlights | new-features |
| マージされた全PRリスト | Full list of merged PRs | new-features |

## 0.22.0

| 日本語 | English | Category |
|--------|---------|----------|
| https://github.com/openai/codex/pull/2294 ログインサーバーを Python から Rust に移行し、https://github.com/openai/codex/issues/2000 と https://github.com/openai/codex/issues/2044 の両方の問題を解決 | https://github.com/openai/codex/pull/2294 moves the login server from Python to Rust, which should help with both https://github.com/openai/codex/issues/2000 and https://github.com/openai/codex/issues/2044. | new-features |
| https://github.com/openai/codex/pull/2029 Markdown ストリーミングのサポートを追加 | https://github.com/openai/codex/pull/2029 adds support for markdown streaming | new-features |
| https://github.com/openai/codex/pull/2270 明るい背景使用時の差分表示の可読性を改善 | https://github.com/openai/codex/pull/2270 improves the UI treatment of diffs so they are more readable when using a light background | new-features |
| https://github.com/openai/codex/pull/2113 `ctrl-z` で TUI を一時停止できるように変更 | https://github.com/openai/codex/pull/2113 `ctrl-z` can be used to suspend the TUI | new-features |

## 0.21.0

| 日本語 | English | Category |
|--------|---------|----------|
| https://github.com/openai/codex/pull/2200 プロンプトキャッシュキーを送信してキャッシング効率を向上（トークン効率が改善されるはず！） | https://github.com/openai/codex/pull/2200 send prompt cache key for better caching (should improve token efficiency!) | new-features |
| https://github.com/openai/codex/pull/2202 複数行コマンドを分割して可読性を向上 | https://github.com/openai/codex/pull/2202 split multiline commands to improve readability | new-features |
| https://github.com/openai/codex/pull/2095 exec コマンドをパースして UI でより見やすくフォーマット | https://github.com/openai/codex/pull/2095 Parse exec commands and format them more nicely in the UI | new-features |
| https://github.com/openai/codex/pull/2186 `applypatch` コマンドを `apply_patch` コマンド文字列として認識 | https://github.com/openai/codex/pull/2186 recognize `applypatch` command as `apply_patch` command string | new-features |
| https://github.com/openai/codex/pull/2183 出力切り詰めメッセージをツール呼び出し結果に含めて、モデルが期待した完全な出力を取得できなかった場合に通知 | https://github.com/openai/codex/pull/2183 Include output truncation message in tool call results to tell the model when it did not get the full output from a command that it might have expected | new-features |
| https://github.com/openai/codex/pull/2162 `/compact` コマンド後にフィードバックメッセージを表示し、差分が送信されなかった場合の問題を修正 | https://github.com/openai/codex/pull/2162 show feedback message after `/compact` command, fixing an issue when no deltas were sent | new-features |
| https://github.com/openai/codex/pull/2050 `apply_patch` の差分プレビューを表示 | https://github.com/openai/codex/pull/2050 show diff preview for `apply_patch` | new-features |
| https://github.com/openai/codex/pull/1975 MCP ツールの JSON スキーマサニタイゼーションを追加して内部 JsonSchema enum との互換性を確保（外部貢献者: @yaroslavyaroslav さんに感謝！） | https://github.com/openai/codex/pull/1975 add JSON schema sanitization for MCP tools to ensure compatibility with internal JsonSchema enum external contributor: Thanks @yaroslavyaroslav! | new-features |

## 0.20.0

| 日本語 | English | Category |
|--------|---------|----------|
| https://github.com/openai/codex/pull/2035 `@openai/codex` の `npm` リリースが、古い TypeScript CLI へのフォールバックではなく Rust CLI を実行するように変更（TypeScript コードは https://github.com/openai/codex/pull/2048 でリポジトリから削除されました） | https://github.com/openai/codex/pull/2035 the `npm` release of `@openai/codex` now runs the Rust CLI instead of falling back to the old TypeScript CLI (TypeScript code was removed from the repo in https://github.com/openai/codex/pull/2048) | new-features |
| https://github.com/openai/codex/pull/2019 Windows 向けに 2 つの問題を修正 | https://github.com/openai/codex/pull/2019 fixes two things for Windows: | new-features |
| https://github.com/openai/codex/pull/2042 `codex login` での Python 証明書の問題を改善/修正: https://github.com/openai/codex/issues/2044 | https://github.com/openai/codex/pull/2042 should help/fix the Python certificates issue with `codex login`: https://github.com/openai/codex/issues/2044 | new-features |

## 0.16.0

| 日本語 | English | Category |
|--------|---------|----------|
| 容量に関するエラーメッセージの小規模な修正: https://github.com/openai/codex/pull/1947 | Small fix for an error message around capacity: https://github.com/openai/codex/pull/1947 | new-features |
| 本日のより重要なアップグレードは 0.15.0 へのアップグレード: https://github.com/openai/codex/releases/rust-v0.15.0 | Though the more significant upgrade today is to 0.15.0: https://github.com/openai/codex/releases/rust-v0.15.0 | new-features |

## 0.13.0

| 日本語 | English | Category |
|--------|---------|----------|
| gpt-oss: OpenAIのオープンウェイト言語モデル（120Bパラメータと20Bパラメータの2種類）、推論・エージェントタスク・多目的開発向け、Apache 2.0ライセンス | https://github.com/openai/gpt-oss | new-features |
| `--oss` フラグを導入し、gpt-oss モデルを使用可能に | https://github.com/openai/codex/pull/1848 | new-features |

## 0.12.0

| 日本語 | English | Category |
|--------|---------|----------|
| 0.11.0 で発生したリグレッションを修正（https://github.com/openai/codex/issues/1796）するために https://github.com/openai/codex/pull/1826 を含む | Includes https://github.com/openai/codex/pull/1826 to fix a regression introduced in 0.11.0: https://github.com/openai/codex/issues/1796. | new-features |

## 0.11.0

| 日本語 | English | Category |
|--------|---------|----------|
| https://github.com/openai/codex/issues/1247 コピー&ペーストが動作するようになりました | https://github.com/openai/codex/issues/1247 copy/paste works now | new-features |
| https://github.com/openai/codex/issues/1502 ターミナルのネイティブスクロールを使用 | https://github.com/openai/codex/issues/1502 use the terminal's native scrolling | new-features |
| https://github.com/openai/codex/pull/1527 `/compact` コマンドのサポートを追加 | https://github.com/openai/codex/pull/1527 adds support for the `/compact` command | new-features |
| https://github.com/openai/codex/pull/1726 実験的なプランニングツールを導入 | https://github.com/openai/codex/pull/1726 introduces an experimental planning tool | new-features |
| https://github.com/openai/codex/pull/1705 セッションのサンドボックス経由で `apply_patch` を実行するセキュリティ修正 | https://github.com/openai/codex/pull/1705 security fix to ensure `apply_patch` is run through the sandbox for the session | new-features |
| https://github.com/openai/codex/pull/1764 CLI が新しいバージョンをチェックし、古い場合に通知するようになりました | https://github.com/openai/codex/pull/1764 CLI now checks for new versions and lets you know if you are out of date | new-features |

## 0.9.0

| 日本語 | English | Category |
|--------|---------|----------|
| `codex mcp` の多数の修正 | Numerous fixes to `codex mcp`. | new-features |
| `codex` が終了した際にCodexが起動したシェルコマンドに `SIGTERM` が送信されるようにする修正（Linuxのみ）https://github.com/openai/codex/pull/1626 | https://github.com/openai/codex/pull/1626 to ensure shell commands spawned by Codex get `SIGTERM` when `codex` is killed (Linux only) | new-features |
| ripgrep/`rg` の特定フラグを自動承認しないようにする修正 https://github.com/openai/codex/pull/1644 | Do not auto-approve certain flags for ripgrep/`rg` https://github.com/openai/codex/pull/1644 | new-features |

## 0.8.0

| 日本語 | English | Category |
|--------|---------|----------|
| https://github.com/openai/codex/pull/1594 により、TUI および `codex exec` 使用時にモデルからの応答がストリーミングされるようになりました | As of https://github.com/openai/codex/pull/1594, we now stream the response from the model in the TUI and when using `codex exec` | new-features |
| https://github.com/openai/codex/pull/1589 で `ctrl-d` の動作を変更し、コンポーザーが空の場合のみ TUI を終了するようになりました(Codex エージェントが処理中でコンポーザーが非表示の場合は引き続き TUI を終了します) | https://github.com/openai/codex/pull/1589 changes `ctrl-d` so it only exits the TUI if the composer is empty (it will still exit the TUI if the composer is hidden because the Codex agent is thinking) | new-features |
| https://github.com/openai/codex/pull/1596 により `~/.codex/sessions` フォルダの構成が変更され、`YYYY/MM/DD` サブフォルダが作成されるようになりました。これにより最近のセッションの検索が容易になり、以前は `~/.codex/sessions` のエントリ数が無制限に増加してファイルシステムのパフォーマンスが低下する可能性があった問題が解消されます | As a heads up, https://github.com/openai/codex/pull/1596 changes the organization of the `~/.codex/sessions` folder so it has `YYYY/MM/DD` subfolders. This should make it easier to find recent sessions and avoid degrading filesystem performance because previously `~/.codex/sessions` could end up with an unbounded number of entries | new-features |
| https://github.com/openai/codex/pull/1571 で長い MCP ツール名を適切に処理できなかった長年の問題を修正しました(関連する GitHub issue は https://github.com/openai/codex/issues/1289) | https://github.com/openai/codex/pull/1571 fixes a longstanding issue where we failed to handle long MCP tool names gracefully (https://github.com/openai/codex/issues/1289 was the relevant GitHub issue) | new-features |
| https://github.com/openai/codex/pull/1603 で `codex exec` に `--json` フラグを追加し、JSONL 形式で標準出力に出力できるようになりました | https://github.com/openai/codex/pull/1603 introduced a `--json` flag to `codex exec` so that it prints output as JSONL to stdout | new-features |
| https://github.com/openai/codex/pull/1590 で `npm` 版の Node.js スクリプト経由で Codex CLI を起動した際、Codex CLI プロセスと Node.js プロセスが同時に終了するよう改善しましたが、https://github.com/openai/codex/issues/1570 の詳細によると、この特定の問題を解決するには不十分なようです | https://github.com/openai/codex/pull/1590 tries to ensure that when the Codex CLI is launched via the Node.js script in the `npm` version that both the Codex CLI process and Node.js process exit together, though from the additional details on https://github.com/openai/codex/issues/1570, it seems like it is not sufficient to fix that specific problem. | new-features |
| https://github.com/openai/codex/pull/1590 により、Windows 上の `npm` 版がクラッシュするのではなく TypeScript 版にフォールバックするようになり、https://github.com/openai/codex/issues/1573 を修正しました | Though https://github.com/openai/codex/pull/1590 should make it so that, on Windows, the `npm` version will fall back to the TypeScript version (for now) rather than just crashing, fixing https://github.com/openai/codex/issues/1573. | new-features |

## 0.3.0

| 日本語 | English | Category |
|--------|---------|----------|
| 非ASCII文字がCLIをクラッシュさせる問題を修正: https://github.com/openai/codex/issues/1450 (@ryozi-tnによる修正 https://github.com/openai/codex/pull/1467 に感謝) | Fixes an issue where non-ASCII characters were crashing the CLI: https://github.com/openai/codex/issues/1450 (huge thanks to @ryozi-tn for the fix in https://github.com/openai/codex/pull/1467) | new-features |
| `--sandbox`フラグのサポートを追加し、このオプションに関する`config.toml`の破壊的変更を実施。詳細は https://github.com/openai/codex/pull/1476 を参照 | Adds support for a `--sandbox` flag and makes some breaking changes to `config.toml` around this option. See https://github.com/openai/codex/pull/1476 for details. | new-features |
| モデルプロバイダーへのリクエスト時にカスタムHTTPヘッダーを設定可能に: https://github.com/openai/codex/pull/1473 | Makes it possible to configure custom HTTP headers when making requests to model providers: https://github.com/openai/codex/pull/1473. | new-features |

