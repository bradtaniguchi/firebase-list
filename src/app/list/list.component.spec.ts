import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { TestingModule } from '../testing/testing.module';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatExpansionModule, MatIconModule } from '@angular/material';
import { ItemService } from '../services/item/item.service';
import { Item } from '../models/item';

const ItemServiceStub = {
  get: () => Observable.of([]),
  create: (item: Item) => undefined
};
const newItemDefault = {
  name: '',
  description: '',
  amount: 0
};
describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestingModule
      ],
      declarations: [ ListComponent ],
      providers: [
        {
          provide: ItemService,
          useValue: ItemServiceStub
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have getNewItem function', () => {
    expect(component.getNewItem).toBeDefined();
  });
  it('should have getNewItem to return a valid new item', () => {
    expect(component.getNewItem()).toEqual(newItemDefault);
  });

  it('should have cancel function', () => {
    expect(component.cancel).toBeDefined();
    expect(component.showNewItem).toBeFalsy();
  });

  it('should have cancel update item', () => {
    component.item = undefined;
    component.cancel();
    expect(component.item).toEqual(newItemDefault);
  });
});
