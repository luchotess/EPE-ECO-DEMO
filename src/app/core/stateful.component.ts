import { AfterContentInit, Directive, Injector, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router }                                   from '@angular/router';

import { routedPages }   from '../app.config';
import { AppService }    from '../app.service';
import { AuthService }   from './auth/auth.service';
import { ScriptService } from './script.service';

@Directive()
export abstract class StatefulComponent implements OnInit, AfterContentInit {
    public _Router;
    public _ActivatedRoute;
    public _AppService;
    public _AuthService;
    public _Renderer;
    public _ScriptService;

    protected constructor (private _Injector: Injector,
                           private _page: string,
                           private InitialState: any) {
        this._Router = _Injector.get(Router);
        this._AuthService = _Injector.get(AuthService);
        this._ActivatedRoute = _Injector.get(ActivatedRoute);
        this._AppService = _Injector.get(AppService);
        this._Renderer = _Injector.get(Renderer2);
        this._ScriptService = _Injector.get(ScriptService);

        this.loadCMSContent();
        this.state = InitialState;
    }

    runExternalScript (url: string, id = '', source = 'unknown'): void {
        const scriptElement = this._ScriptService.loadJsScript(this._Renderer, url);

        if (scriptElement) {
            this._Renderer.addClass(document.body, 'loaded');
        }

        console.log(`Script loaded: ${url}. Source: ${source}`, scriptElement);
    }

    private loadCMSContent (): void {
        this._AppService.content = this._ActivatedRoute.snapshot.data.content || {};
    }

    get content (): any {
        return this._AppService.content;
    }

    get state (): any {
        return this._AppService.state[this._page];
    }

    set state (changes: any) {
        const object = {};
        object[this._page] = changes;
        this._AppService.state = { ...object };
    }

    get appState (): any {
        return this._AppService.state;
    }

    public goTo (alias: string): void {
        try {
            const path = routedPages.find(route => route.alias.includes(alias)).path;
            this._Router.navigate([path]);
        } catch (e) {
            console.warn(`Route alias '${alias}' not found`);
        }
    }

    ngOnInit (): void {
        this.init();
    }

    ngAfterContentInit (): void {
        this.afterContentInit();
    }

    protected init (): void {}

    protected afterContentInit (): void {}
}
