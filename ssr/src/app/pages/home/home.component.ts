import { Component, inject } from '@angular/core';
import { ProductListComponent } from "../../components/product-list/product-list.component";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  imports: [ProductListComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  title = inject(Title);

  constructor() {
    this.title.setTitle('Home');
  }

}
