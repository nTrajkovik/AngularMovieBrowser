import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Rx from "rxjs/Rx";
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = 'f79aeba3';
  baseURL = 'http://www.omdbapi.com/?apikey=';
  authenticatedURL = this.baseURL + this.API_KEY;

  constructor(private httpClient: HttpClient) { }

  public httpget(url){
    console.log("REQUEST SENT TO: " + url);
    return this.httpClient.get(url).pipe(
      map((data: any) => {
        console.log(data);
        return data;
      }), catchError( error => {
        return throwError( 'Something went wrong!' );
      })
   );
  }
  public getMovies(search = 'People'){
    return this.httpget(`${this.authenticatedURL}&s=${search}`);
  }
  public getMovieById(id){
    return this.httpget(`${this.authenticatedURL}&i=${id}`);
  }
  

}
