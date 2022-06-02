(() => {
  type Sizes = 'S' | 'M' | 'XL' | 'L';
  function oldVersion(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) {
    return { title, createdAt, stock, size };
  }

  const createProductToJson = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  ) => {
    return { title, createdAt, stock, size };
  };
  const obj1 = createProductToJson('Camisa', new Date(), 44);
  console.log('Esto vale obj1 ', obj1);
  const { title, createdAt, stock, size } = obj1;
})();
