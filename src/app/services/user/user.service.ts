import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { User } from '../../models/user';

//TODO: read this:
// https://alligator.io/angular/firebase-crud-operations/
@Injectable()
export class UserService {
  private collection: AngularFirestoreCollection<User>;
  constructor(
    private afs: AngularFirestore
  ) {
    this.collection = this.afs.collection<User>('users');
  }
  /**
   * The user to create
   * @param user - the user to create
   */
  create(user: User): Promise<firebase.firestore.DocumentReference> {
    console.log('test in create user: ', user);
    return this.collection.add(user)
    .then((userRef: firebase.firestore.DocumentReference) => {
      return this.collection.doc(userRef.id)
      .update({
        id: userRef.id
      });
    }).catch((err) => {
      return err;
    });
  }

  update(user: User): Promise<any> {
    if (user.uid) {
      return this.collection.doc(user.uid)
      .update(user)
      .then(() => {
        console.log('updated test');
        return;
      }).catch((err) => {
        return err;
      });
    } else {
      return Promise.reject({
        code: 106, // missing attribute
        message: 'Attribute is missing'
      });
    }
  }

  delete(user: User) {
    return this.collection.doc(user.uid).delete()
    .then(() => {
      return;
    }).catch((err) => {
      return err;
    });
  }
  public search(params: any) {

  }
}
