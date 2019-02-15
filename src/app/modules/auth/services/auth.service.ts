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

  /**
   * Check if user is logged in
   */
  isLoggedIn(): boolean {
    return this.user != null && !this.user.expired;
  }

  /**
   * Get logged in user profile
   */
  getUserProfile(): any {
    return this.user.profile;
  }

  /**
   * Get authorization header value to be added to all http requests
   */
  getAuthorizationHeaderValue(): string {
    return `${this.user.token_type} ${this.user.access_token}`;
  }

  /**
   * Initiate authentication process
   */
  startAuthentication(): Promise<void> {
    return this.manager.signinRedirect();
  }

  /**
   * Complete authentication process
   */
  completeAuthentication(): Promise<void> {
    return this.manager.signinRedirectCallback().then(user => {
      this.user = user;
      this.sharedService.loadResources();
    });
  }

  /**
   * Initiate sign put process
   */
  startSignoutMainWindow() {
    this.manager.signoutRedirect().then(resp => {
      console.log('signed out', resp);
    }).catch(err => {
      console.log(err);
    });
  }

  /**
   * Complete sign out process
   */
  endSignoutMainWindow() {
    this.manager.signoutRedirectCallback().then(resp => {
      console.log('signed out', resp);
    }).catch(err => {
      console.log(err);
    });
  }
}
