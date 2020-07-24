import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-testwithparms',
  templateUrl: './testwithparms.component.html',
  styleUrls: ['./testwithparms.component.scss']
})
export class TestwithparmsComponent implements OnInit {

  frmroutedata={id:'',name:''}
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((res)=>{
      this.frmroutedata.id=res.id;
    })
  }

}
