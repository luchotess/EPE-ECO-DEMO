import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { LayoutModule }        from '../layout/layout.module';

import { ECommerceComponent }                                            from './e-commerce.component';
import { HomeBookingProductsCategoriesResolver, HomeCategoriesResolver } from './home/home-resolvers.service';
import { NotFoundComponent }                                             from './not-found/not-found.component';

const routes: Route[] = [
    {
        path     : '',
        component: ECommerceComponent,
        children : [
            {
                path        : 'home',
                loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
            },
            {
                path        : 'cart',
                loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)
            },
            {
                path        : 'checkout',
                loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutModule)
            },
            {
                path        : 'account',
                loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
            },
            {
                path        : 'static',
                loadChildren: () => import('./static/static.module').then(m => m.StaticModule)
            },
            {
                path        : 'blog',
                loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
            },
            {
                path        : ':storeUrl',
                loadChildren: () => import('./store/store.module').then(m => m.StoreModule)
            },
            {
                path      : '',
                redirectTo: '/home'
            }
        ],
        resolve: {
            categories: HomeCategoriesResolver,
            bookingProductsCategories: HomeBookingProductsCategoriesResolver
        }
    },
    {
        path     : 'not-found',
        component: NotFoundComponent
    },
    {
        path      : '**',
        redirectTo: '/not-found'
    }
];

@NgModule({
    declarations: [ECommerceComponent, NotFoundComponent],
    imports     : [
        RouterModule.forChild(routes),
        CommonModule,
        LayoutModule
    ]
})
export class ECommerceModule {}
