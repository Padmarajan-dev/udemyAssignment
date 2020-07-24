import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routing-test',
  templateUrl: './routing-test.component.html',
  styleUrls: ['./routing-test.component.scss']
})
export class RoutingTestComponent implements OnInit {
  frmroutedata={id:'',name:''}
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((res)=>{
      this.frmroutedata.id=res.id;
      this.frmroutedata.name=res.name;
    });
  }

}
