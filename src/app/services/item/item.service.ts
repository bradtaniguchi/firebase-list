import { Injectable } from '@angular/core';
import { Item } from '../../models/item';
import { AngularFirestore } from 'angularfire2/firestore';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { LoadingBarService } from 'app/loading-bar/service/loading-bar.service';
/**
 * @author Bradley Taniguchi
 * @description The Items services interacts with firestore and returns the list of
 * items for the current user.
 * TODO: update item type definition
 */
@Injectable()
export class ItemService {
  private collection: AngularFirestoreCollection<Item>;
  constructor(
    private db: AngularFirestore,
    private loadingBarService: LoadingBarService
  ) {
    this.collection = this.db.collection<Item>('items', ref => ref.orderBy('created', 'desc'));
  }

  public get(): Observable<Array<Item>> {
    this.loadingBarService.showLoadingBar();
    return this.collection.valueChanges().map(items => {
      this.loadingBarService.hideLoadingBar();
      return items;
    });
  }
  /**
   * Creates the given item, throws an
   * @param item - the item to add
   */
  public create(item: Item): Promise<any> {
    console.log('adding item: ', item);
    return this.collection.add(item)
    .then((res) => {
      this.loadingBarService.showLoadingBar();
      return res;
    }).catch((err) => {
      this.loadingBarService.hideLoadingBar();
      return err;
    });
  }
  /**
   * Updates the given item
   * @param item - the item to update
   */
  public update(item: Item): Promise<any> {
    this.loadingBarService.showLoadingBar();
    return this.collection.doc(item.id)
    .update(item)
    .then((res) => {
      console.log('Item update res', res);
      this.loadingBarService.hideLoadingBar();
      return res;
    }).catch((err) => {
      this.loadingBarService.hideLoadingBar();
      return err;
    });
  }

  public delete(item: Item): Promise<any> {
    this.loadingBarService.showLoadingBar();
    return this.collection.doc(item.id)
    .delete()
    .then((res) => {
      this.loadingBarService.hideLoadingBar();
      return res;
    })
    .catch((err) => {
      this.loadingBarService.hideLoadingBar();
      return err;
    });
  }
}