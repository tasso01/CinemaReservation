import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = environment.apiUrl + '/users'
  constructor(private http: HttpClient) {   }
  
  getAllUsers(body: {}){
    return this.http.get(this.url + '/allUsers', body) 
  }

  getUserById() {
    const url = `${environment.baseUrl}/users/userById`
    return this.http.get<User>(url)
  }
}
