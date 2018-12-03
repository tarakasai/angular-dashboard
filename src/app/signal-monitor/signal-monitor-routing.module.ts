import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignalMonitorComponent } from './signal-monitor.component';

const routes: Routes = [{
  path: '', component: SignalMonitorComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignalMonitorRoutingModule { }
