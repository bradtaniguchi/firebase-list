import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Observable } from 'rxjs';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export type Mode = 'over' | 'push' | 'side';
@Injectable()
export class SidenavService {
  private _sidenav: MatSidenav;
  private _sidenavMode = new BehaviorSubject<Mode>('over');
  constructor(
    private media: ObservableMedia
  ) {
    media.subscribe((change: MediaChange) => {
      if ( change.mqAlias === 'xs') {
         this._sidenavMode.next('over');
      } else if (change.mqAlias === 'sm') {
        this._sidenavMode.next('over');
      } else if (change.mqAlias === 'md') {
        this._sidenavMode.next('side');
      } else if (change.mqAlias === 'lg') {
        this._sidenavMode.next('side');
      } else if (change.mqAlias === 'xl') {
        this._sidenavMode.next('side');
      }
    });
  }

  /**
   * The sidenav mode is calculated by the current 
   * screen size. This is automatically provided
   * @returns the sidenav mode calculated for the current screensize
   */
  get sidenavMode(): Observable<Mode> {
    return this._sidenavMode.asObservable();
  }

  get sidenav(): MatSidenav {
    return this._sidenav;
  }

  set sidenav(sidenav: MatSidenav){
    this._sidenav = sidenav;
  }
}
