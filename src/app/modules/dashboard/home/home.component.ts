import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { select, Store } from '@ngrx/store';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { DashboardService } from '../dashboard.service';
import { IPerson } from '../../../models/person';
import { IAppState } from '../../../redux/app.state';
import { Store } from '@ngrx/store';
import { personSelector } from '../../../redux/selectors/app.selector';
import { dailyActivitySelector } from '../../../redux/selectors/app.selector';
import { DailyActivity } from '../../../models/daily-activity.model';
import { DailyActivitiesService } from './daily-activities.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit, OnDestroy {
  dt = new Date();
  person: IPerson;
  constructor(private dashboardService: DashboardService,
              private store: Store<IAppState>) { }
  dailyActivities: DailyActivity[];

  constructor(private authService: AuthService,
              private store: Store<IAppState>,
              private dailyActivitiesService: DailyActivitiesService,
  ) {
  }

  ngOnInit() {
    this.store.select(personSelector)
      .pipe(untilDestroyed(this))
      .subscribe((user: IPerson) => this.person = user);

    this.activeUser = this.authService.getUserProfile();

    console.log(this.dailyActivitiesService);
    this.dailyActivitiesService.getDailyActivities().subscribe((dailyActivities) => {
      this.dailyActivities = dailyActivities;
    });

    // // subscribe to changes
    // this.store
    //   .pipe(select(dailyActivitySelector))
    //   .pipe(untilDestroyed(this))
    //   .subscribe((data: DailyActivity[]) =>
    //     this.dailyActivities = data);
  }

  ngOnDestroy(): void {
  }
}
