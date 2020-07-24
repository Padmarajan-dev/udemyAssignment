import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DatabindingassignmentComponent } from './databindingassignment/databindingassignment.component';
import { DirectiveassignmentComponent } from './directiveassignment/directiveassignment.component';
import { TestingComponent } from './testing/testing.component';
import { RoutingTestComponent } from './routing-test/routing-test.component';
import { TestwithparmsComponent } from './routing-test/testwithparms/testwithparms.component';
import { TesteditComponent } from './routing-test/testedit/testedit.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { HomeComponent } from './home/home.component';
import { AuthGuradService } from './services/auth-gurad.service';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'project',
    component:ReactiveFormComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'testing',
    component:RoutingTestComponent,
    canActivateChild:[AuthGuradService],
    children:[
      {path:':id',component:TestwithparmsComponent},
      {path:':id/edit',component:TesteditComponent}
    ]
  },
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
  },
  {
    path:'not-found',
    component:NoPageFoundComponent
  },
  {
    path:'**',
    redirectTo:'/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
