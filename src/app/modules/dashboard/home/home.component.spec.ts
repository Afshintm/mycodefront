import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser';
import { TimeAgoPipe } from '../../shared/pipes/time-ago.pipe';
import { AuthService } from '../../auth/services/auth.service';
import { MockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';
import { DailyActivitiesService } from './daily-activities.service';
import { of } from 'rxjs';

const MockAuthService = {
  getUserProfile: () => {

  }
};

const MockDailyActivitiesService = {
  getDailyActivities: () => {
    return [];
  }
};


fdescribe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let dailyActivitiesService: DailyActivitiesService;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations:
        [
          HomeComponent,
          TimeAgoPipe
        ],
      providers: [
        {
          provide: AuthService, useValue: MockAuthService
        },
        {
          provide: Store, useValue: MockStore
        },
        {
          provide: DailyActivitiesService, useValue: MockDailyActivitiesService
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    dailyActivitiesService = fixture.debugElement.injector.get(DailyActivitiesService);
    spyOn(dailyActivitiesService, 'getDailyActivities').and.returnValue(of([]));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('display message when no activities exist', () => {
    dailyActivitiesService.getDailyActivities = jasmine.createSpy().and.returnValue(of([]));
    fixture.detectChanges();
    const message = fixture.debugElement.query(By.css('#no-result'));
    expect(message).toBeTruthy();
    console.log(message);
    expect(message.nativeElement.innerText).toContain("no activities found in the last 24 hours");
  });

});
