import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector   : 'app-home-pregnant-courses',
    templateUrl: './home-pregnant-courses.component.html',
    styleUrls  : ['./home-pregnant-courses.component.scss']
})
export class HomePregnantCoursesComponent implements OnInit {

    @Input()
    pregnantCourses;

    constructor () { }

    ngOnInit (): void {
    }

}
