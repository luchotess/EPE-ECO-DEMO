import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../../../core/auth/auth.service';
import {ShippingAddress} from '../../../store/store.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-profile-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent implements OnInit {
  @Input()
  public user: any = null;
  public shippingAddressForm: FormGroup;
  public isNewAddress = false;
  public editingAddress = null;
  public selectedAddress = null;

  constructor(public _AuthService: AuthService, private _fb: FormBuilder) {}

  ngOnInit (): void {
    this._AuthService.user.subscribe(user => this.user = user);
    this.createForm();
  }

  public addAddress (): void {
    this.editingAddress = new ShippingAddress();
    this.isNewAddress = true;
  }

  public editAddress (index: number): void {
    this.editingAddress = this.user.addresses[index];
    this.selectedAddress = index;
    const { main, ...address} = this.editingAddress;
    this.shippingAddressForm.setValue(address);
  }

  public cancelEdition (): void {
    this.editingAddress = null;
  }

  public saveAddress (): void {
    if (!this.isNewAddress) {
      this.user.addresses[this.selectedAddress] = this.shippingAddressForm.value;
    } else {
      this.user.addresses.push(this.shippingAddressForm.value);
      this.isNewAddress = false;
    }

    const updated = this._AuthService.updateUser(this.user);

    if (updated) {
      this.editingAddress = null;
      this.selectedAddress = null;
      this.shippingAddressForm.setValue(new ShippingAddress());
    }
  }

  public removeAddress (index: number): void {
    this.user.addresses.splice(index, 1);
    this._AuthService.updateUser(this.user);
  }

  public makePrincipal (index: number): void {

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

  createForm (): void {
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
    } = this.editingAddress || new ShippingAddress();

    this.shippingAddressForm = this._fb.group({
      name: [ name , [Validators.required, Validators.minLength(3)]],
      lastname: [lastname, Validators.required],
      email: [email, [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      address: [address, Validators.required],
      dni: [dni, Validators.required],
      district: [district, Validators.required],
      country: [country, Validators.required],
      phone: [phone, [Validators.required, Validators.pattern('^(\\+51|0051|51|9|01|)[0-9 -]{7,25}$')]],
      department: [department, Validators.required],
      shippingMethod: [shippingMethod, Validators.required]
    });
  }
}
