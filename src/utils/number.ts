export const formatNumber = (value: string, originalValue: string) => {
  return originalValue.trim() === '' ? null : value;
};
