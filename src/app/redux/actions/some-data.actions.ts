import { Action } from '@ngrx/store';

export class ISomeData {
  someProp1: boolean;
}


export class SomeDataActions {
  static LOAD_SOME_DATA = 'LOAD_SOME_DATA';
  static UPDATE_SOME_DATA = 'UPDATE_SOME_DATA';
}

export class LoadSomeData implements Action {
  readonly type = SomeDataActions.LOAD_SOME_DATA;

  constructor(public payload: ISomeData) {
  }
}

export class UpdateSomeData implements Action {
  readonly type = SomeDataActions.UPDATE_SOME_DATA;

  constructor(public payload: ISomeData) {
  }
}

export type SomeDataActionTypes = LoadSomeData | UpdateSomeData;
