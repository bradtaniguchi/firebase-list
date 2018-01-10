import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import { User } from '../../models/user';
// https://angularfirebase.com/lessons/google-user-auth-with-firestore-custom-data/
@Injectable()
export class AuthService {
  private _user: Observable<User>;
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore
  ) {
    this._user = this.afAuth.authState
    .switchMap(user => {
      if (user) {
        return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
      } else {
        return Observable.of(null);
      }
    });
  }
  /**
   * Updates the given user within firestore
   * @param user the user information to update with.
   */
  private updateUserData(user: User): Promise<void> {
    const userRef = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      lastLoginDate: new Date()
    };
    return userRef.set(data)
    .then(res => {
      return res;
    })
    .catch(err => {
      console.error('error updating user: ', err);
      return err;
    });
  }
  private createUserData(user: User): Promise<void> {
    const collection = this.afs.collection<User>('users');

    // creates a user with the given uid
    const newUserRef = collection.doc(user.uid);
    const data: User = {
      uid: newUserRef.ref.id,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };
    return newUserRef.ref.set(data);
  }

  /**
   * Calls the sign in with redirect function for google authentication.
   * @param provider - the auth provider to use for login.
   */
  private oAuthLogin(provider): Promise<any> {
    return this.afAuth.auth.signInWithPopup(provider)
    .then((cred) => {
      return this.updateUserData(cred.user);
    }).catch((err) => {
      return err;
    });
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }
  /**
   * Logs out the current user, returns the promise
   * @returns the promise after the logout
   */
  logout(): Promise<any> {
    return this.afAuth.auth.signOut();
  }

  get user(): Observable<User> {
    return this._user;
  }
}
