import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.less']
})
export class ToggleComponent implements OnInit {
  @Input() formControl: FormControl;

  constructor() {
  }

  ngOnInit() {
    console.log(this.formControl);
  }

}

// creates a form control and adds it to its parent form group
export const createToggleFormControl = (defaultVal?: boolean): FormControl => {
  return new FormControl(defaultVal || false);
};
