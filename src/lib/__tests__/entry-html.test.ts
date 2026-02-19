import { describe, it, expect } from 'vitest';
import { formatEntryHtml } from '../entry-html';

describe('formatEntryHtml', () => {
  it('Codex 英語エントリの #12345 形式を PR リンク化する', () => {
    const html = formatEntryHtml('Improve reliability (#2646, #2477)', {
      product: 'codex',
      language: 'en',
    });

    expect(html).toContain('https://github.com/openai/codex/pull/2646');
    expect(html).toContain('https://github.com/openai/codex/pull/2477');
    expect(html).toContain('>#2646<');
    expect(html).toContain('>#2477<');
  });

  it('Claude Code 英語エントリの anthropics/claude-code#12345 を PR リンク化する', () => {
    const html = formatEntryHtml('Fix bug (anthropics/claude-code#26188)', {
      product: 'claude-code',
      language: 'en',
    });

    expect(html).toContain('https://github.com/anthropics/claude-code/pull/26188');
    expect(html).toContain('anthropics/claude-code#26188');
  });

  it('日本語列では PR 表記をリンク化しない', () => {
    const html = formatEntryHtml('修正しました (#2646)', {
      product: 'codex',
      language: 'ja',
    });

    expect(html).toContain('(#2646)');
    expect(html).not.toContain('<a ');
  });

  it('バッククォート内の PR 表記は code 表示を優先しリンク化しない', () => {
    const html = formatEntryHtml('Use `anthropics/claude-code#100` and anthropics/claude-code#101', {
      product: 'claude-code',
      language: 'en',
    });

    expect(html).toContain('<code>anthropics/claude-code#100</code>');
    expect(html).toContain('https://github.com/anthropics/claude-code/pull/101');
    expect(html).not.toContain('https://github.com/anthropics/claude-code/pull/100');
  });

  it('HTML 特殊文字をエスケープする', () => {
    const html = formatEntryHtml('<script>alert("xss")</script>', {
      product: 'codex',
      language: 'en',
    });

    expect(html).toContain('&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;');
    expect(html).not.toContain('<script>');
  });

  it('Codex 英語: エスケープ後の &#39; を PR リンクと誤認しない', () => {
    const html = formatEntryHtml("Don't reload (#123)", {
      product: 'codex',
      language: 'en',
    });

    expect(html).not.toContain('/pull/39');
    expect(html).toContain('/pull/123');
  });
});
