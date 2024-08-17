import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { AuthService } from '../../pages/auth/services/auth.service';
import { map, take } from 'rxjs/operators';

export const checkSesionGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.token$.pipe(
    take(1),
    map(token => {
      if (token) {
        return true;
      } else {
        // Redirigir a la página de login
        return router.createUrlTree(['/login']) as UrlTree;
      }
    })
  );
};
