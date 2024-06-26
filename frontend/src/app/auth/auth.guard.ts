import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

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
    if(!this.authService.isAdmin() && path.includes("admin")) {
      console.log('not-admin')
      return this.router.navigate(['/login']);
    }
    return true;
  }
}
