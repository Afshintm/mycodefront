import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { AuthCallbackComponent } from './auth-callback.component';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';



describe('AuthCallbackComponent', () => {
  let component: AuthCallbackComponent;
  let fixture: ComponentFixture<AuthCallbackComponent>;
  const mockAuthService = {
    completeAuthentication: jasmine.createSpy().and.returnValue(Promise.resolve())
  };
  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthCallbackComponent ],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: AuthService, useValue: mockAuthService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
