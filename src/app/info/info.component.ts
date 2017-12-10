import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth/auth.service';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import { pipe } from 'rxjs/Rx';
import { takeUntil } from 'rxjs/operators';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subject } from 'rxjs/Subject';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit, OnDestroy {
  private unSub = new Subject();
  public user: Observable<User>;
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.user = this.authService.user
    .pipe(takeUntil(this.unSub));
  }
  ngOnDestroy() {
    this.unSub.next();
    this.unSub.complete();
  }
}
