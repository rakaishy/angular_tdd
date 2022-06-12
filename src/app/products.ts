export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const PRODUCTS_DATA: Product[] = [
  {
    id: 1,
    name: 'Phone XL',
    price: 499.99,
    description: 'A large phone with one of the best cameras',
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 299.99,
    description: 'A great phone with one of the best cameras',
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 399.99,
    description: 'A very standard phone with a standard camera',
  },
  {
    id: 4,
    name: 'Tablet XL',
    price: 799.99,
    description: 'A large tablet with one of the best screens',
  },
  {
    id: 5,
    name: 'Tablet Mini',
    price: 599.99,
    description: 'A large tablet with one of the best screens',
  },
  {
    id: 6,
    name: 'Tablet Standard',
    price: 699.99,
    description: 'A very standard tablet with one of the best screens',
  },
];
