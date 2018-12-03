import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';

const routes: Routes = [{
path: '', component: LoginComponent
}, {
path: 'dashboard',
loadChildren: './dashboard/dashboard.module#DashboardModule'
}, {
path: 'air-date-details',
loadChildren: './air-date-details/air-date-details.module#AirDateDetailsModule'
}, {
path: 'working-issue-queue',
loadChildren: './wiq/wiq.module#WiqModule'
}, {
path: 'signal-monitor',
loadChildren: './signal-monitor/signal-monitor.module#SignalMonitorModule'
}, {
  path: 'playout-search',
  loadChildren: './playout-search/playout-search.module#PlayoutSearchModule'
}];

@NgModule({
imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
