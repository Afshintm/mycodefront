import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { getControlName, IFormControlValidator, initFormValidators } from '../forms.util';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.less']
})
export class TextInputComponent implements OnInit {
  @Input() formControl: FormControl;
  controlName: string;

  constructor() {
  }

  ngOnInit() {
    this.controlName = getControlName(this.formControl);
  }

}


// creates a form control and adds it to its parent form group
export const createTextInputFormControl = (defaultVal?: string,
                                           validators?: IFormControlValidator): FormControl => {
  const formValidators = initFormValidators(validators);
  return new FormControl(defaultVal || null, Validators.compose(formValidators));
};
