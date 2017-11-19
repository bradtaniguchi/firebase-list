import { TestBed, inject } from '@angular/core/testing';

import { ItemsService } from './items.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

const AngularFirestoreMock = {
  collection: (collection) => Observable.of([])
}
describe('ItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ItemsService,
        {
          provide: AngularFirestore,
          useValue: AngularFirestoreMock
        }
      ],
    });
  });

  it('should be created', inject([ItemsService], (service: ItemsService) => {
    expect(service).toBeTruthy();
  }));
});
