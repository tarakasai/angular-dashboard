import {Component, OnInit, ViewChild} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource, MatPaginator, MatSort} from '@angular/material';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

import {AlertsService} from './alerts.service';

export interface AlertTableType {
  event_category: string,
  market: string,
  zone_name_syscode: string,
  network: string,
  create_timestamp_utc: string,
  close_timestamp_utc: string,
  status: string,
}

@Component({
  selector: 'cc-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss'],
  providers: [AlertsService]
})
export class AlertsComponent implements OnInit {

  faSearch = faSearch;
  alertsTableData = {loading: true, data: []};
  displayedColumns: string[] = ['select', 'event_category', 'market', 'zone_name_syscode',
    'network', 'create_timestamp_utc', 'close_timestamp_utc', 'status'];
  tableHeader = {
    event_category: 'Issue Category',
    market: 'Market',
    zone_name_syscode: 'Zone',
    network: 'Network',
    create_timestamp_utc: 'Alert Time (UTC)',
    close_timestamp_utc: 'Recovery Time (UTC)',
    status: 'Status'
  };
  dataSource: MatTableDataSource<AlertTableType>;
  selection = new SelectionModel<AlertTableType>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  disableRippleBool = true;

  constructor(private alertsService: AlertsService) { }

  ngOnInit() {
    this.alertsService.getAlertsTableData('').subscribe(
      response => {
        console.log(response['wiqEventAlertSummaries']);
        this.alertsTableData = {
          loading: false,
          data: response['wiqEventAlertSummaries'],
        };
        this.dataSource = new MatTableDataSource(this.alertsTableData['data']);
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

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
