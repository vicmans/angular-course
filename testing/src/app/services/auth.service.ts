import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  router = inject(Router);

  public logged = signal(false);
  public isAdmin = signal(false);

  logIn(type = 'user') {
    this.logged.set(true);
    this.isAdmin.set(type == 'admin');
    const route = type == 'admin' ? 'dashboard' : 'profile';
    this.router.navigate([route])
  }

  logOut() {
    this.logged.set(false);
    this.isAdmin.set(false);
  }
}
