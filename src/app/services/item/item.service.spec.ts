import { TestBed, inject } from '@angular/core/testing';

import { ItemService } from './item.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Item } from '../../models/item';

const AngularFirestoreMock = {
  collection: (collection?) => {
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
}
describe('ItemsService', () => {
  beforeEach(() => {

    // spyOn(AngularFirestoreMock, 'create');
    TestBed.configureTestingModule({
      providers: [
        ItemService,
        {
          provide: AngularFirestore,
          useValue: AngularFirestoreMock
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
    }));

    // it('should call mock', inject([ItemService], (service: ItemService) => {
    //   service.create({
    //     name: 'fake item',
    //     description: 'fake description',
    //     amount: 0
    //   });
    //   console.log('test: ', AngularFirestoreMock.collection()['_items']);
    //   expect(AngularFirestoreMock.collection()['_items'].length).toBeGreaterThan(0);
    // }));
  });

  it('should have update function', inject([ItemService], (service: ItemService) => {
    expect(service.update).toBeTruthy();
  }));
});
