import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { select, Store } from '@ngrx/store';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { IAppState } from '../../../redux/app.state';
import { dailyActivitySelector } from '../../../redux/selectors/app.selector';
import { DailyActivity } from '../../../models/daily-activity.model';
import { DailyActivitiesService } from './daily-activities.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit, OnDestroy {
  activeUser: any;
  dailyActivities: DailyActivity[];

  constructor(private authService: AuthService,
              private store: Store<IAppState>,
              private dailyActivitiesService: DailyActivitiesService,
  ) {
  }

  ngOnInit() {

    this.activeUser = this.authService.getUserProfile();

    this.dailyActivitiesService.getDailyActivities();

    // subscribe to changes
    this.store
      .pipe(select(dailyActivitySelector))
      .pipe(untilDestroyed(this))
      .subscribe((data: DailyActivity[]) =>
        this.dailyActivities = data);
  }

  ngOnDestroy() {
  }

  logout() {
    this.authService.startSignoutMainWindow();
  }
}
