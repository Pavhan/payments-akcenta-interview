import { CURRENCY } from "@data/constants";

export const formatCurrency = (amount: number, currency: keyof typeof CURRENCY) => {
  return amount.toLocaleString('en-US', {
    style: 'currency',
    currency: currency,
  });
};

export const formatDateToLocal = (
  dateStr: number,
  locale: string = 'en-US',
) => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};