import {Component, Injector, OnInit} from '@angular/core';
import {StatefulComponent} from '../../../core/stateful.component';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.scss']
})
export class PromoComponent  extends StatefulComponent {

  constructor(private _LocalInjector: Injector) {
    super(_LocalInjector, 'home', {});
  }

  init (): void {
    this.runExternalScript('/assets/js/main.js', 'main');
  }

}
