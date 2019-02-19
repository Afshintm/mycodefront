import { Action } from '@ngrx/store';

import {IDailyActivity} from '../../models/daily-activity';

export class DailyActivityActions {
  static LOAD_DAILY_ACTIVITY = 'LOAD_DAILY_ACTIVITY';
  static UPDATE_DAILY_ACTIVITY = 'UPDATE_DAILY_ACTIVITY';
}

export class LoadDailyActivity implements Action {
  readonly type = DailyActivityActions.LOAD_DAILY_ACTIVITY;

  constructor(public payload: IDailyActivity[]) {
  }
}

export class UpdateDailyActivity implements Action {
  readonly type = DailyActivityActions.UPDATE_DAILY_ACTIVITY;

  constructor(public payload: IDailyActivity[]) {
  }
}

export type DailyActivityTypes = LoadDailyActivity | UpdateDailyActivity;
