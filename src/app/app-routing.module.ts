import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', loadChildren: () => import('./features/main-layout/main-layout.module').then(m => m.MainLayoutModule) },
  { path: 'login', loadChildren: () => import('./features/login-page/login-page.module').then(m => m.LoginPageModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
