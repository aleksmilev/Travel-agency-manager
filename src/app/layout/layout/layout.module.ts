import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routing } from '../../pages/routing';
import { LayoutComponent } from './layout.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbCollapse } from "@ng-bootstrap/ng-bootstrap";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: Routing,
  },
];

@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent,
    HeaderComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FontAwesomeModule,
        NgbCollapse
    ],
  exports: [RouterModule],
})
export class LayoutModule { }
