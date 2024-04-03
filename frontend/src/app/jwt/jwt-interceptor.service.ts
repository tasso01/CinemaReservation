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
    const account = this.authService.getCurrentAccount;
    const token = localStorage.getItem;
    const isApiUrl = req.url.startsWith(environment.apiUrl);
    if(token && isApiUrl){
      req = req.clone({setHeaders: {Authorization: `Bearer ${token}`}
      });
    }
    return next.handle(req);
  }
}
