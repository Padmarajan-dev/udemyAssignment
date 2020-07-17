import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DatabindingassignmentComponent } from './databindingassignment/databindingassignment.component';
import { DirectiveassignmentComponent } from './directiveassignment/directiveassignment.component';


const routes: Routes = [
  {
    path:'',
    component:AppComponent
  },
  {
    path:'databind',
    component:DatabindingassignmentComponent
  },
  {
    path:'directive',
    component:DirectiveassignmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
