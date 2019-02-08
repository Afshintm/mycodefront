import { ActionReducerMap } from '@ngrx/store';
import { AppConfigurationActions, ConfigurationActions } from '../actions/app.actions';
import { IAppState } from '../app.state';

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

export const appStateReducers: ActionReducerMap<IAppState> = {
  configuration: configurationReducer
};
