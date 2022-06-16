import { Injectable } from '@angular/core';
import { multiply, remove, sumBy, without } from 'lodash';
import { Product } from '../products';
import { BehaviorSubject, Observable, take } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private _selectedProducts: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  public constructor() {}

  // NOT TO DO EXAMPLE
  public getTotal(
    selectedProducts: { amount: number; price: number }[]
  ): number {
    return sumBy(selectedProducts, (product) => {
      return multiply(product.price, product.amount);
    });
  }

  // TODO EXAMPLES
  public addProduct(product: Product): void {
   // implement me!
  }

  public removeProduct(product: Product): void {
    // implement me!
  }
  
  public get selectedProducts(): Observable<Product[]> {
    return this._selectedProducts.asObservable();
  }
}
