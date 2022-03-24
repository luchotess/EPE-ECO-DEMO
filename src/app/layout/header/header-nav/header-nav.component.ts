import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute }           from '@angular/router';

@Component({
    selector   : 'app-header-nav',
    templateUrl: './header-nav.component.html',
    styleUrls  : ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {

    constructor (
        private _ActivatedRoute: ActivatedRoute) { }

    @Input() categoriesServices: any;
    @Input() categories: any;

    public storeUrl = '';

    ngOnInit (): void {
        this._ActivatedRoute.params.subscribe(params => {
            this.storeUrl = params.storeUrl;
        });
    }
}
