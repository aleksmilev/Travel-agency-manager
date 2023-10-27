import { Routes } from '@angular/router';
import { EmptyPageComponent } from './empty-page/empty-page.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from '../auth/auth.guard';

const Routing: Routes = [
  // {
  //   path: 'test',
  //   component: EmptyPageComponent,
  //   canActivate: [AuthGuard]
  // },
  {
    path: '',
    component: EmptyPageComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: '**',
    redirectTo: '',
  }
];

export { Routing };
