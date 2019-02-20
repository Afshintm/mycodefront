import { Component, OnDestroy, OnInit } from '@angular/core';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { DashboardService } from '../dashboard.service';
import { IPerson } from '../../../models/person';
import { IAppState } from '../../../redux/app.state';
import { Store } from '@ngrx/store';
import { personSelector } from '../../../redux/selectors/app.selector';
import { dailyActivitySelector } from '../../../redux/selectors/app.selector';
import { IDailyActivity } from '../../../models/daily-activity';
import { MessagingService } from '../../../messaging.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit, OnDestroy {
  dt = new Date();
  person = this.store.select(personSelector);
  dailyActivities: IDailyActivity[];
  message;
  currentToken;

  constructor(private dashboardService: DashboardService,
              private store: Store<IAppState>,
              private messagingService: MessagingService) {
  }

  ngOnInit() {

    // get resident's last 24 hour activities
    this.dashboardService.getDailyActivities();
    this.store.select(dailyActivitySelector)
      .pipe(untilDestroyed(this))
      .subscribe((dailyActivities: IDailyActivity[]) => this.dailyActivities = dailyActivities);


    this.messagingService.requestPermission(123);
    this.messagingService.receiveMessage();
    this.messagingService.monitorRefresh(123);

    this.messagingService.currentMessage.subscribe(data => {
      if (data) {
        console.log(data);
        this.dailyActivities.unshift({
          name: data.data.body,
          time: String(new Date())
        });
      }
    });

    this.messagingService.currentToken.subscribe(data => {
      this.currentToken = data;
    });


  }

  ngOnDestroy(): void {
  }
}
