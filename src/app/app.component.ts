import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { SidenavService, Mode } from './services/sidenav/sidenav.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  public sidenavMode: Observable<Mode>;
  constructor(
    private sidenavService: SidenavService
  ) {}

  ngOnInit() {
    this.sidenavService.sidenav = this.sidenav;
    this.sidenavMode = this.sidenavService.sidenavMode;
  }
}
