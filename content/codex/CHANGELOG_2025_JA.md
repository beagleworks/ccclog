# OpenAI Codex 変更履歴 (2025年)

このファイルは OpenAI Codex の2025年リリース分の変更履歴を日本語で記載しています。

---

## 0.77.0

| 日本語 | English | Category |
|--------|---------|----------|
| TUI2: ターミナル間でマウスホイール + トラックパッドのスクロールを正規化し、`tui.scroll_*` 設定を追加（PR #8357） | TUI2: Normalize mouse wheel + trackpad scrolling across terminals; add `tui.scroll_*` config settings (PR #8357) | new-features |
| `requirements.toml` に `allowed_sandbox_modes` を追加し、許可されるサンドボックスモードを制限可能に（PR #8298） | Add `allowed_sandbox_modes` to `requirements.toml` to constrain permitted sandbox modes (PR #8298) | new-features |
| MCP: ストリーム可能な HTTP MCP サーバーの OAuth ログインで `rmcp_client` 機能フラグが不要に（PR #8087） | MCP: OAuth login for streamable HTTP MCP servers no longer requires the `rmcp_client` feature flag (PR #8087) | new-features |
| `codex-file-search` でファイル名導出を一元化し、ファジーファイル検索の表示と一貫性を改善（PR #8334） | Improve fuzzy file search display/consistency by centralizing file-name derivation in `codex-file-search` (PR #8334) | new-features |
| バンドルされたモデルメタデータ（`models.json`）を更新（PR #8168） | Update bundled model metadata (`models.json`) (PR #8168) | new-features |
| `/undo` が git のステージングやゴーストコミットに破壊的に作用する問題を修正（PR #8303） | Fix `/undo` interacting destructively with git staging / ghost commits (PR #8303) | bug-fixes |
| TUI2: トランスクリプトのスクロール中の冗長な再描画を削減（PR #8295） | TUI2: Reduce redundant redraws while scrolling transcripts (PR #8295) | bug-fixes |
| Docs: `experimental.md` 内の `contributing.md` へのリンクを修正（PR #8311） | Docs: Fix link to `contributing.md` in `experimental.md` (PR #8311) | bug-fixes |

## 0.76.0

| 日本語 | English | Category |
|--------|---------|----------|
| macOS DMG ビルドターゲットを追加 (PR #8207) | Add a macOS DMG build target (PR #8207) | new-features |
| 端末ごとのスクロール調整のための端末検出メタデータを改善 (PR #8252) | Improve terminal detection metadata for per-terminal scroll tuning (PR #8252) | new-features |
| スキルポップアップの UI を調整 (PR #8250) | UI tweaks on the skills popup (PR #8250) | new-features |
| TUI 検索セルのレンダリングを改善 (PR #8273) | TUI search cell rendering improvements (PR #8273) | new-features |
| /ps コマンドを追加 (PR #8279) | Add /ps command (PR #8279) | new-features |
| UNIX 環境での /etc/codex/requirements.toml に対応 (PR #8277) | Add support for /etc/codex/requirements.toml on UNIX (PR #8277) | new-features |
| スキルの shortDescription に対応 (PR #8278, PR #8301) | Support shortDescription for skills (PR #8278, PR #8301) | new-features |
| モデル一覧 UI を追加 (PR #8286) | Add model list UI (PR #8286) | new-features |
| app-server v2 廃止予定通知イベントを追加 (PR #8285) | Add app-server v2 deprecation notice event (PR #8285) | new-features |
| ExternalSandbox ポリシーを導入 (PR #8290) | Introduce ExternalSandbox policy (PR #8290) | new-features |
| スキルをデフォルトで有効化 (PR #8297) | Skills default on (PR #8297) | new-features |
| 管理者スコープのスキルに対応 (PR #8296) | Support admin-scoped skills (PR #8296) | new-features |
| バンドルされたシステムスキルを更新 (PR #8253, PR #8328) | Update bundled system skills (PR #8253, PR #8328) | new-features |
| app server で exclude のデフォルトを true に設定 (PR #8281) | Set exclude default to true in app server (PR #8281) | new-features |
| 制限付きサンドボックストークンでパイプが動作するよう修正 (PR #8280) | Ensure pipes work in restricted sandbox tokens (PR #8280) | bug-fixes |
| command-runner ディレクトリへの読み取り ACL をより早期に付与 (PR #8275) | Grant read ACL to the command-runner directory earlier (PR #8275) | bug-fixes |
| 重複する shell_snapshot FeatureSpec のリグレッションを修正 (PR #8274) | Fix duplicate shell_snapshot FeatureSpec regression (PR #8274) | bug-fixes |
| request への切り替えによりサンドボックス状態の更新順序を修正 (PR #8142) | Fix sandbox-state update ordering by switching to request (PR #8142) | bug-fixes |

## 0.75.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.74.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.73.0

| 日本語 | English | Category |
|--------|---------|----------|
| セッションキャプチャ改善のためのゴーストスナップショット v2 を追加 (PR #8055) | Add ghost snapshot v2 for improved session capture (PR #8055) | new-features |
| 設定でゴーストコミットをサポート (PR #7873) | Support ghost commits in config (PR #7873) | new-features |
| 一貫した検出のため SkillsManager と skills/list によるスキル読み込みを再実装 (PR | Reimplement skills loading via SkillsManager and skills/list for consistent discovery (PR | new-features |
| Codex に OpenTelemetry トレーシングを追加 (PR #7844) | Add OpenTelemetry tracing for Codex (PR #7844) | new-features |
| セッションに出力のないツール呼び出しが含まれる場合のパニックを防止 (PR #8048) | Prevent panic when session contains a tool call without an output (PR #8048) | bug-fixes |
| 入力バースト時にキーバインディング表示がトリガーされないように修正 (PR #7980) | Avoid triggering keybindings view on input bursts (PR #7980) | bug-fixes |
| デフォルトの折り返しアルゴリズムを OptimalFit から FirstFit に変更 (PR #7960) | Change default wrap algorithm from OptimalFit to FirstFit (PR #7960) | bug-fixes |
| サンドボックス設定の一部として AbsolutePathBuf を導入 (PR #7856) | Introduce AbsolutePathBuf as part of sandbox config (PR #7856) | bug-fixes |
| ログメッセージに Error を含めるように変更 (PR #7955) | Include Error in log messages (PR #7955) | bug-fixes |

## 0.72.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.71.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.69.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.66.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.65.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.64.0

| 日本語 | English | Category |
|--------|---------|----------|
| PowerShell の apply_patch パース処理を修正し、apply_patch テストが shell_command の動作をカバーするよう対応 | PowerShell apply_patch parsing is corrected, and apply_patch tests now cover shell_command behavior. | bug-fixes |
| サンドボックス評価の回帰を修正し、ポリシー承認済みコマンドを尊重、Windows での危険コマンドチェックを強化、workspace-write で .git を読み取り専用に強制 | Sandbox assessment regression is fixed, policy-approved commands are honored, dangerous-command checks are tightened on Windows, and workspace-write enforces .git read-only. | bug-fixes |
| MCP 起動時に type フィールドの欠落を許容し、ストリームエラーメッセージを明確化、rmcp nix 出力ハッシュ問題を解決 | MCP startup tolerates missing type fields, stream error messages are clarified, and rmcp nix output hash issues are resolved. | bug-fixes |
| 委譲キャンセル時の unified exec ハング問題を解消し、早期終了セッションをクリーンアップ、重複する "waited" レンダリングを抑制 | Delegate cancellation no longer hangs unified exec, early-exit sessions are cleaned up, and duplicate “waited” renderings are suppressed. | bug-fixes |
| limit がゼロの recent_commits がゼロを返すよう修正し、NetBSD のプロセス強化ビルドのブロックを解除 | recent_commits with limit zero now returns zero, and the NetBSD process-hardening build is unblocked. | bug-fixes |
| レビューロールアウトフィルタリングを無効化して履歴表示を修正し、承認プリセットが workspace-write を尊重、/approvals の信頼検出を修正、サンドボックスコマンド評価のエッジケースを修正 | Review rollout filtering is disabled so history shows, approval presets respect workspace-write, /approvals trust detection is corrected, and sandbox command assessment edge cases are fixed. | bug-fixes |
| 圧縮処理が暗号化された推論を考慮し、トークン予算を正確に処理、信頼性の高いトークン使用量と圧縮イベントを発行 | Compaction accounts for encrypted reasoning, handles token budgets accurately, and emits reliable token-usage and compaction events. | bug-fixes |
| TTY stdin を必須化し、WSL クリップボードパスを正規化、/new 実行時に競合を避けるため古い会話を破棄 | TTY stdin is required, WSL clipboard paths are normalized, and stale conversations are dropped on /new to avoid conflicts. | bug-fixes |
| 大量ペースト時のカスタムプロンプト展開を修正し、example-config の誤りを訂正、相対リンクと streamable_shell 参照をクリーンアップ、アップグレードメッセージを修正 | Custom prompt expansion with large pastes is fixed, example-config mistakes are corrected, and relative links and streamable_shell references are cleaned up. Upgrade messaging is corrected. | bug-fixes |
| Windows サンドボックスが <workspace_root>/.git を読み取り専用として扱い、危険なブラウザ起動を実行前にフラグ付け | Windows sandbox treats <workspace_root>/.git as read-only, and risky browser launches are flagged before execution. | bug-fixes |
| CLA 許可リストに dependabot バリアントを追加し、エンタープライズでアップグレードチェックとメッセージをスキップ可能に対応 | CLA allowlist now includes dependabot variants, and enterprises can skip upgrade checks and messages. | bug-fixes |
| 不安定なテストを安定化し、セッションリサイクルを改善、ロールアウトセッション初期化で診断用エラーを表示 | Flaky tests are stabilized, session recycling is improved, and rollout session initialization surfaces errors for diagnosis. | bug-fixes |

## 0.63.0

| 日本語 | English | Category |
|--------|---------|----------|
| ウェブ検索を有効にすると `Invalid value: 'other'.` エラーが発生するバグを修正 | Fixes the bug where enabling web search can lead to `Invalid value: 'other'.` errors. | bug-fixes |

## 0.61.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.60.1

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.59.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.58.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.57.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.56.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.55.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.54.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.53.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.52.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.50.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.49.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.48.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.47.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.46.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.45.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.44.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.42.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.41.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.40.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.39.0

| 日本語 | English | Category |
|--------|---------|----------|
| `/review` コマンドを追加（#3774） | new `/review` command introduced in #3774 | new-features |

## 0.38.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.37.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.36.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.35.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.34.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.33.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.32.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.31.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.30.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.29.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.28.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.27.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.26.0

| 日本語 | English | Category |
|--------|---------|----------|
| `~/.codex/prompts` からカスタム `/prompts` を読み込み可能に (#2696) | Custom `/prompts` loaded from `~/.codex/prompts` (#2696) | new-features |
| Codex がローカル画像を自律的に表示できる新しい「View Image」ツールを追加 (#2723) | New "View Image" tool to let Codex agentically view local images (#2723) | new-features |
| 解決済み設定を検査するための MCP `GetConfig` エンドポイントを追加 (#2725) | MCP `GetConfig` endpoint to inspect resolved settings (#2725) | new-features |

## 0.25.0

| 日本語 | English | Category |
|--------|---------|----------|
| Core: 長時間稼働サーバーで手動クリーンアップを行うための remove_conversation API を追加 (#2613) | Core: remove_conversation API for manual cleanup in long‑lived servers (#2613) | new-features |
| TUI: トランスクリプト/差分ビューでマウスホイールによる代替スクロールに対応 (#2686) | TUI: mouse wheel alternate scrolling in transcript/diff views (#2686) | new-features |
| TUI: Alt+Ctrl+H で前の単語を削除（Alt+Backspace と同等）に対応 (#2717) | TUI: Alt+Ctrl+H deletes the previous word (parity with Alt+Backspace) (#2717) | new-features |
| Execution: task_started イベントにコンテキストウィンドウを含めるよう変更、ターンごとにモデルが変わる可能性に対応 (#2752) | Execution: include context window on task_started events; model may vary per turn (#2752) | new-features |

## 0.24.0

| 日本語 | English | Category |
|--------|---------|----------|
| キューイングされたメッセージに対応 (#2637) | Queued messages (#2637) | new-features |
| 画像ファイルのコピー&ペースト/ドラッグ&ドロップに対応 (#2567) | Copy Paste / Drag & Drop image files (#2567) | new-features |
| スクロール可能なトランスクリプトモード (Ctrl+T) を追加 (#2525) | Transcript mode (Ctrl+T) with scrolling ability (#2525) | new-features |
| 過去のメッセージから会話を編集/再開 (esc-esc) する機能を追加 (#2607) | Edit/resume conversation (esc-esc) from previous messages (#2607) | new-features |
| 明示的な --search オプション使用時の Web 検索に対応 (#2371) | Web search when using explicit --search option (#2371) | new-features |

## 0.23.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.22.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.21.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.20.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.19.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.16.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.15.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.14.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.13.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.12.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.11.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.10.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.9.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.8.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.7.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.6.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.5.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.4.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.3.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

## 0.2.0

| 日本語 | English | Category |
|--------|---------|----------|
| (変更履歴のエントリはありません) | (No changelog entries) | chores |

