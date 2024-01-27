import { Component/*, EventEmitter, Output */} from '@angular/core';
import { Assignment } from '../assignement.model';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { subscribeOn } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent {

  //@Output() nouvelAssignment = new EventEmitter<Assignment>();
  nouvelAssignment: Assignment;
  nomDevoir:string ="";
  dateRendu:Date = new Date;
  assignments: any;
  
  constructor(private assignmentService:AssignmentsService, private router:Router){}
  onSubmit(event) {

    event.preventDefault();
    const newsAssignment = new Assignment();
    newsAssignment.id = Math.floor(Math.random()*1000)
    newsAssignment.nom = this.nomDevoir;
    newsAssignment.rendu = false;
 
    if (this.dateRendu)
      newsAssignment.dateDeRendu = this.dateRendu;

    //this.nouvelAssignment.emit(newsAssignment);
    console.log(newsAssignment);
    //this.assignments.push(newsAssignment);
    //event.preventDefault();

    //this.nouvelAssignment.emit(newsAssignment)

    this.assignmentService.addAssignment(newsAssignment)
      .subscribe(reponse => { console.log(reponse.message);

    
    this.router.navigate(['home']);})
  }
}
