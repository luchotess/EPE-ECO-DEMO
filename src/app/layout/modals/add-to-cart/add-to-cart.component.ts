import { Component, OnInit } from '@angular/core';
import {AppService} from '../../../app.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {

  constructor(private _AppService: AppService) { }

  ngOnInit(): void {
  }

  public closeOverlay (): void {
    this._AppService.isModalBeingShow = false;
  }
}
