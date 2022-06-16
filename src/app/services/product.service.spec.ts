import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import { Product } from '../products';
import { take } from 'rxjs';

describe('ProductService set' , () => {
  let service: ProductService;
  const mockPorduct: Product = { id: 15, description: 'mock product', name: 'mock me plus', price: 10000 }

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

   it('Service should be created', () => {
     expect(service).toBeDefined();
   });

  describe('Product Service get Totals', () => {
    it('should return the total results', () => {
      const result = service.getTotal([
        { price: 100, amount: 3 },
        { price: 10, amount: 10 },
      ]);
      expect(result).toEqual(400);
    });

     it('should return the total of zero on empty list', () => {
       const result = service.getTotal([]);
       expect(result).toEqual(0);
     });

  });
  
  describe('Product Service add products', () => {
    it('should add products', (done) => {
      service.addProduct(mockPorduct);
      service.selectedProducts.pipe(take(1)).subscribe((products) => {
        expect(products).toContain(mockPorduct);
        done();
      });
    });
  });
 
  describe('Product Service remove products', () => {
    it('should remove products', (done) => {
      // adding and item to be removed next.
      service.addProduct(mockPorduct);
      //removing the added product
      service.removeProduct(mockPorduct);
      service.selectedProducts.pipe(take(1)).subscribe((products) => {
        expect(products).not.toContain(mockPorduct);
        done();
      });
    });

    it('should throw error on product not found', () => {
      try {
        service.removeProduct(mockPorduct);
      } catch (error) {
        expect(error).toBeTruthy();
      }
    });
  });
});
