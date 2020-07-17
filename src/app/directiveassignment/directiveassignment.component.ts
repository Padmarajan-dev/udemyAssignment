import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiveassignment',
  templateUrl: './directiveassignment.component.html',
  styleUrls: ['./directiveassignment.component.scss']
})
export class DirectiveassignmentComponent implements OnInit {
  btnStatus='show';
  count=0;
  logArray:any=[];
  logItemColor:string;
  constructor() { }
  increment()
  {
    this.btnStatus==='show' ? this.btnStatus='hide' : this.btnStatus='show';
    this.logArray.push(this.count+1);
    if(this.logArray.length===5)
    {
     this.logItemColor='blue'
    }
  }
  ngOnInit(): void {
  }

}
