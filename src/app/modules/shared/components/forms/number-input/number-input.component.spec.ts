import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberInputComponent } from './number-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';

describe('NumberInputComponent', () => {
  let component: NumberInputComponent;
  let fixture: ComponentFixture<NumberInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NumberInputComponent],
      imports: [ReactiveFormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberInputComponent);
    component = fixture.componentInstance;
    component.formControl = new FormControl("some form control");
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
