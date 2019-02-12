import { ActionReducerMap } from '@ngrx/store';
import { AppConfigurationActions, ConfigurationActions } from '../actions/configuration.actions';
import { IAppState } from '../app.state';
import { SomeDataActions } from '../actions/some-data.actions';
import { SomeDataActionTypes } from '../actions/some-data.actions';

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

export function someDataReducer(state: any = {}, action: SomeDataActionTypes): any {
  switch (action.type) {
    case SomeDataActions.LOAD_SOME_DATA:

    case SomeDataActions.UPDATE_SOME_DATA: {
      return {
        ...action.payload,
      };
    }
    default:
      return state;
  }
}

// export function someDataReducer(state: any = {}, action: SomeDataActionTypes): any {
//   switch (action.type) {
//     case SomeDataActions.LOAD_SOME_DATA:
//       return Object.assign({}, state, action.payload);
//     case SomeDataActions.UPDATE_SOME_DATA:
//       return Object.assign({}, state, action.payload);
//     default:
//       return state;
//   }
// }

export const appStateReducers: ActionReducerMap<IAppState> = {
  configuration: configurationReducer,
  someData: someDataReducer
};
