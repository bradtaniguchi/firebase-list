import { TestBed, inject, async } from '@angular/core/testing';

import { LoadingBarService } from './loading-bar.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoadingBarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [LoadingBarService]
    });
  });

  it('should be created', inject([LoadingBarService], (service: LoadingBarService) => {
    expect(service).toBeTruthy();
  }));

  it('showLoading should fire getShowLoadingBar as true', async(inject([LoadingBarService], (service: LoadingBarService) => {
    service.getShowLoadingBar().subscribe(val => {
      expect(val).toBeTruthy();
    });
    service.showLoadingBar();
  })));

  it('hideLoading should fire getShowLoadingBar as false', async(inject([LoadingBarService], (service: LoadingBarService) => {
    service.getShowLoadingBar().subscribe(val => {
      expect(val).toBeFalsy();
    });
    service.hideLoadingBar();
  })));
});
