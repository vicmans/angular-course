import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  template: `
    <nav class="p-4 container mx-auto">
      <a routerLink="">Home</a>
      @if (loggedIn()) {
        <a routerLink="profile">Profile</a>
        @if (isAdmin()) {
          <a routerLink="dashboard">Admin</a>
        }
        <button (click)="logout()">Log out</button>
      } @else {
        <a routerLink="login">login</a>
      }
    </nav>
  `,
})
export class HeaderComponent {
  auth = inject(AuthService);
  loggedIn = inject(AuthService).logged;
  isAdmin = inject(AuthService).isAdmin;
  logout() {
    this.auth.logOut()
  }
}
