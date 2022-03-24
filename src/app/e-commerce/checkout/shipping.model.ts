export class District {
  value: string;
  label: string;
}

export class ShippingMethod {
  districts?: string[];
  minimumTotal?: number;
  label: string | ((district: string) => string);
  districtLabel?: string;
  cost: number;
  eta: string;
  code: string;
}

export const DISTRICTS: District[] = [
  {
    value: 'Ancón',
    label: 'Ancón'
  },
  {
    value: 'Ate',
    label: 'Ate'
  },
  {
    value: 'Barranco',
    label: 'Barranco'
  },
  {
    value: 'Breña',
    label: 'Breña'
  },
  {
    value: 'Carabayllo',
    label: 'Carabayllo'
  },
  {
    value: 'Cercado de Lima',
    label: 'Cercado de Lima'
  },
  {
    value: 'Chaclacayo',
    label: 'Chaclacayo'
  },
  {
    value: 'Chorrillos',
    label: 'Chorrillos'
  },
  {
    value: 'Cieneguilla',
    label: 'Cieneguilla'
  },
  {
    value: 'Comas',
    label: 'Comas'
  },
  {
    value: 'El Agustino',
    label: 'El Agustino'
  },
  {
    value: 'Ancón',
    label: 'Ancón'
  },
  {
    value: 'Independencia',
    label: 'Independencia'
  },
  {
    value: 'Jesús María',
    label: 'Jesús María'
  },
  {
    value: 'La Molina',
    label: 'La Molina'
  },
  {
    value: 'La Victoria',
    label: 'La Victoria'
  },
  {
    value: 'Lima',
    label: 'Lima'
  },
  {
    value: 'Lince',
    label: 'Lince'
  },
  {
    value: 'Los Olivos',
    label: 'Los Olivos'
  },
  {
    value: 'Lurigancho / Chosica',
    label: 'Lurigancho / Chosica'
  },
  {
    value: 'Lurín',
    label: 'Lurín'
  },
  {
    value: 'Magdalena del Mar',
    label: 'Magdalena del Mar'
  },
  {
    value: 'Miraflores',
    label: 'Miraflores'
  },
  {
    value: 'Pachacámac',
    label: 'Pachacámac'
  },
  {
    value: 'Pucusana',
    label: 'Pucusana'
  },
  {
    value: 'Pueblo Libre',
    label: 'Pueblo Libre'
  },
  {
    value: 'Puente Piedra',
    label: 'Puente Piedra'
  },
  {
    value: 'Punta Hermosa',
    label: 'Punta Hermosa'
  },
  {
    value: 'Punta Negra',
    label: 'Punta Negra'
  },
  {
    value: 'Rímac',
    label: 'Rímac'
  },
  {
    value: 'San Bartolo',
    label: 'San Bartolo'
  },
  {
    value: 'San Borja',
    label: 'San Borja'
  },
  {
    value: 'San Isidro',
    label: 'San Isidro'
  },
  {
    value: 'San Juan de Lurigancho',
    label: 'San Juan de Lurigancho'
  },
  {
    value: 'San Juan de Miraflores',
    label: 'San Juan de Miraflores'
  },
  {
    value: 'San Luis',
    label: 'San Luis'
  },
  {
    value: 'San Martin de Porres',
    label: 'San Martin de Porres'
  },
  {
    value: 'San Miguel',
    label: 'San Miguel'
  },
  {
    value: 'Santa Anita',
    label: 'Santa Anita'
  },
  {
    value: 'Santa María del Mar',
    label: 'Santa María del Mar'
  },
  {
    value: 'Santa Rosa',
    label: 'Santa Rosa'
  },
  {
    value: 'Santiago de Surco',
    label: 'Santiago de Surco'
  },
  {
    value: 'Surquillo',
    label: 'Surquillo'
  },
  {
    value: 'Villa El Salvador',
    label: 'Villa El Salvador'
  },
  {
    value: 'Villa Maria del Triunfo',
    label: 'Villa Maria del Triunfo'
  }
];

// export const REGULAR_SHIPPING_COST = 12;

export const DISTRICTS_SHIPPING_COST_RULES: ShippingMethod[] = [
  {
    districts: [
      'Barranco',
      'Breña',
      'Cercado de Lima',
      'La Molina',
      'San Borja',
      'San Luis',
      'San Miguel',
      'Santiago de Surco',
      'Surquillo'
    ],
    cost: 10,
    districtLabel: 'Costo de envío S/10 soles',
    eta: '24 horas',
    label: (district) => `Costo de envío para ${district}`,
    code: 'delivery10'
  },
  {
    districts: [
      'Jesús María',
      'Lince',
      'Magdalena del Mar',
      'Miraflores',
      'Pueblo Libre',
      'San Isidro'
    ],
    minimumTotal: 100,
    cost: 0,
    districtLabel: 'Envío gratis por compras mayores a S/50.00',
    eta: '24 horas',
    label: (district) => `Costo de envío para ${district} por compras mayores a S/ 50.00`,
    code: 'deliveryGratis+50'
  }
];


