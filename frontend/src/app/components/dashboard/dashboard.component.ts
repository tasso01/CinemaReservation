import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  
  constructor(private router: Router, private authservice: AuthService){

  }

  redirectToLogin(){
    this.router.navigate(['login']); 
  }

  redirectToLogout(){
    this.authservice.logOut();
  }
}
