import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../services/film.service';
import { ShowService } from '../../services/show.service';
import { Film } from '../../models/film';
import { Show } from '../../models/show';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent implements OnInit{
  films: Film[] = []
  shows: Show[] = []

  constructor(
    private filmService: FilmService,
    private showService: ShowService
  ) {}

  ngOnInit(): void {
    this.filmService.getAllFilms().subscribe((filmsFromBackend) => {
      this.films = filmsFromBackend
    })
    this.showService.getAllShows().subscribe((showsFromBackend) => {
      this.shows = showsFromBackend
    })
  }

  getFilmTitle(filmId: number) {
    const film = this.films.find(f => f.id === filmId);
    return film ? film.title : '';
  }
  
}
