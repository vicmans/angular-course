import { Component, inject, input, OnInit } from '@angular/core';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { Product } from '../../data/product';
import { ProductService } from '../../data/product.service';

@Component({
  selector: 'app-product',
  imports: [ProductCardComponent],
  template: `
    @if (product) {
      <div class="md:w-1/2 mx-auto">
        <app-product-card [product]="product"></app-product-card>
      </div>
    }
  `,
})
export class ProductComponent implements OnInit {
  productService = inject(ProductService);
  id = input.required<any>()

  product!: Product;
  
  ngOnInit(): void {
    if (this.id()) {
      this.productService.findById(this.id()).subscribe((product) => {
        this.product = product
      })
    }
  }
}
