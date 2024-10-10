import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  http = inject(HttpClient)
  constructor() { }

  fetchUsers() {
    return this.http.get<User[]>('/data.json').pipe(delay(2000));
  }

  profile() {
    // testing endpoint
    return this.http.get<any>('http://localhost:3000/');
  }
}

export interface User {
  "id": number,
  "name": string,
  "firstName": string;
}
