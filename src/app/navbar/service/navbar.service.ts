import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';

@Injectable()
export class NavbarService {
  private _addItem = new Subject();
  private _showAddItem = new Subject<boolean>();
  constructor(private router: Router) {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(event => {
        this.hideItem();
      });
  }

  /**
   * If the user clicked on the add item button
   */
  get addItem(): Observable<any> {
    return this._addItem.asObservable();
  }

  /**
   * If we are to show the add-item button
   */
  getShowAddItem(): Observable<boolean> {
    return this._showAddItem.asObservable();
  }
  /**
   * Function called when item is added
   */
  addedItem() {
    this._addItem.next();
  }

  showItem() {
    this._showAddItem.next(true);
  }

  hideItem() {
    this._showAddItem.next(false);
  }
}
