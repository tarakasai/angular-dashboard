import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule, MatInputModule} from '@angular/material';

import {AirDateDetailsRoutingModule} from './air-date-details-routing.module';
import {AirDateDetailsComponent} from './air-date-details.component';
import {SharedModule} from '../shared/shared.module';
import {MainTableComponent} from './main-table/main-table.component';
import {SubTableComponent} from './sub-table/sub-table.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    AirDateDetailsRoutingModule,
    SharedModule,
    MatSelectModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
  ],
  declarations: [
    AirDateDetailsComponent,
    MainTableComponent,
    SubTableComponent,
  ]
})
export class AirDateDetailsModule {
}
