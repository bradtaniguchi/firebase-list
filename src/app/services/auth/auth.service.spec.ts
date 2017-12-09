import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';

// these tests new to be setup correctly with mocks.

// class AngularFireAuthMock extends AngularFireAuth {
//   auth = {
//     signInWithPopup: (authProvider) => {
//       console.log('test signInWithPopup');
//       return Promise.resolve(true);
//     },
//     signOut: () => {
//       return Promise.resolve(true);
//     }
//   }
// }
xdescribe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        // {
        //   provide: AngularFireAuth,
        //   useValue: AngularFireAuthMock
        // }
      ]
    });
  });

  xit('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  xit('should call signInWithPopup, on login', inject([AuthService], (service: AuthService) => {
    // const spy = spyOn(AngularFireAuthMock.auth, 'signInWithPopup').and.returnValue();
    service.googleLogin();
    // expect(spy.calls.any()).toHaveBeenCalled();
  }));

  xit('should call signtOut, on logout', inject([AuthService], (service: AuthService) => {
    // const spy = spyOn(AngularFireAuthMock.auth, 'signOut');
    service.logout();
    // expect(spy.calls.any()).toHaveBeenCalled();
  }));
});
