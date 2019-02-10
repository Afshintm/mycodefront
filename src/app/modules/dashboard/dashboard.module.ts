import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    HomeComponent
  ]
})
export class DashboardModule { }
