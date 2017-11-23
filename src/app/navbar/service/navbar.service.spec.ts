import { TestBed, inject, async } from '@angular/core/testing';
import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarService } from './navbar.service';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template: `root`
})
class AppComponent { }
let router: Router;
let location: Location;

describe('NavbarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(
          [{path: '', component: AppComponent}]
        )
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        NavbarService,
      ]
    });

    router = TestBed.get(Router);
    location = TestBed.get(Location);
    // router.initialNavigation();
  });

  it('should be created', inject([NavbarService], (service: NavbarService) => {
    expect(service).toBeTruthy();
  }));

  it('getShowAddItem should be called with true, when calling hideItem', async(inject([NavbarService], (service: NavbarService) => {
    service.getShowAddItem().share().subscribe((show: boolean) => {
      expect(show).toEqual(true);
    });
    service.showItem();
  })));

  it('getShowAddItem should be called with false, when calling hideItem', async(inject([NavbarService], (service: NavbarService) => {
    service.getShowAddItem().subscribe((show: boolean) => {
      expect(show).toEqual(false);
    });
    service.hideItem();
  })));

  it('navigating fires hideItem', async(inject([NavbarService], (service: NavbarService) => {
    router.initialNavigation();
    service.getShowAddItem().subscribe((show: boolean) => {
      expect(show).toEqual(false); // should FAIL!
    });
    router.navigate(['/']);
  })));
  // add more tests for addItem, showItem, hideItem. All of these 
});
