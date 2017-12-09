import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemService } from './item/item.service';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AuthService } from './auth/auth.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserService } from './user/user.service';

@NgModule({
  imports: [
    CommonModule,

    //firebase
    AngularFirestoreModule,
    AngularFireAuthModule,

    // for responsive sidenav service
    FlexLayoutModule
  ],
  declarations: [],
  providers: [
    ItemService,
    AuthService,
    UserService
  ]
})
export class ServicesModule { }
