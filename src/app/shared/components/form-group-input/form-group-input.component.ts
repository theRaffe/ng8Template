import { AfterContentInit, Component, ContentChild, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { getFormFieldErrors } from '../../utils/formgroup.utils';

@Component({
    selector: 'form-group-input',
    templateUrl: './form-group-input.component.html',
})
export class FormGroupInputComponent implements OnInit, OnChanges, AfterContentInit {

    constructor() { }

    public ngOnChanges(changes: SimpleChanges): void {

        const abstractControl = changes['abstractControl'].currentValue as AbstractControl;
        if (abstractControl) {
            this.abstractControl.valueChanges.subscribe(() => {
                this.customErrors = getFormFieldErrors(abstractControl, this.dictErrors);
            });
        }

    }

    public inputId: string = null;
    public title: string = null;
    public required = false;
    public customErrors = [];

    @Input()
    private dictErrors: { [key: string]: string };

    @Input()
    private abstractControl: AbstractControl;
    @ContentChild('input', { static: true }) input: ElementRef;

    ngOnInit() {
    }

    ngAfterContentInit() {
        const element = (<any>this.abstractControl).nativeElement;
        element.classList.add("form-control");
        element.classList.add("form-control-sm");

        if (element.getAttribute('id'))
            this.inputId = element.getAttribute('id');

        if (element.getAttribute('title'))
            this.title = element.getAttribute('title');

        this.required = element.hasAttribute('required');

    }


}
