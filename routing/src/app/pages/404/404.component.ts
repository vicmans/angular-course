import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-404',
  standalone: true,
  imports: [RouterLink],
  template: `
    <p>
      404 works!
    </p>
    <p>
      <a routerLink="/products">Ir a products</a>
    </p>
  `,
  styles: ``
})
export class Page404Component {

}
