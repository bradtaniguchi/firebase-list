import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { MatCardModule, MatInputModule, MatListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    SettingsRoutingModule,

    // angular material
    FlexLayoutModule,
    MatCardModule,
    MatInputModule
  ],
  declarations: [SettingsComponent]
})
export class SettingsModule { }
