import { Component, Input, OnInit } from '@angular/core';
import { Booking } from '../../models/booking';
import { BookingService } from '../../services/booking.service';
import { User } from '../../models/user';
import { Show } from '../../models/show';
import { UsersService } from '../../services/users.service';
import { ShowService } from '../../services/show.service';
import { FilmService } from '../../services/film.service';
import { Film } from '../../models/film';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss',
})
export class BookingComponent implements OnInit {
  user!: User;
  bookings: Booking[] = [];
  shows: Show[] = [];
  films: Film[] = [];

  constructor(
    private bookingService: BookingService,
    private userService: UsersService,
    private showService: ShowService,
    private filmService: FilmService
  ) {}

  ngOnInit(): void {
    this.bookingService.getBookingByUser().subscribe((bookingsFromBackend) => {
      this.bookings = bookingsFromBackend;
    });
    this.showService.getAllShows().subscribe((showFromBackend) => {
      this.shows = showFromBackend;
    });
    this.filmService.getAllFilms().subscribe((filmsFromBackend) => {
      this.films = filmsFromBackend;
    })
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

  getShowDate(showId: number): Date {
    const show = this.shows.find((s) => s.id === showId);
    return show.date;
  }

  getFilmTitle(showId: number): string {
    const show = this.shows.find((s) => s.id === showId);
    const film = this.films.find((f) => f.id === show.filmId);
    return film.title;
  }

}
