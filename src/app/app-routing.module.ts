import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

/**
 * Create a Lazy Loading.
 * Add lazy loaded Module as children.
 */
const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/addEmployee', 
    pathMatch: 'full' },
  {
    path: '',
    loadChildren: './employee/employee.module#EmployeeModule'
  },
  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [

  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
