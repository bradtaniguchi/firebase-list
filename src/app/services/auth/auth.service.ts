import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class AuthService {
  private _user: Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth) {
    this._user = this.afAuth.authState;
  }

  get user(): Observable<firebase.User> {
    return this._user;
  }
  /**
   * Returns the current user of the application
   * @returns the current application user, or null if the user is not authenticated
   */
  getUser(): firebase.User | null {
    return this.afAuth.auth.currentUser;
  }
  /**
   * Calls the sign in with redirect function for google authentication.
   */
  login(): Promise<any> {
    const provider = new firebase.auth.GoogleAuthProvider();
    // provider.addScope('https://www.googleapis.com/auth/plus.login');
    return this.afAuth.auth.signInWithPopup(provider)
    .then((response) => {
      console.log('login response: ', response);
      return response;
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
