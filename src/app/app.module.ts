import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap'; // import everything from bootstrap
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // import everything from bootstrap
// import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';  // import only what I need from bootstrap

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { MenuComponent } from './Menu/menu.component';
import { MainContainerComponent } from './MainContainer/mainContainer.component'; /*TO DELETE*/

import { DashboardComponent } from './SubContainers/dashboard.component';
import { TaskComponent } from './SubContainers/task.component';
import { ReportsComponent } from './SubContainers/reports.component';
import { SettingsComponent } from './SubContainers/settings.component';
import { TaskFormComponent } from './SubContainers/task-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    MainContainerComponent, /*TO DELETE*/
    DashboardComponent,
    TaskComponent,
    ReportsComponent,
    SettingsComponent,
    TaskFormComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgbModule
    // NgbModal
    // NgbModule, NgbModal
    // NgbModule // import everything from bootstrap
    // NgbActiveModal, NgbModal  // import only what I need from bootstrap
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
