import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable()
export class ErrorsService {
  wiqDecisionErrorsURL = '../../../assets/json/wiqdatafiles/wiq tab 2 decision errors.json';
  wiqSignalErrorsURL = '../../../assets/json/wiqdatafiles/wiq tab 2 signal errors.json';

  constructor(private http: HttpClient) { }

  getDecisionErrorsData(val): Observable<any> {
    return this.http.get(this.wiqDecisionErrorsURL)
      .pipe(
        tap(data => data),
        catchError(error => {
          console.log(error);
          return throwError(error);
        })
      );
  }

  getSignalErrorsData(val): Observable<any> {
    return this.http.get(this.wiqSignalErrorsURL)
      .pipe(
        tap(data => data),
        catchError(error => {
          console.log(error);
          return throwError(error);
        })
      );
  }
}
