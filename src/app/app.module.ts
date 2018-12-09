import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewEmployeeComponent } from './employee/view-employee/view-employee.component';
import { PaginationComponent } from './employee/view-employee/pagination/pagination.component';
import { EmployeeDetailService } from './service/employee-detail.service';



@NgModule({
  declarations: [
    AppComponent,
    ViewEmployeeComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [EmployeeDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }

