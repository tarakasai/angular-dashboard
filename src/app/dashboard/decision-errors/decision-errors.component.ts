import {Component, OnInit, ViewChild, Inject} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource, MatPaginator, MatSort} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import { first } from 'rxjs/operators';
import { DashboardService } from '../dashboard.service';

export interface DialogData {
  animal: string;
  name: string;
}

const ELEMENT_DATA = [
  {
    position: 1,
    name: 6,
    weight: {
      min: 591300,
      max: 2000000
    },
    symbol: 29
  },
  {
    position: 2,
    name: 7,
    weight: {
      min: 722830,
      max: 3500000
    },
    symbol: 20
  }
];

@Component({
  selector: 'cc-decision-errors',
  templateUrl: './decision-errors.component.html',
  styleUrls: ['./decision-errors.component.scss']
})
export class DecisionErrorsComponent implements OnInit {
  faChevronDown = faChevronDown;
  toggleSignal = true;
  activeLink = 'info';
  displayedColumns: string[] = ['select', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  selection = new SelectionModel(true, []);
  animal: string;
  name: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  darkBlack = '#000000';
  disableRippleBool = true;

  constructor(public dialog: MatDialog,
              private route: ActivatedRoute,
              private router: Router,
              private dashboardService: DashboardService) {
  }

  ngOnInit() {
    this.getDecisionErrorsHldData();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getDecisionErrorsHldData () {
    this.dashboardService.getSignalErrorTypes('LSA', 'P1')
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

  activeState = (val) => {
    this.activeLink = val;
  };

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

  openDialog(): void {
    const dialogRef = this.dialog.open(DecisionErrorsComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
