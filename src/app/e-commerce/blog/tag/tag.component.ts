import {Component, Injector, OnInit} from '@angular/core';
import {StatefulComponent} from '../../../core/stateful.component';
import {Blog, Tag} from '../blog.model';
import {BehaviorSubject} from 'rxjs';
import {BlogService} from '../blog.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent extends StatefulComponent {
  public articleUrl = '';
  public blog: BehaviorSubject<Blog[]> = this._StaticService.blog;
  public articles = [];
  public localArticles = [];
  public tags: BehaviorSubject<Tag[]> = this._StaticService.tag;
  public currentTag = null;
  public tagSelect = '';

  constructor(private _LocalInjector: Injector,
              public _StaticService: BlogService) {
    super(_LocalInjector, 'home', {});
  }

  init(): void {
    this.blog.subscribe(articles => {
      this.localArticles = articles;
      this.articles = articles;
    });
    this.runExternalScript('/assets/js/main.js', 'main');
  }

  public filterBlog(tag): any {
    this.currentTag = tag;
    console.log(tag.title);
    this.tagSelect = tag.title;
    this.articles = this.currentTag ?
      this.localArticles.filter(article => article.tag.some(articleTag => articleTag.url === this.currentTag.url)) : this.localArticles;
  }
}
