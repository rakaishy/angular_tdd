import { Injectable } from '@angular/core';
import { sumBy } from 'lodash';
import { Product } from '../products';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private selectedProducts$: Observable<Product[]> = new Observable();
  public constructor() {}

  // NOT TO DO EXAMPLE
  public getTotal(selectedProducts: { id: string; price: number }[]): number {
    return sumBy(selectedProducts, (product) => {
      return product.price;
    });
  }

  // TODO EXAMPLES
  public addProducts(products: Product[]): void {}

  public removeProducts(products: Product[]): void { }

}
