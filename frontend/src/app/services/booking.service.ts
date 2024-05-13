import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Booking } from '../models/booking';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  constructor(private http: HttpClient, private router: Router) {}

  addBooking(seats: number, showId: number): Observable<any> {
    const url = `${environment.baseUrl}/bookings/addBooking`;
    const body = { seats, showId };
    this.router.navigate(['booking']);
    return this.http.post(url, body);
  }

  getBookingByUser(): Observable<Booking[]> {
    const url = `${environment.baseUrl}/bookings/bookingsByUser`;
    return this.http.get<Booking[]>(url);
  }

  deleteBooking(bookingId: number) {
    const url = `${environment.baseUrl}/bookings/removeBooking/${bookingId}`;
    return this.http.delete(url);
  }
}
