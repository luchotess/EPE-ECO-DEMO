import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector   : 'app-store-category-banner',
    templateUrl: './store-category-banner.component.html',
    styleUrls  : ['./store-category-banner.component.scss']
})
export class StoreCategoryBannerComponent implements OnInit {

    private courseBannerUrl = 'assets/images/banners/cursos.jpg';
    private productsBannerUrl = 'assets/images/banners/bannerProductos1.jpg';
    private servicesBannerUrl = 'assets/images/banners/cursos.jpg';

    @Input()
    categoryUrl;

    constructor () { }

    ngOnInit (): void {
    }

    public getBannerUrl (): string {
        switch (this.categoryUrl) {
            case 'cursos':
                return this.courseBannerUrl;
            case 'productos':
                return this.productsBannerUrl;
            case 'servicios':
                return this.servicesBannerUrl;
            default:
                return this.productsBannerUrl;
        }
    }
}
