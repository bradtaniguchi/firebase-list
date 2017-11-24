import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingBarComponent } from './loading-bar.component';
import { MatProgressBar, MatProgressBarModule } from '@angular/material';
import { LoadingBarService } from './service/loading-bar.service';
import { Observable } from 'rxjs';

const LoadingBarServiceStub = {
  getShowLoadingBar: () => {
    return Observable.of(true);
  }
};
describe('LoadingBarComponent', () => {
  let component: LoadingBarComponent;
  let fixture: ComponentFixture<LoadingBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatProgressBarModule
      ],
      declarations: [ LoadingBarComponent ],
      providers: [
        {
          provide: LoadingBarService,
          useValue: LoadingBarServiceStub
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('show subscribe to loadingBarService', () => {
    component.ngOnInit()
    expect(component.showLoading).toBeTruthy();
  });
});
