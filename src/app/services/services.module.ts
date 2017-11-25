import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemService } from './item/item.service';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AuthService } from './auth/auth.service';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  imports: [
    CommonModule,

    //firebase
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  declarations: [],
  providers: [
    ItemService,
    AuthService
  ]
})
export class ServicesModule { }
