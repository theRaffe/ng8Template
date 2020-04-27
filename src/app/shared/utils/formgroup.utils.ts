import { AbstractControl } from '@angular/forms';

export function getFormFieldErrors(formControl: AbstractControl, descErrors: { [key: string]: string }): string[] {
    const result = [];
    for (const error in formControl.errors) {
        result.push(descErrors[error]);
    }

    return result;
}
