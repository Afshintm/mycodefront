import { ActionReducerMap } from '@ngrx/store';
import { AppConfigurationActions, ConfigurationActions } from '../actions/configuration.actions';
import { IAppState } from '../app.state';
import { AppPersonActions, PersonActions } from '../actions/person.actions';

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

export function personReducer(state: any = {}, action: AppPersonActions): any {
  switch (action.type) {
    case PersonActions.LOAD_PERSON:
      return Object.assign({}, state, action.payload);
    case PersonActions.UPDATE_PERSON:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}

export const appStateReducers: ActionReducerMap<IAppState> = {
  configuration: configurationReducer,
  person: personReducer
};
