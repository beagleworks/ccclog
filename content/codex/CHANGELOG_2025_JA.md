# OpenAI Codex 変更履歴 (2025年)

このファイルは OpenAI Codex の2025年リリース分の変更履歴を日本語で記載しています。

---

## 0.77.0

| 日本語 | English | Category |
|--------|---------|----------|
| TUI2: ターミナル間でマウスホイールとトラックパッドスクロールを正規化、`tui.scroll_*` 設定オプションを追加 (PR #8357) | TUI2: Normalize mouse wheel + trackpad scrolling across terminals; add `tui.scroll_*` config settings (PR #8357) | new-features |
| `requirements.toml` に `allowed_sandbox_modes` を追加し、許可されるサンドボックスモードを制限 (PR #8298) | Add `allowed_sandbox_modes` to `requirements.toml` to constrain permitted sandbox modes (PR #8298) | new-features |
| MCP: ストリーム可能な HTTP MCP サーバーの OAuth ログインが `rmcp_client` フィーチャーフラグ不要に (PR #8087) | MCP: OAuth login for streamable HTTP MCP servers no longer requires the `rmcp_client` feature flag (PR #8087) | new-features |
| `codex-file-search` でファイル名導出を一元化し、ファジーファイル検索の表示と一貫性を改善 (PR #8334) | Improve fuzzy file search display/consistency by centralizing file-name derivation in `codex-file-search` (PR #8334) | new-features |
| バンドルされたモデルメタデータ (`models.json`) を更新 (PR #8168) | Update bundled model metadata (`models.json`) (PR #8168) | new-features |
| `/undo` が git ステージングやゴーストコミットに破壊的に影響する問題を修正 (PR #8303) | Fix `/undo` interacting destructively with git staging / ghost commits (PR #8303) | bug-fixes |
| TUI2: トランスクリプトスクロール中の冗長な再描画を削減 (PR #8295) | TUI2: Reduce redundant redraws while scrolling transcripts (PR #8295) | bug-fixes |
| Docs: `experimental.md` 内の `contributing.md` へのリンクを修正 (PR #8311) | Docs: Fix link to `contributing.md` in `experimental.md` (PR #8311) | bug-fixes |

## 0.76.0

| 日本語 | English | Category |
|--------|---------|----------|
| macOS DMG ビルドターゲットを追加 (PR #8207) | Add a macOS DMG build target (PR #8207) | new-features |
| ターミナルごとのスクロール調整のためのターミナル検出メタデータを改善 (PR #8252) | Improve terminal detection metadata for per-terminal scroll tuning (PR #8252) | new-features |
| スキルポップアップの UI を調整 (PR #8250) | UI tweaks on the skills popup (PR #8250) | new-features |
| TUI 検索セル描画を改善 (PR #8273) | TUI search cell rendering improvements (PR #8273) | new-features |
| /ps コマンドを追加 (PR #8279) | Add /ps command (PR #8279) | new-features |
| UNIX で /etc/codex/requirements.toml をサポート (PR #8277) | Add support for /etc/codex/requirements.toml on UNIX (PR #8277) | new-features |
| スキルの shortDescription をサポート (PR #8278, PR #8301) | Support shortDescription for skills (PR #8278, PR #8301) | new-features |
| モデル一覧 UI を追加 (PR #8286) | Add model list UI (PR #8286) | new-features |
| app-server v2 非推奨通知イベントを追加 (PR #8285) | Add app-server v2 deprecation notice event (PR #8285) | new-features |
| ExternalSandbox ポリシーを導入 (PR #8290) | Introduce ExternalSandbox policy (PR #8290) | new-features |
| スキルをデフォルトで有効化 (PR #8297) | Skills default on (PR #8297) | new-features |
| 管理者スコープのスキルをサポート (PR #8296) | Support admin-scoped skills (PR #8296) | new-features |
| バンドルされたシステムスキルを更新 (PR #8253, PR #8328) | Update bundled system skills (PR #8253, PR #8328) | new-features |
| app server で exclude のデフォルトを true に設定 (PR #8281) | Set exclude default to true in app server (PR #8281) | new-features |
| 制限付きサンドボックストークンでパイプが動作することを保証 (PR #8280) | Ensure pipes work in restricted sandbox tokens (PR #8280) | bug-fixes |
| command-runner ディレクトリへの読み取り ACL をより早期に付与 (PR #8275) | Grant read ACL to the command-runner directory earlier (PR #8275) | bug-fixes |
| 重複した shell_snapshot FeatureSpec のリグレッションを修正 (PR #8274) | Fix duplicate shell_snapshot FeatureSpec regression (PR #8274) | bug-fixes |
| request への切り替えにより sandbox-state 更新順序を修正 (PR #8142) | Fix sandbox-state update ordering by switching to request (PR #8142) | bug-fixes |

## 0.75.0

| 日本語 | English | Category |
|--------|---------|----------|
| #8270 — スプラッシュスクリーン | #8270 — splash screen | new-features |
| #8251 — 新しい制約ベースのローディング戦略への移行 | #8251 — migrate to new constraint-based loading strategy | new-features |
| #7460 — cloud: cloud exec でデフォルトを現在のブランチに変更 | #7460 — cloud: default to current branch in cloud exec | new-features |

## 0.74.0

| 日本語 | English | Category |
|--------|---------|----------|
| 知識、推論、コーディング全般で改善された最新のフロンティアモデル gpt-5.2-codex を導入 [詳細はこちら](https://openai.com/index/introducing-gpt-5-2-codex) | Introducing gpt-5.2-codex our latest frontier model with improvements across knowledge, reasoning and coding. [Learn more](https://openai.com/index/introducing-gpt-5-2-codex) | new-features |
| `experimental` 機能を試すための新しいスラッシュコマンド `/experimental` を追加 | Add new slash command `/experimental` for trying out `experimental` features | new-features |
| ゴーストスナップショット警告の無効化トグルを追加 (#8178) | Ghost snapshot warning disable toggle (#8178) | new-features |
| UI の改善(バックグラウンドターミナル、ピッカーのクリーンアップ) (#8255, #8232) | UI polish (background terminals, picker cleanup) (#8255, #8232). | new-features |

## 0.73.0

| 日本語 | English | Category |
|--------|---------|----------|
| セッションキャプチャ改善のための ghost snapshot v2 を追加 (PR #8055) | Add ghost snapshot v2 for improved session capture (PR #8055) | new-features |
| 設定で ghost コミットをサポート (PR #7873) | Support ghost commits in config (PR #7873) | new-features |
| SkillsManager と skills/list による一貫した検出のためスキル読み込みを再実装 (PR | Reimplement skills loading via SkillsManager and skills/list for consistent discovery (PR | new-features |
| Codex に OpenTelemetry トレーシングを追加 (PR #7844) | Add OpenTelemetry tracing for Codex (PR #7844) | new-features |
| セッションに出力のないツール呼び出しが含まれる場合のパニックを防止 (PR #8048) | Prevent panic when session contains a tool call without an output (PR #8048) | bug-fixes |
| 入力バースト時のキーバインディングビュー起動を回避 (PR #7980) | Avoid triggering keybindings view on input bursts (PR #7980) | bug-fixes |
| デフォルトの折り返しアルゴリズムを OptimalFit から FirstFit に変更 (PR #7960) | Change default wrap algorithm from OptimalFit to FirstFit (PR #7960) | bug-fixes |
| サンドボックス設定の一部として AbsolutePathBuf を導入 (PR #7856) | Introduce AbsolutePathBuf as part of sandbox config (PR #7856) | bug-fixes |
| ログメッセージに Error を含める (PR #7955) | Include Error in log messages (PR #7955) | bug-fixes |

## 0.72.0

| 日本語 | English | Category |
|--------|---------|----------|
| Config API のクリーンアップ (#7924): 新しい config API とよりクリーンな設定読み込みフロー | Config API cleanup (#7924): new config API and cleaner config loading flow. | new-features |
| API キーユーザー向けリモート圧縮 (#7835): キーベースセッションでリモート圧縮を有効化 | Remote compact for API-key users (#7835): enable remote compacting in key-based sessions. | new-features |
| MCP と TUI のステータス表示 (#7828, #7907): TUI で MCP 起動進捗メッセージを復元し、最新のディスク値を使用 | MCP and TUI status visibility (#7828, #7907): restore MCP startup progress messages in the TUI and use latest disk values | new-features |
| Windows と PowerShell の改善 (#7607, #7893, #7942, #7137): pwsh/powershell を確実に検出し、PowerShell をパース | Windows and PowerShell quality-of-life (#7607, #7893, #7942, #7137): locate pwsh/powershell reliably, parse PowerShell with | new-features |
| サンドボックスと安全性の更新 (#7809, #7889, #7728): Elevated Sandbox 3/4 と安全なコマンドリストの拡張 | Sandbox and safety updates (#7809, #7889, #7728): Elevated Sandbox 3/4 plus expanded safe command list. | new-features |
| gpt-5.2 向けモデル/プロンプト UX (#7934, #7910, #7874, #7911): プロンプト更新と xhigh reasoning の警告/ドキュメントの明確化 | Model/prompt UX for gpt-5.2 (#7934, #7910, #7874, #7911): prompt updates and clearer xhigh reasoning warnings/docs. | new-features |
| cargo ビルドスイッチを修正 #7948 @[iceweasel-oai] | fix cargo build switch #7948 @[iceweasel-oai] | new-features |
| 修正: TUI で MCP 起動進捗メッセージを復元 (#7827 を修正) #7828 @[ivanmurashko] | fix: restore MCP startup progress messages in TUI (fixes #7827) #7828 @[ivanmurashko] | new-features |
| 1p をサポート #7945 @[aibrahim-oai] | support 1p #7945 @[aibrahim-oai] | new-features |
| Windows 向けに 2 つの追加実行ファイルに署名 #7942 @[iceweasel-oai] | Sign two additional exes for Windows #7942 @[iceweasel-oai] | new-features |
| 修正: PowerShell を使用して PowerShell をパース #7607 @[bolinfest] | fix: use PowerShell to parse PowerShell #7607 @[bolinfest] | new-features |
| chore(prompt) ベースプロンプトを更新 #7943 @[dylan-hurd-oai] | chore(prompt) Update base prompt #7943 @[dylan-hurd-oai] | new-features |
| Elevated Sandbox 4 #7889 @[iceweasel-oai] | Elevated Sandbox 4 #7889 @[iceweasel-oai] | new-features |
| chore(prompt) 切り詰め詳細を削除 #7941 @[dylan-hurd-oai] | chore(prompt) Remove truncation details #7941 @[dylan-hurd-oai] | new-features |
| feat: クリーンな設定読み込みと config API #7924 @[jif-oai] | feat: clean config loading and config api #7924 @[jif-oai] | new-features |
| chores: models manager #7937 @[aibrahim-oai] | chores: models manager #7937 @[aibrahim-oai] | new-features |
| API キーユーザー向けリモート圧縮 #7835 @[pakrym-oai] | Remote compact for API-key users #7835 @[pakrym-oai] | new-features |
| chore(gpt-5.2) プロンプト更新 #7934 @[dylan-hurd-oai] | chore(gpt-5.2) prompt update #7934 @[dylan-hurd-oai] | new-features |
| 修正: rx サブスクリプションの競合 #7921 @[jif-oai] | fix: race on rx subscription #7921 @[jif-oai] | new-features |
| 修正: tui のブレーク #7876 @[jif-oai] | fix: break tui #7876 @[jif-oai] | new-features |
| feat: 安全なコマンドを追加 #7728 @[jif-oai] | feat: more safe commands #7728 @[jif-oai] | new-features |
| 修正(tui): gpt-5.2 で xhigh reasoning 警告を表示 #7910 @[voctory] | fix(tui): show xhigh reasoning warning for gpt-5.2 #7910 @[voctory] | new-features |
| スキル名と説明の制限をバイト数ではなく文字数ベースに変更 #7915 @[etraut-openai] | Make skill name and description limit based on characters not byte counts #7915 @[etraut-openai] | new-features |
| feat: pwsh.exe と powershell.exe を検出するユーティリティを導入 #7893 @[bolinfest] | feat: introduce utilities for locating pwsh.exe and powershell.exe #7893 @[bolinfest] | new-features |
| docs: gpt-5.2 での xhigh reasoning effort を明確化 #7911 @[voctory] | docs: clarify xhigh reasoning effort on gpt-5.2 #7911 @[voctory] | new-features |
| feat: MCP サーバーステータスに最新のディスク値を使用 #7907 @[shijie-oai] | feat: use latest disk value for mcp servers status #7907 @[shijie-oai] | new-features |
| "fix(apply-patch): Windows で CRLF 改行を保持" を取り消し #7903 @[dylan-hurd-oai] | Revert "fix(apply-patch): preserve CRLF line endings on Windows" #7903 @[dylan-hurd-oai] | new-features |
| マイグレーション画面を動的に変更 #7896 @[aibrahim-oai] | Make migration screen dynamic #7896 @[aibrahim-oai] | new-features |
| xhigh モデルでの誤解を招く「maximize」high effort 説明を修正 #7874 @[voctory] | Fix misleading 'maximize' high effort description on xhigh models #7874 @[voctory] | new-features |
| "chat" wire_api の非推奨通知を追加 #7897 @[etraut-openai] | Added deprecation notice for "chat" wire_api #7897 @[etraut-openai] | new-features |
| WSL 2 下の Windows でトーストを修正 #7137 @[dank-openai] | Fix toasts on Windows under WSL 2 #7137 @[dank-openai] | new-features |
| 修正: policy/*.codexpolicy → rules/*.rules #7888 @[bolinfest] | fix: policy/*.codexpolicy -> rules/*.rules #7888 @[bolinfest] | new-features |
| RMCP クライアント設定ガイダンスを更新 #7895 @[nornagon-openai] | Update RMCP client config guidance #7895 @[nornagon-openai] | new-features |
| モデル情報を更新 #7853 @[aibrahim-oai] | Update Model Info #7853 @[aibrahim-oai] | new-features |
| Elevated Sandbox 3 #7809 @[iceweasel-oai] | Elevated Sandbox 3 #7809 @[iceweasel-oai] | new-features |
| リリーススクリプトを削除 #7885 @[aibrahim-oai] | remove release script #7885 @[aibrahim-oai] | new-features |
| Chore: find family の可視性を制限 #7891 @[aibrahim-oai] | Chore: limit find family visability #7891 @[aibrahim-oai] | new-features |
| 修正: ReasoningSummary::None の場合は reasoning summary を省略 #7845 @[apanasenko-oai] | fix: omit reasoning summary when ReasoningSummary::None #7845 @[apanasenko-oai] | new-features |
| 修正: nix 向けの古い filedescriptor 出力ハッシュを削除 #7865 @[tyleranton] | fix: drop stale filedescriptor output hash for nix #7865 @[tyleranton] | new-features |
| 修正: オンボーディング ApiKeyEntry 状態で 'q' キーで終了しないように変更 #7869 @[sayan-oai] | fix: dont quit on 'q' in onboarding ApiKeyEntry state #7869 @[sayan-oai] | new-features |

## 0.71.0

| 日本語 | English | Category |
|--------|---------|----------|
| 知識、推論、コーディングにおいて改善された最新の最先端モデル gpt-5.2 を導入。[詳細を見る](https://openai.com/index/introducing-gpt-5-2/) | Introducing gpt-5.2 our latest frontier model with improvements across knowledge, reasoning and coding. [Learn More](https://openai.com/index/introducing-gpt-5-2/) | new-features |

## 0.69.0

| 日本語 | English | Category |
|--------|---------|----------|
| スキル: 明示的なスキル選択で SKILL.md の内容がターンに挿入されるようになり、スキルはセッションごとに1回読み込まれ、ファイルが見つからない場合は警告を表示 | Skills: Explicit skill selections now inject SKILL.md content into the turn; skills load once per session and warn if a file | new-features |
| Config API: config/read が完全に型付けされ、config 書き込み時にコメントと順序が保持され、実際の設定に合わせて model がオプショナルに (#7658) | Config API: config/read is fully typed; config writes preserve comments/order; model is optional to match real configs (#7658, | new-features |
| TUI/UX: ログファイルから ANSI コードを削除、オプション選択とトランスクリプトページャーに vim ナビゲーションを追加、トランスクリプトの連続性を修正、スラッシュ処理を改善 | TUI/UX: Log files drop ANSI codes; vim navigation for option selection and transcript pager; transcript continuity fix; slash- | new-features |
| 実行とサンドボックス: シェルスナップショット機能、統合実行イベントの再設計、サンドボックスの許可範囲拡大 (sendmsg/recvmsg)、より明確なレート制限処理 | Exec & sandbox: Shell snapshotting, reworked unified-exec events, elevated sandbox allowances (sendmsg/recvmsg), clearer rate- | new-features |
| プラットフォーム/認証/ビルド: セッション内 MCP ログイン、リモートブランチレビューのサポート、Windows 署名の切り替え、ConPty のベンダリング、Nix ハッシュ更新 | Platform/auth/build: MCP in-session login, remote-branch review support, Windows signing toggles, ConPty vendoring, Nix hash | new-features |
| その他の修正: 未サポート画像のエラー処理を改善、絶対パスでの設定読み込み、並列テストの安定性向上、重複した機能仕様の削除など | Misc fixes: Unsupported images error cleanly, absolute config paths, parallel test stability, duplicated feature spec removal, | new-features |

## 0.66.0

| 日本語 | English | Category |
|--------|---------|----------|
| 実行ポリシー: TUI が承認後にコマンドプレフィックスをホワイトリスト登録可能に、サンドボックス拒否時に承認可能な修正案を提示、シェル MCP が実行ポリシーに従うことで MCP ツールも同じルールを適用 | Execpolicy: TUI can whitelist command prefixes after an approval, sandbox denials propose an amendment you can accept, shell MCP now runs execpolicy so MCP tools follow the same rules, and | new-features |
| 統合実行とシェルの安定性: ステータスラインの進捗表示を明確化、Windows 統合実行のクラッシュを修正、長いコマンドがレイアウトを崩さず折り返し、SSE/セッションのクリーンアップでスタックを削減 | Unified exec & shell stability: status line shows clearer progress, Windows unified-exec crash fixed, long commands wrap without breaking layout, and SSE/session cleanup reduces stuck or | new-features |
| TUI 更新: クロスプラットフォームのショートカット処理を統一(Ctrl+N/P とリスト選択がすべての環境で動作)、オーバーレイ、リスト、テキストエリア間でナビゲーションが一致 (#7583, #7629) | TUI updates: cross-platform shortcut handling is consistent (Ctrl+N/P and list selection now work everywhere), so navigation matches between overlays, lists, and text areas (#7583, #7629). | new-features |
| パッチ適用: Windows の CRLF 改行を保持、新しい E2E シナリオでより多くのパッチ形式をカバー、Windows 固有のテストカバレッジでパッチフローの不具合を削減 (#7515, #7567, #7554)。@cnaples79 が[この修正のコア部分](https://github.com/openai/codex/pull/4017)に貢献しました! | Apply-patch: Windows CRLF line endings are preserved, new e2e scenarios cover more patch shapes, and Windows-specific test coverage reduces regressions in patch flows (#7515, #7567, #7554). Thanks to @cnaples79 who contributed the [core part](https://github.com/openai/codex/pull/4017) of this fix! | new-features |
| クラウド実行: codex cloud exec がリモート実行用の --branch を受け入れ、status/diff/apply フローを公開してクラウドパスからの変更を検証・適用可能に (#7602, #7614) | Cloud exec: codex cloud exec accepts --branch for remote runs and now exposes status/diff/apply flows so you can inspect and apply changes from the cloud path (#7602, #7614). | new-features |
| 署名: Linux アーティファクトを sigstore で署名 (#7674) | Signing: Linux artifacts are signed via sigstore. (#7674). | new-features |
| 一般的な修正: 並列ツール呼び出しチャットが正しく返却されるように、ゴーストスナップショットトークンが課金されないように、ツール名の欠落で litellm プロキシがクラッシュしないように、マイグレーションプロンプトで HTTPS リンクを使用 | General fixes: parallel tool-call chat now returns correctly, ghost snapshot tokens aren’t billed, missing tool names no longer crash the litellm proxy, and migration prompts use HTTPS links | new-features |

## 0.65.0

| 日本語 | English | Category |
|--------|---------|----------|
| Codex Max をデフォルトに (#7566): Codex Max がデフォルトモデルとなり、async-in-sync コードに関連する TUI パニックを修正 | Codex Max as default (#7566): Codex Max is now the default model, and a TUI panic related to async-in-sync code was fixed. | new-features |
| 再開 UX の改善 (#7302, #7303): /resume スラッシュコマンドを追加し、再開パフォーマンスを改善して作業の再開を高速化 | Better resume UX (#7302, #7303): Added a /resume slash command and improved resume performance so picking work back up is snappier. | new-features |
| ツールチップとヒント UX (#7557, #7440): ヒント/ツールチップをマークダウンで太字の「Tip」ラベル付きでレンダリングし、アプリ全体で Codex ツールチップを充実化 | Tooltips & tips UX (#7557, #7440): Tips/tooltips are rendered via markdown with a bold “Tip” label and richer Codex tooltips across the app. | new-features |
| TUI の利便性向上 (#7530, #7448, #7514, #7461): TUI に Ctrl‑P/N ナビゲーション、画面行単位のシェル出力制限、Windows クリップボード画像ペーストの復元、レイアウトをクリーンにするリファクタリングを追加 | TUI quality-of-life (#7530, #7448, #7514, #7461): TUI gets Ctrl‑P/N navigation, screen-line-capped shell output, restored Windows clipboard image paste, and a refactor for cleaner layout. | new-features |
| 履歴とコンテキストの整理 (#6242, #7483, #7545, #7431, #7483): history.jsonl を history.max_bytes でトリミング、一般的なジャンクディレクトリ（__pycache__ を含む）をデフォルトで除外、ペーストプレースホルダーの一意性を維持 | History and context hygiene (#6242, #7483, #7545, #7431, #7483): history.jsonl is trimmed by history.max_bytes, common junk dirs (incl. __pycache__) are ignored by default, and paste placeholders stay distinct. | new-features |
| ヒントのレンダリングにマークダウンを使用 #7557 @[Jeremy Rose] | use markdown for rendering tips #7557 @[Jeremy Rose] | new-features |
| codex max への移行 #7566 @[Ahmed Ibrahim] | Migrate codex max #7566 @[Ahmed Ibrahim] | new-features |
| #7481 からあまり価値のないテストを削除 #7558 @[Eric Traut] | Remove test from #7481 that doesn't add much value #7558 @[Eric Traut] | new-features |
| [app-server] 設定の `file_path` をオプションに変更 #7560 @[Celia Chen] | [app-server] make `file_path` for config optional #7560 @[Celia Chen] | new-features |
| モデルファミリーを models manager に移行 #7565 @[Ahmed Ibrahim] | Migrate model family to models manager #7565 @[Ahmed Ibrahim] | new-features |
| `tui` を models manager 使用に移行 #7555 @[Ahmed Ibrahim] | Migrate `tui` to use models manager #7555 @[Ahmed Ibrahim] | new-features |
| `ModelsManager` を導入し、`app-server` を移行 #7552 @[Ahmed Ibrahim] | Introduce `ModelsManager` and migrate `app-server` to use it. #7552 @[Ahmed Ibrahim] | new-features |
| 修正: トランスクリプトオーバーレイで長い実行行を折り返し #7481 @[muyuanjin] | fix: wrap long exec lines in transcript overlay #7481 @[muyuanjin] | new-features |
| 修正: Features はセッション/スレッドの生存期間中は不変にする #7540 @[Michael Bolin] | fix: Features should be immutable over the lifetime of a session/thread #7540 @[Michael Bolin] | new-features |
| 機能: $ または /skills によるスキルの一覧表示と選択をサポート #7506 @[xl-openai] | feat: Support listing and selecting skills via $ or /skills #7506 @[xl-openai] | new-features |
| [app-server] 修正: turn/plan/updated に thread_id を追加 #7553 @[Owen Lin] | [app-server] fix: add thread_id to turn/plan/updated #7553 @[Owen Lin] | new-features |
| 機能(tui): textarea で Ctrl-P/N を矢印ナビゲーションにマッピング #7530 @[Aofei Sheng] | feat(tui): map Ctrl-P/N to arrow navigation in textarea #7530 @[Aofei Sheng] | new-features |
| 修正(tui): ユーザーシェル出力を画面行数で制限 #7448 @[muyuanjin] | fix(tui): limit user shell output by screen lines #7448 @[muyuanjin] | new-features |
| モデルプリセットの移行 #7542 @[Ahmed Ibrahim] | Migrate model preset #7542 @[Ahmed Ibrahim] | new-features |
| 修正: main #7546 @[jif-oai] | fix: main #7546 @[jif-oai] | new-features |
| 機能: pycache を除外ディレクトリに追加 #7545 @[jif-oai] | feat: add pycache to excluded directories #7545 @[jif-oai] | new-features |
| 雑務: 統合 exec サンドボックス検出を更新 #7541 @[jif-oai] | chore: update unified exec sandboxing detection #7541 @[jif-oai] | new-features |
| スラッシュ resume を追加 #7302 @[Ahmed Ibrahim] | add slash resume #7302 @[Ahmed Ibrahim] | new-features |
| 雑務: app-server フィードバック/アップロードで conversation_id を thread_id に変更 #7538 @[Owen Lin] | chore: conversation_id -> thread_id in app-server feedback/upload #7538 @[Owen Lin] | new-features |
| 雑務: app-server から未使用の TodoList アイテムを削除 #7537 @[Owen Lin] | chore: delete unused TodoList item from app-server #7537 @[Owen Lin] | new-features |
| 雑務: app-server README を更新 #7510 @[Owen Lin] | chore: update app-server README #7510 @[Owen Lin] | new-features |
| 雑務: bun 環境変数検出を削除 #7534 @[Shijie Rao] | chore: remove bun env var detect #7534 @[Shijie Rao] | new-features |
| 機能: app server で mcp サーバー一覧表示をサポート #7505 @[Shijie Rao] | feat: support list mcp servers in app server #7505 @[Shijie Rao] | new-features |
| セーフティベルト: openpty() を許可 #7507 @[Jeremy Rose] | seatbelt: allow openpty() #7507 @[Jeremy Rose] | new-features |
| 機能: codex ツールチップ #7440 @[jif-oai] | feat: codex tool tips #7440 @[jif-oai] | new-features |
| 機能: 汚染防止のための遡及的な画像プレースホルダー #6774 @[jif-oai] | feat: retroactive image placeholder to prevent poisoning #6774 @[jif-oai] | new-features |
| 機能: apply patch の場合のモデル警告 #7494 @[jif-oai] | feat: model warning in case of apply patch #7494 @[jif-oai] | new-features |
| 修正(tui): ネイティブ Windows でクリップボードからの画像ペーストをサポート #7514 @[Dylan Hurd] | fix(tui) Support image paste from clipboard on native Windows #7514 @[Dylan Hurd] | new-features |
| 修正(unified_exec): unified_exec シェル使用時にプラットフォームのデフォルトシェルを使用 #7486 @[Robby He] | fix(unified_exec): use platform default shell when unified_exec shell… #7486 @[Robby He] | new-features |
| デバイスコード認証の文字列を更新 #7498 @[Matthew Zeng] | Update device code auth strings. #7498 @[Matthew Zeng] | new-features |
| 修正: デッドコードとしてマークされたインライン関数 #7508 @[Michael Bolin] | fix: inline function marked as dead code #7508 @[Michael Bolin] | new-features |
| 再開パフォーマンスの改善 #7303 @[Ahmed Ibrahim] | improve resume performance #7303 @[Ahmed Ibrahim] | new-features |
| 修正: npx のパス解決バグ #7134 @[Michael Bolin] | fix: path resolution bug in npx #7134 @[Michael Bolin] | new-features |
| 重複長のペーストプレースホルダーの一意性を確保 #7431 @[Joshua Sutton] | Ensure duplicate-length paste placeholders stay distinct #7431 @[Joshua Sutton] | new-features |
| 機能: @openai/codex-shell-tool-mcp で --version フラグをサポート #7504 @[Michael Bolin] | feat: support --version flag for @openai/codex-shell-tool-mcp #7504 @[Michael Bolin] | new-features |
| リファクタリング: tui.rs からいくつかの部分を抽出 #7461 @[Josh McKinney] | refactor: tui.rs extract several pieces #7461 @[Josh McKinney] | new-features |
| 雑務: create_approval_requirement_for_command を async fn に変更 #7501 @[Michael Bolin] | chore: make create_approval_requirement_for_command an async fn #7501 @[Michael Bolin] | new-features |
| `history.max_bytes` 設定時に `history.jsonl` をトリミング #6242 @[liam] | Trim `history.jsonl` when `history.max_bytes` is set #6242 @[liam] | new-features |
| 修正: TurnError の serde(flatten) アノテーションを削除 #7499 @[Owen Lin] | fix: remove serde(flatten) annotation for TurnError #7499 @[Owen Lin] | new-features |
| 新しいスナップショットにクレジット情報が含まれない場合にクレジットを永続化 #7490 @[zhao-oai] | persisting credits if new snapshot does not contain credit info #7490 @[zhao-oai] | new-features |
| 修正: 不要になった時点でロックを解放 #7500 @[Michael Bolin] | fix: drop lock once it is no longer needed #7500 @[Michael Bolin] | new-features |
| execpolicy ヘルパー #7032 @[zhao-oai] | execpolicy helpers #7032 @[zhao-oai] | new-features |
| コンテキストウィンドウが不明な場合に使用トークンを表示 #7497 @[Ahmed Ibrahim] | Show token used when context window is unknown #7497 @[Ahmed Ibrahim] | new-features |
| 非ブロッキング mutex を使用 #7467 @[Ahmed Ibrahim] | Use non-blocking mutex #7467 @[Ahmed Ibrahim] | new-features |
| 修正: ゴーストスナップショットで未追跡パスのみを追跡 #7470 @[lionel-oai] | Fix: track only untracked paths in ghost snapshots #7470 @[lionel-oai] | new-features |
| 機能: 標準ディレクトリを除外 #7483 @[jif-oai] | feat: ignore standard directories #7483 @[jif-oai] | new-features |
| 修正: app-server v2 型に TypeScript の number アノテーションを追加 #7492 @[Owen Lin] | fix: add ts number annotations for app-server v2 types #7492 @[Owen Lin] | new-features |
| 機能: unified_exec 用に apply_patch をインターセプト #7446 @[jif-oai] | feat: intercept apply_patch for unified_exec #7446 @[jif-oai] | new-features |
| 雑務: app-server README から experimental/unstable の記述を削除 #7474 @[Owen Lin] | chore: remove mention of experimental/unstable from app-server README #7474 @[Owen Lin] | new-features |
| リクエストロギングを復活 #7471 @[pakrym-oai] | Add request logging back #7471 @[pakrym-oai] | new-features |
| 機能: app-server v2 にワンオフコマンドを追加 #7452 @[jif-oai] | feat: add one off commands to app-server v2 #7452 @[jif-oai] | new-features |
| 機能: モデルに警告メッセージを追加 #7445 @[jif-oai] | feat: add warning message for the model #7445 @[jif-oai] | new-features |
| 雑務: 全体的にレビュー #7444 @[jif-oai] | chore: review everywhere #7444 @[jif-oai] | new-features |
| 機能: エイリアスの圧縮 #7442 @[jif-oai] | feat: alias compaction #7442 @[jif-oai] | new-features |
| 機能: skills.md の実験的サポート #7412 @[Thibault Sottiaux] | feat: experimental support for skills.md #7412 @[Thibault Sottiaux] | new-features |

## 0.64.0

| 日本語 | English | Category |
|--------|---------|----------|
| スレッドとターンに git 情報、現在の作業ディレクトリ、CLI バージョン、ソースメタデータが含まれるようになり、すべてのアイテムとエラーでスレッド ID とターン ID が伝播されるようになった。diff、計画更新、トークン使用量変更、圧縮イベントに対する新しい通知を発行。ファイル変更アイテムは出力差分を提供し、ImageView アイテムは画像をインライン表示する。 | Threads and turns now include git info, current working directory, CLI version, source metadata, and propagate thread and turn IDs on every item and error. They emit new notifications for diffs, plan updates, token-usage changes, and compaction events. File-change items provide output deltas, and ImageView items render images inline. | new-features |
| レビューフローを強化し、デタッチされたレビューモード、明示的な開始・終了イベント、レビュースレッド ID を追加。ロールアウトフィルタリング変更後もレビュー履歴が表示されるようになった。 | Review flow is enhanced with a detached review mode, explicit enter and exit events, review thread IDs, and review history remains visible after rollout filtering changes. | new-features |
| 実行機能に実験的な "exp" モデル、セッション肥大化を制限する統合 exec プルーニング、実行ごとのカスタム環境注入、ポリシー承認済みコマンドのバイパス、危険なブラウザや URL 起動を警告する Windows 保護機能を追加。履歴検索が Windows と WSL で動作し、モデル選択が use_model を尊重するようになった。 | Execution gains an experimental “exp” model, unified exec pruning to limit session bloat, per-run custom environment injection, policy-approved command bypass, and Windows protections that flag risky browser or URL launches. History lookup now works on Windows and WSL, and model selection honors use_model. | new-features |
| 統合された world-writable スキャンと、読み取り専用 .git ディレクトリに対する workspace-write 強制により、安全性のデフォルトを改善。サンドボックス評価と承認フローを信頼ポリシーに整合。 | Safety defaults improve via consolidated world-writable scanning and workspace-write enforcement of read-only .git directories. Sandbox assessment and approval flows align with trust policies. | new-features |
| MCP とシェルツールに shell-tool MCP ログインサポート、明示的な機能宣言、サンドボックス認識、npm への公開、MCP elicitations を追加。rmcp クライアントを 0.10.0 にアップグレードして最新の通知に対応。 | MCP and shell tooling add shell-tool MCP login support, explicit capability declaration, sandbox awareness, publication to npm, and MCP elicitations. The rmcp client is upgraded to 0.10.0 for modern notifications. | new-features |
| コマンドアイテムがプロセス ID を公開し、スレッドとターンがトークン使用量と圧縮イベントを発行することで、可観測性が向上。フィードバックメタデータがソース情報を取得する。 | Observability increases as command items expose process IDs and threads and turns emit token-usage and compaction events. Feedback metadata captures source information. | new-features |
| ツールと運用に app-server テストクライアントのフォローアップ v2、新しい設定管理ユーティリティ、更新された承認ドキュメントとクイックスタート配置を追加。 | Tooling and ops gain follow-up v2 in the app-server test client, new config management utilities, and refreshed approvals documentation and quickstart placement. | new-features |
| PowerShell の apply_patch パース処理を修正し、apply_patch テストで shell_command の動作をカバーするようにした。 | PowerShell apply_patch parsing is corrected, and apply_patch tests now cover shell_command behavior. | bug-fixes |
| サンドボックス評価のリグレッションを修正し、ポリシー承認済みコマンドを尊重し、Windows での危険なコマンドチェックを強化し、workspace-write が .git を読み取り専用として強制するようにした。 | Sandbox assessment regression is fixed, policy-approved commands are honored, dangerous-command checks are tightened on Windows, and workspace-write enforces .git read-only. | bug-fixes |
| MCP 起動時に type フィールドが欠落していても許容し、ストリームエラーメッセージを明確化し、rmcp nix 出力ハッシュの問題を解決。 | MCP startup tolerates missing type fields, stream error messages are clarified, and rmcp nix output hash issues are resolved. | bug-fixes |
| 統合 exec でデリゲートキャンセルがハングしなくなり、早期終了セッションがクリーンアップされ、重複する "waited" レンダリングが抑制されるようになった。 | Delegate cancellation no longer hangs unified exec, early-exit sessions are cleaned up, and duplicate “waited” renderings are suppressed. | bug-fixes |
| limit がゼロの recent_commits がゼロを返すようになり、NetBSD プロセス強化ビルドのブロックが解除された。 | recent_commits with limit zero now returns zero, and the NetBSD process-hardening build is unblocked. | bug-fixes |
| レビューロールアウトフィルタリングを無効化して履歴が表示されるようにし、承認プリセットが workspace-write を尊重し、/approvals の信頼検出を修正し、サンドボックスコマンド評価のエッジケースを修正。 | Review rollout filtering is disabled so history shows, approval presets respect workspace-write, /approvals trust detection is corrected, and sandbox command assessment edge cases are fixed. | bug-fixes |
| 圧縮処理が暗号化された推論を考慮し、トークンバジェットを正確に処理し、信頼性の高いトークン使用量と圧縮イベントを発行するようになった。 | Compaction accounts for encrypted reasoning, handles token budgets accurately, and emits reliable token-usage and compaction events. | bug-fixes |
| TTY stdin を必須とし、WSL クリップボードパスを正規化し、競合を避けるために /new で古い会話を削除するようにした。 | TTY stdin is required, WSL clipboard paths are normalized, and stale conversations are dropped on /new to avoid conflicts. | bug-fixes |
| 大きな貼り付けを伴うカスタムプロンプト展開を修正し、example-config の誤りを訂正し、相対リンクと streamable_shell 参照をクリーンアップ。アップグレードメッセージを修正。 | Custom prompt expansion with large pastes is fixed, example-config mistakes are corrected, and relative links and streamable_shell references are cleaned up. Upgrade messaging is corrected. | bug-fixes |
| Windows サンドボックスが <workspace_root>/.git を読み取り専用として扱い、危険なブラウザ起動を実行前に警告するようにした。 | Windows sandbox treats <workspace_root>/.git as read-only, and risky browser launches are flagged before execution. | bug-fixes |
| CLA 許可リストに dependabot のバリアントを追加し、エンタープライズがアップグレードチェックとメッセージをスキップできるようにした。 | CLA allowlist now includes dependabot variants, and enterprises can skip upgrade checks and messages. | bug-fixes |
| 不安定なテストを安定化し、セッションリサイクルを改善し、ロールアウトセッション初期化時のエラーを診断のために表示するようにした。 | Flaky tests are stabilized, session recycling is improved, and rollout session initialization surfaces errors for diagnosis. | bug-fixes |

## 0.63.0

| 日本語 | English | Category |
|--------|---------|----------|
| Web検索を有効にすると `Invalid value: 'other'.` エラーが発生するバグを修正 | Fixes the bug where enabling web search can lead to `Invalid value: 'other'.` errors. | bug-fixes |

## 0.61.0

| 日本語 | English | Category |
|--------|---------|----------|
| ExecPolicy2統合とexec-serverの準備: コアはExecPolicy2をexec-serverのリファクタリングと切り替え基盤に統合し、チームが新しいポリシーエンジンを採用するためのクイックスタートドキュメントを追加 | ExecPolicy2 integration and exec-server prep: core now integrates ExecPolicy2 with exec-server refactors and cutover groundwork, plus quickstart docs to help teams adopt the new policy engine. | new-features |
| トランケーションとエラー報告の改善: シングルパストランケーションにより重複作業を削減し、エラーイベントがオプションのステータスコードを含めることで可視性を向上 | Improved truncation and error reporting: single-pass truncation reduces duplicate work, and error events can now carry optional status codes for clearer observability. | new-features |
| シェルの信頼性とサンドボックス警告: フォールバックシェル選択を強化し、書き込み可能なディレクトリ警告のノイズを削減、Windows上のメッセージングも改善 | Shell reliability and sandbox warnings: fallback shell selection is hardened and world-writable directory warnings are less noisy, including improved messaging on Windows. | new-features |
| UXの修正: 推論表示を修正、`/review`後のレビューフッターコンテキストを保持、モデル移行画面が一度だけ表示されるように変更 | UX fixes: corrected reasoning display, preserved review footer context after `/review`, and the model migration screen now shows only once. | new-features |

## 0.60.1

| 日本語 | English | Category |
|--------|---------|----------|
| API ユーザーのデフォルトモデルが `gpt-5.1-codex` になりました | Default model for API users is now `gpt-5.1-codex` | new-features |

## 0.59.0

| 日本語 | English | Category |
|--------|---------|----------|
| GPT-5.1-Codex-Max: 最新のフロンティアエージェント型コーディングモデルを導入。GPT-5.1-Codex-Max は、より高い信頼性、より高速なイテレーション、長時間実行されるプロジェクトスケールのワークフローのサポートを提供します。詳細は https://www.openai.com/index/gpt-5-1-codex-max を参照してください | GPT-5.1-Codex-Max: introducing our newest frontier agentic coding model. GPT-5.1-Codex-Max delivers higher reliability, faster iteration, and support for long-running, project-scale workflows. Learn more at https://www.openai.com/index/gpt-5-1-codex-max | new-features |
| ネイティブ Compaction サポート: Compaction のファーストクラスサポートを追加し、長時間のコーディングセッションでのパフォーマンスを改善しました | Native Compaction Support: added first-class support for Compaction, improving performance across extended coding sessions. | new-features |
| ツールトークン制限の拡張: codex モデルは最大 10,000 ツール出力トークンをサポートするようになりました。`config.toml` の `tool_output_token_limit` で設定できます | Expanded Tool Token Limits: codex models now support up to 10,000 tool output tokens. Configure this via `tool_output_token_limit` in `config.toml`. | new-features |
| Windows Agent モード: ネイティブ Windows 用の Agent モードを導入。Codex は、より少ない承認で作業フォルダ内のファイルの読み取り、書き込み、コマンドの実行が可能になりました。Agent モードは、ファイルシステムとネットワークアクセスを制限する新しい実験的な Windows サンドボックスを使用します。詳細は https://developers.openai.com/codex/windows を参照してください | Windows Agent mode: Introduced Agent mode for native Windows. Codex can read files, write files, and run commands in your working folder with fewer approvals. Agent mode uses a new experimental Windows sandbox to limit filesystem and network access. Learn more at https://developers.openai.com/codex/windows | new-features |
| TUI と UX の改善 | TUI and UX Improvements | new-features |

## 0.58.0

| 日本語 | English | Category |
|--------|---------|----------|
| gpt5.1 モデルファミリーのサポートを追加。[詳細](www.openai.com/index/gpt-5-1) | Support for gpt5.1 models family. [Read more](www.openai.com/index/gpt-5-1) | new-features |
| App サーバーの機能強化: 新しい JSON スキーマジェネレーターコマンド、アイテム開始/完了イベント、マクロのクリーンアップ、定型コードの削減、重複コードの衛生管理を強化 (#6406 #6517 #6470 #6488)。 | App server enhancements: new JSON schema generator command, item started/completed events, macro cleanup, reduced boilerplate, and tightened duplicate-code hygiene (#6406 #6517 #6470 #6488). | new-features |
| 改善: ドキュメント更新 (web_search、SDK、config)、TUI ショートカットのインライン表示、seatbelt/Wayland/brew/compaction/cloud-tasks のバグ修正、警告メッセージの明確化、認証を考慮したステータス出力、OTEL テストの安定化 (#5889 #6424 #6425 #6376 #6421 #4824 #6238 #5856 #6446 #6529 #6541)。 | Quality of life fixes: doc updates (web_search, SDK, config), TUI shortcuts inline, seatbelt/Wayland/brew/compaction/cloud-tasks bugfixes, clearer warnings, auth-aware status output, and OTEL test stabilization (#5889 #6424 #6425 #6376 #6421 #4824 #6238 #5856 #6446 #6529 #6541). | new-features |

## 0.57.0

| 日本語 | English | Category |
|--------|---------|----------|
| TUI の使いやすさ向上: スラッシュコマンドリストの ctrl-n/p ナビゲーションと、バックトラッキング時に /status のノイズをスキップ | TUI quality-of-life: ctrl-n/p navigation for slash command lists and backtracking skips the /status noise. | new-features |
| 長時間実行コマンドのタイムアウトを改善 | Improve timeout on long running commasnds | new-features |

## 0.56.0

| 日本語 | English | Category |
|--------|---------|----------|
| GPT-5-Codex-Mini の導入 — GPT-5-Codex のよりコンパクトでコスト効率の高いバージョン | Introducing our new model GPT-5-Codex-Mini — a more compact and cost-efficient version of GPT-5-Codex | new-features |

## 0.54.0

| 日本語 | English | Category |
|--------|---------|----------|
| #6189 修正: DNS 修正のため musl 1.2.5 を固定 (#6189) | #6189 fix: pin musl 1.2.5 for DNS fixes (#6189) | new-features |
| #6202 修正: turn item で送信するため reasoning デルタを無視 (#6202) | #6202 fix: ignore reasoning deltas because we send it with turn item (#6202) | new-features |
| #6175 [App-server] account/updated と account/logout の v2 対応 (#6175) | #6175 [App-server] v2 for account/updated and account/logout (#6175) | new-features |
| #6156 修正: reasoning メッセージを正しく除外するよう is_api_message を修正 (#6156) | #6156 Fix is_api_message to correctly exclude reasoning messages (#6156) | new-features |
| #4453 ファイル検索時にシンボリックリンクを追跡 (#4453) | #4453 Follow symlinks during file search (#4453) | new-features |
| #5175 ドキュメント: config.toml のサンプルを追加 (#5175) | #5175 docs: add example config.toml (#5175) | new-features |
| #6180 修正: `--search` で非推奨メッセージを表示しないように修正 (#6180) | #6180 fix: `--search` shouldn't show deprecation message (#6180) | new-features |
| #6143 修正: notify ハンドラが正しい `input_messages` の詳細を渡すように修正 (#6143) | #6143 Fixed notify handler so it passes correct `input_messages` details (#6143) | new-features |
| #6171 サンドボックスコマンドのログを cwd ではなく $CODEX_HOME に出力 (#6171) | #6171 log sandbox commands to $CODEX_HOME instead of cwd (#6171) | new-features |
| #5996 機能追加: 中断後の経過時間を追加 (#5996) | #5996 feat: add the time after aborting (#5996) | new-features |
| #5541 tui: テキストエリアの単語区切り処理を改善 (#5541) | #5541 tui: refine text area word separator handling (#5541) | new-features |
| #6167 Windows でサンドボックスが有効な場合、信頼プロンプトをスキップしないように修正 (#6167) | #6167 Do not skip trust prompt on Windows if sandbox is enabled. (#6167) | new-features |
| #6129 機能追加: Azure サポートのため responses-api-proxy にオプションを追加 (#6129) | #6129 feat: add options to responses-api-proxy to support Azure (#6129) | new-features |
| #6161 コンテキストウィンドウ計算に reasoning トークンを含める (#6161) | #6161 Include reasoning tokens in the context window calculation (#6161) | new-features |
| #6051 修正: rmcp クライアントの機能フラグ参照を修正 (#6051) | #6051 Fix rmcp client feature flag reference (#6051) | new-features |
| #6159 修正: OAuth ログインのエラーメッセージのタイポを修正 (#6159) | #6159 Fix typo in error message for OAuth login (#6159) | new-features |
| #5685 `docs/slash_commands.md` にスラッシュコマンドのドキュメントを追加 (#5685) | #5685 Add documentation for slash commands in `docs/slash_commands.md`. (#5685) | new-features |
| #6111 修正: ステータスカードとスナップショットの使用状況 URL を改善 (#6111) | #6111 fix: improve usage URLs in status card and snapshots (#6111) | new-features |
| #6124 修正: Windows での「会話をアーカイブ」機能を修正 (#6124) | #6124 Fix "archive conversation" on Windows (#6124) | new-features |
| #6137 chore(deps): actions/upload-artifact を 4 から 5 にアップデート (#6137) | #6137 chore(deps): bump actions/upload-artifact from 4 to 5 (#6137) | new-features |
| #4903 修正: API キー貼り付け時の余分な文字を修正 (#4903) | #4903 fix: pasting api key stray character (#4903) | new-features |
| #6131 修正: 実験的な設定キーに関する誤った「非推奨」メッセージを修正 (#6131) | #6131 Fix incorrect "deprecated" message about experimental config key (#6131) | new-features |
| #6091 初期実験フィードバックに基づくサンドボックスコマンド評価機能の変更 (#6091) | #6091 Changes to sandbox command assessment feature based on initial experiment feedback (#6091) | new-features |
| #5956 Azure OpenAI のレート制限メッセージをパース (#5956) | #5956 Parse the Azure OpenAI rate limit message (#5956) | new-features |
| #5649 ドキュメント: 上級ガイドのリンクアンカーとマークダウン形式を修正 (#5649) | #5649 docs: Fix link anchor and markdown format in advanced guide (#5649) | new-features |
| #5659 ドキュメント内の小さなタイポを修正 (#5659) | #5659 Fixing small typo in docs (#5659) | new-features |
| #5935 tui: より良い色クエリのため crossterm にパッチを適用 (#5935) | #5935 tui: patch crossterm for better color queries (#5935) | new-features |
| #6050 [codex][app-server] クライアントリクエストのエラーレスポンスを改善 (#6050) | #6050 [codex][app-server] improve error response for client requests (#6050) | new-features |
| #4973 ドキュメント: コントリビューションガイドの壊れたリンクを修正 (#4973) | #4973 docs: fix broken link in contributing guide (#4973) | new-features |
| #6027 機能追加: compactor 2 (#6027) | #6027 feat: compactor 2 (#6027) | new-features |
| #6052 コンパクト時の警告を追加 (#6052) | #6052 Add warning on compact (#6052) | new-features |
| #6043 chore: json 用のシェルシリアライゼーションテストを追加 (#6043) | #6043 chore: Add shell serialization tests for json (#6043) | new-features |
| #5979 合計ツール呼び出しテキストを切り詰め (#5979) | #5979 Truncate total tool calls text (#5979) | new-features |
| #4797 ドキュメント: 「Configuration」は「Getting started」に属さない (#4797) | #4797 docs: "Configuration" is not belongs "Getting started" (#4797) | new-features |
| #4804 chore(deps): /codex-rs の indexmap を 2.10.0 から 2.11.4 にアップデート (#4804) | #4804 chore(deps): bump indexmap from 2.10.0 to 2.11.4 in /codex-rs (#4804) | new-features |
| #4802 chore(deps): /codex-rs の anyhow を 1.0.99 から 1.0.100 にアップデート (#4802) | #4802 chore(deps): bump anyhow from 1.0.99 to 1.0.100 in /codex-rs (#4802) | new-features |
| #4800 chore(deps): actions/checkout を 4 から 5 にアップデート (#4800) | #4800 chore(deps): bump actions/checkout from 4 to 5 (#4800) | new-features |
| #4801 chore(deps): actions/github-script を 7 から 8 にアップデート (#4801) | #4801 chore(deps): bump actions/github-script from 7 to 8 (#4801) | new-features |
| #6045 修正: brew upgrade のリンクを修正 (#6045) | #6045 fix: brew upgrade link (#6045) | new-features |
| #6034 テスト: undo (#6034) | #6034 test: undo (#6034) | new-features |
| #4426 chore(deps): /codex-rs の thiserror を 2.0.16 から 2.0.17 にアップデート (#4426) | #4426 chore(deps): bump thiserror from 2.0.16 to 2.0.17 in /codex-rs (#4426) | new-features |
| #6010 ユーザー指示メッセージ形式を更新 (#6010) | #6010 Update user instruction message format (#6010) | new-features |
| #4266 修正(tui): insert_history_lines_to_writer でエラーを伝播 (#4266) | #4266 fix(tui): propagate errors in insert_history_lines_to_writer (#4266) | new-features |

## 0.53.0

| 日本語 | English | Category |
|--------|---------|----------|
| エラー 400 の問題を修正 | Fixing error 400 issues | new-features |
| Java のサンドボックス化を改善 | Improve sandboxing for Java | new-features |

## 0.52.0

| 日本語 | English | Category |
|--------|---------|----------|
| TUI 改善: ストリーミング中のキュー済みメッセージ表示、Windows 自動モードガイダンス、取り消し操作、圧縮プロンプト設定可能化 | TUI polish: queued messages visible during streaming; Windows auto-mode guidance; undo op; compaction prompt configurable. | new-features |
| 画像機能: クライアント側画像リサイズ、MIME 検証によるクラッシュ防止、SDK 画像転送テストの再有効化 | Images: client-side image resizing; prevent crashes with MIME verification; SDK image forwarding tests re-enabled. | new-features |
| `!<cmd>` でコマンドを直接実行可能に | Execute commands directly with `!<cmd>` | new-features |
| 追加利用量のためのクレジット購入機能を追加。[詳細情報](https://help.openai.com/en/articles/12642688-using-credits-for-flexible-usage-in-chatgpt-pluspro) | Ability to buy credits for more usage. [More information](https://help.openai.com/en/articles/12642688-using-credits-for-flexible-usage-in-chatgpt-pluspro) | new-features |

## 0.50.0

| 日本語 | English | Category |
|--------|---------|----------|
| `/feedback` を改善し、より詳細な診断情報を取得できるようにしました。問題の報告にご利用ください。(#5661, #5663) | Improved `/feedback` to get better diagnostics. Please use it to report any issues. (#5661, #5663). | new-features |

## 0.47.0

| 日本語 | English | Category |
|--------|---------|----------|
| Codex CLI の改善とバグ修正 | Improvements and bug-fixes in Codex CLI | new-features |
| MacOS でのバイナリのコード署名 | Code signing binaries on MacOS | new-features |
| 自動更新バナー | Auto update banner | new-features |
| :new: 「フルアクセス」モード有効化時の警告 | :new: Warning when enabling "full access" mode | new-features |

## 0.45.0

| 日本語 | English | Category |
|--------|---------|----------|
| #4517 OAuth MCP サーバー認証の実験的サポート | #4517 Experimental support for OAuth MCP server authentication | new-features |

## 0.44.0

| 日本語 | English | Category |
|--------|---------|----------|
| 新しい UI リフレッシュ! チャット入力欄、下部ペイン、モデル選択、アップグレード通知を更新 (#4240, #4316, #4178, #4405) | New UI refresh! Updated chat composer, bottom pane, model picker, and upgrade nudge (#4240, #4316, #4178, #4405) | new-features |
| カスタムプロンプトで名前付き引数と位置引数をサポート (#4474, #4470) | Custom prompts now support named & positional arguments (#4474, #4470) | new-features |
| ストリーミング可能な HTTP MCP サーバーのサポートを追加 (#4317) | Add support for streamable HTTP MCP servers (#4317) | new-features |
| (実験的) Windows での読み取り専用コマンドの繰り返し承認を削減 (#4269) | (experimental) Reduce repetitive approval for read-only commands on Windows (#4269) | new-features |
| (非常に実験的) `codex cloud` でクラウドタスクを管理 (#3197) | (very experimental) Manage cloud tasks with `codex cloud` (#3197) | new-features |

## 0.42.0

| 日本語 | English | Category |
|--------|---------|----------|
| 実験的な Rust SDK ベースの MCP クライアントを導入 (#4252) | Experimental Rust SDK–based MCP client introduced (#4252) | new-features |
| レスポンス処理/プロキシを簡素化・安全化する新しい `responses-api-proxy` コンポーネントを追加 (#4246) | New `responses-api-proxy` component to simplify and secure response handling/proxying (#4246) | new-features |
| プロセス監視を制限するセキュアモード `CODEX_SECURE_MODE=1` を追加 (#4220) | Added secure mode: `CODEX_SECURE_MODE=1` to restrict process observability (#4220) | new-features |
| `codex exec` のイベントをより明示的に、`item.started` を含め出力表示を改善 (#4177, #4250, #4113) | More explicit `codex exec` events, including `item.started` and improved output display (#4177, #4250, #4113) | new-features |
| より安全なコマンド実行：コアでの危険コマンドチェックと Windows 固有の安全性対応 (#4211, #4119) | Safer command execution: dangerous command checks in core and Windows-specific safety (#4211, #4119) | new-features |
| UX 改善：`/status` を刷新してより明確な表示と詳細情報、ページなしセッションリスト、承認を `ListSelectionView` に移行、MCP ツールコールのスタイル改善、ストリーミング中のステータスインジケーター非表示 (#3194, #4275, #3871, #4101, #4196) | UX improvements: revamped `/status` with clearer presentation and details, pageless session list, approvals moved to `ListSelectionView`, better MCP tool call styling, and hiding status indicator during streaming (#3194, #4275, #3871, #4101, #4196) | new-features |
| 安定性と正確性：圧縮時のトークン使用量修正、SSE マウントの信頼性向上、過去の会話編集時のバグ改善 (#4281, #4264, #4237) | Stability and correctness: token usage fix for compaction, SSE mounting reliability, and improving bugs on editing previous conversations (#4281, #4264, #4237) | new-features |
| IDE 拡張の信頼性：`.codex` ディレクトリが存在しない場合の API キーによるログイン修正 (#4258) | IDE extension reliability: fix login with API key when `.codex` directory is missing (#4258) | new-features |
| 状態管理、フッターロジック、未使用コードの内部クリーンアップとリファクタリング (#4174, #4259, #4310) | Internal cleanup and refactors for state, footer logic, and unused code (#4174, #4259, #4310) | new-features |
| /status のフォローアップ (#4304) | [#4304] /status followup (#4304) | new-features |
| 無駄なコード削除；フレームカウントとステートフルレンダーヘルパーを削除 (#4310) | [#4310] chore: dead code removal; remove frame count and stateful render helpers (#4310) | new-features |
| [MCP] 実験的な公式 Rust SDK ベースの MCP クライアントを導入 (#4252) | [#4252] [MCP] Introduce an experimental official rust sdk based mcp client (#4252) | new-features |
| todo-list ツールサポートを追加 (#4255) | [#4255] Add todo-list tool support (#4255) | new-features |
| responses-api-proxy を導入 (#4246) | [#4246] feat: introduce responses-api-proxy (#4246) | new-features |
| 圧縮時のトークン使用量を修正 (#4281) | [#4281] fix: token usage for compaction (#4281) | new-features |
| 成功時の exec 出力を整形表示で表示 (#4113) | [#4113] Show exec output on success with trimmed display (#4113) | new-features |
| 承認を ListSelectionView を使用するように移行 (#4275) | [#4275] Move approvals to use ListSelectionView (#4275) | new-features |
| フッターロジックを新しいファイルにリファクタリング (#4259) | [#4259] Refactor the footer logic to a new file (#4259) | new-features |
| 状態管理リファクタリング - 2 (#4229) | [#4229] ref: state - 2 (#4229) | new-features |
| 危険性のあるコマンドチェックをコアに追加 (#4211) | [#4211] core: add potentially dangerous command check (#4211) | new-features |
| SSE を一度だけマウントするよう修正 (#4264) | [#4264] Actually mount sse once (#4264) | new-features |
| codex exec テストヘルパーを追加 (#4254) | [#4254] Add codex exec testing helpers (#4254) | new-features |
| IDE 拡張で `.codex` ディレクトリが存在しない場合の API キーログイン失敗を修正 (#4258) | [#4258] Fixed login failure with API key in IDE extension when a `.codex` directory doesn't exist (#4258) | new-features |
| サンドボックスドキュメントのタイポ修正 (#4256) | [#4256] fix typo in sandbox doc (#4256) | new-features |
| [codex exec] item.started を追加しコマンド実行でサポート (#4250) | [#4250] [codex exec] Add item.started and support it for command execution (#4250) | new-features |
| 修正 (#4251) | [#4251] fix (#4251) | new-features |
| より小さい幅へのリサイズ時のバグ修正 (#4248) | [#4248] fix bug when resizing to a smaller width (#4248) | new-features |
| サンドボックスでテストが正常に通るよう修正 (#4067) | [#4067] make tests pass cleanly in sandbox (#4067) | new-features |
| エラーメッセージ修正 (#4204) | [#4204] Fix error message (#4204) | new-features |
| 明示的な codex exec イベントを追加 (#4177) | [#4177] Add explicit codex exec events (#4177) | new-features |
| stream_responses() から attempt_stream_responses() をリファクタリング (#4194) | [#4194] chore: refactor attempt_stream_responses() out of stream_responses() (#4194) | new-features |
| キューに入ったメッセージがある状態での ESC がコンポーザーのドラフトを上書きする問題を修正 (#4237) | [#4237] fix: esc w/ queued messages overwrites draft in composer (#4237) | new-features |
| プロセス監視を制限する CODEX_SECURE_MODE=1 のサポートを追加 (#4220) | [#4220] feat: add support for CODEX_SECURE_MODE=1 to restrict process observability (#4220) | new-features |
| /status を刷新 (#4196) | [#4196] revamp /status (#4196) | new-features |
| 状態管理の完全リファクタリング (#4174) | [#4174] ref: full state refactor (#4174) | new-features |
| ワークフローの codespell アクションを v2.1 に更新 (#4205) | [#4205] github: update codespell action to v2.1 in workflow (#4205) | new-features |
| 非 gpt-5 モデルに text パラメータを送信 (#4195) | [#4195] Send text parameter for non-gpt-5 models (#4195) | new-features |
| env_flags から未使用の値を削除 (#4188) | [#4188] chore: drop unused values from env_flags (#4188) | new-features |
| Windows 固有のコマンド安全性チェックメソッドを追加 (#4119) | [#4119] adds a windows-specific method to check if a command is safe (#4119) | new-features |
| ページなしセッションリスト (#3194) | [#3194] pageless session list (#3194) | new-features |
| MCP ツールコールのスタイリングを改善 (#3871) | [#3871] improve MCP tool call styling (#3871) | new-features |
| 回答ストリーム開始時にステータスインジケーターを非表示 (#4101) | [#4101] hide the status indicator when the answer stream starts (#4101) | new-features |
| ツール実装を簡素化 (#4160) | [#4160] Simplify tool implemetations (#4160) | new-features |

## 0.41.0

| 日本語 | English | Category |
|--------|---------|----------|
| レート制限の可視化:制限がいつリセットされるか確認可能 (#4111)、およびレート制限時の使用状況を確認可能 (#4102) | Rate limits visibility: You can see when is your limits resetting (#4111) and see your usage when rate limited (#4102) | new-features |
| `exec` モードで `output-schema` を使用して出力スキーマを指定可能 (#4079) | You can specify output schema in `exec` mode using `output-schema`. (#4079) | new-features |
| Ripgrep (`rg`) が `npm` リリースに同梱 (#3660)、これにより `npm` 経由で `codex` をインストールする際に `@vscode/ripgrep` の `postinstall` ステップが失敗する問題 (#3842 など) を修正 | Ripgrep (`rg`) is now vendored into the `npm` release (#3660), which should fix issues such as #3842 where the `postinstall` step of `@vscode/ripgrep` would sometimes fail when installing `codex` via `npm`. | new-features |

## 0.40.0

| 日本語 | English | Category |
|--------|---------|----------|
| デフォルトモデルが `gpt-5-codex` になりました (#4076) | Default model is now `gpt-5-codex` (#4076) | new-features |
| `gpt-5-codex` で220kトークンに達したときに自動コンパクションが自動的にトリガーされます (#4093) | Autocompaction is triggered automatically for `gpt-5-codex` when hitting 220k tokens (#4093) | new-features |
| 使用制限が `/status` で確認できるようになりました (#4053) | Usage limits are now visible in `/status` (#4053) | new-features |
| 新しい `/review` コマンド（特定のコミット、ベースブランチ、カスタム指示に対するレビュー）が追加されました (#3961) | New `/review` commands (review specific commit, against a base branch, or custom instructions) (#3961) | new-features |
| MCPツール呼び出しのデフォルトタイムアウトが `60秒` になり、`config.toml` で個別のMCPサーバーに対して `tool_timeout_sec` を設定することで上書きできます (#3959) | The default timeout for MCP tool calls is `60s` and can be overridden in `config.toml` by setting `tool_timeout_sec` for an individual MCP server. (#3959) | new-features |
| [#3881] 修正: try_parse_word_only_commands_sequence() がコマンドを順番に返すように更新 (#3881) | [#3881] fix: update try_parse_word_only_commands_sequence() to return commands in order (#3881) | new-features |
| [#3814] キャッシュを壊さないように統一されたシェル通知を使用 (#3814) | [#3814] Use a unified shell tell to not break cache (#3814) | new-features |
| [#3878] レスポンスモックヘルパーを共有ライブラリに移動 (#3878) | [#3878] Move responses mocking helpers to a shared lib (#3878) | new-features |
| [#3888] フィクスチャの代わりにヘルパーを使用 (#3888) | [#3888] Use helpers instead of fixtures (#3888) | new-features |
| [#3937] スラッシュコマンドポップアップの配置を修正 (#3937) | [#3937] fix alignment in slash command popup (#3937) | new-features |
| [#3925] 起動時に画面をクリアしないように変更 (#3925) | [#3925] don't clear screen on startup (#3925) | new-features |
| [#3950] イベントストリーム前にキーボード拡張検出をキャッシュ (#3950) | [#3950] Cache keyboard enhancement detection before event streams (#3950) | new-features |
| [#3965] レート制限をUIに転送 (#3965) | [#3965] Forward Rate limits to the UI (#3965) | new-features |
| [#3977] Tui: レート制限対応 (#3977) | [#3977] Tui: Rate limits (#3977) | new-features |
| [#3961] 機能追加: より多くの /review オプションを追加 (#3961) | [#3961] feat: Add more /review options (#3961) | new-features |
| [#3880] non_sandbox_test ヘルパーを追加 (#3880) | [#3880] Add non_sandbox_test helper (#3880) | new-features |
| [#4044] chore: cargo バージョンを統一 (#4044) | [#4044] chore: unify cargo versions (#4044) | new-features |
| [#4057] chore: より多くの clippy ルール追加 2 (#4057) | [#4057] chore: more clippy rules 2 (#4057) | new-features |
| [#3959] MCPツール呼び出しのタイムアウト対応 (#3959) | [#3959] timeouts for mcp tool calls (#3959) | new-features |
| [#4053] /status に制限情報を追加 (#4053) | [#4053] Add limits to /status (#4053) | new-features |
| [#3928] StreamController を簡素化 (#3928) | [#3928] simplify StreamController (#3928) | new-features |
| [#4020] Tui: バックトラッキングを修正 (#4020) | [#4020] Tui: fix backtracking (#4020) | new-features |
| [#4055] /status への移行後に /limits を削除 (#4055) | [#4055] Remove /limits after moving to /status (#4055) | new-features |
| [#4026] 機能追加: BottomPane にビュースタックを追加 (#4026) | [#4026] feat: Add view stack to BottomPane (#4026) | new-features |
| [#4059] 制限警告のコピーを変更 (#4059) | [#4059] Change limits warning copy (#4059) | new-features |
| [#4058] chore: 冗長なクロージャに対する clippy 対応 (#4058) | [#4058] chore: clippy on redundant closure (#4058) | new-features |
| [#4061] /review のブランチモードプロンプトを修正 (#4061) | [#4061] Fix branch mode prompt for /review (#4061) | new-features |
| [#4060] レート制限のヘッダーと構造体を変更 (#4060) | [#4060] Change headers and struct of rate limits (#4060) | new-features |
| [#3952] ページ間のページャーオーバーレイクリアを修正 (#3952) | [#3952] Fix pager overlay clear between pages (#3952) | new-features |
| [#3957] セッション終了時の codex 再開メッセージを修正 (#3957) | [#3957] fix codex resume message at end of session (#3957) | new-features |
| [#4068] コンパクトメッセージ内の長いユーザーメッセージを切り詰め (#4068) | [#4068] Truncate potentially long user messages in compact message. (#4068) | new-features |
| [#4076] 機能追加: デフォルトを更新 (#4076) | [#4076] feat: update default (#4076) | new-features |
| [#4064] 通知機能のテストを追加 (#4064) | [#4064] Add notifier tests (#4064) | new-features |
| [#4093] chore: `gpt-5-codex` の自動コンパクションを有効化 (#4093) | [#4093] chore: enable auto-compaction for `gpt-5-codex` (#4093) | new-features |
| [#4096] ストリーム再試行テストで TestCodex ビルダーを使用 (#4096) | [#4096] Use TestCodex builder in stream retry tests (#4096) | new-features |
| [#3914] 機能追加: undo 用の git ツール (#3914) | [#3914] feat: git tooling for undo (#3914) | new-features |
| [#4082] 修正: 使用データの微調整 (#4082) | [#4082] fix: usage data tweaks (#4082) | new-features |
| [#4075] レート制限警告対応 (#4075) | [#4075] Rate limits warning (#4075) | new-features |

## 0.39.0

| 日本語 | English | Category |
|--------|---------|----------|
| `/review` コマンドが #3774 で導入されました | new `/review` command introduced in #3774 | new-features |

## 0.38.0

| 日本語 | English | Category |
|--------|---------|----------|
| [#3806] 修正: gh 呼び出し時に --repo を指定 (#3806) | [#3806] fix: specify --repo when calling gh (#3806) | new-features |

## 0.36.0

| 日本語 | English | Category |
|--------|---------|----------|
| ログイン機能を改善 (#3632)、ログイン状態とAPIキー使用が同時に可能になる問題を修正 (#3611)、ログインURL内の余分な文字を修正 (#3639)、カスタムプロバイダー向けの `get_auth_status` を修正 (#3581)。 | login polish (#3632); fix issue allowing to be both logged in and using API key simultaneously (#3611); fix stray login URL characters (#3639); fix `get_auth_status` for custom providers (#3581). | new-features |

## 0.34.0

| 日本語 | English | Category |
|--------|---------|----------|
| [#2799] モデルと推論の変更を永続化 (#2799) | [#2799] Persist model & reasoning changes (#2799) | new-features |
| [#3436] user_agent をオプションに変更 (#3436) | [#3436] Make user_agent optional (#3436) | new-features |

## 0.33.0

| 日本語 | English | Category |
|--------|---------|----------|
| #3396 の新しい Markdown レンダラーを試す。 | Try out the new Markdown renderer on #3396. | new-features |
| [#3394] alt+delete でカーソルの右側の単語を削除 (delete_forward_word) (#3394) | [#3394] alt+delete deletes the word to the right of the cursor (delete_forward_word) (#3394) | new-features |
| [#3380] ロールアウトアイテムを導入 (#3380) | [#3380] Introduce rollout items (#3380) | new-features |
| [#3395] MCP サーバーとして使用する際にユーザーエージェントサフィックスを設定 (#3395) | [#3395] Set a user agent suffix when used as a mcp server (#3395) | new-features |
| [#3357] 修正: 不要な #[allow(dead_code)] アノテーションを削除 (#3357) | [#3357] fix: remove unnecessary #[allow(dead_code)] annotation (#3357) | new-features |
| [#3422] 初期履歴をプロトコルに移動 (#3422) | [#3422] Move initial history to protocol (#3422) | new-features |
| [#3400] `UserMessageEvent` に画像を追加 (#3400) | [#3400] Added images to `UserMessageEvent` (#3400) | new-features |
| [#3356] 修正: 空ファイル chatwidget_stream_tests.rs を削除 (#3356) | [#3356] fix: remove empty file: chatwidget_stream_tests.rs (#3356) | new-features |
| [#2703] ドキュメント: codex exec の見出しのタイポを修正 (#2703) | [#2703] docs: fix codex exec heading typo (#2703) | new-features |
| [#2858] docs/getting-started.md 内の prompting_guide.md への壊れたリンクを削除 (#2858) | [#2858] Remove a broken link to prompting_guide.md in docs/getting-started.md (#2858) | new-features |
| [#3427] 認証関連の 2 つのテストの耐障害性を向上 (#3427) | [#3427] Improved resiliency of two auth-related tests (#3427) | new-features |
| [#3396] tui_markdown をカスタム Markdown レンダラーに置き換え (#3396) | [#3396] replace tui_markdown with a custom markdown renderer (#3396) | new-features |
| [#3430] "feat: POSIX unification and snapshot sessions (#3179)" を取り消し (#3430) | [#3430] Back out "feat: POSIX unification and snapshot sessions (#3179)" (#3430) | new-features |

## 0.32.0

| 日本語 | English | Category |
|--------|---------|----------|
| MCP: サーバーとして動作する際に UA サフィックスを追加、安定性と互換性に関する微調整 | MCP: add UA suffix when acting as a server; a few stability/compat tweaks | new-features |
| OSS: `apply_patch` の OSS 互換性を拡大 | OSS: Broader `apply_patch` OSS compatibility. | new-features |
| ロールアウト: 初期基盤と `rollout_path` をレスポンスに含める | Rollouts: initial groundwork and `rollout_path` included in responses. | new-features |
| TUI: Alt+Delete で次の単語を削除 | TUI: Alt+Delete deletes the next word. | new-features |
| Protocol/Types: `ArchiveConversation` リクエスト、エクスポートと TypeScript 型の小規模な改善 | Protocol/Types: `ArchiveConversation` request; small exports and TS type improvements. | new-features |
| CI/Build: `nextest` でテストを高速化、`shear` を追加、macOS パーミッションの微調整 | CI/Build: faster tests with `nextest`, add `shear`; minor macOS permission adjustment. | new-features |
| Docs: 設定ファイルにおけるシェルクォーティングの説明を明確化 | Docs: clarified shell quoting in config. | new-features |
| [#3395] MCP サーバーとして使用される際にユーザーエージェントサフィックスを設定 | [#3395] Set a user agent suffix when used as a mcp server | new-features |
| [#3394] Alt+Delete でカーソル右側の単語を削除 (delete_forward_word) | [#3394] alt+delete deletes the word to the right of the cursor (delete_forward_word) | new-features |
| [#3390] 推論アイテム ID を送信しないように修正 | [#3390] Do not send reasoning item IDs | new-features |
| [#3388] config.responses_originator_header_internal_override を CODEX_INTERNAL_ORIGINATOR_OVERRIDE_ENV_VAR に置き換え | [#3388] Replace config.responses_originator_header_internal_override with CODEX_INTERNAL_ORIGINATOR_OVERRIDE_ENV_VAR | new-features |
| [#3387] 高速失敗を無効化 | [#3387] No fail fast | new-features |
| [#3380] ロールアウトアイテムを導入 | [#3380] Introduce rollout items | new-features |
| [#3374] apply_patch の「期待される行が見つからない」メッセージを調整 | [#3374] tweak "failed to find expected lines" message in apply_patch | new-features |
| [#3357] 不要な #[allow(dead_code)] アノテーションを削除 | [#3357] fix: remove unnecessary #[allow(dead_code)] annotation | new-features |
| [#3353] ArchiveConversation を ClientRequest に追加 | [#3353] feat: add ArchiveConversation to ClientRequest | new-features |
| [#3352] NewConversationResponse に rollout_path を含めるよう修正 | [#3352] fix: include rollout_path in NewConversationResponse | new-features |
| [#3338] CI で cargo shear を実行するよう追加 | [#3338] feat: Run cargo shear during CI | new-features |
| [#3334] com.apple.system.opendirectoryd.libinfo の mach-lookup を許可 | [#3334] allow mach-lookup for com.apple.system.opendirectoryd.libinfo | new-features |
| [#3323] CI ビルドを高速化するため cargo nextest に切り替え | [#3323] chore: try switching to cargo nextest to speed up CI builds | new-features |
| [#3222] LoginChatGptCompleteNotification を protocol-ts で明示的にリストする必要がないよう修正 | [#3222] fix: LoginChatGptCompleteNotification does not need to be listed explicitly in protocol-ts | new-features |
| [#3270] conversation_manager から InitialHistory を再エクスポート | [#3270] feat(core): re-export InitialHistory from conversation_manager | new-features |
| [#3219] TypeScript 型を追加生成し、ConversationSummary で conversation id を返却 | [#3219] Generate more typescript types and return conversation id with ConversationSummary | new-features |
| [#3179] POSIX 統合とスナップショットセッション機能を追加 | [#3179] feat: POSIX unification and snapshot sessions | new-features |
| [#3169] config.md でシェルが引用符を処理する方法の説明を改善 | [#3169] Improve explanation of how the shell handles quotes in config.md | new-features |
| [#2811] 異なる命名規則を持つ gpt-oss プロバイダー（例: openai/gpt-oss-*）の OSS モデル向けに apply_patch ツールを含める | [#2811] Include apply_patch tool for oss models from gpt-oss providers with different naming convention (e.g. openai/gpt-oss-*) | new-features |

## 0.31.0

| 日本語 | English | Category |
|--------|---------|----------|
| https://github.com/openai/codex/pull/3182 MCP サーバー宣言時に `startup_timeout_ms` オプションのサポートを追加 [(docs)](https://github.com/openai/codex/blob/main/docs/config.md#mcp_servers)、特に Windows ユーザーから多く要望されていた機能 | https://github.com/openai/codex/pull/3182 added support for a `startup_timeout_ms` option when declaring an MCP server [(docs)](https://github.com/openai/codex/blob/main/docs/config.md#mcp_servers), which has been a highly requested feature, particularly for Windows users: | new-features |
| Issue: https://github.com/openai/codex/issues/3196 | Issue: https://github.com/openai/codex/issues/3196 | new-features |
| Issue: https://github.com/openai/codex/issues/2346 | Issue: https://github.com/openai/codex/issues/2346 | new-features |
| Issue: https://github.com/openai/codex/issues/2555 | Issue: https://github.com/openai/codex/issues/2555 | new-features |
| PR: https://github.com/openai/codex/pull/3249 | PR: https://github.com/openai/codex/pull/3249 | new-features |
| PR: https://github.com/openai/codex/pull/3326 | PR: https://github.com/openai/codex/pull/3326 | new-features |
| PR: https://github.com/openai/codex/pull/3006 | PR: https://github.com/openai/codex/pull/3006 | new-features |
| その他... | and more... | new-features |
| @Bit-urd による MCP 起動のフォールトトレランス向上への貢献に感謝: https://github.com/openai/codex/pull/3243 | Thanks to @Bit-urd for adding more fault tolerance to MCP startup: https://github.com/openai/codex/pull/3243 | new-features |
| #3211 macOS で Finder からの `ctrl+v` による画像貼り付けを修正 | #3211 fixes image pasting from Finder with `ctrl+v` on macOS | new-features |
| [#3211] localhost ポートを解放するために保留中の OAuth ログインをキャンセルするロジックを追加 | [#3217] Added logic to cancel pending oauth login to free up localhost port | new-features |
| [#3220] feat(tui): 思考タイマーに分/時間表示を追加 | [#3220] feat(tui): show minutes/hours in thinking timer | new-features |
| [#3223] `/status` 出力に CLI バージョンを追加 | [#3223] Added CLI version to `/status` output | new-features |
| [#3176] [codex] toml ファイルからのモデルファミリー設定のオーバーライドに対応 | [#3176] [codex] respect overrides for model family configuration from toml file | new-features |
| [#3226] chore: codex-rs/scripts/create_github_release.sh を Python で書き直し | [#3226] chore: rewrite codex-rs/scripts/create_github_release.sh in Python | new-features |
| [#3228] chore: create_github_release を一時ディレクトリで新規クローンを作成するように変更 | [#3228] chore: change create_github_release to create a fresh clone in a temp directory | new-features |
| [#3230] chore: ローカルクローンのオーバーヘッドを避けるため git の代わりに gh を使用 | [#3230] chore: use gh instead of git to do work to avoid overhead of a local clone | new-features |
| [#3231] fix: create_github_release を --publish-alpha または --publish-release のいずれかを受け取るように変更 | [#3231] fix: change create_github_release to take either --publish-alpha or --publish-release | new-features |
| [#3221] トークン使用量/コンテキスト情報をセッションレベルに移動 | [#3221] Move token usage/context information to session level | new-features |
| [#3285] ctrl + c で空でないプロンプトをクリア | [#3285] Clear non-empty prompts with ctrl + c | new-features |
| [#3282] 生の Uuid の代わりに ConversationId を使用 | [#3282] Use ConversationId instead of raw Uuids | new-features |
| [#3300] docs: codex/README.md の「Memory with AGENTS.md」セクションへの壊れたリンクを修正 | [#3300] docs: fix broken link to the "Memory with AGENTS.md" section in codex/README.md | new-features |
| [#3182] feat(mcp): サーバー毎の起動タイムアウト | [#3182] feat(mcp): per-server startup timeout | new-features |
| [#3294] chore(deps): /codex-rs の insta を 1.43.1 から 1.43.2 にバンプ | [#3294] chore(deps): bump insta from 1.43.1 to 1.43.2 in /codex-rs | new-features |
| [#3295] chore(deps): /codex-rs の tree-sitter を 0.25.8 から 0.25.9 にバンプ | [#3295] chore(deps): bump tree-sitter from 0.25.8 to 0.25.9 in /codex-rs | new-features |
| [#3296] chore(deps): /codex-rs の clap を 4.5.45 から 4.5.47 にバンプ | [#3296] chore(deps): bump clap from 4.5.45 to 4.5.47 in /codex-rs | new-features |
| [#3297] chore(deps): /codex-rs の image を 0.25.6 から 0.25.8 にバンプ | [#3297] chore(deps): bump image from 0.25.6 to 0.25.8 in /codex-rs | new-features |
| [#3243] fix: MCP サーバー初期化のエラーハンドリングを改善 #3196 #2346 #2555 | [#3243] fix: improve MCP server initialization error handling #3196 #2346 #2555 | new-features |
| [#3211] tui: ctrl+v での貼り付けで file_list をチェック | [#3211] tui: paste with ctrl+v checks file_list | new-features |
| [#3316] chore: actions/setup-node@v5 にアップグレード | [#3316] chore: upgrade to actions/setup-node@v5 | new-features |
| [#3320] getUserAgent MCP メソッドを追加 | [#3320] Add a getUserAgent MCP method | new-features |
| [#3319] 提案されたコマンドのプレビューをハイライト表示 | [#3319] Highlight Proposed Command preview | new-features |

## 0.30.0

| 日本語 | English | Category |
|--------|---------|----------|
| **破壊的変更**: プロジェクトの `.env` ファイルの自動読み込みを停止 | **Breaking**: Stop loading project `.env` files automatically. | new-features |
| **セキュリティ/動作**: リクエストを保存しないように変更、保留中の OAuth ログインをキャンセルしてポートを解放 | **Security/behavior**: Never store requests; free port by canceling pending OAuth login. | new-features |
| **コア/インフラ**: ロールアウトポリシーの導入、共有 HTTP クライアント、残りコンテキストサイズの改善、推論サマリー設定/処理の改善、サンドボックスシェルツール説明の修正、サーバー通知シリアライズの改善 | **Core/infra**: Introduce rollout policy; shared HTTP client; improved remaining context size; refined reasoning summary config/handling; corrected sandboxed shell tool description; improved server notification serialization. | new-features |
| **TUI/UX**: 大きなコマンドの承認ダイアログを修正、モーダル表示中のステータスタイマー一時停止、ページャーの自動スクロール、bash シンタックスハイライト、Mac キーグリフ、ゼロ高さパニックの回避、@ ファイル検索の改善(隠しディレクトリ対応) | **TUI/UX**: Fix approval dialog for large commands; pause status timer during modals; pager auto‑scroll; bash syntax highlighting; mac key glyphs; avoid zero‑height panic; improved @ file search (hidden dirs). | new-features |
| **DevEx/ドキュメント**: VS Code 推奨拡張機能、AGENTS.md プロンプトと説明の明確化、API キーガイダンスの更新、CI 修正 | **DevEx/docs**: Recommended VS Code extensions; AGENTS.md prompt and clarifications; updated API key guidance; CI fixes. | new-features |
| **依存関係**: `uuid` と `wiremock` をバージョンアップ | **Deps**: Bump `uuid` and `wiremock`. | new-features |
| **Windows**: フルアクセスモードで承認を求めないように変更 | **Windows**: no more asking for approvals on Full Access mode | new-features |
| [#3218] 完了するまで resume を非表示に | [#3218] hide resume until it's complete | new-features |
| [#3217] localhost ポート解放のため保留中の OAuth ログインをキャンセルするロジックを追加 | [#3217] Added logic to cancel pending oauth login to free up localhost port | new-features |
| [#3212] リクエストを保存しないように変更 | [#3212] Never store requests | new-features |
| [#3193] chore: ServerNotification のシリアライズを改善 | [#3193] chore: improve serialization of ServerNotification | new-features |
| [#3191] refactor: AttachImage tui イベントを削除 | [#3191] refactor: remove AttachImage tui event | new-features |
| [#3190] 残りコンテキストサイズを正しく計算 | [#3190] Correctly calculate remaining context size | new-features |
| [#3187] UNIX システムでの ZSH 対応と検出機能の改善 | [#3187] ZSH on UNIX system and better detection | new-features |
| [#3185] MCP: セッション再開と履歴一覧を追加 | [#3185] MCP: add session resume + history listing; | new-features |
| [#3184] [破壊的変更] プロジェクト .env ファイルの読み込みを停止 | [#3184] [BREAKING] Stop loading project .env files | new-features |
| [#3172] chore: 推奨拡張機能リストに rust-lang.rust-analyzer と vadimcn.vscode-lldb を追加 | [#3172] chore: add rust-lang.rust-analyzer and vadimcn.vscode-lldb to the list of recommended extensions | new-features |
| [#3171] [codex] 推論サマリー形式の設定をモデルファミリー設定タイプに移動 | [#3171] [codex] move configuration for reasoning summary format to model family config type | new-features |
| [#3170] fix: serde_as アノテーションを修正しテストで検証 | [#3170] fix: fix serde_as annotation and verify with test | new-features |
| [#3167] tui: ページャーのスクロールを最下部に固定 | [#3167] tui: pager pins scroll to bottom | new-features |
| [#3163] fix: ExecCommandOutputDeltaEvent.chunk により効率的なワイヤーフォーマットを使用 | [#3163] fix: use a more efficient wire format for ExecCommandOutputDeltaEvent.chunk | new-features |
| [#3146] fix: 競合状態を修正するためリクエスト送信前にコールバックをマップに追加 | [#3146] fix: add callback to map before sending request to fix race condition | new-features |
| [#3143] Mac でのキーヒントに ⌥⇧⌃ グリフを使用 | [#3143] Use ⌥⇧⌃ glyphs for key hints on mac | new-features |
| [#3142] bash 行にシンタックスハイライトを適用 | [#3142] syntax-highlight bash lines | new-features |
| [#3138] [codex] 推論サマリーの処理を改善 | [#3138] [codex] improve handling of reasoning summary | new-features |
| [#3135] TUI: セッション再開ピッカー(--resume)とクイック再開(--continue)を追加 | [#3135] TUI: Add session resume picker (--resume) and quick resume (--continue) | new-features |
| [#3134] [tui] /mcp 出力を更新 | [#3134] [tui] Update /mcp output | new-features |
| [#3133] tui: アクティブな実行セルエリアがゼロ高さの場合のパニックを回避 | [#3133] tui: avoid panic when active exec cell area is zero height | new-features |
| [#3132] AGENTS.md: codex-rs のテスト承認を明確化 | [#3132] AGENTS.md: clarify test approvals for codex-rs | new-features |
| [#3131] モーダル表示中はステータスタイマーを一時停止 | [#3131] Pause status timer while modals are open | new-features |
| [#3130] 失敗していた CI を修正 | [#3130] Fix failing CI | new-features |
| [#3128] MCP サンドボックス呼び出し | [#3128] MCP sandbox call | new-features |
| [#3127] UserMsgs をカテゴリ別に分けて tui に送り返す | [#3127] Dividing UserMsgs into categories to send it back to the tui | new-features |
| [#3123] 履歴付きセッション再開時に Response Items から EventMsgs を再生 | [#3123] Replay EventMsgs from Response Items when resuming a session with history. | new-features |
| [#3122] AGENTS.md ファイルを読み込むためのプロンプト | [#3122] prompt to read AGENTS.md files | new-features |
| [#3121] プロンプトからキーワードの太字を削除 | [#3121] remove bold the keyword from prompt | new-features |
| [#3118] [codex] `use_experimental_reasoning_summary` toml キー設定を文書化 | [#3118] [codex] document `use_experimental_reasoning_summary` toml key config | new-features |
| [#3117] 認証 URL パラメータに発信元を含める | [#3117] Include originator in authentication URL parameters | new-features |
| [#3116] ロールアウトポリシーを導入 | [#3116] Introduce Rollout Policy | new-features |
| [#3112] API キー権限に関するガイダンスを更新 | [#3112] Update guidance on API key permissions | new-features |
| [#3110] HTTP クライアントを作成する共通の方法を追加 | [#3110] Add a common way to create HTTP client | new-features |
| [#3093] [mcp-server] 読み取り設定インターフェースを更新 | [#3093] [mcp-server] Update read config interface | new-features |
| [#3087] tui: 大きなコマンドの承認ダイアログを修正 | [#3087] tui: fix approval dialog for large commands | new-features |
| [#3069] core: サンドボックスシェルツールの説明を修正(どこでも読み取り可能) | [#3069] core: correct sandboxed shell tool description (reads allowed anywhere) | new-features |
| [#3056] chore: 冗長性設定をクリーンアップ | [#3056] chore: Clean up verbosity config | new-features |
| [#2988] 非サンドボックスプラットフォームでの DangerFullAccess パッチを自動承認 | [#2988] Auto-approve DangerFullAccess patches on non-sandboxed platforms | new-features |
| [#2981] @ ファイル検索を改善: .github、.gitlab などの特定の隠しディレクトリを含める | [#2981] Improve @ file search: include specific hidden dirs such as .github, .gitlab | new-features |
| [#2666] chore(deps): /codex-rs の wiremock を 0.6.4 から 0.6.5 にバージョンアップ | [#2666] chore(deps): bump wiremock from 0.6.4 to 0.6.5 in /codex-rs | new-features |
| [#2493] chore(deps): /codex-rs の uuid を 1.17.0 から 1.18.0 にバージョンアップ | [#2493] chore(deps): bump uuid from 1.17.0 to 1.18.0 in /codex-rs | new-features |

## 0.29.0

| 日本語 | English | Category |
|--------|---------|----------|
| **Android/Termux 対応**: 非対応ターゲットで `arboard` をゲート化して実現。 | **Android/Termux support** by gating `arboard` on unsupported targets. | new-features |
| **安定したクロスプラットフォームファイルロック**: std `fs` API を使用。 | **Stable, cross‑platform file locking** using std `fs` APIs. | new-features |
| **認証の統合**: `CodexAuth` と `AuthManager` を `core` クレートに移動。 | **Auth consolidation**: `CodexAuth` and `AuthManager` moved into the `core` crate. | new-features |
| **レート制限処理の復元**: API キー使用時の対応。 | **Rate‑limit handling restored** for API‑key usage. | new-features |
| **Core rollout リファクタリング**: `rollout` モジュールを抽出、リストAPI追加、ファイルヘッドを返却。 | **Core rollout refactor**: extract `rollout` module, add listing API, return file heads. | new-features |
| **QoL 改善**: `exec`/`apply_patch` で `cd foo && ...` をサポート、TUI のちらつき修正、ratatui `Stylize` を優先使用。 | **Quality of life**: support `cd foo && ...` in `exec`/`apply_patch`, fix TUI flicker, prefer ratatui `Stylize`. | new-features |
| **配布**: npm パッケージに Windows ARM64 実行ファイルを含める。 | **Distribution**: include Windows ARM64 executable in the npm package. | new-features |
| **最新の検索ツールに切り替え**。 | **Switch to the latest search tool**. | new-features |
| [#3086] 新しい検索ツールを使用 | [#3086] Use the new search tool | new-features |
| [#1634] core(rollout): rollout モジュールを抽出、リスト API を追加、ファイルヘッドを返却 | [#1634] core(rollout): extract rollout module, add listing API, and return file heads | new-features |
| [#2895] arboard 依存関係をゲート化して Android/Termux サポートを追加 | [#2895] Add Android/Termux support by gating arboard dependency | new-features |
| [#2894] std::fs API を使用した安定したファイルロックを追加 | [#2894] Add stable file locking using std::fs APIs | new-features |
| [#3074] CodexAuth と AuthManager を core クレートに移動 | [#3074] Move CodexAuth and AuthManager to the core crate | new-features |
| [#3070] API キー使用時のレート制限エラー処理を復元 | [#3070] Add back rate‑limit error handling when using API key | new-features |
| [#3083] exec と apply_patch で "cd foo && ..." をパース | [#3083] Parse “cd foo && ...” for exec and apply_patch | new-features |
| [#3068] line/span 構築に ratatui Stylize を優先使用 | [#3068] Prefer ratatui Stylize for constructing lines/spans | new-features |
| [#2918] TUI: 時折発生する UI のちらつきを修正 | [#2918] TUI: fix occasional UI flicker | new-features |
| [#3061] @ 検索結果の保留中にローディング状態を表示 | [#3061] Show loading state when @ search results are pending | new-features |
| [#2907] TUI: empty_mcp_output の MCP ドキュメントハイパーリンクを修正 | [#2907] TUI: fix MCP docs hyperlink in empty_mcp_output | new-features |
| [#3067] npm モジュールに arm64 Windows 実行ファイルを含める | [#3067] Include arm64 Windows executable in npm module | new-features |
| [#2736] 履歴読み込みを統一 | [#2736] Unify history loading | new-features |
| [#3071] 実験的な推論サマリーを使用 | [#3071] Use experimental reasoning summary | new-features |
| [#2461] gpt-oss 互換性を改善 | [#2461] Improve gpt‑oss compatibility | new-features |
| [#2651] apply-patch: lark 文法を修正 | [#2651] apply‑patch: fix lark grammar | new-features |
| [#3089] Docs: https://agents.md/ へのリンクを更新 | [#3089] Docs: update link to https://agents.md/ | new-features |
| [#3082] Docs: config.md のタイポを修正 | [#3082] Docs: fix typo of config.md | new-features |
| [#2667] codex-rs の thiserror を 2.0.12 から 2.0.16 にバンプ | [#2667] Bump thiserror from 2.0.12 to 2.0.16 in codex‑rs | new-features |

## 0.28.0

| 日本語 | English | Category |
|--------|---------|----------|
| [Highlights] | [Highlights] | new-features |
| TUI の洗練と安定性の改善: タイピング遅延の軽減、ストリーム配信メッセージの見やすい書式設定、エラーハンドリングの改善、入力動作の向上 | TUI polish and stability improvements: reduced typing lag, cleaner streamed message formatting, better error handling, and improved input behavior. | new-features |
| Windows ARM ビルドの信頼性向上とリリース時ビルドの高速化 | Better Windows ARM build reliability and faster release-time builds. | new-features |
| [TUI/UX] | [TUI/UX] | new-features |
| タイピング遅延を修正 (#2922) | Fix laggy typing (#2922) | new-features |
| 視認性向上のためメッセージスタイルを改善 (#2877) | Rework message styling for clarity (#2877) | new-features |
| ストリーム配信エージェントメッセージの余分な空白行を削除 (#3065) | Remove extra blank lines in streamed agent messages (#3065) | new-features |
| `AGENTS.md` が存在する場合は "/init" 提案を非表示に (#3038) | Hide “/init” suggestion when `AGENTS.md` exists (#3038) | new-features |
| 空の入力で Enter を無視して空白メッセージのキューイングを回避 (#3047) | Ignore Enter on empty input to avoid queuing blank messages (#3047) | new-features |
| `get_cursor_position` エラーをキャッチしてクラッシュを回避 (#2870) | Catch `get_cursor_position` errors to avoid crashes (#2870) | new-features |
| 無効化コマンドメッセージから余分な引用符を削除 (#3035) | Remove extra quote from disabled-command message (#3035) | new-features |
| [Build & CI] | [Build & CI] | new-features |
| Windows ARM ビルドに Windows 11 ARM を活用 (#3062) | Leverage Windows 11 ARM for Windows ARM builds (#3062) | new-features |
| リリース用 Windows 11 ARM イメージに `zstd` をインストール (#3066) | Install `zstd` on Windows 11 ARM image used for releases (#3066) | new-features |
| PR 作成時にリリースビルド用 Windows キャッシュを事前構築 (#2884) | Populate Windows cache for release builds when PRs are opened (#2884) | new-features |
| [Docs] | [Docs] | new-features |
| 設定リファレンステーブルを修正 (#3063) | Fix config reference table (#3063) | new-features |
| ドキュメントリファクタリング後の PR テンプレートリンクを更新 (#2982) | Update PR template link after docs refactor (#2982) | new-features |
| [Logging/Telemetry] | [Logging/Telemetry] | new-features |
| ユーザーがモデルを変更した際のログを追加 (#3060) | Add logs when users change the model (#3060) | new-features |
| [Dependencies] | [Dependencies] | new-features |
| `codex-rs` の `regex-lite` を 0.1.7 にバンプ (#3010) | Bump `regex-lite` to 0.1.7 in `codex-rs` (#3010) | new-features |
| [#3066](https://github.com/openai/codex/pull/3066) fix: リリースカットに使用される windows-11-arm イメージに zstd をインストール | [#3066](https://github.com/openai/codex/pull/3066) fix: install zstd on the windows-11-arm image used to cut a release | new-features |
| [#3065](https://github.com/openai/codex/pull/3065) tui: ストリーム配信エージェントメッセージの余分な空白行を修正 | [#3065](https://github.com/openai/codex/pull/3065) tui: fix extra blank lines in streamed agent messages | new-features |
| [#3063](https://github.com/openai/codex/pull/3063) fix: 設定リファレンステーブルを修正 | [#3063](https://github.com/openai/codex/pull/3063) fix config reference table | new-features |
| [#3062](https://github.com/openai/codex/pull/3062) fix: Windows ARM ビルドに windows-11-arm を活用 | [#3062](https://github.com/openai/codex/pull/3062) fix: leverage windows-11-arm for Windows ARM builds | new-features |
| [#3060](https://github.com/openai/codex/pull/3060) add: ユーザーのモデル変更を把握するためのログを追加 | [#3060](https://github.com/openai/codex/pull/3060) Add logs to know when we users are changing the model | new-features |
| [#3047](https://github.com/openai/codex/pull/3047) fix: 空の入力で Enter を無視して空白メッセージのキューイングを回避 | [#3047](https://github.com/openai/codex/pull/3047) Bug fix: ignore Enter on empty input to avoid queuing blank messages | new-features |
| [#3038](https://github.com/openai/codex/pull/3038) tui: AGENTS.md が存在する場合は '/init' 提案を非表示に | [#3038](https://github.com/openai/codex/pull/3038) tui: hide '/init' suggestion when AGENTS.md exists | new-features |
| [#3035](https://github.com/openai/codex/pull/3035) fix: 無効化コマンドメッセージから余分な引用符を削除 | [#3035](https://github.com/openai/codex/pull/3035) remove extra quote from disabled-command message | new-features |
| [#3010](https://github.com/openai/codex/pull/3010) chore(deps): codex-rs の regex-lite を 0.1.6 から 0.1.7 にバンプ | [#3010](https://github.com/openai/codex/pull/3010) chore(deps): bump regex-lite from 0.1.6 to 0.1.7 in /codex-rs | new-features |
| [#2982](https://github.com/openai/codex/pull/2982) fix: ドキュメントリファクタリング後の正しいリンクに PR テンプレートを修正 | [#2982](https://github.com/openai/codex/pull/2982) Fix: Adapt pr template with correct link following doc refacto | new-features |
| [#2922](https://github.com/openai/codex/pull/2922) tui: タイピング遅延を修正 | [#2922](https://github.com/openai/codex/pull/2922) tui: fix laggy typing | new-features |
| [#2884](https://github.com/openai/codex/pull/2884) fix: PR レビュー時にリリースビルド用 Windows キャッシュの事前構築を試行 | [#2884](https://github.com/openai/codex/pull/2884) fix: try to populate the Windows cache for release builds when PRs are put up for review | new-features |
| [#2877](https://github.com/openai/codex/pull/2877) refactor: メッセージスタイルを改善 | [#2877](https://github.com/openai/codex/pull/2877) rework message styling | new-features |
| [#2870](https://github.com/openai/codex/pull/2870) tui: get_cursor_position エラーをキャッチ | [#2870](https://github.com/openai/codex/pull/2870) tui: catch get_cursor_position errors | new-features |

## 0.27.0

| 日本語 | English | Category |
|--------|---------|----------|
| **MCP の安定性**: mutex を早期に解放し、ロック順序の落とし穴を回避 | **MCP stability**: drop mutexes earlier and avoid lock ordering pitfalls. | new-features |
| **チャネルの信頼性**: 無制限チャネルに切り替えてストールを防止 | **Channel reliability**: switch to unbounded channel to prevent stalls. | new-features |
| **パフォーマンス/クリーンアップ**: 不要な flush() 呼び出しを削除 | **Performance/cleanup**: remove unnecessary flush() calls. | new-features |
| **CI**: リリースビルドを修正; `cargo clippy` に `--profile` を指定 | **CI**: fix release build; specify `--profile` for `cargo clippy`. | new-features |
| **ドキュメント**: より安全な Homebrew スニペット; `AGENTS.md` で `just fix -p` を提案 | **Docs**: safer Homebrew snippet; suggest `just fix -p` in `AGENTS.md`. | new-features |
| [#2881] agents.md で just fix -p を提案 | [#2881] Suggest just fix -p in agents.md | new-features |
| [#2878] 修正: MCP サーバーで Mutex を早期に解放 | [#2878] fix: drop Mutexes earlier in MCP server | new-features |
| [#2876] 修正: tx_approve.send() を呼び出す前に Mutex を解放 | [#2876] fix: drop Mutex before calling tx_approve.send() | new-features |
| [#2874] 修正: 無制限チャネルに切り替え | [#2874] fix: switch to unbounded channel | new-features |
| [#2873] 修正: 不要な flush() 呼び出しを削除 | [#2873] fix: remove unnecessary flush() calls | new-features |
| [#2871] 修正: CI で cargo clippy に --profile を指定 | [#2871] fix: specify --profile to cargo clippy in CI | new-features |
| [#2868] バグ修正: コメント内の `brew install codex` が実行されないように対策 | [#2868] Bugfix: Prevents `brew install codex` in comment to be executed | new-features |
| [#2864] CI リリースビルドを修正 | [#2864] Fix CI release build | new-features |

## 0.26.0

| 日本語 | English | Category |
|--------|---------|----------|
| `~/.codex/prompts` からカスタム `/prompts` を読み込み可能に (#2696) | Custom `/prompts` loaded from `~/.codex/prompts` (#2696) | new-features |
| Codex がローカル画像を自律的に表示できる新しい "View Image" ツールを追加 (#2723) | New "View Image" tool to let Codex agentically view local images (#2723) | new-features |
| 解決済み設定を検査する MCP `GetConfig` エンドポイントを追加 (#2725) | MCP `GetConfig` endpoint to inspect resolved settings (#2725) | new-features |

## 0.25.0

| 日本語 | English | Category |
|--------|---------|----------|
| Core: 長時間稼働サーバーでの手動クリーンアップ用 remove_conversation API を追加 (#2613) | Core: remove_conversation API for manual cleanup in long‑lived servers (#2613) | new-features |
| TUI: トランスクリプト/差分表示でマウスホイールによる代替スクロールに対応 (#2686) | TUI: mouse wheel alternate scrolling in transcript/diff views (#2686) | new-features |
| TUI: Alt+Ctrl+H で前の単語を削除可能に (Alt+Backspace と同等) (#2717) | TUI: Alt+Ctrl+H deletes the previous word (parity with Alt+Backspace) (#2717) | new-features |
| Execution: task_started イベントにコンテキストウィンドウを含めるように改善; ターンごとにモデルが変わる可能性に対応 (#2752) | Execution: include context window on task_started events; model may vary per turn (#2752) | new-features |

## 0.24.0

| 日本語 | English | Category |
|--------|---------|----------|
| メッセージのキューイング (#2637) | Queued messages (#2637) | new-features |
| 画像ファイルのコピー&ペースト / ドラッグ&ドロップ (#2567) | Copy Paste / Drag & Drop image files (#2567) | new-features |
| スクロール可能なトランスクリプトモード (Ctrl+T) (#2525) | Transcript mode (Ctrl+T) with scrolling ability (#2525) | new-features |
| 過去のメッセージからの会話編集/再開 (esc-esc) (#2607) | Edit/resume conversation (esc-esc) from previous messages (#2607) | new-features |
| --search オプション使用時のウェブ検索 (#2371) | Web search when using explicit --search option (#2371) | new-features |

## 0.23.0

| 日本語 | English | Category |
|--------|---------|----------|
| ハイライト | Highlights | new-features |
| 新しいコマンドとコントロール: TUI で `/mcp` をサポート (#2430)、承認を制御するスラッシュコマンド `/approvals` を追加 (#2474) | New commands and controls: support `/mcp` in TUI (#2430) and a slash command `/approvals` to control approvals (#2474). | new-features |
| 推論制御: 実行時に推論の労力とモデルを変更可能に (#2435) `/model`、GPT-5 モデル用に "minimal" 労力を追加 (#2326) | Reasoning controls: change reasoning effort and model at runtime (#2435) `/model`; add “minimal” effort for GPT‑5 models (#2326). | new-features |
| 認証の改善: ChatGPT でサインインしていないときにログインオプションを表示 (#2440)、ChatGPT 認証トークンの自動更新 (#2484) | Auth improvements: show login options when not signed in with ChatGPT (#2440) and auto‑refresh ChatGPT auth token (#2484). | new-features |
| UI/UX の改善: Ghostty Ctrl-b/Ctrl-f フォールバック (#2427)、Ctrl+H をバックスペースとして対応 (#2412)、タブ補完後のカーソル位置調整 (#2442)、色とアクセシビリティの更新 (#2401, #2421) | UI/UX polish: Ghostty Ctrl‑b/Ctrl‑f fallback (#2427), Ctrl+H as backspace (#2412), cursor position tweak after tab completion (#2442), color/accessibility updates (#2401, #2421). | new-features |
| 配布/インフラ: リリースに zip アーカイブバイナリを追加 (#2438)、Windows x86_64 用 DotSlash エントリ (#2361)、Rust 1.89 へアップグレード (#2465, #2467) | Distribution/infra: zip archived binaries added to releases (#2438) and DotSlash entry for Windows x86_64 (#2361); upgraded to Rust 1.89 (#2465, #2467). | new-features |
| マージされた PR の完全リスト | Full list of merged PRs | new-features |
| [#2352](https://github.com/openai/codex/pull/2352) tui: ローカル composer 履歴で同一の連続エントリをスキップ | [#2352](https://github.com/openai/codex/pull/2352) tui: skip identical consecutive entries in local composer history | new-features |
| [#2355](https://github.com/openai/codex/pull/2355) fix: codex-protocol クレートを導入 | [#2355](https://github.com/openai/codex/pull/2355) fix: introduce codex-protocol crate | new-features |
| [#2326](https://github.com/openai/codex/pull/2326) Fix #2296 GPT 5 モデル用に "minimal" 推論労力を追加 | [#2326](https://github.com/openai/codex/pull/2326) Fix #2296 Add "minimal" reasoning effort for GPT 5 models | new-features |
| [#2357](https://github.com/openai/codex/pull/2357) 重複した "Successfully logged in message" を削除 | [#2357](https://github.com/openai/codex/pull/2357) Remove duplicated "Successfully logged in message" | new-features |
| [#2337](https://github.com/openai/codex/pull/2337) apply patch サマリーでステータス文字を色付け | [#2337](https://github.com/openai/codex/pull/2337) color the status letter in apply patch summary | new-features |
| [#2336](https://github.com/openai/codex/pull/2336) chore: 重複した lockfile を削除 | [#2336](https://github.com/openai/codex/pull/2336) chore: remove duplicated lockfile | new-features |
| [#2361](https://github.com/openai/codex/pull/2361) fix: 生成される DotSlash ファイルに windows-x86_64 のエントリを含める | [#2361](https://github.com/openai/codex/pull/2361) fix: include an entry for windows-x86_64 in the generated DotSlash file | new-features |
| [#2245](https://github.com/openai/codex/pull/2245) /diff コマンドの進行状況インジケーターを表示 | [#2245](https://github.com/openai/codex/pull/2245) Show progress indicator for /diff command | new-features |
| [#2314](https://github.com/openai/codex/pull/2314) /prompts をローテーションするプレースホルダーに置き換え | [#2314](https://github.com/openai/codex/pull/2314) replace /prompts with a rotating placeholder | new-features |
| [#2372](https://github.com/openai/codex/pull/2372) 実行中の codex CLI プロセスにアタッチするための起動プロファイルを追加 | [#2372](https://github.com/openai/codex/pull/2372) Added launch profile for attaching to a running codex CLI process | new-features |
| [#2373](https://github.com/openai/codex/pull/2373) ChatGPT を使用した認証を有効にする MCP サーバーコマンドを追加 | [#2373](https://github.com/openai/codex/pull/2373) Added MCP server command to enable authentication using ChatGPT | new-features |
| [#2388](https://github.com/openai/codex/pull/2388) fix: login/src/server.rs をリファクタリングし process_request() を別関数に | [#2388](https://github.com/openai/codex/pull/2388) fix: refactor login/src/server.rs so process_request() is a separate function | new-features |
| [#2365](https://github.com/openai/codex/pull/2365) fix: EventMsg::TurnAborted を導入 | [#2365](https://github.com/openai/codex/pull/2365) fix: introduce EventMsg::TurnAborted | new-features |
| [#2360](https://github.com/openai/codex/pull/2360) mcp-server/src/mcp_protocol.rs とそれに依存するコードを削除 | [#2360](https://github.com/openai/codex/pull/2360) remove mcp-server/src/mcp_protocol.rs and the code that depends on it | new-features |
| [#2401](https://github.com/openai/codex/pull/2401) fix: スタイルと色を整理し styles.md で定義 | [#2401](https://github.com/openai/codex/pull/2401) fix: clean up styles & colors and define in styles.md | new-features |
| [#2411](https://github.com/openai/codex/pull/2411) chore(deps-dev): /.github/actions/codex で @types/node をバンプ | [#2411](https://github.com/openai/codex/pull/2411) chore(deps-dev): bump @types/node in /.github/actions/codex | new-features |
| [#2421](https://github.com/openai/codex/pull/2421) fix: ANSI blue の使用を停止 | [#2421](https://github.com/openai/codex/pull/2421) fix: stop using ANSI blue | new-features |
| [#2423](https://github.com/openai/codex/pull/2423) chore: mcp-server/src/wire_format.rs を protocol/src/mcp_protocol.rs に移動 | [#2423](https://github.com/openai/codex/pull/2423) chore: move mcp-server/src/wire_format.rs to protocol/src/mcp_protocol.rs | new-features |
| [#2424](https://github.com/openai/codex/pull/2424) chore: 生成される mcp-types に TS アノテーションを追加 | [#2424](https://github.com/openai/codex/pull/2424) chore: add TS annotation to generated mcp-types | new-features |
| [#2428](https://github.com/openai/codex/pull/2428) 推論 enum を1つに統合 | [#2428](https://github.com/openai/codex/pull/2428) consolidate reasoning enums into one | new-features |
| [#2431](https://github.com/openai/codex/pull/2431) 現在のタスクコンテキストをオーバーライドする操作を追加 | [#2431](https://github.com/openai/codex/pull/2431) Add an operation to override current task context | new-features |
| [#2425](https://github.com/openai/codex/pull/2425) protocol-ts | [#2425](https://github.com/openai/codex/pull/2425) protocol-ts | new-features |
| [#2432](https://github.com/openai/codex/pull/2432) UserTurn のキャッシュテストを追加 | [#2432](https://github.com/openai/codex/pull/2432) Add cache tests for UserTurn | new-features |
| [#2412](https://github.com/openai/codex/pull/2412) Fix #2391 Ctrl+H をバックスペースのキーボードショートカットとして追加 | [#2412](https://github.com/openai/codex/pull/2412) Fix #2391 Add Ctrl+H as backspace keyboard shortcut | new-features |
| [#2405](https://github.com/openai/codex/pull/2405) chore(deps): /codex-rs で anyhow をバンプ | [#2405](https://github.com/openai/codex/pull/2405) chore(deps): bump anyhow in /codex-rs | new-features |
| [#2406](https://github.com/openai/codex/pull/2406) chore(deps): /codex-rs で libc をバンプ | [#2406](https://github.com/openai/codex/pull/2406) chore(deps): bump libc in /codex-rs | new-features |
| [#2389](https://github.com/openai/codex/pull/2389) chore: expect() より Err を返すことを優先 | [#2389](https://github.com/openai/codex/pull/2389) chore: prefer returning Err to expect() | new-features |
| [#2393](https://github.com/openai/codex/pull/2393) fix: ログインフローを async 化 | [#2393](https://github.com/openai/codex/pull/2393) fix: async-ify login flow | new-features |
| [#2404](https://github.com/openai/codex/pull/2404) chore(deps): /codex-rs で clap をバンプ | [#2404](https://github.com/openai/codex/pull/2404) chore(deps): bump clap in /codex-rs | new-features |
| [#2394](https://github.com/openai/codex/pull/2394) fix: `shutdown_flag` を `Arc<AtomicBool>` から `tokio::sync::Notify` に変更 | [#2394](https://github.com/openai/codex/pull/2394) fix: change `shutdown_flag` from `Arc<AtomicBool>` to `tokio::sync::Notify` | new-features |
| [#2438](https://github.com/openai/codex/pull/2438) zip アーカイブバイナリをリリース | [#2438](https://github.com/openai/codex/pull/2438) Release zip archived binaries | new-features |
| [#2395](https://github.com/openai/codex/pull/2395) fix: ServerOptions.login_timeout を削除し tokio::time::timeout() を使用 | [#2395](https://github.com/openai/codex/pull/2395) fix: eliminate ServerOptions.login_timeout and use tokio::time::timeout() | new-features |
| [#2396](https://github.com/openai/codex/pull/2396) fix: ShutdownHandle を LoginServer のプライベートフィールドに | [#2396](https://github.com/openai/codex/pull/2396) fix: make ShutdownHandle a private field of LoginServer | new-features |
| [#2398](https://github.com/openai/codex/pull/2398) fix: codex-login クレートでの Server への参照を削減 | [#2398](https://github.com/openai/codex/pull/2398) fix: reduce references to Server in codex-login crate | new-features |
| [#2399](https://github.com/openai/codex/pull/2399) fix: run_login_server() から shutdown_flag パラメータを削除 | [#2399](https://github.com/openai/codex/pull/2399) fix: remove shutdown_flag param to run_login_server() | new-features |
| [#2403](https://github.com/openai/codex/pull/2403) chore(deps): /codex-rs で clap_complete をバンプ | [#2403](https://github.com/openai/codex/pull/2403) chore(deps): bump clap_complete in /codex-rs | new-features |
| [#2440](https://github.com/openai/codex/pull/2440) ChatGPT でサインインしていないときにログインオプションを表示 | [#2440](https://github.com/openai/codex/pull/2440) Show login options when not signed in with ChatGPT | new-features |
| [#2446](https://github.com/openai/codex/pull/2446) fix: context left % から sysprompt などを除外 | [#2446](https://github.com/openai/codex/pull/2446) fix: exclude sysprompt etc from context left % | new-features |
| [#2430](https://github.com/openai/codex/pull/2430) [tui] /mcp コマンドをサポート | [#2430](https://github.com/openai/codex/pull/2430) [tui] Support /mcp command | new-features |
| [#2442](https://github.com/openai/codex/pull/2442) Fix #2429 タブ補完後のカーソル位置を調整 | [#2442](https://github.com/openai/codex/pull/2442) Fix #2429 Tweak the cursor position after tab completion | new-features |
| [#2457](https://github.com/openai/codex/pull/2457) fix: レビュー決定レスポンスで不足していたスペースを修正 | [#2457](https://github.com/openai/codex/pull/2457) fix: fix missing spacing in review decision response | new-features |
| [#2427](https://github.com/openai/codex/pull/2427) tui: Ghostty Ctrl-b/Ctrl-f フォールバックをサポート | [#2427](https://github.com/openai/codex/pull/2427) tui: support Ghostty Ctrl-b/Ctrl-f fallback | new-features |
| [#2407](https://github.com/openai/codex/pull/2407) chore(deps): actions/checkout を 4 から 5 にバンプ | [#2407](https://github.com/openai/codex/pull/2407) chore(deps): bump actions/checkout from 4 to 5 | new-features |
| [#2435](https://github.com/openai/codex/pull/2435) 推論労力の変更をサポート | [#2435](https://github.com/openai/codex/pull/2435) Support changing reasoning effort | new-features |
| [#2462](https://github.com/openai/codex/pull/2462) feat: /status でセッション ID の箇条書きを移動 | [#2462](https://github.com/openai/codex/pull/2462) feat: move session ID bullet in /status | new-features |
| [#2464](https://github.com/openai/codex/pull/2464) docs: sandbox_workspace_write の writable_roots を文書化 | [#2464](https://github.com/openai/codex/pull/2464) docs: document writable_roots for sandbox_workspace_write | new-features |
| [#2466](https://github.com/openai/codex/pull/2466) fix: 時間とスペースを節約するため `cargo build` より `cargo check` を優先 | [#2466](https://github.com/openai/codex/pull/2466) fix: prefer `cargo check` to `cargo build` to save time and space | new-features |
| [#2465](https://github.com/openai/codex/pull/2465) chore: Rust 1.89 へアップグレード | [#2465](https://github.com/openai/codex/pull/2465) chore: upgrade to Rust 1.89 | new-features |
| [#2467](https://github.com/openai/codex/pull/2467) chore: Rust 1.89 でファイルロックが標準ライブラリに昇格 | [#2467](https://github.com/openai/codex/pull/2467) chore: Rust 1.89 promoted file locking to stdlib | new-features |
| [#2468](https://github.com/openai/codex/pull/2468) fix 1つのファイルのみがレンダリングされた場合の apply patch を修正 | [#2468](https://github.com/openai/codex/pull/2468) fix apply patch when only one file is rendered | new-features |
| [#2475](https://github.com/openai/codex/pull/2475) Fix: 他のプロバイダーを使用していてもサインインが表示される問題を修正 | [#2475](https://github.com/openai/codex/pull/2475) Fix: Sign in appear even if using other providers. | new-features |
| [#2460](https://github.com/openai/codex/pull/2460) Rust ツールチェーンの Dependabot 更新を有効化 | [#2460](https://github.com/openai/codex/pull/2460) Enable Dependabot updates for Rust toolchain | new-features |
| [#2476](https://github.com/openai/codex/pull/2476) Diff コマンド | [#2476](https://github.com/openai/codex/pull/2476) Diff command | new-features |
| [#2487](https://github.com/openai/codex/pull/2487) クライアントヘッダー | [#2487](https://github.com/openai/codex/pull/2487) Client headers | new-features |
| [#2484](https://github.com/openai/codex/pull/2484) ChatGPT 認証トークンを更新 | [#2484](https://github.com/openai/codex/pull/2484) Refresh ChatGPT auth token | new-features |
| [#2495](https://github.com/openai/codex/pull/2495) fix: 環境変数より設定変数を優先 | [#2495](https://github.com/openai/codex/pull/2495) fix: prefer config var to env var | new-features |
| [#2474](https://github.com/openai/codex/pull/2474) パーミッションを制御するスラッシュコマンドを追加 | [#2474](https://github.com/openai/codex/pull/2474) Add a slash command to control permissions | new-features |

## 0.22.0

| 日本語 | English | Category |
|--------|---------|----------|
| https://github.com/openai/codex/pull/2294 ログインサーバーを Python から Rust に移行し、https://github.com/openai/codex/issues/2000 と https://github.com/openai/codex/issues/2044 の両方の問題を解決 | https://github.com/openai/codex/pull/2294 moves the login server from Python to Rust, which should help with both https://github.com/openai/codex/issues/2000 and https://github.com/openai/codex/issues/2044. | new-features |
| https://github.com/openai/codex/pull/2029 Markdown ストリーミングのサポートを追加 | https://github.com/openai/codex/pull/2029 adds support for markdown streaming | new-features |
| https://github.com/openai/codex/pull/2270 明るい背景で使用する際の diff の可読性を向上させるよう UI の表示を改善 | https://github.com/openai/codex/pull/2270 improves the UI treatment of diffs so they are more readable when using a light background | new-features |
| https://github.com/openai/codex/pull/2113 `ctrl-z` で TUI を一時停止できるように対応 | https://github.com/openai/codex/pull/2113 `ctrl-z` can be used to suspend the TUI | new-features |

## 0.21.0

| 日本語 | English | Category |
|--------|---------|----------|
| https://github.com/openai/codex/pull/2200 プロンプトキャッシュキーの送信によりキャッシュを改善（トークン効率が向上） | https://github.com/openai/codex/pull/2200 send prompt cache key for better caching (should improve token efficiency!) | new-features |
| https://github.com/openai/codex/pull/2202 複数行コマンドを分割して可読性を向上 | https://github.com/openai/codex/pull/2202 split multiline commands to improve readability | new-features |
| https://github.com/openai/codex/pull/2095 exec コマンドをパースして UI でより見やすく整形 | https://github.com/openai/codex/pull/2095 Parse exec commands and format them more nicely in the UI | new-features |
| https://github.com/openai/codex/pull/2186 `applypatch` コマンドを `apply_patch` コマンド文字列として認識 | https://github.com/openai/codex/pull/2186 recognize `applypatch` command as `apply_patch` command string | new-features |
| https://github.com/openai/codex/pull/2183 ツール呼び出し結果に出力切り捨てメッセージを含めて、期待した完全な出力が得られなかったことをモデルに通知 | https://github.com/openai/codex/pull/2183 Include output truncation message in tool call results to tell the model when it did not get the full output from a command that it might have expected | new-features |
| https://github.com/openai/codex/pull/2162 `/compact` コマンド後にフィードバックメッセージを表示し、差分が送信されなかった場合の問題を修正 | https://github.com/openai/codex/pull/2162 show feedback message after `/compact` command, fixing an issue when no deltas were sent | new-features |
| https://github.com/openai/codex/pull/2050 `apply_patch` の差分プレビューを表示 | https://github.com/openai/codex/pull/2050 show diff preview for `apply_patch` | new-features |
| https://github.com/openai/codex/pull/1975 内部 JsonSchema enum との互換性を確保するため MCP ツールに JSON スキーマサニタイゼーションを追加 外部貢献者: @yaroslavyaroslav さんに感謝! | https://github.com/openai/codex/pull/1975 add JSON schema sanitization for MCP tools to ensure compatibility with internal JsonSchema enum external contributor: Thanks @yaroslavyaroslav! | new-features |

## 0.20.0

| 日本語 | English | Category |
|--------|---------|----------|
| https://github.com/openai/codex/pull/2035 `@openai/codex` の `npm` リリースで、旧 TypeScript CLI にフォールバックせず Rust CLI を実行するように変更（TypeScript コードは https://github.com/openai/codex/pull/2048 でリポジトリから削除） | https://github.com/openai/codex/pull/2035 the `npm` release of `@openai/codex` now runs the Rust CLI instead of falling back to the old TypeScript CLI (TypeScript code was removed from the repo in https://github.com/openai/codex/pull/2048) | new-features |
| https://github.com/openai/codex/pull/2019 Windows 向けの 2 つの問題を修正: | https://github.com/openai/codex/pull/2019 fixes two things for Windows: | new-features |
| Python プログラムを長い文字列引数ではなく一時ファイルに書き込むことで、ログインロジックの一部の問題を修正（なお、Python を Rust に置き換える予定: https://github.com/openai/codex/pull/2047) | fixes one class of issues with login logic by writing Python program to a temp file instead of long string arg (FYI, we are planning to replace the Python with Rust: https://github.com/openai/codex/pull/2047) | new-features |
| すべての Windows ターミナルがサポートしていないため、`PopKeyboardEnhancementFlags` の失敗を無視するように変更 | ignores `PopKeyboardEnhancementFlags` failure since not all Windows terminals support it | new-features |
| https://github.com/openai/codex/pull/2042 `codex login` での Python 証明書問題の改善/修正: https://github.com/openai/codex/issues/2044 | https://github.com/openai/codex/pull/2042 should help/fix the Python certificates issue with `codex login`: https://github.com/openai/codex/issues/2044 | new-features |

## 0.16.0

| 日本語 | English | Category |
|--------|---------|----------|
| 容量に関するエラーメッセージの小さな修正: https://github.com/openai/codex/pull/1947 | Small fix for an error message around capacity: https://github.com/openai/codex/pull/1947 | new-features |
| 本日のより重要なアップグレードは 0.15.0 へのアップグレード: https://github.com/openai/codex/releases/rust-v0.15.0 | Though the more significant upgrade today is to 0.15.0: https://github.com/openai/codex/releases/rust-v0.15.0 | new-features |

## 0.13.0

| 日本語 | English | Category |
|--------|---------|----------|
| https://github.com/openai/gpt-oss | https://github.com/openai/gpt-oss | new-features |
| プロンプトキャッシングのサポートを追加 | https://github.com/openai/codex/pull/1848 | new-features |

## 0.12.0

| 日本語 | English | Category |
|--------|---------|----------|
| 0.11.0 で発生したリグレッション https://github.com/openai/codex/issues/1796 を修正する https://github.com/openai/codex/pull/1826 を含む。 | Includes https://github.com/openai/codex/pull/1826 to fix a regression introduced in 0.11.0: https://github.com/openai/codex/issues/1796. | new-features |

## 0.11.0

| 日本語 | English | Category |
|--------|---------|----------|
| https://github.com/openai/codex/issues/1247 コピー&ペーストが動作するように修正 | https://github.com/openai/codex/issues/1247 copy/paste works now | new-features |
| https://github.com/openai/codex/issues/1502 ターミナルのネイティブスクロールを使用するように変更 | https://github.com/openai/codex/issues/1502 use the terminal's native scrolling | new-features |
| https://github.com/openai/codex/pull/1527 `/compact` コマンドのサポートを追加 | https://github.com/openai/codex/pull/1527 adds support for the `/compact` command | new-features |
| https://github.com/openai/codex/pull/1726 実験的なプランニングツールを導入 | https://github.com/openai/codex/pull/1726 introduces an experimental planning tool | new-features |
| https://github.com/openai/codex/pull/1705 `apply_patch` がセッションのサンドボックスを通じて実行されることを保証するセキュリティ修正 | https://github.com/openai/codex/pull/1705 security fix to ensure `apply_patch` is run through the sandbox for the session | new-features |
| https://github.com/openai/codex/pull/1764 CLI が新しいバージョンをチェックし、古いバージョンを使用している場合に通知する機能を追加 | https://github.com/openai/codex/pull/1764 CLI now checks for new versions and lets you know if you are out of date | new-features |

## 0.9.0

| 日本語 | English | Category |
|--------|---------|----------|
| `codex mcp` の多数の修正 | Numerous fixes to `codex mcp`. | new-features |
| https://github.com/openai/codex/pull/1626 `codex` が終了したときに Codex が起動したシェルコマンドに `SIGTERM` が送信されるようにした（Linux のみ） | https://github.com/openai/codex/pull/1626 to ensure shell commands spawned by Codex get `SIGTERM` when `codex` is killed (Linux only) | new-features |
| ripgrep/`rg` の特定のフラグの自動承認を無効化 https://github.com/openai/codex/pull/1644 | Do not auto-approve certain flags for ripgrep/`rg` https://github.com/openai/codex/pull/1644 | new-features |

## 0.8.0

| 日本語 | English | Category |
|--------|---------|----------|
| https://github.com/openai/codex/pull/1594 により、TUI と `codex exec` 使用時にモデルからのレスポンスをストリーミングするようになりました | As of https://github.com/openai/codex/pull/1594, we now stream the response from the model in the TUI and when using `codex exec` | new-features |
| https://github.com/openai/codex/pull/1589 により、`ctrl-d` はコンポーザーが空の場合のみ TUI を終了するように変更されました（Codex エージェントが処理中でコンポーザーが非表示の場合は引き続き TUI を終了します） | https://github.com/openai/codex/pull/1589 changes `ctrl-d` so it only exits the TUI if the composer is empty (it will still exit the TUI if the composer is hidden because the Codex agent is thinking) | new-features |
| https://github.com/openai/codex/pull/1596 により、`~/.codex/sessions` フォルダが `YYYY/MM/DD` サブフォルダで整理されるようになりました。これにより最近のセッションを見つけやすくなり、以前は `~/.codex/sessions` に無制限にエントリが増える可能性があったファイルシステムのパフォーマンス低下を回避できます | As a heads up, https://github.com/openai/codex/pull/1596 changes the organization of the `~/.codex/sessions` folder so it has `YYYY/MM/DD` subfolders. This should make it easier to find recent sessions and avoid degrading filesystem performance because previously `~/.codex/sessions` could end up with an unbounded number of entries | new-features |
| https://github.com/openai/codex/pull/1571 により、長い MCP ツール名を適切に処理できなかった長年の問題が修正されました（関連する GitHub issue は https://github.com/openai/codex/issues/1289 です） | https://github.com/openai/codex/pull/1571 fixes a longstanding issue where we failed to handle long MCP tool names gracefully (https://github.com/openai/codex/issues/1289 was the relevant GitHub issue) | new-features |
| https://github.com/openai/codex/pull/1603 により、`codex exec` に `--json` フラグが追加され、出力を JSONL として stdout に出力できるようになりました | https://github.com/openai/codex/pull/1603 introduced a `--json` flag to `codex exec` so that it prints output as JSONL to stdout | new-features |
| https://github.com/openai/codex/pull/1590 により、`npm` 版の Node.js スクリプトから Codex CLI を起動した際に、Codex CLI プロセスと Node.js プロセスが一緒に終了するようになりましたが、https://github.com/openai/codex/issues/1570 の詳細によると、この特定の問題を修正するには不十分なようです | https://github.com/openai/codex/pull/1590 tries to ensure that when the Codex CLI is launched via the Node.js script in the `npm` version that both the Codex CLI process and Node.js process exit together, though from the additional details on https://github.com/openai/codex/issues/1570, it seems like it is not sufficient to fix that specific problem. | new-features |
| https://github.com/openai/codex/pull/1590 により、Windows の `npm` 版ではクラッシュする代わりに TypeScript 版にフォールバックするようになり、https://github.com/openai/codex/issues/1573 が修正されました | Though https://github.com/openai/codex/pull/1590 should make it so that, on Windows, the `npm` version will fall back to the TypeScript version (for now) rather than just crashing, fixing https://github.com/openai/codex/issues/1573. | new-features |

## 0.3.0

| 日本語 | English | Category |
|--------|---------|----------|
| 非ASCII文字がCLIをクラッシュさせる問題を修正: https://github.com/openai/codex/issues/1450 (@ryozi-tn による https://github.com/openai/codex/pull/1467 での修正に感謝) | Fixes an issue where non-ASCII characters were crashing the CLI: https://github.com/openai/codex/issues/1450 (huge thanks to @ryozi-tn for the fix in https://github.com/openai/codex/pull/1467) | new-features |
| `--sandbox` フラグのサポートを追加し、このオプションに関する `config.toml` の破壊的変更を実施。詳細は https://github.com/openai/codex/pull/1476 を参照 | Adds support for a `--sandbox` flag and makes some breaking changes to `config.toml` around this option. See https://github.com/openai/codex/pull/1476 for details. | new-features |
| モデルプロバイダーへのリクエスト時にカスタムHTTPヘッダーを設定可能に: https://github.com/openai/codex/pull/1473 | Makes it possible to configure custom HTTP headers when making requests to model providers: https://github.com/openai/codex/pull/1473. | new-features |

