import { Injectable }   from '@angular/core';
import { Resolve }      from '@angular/router';
import { Observable }   from 'rxjs';
import { StoreService } from '../store/store.service';

@Injectable({ providedIn: 'root'})
export class HomeCategoriesResolver implements Resolve<any> {
    constructor (private _StoreService: StoreService) {}

    resolve (): Observable<any> | Promise<any> | any {
        return new Promise(async resolve => {
            if (this._StoreService.categories.length === 0) {
                this._StoreService.categories = (await this._StoreService.getAllCategoriesPromise()).data;
                resolve(this._StoreService.categories);
            } else {
                resolve(this._StoreService.categories);
            }
        });
    }
}

@Injectable({ providedIn: 'root'})
export class HomeBookingProductsCategoriesResolver implements Resolve<any> {
    constructor (private _StoreService: StoreService) {}

    resolve (): Observable<any> | Promise<any> | any {
        return new Promise(async resolve => {
            if (this._StoreService.bookingProductscategories.length === 0) {
                this._StoreService.bookingProductscategories = (await this._StoreService.getAllBookingProductsCategoriesPromise());
                resolve(this._StoreService.bookingProductscategories);
            } else {
                resolve(this._StoreService.bookingProductscategories);
            }
        });
    }
}

@Injectable({ providedIn: 'root'})
export class HomeInsurancesResolver implements Resolve<any> {
    constructor (private service: StoreService) {}

    resolve (): Observable<any> | Promise<any> | any {
        return new Promise((resolve, reject) => {
            resolve({data: [
                    {
                        image: '/assets/images/logopacifico.jpg',
                        title: 'Pacífico seguro',
                        key: 'Pacífico'
                    },
                    {
                        image: '/assets/images/logomafre.jpg',
                        title: 'Mapfre seguro',
                        key: 'Mapfre'
                    },
                    {
                        image: '/assets/images/logosanitas.jpg',
                        title: 'Sanitas',
                        key: 'sanitas'
                    },
                ]});
        });
    }
}
