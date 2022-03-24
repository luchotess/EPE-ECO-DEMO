import {Component, Injector, OnInit} from '@angular/core';
import {StatefulComponent} from '../../core/stateful.component';
import {CartProduct} from '../store/store.model';
import {CartService} from './cart.service';
import {Router, ActivatedRoute} from '@angular/router';
import {AppService} from 'src/app/app.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent extends StatefulComponent {
  public localProducts = this._CartService.products.value;
  public products = this._CartService.products;
  public totalPrice = this._CartService.totalPrice;
  public totalProducts = this._CartService.totalProducts;
  public totalDiscount = 0;

  constructor (private _LocalInjector: Injector,
               private _CartService: CartService,
               private _route: ActivatedRoute,
               private _router: Router,
               public _AppService: AppService) {
    super(_LocalInjector, 'home', {});
  }

  init(): void {
    this.runExternalScript('/assets/js/main.js', 'main');

    this.products.subscribe(products => {
      this.totalDiscount = products.reduce((accumulator, product) => {
        const discount = (product.item.price.old - product.item.price.actual) * product.qty;
        return accumulator + discount;
      }, 0);
    });
  }

  public getTotalPriceByCartProduct(cartItem: CartProduct): number {
    const price = cartItem.item.price.offer ? cartItem.item.price.offer : cartItem.item.price.actual;
    return price * cartItem.qty;
  }

  public updateCart(): void {
    this.products.next(this.localProducts);
  }

  public clearCart(): void {
    this.products.next([]);
    this.localProducts = this._CartService.products.value;
  }

  public changeProductQty(index, qty): void {
    this.localProducts[index].qty = +qty.value;
  }


  public goToCheckout(): void {
    if (this.localProducts.length > 0) {
      this._router.navigate(['/checkout']);
    } else {
      this._AppService.setModal('emptyProducts', true);
    }
  }
  public removeProduct (producto: CartProduct): void {
    this._CartService.removeProduct(producto);

    this.localProducts = this._CartService.products.value;
  }
}
