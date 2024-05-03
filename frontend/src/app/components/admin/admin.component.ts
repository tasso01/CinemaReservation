import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../services/film.service';
import { ShowService } from '../../services/show.service';
import { Film } from '../../models/film';
import { Show } from '../../models/show';
import { HallService } from '../../services/hall.service';
import { Hall } from '../../models/hall';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { response } from 'express';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class AdminComponent implements OnInit {
  addFilmForm: FormGroup;
  addShowForm: FormGroup;
  films: Film[] = [];
  shows: Show[] = [];
  halls: Hall[] = [];
  selectedHallId: number;
  selectedFilmId: number;

  constructor(
    private filmService: FilmService,
    private showService: ShowService,
    private hallSerivce: HallService
  ) {}

  ngOnInit(): void {
    this.filmService.getAllFilms().subscribe((filmsFromBackend) => {
      this.films = filmsFromBackend;
    });
    this.showService.getAllShows().subscribe((showsFromBackend) => {
      this.shows = showsFromBackend;
    });
    this.hallSerivce.getAllHalls().subscribe((hallsFromBackend) => {
      this.halls = hallsFromBackend;
    });
    this.addFilmForm = new FormGroup({
      film: new FormControl(null, Validators.required),
      director: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      duration: new FormControl(null, Validators.required),
      image: new FormControl(null, Validators.required),
    });
    this.addShowForm = new FormGroup({
      date: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      hallId: new FormControl(null, Validators.required),
      filmId: new FormControl(null, Validators.required)
    });
  }

  addFilm() {
    this.filmService
      .addFilm(
        this.addFilmForm.value.film,
        this.addFilmForm.value.director,
        this.addFilmForm.value.description,
        this.addFilmForm.value.duration,
        this.addFilmForm.value.image
      )
      .subscribe((response) => {
        console.log('film aggiunto con successo', response);
      });
  }

  addShow() {
    this.showService
      .addShow(
        this.addShowForm.value.date,
        this.addShowForm.value.price,
        this.addShowForm.value.hallId,
        this.addShowForm.value.filmId
      )
      .subscribe((response) => {
        console.log('spettacolo aggiunto con successo', response);
      });
  }

  deleteFilm(filmId: number) {
    this.filmService.deleteFilm(filmId).subscribe(() => {
      this.films = this.films.filter((film) => film.id !== filmId);
    });
  }

  deleteShow(showId: number) {
    this.showService.deleteShow(showId).subscribe(() => {
      this.shows = this.shows.filter((show) => show.id !== showId);
    });
  }

  getFilmTitle(filmId: number) {
    const film = this.films.find((f) => f.id === filmId);
    return film ? film.title : '';
  }

  getHallNumber(hallId: number) {
    const hall = this.halls.find((h) => h.id === hallId);
    return hall ? hall.number : '';
  }
}
