import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-alert-empty',
  templateUrl: './alert-empty.component.html',
  styleUrls: ['./alert-empty.component.scss']
})
export class AlertEmptyComponent implements OnInit {

  constructor(public _AppService: AppService) { }

  ngOnInit(): void {
  }
  public closeOverlay (): void {
    this._AppService.isModalBeingShow = false;
  }

}
