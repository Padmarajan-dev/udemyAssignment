import { Component, OnInit } from '@angular/core';
import { AuthGuradService } from '../services/auth-gurad.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authService:AuthenticationService) { }

  ngOnInit(): void {
  }
  log(func)
  {
     if(func ==='login')
     {
       this.authService.login();
     }else 
     {
      this.authService.logout();
     }
  }
}
