import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WiqRoutingModule } from './wiq-routing.module';
import { WiqComponent } from './wiq.component';
import { SharedModule } from '../shared/shared.module';
import { FailureComponent } from './failure/failure.component';
import { AlertsComponent } from './alerts/alerts.component';
import { ErrorsComponent } from './errors/errors.component';
import { PlotlyModule } from 'angular-plotly.js';

@NgModule({
  imports: [
    CommonModule,
    WiqRoutingModule,
    SharedModule,
    PlotlyModule
  ],
  declarations: [WiqComponent, FailureComponent, AlertsComponent, ErrorsComponent]
})
export class WiqModule { }
