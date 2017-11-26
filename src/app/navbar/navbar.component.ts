import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { NavbarService } from 'app/navbar/service/navbar.service';
import { FormControl } from '@angular/forms';
import { AfterViewChecked, AfterViewInit } from '@angular/core';
import 'rxjs/add/operator/skip';
import { growInOut } from '../animations/grow-in-out.animation';
import { AuthService } from '../services/auth/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [growInOut]
})
export class NavbarComponent implements OnInit{
  showAddItem: boolean;
  options = [1, 2];
  searchControl = new FormControl();
  constructor(
    private router: Router,
    private navbarService: NavbarService,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    this.navbarService.getShowAddItem()
      .subscribe(show => {
        this.showAddItem = show;
      });
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
      //TODO: redirect the user here to the login page
    });
  }
}
