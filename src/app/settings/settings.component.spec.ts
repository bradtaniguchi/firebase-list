import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsComponent } from './settings.component';
import { MatCardModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FlexLayoutModule,
        MatCardModule,
        MatInputModule
      ],
      declarations: [ SettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
