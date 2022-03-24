import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector   : 'app-checkout-shipping-method',
    templateUrl: './checkout-shipping-method.component.html',
    styleUrls  : ['./checkout-shipping-method.component.scss']
})
export class CheckoutShippingMethodComponent implements OnInit {
    @Input() shippingAddressForm;
    @Input() selectedAddress;
    @Input() getShippingLabel;
    @Input() shippingMethods;

    constructor () { }

    ngOnInit (): void {
    }

}
