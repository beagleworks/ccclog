export const EN_TOKEN_REGEX_SOURCE = '[a-z0-9]+(?:-[a-z0-9]+)*';
const EN_TOKEN_PATTERN = new RegExp(EN_TOKEN_REGEX_SOURCE, 'g');
const JAPANESE_CHAR_PATTERN = /[ぁ-んァ-ヶー一-龠々]/;

export function normalizeWhitespace(text: string): string {
  return text.trim().replace(/\s+/g, ' ');
}

export function normalizeEnglishText(text: string): string {
  return normalizeWhitespace(text).toLowerCase();
}

export function normalizeJapaneseText(text: string): string {
  return normalizeWhitespace(text);
}

export function tokenizeEnglish(text: string): string[] {
  const normalized = normalizeEnglishText(text);
  if (!normalized) return [];
  return normalized.match(EN_TOKEN_PATTERN) ?? [];
}

export function toUniqueTokens(tokens: string[]): string[] {
  return Array.from(new Set(tokens));
}

export function toJapaneseBigrams(text: string): string[] {
  const normalized = normalizeJapaneseText(text);
  if (normalized.length < 2) return [];

  const grams: string[] = [];
  for (let i = 0; i < normalized.length - 1; i++) {
    grams.push(normalized.slice(i, i + 2));
  }
  return grams;
}

export function isSingleJapaneseCharacterQuery(text: string): boolean {
  const normalized = normalizeJapaneseText(text);
  return normalized.length === 1 && JAPANESE_CHAR_PATTERN.test(normalized);
}
