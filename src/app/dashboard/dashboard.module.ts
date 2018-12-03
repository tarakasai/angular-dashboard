import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlotlyModule } from 'angular-plotly.js';
import { MatDialogModule } from '@angular/material/dialog';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { UnboundBreaksComponent } from './unbound-breaks/unbound-breaks.component';
import { NoDecisionComponent } from './no-decision/no-decision.component';
import { FailureRateComponent } from './failure-rate/failure-rate.component';
import { SignalErrorComponent } from './signal-error/signal-error.component';
import { ScheduleSiperComponent } from './schedule-siper/schedule-siper.component';
import { SignalHealthComponent } from './signal-health/signal-health.component';
import { RunRateComponent } from './run-rate/run-rate.component';
import { DecisionErrorsComponent } from './decision-errors/decision-errors.component';
import { DecisionDialogComponent } from './decision-errors/decision-dialog/decision-dialog.component';
import { ContentWorkflowComponent } from './content-workflow/content-workflow.component';
import { UnboundSuppressComponent } from './unbound-breaks/unbound-suppress/unbound-suppress.component';
import { DecisionSuppressComponent } from './no-decision/decision-suppress/decision-suppress.component';
import { FailureSuppressComponent } from './failure-rate/failure-suppress/failure-suppress.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    PlotlyModule,
    MatDialogModule,
  ],
  declarations: [
    DashboardComponent,
    UnboundBreaksComponent,
    NoDecisionComponent,
    FailureRateComponent,
    SignalErrorComponent,
    ScheduleSiperComponent,
    SignalHealthComponent,
    RunRateComponent,
    DecisionErrorsComponent,
    DecisionDialogComponent,
    ContentWorkflowComponent,
    UnboundSuppressComponent,
    DecisionSuppressComponent,
    FailureSuppressComponent
  ],
  entryComponents: [
    UnboundSuppressComponent,
    DecisionSuppressComponent,
    FailureSuppressComponent
  ]
})
export class DashboardModule { }
