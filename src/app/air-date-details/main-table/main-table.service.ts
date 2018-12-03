import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {catchError, retry, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MainTableService {
  subTableURL = '../../../assets/json/response.json';
  mainTablrURL = '../../../assets/json/airDateMainTable.json';

  constructor(private http: HttpClient) { }

  getSubTableData (val): Observable<any> {
    return this.http.get(this.subTableURL)
      .pipe(
        tap( data => data),
        catchError(error => {
          console.log(error);
          return throwError(error);
        })
      );
  }

  getMainTableData (val): Observable<any> {
    return this.http.get(this.mainTablrURL)
      .pipe(
        tap( data => data),
        catchError(error => {
          console.log(error);
          return throwError(error);
        })
      );
  }
}
