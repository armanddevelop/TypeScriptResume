(() => {
  //como las interfaces pero con type
  type Sizes = 'S' | 'M' | 'XL' | 'L';

  type Product = {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  };

  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data);
  };
  addProduct({
    title: 'nuevo producto',
    createdAt: new Date(),
    stock: 58,
  });
  addProduct({
    title: 'nuevo producto',
    createdAt: new Date(),
    stock: 58,
    size: 'XL',
  });
  console.log(products);
})();
