import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUserById() {
    const url = `${environment.baseUrl}/users/userById`;
    return this.http.get<User>(url);
  }

  getUserProfile() {
    const url = `${environment.baseUrl}/users/profile`;
    return this.http.get<User>(url);
  }
}
