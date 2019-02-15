import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeWidgetComponent } from './some-widget.component';

describe('SomeWidgetComponent', () => {
  let component: SomeWidgetComponent;
  let fixture: ComponentFixture<SomeWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
