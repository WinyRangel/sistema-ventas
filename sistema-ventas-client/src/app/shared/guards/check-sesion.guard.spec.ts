import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { checkSesionGuard } from './check-sesion.guard';

describe('checkSesionGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => checkSesionGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
