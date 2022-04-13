export const emptyStringToNull = (value: unknown, originalValue: unknown) => {
  if (typeof originalValue === 'string' && originalValue === '') {
    return null;
  }
  return value;
};
