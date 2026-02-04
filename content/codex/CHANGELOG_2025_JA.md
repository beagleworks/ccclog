# OpenAI Codex 変更履歴 (2025年)

このファイルは OpenAI Codex の2025年リリース分の変更履歴を日本語で記載しています。

---

## 0.77.0

| 日本語 | English | Category |
|--------|---------|----------|
| TUI2: ターミナル間でマウスホイールとトラックパッドのスクロールを正規化し、`tui.scroll_*` 設定項目を追加 (PR #8357) | TUI2: Normalize mouse wheel + trackpad scrolling across terminals; add `tui.scroll_*` config settings (PR #8357) | new-features |
| `requirements.toml` に `allowed_sandbox_modes` を追加して、許可されるサンドボックスモードを制限 (PR #8298) | Add `allowed_sandbox_modes` to `requirements.toml` to constrain permitted sandbox modes (PR #8298) | new-features |
| MCP: ストリーム可能な HTTP MCP サーバーの OAuth ログインで `rmcp_client` フィーチャーフラグが不要に (PR #8087) | MCP: OAuth login for streamable HTTP MCP servers no longer requires the `rmcp_client` feature flag (PR #8087) | new-features |
| `codex-file-search` でファイル名の導出を一元化し、ファジーファイル検索の表示と一貫性を改善 (PR #8334) | Improve fuzzy file search display/consistency by centralizing file-name derivation in `codex-file-search` (PR #8334) | new-features |
| バンドルされているモデルメタデータ (`models.json`) を更新 (PR #8168) | Update bundled model metadata (`models.json`) (PR #8168) | new-features |
| `/undo` が git ステージング / ゴーストコミットと破壊的に相互作用する問題を修正 (PR #8303) | Fix `/undo` interacting destructively with git staging / ghost commits (PR #8303) | bug-fixes |
| TUI2: トランスクリプトのスクロール中の冗長な再描画を削減 (PR #8295) | TUI2: Reduce redundant redraws while scrolling transcripts (PR #8295) | bug-fixes |
| ドキュメント: `experimental.md` 内の `contributing.md` へのリンクを修正 (PR #8311) | Docs: Fix link to `contributing.md` in `experimental.md` (PR #8311) | bug-fixes |

## 0.76.0

| 日本語 | English | Category |
|--------|---------|----------|
| macOS DMG ビルドターゲットを追加 (PR #8207) | Add a macOS DMG build target (PR #8207) | new-features |
| ターミナルごとのスクロール調整のためのターミナル検出メタデータを改善 (PR #8252) | Improve terminal detection metadata for per-terminal scroll tuning (PR #8252) | new-features |
| スキルポップアップの UI を調整 (PR #8250) | UI tweaks on the skills popup (PR #8250) | new-features |
| TUI 検索セルのレンダリングを改善 (PR #8273) | TUI search cell rendering improvements (PR #8273) | new-features |
| /ps コマンドを追加 (PR #8279) | Add /ps command (PR #8279) | new-features |
| UNIX 上での /etc/codex/requirements.toml のサポートを追加 (PR #8277) | Add support for /etc/codex/requirements.toml on UNIX (PR #8277) | new-features |
| スキルの shortDescription をサポート (PR #8278, PR #8301) | Support shortDescription for skills (PR #8278, PR #8301) | new-features |
| モデルリスト UI を追加 (PR #8286) | Add model list UI (PR #8286) | new-features |
| app-server v2 非推奨通知イベントを追加 (PR #8285) | Add app-server v2 deprecation notice event (PR #8285) | new-features |
| ExternalSandbox ポリシーを導入 (PR #8290) | Introduce ExternalSandbox policy (PR #8290) | new-features |
| スキルをデフォルトで有効化 (PR #8297) | Skills default on (PR #8297) | new-features |
| 管理者スコープのスキルをサポート (PR #8296) | Support admin-scoped skills (PR #8296) | new-features |
| バンドルされたシステムスキルを更新 (PR #8253, PR #8328) | Update bundled system skills (PR #8253, PR #8328) | new-features |
| app server で exclude のデフォルトを true に設定 (PR #8281) | Set exclude default to true in app server (PR #8281) | new-features |
| 制限付きサンドボックストークンでパイプが動作することを保証 (PR #8280) | Ensure pipes work in restricted sandbox tokens (PR #8280) | bug-fixes |
| command-runner ディレクトリへの読み取り ACL をより早期に付与 (PR #8275) | Grant read ACL to the command-runner directory earlier (PR #8275) | bug-fixes |
| 重複する shell_snapshot FeatureSpec のリグレッションを修正 (PR #8274) | Fix duplicate shell_snapshot FeatureSpec regression (PR #8274) | bug-fixes |
| request への切り替えによる sandbox-state 更新順序を修正 (PR #8142) | Fix sandbox-state update ordering by switching to request (PR #8142) | bug-fixes |

## 0.75.0

| 日本語 | English | Category |
|--------|---------|----------|
| #8270 — スプラッシュスクリーン | #8270 — splash screen | new-features |
| #8251 — 新しい制約ベースのローディング戦略に移行 | #8251 — migrate to new constraint-based loading strategy | new-features |
| #7460 — cloud: cloud exec でデフォルトを現在のブランチに設定 | #7460 — cloud: default to current branch in cloud exec | new-features |

## 0.73.0

| 日本語 | English | Category |
|--------|---------|----------|
| （翻訳待ち） | Add ghost snapshot v2 for improved session capture (PR #8055) | new-features |
| （翻訳待ち） | Support ghost commits in config (PR #7873) | new-features |
| （翻訳待ち） | Reimplement skills loading via SkillsManager and skills/list for consistent discovery (PR | new-features |
| （翻訳待ち） | #7914) | new-features |
| （翻訳待ち） | Add OpenTelemetry tracing for Codex (PR #7844) | new-features |
| （翻訳待ち） | Prevent panic when session contains a tool call without an output (PR #8048) | bug-fixes |
| （翻訳待ち） | Avoid triggering keybindings view on input bursts (PR #7980) | bug-fixes |
| （翻訳待ち） | Change default wrap algorithm from OptimalFit to FirstFit (PR #7960) | bug-fixes |
| （翻訳待ち） | Introduce AbsolutePathBuf as part of sandbox config (PR #7856) | bug-fixes |
| （翻訳待ち） | Include Error in log messages (PR #7955) | bug-fixes |

## 0.72.0

| 日本語 | English | Category |
|--------|---------|----------|
| Config API クリーンアップ (#7924): 新しい config API とよりクリーンな設定読み込みフロー | Config API cleanup (#7924): new config API and cleaner config loading flow. | new-features |
| API キーユーザー向けのリモートコンパクト (#7835): キーベースセッションでのリモートコンパクトを有効化 | Remote compact for API-key users (#7835): enable remote compacting in key-based sessions. | new-features |
| MCP と TUI のステータス表示 (#7828, #7907): TUI での MCP 起動プログレスメッセージを復元し、最新のディスク値を使用 | MCP and TUI status visibility (#7828, #7907): restore MCP startup progress messages in the TUI and use latest disk values | new-features |
| Windows と PowerShell の品質改善 (#7607, #7893, #7942, #7137): pwsh/powershell を確実に検出し、PowerShell をパース | Windows and PowerShell quality-of-life (#7607, #7893, #7942, #7137): locate pwsh/powershell reliably, parse PowerShell with | new-features |
| サンドボックスと安全性の更新 (#7809, #7889, #7728): Elevated Sandbox 3/4 と拡張された安全コマンドリスト | Sandbox and safety updates (#7809, #7889, #7728): Elevated Sandbox 3/4 plus expanded safe command list. | new-features |
| gpt-5.2 のモデル/プロンプト UX (#7934, #7910, #7874, #7911): プロンプト更新とより明確な xhigh reasoning の警告/ドキュメント | Model/prompt UX for gpt-5.2 (#7934, #7910, #7874, #7911): prompt updates and clearer xhigh reasoning warnings/docs. | new-features |
| cargo ビルドスイッチを修正 #7948 @[iceweasel-oai] | fix cargo build switch #7948 @[iceweasel-oai] | new-features |
| 修正: TUI での MCP 起動プログレスメッセージを復元 (#7827 を修正) #7828 @[ivanmurashko] | fix: restore MCP startup progress messages in TUI (fixes #7827) #7828 @[ivanmurashko] | new-features |
| 1p をサポート #7945 @[aibrahim-oai] | support 1p #7945 @[aibrahim-oai] | new-features |
| Windows 用に 2 つの追加実行ファイルに署名 #7942 @[iceweasel-oai] | Sign two additional exes for Windows #7942 @[iceweasel-oai] | new-features |
| 修正: PowerShell を PowerShell でパース #7607 @[bolinfest] | fix: use PowerShell to parse PowerShell #7607 @[bolinfest] | new-features |
| chore(prompt) ベースプロンプトを更新 #7943 @[dylan-hurd-oai] | chore(prompt) Update base prompt #7943 @[dylan-hurd-oai] | new-features |
| Elevated Sandbox 4 #7889 @[iceweasel-oai] | Elevated Sandbox 4 #7889 @[iceweasel-oai] | new-features |
| chore(prompt) 切り詰めの詳細を削除 #7941 @[dylan-hurd-oai] | chore(prompt) Remove truncation details #7941 @[dylan-hurd-oai] | new-features |
| feat: クリーンな設定読み込みと config API #7924 @[jif-oai] | feat: clean config loading and config api #7924 @[jif-oai] | new-features |
| chores: モデルマネージャー #7937 @[aibrahim-oai] | chores: models manager #7937 @[aibrahim-oai] | new-features |
| API キーユーザー向けのリモートコンパクト #7835 @[pakrym-oai] | Remote compact for API-key users #7835 @[pakrym-oai] | new-features |
| chore(gpt-5.2) プロンプト更新 #7934 @[dylan-hurd-oai] | chore(gpt-5.2) prompt update #7934 @[dylan-hurd-oai] | new-features |
| 修正: rx サブスクリプションの競合状態 #7921 @[jif-oai] | fix: race on rx subscription #7921 @[jif-oai] | new-features |
| 修正: tui を中断 #7876 @[jif-oai] | fix: break tui #7876 @[jif-oai] | new-features |
| feat: より多くの安全なコマンド #7728 @[jif-oai] | feat: more safe commands #7728 @[jif-oai] | new-features |
| 修正(tui): gpt-5.2 の xhigh reasoning 警告を表示 #7910 @[voctory] | fix(tui): show xhigh reasoning warning for gpt-5.2 #7910 @[voctory] | new-features |
| スキル名と説明の制限をバイト数ではなく文字数ベースに変更 #7915 @[etraut-openai] | Make skill name and description limit based on characters not byte counts #7915 @[etraut-openai] | new-features |
| feat: pwsh.exe と powershell.exe を検出するユーティリティを導入 #7893 @[bolinfest] | feat: introduce utilities for locating pwsh.exe and powershell.exe #7893 @[bolinfest] | new-features |
| docs: gpt-5.2 の xhigh reasoning effort を明確化 #7911 @[voctory] | docs: clarify xhigh reasoning effort on gpt-5.2 #7911 @[voctory] | new-features |
| feat: MCP サーバーステータスに最新のディスク値を使用 #7907 @[shijie-oai] | feat: use latest disk value for mcp servers status #7907 @[shijie-oai] | new-features |
| "修正(apply-patch): Windows での CRLF 改行を保持" を Revert #7903 @[dylan-hurd-oai] | Revert "fix(apply-patch): preserve CRLF line endings on Windows" #7903 @[dylan-hurd-oai] | new-features |
| マイグレーション画面を動的に変更 #7896 @[aibrahim-oai] | Make migration screen dynamic #7896 @[aibrahim-oai] | new-features |
| xhigh モデルでの誤解を招く「maximize」high effort 説明を修正 #7874 @[voctory] | Fix misleading 'maximize' high effort description on xhigh models #7874 @[voctory] | new-features |
| "chat" wire_api の非推奨通知を追加 #7897 @[etraut-openai] | Added deprecation notice for "chat" wire_api #7897 @[etraut-openai] | new-features |
| WSL 2 下の Windows でのトーストを修正 #7137 @[dank-openai] | Fix toasts on Windows under WSL 2 #7137 @[dank-openai] | new-features |
| 修正: policy/*.codexpolicy -> rules/*.rules #7888 @[bolinfest] | fix: policy/*.codexpolicy -> rules/*.rules #7888 @[bolinfest] | new-features |
| RMCP クライアント設定ガイダンスを更新 #7895 @[nornagon-openai] | Update RMCP client config guidance #7895 @[nornagon-openai] | new-features |
| モデル情報を更新 #7853 @[aibrahim-oai] | Update Model Info #7853 @[aibrahim-oai] | new-features |
| Elevated Sandbox 3 #7809 @[iceweasel-oai] | Elevated Sandbox 3 #7809 @[iceweasel-oai] | new-features |
| リリーススクリプトを削除 #7885 @[aibrahim-oai] | remove release script #7885 @[aibrahim-oai] | new-features |
| Chore: find family の可視性を制限 #7891 @[aibrahim-oai] | Chore: limit find family visability #7891 @[aibrahim-oai] | new-features |
| 修正: ReasoningSummary::None の場合は reasoning summary を省略 #7845 @[apanasenko-oai] | fix: omit reasoning summary when ReasoningSummary::None #7845 @[apanasenko-oai] | new-features |
| 修正: nix 用の古い filedescriptor 出力ハッシュを削除 #7865 @[tyleranton] | fix: drop stale filedescriptor output hash for nix #7865 @[tyleranton] | new-features |
| 修正: オンボーディング ApiKeyEntry 状態で 'q' キーで終了しないように修正 #7869 @[sayan-oai] | fix: dont quit on 'q' in onboarding ApiKeyEntry state #7869 @[sayan-oai] | new-features |

## 0.64.0

| 日本語 | English | Category |
|--------|---------|----------|
| PowerShell の apply_patch パースを修正し、apply_patch テストが shell_command の動作をカバーするように対応 | PowerShell apply_patch parsing is corrected, and apply_patch tests now cover shell_command behavior. | bug-fixes |
| サンドボックス評価の回帰を修正し、ポリシー承認済みコマンドを尊重し、Windows での危険コマンドチェックを強化し、workspace-write で .git を読み取り専用に強制 | Sandbox assessment regression is fixed, policy-approved commands are honored, dangerous-command checks are tightened on Windows, and workspace-write enforces .git read-only. | bug-fixes |
| MCP 起動時に type フィールド欠落を許容し、ストリームエラーメッセージを明確化し、rmcp nix 出力ハッシュの問題を解決 | MCP startup tolerates missing type fields, stream error messages are clarified, and rmcp nix output hash issues are resolved. | bug-fixes |
| デリゲートキャンセルが統合実行をハングしないように修正し、早期終了セッションをクリーンアップし、重複する "waited" レンダリングを抑制 | Delegate cancellation no longer hangs unified exec, early-exit sessions are cleaned up, and duplicate “waited” renderings are suppressed. | bug-fixes |
| limit がゼロの場合の recent_commits がゼロを返すように修正し、NetBSD プロセス強化ビルドのブロックを解除 | recent_commits with limit zero now returns zero, and the NetBSD process-hardening build is unblocked. | bug-fixes |
| レビューロールアウトフィルタリングを無効化して履歴を表示し、承認プリセットが workspace-write を尊重し、/approvals の信頼検出を修正し、サンドボックスコマンド評価のエッジケースを修正 | Review rollout filtering is disabled so history shows, approval presets respect workspace-write, /approvals trust detection is corrected, and sandbox command assessment edge cases are fixed. | bug-fixes |
| コンパクション処理が暗号化推論を考慮し、トークン予算を正確に処理し、信頼性の高いトークン使用量とコンパクションイベントを出力 | Compaction accounts for encrypted reasoning, handles token budgets accurately, and emits reliable token-usage and compaction events. | bug-fixes |
| TTY stdin を必須化し、WSL クリップボードパスを正規化し、/new 実行時に古い会話を破棄して競合を回避 | TTY stdin is required, WSL clipboard paths are normalized, and stale conversations are dropped on /new to avoid conflicts. | bug-fixes |
| 大規模ペースト時のカスタムプロンプト展開を修正し、example-config のミスを訂正し、相対リンクと streamable_shell 参照をクリーンアップ。アップグレードメッセージを修正 | Custom prompt expansion with large pastes is fixed, example-config mistakes are corrected, and relative links and streamable_shell references are cleaned up. Upgrade messaging is corrected. | bug-fixes |
| Windows サンドボックスが <workspace_root>/.git を読み取り専用として扱い、リスクのあるブラウザ起動を実行前にフラグ化 | Windows sandbox treats <workspace_root>/.git as read-only, and risky browser launches are flagged before execution. | bug-fixes |
| CLA 許可リストに dependabot バリアントを追加し、エンタープライズがアップグレードチェックとメッセージをスキップ可能に | CLA allowlist now includes dependabot variants, and enterprises can skip upgrade checks and messages. | bug-fixes |
| 不安定なテストを安定化し、セッションリサイクリングを改善し、ロールアウトセッション初期化がエラーを表面化して診断可能に | Flaky tests are stabilized, session recycling is improved, and rollout session initialization surfaces errors for diagnosis. | bug-fixes |

## 0.63.0

| 日本語 | English | Category |
|--------|---------|----------|
| Web検索を有効にすると `Invalid value: 'other'.` エラーが発生するバグを修正 | Fixes the bug where enabling web search can lead to `Invalid value: 'other'.` errors. | bug-fixes |

## 0.39.0

| 日本語 | English | Category |
|--------|---------|----------|
| `/review` コマンドを追加 #3774 | new `/review` command introduced in #3774 | new-features |

## 0.38.0

| 日本語 | English | Category |
|--------|---------|----------|
| [#3806] 修正: gh コマンド呼び出し時に --repo を指定 | [#3806] fix: specify --repo when calling gh (#3806) | new-features |

## 0.34.0

| 日本語 | English | Category |
|--------|---------|----------|
| #3436: Codex が外部 MCP サーバーを初期化できない問題の緊急修正 | #3436: hotfix for issue that prevented Codex from initializing external MCP servers | new-features |

## 0.28.0

| 日本語 | English | Category |
|--------|---------|----------|
| [ハイライト] | [Highlights] | new-features |
| TUI の洗練と安定性の改善: タイピング遅延の削減、ストリーミングメッセージフォーマットの改善、エラーハンドリングの向上、入力動作の改善 | TUI polish and stability improvements: reduced typing lag, cleaner streamed message formatting, better error handling, and improved input behavior. | new-features |
| Windows ARM ビルドの信頼性向上とリリース時のビルド高速化 | Better Windows ARM build reliability and faster release-time builds. | new-features |
| [TUI/UX] | [TUI/UX] | new-features |
| タイピング遅延を修正 (#2922) | Fix laggy typing (#2922) | new-features |
| メッセージスタイルを明確化するために再設計 (#2877) | Rework message styling for clarity (#2877) | new-features |
| ストリーミングエージェントメッセージの余分な空白行を削除 (#3065) | Remove extra blank lines in streamed agent messages (#3065) | new-features |
| `AGENTS.md` が存在する場合に "/init" の提案を非表示化 (#3038) | Hide “/init” suggestion when `AGENTS.md` exists (#3038) | new-features |
| 空の入力で Enter キーを無視して空白メッセージのキューイングを回避 (#3047) | Ignore Enter on empty input to avoid queuing blank messages (#3047) | new-features |
| クラッシュを回避するため `get_cursor_position` エラーをキャッチ (#2870) | Catch `get_cursor_position` errors to avoid crashes (#2870) | new-features |
| 無効化コマンドメッセージから余分な引用符を削除 (#3035) | Remove extra quote from disabled-command message (#3035) | new-features |
| [ビルド & CI] | [Build & CI] | new-features |
| Windows ARM ビルドに Windows 11 ARM を活用 (#3062) | Leverage Windows 11 ARM for Windows ARM builds (#3062) | new-features |
| リリース用 Windows 11 ARM イメージに `zstd` をインストール (#3066) | Install `zstd` on Windows 11 ARM image used for releases (#3066) | new-features |
| PR オープン時にリリースビルド用の Windows キャッシュを事前作成 (#2884) | Populate Windows cache for release builds when PRs are opened (#2884) | new-features |
| [ドキュメント] | [Docs] | new-features |
| 設定リファレンステーブルを修正 (#3063) | Fix config reference table (#3063) | new-features |
| ドキュメントリファクタリング後の PR テンプレートリンクを更新 (#2982) | Update PR template link after docs refactor (#2982) | new-features |
| [ログ/テレメトリ] | [Logging/Telemetry] | new-features |
| ユーザーがモデルを変更した際のログを追加 (#3060) | Add logs when users change the model (#3060) | new-features |
| [依存関係] | [Dependencies] | new-features |
| `codex-rs` の `regex-lite` を 0.1.7 にアップデート (#3010) | Bump `regex-lite` to 0.1.7 in `codex-rs` (#3010) | new-features |
| [#3066](https://github.com/openai/codex/pull/3066) fix: リリースに使用する windows-11-arm イメージに zstd をインストール | [#3066](https://github.com/openai/codex/pull/3066) fix: install zstd on the windows-11-arm image used to cut a release | new-features |
| [#3065](https://github.com/openai/codex/pull/3065) tui: ストリーミングエージェントメッセージの余分な空白行を修正 | [#3065](https://github.com/openai/codex/pull/3065) tui: fix extra blank lines in streamed agent messages | new-features |
| [#3063](https://github.com/openai/codex/pull/3063) 設定リファレンステーブルを修正 | [#3063](https://github.com/openai/codex/pull/3063) fix config reference table | new-features |
| [#3062](https://github.com/openai/codex/pull/3062) fix: Windows ARM ビルドに windows-11-arm を活用 | [#3062](https://github.com/openai/codex/pull/3062) fix: leverage windows-11-arm for Windows ARM builds | new-features |
| [#3060](https://github.com/openai/codex/pull/3060) ユーザーがモデルを変更したタイミングを把握するログを追加 | [#3060](https://github.com/openai/codex/pull/3060) Add logs to know when we users are changing the model | new-features |
| [#3047](https://github.com/openai/codex/pull/3047) バグ修正: 空の入力で Enter キーを無視して空白メッセージのキューイングを回避 | [#3047](https://github.com/openai/codex/pull/3047) Bug fix: ignore Enter on empty input to avoid queuing blank messages | new-features |
| [#3038](https://github.com/openai/codex/pull/3038) tui: AGENTS.md が存在する場合に '/init' の提案を非表示化 | [#3038](https://github.com/openai/codex/pull/3038) tui: hide '/init' suggestion when AGENTS.md exists | new-features |
| [#3035](https://github.com/openai/codex/pull/3035) 無効化コマンドメッセージから余分な引用符を削除 | [#3035](https://github.com/openai/codex/pull/3035) remove extra quote from disabled-command message | new-features |
| [#3010](https://github.com/openai/codex/pull/3010) chore(deps): codex-rs の regex-lite を 0.1.6 から 0.1.7 にアップデート | [#3010](https://github.com/openai/codex/pull/3010) chore(deps): bump regex-lite from 0.1.6 to 0.1.7 in /codex-rs | new-features |
| [#2982](https://github.com/openai/codex/pull/2982) 修正: ドキュメントリファクタリング後の正しいリンクに PR テンプレートを適応 | [#2982](https://github.com/openai/codex/pull/2982) Fix: Adapt pr template with correct link following doc refacto | new-features |
| [#2922](https://github.com/openai/codex/pull/2922) tui: タイピング遅延を修正 | [#2922](https://github.com/openai/codex/pull/2922) tui: fix laggy typing | new-features |
| [#2884](https://github.com/openai/codex/pull/2884) fix: PR がレビュー待ちになったときにリリースビルド用の Windows キャッシュを事前作成 | [#2884](https://github.com/openai/codex/pull/2884) fix: try to populate the Windows cache for release builds when PRs are put up for review | new-features |
| [#2877](https://github.com/openai/codex/pull/2877) メッセージスタイルを再設計 | [#2877](https://github.com/openai/codex/pull/2877) rework message styling | new-features |
| [#2870](https://github.com/openai/codex/pull/2870) tui: get_cursor_position エラーをキャッチ | [#2870](https://github.com/openai/codex/pull/2870) tui: catch get_cursor_position errors | new-features |

## 0.26.0

| 日本語 | English | Category |
|--------|---------|----------|
| `~/.codex/prompts` からカスタム `/prompts` を読み込み (#2696) | Custom `/prompts` loaded from `~/.codex/prompts` (#2696) | new-features |
| Codex がローカル画像をエージェント的に表示できる新しい「View Image」ツール (#2723) | New "View Image" tool to let Codex agentically view local images (#2723) | new-features |
| 解決された設定を検査する MCP `GetConfig` エンドポイント (#2725) | MCP `GetConfig` endpoint to inspect resolved settings (#2725) | new-features |

## 0.25.0

| 日本語 | English | Category |
|--------|---------|----------|
| Core: 長時間稼働サーバーで手動クリーンアップを行うための remove_conversation API を追加 (#2613) | Core: remove_conversation API for manual cleanup in long‑lived servers (#2613) | new-features |
| TUI: トランスクリプト/差分ビューでマウスホイールによる代替スクロールに対応 (#2686) | TUI: mouse wheel alternate scrolling in transcript/diff views (#2686) | new-features |
| TUI: Alt+Ctrl+H で前の単語を削除できるように対応（Alt+Backspace と同等） (#2717) | TUI: Alt+Ctrl+H deletes the previous word (parity with Alt+Backspace) (#2717) | new-features |
| Execution: task_started イベントにコンテキストウィンドウを含めるように変更。ターンごとにモデルが異なる場合に対応 (#2752) | Execution: include context window on task_started events; model may vary per turn (#2752) | new-features |

## 0.24.0

| 日本語 | English | Category |
|--------|---------|----------|
| メッセージのキューイング (#2637) | Queued messages (#2637) | new-features |
| 画像ファイルのコピー&ペースト / ドラッグ&ドロップ (#2567) | Copy Paste / Drag & Drop image files (#2567) | new-features |
| スクロール可能なトランスクリプトモード (Ctrl+T) (#2525) | Transcript mode (Ctrl+T) with scrolling ability (#2525) | new-features |
| 前のメッセージからの会話の編集/再開 (esc-esc) (#2607) | Edit/resume conversation (esc-esc) from previous messages (#2607) | new-features |
| --search オプション使用時のWeb検索 (#2371) | Web search when using explicit --search option (#2371) | new-features |

## 0.23.0

| 日本語 | English | Category |
|--------|---------|----------|
| ハイライト | Highlights | new-features |
| 新しいコマンドと制御機能: TUI で `/mcp` をサポート (#2430) および承認制御用のスラッシュコマンド `/approvals` を追加 (#2474) | New commands and controls: support `/mcp` in TUI (#2430) and a slash command `/approvals` to control approvals (#2474). | new-features |
| 推論制御: 実行時に推論の労力とモデルを変更可能に (#2435) `/model`; GPT-5 モデル用に「minimal」労力を追加 (#2326) | Reasoning controls: change reasoning effort and model at runtime (#2435) `/model`; add “minimal” effort for GPT‑5 models (#2326). | new-features |
| 認証の改善: ChatGPT でサインインしていない場合にログインオプションを表示 (#2440) および ChatGPT 認証トークンの自動更新 (#2484) | Auth improvements: show login options when not signed in with ChatGPT (#2440) and auto‑refresh ChatGPT auth token (#2484). | new-features |
| UI/UX の改善: Ghostty の Ctrl-b/Ctrl-f フォールバック (#2427)、Ctrl+H をバックスペースとして対応 (#2412)、タブ補完後のカーソル位置の調整 (#2442)、色とアクセシビリティの更新 (#2401, #2421) | UI/UX polish: Ghostty Ctrl‑b/Ctrl‑f fallback (#2427), Ctrl+H as backspace (#2412), cursor position tweak after tab completion (#2442), color/accessibility updates (#2401, #2421). | new-features |
| 配布/インフラ: リリースに zip アーカイブバイナリを追加 (#2438) および Windows x86_64 用 DotSlash エントリ (#2361); Rust 1.89 へアップグレード (#2465, #2467) | Distribution/infra: zip archived binaries added to releases (#2438) and DotSlash entry for Windows x86_64 (#2361); upgraded to Rust 1.89 (#2465, #2467). | new-features |
| マージされた PR の完全リスト | Full list of merged PRs | new-features |
| [#2352](https://github.com/openai/codex/pull/2352) tui: ローカルコンポーザー履歴で同一の連続エントリをスキップ | [#2352](https://github.com/openai/codex/pull/2352) tui: skip identical consecutive entries in local composer history | new-features |
| [#2355](https://github.com/openai/codex/pull/2355) fix: codex-protocol クレートを導入 | [#2355](https://github.com/openai/codex/pull/2355) fix: introduce codex-protocol crate | new-features |
| [#2326](https://github.com/openai/codex/pull/2326) 修正 #2296 GPT-5 モデル用に「minimal」推論労力を追加 | [#2326](https://github.com/openai/codex/pull/2326) Fix #2296 Add "minimal" reasoning effort for GPT 5 models | new-features |
| [#2357](https://github.com/openai/codex/pull/2357) 重複した「ログインに成功しました」メッセージを削除 | [#2357](https://github.com/openai/codex/pull/2357) Remove duplicated "Successfully logged in message" | new-features |
| [#2337](https://github.com/openai/codex/pull/2337) パッチ適用サマリーでステータス文字に色を付ける | [#2337](https://github.com/openai/codex/pull/2337) color the status letter in apply patch summary | new-features |
| [#2336](https://github.com/openai/codex/pull/2336) chore: 重複したロックファイルを削除 | [#2336](https://github.com/openai/codex/pull/2336) chore: remove duplicated lockfile | new-features |
| [#2361](https://github.com/openai/codex/pull/2361) fix: 生成された DotSlash ファイルに windows-x86_64 用エントリを追加 | [#2361](https://github.com/openai/codex/pull/2361) fix: include an entry for windows-x86_64 in the generated DotSlash file | new-features |
| [#2245](https://github.com/openai/codex/pull/2245) /diff コマンドに進捗インジケーターを表示 | [#2245](https://github.com/openai/codex/pull/2245) Show progress indicator for /diff command | new-features |
| [#2314](https://github.com/openai/codex/pull/2314) /prompts をローテーションするプレースホルダーに置き換え | [#2314](https://github.com/openai/codex/pull/2314) replace /prompts with a rotating placeholder | new-features |
| [#2372](https://github.com/openai/codex/pull/2372) 実行中の codex CLI プロセスへのアタッチ用起動プロファイルを追加 | [#2372](https://github.com/openai/codex/pull/2372) Added launch profile for attaching to a running codex CLI process | new-features |
| [#2373](https://github.com/openai/codex/pull/2373) ChatGPT を使用した認証を有効にする MCP サーバーコマンドを追加 | [#2373](https://github.com/openai/codex/pull/2373) Added MCP server command to enable authentication using ChatGPT | new-features |
| [#2388](https://github.com/openai/codex/pull/2388) fix: login/src/server.rs をリファクタリングして process_request() を独立した関数に | [#2388](https://github.com/openai/codex/pull/2388) fix: refactor login/src/server.rs so process_request() is a separate function | new-features |
| [#2365](https://github.com/openai/codex/pull/2365) fix: EventMsg::TurnAborted を導入 | [#2365](https://github.com/openai/codex/pull/2365) fix: introduce EventMsg::TurnAborted | new-features |
| [#2360](https://github.com/openai/codex/pull/2360) mcp-server/src/mcp_protocol.rs とそれに依存するコードを削除 | [#2360](https://github.com/openai/codex/pull/2360) remove mcp-server/src/mcp_protocol.rs and the code that depends on it | new-features |
| [#2401](https://github.com/openai/codex/pull/2401) fix: スタイルと色をクリーンアップし styles.md で定義 | [#2401](https://github.com/openai/codex/pull/2401) fix: clean up styles & colors and define in styles.md | new-features |
| [#2411](https://github.com/openai/codex/pull/2411) chore(deps-dev): /.github/actions/codex の @types/node をバンプ | [#2411](https://github.com/openai/codex/pull/2411) chore(deps-dev): bump @types/node in /.github/actions/codex | new-features |
| [#2421](https://github.com/openai/codex/pull/2421) fix: ANSI blue の使用を停止 | [#2421](https://github.com/openai/codex/pull/2421) fix: stop using ANSI blue | new-features |
| [#2423](https://github.com/openai/codex/pull/2423) chore: mcp-server/src/wire_format.rs を protocol/src/mcp_protocol.rs に移動 | [#2423](https://github.com/openai/codex/pull/2423) chore: move mcp-server/src/wire_format.rs to protocol/src/mcp_protocol.rs | new-features |
| [#2424](https://github.com/openai/codex/pull/2424) chore: 生成された mcp-types に TS アノテーションを追加 | [#2424](https://github.com/openai/codex/pull/2424) chore: add TS annotation to generated mcp-types | new-features |
| [#2428](https://github.com/openai/codex/pull/2428) 推論列挙型を 1 つに統合 | [#2428](https://github.com/openai/codex/pull/2428) consolidate reasoning enums into one | new-features |
| [#2431](https://github.com/openai/codex/pull/2431) 現在のタスクコンテキストを上書きする操作を追加 | [#2431](https://github.com/openai/codex/pull/2431) Add an operation to override current task context | new-features |
| [#2425](https://github.com/openai/codex/pull/2425) protocol-ts | [#2425](https://github.com/openai/codex/pull/2425) protocol-ts | new-features |
| [#2432](https://github.com/openai/codex/pull/2432) UserTurn のキャッシュテストを追加 | [#2432](https://github.com/openai/codex/pull/2432) Add cache tests for UserTurn | new-features |
| [#2412](https://github.com/openai/codex/pull/2412) 修正 #2391 Ctrl+H をバックスペースキーボードショートカットとして追加 | [#2412](https://github.com/openai/codex/pull/2412) Fix #2391 Add Ctrl+H as backspace keyboard shortcut | new-features |
| [#2405](https://github.com/openai/codex/pull/2405) chore(deps): /codex-rs の anyhow をバンプ | [#2405](https://github.com/openai/codex/pull/2405) chore(deps): bump anyhow in /codex-rs | new-features |
| [#2406](https://github.com/openai/codex/pull/2406) chore(deps): /codex-rs の libc をバンプ | [#2406](https://github.com/openai/codex/pull/2406) chore(deps): bump libc in /codex-rs | new-features |
| [#2389](https://github.com/openai/codex/pull/2389) chore: expect() より Err を返すことを優先 | [#2389](https://github.com/openai/codex/pull/2389) chore: prefer returning Err to expect() | new-features |
| [#2393](https://github.com/openai/codex/pull/2393) fix: ログインフローを非同期化 | [#2393](https://github.com/openai/codex/pull/2393) fix: async-ify login flow | new-features |
| [#2404](https://github.com/openai/codex/pull/2404) chore(deps): /codex-rs の clap をバンプ | [#2404](https://github.com/openai/codex/pull/2404) chore(deps): bump clap in /codex-rs | new-features |
| [#2394](https://github.com/openai/codex/pull/2394) fix: `shutdown_flag` を `Arc<AtomicBool>` から `tokio::sync::Notify` に変更 | [#2394](https://github.com/openai/codex/pull/2394) fix: change `shutdown_flag` from `Arc<AtomicBool>` to `tokio::sync::Notify` | new-features |
| [#2438](https://github.com/openai/codex/pull/2438) zip アーカイブバイナリをリリース | [#2438](https://github.com/openai/codex/pull/2438) Release zip archived binaries | new-features |
| [#2395](https://github.com/openai/codex/pull/2395) fix: ServerOptions.login_timeout を削除し tokio::time::timeout() を使用 | [#2395](https://github.com/openai/codex/pull/2395) fix: eliminate ServerOptions.login_timeout and use tokio::time::timeout() | new-features |
| [#2396](https://github.com/openai/codex/pull/2396) fix: ShutdownHandle を LoginServer のプライベートフィールドに | [#2396](https://github.com/openai/codex/pull/2396) fix: make ShutdownHandle a private field of LoginServer | new-features |
| [#2398](https://github.com/openai/codex/pull/2398) fix: codex-login クレート内の Server への参照を削減 | [#2398](https://github.com/openai/codex/pull/2398) fix: reduce references to Server in codex-login crate | new-features |
| [#2399](https://github.com/openai/codex/pull/2399) fix: run_login_server() から shutdown_flag パラメータを削除 | [#2399](https://github.com/openai/codex/pull/2399) fix: remove shutdown_flag param to run_login_server() | new-features |
| [#2403](https://github.com/openai/codex/pull/2403) chore(deps): /codex-rs の clap_complete をバンプ | [#2403](https://github.com/openai/codex/pull/2403) chore(deps): bump clap_complete in /codex-rs | new-features |
| [#2440](https://github.com/openai/codex/pull/2440) ChatGPT でサインインしていない場合にログインオプションを表示 | [#2440](https://github.com/openai/codex/pull/2440) Show login options when not signed in with ChatGPT | new-features |
| [#2446](https://github.com/openai/codex/pull/2446) fix: コンテキスト残量 % からシステムプロンプト等を除外 | [#2446](https://github.com/openai/codex/pull/2446) fix: exclude sysprompt etc from context left % | new-features |
| [#2430](https://github.com/openai/codex/pull/2430) [tui] /mcp コマンドをサポート | [#2430](https://github.com/openai/codex/pull/2430) [tui] Support /mcp command | new-features |
| [#2442](https://github.com/openai/codex/pull/2442) 修正 #2429 タブ補完後のカーソル位置を調整 | [#2442](https://github.com/openai/codex/pull/2442) Fix #2429 Tweak the cursor position after tab completion | new-features |
| [#2457](https://github.com/openai/codex/pull/2457) fix: レビュー決定レスポンスでのスペース欠落を修正 | [#2457](https://github.com/openai/codex/pull/2457) fix: fix missing spacing in review decision response | new-features |
| [#2427](https://github.com/openai/codex/pull/2427) tui: Ghostty の Ctrl-b/Ctrl-f フォールバックをサポート | [#2427](https://github.com/openai/codex/pull/2427) tui: support Ghostty Ctrl-b/Ctrl-f fallback | new-features |
| [#2407](https://github.com/openai/codex/pull/2407) chore(deps): actions/checkout を 4 から 5 にバンプ | [#2407](https://github.com/openai/codex/pull/2407) chore(deps): bump actions/checkout from 4 to 5 | new-features |
| [#2435](https://github.com/openai/codex/pull/2435) 推論労力の変更をサポート | [#2435](https://github.com/openai/codex/pull/2435) Support changing reasoning effort | new-features |
| [#2462](https://github.com/openai/codex/pull/2462) feat: /status のセッション ID 箇条書きを移動 | [#2462](https://github.com/openai/codex/pull/2462) feat: move session ID bullet in /status | new-features |
| [#2464](https://github.com/openai/codex/pull/2464) docs: sandbox_workspace_write の writable_roots をドキュメント化 | [#2464](https://github.com/openai/codex/pull/2464) docs: document writable_roots for sandbox_workspace_write | new-features |
| [#2466](https://github.com/openai/codex/pull/2466) fix: 時間とスペース節約のため `cargo build` より `cargo check` を優先 | [#2466](https://github.com/openai/codex/pull/2466) fix: prefer `cargo check` to `cargo build` to save time and space | new-features |
| [#2465](https://github.com/openai/codex/pull/2465) chore: Rust 1.89 へアップグレード | [#2465](https://github.com/openai/codex/pull/2465) chore: upgrade to Rust 1.89 | new-features |
| [#2467](https://github.com/openai/codex/pull/2467) chore: Rust 1.89 でファイルロックが標準ライブラリに昇格 | [#2467](https://github.com/openai/codex/pull/2467) chore: Rust 1.89 promoted file locking to stdlib | new-features |
| [#2468](https://github.com/openai/codex/pull/2468) 1 つのファイルのみがレンダリングされた場合のパッチ適用を修正 | [#2468](https://github.com/openai/codex/pull/2468) fix apply patch when only one file is rendered | new-features |
| [#2475](https://github.com/openai/codex/pull/2475) 修正: 他のプロバイダーを使用している場合でもサインインが表示される問題 | [#2475](https://github.com/openai/codex/pull/2475) Fix: Sign in appear even if using other providers. | new-features |
| [#2460](https://github.com/openai/codex/pull/2460) Rust ツールチェーンの Dependabot 更新を有効化 | [#2460](https://github.com/openai/codex/pull/2460) Enable Dependabot updates for Rust toolchain | new-features |
| [#2476](https://github.com/openai/codex/pull/2476) Diff コマンド | [#2476](https://github.com/openai/codex/pull/2476) Diff command | new-features |
| [#2487](https://github.com/openai/codex/pull/2487) クライアントヘッダー | [#2487](https://github.com/openai/codex/pull/2487) Client headers | new-features |
| [#2484](https://github.com/openai/codex/pull/2484) ChatGPT 認証トークンを更新 | [#2484](https://github.com/openai/codex/pull/2484) Refresh ChatGPT auth token | new-features |
| [#2495](https://github.com/openai/codex/pull/2495) fix: 環境変数より設定変数を優先 | [#2495](https://github.com/openai/codex/pull/2495) fix: prefer config var to env var | new-features |
| [#2474](https://github.com/openai/codex/pull/2474) パーミッション制御用のスラッシュコマンドを追加 | [#2474](https://github.com/openai/codex/pull/2474) Add a slash command to control permissions | new-features |

## 0.22.0

| 日本語 | English | Category |
|--------|---------|----------|
| https://github.com/openai/codex/pull/2294 ログインサーバーを Python から Rust に移行し、https://github.com/openai/codex/issues/2000 と https://github.com/openai/codex/issues/2044 の両方の問題に対応 | https://github.com/openai/codex/pull/2294 moves the login server from Python to Rust, which should help with both https://github.com/openai/codex/issues/2000 and https://github.com/openai/codex/issues/2044. | new-features |
| https://github.com/openai/codex/pull/2029 Markdown ストリーミングのサポートを追加 | https://github.com/openai/codex/pull/2029 adds support for markdown streaming | new-features |
| https://github.com/openai/codex/pull/2270 明るい背景使用時に差分表示がより読みやすくなるよう UI を改善 | https://github.com/openai/codex/pull/2270 improves the UI treatment of diffs so they are more readable when using a light background | new-features |
| https://github.com/openai/codex/pull/2113 `ctrl-z` で TUI を一時停止できるように対応 | https://github.com/openai/codex/pull/2113 `ctrl-z` can be used to suspend the TUI | new-features |

## 0.21.0

| 日本語 | English | Category |
|--------|---------|----------|
| https://github.com/openai/codex/pull/2200 より良いキャッシングのためにプロンプトキャッシュキーを送信（トークン効率が向上するはず！） | https://github.com/openai/codex/pull/2200 send prompt cache key for better caching (should improve token efficiency!) | new-features |
| https://github.com/openai/codex/pull/2202 複数行コマンドを分割して可読性を向上 | https://github.com/openai/codex/pull/2202 split multiline commands to improve readability | new-features |
| https://github.com/openai/codex/pull/2095 exec コマンドを解析し、UI でより見やすくフォーマット | https://github.com/openai/codex/pull/2095 Parse exec commands and format them more nicely in the UI | new-features |
| https://github.com/openai/codex/pull/2186 `applypatch` コマンドを `apply_patch` コマンド文字列として認識 | https://github.com/openai/codex/pull/2186 recognize `applypatch` command as `apply_patch` command string | new-features |
| https://github.com/openai/codex/pull/2183 出力が切り詰められたことをツール呼び出し結果に含め、モデルが期待した完全な出力を取得できなかったことを通知 | https://github.com/openai/codex/pull/2183 Include output truncation message in tool call results to tell the model when it did not get the full output from a command that it might have expected | new-features |
| https://github.com/openai/codex/pull/2162 `/compact` コマンド後にフィードバックメッセージを表示し、デルタが送信されなかった際の問題を修正 | https://github.com/openai/codex/pull/2162 show feedback message after `/compact` command, fixing an issue when no deltas were sent | new-features |
| https://github.com/openai/codex/pull/2050 `apply_patch` の差分プレビューを表示 | https://github.com/openai/codex/pull/2050 show diff preview for `apply_patch` | new-features |
| https://github.com/openai/codex/pull/1975 MCP ツールに対する JSON スキーマのサニタイズを追加し、内部 JsonSchema enum との互換性を確保 外部コントリビューター: @yaroslavyaroslav さんありがとう！ | https://github.com/openai/codex/pull/1975 add JSON schema sanitization for MCP tools to ensure compatibility with internal JsonSchema enum external contributor: Thanks @yaroslavyaroslav! | new-features |

## 0.20.0

| 日本語 | English | Category |
|--------|---------|----------|
| https://github.com/openai/codex/pull/2035 `@openai/codex` の `npm` リリースが、古い TypeScript CLI にフォールバックせず Rust CLI を実行するようになりました（TypeScript コードは https://github.com/openai/codex/pull/2048 でリポジトリから削除されました） | https://github.com/openai/codex/pull/2035 the `npm` release of `@openai/codex` now runs the Rust CLI instead of falling back to the old TypeScript CLI (TypeScript code was removed from the repo in https://github.com/openai/codex/pull/2048) | new-features |
| https://github.com/openai/codex/pull/2019 Windows に関する2つの問題を修正: | https://github.com/openai/codex/pull/2019 fixes two things for Windows: | new-features |
| Python プログラムを長い文字列引数ではなく一時ファイルに書き込むことで、ログインロジックの問題の一種を修正（なお、Python を Rust に置き換える予定です: https://github.com/openai/codex/pull/2047） | fixes one class of issues with login logic by writing Python program to a temp file instead of long string arg (FYI, we are planning to replace the Python with Rust: https://github.com/openai/codex/pull/2047) | new-features |
| すべての Windows ターミナルがサポートしているわけではないため、`PopKeyboardEnhancementFlags` の失敗を無視するように変更 | ignores `PopKeyboardEnhancementFlags` failure since not all Windows terminals support it | new-features |
| https://github.com/openai/codex/pull/2042 `codex login` における Python 証明書の問題を改善/修正: https://github.com/openai/codex/issues/2044 | https://github.com/openai/codex/pull/2042 should help/fix the Python certificates issue with `codex login`: https://github.com/openai/codex/issues/2044 | new-features |

## 0.16.0

| 日本語 | English | Category |
|--------|---------|----------|
| キャパシティに関するエラーメッセージの小さな修正: https://github.com/openai/codex/pull/1947 | Small fix for an error message around capacity: https://github.com/openai/codex/pull/1947 | new-features |
| より重要なアップグレードは 0.15.0 へのものです: https://github.com/openai/codex/releases/rust-v0.15.0 | Though the more significant upgrade today is to 0.15.0: https://github.com/openai/codex/releases/rust-v0.15.0 | new-features |

## 0.13.0

| 日本語 | English | Category |
|--------|---------|----------|
| https://github.com/openai/gpt-oss | https://github.com/openai/gpt-oss | new-features |
| `--oss` フラグを導入して gpt-oss モデルを使用可能に | https://github.com/openai/codex/pull/1848 | new-features |

## 0.12.0

| 日本語 | English | Category |
|--------|---------|----------|
| 0.11.0 で発生した不具合 (https://github.com/openai/codex/issues/1796) を修正する https://github.com/openai/codex/pull/1826 を含む | Includes https://github.com/openai/codex/pull/1826 to fix a regression introduced in 0.11.0: https://github.com/openai/codex/issues/1796. | new-features |

## 0.11.0

| 日本語 | English | Category |
|--------|---------|----------|
| https://github.com/openai/codex/issues/1247 コピー&ペーストが動作するように修正 | https://github.com/openai/codex/issues/1247 copy/paste works now | new-features |
| https://github.com/openai/codex/issues/1502 ターミナルのネイティブスクロールを使用するように変更 | https://github.com/openai/codex/issues/1502 use the terminal's native scrolling | new-features |
| https://github.com/openai/codex/pull/1527 `/compact` コマンドのサポートを追加 | https://github.com/openai/codex/pull/1527 adds support for the `/compact` command | new-features |
| https://github.com/openai/codex/pull/1726 実験的なプランニングツールを導入 | https://github.com/openai/codex/pull/1726 introduces an experimental planning tool | new-features |
| https://github.com/openai/codex/pull/1705 セッションのサンドボックス内で `apply_patch` が実行されることを保証するセキュリティ修正 | https://github.com/openai/codex/pull/1705 security fix to ensure `apply_patch` is run through the sandbox for the session | new-features |
| https://github.com/openai/codex/pull/1764 CLI が新しいバージョンをチェックし、古いバージョンを使用している場合に通知する機能を追加 | https://github.com/openai/codex/pull/1764 CLI now checks for new versions and lets you know if you are out of date | new-features |

## 0.9.0

| 日本語 | English | Category |
|--------|---------|----------|
| `codex mcp` への多数の修正 | Numerous fixes to `codex mcp`. | new-features |
| `codex` が終了した際にCodexが生成したシェルコマンドが `SIGTERM` を受け取るようにする修正（Linuxのみ）https://github.com/openai/codex/pull/1626 | https://github.com/openai/codex/pull/1626 to ensure shell commands spawned by Codex get `SIGTERM` when `codex` is killed (Linux only) | new-features |
| ripgrep/`rg` の特定のフラグを自動承認しないように修正 https://github.com/openai/codex/pull/1644 | Do not auto-approve certain flags for ripgrep/`rg` https://github.com/openai/codex/pull/1644 | new-features |

## 0.8.0

| 日本語 | English | Category |
|--------|---------|----------|
| https://github.com/openai/codex/pull/1594 により、TUIおよび `codex exec` 使用時にモデルからのレスポンスをストリーミングするようになりました | As of https://github.com/openai/codex/pull/1594, we now stream the response from the model in the TUI and when using `codex exec` | new-features |
| https://github.com/openai/codex/pull/1589 で `ctrl-d` の動作を変更し、コンポーザーが空の場合のみTUIを終了するようにしました(Codexエージェントが処理中でコンポーザーが非表示の場合は引き続きTUIを終了します) | https://github.com/openai/codex/pull/1589 changes `ctrl-d` so it only exits the TUI if the composer is empty (it will still exit the TUI if the composer is hidden because the Codex agent is thinking) | new-features |
| https://github.com/openai/codex/pull/1596 により `~/.codex/sessions` フォルダの構成が変更され、`YYYY/MM/DD` のサブフォルダを持つようになりました。これにより最近のセッションを見つけやすくなり、以前は `~/.codex/sessions` に無制限にエントリが増える可能性があったファイルシステムのパフォーマンス低下を回避できます | As a heads up, https://github.com/openai/codex/pull/1596 changes the organization of the `~/.codex/sessions` folder so it has `YYYY/MM/DD` subfolders. This should make it easier to find recent sessions and avoid degrading filesystem performance because previously `~/.codex/sessions` could end up with an unbounded number of entries | new-features |
| https://github.com/openai/codex/pull/1571 で長いMCPツール名を適切に処理できなかった長年の問題を修正しました(関連するGitHub issue: https://github.com/openai/codex/issues/1289) | https://github.com/openai/codex/pull/1571 fixes a longstanding issue where we failed to handle long MCP tool names gracefully (https://github.com/openai/codex/issues/1289 was the relevant GitHub issue) | new-features |
| https://github.com/openai/codex/pull/1603 で `codex exec` に `--json` フラグを追加し、標準出力にJSONL形式で出力できるようにしました | https://github.com/openai/codex/pull/1603 introduced a `--json` flag to `codex exec` so that it prints output as JSONL to stdout | new-features |
| https://github.com/openai/codex/pull/1590 で、`npm` バージョンのNode.jsスクリプト経由でCodex CLIを起動した際に、Codex CLIプロセスとNode.jsプロセスが一緒に終了するようにしましたが、https://github.com/openai/codex/issues/1570 の詳細によると、その特定の問題を修正するには不十分なようです | https://github.com/openai/codex/pull/1590 tries to ensure that when the Codex CLI is launched via the Node.js script in the `npm` version that both the Codex CLI process and Node.js process exit together, though from the additional details on https://github.com/openai/codex/issues/1570, it seems like it is not sufficient to fix that specific problem. | new-features |
| https://github.com/openai/codex/pull/1590 により、Windows上で `npm` バージョンがクラッシュするのではなく(当面は)TypeScriptバージョンにフォールバックするようになり、https://github.com/openai/codex/issues/1573 を修正しました | Though https://github.com/openai/codex/pull/1590 should make it so that, on Windows, the `npm` version will fall back to the TypeScript version (for now) rather than just crashing, fixing https://github.com/openai/codex/issues/1573. | new-features |

## 0.3.0

| 日本語 | English | Category |
|--------|---------|----------|
| 非ASCII文字がCLIをクラッシュさせる問題を修正: https://github.com/openai/codex/issues/1450 (@ryozi-tn による https://github.com/openai/codex/pull/1467 の修正に感謝) | Fixes an issue where non-ASCII characters were crashing the CLI: https://github.com/openai/codex/issues/1450 (huge thanks to @ryozi-tn for the fix in https://github.com/openai/codex/pull/1467) | new-features |
| `--sandbox` フラグのサポートを追加し、このオプションに関する `config.toml` の破壊的変更を実施。詳細は https://github.com/openai/codex/pull/1476 を参照 | Adds support for a `--sandbox` flag and makes some breaking changes to `config.toml` around this option. See https://github.com/openai/codex/pull/1476 for details. | new-features |
| モデルプロバイダーへのリクエスト時にカスタムHTTPヘッダーを設定可能に: https://github.com/openai/codex/pull/1473 | Makes it possible to configure custom HTTP headers when making requests to model providers: https://github.com/openai/codex/pull/1473. | new-features |

