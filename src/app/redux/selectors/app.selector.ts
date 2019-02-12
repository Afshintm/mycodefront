import { createSelector } from '@ngrx/store';
import { IAppState } from '../app.state';

const appState = (state: IAppState) => state;

export const configurationSelector = createSelector(appState, (state: IAppState) => state.configuration);
