import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from '../../models/film';
import { environment } from '../../../environments/environment';
import { FilmService } from '../../services/film.service';
import { ShowService } from '../../services/show.service';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrl: './shows.component.scss'
})
export class ShowsComponent implements OnInit{
  private film$!: Observable<Film[]>

  constructor(private filmService: FilmService, private httpClient: HttpClient, private router : Router) {
  }  

  films: Film[] = [];

  ngOnInit(): void {
    this.filmService.getAllFilms().subscribe((filmsFromBackend) => {
      this.films = filmsFromBackend;
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
}
