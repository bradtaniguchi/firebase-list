import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { NavbarService } from 'app/navbar/service/navbar.service';
import { FormControl } from '@angular/forms';
import { AfterViewChecked, AfterViewInit } from '@angular/core';
import 'rxjs/add/operator/skip';
import { growInOut } from '../animations/grow-in-out.animation';
import { AuthService } from '../services/auth/auth.service';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { SidenavService, Mode } from '../services/sidenav/sidenav.service';
import { MatSidenav } from '@angular/material';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [growInOut]
})
export class NavbarComponent implements OnInit{
  public showAddItem: boolean;
  public showSearch = false;
  public options = [1, 2];
  public searchControl = new FormControl();
  public user: Observable<firebase.User>;
  public sidenav: MatSidenav;
  constructor(
    private router: Router,
    private navbarService: NavbarService,
    private authService: AuthService,
    private sidenavService: SidenavService
  ) {
  }

  ngOnInit() {
    this.navbarService.getShowAddItem()
      .subscribe(show => {
        this.showAddItem = show;
      });
    this.user = this.authService.user;
    this.sidenav = this.sidenavService.sidenav;
  }
  /**
   * Toggles the sidenav
   */
  toggleSidenav() {
    this.sidenavService.sidenav.toggle();
  }
  /**
   * Alerts via the navbar service that we added an item.
   * @param event - the mouse event
   */
  addItem(event: MouseEvent) {
    console.log('clicked add item');
    this.navbarService.addedItem();
  }
  /**
   * Function called to make a search
   */
  search(searchString: string) {
    console.log('navbar-search: ', searchString);
  }
  /**
   * shows/hides the search navbar, to replace the
   * general navbar. This is only available when in
   * responsive mode
   */
  toggleSearch() {
    this.showSearch = !this.showSearch;
  }
  /**
   * Navigates to the given url
   * @param url - the url to navigate to
   */
  navigate(url: string) {
    this.router.navigateByUrl(url);
  }
  /**
   * Logs the user out
   */
  logout() {
    this.authService.logout()
    .then(() => {
      this.router.navigateByUrl('/login');
    });
  }
}
