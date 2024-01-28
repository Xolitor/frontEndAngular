import { Component/*, EventEmitter, Output */} from '@angular/core';
import { Assignment, Matieres } from '../assignement.model';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { subscribeOn } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { bdInitialAssignments } from 'src/app/shared/data';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent {

  //@Output() nouvelAssignment = new EventEmitter<Assignment>();
  nouvelAssignment: Assignment;
  nomDevoir:string ="";
  nomAuteur:string="";
  dateRendu:Date = new Date;
  assignments: any;
  remarque:string ="";
  //matiere:Matieres = null;
  matiere:string = "";
  noteSur20 = 0;
  matiereOptions = Object.values(Matieres);


  constructor(private assignmentService:AssignmentsService, private router:Router, private authService:AuthService){}
  onSubmit(event) {

    console.log(this.matiereOptions)
    event.preventDefault();
    const newsAssignment = new Assignment();
    newsAssignment.id = Math.floor(Math.random()*1000)
    newsAssignment.nom = this.nomDevoir;
    newsAssignment.rendu = false;
    newsAssignment.auteur = this.nomAuteur;
    newsAssignment.matiere = this.matiere;
    newsAssignment.noteSur20 = this.noteSur20;
    newsAssignment.remarque = this.remarque;

    //matiereOptions[] = Object.values(Matieres);

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

  /*peuplerBD() {
    bdInitialAssignments.forEach(a => {
        let nouvelAssignment = new Assignment();
        nouvelAssignment.nom = a.Nom;
        nouvelAssignment.id = a.id;
        nouvelAssignment.dateDeRendu = new Date(a.dateDeRendu);
        nouvelAssignment.rendu = a.rendu;
   
        this.assignmentService.addAssignment(nouvelAssignment)
        .subscribe(reponse => {
          console.log(reponse.message);
        })
      })
    }*/
  

  isAdmin(){
    return this.authService.loggedAdmin;
  }
}
