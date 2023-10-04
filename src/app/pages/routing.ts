import { Routes } from '@angular/router';
import { EmptyPageComponent } from './empty-page/empty-page.component';


const Routing: Routes = [
  {
    path: '',
    component: EmptyPageComponent
  },



  {
    path: '**',
    redirectTo: '',
  }
];

export { Routing };
