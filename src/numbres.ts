(() => {
  let productPrice = 100;
  productPrice = 120;
  console.log('Product price ', productPrice);
  let customerAge: number = 28;
  //customerAge  =customerAge+"1"
  customerAge = customerAge + 1;
  console.log('customerAge ', customerAge);
  let productsStok: number = 0;
  console.log('productsStok ', productsStok);
  if (productsStok > 10) console.log('is greater');
  let discount: number = parseInt('200');
  console.log('discount ', discount);
  discount <= 200 ? console.log('apply discount') : console.log('not discount');
  let hex = 0xfff;
  console.log('hex ', hex);
})();
