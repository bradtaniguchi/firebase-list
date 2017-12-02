import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatButtonModule } from '@angular/material';
import { ListModule } from './list/list.module';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { ServicesModule } from './services/services.module';
import { NavbarModule } from './navbar/navbar.module';
import { LoadingBarModule } from './loading-bar/loading-bar.module';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { MatSidenavModule } from '@angular/material';
import { SidenavModule } from 'app/sidenav/sidenav.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,

    ServicesModule,
    NavbarModule,
    SidenavModule,
    LoadingBarModule,
    // firebase, keep off for now
    AngularFireModule.initializeApp(environment.firebase),

    MatSidenavModule
  ],
  providers: [
    AuthenticatedGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
