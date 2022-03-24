import { Component, Input, OnInit } from '@angular/core';
import { AppService }               from '../../../app.service';

@Component({
    selector   : 'app-home-insurance-selector',
    templateUrl: './home-insurance-selector.component.html',
    styleUrls  : ['./home-insurance-selector.component.scss']
})
export class HomeInsuranceSelectorComponent implements OnInit {

    @Input()
    insurances;

    constructor (private _AppService: AppService) { }

    ngOnInit (): void {
    }

    popupInsurance (a): void {
        this._AppService.isModalBeingShow = true;
        this._AppService.openPopupInsurance(a);
    }
}
