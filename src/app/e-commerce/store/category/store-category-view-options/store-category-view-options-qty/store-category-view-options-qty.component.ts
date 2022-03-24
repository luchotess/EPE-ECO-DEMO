import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector   : 'app-store-category-view-options-qty',
    templateUrl: './store-category-view-options-qty.component.html',
    styleUrls  : ['./store-category-view-options-qty.component.scss']
})
export class StoreCategoryViewOptionsQtyComponent implements OnInit {

    @Input()
    viewOptionsValues;

    @Input()
    viewOptions;

    @Output()
    change = new EventEmitter();

    constructor () { }

    ngOnInit (): void {
    }

    public onValuesChanged (): void {
        this.change.emit();
    }
}
