import { NgModule }                         from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, CurrencyPipe }       from '@angular/common';
import { Route, RouterModule }              from '@angular/router';
import { CardComponent }                    from './card/card.component';
import { CheckoutComponent }                from './checkout.component';
import { PaymentStepComponent }             from './payment/payment-step/payment-step.component';
import { PaymentComponent }                 from './payment/payment.component';
import { PaymentListComponent }             from './payment/payment-list/payment-list.component';
import { PaymentCouponComponent }           from './payment/payment-coupon/payment-coupon.component';
import { PaymentCostComponent }             from './payment/payment-cost/payment-cost.component';
import { PaymentFormDateShippingComponent } from './payment/payment-form-date-shipping/payment-form-date-shipping.component';
import { CheckoutShippingMethodComponent } from './checkout-shipping-method/checkout-shipping-method.component';
import { CheckoutOrderCartComponent } from './checkout-order-cart/checkout-order-cart.component';

const routes: Route[] = [
    {
        path     : '',
        component: CheckoutComponent
    },
    {
        path     : 'payment',
        component: PaymentComponent
    }
];

@NgModule({
    declarations: [CheckoutComponent, PaymentComponent,
        CardComponent, PaymentListComponent, PaymentCouponComponent, PaymentCostComponent, PaymentStepComponent, PaymentFormDateShippingComponent, CheckoutShippingMethodComponent, CheckoutOrderCartComponent],
    imports     : [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule
    ],
    providers   : [CurrencyPipe]
})
export class CheckoutModule {}
