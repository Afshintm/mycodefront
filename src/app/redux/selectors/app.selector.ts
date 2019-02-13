import { createSelector } from '@ngrx/store';
import { IAppState } from '../app.state';

const appState = (state: IAppState) => state;

export const configurationSelector = createSelector(appState, (state: IAppState) => state.configuration);

export const someDataSelector = createSelector(appState, (state: IAppState) => {
  // console.log("state", state);
  // console.log("state.someData", state.someData);
  return state.someData;
});
