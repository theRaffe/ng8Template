import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: MainLayoutComponent },
];

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class MainLayoutModule { }
