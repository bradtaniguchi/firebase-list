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
   * Returns the AngularFire AuthState as an observable
   */
  getAuthState(): Observable<firebase.User | null> {
    return this.afAuth.authState;
  }

  getUser(): firebase.User | null {
    return this.user;
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
