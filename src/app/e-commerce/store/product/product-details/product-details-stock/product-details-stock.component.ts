import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector   : 'app-product-details-stock',
    templateUrl: './product-details-stock.component.html',
    styleUrls  : ['./product-details-stock.component.scss']
})
export class ProductDetailsStockComponent implements OnInit {
    @Input()
    stockWarningQty = 5;

    @Input()
    product;

    @Input()
    productPageSettings;

    constructor () { }

    ngOnInit (): void {
    }

}
