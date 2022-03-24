import { Component, OnInit } from '@angular/core';
import { AppService }        from '../app.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(public _AppService: AppService) { }

  ngOnInit(): void {
  }

}
