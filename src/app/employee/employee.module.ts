import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EmployeeDetailService } from './service/employee-detail.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
  ],
  declarations: [
    AddEmployeeComponent,
    ViewEmployeeComponent
  ],
  providers: [
    EmployeeDetailService
  ]
})
export class EmployeeModule { }
