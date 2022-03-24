import {Component, Injector, OnInit} from '@angular/core';
import {StatefulComponent} from '../../core/stateful.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent  extends StatefulComponent {
  tagName = '';
  articleName = '';

  constructor(private _LocalInjector: Injector) {
    super(_LocalInjector, 'home', {});
  }

  init (): void {
    this._ActivatedRoute.params.subscribe(params => {
      this.tagName = params.tagName || '';
      this.articleName = params.articleName || '';
    });

    this.runExternalScript('/assets/js/main.js', 'main');
  }
}
