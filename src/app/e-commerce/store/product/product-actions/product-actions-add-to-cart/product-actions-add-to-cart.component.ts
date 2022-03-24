import { Component, Input, OnInit } from '@angular/core';
import { CartService }              from '../../../../cart/cart.service';

@Component({
    selector   : 'app-product-actions-add-to-cart',
    templateUrl: './product-actions-add-to-cart.component.html',
    styleUrls  : ['./product-actions-add-to-cart.component.scss']
})
export class ProductActionsAddToCartComponent implements OnInit {

    @Input()
    productPageSettings;

    @Input()
    product;

    constructor (private _CartService: CartService) { }

    ngOnInit (): void {
    }

    public addToCart (qty): void {
        console.log(this.product)
        console.log(this.productPageSettings.selectedVariation)

        this.productPageSettings.productAdded = true;
        this._CartService.addProduct(this.product, +qty.value);
    }
}
