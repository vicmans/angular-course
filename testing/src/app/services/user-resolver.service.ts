import { inject, Injectable } from '@angular/core';
import { User, UserService } from './user.service';
import { ActivatedRouteSnapshot, MaybeAsync, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class UserResolverService implements Resolve<User[]> {
  userService = inject(UserService);
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> {
    return this.userService.fetchUsers();
  }
}
