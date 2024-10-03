import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  auth = inject(AuthService)
  login() {
    this.auth.logIn()
  }

  loginAdmin() {
    this.auth.logIn('admin')
  }
}
