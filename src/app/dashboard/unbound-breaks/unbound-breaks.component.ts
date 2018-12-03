import {Component, OnInit, ViewChild} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import {UnboundSuppressComponent} from './unbound-suppress/unbound-suppress.component';

import { first } from 'rxjs/operators';
import { DashboardService } from '../dashboard.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'cc-unbound-breaks',
  templateUrl: './unbound-breaks.component.html',
  styleUrls: ['./unbound-breaks.component.scss']
})
export class UnboundBreaksComponent implements OnInit {
  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

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

    this.getUnboundBreaksData();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getUnboundBreaksData () {
    this.dashboardService.getAggregatedEvents('UNBOUND BREAKS', 'network')
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

  openSuppressModal = (row) => {
    console.log(row);
    const dialogRef = this.dialog.open(UnboundSuppressComponent, {
      width: '420px',
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
