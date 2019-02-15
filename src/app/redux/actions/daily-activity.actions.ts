import { Action } from '@ngrx/store';

import {DailyActivity} from '../../models/daily-activity.model';

export class DailyActivityActions {
  static LOAD_DAILY_ACTIVITY = 'LOAD_DAILY_ACTIVITY';
  static UPDATE_DAILY_ACTIVITY = 'UPDATE_DAILY_ACTIVITY';
}

export class LoadDailyActivity implements Action {
  readonly type = DailyActivityActions.LOAD_DAILY_ACTIVITY;

  constructor(public payload: DailyActivity[]) {
  }
}

export class UpdateDailyActivity implements Action {
  readonly type = DailyActivityActions.UPDATE_DAILY_ACTIVITY;

  constructor(public payload: DailyActivity[]) {
  }
}

export type DailyActivityTypes = LoadDailyActivity | UpdateDailyActivity;
