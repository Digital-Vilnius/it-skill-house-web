import getSymbolFromCurrency from 'currency-symbol-map';

export const currencies = [
  { code: 'EUR', name: 'Euro' },
  { code: 'USD', name: 'Dollar' },
];

export const getCurrencyName = (currencyCode: string | null) => {
  return currencies.find((currency) => currency.code === currencyCode)?.name ?? 'Unknown';
};

export const getCurrencySymbol = (currency: string) => {
  return getSymbolFromCurrency(currency);
};
