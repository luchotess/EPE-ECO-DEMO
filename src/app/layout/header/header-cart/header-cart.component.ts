import { Component, Input, OnInit } from '@angular/core';
import { CartService }              from '../../../e-commerce/cart/cart.service';
import { CartProduct }              from '../../../e-commerce/store/store.model';

@Component({
  selector: 'app-header-cart',
  templateUrl: './header-cart.component.html',
  styleUrls: ['./header-cart.component.scss']
})
export class HeaderCartComponent implements OnInit {

    @Input() totalProducts: any;
    @Input() products: any;
    @Input() totalPrice: any;
  constructor (
      private _CartService: CartService) { }

  ngOnInit(): void {
  }

    public removeProduct (producto: CartProduct): void {
        this._CartService.removeProduct(producto);
    }
}
