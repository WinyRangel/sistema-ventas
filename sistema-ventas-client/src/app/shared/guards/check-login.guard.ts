import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../../pages/auth/services/auth.service';
import { map, take } from 'rxjs/operators'; // Cambié de 'rxjs' a 'rxjs/operators'

export const checkLoginGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService); // Usar 'inject' en lugar de 'Inject'

  return authService.token$.pipe(
    take(1),
    map(token => !token) // Simplificación de la lógica del map
  );
};
