import { Component, Input, OnInit } from '@angular/core';
import { AuthService }              from '../../../../../core/auth/auth.service';

@Component({
    selector   : 'app-product-actions-booking',
    templateUrl: './product-actions-booking.component.html',
    styleUrls  : ['./product-actions-booking.component.scss']
})
export class ProductActionsBookingComponent implements OnInit {

    @Input()
    product;

    @Input()
    productPageSettings;

    public user: any = this._AuthService.user;

    public bookingData = {
        courseQuestionsData: {},
        registerStep       : null,
        needsAccount       : false,
        referenceCode      : ''
    };

    constructor (private _AuthService: AuthService) {
    }

    ngOnInit (): void {
    }

    public book (): void {
        if (!this.user.value) {
            this.bookingData.needsAccount = true;
        } else {
            this.goToStep(1);
        }
    }

    public goToStep (step: number | string): void {
        this.bookingData.registerStep = step;
    }
}
