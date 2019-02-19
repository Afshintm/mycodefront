import { Component, OnDestroy, OnInit } from '@angular/core';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { DashboardService } from '../dashboard.service';
import { IPerson } from '../../../models/person';
import { IAppState } from '../../../redux/app.state';
import { Store } from '@ngrx/store';
import { personSelector } from '../../../redux/selectors/app.selector';
import { dailyActivitySelector } from '../../../redux/selectors/app.selector';
import { IDailyActivity } from '../../../models/daily-activity';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit, OnDestroy {
  dt = new Date();
  person: IPerson;
  dailyActivities: IDailyActivity[];

  constructor(private dashboardService: DashboardService,
              private store: Store<IAppState>) {
  }

  ngOnInit() {
    this.store.select(personSelector)
      .pipe(untilDestroyed(this))
      .subscribe((user: IPerson) => this.person = user);

    // get resident's last 24 hour activities
    this.dashboardService.getDailyActivities();
    this.store.select(dailyActivitySelector)
      .pipe(untilDestroyed(this))
      .subscribe((dailyActivities: IDailyActivity[]) => this.dailyActivities = dailyActivities);

  }

  ngOnDestroy(): void {
  }
}
