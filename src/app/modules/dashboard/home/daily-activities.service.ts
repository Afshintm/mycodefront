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


    // http://essence-communication-api-791146997.ap-southeast-2.elb.amazonaws.com/swagger/index.html
    let apiResponse = {
      "value": true,
      "response": 0,
      "responseDescription": "some description",
      "activityTypes": [
        {
          "activityType": "some activity type",
          "activities": [
            {
              "startTime": {},
              "endTime": {},
              "passThreshold": true
            }
          ]
        }
      ],
      "missingInformation": [
        {
          "reason": "string",
          "intervals": [
            {
              "startTime": "2019-02-13T23:39:55.936Z",
              "endTime": "2019-02-13T23:39:55.936Z",
              "previousActivity": "string"
            }
          ]
        }
      ]
    };

    // data will be structured into following format:
    // call the reducer function
    this.store.dispatch(new UpdateDailyActivity([
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
