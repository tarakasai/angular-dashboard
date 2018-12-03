import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
export class DashboardService {
constructor(private http: HttpClient) { }

    getScheduleSummary() {

        
        // let headers = new HttpHeaders();
        
        // headers = headers.append("Content-Type", "application/x-www-form-urlencoded");

        let params = new HttpParams();

        params = params.append('timezone_offset', '-0500');
        params = params.append('viewType', 'PROD');

        const httpOptions = {
            // headers: headers,
            params: params
        };

        return this.http.get<any>(`/api/schedules/airDateSummary`,
                httpOptions
            )
            .pipe(map(user => {
                return user;
            }));
    }

    getSiprStatus() {

        return this.http.get<any>(`/api/siprlsaschedules/siprHldLsaStatus`)
            .pipe(map(user => {
                return user;
            }));

    }

    getRunrateSummary() {

        return this.http.get<any>(`/api/runrate/get-summary`)
            .pipe(map(user => {
                return user;
            }));

    }

    getSignalStatus() {

        return this.http.get<any>(`/api/signals/get-signal-status`)
            .pipe(map(user => {
                return user;
            }));

    }

    getAggregatedEvents(category, field) {

        let params = new HttpParams();

        params = params.append('event_category', category);
        params = params.append('aggregation_field', field);

        const httpOptions = {
            // headers: headers,
            params: params
        };

        return this.http.get<any>(`/api/wiq/wiq-events-aggregated`, httpOptions)
            .pipe(map(user => {
                return user;
            }));

    }

    getFailureRates () {

        return this.http.get<any>(`/api/wiq-run-rates/run-rate-hld`)
            .pipe(map(user => {
                return user;
            }));

    }

    getSignalErrorTypes (programType,signalType) {

        let params = new HttpParams();

        params = params.append('program_type', programType);
        params = params.append('signal_type', signalType);

        const httpOptions = {
            // headers: headers,
            params: params
        };

        return this.http.get<any>(`/api/wiq-error-counts/wiq-signal-error-counts`, httpOptions)
            .pipe(map(user => {
                return user;
            }));

    }



    
}