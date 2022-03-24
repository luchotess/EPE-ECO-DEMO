import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector   : 'app-home-categories-carousel',
    templateUrl: './home-categories-carousel.component.html',
    styleUrls  : ['./home-categories-carousel.component.scss']
})
export class HomeCategoriesCarouselComponent implements OnInit {

    @Input()
    categories;

    constructor () { }

    ngOnInit (): void {
    }

}
