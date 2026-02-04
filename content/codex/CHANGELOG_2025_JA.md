# OpenAI Codex 変更履歴 (2025年)

このファイルは OpenAI Codex の2025年リリース分の変更履歴を日本語で記載しています。

---

## 0.74.0

| 日本語 | English | Category |
|--------|---------|----------|
| gpt-5.2-codexを発表 - 知識、推論、コーディングを改善した最新フロンティアモデル。[詳細はこちら](https://openai.com/index/introducing-gpt-5-2-codex) | Introducing gpt-5.2-codex our latest frontier model with improvements across knowledge, reasoning and coding. [Learn more](https://openai.com/index/introducing-gpt-5-2-codex) | new-features |
| `experimental`機能を試すための新しいスラッシュコマンド`/experimental`を追加 | Add new slash command `/experimental` for trying out `experimental` features | new-features |
| ゴーストスナップショット警告の無効化トグル (#8178) | Ghost snapshot warning disable toggle (#8178) | new-features |
| UI改善（バックグラウンドターミナル、ピッカーのクリーンアップ） (#8255, #8232) | UI polish (background terminals, picker cleanup) (#8255, #8232). | new-features |
| #8266 feat: ベータ機能に名前を追加 | #8266 feat: add name to beta features | new-features |
| #8265 caribou | #8265 caribou | new-features |
| #8264 docs: codex resume --all の説明を明確化（CWD列とフィルタリング） | #8264 docs: clarify codex resume --all (CWD column & filtering) | new-features |
| #8255 nit: UIバックグラウンドターミナル | #8255 nit: ui background terminals | new-features |
| #8249 chore: AsRef<Path>を&Pathより優先 | #8249 chore: prefer AsRef<Path> to &Path | new-features |
| #8248 chore: config_loaderのMac固有ロジックの読み込みを簡素化 | #8248 chore: simplify loading of Mac-specific logic in config_loader | new-features |
| #8244 スキル用の機能フラグを再導入 | #8244 Reintroduce feature flags for skills. | new-features |
| #8243 不正なスキルの読み込みをフェイルオープンに変更 | #8243 Make loading malformed skills fail-open | new-features |
| #8235 fix: ConfigBuilderを導入 | #8235 fix: introduce ConfigBuilder | new-features |
| #8232 chores: ピッカーのクリーンアップ | #8232 chores: clean picker | new-features |
| #8228 移行リンクを表示 | #8228 Show migration link | new-features |
| #8226 chore: Config インスタンス化のコードパスをクリーンアップ | #8226 chore: cleanup Config instantiation codepaths | new-features |
| #8221 「Team」を「Business」に変更し、Educationを追加 | #8221 Change “Team” to “Buisness” and add Education | new-features |
| #8220 SYSTEMスキルをサポート | #8220 Support SYSTEM skills. | new-features |
| #8216 ACL読み取り設定の速度と信頼性を改善 | #8216 speed and reliability improvements for setting reads ACLs | new-features |
| #8209 feat: モデルピッカー | #8209 feat: model picker | new-features |
| #8205 fix: ConfigToml構造体でPathBufをAbsolutePathBufに変更 | #8205 fix: PathBuf -> AbsolutePathBuf in ConfigToml struct | new-features |
| #8203 npmパッケージのステージング時に新しいWindowsバイナリをダウンロード | #8203 download new windows binaries when staging npm package | new-features |
| #8201 chore: ベータ機能を追加 | #8201 chore: add beta features | new-features |
| #8199 chore: ベータプログラムから機能を戻す | #8199 chore: move back stuff out of beta program | new-features |
| #8198 feat: list_modelsをノンブロッキング化 | #8198 feat: make list_models non-blocking | new-features |
| #8196 fix: セッションのダウングレード | #8196 fix: session downgrade | new-features |
| #8194 fix: スキルディレクトリの適切なクリーンアップ | #8194 fix: proper skills dir cleanup | new-features |
| #8186 nit: ドキュメント | #8186 nit: doc | new-features |
| #8182 nit: unified_execツールの不要な分岐を削除 | #8182 nit: drop dead branch with unified_exec tool | new-features |
| #8181 nit: イベントレンダリングの競合を防止 | #8181 nit: prevent race in event rendering | new-features |
| #8178 feat: ゴーストスナップショット警告を無効化する設定を追加 | #8178 feat: add config to disable warnings around ghost snapshot | new-features |
| #8175 fix: 不安定なテスト 6 | #8175 fix: flaky test 6 | new-features |
| #8163 モデルスクリプトを修正 | #8163 fix the models script | new-features |
| #8153 静的ファイルからモデルを読み込み | #8153 Load models from static file | new-features |
| #8152 [app-server] 新しいRawResponseItem v2イベントを追加 | #8152 [app-server] add new RawResponseItem v2 event | new-features |
| #8151 chore: listMcpServerStatusをノンブロッキングに更新 | #8151 chore: update listMcpServerStatus to be non-blocking | new-features |
| #8149 user_agentヘッダーを追加 | #8149 Add user_agent header | new-features |
| #8141 chore(apply-patch) Unicodeシナリオ | #8141 chore(apply-patch) unicode scenario | new-features |
| #8140 npmパッケージに新しいWindowsバイナリを含める | #8140 include new windows binaries in npm package. | new-features |
| #8127 "chore: review in read-only (#7593)" をリバート | #8127 Revert “chore: review in read-only (#7593)” | new-features |
| #8124 tui2のコンパイルエラーを修正 | #8124 fix tui2 compile error | new-features |
| #8122 docs: tui2ビューポートロードマップを改善 | #8122 docs: refine tui2 viewport roadmap | new-features |
| #8118 モデルのハードコードバージョン用ワークフローを追加 | #8118 Add a workflow for a hardcoded version of models | new-features |
| #8117 feat: 統合exec フッター | #8117 feat: unified exec footer | new-features |
| #8114 chore: listMcpServersをlistMcpServerStatusに更新 | #8114 chore: update listMcpServers to listMcpServerStatus | new-features |
| #8111 chore(apply-patch) 呼び出しテストを移動 | #8111 chore(apply-patch) move invocation tests | new-features |
| #8109 "feat: unified exec footer" をリバート | #8109 Revert “feat: unified exec footer” | new-features |
| #8108 feat(sdk): TypeScript SDKにxhigh reasoning effortサポートを追加 | #8108 feat(sdk): add xhigh reasoning effort support to TypeScript SDK | new-features |
| #8102 Node 24互換性のためにGitHub Actionsをアップグレード | #8102 Upgrade GitHub Actions for Node 24 compatibility | new-features |
| #8098 パブリックスキルを追加し、リポジトリスキルの検出とエラーUXを改善 | #8098 Add public skills + improve repo skill discovery and error UX | new-features |
| #8095 feat: ConfigLayerNameを単純なenumではなく非結合ユニオンに変更 | #8095 feat: change ConfigLayerName into a disjoint union rather than a simple enum | new-features |
| #8094 昇格されたサンドボックスセットアップのバグ修正とパフォーマンス改善 | #8094 bug fixes and perf improvements for elevated sandbox setup | new-features |
| #8089 refactor(tui2): トランスクリプト行メタデータを明示的にする | #8089 refactor(tui2): make transcript line metadata explicit | new-features |
| #8088 feat: .codexが書き込み可能なルートのサブフォルダの場合、サンドボックスに対して読み取り専用にする | #8088 feat: if .codex is a sub-folder of a writable root, then make it read-only to the sandbox | new-features |
| #8086 chore(app-server): スタブ化されたthread/compact APIを削除 | #8086 chore(app-server): remove stubbed thread/compact API | new-features |
| #8085 chore: Macコード署名のリファクタリング | #8085 chore: mac codesign refactor | new-features |
| #8084 chore(ci): macOSランナー用のHomebrew origin/mainワークアラウンドを削除 | #8084 chore(ci): drop Homebrew origin/main workaround for macOS runners | new-features |
| #8079 docs: config.mdのgpt-5.2タイポを修正 | #8079 docs: fix gpt-5.2 typo in config.md | new-features |
| #8077 Windowsサンドボックス機能のより良い命名 | #8077 better name for windows sandbox features | new-features |
| #8075 feat: unified_execがshell_commandにフォールバックするようにする | #8075 feat: fallback unified_exec to shell_command | new-features |
| #8071 feat: 実験的メニュー | #8071 feat: experimental menu | new-features |
| #8067 feat: 統合exec フッター | #8067 feat: unified exec footer | new-features |
| #8060 feat: 最後のユーザーターンで圧縮しない | #8060 feat: do not compact on last user turn | new-features |
| #8057 chore: レビュー結果の重複を削除 | #8057 chore: dedup review result duplication | new-features |
| #8053 nit: 通常タスク用のトレーススパン | #8053 nit: trace span for regular task | new-features |
| #8052 feat: ターン終了時にunified_execを閉じる | #8052 feat: close unified_exec at end of turn | new-features |
| #8020 ローカル実行時に失敗するmcp誘導テストを修正 | #8020 Fixes mcp elicitation test that fails for me when run locally | new-features |
| #8004 Fix: パスチェックによるBunグローバルインストールの検出 | #8004 Fix: Detect Bun global install via path check | new-features |
| #8000 WSLマウントポイント使用時の大文字小文字を区別しない再開マッチングを修正 | #8000 Fixed resume matching to respect case insensitivity when using WSL mount points | new-features |
| #7997 feat: リモートモデルを破壊せずにマージ | #7997 feat: merge remote models instead of destructing | new-features |
| #7969 Fix: 無効なWindowsファイル名を避けるためOption<()>スキーマ生成をスキップ (#7479) | #7969 Fix: Skip Option<()> schema generation to avoid invalid Windows filenames (#7479) | new-features |
| #7961 TUIイベントループをリファクタリングし、crosstermイベントストリームの削除+再作成を可能に | #7961 refactor TUI event loop to enable dropping + recreating crossterm event stream | new-features |
| #7956 並列ツール呼び出しを修正 | #7956 fix parallel tool calls | new-features |
| #7935 exec-server: エラーの追加コンテキスト | #7935 exec-server: additional context for errors | new-features |
| #7931 chore: 編集時にコメントを保持 | #7931 chore: persist comments in edit | new-features |
| #7791 chore(shell_command) フリーフォームタイムアウト出力を修正 | #7791 chore(shell_command) fix freeform timeout output | new-features |
| #7778 feat: approval_policyの値を制約 | #7778 feat: Constrain values for approval_policy | new-features |
| #7601 WIP: TUIビューポート、履歴印刷、選択/コピーを再設計 | #7601 WIP: Rework TUI viewport, history printing, and selection/copy | new-features |

## 0.71.0

| 日本語 | English | Category |
|--------|---------|----------|
| （翻訳待ち） | Introducing gpt-5.2 our latest frontier model with improvements across knowledge, reasoning and coding. [Learn More](https://openai.com/index/introducing-gpt-5-2/) | new-features |

## 0.65.0

| 日本語 | English | Category |
|--------|---------|----------|
| Codex Max をデフォルトに (#7566): Codex Max がデフォルトモデルになり、async-in-sync コードに関連する TUI のパニックを修正 | Codex Max as default (#7566): Codex Max is now the default model, and a TUI panic related to async-in-sync code was fixed. | new-features |
| Resume UX の改善 (#7302, #7303): /resume スラッシュコマンドを追加し、resume のパフォーマンスを改善して作業の再開をより高速化 | Better resume UX (#7302, #7303): Added a /resume slash command and improved resume performance so picking work back up is snappier. | new-features |
| ツールチップ & ヒント UX (#7557, #7440): ヒント/ツールチップを太字の「Tip」ラベル付きマークダウンでレンダリングし、アプリ全体で Codex ツールチップを充実化 | Tooltips & tips UX (#7557, #7440): Tips/tooltips are rendered via markdown with a bold “Tip” label and richer Codex tooltips across the app. | new-features |
| TUI の改善 (#7530, #7448, #7514, #7461): TUI に Ctrl‑P/N ナビゲーション、画面行数制限付きシェル出力、Windows クリップボード画像ペーストの復元、レイアウトをクリーンにするリファクタリングを追加 | TUI quality-of-life (#7530, #7448, #7514, #7461): TUI gets Ctrl‑P/N navigation, screen-line-capped shell output, restored Windows clipboard image paste, and a refactor for cleaner layout. | new-features |
| 履歴とコンテキストの整理 (#6242, #7483, #7545, #7431, #7483): history.jsonl を history.max_bytes でトリミング、一般的な不要ディレクトリ(__pycache__ を含む)をデフォルトで無視、ペーストプレースホルダーを区別して維持 | History and context hygiene (#6242, #7483, #7545, #7431, #7483): history.jsonl is trimmed by history.max_bytes, common junk dirs (incl. __pycache__) are ignored by default, and paste placeholders stay distinct. | new-features |
| ヒントのレンダリングに markdown を使用 #7557 @[Jeremy Rose] | use markdown for rendering tips #7557 @[Jeremy Rose] | new-features |
| codex max を移行 #7566 @[Ahmed Ibrahim] | Migrate codex max #7566 @[Ahmed Ibrahim] | new-features |
| あまり価値を追加しない #7481 のテストを削除 #7558 @[Eric Traut] | Remove test from #7481 that doesn't add much value #7558 @[Eric Traut] | new-features |
| [app-server] config の `file_path` をオプショナルに #7560 @[Celia Chen] | [app-server] make `file_path` for config optional #7560 @[Celia Chen] | new-features |
| model family を models manager に移行 #7565 @[Ahmed Ibrahim] | Migrate model family to models manager #7565 @[Ahmed Ibrahim] | new-features |
| `tui` を models manager を使用するように移行 #7555 @[Ahmed Ibrahim] | Migrate `tui` to use models manager #7555 @[Ahmed Ibrahim] | new-features |
| `ModelsManager` を導入し、`app-server` を移行 #7552 @[Ahmed Ibrahim] | Introduce `ModelsManager` and migrate `app-server` to use it. #7552 @[Ahmed Ibrahim] | new-features |
| 修正: transcript overlay で長い実行行を折り返し #7481 @[muyuanjin] | fix: wrap long exec lines in transcript overlay #7481 @[muyuanjin] | new-features |
| 修正: Features はセッション/スレッドの寿命中は不変にすべき #7540 @[Michael Bolin] | fix: Features should be immutable over the lifetime of a session/thread #7540 @[Michael Bolin] | new-features |
| 機能: $ または /skills でスキルの一覧表示と選択をサポート #7506 @[xl-openai] | feat: Support listing and selecting skills via $ or /skills #7506 @[xl-openai] | new-features |
| [app-server] 修正: turn/plan/updated に thread_id を追加 #7553 @[Owen Lin] | [app-server] fix: add thread_id to turn/plan/updated #7553 @[Owen Lin] | new-features |
| 機能(tui): textarea で Ctrl-P/N を矢印ナビゲーションにマッピング #7530 @[Aofei Sheng] | feat(tui): map Ctrl-P/N to arrow navigation in textarea #7530 @[Aofei Sheng] | new-features |
| 修正(tui): ユーザーシェル出力を画面行数で制限 #7448 @[muyuanjin] | fix(tui): limit user shell output by screen lines #7448 @[muyuanjin] | new-features |
| model preset を移行 #7542 @[Ahmed Ibrahim] | Migrate model preset #7542 @[Ahmed Ibrahim] | new-features |
| 修正: main #7546 @[jif-oai] | fix: main #7546 @[jif-oai] | new-features |
| 機能: 除外ディレクトリに pycache を追加 #7545 @[jif-oai] | feat: add pycache to excluded directories #7545 @[jif-oai] | new-features |
| chore: unified exec サンドボックス検出を更新 #7541 @[jif-oai] | chore: update unified exec sandboxing detection #7541 @[jif-oai] | new-features |
| slash resume を追加 #7302 @[Ahmed Ibrahim] | add slash resume #7302 @[Ahmed Ibrahim] | new-features |
| chore: app-server feedback/upload で conversation_id を thread_id に #7538 @[Owen Lin] | chore: conversation_id -> thread_id in app-server feedback/upload #7538 @[Owen Lin] | new-features |
| chore: app-server から未使用の TodoList アイテムを削除 #7537 @[Owen Lin] | chore: delete unused TodoList item from app-server #7537 @[Owen Lin] | new-features |
| chore: app-server README を更新 #7510 @[Owen Lin] | chore: update app-server README #7510 @[Owen Lin] | new-features |
| chore: bun env var detect を削除 #7534 @[Shijie Rao] | chore: remove bun env var detect #7534 @[Shijie Rao] | new-features |
| 機能: app server で mcp servers の一覧表示をサポート #7505 @[Shijie Rao] | feat: support list mcp servers in app server #7505 @[Shijie Rao] | new-features |
| seatbelt: openpty() を許可 #7507 @[Jeremy Rose] | seatbelt: allow openpty() #7507 @[Jeremy Rose] | new-features |
| 機能: codex tool tips #7440 @[jif-oai] | feat: codex tool tips #7440 @[jif-oai] | new-features |
| 機能: poisoning を防ぐための遡及的な画像プレースホルダー #6774 @[jif-oai] | feat: retroactive image placeholder to prevent poisoning #6774 @[jif-oai] | new-features |
| 機能: apply patch の場合のモデル警告 #7494 @[jif-oai] | feat: model warning in case of apply patch #7494 @[jif-oai] | new-features |
| 修正(tui) ネイティブ Windows でクリップボードからの画像ペーストをサポート #7514 @[Dylan Hurd] | fix(tui) Support image paste from clipboard on native Windows #7514 @[Dylan Hurd] | new-features |
| 修正(unified_exec): unified_exec shell 使用時にプラットフォームデフォルトシェルを使用 #7486 @[Robby He] | fix(unified_exec): use platform default shell when unified_exec shell… #7486 @[Robby He] | new-features |
| デバイスコード認証の文字列を更新 #7498 @[Matthew Zeng] | Update device code auth strings. #7498 @[Matthew Zeng] | new-features |
| 修正: デッドコードとしてマークされたインライン関数 #7508 @[Michael Bolin] | fix: inline function marked as dead code #7508 @[Michael Bolin] | new-features |
| resume のパフォーマンスを改善 #7303 @[Ahmed Ibrahim] | improve resume performance #7303 @[Ahmed Ibrahim] | new-features |
| 修正: npx のパス解決バグ #7134 @[Michael Bolin] | fix: path resolution bug in npx #7134 @[Michael Bolin] | new-features |
| 重複長のペーストプレースホルダーを区別して維持 #7431 @[Joshua Sutton] | Ensure duplicate-length paste placeholders stay distinct #7431 @[Joshua Sutton] | new-features |
| 機能: @openai/codex-shell-tool-mcp の --version フラグをサポート #7504 @[Michael Bolin] | feat: support --version flag for @openai/codex-shell-tool-mcp #7504 @[Michael Bolin] | new-features |
| リファクタリング: tui.rs からいくつかの部分を抽出 #7461 @[Josh McKinney] | refactor: tui.rs extract several pieces #7461 @[Josh McKinney] | new-features |
| chore: create_approval_requirement_for_command を async fn に #7501 @[Michael Bolin] | chore: make create_approval_requirement_for_command an async fn #7501 @[Michael Bolin] | new-features |
| `history.max_bytes` が設定されている場合に `history.jsonl` をトリミング #6242 @[liam] | Trim `history.jsonl` when `history.max_bytes` is set #6242 @[liam] | new-features |
| 修正: TurnError の serde(flatten) アノテーションを削除 #7499 @[Owen Lin] | fix: remove serde(flatten) annotation for TurnError #7499 @[Owen Lin] | new-features |
| 新しいスナップショットにクレジット情報が含まれていない場合にクレジットを保持 #7490 @[zhao-oai] | persisting credits if new snapshot does not contain credit info #7490 @[zhao-oai] | new-features |
| 修正: ロックが不要になったら解放 #7500 @[Michael Bolin] | fix: drop lock once it is no longer needed #7500 @[Michael Bolin] | new-features |
| execpolicy ヘルパー #7032 @[zhao-oai] | execpolicy helpers #7032 @[zhao-oai] | new-features |
| コンテキストウィンドウが不明な場合に使用トークンを表示 #7497 @[Ahmed Ibrahim] | Show token used when context window is unknown #7497 @[Ahmed Ibrahim] | new-features |
| ノンブロッキング mutex を使用 #7467 @[Ahmed Ibrahim] | Use non-blocking mutex #7467 @[Ahmed Ibrahim] | new-features |
| 修正: ゴーストスナップショットで未追跡パスのみを追跡 #7470 @[lionel-oai] | Fix: track only untracked paths in ghost snapshots #7470 @[lionel-oai] | new-features |
| 機能: 標準ディレクトリを無視 #7483 @[jif-oai] | feat: ignore standard directories #7483 @[jif-oai] | new-features |
| 修正: app-server v2 タイプに ts number アノテーションを追加 #7492 @[Owen Lin] | fix: add ts number annotations for app-server v2 types #7492 @[Owen Lin] | new-features |
| 機能: unified_exec 用に apply_patch をインターセプト #7446 @[jif-oai] | feat: intercept apply_patch for unified_exec #7446 @[jif-oai] | new-features |
| chore: app-server README から experimental/unstable の記述を削除 #7474 @[Owen Lin] | chore: remove mention of experimental/unstable from app-server README #7474 @[Owen Lin] | new-features |
| リクエストロギングを復元 #7471 @[pakrym-oai] | Add request logging back #7471 @[pakrym-oai] | new-features |
| 機能: app-server v2 にワンオフコマンドを追加 #7452 @[jif-oai] | feat: add one off commands to app-server v2 #7452 @[jif-oai] | new-features |
| 機能: モデルに警告メッセージを追加 #7445 @[jif-oai] | feat: add warning message for the model #7445 @[jif-oai] | new-features |
| chore: 全体をレビュー #7444 @[jif-oai] | chore: review everywhere #7444 @[jif-oai] | new-features |
| 機能: エイリアスの圧縮 #7442 @[jif-oai] | feat: alias compaction #7442 @[jif-oai] | new-features |
| 機能: skills.md の実験的サポート #7412 @[Thibault Sottiaux] | feat: experimental support for skills.md #7412 @[Thibault Sottiaux] | new-features |

## 0.63.0

| 日本語 | English | Category |
|--------|---------|----------|
| ウェブ検索を有効にすると `Invalid value: 'other'.` エラーが発生するバグを修正 | Fixes the bug where enabling web search can lead to `Invalid value: 'other'.` errors. | new-features |

## 0.61.0

| 日本語 | English | Category |
|--------|---------|----------|
| ExecPolicy2統合とexec-serverの準備: coreにExecPolicy2を統合し、exec-serverのリファクタリングと移行の基盤を整備、新しいポリシーエンジンの導入を支援するクイックスタートドキュメントを追加 | ExecPolicy2 integration and exec-server prep: core now integrates ExecPolicy2 with exec-server refactors and cutover groundwork, plus quickstart docs to help teams adopt the new policy engine. | new-features |
| 切り詰め処理とエラー報告の改善: 単一パスでの切り詰めにより重複処理を削減し、エラーイベントにオプションのステータスコードを追加して可観測性を向上 | Improved truncation and error reporting: single-pass truncation reduces duplicate work, and error events can now carry optional status codes for clearer observability. | new-features |
| シェルの信頼性とサンドボックス警告: フォールバックシェル選択を強化し、書き込み可能ディレクトリの警告を抑制、Windows上のメッセージング表示を改善 | Shell reliability and sandbox warnings: fallback shell selection is hardened and world-writable directory warnings are less noisy, including improved messaging on Windows. | new-features |
| UX修正: 推論表示の修正、`/review`後のレビューフッターコンテキストの保持、モデル移行画面を初回のみ表示するよう変更 | UX fixes: corrected reasoning display, preserved review footer context after `/review`, and the model migration screen now shows only once. | new-features |
| fix(app-server) Windowsの書き込み可能ディレクトリ警告を移動 (#6916) — @dylan-hurd-oai | fix(app-server) move windows world writable warning (#6916) — @dylan-hurd-oai | new-features |
| [core] エラーイベントにオプションのstatus_codeを追加 (#6865) — @celia-oai | [core] add optional status_code to error events (#6865) — @celia-oai | new-features |
| fix: execpolicy2移行に向けたexec-serverのExecPolicy準備 (#6888) — @bolinfest | fix: prepare ExecPolicy in exec-server for execpolicy2 cutover (#6888) — @bolinfest | new-features |
| 書き込み可能ディレクトリの過剰報告を停止 (#6936) — @iceweasel-oai | stop over-reporting world-writable directories (#6936) — @iceweasel-oai | new-features |
| fix(context left after review): `/review`後のレビューフッターコンテキスト (#5610) — @guidedways | fix(context left after review): review footer context after `/review` (#5610) — @guidedways | new-features |
| Fix/correct reasoning display (#6749) — @lionelchg | Fix/correct reasoning display (#6749) — @lionelchg | new-features |
| chore: スタンドアロンMCP使用に向けたexec-serverのリファクタリング (#6944) — @bolinfest | chore: refactor exec-server to prepare it for standalone MCP use (#6944) — @bolinfest | new-features |
| fix(shell) フォールバックシェル (#6948) — @dylan-hurd-oai | fix(shell) fallback shells (#6948) — @dylan-hurd-oai | new-features |
| execpolicy2 core統合 (#6641) — @zhao-oai | execpolicy2 core integration (#6641) — @zhao-oai | new-features |
| 単一パス切り詰め (#6914) — @pakrym-oai | Single pass truncation (#6914) — @pakrym-oai | new-features |
| execpolicyクイックスタートのREADMEを更新 (#6952) — @zhao-oai | update execpolicy quickstart readme (#6952) — @zhao-oai | new-features |
| モデル移行画面を初回のみ表示するよう修正 (#6954) — @aibrahim-oai | stop model migration screen after first time. (#6954) — @aibrahim-oai | new-features |

## 0.60.1

| 日本語 | English | Category |
|--------|---------|----------|
| API ユーザーのデフォルトモデルが `gpt-5.1-codex` になりました | Default model for API users is now `gpt-5.1-codex` | new-features |

## 0.59.0

| 日本語 | English | Category |
|--------|---------|----------|
| （翻訳待ち） | GPT-5.1-Codex-Max: introducing our newest frontier agentic coding model. GPT-5.1-Codex-Max delivers higher reliability, faster iteration, and support for long-running, project-scale workflows. Learn more at https://www.openai.com/index/gpt-5-1-codex-max | new-features |
| （翻訳待ち） | Native Compaction Support: added first-class support for Compaction, improving performance across extended coding sessions. | new-features |
| （翻訳待ち） | Expanded Tool Token Limits: codex models now support up to 10,000 tool output tokens. Configure this via `tool_output_token_limit` in `config.toml`. | new-features |
| （翻訳待ち） | Windows Agent mode: Introduced Agent mode for native Windows. Codex can read files, write files, and run commands in your working folder with fewer approvals. Agent mode uses a new experimental Windows sandbox to limit filesystem and network access. Learn more at https://developers.openai.com/codex/windows | new-features |
| （翻訳待ち） | TUI and UX Improvements | new-features |
| （翻訳待ち） | fix: don't truncate at new lines (#6907) — @aibrahim | new-features |
| （翻訳待ち） | feat: arcticfox in the wild (#6906) — @aibrahim | new-features |
| （翻訳待ち） | [app-server] populate thread>turns>items on thread/resume (#6848) — @owenlin0 | new-features |
| （翻訳待ち） | nit: useless log to debug (#6898) — @jif | new-features |
| （翻訳待ち） | fix(core) Support changing /approvals before conversation (#6836) — @dylan.hurd | new-features |
| （翻訳待ち） | chore: consolidate compaction token usage (#6894) — @jif | new-features |
| （翻訳待ち） | chore(app-server) world-writable windows notification (#6880) — @dylan.hurd | new-features |
| （翻訳待ち） | fix: parallel tool call instruction injection (#6893) — @jif | new-features |
| （翻訳待ち） | nit: stable (#6895) — @jif | new-features |
| （翻訳待ち） | feat: warning large commits (#6838) — @jif | new-features |
| （翻訳待ち） | fix label (#6892) — @tibo | new-features |
| （翻訳待ち） | Move shell to use `truncate_text` (#6842) — @aibrahim | new-features |
| （翻訳待ち） | Run remote auto compaction (#6879) — @pakrym | new-features |
| （翻訳待ち） | flaky-unified_exec_formats_large_output_summary (#6884) — @aibrahim | new-features |
| （翻訳待ち） | shell_command returns freeform output (#6860) — @pakrym | new-features |
| （翻訳待ち） | chore(core) arcticfox (#6876) — @dylan.hurd | new-features |
| （翻訳待ち） | fix(tui) ghost snapshot notifications (#6881) — @dylan.hurd | new-features |
| （翻訳待ち） | fix: typos in model picker (#6859) — @aibrahim | new-features |
| （翻訳待ち） | chore: update windows docs url (#6877) — @ae | new-features |
| （翻訳待ち） | feat: tweak windows sandbox strings (#6875) — @ae | new-features |
| （翻訳待ち） | fix: add more fields to ThreadStartResponse and ThreadResumeResponse (#6847) — @mbolin | new-features |
| （翻訳待ち） | chore: update windows sandbox docs (#6872) — @ae | new-features |
| （翻訳待ち） | Remote compaction on by-default (#6866) — @pakrym | new-features |
| （翻訳待ち） | [app-server] introduce `turn/completed` v2 event (#6800) — @celia | new-features |
| （翻訳待ち） | update credit status details (#6862) — @zhao | new-features |
| （翻訳待ち） | tui: add branch to 'codex resume', filter by cwd (#6232) — @172423086+nornagon-openai | new-features |
| （翻訳待ち） | smoketest for browser vuln, rough draft of Windows security doc (#6822) — @iceweasel | new-features |
| （翻訳待ち） | windows sandbox: support multiple workspace roots (#6854) — @iceweasel | new-features |
| （翻訳待ち） | updating codex backend models (#6855) — @zhao | new-features |
| （翻訳待ち） | exec-server (#6630) — @172423086+nornagon-openai | new-features |
| （翻訳待ち） | Fix tests so they don't emit an extraneous `config.toml` in the source tree (#6853) — @etraut | new-features |
| （翻訳待ち） | [app-server-test-client] feat: auto approve command (#6852) — @owenlin0 | new-features |
| （翻訳待ち） | Improved runtime of `generated_ts_has_no_optional_nullable_fields` test (#6851) — @etraut | new-features |
| （翻訳待ち） | fix: local compaction (#6844) — @jif | new-features |
| （翻訳待ち） | Fix typo in config.md for MCP server (#6845) — @simcoea | new-features |
| （翻訳待ち） | [codex][otel] support mtls configuration (#6228) — @apanasenko | new-features |
| （翻訳待ち） | feat: review in app server (#6613) — @jif | new-features |
| （翻訳待ち） | chore(config) enable shell_command (#6843) — @dylan.hurd | new-features |
| （翻訳待ち） | Prompt to turn on windows sandbox when auto mode selected. (#6618) — @iceweasel | new-features |
| （翻訳待ち） | Add the utility to truncate by tokens (#6746) — @aibrahim | new-features |
| （翻訳待ち） | Update faq.md section on supported models (#6832) — @adpena | new-features |
| （翻訳待ち） | fixing localshell tool calls (#6823) — @zhao | new-features |
| （翻訳待ち） | feat: enable parallel tool calls (#6796) — @jif | new-features |
| （翻訳待ち） | feat: remote compaction (#6795) — @jif | new-features |
| （翻訳待ち） | nit: app server (#6830) — @jif | new-features |
| （翻訳待ち） | nit: mark ghost commit as stable (#6833) — @jif | new-features |
| （翻訳待ち） | feat: git branch tooling (#6831) — @jif | new-features |
| （翻訳待ち） | :bug: fix(rmcp-client): refresh OAuth tokens using expires_at (#6574) — @LaelLuo | new-features |
| （翻訳待ち） | fix(windows) shell_command on windows, minor parsing (#6811) — @dylan.hurd | new-features |
| （翻訳待ち） | chore(core) Add shell_serialization coverage (#6810) — @dylan.hurd | new-features |
| （翻訳待ち） | Update defaults to gpt-5.1 (#6652) — @aibrahim | new-features |
| （翻訳待ち） | Demote function call payload log to debug to avoid noisy error-level stderr (#6808) — @cassirer | new-features |
| （翻訳待ち） | execpolicy2 extension (#6627) — @zhao | new-features |
| （翻訳待ち） | [app-server] feat: add v2 command execution approval flow (#6758) — @owenlin0 | new-features |
| （翻訳待ち） | background rate limits fetch (#6789) — @zhao | new-features |
| （翻訳待ち） | move cap_sid file into ~/.codex so the sandbox cannot overwrite it (#6798) — @iceweasel | new-features |
| （翻訳待ち） | Fix TUI issues with Alt-Gr on Windows (#6799) — @etraut | new-features |
| （翻訳待ち） | core: add a feature to disable the shell tool (#6481) — @172423086+nornagon-openai | new-features |
| （翻訳待ち） | chore(core) Update shell instructions (#6679) — @dylan.hurd | new-features |
| （翻訳待ち） | fix: annotate all app server v2 types with camelCase (#6791) — @owenlin0 | new-features |
| （翻訳待ち） | LM Studio OSS Support (#2312) — @rugved | new-features |
| （翻訳待ち） | [app-server] add events to readme (#6690) — @celia | new-features |
| （翻訳待ち） | core/tui: non-blocking MCP startup (#6334) — @172423086+nornagon-openai | new-features |
| （翻訳待ち） | chore: delete chatwidget::tests::binary_size_transcript_snapshot tui test (#6759) — @owenlin0 | new-features |
| （翻訳待ち） | feat: execpolicy v2 (#6467) — @zhao | new-features |
| （翻訳待ち） | nit: personal git ignore (#6787) — @jif | new-features |
| （翻訳待ち） | tmp: drop sccache for windows 2 (#6775) — @jif | new-features |
| （翻訳待ち） | feat: placeholder for image that can't be decoded to prevent 400 (#6773) — @jif | new-features |
| （翻訳待ち） | fix(core) serialize shell_command (#6744) — @dylan.hurd | new-features |
| （翻訳待ち） | Fix FreeBSD/OpenBSD builds: target-specific keyring features and BSD hardening (#6680) — @jinxiaoyong | new-features |
| （翻訳待ち） | Exempt the "codex" github user from signing the CLA (#6724) — @etraut | new-features |
| （翻訳待ち） | chore(deps): bump actions/github-script from 7 to 8 (#6755) — @49699333+dependabot[bot] | new-features |
| （翻訳待ち） | Fix: Claude models return incomplete responses due to empty finish_reason handling (#6728) — @dulikaifazr | new-features |
| （翻訳待ち） | Fix AltGr/backslash input on Windows Codex terminal (#6720) — @pornotato | new-features |
| （翻訳待ち） | Revert "tmp: drop sccache for windows (#6673)" (#6751) — @etraut | new-features |
| （翻訳待ち） | fix: resolve Windows MCP server execution for script-based tools (#3828) — @jlee14281 | new-features |
| （翻訳待ち） | Fix documentation errors for Custom Prompts named arguments and add canonical examples (#5910) — @169171880+Sayeem3051 | new-features |
| （翻訳待ち） | Tighten panic on double truncation (#6701) — @aibrahim | new-features |
| （翻訳待ち） | Improve compact (#6692) — @aibrahim | new-features |
| （翻訳待ち） | Refactor truncation helpers into its own file (#6683) — @aibrahim | new-features |
| （翻訳待ち） | Revert "templates and build step for validating/submitting winget package" (#6696) — @aibrahim | new-features |
| （翻訳待ち） | ci: only run CLA assistant for openai org repos (#6687) — @joshka | new-features |
| （翻訳待ち） | Handle "Don't Trust" directory selection in onboarding (#4941) — @viniciusmotta8 | new-features |
| （翻訳待ち） | Ignore unified_exec_respects_workdir_override (#6693) — @pakrym | new-features |
| （翻訳待ち） | Order outputs before inputs (#6691) — @pakrym | new-features |
| （翻訳待ち） | feat: add app-server-test-client crate for internal use (#5391) — @owenlin0 | new-features |
| （翻訳待ち） | fix codex detection, add new security-focused smoketests. (#6682) — @iceweasel | new-features |
| （翻訳待ち） | feat(ts-sdk): allow overriding CLI environment (#6648) — @lopopolo | new-features |
| （翻訳待ち） | templates and build step for validating/submitting winget package (#6485) — @iceweasel | new-features |
| （翻訳待ち） | Add test timeout (#6612) — @pakrym | new-features |
| （翻訳待ち） | Enable TUI notifications by default (#6633) — @172423086+nornagon-openai | new-features |
| （翻訳待ち） | tmp: drop sccache for windows (#6673) — @jif | new-features |
| （翻訳待ち） | [App server] add mcp tool call item started/completed events (#6642) — @celia | new-features |
| （翻訳待ち） | feat: cache tokenizer (#6609) — @jif | new-features |
| （翻訳待ち） | feat: better UI for unified_exec (#6515) — @jif | new-features |
| （翻訳待ち） | feat: add resume logs when doing /new (#6660) — @jif | new-features |
| （翻訳待ち） | tests: replace mount_sse_once_match with mount_sse_once for SSE mocking (#6640) — @pakrym | new-features |
| （翻訳待ち） | Promote shared helpers for suite tests (#6460) — @aibrahim | new-features |
| （翻訳待ち） | Use shared network gating helper in chat completion tests (#6461) — @aibrahim | new-features |
| （翻訳待ち） | Avoid double truncation (#6631) — @aibrahim | new-features |
| （翻訳待ち） | Revert "Revert \"Overhaul shell detection and centralize command generation for unified exec\"" (#6607) — @pakrym | new-features |
| （翻訳待ち） | [app-server] small fixes for JSON schema export and one-of types (#6614) — @owenlin0 | new-features |
| （翻訳待ち） | [App-server] add new v2 events:`item/reasoning/delta`, `item/agentMessage/delta` & `item/reasoning/summaryPartAdded` (#6559) — @celia | new-features |
| （翻訳待ち） | chore(core) Consolidate apply_patch tests (#6545) — @dylan.hurd | new-features |
| （翻訳待ち） | Only list failed tests (#6619) — @pakrym | new-features |
| （翻訳待ち） | feat: Add support for --add-dir to exec and TypeScript SDK (#6565) — @33551757+danfhernandez | new-features |
| （翻訳待ち） | Add AbortSignal support to TypeScript SDK (#6378) — @33551757+danfhernandez | new-features |
| （翻訳待ち） | Enable close-stale-contributor-prs.yml workflow (#6615) — @pakrym | new-features |
| （翻訳待ち） | Update default yield time (#6610) — @pakrym | new-features |
| （翻訳待ち） | Close stale PRs workflow (#6594) — @pakrym | new-features |
| （翻訳待ち） | Migrate prompt caching tests to test_codex (#6605) — @pakrym | new-features |
| （翻訳待ち） | Revert "Overhaul shell detection and centralize command generation for unified exec" (#6606) — @pakrym | new-features |
| （翻訳待ち） | Overhaul shell detection and centralize command generation for unified exec (#6577) — @pakrym | new-features |

## 0.58.0

| 日本語 | English | Category |
|--------|---------|----------|
| gpt5.1 モデルファミリーをサポート。[詳細](www.openai.com/index/gpt-5-1) | Support for gpt5.1 models family. [Read more](www.openai.com/index/gpt-5-1) | new-features |
| アプリサーバーの機能強化: 新しい JSON スキーマジェネレーターコマンド、アイテムの開始/完了イベント、マクロのクリーンアップ、ボイラープレートの削減、重複コードの整理を強化 (#6406 #6517 #6470 #6488)。 | App server enhancements: new JSON schema generator command, item started/completed events, macro cleanup, reduced boilerplate, and tightened duplicate-code hygiene (#6406 #6517 #6470 #6488). | new-features |
| QoL 修正: ドキュメント更新 (web_search、SDK、config)、TUI ショートカットのインライン表示、seatbelt/Wayland/brew/compaction/cloud-tasks のバグ修正、警告メッセージの明確化、認証対応のステータス出力、OTEL テストの安定化 (#5889 #6424 #6425 #6376 #6421 #4824 #6238 #5856 #6446 #6529 #6541)。 | Quality of life fixes: doc updates (web_search, SDK, config), TUI shortcuts inline, seatbelt/Wayland/brew/compaction/cloud-tasks bugfixes, clearer warnings, auth-aware status output, and OTEL test stabilization (#5889 #6424 #6425 #6376 #6421 #4824 #6238 #5856 #6446 #6529 #6541). | new-features |
| #6381 — world-writable スキャンを改善 (`917f39ec1`) | #6381 — Improve world-writable scan (`917f39ec1`) | new-features |
| #5889 — feat(tui): 承認オプションのキーボードショートカットをインライン表示 (`5beb6167c`) | #5889 — feat(tui): Display keyboard shortcuts inline for approval options (`5beb6167c`) | new-features |
| #6389 — world-writable 警告をさらに改善 (`a47181e47`) | #6389 — more world-writable warning improvements (`a47181e47`) | new-features |
| #6425 — SDK ドキュメントを修正: 「file diffs」を「file change notifications」に置き換え (`8b80a0a26`) | #6425 — Fix SDK documentation: replace “file diffs” with “file change notifications” (`8b80a0a26`) | new-features |
| #6421 — fix(seatbelt): hw.physicalcpu の読み取りを許可 (`c07461e6f`) | #6421 — fix(seatbelt): Allow reading hw.physicalcpu (`c07461e6f`) | new-features |
| #5856 — fix(cloud-tasks): `cli_auth_credentials_store` 設定を尊重 (`5f1fab0e7`) | #5856 — fix(cloud-tasks): respect `cli_auth_credentials_store` config (`5f1fab0e7`) | new-features |
| #6387 — Windows での npm アップグレード時に、パストラバーサルを動作させるため cmd.exe を経由 (`625f2208c`) | #6387 — For npm upgrade on Windows, go through cmd.exe to get path traversal working (`625f2208c`) | new-features |
| #6437 — chore(deps): codespell-project/actions-codespell を 2.1 から 2.2 にアップデート (`7c7c7567d`) | #6437 — chore(deps): bump codespell-project/actions-codespell from 2.1 to 2.2 (`7c7c7567d`) | new-features |
| #6438 — chore(deps): taiki-e/install-action を 2.60.0 から 2.62.49 にアップデート (`082d2fa19`) | #6438 — chore(deps): bump taiki-e/install-action from 2.60.0 to 2.62.49 (`082d2fa19`) | new-features |
| #6443 — chore(deps): /codex-rs の askama を 0.12.1 から 0.14.0 にアップデート (`78b2aeea5`) | #6443 — chore(deps): bump askama from 0.12.1 to 0.14.0 in /codex-rs (`78b2aeea5`) | new-features |
| #6444 — chore(deps): /codex-rs の zeroize を 1.8.1 から 1.8.2 にアップデート (`e2598f509`) | #6444 — chore(deps): bump zeroize from 1.8.1 to 1.8.2 in /codex-rs (`e2598f509`) | new-features |
| #6446 — 警告メッセージの文言を修正 (`131c38436`) | #6446 — Fix warning message phrasing (`131c38436`) | new-features |
| #6424 — config ドキュメントを修正: TOML パース処理の説明を訂正 (`557ac6309`) | #6424 — Fix config documentation: correct TOML parsing description (`557ac6309`) | new-features |
| #6454 — compact を移動 (`50a77dc13`) | #6454 — Move compact (`50a77dc13`) | new-features |
| #6376 — `web_search` 設定の最新変更を反映してドキュメントを更新 (`65cb1a1b7`) | #6376 — Updated docs to reflect recent changes in `web_search` configuration (`65cb1a1b7`) | new-features |
| #6407 — fix: app_server_protocol から generate_ts を使用 (`42683dadf`) | #6407 — fix: use generate_ts from app_server_protocol (`42683dadf`) | new-features |
| #6419 — ログインメニューからの終了をサポート (`b46012e48`) | #6419 — Support exiting from the login menu (`b46012e48`) | new-features |
| #6422 — マージせずにクローズされた PR をロックしないように変更 (`591615315`) | #6422 — Don’t lock PRs that have been closed without merging (`591615315`) | new-features |
| #6406 — [app-server] feat: JSON スキーマを生成するコマンドを追加 (`fbdedd9a0`) | #6406 — [app-server] feat: add command to generate json schema (`fbdedd9a0`) | new-features |
| #6238 — fix: brew の自動更新バージョンチェックを更新 (`788badd22`) | #6238 — fix: update brew auto update version check (`788badd22`) | new-features |
| #6433 — レート制限モデル通知のオプトアウトを追加 (`e743d251a`) | #6433 — Add opt-out for rate limit model nudge (`e743d251a`) | new-features |
| #6246 — ユーザーコマンドイベントタイプを追加 (`980886498`) | #6246 — Add user command event types (`980886498`) | new-features |
| #6466 — feat: unified_exec に workdir を追加 (`f01f2ec9e`) | #6466 — feat: add workdir to unified_exec (`f01f2ec9e`) | new-features |
| #6468 — [app-server] chore: initialize を非推奨 API セクションから移動 (`2ac49fea5`) | #6468 — [app-server] chore: move initialize out of deprecated API section (`2ac49fea5`) | new-features |
| #4824 — Wayland での画像ペーストエラーを修正 (`52e97b9b6`) | #4824 — Fix wayland image paste error (`52e97b9b6`) | new-features |
| #4098 — codex debug seatbelt --log-denials を追加 (`0271c20d8`) | #4098 — add codex debug seatbelt --log-denials (`0271c20d8`) | new-features |
| #6477 — refactor(tui): Ctrl-Z 処理のジョブコントロール (`60deb6773`) | #6477 — refactor(tui): job-control for Ctrl-Z handling (`60deb6773`) | new-features |
| #6470 — [app-server] メソッド名の変更時のボイラープレートを削減するマクロを更新 (`3838d6739`) | #6470 — [app-server] update macro to make renaming methods less boilerplate-y (`3838d6739`) | new-features |
| #6478 — CLI リリース用に Windows .exe ファイルアーティファクトをアップロード (`9aff64e01`) | #6478 — upload Windows .exe file artifacts for CLI releases (`9aff64e01`) | new-features |
| #6482 — レート制限ステータスバーを反転 (`930f81a17`) | #6482 — flip rate limit status bar (`930f81a17`) | new-features |
| #6480 — unified exec で codex-linux-sandbox を使用 (`6c36318bd`) | #6480 — Use codex-linux-sandbox in unified exec (`6c36318bd`) | new-features |
| #6489 — bash パース処理をさらに集約 (`bb7b0213a`) | #6489 — Colocate more of bash parsing (`bb7b0213a`) | new-features |
| #6488 — [hygiene][app-server] turn API の重複コード用にヘルパー関数を追加 (`695187277`) | #6488 — [hygiene][app-server] have a helper function for duplicate code in turn APIs (`695187277`) | new-features |
| #6041 — ghost_commit 機能をデフォルトで有効化 (`052b05283`) | #6041 — Enable ghost_commit feature by default (`052b05283`) | new-features |
| #6503 — nit: ログを trace に変更 (`ad279eacd`) | #6503 — nit: logs to trace (`ad279eacd`) | new-features |
| #6492 — unified exec のエスカレーション処理とテストを追加 (`807e2c27f`) | #6492 — Add unified exec escalation handling and tests (`807e2c27f`) | new-features |
| #6517 — [app-server] turn アイテムの開始/完了イベントを追加 (`e357fc723`) | #6517 — [app-server] add item started/completed events for turn items (`e357fc723`) | new-features |
| #6523 — full-auto の説明を on-request で更新 (`eb1c651c0`) | #6523 — Update full-auto description with on-request (`eb1c651c0`) | new-features |
| #6528 — generate-ts に prettier log-level=warn を再追加 (`424bfecd0`) | #6528 — Re-add prettier log-level=warn to generate-ts (`424bfecd0`) | new-features |
| #6507 — feat: 再開時にモデル切り替えの警告を表示 (`530db0ad7`) | #6507 — feat: warning switch model on resume (`530db0ad7`) | new-features |
| #6510 — feat: shell_command ツール (`29364f3a9`) | #6510 — feat: shell_command tool (`29364f3a9`) | new-features |
| #6516 — chore: boolean 値を config オーバーライドとしてパース可能か検証 (`c3a710ee1`) | #6516 — chore: verify boolean values can be parsed as config overrides (`c3a710ee1`) | new-features |
| #6541 — otel テストを修正 (`7d9ad3eff`) | #6541 — Fix otel tests (`7d9ad3eff`) | new-features |
| #6534 — feat: ghost commit では変更系ツールのみを待機 (`e00eb50db`) | #6534 — feat: only wait for mutating tools for ghost commit (`e00eb50db`) | new-features |
| #6529 — AuthManager の認証情報を使用するようステータス出力を修正 (`ad09c138b`) | #6529 — Fixed status output to use auth information from AuthManager (`ad09c138b`) | new-features |
| #6551 — gpt-5.1 モデル定義を追加 (`ec69a4a81`) | #6551 — Add gpt-5.1 model definitions (`ec69a4a81`) | new-features |
| #6558 — ログ記録でリクエストボディを二重エンコードしないように修正 (`2f58e6999`) | #6558 — Do not double encode request bodies in logging (`2f58e6999`) | new-features |
| #6483 — [app-server] feat: thread/resume が history、path、overrides をサポート (`964220ac9`) | #6483 — [app-server] feat: thread/resume supports history, path, and overrides (`964220ac9`) | new-features |
| #6561 — gpt5.1 の NUX を追加 (`e63ab0dd6`) | #6561 — NUX for gpt5.1 (`e63ab0dd6`) | new-features |
| #6568 — 5.1 の詳細度を low に設定 (`f97874093`) | #6568 — Set verbosity to low for 5.1 (`f97874093`) | new-features |
| #6567 — NUX の一環としてモデルピッカーのサブタイトルを更新 (`966d71c02`) | #6567 — Update subtitle of model picker as part of the nux (`966d71c02`) | new-features |
| #6569 — gpt5.1 を含むようモデルピッカーを変更 (`ad7eaa80f`) | #6569 — Change model picker to include gpt5.1 (`ad7eaa80f`) | new-features |
| #6575 — ツールのプロセスが stderr/stdout を共有する孫プロセスを生成した際のハングを回避 (`73ed30d7e`) | #6575 — Avoid hang when tool’s process spawns grandchild that shares stderr/stdout (`73ed30d7e`) | new-features |
| #6580 — porcupine モデルスラッグを削除 (`b1979b70a`) | #6580 — remove porcupine model slug (`b1979b70a`) | new-features |
| #6583 — feat: gpt mini を表示 (`e3aaee00c`) | #6583 — feat: show gpt mini (`e3aaee00c`) | new-features |
| #6585 — モデル移行通知のコピーを更新 (`305fe73d8`) | #6585 — copy for model migration nudge (`305fe73d8`) | new-features |
| #6586 — 推論レベルを更新 (`e3dd362c9`) | #6586 — Reasoning level update (`e3dd362c9`) | new-features |
| #6593 — 5.1 では明示的な medium 推論をデフォルトに設定 (`34621166d`) | #6593 — Default to explicit medium reasoning for 5.1 (`34621166d`) | new-features |
| #6588 — chore(core) gpt-5.1 用にプロンプトを更新 (`8dcbd29ed`) | #6588 — chore(core) Update prompt for gpt-5.1 (`8dcbd29ed`) | new-features |
| #6597 — feat: コンパクション後の残りコンテキストをプロキシ (`2a417c47a`) | #6597 — feat: proxy context left after compaction (`2a417c47a`) | new-features |
| #6589 — fix モデルピッカーの折り返しを修正 (`ba74cee6f`) | #6589 — fix model picker wrapping (`ba74cee6f`) | new-features |

## 0.57.0

| 日本語 | English | Category |
|--------|---------|----------|
| TUI 操作性向上: スラッシュコマンドリストの ctrl-n/p ナビゲーションと、バックトラックが /status ノイズをスキップ | TUI quality-of-life: ctrl-n/p navigation for slash command lists and backtracking skips the /status noise. | new-features |
| 長時間実行コマンドのタイムアウト改善 | Improve timeout on long running commasnds | new-features |
| #6233 – フリーフォーム統合実行の出力フォーマット統一 | #6233 – Freeform unified exec output formatting | new-features |
| #6342 – `generate_ts` の prettier 出力を警告のみに変更 | #6342 – Make `generate_ts` prettier output warn-only | new-features |
| #6335 – TUI: `/status` を超えたバックトラック動作を修正 | #6335 – TUI: fix backtracking past `/status` | new-features |
| #1994 – スラッシュコマンド、ファイル、履歴のナビゲーションに CTRL-n/CTRL-p を有効化 | #1994 – Enable CTRL-n/CTRL-p for navigating slash commands, files, history | new-features |
| #6340 – `insufficient_quota` エラー時のリトライをスキップ | #6340 – Skip retries on `insufficient_quota` errors | new-features |
| #6345 – 統合実行が有効な場合にシェルツールを削除 | #6345 – Remove shell tool when unified exec is enabled | new-features |
| #6347 – AI ラベラールールを課題トラッカーラベルに合わせて更新 | #6347 – Refresh AI labeler rules to match issue tracker labels | new-features |
| #6346 – `wait_for_event_with_timeout` より `wait_for_event` を優先(初回更新) | #6346 – Prefer `wait_for_event` over `wait_for_event_with_timeout` (initial update) | new-features |
| #5486 – `apply_patch` のリネーム/移動パス解決を修正 | #5486 – Fix `apply_patch` rename/move path resolution | new-features |
| #6349 – `wait_for_event_with_timeout` より `wait_for_event` を優先(追加更新) | #6349 – Prefer `wait_for_event` over `wait_for_event_with_timeout` (follow-up) | new-features |
| #6336 – App-server: `account/read` エンドポイントを実装 | #6336 – App-server: implement `account/read` endpoint | new-features |
| #6338 – App-server: `Thread` に追加フィールドを公開 | #6338 – App-server: expose additional fields on `Thread` | new-features |
| #6353 – App-server: auth v2 ドキュメント追加と Codex MCP インターフェース部分を更新 | #6353 – App-server: add auth v2 doc & update Codex MCP interface section | new-features |
| #6368 – App-server: スレッドとターンに関する README 更新 | #6368 – App-server: README updates for threads and turns | new-features |
| #6351 – シェル設定ツールをモデルファミリー設定に昇格 | #6351 – Promote shell config tool to model family config | new-features |
| #6369 – TUI: `tui.rs` にインラインコメントを追加 | #6369 – TUI: add inline comments to `tui.rs` | new-features |
| #6370 – `create_github_release` スクリプトに `--promote-alpha` オプションを追加 | #6370 – Add `--promote-alpha` option to `create_github_release` script | new-features |
| #6367 – SDK: TypeScript SDK に `network_access` と `web_search` オプションを追加 | #6367 – SDK: add `network_access` and `web_search` options to TypeScript SDK | new-features |
| #6097 (#6086 の作業を含む) – WSL: アップデート中の Windows パス正規化 | #6097 (includes work from #6086) – WSL: normalize Windows paths during update | new-features |
| #6377 – App-server ドキュメント: 初期化セクションを追加 | #6377 – App-server docs: add initialization section | new-features |
| #6373 – ターミナルリファクタリング: 非推奨の flush ロジックを削除 | #6373 – Terminal refactor: remove deprecated flush logic | new-features |
| #6252 – Core: Cloudflare の 403 HTML をフレンドリーなメッセージに置換 | #6252 – Core: replace Cloudflare 403 HTML with friendly message | new-features |
| #6380 – 統合実行: 安全なコマンドを承認なしで許可 | #6380 – Unified exec: allow safe commands without approval | new-features |
| #5258 – タイムアウト時にシェルツールのプロセスグループを終了 | #5258 – Kill shell tool process groups on timeout | new-features |

## 0.55.0

| 日本語 | English | Category |
|--------|---------|----------|
| #6222 "fix: DNS修正のためmusl 1.2.5を固定"を差し戻し | #6222 Revert "fix: pin musl 1.2.5 for DNS fixes" | new-features |
| #6208 `codex_delegate`の差分を無視 | #6208 ignore deltas in `codex_delegate` | new-features |

## 0.54.0

| 日本語 | English | Category |
|--------|---------|----------|
| #6189 修正: DNS修正のためmusl 1.2.5をピン留め (#6189) | #6189 fix: pin musl 1.2.5 for DNS fixes (#6189) | new-features |
| #6202 修正: turnアイテムで送信するためreasoningデルタを無視 (#6202) | #6202 fix: ignore reasoning deltas because we send it with turn item (#6202) | new-features |
| #6175 [App-server] account/updatedとaccount/logoutのv2対応 (#6175) | #6175 [App-server] v2 for account/updated and account/logout (#6175) | new-features |
| #6156 reasoningメッセージを正しく除外するようis_api_messageを修正 (#6156) | #6156 Fix is_api_message to correctly exclude reasoning messages (#6156) | new-features |
| #4453 ファイル検索時にシンボリックリンクを追跡 (#4453) | #4453 Follow symlinks during file search (#4453) | new-features |
| #5175 ドキュメント: config.tomlの例を追加 (#5175) | #5175 docs: add example config.toml (#5175) | new-features |
| #6180 修正: `--search`で非推奨メッセージを表示しないように修正 (#6180) | #6180 fix: `--search` shouldn't show deprecation message (#6180) | new-features |
| #6143 正しい`input_messages`詳細を渡すようnotifyハンドラーを修正 (#6143) | #6143 Fixed notify handler so it passes correct `input_messages` details (#6143) | new-features |
| #6171 サンドボックスコマンドをcwdではなく$CODEX_HOMEにログ出力 (#6171) | #6171 log sandbox commands to $CODEX_HOME instead of cwd (#6171) | new-features |
| #5996 機能追加: 中断後の経過時間を追加 (#5996) | #5996 feat: add the time after aborting (#5996) | new-features |
| #5541 TUI: テキストエリアの単語区切り処理を改良 (#5541) | #5541 tui: refine text area word separator handling (#5541) | new-features |
| #6167 Windowsでサンドボックス有効時に信頼プロンプトをスキップしないように修正 (#6167) | #6167 Do not skip trust prompt on Windows if sandbox is enabled. (#6167) | new-features |
| #6129 機能追加: Azureサポートのためresponses-api-proxyにオプションを追加 (#6129) | #6129 feat: add options to responses-api-proxy to support Azure (#6129) | new-features |
| #6161 コンテキストウィンドウ計算にreasoningトークンを含める (#6161) | #6161 Include reasoning tokens in the context window calculation (#6161) | new-features |
| #6051 rmcpクライアント機能フラグ参照を修正 (#6051) | #6051 Fix rmcp client feature flag reference (#6051) | new-features |
| #6159 OAuthログインのエラーメッセージのタイプミスを修正 (#6159) | #6159 Fix typo in error message for OAuth login (#6159) | new-features |
| #5685 `docs/slash_commands.md`にスラッシュコマンドのドキュメントを追加 (#5685) | #5685 Add documentation for slash commands in `docs/slash_commands.md`. (#5685) | new-features |
| #6111 修正: ステータスカードとスナップショットの使用状況URLを改善 (#6111) | #6111 fix: improve usage URLs in status card and snapshots (#6111) | new-features |
| #6124 Windowsでの「会話のアーカイブ」を修正 (#6124) | #6124 Fix "archive conversation" on Windows (#6124) | new-features |
| #6137 chore(deps): actions/upload-artifactを4から5にバージョンアップ (#6137) | #6137 chore(deps): bump actions/upload-artifact from 4 to 5 (#6137) | new-features |
| #4903 修正: APIキー貼り付け時の余分な文字を修正 (#4903) | #4903 fix: pasting api key stray character (#4903) | new-features |
| #6131 experimentalコンフィグキーに関する誤った「非推奨」メッセージを修正 (#6131) | #6131 Fix incorrect "deprecated" message about experimental config key (#6131) | new-features |
| #6091 初期実験フィードバックに基づくサンドボックスコマンド評価機能の変更 (#6091) | #6091 Changes to sandbox command assessment feature based on initial experiment feedback (#6091) | new-features |
| #5956 Azure OpenAIのレート制限メッセージをパース (#5956) | #5956 Parse the Azure OpenAI rate limit message (#5956) | new-features |
| #5649 ドキュメント: 上級ガイドのリンクアンカーとマークダウン形式を修正 (#5649) | #5649 docs: Fix link anchor and markdown format in advanced guide (#5649) | new-features |
| #5659 ドキュメントの小さなタイプミスを修正 (#5659) | #5659 Fixing small typo in docs (#5659) | new-features |
| #5935 TUI: より良いカラークエリのためcrosstermにパッチ適用 (#5935) | #5935 tui: patch crossterm for better color queries (#5935) | new-features |
| #6050 [codex][app-server] クライアントリクエストのエラーレスポンスを改善 (#6050) | #6050 [codex][app-server] improve error response for client requests (#6050) | new-features |
| #4973 ドキュメント: コントリビューションガイドの壊れたリンクを修正 (#4973) | #4973 docs: fix broken link in contributing guide (#4973) | new-features |
| #6027 機能追加: コンパクター2 (#6027) | #6027 feat: compactor 2 (#6027) | new-features |
| #6052 コンパクト実行時に警告を追加 (#6052) | #6052 Add warning on compact (#6052) | new-features |
| #6043 chore: JSON用のシェルシリアライゼーションテストを追加 (#6043) | #6043 chore: Add shell serialization tests for json (#6043) | new-features |
| #5979 合計ツール呼び出しテキストを切り詰め (#5979) | #5979 Truncate total tool calls text (#5979) | new-features |
| #4797 ドキュメント: 「Configuration」は「Getting started」に属さない (#4797) | #4797 docs: "Configuration" is not belongs "Getting started" (#4797) | new-features |
| #4804 chore(deps): indexmapを2.10.0から2.11.4にバージョンアップ (/codex-rs) (#4804) | #4804 chore(deps): bump indexmap from 2.10.0 to 2.11.4 in /codex-rs (#4804) | new-features |
| #4802 chore(deps): anyhowを1.0.99から1.0.100にバージョンアップ (/codex-rs) (#4802) | #4802 chore(deps): bump anyhow from 1.0.99 to 1.0.100 in /codex-rs (#4802) | new-features |
| #4800 chore(deps): actions/checkoutを4から5にバージョンアップ (#4800) | #4800 chore(deps): bump actions/checkout from 4 to 5 (#4800) | new-features |
| #4801 chore(deps): actions/github-scriptを7から8にバージョンアップ (#4801) | #4801 chore(deps): bump actions/github-script from 7 to 8 (#4801) | new-features |
| #6045 修正: brewアップグレードリンク (#6045) | #6045 fix: brew upgrade link (#6045) | new-features |
| #6034 テスト: 取り消し (#6034) | #6034 test: undo (#6034) | new-features |
| #4426 chore(deps): thiserrorを2.0.16から2.0.17にバージョンアップ (/codex-rs) (#4426) | #4426 chore(deps): bump thiserror from 2.0.16 to 2.0.17 in /codex-rs (#4426) | new-features |
| #6010 ユーザー指示メッセージ形式を更新 (#6010) | #6010 Update user instruction message format (#6010) | new-features |
| #4266 修正(TUI): insert_history_lines_to_writerでエラーを伝播 (#4266) | #4266 fix(tui): propagate errors in insert_history_lines_to_writer (#4266) | new-features |

## 0.53.0

| 日本語 | English | Category |
|--------|---------|----------|
| エラー 400 の問題を修正 | Fixing error 400 issues | new-features |
| Java のサンドボックス化を改善 | Improve sandboxing for Java | new-features |

## 0.52.0

| 日本語 | English | Category |
|--------|---------|----------|
| TUI改善: ストリーミング中のキューメッセージ表示、Windows自動モードガイダンス、取り消し操作、圧縮プロンプト設定可能化 | TUI polish: queued messages visible during streaming; Windows auto-mode guidance; undo op; compaction prompt configurable. | new-features |
| 画像: クライアント側画像リサイズ、MIMEタイプ検証によるクラッシュ防止、SDK画像転送テスト再有効化 | Images: client-side image resizing; prevent crashes with MIME verification; SDK image forwarding tests re-enabled. | new-features |
| `!<cmd>`で直接コマンド実行 | Execute commands directly with `!<cmd>` | new-features |
| 追加使用量のためのクレジット購入機能。[詳細情報](https://help.openai.com/en/articles/12642688-using-credits-for-flexible-usage-in-chatgpt-pluspro) | Ability to buy credits for more usage. [More information](https://help.openai.com/en/articles/12642688-using-credits-for-flexible-usage-in-chatgpt-pluspro) | new-features |
| 認証: キーリング対応と設定可能なバックエンドを備えた新しいCLI認証ストレージ抽象化 | Auth: new CLI auth storage abstraction with keyring support and configurable backend. | new-features |
| アプリサーバー: GetConversationSummary RPC、IDによる会話サマリーの取得/再開、アカウント/プロトコル型の改良 | App server: GetConversationSummary RPC; fetch/resume conversation summaries by id; refined account/protocol types. | new-features |
| 実行/イベント: アイテムストリーミングイベント、ゴーストコミット、明確な非推奨警告、トークンリフレッシュ処理とログの改善 | Execution/events: item streaming events; ghost commits; clearer deprecation warnings; better token refresh handling and logs. | new-features |
| 会話管理: すべてのツール出力に対する集中型切り詰め処理、前ターンの推論除外、model_providerによる会話アノテーション | Conversation management: centralized truncation for all tool outputs; filter out prior-turn reasoning; annotate conversations with model_provider. | new-features |

## 0.50.0

| 日本語 | English | Category |
|--------|---------|----------|
| `/feedback` を改善し、より詳細な診断情報を取得できるようにしました。問題を報告する際にご利用ください。(#5661, #5663) | Improved `/feedback` to get better diagnostics. Please use it to report any issues. (#5661, #5663). | new-features |

## 0.47.0

| 日本語 | English | Category |
|--------|---------|----------|
| Codex CLI の改善とバグ修正 | Improvements and bug-fixes in Codex CLI | new-features |
| MacOS でのバイナリのコード署名 | Code signing binaries on MacOS | new-features |
| 自動更新バナー | Auto update banner | new-features |
| :new: "フルアクセス" モード有効化時の警告 | :new: Warning when enabling "full access" mode | new-features |
| read_file のインデントモード (#4887) | Indentation mode for read_file (#4887) | new-features |
| ストリームが正常に再開されたときのメッセージ (#4988) | Message when stream get correctly resumed (#4988) | new-features |
| capslock 有効時でもショートカットを動作させる (#5049) | Make shortcut works even with capslock (#5049) | new-features |
| スラッシュで始まるプロンプトを破棄 (#5048) | Discard prompt starting with a slash (#5048) | new-features |
| タスク種別のヘッダーを追加 (#5142) | Add header for task kind (#5142) | new-features |
| 通知メタデータに codex スレッド ID を渡す (#4582) | Pass codex thread ID in notifier metadata (#4582) | new-features |
| GitHub issue テンプレートを更新 (#5191) | Updated github issue template (#5191) | new-features |
| エージェントオーバーライドファイル (#5215) | Agent override file (#5215) | new-features |
| OAuth 対応のストリーム可能 HTTP サーバー追加時に mcp ログインをプロンプト (#5193) | Prompt mcp login when adding a streamable HTTP server that supports oauth (#5193) | new-features |
| ExecApprovalRequestEvent にパース済みコマンドを追加 (#5222) | Add parsed command to ExecApprovalRequestEvent (#5222) | new-features |
| high effort 使用時のレート制限に関する警告を追加 (#5035) | Add warning about rate limit when using high effort (#5035) | new-features |
| 自動更新の承認 (#5185) | Auto update approval (#5185) | new-features |
| リリースワークフローに macOS 公証ステップを追加 (#5233) | Add macOS notarization step to release workflow (#5233) | new-features |
| フルアクセス承認を有効化する際の確認プロンプトを追加 (#4980) | Add confirmation prompt for enabling full access approvals (#4980) | new-features |
| `ParsedCommand::Read` バリアントに path フィールドを追加 (#5275) | Add path field to `ParsedCommand::Read` variant (#5275) | new-features |
| 拒否時の UX を改善 (#5260) | Better UX during refusal (#5260) | new-features |
| unified_exec バッファでの出力遅延 (#4992) | Lagged output in unified_exec buffer (#4992) | new-features |
| サンドボックス拒否エラーログ (#4874) | Sandbox denied error logs (#4874) | new-features |
| MacOS バイナリのコード署名を追加 (#4899) | Add code signing for MacOS binary (#4899) | new-features |
| ユーザー承認決定での折り返しを修正 (#5008) | Fix wrapping in user approval decisions (#5008) | new-features |
| trust_directory での折り返しを修正 (#5007) | Fix wrapping in trust_directory (#5007) | new-features |
| /diff モードで長い行を折り返す (#4891) | /diff mode wraps long lines (#4891) | new-features |
| Unicode nbsp を超えて alt+bksp でクラッシュする問題を修正 (#5016) | Fix crash when alt+bksp past unicode nbsp (#5016) | new-features |
| textarea プレースホルダーに画像名を含める (#5056) | Include the image name in the textarea placeholder (#5056) | new-features |
| CLI 更新バナーで Bun インストールを検出 (#5074) | Detect Bun installs in CLI update banner (#5074) | new-features |
| codex exec の危険な自動承認を追加 (#5043) | Add dangerous auto-approval for codex exec (#5043) | new-features |
| TUI を sandbox_workspace_write に更新 (#3341) | Update tui to sandbox_workspace_write (#3341) | new-features |
| Codex クラウド実行 (#5060) | Codex cloud exec (#5060) | new-features |

## 0.45.0

| 日本語 | English | Category |
|--------|---------|----------|
| （翻訳待ち） | #4517 Experimental support for OAuth MCP server authentication | new-features |
| （翻訳待ち） | #4636 Replace `--api-key` with `--with-api-key` for logging into the CLI with an API key | new-features |
| （翻訳待ち） | #4644 Only write the final message to stdout for `codex exec` | new-features |
| （翻訳待ち） | #4676 Default to `gpt-5` for Windows users who have not set a default model | new-features |
| （翻訳待ち） | #4689 Remove the requirement to use `experimental_use_rmcp_client` for streamable HTTP MCP servers that don't require OAuth | new-features |
| （翻訳待ち） | #4673 Fix colors when refocusing the terminal after a system theme update | new-features |
| （翻訳待ち） | #4694 Fix reasoning effort title | new-features |
| （翻訳待ち） | #4616 Updated device code login copy | new-features |
| （翻訳待ち） | #4706 Fix command output truncation that sometimes used too much of the context window | new-features |
| （翻訳待ち） | #4663 Initial parallel tool call support | new-features |
| （翻訳待ち） | #4736 Pulsing dot loading state | new-features |

## 0.44.0

| 日本語 | English | Category |
|--------|---------|----------|
| 新しいUIをリフレッシュ! チャット作成画面、下部ペイン、モデル選択、アップグレード通知を更新 (#4240, #4316, #4178, #4405) | New UI refresh! Updated chat composer, bottom pane, model picker, and upgrade nudge (#4240, #4316, #4178, #4405) | new-features |
| カスタムプロンプトで名前付き引数と位置引数をサポート (#4474, #4470) | Custom prompts now support named & positional arguments (#4474, #4470) | new-features |
| ストリーミング可能なHTTP MCPサーバーのサポートを追加 (#4317) | Add support for streamable HTTP MCP servers (#4317) | new-features |
| (実験的) Windows上での読み取り専用コマンドの繰り返し承認を削減 (#4269) | (experimental) Reduce repetitive approval for read-only commands on Windows (#4269) | new-features |
| (非常に実験的) `codex cloud` でクラウドタスクを管理 (#3197) | (very experimental) Manage cloud tasks with `codex cloud` (#3197) | new-features |
| #4642 細部修正: Escキーでモデル優先度選択を閉じる | #4642 Nit: Pop model effort picker on esc | new-features |
| #4641 gpt-5-codex を最上位に移動 | #4641 Move gpt-5-codex to top | new-features |
| #4639 スラッシュコマンドでのTab+Enterの不具合を修正 | #4639 Fix tab+enter regression on slash commands | new-features |
| #4619 機能追加: ファジー検索レスポンスにファイル名を追加 | #4619 feat: add file name to fuzzy search response | new-features |
| #4629 TUI: • 動作中、100%コンテキストを薄く表示 | #4629 tui: • Working, 100% context dim | new-features |
| #4633 codex exec で supports_color を使用 | #4633 Use supports_color in codex exec | new-features |
| #4636 codex workflows を有効化 | #4636 Enable codex workflows | new-features |
| #4638 issue-deduplicator.yml を更新 | #4638 Update issue-deduplicator.yml | new-features |
| #4571 機能追加: サーバー情報にポートに加えてpidを書き込み | #4571 feat: write pid in addition to port to server info | new-features |
| #4635 重複検出機能の修正 | #4635 Deduplicator fixes | new-features |
| #4627 エージェントメッセージ中の誤った「タスク完了」状態を修正 | #4627 fix false "task complete" state during agent message | new-features |
| #4634 アクションのcodexバージョンを最新にバンプ | #4634 Bump codex version in actions to latest | new-features |
| #4610 アシスタントメッセージをエージェントメッセージに名称変更し、アイテムタイプフィールドの命名を修正 | #4610 Rename assistant message to agent message and fix item type field naming | new-features |
| #4630 GH cliを使用して現在のissueを取得 | #4630 Use GH cli to fetch current issue | new-features |
| #4622 TUI: ダイアログ表示の微調整 | #4622 tui: tweaks to dialog display | new-features |
| #4628 issue重複検出ワークフローを追加 | #4628 Add issue deduplicator workflow | new-features |
| #4585 codex execの出力を軽微にクリーンアップ | #4585 Minor cleanup of codex exec output | new-features |
| #4626 「chore: sandbox extraction」をリバート | #4626 Revert "chore: sandbox extraction" | new-features |
| #4621 issueラベル付けワークフローを追加 | #4621 Add issue labeler workflow | new-features |
| #4583 個別のexecドキュメントを追加 | #4583 Add a separate exec doc | new-features |
| #4612 対話型セッションと非対話型セッションを分離 | #4612 Separate interactive and non-interactive sessions | new-features |
| #4178 モデル切り替えを2段階に変更 | #4178 Make model switcher two-stage | new-features |
| #4475 モデルが画像を表示したときに「Viewed Image」を表示 | #4475 show "Viewed Image" when the model views an image | new-features |
| #4586 キーヒントを正規化 | #4586 normalize key hints | new-features |
| #4584 ステータス使用率を修正 | #4584 Fix status usage ratio | new-features |
| #4454 修正: MCPツールのadditionalPropertiesでJSON Schemaを処理 | #4454 fix: handle JSON Schema in additionalProperties for MCP tools | new-features |
| #4615 codex exec で CODEX_API_KEY をサポート | #4615 Support CODEX_API_KEY for codex exec | new-features |
| #4569 修正: gpt-5-codexプロンプトを更新し、常にフェンス付きコードブロックinfoタグを使用することを明示 | #4569 fix: update the gpt-5-codex prompt to be more explicit that it should always used fenced code blocks info tags | new-features |
| #4579 設定をターンではなくスレッドに保存 | #4579 Store settings on the thread instead of turn | new-features |
| #4572 エラーメッセージにリクエストIDを含める | #4572 Include request ID in the error message | new-features |
| #4577 Windows上でAgents.mdパスの表示を正規化 | #4577 canonicalize display of Agents.md paths on Windows. | new-features |
| #4573 patch/exec承認UIを再設計 | #4573 rework patch/exec approval UI | new-features |
| #4513 SDKにドキュメントコメントの初期セットを追加 | #4513 Add initial set of doc comments to the SDK | new-features |
| #4576 「chore: prompt update to enforce good usage of apply_patch」をリバート | #4576 Revert "chore: prompt update to enforce good usage of apply_patch" | new-features |
| #4567 明示的なnodeインポート | #4567 Explicit node imports | new-features |
| #4568 2回目のOAuthログイン試行時のハングを修正 | #4568 Fix hang on second oauth login attempt | new-features |
| #4575 修正: RequestIdの生成TSで `bigint` の代わりに `number` を使用 | #4575 fix: use `number` instead of `bigint` for the generated TS for RequestId | new-features |
| #4566 Ctrl-Nヒントを修正 | #4566 fix ctr-n hint | new-features |
| #4556 機能追加: create_github_releaseスクリプトに --emergency-version-override オプションを追加 | #4556 feat: add --emergency-version-override option to create_github_release script | new-features |
| #4563 SDK: 作業ディレクトリとskipGitRepoCheckオプションをサポート | #4563 SDK: support working directory and skipGitRepoCheck options | new-features |
| #4544 AGENTS.mdが利用できない場合、設定された指示ファイルにフォールバック | #4544 Fall back to configured instruction files if AGENTS.md isn't available | new-features |
| #4536 タスク実行中にコンテキストウィンドウ使用状況を表示 | #4536 Show context window usage while tasks run | new-features |
| #4509 出力のないコマンドのプレースホルダーを表示 | #4509 Show placeholder for commands with no output | new-features |
| #4468 再開選択画面に更新日時を追加 | #4468 Add Updated at time in resume picker | new-features |
| #4559 末尾のバックスラッシュを適切に処理 | #4559 Handle trailing backslash properly | new-features |
| #4269 PowerShellコマンドのコマンド安全性を実装 | #4269 implement command safety for PowerShell commands | new-features |
| #4555 修正: pnpm/action-setup@v4 を actions/setup-node@v5 の前に実行 | #4555 fix: pnpm/action-setup@v4 should run before actions/setup-node@v5 | new-features |
| #4543 雑務: @openai/codex-sdk の公開ロジックを導入 | #4543 chore: introduce publishing logic for @openai/codex-sdk | new-features |
| #4286 雑務: サンドボックス抽出 | #4286 chore: sanbox extraction | new-features |
| #4533 ステージング環境と本番環境のコールバックURLを修正 | #4533 Fix Callback URL for staging and prod environments | new-features |
| #4537 修正: app server protocolから mcp-types を削除 | #4537 fix: remove mcp-types from app server protocol | new-features |
| #4532 実行可能ファイル検出を追加し、SDKからCodexをエクスポート | #4532 Add executable detection and export Codex from the SDK | new-features |
| #4529 修正: マクロを使用してリクエスト/レスポンスの対称性を保証 | #4529 fix: use macros to ensure request/response symmetry | new-features |
| #4525 レガシーcodex exec --json形式を削除 | #4525 Remove legacy codex exec --json format | new-features |
| #4506 レンダリング時にMarkdownを折り返し | #4506 wrap markdown at render time | new-features |
| #4520 codex protoを削除 | #4520 Delete codex proto | new-features |
| #4521 修正: リリースビルド用Codex CLIでプロセス強化を有効化 | #4521 fix: enable process hardening in Codex CLI for release builds | new-features |
| #4518 修正: TypeScriptエクスポートをクリーンアップ | #4518 fix: clean up TypeScript exports | new-features |
| #4512 修正: ClientRequestのすべてのバリアントにparamsフィールドを確保 | #4512 fix: ensure every variant of ClientRequest has a params field | new-features |
| #4511 Web検索アイテムを接続 | #4511 Wire up web search item | new-features |
| #4508 [SDK] 追加パラメータでスレッドを継続できることをテスト | #4508 [SDK] Test that a tread can be continued with extra params | new-features |
| #3846 雑務: apply_patchの適切な使用を強制するプロンプト更新 | #3846 chore: prompt update to enforce good usage of apply_patch | new-features |
| #4474 カスタムプロンプトの名前付き引数 | #4474 Named args for custom prompts | new-features |
| #4503 SDKでモデルとサンドボックスモードをサポート | #4503 Support model and sandbox mode in the sdk | new-features |
| #3197 クラウドタスクを追加 | #3197 Add cloud tasks | new-features |
| #4471 修正: `codex mcp` を `codex mcp-server` と `codex app-server` に分離 | #4471 fix: separate `codex mcp` into `codex mcp-server` and `codex app-server` | new-features |
| #4422 実験的なRMCPクライアントを参照するようMCPドキュメントを更新 | #4422 Update MCP docs to reference experimental RMCP client | new-features |
| #4486 PRスタイルのレビューを最上位に移動 | #4486 Move PR-style review to top | new-features |
| #4483 SDK CI | #4483 SDK CI | new-features |
| #4485 codex execにoriginatorを設定 | #4485 Set originator for codex exec | new-features |
| #4482 codex execでconversationをthreadに名称変更 | #4482 Rename conversation to thread in codex exec | new-features |
| #4481 codex execにMCPツール呼び出しアイテムを追加 | #4481 Add MCP tool call item to codex exec | new-features |
| #4472 SDKに型と基本テストを追加 | #4472 Add some types and a basic test to the SDK | new-features |
| #3531 Rakesh/デバイス認証をサポート | #3531 Rakesh/support device auth | new-features |
| #4478 turn.failedを追加し、session createdをthread startedに名称変更 | #4478 Add turn.failed and rename session created to thread started | new-features |
| #4476 カスタムプロンプトを `/prompts:` で開始 | #4476 Custom prompts begin with `/prompts:` | new-features |
| #4458 修正 | #4458 Fixes | new-features |
| #4364 「ショートカットは ?」を再導入 | #4364 reintroduce "? for shortcuts" | new-features |
| #4470 カスタムプロンプト引数(数値) | #4470 Custom prompt args (numeric) | new-features |
| #4469 /commandまたは@fileポップアップの背景を削除 | #4469 no background for /command or @file popup | new-features |
| #4467 • を薄く表示 | #4467 render • as dim | new-features |
| #4461 [Core]: ロールアウトデータにtailを追加 | #4461 [Core]: add tail in the rollout data | new-features |
| #4455 TypeScript SDKスキャフォールド | #4455 TypeScript SDK scaffold | new-features |
| #4456 カスタムプロンプトのフロントマターをパース | #4456 Parse out frontmatter for custom prompts | new-features |
| #2677 [mcp-server] MCPでファジーファイル検索を公開 | #2677 [mcp-server] Expose fuzzy file search in MCP | new-features |
| #2103 OpenTelemetryイベント | #2103 OpenTelemetry events | new-features |
| #4447 行末でclear-to-endが出力される問題を修正 | #4447 fix clear-to-end being emitted at the end of a row | new-features |
| #4419 [CODEX-3595] iTermでハイライトテキストをコピーする際のピリオドを削除 | #4419 [CODEX-3595] Remove period when copying highlighted text in iTerm | new-features |
| #4417 機能追加: codex-responses-api-proxyのnpmモジュールを導入 | #4417 feat: introduce npm module for codex-responses-api-proxy | new-features |
| #4416 メインコマンドに /review を追加 | #4416 Add /review to main commands | new-features |
| #4408 修正: .github/workflows/ci.yml の軽微な問題をクリーンアップ | #4408 fix: clean up some minor issues with .github/workflows/ci.yml | new-features |
| #4406 機能追加: GitHubリリースの一部として全プラットフォーム用にcodex-responses-api-proxyをビルド | #4406 feat: build codex-responses-api-proxy for all platforms as part of the GitHub Release | new-features |
| #4404 雑務: マルチツールからresponses-api-proxyを削除 | #4404 chore: remove responses-api-proxy from the multitool | new-features |
| #4412 雑務: MCP起動時のログレベルをerrorからinfoに下げる | #4412 chore: lower logging level from error to info for MCP startup | new-features |
| #4403 雑務: pre_main_hardening()ユーティリティを独自のクレートに移動 | #4403 chore: move pre_main_hardening() utility into its own crate | new-features |
| #4405 更新通知を改善 | #4405 Improve update nudge | new-features |
| #4332 雑務: モデルアップグレードポップアップを削除 | #4332 chore: remove model upgrade popup | new-features |
| #4362 修正(TUI): `?` を再び動作するように修正 | #4362 fix(tui): make `?` work again | new-features |
| #4336 修正: プロキシのデフォルト30秒タイムアウトを削除 | #4336 fix: remove default timeout of 30s in the proxy | new-features |
| #4330 ショートカットの間隔を編集 | #4330 Edit the spacing in shortcuts | new-features |
| #4324 TUI: 最終エージェントメッセージの上にセパレーターを追加 | #4324 tui: separator above final agent message | new-features |
| #4335 修正: gpt-5-codex mediumプリセットの推論を設定 | #4335 fix: set gpt-5-codex medium preset reasoning | new-features |
| #4333 ドキュメント: codex-rs配下のREADMEをリフレッシュ | #4333 docs: refresh README under codex-rs | new-features |
| #4316 「ショートカットは ?」を追加 | #4316 Add "? for shortcuts" | new-features |
| #4317 [MCP] ストリーミング可能なHTTP MCPサーバーのサポートを追加 | #4317 [MCP] Add support for streamable HTTP MCP servers | new-features |
| #4240 作成画面とユーザーメッセージのスタイルを更新 | #4240 update composer + user message styling | new-features |
| #4309 ターン開始/完了イベントを追加し、エラー時の終了コードを修正 | #4309 Add turn started/completed events and correct exit code on error | new-features |
| #4307 AskForApproval::Neverの危険なコマンドを拒否 | #4307 reject dangerous commands for AskForApproval::Never | new-features |

## 0.42.0

| 日本語 | English | Category |
|--------|---------|----------|
| 実験的な Rust SDK ベースの MCP クライアントを導入 (#4252) | Experimental Rust SDK–based MCP client introduced (#4252) | new-features |
| レスポンス処理/プロキシを簡素化・安全化する新しい `responses-api-proxy` コンポーネント (#4246) | New `responses-api-proxy` component to simplify and secure response handling/proxying (#4246) | new-features |
| セキュアモードを追加: `CODEX_SECURE_MODE=1` でプロセス監視を制限 (#4220) | Added secure mode: `CODEX_SECURE_MODE=1` to restrict process observability (#4220) | new-features |
| より明示的な `codex exec` イベント、`item.started` の追加と出力表示の改善 (#4177, #4250, #4113) | More explicit `codex exec` events, including `item.started` and improved output display (#4177, #4250, #4113) | new-features |
| より安全なコマンド実行: コアでの危険なコマンドチェックと Windows 固有の安全性対応 (#4211, #4119) | Safer command execution: dangerous command checks in core and Windows-specific safety (#4211, #4119) | new-features |
| UX 改善: `/status` の刷新による明瞭な表示と詳細、ページレスなセッションリスト、承認処理を `ListSelectionView` へ移行、MCP ツール呼び出しのスタイリング改善、ストリーミング中のステータスインジケーター非表示化 (#3194, #4275, #3871, #4101, #4196) | UX improvements: revamped `/status` with clearer presentation and details, pageless session list, approvals moved to `ListSelectionView`, better MCP tool call styling, and hiding status indicator during streaming (#3194, #4275, #3871, #4101, #4196) | new-features |
| 安定性と正確性: 圧縮時のトークン使用量修正、SSE マウントの信頼性向上、過去の会話編集時のバグ修正 (#4281, #4264, #4237) | Stability and correctness: token usage fix for compaction, SSE mounting reliability, and improving bugs on editing previous conversations (#4281, #4264, #4237) | new-features |
| IDE 拡張機能の信頼性: `.codex` ディレクトリが存在しない場合の API キーログインを修正 (#4258) | IDE extension reliability: fix login with API key when `.codex` directory is missing (#4258) | new-features |
| 内部クリーンアップと状態、フッターロジック、未使用コードのリファクタリング (#4174, #4259, #4310) | Internal cleanup and refactors for state, footer logic, and unused code (#4174, #4259, #4310) | new-features |
| /status のフォローアップ (#4304) | [#4304] /status followup (#4304) | new-features |
| 使われていないコードの削除; フレームカウントとステートフルレンダリングヘルパーを削除 (#4310) | [#4310] chore: dead code removal; remove frame count and stateful render helpers (#4310) | new-features |
| [MCP] 実験的な公式 Rust SDK ベースの MCP クライアントを導入 (#4252) | [#4252] [MCP] Introduce an experimental official rust sdk based mcp client (#4252) | new-features |
| todo-list ツールのサポートを追加 (#4255) | [#4255] Add todo-list tool support (#4255) | new-features |
| responses-api-proxy を導入 (#4246) | [#4246] feat: introduce responses-api-proxy (#4246) | new-features |
| 圧縮時のトークン使用量を修正 (#4281) | [#4281] fix: token usage for compaction (#4281) | new-features |
| 成功時に exec 出力をトリミングして表示 (#4113) | [#4113] Show exec output on success with trimmed display (#4113) | new-features |
| 承認処理を ListSelectionView に移行 (#4275) | [#4275] Move approvals to use ListSelectionView (#4275) | new-features |
| フッターロジックを新しいファイルにリファクタリング (#4259) | [#4259] Refactor the footer logic to a new file (#4259) | new-features |
| state のリファクタリング - 2 (#4229) | [#4229] ref: state - 2 (#4229) | new-features |
| コア: 潜在的に危険なコマンドのチェックを追加 (#4211) | [#4211] core: add potentially dangerous command check (#4211) | new-features |
| SSE を一度だけマウントするよう修正 (#4264) | [#4264] Actually mount sse once (#4264) | new-features |
| codex exec テストヘルパーを追加 (#4254) | [#4254] Add codex exec testing helpers (#4254) | new-features |
| `.codex` ディレクトリが存在しない場合の IDE 拡張機能での API キーログイン失敗を修正 (#4258) | [#4258] Fixed login failure with API key in IDE extension when a `.codex` directory doesn't exist (#4258) | new-features |
| サンドボックスドキュメントのタイポを修正 (#4256) | [#4256] fix typo in sandbox doc (#4256) | new-features |
| [codex exec] item.started を追加し、コマンド実行でサポート (#4250) | [#4250] [codex exec] Add item.started and support it for command execution (#4250) | new-features |
| 修正 (#4251) | [#4251] fix (#4251) | new-features |
| 小さい幅にリサイズする際のバグを修正 (#4248) | [#4248] fix bug when resizing to a smaller width (#4248) | new-features |
| サンドボックスでテストがクリーンに通るよう修正 (#4067) | [#4067] make tests pass cleanly in sandbox (#4067) | new-features |
| エラーメッセージを修正 (#4204) | [#4204] Fix error message (#4204) | new-features |
| 明示的な codex exec イベントを追加 (#4177) | [#4177] Add explicit codex exec events (#4177) | new-features |
| attempt_stream_responses() を stream_responses() から切り出してリファクタリング (#4194) | [#4194] chore: refactor attempt_stream_responses() out of stream_responses() (#4194) | new-features |
| キューに入っているメッセージがある状態で Esc を押すとコンポーザーの下書きが上書きされるバグを修正 (#4237) | [#4237] fix: esc w/ queued messages overwrites draft in composer (#4237) | new-features |
| CODEX_SECURE_MODE=1 のサポートを追加してプロセス監視を制限 (#4220) | [#4220] feat: add support for CODEX_SECURE_MODE=1 to restrict process observability (#4220) | new-features |
| /status を刷新 (#4196) | [#4196] revamp /status (#4196) | new-features |
| state の完全リファクタリング (#4174) | [#4174] ref: full state refactor (#4174) | new-features |
| ワークフローの codespell アクションを v2.1 に更新 (#4205) | [#4205] github: update codespell action to v2.1 in workflow (#4205) | new-features |
| gpt-5 以外のモデルに text パラメータを送信 (#4195) | [#4195] Send text parameter for non-gpt-5 models (#4195) | new-features |
| env_flags から未使用の値を削除 (#4188) | [#4188] chore: drop unused values from env_flags (#4188) | new-features |
| コマンドが安全かどうかをチェックする Windows 固有のメソッドを追加 (#4119) | [#4119] adds a windows-specific method to check if a command is safe (#4119) | new-features |
| ページレスなセッションリスト (#3194) | [#3194] pageless session list (#3194) | new-features |
| MCP ツール呼び出しのスタイリングを改善 (#3871) | [#3871] improve MCP tool call styling (#3871) | new-features |
| 回答のストリーミング開始時にステータスインジケーターを非表示化 (#4101) | [#4101] hide the status indicator when the answer stream starts (#4101) | new-features |
| ツール実装を簡素化 (#4160) | [#4160] Simplify tool implemetations (#4160) | new-features |

## 0.41.0

| 日本語 | English | Category |
|--------|---------|----------|
| レート制限の可視化: レート制限のリセット時期を確認可能 (#4111)、レート制限時に使用状況を表示 (#4102) | Rate limits visibility: You can see when is your limits resetting (#4111) and see your usage when rate limited (#4102) | new-features |
| `exec` モードで `output-schema` を使用して出力スキーマを指定可能 (#4079) | You can specify output schema in `exec` mode using `output-schema`. (#4079) | new-features |
| Ripgrep (`rg`) を `npm` リリースに同梱 (#3660)、`npm` 経由で `codex` をインストールする際に `@vscode/ripgrep` の `postinstall` ステップが失敗する問題 (#3842 等) を修正 | Ripgrep (`rg`) is now vendored into the `npm` release (#3660), which should fix issues such as #3842 where the `postinstall` step of `@vscode/ripgrep` would sometimes fail when installing `codex` via `npm`. | new-features |

## 0.40.0

| 日本語 | English | Category |
|--------|---------|----------|
| デフォルトモデルが `gpt-5-codex` になりました (#4076) | Default model is now `gpt-5-codex` (#4076) | new-features |
| `gpt-5-codex` で 220k トークンに達した際に自動圧縮が自動的にトリガーされるようになりました (#4093) | Autocompaction is triggered automatically for `gpt-5-codex` when hitting 220k tokens (#4093) | new-features |
| `/status` で使用制限が表示されるようになりました (#4053) | Usage limits are now visible in `/status` (#4053) | new-features |
| 新しい `/review` コマンド(特定のコミットのレビュー、ベースブランチとの比較、カスタム指示)を追加 (#3961) | New `/review` commands (review specific commit, against a base branch, or custom instructions) (#3961) | new-features |
| MCP ツール呼び出しのデフォルトタイムアウトが `60s` になり、`config.toml` で個別の MCP サーバーに対して `tool_timeout_sec` を設定することで上書きできるようになりました (#3959) | The default timeout for MCP tool calls is `60s` and can be overridden in `config.toml` by setting `tool_timeout_sec` for an individual MCP server. (#3959) | new-features |
| [#3881] 修正: try_parse_word_only_commands_sequence() がコマンドを順序通りに返すように更新 (#3881) | [#3881] fix: update try_parse_word_only_commands_sequence() to return commands in order (#3881) | new-features |
| [#3814] キャッシュを壊さないように統一されたシェル通知を使用 (#3814) | [#3814] Use a unified shell tell to not break cache (#3814) | new-features |
| [#3878] レスポンスモックヘルパーを共有ライブラリに移動 (#3878) | [#3878] Move responses mocking helpers to a shared lib (#3878) | new-features |
| [#3888] フィクスチャの代わりにヘルパーを使用 (#3888) | [#3888] Use helpers instead of fixtures (#3888) | new-features |
| [#3937] スラッシュコマンドポップアップの配置を修正 (#3937) | [#3937] fix alignment in slash command popup (#3937) | new-features |
| [#3925] 起動時に画面をクリアしないように変更 (#3925) | [#3925] don't clear screen on startup (#3925) | new-features |
| [#3950] イベントストリーム前にキーボード拡張検出をキャッシュ (#3950) | [#3950] Cache keyboard enhancement detection before event streams (#3950) | new-features |
| [#3965] レート制限を UI に転送 (#3965) | [#3965] Forward Rate limits to the UI (#3965) | new-features |
| [#3977] TUI: レート制限対応 (#3977) | [#3977] Tui: Rate limits (#3977) | new-features |
| [#3961] 機能追加: /review オプションを追加 (#3961) | [#3961] feat: Add more /review options (#3961) | new-features |
| [#3880] non_sandbox_test ヘルパーを追加 (#3880) | [#3880] Add non_sandbox_test helper (#3880) | new-features |
| [#4044] 雑務: cargo バージョンを統一 (#4044) | [#4044] chore: unify cargo versions (#4044) | new-features |
| [#4057] 雑務: clippy ルールを追加 2 (#4057) | [#4057] chore: more clippy rules 2 (#4057) | new-features |
| [#3959] MCP ツール呼び出しのタイムアウト対応 (#3959) | [#3959] timeouts for mcp tool calls (#3959) | new-features |
| [#4053] /status に制限情報を追加 (#4053) | [#4053] Add limits to /status (#4053) | new-features |
| [#3928] StreamController を簡素化 (#3928) | [#3928] simplify StreamController (#3928) | new-features |
| [#4020] TUI: バックトラッキングを修正 (#4020) | [#4020] Tui: fix backtracking (#4020) | new-features |
| [#4055] /status への移行に伴い /limits を削除 (#4055) | [#4055] Remove /limits after moving to /status (#4055) | new-features |
| [#4026] 機能追加: BottomPane にビュースタックを追加 (#4026) | [#4026] feat: Add view stack to BottomPane (#4026) | new-features |
| [#4059] 制限警告の文言を変更 (#4059) | [#4059] Change limits warning copy (#4059) | new-features |
| [#4058] 雑務: 冗長なクロージャに関する clippy 対応 (#4058) | [#4058] chore: clippy on redundant closure (#4058) | new-features |
| [#4061] /review のブランチモードプロンプトを修正 (#4061) | [#4061] Fix branch mode prompt for /review (#4061) | new-features |
| [#4060] レート制限のヘッダーと構造体を変更 (#4060) | [#4060] Change headers and struct of rate limits (#4060) | new-features |
| [#3952] ページャーのページ間オーバーレイクリアを修正 (#3952) | [#3952] Fix pager overlay clear between pages (#3952) | new-features |
| [#3957] セッション終了時の codex 再開メッセージを修正 (#3957) | [#3957] fix codex resume message at end of session (#3957) | new-features |
| [#4068] コンパクトメッセージ内の長い可能性のあるユーザーメッセージを切り詰め (#4068) | [#4068] Truncate potentially long user messages in compact message. (#4068) | new-features |
| [#4076] 機能追加: デフォルトを更新 (#4076) | [#4076] feat: update default (#4076) | new-features |
| [#4064] 通知機能のテストを追加 (#4064) | [#4064] Add notifier tests (#4064) | new-features |
| [#4093] 雑務: `gpt-5-codex` の自動圧縮を有効化 (#4093) | [#4093] chore: enable auto-compaction for `gpt-5-codex` (#4093) | new-features |
| [#4096] ストリームリトライテストで TestCodex ビルダーを使用 (#4096) | [#4096] Use TestCodex builder in stream retry tests (#4096) | new-features |
| [#3914] 機能追加: 元に戻す操作用の git ツール (#3914) | [#3914] feat: git tooling for undo (#3914) | new-features |
| [#4082] 修正: 使用状況データの微調整 (#4082) | [#4082] fix: usage data tweaks (#4082) | new-features |
| [#4075] レート制限警告 (#4075) | [#4075] Rate limits warning (#4075) | new-features |

## 0.39.0

| 日本語 | English | Category |
|--------|---------|----------|
| 新しい `/review` コマンドを #3774 で導入 | new `/review` command introduced in #3774 | new-features |
| [#3874] 修正: 会話とサンドボックスの作業ディレクトリを別々の関心事として扱うよう修正 (#3874) | [#3874] fix: ensure cwd for conversation and sandbox are separate concerns (#3874) | new-features |
| [#3774] 機能追加: /review (#3774) | [#3774] feat: /review (#3774) | new-features |
| [#3753] 「トランスクリプトビューを HistoryCells を扱うようリファクタリング」を再適用 (#3753) | [#3753] Reland "refactor transcript view to handle HistoryCells" (#3753) | new-features |
| [#3867] 修正: [tui] で通知が欠落している場合のエラーを修正 (#3867) | [#3867] fix error on missing notifications in [tui] (#3867) | new-features |
| [#3850] 雑務: ワーカーのブロッキングを防ぐため tokio mutex と async 関数を使用 (#3850) | [#3850] chore: use tokio mutex and async function to prevent blocking a worker (#3850) | new-features |
| [#3849] 修正: Rust の参照に関する細かい問題を修正 (#3849) | [#3849] fix: some nit Rust reference issues (#3849) | new-features |
| [#3757] tui 終了時に codex resume のヒントを表示 (#3757) | [#3757] hint for codex resume on tui exit (#3757) | new-features |
| [#3857] 自動圧縮時に ESC ボタンが機能するよう修正 (#3857) | [#3857] Make ESC button work when auto-compaction (#3857) | new-features |
| [#3729] アニメーションを統一 (#3729) | [#3729] Unify animations (#3729) | new-features |
| [#3819] uuid_v7 に切り替え、ConversationId の使用を厳格化 (#3819) | [#3819] Switch to uuid_v7 and tighten ConversationId usage (#3819) | new-features |
| [#3777] バグ: テストを一時的に無視 (#3777) | [#3777] bug: Ignore tests for now (#3777) | new-features |
| [#3822] 雑務: "Codex CLI ハーネス、サンドボックス、承認" セクションを更新 (#3822) | [#3822] chore: update "Codex CLI harness, sandboxing, and approvals" section (#3822) | new-features |
| [#3756] ターン通知でエージェント応答テキストを使用 (#3756) | [#3756] Use agent reply text in turn notifications (#3756) | new-features |
| [#3807] AGENTS.md: 不足しているコマンドのインストール手順を追加 (#3807) | [#3807] AGENTS.md: Add instruction to install missing commands (#3807) | new-features |

## 0.38.0

| 日本語 | English | Category |
|--------|---------|----------|
| [#3806] 修正: gh 呼び出し時に --repo を指定 | [#3806] fix: specify --repo when calling gh (#3806) | new-features |

## 0.37.0

| 日本語 | English | Category |
|--------|---------|----------|
| [#3329] 承認とターン終了時の通知機能 (#3329) | [#3329] notifications on approvals and turn end (#3329) | new-features |
| [#3659] chore: rust-release.yml のプレリリースロジックを復元 (#3659) | [#3659] chore: restore prerelease logic in rust-release.yml (#3659) | new-features |
| [#3617] chore(deps): codex-rs の serde_json を 1.0.143 から 1.0.145 にアップデート (#3617) | [#3617] chore(deps): bump serde_json from 1.0.143 to 1.0.145 in /codex-rs (#3617) | new-features |
| [#3664] chore: Cargo.toml で serde=1 となるよう依存関係を簡素化 (#3664) | [#3664] chore: simplify dep so serde=1 in Cargo.toml (#3664) | new-features |
| [#3618] chore(deps): codex-rs の serde を 1.0.219 から 1.0.223 にアップデート (#3618) | [#3618] chore(deps): bump serde from 1.0.219 to 1.0.223 in /codex-rs (#3618) | new-features |
| [#3619] chore(deps): codex-rs の wildmatch を 2.4.0 から 2.5.0 にアップデート (#3619) | [#3619] chore(deps): bump wildmatch from 2.4.0 to 2.5.0 in /codex-rs (#3619) | new-features |
| [45bccd36](https://github.com/openai/codex/commit/45bccd36b038a28b23663189cc6f7557e49e06d0) パーミッション配置の修正 | [45bccd36](https://github.com/openai/codex/commit/45bccd36b038a28b23663189cc6f7557e49e06d0) fix permissions alignment | new-features |
| [#3673] fix: 読み取り専用エスカレーションの修正 (#3673) | [#3673] fix: read-only escalations (#3673) | new-features |
| [#3680] Azure モデルプロバイダーの例を更新 (#3680) | [#3680] Update azure model provider example (#3680) | new-features |
| [#3745] 検索アイテムの永続化 (#3745) | [#3745] Persist search items (#3745) | new-features |
| [#3678] fix: SendUserTurn で EnvironmentContext を記録 (#3678) | [#3678] fix: Record EnvironmentContext in SendUserTurn (#3678) | new-features |
| [#3701] レビューモードのコア更新 (#3701) | [#3701] Review mode core updates (#3701) | new-features |
| [#3755] thinking 出力のスタイル変更 (#3755) | [#3755] restyle thinking outputs (#3755) | new-features |
| [#3758] レビュー終了時に開発メッセージを追加 (#3758) | [#3758] Add dev message upon review out (#3758) | new-features |
| [#3431] fix: GitHub Action で trusted publishing を使用して npm に公開するよう修正 (#3431) | [#3431] fix: make GitHub Action publish to npm using trusted publishing (#3431) | new-features |
| [#3763] fix: `npm install` 実行前に pnpm がインストールされていることを確認 (#3763) | [#3763] fix: ensure pnpm is installed before running `npm install` (#3763) | new-features |
| [#3767] fix: publish-npm を専用ジョブ化し、特定のパーミッションを設定 (#3767) | [#3767] fix: make publish-npm its own job with specific permissions (#3767) | new-features |
| [#3806] fix: gh 呼び出し時に --repo を指定 (#3806) | [#3806] fix: specify --repo when calling gh (#3806) | new-features |

## 0.36.0

| 日本語 | English | Category |
|--------|---------|----------|
| ログイン機能改善 (#3632); APIキーとログインの同時使用問題を修正 (#3611); ログインURLの余分な文字を修正 (#3639); カスタムプロバイダー向け `get_auth_status` を修正 (#3581) | login polish (#3632); fix issue allowing to be both logged in and using API key simultaneously (#3611); fix stray login URL characters (#3639); fix `get_auth_status` for custom providers (#3581). | new-features |
| 修正: アニメーション表示判定が正しく計算されるよう MIN_ANIMATION_HEIGHT を変更 (#3656) | fix: change MIN_ANIMATION_HEIGHT so show_animation is calculated correctly (#3656) | new-features |
| 機能: オンボーディング文言を調整 (#3650) | feat: tweak onboarding strings (#3650) | new-features |
| ログイン時に残るログインURL余分文字を修正 (#3639) | fix stray login url characters persisting in login (#3639) | new-features |
| gpt-5 プロンプトにファイル参照ガイドラインを追加 (#3651) | Add file reference guidelines to gpt-5 prompt (#3651) | new-features |
| 機能: 小さい端末でアニメーションをスキップ (#3647) | feat: skip animations on small terminals (#3647) | new-features |
| その他: リネーム (#3648) | chore: rename (#3648) | new-features |
| 修正: 参照を追加 (#3633) | fix: add references (#3633) | new-features |
| その他: 当面 `prerelease:true` に設定 (#3645) | chore: set `prerelease:true` for now (#3645) | new-features |
| 修正: 統合実行の競合状態 (#3644) | fix: race condition unified exec (#3644) | new-features |
| 機能: スプラッシュ画面を更新 (#3631) | feat: update splash (#3631) | new-features |
| その他(依存): codex-rs の tracing-subscriber を 0.3.19 から 0.3.20 にバージョンアップ (#3620) | chore(deps): bump tracing-subscriber from 0.3.19 to 0.3.20 in /codex-rs (#3620) | new-features |
| その他(依存): codex-rs の slab を 0.4.10 から 0.4.11 にバージョンアップ (#3635) | chore(deps): bump slab from 0.4.10 to 0.4.11 in /codex-rs (#3635) | new-features |
| ログインフロー改善 (#3632) | Login flow polish (#3632) | new-features |
| codex resume 時に各種フラグ (cd, model, search 等) が動作するよう修正 (#3625) | Fix codex resume so flags (cd, model, search, etc.) still work (#3625) | new-features |
| 機能: プリセットフィルター強化、ストレージ読込ログ抑制、ロールアウトプロンプトをデフォルト有効化 (#3628) | feat: tighten preset filter, tame storage load logs, enable rollout prompt by default (#3628) | new-features |
| 再開時に中断表示を追加 (#3629) | Show abort in the resume (#3629) | new-features |
| アニメーションフレームを変更 (#3627) | Change animation frames (#3627) | new-features |
| MCP 追加インターフェース初期実装 (#3543) | initial mcp add interface (#3543) | new-features |
| その他: gpt-5-code 用プロンプトを更新 (#3624) | chore: update prompts for gpt-5-code (#3624) | new-features |
| 機能: ヘッダーに推論レベルを追加 (#3622) | feat: add reasoning level to header (#3622) | new-features |
| リバート: トランスクリプトビューの HistoryCell 対応をロールバック (#3614) | Revert "refactor transcript view to handle HistoryCells" (#3614) | new-features |
| 会話再開時にヘッダーを表示 (#3615) | Show the header when resuming a conversation (#3615) | new-features |
| ChatGPT ログイン時に API キーを必ず上書き (#3611) | When logging in using ChatGPT, make sure to overwrite API key (#3611) | new-features |
| API キー使用時はモデル表示しない (#3607) | Don't show the model for apikey (#3607) | new-features |
| カスタムプロバイダー使用時の get_auth_status レスポンスを修正 (#3581) | Fix get_auth_status response when using custom provider (#3581) | new-features |
| 修正: model family と apply_patch の一貫性 (#3603) | fix: model family and apply_patch consistency (#3603) | new-features |
| 修正(TUI): full-auto をデフォルトプリセットに更新 (#3608) | fix(tui): update full-auto to default preset (#3608) | new-features |
| 修正(コア): 不安定なテスト `completed_commands_do_not_persist_sessions` (#3596) | fix(core): flaky test `completed_commands_do_not_persist_sessions` (#3596) | new-features |
| codespell でフレームファイルをスキップ (#3606) | Skip frames files in codespell (#3606) | new-features |
| チャットウィジェットにセッションヘッダーを追加 (#3592) | Add session header to chat widget (#3592) | new-features |
| 推論イベントの完全な生テキストを追記 (#3605) | Append full raw reasoning event text (#3605) | new-features |
| 機能: UI アニメーション (#3590) | feat: UI animation (#3590) | new-features |
| EventMsg Optional を修正 (#3604) | Fix EventMsg Optional (#3604) | new-features |
| gpt-5-code 用の単一ブランチ化 (#3601) | Single branch for gpt-5-code (#3601) | new-features |
| 再開機能を有効化 (#3537) | enable-resume (#3537) | new-features |
| 機能: モデル保存処理を更新 (#3589) | feat: update model save (#3589) | new-features |
| Windows の不安定なテストを修正 (#3564) | Fix flaky windows test (#3564) | new-features |
| gpt-5-code モデルセレクターを修正 (#3598) | Fix gpt-5-code model selector (#3598) | new-features |
| モデルファミリーごとのプロンプトを追加 (#3597) | Add per-model-family prompts (#3597) | new-features |
| タイムアウト時にコマンド出力をモデルに送信 (#3576) | Include command output when sending timeout to model (#3576) | new-features |
| ユーザー履歴メッセージプレフィックスの幅を揃える (#3467) | Align user history message prefix width (#3467) | new-features |
| モデルアップグレードプロンプトを ChatGPT 認証に限定 (#3586) | Gate model upgrade prompt behind ChatGPT auth (#3586) | new-features |
| その他: `output_lines()` を真偽値ではなく構造体で受け取るよう更新 (#3591) | chore: update `output_lines()` to take a struct instead of bools (#3591) | new-features |
| キュー状態インジケーターメッセージの前にスペース追加 (#3474) | Add spacing before queued status indicator messages (#3474) | new-features |
| コンパクト化後の再開・フォーク処理に対応 (#3533) | Handle resuming/forking after compact (#3533) | new-features |
| リファクタリング: トランスクリプトビューを HistoryCell 対応に (#3538) | refactor transcript view to handle HistoryCells (#3538) | new-features |
| gpt-5-code モデルで実験的な推論サマリーをデフォルト有効化 (#3560) | Default gpt-5-code models to experimental reasoning summaries (#3560) | new-features |
| Azure でより多くのアイテムタイプの ID を保持 (#3542) | Preserve IDs for more item types in azure (#3542) | new-features |
| 暗号化 CoT を常にリクエスト (#3539) | Always request encrypted cot (#3539) | new-features |
| レビューモード (コア) (#3401) | Review Mode (Core) (#3401) | new-features |
| 修正: NIT None の推論労力 (#3536) | fix: NIT None reasoning effort (#3536) | new-features |
| NUX UI を修正 (#3534) | Fix NUX UI (#3534) | new-features |
| コア: デフォルトサンドボックスを拡張 (#3483) | core: expand default sandbox (#3483) | new-features |
| Azure Responses API のワークアラウンドを追加 (#3528) | Add Azure Responses API workaround (#3528) | new-features |
| コマンドがパッチとしてパース可能な場合、実行しない (#3382) | if a command parses as a patch, do not attempt to run it (#3382) | new-features |
| 中断エラーメッセージのスタイリングを更新 (#3470) | Update interruption error message styling (#3470) | new-features |
| 機能: コンテキストコンパクト化 (#3446) | feat: context compaction (#3446) | new-features |
| コンポーザーフッターヒントの前にスペース追加 (#3469) | Add spacing before composer footer hints (#3469) | new-features |
| ドロップダウンヘッダーとアイテム間にスペース追加 (#3472) | Add spacing between dropdown headers and items (#3472) | new-features |
| 機能: 推論労力をオプションに (#3527) | feat: reasoning effort as optional (#3527) | new-features |
| 機能: SetDefaultModel RPC で None を渡すと値をクリアする動作に変更 (#3529) | feat: change the behavior of SetDefaultModel RPC so None clears the value. (#3529) | new-features |
| シェル説明を標準化 (#3514) | standardize shell description (#3514) | new-features |
| バグ: モデル保存を修正 (#3525) | bug: fix model save (#3525) | new-features |
| タイマー時間表示形式にスペースを追加 (#3471) | Add spacing to timer duration formats (#3471) | new-features |
| コードレビューでの MCP ドキュメント変更リクエスト (#3507) | MCP Documentation Changes Requests in Code Review (#3507) | new-features |
| その他: `just test` を追加し `cargo nextest` を実行 (#3508) | chore: add `just test`, which runs `cargo nextest` (#3508) | new-features |
| 機能: JSON-RPC サーバーに SetDefaultModel を追加 (#3512) | feat: added SetDefaultModel to JSON-RPC server (#3512) | new-features |
| 機能: NewConversationResponse に reasoning_effort を含める (#3506) | feat: include reasoning_effort in NewConversationResponse (#3506) | new-features |
| 追加(README): IDE (#3494) | add(readme): IDE (#3494) | new-features |
| クライアントトレースに cf-ray ヘッダーをログ出力 (#3488) | Log cf-ray header in client traces (#3488) | new-features |
| バグ: デフォルトを image に (#3501) | bug: default to image (#3501) | new-features |
| 機能: TUI オンボーディング (#3398) | feat: TUI onboarding (#3398) | new-features |
| 使用制限 CTA のフォーマット時に PlanType enum を使用 (#3495) | Use PlanType enum when formatting usage-limit CTA (#3495) | new-features |
| MCP サーバー利用に関する詳細なドキュメントを追加 (#3345) | Add more detailed documentation on MCP server usage (#3345) | new-features |
| 修正: `handle_sandbox_error` のタイムアウト処理を改善 (#3435) | fix: improve `handle_sandbox_error` timeouts (#3435) | new-features |
| その他: `clippy::redundant_clone` を有効化 (#3489) | chore: enable `clippy::redundant_clone` (#3489) | new-features |
| gpt-5 モデルファミリー全体に同じ特性を割り当て (#3490) | Assign the entire gpt-5 model family same characteristics (#3490) | new-features |
| フォーク時にコンポーザーをクリア (#3445) | Clear composer on fork (#3445) | new-features |
| 修正: gh 呼び出しで force=true の際に -f ではなく -F を使用 (#3486) | fix: use -F instead of -f for force=true in gh call (#3486) | new-features |
| ロールアウトアイテムに Compact と Turn Context を追加 (#3444) | Add Compact and Turn Context to the rollout items (#3444) | new-features |
| NIT 統合実行 (#3479) | NIT unified exec (#3479) | new-features |
| 認証フローを簡素化し ChatGPT と API キー認証の差異を解消 (#3189) | Simplify auth flow and reconcile differences between ChatGPT and API Key auth (#3189) | new-features |
| apply-patch: 置換をソートし回帰テストを追加 (#3425) | apply-patch: sort replacements and add regression tests (#3425) | new-features |
| その他: rust-release.yml で latest-alpha-cli ブランチを更新するよう修正 (#3458) | chore: rust-release.yml should update the latest-alpha-cli branch (#3458) | new-features |
| 修正: `generate_mcp_types.py` の出力が `codex-rs/mcp-types/src/lib.rs` と一致することを確認するチェックを追加 (#3450) | fix: add check to ensure output of `generate_mcp_types.py` matches `codex-rs/mcp-types/src/lib.rs` (#3450) | new-features |
| フォーク処理でファイルからロールアウトを読み込むよう変更 (#3440) | Change forking to read the rollout from file (#3440) | new-features |
| 統合実行 (#3288) | Unified execution (#3288) | new-features |
| 機能: JSON-RPC サーバーに UserInfo リクエストを追加 (#3428) | feat: add UserInfo request to JSON-RPC server (#3428) | new-features |
| 修正: `codex-rs/mcp-types/generate_mcp_types.py` の出力が `codex-rs/mcp-types/src/lib.rs` と一致することを保証 (#3439) | fix: ensure output of `codex-rs/mcp-types/generate_mcp_types.py` matches `codex-rs/mcp-types/src/lib.rs` (#3439) | new-features |
| 信頼ディレクトリ承認時に projects テーブルを上書きしないよう修正 (#3434) | fix trampling projects table when accepting trusted dirs (#3434) | new-features |
| ワークスペースルートを環境コンテキストに配置 (#3375) | put workspace roots in the environment context (#3375) | new-features |

## 0.34.0

| 日本語 | English | Category |
|--------|---------|----------|
| [#2799] モデルと推論の変更を永続化 (#2799) | [#2799] Persist model & reasoning changes (#2799) | new-features |
| [#3436] user_agent をオプションに変更 (#3436) | [#3436] Make user_agent optional (#3436) | new-features |

## 0.33.0

| 日本語 | English | Category |
|--------|---------|----------|
| #3396 で新しい Markdown レンダラーを試す | Try out the new Markdown renderer on #3396. | new-features |
| [#3394] alt+delete でカーソル右側の単語を削除 (delete_forward_word) (#3394) | [#3394] alt+delete deletes the word to the right of the cursor (delete_forward_word) (#3394) | new-features |
| [#3380] ロールアウトアイテムを導入 (#3380) | [#3380] Introduce rollout items (#3380) | new-features |
| [#3395] MCP サーバーとして使用時にユーザーエージェントサフィックスを設定 (#3395) | [#3395] Set a user agent suffix when used as a mcp server (#3395) | new-features |
| [#3357] 修正: 不要な #[allow(dead_code)] アノテーションを削除 (#3357) | [#3357] fix: remove unnecessary #[allow(dead_code)] annotation (#3357) | new-features |
| [#3422] 初期履歴をプロトコルに移動 (#3422) | [#3422] Move initial history to protocol (#3422) | new-features |
| [#3400] `UserMessageEvent` に画像を追加 (#3400) | [#3400] Added images to `UserMessageEvent` (#3400) | new-features |
| [#3356] 修正: 空ファイル chatwidget_stream_tests.rs を削除 (#3356) | [#3356] fix: remove empty file: chatwidget_stream_tests.rs (#3356) | new-features |
| [#2703] ドキュメント: codex exec の見出しのタイポを修正 (#2703) | [#2703] docs: fix codex exec heading typo (#2703) | new-features |
| [#2858] docs/getting-started.md 内の prompting_guide.md への壊れたリンクを削除 (#2858) | [#2858] Remove a broken link to prompting_guide.md in docs/getting-started.md (#2858) | new-features |
| [#3427] 認証関連の2つのテストの耐障害性を改善 (#3427) | [#3427] Improved resiliency of two auth-related tests (#3427) | new-features |
| [#3396] tui_markdown をカスタム Markdown レンダラーに置き換え (#3396) | [#3396] replace tui_markdown with a custom markdown renderer (#3396) | new-features |
| [#3430] "feat: POSIX unification and snapshot sessions (#3179)" を取り消し (#3430) | [#3430] Back out "feat: POSIX unification and snapshot sessions (#3179)" (#3430) | new-features |

## 0.32.0

| 日本語 | English | Category |
|--------|---------|----------|
| MCP: サーバーとして動作する際にUA(User Agent)サフィックスを追加; 安定性/互換性の微調整 | MCP: add UA suffix when acting as a server; a few stability/compat tweaks | new-features |
| OSS: より広範な `apply_patch` OSS互換性対応 | OSS: Broader `apply_patch` OSS compatibility. | new-features |
| Rollouts: 初期基盤実装と `rollout_path` をレスポンスに含めるよう対応 | Rollouts: initial groundwork and `rollout_path` included in responses. | new-features |
| TUI: Alt+Deleteで次の単語を削除 | TUI: Alt+Delete deletes the next word. | new-features |
| Protocol/Types: `ArchiveConversation` リクエスト追加; エクスポートとTS型定義の小規模改善 | Protocol/Types: `ArchiveConversation` request; small exports and TS type improvements. | new-features |
| CI/Build: `nextest` でテストを高速化、`shear` 追加; macOS権限の微調整 | CI/Build: faster tests with `nextest`, add `shear`; minor macOS permission adjustment. | new-features |
| Docs: 設定ファイル内のシェルクォート説明を明確化 | Docs: clarified shell quoting in config. | new-features |
| [#3395] MCPサーバーとして使用する際にユーザーエージェントサフィックスを設定 | [#3395] Set a user agent suffix when used as a mcp server | new-features |
| [#3394] Alt+Deleteでカーソル右側の単語を削除 (delete_forward_word) | [#3394] alt+delete deletes the word to the right of the cursor (delete_forward_word) | new-features |
| [#3390] reasoning item IDを送信しないように変更 | [#3390] Do not send reasoning item IDs | new-features |
| [#3388] config.responses_originator_header_internal_override を CODEX_INTERNAL_ORIGINATOR_OVERRIDE_ENV_VAR に置き換え | [#3388] Replace config.responses_originator_header_internal_override with CODEX_INTERNAL_ORIGINATOR_OVERRIDE_ENV_VAR | new-features |
| [#3387] fail fast を無効化 | [#3387] No fail fast | new-features |
| [#3380] rollout items を導入 | [#3380] Introduce rollout items | new-features |
| [#3374] apply_patch の "failed to find expected lines" メッセージを調整 | [#3374] tweak "failed to find expected lines" message in apply_patch | new-features |
| [#3357] 修正: 不要な #[allow(dead_code)] アノテーションを削除 | [#3357] fix: remove unnecessary #[allow(dead_code)] annotation | new-features |
| [#3353] 機能追加: ClientRequest に ArchiveConversation を追加 | [#3353] feat: add ArchiveConversation to ClientRequest | new-features |
| [#3352] 修正: NewConversationResponse に rollout_path を含める | [#3352] fix: include rollout_path in NewConversationResponse | new-features |
| [#3338] 機能追加: CI中に cargo shear を実行 | [#3338] feat: Run cargo shear during CI | new-features |
| [#3334] com.apple.system.opendirectoryd.libinfo の mach-lookup を許可 | [#3334] allow mach-lookup for com.apple.system.opendirectoryd.libinfo | new-features |
| [#3323] 雑務: CIビルドの高速化のため cargo nextest への切り替えを試行 | [#3323] chore: try switching to cargo nextest to speed up CI builds | new-features |
| [#3222] 修正: LoginChatGptCompleteNotification を protocol-ts で明示的にリストする必要がないよう修正 | [#3222] fix: LoginChatGptCompleteNotification does not need to be listed explicitly in protocol-ts | new-features |
| [#3270] 機能追加(core): conversation_manager から InitialHistory を再エクスポート | [#3270] feat(core): re-export InitialHistory from conversation_manager | new-features |
| [#3219] TypeScript型定義を追加生成し、ConversationSummary で conversation id を返すよう対応 | [#3219] Generate more typescript types and return conversation id with ConversationSummary | new-features |
| [#3179] 機能追加: POSIX統一とスナップショットセッション | [#3179] feat: POSIX unification and snapshot sessions | new-features |
| [#3169] config.md でシェルがクォートを処理する方法の説明を改善 | [#3169] Improve explanation of how the shell handles quotes in config.md | new-features |
| [#2811] 異なる命名規則を持つ gpt-oss プロバイダー(例: openai/gpt-oss-*)の OSS モデル向けに apply_patch ツールを含める | [#2811] Include apply_patch tool for oss models from gpt-oss providers with different naming convention (e.g. openai/gpt-oss-*) | new-features |

## 0.31.0

| 日本語 | English | Category |
|--------|---------|----------|
| https://github.com/openai/codex/pull/3182 MCP サーバー宣言時の `startup_timeout_ms` オプションのサポートを追加 [(ドキュメント)](https://github.com/openai/codex/blob/main/docs/config.md#mcp_servers)、特に Windows ユーザーから要望の多かった機能 | https://github.com/openai/codex/pull/3182 added support for a `startup_timeout_ms` option when declaring an MCP server [(docs)](https://github.com/openai/codex/blob/main/docs/config.md#mcp_servers), which has been a highly requested feature, particularly for Windows users: | new-features |
| @Bit-urd による MCP 起動時の耐障害性向上に感謝: https://github.com/openai/codex/pull/3243 | Thanks to @Bit-urd for adding more fault tolerance to MCP startup: https://github.com/openai/codex/pull/3243 | new-features |
| #3211 macOS で `ctrl+v` による Finder からの画像貼り付けを修正 | #3211 fixes image pasting from Finder with `ctrl+v` on macOS | new-features |
| [#3217] localhost ポートを解放するために保留中の OAuth ログインをキャンセルするロジックを追加 | [#3217] Added logic to cancel pending oauth login to free up localhost port | new-features |
| [#3220] feat(tui): 処理時間タイマーに分/時間を表示 | [#3220] feat(tui): show minutes/hours in thinking timer | new-features |
| [#3223] `/status` 出力に CLI バージョンを追加 | [#3223] Added CLI version to `/status` output | new-features |
| [#3176] [codex] toml ファイルからのモデルファミリー設定のオーバーライドに対応 | [#3176] [codex] respect overrides for model family configuration from toml file | new-features |
| [#3226] chore: codex-rs/scripts/create_github_release.sh を Python で書き直し | [#3226] chore: rewrite codex-rs/scripts/create_github_release.sh in Python | new-features |
| [#3228] chore: create_github_release を一時ディレクトリに新しいクローンを作成するように変更 | [#3228] chore: change create_github_release to create a fresh clone in a temp directory | new-features |
| [#3230] chore: ローカルクローンのオーバーヘッドを避けるため git の代わりに gh を使用 | [#3230] chore: use gh instead of git to do work to avoid overhead of a local clone | new-features |
| [#3231] fix: create_github_release を --publish-alpha または --publish-release のいずれかを受け取るように変更 | [#3231] fix: change create_github_release to take either --publish-alpha or --publish-release | new-features |
| [#3221] トークン使用量/コンテキスト情報をセッションレベルに移動 | [#3221] Move token usage/context information to session level | new-features |
| [#3285] ctrl + c で空でないプロンプトをクリア | [#3285] Clear non-empty prompts with ctrl + c | new-features |
| [#3282] 生の Uuid の代わりに ConversationId を使用 | [#3282] Use ConversationId instead of raw Uuids | new-features |
| [#3300] docs: codex/README.md の「Memory with AGENTS.md」セクションへの壊れたリンクを修正 | [#3300] docs: fix broken link to the "Memory with AGENTS.md" section in codex/README.md | new-features |
| [#3182] feat(mcp): サーバーごとの起動タイムアウト | [#3182] feat(mcp): per-server startup timeout | new-features |
| [#3294] chore(deps): /codex-rs の insta を 1.43.1 から 1.43.2 にバージョンアップ | [#3294] chore(deps): bump insta from 1.43.1 to 1.43.2 in /codex-rs | new-features |
| [#3295] chore(deps): /codex-rs の tree-sitter を 0.25.8 から 0.25.9 にバージョンアップ | [#3295] chore(deps): bump tree-sitter from 0.25.8 to 0.25.9 in /codex-rs | new-features |
| [#3296] chore(deps): /codex-rs の clap を 4.5.45 から 4.5.47 にバージョンアップ | [#3296] chore(deps): bump clap from 4.5.45 to 4.5.47 in /codex-rs | new-features |
| [#3297] chore(deps): /codex-rs の image を 0.25.6 から 0.25.8 にバージョンアップ | [#3297] chore(deps): bump image from 0.25.6 to 0.25.8 in /codex-rs | new-features |
| [#3243] fix: MCP サーバー初期化のエラーハンドリングを改善 #3196 #2346 #2555 | [#3243] fix: improve MCP server initialization error handling #3196 #2346 #2555 | new-features |
| [#3211] tui: ctrl+v での貼り付け時に file_list をチェック | [#3211] tui: paste with ctrl+v checks file_list | new-features |
| [#3316] chore: actions/setup-node@v5 にアップグレード | [#3316] chore: upgrade to actions/setup-node@v5 | new-features |
| [#3320] getUserAgent MCP メソッドを追加 | [#3320] Add a getUserAgent MCP method | new-features |
| [#3319] 提案されたコマンドプレビューをハイライト表示 | [#3319] Highlight Proposed Command preview | new-features |

## 0.30.0

| 日本語 | English | Category |
|--------|---------|----------|
| **破壊的変更**: プロジェクトの `.env` ファイルの自動読み込みを廃止 | **Breaking**: Stop loading project `.env` files automatically. | new-features |
| **セキュリティ/動作**: リクエストを保存しないように変更、保留中のOAuthログインをキャンセルしてポートを解放 | **Security/behavior**: Never store requests; free port by canceling pending OAuth login. | new-features |
| **コア/インフラ**: ロールアウトポリシーの導入、共有HTTPクライアント、残りコンテキストサイズの改善、推論サマリー設定/処理の改良、サンドボックス化されたシェルツールの説明を修正、サーバー通知のシリアライズを改善 | **Core/infra**: Introduce rollout policy; shared HTTP client; improved remaining context size; refined reasoning summary config/handling; corrected sandboxed shell tool description; improved server notification serialization. | new-features |
| **TUI/UX**: 大きなコマンドの承認ダイアログを修正、モーダル表示中はステータスタイマーを一時停止、ページャーの自動スクロール、bash構文のハイライト表示、macのキーグリフ、高さゼロのパニックを回避、@ファイル検索の改善(隠しディレクトリ対応) | **TUI/UX**: Fix approval dialog for large commands; pause status timer during modals; pager auto‑scroll; bash syntax highlighting; mac key glyphs; avoid zero‑height panic; improved @ file search (hidden dirs). | new-features |
| **開発者体験/ドキュメント**: 推奨VS Code拡張機能、AGENTS.mdのプロンプトと説明の改善、APIキーのガイダンスを更新、CIの修正 | **DevEx/docs**: Recommended VS Code extensions; AGENTS.md prompt and clarifications; updated API key guidance; CI fixes. | new-features |
| **依存関係**: `uuid` と `wiremock` のバージョンアップ | **Deps**: Bump `uuid` and `wiremock`. | new-features |
| **Windows**: フルアクセスモードでの承認要求を廃止 | **Windows**: no more asking for approvals on Full Access mode | new-features |
| [#3218] 完了するまで再開機能を非表示に | [#3218] hide resume until it's complete | new-features |
| [#3217] 保留中のOAuthログインをキャンセルしてlocalhostポートを解放するロジックを追加 | [#3217] Added logic to cancel pending oauth login to free up localhost port | new-features |
| [#3212] リクエストを保存しないように変更 | [#3212] Never store requests | new-features |
| [#3193] chore: ServerNotificationのシリアライズを改善 | [#3193] chore: improve serialization of ServerNotification | new-features |
| [#3191] refactor: AttachImage tuiイベントを削除 | [#3191] refactor: remove AttachImage tui event | new-features |
| [#3190] 残りコンテキストサイズを正確に計算 | [#3190] Correctly calculate remaining context size | new-features |
| [#3187] UNIXシステムでのZSHとより良い検出機能 | [#3187] ZSH on UNIX system and better detection | new-features |
| [#3185] MCP: セッション再開と履歴一覧機能を追加 | [#3185] MCP: add session resume + history listing; | new-features |
| [#3184] [破壊的変更] プロジェクトの.envファイルの読み込みを廃止 | [#3184] [BREAKING] Stop loading project .env files | new-features |
| [#3172] chore: 推奨拡張機能リストにrust-lang.rust-analyzerとvadimcn.vscode-lldbを追加 | [#3172] chore: add rust-lang.rust-analyzer and vadimcn.vscode-lldb to the list of recommended extensions | new-features |
| [#3171] [codex] 推論サマリー形式の設定をモデルファミリー設定タイプに移動 | [#3171] [codex] move configuration for reasoning summary format to model family config type | new-features |
| [#3170] fix: serde_asアノテーションを修正してテストで検証 | [#3170] fix: fix serde_as annotation and verify with test | new-features |
| [#3167] tui: ページャーのスクロールを最下部に固定 | [#3167] tui: pager pins scroll to bottom | new-features |
| [#3163] fix: ExecCommandOutputDeltaEvent.chunkにより効率的なワイヤフォーマットを使用 | [#3163] fix: use a more efficient wire format for ExecCommandOutputDeltaEvent.chunk | new-features |
| [#3146] fix: 競合状態を修正するため、リクエスト送信前にコールバックをマップに追加 | [#3146] fix: add callback to map before sending request to fix race condition | new-features |
| [#3143] macのキーヒントに⌥⇧⌃グリフを使用 | [#3143] Use ⌥⇧⌃ glyphs for key hints on mac | new-features |
| [#3142] bash行の構文ハイライト表示 | [#3142] syntax-highlight bash lines | new-features |
| [#3138] [codex] 推論サマリーの処理を改善 | [#3138] [codex] improve handling of reasoning summary | new-features |
| [#3135] TUI: セッション再開ピッカー(--resume)とクイック再開(--continue)を追加 | [#3135] TUI: Add session resume picker (--resume) and quick resume (--continue) | new-features |
| [#3134] [tui] /mcpの出力を更新 | [#3134] [tui] Update /mcp output | new-features |
| [#3133] tui: アクティブなexecセルの高さがゼロの場合のパニックを回避 | [#3133] tui: avoid panic when active exec cell area is zero height | new-features |
| [#3132] AGENTS.md: codex-rsのテスト承認について明確化 | [#3132] AGENTS.md: clarify test approvals for codex-rs | new-features |
| [#3131] モーダルが開いている間はステータスタイマーを一時停止 | [#3131] Pause status timer while modals are open | new-features |
| [#3130] 失敗していたCIを修正 | [#3130] Fix failing CI | new-features |
| [#3128] MCPサンドボックス呼び出し | [#3128] MCP sandbox call | new-features |
| [#3127] UserMsgsをカテゴリに分割してTUIに返送 | [#3127] Dividing UserMsgs into categories to send it back to the tui | new-features |
| [#3123] 履歴付きでセッションを再開する際にResponse ItemsからEventMsgsを再生 | [#3123] Replay EventMsgs from Response Items when resuming a session with history. | new-features |
| [#3122] AGENTS.mdファイルを読むようプロンプトを追加 | [#3122] prompt to read AGENTS.md files | new-features |
| [#3121] プロンプトからキーワードの太字を削除 | [#3121] remove bold the keyword from prompt | new-features |
| [#3118] [codex] `use_experimental_reasoning_summary` TOML設定キーをドキュメント化 | [#3118] [codex] document `use_experimental_reasoning_summary` toml key config | new-features |
| [#3117] 認証URLパラメータに発信元を含める | [#3117] Include originator in authentication URL parameters | new-features |
| [#3116] ロールアウトポリシーを導入 | [#3116] Introduce Rollout Policy | new-features |
| [#3112] APIキーの権限に関するガイダンスを更新 | [#3112] Update guidance on API key permissions | new-features |
| [#3110] HTTPクライアントを作成する共通の方法を追加 | [#3110] Add a common way to create HTTP client | new-features |
| [#3093] [mcp-server] 読み取り設定インターフェースを更新 | [#3093] [mcp-server] Update read config interface | new-features |
| [#3087] tui: 大きなコマンドの承認ダイアログを修正 | [#3087] tui: fix approval dialog for large commands | new-features |
| [#3069] core: サンドボックス化されたシェルツールの説明を修正(どこでも読み取り許可) | [#3069] core: correct sandboxed shell tool description (reads allowed anywhere) | new-features |
| [#3056] chore: verbosity設定をクリーンアップ | [#3056] chore: Clean up verbosity config | new-features |
| [#2988] サンドボックス化されていないプラットフォームでDangerFullAccessパッチを自動承認 | [#2988] Auto-approve DangerFullAccess patches on non-sandboxed platforms | new-features |
| [#2981] @ファイル検索を改善: .githubや.gitlabなどの特定の隠しディレクトリを含める | [#2981] Improve @ file search: include specific hidden dirs such as .github, .gitlab | new-features |
| [#2666] chore(deps): codex-rsのwiremockを0.6.4から0.6.5にバージョンアップ | [#2666] chore(deps): bump wiremock from 0.6.4 to 0.6.5 in /codex-rs | new-features |
| [#2493] chore(deps): codex-rsのuuidを1.17.0から1.18.0にバージョンアップ | [#2493] chore(deps): bump uuid from 1.17.0 to 1.18.0 in /codex-rs | new-features |

## 0.29.0

| 日本語 | English | Category |
|--------|---------|----------|
| [#3086] 新しい検索ツールを使用 | [#3086] Use the new search tool | new-features |
| [#1634] core(rollout): ロールアウトモジュールを抽出、リスト取得APIを追加、ファイルのヘッダーを返すように変更 | [#1634] core(rollout): extract rollout module, add listing API, and return file heads | new-features |
| [#2895] arboard依存関係のゲート化によりAndroid/Termuxサポートを追加 | [#2895] Add Android/Termux support by gating arboard dependency | new-features |
| [#2894] std::fs APIを使用した安定的なファイルロックを追加 | [#2894] Add stable file locking using std::fs APIs | new-features |
| [#3074] CodexAuthとAuthManagerをcoreクレートに移動 | [#3074] Move CodexAuth and AuthManager to the core crate | new-features |
| [#3070] APIキー使用時のレート制限エラー処理を復元 | [#3070] Add back rate‑limit error handling when using API key | new-features |
| [#3083] execとapply_patchで「cd foo && ...」をパース | [#3083] Parse “cd foo && ...” for exec and apply_patch | new-features |
| [#3068] 行/スパン構築にratatuiのStylizeを優先使用 | [#3068] Prefer ratatui Stylize for constructing lines/spans | new-features |
| [#2918] TUI: 時折発生するUIのちらつきを修正 | [#2918] TUI: fix occasional UI flicker | new-features |
| [#3061] @検索結果が保留中のときにローディング状態を表示 | [#3061] Show loading state when @ search results are pending | new-features |
| [#2907] TUI: empty_mcp_output内のMCPドキュメントハイパーリンクを修正 | [#2907] TUI: fix MCP docs hyperlink in empty_mcp_output | new-features |
| [#3067] npmモジュールにarm64 Windows実行可能ファイルを含める | [#3067] Include arm64 Windows executable in npm module | new-features |
| [#2736] 履歴読み込みを統一 | [#2736] Unify history loading | new-features |
| [#3071] 実験的な推論サマリーを使用 | [#3071] Use experimental reasoning summary | new-features |
| [#2461] gpt-oss互換性を改善 | [#2461] Improve gpt‑oss compatibility | new-features |
| [#2651] apply-patch: lark文法を修正 | [#2651] apply‑patch: fix lark grammar | new-features |
| [#3089] Docs: https://agents.md/ へのリンクを更新 | [#3089] Docs: update link to https://agents.md/ | new-features |
| [#3082] Docs: config.mdのタイポを修正 | [#3082] Docs: fix typo of config.md | new-features |
| [#2667] codex-rsのthiserrorを2.0.12から2.0.16にバージョンアップ | [#2667] Bump thiserror from 2.0.12 to 2.0.16 in codex‑rs | new-features |

## 0.28.0

| 日本語 | English | Category |
|--------|---------|----------|
| [ハイライト] | [Highlights] | new-features |
| [TUI/UX] | [TUI/UX] | new-features |
| [ビルド & CI] | [Build & CI] | new-features |
| [ドキュメント] | [Docs] | new-features |
| [ロギング/テレメトリー] | [Logging/Telemetry] | new-features |
| [依存関係] | [Dependencies] | new-features |
| [#3066](https://github.com/openai/codex/pull/3066) 修正: リリース用の windows-11-arm イメージに zstd をインストール | [#3066](https://github.com/openai/codex/pull/3066) fix: install zstd on the windows-11-arm image used to cut a release | new-features |
| [#3065](https://github.com/openai/codex/pull/3065) tui: ストリーミングされたエージェントメッセージの余分な空行を修正 | [#3065](https://github.com/openai/codex/pull/3065) tui: fix extra blank lines in streamed agent messages | new-features |
| [#3063](https://github.com/openai/codex/pull/3063) 設定リファレンステーブルを修正 | [#3063](https://github.com/openai/codex/pull/3063) fix config reference table | new-features |
| [#3062](https://github.com/openai/codex/pull/3062) 修正: Windows ARM ビルドに windows-11-arm を活用 | [#3062](https://github.com/openai/codex/pull/3062) fix: leverage windows-11-arm for Windows ARM builds | new-features |
| [#3060](https://github.com/openai/codex/pull/3060) ユーザーがモデルを変更したタイミングを把握するためのログを追加 | [#3060](https://github.com/openai/codex/pull/3060) Add logs to know when we users are changing the model | new-features |
| [#3047](https://github.com/openai/codex/pull/3047) バグ修正: 空の入力で Enter キーを押しても空白メッセージがキューに入らないように無視 | [#3047](https://github.com/openai/codex/pull/3047) Bug fix: ignore Enter on empty input to avoid queuing blank messages | new-features |
| [#3038](https://github.com/openai/codex/pull/3038) tui: AGENTS.md が存在する場合は '/init' のサジェストを非表示 | [#3038](https://github.com/openai/codex/pull/3038) tui: hide '/init' suggestion when AGENTS.md exists | new-features |
| [#3035](https://github.com/openai/codex/pull/3035) disabled-command メッセージから余分な引用符を削除 | [#3035](https://github.com/openai/codex/pull/3035) remove extra quote from disabled-command message | new-features |
| [#3010](https://github.com/openai/codex/pull/3010) chore(deps): codex-rs の regex-lite を 0.1.6 から 0.1.7 にバンプ | [#3010](https://github.com/openai/codex/pull/3010) chore(deps): bump regex-lite from 0.1.6 to 0.1.7 in /codex-rs | new-features |
| [#2982](https://github.com/openai/codex/pull/2982) 修正: ドキュメントのリファクタリングに伴い、正しいリンクで PR テンプレートを適応 | [#2982](https://github.com/openai/codex/pull/2982) Fix: Adapt pr template with correct link following doc refacto | new-features |
| [#2922](https://github.com/openai/codex/pull/2922) tui: 入力時の遅延を修正 | [#2922](https://github.com/openai/codex/pull/2922) tui: fix laggy typing | new-features |
| [#2884](https://github.com/openai/codex/pull/2884) 修正: PR がレビュー用に作成された際に、リリースビルド用の Windows キャッシュを事前に生成を試行 | [#2884](https://github.com/openai/codex/pull/2884) fix: try to populate the Windows cache for release builds when PRs are put up for review | new-features |
| [#2877](https://github.com/openai/codex/pull/2877) メッセージスタイリングを再設計 | [#2877](https://github.com/openai/codex/pull/2877) rework message styling | new-features |
| [#2870](https://github.com/openai/codex/pull/2870) tui: get_cursor_position のエラーをキャッチ | [#2870](https://github.com/openai/codex/pull/2870) tui: catch get_cursor_position errors | new-features |

## 0.27.0

| 日本語 | English | Category |
|--------|---------|----------|
| [#2881] agents.md で `fix -p` のみを提案するように変更 | [#2881] Suggest just fix -p in agents.md | new-features |
| [#2878] fix: MCP サーバーで Mutex をより早く解放 | [#2878] fix: drop Mutexes earlier in MCP server | new-features |
| [#2876] fix: tx_approve.send() 呼び出し前に Mutex を解放 | [#2876] fix: drop Mutex before calling tx_approve.send() | new-features |
| [#2874] fix: unbounded channel に切り替え | [#2874] fix: switch to unbounded channel | new-features |
| [#2873] fix: 不要な flush() 呼び出しを削除 | [#2873] fix: remove unnecessary flush() calls | new-features |
| [#2871] fix: CI で cargo clippy に --profile を指定 | [#2871] fix: specify --profile to cargo clippy in CI | new-features |
| [#2868] Bugfix: コメント内の `brew install codex` が実行されるのを防止 | [#2868] Bugfix: Prevents `brew install codex` in comment to be executed | new-features |
| [#2864] Fix: CI リリースビルドを修正 | [#2864] Fix CI release build | new-features |

## 0.26.0

| 日本語 | English | Category |
|--------|---------|----------|
| `~/.codex/prompts` からカスタム `/prompts` を読み込み (#2696) | Custom `/prompts` loaded from `~/.codex/prompts` (#2696) | new-features |
| Codex がローカル画像をエージェント的に表示できる新しい「View Image」ツール (#2723) | New "View Image" tool to let Codex agentically view local images (#2723) | new-features |
| 解決済み設定を検査するための MCP `GetConfig` エンドポイント (#2725) | MCP `GetConfig` endpoint to inspect resolved settings (#2725) | new-features |
| Windows での画像貼り付けを修正 + 連続貼り付け処理を改善 (#2683) | Fix image pasting in Windows + improve burst paste handling (#2683) | new-features |
| アクティブタスク中のスラッシュコマンドを防止 (#2792) | Prevent slash commands during an active task (#2792) | new-features |
| 一時停止(^Z)時のカーソル位置を修正 (#2690) | Fix cursor position when suspending (^Z) (#2690) | new-features |
| 行の重複とリストマーカーの残留を削減 (#2789) | Reduce doubled lines and hanging list markers (#2789) | new-features |
| README/ドキュメントの大規模なリファクタリングとナビゲーション (#2724) | Major README/docs refactor and navigation (#2724) | new-features |
| CHANGELOG がリリースページを参照するように変更 (#2780) | CHANGELOG now points to Releases page (#2780) | new-features |
| VS Code 拡張機能の issue テンプレートを追加 (#2853) | Add VS Code Extension issue template (#2853) | new-features |
| #2864 CI リリースビルドを修正 | #2864 Fix CI release build | new-features |
| #2747 バグ修正: incoming_tx のクローンがデッドロックを引き起こす可能性 | #2747 Bug fix: clone of incoming_tx can lead to deadlock | new-features |
| #2852 #2371 のコミット後フィードバックへの対応 | #2852 Following up on #2371 post commit feedback | new-features |
| #2696 カスタム /prompts | #2696 Custom /prompts | new-features |
| #2762 UI: ウェルカムメッセージ内のスラッシュコマンドを太字に変更 | #2762 UI: Make slash commands bold in welcome message | new-features |
| #2737 OAuth 成功画面で「Codex CLI」ではなく「Codex」という文字列を使用するように変更 | #2737 Changed OAuth success screen to use the string "Codex" rather than "Codex CLI" | new-features |
| #2853 VS Code 拡張機能の issue テンプレートを追加 | #2853 Add a VS Code Extension issue template | new-features |
| #2683 連続貼り付けのエッジケース | #2683 burst paste edge cases | new-features |
| #2746 compact の競合状態 | #2746 Race condition in compact | new-features |
| #2849 chore: MCP サーバーからの stderr を eprintln! を使ってテスト出力に出力 | #2849 chore: print stderr from MCP server to test output using eprintln! | new-features |
| #2848 chore: test_shell_command_approval_triggers_elicitation の不安定性をデバッグしやすくする試み | #2848 chore: try to make it easier to debug the flakiness of test_shell_command_approval_triggers_elicitation | new-features |
| #2845 chore: clippy から uninlined_format_args を要求 | #2845 chore: require uninlined_format_args from clippy | new-features |
| #2792 タスク実行中の一部のスラッシュコマンドを禁止 | #2792 disallow some slash commands while a task is running | new-features |
| #2723 「View Image」ツールを追加 | #2723 Add "View Image" tool | new-features |
| #2690 一時停止後のカーソルを修正 | #2690 fix cursor after suspend | new-features |
| #2789 行の重複とリストマーカーの残留を(ほぼ)修正 | #2789 fix (most) doubled lines and hanging list markers | new-features |
| #2780 CHANGELOG をリリースページに誘導 | #2780 Point the CHANGELOG to the releases page | new-features |
| #2778 新しい場所へのリンクのために codex-rs/config.md を追加 | #2778 Added back codex-rs/config.md to link to new location | new-features |
| #2724 README / ドキュメントのリファクタリング | #2724 README / docs refactor | new-features |
| #2776 fix: 当面、UI に返送されるデルタの数を制限 | #2776 fix: for now, limit the number of deltas sent back to the UI | new-features |
| #2725 [mcp-server] GetConfig エンドポイントを追加 | #2725 [mcp-server] Add GetConfig endpoint | new-features |

## 0.25.0

| 日本語 | English | Category |
|--------|---------|----------|
| Core: 長時間稼働するサーバーで手動クリーンアップを行うための remove_conversation API (#2613) | Core: remove_conversation API for manual cleanup in long‑lived servers (#2613) | new-features |
| TUI: トランスクリプト/差分ビューでのマウスホイール代替スクロール (#2686) | TUI: mouse wheel alternate scrolling in transcript/diff views (#2686) | new-features |
| TUI: Alt+Ctrl+H で前の単語を削除 (Alt+Backspace と同等の機能) (#2717) | TUI: Alt+Ctrl+H deletes the previous word (parity with Alt+Backspace) (#2717) | new-features |
| Execution: task_started イベントにコンテキストウィンドウを含める; モデルはターンごとに変わる可能性あり (#2752) | Execution: include context window on task_started events; model may vary per turn (#2752) | new-features |
| トランスクリプトの行折り返しをキャッシュして長いトランスクリプトのレスポンスを維持 (#2739) | Cache transcript line wraps to keep long transcripts responsive (#2739) | new-features |
| ターン実行中にトランスクリプト行が差分に追加される問題を修正 (#2721) | Fix transcript lines appending to diff while a turn is running (#2721) | new-features |
| 絵文字レンダリングを改善: 適切なスペーシングと ⌨️ 絵文字バリアント (#2735, #2728) | Improve emoji rendering: proper spacing and ⌨️ emoji variant (#2735, #2728) | new-features |
| ESC キーでキューに入っているメッセージをコンポーザーに戻す (#2687) | ESC with queued messages returns them to the composer (#2687) | new-features |
| マルチバイトテキスト近くのプレースホルダーをバックスペースで削除する際のクラッシュを防止 (#2674) | Prevent crash when backspacing placeholders near multibyte text (#2674) | new-features |
| apply_patch 時に Exec デルタを送信しないように変更 (#2742) | Don’t send Exec deltas on apply_patch (#2742) | new-features |
| git_diff_against_sha をより堅牢に (カスタムドライバーを無視; ダッシュで始まるファイルに対応) (#2749) | Make git_diff_against_sha more robust (ignore custom drivers; handle dash‑prefixed files) (#2749) | new-features |
| インタラクティブ実行時のテスト負荷を軽減 (#2707) | Reduce test load when running interactively (#2707) | new-features |
| 履歴内のアシスタントメッセージの重複を排除 (#2758) | Deduplicate assistant messages in history (#2758) | new-features |
| Codex GitHub Action を一時的に削除 (#2729) | Remove the Codex GitHub Action for now (#2729) | new-features |

## 0.24.0

| 日本語 | English | Category |
|--------|---------|----------|
| メッセージのキューイング (#2637) | Queued messages (#2637) | new-features |
| 画像ファイルのコピー&ペースト / ドラッグ&ドロップ (#2567) | Copy Paste / Drag & Drop image files (#2567) | new-features |
| スクロール可能なトランスクリプトモード (Ctrl+T) (#2525) | Transcript mode (Ctrl+T) with scrolling ability (#2525) | new-features |
| 前のメッセージからの会話の編集/再開 (esc-esc) (#2607) | Edit/resume conversation (esc-esc) from previous messages (#2607) | new-features |
| 明示的な --search オプション使用時のWeb検索 (#2371) | Web search when using explicit --search option (#2371) | new-features |
| CoTをデフォルトで非表示にし、ステータスインジケーターにヘッダーを表示 (#2316) | Hide CoT by default; show headers in status indicator (#2316) | new-features |
| 差分出力をページャーで表示 (+ hunkヘッダー付き) (#2568) | Show diff output in pager (+ with hunk headers) (#2568) | new-features |
| コマンド承認UIの簡素化 (#2708) | Simplify command approval UI (#2708) | new-features |
| Esc/Ctrl+Cの中断処理を統一 (#2661) | Unify Esc/Ctrl+C interrupt handling (#2661) | new-features |
| Windows PowerShellのペーストを修正 (#2544) | Fix windows powershell paste (#2544) | new-features |
| 長時間実行されるシェルコマンド `exec_command`/`write_stdin` のサポート追加 (#2574) | Add support for long-running shell commands `exec_command`/`write_stdin` (#2574) | new-features |
| apply_patchの信頼性を改善 (#2646) | Improve apply_patch reliability (#2646) | new-features |
| リトライ回数に上限を設定 (#2701) | Cap retry counts (#2701) | new-features |
| MCPツールを決定的にソートしてキャッシュヒット率を改善 (#2611) | Improve cache hit rate by sorting MCP tools deterministically (#2611) | new-features |
| GPT-5用のmodel_verbosity設定を追加 (#2108) | Add model_verbosity config for GPT-5 (#2108) | new-features |
| gitルートまでのすべてのAGENTS.mdファイルを読み込み (#2532) | Read all AGENTS.md files up to git root (#2532) | new-features |
| worktree環境でのgitルート解決を修正 (#2585) | Fix git root resolution in worktrees (#2585) | new-features |
| エラーメッセージとハンドリングを改善 (#2695, #2587, #2640, #2540) | Improve error messages & handling (#2695, #2587, #2640, #2540) | new-features |

## 0.23.0

| 日本語 | English | Category |
|--------|---------|----------|
| ハイライト | Highlights | new-features |
| マージされた PR の一覧 | Full list of merged PRs | new-features |

## 0.22.0

| 日本語 | English | Category |
|--------|---------|----------|
| https://github.com/openai/codex/pull/2294 ログインサーバーを Python から Rust に移行し、https://github.com/openai/codex/issues/2000 と https://github.com/openai/codex/issues/2044 の両方の問題を改善 | https://github.com/openai/codex/pull/2294 moves the login server from Python to Rust, which should help with both https://github.com/openai/codex/issues/2000 and https://github.com/openai/codex/issues/2044. | new-features |
| https://github.com/openai/codex/pull/2029 マークダウンストリーミングのサポートを追加 | https://github.com/openai/codex/pull/2029 adds support for markdown streaming | new-features |
| https://github.com/openai/codex/pull/2270 明るい背景使用時の差分表示の可読性を向上するよう UI 処理を改善 | https://github.com/openai/codex/pull/2270 improves the UI treatment of diffs so they are more readable when using a light background | new-features |
| https://github.com/openai/codex/pull/2113 `ctrl-z` で TUI を一時停止できるように追加 | https://github.com/openai/codex/pull/2113 `ctrl-z` can be used to suspend the TUI | new-features |

## 0.21.0

| 日本語 | English | Category |
|--------|---------|----------|
| https://github.com/openai/codex/pull/2200 プロンプトキャッシュキーを送信してキャッシュ効率を向上（トークン効率の改善が期待されます） | https://github.com/openai/codex/pull/2200 send prompt cache key for better caching (should improve token efficiency!) | new-features |
| https://github.com/openai/codex/pull/2202 複数行コマンドを分割して可読性を向上 | https://github.com/openai/codex/pull/2202 split multiline commands to improve readability | new-features |
| https://github.com/openai/codex/pull/2095 exec コマンドを解析して UI でより見やすく表示 | https://github.com/openai/codex/pull/2095 Parse exec commands and format them more nicely in the UI | new-features |
| https://github.com/openai/codex/pull/2186 `applypatch` コマンドを `apply_patch` コマンド文字列として認識 | https://github.com/openai/codex/pull/2186 recognize `applypatch` command as `apply_patch` command string | new-features |
| https://github.com/openai/codex/pull/2183 出力が切り詰められたことをモデルに伝えるため、ツール呼び出し結果に切り詰めメッセージを含める | https://github.com/openai/codex/pull/2183 Include output truncation message in tool call results to tell the model when it did not get the full output from a command that it might have expected | new-features |
| https://github.com/openai/codex/pull/2162 `/compact` コマンド実行後にフィードバックメッセージを表示し、デルタが送信されない問題を修正 | https://github.com/openai/codex/pull/2162 show feedback message after `/compact` command, fixing an issue when no deltas were sent | new-features |
| https://github.com/openai/codex/pull/2050 `apply_patch` の差分プレビューを表示 | https://github.com/openai/codex/pull/2050 show diff preview for `apply_patch` | new-features |
| https://github.com/openai/codex/pull/1975 MCP ツールに JSON スキーマのサニタイゼーションを追加し、内部 JsonSchema enum との互換性を確保 外部コントリビューター: @yaroslavyaroslav さんに感謝! | https://github.com/openai/codex/pull/1975 add JSON schema sanitization for MCP tools to ensure compatibility with internal JsonSchema enum external contributor: Thanks @yaroslavyaroslav! | new-features |

## 0.20.0

| 日本語 | English | Category |
|--------|---------|----------|
| `@openai/codex` の `npm` リリースは、旧 TypeScript CLI へのフォールバックではなく Rust CLI を実行するようになりました（TypeScript コードは https://github.com/openai/codex/pull/2048 でリポジトリから削除されました) | https://github.com/openai/codex/pull/2035 the `npm` release of `@openai/codex` now runs the Rust CLI instead of falling back to the old TypeScript CLI (TypeScript code was removed from the repo in https://github.com/openai/codex/pull/2048) | new-features |
| Windows に関する 2 つの問題を修正しました | https://github.com/openai/codex/pull/2019 fixes two things for Windows: | new-features |
| `codex login` での Python 証明書の問題を修正/改善しました: https://github.com/openai/codex/issues/2044 | https://github.com/openai/codex/pull/2042 should help/fix the Python certificates issue with `codex login`: https://github.com/openai/codex/issues/2044 | new-features |

## 0.16.0

| 日本語 | English | Category |
|--------|---------|----------|
| 容量に関するエラーメッセージの軽微な修正: https://github.com/openai/codex/pull/1947 | Small fix for an error message around capacity: https://github.com/openai/codex/pull/1947 | new-features |
| 本日のより重要なアップグレードは 0.15.0 へのもの: https://github.com/openai/codex/releases/rust-v0.15.0 | Though the more significant upgrade today is to 0.15.0: https://github.com/openai/codex/releases/rust-v0.15.0 | new-features |

## 0.13.0

| 日本語 | English | Category |
|--------|---------|----------|
| （翻訳待ち） | https://github.com/openai/gpt-oss | new-features |
| （翻訳待ち） | https://github.com/openai/codex/pull/1848 | new-features |

## 0.12.0

| 日本語 | English | Category |
|--------|---------|----------|
| 0.11.0で発生したリグレッション https://github.com/openai/codex/issues/1796 を修正するため、https://github.com/openai/codex/pull/1826 を含む。 | Includes https://github.com/openai/codex/pull/1826 to fix a regression introduced in 0.11.0: https://github.com/openai/codex/issues/1796. | new-features |

## 0.11.0

| 日本語 | English | Category |
|--------|---------|----------|
| https://github.com/openai/codex/issues/1247 コピー&ペーストが動作するようになりました | https://github.com/openai/codex/issues/1247 copy/paste works now | new-features |
| https://github.com/openai/codex/issues/1502 ターミナルのネイティブスクロールを使用 | https://github.com/openai/codex/issues/1502 use the terminal's native scrolling | new-features |
| https://github.com/openai/codex/pull/1527 `/compact` コマンドのサポートを追加 | https://github.com/openai/codex/pull/1527 adds support for the `/compact` command | new-features |
| https://github.com/openai/codex/pull/1726 実験的なプランニングツールを導入 | https://github.com/openai/codex/pull/1726 introduces an experimental planning tool | new-features |
| https://github.com/openai/codex/pull/1705 `apply_patch` がセッションのサンドボックスを通じて実行されることを保証するセキュリティ修正 | https://github.com/openai/codex/pull/1705 security fix to ensure `apply_patch` is run through the sandbox for the session | new-features |
| https://github.com/openai/codex/pull/1764 CLI が新しいバージョンをチェックし、古いバージョンを使用している場合に通知 | https://github.com/openai/codex/pull/1764 CLI now checks for new versions and lets you know if you are out of date | new-features |

## 0.9.0

| 日本語 | English | Category |
|--------|---------|----------|
| `codex mcp` の多数の修正 | Numerous fixes to `codex mcp`. | new-features |
| Codex が終了したときにシェルコマンドが `SIGTERM` を受け取るようにする修正 (Linux のみ) https://github.com/openai/codex/pull/1626 | https://github.com/openai/codex/pull/1626 to ensure shell commands spawned by Codex get `SIGTERM` when `codex` is killed (Linux only) | new-features |
| ripgrep/`rg` の特定フラグを自動承認しないように変更 https://github.com/openai/codex/pull/1644 | Do not auto-approve certain flags for ripgrep/`rg` https://github.com/openai/codex/pull/1644 | new-features |

## 0.8.0

| 日本語 | English | Category |
|--------|---------|----------|
| https://github.com/openai/codex/pull/1594 により、TUI および `codex exec` 使用時にモデルからのレスポンスをストリーミング配信するようになりました | As of https://github.com/openai/codex/pull/1594, we now stream the response from the model in the TUI and when using `codex exec` | new-features |
| https://github.com/openai/codex/pull/1589 により、`ctrl-d` がコンポーザー空の場合のみ TUI を終了するように変更されました(Codex エージェントが思考中でコンポーザーが非表示の場合は引き続き終了します) | https://github.com/openai/codex/pull/1589 changes `ctrl-d` so it only exits the TUI if the composer is empty (it will still exit the TUI if the composer is hidden because the Codex agent is thinking) | new-features |
| https://github.com/openai/codex/pull/1596 により、`~/.codex/sessions` フォルダーが `YYYY/MM/DD` サブフォルダーで整理されるようになりました。これにより最近のセッションを見つけやすくなり、以前は `~/.codex/sessions` に無制限にエントリが増える可能性があったファイルシステムのパフォーマンス低下を回避できます | As a heads up, https://github.com/openai/codex/pull/1596 changes the organization of the `~/.codex/sessions` folder so it has `YYYY/MM/DD` subfolders. This should make it easier to find recent sessions and avoid degrading filesystem performance because previously `~/.codex/sessions` could end up with an unbounded number of entries | new-features |
| https://github.com/openai/codex/pull/1571 により、長い MCP ツール名を適切に処理できなかった長年の問題を修正しました(https://github.com/openai/codex/issues/1289 が関連 GitHub issue です) | https://github.com/openai/codex/pull/1571 fixes a longstanding issue where we failed to handle long MCP tool names gracefully (https://github.com/openai/codex/issues/1289 was the relevant GitHub issue) | new-features |
| https://github.com/openai/codex/pull/1603 により、`codex exec` に `--json` フラグが追加され、stdout に JSONL 形式で出力を表示できるようになりました | https://github.com/openai/codex/pull/1603 introduced a `--json` flag to `codex exec` so that it prints output as JSONL to stdout | new-features |
| https://github.com/openai/codex/pull/1590 により、`npm` バージョンで Node.js スクリプト経由で Codex CLI を起動した際に、Codex CLI プロセスと Node.js プロセスが一緒に終了するようにしましたが、https://github.com/openai/codex/issues/1570 の詳細によると、その特定の問題を解決するには不十分なようです | https://github.com/openai/codex/pull/1590 tries to ensure that when the Codex CLI is launched via the Node.js script in the `npm` version that both the Codex CLI process and Node.js process exit together, though from the additional details on https://github.com/openai/codex/issues/1570, it seems like it is not sufficient to fix that specific problem. | new-features |
| https://github.com/openai/codex/pull/1590 により、Windows 上で `npm` バージョンがクラッシュするのではなく TypeScript バージョンにフォールバック(当面の間)するようになり、https://github.com/openai/codex/issues/1573 が修正されました | Though https://github.com/openai/codex/pull/1590 should make it so that, on Windows, the `npm` version will fall back to the TypeScript version (for now) rather than just crashing, fixing https://github.com/openai/codex/issues/1573. | new-features |

## 0.3.0

| 日本語 | English | Category |
|--------|---------|----------|
| 非ASCII文字がCLIをクラッシュさせる問題を修正: https://github.com/openai/codex/issues/1450 (@ryozi-tn による https://github.com/openai/codex/pull/1467 での修正に感謝) | Fixes an issue where non-ASCII characters were crashing the CLI: https://github.com/openai/codex/issues/1450 (huge thanks to @ryozi-tn for the fix in https://github.com/openai/codex/pull/1467) | new-features |
| `--sandbox` フラグのサポートを追加し、このオプションに関連する `config.toml` の破壊的変更を実施。詳細は https://github.com/openai/codex/pull/1476 を参照 | Adds support for a `--sandbox` flag and makes some breaking changes to `config.toml` around this option. See https://github.com/openai/codex/pull/1476 for details. | new-features |
| モデルプロバイダーへのリクエスト時にカスタムHTTPヘッダーを設定可能に: https://github.com/openai/codex/pull/1473 | Makes it possible to configure custom HTTP headers when making requests to model providers: https://github.com/openai/codex/pull/1473. | new-features |

