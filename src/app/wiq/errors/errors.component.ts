import {Component, OnInit} from '@angular/core';
import {ErrorsService} from './errors.service';

@Component({
  selector: 'cc-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss'],
  providers: [ErrorsService]
})
export class ErrorsComponent implements OnInit {

  public allGraphs = {
    signalGraph: {},
    decisionGraph: {}
  };

  constructor(private errorsService: ErrorsService) {
  }

  ngOnInit() {
    this.errorsService.getSignalErrorsData('').subscribe(
      response => {
        console.log(response);
        this.setValues('signalGraph', response);
      }
    );
    this.errorsService.getDecisionErrorsData('').subscribe(
      response => {
        console.log(response);
        this.setValues('decisionGraph', response);
      }
    );
  }

  setValues = (val, res) => {
    const mainData = [];
    res['errorCodeQuantityDetailsList'].map((each, index) => {
      if(index !== -1) {
        mainData.push({
          x: res['timestamps'],
          y: each['quantities'],
          name: 'Code ' + each['code'],
          yaxis: 'y' + (index + 1),
          type: 'scatter'
        });
      }
    });
    console.log('mainData : ', mainData);
    this.allGraphs = {
      ...this.allGraphs,
      [val]: {
        data: mainData,
        layout: {
          title: 'Signal Graph',
          yaxis: {},
          yaxis2: {
            titlefont: {color: 'rgb(148, 103, 189)'},
            tickfont: {color: 'rgb(148, 103, 189)'},
            overlaying: 'y',
            side: 'right'
          },
          yaxis3: {
            titlefont: {color: 'rgb(148, 103, 189)'},
            tickfont: {color: 'rgb(148, 103, 189)'},
            overlaying: 'y1',
            side: 'left'
          }
        },
      }
    };
  };

}
