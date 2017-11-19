import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as matAngular from '@angular/material';
import { MatExpansionModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

const shared = [
  matAngular.MatToolbarModule,
  matAngular.MatCardModule,
  matAngular.MatButtonModule,
  matAngular.MatIconModule,
  matAngular.MatInputModule,
  matAngular.MatExpansionModule,
  matAngular.MatAutocompleteModule,

  // common angular modules
  FormsModule,
];
@NgModule({
  imports: shared,
  exports: shared,
  declarations: []
})
export class TestingModule { }
