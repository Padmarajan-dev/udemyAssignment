import { Injectable } from '@angular/core';
import {Route,ActivatedRouteSnapshot,CanActivate,CanActivateChild,RouterStateSnapshot,Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuradService implements CanActivateChild{
  constructor(private authService:AuthenticationService,private route:Router)
  {

  }
  canActivateChild(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean> | Promise<boolean>{
         return this.authService.isAuthenticated()
         .then(
           (authenticated:boolean)=>{
               if(authenticated)
               {
                 return true;
               }else 
               {
                 this.route.navigate(['/']);
               }
           }
         );     
  }
}
