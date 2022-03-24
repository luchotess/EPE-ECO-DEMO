import { NgModule }                         from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { RouterModule }                     from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddToCartComponent } from './modals/add-to-cart/add-to-cart.component';
import { NewsletterComponent } from './modals/newsletter/newsletter.component';
import { MobileNavigationComponent } from './navigation/mobile-navigation/mobile-navigation.component';
import { InsuranceComponent } from './modals/insurance/insurance.component';
import { RestrictionsComponent } from './modals/restrictions/restrictions.component';
import { ShippingModalComponent } from './modals/shipping/shipping-modal.component';
import { DetailOrderComponent } from './modals/detail-order/detail-order.component';
import { AlertEmptyComponent } from './modals/alert-empty/alert-empty.component';
import { AlertCheckoutComponent } from './modals/alert-checkout/alert-checkout.component';
import { HeaderNavComponent } from './header/header-nav/header-nav.component';
import { HeaderAccountComponent } from './header/header-account/header-account.component';
import { HeaderCartComponent } from './header/header-cart/header-cart.component';
import { FooterCategorieListComponent } from './footer/footer-categorie-list/footer-categorie-list.component';
import { FooterNewsletterComponent } from './footer/footer-newsletter/footer-newsletter.component';
import { FooterSocialComponent } from './footer/footer-social/footer-social.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    AddToCartComponent,
    NewsletterComponent,
    MobileNavigationComponent,
    InsuranceComponent,
    RestrictionsComponent,
    ShippingModalComponent,
    DetailOrderComponent,
    AlertEmptyComponent,
    AlertCheckoutComponent,
    HeaderNavComponent,
    HeaderAccountComponent,
    HeaderCartComponent,
    FooterCategorieListComponent,
    FooterNewsletterComponent,
    FooterSocialComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [LayoutComponent]
})
export class LayoutModule {}
