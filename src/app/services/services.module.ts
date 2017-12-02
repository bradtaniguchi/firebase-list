import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemService } from './item/item.service';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AuthService } from './auth/auth.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { SidenavService } from './sidenav/sidenav.service';
import { FlexLayoutModule } from '@angular/flex-layout';

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
    SidenavService
  ]
})
export class ServicesModule { }
