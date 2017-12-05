import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoRoutingModule } from './info-routing.module';
import { InfoComponent } from './info.component';
import { MatCardMdImage, MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    InfoRoutingModule,

    // angular material
    MatCardModule,
    FlexLayoutModule
  ],
  declarations: [InfoComponent]
})
export class InfoModule { }
