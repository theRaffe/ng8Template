import { Directive, ElementRef } from "@angular/core";
import { NgControl } from '@angular/forms';

@Directive({
    selector: '[formControl], [formControlName]'
})
export class FormNameDirective {

    constructor(private el: ElementRef, private control: NgControl) { }

    ngOnInit() {
        (this.control.control as any).nativeElement = this.el.nativeElement;
    }
}