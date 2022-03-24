import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

import { CartComponent } from './cart.component';
import {LayoutModule} from "../../layout/layout.module";

const routes: Route[] = [
  {
    path     : '',
    component: CartComponent
  }
];

@NgModule({
  declarations: [CartComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        LayoutModule
    ]
})
export class CartModule {}
