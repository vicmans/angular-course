import { Component } from '@angular/core';
import { CardComponent } from "../components/card/card.component";
import { ButtonComponent } from '../components/button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent,ButtonComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
