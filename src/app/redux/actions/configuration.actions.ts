import { Action } from '@ngrx/store';
import { AppConfiguration } from '../../models/app_configuration';

export class ConfigurationActions {
  static LOAD_CONFIGURATION = 'LOAD_CONFIGURATION';
  static UPDATE_CONFIGURATION = 'UPDATE_CONFIGURATION';
}
export class LoadConfiguration implements Action {
  readonly type = ConfigurationActions.LOAD_CONFIGURATION;

  constructor(public payload: AppConfiguration) {
  }
}

export class UpdateConfiguration implements Action {
  readonly type = ConfigurationActions.UPDATE_CONFIGURATION;

  constructor(public payload: AppConfiguration) {
  }
}

export type AppConfigurationActions = LoadConfiguration | UpdateConfiguration;
