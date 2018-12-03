import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'cc-run-rate',
  templateUrl: './run-rate.component.html',
  styleUrls: ['./run-rate.component.scss']
})
export class RunRateComponent implements OnInit {
  public graph = {
    data: [
      {
        x: [1, 2, 3, 4],
        y: [0, 2, 3, 5],
        fill: 'tozeroy',
        type: 'scatter'
      },
    ],
    layout: {
      margin: {
        l: 40,
        r: 20,
        b: 40,
        t: 30,
        pad: 4
      },
    },
  };

  constructor(private route: ActivatedRoute,
    private router: Router,
    private dashboardService: DashboardService) { }

  ngOnInit() {
    this.getHldRunrateData();
   
  }

  getHldRunrateData () {
    this.dashboardService.getRunrateSummary()
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
