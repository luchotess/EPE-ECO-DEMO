import {Component, Injector, OnInit} from '@angular/core';
import { StatefulComponent }           from '../../../core/stateful.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent extends StatefulComponent {

  constructor(private _LocalInjector: Injector) {
    super(_LocalInjector, 'home', {});
  }

  init (): void {
    this.runExternalScript('/assets/js/main.js', 'main');
  }
}
