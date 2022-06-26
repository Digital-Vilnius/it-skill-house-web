export const compare = (value: string, compareValue: string, caseSensitive = false): boolean => {
  const formattedValue = (caseSensitive ? value : value.toLocaleLowerCase()).trim();
  const formattedCompareValue = (
    caseSensitive ? compareValue : compareValue.toLocaleLowerCase()
  ).trim();
  return formattedValue.includes(formattedCompareValue);
};

export const equal = (value: string, compareValue: string, caseSensitive = false): boolean => {
  const formattedValue = (caseSensitive ? value : value.toLocaleLowerCase()).trim();
  const formattedCompareValue = (
    caseSensitive ? compareValue : compareValue.toLocaleLowerCase()
  ).trim();
  return formattedValue === formattedCompareValue;
};
