import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {MatButtonModule, MatCheckboxModule, MatPaginatorModule, MatSortModule, MatTableModule} from '@angular/material';
import {RouterModule} from '@angular/router';

import {SidebarComponent} from './sidebar/sidebar.component';
import {NavbarComponent} from './navbar/navbar.component';
import {LoaderComponent} from './loader/loader.component';
import {ServiceInterceptor} from './app.interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

@NgModule({
  imports: [CommonModule, MatSelectModule,
    FontAwesomeModule, RouterModule],
  declarations: [SidebarComponent,
    NavbarComponent,
    LoaderComponent],
  exports: [SidebarComponent,
    NavbarComponent,
    LoaderComponent,
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServiceInterceptor,
      multi: true
    }
  ]
})

export class SharedModule {
}
