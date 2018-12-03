import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class SignalMonitorService {
  signalMonitorURL = '../../assets/json/signalMonitor.json';

  constructor(private http: HttpClient) { }

  getSignalMonitorData(val): Observable<any> {
    return this.http.get(this.signalMonitorURL)
      .pipe(
        tap(data => data),
        catchError(error => {
          console.log(error);
          return throwError(error);
        })
      );
  }
}
