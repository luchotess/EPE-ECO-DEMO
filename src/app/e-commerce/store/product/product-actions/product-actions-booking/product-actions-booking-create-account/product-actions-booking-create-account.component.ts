import { Component, Input, OnInit }           from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService }                        from '../../../../../../core/auth/auth.service';

@Component({
    selector   : 'app-product-actions-booking-create-account',
    templateUrl: './product-actions-booking-create-account.component.html',
    styleUrls  : ['./product-actions-booking-create-account.component.scss']
})
export class ProductActionsBookingCreateAccountComponent implements OnInit {

    public inscriptionForm: FormGroup;
    public fetching: boolean = false;
    public alertSuccess;
    public user: any = this._AuthService.user;

    @Input()
    public bookingData;

    constructor (private _fb: FormBuilder,
                 private _AuthService: AuthService) {
        this.createForm();
    }

    ngOnInit (): void {
    }

    async saveLogin (): Promise<any> {
        if (this.inscriptionForm.invalid) {
            return Object.values(this.inscriptionForm.controls).forEach(control => {
                control.markAsTouched();
            });
        }
        await this.createAccount();
    }

    public async createAccount (): Promise<any> {
        this.fetching = true;

        const { email, dni, name, lastname, password, phone } = this.inscriptionForm.value;

        try {
            const registeredResponse = await this._AuthService.register({ name, lastname, email, phone, data: { dni }, password });

            if (registeredResponse) {
                const { token } = registeredResponse.data;
                this._AuthService.setUserFromToken(token);
                this.bookingData.registerStep = 1;
            }
        } catch (error) {
            this.alertSuccess = error;
        } finally {
            this.fetching = false;
        }
    }

    createForm (): void {
        this.inscriptionForm = this._fb.group({
            name     : [name, [Validators.required, Validators.minLength(3)]],
            lastname : ['', Validators.required],
            email    : ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            phone    : ['', [Validators.required, Validators.pattern('^(\\+51|0051|51|9|01|)[0-9 -]{7,25}$')]],
            dni      : ['', [Validators.required, Validators.pattern('^\\d{8,12}$')]],
            password : ['', Validators.required],
            password2: ['', Validators.required]
        }, {
            validators: this.passwordsSame('password', 'password2')
        });
    }

    public passwordsSame (pass1: string, pass2: string): any {
        return (formGroup: FormGroup) => {
            const pass1Control = formGroup.controls[pass1];
            const pass2Control = formGroup.controls[pass2];
            if (pass1Control.value === pass2Control.value) {
                pass2Control.setErrors(null);
            } else {
                pass2Control.setErrors({ noEsIgual: true });
            }
        };
    }

    // Form Validators

    get emailNotValid (): boolean {
        return this.inscriptionForm.get('email').invalid && this.inscriptionForm.get('email').touched;
    }

    get passwordNotValid (): boolean {
        return this.inscriptionForm.get('password').invalid && this.inscriptionForm.get('password').touched;
    }

    get password2NotValid (): boolean {
        return this.inscriptionForm.get('password2').invalid && this.inscriptionForm.get('password2').touched;
    }

    get nameNotValid (): boolean {
        return this.inscriptionForm.get('name').invalid && this.inscriptionForm.get('name').touched;
    }

    get lastnameNotValid (): boolean {
        return this.inscriptionForm.get('lastname').invalid && this.inscriptionForm.get('lastname').touched;
    }

    get dniNotValid (): boolean {
        return this.inscriptionForm.get('dni').invalid && this.inscriptionForm.get('dni').touched;
    }

    get phoneNotValid (): boolean {
        return this.inscriptionForm.get('phone').invalid && this.inscriptionForm.get('phone').touched;
    }
}
