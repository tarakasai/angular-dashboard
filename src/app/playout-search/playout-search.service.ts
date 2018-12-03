import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayoutSearchService {
  playoutSearchURL = '../../assets/json/playoutSearch.json';

  constructor(private http: HttpClient) { }

  playoutSearchData (val): Observable<any> {
    return this.http.get(this.playoutSearchURL)
      .pipe(
        tap( data => data),
        catchError(error => {
          console.log(error);
          return throwError(error);
        })
      );
  }
}
