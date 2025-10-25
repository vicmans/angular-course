import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NgToggleModule } from 'ng-toggle-button';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  imports: [NgToggleModule],
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  isAdmin = inject(AuthService).isAdmin;
  constructor(){
    inject(UserService).profile().subscribe(resp => {
      console.log('Repuesta de http')
    })
  }
  changeValue(event: boolean) {
    console.log(event)
    this.isAdmin.set(event)
  }
}
