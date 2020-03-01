import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminServiceService } from './admin-service.service';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BoundSensorModule } from 'angular-bound-sensor';
import { HttpClientModule } from '@angular/common/http';
// Router import from angular core
import {MainRoutingModule } from './main-routing/main-routing/main-routing.module';

//Adding bootstrap 4 to angular application 
import bootstrap from "../../node_modules/bootstrap";

// Custom Elemet Creation using Angular8
import { CustomElementExampleComponent } from './custom-element-example/custom-element-example.component';
import { PopupService } from './popup.service';
import { PopupComponent } from './popup/popup.component';
import { DebounceConceptComponent } from './debounce-concept/debounce-concept.component';
import { ThrottlingConceptComponent } from './throttling-concept/throttling-concept.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { ParentComponent } from './parent/parent.component';
import { ParentToChildComponent } from './parent-to-child/parent-to-child.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    DashboardComponent,
    CustomElementExampleComponent,
    PopupComponent,
    DebounceConceptComponent,
    ThrottlingConceptComponent,
    FooterComponent,
    ContactComponent,
    ParentComponent,
    ParentToChildComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MainRoutingModule,
    BoundSensorModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [AdminServiceService, PopupService],
  bootstrap: [AppComponent],
  entryComponents: [PopupComponent],
})
export class AppModule { }
