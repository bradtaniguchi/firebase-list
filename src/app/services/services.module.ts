import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemService } from './item/item.service';
import { AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
  imports: [
    CommonModule,

    //firebase
    AngularFirestoreModule,
  ],
  declarations: [],
  providers: [
    ItemService
  ]
})
export class ServicesModule { }
