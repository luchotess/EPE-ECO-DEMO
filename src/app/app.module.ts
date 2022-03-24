import { HttpClientModule }    from '@angular/common/http';
import { BrowserModule }       from '@angular/platform-browser';
import { NgModule }            from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { AppComponent }    from './app.component';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { AuthModule }      from './core/auth/auth.module';

const routes: Route[] = [
    {
        path        : '',
        loadChildren: () => ECommerceModule
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        AuthModule,
        BrowserModule,
        RouterModule.forRoot(routes, {
            anchorScrolling          : 'enabled',
            scrollPositionRestoration: 'top'
        }),
        HttpClientModule
    ],
    providers   : [],
    bootstrap   : [AppComponent]
})
export class AppModule {}
