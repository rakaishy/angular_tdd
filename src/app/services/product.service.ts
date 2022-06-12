import { Injectable } from '@angular/core';
import { sumBy } from 'lodash';

@Injectable()
export class ProductService {
  public constructor() {}

  public getTotal(selectedProducts: { id: string; price: number } []): number {
    return sumBy(selectedProducts, (product) => {
      return product.price;
    });
  }
}
