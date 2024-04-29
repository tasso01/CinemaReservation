import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../services/film.service';
import { ShowService } from '../../services/show.service';
import { Film } from '../../models/film';
import { Show } from '../../models/show';
import { HallService } from '../../services/hall.service';
import { Hall } from '../../models/hall';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent implements OnInit{
  films: Film[] = []
  shows: Show[] = []
  halls: Hall[] = []

  constructor(
    private filmService: FilmService,
    private showService: ShowService,
    private hallSerivce: HallService
  ) {}

  ngOnInit(): void {
    this.filmService.getAllFilms().subscribe((filmsFromBackend) => {
      this.films = filmsFromBackend
    })
    this.showService.getAllShows().subscribe((showsFromBackend) => {
      this.shows = showsFromBackend
    })
    this.hallSerivce.getAllHalls().subscribe((hallsFromBackend) => {
      this.halls = hallsFromBackend
    })
  }

  deleteFilm(filmId: number) {
    this.filmService.deleteFilm(filmId).subscribe(() => {
      this.films = this.films.filter(
        (film) => film.id !== filmId
      )
    })
  }

  deleteShow(showId: number) {
    this.showService.deleteShow(showId).subscribe(() => {
      this.shows = this.shows.filter(
        (show) => show.id !== showId
      )
    })
  }

  getFilmTitle(filmId: number) {
    const film = this.films.find(f => f.id === filmId);
    return film ? film.title : '';
  }
  
  getHallNumber(hallId: number) {
    const hall = this.halls.find(h => h.id === hallId)
    return hall ? hall.number : '';
  }

}
