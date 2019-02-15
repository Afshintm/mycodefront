import { AppConfiguration } from '../models/app_configuration';
import { DailyActivity } from '../models/daily-activity.model';

export interface IAppState {
  configuration: AppConfiguration;
  dailyActivity: DailyActivity[];
}
