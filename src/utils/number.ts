export const formatNumber = (value: string, originalValue: string | null) => {
  if (!originalValue) return null;

  return originalValue.trim() === '' ? null : value;
};
