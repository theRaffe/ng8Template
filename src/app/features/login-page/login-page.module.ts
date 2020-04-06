import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FormGroupInputModule } from 'src/app/shared/components';
import { LoginPageComponent } from './login-page.component';
import { LoginModule } from 'src/app/shared/components/login/login.module';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
];

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormGroupInputModule,
    LoginModule,
    RouterModule.forChild(routes)
  ]
})
export class LoginPageModule { }
