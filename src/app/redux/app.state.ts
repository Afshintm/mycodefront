import { AppConfiguration } from '../models/app_configuration';
import { IPerson } from '../models/person';

export interface IAppState {
  configuration: AppConfiguration;
  person: IPerson;
}
