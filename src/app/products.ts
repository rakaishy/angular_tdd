export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Phone XL',
    price: 499,
    description: 'A large phone with one of the best screens',
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 299,
    description: 'A great phone with one of the best cameras',
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 399,
    description: '',
  },
  {
    id: 4,
    name: 'Tablet XL',
    price: 799,
    description: 'A large phone with one of the best screens',
  },
  {
    id: 5,
    name: 'Tablet Mini',
    price: 599,
    description: 'A large phone with one of the best screens',
  },
  {
    id: 6,
    name: 'Tablet Standard',
    price: 699,
    description: 'A large phone with one of the best screens',
  },
];