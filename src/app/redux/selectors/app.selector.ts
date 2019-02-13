import { createSelector } from '@ngrx/store';
import { IAppState } from '../app.state';

const appState = (state: IAppState) => state;

export const configurationSelector = createSelector(appState, (state: IAppState) => state.configuration);

export const dailyActivitySelector = createSelector(appState, (state: IAppState) => {
  return state.dailyActivity;
});
