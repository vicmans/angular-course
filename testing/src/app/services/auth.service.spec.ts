import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { Router } from '@angular/router';

describe('AuthService', () => {
  let service: AuthService;

  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      // Mock Router
      providers: [{
        provide: Router,
        useValue: routerSpy,
      }]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be isLogged default value', () => {
    expect(service.logged()).toBeFalsy();
  });

  it('should be isAdmin default value', () => {
    expect(service.isAdmin()).toBeFalsy();
  });

  it('should navigate to the details page', () => {      
    service.logIn();
    const navArgs = routerSpy.navigate.calls.first().args[0];
    expect(navArgs).toEqual(["profile"]);
  });
});
