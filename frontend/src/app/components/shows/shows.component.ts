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

  constructor() {
  }

}
