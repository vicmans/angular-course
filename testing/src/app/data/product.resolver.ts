import { inject } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { ProductService } from './product.service';
import { Observable } from 'rxjs';
import { Product } from './product';

export const productResolver = (route: ActivatedRouteSnapshot) => {
  const id = route.paramMap.get('id');
  const productService = inject(ProductService);
  return productService.findById(Number(id))
};
