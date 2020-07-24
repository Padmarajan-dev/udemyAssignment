import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticated:boolean=false
  constructor() { }

  isAuthenticated()
  {
    const promise = new Promise(
      (resolve,reject)=>{
       setTimeout(() => {
         console.log(this.authenticated);
         resolve(this.authenticated);
       },800);
    });
    return promise
  }
  login()
  {
    this.authenticated = true;
  }
  logout()
  {
    this.authenticated = false;
  }
}
