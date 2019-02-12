import { Injectable } from '@angular/core';
import { forkJoin, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { IAppState } from '../../redux/app.state';
import { LoadConfiguration } from '../../redux/actions/configuration.actions';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private store: Store<IAppState>) { }

  getConfiguration() {
    return of(
      {
        configProperty1: true,
        configProperty2: false,
        configProperty3: true
      }
    );
  }

  loadResources() {
    const configuration = this.getConfiguration();

    forkJoin([
      configuration
    ]).subscribe((data: any[]) => {
      this.store.dispatch(new LoadConfiguration(data[0]));
    });
  }
}
