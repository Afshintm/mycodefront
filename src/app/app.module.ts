import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { appStateReducers } from './redux/reducers/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appStateReducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
