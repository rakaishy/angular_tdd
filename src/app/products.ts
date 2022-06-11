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

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];