import { Routes } from '@angular/router';
import { EmptyPageComponent } from './empty-page/empty-page.component';

import { AuthGuardAdmin } from '../auth/auth-admin.guard';
import { AuthGuardUser } from '../auth/auth-user.guard';
import { AuthGuardClient } from '../auth/auth-client.guard';

const Routing: Routes = [
  // {
  //   path: 'test',
  //   component: EmptyPageComponent,
  //   canActivate: [AuthGuardAdmin]
  // },
  {
    path: '',
    component: EmptyPageComponent,
  },

  {
    path: '**',
    redirectTo: '',
  }
];

export { Routing };
