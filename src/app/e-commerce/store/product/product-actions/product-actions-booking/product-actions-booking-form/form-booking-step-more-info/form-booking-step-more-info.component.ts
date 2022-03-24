import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector   : 'app-form-booking-step-more-info',
    templateUrl: './form-booking-step-more-info.component.html',
    styleUrls  : ['./form-booking-step-more-info.component.scss']
})
export class FormBookingStepMoreInfoComponent implements OnInit {

    @Input()
    user;

    constructor () { }

    ngOnInit (): void {
    }

}
