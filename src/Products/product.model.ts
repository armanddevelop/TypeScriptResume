export type Sizes = 'S' | 'M' | 'XL' | 'L';

export type Product = {
  name: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
};
