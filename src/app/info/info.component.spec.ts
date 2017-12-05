import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCardMdImage, MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ServicesModule } from 'app/services/services.module';
import { AuthService } from 'app/services/auth/auth.service';
import { Observable } from 'rxjs/Observable';
import { InfoComponent } from 'app/info/info.component';

const AuthServiceStub = {
  user: Observable.of({
      displayName: 'Bradley Taniguchi',
      // add other stuff here
    })
};
describe('InfoComponent', () => {
  let component: InfoComponent;
  let fixture: ComponentFixture<InfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        FlexLayoutModule,
        ServicesModule
      ],
      declarations: [ InfoComponent ],
      providers: [
        {
          provide: AuthService,
          useValue: AuthServiceStub
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
