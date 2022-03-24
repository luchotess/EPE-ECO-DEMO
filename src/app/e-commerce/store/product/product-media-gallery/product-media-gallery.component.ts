import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector   : 'app-product-media-gallery',
    templateUrl: './product-media-gallery.component.html',
    styleUrls  : ['./product-media-gallery.component.scss']
})
export class ProductMediaGalleryComponent implements OnInit {

    @Input()
    product;

    constructor () { }

    ngOnInit (): void {
    }

}
