import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { AddressFormComponent } from './address-form/address-form.component';
import { ReactiveFormsModule }  from '@angular/forms';

const components = [AddressFormComponent];

@NgModule({
  imports     : [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [...components],
  exports     : [...components]
})
export class SharedModule {}
