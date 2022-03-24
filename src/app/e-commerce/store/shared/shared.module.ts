import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { RouterModule }             from '@angular/router';
import { CourseCardComponent }      from './course-card/course-card.component';
import { ProductCardComponent }     from './product-card/product-card.component';
import { ProductListCardComponent } from './product-list-card/product-list-card.component';



@NgModule({
  declarations: [ProductCardComponent, ProductListCardComponent, CourseCardComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ProductCardComponent, ProductListCardComponent, CourseCardComponent]
})
export class StoreSharedModule { }
