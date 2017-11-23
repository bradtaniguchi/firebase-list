import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingBarComponent } from './loading-bar.component';
import { LoadingBarService } from './service/loading-bar.service';
import { MatProgressBarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,

    // angular material
    MatProgressBarModule
  ],
  declarations: [
    LoadingBarComponent
  ],
  exports: [
    LoadingBarComponent
  ],
  providers: [
    LoadingBarService
  ]
})
export class LoadingBarModule { }
