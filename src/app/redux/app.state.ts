import { AppConfiguration } from '../models/app_configuration';
import { IPerson } from '../models/person';
import { DailyActivity } from '../models/daily-activity.model';

export interface IAppState {
  configuration: AppConfiguration;
  person: IPerson;
  dailyActivity: DailyActivity[];
}
