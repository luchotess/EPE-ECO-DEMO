import { Component, Input, OnInit } from '@angular/core';
import { CartService }              from '../../../cart/cart.service';
import { Product }                  from '../../store.model';
import { StoreService }             from '../../store.service';

@Component({
    selector   : 'app-course-card',
    templateUrl: './course-card.component.html',
    styleUrls  : ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {
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
        return categories.map(category => category.url).join('/');
    }

    public addToCart (product: Product): void {
        this._CartService.addProduct(product, 1);
    }
}
