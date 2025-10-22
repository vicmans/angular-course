import { Component, inject, ViewContainerRef } from '@angular/core';
import { AdminConfigComponent } from '../admin-config/admin-config.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-admin-profile',
  imports: [ButtonComponent],
  templateUrl: './admin-profile.component.html'
})
export class AdminProfileComponent {

  private viewContainerRef = inject(ViewContainerRef);

  showNewComponent() {
    this.viewContainerRef.createComponent(AdminConfigComponent)
  }
}