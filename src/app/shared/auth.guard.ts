import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  let authService = inject(AuthService);
  let router = inject (Router);

  return authService.isAdmin()
  .then(authentifie => {
    if (authentifie){
      console.log("Vous etes admin, autorisé")
      return true;
    } else {
      console.log("Vous n'etes pas admin, pas autorisé")
      router.navigate(['/home']);
      return false
    }
  })

};
