import { Component, Output } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  parentDataArray=[{name:'ram',Age:20},{name:'guru',Age:23}]
  title = 'udemyapp';
  constructor(public router:Router)
  {

  }
  addelem(empdetails:{name:string,age:number})
  {
    this.parentDataArray.push({
      name:empdetails.name,
      Age:empdetails.age
    })
  }
}
