import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../../redux/app.state';

import { LoadDailyActivity } from '../../redux/actions/daily-activity.actions';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private store: Store<IAppState>) {
  }

  // todo : fetch from api
  getDailyActivities() {

    this.store.dispatch(new LoadDailyActivity([
      {
        name: 'Beryl came home',
        time: "2019-02-15T11:39:55.936Z"
      },
      {
        name: 'The fridge was opened',
        time: "2019-02-13T23:39:55.936Z"
      },
      {
        name: 'The front door opened',
        time: "2019-02-13T23:39:55.936Z"
      },
      {
        name: 'The backdoor was opened',
        time: "2019-02-13T23:39:55.936Z"
      },
      {
        name: 'Beryl is awake',
        time: "2019-02-13T23:39:55.936Z"
      },
    ]));

  }

}
