import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector   : 'app-product-details-variations',
    templateUrl: './product-details-variations.component.html',
    styleUrls  : ['./product-details-variations.component.scss']
})
export class ProductDetailsVariationsComponent implements OnInit {

    @Input()
    variations;

    @Input()
    productPageSettings;

    constructor () { }

    ngOnInit (): void {
    }

}
