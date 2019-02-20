import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from './shared.service';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { HttpClientModule } from '@angular/common/http';
import { NumberInputComponent } from './components/forms/number-input/number-input.component';
import { TextInputComponent } from './components/forms/text-input/text-input.component';
import { ToggleComponent } from './components/forms/toggle/toggle.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TimeAgoPipe,
    NumberInputComponent,
    TextInputComponent,
    ToggleComponent
  ],
  exports: [
    TimeAgoPipe,
    NumberInputComponent,
    TextInputComponent,
    ToggleComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    SharedService
  ]
})
export class SharedModule {
}
