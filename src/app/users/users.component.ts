import {Component, OnInit} from '@angular/core';
import {IUser, UsersService} from './users.service';
import {untilDestroyed} from "ngx-take-until-destroy";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit {

  users: IUser[];

  constructor(private UserService: UsersService) {
  }

  ngOnInit() {

    // todo: this will eventually call a swagger codegen service
    this.UserService.getUsers()
      .pipe(untilDestroyed(this))
      .subscribe((users: IUser[]) => this.users = users);

  }

  ngOnDestroy() {
  }

}
