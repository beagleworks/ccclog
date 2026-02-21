export type SearchMode = 'ja' | 'en' | 'both';

interface ApplyRowHighlightArgs {
  row: HTMLElement;
  query: string;
  mode: SearchMode;
  allowSingleJapanese: boolean;
  englishQueryTokens: string[];
  matchesEnglishCell: (rawText: string, queryTokens: string[]) => boolean;
  matchesJapaneseCell: (rawText: string, query: string, allowSingleJapanese: boolean) => boolean;
  setJapaneseCellHtml: (element: HTMLElement, rawText: string, query: string, highlight: boolean) => void;
  setEnglishCellHtml: (element: HTMLElement, rawText: string, queryTokens: string[]) => void;
}

interface ResetToAllRowsArgs {
  monthGroups: Iterable<HTMLElement>;
  versionSections: Iterable<HTMLElement>;
  resetRowHighlight: (row: HTMLElement) => void;
}

export function applyRowHighlight({
  row,
  query,
  mode,
  allowSingleJapanese,
  englishQueryTokens,
  matchesEnglishCell,
  matchesJapaneseCell,
  setJapaneseCellHtml,
  setEnglishCellHtml,
}: ApplyRowHighlightArgs): void {
  const jaCell = row.querySelector<HTMLElement>('.entry-ja');
  const enCell = row.querySelector<HTMLElement>('.entry-en');
  const rawJa = row.dataset.ja || '';
  const rawEn = row.dataset.en || '';
  const englishMatched = matchesEnglishCell(rawEn, englishQueryTokens);

  if (mode === 'ja') {
    if (jaCell) {
      setJapaneseCellHtml(jaCell, rawJa, query, matchesJapaneseCell(rawJa, query, allowSingleJapanese));
    }
    if (enCell) {
      setEnglishCellHtml(enCell, rawEn, []);
    }
    return;
  }

  if (mode === 'en') {
    if (enCell) {
      setEnglishCellHtml(enCell, rawEn, englishMatched ? englishQueryTokens : []);
    }
    if (jaCell) {
      setJapaneseCellHtml(jaCell, rawJa, query, false);
    }
    return;
  }

  if (jaCell) {
    setJapaneseCellHtml(jaCell, rawJa, query, matchesJapaneseCell(rawJa, query, allowSingleJapanese));
  }
  if (enCell) {
    setEnglishCellHtml(enCell, rawEn, englishMatched ? englishQueryTokens : []);
  }
}

export function resetToAllRows({ monthGroups, versionSections, resetRowHighlight }: ResetToAllRowsArgs): void {
  for (const group of monthGroups) {
    group.classList.remove('hidden');
  }

  for (const section of versionSections) {
    section.classList.remove('hidden');
    const rows = section.querySelectorAll<HTMLElement>('.entry-row');
    rows.forEach((row) => {
      row.classList.remove('hidden');
      resetRowHighlight(row);
    });
  }
}
