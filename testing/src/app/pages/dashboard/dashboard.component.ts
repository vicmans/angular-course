import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  // no used, value via resolver
  // userService = inject(UserService);

  route = inject(ActivatedRoute);

  users = this.route.snapshot.data['users']
}
