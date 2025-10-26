import { Component, inject, signal } from '@angular/core';
import { ProductService } from '../../data/product.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductCardComponent } from "../product-card/product-card.component";

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  productService = inject(ProductService);

  products = toSignal(this.productService.find())

  searchParam = '';
  loading: boolean = false;

  search(): void {
    const filter = this.searchParam;

    this.loading = true;

    this.productService.find(filter).subscribe({
      next: (products) => {
        this.products = signal(products);
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
        // this.#toastService.show('Error loading desserts!');
        console.error(error);
      },
    });
  }
}
