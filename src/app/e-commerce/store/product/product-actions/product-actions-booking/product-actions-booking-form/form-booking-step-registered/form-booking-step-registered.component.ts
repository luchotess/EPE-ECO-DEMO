import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector   : 'app-form-booking-step-registered',
    templateUrl: './form-booking-step-registered.component.html',
    styleUrls  : ['./form-booking-step-registered.component.scss']
})
export class FormBookingStepRegisteredComponent implements OnInit {

    @Input()
    bookingData;

    @Input()
    user;

    constructor () { }

    ngOnInit (): void {
    }

}
