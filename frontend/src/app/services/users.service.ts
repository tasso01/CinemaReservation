import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = environment.apiUrl + '/users'
  constructor(private http: HttpClient) {   }
  
  getAllUsers(body: {}){
    return this.http.get(this.url + '/allUsers', body) 
  }

  getUserById(body: {}){
    return this.http.get(this.url + 'userById/:id', body,)
  }
}
