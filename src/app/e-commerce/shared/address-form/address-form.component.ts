import { Component, OnInit }                  from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShippingAddress }                    from '../../store/store.model';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {
  public shippingAddressForm: FormGroup;
  public initialValue = new ShippingAddress();

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
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
  get departmentNotValid (): boolean {
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
    } = this.initialValue;

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
