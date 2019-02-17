import { Action } from '@ngrx/store';
import { IPerson } from '../../models/person';

export class PersonActions {
  static LOAD_PERSON = 'LOAD_PERSON';
  static UPDATE_PERSON = 'UPDATE_PERSON';
}
export class LoadPerson implements Action {
  readonly type = PersonActions.LOAD_PERSON;

  constructor(public payload: IPerson) {
  }
}

export class UpdatePerson implements Action {
  readonly type = PersonActions.UPDATE_PERSON;

  constructor(public payload: IPerson) {
  }
}

export type AppPersonActions = LoadPerson | UpdatePerson;
