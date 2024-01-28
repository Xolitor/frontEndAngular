import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignement.model';
import { AssignmentsService } from '../shared/assignments.service';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-assignements',
  templateUrl: './assignement.component.html',
  styleUrls: ['./assignement.component.css']
})


export class AssignmentsComponent implements OnInit {


  displayedColumns: string[] = ['Nom', 'ID', 'Date de Rendu', 'Rendu'];
  dataSource: MatTableDataSource<Assignment>;
  constructor (private assignmentService:AssignmentsService, private authService: AuthService, private router:Router){}

  //assignementSelectionne!:Assignment;
  //ajoutActive = false;
  assignments!:Assignment[];
  //formVisible = false;

  ngOnInit(): void {
    //this.assignments = this.assignmentService.getAssignments();
    this.getAssignments();
    this.loadData();
    /*setTimeout(() => {
      this.ajoutActive = true;
    }, 2000);*/
  }

  getAssignments(){
    this.assignmentService.getAssignments()
      .subscribe((assignments) => {
        this.assignments = assignments
      });
  }

  linkEnabled() {
    return this.authService.loggedIn;
  }

  

  private loadData() {
    this.assignmentService.getAssignments().subscribe((data) => {
      this.assignments = data;
      this.dataSource = new MatTableDataSource(this.assignments);
    });
  }

  /*enableLink(){
    if(this.authService.isLogged){
      this.isLinkDisabled == false;
    }
    else {
      this.isLinkDisabled == true;
    }
  }*/

  /*
  assignmentClique(assignment:Assignment) {
    this.assignementSelectionne = assignment;
  }
  

  onAddAssignmentBtnClick(){
    this.formVisible = true;
   // console.log(this.formVisible);
  }

  
  onNouvelAssignment(event:Assignment){
    this.assignmentService.addAssignment(event)
      .subscribe((message) => console.log(message));
    
    
    this.formVisible = false;
    //console.log(this.formVisible);
  }
  */
 }




