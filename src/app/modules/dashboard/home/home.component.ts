/// <reference types="aws-sdk" />

import { Component, OnDestroy, OnInit } from '@angular/core';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { DashboardService } from '../dashboard.service';
import { IPerson } from '../../../models/person';
import { IAppState } from '../../../redux/app.state';
import { Store } from '@ngrx/store';
import { personSelector } from '../../../redux/selectors/app.selector';
import { dailyActivitySelector } from '../../../redux/selectors/app.selector';
import { IDailyActivity } from '../../../models/daily-activity';
import * as AWS from "../../../../../node_modules/aws-sdk";

const sns = new AWS.SNS();


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit, OnDestroy {
  dt = new Date();
  person = this.store.select(personSelector);
  dailyActivities: IDailyActivity[];

  constructor(private dashboardService: DashboardService,
              private store: Store<IAppState>) {
  }

  ngOnInit() {

    // get resident's last 24 hour activities
    this.dashboardService.getDailyActivities();
    this.store.select(dailyActivitySelector)
      .pipe(untilDestroyed(this))
      .subscribe((dailyActivities: IDailyActivity[]) => this.dailyActivities = dailyActivities);

    // you don't just subscribe to "news", but the whole Amazon Resource Name (ARN)
    sns.subscribe({
      Protocol: 'http',
      TopicArn: 'arn:aws:sns:ap-southeast-2:590986216309:SomeTestTopicForSns',
      Endpoint: '//your-endpoint-url.com'
    }, (error, data) => {
      console.log(error || data);
    });


  }

  ngOnDestroy(): void {
  }
}
