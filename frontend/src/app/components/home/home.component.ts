import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmService } from '../../services/film.service';
import { Observable, catchError, throwError } from 'rxjs';
import { Film } from '../../models/film';
import { ShowService } from '../../services/show.service';
import { Show } from '../../models/show';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
film$!: Observable<Film[]>
show$!: Observable<Show[]>

constructor(private router : Router, private filmService: FilmService, private showService: ShowService, private httpClient: HttpClient){}
  
films: Film[] = [];
shows: Show[] = [];

ngOnInit(): void {
  this.filmService.getAllFilms().subscribe((filmsFromBackend) => {
    this.films = filmsFromBackend;
  })
  this.showService.getShows().subscribe(showBack => {
    this.shows = showBack;
  })
}

getFilms(): void {
  this.film$ = this.filmService.getAllFilms()
  .pipe(
    catchError(error => {
      this.router.navigate(['/404']);
      return throwError(() => error);
    })
  );
}

getShows(): void {
  this.show$ = this.showService.getShows()
  .pipe(
    catchError(error => {
      this.router.navigate(['/404']);
      return throwError(( ) => error);
    })
  );
}
}
