import { AppConfiguration } from '../models/app-configuration';
import { IPerson } from '../models/person';

export interface IAppState {
  configuration: AppConfiguration;
  person: IPerson;
}
