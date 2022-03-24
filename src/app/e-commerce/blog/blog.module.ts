import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import { TagModule} from './tag/tag.module';
import { BlogComponent } from './blog.component';
import {ArticleModule} from './article/article.module';

const routes: Route[] = [
  {
    path     : '',
    loadChildren: () => TagModule
  },
  // {
  //   path     : ':tagUrl',
  //   loadChildren: () => TagModule
  // },
  {
    path     : ':articleUrl',
    loadChildren: () => ArticleModule
  },
];
@NgModule({
  declarations: [BlogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BlogModule { }
