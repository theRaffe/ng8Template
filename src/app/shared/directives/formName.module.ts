import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormNameDirective } from './formName.directive';


@NgModule({
    declarations: [FormNameDirective],
    imports: [
        CommonModule
    ],
    exports: [
        FormNameDirective
    ]
})
export class FormNameDirectiveModule { }
