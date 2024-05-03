import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { environment } from '../../environments/environment.development';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private jwtHelper: JwtHelperService;
  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient, private router: Router) {
    this.jwtHelper = new JwtHelperService();
  }

  isAuthenticated() {
    return !!localStorage.getItem(this.JWT_TOKEN) && !this.isTokenExpired();
  }

  getCurrentAccount(): User | null {
    let token = localStorage.getItem(this.JWT_TOKEN);
    if (token) {
      let decodedToken = this.jwtHelper.decodeToken(token);
      return new User(
        decodedToken.id,
        decodedToken.username,
        decodedToken.password,
        decodedToken.isAdmin
      );
    }
    return null;
  }

  isAdmin() {
    return !!this.getCurrentAccount()?.isAdmin;
  }

  register(username: string, password: string): Observable<any> {
    const url = environment.baseUrl + '/user/register';
    const body = { username, password };
    this.router.navigate(['home']);
    return this.http.post<any>(url, body);
  }

  login(username: string, password: string): Observable<any> {
    const url = environment.baseUrl + '/user/login'; // Assicurati che l'URL sia corretto
    const body = { username, password };
    this.router.navigate(['home']);
    return this.http.post<any>(url, body);
  }

  logOut(): void {
    localStorage.removeItem(this.JWT_TOKEN);
    this.router.navigate(['/home']);
  }

  isTokenExpired(): boolean {
    const token: string | null = localStorage.getItem(this.JWT_TOKEN);
    if (!token) {
      return true;
    }
    const isExpired = this.jwtHelper.isTokenExpired(token);
    if (isExpired) {
      return true;
    }
    return false;
  }
}
