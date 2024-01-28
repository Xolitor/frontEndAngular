import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Assignment } from '../assignement.model';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';


@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {

  /*@Input()*/ assignmentTransmis!: Assignment;
  //@Output() delAssignment = new EventEmitter<Assignment>();
  constructor(private assignmentService: AssignmentsService, private route:ActivatedRoute, private router:Router, private authService:AuthService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.assignmentService.getAssignment(id)  
      .subscribe(Assignment => this.assignmentTransmis = Assignment);
  }


  onAssignmentRendu() {
    this.assignmentTransmis.rendu = true;

    this.assignmentService.updateAssignment(this.assignmentTransmis)
      .subscribe((reponse) => { console.log(reponse.message);

      this.assignmentTransmis = null;

      this.router.navigate(["/home"]); })
  }

  checkNonRendu() {
    return this.assignmentTransmis.noteSur20 == 0;
  }

  onAssignmentDelete() {
    
    this.assignmentService.deleteAssignment(this.assignmentTransmis)
      .subscribe((reponse) => { console.log(reponse.message);
     
      this.assignmentTransmis = null;

      this.router.navigate(['home']);})
  }

  onClickEdit(){
    this.router.navigate( ['/assignment', this.assignmentTransmis.id, 'edit'],
                          {queryParams:{'nom':this.assignmentTransmis.nom}, 
                          fragment:'edition'});
  }

  isAdmin(){
    return this.authService.loggedAdmin;
  }

  isUser() {
    return this.authService.loggedIn;
  }
}
