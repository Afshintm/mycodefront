import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { select, Store } from '@ngrx/store';
import { configurationSelector } from '../../../redux/selectors/app.selector';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { AppConfiguration } from '../../../models/app_configuration';
import { IAppState } from '../../../redux/app.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit, OnDestroy {
  activeUser: any;

  constructor(private authService: AuthService,
              private store: Store<IAppState>) { }

  ngOnInit() {
    // subscribe to the configuration object changes (triggered whenever configuration is updated in store)
    this.store.pipe(select(configurationSelector)).pipe(untilDestroyed(this)).subscribe((config: AppConfiguration) => {
      console.log(JSON.stringify(config));
    });

    this.activeUser = this.authService.getUserProfile();
  }

  ngOnDestroy() {
  }

  logout() {
    this.authService.startSignoutMainWindow();
  }
}
