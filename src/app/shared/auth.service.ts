import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loggedIn: boolean = false;
  loggedAdmin: boolean = false;

  /*loggedIn = false;
  logIn(){
    this.loggedIn = true;
  }

  logOut(){
    this.loggedIn = false;
  }

  isAdmin(){
    const isUserAdmin = new Promise(
      (resolve,reject)=> {
        resolve(this.loggedIn);
      }
    );

    return isUserAdmin;
  }
*/

  private users: { username: string; password: string; role: string }[] = [
    { username: 'user1', password: 'password1', role: 'user' },
    { username: 'admin1', password: 'adminpassword1', role: 'admin' }
  ];

  /*isAuthenticated = false;*/
  currentUser: any;

  loging(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);

    if (user) {
      this.currentUser = { login: user.username, role: user.role };
      console.log(this.currentUser.role);
      if (this.currentUser.role == "admin"){
        this.loginAdmin();
      }
      else if (this,this.currentUser.role == "user"){
        this.loginUser();
      }
      return true;
    }
    this.logout();
    return false;
  }


  loginUser() {
    this.loggedIn = true;
    this.loggedAdmin = false;
  }


  loginAdmin() {
    this.loggedIn = true;
    this.loggedAdmin = true;
  }


  logout() {
    this.loggedIn = false;
    this.loggedAdmin = false;
  }


  isLogged(): Promise<boolean> {
    const isUserLogged = new Promise<boolean>(
      (resolve, reject) => {
        resolve(this.loggedIn);
      }
    );

    return isUserLogged;
  }

  isAdmin(): Promise<boolean> {
    const isUserAdmin = new Promise<boolean>(
      (resolve, reject) => {
        resolve(this.loggedAdmin);
      }
    );

    return isUserAdmin;
  }

}

