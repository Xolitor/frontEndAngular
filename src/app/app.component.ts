import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titre ='Application de gestion des devoirs à rendre (Assignments)';
  
  constructor (private authService:AuthService, private router:Router) {}
  opened=false;

  linkEnabled() {
    return this.authService.loggedIn;
  }
  logDisabled(){
    this.authService.logout();
    //this.router.navigate(['home']);
  }

  /*peupler(){
    this.addassignment.peuplerBD();
  }*/
  /*login(){
    if(this.authService.loggedIn){
      this.authService.logout();
      this.router.navigate['/home'];
      console.log("pas log");
    } else {
      this.authService.loginAdmin();
      console.log(" log");  
    }
  }*/
}
