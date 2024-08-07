import { Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";

@Injectable({ providedIn: 'root' })
export class BaseForm {
    constructor() { }

    isValidField(form: AbstractControl | null): boolean {
        let bandera = false;
        if (form) {
            bandera = (form.touched || form.dirty) && form.invalid;
        }
        return bandera;
    }

    getErrorMessage(form: AbstractControl | null): string {
        let message = '';

        if (form) {
            const { errors } = form;
            if (errors) {
                const messages: { [key: string]: string } = {
                    required: 'Campo requerido',
                    email: 'Formato Inválido',
                    pattern: 'Formato Inválido',
                    min: 'El rango no es correcto',
                    max: 'El rango no es correcto',
                    minlength: 'El rango no es correcto' // Note: corrected 'MinLength' to 'minlength'
                };
                const errorKey = Object.keys(errors).find(Boolean);
                if (errorKey) {
                    message = messages[errorKey] || '';
                }
            }
        }
        return message;
    }
}
