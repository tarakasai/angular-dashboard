import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource, MatPaginator, MatSort, MatDialog} from '@angular/material';

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import {SignalErrorModalComponent} from './signal-error-modal/signal-error-modal.component';

import { first } from 'rxjs/operators';
import { DashboardService } from '../dashboard.service';

const ELEMENT_DATA = [
  { position: 1,
    name: 1,
    weight: {
      min: 138,
      max: 50000
    },
    symbol: 0
  },
  { position: 2,
    name: 4,
    weight: {
      min: 3980,
      max: 200000
    },
    symbol: 1
  },
  { position: 3,
    name: 7,
    weight: {
      min: 1272836,
      max: 2500000
    },
    symbol: 50
  },
  { position: 3,
    name: 7,
    weight: {
      min: 1272836,
      max: 2500000
    },
    symbol: 50
  },
  { position: 3,
    name: 7,
    weight: {
      min: 1272836,
      max: 2500000
    },
    symbol: 50
  }
];

@Component({
  selector: 'cc-signal-error',
  templateUrl: './signal-error.component.html',
  styleUrls: ['./signal-error.component.scss']
})
export class SignalErrorComponent implements OnInit {
  faChevronDown = faChevronDown; toggleSignal = true;
  displayedColumns: string[] = ['select', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  selection = new SelectionModel(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  darkBlack = '#000000';
  disableRippleBool = true;

  constructor(public dialog: MatDialog,
              private route: ActivatedRoute,
              private router: Router,
              private dashboardService: DashboardService) { }

  ngOnInit() {
    this.getSignalErrorsHldData();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getSignalErrorsHldData () {
    this.dashboardService.getSignalErrorTypes('LSA', 'P2')
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

  moreInfo = () => {
    this.toggleSignal = !this.toggleSignal;
  };

  // activeState = (val) => {
  //   this.activeLink = val;
  // };

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  openSingalErrorModal = () => {
    const dialogRef = this.dialog.open(SignalErrorModalComponent, {
      width: '420px',
      data: ''
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
