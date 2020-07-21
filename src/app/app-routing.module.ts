import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DatabindingassignmentComponent } from './databindingassignment/databindingassignment.component';
import { DirectiveassignmentComponent } from './directiveassignment/directiveassignment.component';
import { TestingComponent } from './testing/testing.component';


const routes: Routes = [
  {
    path:'databind',
    component:DatabindingassignmentComponent
  },
  {
    path:'directive',
    component:DirectiveassignmentComponent
  },
  {
    path:'test',
    component:TestingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
