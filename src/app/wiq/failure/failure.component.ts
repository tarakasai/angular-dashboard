import {Component, OnInit, ViewChild} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {FailureService} from './failure.service';

export interface FailureElement {
  market: string;
  zone: string;
  network: string;
  total: string;
}

@Component({
  selector: 'cc-failure',
  templateUrl: './failure.component.html',
  styleUrls: ['./failure.component.scss'],
  providers: [FailureService]
})
export class FailureComponent implements OnInit {
  faSearch = faSearch; failureTableData = {loading: true, data: []};
  displayedColumns: string[] = ['select', 'market', 'zone', 'network', 'total', 'no_psn', 'null_asset', 'mismatch_asset', 'no_start_psn', 'no_end_psn', 'playtime_error'];
  dataSource: MatTableDataSource<FailureElement>;
  selection = new SelectionModel<FailureElement>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  darkBlack = '#000000';
  disableRippleBool = true;
  constructor(private failureService: FailureService) {}

  ngOnInit() {
    this.failureService.getFailureTableData('').subscribe(
      response => {
        console.log(response);
        this.failureTableData = {
          loading: false,
          data: response['failureRateRecords']
        };
        this.dataSource = new MatTableDataSource(this.failureTableData['data']);
        setTimeout(() => {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
      }
    );
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

}
