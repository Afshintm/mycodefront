import { FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';

export interface IFormControlValidator {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}


// generates validators for reactive forms
export const initFormValidators = (validators: IFormControlValidator): ValidatorFn[] => {
  const formValidators: ValidatorFn[] = [];
  if (validators) {
    if (validators.required) formValidators.push(Validators.required);
    if (validators.minLength != null) formValidators.push(Validators.minLength(validators.minLength));
    if (validators.maxLength != null) formValidators.push(Validators.maxLength(validators.maxLength));
    if (validators.min != null) formValidators.push(Validators.min(validators.min));
    if (validators.max != null) formValidators.push(Validators.max(validators.max));
  }
  return formValidators;
};


// get the name of a form control
export const getControlName = (control: FormControl): string => {
  let controlName: string = null;
  const parent = control.parent;
  if (parent instanceof FormGroup) {
    Object.keys(parent.controls).forEach((name: string) => {
      if (control === parent.controls[name]) controlName = name;
    });
  }
  return controlName;
};
