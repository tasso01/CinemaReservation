import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Show } from '../models/show';
import { environment } from '../../environments/environment.development';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ShowService {
  constructor(private http: HttpClient, private router: Router) {}

  getAllShows(): Observable<Show[]> {
    const url = `${environment.baseUrl}/shows/allShows`;
    return this.http.get<Show[]>(url);
  }

  addShow(
    date: Date,
    price: number,
    hallId: number,
    filmId: number
  ): Observable<any> {
    const url = `${environment.baseUrl}/shows/addShow`;
    const body = { date, price, hallId, filmId };
    this.router.navigate(['home']);
    return this.http.post(url, body);
  }

  deleteShow(showId: number) {
    const url = `${environment.baseUrl}/shows/removeShow/${showId}`;
    return this.http.delete(url);
  }
}
