import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth/auth.service';
import { CanActivateChild } from '@angular/router/src/interfaces';

@Injectable()
export class AuthenticatedGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if(this.authService.getUser() !== null) {
      console.log('in true guard');
      return true;
    } else {
      console.log('showing login');
      this.authService.login();
    }
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if(this.authService.getUser() !== null) {
      return true;
    } else {
      this.authService.login();
    }
  }
}
