import { Injectable } from '@angular/core';
import { find, multiply, sumBy, without } from 'lodash';
import { Product } from '../products';
import { BehaviorSubject, Observable, take } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private _selectedProducts: BehaviorSubject<Product[]> = new BehaviorSubject<
    Product[]
  >([]);
  public constructor() {}

  // NOT TO DO EXAMPLE
  public getTotal(
    selectedProducts: { amount: number; price: number }[]
  ): number {
    return sumBy(selectedProducts, (product) => {
      return multiply(product.price, product.amount);
    });
  }

  public addProduct(product: Product): void {
    this.selectedProducts.pipe(take(1)).subscribe((products) => {
      const productList = [...products, product];
      this._selectedProducts.next(productList);
    });
  }

  public removeProduct(product: Product): void {
    if (!this.itsOnList(product)) {
      throw new Error('Product not found');
    }
    this.selectedProducts.pipe(take(1)).subscribe((products) => {
      const productList = without(products, product);
      this._selectedProducts.next(productList);
    });
  }

  public get selectedProducts(): Observable<Product[]> {
    return this._selectedProducts.asObservable();
  }

  private itsOnList(product: Product): boolean { 
    let alreadyOnList = false
    this.selectedProducts.pipe(take(1)).subscribe((products) => {
      alreadyOnList = Boolean(find(products, product));
    });
    return alreadyOnList;
  }

}
