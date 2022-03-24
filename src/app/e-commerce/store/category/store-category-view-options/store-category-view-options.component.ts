import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector   : 'app-store-category-view-options',
    templateUrl: './store-category-view-options.component.html',
    styleUrls  : ['./store-category-view-options.component.scss']
})
export class StoreCategoryViewOptionsComponent implements OnInit {

    private defaultOptions = {
        sortOptions    : [
            {
                value   : 'no-order',
                title   : 'Sin orden',
                selected: true
            },
            {
                value: 'popularity',
                title: 'Popularidad'
            },
            {
                value: 'rating',
                title: 'Ratings'
            },
            {
                value: 'date',
                title: 'Nuevos Primero'
            },
            {
                value: 'price',
                title: 'Precio: Más Bajo a Más Alto'
            },
            {
                value: 'price-desc',
                title: 'Precio: Más Alto a Más Bajo'
            }
        ],
        qtyOptions     : [
            10,
            20
        ],
        viewModeOptions: [
            'grid',
            'list'
        ]
    };

    @Input()
    viewOptions = this.defaultOptions;

    @Input()
    viewOptionsValues = {
        sortOptionValue: 'no-order',
        qtyOptionValue : 10,
        viewModeValue  : 'grid'
    };

    @Output()
    valuesChanged = new EventEmitter();

    constructor () { }

    ngOnInit (): void {
    }

    public setViewMode (option: string): void {
        this.viewOptionsValues.viewModeValue = option;
    }

    public onValuesChange (): void {
        this.valuesChanged.emit();
    }
}
