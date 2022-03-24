import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector   : 'app-product-social-share',
    templateUrl: './product-social-share.component.html',
    styleUrls  : ['./product-social-share.component.scss']
})
export class ProductSocialShareComponent implements OnInit {

    @Input()
    socialLinks;

    constructor () { }

    ngOnInit (): void {
    }

}
