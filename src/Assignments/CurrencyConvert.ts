// 6.Define a convert currency function that takes an amount and returns an object that has U.S.
// dollars, British pounds, Australian dollars, and Mexican pesos using
// destructuring display each currency value individually.

const currencyInfo = [
  {
    counrty: "MEX",
    currency: 43,
  },
  {
    counrty: "AUS",
    currency: 44,
  },
  {
    counrty: "US",
    currency: 45,
  },
  {
    counrty: "ENG",
    currency: 46,
  },
];

const convertCurrency = (amount: number, counrty: string, currency: number) => {
  let currencyTotal = currency * amount;
  const resposeObj = { amount, counrty, currencyTotal };
  return resposeObj;
};

currencyInfo.forEach((element) => {
  const { currencyTotal } = convertCurrency(
    106,
    element.counrty,
    element.currency
  );

  console.log(`amount is ${currencyTotal}`);
});
