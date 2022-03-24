import { HttpClient }                         from '@angular/common/http';
import { Component, Injector }                from '@angular/core';
import { BehaviorSubject }                    from 'rxjs';
import { StatefulComponent }                  from '../../../core/stateful.component';
import { CartService }                        from '../../cart/cart.service';
import { Product, ProductCategory }           from '../store.model';
import { StoreService }                       from '../store.service';
import { AuthService }                        from '../../../core/auth/auth.service';
import { environment }                        from '../../../../environments/environment';
import { STORE_ID, STORE_NAME }               from '../../../app.config';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { randomString }                       from '../../../app.helpers';
import { Meta, Title }                        from '@angular/platform-browser';

declare const $: any;

@Component({
    selector   : 'app-product',
    templateUrl: './product.component.html',
    styleUrls  : ['./product.component.scss']
})
export class ProductComponent extends StatefulComponent {
    private scriptLoaded = false;

    public storeUrl = '';
    public productUrl = '';
    public product: Product = null;
    public products: Product[] = [];
    public bookingProducts: Product[] = [];
    public newProducts = [];
    public categories: ProductCategory[] = this._StoreService.categories;

    public productPageSettings = {
        selectedVariation: 0,
        showSchedule: false,
        productAdded: false,
        sellerContactInfo: {
            type: 'whatsapp',
            url: 'https://api.whatsapp.com/send?phone=+51992276497&text=Hola%20EPE,%20quisiera%20saber%20más%20sobre%20los%20servicios.%20',
            text: 'Conversa con un asesor'
        },
        socialLinks: [
            {
                class: 'social-facebook icon-facebook',
                url: 'https://www.facebook.com/Escuela-para-Embarazadas-141564679232115/',
                icon: null
            },
            {
                class: 'social-whatsapp',
                url: 'https://api.whatsapp.com/send?phone=+51992276497&text=Hola%20EPE,%20quisiera%20saber%20más%20sobre%20los%20productos.%20',
                icon: 'fa-whatsapp'
            },
            {
                class: 'social-instagram icon-instagram',
                url: 'https://www.instagram.com/escuela_para_embarazadas/',
                icon: null
            }
        ]
    };

    constructor (private _LocalInjector: Injector,
                 private _HttpClient: HttpClient,
                 private _StoreService: StoreService,
                 private _CartService: CartService,
                 private titleService: Title,
                 private meta: Meta) {
        super(_LocalInjector, 'home', {});

    }

    init (): void {
        this._ActivatedRoute.params.subscribe(params => {
            this.productPageSettings.productAdded = false;
            this.storeUrl = params.storeUrl;
            this.productUrl = params.productUrl || '';
            this.products = this._ActivatedRoute.snapshot.data.products;
            this.bookingProducts = this._ActivatedRoute.snapshot.data.bookingProducts;
            this.getProductData(this.productUrl);
        });
    }

    public pushTag (tag): void {
        if (tag) {
            this.meta.updateTag({ name: 'title', content: tag.title });
            this.meta.updateTag({ name: 'description', content: tag.description });
            this.meta.updateTag({ name: 'og:title', content: tag.title });
            this.meta.updateTag({ name: 'og:description', content: tag.description });
            this.meta.updateTag({ name: 'og:images', content: tag.images.images[0].url });
        }
    }

    public getProductData (productUrl: string): void {
        this.newProducts[0] = this.products.slice(0, 3);
        this.newProducts[1] = this.products.slice(3, 6);
        this.product = this.products.find(product => product.url.toLowerCase() === productUrl.toLowerCase());

        if (!this.product) {
            this.product = this.bookingProducts.find(product => product.url.toLowerCase() === productUrl.toLowerCase());
        }

        this.pushTag(this.product);

        if (!this.scriptLoaded) {
            this.runExternalScript('/assets/js/main.js', 'main');
            this.scriptLoaded = true;
        }

    }

    get categoryRelatedProducts (): Product[] {
        return [];
    }

    public getCategoryUrl (categories): string {
        return categories.map(category => category).join('/');
    }
}
