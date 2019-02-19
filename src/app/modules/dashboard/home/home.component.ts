import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { Store } from '@ngrx/store';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { DashboardService } from '../dashboard.service';
import { IPerson } from '../../../models/person';
import { IAppState } from '../../../redux/app.state';
import { personSelector } from '../../../redux/selectors/app.selector';
import { dailyActivitySelector } from '../../../redux/selectors/app.selector';
import { IDailyActivity } from '../../../models/daily-activity';
import { DailyActivitiesService } from './daily-activities.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit, OnDestroy {
  dt = new Date();
  person: IPerson;
  dailyActivities: IDailyActivity[];
  activeUser: any;

  constructor(private dashboardService: DashboardService,
              private authService: AuthService,
              private store: Store<IAppState>,
              private dailyActivitiesService: DailyActivitiesService,
  ) {
  }

  ngOnInit() {

    this.store.select(personSelector)
      .pipe(untilDestroyed(this))
      .subscribe((user: IPerson) => this.person = user);

    this.activeUser = this.authService.getUserProfile();

    // get resident's last 24 hour activities
    this.dailyActivitiesService.getDailyActivities();
    this.store.select(dailyActivitySelector)
      .pipe(untilDestroyed(this))
      .subscribe((dailyActivities: IDailyActivity[]) => this.dailyActivities = dailyActivities);

  }

  ngOnDestroy(): void {
  }
}
