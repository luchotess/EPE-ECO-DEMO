import { HttpClient }               from '@angular/common/http';
import { Injectable }               from '@angular/core';
import { BehaviorSubject }          from 'rxjs';
import {
    CATEGORIES_BASE_URL,
    isMultiStore,
    PRODUCTS_BASE_URL,
    SERVICES_BASE_URL,
    CATEGORIES_SERVICES_BASE_URL
}                                   from '../../app.config';
import { Product, ProductCategory } from './store.model';

@Injectable({
    providedIn: 'root'
})
export class StoreService {
    public currentStore = null;
    public products: Product[] = [];
    public bookingProducts: Product[] = [];
    public categories: ProductCategory[] = [];
    public bookingProductscategories: ProductCategory[] = [];


    public services: BehaviorSubject<Product[]> = new BehaviorSubject([]);
    public featuredProducts: BehaviorSubject<Product[]> = new BehaviorSubject([]);

    constructor (private _httpClient: HttpClient) {}

    public getAllBookingProductsCategoriesPromise (): Promise<any> {
        return this._httpClient.get(CATEGORIES_SERVICES_BASE_URL).toPromise();
    }

    public getAllServicesPromise (): Promise<any> {
        return this._httpClient.get(SERVICES_BASE_URL).toPromise();
    }

    public getAllCategoriesPromise (): Promise<any> {
        return this._httpClient.get(CATEGORIES_BASE_URL).toPromise();
    }

    public getAllProductsPromise (): Promise<any> {
        return this._httpClient.get(PRODUCTS_BASE_URL).toPromise();
    }

    public getAllBookingProductsPromise (): Promise<any> {
        return this._httpClient.get(SERVICES_BASE_URL).toPromise();
    }

    public getAllServices (): void {
        this._httpClient.get(SERVICES_BASE_URL).subscribe((response: any) => {
            this.services.next(response);
        });
    }

    public getStoreUrl (): string {
        return isMultiStore ? this.currentStore : '/tienda';
    }
}
