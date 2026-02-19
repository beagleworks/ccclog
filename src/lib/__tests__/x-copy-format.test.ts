import { describe, it, expect } from 'vitest';
import { formatXCopyText, resolveXCopyLanguage } from '../x-copy-format';

describe('resolveXCopyLanguage', () => {
  it('en は en を返す', () => {
    expect(resolveXCopyLanguage('en')).toBe('en');
  });

  it('ja は ja を返す', () => {
    expect(resolveXCopyLanguage('ja')).toBe('ja');
  });

  it('both は ja を返す', () => {
    expect(resolveXCopyLanguage('both')).toBe('ja');
  });
});

describe('formatXCopyText', () => {
  const entries = [
    { ja: '機能Aを追加', en: 'Add feature A' },
    { ja: '不具合Bを修正', en: 'Fix bug B' },
  ];

  it('日本語でXコピー形式を生成する', () => {
    const result = formatXCopyText({
      productName: 'Claude Code',
      version: '2.1.47',
      entries,
      language: 'ja',
    });

    expect(result).toBe([
      'Claude Code - v2.1.47',
      '・機能Aを追加',
      '・不具合Bを修正',
    ].join('\n'));
  });

  it('英語でXコピー形式を生成する', () => {
    const result = formatXCopyText({
      productName: 'OpenAI Codex',
      version: '0.95.0',
      entries,
      language: 'en',
    });

    expect(result).toBe([
      'OpenAI Codex - v0.95.0',
      '・Add feature A',
      '・Fix bug B',
    ].join('\n'));
  });
});
