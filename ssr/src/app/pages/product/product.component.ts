import { Component, inject, OnInit } from '@angular/core';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { Product } from '../../data/product';
import { ProductService } from '../../data/product.service';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product',
  imports: [ProductCardComponent],
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
  title = inject(Title);
  meta = inject(Meta);

  productBase: Product | null = null;
  
  ngOnInit(): void {
    this.route.data.subscribe(({ product }) => {
      // do something with your resolved data ...
      this.productBase = product
      this.title.setTitle(product.name);

      this.meta.updateTag({name: "description", content: product.description});
      this.meta.addTag({property: 'og:title', content: product.title});
      this.meta.addTag({property: 'og:description', content: product.description});
      this.meta.addTag({property: 'og:image', content: product.image});
    })
  }
}
