import { HttpInterceptorFn } from '@angular/common/http';

export const loggerInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('loggerInterceptor path: ' + req.url)
  return next(req);
};
