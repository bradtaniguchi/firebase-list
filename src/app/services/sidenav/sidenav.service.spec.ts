import { TestBed, inject } from '@angular/core/testing';

import { SidenavService } from './sidenav.service';
import { MatSidenav } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

describe('SidenavService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FlexLayoutModule
      ],
      providers: [SidenavService]
    });
  });

  it('should be created', inject([SidenavService], (service: SidenavService) => {
    expect(service).toBeTruthy();
  }));

  it ('should expose sidenav', inject([SidenavService], (service: SidenavService) => {
    service.sidenav = new MatSidenav(undefined, undefined, undefined, undefined, undefined);
    expect((service as any)._sidenav).toBeTruthy();
  }));

  it('should expose sidenavMode',  inject([SidenavService], (service: SidenavService) => {
    expect(service.sidenavMode).toBeTruthy();
  }));
});
