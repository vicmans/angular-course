import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpInterceptorFn, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';

import { tokenInterceptor } from './token.interceptor';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { firstValueFrom } from 'rxjs';

describe('tokenInterceptor', () => {
  const interceptor: HttpInterceptorFn = (req, next) => 
    TestBed.runInInjectionContext(() => tokenInterceptor(req, next));

  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(
          withInterceptors([tokenInterceptor])
        ),
        provideHttpClientTesting(),
      ],
    });
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should add the Authorization header with the token', () => {
    const token = 'Auth-bla-bla-bal';
  
    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);

    httpClient.get('/data.json').subscribe()

    const req = httpMock.expectOne('/data.json');

    expect(req.request.headers.has('Authorization')).toBeTruthy();
    expect(req.request.headers.get('Authorization')).toEqual(`Bearer ${token}`);
    httpMock.verify();
  })
});
