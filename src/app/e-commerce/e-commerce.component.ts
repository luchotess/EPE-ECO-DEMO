import { Component, OnInit } from '@angular/core';
import { StoreService }      from './store/store.service';
import { BlogService }       from './blog/blog.service';

@Component({
    selector   : 'app-e-commerce',
    templateUrl: './e-commerce.component.html',
    styleUrls  : ['./e-commerce.component.scss']
})
export class ECommerceComponent implements OnInit {

    constructor (private _StoreService: StoreService,
                 private _StaticService: BlogService) { }

    ngOnInit (): void {
        this._StaticService.getAllBlog();
        this._StaticService.getAllTag();
    }
}
