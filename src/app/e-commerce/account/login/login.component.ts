import {Component, Injector, OnInit} from '@angular/core';
import {StatefulComponent} from '../../../core/stateful.component';
import {AuthService} from '../../../core/auth/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {tryCatch} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends StatefulComponent {

  loginForm: FormGroup;
  public fetching: boolean = false;
  public alertSuccess: boolean;

  constructor( private _fbuilder: FormBuilder,
               private _LocalInjector: Injector) {
    super(_LocalInjector, 'home', {});

    if (this._AuthService.isAuthenticated()) {
      this._Router.navigate(['/account/profile']);
    }
    this.createFormLogin();
  }

  get emailNotValid (): boolean {
    return this.loginForm.get('email').invalid && this.loginForm.get('email').touched;
  }

  get passwordNotValid (): boolean {
    return this.loginForm.get('password').invalid && this.loginForm.get('password').touched;
  }

  createFormLogin (): void {

    this.loginForm = this._fbuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async saveLogin (): Promise<any> {
    if (this.loginForm.invalid) {
      return Object.values(this.loginForm.controls).forEach(control => {
        control.markAsTouched();
      });
    }
    await this.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value);
  }

  init (): void {
    this.runExternalScript('/assets/js/main.js', 'main');
  }

  public async login (email: string, password: string): Promise<any> {

    this.fetching = true;

    try{
      const isLogin = await this._AuthService.login({email, password});

      if (isLogin) {
        this._Router.navigate(['/account/profile']);
      }
    } catch (error){
      this.alertSuccess = error;
    } finally {
      this.fetching = false;
    }
  }
}
