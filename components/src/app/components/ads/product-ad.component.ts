import { Component, input } from '@angular/core';

@Component({
  selector: 'app-product-ad',
  standalone: true,
  imports: [],
  template: `
    <strong>
      {{name()}}
    </strong>
    <p>
      {{bio()}}
    </p>
  `,
  styles: ``
})
export class ProductAdComponent {
  name = input();
  bio = input()
}
