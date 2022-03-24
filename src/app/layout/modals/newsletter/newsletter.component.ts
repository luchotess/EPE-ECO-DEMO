import { HttpClient }              from '@angular/common/http';
import { Component, OnInit }       from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment }             from '../../../../environments/environment';
import { STORE_ID }                from '../../../app.config';
import { AppService }              from '../../../app.service';
import { StoreService }            from '../../../e-commerce/store/store.service';

@Component({
    selector   : 'app-newsletter',
    templateUrl: './newsletter.component.html',
    styleUrls  : ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {

    public form: any;
    sent: boolean = false;
    public showMessage: boolean = false;

    constructor (
        public _AppService: AppService,
        private formBuilder: FormBuilder,
        private _StoreService: StoreService,
        private _HttpClient: HttpClient) {
        this.form = formBuilder.group({
            email: ['', [Validators.required, Validators.email]]
        });
    }

    ngOnInit (): void {
    }

    public closeOverlay (): void {
        this._AppService.isModalBeingShow = false;
    }

    get emailNotValid (): boolean {
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
