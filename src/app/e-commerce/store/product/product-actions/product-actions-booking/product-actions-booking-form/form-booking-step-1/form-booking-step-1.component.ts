import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector   : 'app-form-booking-step-1',
    templateUrl: './form-booking-step-1.component.html',
    styleUrls  : ['./form-booking-step-1.component.scss']
})
export class FormBookingStep1Component implements OnInit {

    @Input()
    user;

    @Input()
    product;

    @Input()
    bookingData;

    public keys = Object.keys;

    constructor () { }

    ngOnInit (): void {
    }

    public goToStep (step: number | string): void {
        this.bookingData.registerStep = step;
    }
}
