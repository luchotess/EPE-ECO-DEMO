import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { AccountService } from 'src/app/e-commerce/account/account.service';

@Component({
  selector: 'app-detail-order',
  templateUrl: './detail-order.component.html',
  styleUrls: ['./detail-order.component.scss']
})
export class DetailOrderComponent implements OnInit {
  orders = [];

  constructor(public _AppService: AppService) { }

  async ngOnInit(): Promise<any> {
    this._AppService.modaldata.subscribe(data => this.orders = data);
  }
}
