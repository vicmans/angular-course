import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
})
export class AppComponent {
  auth = inject(AuthService);
  loggedIn = inject(AuthService).logged;
  isAdmin = inject(AuthService).isAdmin;
  logout() {
    this.auth.logOut()
  }
}
