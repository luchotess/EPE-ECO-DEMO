import {Component, Injector, OnInit} from '@angular/core';
import {StatefulComponent} from '../../../core/stateful.component';
import {AuthService} from '../../../core/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent extends StatefulComponent {
  public user: any = null;
  public currentTab: string = 'dashboard';

  constructor(private _LocalInjector: Injector) {
    super(_LocalInjector, 'home', {});
  }

  init (): void {
    this._ActivatedRoute.params.subscribe(params => {
      if (params.tab) {
        this.currentTab = params.tab;
      }
    });
    this._AuthService.user.subscribe(user => this.user = user);
  }

  public show(tab: string): void {
    this.currentTab = tab;
  }
}
