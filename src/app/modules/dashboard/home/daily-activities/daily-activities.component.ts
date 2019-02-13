import { Component, Input, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-daily-activities',
  templateUrl: './daily-activities.component.html',
  styleUrls: ['./daily-activities.component.less']
})
export class DailyActivitiesComponent implements OnInit {
  @Input() userId: number;

  activities: any[];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.getDailyActivities().subscribe((resp) => {
      this.activities = resp;
    });
  }

}
