import { Component, OnInit } from '@angular/core';
import { Booking } from '../../models/booking';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {

  bookings: Booking[] = []

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    let token = localStorage.getItem('JWT_TOKEN');

    this.httpClient.get<Booking[]>(environment.baseUrl+"/bookings/bookingsByUser").subscribe((bookingsByUser) => {
      this.bookings = bookingsByUser;
    })
  }

}
