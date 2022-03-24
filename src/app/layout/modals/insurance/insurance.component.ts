import { HttpClient }                         from '@angular/common/http';
import { Component, OnInit }                  from '@angular/core';
import { environment }                        from '../../../../environments/environment';
import { STORE_ID }                           from '../../../app.config';
import { AppService }                         from '../../../app.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector   : 'app-insurance',
    templateUrl: './insurance.component.html',
    styleUrls  : ['./insurance.component.scss']
})
export class InsuranceComponent implements OnInit {
    insuranceForm: FormGroup;
    public messageOk = false;

    constructor (private _fb: FormBuilder,
                 private _HttpClient: HttpClient,
                 public _AppService: AppService) {
        this.createForm();
    }

    get nameNotValid (): boolean {
        return this.insuranceForm.get('insurancename').invalid && this.insuranceForm.get('insurancename').touched;
    }

    get emailNotValid (): boolean {
        return this.insuranceForm.get('insuranceemail').invalid && this.insuranceForm.get('insuranceemail').touched;
    }

    get dniNotValid (): boolean {
        return this.insuranceForm.get('insurancedni').invalid && this.insuranceForm.get('insurancedni').touched;
    }

    createForm (): void {
        this.insuranceForm = this._fb.group({
            insurancename : ['', [Validators.required, Validators.minLength(3)]],
            insurancedni  : ['', [Validators.required, Validators.pattern('^\\d{8,12}$')]],
            insuranceemail: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]]
        });
    }

    ngOnInit (): void {
    }

    save (): void {
        // if (this.insuranceForm.invalid){
        //   return Object.values(this.insuranceForm.controls).forEach(control => {
        //     control.markAsTouched();
        //   });
        // }
        //
        if (this.insuranceForm.valid) {
            this._HttpClient.post(`${environment.API_BASE}/insurance/property/${STORE_ID}`, {
                name: this.insuranceForm.value.insurancename,
                dni: this.insuranceForm.value.insurancedni,
                email: this.insuranceForm.value.insuranceemail,
                insurance: this._AppService.insuranceMark
            }).subscribe(
                (val) => {
                    console.log('POST call successful value returned in body',
                        val);
                },
                response => {
                    console.log('POST call in error', response);
                },
                () => {
                    this.openMessage();
                    console.log('The POST observable is now completed.');
                });
        }

    }

    public openMessage (): void {
        this.messageOk = true;
    }

    public closeMessage (): void {
        this._AppService.ClosePopupInsurance();
    }

    public popupInsuranceClose (): void {
        this._AppService.ClosePopupInsurance();
    }

}
