import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Hall } from '../models/hall';

@Injectable({
  providedIn: 'root',
})
export class HallService {
  constructor(private http: HttpClient) {}

  getAllHalls(): Observable<Hall[]> {
    const url = `${environment.baseUrl}/halls/allHalls`;
    return this.http.get<Hall[]>(url);
  }

  getHallById(id: number): Observable<Hall> {
    const url = `${environment.baseUrl}/halls/hallById/${id}`;
    return this.http.get<Hall>(url);
  }
}
