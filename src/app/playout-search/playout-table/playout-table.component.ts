import {Component, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'cc-playout-table',
  templateUrl: './playout-table.component.html',
  styleUrls: ['./playout-table.component.scss']
})
export class PlayoutTableComponent implements OnInit, OnChanges {
  displayedColumns: string[] = ['expected_break_time', 'spot_uuid', 'spot_id', 'asset_id',
    'success_count', 'failure_count', 'asset_type_success_rate', 'missed_signals'];
  dataSource: MatTableDataSource<any>;
  displayHeaders = {
    expected_break_time: 'Break Time (UTC)',
    spot_uuid: 'Spot UUID',
    spot_id: 'Spot ID',
    asset_id: 'Asset ID',
    success_count: 'Success Count',
    failure_count: 'Failure Count',
    asset_type_success_rate: 'Success Rate',
    missed_signals: 'Missed Signals'
  };

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input() tableData: any;

  faSearch = faSearch;

  constructor() {}

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnChanges() {
    console.log('ngOnChanges : ', this.tableData);
    if(this.tableData) {
      this.dataSource = new MatTableDataSource(this.tableData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    }
  }

}

