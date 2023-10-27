import { Routes } from '@angular/router';
import { EmptyPageComponent } from './empty-page/empty-page.component';

import { AuthGuard } from '../auth/auth.guard';

const Routing: Routes = [
  {
    path: 'test',
    component: EmptyPageComponent,
    canActivate: [AuthGuard]
  },
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
