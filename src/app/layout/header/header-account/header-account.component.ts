import { Component, Input, OnInit } from '@angular/core';
import { Router }                   from '@angular/router';
import { AuthService }              from '../../../core/auth/auth.service';

@Component({
    selector   : 'app-header-account',
    templateUrl: './header-account.component.html',
    styleUrls  : ['./header-account.component.scss']
})
export class HeaderAccountComponent implements OnInit {

    @Input() user: any;

    constructor (
        private _AuthService: AuthService,
        private _Router: Router) { }

    ngOnInit (): void {
    }
    public logout (): void {
        this._AuthService.logout();
    }

    public login (): void {
        this._Router.navigate(['/account/login']);
    }
}
