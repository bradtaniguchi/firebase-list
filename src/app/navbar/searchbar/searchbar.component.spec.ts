import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbarComponent } from './searchbar.component';
import { MatIconModule, MatToolbarModule } from '@angular/material';

describe('SearchbarComponent', () => {
  let component: SearchbarComponent;
  let fixture: ComponentFixture<SearchbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatIconModule,
        MatToolbarModule
      ],
      declarations: [ SearchbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit toggleSearch', (done) => {
    expect(component.emitToggleSearch).toBeDefined();
    component.toggleSearch.subscribe((val) => {
      expect(val).toEqual(undefined);
      done();
    });
    component.emitToggleSearch();
  });

  it('should emit search', (done) => {
    expect(component.emitSearch).toBeDefined();
    component.search.subscribe((string) => {
      expect(string).toEqual('hello world');
      done();
    });

    component.emitSearch('hello world');
  });
});
