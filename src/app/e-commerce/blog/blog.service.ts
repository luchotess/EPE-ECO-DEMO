import {Injectable} from '@angular/core';
import {BLOG_BASE_URL, isMultiStore, TAG_BLOG_BASE_URL} from '../../app.config';
import {BehaviorSubject} from 'rxjs';
import {Blog, Tag} from './blog.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  public blog: BehaviorSubject<Blog[]> = new BehaviorSubject([]);

  public tag: BehaviorSubject<Tag[]> = new BehaviorSubject([]);

  constructor(private _httpClient: HttpClient) {
  }

  public getAllBlog(): void {
    this._httpClient.get(BLOG_BASE_URL).subscribe((blog: Blog[]) => {
      this.blog.next(blog);
    });
  }

  public getAllTag (): void {
    this._httpClient.get(TAG_BLOG_BASE_URL).subscribe((tag: Tag[]) => {
      this.tag.next(tag);
    });
  }
}
