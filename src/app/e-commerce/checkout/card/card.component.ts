import { HttpClient }                              from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators }                 from '@angular/forms';
import { AppService }                from '../../../app.service';

@Component({
    selector   : 'app-card',
    templateUrl: './card.component.html',
    styleUrls  : ['./card.component.scss']
})
export class CardComponent implements OnInit {

    public form: any;
    sent: boolean = false;
    public showMessage: boolean = false;
    public error: boolean = false;

    @Output()
    onClose: EventEmitter<any> = new EventEmitter();

    constructor (
        public _AppService: AppService,
        private formBuilder: FormBuilder,
        private _HttpClient: HttpClient) {
        this.form = formBuilder.group({
            email: ['', [Validators.required, Validators.email]]
        });
    }

    ngOnInit (): void {
    }

    public closePopup (): void {
        this.onClose.emit();
        this.error = false;

    }
    public submitCard (): void {
        this.error = true;
        console.log(this.error);
    }
}
