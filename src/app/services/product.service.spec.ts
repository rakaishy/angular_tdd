import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the total results', () => {
    //TODO: add real test
    expect(true).toBeTruthy();
  });

  it('should add products', () => {
    //TODO: add real test
    expect(true).toBeTruthy();
  });

  it('should remove products', () => {
    //TODO: add real test
    expect(true).toBeTruthy();
  });
});
