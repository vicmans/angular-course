import { Component, computed, input, TemplateRef, viewChild } from '@angular/core';
import { AdminProfileComponent } from '../components/admin-profile/admin-profile.component';
import { UserProfileComponent } from '../components/user-profile/user-profile.component';
import { NgComponentOutlet, NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-templates',
  imports: [NgTemplateOutlet, NgComponentOutlet, NgIf],
  templateUrl: './templates.component.html',
})
export class TemplatesComponent {
  isAdmin = input(false);
  profileComponent = computed(() => this.isAdmin() ? AdminProfileComponent : UserProfileComponent);

  adminTemplate = viewChild('admin', {read: TemplateRef});
  basicTemplate = viewChild('basic', {read: TemplateRef});
  profileTemplate = computed(() => this.isAdmin() ? this.adminTemplate()! : this.basicTemplate()!);
}
