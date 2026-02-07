import type { ProductId } from './products';

export interface LegendItem {
  cls: string;
  label: string;
}

const claudeCodeItems: LegendItem[] = [
  { cls: 'added', label: '追加' },
  { cls: 'fixed', label: '修正' },
  { cls: 'changed', label: '変更' },
  { cls: 'improved', label: '改善' },
  { cls: 'other', label: 'その他' },
];

const codexItems: LegendItem[] = [
  { cls: 'added', label: '新機能' },
  { cls: 'fixed', label: 'バグ修正' },
  { cls: 'improved', label: 'ドキュメント' },
  { cls: 'other', label: 'その他' },
];

export function getLegendItems(product: ProductId): LegendItem[] {
  return product === 'codex' ? codexItems : claudeCodeItems;
}
