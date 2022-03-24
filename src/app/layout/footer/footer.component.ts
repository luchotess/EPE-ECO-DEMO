import { HttpClient }        from '@angular/common/http';
import { Component, OnInit }       from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject }         from 'rxjs';
import { environment }       from '../../../environments/environment';
import { ProductCategory }   from '../../e-commerce/store/store.model';
import { StoreService }      from '../../e-commerce/store/store.service';
import { STORE_ID }          from '../../app.config';

@Component({
    selector   : 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls  : ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


    public storeUrl = '';
    public categories: ProductCategory[] = this._StoreService.categories;

    constructor (
        private formBuilder: FormBuilder,
        private _StoreService: StoreService,
        private _HttpClient: HttpClient) {
    }

    ngOnInit (): void {
    }


}
