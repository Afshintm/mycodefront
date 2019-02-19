import { Injectable } from '@angular/core';
import { forkJoin, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { IAppState } from '../../redux/app.state';
import { LoadConfiguration } from '../../redux/actions/configuration.actions';
import { LoadPerson } from '../../redux/actions/person.actions';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private store: Store<IAppState>) {
  }

  getConfiguration() {
    return of(
      {
        configProperty1: true,
        configProperty2: false,
        configProperty3: true
      }
    );
  }

  getPerson() {
    return of({
      title: 'Grandma',
      name: 'Beryl',
      note: 'Has been out since 11am'
    });
  }

  loadResources() {
    const configuration = this.getConfiguration();
    const person = this.getPerson();

    forkJoin([
      configuration,
      person
    ]).subscribe((data: any[]) => {
      this.store.dispatch(new LoadConfiguration(data[0]));
      this.store.dispatch(new LoadPerson(data[1]));
    });
  }
}
