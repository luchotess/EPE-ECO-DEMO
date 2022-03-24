import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector   : 'app-payment-step',
    templateUrl: './payment-step.component.html',
    styleUrls  : ['./payment-step.component.scss']
})
export class PaymentStepComponent implements OnInit {
    @Input() payed;

    constructor () { }

    ngOnInit (): void {
    }

}
