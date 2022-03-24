import {Component, Injector, OnInit} from '@angular/core';
import {StatefulComponent} from '../../../core/stateful.component';
import {AuthService} from '../../../core/auth/auth.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends StatefulComponent {

  registrationForm: FormGroup;
  public fetching: boolean = false;
  public alertSuccess;
  public user: any = {
    data: {}
  };

  constructor(private _fBuilder: FormBuilder,
              private _LocalInjector: Injector) {
    super(_LocalInjector, 'home', {});
    this.createFormRegister();
  }

  get emailNotValid(): boolean {
    return this.registrationForm.get('email').invalid && this.registrationForm.get('email').touched;
  }

  get passwordNotValid(): boolean {
    return this.registrationForm.get('password').invalid && this.registrationForm.get('password').touched;
  }

  get password2NotValid(): boolean {
    return  this.registrationForm.get('password2').invalid && this.registrationForm.get('password2').touched;
  }

  get nameNotValid(): boolean {
    return this.registrationForm.get('name').invalid && this.registrationForm.get('name').touched;
  }

  get lastnameNotValid(): boolean {
    return this.registrationForm.get('lastname').invalid && this.registrationForm.get('lastname').touched;
  }

  get dniNotValid(): boolean {
    return this.registrationForm.get('dni').invalid && this.registrationForm.get('dni').touched;
  }
  get phoneNotValid(): boolean {
    return this.registrationForm.get('phone').invalid && this.registrationForm.get('phone').touched;
  }

  createFormRegister(): void {
    this.registrationForm = this._fBuilder.group({
      email: [ '', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: [ '', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required, Validators.minLength(6)]],
      name: [ '', Validators.required],
      lastname: ['', Validators.required],
      dni: ['', [Validators.required, Validators.pattern('^\\d{8,12}$')]],
      phone: ['', [Validators.required, Validators.pattern('^\\d{9,12}$')]]
    }, {
      validators: this.SomePassword('password', 'password2')
    });
  }

  public SomePassword(pass1:string, pass2: string){
    return(formGroup: FormGroup) => {
      const pass1Control = formGroup.controls[pass1];
      const pass2Control = formGroup.controls[pass2];
      if(pass1Control.value === pass2Control.value){
        pass2Control.setErrors(null);
      } else {
        pass2Control.setErrors({noEsIgual: true});
      }
    }
  }

  async saveRegister (): Promise<any> {
    if (this.registrationForm.invalid) {
      return Object.values(this.registrationForm.controls).forEach(control => {
        control.markAsTouched();
      });
    }
    await this.register();
  }

  init (): void {
    this.runExternalScript('/assets/js/main.js', 'main');
  }

  public async register (): Promise<any> {
    this.fetching = true;

    try {
      console.log('error = registeredResponse' );
      const registeredResponse = await this._AuthService.register(this.user);

      if (registeredResponse) {
        const { token } = registeredResponse.data;
        this._AuthService.setUserFromToken(token);
        console.log('error = ' + registeredResponse.data);
        this._Router.navigate(['/account/profile']);
      }
    } catch (error){
      this.alertSuccess = error;
    }finally {
      this.fetching = false;
      console.log('error = fetching');
    }
  }
}
