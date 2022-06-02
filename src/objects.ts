(() => {
  type Sizes = 'S' | 'M' | 'XL' | 'L';
  interface Product {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  }
  interface User {
    email: string;
    password: string;
  }
  const logIn = (data: User) => {
    const { email, password } = data;
    console.log(email);
    console.log(password);
  };

  logIn({ email: 'prueba@hotmail.com', password: '12346' });
  const products: any[] = [];

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
