import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { DatabindingassignmentComponent } from './databindingassignment/databindingassignment.component';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { DirectiveassignmentComponent } from './directiveassignment/directiveassignment.component';
import { TestingComponent } from './testing/testing.component';
import { CustomStyleDirectiveDirective } from './Directives/custom-style-directive.directive';
import { DropdownDirective } from './Directives/dropdown.directive';
@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    DatabindingassignmentComponent,
    DirectiveassignmentComponent,
    TestingComponent,
    CustomStyleDirectiveDirective,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
