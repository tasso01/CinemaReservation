import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
url = environment.apiUrl + 'authentication';
isLoggedIn = false;

  constructor(private http: HttpClient) { }

  isAuthenticated(){
    return this.isLoggedIn;
  }

isRoleAdmin(){

}

signUp(body: {}){
 return this.http.post(this.url + '/register', body)
}

logIn(body: {}){
  return this.http.post(this.url + '/login', body)
}

logOut(body: {}){
  return this.http.post(this.url + '/logout', body)
}
}
