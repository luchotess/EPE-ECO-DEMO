import { Injectable }       from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient }       from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import decode               from 'jwt-decode';
import { Router }           from '@angular/router';
import { environment } from '../../../environments/environment';
import { STORE_ID } from '../../app.config';

const helper = new JwtHelperService();


@Injectable()
export class AuthService {
  public user: BehaviorSubject<any> = new BehaviorSubject(null);

  private authLoginEndpoint = `${environment.API_BASE}/auth/login/${STORE_ID}`;
  private authRegisterEndpoint = `${environment.API_BASE}/auth/register/${STORE_ID}`;

  constructor(private _http: HttpClient, private router: Router) {}


  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !helper.isTokenExpired(token);
  }

  public async login (credentials: any): Promise<any> {
    const isUserLogin: any = await this._http.post(this.authLoginEndpoint, credentials).toPromise();

    if (isUserLogin) {
      const { token } = isUserLogin;
      this.setUserFromToken(token);

      return Promise.resolve(true);
    }

    return Promise.reject();
  }

  public register (user: any): Promise<any> {
    const payload = {
      ...user,
      store: STORE_ID
    };

    return this._http.post(this.authRegisterEndpoint, payload).toPromise();
  }

  public setUserFromToken (token: string): void {
    this.saveToken(token);
    this.decodeUser();
  }

  public decodeUser (): void {
    const token = localStorage.getItem('token');

    if (token) {
      this.user.next(decode(token));
      console.log(this.user.value);
    } else {
      console.log('No valid user token detected.');
    }
  }

  public updateUser (payload: any): Promise<any> {
    return new Promise((resolve) => {
      this._http.put(`${environment.API_BASE}/users/${this.user.value._id}`, payload)
        .subscribe((response: any) => {
          this.setUserFromToken(response.data.token);
          resolve(true);
        });
    });
  }

  public saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  public logout (): void {
    localStorage.clear();
    this.user.next(null);
    this.router.navigate(['/account/login']);
  }
}
