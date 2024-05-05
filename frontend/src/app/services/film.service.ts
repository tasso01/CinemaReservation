import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Film } from '../models/film';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  getAllFilms(): Observable<Film[]> {
    const url = `${environment.baseUrl}/films/allFilms`;
    return this.http.get<Film[]>(url);
  }

  addFilm(
    title: string,
    director: string,
    description: string,
    duration: number,
    image: string
  ): Observable<any> {
    const url = `${environment.baseUrl}/films/addFilm`;
    const body = { title, director, description, duration, image };
    this.router.navigate(['home']);
    return this.http.post(url, body);
  }

  deleteFilm(idFilm: number) {
    const url = `${environment.baseUrl}/films/removeFilm/${idFilm}`;
    return this.http.delete(url);
  }
}
