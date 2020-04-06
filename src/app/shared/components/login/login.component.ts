import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ILoginOptions } from './login.options';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

    public loginForm: FormGroup;
    public submitted = false;
    public isReadOnly = true;

    public usernameErrors = { required: 'es requerido', email: 'Debe ser un email' };
    public passwordErrors = { required: 'es requerido' };

    get username(): AbstractControl { return this.loginForm.get('username'); }
    get password(): AbstractControl { return this.loginForm.get('password'); }

    @Input()
    public loginOptions: ILoginOptions = {
        title: 'Title App',
        usernameLabel: 'username',
        passwordLabel: 'password',
        loginLabel: 'Log in'
    }

    @Output()
    public submitLogin: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        private formBuilder: FormBuilder
    ) {
        this.loginForm = this.formBuilder.group({
            username: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
        });
    }

    ngOnInit() {
        setTimeout(() => {
            this.isReadOnly = false;
        }, 1500);
    }

    public onSubmitLogin(): void {
        if (this.loginForm.invalid) {
            console.log('no login service!!');
            return;
        }

        this.submitLogin.emit(this.loginForm.value);
    }

    ngAfterContentInit() {

    }

}
