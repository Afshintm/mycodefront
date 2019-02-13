import { Injectable } from '@angular/core';
import { forkJoin, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { IAppState } from '../../redux/app.state';
import { LoadConfiguration } from '../../redux/actions/configuration.actions';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private store: Store<IAppState>,
              private http: HttpClient) { }

  getDailyActivities() {
    return of([
      {
        type: 'sleep',
        duration: '8 hours'
      },
      {
        type: 'lunch',
        duration: '2 times'
      },
      {
        type: 'out',
        duration: '2 times'
      }
    ]);
  }
}
