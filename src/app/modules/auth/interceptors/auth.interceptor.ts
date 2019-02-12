import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let request = req;

    let newParams = new HttpParams({fromString: request.params.toString()});
    newParams = newParams.append('Authorization', this.authService.getAuthorizationHeaderValue());
    request = req.clone({
      params: newParams
    });

    return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
    }, (err: any) => {
      if (err.status === 403) {
        this.router.navigate(['/', 'unauthorized']);
      }

      if (err.status === 404) {
        this.router.navigate(['/', 'page-not-found']);
      }
    }));
  }
}
