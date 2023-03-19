const CURRENCY_FORMAT = new Intl.NumberFormat("en-HOSSDDG", {
  currency: "USD",
  style: "currency",
});

export const FormatCurrency = (number: number) => {
  return CURRENCY_FORMAT.format(number);
};
