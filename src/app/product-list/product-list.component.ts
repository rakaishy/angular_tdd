import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Product, products } from '../products';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  private products: Product[] = products;

  public dataSource = new MatTableDataSource<Product>(this.products);
  public displayedColumns: string[] = ['name', 'description', 'price', 'add'];

  public constructor(
    private productService: ProductService) {
    this.dataSource.paginator = this.paginator;
  }

  public share() {
    window.alert('The product has been shared!');
  }

  public addProduct(product: Product, amount: number): void {
    return;
  }
}
