import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SettingsComponent } from './settings/settings.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardService } from './dashboard.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    HomeComponent,
    SettingsComponent,
    ContactsComponent
  ],
  providers: [
    DashboardService
  ]
})
export class DashboardModule { }
