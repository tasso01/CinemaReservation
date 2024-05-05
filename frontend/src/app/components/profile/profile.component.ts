import { Component, OnInit } from '@angular/core';
import { Booking } from '../../models/booking';
import { BookingService } from '../../services/booking.service';
import { ShowService } from '../../services/show.service';
import { Show } from '../../models/show';
import { FilmService } from '../../services/film.service';
import { HallService } from '../../services/hall.service';
import { User } from '../../models/user';
import { Film } from '../../models/film';
import { Hall } from '../../models/hall';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  user: User;
  bookings: Booking[] = [];
  shows: Show[] = [];
  films: Film[] = [];
  halls: Hall[] = [];
  columns: string[] = ['FILM', 'HALL', 'SEATS', 'PRICE', 'DATE'];

  constructor(
    private bookingService: BookingService,
    private showService: ShowService,
    private filmService: FilmService,
    private hallService: HallService,
    private authService: AuthService
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
    });
    this.hallService.getAllHalls().subscribe((hallsFromBackend) => {
      this.halls = hallsFromBackend;
    });
    this.user = this.authService.getCurrentAccount();
  }

  getShowDate(showId: number): Date {
    const show = this.shows.find((s) => s.id === showId);
    return show ? show.date : undefined;
  }

  getFilmTitle(showId: number): string {
    const show = this.shows.find((s) => s.id === showId);
    const film = this.films.find((f) => f.id === show.filmId);
    return film ? film.title : '';
  }

  getHallNumber(showId: number): number {
    const show = this.shows.find((s) => s.id === showId);
    const hall = this.halls.find((h) => h.id === show.hallId);
    return hall ? hall.number : undefined;
  }
}
