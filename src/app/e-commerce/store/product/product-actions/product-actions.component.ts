import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector   : 'app-product-actions',
    templateUrl: './product-actions.component.html',
    styleUrls  : ['./product-actions.component.scss']
})
export class ProductActionsComponent implements OnInit {

    @Input()
    productPageSettings;

    @Input()
    product;

    constructor () { }

    ngOnInit (): void {
    }

}
