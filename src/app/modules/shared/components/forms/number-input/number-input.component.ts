import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { getControlName, IFormControlValidator, initFormValidators } from '../forms.util';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.less']
})
export class NumberInputComponent implements OnInit {
  @Input() formControl: FormControl;
  controlName: string;

  constructor() {
  }

  ngOnInit() {
    this.controlName = getControlName(this.formControl);
  }

}


// creates a form control and adds it to its parent form group
export const createNumberInputFormControl = (defaultVal?: number,
                                             validators?: IFormControlValidator): FormControl => {
  const formValidators = initFormValidators(validators);
  return new FormControl(defaultVal || null, Validators.compose(formValidators));
};
