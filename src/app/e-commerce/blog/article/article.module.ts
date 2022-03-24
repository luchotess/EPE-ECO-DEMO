import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {ArticleComponent} from './article.component';


const routes: Route[] = [
  {
    path     : '',
    component: ArticleComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ArticleModule { }
