import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { IAppState } from '../../redux/app.state';
import { LoadConfiguration } from '../../redux/actions/configuration.actions';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  getUser(): Observable<any> {
    return of({
      name: 'Grandma Beryl',
      note: 'Has been out since 11am'
    });
  }
}
