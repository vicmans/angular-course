import { inject } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { ProductService } from './product.service';

export const productResolver = (route: ActivatedRouteSnapshot) => {
  const id = route.paramMap.get('id');
  const productService = inject(ProductService);
  return productService.findById(Number(id))
};
