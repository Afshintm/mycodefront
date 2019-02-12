import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService) { }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | boolean {
    const token = next.fragment;

    if (token) {
      this.authService.completeAuthentication();
    }

    if (this.authService.isLoggedIn()) {
      return true;
    }

    this.authService.startAuthentication();
    return false;
  }
}
