import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class FailureService {
  wiqFailureURL = '../../../assets/json/wiqdatafiles/wiq tab 3.json';

  constructor(private http: HttpClient) { }

  getFailureTableData(val): Observable<any> {
    return this.http.get(this.wiqFailureURL)
      .pipe(
        tap(data => data),
        catchError(error => {
          console.log(error);
          return throwError(error);
        })
      );
  }

}
