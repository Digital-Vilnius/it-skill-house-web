import { getCurrencySymbol } from './currency';

export const formatNumber = (value: string, originalValue: string | null) => {
  if (!originalValue) return null;

  return originalValue.trim() === '' ? null : value;
};

export const formatAmount = (value: number | null, currency: string | null) => {
  if (!value || !currency) return null;

  return `${value.toFixed(2)} ${getCurrencySymbol(currency)}`;
};
