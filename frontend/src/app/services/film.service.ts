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

  addFilm(film: Film): Observable<any>{
    const url = `${environment.apiUrl}/api/films`
    return this.http.post(url, film);
  }

  deleteFilm(idFilm: number): Observable<any>{
    const url = `${environment.apiUrl}/api/films/${idFilm}`
    return this.http.delete<any>(url);
  }

  canAdmin(){
    return this.authService.isAdmin()
  }

}
