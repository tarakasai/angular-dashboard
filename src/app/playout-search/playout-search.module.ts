import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule, MatInputModule, MatSelectModule, MatSnackBarModule} from '@angular/material';

import { PlayoutSearchRoutingModule } from './playout-search-routing.module';
import { PlayoutSearchComponent } from './playout-search.component';
import {SharedModule} from '../shared/shared.module';
import { PlayoutTableComponent } from './playout-table/playout-table.component';

@NgModule({
  imports: [
    CommonModule,
    PlayoutSearchRoutingModule,
    SharedModule,
    MatSelectModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [PlayoutSearchComponent, PlayoutTableComponent]
})
export class PlayoutSearchModule { }
