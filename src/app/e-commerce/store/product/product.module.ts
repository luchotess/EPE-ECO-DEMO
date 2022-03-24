import { NgModule }                                 from '@angular/core';
import { CommonModule }                             from '@angular/common';
import { Route, RouterModule }                      from '@angular/router';
import { NgbDatepickerModule }                      from '@ng-bootstrap/ng-bootstrap';
import { StoreSharedModule }                         from '../shared/shared.module';
import { BookingProductsResolver, ProductsResolver } from './product-resolvers.service';

import { ProductComponent }                 from './product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductMediaGalleryComponent } from './product-media-gallery/product-media-gallery.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductDetailsPriceComponent } from './product-details/product-details-price/product-details-price.component';
import { ProductDetailsVariationsComponent } from './product-details/product-details-variations/product-details-variations.component';
import { ProductDetailsStockComponent } from './product-details/product-details-stock/product-details-stock.component';
import { ProductDetailsDescriptionComponent }     from './product-details/product-details-description/product-details-description.component';
import { ProductActionsBookingComponent }         from './product-actions/product-actions-booking/product-actions-booking.component';
import { ProductDetailsBookingScheduleComponent }      from './product-actions/product-actions-booking/product-actions-booking-schedule/product-details-booking-schedule.component';
import { ProductActionsBookingFormComponent }          from './product-actions/product-actions-booking/product-actions-booking-form/product-actions-booking-form.component';
import { ProductActionsBookingCreateAccountComponent } from './product-actions/product-actions-booking/product-actions-booking-create-account/product-actions-booking-create-account.component';
import { FormBookingStep1Component }                   from './product-actions/product-actions-booking/product-actions-booking-form/form-booking-step-1/form-booking-step-1.component';
import { FormBookingStep2Component }                   from './product-actions/product-actions-booking/product-actions-booking-form/form-booking-step-2/form-booking-step-2.component';
import { FormBookingStepRegisteredComponent }          from './product-actions/product-actions-booking/product-actions-booking-form/form-booking-step-registered/form-booking-step-registered.component';
import { FormBookingStepMoreInfoComponent }            from './product-actions/product-actions-booking/product-actions-booking-form/form-booking-step-more-info/form-booking-step-more-info.component';
import { FormBookingStepGiftComponent }                from './product-actions/product-actions-booking/product-actions-booking-form/form-booking-step-gift/form-booking-step-gift.component';
import { ProductActionsComponent }                     from './product-actions/product-actions.component';
import { ProductActionsAddToCartComponent } from './product-actions/product-actions-add-to-cart/product-actions-add-to-cart.component';
import { ProductActionsContactSellerComponent } from './product-actions/product-actions-contact-seller/product-actions-contact-seller.component';
import { ProductSocialShareComponent } from './product-social-share/product-social-share.component';

const routes: Route[] = [
    {
        path     : '',
        component: ProductComponent,
        resolve  : {
            products: ProductsResolver,
            bookingProducts: BookingProductsResolver
        }
    }
];

@NgModule({
    declarations: [ProductComponent, ProductMediaGalleryComponent, ProductDetailsComponent, ProductDetailsPriceComponent, ProductDetailsVariationsComponent, ProductDetailsStockComponent, ProductDetailsDescriptionComponent, ProductActionsBookingComponent, ProductDetailsBookingScheduleComponent, ProductActionsBookingFormComponent, ProductActionsBookingCreateAccountComponent, FormBookingStep1Component, FormBookingStep2Component, FormBookingStepRegisteredComponent, FormBookingStepMoreInfoComponent, FormBookingStepGiftComponent, ProductActionsComponent, ProductActionsAddToCartComponent, ProductActionsContactSellerComponent, ProductSocialShareComponent],
    imports     : [
        CommonModule,
        RouterModule.forChild(routes),
        NgbDatepickerModule,
        StoreSharedModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class ProductModule {}
