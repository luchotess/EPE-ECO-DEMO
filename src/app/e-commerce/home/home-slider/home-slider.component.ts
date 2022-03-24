import { Component, OnInit } from '@angular/core';

@Component({
    selector   : 'app-home-slider',
    templateUrl: './home-slider.component.html',
    styleUrls  : ['./home-slider.component.scss']
})
export class HomeSliderComponent implements OnInit {

    constructor () { }

    public sliderData = [
        {
            image: 'assets/images/slider/Banner-1.jpg',
            title: 'Brindamos bienestar',
            color: 'color-1',
            subtitle: 'Cursos y Productos',
            text: 'Obtén más información',
            ctaText: '¡Conoce más!',
            ctaLink: '/tienda/cursos'
        },
        {
            image: 'assets/images/slider/Banner-2.jpg',
            title: 'Sede Miraflores y Lince',
            color: 'color-2',
            subtitle: 'Cursos presenciales',
            text: 'También disponible: Cursos Online',
            ctaText: '¡Conoce más!',
            ctaLink: '/tienda/cursos'
        },
        {
            image: 'assets/images/products/eta1.jpg',
            title: 'Estimulación temprana',
            color: 'color-3',
            subtitle: 'Reserva ahora',
            text: '¡Inscríbelos hoy!',
            ctaText: '¡Conoce más!',
            ctaLink: '/tienda/cursos/estimulacion-temprana'
        }
    ];

    ngOnInit (): void {
    }
}
