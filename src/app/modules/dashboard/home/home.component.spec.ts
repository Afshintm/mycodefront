import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { Location } from '@angular/common';
import { HomeComponent } from './home.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { SettingsComponent } from '../settings/settings.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, Routes } from '@angular/router';
import { By } from '@angular/platform-browser';
import { TimeAgoPipe } from '../../shared/pipes/time-ago.pipe';
import { ChangeDetectorRef, NgZone } from '@angular/core';
import { TestStore } from '../../../models/test/test_store';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../redux/app.state';

describe('HomeComponent', () => {
  let store: TestStore<IAppState>;
  const routes: Routes = [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'settings',
      component: SettingsComponent
    },
    {
      path: 'contacts',
      component: ContactsComponent
    }
  ];
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        ContactsComponent,
        SettingsComponent
      ],
      imports: [
        SharedModule,
        RouterTestingModule.withRoutes(routes)
      ],
      providers: [
        { provide: Store, useClass: TestStore },
        { provide: ChangeDetectorRef, useValue: {} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(inject([Store], (testStore: TestStore<IAppState>) => {
    // save store reference for use in tests
    store = testStore;
    // set default state
    store.setState({
        configuration: {
          configProperty1: true,
          configProperty2: true,
          configProperty3: true
        },
        person: {
          title: 'Grandma',
          name: 'Beryl',
          note: 'Has been out since 8am'
        }
      }
    );
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to settings',
    async(inject([Router, Location], (router: Router, location: Location) => {
      fixture.debugElement.queryAll(By.css('a'))[1].nativeElement.click();
      fixture.whenStable().then(() => {
        expect(location.path()).toEqual('/settings');
      });
    })));

  it('should navigate to contacts',
    async(inject([Router, Location], (router: Router, location: Location) => {
      fixture.debugElement.queryAll(By.css('a'))[0].nativeElement.click();
      fixture.whenStable().then(() => {
        expect(location.path()).toEqual('/contacts');
      });
    })));

  it('should show a few seconds ago', inject([ChangeDetectorRef, NgZone], (cdt, zone) => {
    const pipe = new TimeAgoPipe(cdt, zone);
    const testDate: Date = new Date();
    testDate.setSeconds(testDate.getSeconds() - 10);
    expect(pipe.transform(testDate.toISOString()))
      .toBe('a few seconds ago');
  }));

  it('should show a minute ago', inject([ChangeDetectorRef, NgZone], (cdt, zone) => {
    const pipe = new TimeAgoPipe(cdt, zone);
    const testDate: Date = new Date();
    testDate.setSeconds(testDate.getSeconds() - 60);
    expect(pipe.transform(testDate.toISOString()))
      .toBe('a minute ago');
  }));

  it('person title should display Grandma Beryl', () => {
    setTimeout(() => {
      const getPersonTitle = () => fixture.debugElement.queryAll(By.css('.person-title'));
      expect(getPersonTitle().length).toBe(1);
      expect(getPersonTitle[0].nativeElement.textContent.trim()).toContain('Grandma Beryl');
    }, 1000);
  });

  it('person note should display Grandma Beryl', () => {
    setTimeout(() => {
      const getPersonNote = () => fixture.debugElement.queryAll(By.css('.person-note'));
      expect(getPersonNote().length).toBe(1);
      expect(getPersonNote[0].nativeElement.textContent.trim()).toContain('Has been out since 8am');
    }, 1000);
  });

});
