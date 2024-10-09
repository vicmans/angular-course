import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../user.service';
import { of } from 'rxjs';
import { UserLogsService } from './user-logs.mock.service';

@Injectable()
export class User2Service {

  authorized = true;

  data: User[] = [
    {
      "id": 1,
      "name": "Pepe",
      "firstName": "Pepito",
    },
    {
      "id": 2,
      "name": "Elba",
      "firstName": "Lazo",
    },
    {
      "id": 3,
      "name": "Esteban",
      "firstName": "Dido",
    }
  ]

  fetchUsers() {
    if (!this.authorized) return []
    return of(this.data);
  }
}