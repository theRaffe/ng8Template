import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ILoginOptions } from './login.options';
import { AuthService, SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";


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

    public user: SocialUser;
    public isGoogleIdActive = false;

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
        private formBuilder: FormBuilder,
        private authService: AuthService
    ) {
        this.loginForm = this.formBuilder.group({
            username: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
        });
    }

    ngOnDestroy() {
        this.signOut();
    }

    ngOnInit() {
        setTimeout(() => {
            this.isReadOnly = false;
        }, 1500);

        this.authService.authState.subscribe((user) => {
            this.user = user;
            console.log('printin id user:', user);

        });

        this.authService.readyState.subscribe(result => {
            console.log('printing readyState:', result);
            this.isGoogleIdActive = result.indexOf(GoogleLoginProvider.PROVIDER_ID) > -1;
        })


    }

    public onSubmitLogin(): void {
        if (this.loginForm.invalid) {
            console.log('no login service!!');
            return;
        }

        this.submitLogin.emit(this.loginForm.value);
    }

    onLoginGoogle() {
        console.log('login to:', GoogleLoginProvider.PROVIDER_ID);
        this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    }

    signOut(): void {
        this.authService.signOut();
    }


}
