import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UsersComponent} from './users/users.component';
import { AuthGuard } from './modules/auth/guards/auth.guard';
import { AuthCallbackComponent } from './modules/auth/auth-callback/auth-callback.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [
      AuthGuard
    ],
    children: [
      {
        path: '',
        loadChildren: './modules/dashboard/dashboard.module#DashboardModule'
      }
    ]
  },
  {
    path: 'auth-callback',
    component: AuthCallbackComponent
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    // todo: this will go to a 'page not found page'
    path: '**', component: UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
