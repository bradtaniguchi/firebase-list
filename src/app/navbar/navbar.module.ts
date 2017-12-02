import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import {
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatMenuModule,
  MatTooltipModule,
  MatFormFieldModule,
  MatAutocomplete,
  MatAutocompleteModule,
  MatInputModule,
  MatCardModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarService } from './service/navbar.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchbarComponent } from './searchbar/searchbar.component';

@NgModule({
  imports: [
    CommonModule,

    //angular
    FormsModule,
    ReactiveFormsModule,
    // angular material
    MatInputModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatAutocompleteModule
  ],
  exports: [
    NavbarComponent
  ],
  declarations: [
    NavbarComponent,
    SearchbarComponent
  ],
  providers: [
    NavbarService
  ]
})
export class NavbarModule { }
