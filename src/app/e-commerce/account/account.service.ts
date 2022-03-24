import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../core/auth/auth.service';
import {environment} from '../../../environments/environment';
import {STORE_ID} from '../../app.config';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor (private _HttpClient: HttpClient,
               private _AuthService: AuthService) {
  }

  public getOrders (): Promise<any> {
    return this._HttpClient.get(`${environment.API_BASE}/orders/property/${STORE_ID}/user/${this._AuthService.user.value._id}`)
      .toPromise();
  }

  public getCourses (): Promise<any> {
    return this._HttpClient.get(`${environment.API_BASE}/courses/property/${STORE_ID}/user/${this._AuthService.user.value._id}`)
      .toPromise();
  }
}
