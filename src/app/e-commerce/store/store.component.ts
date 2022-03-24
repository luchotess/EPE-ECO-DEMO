import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute }              from '@angular/router';
import { StatefulComponent } from '../../core/stateful.component';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent extends StatefulComponent {
  storeName = '';
  categoryName = '';
  productName = '';

  constructor(private _LocalInjector: Injector) {
    super(_LocalInjector, 'home', {});
  }

  init (): void {
    this._ActivatedRoute.params.subscribe(params => {
      this.storeName = params.storeName;
      this.categoryName = params.categoryName || '';
      this.productName = params.productName || '';
    });

    this.runExternalScript('/assets/js/main.js', 'main');
  }
}
