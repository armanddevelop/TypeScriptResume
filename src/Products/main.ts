import { product, calcStock, createProduct } from './product.service';
import { Product } from './product.model';

const item = {
  name: 'nuevo producto',
  createdAt: new Date(),
  stock: 12,
};
const item2: Product = {
  name: 'nuevo producto item2',
  createdAt: new Date(),
  stock: 10,
};
const item3: Product = {
  name: 'producto 3',
  createdAt: new Date(),
  stock: 55,
  size: 'L',
};

createProduct(item);
createProduct(item2);
createProduct({
  name: 'producto 3',
  createdAt: new Date(),
  stock: 55,
  size: 'L',
});
createProduct(item3);

const stock = calcStock();
console.log('This is the value of products ', product);
console.log('This is the value of stock ', stock);
