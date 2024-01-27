import { Component, OnInit } from '@angular/core';
import { Assignment } from '../assignement.model';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-edit-assignment',
  templateUrl: './edit-assignment.component.html',
  styleUrls: ['./edit-assignment.component.css']
})
export class EditAssignmentComponent implements OnInit {
  assignment:Assignment;

  constructor(private assignmentService:AssignmentsService,
              private route:ActivatedRoute,
              private router:Router){ }

  ngOnInit ():void {
    const id = +this.route.snapshot.params['id'];
    this.assignmentService.getAssignment(id)
      .subscribe(Assignment => this.assignment = Assignment);

    const paramshttp = this.route.snapshot.queryParams['nom'];
    const fragment = this.route.snapshot.fragment;
    console.log('Query Params:');
    console.log(paramshttp);
    console.log('Fragment :');
    console.log(fragment);
  }

  onSaveAssignment(event){
    event.preventDefault();
    

    this.assignmentService.updateAssignment(this.assignment)
      .subscribe(reponse => {console.log(reponse.message);
    
    this.router.navigate(["/home"]); })
  }

}
