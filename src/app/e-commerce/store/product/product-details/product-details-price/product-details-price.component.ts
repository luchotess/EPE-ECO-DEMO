import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector   : 'app-product-details-price',
    templateUrl: './product-details-price.component.html',
    styleUrls  : ['./product-details-price.component.scss']
})
export class ProductDetailsPriceComponent implements OnInit {

    @Input()
    price;

    @Input()
    isBooking;

    constructor () { }

    ngOnInit (): void {
        console.log(this.price)
    }

}
