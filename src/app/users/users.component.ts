import {Component, OnInit} from '@angular/core';
import {IUser, UsersService} from './users.service';
import {untilDestroyed} from "ngx-take-until-destroy";
import { select, Store } from '@ngrx/store';
import { IAppState } from '../redux/app.state';
import { Subscription } from 'rxjs';
import { configurationSelector } from '../redux/selectors/app.selector';
import { AppConfiguration } from '../models/app_configuration';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit {
  subs: Subscription = new Subscription();
  users: IUser[];

  constructor(private UserService: UsersService,
              private store: Store<IAppState>) {
  }

  ngOnInit() {

    // todo: this will eventually call a swagger codegen service
    this.UserService.getUsers()
      .pipe(untilDestroyed(this))
      .subscribe((users: IUser[]) => this.users = users);

    // subscribe to the configuration object changes (triggered whenever configuration is updated in store)
    this.subs.add(this.store.pipe(select(configurationSelector)).subscribe((config: AppConfiguration) => {
      console.log(JSON.stringify(config));
    }));

  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
