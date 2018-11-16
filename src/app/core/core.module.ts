import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './nabvar/sidebar/sidebar.component';
import { TopbarComponent } from './nabvar/topbar/topbar.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    TopbarComponent, 
    SidebarComponent
  ],
  exports: [
    TopbarComponent,
    SidebarComponent
  ]
})
export class CoreModule { }
