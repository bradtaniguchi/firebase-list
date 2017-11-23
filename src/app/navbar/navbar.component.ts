import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { NavbarService } from 'app/navbar/service/navbar.service';
import { AfterViewChecked, AfterViewInit } from '@angular/core';
import 'rxjs/add/operator/skip';
import { growInOut } from '../animations/grow-in-out.animation';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [growInOut]
})
export class NavbarComponent implements OnInit{
  showAddItem: boolean;
  constructor(
    private router: Router,
    private navbarService: NavbarService
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
    console.log('function not finished yet!');
  }


}
