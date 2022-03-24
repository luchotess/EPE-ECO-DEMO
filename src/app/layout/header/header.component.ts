import { Component, Input, OnInit, Injector } from '@angular/core';
import { BehaviorSubject }                    from 'rxjs';
import { ActivatedRoute, Router }             from '@angular/router';

import { CartProduct, Product, ProductCategory } from 'src/app/e-commerce/store/store.model';
import { CartService }                           from '../../e-commerce/cart/cart.service';
import { StoreService }                          from '../../e-commerce/store/store.service';
import { AppService }                            from '../../app.service';
import { AuthService }                           from '../../core/auth/auth.service';

declare const $: any;

@Component({
  selector   : 'app-header',
  templateUrl: './header.component.html',
  styleUrls  : ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input()
  public navigation = [];
  public products = this._CartService.products;
  public totalPrice = this._CartService.totalPrice;
  public totalProducts = this._CartService.totalProducts;
  public user: BehaviorSubject<any> = this._AuthService.user;

  constructor (private _LocalInjector: Injector,
               private _CartService: CartService,
               private _StoreService: StoreService,
               private _AuthService: AuthService,
               private _Router: Router,
               private _ActivatedRoute: ActivatedRoute,
               public _AppService: AppService) {
  }


  public storeUrl = '';
  public isPagerReady = false;

  public type = 'grid';

  public categories = this._StoreService.categories;
  public categoriesServices = this._StoreService.bookingProductscategories;


  ngOnInit (): void {

  }

  openModalRestriction (): void {
    this._AppService.setModal('shipping', true);
  }

  public logout (): void {
    this._AuthService.logout();
  }

  public login (): void {
    this._Router.navigate(['/account/login']);
  }
}
