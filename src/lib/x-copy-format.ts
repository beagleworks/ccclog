export type XCopyEntryLanguage = 'ja' | 'en';
export type NonCopyDisplayMode = 'ja' | 'en' | 'both';

interface XCopyEntry {
  ja: string;
  en: string;
}

interface FormatXCopyTextInput {
  productName: string;
  version: string;
  entries: XCopyEntry[];
  language: XCopyEntryLanguage;
}

export function resolveXCopyLanguage(mode: NonCopyDisplayMode): XCopyEntryLanguage {
  return mode === 'en' ? 'en' : 'ja';
}

export function formatXCopyText(input: FormatXCopyTextInput): string {
  const header = `${input.productName} - v${input.version}`;
  const lines = input.entries.map((entry) => (
    `・${input.language === 'en' ? entry.en : entry.ja}`
  ));

  return [header, ...lines].join('\n');
}
