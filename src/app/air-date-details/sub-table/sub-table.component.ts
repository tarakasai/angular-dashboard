import {Component, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {faCheckCircle, faSearch} from '@fortawesome/free-solid-svg-icons';

export interface SubTableData {
  networkCode: string,
  syscode: string,
  spot_trans_status_color: string,
  clover_ads_status_color: string,
  mip_status_color: string,
  loiCount: string,
  receivedDate: string,
  blendTimestamp: string,
  processedTimestamp: string,
  lsaLoiCount: string,
};

@Component({
  selector: 'cc-sub-table',
  templateUrl: './sub-table.component.html',
  styleUrls: ['./sub-table.component.scss']
})
export class SubTableComponent implements OnInit, OnChanges {
  displayedColumns: string[] = ['networkCode', 'syscode', 'spot_trans_status_color',
    'clover_ads_status_color', 'mip_status_color', 'loiCount', 'receivedDate',
    'blendTimestamp', 'processedTimestamp', 'lsaLoiCount'];
  tableHeaders = {
    networkCode: 'Network',
    syscode: 'Syscode',
    spot_trans_status_color: 'SpotTrans',
    clover_ads_status_color: 'CloverADS',
    mip_status_color: 'MIP',
    loiCount: 'LOI Count',
    receivedDate: 'Received Date',
    blendTimestamp: 'Blend Timestamp',
    processedTimestamp: 'Processed Timestamp',
    lsaLoiCount: 'LSA LOI Count',
  };
  dataSource: MatTableDataSource<SubTableData>;
  faSearch = faSearch; faCheckCircle = faCheckCircle;
  paddingLeft24Box = ['loiCount', 'lsaLoiCount'];
  tableColors = ['GREEN'];

  @Input() subTableData: Object;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnChanges() {
    if (this.subTableData['data'].length > 0) {
      this.dataSource = new MatTableDataSource(this.subTableData['data']);
      setTimeout(() => this.dataSource.paginator = this.paginator);
    }
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

function createNewUser(id: number): SubTableData {

  return {
    networkCode: 'networkCode' + id,
    syscode: 'syscode' + id,
    spot_trans_status_color: 'spot_trans_status_color' + id,
    clover_ads_status_color: 'clover_ads_status_color' + id,
    mip_status_color: 'mip_status_color' + id,
    loiCount: 'loiCount' + id,
    receivedDate: 'receivedDate' + id,
    blendTimestamp: 'blendTimestamp' + id,
    processedTimestamp: 'processedTimestamp' + id,
    lsaLoiCount: 'lsaLoiCount' + id,
  };

}
