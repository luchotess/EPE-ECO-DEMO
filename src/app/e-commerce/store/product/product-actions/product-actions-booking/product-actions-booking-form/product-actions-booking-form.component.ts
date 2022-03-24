import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector   : 'app-product-actions-booking-form',
    templateUrl: './product-actions-booking-form.component.html',
    styleUrls  : ['./product-actions-booking-form.component.scss']
})
export class ProductActionsBookingFormComponent implements OnInit {

    @Input()
    product;

    @Input()
    bookingData;

    @Input()
    user;

    constructor () { }

    ngOnInit (): void {
    }
}
