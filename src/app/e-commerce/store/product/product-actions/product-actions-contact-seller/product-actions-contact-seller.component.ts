import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector   : 'app-product-actions-contact-seller',
    templateUrl: './product-actions-contact-seller.component.html',
    styleUrls  : ['./product-actions-contact-seller.component.scss']
})
export class ProductActionsContactSellerComponent implements OnInit {

    @Input()
    sellerContactInfo;

    constructor () { }

    ngOnInit (): void {}

}
