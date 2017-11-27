import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { MatInputModule, MatCardModule, MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,

    LoginRoutingModule,

    // angular material
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
