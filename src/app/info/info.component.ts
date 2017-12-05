import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth/auth.service';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  public user: Observable<firebase.User>;
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.user = this.authService.user;
  }

}
