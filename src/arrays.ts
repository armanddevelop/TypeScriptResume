(() => {
  const prices: string | number | boolean | {}[] = [
    1,
    2.45,
    68.5,
    33,
    'Hi',
    true,
    [{}],
  ];
  //no se puede agragar mas que numeros
  prices.push('hola alissa');
  console.log('Esto vale prices ', prices);
})();
