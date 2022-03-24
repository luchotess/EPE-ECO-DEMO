import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { TagComponent } from './tag.component';


const routes: Route[] = [
  {
    path     : '',
    component: TagComponent
  }
];

@NgModule({
  declarations: [TagComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class TagModule { }
