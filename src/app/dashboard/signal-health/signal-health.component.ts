import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'cc-signal-health',
  templateUrl: './signal-health.component.html',
  styleUrls: ['./signal-health.component.scss']
})
export class SignalHealthComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private dashboardService: DashboardService) { }

  ngOnInit() {
    this.getHldSignalHealthData();
  }

  getHldSignalHealthData () {
    this.dashboardService.getSignalStatus()
    .pipe(first())
    .subscribe(
        data => {
            console.log(data);
        },
        error => {
            // this.error = error;
            // this.loading = false;
            console.log(error);
        });
  }

}
