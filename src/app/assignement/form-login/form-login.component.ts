import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

  selectedRole: string; 
  username: string;
  password: string;

  constructor(private authService: AuthService, private router:Router) {    }

  submitForm() {
    if (this.authService.loging(this.username, this.password)) {
      console.log(this.authService.currentUser);
      this.updatedStatus();
      this.router.navigate(['home']);
    } else {
      console.log('login invalide');
      console.log(this.authService.loggedIn)
    }
  }

  updatedStatus(){
    if(this.authService.loggedAdmin == false){
      this.authService.isLogged();
      console.log(this.authService.loggedIn)
      console.log("log user");
    } else {
      this.authService.isAdmin();
      console.log("log admin");  
    }

    
    /*
    this.authService.isLogged().then((loggedIn) => {
      this.authService.loggedIn = loggedIn;
      console.log("user");
      this.router.navigate['/home'];
    });

    this.authService.isAdmin().then((isAdmin) => {
      this.authService.loggedAdmin = isAdmin;
      console.log("admin");
      this.router.navigate['home'];
    });*/
  }

}

