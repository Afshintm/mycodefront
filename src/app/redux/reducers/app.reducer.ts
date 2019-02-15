import { ActionReducerMap } from '@ngrx/store';
import { AppConfigurationActions, ConfigurationActions } from '../actions/configuration.actions';
import { IAppState } from '../app.state';
import { DailyActivityActions } from '../actions/daily-activity.actions';
import { DailyActivityTypes } from '../actions/daily-activity.actions';

export function configurationReducer(state: any = {}, action: AppConfigurationActions): any {
  switch (action.type) {
    case ConfigurationActions.LOAD_CONFIGURATION:
      return Object.assign({}, state, action.payload);
    case ConfigurationActions.UPDATE_CONFIGURATION:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}

export function dailyActivityReducer(state: any = [], action: DailyActivityTypes): any {
  switch (action.type) {
    case DailyActivityActions.LOAD_DAILY_ACTIVITY:
      return [
        ...state,
      ];
    case DailyActivityActions.UPDATE_DAILY_ACTIVITY: {
      return [
        ...action.payload,
      ];
    }
    default:
      return state;
  }
}

// export function dailyActivityReducer(state: any = {}, action: DailyActivityTypes): any {
//   switch (action.type) {
//     case DailyActivityActions.LOAD_DAILY_ACTIVITY:
//       return Object.assign({}, state, action.payload);
//     case DailyActivityActions.UPDATE_DAILY_ACTIVITY:
//       return Object.assign({}, state, action.payload);
//     default:
//       return state;
//   }
// }

export const appStateReducers: ActionReducerMap<IAppState> = {
  configuration: configurationReducer,
  dailyActivity: dailyActivityReducer
};
