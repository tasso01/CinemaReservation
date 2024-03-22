import { Injectable } from '@angular/core';
import { CanActivateFn } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

isLoggedIn = false;

  constructor() { }

  isAuthenticated(){
    return this.isLoggedIn;
  }
}
