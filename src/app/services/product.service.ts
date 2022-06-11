import { Injectable } from '@angular/core';
import { sumBy } from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public constructor() {}

  public getTotal(selectedProducts: { id: string; price: number } []): number {
    return sumBy(selectedProducts, (product) => {
      return product.price;
    });
  }
}
