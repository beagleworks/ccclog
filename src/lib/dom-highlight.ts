import { EN_TOKEN_REGEX_SOURCE } from './search-normalize';

function collectHighlightRanges(text: string, tokenSet: Set<string>): Array<{ start: number; end: number }> {
  const lowerText = text.toLowerCase();
  const tokenPattern = new RegExp(EN_TOKEN_REGEX_SOURCE, 'g');
  const ranges: Array<{ start: number; end: number }> = [];

  for (const match of lowerText.matchAll(tokenPattern)) {
    const token = match[0];
    const index = match.index;
    if (index === undefined) continue;
    if (!tokenSet.has(token)) continue;
    ranges.push({ start: index, end: index + token.length });
  }

  return ranges;
}

function replaceTextNodeWithHighlights(textNode: Text, ranges: Array<{ start: number; end: number }>): void {
  if (ranges.length === 0 || !textNode.parentNode) return;

  const text = textNode.nodeValue ?? '';
  const fragment = document.createDocumentFragment();
  let cursor = 0;

  ranges.forEach((range) => {
    if (range.start > cursor) {
      fragment.appendChild(document.createTextNode(text.slice(cursor, range.start)));
    }
    const mark = document.createElement('mark');
    mark.className = 'highlight-token';
    mark.textContent = text.slice(range.start, range.end);
    fragment.appendChild(mark);
    cursor = range.end;
  });

  if (cursor < text.length) {
    fragment.appendChild(document.createTextNode(text.slice(cursor)));
  }

  textNode.parentNode.replaceChild(fragment, textNode);
}

export function applyEnglishTokenHighlights(root: HTMLElement, tokens: string[]): void {
  const normalizedTokens = Array.from(new Set(tokens.map((token) => token.trim().toLowerCase()).filter(Boolean)));

  if (normalizedTokens.length === 0) return;
  const tokenSet = new Set(normalizedTokens);

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const textNodes: Text[] = [];

  let currentNode = walker.nextNode();
  while (currentNode) {
    const textNode = currentNode as Text;
    if (textNode.nodeValue) textNodes.push(textNode);
    currentNode = walker.nextNode();
  }

  textNodes.forEach((textNode) => {
    const original = textNode.nodeValue ?? '';
    if (!original) return;
    const ranges = collectHighlightRanges(original, tokenSet);
    replaceTextNodeWithHighlights(textNode, ranges);
  });
}
