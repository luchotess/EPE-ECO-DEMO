import { Injectable }      from '@angular/core';
import { BehaviorSubject }                       from 'rxjs';
import { CartProduct, Product, ShippingAddress } from '../store/store.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public products: BehaviorSubject<CartProduct[]> = new BehaviorSubject<CartProduct[]>([]);
  public totalPrice: BehaviorSubject<number> = new BehaviorSubject(0);
  public totalProducts: BehaviorSubject<number> = new BehaviorSubject(0);
  public shippingAddress: BehaviorSubject<any> = new BehaviorSubject(new ShippingAddress());

  constructor () {
    this.getPersistentCart();

    this.products.subscribe(products => {
      let totalPrice = 0;
      let totalProducts = 0;

      products.forEach(product => {
        const price = product.item.price.offer ? product.item.price.offer : product.item.price.actual;
        totalPrice += price * product.qty;
        totalProducts += product.qty;
      });

      localStorage.setItem('cart', JSON.stringify(products));

      this.totalPrice.next(totalPrice);
      this.totalProducts.next(totalProducts);
    });

    this.shippingAddress.subscribe(shippingAddress => {
      localStorage.setItem('shippingAddress', JSON.stringify(shippingAddress));
    });
  }

  private getPersistentCart (): void {
    const persistentCart = localStorage.getItem('cart');
    const persistentShippingAddress = localStorage.getItem('shippingAddress');

    if (persistentCart) {
      this.products.next(JSON.parse(persistentCart));
    }

    if (persistentShippingAddress) {
      this.shippingAddress.next(JSON.parse(persistentShippingAddress));
    }
  }

  public addProduct (payload: Product, qty = 1): void {
    const itemIndex = this.products.value.findIndex(cartProduct => cartProduct.item.title === payload.title);

    if (itemIndex === -1) {
      this.products.next([...this.products.value, {
        item: payload,
        qty
      }]);
    } else {
      const cart = this.products.value;
      cart[itemIndex].qty += qty;

      this.products.next(cart);
    }
  }

  public removeProduct (payload: CartProduct): void {
    const newCart = this.products.value.filter(cartItem => cartItem.item.title !== payload.item.title);

    this.products.next(newCart);
  }
}
