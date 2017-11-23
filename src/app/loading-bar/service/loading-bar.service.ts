import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Injectable()
export class LoadingBarService {
  private _showLoadingBar = new Subject<boolean>();
  constructor(private router: Router) {
    this.router.events
      .filter(event => event instanceof NavigationStart)
      .subscribe(event => {
        this.showLoadingBar();
      });

    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(event => {
        this.hideLoadingBar();
      });
  }

  getShowLoadingBar(): Observable<boolean> {
    return this._showLoadingBar.asObservable();
  }

  showLoadingBar() {
    this._showLoadingBar.next(true);
  }

  hideLoadingBar() {
    this._showLoadingBar.next(false);
  }
}
