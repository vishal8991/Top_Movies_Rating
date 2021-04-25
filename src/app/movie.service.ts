import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {catchError, map, tap } from 'rxjs/operators';
import { Movie } from './movie';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movieUrl = 'api/movies';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private http: HttpClient,
    
  ) { }



  getMovie(id: number): Observable<Movie>{
    const url = `${this.movieUrl}/${id}`;
    
    return this.http.get<Movie>(url).pipe(
      tap(),
      catchError(this.handleError<Movie>(`getMovie id=${id}`))
    );
  }

  getMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(this.movieUrl).pipe(
      tap(),
      catchError(this.handleError<Movie[]>('getMovies', []))
    );
  }

  updateHero(movie: Movie): Observable<any>{
    return this.http.put(this.movieUrl, movie, this.httpOptions).pipe(
      tap(),
      catchError(this.handleError<any>('updateMovie'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      //this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }

}
