import getSymbolFromCurrency from 'currency-symbol-map';

export const getCurrencySymbol = (currency: string) => {
  return getSymbolFromCurrency(currency);
};
