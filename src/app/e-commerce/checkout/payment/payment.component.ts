import { HttpClient }                      from '@angular/common/http';
import { Component, Injector }             from '@angular/core';
import { BehaviorSubject }                 from 'rxjs';
import { STORE_ID, STORE_NAME, STORE_URL } from '../../../app.config';
import { StatefulComponent }               from '../../../core/stateful.component';
import { CartService }                     from '../../cart/cart.service';
import { CartProduct, ShippingAddress }    from '../../store/store.model';
import { CurrencyPipe }                    from '@angular/common';
import { AuthService }                     from '../../../core/auth/auth.service';
import { environment }                     from '../../../../environments/environment';
import { randomString }                    from '../../../app.helpers';

@Component({
    selector   : 'app-checkout',
    templateUrl: './payment.component.html',
    styleUrls  : ['./payment.component.scss']
})
export class PaymentComponent extends StatefulComponent {
    public localProducts = this._CartService.products.value;
    public products = this._CartService.products;
    public totalPrice = this._CartService.totalPrice.value;
    public totalProducts = this._CartService.totalProducts.value;
    public shippingAddress: BehaviorSubject<ShippingAddress> = this._CartService.shippingAddress;
    public localShippingAddress: ShippingAddress = this._CartService.shippingAddress.value;
    public payed = false;
    public buying = false;
    public referenceCode = '';
    public paymentMethod = 'Yape/Plin';
    public totalDiscount = 0;
    public taxes = 0;
    public paymentMethods = [];
    public isCardPopupBeingShow = false;

    constructor (private _LocalInjector: Injector,
                 private _HttpClient: HttpClient,
                 private _CartService: CartService,
                 private currencyPipe: CurrencyPipe,
                 public _AuthService: AuthService) {
        super(_LocalInjector, 'home', {});
    }

    async init (): Promise<any> {
        this.runExternalScript('/assets/js/main.js', 'main');

        this.totalDiscount = this.localProducts.reduce((accumulator, product) => {
            const discount = (product.item.price.old - product.item.price.actual) * product.qty;
            return accumulator + discount;
        }, 0);

        if (this.localProducts.length === 0) {
            this._Router.navigate(['/cart']);
        }

        this.paymentMethods =
            (await this._HttpClient.get(`${environment.API_BASE}/payment-methods/property/${STORE_ID}`).toPromise() as any).data;
    }

    public getShippingCost (shippingMethod: string): number {
        return +shippingMethod.split('|')[0];
    }

    public getTotalPriceByCartProduct (cartItem: CartProduct): number {
        return cartItem.item.price.offer ? cartItem.item.price.offer : cartItem.item.price.actual;
    }

    public showCardPopup (): void {
        this.isCardPopupBeingShow = true;

    }

    public setPaymentType (paymentCode): void {
        this.paymentMethod = paymentCode;

        if (paymentCode === 'Card') {
            this.showCardPopup();
        }
    }

    public buyAttempt (): void {
        this.referenceCode = randomString(10);
        this.buying = true;
        this._HttpClient.post(`${environment.API_BASE}/orders/property/${STORE_ID}`, {
            shippingAddress   : this._CartService.shippingAddress.value,
            cart              : this._CartService.products.value,
            referenceCode     : this.referenceCode,
            storeName         : STORE_NAME,
            storeURL          : STORE_URL,
            paymentMethod     : this.paymentMethod,
            total             : this.totalPrice + this.getShippingCost(this.localShippingAddress.shippingMethod),
            discount          : this.totalDiscount,
            shippingCostString: this.currencyPipe.transform(this.getShippingCost(this.localShippingAddress.shippingMethod), 'S/ '),
            shippingCost      : this.getShippingCost(this.localShippingAddress.shippingMethod),
            taxes             : this.taxes,
            // tslint:disable-next-line:max-line-length
            totalString       : this.currencyPipe.transform(this.totalPrice + this.getShippingCost(this.localShippingAddress.shippingMethod), 'S/ '),
            discountString    : this.currencyPipe.transform(this.totalDiscount, 'S/ '),
            taxesString       : this.currencyPipe.transform(this.taxes, 'S/ '),
            storeId           : STORE_ID,
            user              : this._AuthService.user.value ? this._AuthService.user.value._id : 'guest'
        }).subscribe(response => {
            this.products.next([]);
            this.payed = true;
            this.buying = false;
            console.log(response);
        });
    }
}
