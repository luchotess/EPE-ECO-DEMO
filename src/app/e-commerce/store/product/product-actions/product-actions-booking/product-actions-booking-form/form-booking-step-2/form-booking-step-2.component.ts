import { HttpClient }               from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { environment }              from '../../../../../../../../environments/environment';
import { STORE_ID, STORE_NAME }     from '../../../../../../../app.config';
import { randomString }             from '../../../../../../../app.helpers';
import { AuthService }              from '../../../../../../../core/auth/auth.service';

@Component({
    selector   : 'app-form-booking-step-2',
    templateUrl: './form-booking-step-2.component.html',
    styleUrls  : ['./form-booking-step-2.component.scss']
})
export class FormBookingStep2Component implements OnInit {

    @Input()
    product;

    @Input()
    bookingData;

    public fetching: boolean = false;

    constructor (private _AuthService: AuthService,
                 private _HttpClient: HttpClient) { }

    ngOnInit (): void {
    }

    public goToStep (step: number | string): void {
        this.bookingData.registerStep = step;
    }

    public registerAttempt (): void {
        this.fetching = true;
        this.bookingData.referenceCode = randomString(10);

        const payload = {
            courseData   : this.bookingData.courseQuestionsData || {},
            user         : this._AuthService.user.value,
            course       : this.product,
            storeName    : STORE_NAME,
            referenceCode: this.bookingData.referenceCode
        };

        this._HttpClient.post(`${environment.API_BASE}/courses/property/${STORE_ID}/place`, payload)
            .subscribe(response => {
                this.goToStep('registered');
                this.fetching = false;
                console.log(response);
            });
    }

    get invalid (): boolean {
        if (this.product.schedule.days && !this.bookingData.courseQuestionsData.Dias) {
            return true;
        }

        if (this.product.schedule.hours && !this.bookingData.courseQuestionsData.Hora) {
            return true;
        }

        return !this.bookingData.courseQuestionsData.Sede;
    }
}
