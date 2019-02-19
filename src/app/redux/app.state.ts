import { AppConfiguration } from '../models/app_configuration';
import { IPerson } from '../models/person';
import { IDailyActivity } from '../models/daily-activity';

export interface IAppState {
  configuration: AppConfiguration;
  person: IPerson;
  dailyActivity: IDailyActivity[];
}
