import { NgModule }                                  from '@angular/core';
import { CommonModule }                              from '@angular/common';
import { FormsModule }                               from '@angular/forms';
import { Route, RouterModule }                       from '@angular/router';
import { BookingProductsResolver, ProductsResolver } from '../product/product-resolvers.service';
import { StoreSharedModule }                         from '../shared/shared.module';
import { CategoryComponent }                         from './category.component';
import { StoreCategoryBannerComponent }              from './store-category-banner/store-category-banner.component';
import { StoreCategoryViewOptionsComponent }         from './store-category-view-options/store-category-view-options.component';
import { StoreCategoryViewOptionsQtyComponent } from './store-category-view-options/store-category-view-options-qty/store-category-view-options-qty.component';
import { StoreCategoryPaginatorComponent } from './store-category-paginator/store-category-paginator.component';
import { StoreCategorySidebarComponent } from './store-category-sidebar/store-category-sidebar.component';

const routes: Route[] = [
    {
        path     : '',
        component: CategoryComponent,
        resolve  : {
            products: ProductsResolver,
            bookingProducts: BookingProductsResolver
        }
    }
];

@NgModule({
    declarations: [CategoryComponent, StoreCategoryBannerComponent, StoreCategoryViewOptionsComponent, StoreCategoryViewOptionsQtyComponent, StoreCategoryPaginatorComponent, StoreCategorySidebarComponent],
    imports     : [
        CommonModule,
        RouterModule.forChild(routes),
        StoreSharedModule,
        FormsModule
    ]
})
export class CategoryModule {}
