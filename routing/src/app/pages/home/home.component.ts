import { Component } from '@angular/core';
import { ProductListComponent } from "../../components/product-list/product-list.component";

@Component({
  selector: 'app-home',
  imports: [ProductListComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {

}
