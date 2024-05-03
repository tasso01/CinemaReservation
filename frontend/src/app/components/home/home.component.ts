import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmService } from '../../services/film.service';
import { Observable, catchError, throwError } from 'rxjs';
import { Film } from '../../models/film';
import { ShowService } from '../../services/show.service';
import { Show } from '../../models/show';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  film$!: Observable<Film[]>;
  show$!: Observable<Show[]>;
  posti$!: number;
  constructor(
    private router: Router,
    private filmService: FilmService,
    private showService: ShowService,
    private bookingService: BookingService
  ) {}

  films: Film[] = [];
  shows: Show[] = [];

  ngOnInit(): void {
    this.filmService.getAllFilms().subscribe((filmsFromBackend) => {
      this.films = filmsFromBackend;
    });
    this.showService.getAllShows().subscribe((showBack) => {
      this.shows = showBack;
    });
  }

  getFilms(): void {
    this.film$ = this.filmService.getAllFilms().pipe(
      catchError((error) => {
        this.router.navigate(['/404']);
        return throwError(() => error);
      })
    );
  }

  getShows(): void {
    this.show$ = this.showService.getAllShows().pipe(
      catchError((error) => {
        this.router.navigate(['/404']);
        return throwError(() => error);
      })
    );
  }

  addBooking(show: Show): void {
    const postiString = window.prompt('Inserisci i posti da prenotare: ');
    const posti = postiString !== null ? parseInt(postiString, 10) : 1;
    this.bookingService.addBooking(posti, show.id).subscribe((response) => {
      console.log('prenotazione effettuata con successo', response);
    });
  }

  getShowsByFilm(filmId: number): Show[] {
    return this.shows.filter((show) => show.filmId === filmId);
  }
}
