import { Component } from '@angular/core';
import { UserProfileComponent } from '../components/user-profile/user-profile.component';
import { LargeContentComponent } from '../components/large-content/large-content.component';

@Component({
  selector: 'app-deferable',
  imports: [UserProfileComponent, LargeContentComponent],
  templateUrl: './deferable.component.html'
})
export class DeferableComponent {
  condition = false;
}
