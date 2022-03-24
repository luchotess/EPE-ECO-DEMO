import {Component, Injector, OnInit} from '@angular/core';
import {StatefulComponent} from '../../../core/stateful.component';
import {Blog, Tag} from '../blog.model';
import {BlogService} from '../blog.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent extends StatefulComponent {
  public article: Blog = null;
  public blog: Blog[] = [];
  public articleUrl: '';
  public tagUrl: '';
  public tag: BehaviorSubject<Tag[]> = this._BlogService.tag;

  constructor(private _LocalInjector: Injector,
              public _BlogService: BlogService) {
    super(_LocalInjector, 'home', {});
  }

  init(): void {
    this._ActivatedRoute.params.subscribe(params => {
      this.articleUrl = params.articleUrl;
      console.log(this.articleUrl);
      this.getBlogData(this.articleUrl);
    });
    this.runExternalScript('/assets/js/main.js', 'main');
  }

  public getBlogData (articleUrl: string): void {
    this._BlogService.blog.subscribe(blog => {
      this.blog = blog;
      this.article = this.blog.find(article => article.url.toLowerCase() === articleUrl.toLowerCase());
      this.runExternalScript('/assets/js/main.js', 'main');
    });
  }
  // get categoryRelatedProducts (): Blog[] {
  //   return this.blog.filter(article => {
  //     return this.article.tag.some(tag => tag.title === this.article.tag.slice(-1)[0].title);
  //   });
  // }
  // public getTagUrl (tag): any {
  //   return tag.map(tag => tag.url).join('/');
  // }

}
