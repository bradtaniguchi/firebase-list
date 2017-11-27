import { TestBed, async, inject } from '@angular/core/testing';

import { AuthenticatedGuard } from './authenticated.guard';
import { AuthService } from '../services/auth/auth.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthenticatedGuard', () => {
  let next: ActivatedRouteSnapshot;
  let state: RouterStateSnapshot;
  let user;
  let AuthServiceMock;
  beforeEach(() => {
    user = null;
    AuthServiceMock = {
      getUser: () => {
        return user;
      },
      login: () => {
        user = {};
      },
      logout: () => {
        return Promise.resolve();
      }
    };

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        AuthenticatedGuard,
        {
          provide: AuthService,
          useValue: AuthServiceMock
        }
      ]
    });
  });

  it('should be created', inject([AuthenticatedGuard], (guard: AuthenticatedGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('should not activate if not logged in', inject([AuthenticatedGuard], (guard: AuthenticatedGuard) => {
    let result = guard.canActivate(next, state);
    expect(result).toBeFalsy();
  }));
  // TODO: TEST IF CALLED, need spys
});
