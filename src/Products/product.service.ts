import { Product } from './product.model';

export const product: Product[] = [];

export const calcStock = (): number => {
  return product.reduce((acc, currectValue) => (acc += currectValue.stock), 0);
};

export const createProduct = (data: Product) => {
  product.push(data);
};
