import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup} from '@angular/forms';
import { AuthService } from '../../../../core/auth/auth.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-profile-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public showEditar: boolean = false;
  public showEditar1: boolean = false;
  public showEditar2: boolean = false;
  form: FormGroup;
  BASE_URL = 'https://ieir62uxll.execute-api.us-east-1.amazonaws.com/dev/users';
  @Input()
  public user: any = null;

  constructor(private _fBuilder: FormBuilder,
              private _HttpClient: HttpClient,
              public _AuthService: AuthService,
              private _Router: Router) {
    this.updateDash();
  }


  updateDash(): void {
    this._AuthService.user.subscribe(user => this.user = user);

    if (!this.user) {
      this._Router.navigate(['/']);
    } else {
      this.form = this._fBuilder.group({
        name: this.user.name,
        lastname: this.user.lastname,
        email: this.user.email,
        phone: this.user.phone,
        password: this.user.password,
        dni: this.user.data.dni
      });
    }
  }

  public async updateForm (): Promise<any> {
    const updated = await this._AuthService.updateUser(this.form.value);

    if (updated) {
      this.showEditar1 = false;
    }
  }

  public openEdit1(): void {
    this.showEditar1 = true;
  }
  public closeEdit1(): void{
    this.showEditar1 = false;
  }
  public openEdit(): void {
    this.showEditar = true;
  }
  public closeEdit(): void{
    this.showEditar = false;
  }
  public openEdit2(): void {
    this.showEditar2 = true;
  }
  public closeEdit2(): void{
    this.showEditar2 = false;
  }

  ngOnInit (): void {
  }
}
