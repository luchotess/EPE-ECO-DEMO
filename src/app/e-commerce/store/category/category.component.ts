import { Component, Injector }      from '@angular/core';
import { BehaviorSubject }          from 'rxjs';
import { StatefulComponent }        from '../../../core/stateful.component';
import { Product, ProductCategory } from '../store.model';
import { StoreService }             from '../store.service';

declare const $: any;

@Component({
    selector   : 'app-category',
    templateUrl: './category.component.html',
    styleUrls  : ['./category.component.scss']
})
export class CategoryComponent extends StatefulComponent {
    public storeUrl = '';
    public categoryUrl = '';
    public productUrl = '';

    public type = 'grid';

    public products: Product[] = [];
    public bookingProducts: Product[] = [];
    public categories: ProductCategory[] = this._StoreService.categories;
    public categoriesServices: ProductCategory[] = this._StoreService.bookingProductscategories;

    public viewOptions = {
        sortOptions    : [
            {
                value   : 'no-order',
                title   : 'Sin orden',
                selected: true
            },
            {
                value: 'popularity',
                title: 'Popularidad'
            },
            {
                value: 'rating',
                title: 'Ratings'
            },
            {
                value: 'date',
                title: 'Nuevos Primero'
            },
            {
                value: 'price',
                title: 'Precio: Más Bajo a Más Alto'
            },
            {
                value: 'price-desc',
                title: 'Precio: Más Alto a Más Bajo'
            }
        ],
        qtyOptions     : [
            10,
            20
        ],
        viewModeOptions: [
            'grid',
            'list'
        ]
    };

    public viewOptionsValues = {
        sortOptionValue: 'no-order',
        qtyOptionValue : 10,
        viewModeValue  : 'grid'
    };

    public paginatorSettings = {
        pages      : 1,
        currentPage: 1
    };

    constructor (private _LocalInjector: Injector,
                 private _StoreService: StoreService) {
        super(_LocalInjector, 'home', {});
    }

    init (): void {
        this._ActivatedRoute.params.subscribe(params => {
            this.storeUrl = params.storeUrl;
            this.categoryUrl = params.categoryUrl || '';
            this.productUrl = params.productUrl || '';

            this.products = this._ActivatedRoute.snapshot.data.products;
            this.bookingProducts = this._ActivatedRoute.snapshot.data.bookingProducts;
            this.getPaginatorSettings();

            if (this.categoryUrl !== 'productos') {
                this.filterProductsByCategory();
            }
        });

        this.runExternalScript('/assets/js/nouislider.min.js', 'nouislider');
        this.runExternalScript('/assets/js/main.js', 'main');
    }

    getPaginatorSettings (): void {
        this.paginatorSettings.pages = Math.ceil(this.products.length / this.viewOptionsValues.qtyOptionValue);
    }

    public getFilteredProducts (): Product[] {
        const start = this.viewOptionsValues.qtyOptionValue * (this.paginatorSettings.currentPage - 1);
        const end = this.viewOptionsValues.qtyOptionValue * (this.paginatorSettings.currentPage);

        return this.products.slice(
            start,
            end
        );
    }

    public showBanner (): boolean {
        return this.categoryUrl === 'productos' || this.categoryUrl === 'cursos' || this.categoryUrl === 'servicios';
    }

    public filterProductsByCategory (): void {
        this.products = this.products.filter(product => product.categories.some(category => category === this.categoryUrl));

        if (this.products.length === 0) {
            this.products = this.bookingProducts.filter(
                service => service.categoriesArray.some(category => category.url === this.categoryUrl)
            );
        }
    }
}
