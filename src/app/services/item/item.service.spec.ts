import { TestBed, inject } from '@angular/core/testing';

import { ItemService } from './item.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Item } from '../../models/item';
import { LoadingBarService } from '../../loading-bar/service/loading-bar.service';
import { AuthService } from '../auth/auth.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// start example code
const input: Item[][] = [[
  // { name: 'Dolnośląskie', uname: 'dolnoslaskie', parent: 'polska'},
  // { name: 'Wrocław', uname: 'wroclaw', parent: 'dolnoslaskie'}
]];

const data = Observable.from(input);

const collectionStub = {
  valueChanges: jasmine.createSpy('valueChanges').and.returnValue(data)
}

const angularFireStoreStub = {
  collection: jasmine.createSpy('collection').and.returnValue(collectionStub)
}
// above example
const AngularFirestoreMock = {
  collection: (collection?, func?) => {
    const _items = [];
    return {
      valueChanges: () => Observable.of([]),
      add: (item: Item) => {
        _items.push(item);
      },
      _items: _items
    };
  },
  create: (item: Item) => undefined
};

const LoadingBarServiceStub = {
  showLoadingBar: () => {
  },
  hideLoadingBar: () => {
  },
};
const AuthServiceStub = {
  user: new BehaviorSubject({uid: 'some_uid'})
}
describe('ItemsService', () => {
  beforeEach(() => {

    // spyOn(AngularFirestoreMock, 'create');
    TestBed.configureTestingModule({
      providers: [
        ItemService,
        // {
        //   provide: AngularFirestore,
        //   useValue: AngularFirestoreMock
        // },
        {
          provide: AngularFirestore,
          useValue: angularFireStoreStub
        },
        {
          provide: LoadingBarService,
          useValue: LoadingBarServiceStub
        },
        {
          provide: AuthService,
          useValue: AuthServiceStub
        }
      ],
    });
  });

  it('should be created', inject([ItemService], (service: ItemService) => {
    expect(service).toBeTruthy();
  }));

  it('should have get function', inject([ItemService], (service: ItemService) => {
    expect(service.get).toBeTruthy();
  }));

  describe('create function ', () => {
    it('should exist', inject([ItemService], (service: ItemService) => {
      expect(service.create).toBeTruthy();
      expect(angularFireStoreStub.collection).toHaveBeenCalled();
    }));
    // it('should call mock', inject([ItemService], (service: ItemService) => {
    //   service.create({
    //     name: 'fake item',
    //     description: 'fake description',
    //     amount: 0
    //   });
    //   service.get().subscribe((results) => {
    //     expect(results).toBeTruthy();
    //   })
    // }));
  });

  it('should have update function', inject([ItemService], (service: ItemService) => {
    expect(service.update).toBeTruthy();
  }));
});
