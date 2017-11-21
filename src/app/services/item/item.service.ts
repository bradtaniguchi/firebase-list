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
export class ItemService {
  private collection: AngularFirestoreCollection<Item>;
  constructor(private db: AngularFirestore) {
    this.collection = this.db.collection<Item>('items');
  }

  public get(): Observable<Array<Item>> {
    return this.collection.valueChanges();
  }
  /**
   * Creates the given item, throws an
   * @param item - the item to add
   */
  public create(item: Item): any {
    console.log('adding item: ', item);
    this.collection.add(item);
  }
  /**
   * Updates the given item
   */
  public update(item: Item): any {
    console.log('no added yet!');
  }
}
