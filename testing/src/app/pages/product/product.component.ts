import { Component, effect, inject, input, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { Product } from '../../data/product';
import { ProductService } from '../../data/product.service';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ProductCardComponent, AsyncPipe],
  template: `
    @if (productBase) {
      <div class="md:w-1/2 mx-auto">
        <app-product-card [product]="productBase"></app-product-card>
      </div>
    }
  `,
})
export class ProductComponent implements OnInit {
  productService = inject(ProductService);
  // id = input.required<number>()
  route = inject(ActivatedRoute);

  // effec = effect(() => {
  //   if (this.product())
  //     this.productBase = this.route.snapshot.data['product']
  //   console.log(this.productBase)
  // })
  productBase: Product | null = null;
  
  ngOnInit(): void {
    // if (this.id()) {
    //   this.productService.findById(this.id()).subscribe((product) => {
    //     this.product = product
    //   })
    // }
    this.route.data.subscribe(({ product }) => {
      // do something with your resolved data ...
      this.productBase = product
    })
  }
}
