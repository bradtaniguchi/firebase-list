import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log('user: ', this.authService.getUser());
    if (this.authService.getUser() !== null) {
      this.router.navigateByUrl('/');
    }
  }

  login() {
    this.authService.login()
    .then((response) => {
      console.log('response: ', response);
      if (response) {
        this.router.navigateByUrl('/');
      }
    }).catch((err) => {
      console.error('error: ', err);
    });
  }
}