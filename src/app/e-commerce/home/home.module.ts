import { NgModule }                from '@angular/core';
import { CommonModule }            from '@angular/common';
import { Route, RouterModule }     from '@angular/router';
import { BookingProductsResolver } from '../store/product/product-resolvers.service';
import { StoreSharedModule }       from '../store/shared/shared.module';

import { HomeComponent }                   from './home.component';
import { HomeSliderComponent }             from './home-slider/home-slider.component';
import { HomePregnantCoursesComponent }    from './home-pregnant-courses/home-pregnant-courses.component';
import { HomeInsurancesResolver }          from './home-resolvers.service';
import { HomeCoursesServicesComponent }    from './home-courses-services/home-courses-services.component';
import { HomeCategoriesCarouselComponent } from './home-categories-carousel/home-categories-carousel.component';
import { HomeInsuranceSelectorComponent }  from './home-insurance-selector/home-insurance-selector.component';

const routes: Route[] = [
    {
        path     : '',
        component: HomeComponent,
        resolve  : {
            bookingProducts: BookingProductsResolver,
            insurances     : HomeInsurancesResolver
        }
    }
];

@NgModule({
    declarations: [
        HomeComponent,
        HomeSliderComponent,
        HomePregnantCoursesComponent,
        HomeCoursesServicesComponent,
        HomeCategoriesCarouselComponent,
        HomeInsuranceSelectorComponent
    ],
    imports     : [
        CommonModule,
        RouterModule.forChild(routes),
        StoreSharedModule
    ]
})
export class HomeModule {}
