// @vitest-environment jsdom

import { describe, expect, it } from 'vitest';
import { applyEnglishTokenHighlights, applyJapaneseSubstringHighlights } from '../dom-highlight';
import { formatEntryHtml } from '../entry-html';
import { applyRowHighlight, resetToAllRows, type SearchMode } from '../changelog-search-runtime';
import {
  isSingleJapaneseCharacterQuery,
  normalizeJapaneseText,
  tokenizeEnglish,
  toUniqueTokens,
} from '../search-normalize';

function createRow(ja: string, en: string): HTMLElement {
  const row = document.createElement('tr');
  row.className = 'entry-row';
  row.dataset.ja = ja;
  row.dataset.en = en;

  const jaCell = document.createElement('td');
  jaCell.className = 'entry-ja';
  jaCell.innerHTML = formatEntryHtml(ja, { product: 'claude-code', language: 'ja' });

  const enCell = document.createElement('td');
  enCell.className = 'entry-en';
  enCell.innerHTML = formatEntryHtml(en, { product: 'claude-code', language: 'en' });

  row.append(jaCell, enCell);
  return row;
}

function matchesEnglishCell(rawText: string, queryTokens: string[]): boolean {
  if (queryTokens.length === 0) return false;
  const textTokenSet = new Set(toUniqueTokens(tokenizeEnglish(rawText)));
  return queryTokens.every((token) => textTokenSet.has(token));
}

function matchesJapaneseCell(rawText: string, query: string, allowSingleJapanese: boolean): boolean {
  if (!allowSingleJapanese && isSingleJapaneseCharacterQuery(query)) {
    return false;
  }

  const normalizedQuery = normalizeJapaneseText(query);
  if (!normalizedQuery) return false;
  const normalizedText = normalizeJapaneseText(rawText);
  return normalizedText.includes(normalizedQuery);
}

function setJapaneseCellHtml(element: HTMLElement, rawText: string, query: string, highlight: boolean): void {
  element.innerHTML = formatEntryHtml(rawText, { product: 'claude-code', language: 'ja' });
  if (highlight) {
    applyJapaneseSubstringHighlights(element, query);
  }
}

function setEnglishCellHtml(element: HTMLElement, rawText: string, queryTokens: string[]): void {
  element.innerHTML = formatEntryHtml(rawText, { product: 'claude-code', language: 'en' });
  if (queryTokens.length > 0) {
    applyEnglishTokenHighlights(element, queryTokens);
  }
}

function applyHighlight(row: HTMLElement, query: string, mode: SearchMode, englishQueryTokens: string[]): void {
  applyRowHighlight({
    row,
    query,
    mode,
    allowSingleJapanese: true,
    englishQueryTokens,
    matchesEnglishCell,
    matchesJapaneseCell,
    setJapaneseCellHtml,
    setEnglishCellHtml,
  });
}

describe('changelog-search-runtime', () => {
  it('mode=both で日本語一致行のみ日本語ハイライトし、英語一致行は英語ハイライトする', () => {
    const query = 'MCP';
    const englishQueryTokens = toUniqueTokens(tokenizeEnglish(query));
    const japaneseMatchedRow = createRow('MCPサーバー設定を改善', 'Improve server settings');
    const englishMatchedRow = createRow('別の改善', 'Improve MCP server settings');

    applyHighlight(japaneseMatchedRow, query, 'both', englishQueryTokens);
    applyHighlight(englishMatchedRow, query, 'both', englishQueryTokens);

    expect(
      Array.from(japaneseMatchedRow.querySelectorAll('.entry-ja mark.highlight-token')).map((m) => m.textContent)
    ).toEqual(['MCP']);
    expect(japaneseMatchedRow.querySelectorAll('.entry-en mark.highlight-token').length).toBe(0);

    expect(englishMatchedRow.querySelectorAll('.entry-ja mark.highlight-token').length).toBe(0);
    expect(
      Array.from(englishMatchedRow.querySelectorAll('.entry-en mark.highlight-token')).map((m) => m.textContent)
    ).toEqual(['MCP']);
  });

  it('検索クリア時に hidden を解除し、既存ハイライトを除去して再描画する', () => {
    const query = 'MCP';
    const englishQueryTokens = toUniqueTokens(tokenizeEnglish(query));
    const monthGroup = document.createElement('section');
    monthGroup.className = 'month-group hidden';
    const versionSection = document.createElement('article');
    versionSection.className = 'version-section hidden';

    const row = createRow('MCPサーバー設定を改善', 'Improve MCP server settings');
    row.classList.add('hidden');
    versionSection.appendChild(row);
    monthGroup.appendChild(versionSection);

    applyHighlight(row, query, 'both', englishQueryTokens);
    expect(row.querySelectorAll('mark.highlight-token').length).toBeGreaterThan(0);

    resetToAllRows({
      monthGroups: [monthGroup],
      versionSections: [versionSection],
      resetRowHighlight: (targetRow) => {
        applyHighlight(targetRow, '', 'both', []);
      },
    });

    expect(monthGroup.classList.contains('hidden')).toBe(false);
    expect(versionSection.classList.contains('hidden')).toBe(false);
    expect(row.classList.contains('hidden')).toBe(false);
    expect(row.querySelectorAll('mark.highlight-token').length).toBe(0);
  });
});
