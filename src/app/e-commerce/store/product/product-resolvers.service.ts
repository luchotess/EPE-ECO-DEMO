import { Injectable }   from '@angular/core';
import { Resolve }      from '@angular/router';
import { Observable }   from 'rxjs';
import { StoreService } from '../store.service';

@Injectable({ providedIn: 'root'})
export class ProductsResolver implements Resolve<any> {
    constructor (private _StoreService: StoreService) {}

    resolve (): Observable<any> | Promise<any> | any {
        return new Promise(async resolve => {
            if (this._StoreService.products.length === 0) {
                this._StoreService.products = (await this._StoreService.getAllProductsPromise()).data;
                resolve(this._StoreService.products);
            } else {
                resolve(this._StoreService.products);
            }
        });

    }
}

@Injectable({ providedIn: 'root'})
export class BookingProductsResolver implements Resolve<any> {
    constructor (private _StoreService: StoreService) {}

    resolve (): Observable<any> | Promise<any> | any {
        return new Promise(async resolve => {
            if (this._StoreService.bookingProducts.length === 0) {
                this._StoreService.bookingProducts = (await this._StoreService.getAllBookingProductsPromise());
                resolve(this._StoreService.bookingProducts);
            } else {
                resolve(this._StoreService.bookingProducts);
            }
        });
    }
}
