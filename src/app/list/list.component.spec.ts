import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { TestingModule } from '../testing/testing.module';
import { ItemsService } from 'app/services/items/items.service';
import { Observable } from 'rxjs';

const ItemsServiceStub = {
  get: () => Observable.of([])
}
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
          provide: ItemsService,
          useValue: ItemsServiceStub
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
});
