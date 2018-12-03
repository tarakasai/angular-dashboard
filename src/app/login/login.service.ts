import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
constructor(private http: HttpClient) { }

    login(username: string, password: string) {

        const body = JSON.stringify({username: username, password: password});
        let headers = new HttpHeaders();
        // headers: {'Authorization':'"Basic " + btoa("username:password")','header2':'value2'}
        headers = headers.append("Authorization", "Basic " + btoa(username + ":" + password));
        headers = headers.append("Content-Type", "application/x-www-form-urlencoded");

        const httpOptions = {
            headers: headers
        };

        return this.http.get<any>(`/api/check-access`,
                httpOptions
            )
            .pipe(map(user => {
                // login successful if there's a user in the response
                if (user) {
                    // store user details and basic auth credentials in local storage
                    // to keep user logged in between page refreshes
                    // user.authdata = window.btoa(username + ':' + password);
                    // localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        // localStorage.removeItem('currentUser');
    }
}