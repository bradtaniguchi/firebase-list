import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsService } from './items/items.service';
import { AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
  imports: [
    CommonModule,

    //firebase
    AngularFirestoreModule,
  ],
  declarations: [],
  providers: [
    ItemsService
  ]
})
export class ServicesModule { }
