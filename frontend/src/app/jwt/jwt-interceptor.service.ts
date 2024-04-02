import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service'; 
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor {
  

  constructor(private authService: AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const account = this.authService.accountValue;
    const isLoggedIn = account?.token;
    const isApiUrl = req.url.startsWith(environment.apiUrl);
    if(isLoggedIn && isApiUrl){
      req = req.clone({setHeaders: {Authorization: `Bearer ${account.token}`}
      });
    }
    return next.handle(req);
  }
}
