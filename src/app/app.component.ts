import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { Router } from '@angular/router';
import { AssignmentDetailComponent } from './assignement/assignment-detail/AssignmentDetailComponent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titre ='Application de gestion des devoirs à rendre (Assignments)';
  
  constructor (private authService:AuthService, private router:Router) {}
  opened=false;

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
