import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, convertToParamMap, ResolveFn } from '@angular/router';

import { productResolver } from './product.resolver';
import { ProductService } from './product.service';
import { of } from 'rxjs';
import { products } from '../services/mocks/product.mock';

describe('productResolver', () => {
  const executeResolver = (resolverParameters: ActivatedRouteSnapshot) => 
    TestBed.runInInjectionContext(() => productResolver(resolverParameters));

  let route: ActivatedRouteSnapshot;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ActivatedRouteSnapshot,
          useValue: {
            paramMap: convertToParamMap({id: 18})
          }
        },
        {
          provide: ProductService,
          useValue: {
            findById(id: number) {
              return of(products[0]);
            }
          } 
        }
      ]
    });
    route = TestBed.inject(ActivatedRouteSnapshot);
  });

  it('should be created', () => {
    console.log(route)
    expect(executeResolver).toBeTruthy();
  });

  it('should be created', () => {
    TestBed.runInInjectionContext(() => productResolver(route)).subscribe(product => {
      expect(product.id).toBe(18)
    })
  });
});
