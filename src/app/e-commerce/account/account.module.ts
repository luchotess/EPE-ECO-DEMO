import { NgModule }     from '@angular/core';
import { CommonModule }                from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ProfileComponent }  from './profile/profile.component';
import { LoginComponent }    from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {DashboardComponent} from './profile/dashboard/dashboard.component';
import {AddressesComponent} from './profile/addresses/addresses.component';
import {OrdersComponent} from './profile/orders/orders.component';
import {SubscriptionsComponent} from './profile/suscriptions/subscriptions.component';
import {CoursesComponent} from './profile/courses/courses.component';

const routes: Route[] = [
  {
    path     : 'profile',
    component: ProfileComponent
  },
  {
    path     : 'profile/:tab',
    component: ProfileComponent
  },
  {
    path     : 'login',
    component: LoginComponent
  },
  {
    path     : 'register',
    component: RegisterComponent
  },
  {
    path: '**',
    redirectTo: 'profile'
  }
];

@NgModule({
  declarations: [
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    AddressesComponent,
    OrdersComponent,
    SubscriptionsComponent,
    CoursesComponent
  ],
  imports     : [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AccountModule {}
