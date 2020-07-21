import { Component, OnInit } from '@angular/core';
import {DataservicesService} from '../services/dataservices.service';
@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.scss']
})
export class SuccessAlertComponent implements OnInit {
  frmdta:any;
  constructor(private dataservice:DataservicesService) { }

  ngOnInit(): void {
    this.frmdta=this.dataservice.provideData();
    console.log(this.frmdta);
  }

}
