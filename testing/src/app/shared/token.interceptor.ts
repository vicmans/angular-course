import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Interceptor de token')
  const newReq = req.clone({
    headers: req.headers.append('Authorization', 'Bearer Auth-bla-bla-bal'),
  });
  return next(newReq);
};
