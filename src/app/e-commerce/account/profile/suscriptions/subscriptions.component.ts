import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {
  @Input()
  public user: any = null;
  public subscriptions = [];

  constructor() {}

  ngOnInit (): void {
  }
}
