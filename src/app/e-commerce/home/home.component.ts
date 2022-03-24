import { AfterViewChecked, Component, Injector } from '@angular/core';
import { BehaviorSubject }                       from 'rxjs';
import { StatefulComponent }   from '../../core/stateful.component';
import { StoreService }        from '../store/store.service';
import { AppService }          from '../../app.service';

@Component({
    selector   : 'app-home',
    templateUrl: './home.component.html',
    styleUrls  : ['./home.component.scss']
})
export class HomeComponent extends StatefulComponent {
    public bookingProducts = [];
    public pregnantCourses = [];
    public services = [];
    public courses = [];
    public babyCourses = [];
    public categories = [];
    public insurances = [];

    constructor (private _LocalInjector: Injector,
                 public _AppService: AppService,
                 private _StoreService: StoreService) {
        super(_LocalInjector, 'home', {});
    }

    init (): void {
        this.categories = this._StoreService.categories;
        this.bookingProducts = this._ActivatedRoute.snapshot.data.bookingProducts;
        this.insurances = this._ActivatedRoute.snapshot.data.insurances.data;

        this.setServicesAndCourses();
        this.runExternalScript('/assets/js/main.js', 'main', 'home');
    }

    private setServicesAndCourses (): void {
        this.pregnantCourses = this.bookingProducts
            .filter(item => item.categoriesArray.some(category => category.title === 'Curso para Embarazadas'));

        this.babyCourses = this.bookingProducts
            .filter(item => item.categoriesArray.some(category => category.title === 'Curso para bebés'));

        this.services = this.bookingProducts
            .filter(item => item.categoriesArray.some(category => category.title === 'Servicios'));

        this.courses = this.bookingProducts
            .filter(item => item.booking);
    }
}




