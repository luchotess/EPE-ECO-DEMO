import { HttpClient }        from '@angular/common/http';
import { Component, OnInit }       from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment }             from '../../../../environments/environment';
import { STORE_ID }          from '../../../app.config';

@Component({
    selector   : 'app-footer-newsletter',
    templateUrl: './footer-newsletter.component.html',
    styleUrls  : ['./footer-newsletter.component.scss']
})
export class FooterNewsletterComponent implements OnInit {

    public form: any;
    sent: boolean = false;
    public showMessage: boolean = false;
    public subscriber: any = {};

    constructor (
        private formBuilder: FormBuilder,
        private _HttpClient: HttpClient) {
        this.form = formBuilder.group({
            email: ['', [Validators.required, Validators.email]]
        });
    }

    ngOnInit (): void {
    }
    get emailNotValid(): boolean {
        return this.form.get('email').invalid && this.form.get('email').touched;
    }

    public onSubmit (): void {
        if (this.form.valid) {
            this._HttpClient.post(`${environment.API_BASE}/subscribers/property/${STORE_ID}`, {
                email: this.form.value.email
            }).subscribe(
                (val) => {
                    console.log('POST call successful value returned in body',
                        val);
                },
                response => {
                    console.log('POST call in error', response);
                },
                () => {
                    this.showMessage = true;
                    console.log('The POST observable is now completed.');
                });
        }
    }
}
