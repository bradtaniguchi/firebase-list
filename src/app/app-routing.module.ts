import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticatedGuard } from './guards/authenticated.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: 'app/list/list.module#ListModule',
    canActivate: [AuthenticatedGuard]
  },
  {
    path: 'settings',
    loadChildren: 'app/settings/settings.module#SettingsModule',
    canActivate: [AuthenticatedGuard]
  },
  {
    path: 'login',
    loadChildren: 'app/login/login.module#LoginModule',
  },
  {
    path: 'info',
    loadChildren: 'app/info/info.module#InfoModule'
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
