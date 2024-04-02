import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { environment } from '../../environments/environment.development';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { catchError, first, map, tap } from 'rxjs';
import { ErrorHandlerService } from './error-handler.service';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private readonly JWT_TOKEN = 'JWT_TOKEN';
isLoggedIn = false;
private jwtHelper: JwtHelperService;
httpOptions: {headers: HttpHeaders} = {
  headers: new HttpHeaders(
    {"Content-Type": "application/json"})
}

  constructor(private http: HttpClient, private router: Router, private errorHandleService: ErrorHandlerService) { 
    this.jwtHelper = new JwtHelperService();
  }

isAuthenticated(){
  return !!localStorage.getItem(this.JWT_TOKEN) && !this.isTokenExpired();
}

getCurrentAccount(): User | null {
  let token = localStorage.getItem(this.JWT_TOKEN);
  if(token){
    let decodedToken = this.jwtHelper.decodeToken(token);
    return new User(decodedToken.id, decodedToken.username, decodedToken.password, decodedToken.isAdmin)
  }
  return null;
}

isAdmin(){
return !!this.getCurrentAccount()?.isAdmin;
}

signUp(user: Omit<User, 'id'>): void {
 this.http.post<{token: string}>(`${environment.apiUrl}/api/user/register`, user, this.httpOptions)
 .pipe(
  first(),
  tap(tokenObject => {
    const token = tokenObject.token;
    localStorage.setItem(this.JWT_TOKEN, token);
    this.router.navigate(['/home'])
  }),
  catchError(this.errorHandleService.handleError<void>('register'))
 )
 .subscribe();
}

logIn(username: Pick<User, "username">, password: Pick<User, "password">): void {
  this.http.post<{token: string}>(`${environment.apiUrl}/api/user/login`, {username, password}, this.httpOptions)
  .pipe(
    first(),
    map(tokenObject => tokenObject.token),
    tap(token => {
      localStorage.setItem(this.JWT_TOKEN, token);
      this.router.navigate(['/home']);
    }),
  catchError(this.errorHandleService.handleError<string>("login")))
  .subscribe();
}

logOut(): void {
  localStorage.removeItem(this.JWT_TOKEN)
  this.router.navigate(['/home'])
}

isTokenExpired(): boolean{
  const token: string | null = localStorage.getItem(this.JWT_TOKEN);
  if(!token){
    return true;
  }
  const isExpired = this.jwtHelper.isTokenExpired(token);
  if(isExpired){
    return true
  }
  return false
}
}
