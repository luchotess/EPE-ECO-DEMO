import { Component, OnInit } from '@angular/core';
import {AppService} from '../../../app.service';

@Component({
  selector: 'app-alert-checkout',
  templateUrl: './alert-checkout.component.html',
  styleUrls: ['./alert-checkout.component.scss']
})
export class AlertCheckoutComponent implements OnInit {

  constructor(public _AppService: AppService) { }

  ngOnInit(): void {
  }
  public closeOverlay (): void {
    this._AppService.isModalBeingShow = false;
  }
}
