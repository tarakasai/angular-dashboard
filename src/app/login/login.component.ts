import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

import { AuthenticationService } from './login.service';

@Component({
  selector: 'cc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginDetails = {
    username: {
      value: '',
      error: false,
    },
    password: {
      value: '',
      error: false,
    },
    loading: false,
    serverError: false,
    loginFailMessage: ''
  };

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() { }

  submitLoginDetails = () => {
    
    if (this.loginDetails.username.value && this.loginDetails.password.value) {
      this.loginDetails = {
        ...this.loginDetails,
        loading: true,
        serverError: false,
      };
      this.authenticationService.login(this.loginDetails.username.value, this.loginDetails.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate(['/dashboard']);
                    console.log(data);
                    // this.loginDetails = {
                    //   ...this.loginDetails,
                    //   loading: false,
                    // };
                },
                error => {
                  this.loginDetails = {
                    ...this.loginDetails,
                    loading: false,
                    serverError: true,
                    loginFailMessage: error.error.message
                  };
                    // this.error = error;
                    // this.loading = false;
                    console.log(error.error.message);
                });
    } else if (this.loginDetails.username.value) {
      this.loginDetails = {
        ...this.loginDetails,
        password: {
          ...this.loginDetails.password,
          error: true,
        }
      };
    } else {
      this.loginDetails = {
        ...this.loginDetails,
        username: {
          ...this.loginDetails.username,
          error: true,
        }
      };
    }
  }

  loginInputChanged = (event, val) => {
    this.loginDetails = {
      ...this.loginDetails,
      [val]: {
        ...this.loginDetails[val],
        error: false,
      }
    };
  }

}
