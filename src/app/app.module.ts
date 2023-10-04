import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule} from "@angular/common/http";
import { AppRoutingModule} from "./app-routing.module";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule} from "ngx-toastr";
import { NgxPaginationModule} from "ngx-pagination";
import { NgSelectModule} from "@ng-select/ng-select";
import { CKEditorModule} from "ng2-ckeditor";
import { FullCalendarModule } from '@fullcalendar/angular';
import { EmptyPageComponent } from './pages/empty-page/empty-page.component';


@NgModule({
  declarations: [
    AppComponent,
    EmptyPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    NgbModule,
    ToastrModule.forRoot({
      positionClass :'toast-top-right'
    }),
    NgbModule,
    NgxPaginationModule,
    NgSelectModule,
    CKEditorModule,
    FullCalendarModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
