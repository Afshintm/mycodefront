import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppConfiguration } from './models/app_configuration';
import { IAppState } from './redux/app.state';
import { LoadConfiguration } from './redux/actions/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    // Configuration should be loaded for active user from API
    const config = new AppConfiguration();
    config.configProperty1 = true;
    config.configProperty2 = false;
    config.configProperty3 = false;

    // save loaded configuration to the store
    this.store.dispatch(new LoadConfiguration(config));
  }
}
