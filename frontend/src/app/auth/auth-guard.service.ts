import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const AuthGuardService: CanActivateFn = (
  route: ActivatedRouteSnapshot
) => {
  let path = route.toString();
  if (
    (path.includes('login') || path.includes('register')) &&
    inject(AuthService).isAuthenticated()
  )
    return inject(Router).createUrlTree(['/home']);

  if (
    !inject(AuthService).isAuthenticated() &&
    (path.includes('profile') || path.includes('booking'))
  ) {
    return inject(Router).createUrlTree(['/login']);
  }

  return true;
};
