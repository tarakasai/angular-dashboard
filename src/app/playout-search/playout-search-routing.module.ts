import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlayoutSearchComponent} from './playout-search.component';

const routes: Routes = [{
  path: '', component: PlayoutSearchComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayoutSearchRoutingModule { }
