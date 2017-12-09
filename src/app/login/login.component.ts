import { Component, OnInit, OnDestroy } from '@angular/core/';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { pipe } from 'rxjs/Rx';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  private unSub = new Subject();
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.user
    .pipe(takeUntil(this.unSub))
    .subscribe((user) => {
      if (user) {
        this.router.navigateByUrl('/');
      }
    });
  }
  ngOnDestroy() {
    this.unSub.next();
    this.unSub.complete();
  }
  login() {
    this.authService.googleLogin()
    .catch((err) => {
      console.error('error: ', err);
    });
  }
}
