import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable()
export class AlertsService {
  wiqAlertsURL = '../../../assets/json/wiqdatafiles/wiq tab 1.json';

  constructor(private http: HttpClient) { }

  getAlertsTableData(val): Observable<any> {
    return this.http.get(this.wiqAlertsURL)
      .pipe(
        tap(data => data),
        catchError(error => {
          console.log(error);
          return throwError(error);
        })
      );
  }
}
