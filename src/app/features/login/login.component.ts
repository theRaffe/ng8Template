import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { getFormFieldErrors } from 'src/app/shared/utils/formgroup.utils';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, AfterViewInit {

    public registerForm: FormGroup;
    public submitted = false;
    public isReadOnly = true;
    public formFields: {
        [key: string]: AbstractControl;
    };
    public usernameErrors = { required: 'es requerido', email: 'Debe ser un email' };
    public passwordErrors = { required: 'es requerido' };
    public form1Errors = { required: 'es requerido', minlength: 'Debe tener al menos 6' };

    get username(): AbstractControl { return this.registerForm.get('username'); }
    get password(): AbstractControl { return this.registerForm.get('password'); }
    get field1(): AbstractControl { return this.registerForm.get('field1'); }

    @ViewChild('myuser', { static: false })
    public usernameRef: any;

    constructor(
        private formBuilder: FormBuilder
    ) {
        this.registerForm = this.formBuilder.group({
            username: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            field1: ['', [Validators.required, Validators.minLength(6)]],
        });
    }

    ngOnInit() {


        setTimeout(() => {
            this.isReadOnly = false;
        }, 1500);
    }

    public onSubmitLogin(): void {
        if (this.registerForm.invalid) {
            console.log('no login service!!');
            return;
        }
        console.log('execute login service!!');
    }

    ngAfterContentInit() {
        const element = (<any>this.username).nativeElement;
        console.log('[ngAfterContentInit] element:', element, this.username);
    }

    ngAfterViewInit() {
        const crtl = this.registerForm.controls['username'];
        console.log('[ngAfterViewInit] get user:', (<any>crtl).nativeElement);
        console.log('[ngAfterViewInit] get field1:', (<any>this.field1));
    }
}
