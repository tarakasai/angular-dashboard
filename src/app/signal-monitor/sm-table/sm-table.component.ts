import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'cc-sm-table',
  templateUrl: './sm-table.component.html',
  styleUrls: ['./sm-table.component.scss']
})
export class SmTableComponent implements OnInit, OnChanges {
  @Input() signalMonitorData: any;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log(this.signalMonitorData);
  }

  applyFilter = (val) => {

  };

}
