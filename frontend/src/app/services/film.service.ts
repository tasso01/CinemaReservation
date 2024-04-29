import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Film } from '../models/film';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getAllFilms(): Observable<Film[]> {
    const url = `${environment.baseUrl}/films/allFilms`
    return this.http.get<Film[]>(url);
  }

  getFilmById(id: number): Observable<Film> {
    const url = `${environment.baseUrl}/films/filmById/${id}`
    return this.http.get<Film>(url);
  }

  addFilm(body: {}) {
    const url = `${environment.baseUrl}/films/addFilm`
    this.http.post(url, body)
  }

  deleteFilm(idFilm: number) {
    const url = `${environment.baseUrl}/films/removeFilm/${idFilm}`
    return this.http.delete(url);
  }

  canAdmin(){
    return this.authService.isAdmin()
  }

}
