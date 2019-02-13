import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from './shared.service';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    TimeAgoPipe
  ],
  exports: [
    TimeAgoPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SharedService
  ]
})
export class SharedModule { }
