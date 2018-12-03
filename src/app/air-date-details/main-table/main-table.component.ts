import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {faSearch, faCheckCircle} from '@fortawesome/free-solid-svg-icons';

import {MainTableService} from './main-table.service';

export interface MainTableData {
  market_code: string,
  total_status: number,
  spot_trans_status: number,
  spot_trans_status_color: string,
  clover_ads_status: number,
  clover_ads_status_color: string,
  mip_status: number,
  mip_status_color: string,
}

@Component({
  selector: 'cc-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  providers: [MainTableService]
})
export class MainTableComponent implements OnInit {
  displayedColumns: string[] = ['market_code', 'spot_trans_status_color', 'clover_ads_status_color', 'mip_status_color'];
  dataSource: MatTableDataSource<MainTableData>;
  expandedElement: MainTableData; tableColors = ['GREEN'];
  faSearch = faSearch; faCheckCircle = faCheckCircle;
  subTableData = {
    loading: true,
    data: []
  };
  mainTableData = {
    loading: true,
    data: []
  };
  tableHeaders = {
    market_code: 'Market',
    spot_trans_status_color: 'Spot Trans Status',
    clover_ads_status_color: 'Color ADS Status',
    mip_status_color: 'MIP Status',
  };

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private mainTableService: MainTableService) { }

  ngOnInit() {
    this.mainTableService.getMainTableData('nothing').subscribe(
      response => {
        this.mainTableData = {
          loading: false,
          data: response
        };
        this.dataSource = new MatTableDataSource(this.mainTableData['data']);
        setTimeout(() => {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
      }
    );
    this.mainTableService.getSubTableData('something').subscribe(
      response => {
        this.subTableData = {
          loading: false,
          data: response,
        };
      }
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
