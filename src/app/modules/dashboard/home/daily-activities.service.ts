import { Injectable } from '@angular/core';
import { UpdateDailyActivity } from '../../../redux/actions/daily-activity.actions';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../redux/app.state';

@Injectable({
  providedIn: 'root'
})
export class DailyActivitiesService {

  constructor(private store: Store<IAppState>) {
  }

  // todo : fetch from api
  getDailyActivities() {

    // call the reducer function
    this.store.dispatch(new UpdateDailyActivity([
      {
        name: 'mainDoor',
        totalHours: 5
      },
      {
        name: 'bedroom',
        totalHours: 5
      },
      {
        name: 'restroom',
        totalHours: 5
      },
      {
        name: 'bathroom',
        totalHours: 5
      },
      {
        name: 'livingRoom',
        totalHours: 5
      },
      {
        name: 'kitchen',
        totalHours: 5
      },
      {
        name: 'refrigerator',
        totalHours: 5
      },
      {
        name: 'notAtHome',
        totalHours: 5
      },
    ]));

  }

}
