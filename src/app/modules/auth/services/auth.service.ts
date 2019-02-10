import { Injectable } from '@angular/core';
import { User, UserManager } from 'oidc-client';
import { SharedService } from '../../shared/shared.service';
import { environment } from '../../../../environments/environment';

@Injectable()
export class AuthService {
  private manager = new UserManager(environment.authConfig);
  private user: User = null;

  constructor(private sharedService: SharedService) {
    this.manager.getUser().then(user => {
      this.user = user;
    });
  }

  isLoggedIn(): boolean {
    return this.user != null && !this.user.expired;
  }

  getUserProfile(): any {
    return this.user.profile;
  }

  getAuthorizationHeaderValue(): string {
    return `${this.user.token_type} ${this.user.access_token}`;
  }

  startAuthentication(): Promise<void> {
    return this.manager.signinRedirect();
  }

  completeAuthentication(): Promise<void> {
    return this.manager.signinRedirectCallback().then(user => {
      this.user = user;
      this.sharedService.loadResources();
    });
  }

  startSignoutMainWindow() {
    this.manager.signoutRedirect().then(resp => {
      console.log('signed out', resp);
    }).catch(err => {
      console.log(err);
    });
  }

  endSignoutMainWindow() {
    this.manager.signoutRedirectCallback().then(resp => {
      console.log('signed out', resp);
    }).catch(err => {
      console.log(err);
    });
  }
}
