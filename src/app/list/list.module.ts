import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ListRoutingModule } from './list-routing.module';
import { MatCardModule, MatExpansionModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFirestoreModule } from 'angularfire2/firestore';
@NgModule({
  imports: [
    CommonModule,

    ListRoutingModule,

    // angular material
    FlexLayoutModule,
    MatCardModule,
    MatExpansionModule
  ],
  declarations: [ListComponent],
  bootstrap: [ListComponent]
})
export class ListModule { }
