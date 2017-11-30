import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class AuthService {
  private user: firebase.User;
  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      this.user = user;
    });
  }
  /**
   * Returns the current user of the application
   * @returns the current application user, or null if the user is not authenticated
   */
  getUser(): firebase.User | null {
    return this.user;
  }
  /**
   * Calls the sign in with redirect function for google authentication.
   */
  login(): Promise<any> {
    return this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
    .then((response) => {
      console.log('login response: ', response);
      return undefined;
    }).catch((error) => {
      console.error('login error: ', error);
      return error;
    });
  }
  /**
   * Logs out the current user, returns the promise
   * @returns the promise after the logout
   */
  logout(): Promise<any> {
    return this.afAuth.auth.signOut();
  }
}
