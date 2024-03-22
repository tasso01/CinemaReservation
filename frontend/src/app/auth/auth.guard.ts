import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service'; // Servizio per gestire l'autenticazione dell'utente

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    // Verifica se l'utente è autenticato
    if (this.authService.isLoggedIn) {
      return true; // Lascia l'utente navigare alla pagina
    } else {
      // Reindirizza l'utente alla pagina di login se non è autenticato
      return this.router.parseUrl('login');
    }
  }
}
