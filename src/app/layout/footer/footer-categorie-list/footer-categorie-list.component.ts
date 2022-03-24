import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector   : 'app-footer-categorie-list',
    templateUrl: './footer-categorie-list.component.html',
    styleUrls  : ['./footer-categorie-list.component.scss']
})
export class FooterCategorieListComponent implements OnInit {

    @Input() categories;

    public storeUrl = '';

    constructor () { }

    ngOnInit (): void {
    }

}
