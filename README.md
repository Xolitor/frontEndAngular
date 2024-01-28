Voici notre projet Angular hébergé sur Heroku.

Détail du travail realisé:

1. Ajout d'une gestion de login/password
  - Un toolbar avec une icone pour se login en haut a droite
  - une icone pour se deconnecter en haut a droite
  - si on est loggué en tant que user on a le droit de modifier et ajouter des assignments
  - si non loggué on peut que consulter les assignments
  - une liste de login/passwords sont codés en dur dans auth.service.ts:

  private users: { username: string; password: string; role: string }[] = [
    { username: 'user1', password: 'password1', role: 'user' },
    { username: 'admin1', password: 'adminpassword1', role: 'admin' }
  ];

2. Ajouter de nouvelles propriétés au modèle des Assignments
   - On a ajouté auteur, Matiere, Note sur 20, remarques
   - Un devoir ne peut pas etre rendu si la note est egal a 0 dans notre cas (equivalent de non rendu dans notre code)
   - SEUL les admins peuvent créent un assignment avec une note et des remarques
   - On a PAS ajouté les images associé aux matières

3. Améliorer l'affichage des Assignments
   - Les assignments apparaissent dans une table angular material
   - Avec Datasource
   - La vue permet de voir les remarques, la note mais PAS les photos
  
On a essaye de rendre le tout plus joli

On a hébergé sur Heroku.com

Plusieurs fonctionnalités ne sont pas implementés car nous avons mal géré notre temps.
   
