import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule} from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';


import { ContactComponent }  from './contact/contact.component';
import { AboutComponent }    from './about/about.component';
import { PromoComponent }    from './promo/promo.component';
import { AgmCoreModule }     from '@agm/core';
import { ArticleComponent }  from '../blog/article/article.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { FormsModule }       from '@angular/forms';

const routes: Route[] = [
  {
    path     : 'contact',
    component: ContactComponent
  },
  {
    path     : 'nosotros',
    component: AboutComponent
  },
  {
    path     : 'promo',
    component: PromoComponent
  },
  {
    path: '**',
    redirectTo: 'nosotros'
  }
];

@NgModule({
  declarations: [ AboutComponent, PromoComponent, ContactComponent, ArticleComponent ],
    imports: [
        CommonModule,
        IvyCarouselModule,
        AgmCoreModule.forRoot({
            apiKey    : 'AIzaSyALuIq-1GAKSmzjXu-PgJdhjEk2tkJWNKI',
            apiVersion: '3.31'
        }),
        NgbCarouselModule,
        RouterModule.forChild(routes),
        FormsModule
    ],
})
export class StaticModule { }
