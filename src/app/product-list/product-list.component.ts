import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { ELEMENT_DATA, Product, PRODUCTS_DATA } from '../products';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  public dataSource: any;
  public options: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public displayedColumns: string[] = [
    'name',
    'description',
    'price',
    'amount',
    'add',
  ];
  public constructor() {
    this.dataSource = new MatTableDataSource<Product>(PRODUCTS_DATA);
    this.dataSource.paginator = this.paginator;
  }

  public share() {
    window.alert('The product has been shared!');
  }

  public addProduct(product: Product, amount: number): void {
    return;
  }
}
