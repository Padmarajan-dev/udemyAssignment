import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DatabindingassignmentComponent } from './databindingassignment/databindingassignment.component';


const routes: Routes = [
  {
    path:'',
    component:AppComponent
  },
  {
    path:'databind',
    component:DatabindingassignmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
