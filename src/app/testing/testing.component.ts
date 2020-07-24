import { Component, OnInit,Output,Input,EventEmitter} from '@angular/core';
import { ObservabeTestingService } from '../services/observabe-testing.service';
import {map,filter} from 'rxjs/operators';
@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {
  @Input()childData:{name:string,Age:Number}
  @Output()sendDataToParent=new EventEmitter<{name:string,age:number}>();
  dtafrmserv:any;
  dta:any;
  constructor(private usersService:ObservabeTestingService) { }
  add()
  {
    this.sendDataToParent.emit({name:'guna',age:27});
  }
  fetch()
  {
    this.usersService.getData().subscribe((dta)=>{
      this.dtafrmserv=dta.filter((data)=>{
        return data.id<3;
      });
    })
  }
  ngOnInit(): void {
  }

}
