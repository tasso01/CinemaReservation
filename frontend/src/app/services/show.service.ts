import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Show } from '../models/show';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(private http: HttpClient) { }

  getAllShows(): Observable<Show[]> {
    const url = `${environment.baseUrl}/shows/allShows`
    return this.http.get<Show[]>(url);
  }

  getShowById(idShow: number): Observable<Show>{
    const url = `${environment.baseUrl}/shows/showById/${idShow}`
    return this.http.get<Show>(url);
  }

  addShow(date: Date, price: number, hallId: number, filmId: number): Observable<any> {
    const url = `${environment.baseUrl}/shows/addShow`
    const body = {date, price, hallId, filmId}
    return this.http.post(url, body)
  }

  deleteShow(showId: number) {
    const url = `${environment.baseUrl}/shows/removeShow/${showId}`
    return this.http.delete(url);
  }
}
