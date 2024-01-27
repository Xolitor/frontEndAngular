import { Injectable } from '@angular/core';
import { Assignment } from '../assignement/assignement.model';
import {Observable, map, of, tap} from 'rxjs'
import { LoggingService } from './logging.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  constructor(private loggingService:LoggingService, private http:HttpClient) { }

  assignments:Assignment[] = [
    /*{
      id:1,
      nom:"TP1 sur WebComponents, un lecteur audio amélioré",
      dateDeRendu: new Date('2020-11-17'),
      rendu: true
    },
    {
      id:2,
      nom:"TP2 sur Angular, un joli gestionnaire de devoirs (Assignements)",
      dateDeRendu: new Date ('2020-12-15'),
      rendu: false
    },
    {
      id:3,
      nom:"TP3 sur Angular, utilisation du router et de Web Services",
      dateDeRendu: new Date ('2021-01-04'),
      rendu: false
    }*/
   
  ]

  //url = "http://localhost:8010/api/assignments";
  url = "https://api-cours-angular-2023-fb404035aa48.herokuapp.com/api/assignments"

  getAssignments():Observable<Assignment[]>{
    return this.http.get<Assignment[]>(this.url)
    //return of(this.assignments);
  }

  /*getNewId():number{
    return this.assignments.length+1;
  }*/

  addAssignment(assignement:Assignment):Observable<any> {
    this.loggingService.log(assignement.nom, "ajouté")
    return this.http.post<Assignment>(this.url, assignement);
    /*this.assignments.push(assignement);
    this.loggingService.log(assignement.nom, "ajouté")
    return of("assignement ajouté");*/
  }

  getAssignment(id: number) : Observable<Assignment | undefined> {
    return this.http.get<Assignment>(`${this.url}/${id}`);
    /*.pipe(
      map(a => {
        console.log("tap: " + a.nom);
      })
    )*/
  }

  updateAssignment(assignement:Assignment):Observable<any> {
    this.loggingService.log(assignement.nom, "modifié")
    return this.http.put(this.url, assignement);
    /*this.assignments.forEach((assignement, index) => {
      if (assignement = assignement){
        this.assignments[index] = assignement;
      }
    });
    return of("assignement modifié");*/
  }

  deleteAssignment(assignement:Assignment):Observable<any> {
    this.loggingService.log(assignement.nom, "supprimé")
    return this.http.delete(this.url + "/" + assignement._id);
    /*let pos = this.assignments.indexOf(assignement);
    this.assignments.splice(pos,1);
    this.loggingService.log(assignement.nom, "supprimé")
    return of("Assignment service: assignment supprimé!");*/
  }
}
