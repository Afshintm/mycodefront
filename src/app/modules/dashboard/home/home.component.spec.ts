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
import { combineReducers, Store, StoreModule } from '@ngrx/store';
import { IAppState } from '../../../redux/app.state';
import { appStateReducers } from '../../../redux/reducers/app.reducer';
import { LoadPerson } from '../../../redux/actions/person.actions';

describe('HomeComponent', () => {
  let store: Store<IAppState>;
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
        RouterTestingModule.withRoutes(routes),
        StoreModule.forRoot({
          ...appStateReducers,
          feature: combineReducers(appStateReducers),
        })
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

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

  it('should show a few seconds ago', () => {
    const pipe = new TimeAgoPipe();
    const testDate: Date = new Date();
    testDate.setSeconds(testDate.getSeconds() - 10);
    expect(pipe.transform(testDate.toISOString()))
      .toBe('a few seconds ago');
  });

  it('should show a minute ago',  () => {
    const pipe = new TimeAgoPipe();
    const testDate: Date = new Date();
    testDate.setSeconds(testDate.getSeconds() - 60);
    expect(pipe.transform(testDate.toISOString()))
      .toBe('a minute ago');
  });

  it('person title should be Grandma', () => {
    const action = new LoadPerson({
      title: 'Grandma',
      name: 'Beryl',
      note: 'Has been out since 8am'
    });

    store.dispatch(action);

    component.person.subscribe(data => {
      expect(data.title).toBe('Grandma');
    });
  });

  it('person name should be Beryl', () => {
    const action = new LoadPerson({
      title: 'Grandma',
      name: 'Beryl',
      note: 'Has been out since 8am'
    });

    store.dispatch(action);

    component.person.subscribe(data => {
      expect(data.name).toBe('Beryl');
    });
  });

});
