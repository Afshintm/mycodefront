import { AppConfiguration } from '../models/app-configuration';
import { IPerson } from '../models/person';
import { IDailyActivity } from '../models/daily-activity';

export interface IAppState {
  configuration: AppConfiguration;
  person: IPerson;
  dailyActivity: IDailyActivity[];
}
