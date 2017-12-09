import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { MatCardModule } from '@angular/material';
import { AuthService } from 'app/services/auth/auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authServiceStub;
  let user;
  beforeEach(async(() => {
    user = null;
    authServiceStub = {
      user: Observable.of(user)
    };
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        RouterTestingModule
      ],
      declarations: [ LoginComponent ],
      providers: [
        {
          provide: AuthService,
          useValue: authServiceStub
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
