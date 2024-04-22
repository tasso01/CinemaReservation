import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const token = localStorage.getItem('JWT_TOKEN');
    const isApiUrl = req.url.startsWith(environment.baseUrl);
    if(token && isApiUrl){
      req = req.clone({
        setHeaders: {Authorization: `Bearer ${token}`,
      },
      });
      return next(req);
    }
    return next(req);
};
