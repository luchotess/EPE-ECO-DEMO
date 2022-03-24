import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector   : 'app-store-category-sidebar',
    templateUrl: './store-category-sidebar.component.html',
    styleUrls  : ['./store-category-sidebar.component.scss']
})
export class StoreCategorySidebarComponent implements OnInit {

    @Input()
    storeUrl;

    @Input()
    categories;

    @Input()
    categoriesServices;

    constructor () { }

    ngOnInit (): void {}
}
