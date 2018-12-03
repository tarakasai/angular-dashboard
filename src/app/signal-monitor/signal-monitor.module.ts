import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignalMonitorRoutingModule } from './signal-monitor-routing.module';
import { SignalMonitorComponent } from './signal-monitor.component';
import { SharedModule } from '../shared/shared.module';
import { SmTableComponent } from './sm-table/sm-table.component';

@NgModule({
  imports: [
    CommonModule,
    SignalMonitorRoutingModule,
    SharedModule
  ],
  declarations: [SignalMonitorComponent, SmTableComponent]
})
export class SignalMonitorModule { }
