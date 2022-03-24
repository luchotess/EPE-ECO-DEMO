import { Component, Input, OnInit } from '@angular/core';
import { CartService }              from '../../../cart/cart.service';
import { Product }                  from '../../store.model';
import { StoreService }             from '../../store.service';
import { AppService }               from '../../../../app.service';

@Component({
    selector   : 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls  : ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
    @Input()
    product: Product;

    public isRatingsReady = false;

    constructor (private _StoreService: StoreService,
                 private _CartService: CartService,
                 private _AppService: AppService) { }

    ngOnInit (): void {
    }

    get storeUrl (): string {
        return this._StoreService.getStoreUrl();
    }

    public getCategoryUrl (categories): string {
        if (categories && categories[0].url) {
            return categories.map(category => category.url).join('/');
        }

        return categories ? categories.map(category => category).join('/') : '';
    }

    public addToCart (product: Product): void {
        this._CartService.addProduct(product, 1);
        this._AppService.isModalBeingShow = true;
    }
}
