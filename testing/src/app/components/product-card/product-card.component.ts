import { Component, Input, input, computed } from '@angular/core';
import { Product } from '../../data/product';
import { RouterLink } from '@angular/router';
import { IsFavoriteDirective } from '../../shared/directives/is-favorite.directive';
import { FormatMoneyPipe } from "../../shared/pipes/format-money.pipe";

@Component({
  selector: 'app-product-card',
  imports: [RouterLink, IsFavoriteDirective, FormatMoneyPipe],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  @Input()
  product!: Product;

  favorite = false;

  constructor() {
    console.log(this.product)
  }
}
