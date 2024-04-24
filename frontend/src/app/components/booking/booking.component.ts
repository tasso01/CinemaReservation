import { Component, Input, OnInit } from '@angular/core';
import { Booking } from '../../models/booking';
import { BookingService } from '../../services/booking.service';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';
import { ShowService } from '../../services/show.service';
import { FilmService } from '../../services/film.service';
import { HallService } from '../../services/hall.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss',
})
export class BookingComponent implements OnInit {
  user!: User;
  bookings: Booking[] = [];
  shows: { [key: string]: any } = {};
  films: { [key: string]: any } = {};
  halls: { [key: string]: any } = {};

  constructor(
    private bookingService: BookingService,
    private userService: UsersService,
    private showService: ShowService,
    private filmService: FilmService,
    private hallService: HallService
  ) {}

  ngOnInit(): void {
    this.bookingService.getBookingByUser().subscribe((bookingsFromBackend) => {
      this.bookings = bookingsFromBackend;
    });
    this.userService.getUserById().subscribe((userFromBackend) => {
      this.user = userFromBackend;
    });
  }

  deleteBooking(bookingId: number) {
    this.bookingService.deleteBooking(bookingId).subscribe(() => {
      this.bookings = this.bookings.filter(
        (booking) => booking.id !== bookingId
      );
    });
  }

  getShowDate(showId: number): string {
    if (!this.shows[showId]) {
      this.showService.getShowById(showId).subscribe((show) => {
        this.shows[showId] = show;
      });
    }
    return this.shows[showId] ? this.shows[showId].date : '';
  }

  getFilmTitle(showId: number): string {
    const show = this.shows[showId];
    if (!show) {
      this.showService.getShowById(showId).subscribe((show) => {
        this.shows[showId] = show;
        this.loadFilmDetails(show.filmId);
      });
      return '';
    }
    return this.films[show.filmId]?.title || '';
  }

  loadFilmDetails(filmId: number): void {
    if (!this.films[filmId]) {
      this.filmService.getFilmById(filmId).subscribe((film) => {
        this.films[filmId] = film;
      });
    }
  }

  getHallNumber(showId: number): string {
    const show = this.shows[showId];
    if (!show) {
      this.showService.getShowById(showId).subscribe((show) => {
        this.shows[showId] = show;
        this.loadHallDetails(show.hallId);
      });
      return '';
    }
    return this.halls[show.hallId]?.number || '';
  }

  loadHallDetails(hallId: number): void {
    if (!this.halls[hallId]) {
      this.hallService.getHallById(hallId).subscribe((hall) => {
        this.halls[hallId] = hall;
      });
    }
  }
}
