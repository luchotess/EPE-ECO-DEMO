import { Injectable }      from '@angular/core';
import { Router }          from '@angular/router';
import { BehaviorSubject } from 'rxjs';

class InitialState {
    floatingContact = false;
}

@Injectable({
    providedIn: 'root'
})
export class AppService {
    public _state: any[] = [];
    public content: any;
    public showPopup = true;
    public insuranceMark = '';
    public showPopupinsurance = false;
    public showPopupCard = false;
    public isModalBeingShow = false;
    public modals = {
        restrictions : false,
        shipping     : false,
        detailOrder  : false,
        emptyProducts: false,
        alertCheckout: false
    };

    public modaldata = new BehaviorSubject(null);

    constructor (private _Router: Router) {
        this.state = new InitialState();
    }

    public openPopupInsurance (a): void {
        this.showPopupinsurance = true;
        this.insuranceMark = a;
    }

    public openPopupCard (): void {
        this.showPopupCard = true;
    }

    public ClosePopupCard (): void {
        this.showPopupCard = false;
        this.isModalBeingShow = false;
    }

    public ClosePopupInsurance (): void {
        this.showPopupinsurance = false;
        this.isModalBeingShow = false;
    }

    public dismissedNewsletterPopup (): void {
        this.showPopup = false;
        localStorage.setItem('showPopup', 'false');
    }

    public toggleFloatingContact (): void {
        this.state = { floatingContact: !this.state.floatingContact };
    }

    get lastVMIndex (): any {
        return this._state.length - 1;
    }

    set state (changes: any) {
        this._state.push({ ...this.state, ...changes });
    }

    get state (): any {
        return this._state[this.lastVMIndex];
    }

    public stateBack (count = 1): void {
        const backState = this.lastVMIndex - count;
        this.state = this._state[backState];
    }

    public setModal (modal: string, show = true): void {
        this.hideAllModals();
        this.isModalBeingShow = show;
        this.modals[modal] = show;
    }

    public hideAllModals (): void {
        this.modals = {
            restrictions : false,
            shipping     : false,
            detailOrder  : false,
            emptyProducts: false,
            alertCheckout: false
        };

        this.isModalBeingShow = false;
    }
}
