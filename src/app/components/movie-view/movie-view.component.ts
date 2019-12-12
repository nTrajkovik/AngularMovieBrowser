import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.scss']
})
export class MovieViewComponent implements OnInit {

  movies = [];
  searchtxt: string;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getMovies(this.searchtxt).subscribe((data) => {
      this.movies = data['Search'];

    });

  }
  search() {
    this.api.getMovies(this.searchtxt).subscribe((data) => {
      this.movies = data['Search'];

    });
  }
  

}
