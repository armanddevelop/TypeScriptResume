(() => {
  type Prices = number[];
  const prices: Prices = [50, 50, 50, 50];
  const calcTotal = (prices: Prices): string => {
    const result = prices.reduce((acumulador: number, actualValue: number) => {
      return (acumulador += actualValue);
    }, 0);
    return result.toString();
  };
  const printTotal = (prices: Prices): void => {
    const total = calcTotal(prices);
    console.log(`Este es el total: ${total}`);
  };
  printTotal(prices);
})();
