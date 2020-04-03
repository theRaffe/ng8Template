import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

    public registerForm: FormGroup;
    public submitted = false;
    public isReadOnly = true;
    public usernameErrors = [];
    public passwordErrors = [];
    public formFields: {
        [key: string]: AbstractControl;
    };

    get username(): AbstractControl { return this.registerForm.get('username'); }
    get password(): AbstractControl { return this.registerForm.get('password'); }

    constructor(
        private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            username: ['', [Validators.required, Validators.email, Validators.minLength(6)]],
            password: ['', [Validators.required, Validators.minLength(6)]],
        });

        setTimeout(() => {
            this.isReadOnly = false;
        }, 1500);


        this.username.valueChanges.subscribe(() => {
            this.formFields = this.registerForm.controls;
            this.usernameErrors = this.getFormFieldErrors(this.registerForm, 'username', { required: 'es requerido', email: 'Debe ser un email', minlength: 'Debe tener al menos 6 carac' });
        });

        this.username.statusChanges.subscribe(result => {
            console.log('username statusChanges:', result);
        })

        this.password.valueChanges.subscribe(() => {
            this.passwordErrors = this.getFormFieldErrors(this.registerForm, 'password', { required: 'es requerido' });
        });

    }

    private getFormFieldErrors(formGroup: FormGroup, field: string, descErrors: { [key: string]: any }): any {
        const formField = formGroup.get(field);
        const result = [];
        for (const error in formField.errors) {
            console.log('printin validation error:', error);
            result.push(descErrors[error]);
        }

        console.log('printin result error:', result);
        return result;
    }

    public onSubmitLogin(): void {
        //[disabled]="registerForm.invalid"
        const errors = this.username.errors;
        console.log('printing errors username:', errors);
        if (this.registerForm.invalid) {
            console.log('no login service!!');
            return;
        }
        console.log('execute login service!!');
    }

}
