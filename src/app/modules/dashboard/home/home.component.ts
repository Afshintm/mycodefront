import { Component, OnDestroy, OnInit } from '@angular/core';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { DashboardService } from '../dashboard.service';
import { IPerson } from '../../../models/person';
import { IAppState } from '../../../redux/app.state';
import { Store } from '@ngrx/store';
import { personSelector } from '../../../redux/selectors/app.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit, OnDestroy {
  dt = new Date();
  person = this.store.select(personSelector);
  constructor(private dashboardService: DashboardService,
              private store: Store<IAppState>) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }
}
