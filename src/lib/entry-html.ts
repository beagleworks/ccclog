export type ChangelogProductId = 'claude-code' | 'codex';
export type EntryLanguage = 'ja' | 'en';

interface FormatEntryHtmlOptions {
  product: ChangelogProductId;
  language: EntryLanguage;
}

const CLAUDE_CODE_PR_PATTERN = /\banthropics\/claude-code#(\d+)\b/g;
const CODEX_PR_PATTERN = /(^|[^A-Za-z0-9_/&])#(\d+)\b/g;
const CODE_SPAN_PATTERN = /`([^`]+)`/g;

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function toPrAnchor(href: string, label: string): string {
  return `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;
}

function linkifyClaudeCodePrRefs(escapedText: string): string {
  return escapedText.replace(CLAUDE_CODE_PR_PATTERN, (_full, prNumber: string) => {
    const label = `anthropics/claude-code#${prNumber}`;
    return toPrAnchor(`https://github.com/anthropics/claude-code/pull/${prNumber}`, label);
  });
}

function linkifyCodexPrRefs(escapedText: string): string {
  return escapedText.replace(CODEX_PR_PATTERN, (_full, prefix: string, prNumber: string) => {
    const label = `#${prNumber}`;
    const anchor = toPrAnchor(`https://github.com/openai/codex/pull/${prNumber}`, label);
    return `${prefix}${anchor}`;
  });
}

function renderPlainSegment(rawText: string, options: FormatEntryHtmlOptions): string {
  const escaped = escapeHtml(rawText);
  if (options.language !== 'en') return escaped;

  if (options.product === 'codex') {
    return linkifyCodexPrRefs(escaped);
  }

  return linkifyClaudeCodePrRefs(escaped);
}

export function formatEntryHtml(rawText: string, options: FormatEntryHtmlOptions): string {
  let output = '';
  let lastIndex = 0;

  for (const match of rawText.matchAll(CODE_SPAN_PATTERN)) {
    const index = match.index ?? 0;
    const [fullMatch, codeContent] = match;

    if (index > lastIndex) {
      output += renderPlainSegment(rawText.slice(lastIndex, index), options);
    }

    output += `<code>${escapeHtml(codeContent)}</code>`;
    lastIndex = index + fullMatch.length;
  }

  if (lastIndex < rawText.length) {
    output += renderPlainSegment(rawText.slice(lastIndex), options);
  }

  if (!output) {
    return renderPlainSegment(rawText, options);
  }

  return output;
}
