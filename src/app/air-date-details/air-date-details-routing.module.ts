import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirDateDetailsComponent } from './air-date-details.component';

const routes: Routes = [{
  path: '', component: AirDateDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AirDateDetailsRoutingModule { }
