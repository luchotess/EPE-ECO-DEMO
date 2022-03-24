import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector   : 'app-home-courses-services',
    templateUrl: './home-courses-services.component.html',
    styleUrls  : ['./home-courses-services.component.scss']
})
export class HomeCoursesServicesComponent implements OnInit {
    @Input()
    babyCourses;

    @Input()
    services;

    constructor () { }

    ngOnInit (): void {
    }

}
