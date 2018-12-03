import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WiqComponent} from './wiq.component';

const routes: Routes = [{
  path: '', component: WiqComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WiqRoutingModule { }
