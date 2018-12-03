import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'cc-schedule-siper',
  templateUrl: './schedule-siper.component.html',
  styleUrls: ['./schedule-siper.component.scss']
})
export class ScheduleSiperComponent implements OnInit {
  allDates = [{
    value: '2018-11-02',
    color: '#55b559'
  },
  {
    value: '2018-11-03',
    color: '#f55145'
  },
  {
    value: '2018-11-04',
    color: '#55b559'
  },
  {
    value: '2018-11-05',
    color: '#f55145'
  },
  {
    value: '2018-11-06',
    color: '#f55145'
  },
  {
    value: '2018-11-07',
    color: '#55b559'
  }];

  schedulesByDate = [];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private dashboardService: DashboardService) { }

  ngOnInit() {
    this.getHldschedulesData();
    this.getHldSiprStatusData();

  }

  getHldschedulesData () {
    this.dashboardService.getScheduleSummary()
    .pipe(first())
    .subscribe(
        data => {
            console.log(data);
            for (var obj of data) {
              if (obj.color === 'GREEN') {
                obj.color = 'linear-gradient(to right,#40dcb2,#40dc7e)';
              }
              if (obj.color === 'RED') {
                obj.color = 'linear-gradient(to right,#ff4ca6,#ff4c6a)';
              }
              if (obj.color === 'YELLOW') {
                obj.color = 'linear-gradient(to right,#fc0,#ffa100)';
              }
            }

            this.schedulesByDate = data;
        },
        error => {
            // this.error = error;
            // this.loading = false;
            console.log(error);
        });
  }

  getHldSiprStatusData () {
    this.dashboardService.getSiprStatus()
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
