import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector   : 'app-product-details-description',
    templateUrl: './product-details-description.component.html',
    styleUrls  : ['./product-details-description.component.scss']
})
export class ProductDetailsDescriptionComponent implements OnInit {

    @Input()
    product;

    constructor () { }

    ngOnInit (): void {}
}
