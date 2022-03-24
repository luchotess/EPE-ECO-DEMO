import { Component, OnInit } from '@angular/core';
import {AppService} from '../../../app.service';

declare const $: any;

@Component({
  selector: 'app-shipping-modal',
  templateUrl: './shipping-modal.component.html',
  styleUrls: ['./shipping-modal.component.scss']
})
export class ShippingModalComponent implements OnInit {
  public simple: boolean;

  constructor(public _AppService: AppService) { }

  ngOnInit(): void {
  }
}
