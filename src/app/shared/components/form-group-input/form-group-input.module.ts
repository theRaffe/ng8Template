import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroupInputComponent } from './form-group-input.component';
import { FormNameDirectiveModule } from '../../directives/formName.module';

@NgModule({
  declarations: [FormGroupInputComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FormGroupInputComponent,
    FormNameDirectiveModule
  ]
})
export class FormGroupInputModule { }
