import { Injectable } from '@angular/core';
import { forkJoin, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { IAppState } from '../../redux/app.state';
import { LoadConfiguration } from '../../redux/actions/configuration.actions';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }
}
