/**
 * this entire user service and model interfaces will eventually be generated from swagger codegen using the following package:
 * https://www.npmjs.com/package/ng-swagger-gen
 */

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {of} from 'rxjs';

// the user interface will be defined from swagger codegen
export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: IUser[] = [];

  constructor() {
  }

  // todo: this will fetch list of users from the swagger generated user service
  getUsers(): Observable<IUser[]> {

    return of(([
      {
        id: 1,
        firstName: 'John',
        lastName: 'Smith'
      },
      {
        id: 1,
        firstName: 'Adam',
        lastName: 'Smith'
      },
      {
        id: 1,
        firstName: 'Ben',
        lastName: 'Smith'
      }
    ]));

  }

}
