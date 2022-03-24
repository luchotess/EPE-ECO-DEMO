import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector   : 'app-checkout-order-cart',
    templateUrl: './checkout-order-cart.component.html',
    styleUrls  : ['./checkout-order-cart.component.scss']
})
export class CheckoutOrderCartComponent implements OnInit {
    @Input() products;
    @Input() totalPrice;
    @Input() getTotalPriceByCartProduct;
    @Input() totalDiscount;
    @Input() getShippingCost;
    @Input() shippingAddressForm;
    @Input() selectedAddress;

    constructor () { }

    ngOnInit (): void {
    }

}
