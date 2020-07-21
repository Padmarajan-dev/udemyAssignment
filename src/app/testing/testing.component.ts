import { Component, OnInit,Output,Input,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {
  @Input()childData:{name:string,Age:Number}
  @Output()sendDataToParent=new EventEmitter<{name:string,age:number}>();
  constructor() { }
  add()
  {
    this.sendDataToParent.emit({name:'guna',age:27});
  }
  ngOnInit(): void {
  }

}
