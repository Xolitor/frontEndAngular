export class Assignment {
    _id?:string;
    id:number;
    nom:string='';
    auteur:string='';
    matiere:string;
    imageMatiere:string;
    imageProf:string;
    noteSur20: number;
    remarque: string;
    dateDeRendu:Date = new Date();
    rendu:boolean = false;
}

export enum Matieres {
    BaseDeDonnees = 'Base de données',
    TechnologiesWeb = 'Technologies Web',
    Grails = 'Grails',
  }

/*const Matieres = Object.freeze({
    BaseDeDonnees: 'Base de données',
    TechnologiesWeb: 'Technologies Web',
    Grails: 'Grails',
  });
  
//module.exports = Matieres;*/