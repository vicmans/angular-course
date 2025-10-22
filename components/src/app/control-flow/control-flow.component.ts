import { AsyncPipe, CommonModule, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-control-flow',
  imports: [CommonModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {

  service = inject(AppService);

  users$ = this.service.getUsers();

  condition = true;

  userPermissions = 'client';

}

interface User {
  name: string;
  lastName: string;
  email: string;
}