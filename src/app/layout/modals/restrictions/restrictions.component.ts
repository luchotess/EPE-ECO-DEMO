import { Component, OnInit } from '@angular/core';
import {AppService} from '../../../app.service';

declare const $: any;

@Component({
  selector: 'app-restrictions-modal',
  templateUrl: './restrictions.component.html',
  styleUrls: ['./restrictions.component.scss']
})
export class RestrictionsComponent implements OnInit {
  public simple: boolean;

  constructor(public _AppService: AppService) { }

  ngOnInit(): void {
  }
}
