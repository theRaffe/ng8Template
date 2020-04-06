import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { getFormFieldErrors } from 'src/app/shared/utils/formgroup.utils';


@Component({
    selector: 'login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {

    public registerForm: FormGroup;
    public submitted = false;
    public isReadOnly = true;
    public formFields: {
        [key: string]: AbstractControl;
    };
    public usernameErrors = { required: 'es requerido', email: 'Debe ser un email' };
    public passwordErrors = { required: 'es requerido' };

    constructor(
        private formBuilder: FormBuilder
    ) {

    }

    ngOnInit() {

    }

    onSubmitLogin($event: any): void {
        console.log('form data:', $event);
    }

}
