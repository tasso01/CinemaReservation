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

  getShows(): Observable<Show[]> {
    const url = `${environment.apiUrl}/api/shows`
    return this.http.get<Show[]>(url);
  }

  getShow(idShow: number): Observable<Show>{
    const url = `${environment.apiUrl}/api/shows/${idShow}`
    return this.http.get<Show>(url);
  }
}
