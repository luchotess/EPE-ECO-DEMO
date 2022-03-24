import { CurrencyPipe }                    from '@angular/common';
import { HttpClient }                      from '@angular/common/http';
import { Component, Input, OnInit }        from '@angular/core';
import { environment }                     from '../../../../../environments/environment';
import { STORE_ID, STORE_NAME, STORE_URL } from '../../../../app.config';
import { randomString }                    from '../../../../app.helpers';
import { AuthService }                     from '../../../../core/auth/auth.service';
import { CartService }                     from '../../../cart/cart.service';

@Component({
    selector   : 'app-payment-cost',
    templateUrl: './payment-cost.component.html',
    styleUrls  : ['./payment-cost.component.scss']
})
export class PaymentCostComponent implements OnInit {
    @Input() totalPrice;
    @Input() totalDiscount;
    @Input() getShippingCost;
    @Input() localShippingAddress;
    @Input() buying;
    @Input() payed;
    @Input() referenceCode;
    @Input() paymentMethod;
    @Input() taxes;

    public products = this._CartService.products;
    constructor (
        private _CartService: CartService,
        private currencyPipe: CurrencyPipe,
        public _AuthService: AuthService,
        private _HttpClient: HttpClient) { }

    ngOnInit (): void {
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
            totalString   : this.currencyPipe.transform(this.totalPrice + this.getShippingCost(this.localShippingAddress.shippingMethod), 'S/ '),
            discountString: this.currencyPipe.transform(this.totalDiscount, 'S/ '),
            taxesString   : this.currencyPipe.transform(this.taxes, 'S/ '),
            storeId       : STORE_ID,
            user          : this._AuthService.user.value ? this._AuthService.user.value._id : 'guest'
        }).subscribe(response => {
            this.products.next([]);
            this.payed = true;
            this.buying = false;
            console.log(response);
        });
    }
}
