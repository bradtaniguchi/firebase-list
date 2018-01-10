import { Injectable } from '@angular/core';
import { Item } from '../../models/item';
import { AngularFirestore } from 'angularfire2/firestore';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { LoadingBarService } from 'app/loading-bar/service/loading-bar.service';
import { User } from '../../models/user';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AuthService } from '../auth/auth.service';
/**
 * @author Bradley Taniguchi
 * @description The Items services interacts with firestore and returns the list of
 * items for the current user.
 * TODO: update item type definition
 */
@Injectable()
export class ItemService {
  private collection: AngularFirestoreCollection<Item>;
  private items: Observable<Item[]>;
  private user: User;
  constructor(
    private db: AngularFirestore,
    private loadingBarService: LoadingBarService,
    private auth: AuthService
  ) {
    this.auth.user.subscribe((user) => {
      this.user = user;
      if (user) {
        this.collection = this.db.collection<Item>('items', ref => ref
        .where('userId', '==', this.user.uid)
        .orderBy('created', 'desc'));
        this.items = this.collection.valueChanges();
      } else {
        this.collection = undefined;
        this.items = Observable.of([]);
      }
    });
  }
  /**
   * Gets the observable of all the items saved by the collection.
   * @returns an observable of the array of items
   */
  public get(): Observable<Array<Item>> {
    this.loadingBarService.showLoadingBar();
    return this.auth.user.switchMap(() => {
      return this.items
    }).do(() => this.loadingBarService.hideLoadingBar());
  }
  /**
   * Creates the given item with the current user id.
   * @param item - the item to add
   * @returns a promise of the event
   */
  public create(item: Item): Promise<any> {
    console.log('adding item: ', item);
    if (!this.user) {
      console.log('nop');
      return Promise.reject({});
    }
    console.log('yup');
    item['userId'] = this.user.uid;
    return this.collection
      ? this.collection.add(item)
      .then((res) => {
        this.loadingBarService.hideLoadingBar();
        return res;
      }).catch((err) => {
        this.loadingBarService.hideLoadingBar();
        return err;
      })
      : Promise.reject({});
  }
  /**
   * Updates the given item
   * @param item - the item to update
   * @returns a promise of the event
   */
  public update(item: Item): Promise<any> {
    this.loadingBarService.showLoadingBar();
    return this.collection
      ? this.collection.doc(item.id)
      .update(item)
      .then((res) => {
        console.log('Item update res', res);
        this.loadingBarService.hideLoadingBar();
        return res;
      }).catch((err) => {
        this.loadingBarService.hideLoadingBar();
        return err;
      })
      : Promise.reject({});
  }

  /**
   * Deletes the given item
   * @param item the item to delete
   * @returns a promise of the event
   */
  public delete(item: Item): Promise<any> {
    this.loadingBarService.showLoadingBar();
    return this.collection
      ? this.collection.doc(item.id)
      .delete()
      .then((res) => {
        this.loadingBarService.hideLoadingBar();
        return res;
      })
      .catch((err) => {
        this.loadingBarService.hideLoadingBar();
        return err;
      })
      : Promise.reject({});
  }
}
