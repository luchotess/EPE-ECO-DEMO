import { Component, Input, OnInit } from '@angular/core';
import { CartService }              from '../../../cart/cart.service';
import { Product }                  from '../../store.model';
import { StoreService }             from '../../store.service';

@Component({
    selector   : 'app-product-list-card',
    templateUrl: './product-list-card.component.html',
    styleUrls  : ['./product-list-card.component.scss']
})
export class ProductListCardComponent implements OnInit {
    @Input()
    product: Product;

    constructor (private _StoreService: StoreService,
                 private _CartService: CartService) { }

    ngOnInit (): void {
    }

    get storeUrl (): string {
        return this._StoreService.getStoreUrl();
    }

    public getCategoryUrl (categories): string {
        console.log(categories);
        return categories.map(category => category).join('/');
    }

    public addToCart (qty): void {
        this._CartService.addProduct(this.product, +qty.value);
    }
}
