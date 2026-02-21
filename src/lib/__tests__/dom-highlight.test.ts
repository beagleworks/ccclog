// @vitest-environment jsdom

import { describe, expect, it } from 'vitest';
import { applyEnglishTokenHighlights, applyJapaneseSubstringHighlights } from '../dom-highlight';
import { formatEntryHtml } from '../entry-html';
import { tokenizeEnglish, toUniqueTokens } from '../search-normalize';

function toQueryTokens(query: string): string[] {
  return toUniqueTokens(tokenizeEnglish(query));
}

function createEnglishCell(rawText: string, product: 'claude-code' | 'codex' = 'claude-code'): HTMLElement {
  const cell = document.createElement('td');
  cell.innerHTML = formatEntryHtml(rawText, { product, language: 'en' });
  return cell;
}

function createJapaneseCell(rawText: string, product: 'claude-code' | 'codex' = 'claude-code'): HTMLElement {
  const cell = document.createElement('td');
  cell.innerHTML = formatEntryHtml(rawText, { product, language: 'ja' });
  return cell;
}

describe('dom-highlight', () => {
  it('一致トークンのみを部分ハイライトする', () => {
    const cell = createEnglishCell('Fix pre-commit hook and MCP support');
    applyEnglishTokenHighlights(cell, toQueryTokens('pre-commit mcp'));

    const marks = Array.from(cell.querySelectorAll('mark.highlight-token')).map((mark) => mark.textContent);
    expect(marks).toEqual(['pre-commit', 'MCP']);
    expect(cell.textContent).toBe('Fix pre-commit hook and MCP support');
  });

  it('code内テキストもハイライトする', () => {
    const cell = createEnglishCell('Use `pre-commit` hook');
    applyEnglishTokenHighlights(cell, toQueryTokens('pre-commit'));

    const code = cell.querySelector('code');
    expect(code?.querySelector('mark.highlight-token')?.textContent).toBe('pre-commit');
  });

  it('PRリンクのhref属性を壊さずリンクラベルのみハイライトする', () => {
    const cell = createEnglishCell('Improve reliability (#2646)', 'codex');
    const anchor = cell.querySelector('a');
    expect(anchor?.getAttribute('href')).toBe('https://github.com/openai/codex/pull/2646');

    applyEnglishTokenHighlights(cell, toQueryTokens('2646'));

    const highlighted = cell.querySelector('a mark.highlight-token');
    expect(highlighted?.textContent).toBe('2646');
    expect(anchor?.getAttribute('href')).toBe('https://github.com/openai/codex/pull/2646');
  });

  it('包含関係トークンは長いトークンを優先して非重複でハイライトする', () => {
    const cell = createEnglishCell('Run pre-commit and pre hooks');
    applyEnglishTokenHighlights(cell, toQueryTokens('pre-commit pre'));

    const marks = Array.from(cell.querySelectorAll('mark.highlight-token')).map((mark) => mark.textContent);
    expect(marks).toEqual(['pre-commit', 'pre']);
  });

  it('再描画ベースで連続適用しても多重ネストしない', () => {
    const cell = document.createElement('td');
    const rawText = 'Fix pre-commit hook quickly';

    const render = (query: string) => {
      cell.innerHTML = formatEntryHtml(rawText, { product: 'claude-code', language: 'en' });
      applyEnglishTokenHighlights(cell, toQueryTokens(query));
    };

    render('pre-commit');
    render('hook');

    expect(cell.querySelectorAll('mark mark').length).toBe(0);
    const marks = Array.from(cell.querySelectorAll('mark.highlight-token')).map((mark) => mark.textContent);
    expect(marks).toEqual(['hook']);
  });

  it('連続ハイフン区切りでも検索トークン抽出と同じ位置をハイライトする', () => {
    const cell = createEnglishCell('Fix pre--commit parsing');
    applyEnglishTokenHighlights(cell, toQueryTokens('pre'));

    const marks = Array.from(cell.querySelectorAll('mark.highlight-token')).map((mark) => mark.textContent);
    expect(marks).toEqual(['pre']);
  });

  it('日本語の一致箇所のみを部分ハイライトする', () => {
    const cell = createJapaneseCell('MCPサーバー設定を改善');
    applyJapaneseSubstringHighlights(cell, 'サーバー');

    const marks = Array.from(cell.querySelectorAll('mark.highlight-token')).map((mark) => mark.textContent);
    expect(marks).toEqual(['サーバー']);
    expect(cell.textContent).toBe('MCPサーバー設定を改善');
  });

  it('日本語で一致箇所が複数ある場合は全件をハイライトする', () => {
    const cell = createJapaneseCell('MCPサーバーのMCP設定を改善');
    applyJapaneseSubstringHighlights(cell, 'MCP');

    const marks = Array.from(cell.querySelectorAll('mark.highlight-token')).map((mark) => mark.textContent);
    expect(marks).toEqual(['MCP', 'MCP']);
  });

  it('日本語でもcode内テキストをハイライトする', () => {
    const cell = createJapaneseCell('`MCP` サーバーを改善');
    applyJapaneseSubstringHighlights(cell, 'MCP');

    const code = cell.querySelector('code');
    expect(code?.querySelector('mark.highlight-token')?.textContent).toBe('MCP');
  });

  it('日本語も再描画ベースで連続適用しても多重ネストしない', () => {
    const cell = document.createElement('td');
    const rawText = 'MCPサーバー設定を改善';

    const render = (query: string) => {
      cell.innerHTML = formatEntryHtml(rawText, { product: 'claude-code', language: 'ja' });
      applyJapaneseSubstringHighlights(cell, query);
    };

    render('MCP');
    render('設定');

    expect(cell.querySelectorAll('mark mark').length).toBe(0);
    const marks = Array.from(cell.querySelectorAll('mark.highlight-token')).map((mark) => mark.textContent);
    expect(marks).toEqual(['設定']);
  });

  it('空白正規化で検索一致しても生文字列不一致なら日本語ハイライトしない', () => {
    const cell = createJapaneseCell('MCP   サーバー');
    applyJapaneseSubstringHighlights(cell, 'MCP サーバー');

    expect(cell.querySelectorAll('mark.highlight-token').length).toBe(0);
  });
});
