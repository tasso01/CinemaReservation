import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {   }
  
  addUsers(url: string, body: {}){
    this.http.post(url, body) 
  }
}
