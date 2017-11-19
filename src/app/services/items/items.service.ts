import { Injectable } from '@angular/core';
import { Item } from '../../models/item';
import { AngularFirestore } from 'angularfire2/firestore';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
/**
 * @author Bradley Taniguchi
 * @description The Items services interacts with firestore and returns the list of
 * items for the current user.
 * TODO: update item type definition
 */
@Injectable()
export class ItemsService {

  constructor(private db: AngularFirestore) { }

  public get(): Observable<Array<Item>> {
    return this.db.collection<Item>('items').valueChanges();
  }
}
