import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { select, Store } from '@ngrx/store';
import { configurationSelector } from '../../../redux/selectors/app.selector';
import { someDataSelector } from '../../../redux/selectors/app.selector';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { AppConfiguration } from '../../../models/app_configuration';
import { IAppState } from '../../../redux/app.state';
import { LoadConfiguration } from '../../../redux/actions/configuration.actions';
import { UpdateConfiguration } from '../../../redux/actions/configuration.actions';
import { ISomeData, UpdateSomeData } from '../../../redux/actions/some-data.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit, OnDestroy {
  activeUser: any;
  someData: ISomeData;

  constructor(private authService: AuthService,
              private store: Store<IAppState>) {
  }

  ngOnInit() {

    // // subscribe to the configuration object changes (triggered whenever configuration is updated in store)
    // this.store.pipe(select(configurationSelector)).pipe(untilDestroyed(this)).subscribe((config: AppConfiguration) => {
    //   console.log(config);
    // });
    //
    // setTimeout(() => {
    //   this.store.dispatch(new UpdateConfiguration({
    //     configProperty1: false
    //   }));
    // }, 2000);

    this.activeUser = this.authService.getUserProfile();

    // subscribe to changes
    this.store.pipe(select(someDataSelector)).pipe(untilDestroyed(this)).subscribe((someData: any) => {
      this.someData = someData;
    });

    this.store.dispatch(new UpdateSomeData({
      someProp1: false
    }));

    // call the reducer function
    setTimeout(() => {
      this.store.dispatch(new UpdateSomeData({
        someProp1: true
      }));
    }, 2000);


  }

  ngOnDestroy() {
  }

  logout() {
    this.authService.startSignoutMainWindow();
  }
}
