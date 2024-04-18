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

constructor(private router : Router, private filmService: FilmService, private show: ShowService, private httpClient: HttpClient){}
  
films: Film[] = [];

ngOnInit(): void {
  this.httpClient.get<Film[]>(environment.baseUrl+"/films/allfilms").subscribe((filmsFromBackend) => {
    this.films = filmsFromBackend;
  })
}

getFilms(): void {
  this.film$ = this.filmService.getFilms()
  .pipe(
    catchError(error => {
      this.router.navigate(['/404']);
      return throwError(() => error);
    })
  );
}

getShows(): void {
  this.show$ = this.show.getShows()
  .pipe(
    catchError(error => {
      this.router.navigate(['/404']);
      return throwError(( ) => error);
    })
  );
}
}
