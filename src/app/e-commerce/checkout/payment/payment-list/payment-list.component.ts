import { Component, Input, OnInit } from '@angular/core';
import { CartProduct }              from '../../../store/store.model';

@Component({
    selector   : 'app-payment-list',
    templateUrl: './payment-list.component.html',
    styleUrls  : ['./payment-list.component.scss']
})
export class PaymentListComponent implements OnInit {

    @Input() localProducts;

    constructor () { }

    ngOnInit (): void {
    }

    public getTotalPriceByCartProduct (cartItem: CartProduct): number {
        return cartItem.item.price.offer ? cartItem.item.price.offer : cartItem.item.price.actual;
    }
}
