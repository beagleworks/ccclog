import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import { getProduct, type ProductId } from '../products';

const YEAR_FILE_RE = /^CHANGELOG_(\d{4})_JA\.md$/;

function getContentDir(productId: ProductId): string {
  const config = getProduct(productId);
  return config.contentSubdir
    ? join(process.cwd(), 'content', config.contentSubdir)
    : join(process.cwd(), 'content');
}

export function listChangelogYears(productId: ProductId): string[] {
  const contentDir = getContentDir(productId);

  try {
    const years = readdirSync(contentDir)
      .map((file) => file.match(YEAR_FILE_RE)?.[1])
      .filter((year): year is string => Boolean(year));

    years.sort((a, b) => Number(b) - Number(a));
    return years;
  } catch {
    return [];
  }
}

export function getLatestYear(productId: ProductId): string | null {
  const years = listChangelogYears(productId);
  return years.length > 0 ? years[0] : null;
}
