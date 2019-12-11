import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = 'f79aeba3';
  baseURL = 'http://www.omdbapi.com/?apikey=';
  authenticatedURL = this.baseURL + this.API_KEY;

  constructor(private httpClient: HttpClient) { }

  public getMovies(search = 'People'){
    return this.httpClient.get(`${this.authenticatedURL}&s=${search}`);
  }


}
