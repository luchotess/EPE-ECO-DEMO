import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
    selector   : 'app-store-category-paginator',
    templateUrl: './store-category-paginator.component.html',
    styleUrls  : ['./store-category-paginator.component.scss']
})
export class StoreCategoryPaginatorComponent implements OnInit {

    @Input()
    paginatorSettings;

    pagesArray = [];

    constructor () { }

    ngOnInit (): void {}

    public calcPagesArray (): number[] {
        return this.pagesArray = Array.from(Array(this.paginatorSettings.pages).keys());
    }

    public nextPage (): void {
        this.paginatorSettings.currentPage++;
    }

    public prevPage (): void {
        this.paginatorSettings.currentPage--;
    }

    public goToPage (page: number): void {
        this.paginatorSettings.currentPage = page;
    }
}
