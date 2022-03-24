import {Component, Input, OnInit} from '@angular/core';
import { AppService } from 'src/app/app.service';
import {AccountService} from '../../account.service';

@Component({
  selector: 'app-profile-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  @Input()
  public user: any = null;
  public orders: any = [];

  constructor(private _AccountService: AccountService,public _AppService: AppService) {}

  async ngOnInit (): Promise<any> {
    this.orders = (await this._AccountService.getOrders()).data;
  }

  openModalDetail(cart: any): void {
    this._AppService.modaldata.next(cart);
    this._AppService.setModal('detailOrder', true);
  }

}
