import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movie;
  searchtxt: string;
  constructor(private api: ApiService, private route: ActivatedRoute, private _location: Location) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.api.getMovieById(params['params']['id']).subscribe((data) => {
        this.movie = data;
      });
    });

  }
  backClicked() {
    this._location.back();
  }


}
