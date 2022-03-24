import { Component, Injector }                from '@angular/core';
import { BehaviorSubject }                    from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { StatefulComponent }            from '../../core/stateful.component';
import { CartService }                  from '../cart/cart.service';
import { CartProduct, ShippingAddress } from '../store/store.model';
import { AppService }                   from '../../app.service';
import { User }                         from '../../core/auth/auth.user.model';
import {
  District,
  DISTRICTS,
  DISTRICTS_SHIPPING_COST_RULES,
  // REGULAR_SHIPPING_COST,
  ShippingMethod
}                                       from './shipping.model';

@Component({
  selector   : 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls  : ['./checkout.component.scss']
})
export class CheckoutComponent extends StatefulComponent {

  public shippingAddressForm: FormGroup;
  public localUser = null;

  public products = this._CartService.products;
  public totalPrice = this._CartService.totalPrice;
  public totalProducts = this._CartService.totalProducts;
  public shippingAddress: BehaviorSubject<ShippingAddress> = this._CartService.shippingAddress;
  public localShippingAddress: ShippingAddress = this._CartService.shippingAddress.value;
  public totalDiscount = 0;
  public isFree50 = false;
  public isShipping10 = false;
  public modalCheckout = false;
  public editingAddress = false;
  public addingNewAddress = false;
  public selectedAddress = null;
  public districts: District[];
  public shippingMethods: ShippingMethod[] = [];

  constructor (public _AppService: AppService,
               private _fb: FormBuilder,
               private _LocalInjector: Injector,
               private _CartService: CartService) {
    super(_LocalInjector, 'home', {});
    this.createForm();
  }

  init (): void {
    this.runExternalScript('/assets/js/main.js', 'main');

    this.products.subscribe(products => {
      this.totalDiscount = products.reduce((accumulator, product) => {
        const discount = (product.item.price.old - product.item.price.actual) * product.qty;
        return accumulator + discount;
      }, 0);
    });

    this.calculateShippingRulesLabels();

    this._AuthService.user.subscribe(user => {
      this.localUser = user || new User();
      this.selectedAddress = this.localUser.shippingAddress || this.selectedAddress;
    });
  }

  private calculateShippingRulesLabels (): void {
    this.districts = DISTRICTS.map(district => {
      let label = '';

      DISTRICTS_SHIPPING_COST_RULES.some(rule => {
        label = rule.districts.includes(district.value) ? `(${ rule.districtLabel })` : '';
        return rule.districts.includes(district.value);
      });

      district.label = `${ district.label } ${ label }`;

      return district;
    });
  }

  private calculateShippingMethods (): void {
    // const regularShippingMethod = {
    //   label: 'Modo de envío Regular',
    //   cost : REGULAR_SHIPPING_COST,
    //   eta  : '24 horas',
    //   code: 'regular'
    // };

    const pickUpAtStore = {
      label: 'Recojo en Tienda',
      cost : 0,
      eta  : 'Inmediato',
      code: 'recojoTienda'
    };

    const methods = DISTRICTS_SHIPPING_COST_RULES.filter(rule => {
      let valid = true;

      if (rule.districts) {
        valid = rule.districts.includes(this.shippingAddressForm.value.district);
      }

      if (valid && rule.minimumTotal) {
        valid = this.totalPrice.value >= rule.minimumTotal;
      }

      return valid;
    });

    this.shippingMethods = methods.length > 0 ?
      [...methods, pickUpAtStore] :
      // [regularShippingMethod, ...methods, pickUpAtStore];
      [...methods, pickUpAtStore];

    this.shippingAddressForm.controls.shippingMethod.setValue(`${this.shippingMethods[0].cost}|${this.shippingMethods[0].code}`);
  }

  getShippingLabel (label): string {
    let renderedLabel;
    try {
      renderedLabel = label(this.shippingAddressForm.value.district);
    } catch (e) {
      renderedLabel = label;
    }

    return renderedLabel;
  }

  public addNewAddress (): void {
    this.editingAddress = true;
    this.addingNewAddress = true;
    this.shippingAddressForm.setValue(new ShippingAddress());
  }

  public cancelNewAddress (): void {
    this.editingAddress = false;
    this.addingNewAddress = false;
  }

  public saveAddress (): void {
    if (!this.localUser.addresses) {
      this.localUser.addresses = [];
    }

    if (this.addingNewAddress) {
      this.localUser.addresses.push(this.shippingAddressForm.value);
      this.addingNewAddress = false;
    }

    this.localUser.addresses[this.selectedAddress] = this.shippingAddressForm.value;
    this.selectAddress(this.localUser.addresses.length - 1);

    if (this.localUser._id) {
      this._AuthService.updateUser(this.localUser);
    }

    window.scrollTo(0, 0);
    this.editingAddress = false;
  }

  public deleteAddress (index): void {
    this.localUser.addresses.splice(index, 1);
    this.editingAddress = false;
    this.selectedAddress = null;
    this.shippingAddressForm.setValue(new ShippingAddress());
    this._AuthService.updateUser(this.localUser);
  }

  public selectAddress (index): void {
    this.selectedAddress = index;
    this.shippingAddressForm.setValue(this.localUser.addresses[this.selectedAddress]);
    this.calculateShippingMethods();
  }

  public editAddress (index): void {
    this.editingAddress = true;
    this.selectedAddress = index;
    this.shippingAddressForm.setValue(this.localUser.addresses[index]);
  }

  public goToPayment (): void {
    if (this.shippingAddressForm.valid && this.selectedAddress !== null) {
      this._Router.navigate(['/checkout/payment']);
    } else {
      this._AppService.setModal('alertCheckout', true);
    }
  }

  public getShippingCost (shippingMethod: string): number {
    return +shippingMethod.split('|')[0];
  }

  get nameNotValid (): boolean {
    return this.shippingAddressForm.get('name').invalid && this.shippingAddressForm.get('name').touched;
  }

  get lastnameNotValid (): boolean {
    return this.shippingAddressForm.get('lastname').invalid && this.shippingAddressForm.get('lastname').touched;
  }

  get emailNotValid (): boolean {
    return this.shippingAddressForm.get('email').invalid && this.shippingAddressForm.get('email').touched;
  }

  get addressNotValid (): boolean {
    return this.shippingAddressForm.get('address').invalid && this.shippingAddressForm.get('address').touched;
  }

  get districtNotValid (): boolean {
    return this.shippingAddressForm.get('district').invalid && this.shippingAddressForm.get('district').touched;
  }

  get dniNotValid (): boolean {
    return this.shippingAddressForm.get('dni').invalid && this.shippingAddressForm.get('dni').touched;
  }

  get phoneNotValid (): boolean {
    return this.shippingAddressForm.get('phone').invalid && this.shippingAddressForm.get('phone').touched;
  }

  get countryNotValid (): boolean {
    return this.shippingAddressForm.get('country').invalid && this.shippingAddressForm.get('country').touched;
  }

  get departamentNotValid (): boolean {
    return this.shippingAddressForm.get('department').invalid && this.shippingAddressForm.get('department').touched;
  }

  get shippingMethodNotValid (): boolean {
    return this.shippingAddressForm.get('shipping-method').invalid && this.shippingAddressForm.get('shipping-method').touched;
  }

  private createForm (): void {
    const {
      name,
      dni,
      lastname,
      email,
      address,
      district,
      country,
      phone,
      department,
      shippingMethod
    } = this.shippingAddress.value;

    this.shippingAddressForm = this._fb.group({
      name          : [name, [Validators.required, Validators.minLength(3)]],
      lastname      : [lastname, Validators.required],
      email         : [email, [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      address       : [address, Validators.required],
      dni           : [dni, Validators.required],
      district      : [district, Validators.required],
      country       : [country, Validators.required],
      phone         : [phone, [Validators.required, Validators.pattern('^(\\+51|0051|51|9|01|)[0-9 -]{7,25}$')]],
      department    : [department, Validators.required],
      shippingMethod: [shippingMethod, Validators.required]
    });
  }

  public save (): void {
    if (this.shippingAddressForm.invalid) {
      return Object.values(this.shippingAddressForm.controls).forEach(control => {
        control.markAsTouched();
      });
    }

    this.gotoCheckout();
  }

  public getTotalPriceByCartProduct (cartItem: CartProduct): number {
    return cartItem.item.price.offer ? cartItem.item.price.offer : cartItem.item.price.actual;
  }

  gotoCheckout (): void {
    this.shippingAddress.next(this.shippingAddressForm.value);
    this._Router.navigate(['/checkout/payment']);
  }

  openModalRestriction (): void {
    this._AppService.setModal('restrictions', true);
  }
}
