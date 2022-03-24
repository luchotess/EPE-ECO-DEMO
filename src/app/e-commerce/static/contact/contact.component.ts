import { Component, Injector, OnInit } from '@angular/core';
import { StatefulComponent }           from '../../../core/stateful.component';
import { HttpClient }                  from '@angular/common/http';


@Component({
  selector   : 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls  : ['./contact.component.scss']
})
export class ContactComponent extends StatefulComponent {

  user: any = {};
  sent: boolean = false;

  title = 'Epe';
  lat = -12.0960408;
  lng = -77.0356184;
  zoom = 13.5;


  lat1 = -12.0854975;
  lng1 = -77.0344594;

  lat2 = -12.119087;
  lng2 = -77.0340897;

  icon = './assets/images/logomap.png';

  imagesLince = [
    {
      source: './assets/images/about/LINCE ACTUAL.jpg',
      name  : 'Sede Lince Foto'
    },
    {
      source: './assets/images/about/SedeMiraflores3.JPG',
      name  : 'Sede Lince Foto 2'
    },
    {
      source: './assets/images/about/LINCE ACTUAL 1.jpg',
      name  : 'Sede Lince Foto 1'
    },
    {
      source: './assets/images/about/LINCE ACTUAL 3.jpg',
      name  : ' Sede Lince Foto 3'
    }
  ];

  imagesMiraflores = [
    {
      source: './assets/images/about/SedeMiraflores1.JPG',
      name  : 'Sede Miraflores Foto 1',
    },
    {
      source: './assets/images/about/SedeMiraflores2.JPG',
      name  : 'Sede Miraflores Foto 2'
    },
    {
      source: './assets/images/about/SedeMiraflores4.JPG',
      name  : 'Sede Miraflores Foto 4'
    },
    {
      source: './assets/images/about/SedeMiraflores5.JPG',
      name  : 'Sede Miraflores Foto 5'
    },
    {
      source: './assets/images/about/SedeMiraflores6.JPG',
      name  : 'Sede Miraflores Foto 6'
    }
  ];

  constructor (private _LocalInjector: Injector,
               private _HttpClient: HttpClient) {
    super(_LocalInjector, 'home', {});
  }

  init (): void {
    this.runExternalScript('/assets/js/main.js', 'main');
  }

  send (): void {
    this._HttpClient.post('https://api.hsforms.com/submissions/v3/integration/submit/8308198/e418895f-a904-4bc4-afb7-62eb919458ee', {
      fields: [
        {
          name : 'firstname',
          value: this.user.firstname
        },
        {
          name : 'email',
          value: this.user.email
        },
        {
          name : 'phone',
          value: this.user.phone
        },
        {
          name : 'message',
          value: this.user.message
        },
      ]
    }).subscribe(response => {
      console.log(response);
      this.sent = true;
    });
  }
}
