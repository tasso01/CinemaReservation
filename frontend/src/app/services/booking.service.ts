import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  addBooking(seats: number, showId: number): Observable<any>{
    const url = `${environment.baseUrl}/bookings/addBooking`
    const body = {seats, showId}
    return this.http.post(url, body);
  }


}
