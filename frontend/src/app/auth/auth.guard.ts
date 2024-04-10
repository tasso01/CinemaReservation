import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service'; // Servizio per gestire l'autenticazione dell'utente

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private authService: AuthService, private router: Router){}

  canActivate(route: ActivatedRouteSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let path = route.toString();
    if(this.authService.isAuthenticated() && (path.includes("login") || path.includes("register"))){
      return this.router.navigate(['/home']);
    }
    if(!this.authService.isAuthenticated()) {
      if((path.includes("booking") || path.includes("profile")))
        return this.router.navigate(['/login']);
    }
    return true;
  }
}
