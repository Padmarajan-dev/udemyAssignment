import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { DatabindingassignmentComponent } from './databindingassignment/databindingassignment.component';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DirectiveassignmentComponent } from './directiveassignment/directiveassignment.component';
import { TestingComponent } from './testing/testing.component';
import { CustomStyleDirectiveDirective } from './Directives/custom-style-directive.directive';
import { DropdownDirective } from './Directives/dropdown.directive';
import { RoutingTestComponent } from './routing-test/routing-test.component';
import { TestwithparmsComponent } from './routing-test/testwithparms/testwithparms.component';
import { TesteditComponent } from './routing-test/testedit/testedit.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    DatabindingassignmentComponent,
    DirectiveassignmentComponent,
    TestingComponent,
    CustomStyleDirectiveDirective,
    DropdownDirective,
    RoutingTestComponent,
    TestwithparmsComponent,
    TesteditComponent,
    NoPageFoundComponent,
    HomeComponent,
    ReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
