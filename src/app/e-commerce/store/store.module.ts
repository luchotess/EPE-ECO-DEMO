import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { CategoryModule } from './category/category.module';
import { ProductModule }  from './product/product.module';
import { StoreComponent } from './store.component';

const routes: Route[] = [
    {
        path        : '',
        loadChildren: () => CategoryModule
    },
    {
        path        : ':categoryUrl',
        loadChildren: () => CategoryModule
    },
    {
        path        : ':categoryUrl/:productUrl',
        loadChildren: () => ProductModule
    },
    {
        path        : ':categoryUrl/:categoryUrl2/:productUrl',
        loadChildren: () => ProductModule
    },
    {
        path        : ':categoryUrl/:categoryUrl2/:productUrl',
        loadChildren: () => ProductModule
    }
];

@NgModule({
    declarations: [StoreComponent],
    imports     : [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class StoreModule {}
