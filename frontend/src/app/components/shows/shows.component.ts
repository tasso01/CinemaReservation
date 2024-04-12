import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from '../../models/film';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrl: './shows.component.scss'
})
export class ShowsComponent {

  films: Film[] = [];

  constructor(private httpClient: HttpClient) {
    httpClient.get<Film[]>(environment.baseUrl+"/films/allfilms").subscribe((filmsFromBackend) => {
      this.films = filmsFromBackend;
    })
  }

}
