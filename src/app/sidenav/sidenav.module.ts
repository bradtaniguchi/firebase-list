import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { SidenavService } from '../services/sidenav/sidenav.service';
import { MatToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,

    // angular material
    FlexLayoutModule,
    MatToolbarModule
  ],
  declarations: [
    SidenavComponent
  ],
  exports: [
    SidenavComponent
  ],
  providers: [
    SidenavService
  ]
})
export class SidenavModule { }
