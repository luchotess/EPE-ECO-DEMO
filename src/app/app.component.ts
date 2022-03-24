import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Router }                              from '@angular/router';
import { AppService }                          from './app.service';
import { AuthService }                         from './core/auth/auth.service';

declare const $: any;

@Component({
    selector : 'app-root',
    template : '<router-outlet></router-outlet>',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit, OnInit {
    title = 'ng-eco-client-epe';

    constructor (private router: Router,
                 private _AppService: AppService,
                 private _AuthService: AuthService) {
        this.router.routeReuseStrategy.shouldReuseRoute = () => {
            return false;
        };

        if (localStorage.getItem('showPopup') === 'false') {
            this._AppService.dismissedNewsletterPopup();
        }
    }

    public ngOnInit (): void {
        this._AuthService.decodeUser();
    }

    openNewsLetterPopup (): void {
        $.magnificPopup.open({
            items       : {
                src: '#newsletter-popup-form'
            },
            type        : 'inline',
            mainClass   : 'mfp-newsletter',
            removalDelay: 350,
            callbacks   : {
                open      : () => {
                    if ($('.sticky-header.fixed').css('margin-right')) {
                        const newMargin = Number($('.sticky-header.fixed').css('margin-right').slice(0, -2)) + 17 + 'px';

                        $('.sticky-header.fixed').css('margin-right', newMargin);
                        $('.sticky-header.fixed-nav').css('margin-right', newMargin);
                        $('#scroll-top').css('margin-right', newMargin);
                    }
                },
                afterClose: () => {
                    if ($('.sticky-header.fixed').css('margin-right')) {
                        const newMargin = Number($('.sticky-header.fixed').css('margin-right').slice(0, -2)) - 17 + 'px';

                        $('.sticky-header.fixed').css('margin-right', newMargin);
                        $('.sticky-header.fixed-nav').css('margin-right', newMargin);
                        $('#scroll-top').css('margin-right', newMargin);
                    }
                }
            }
        });
    }

    ngAfterContentInit (): void {
        if (this._AppService.showPopup) {
            setTimeout(() => {
                const mpInstance = $.magnificPopup.instance;
                if (mpInstance.isOpen) {
                    mpInstance.close();
                    setTimeout(() => {
                        this.openNewsLetterPopup();
                    }, 360);
                } else {
                    this.openNewsLetterPopup();
                }
            }, 10000);
        }
    }
}
