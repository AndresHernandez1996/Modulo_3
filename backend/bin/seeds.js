const mongoose = require('mongoose')
const Hospital = require('../models/Hospital')

const data = [
  {
    datasetid: 'hospitales-y-centros-de-salud',
    recordid: '75ed4b04786ff02cc1a7f43a97e534ae66f59d2a',
    fields: {
      latitud: 19.424906,
      titular:
        'Director: Dr. Miguel Angel Martínez Guzmán Dirección: Cecilio R?belo y sur No.103, Col. Aeron?utica Militar, Delegación Venustiano Carranza C.P. 15900. Teléfono: 55 52 16 02',
      geopoint: [19.424906, -99.115303],
      coordenadas: '-99.115303,19.424906,0.000000',
      nombre: 'Hospital General Balbuena',
      longitud: -99.115303
    },
    geometry: {
      type: 'Point',
      coordinates: [-99.115303, 19.424906]
    },
    record_timestamp: '2019-01-13T17:45:59.336-06:00'
  },
  {
    datasetid: 'hospitales-y-centros-de-salud',
    recordid: '2f85dc14292c92f900c0bdf77c5438670183ce23',
    fields: {
      latitud: 19.539803,
      titular:
        'Director: Dr. Roberto P?rez AguilarDirección: Emiliano Zapata No 17, Col. Cuautepec Barrio Bajo Delegación Gustavo A. Madero C.P. 07200. Teléfono: 53 06 21 90',
      geopoint: [19.539803, -99.140785],
      coordenadas: '-99.140785,19.539803,0.000000',
      nombre: 'Hospital Materno Infantil Cuautepec',
      longitud: -99.140785
    },
    geometry: {
      type: 'Point',
      coordinates: [-99.140785, 19.539803]
    },
    record_timestamp: '2019-01-13T17:45:59.336-06:00'
  },
  {
    datasetid: 'hospitales-y-centros-de-salud',
    recordid: '91490e5dfc31af0447d7f66670668b6edd6c6750',
    fields: {
      latitud: 19.450733,
      titular:
        'Director: Dr. Arturo Rafael Capistrán Guadalajara Dirección: Calzada Legar?a 371, Col. México Nuevo, Delegación Miguel Hidalgo C. P. 11260. Teléfono: 50 82 76 42',
      geopoint: [19.450733, -99.202934],
      coordenadas: '-99.202934,19.450733,0.000000',
      nombre: 'Hospital Pediátrico Legaria',
      longitud: -99.202934
    },
    geometry: {
      type: 'Point',
      coordinates: [-99.202934, 19.450733]
    },
    record_timestamp: '2019-01-13T17:45:59.336-06:00'
  },
  {
    datasetid: 'hospitales-y-centros-de-salud',
    recordid: 'd8a2e15af2d0e1c839c56335ff49b718ea5b1c95',
    fields: {
      latitud: 19.361961,
      titular:
        'Director: Dra. Arcelia Martínez González Dirección: Av. Centenario, esquina Prolongación 5 de mayo, Col. Exhacienda de Tarango, Delegación ?lvaro Obreg?n Teléfono: 12 85 29 54',
      geopoint: [19.361961, -99.224678],
      coordenadas: '-99.224678,19.361961,0.000000',
      nombre: 'Hospital General Dr. Enrique Cabrera',
      longitud: -99.224678
    },
    geometry: {
      type: 'Point',
      coordinates: [-99.224678, 19.361961]
    },
    record_timestamp: '2019-01-13T17:45:59.336-06:00'
  },
  {
    datasetid: 'hospitales-y-centros-de-salud',
    recordid: 'a2284ce9d0e01a6d8ce9769c078ccfd2b62e937a',
    fields: {
      latitud: 19.306768,
      titular:
        'Director: Dr. Osvaldo González La Riviere Dirección: Av. Tlahuac No. 4866, Esq. Zacatlan, Col. San Lorenzo Tezonco, Delegación Iztapalapa C.P. 09790. Teléfono: 58 50 00 02',
      geopoint: [19.306768, -99.06546],
      coordenadas: '-99.065460,19.306768,0.000000',
      nombre: 'Hospital de Especialidades Dr. Belisario Dom?nguez',
      longitud: -99.06546
    },
    geometry: {
      type: 'Point',
      coordinates: [-99.06546, 19.306768]
    },
    record_timestamp: '2019-01-13T17:45:59.336-06:00'
  },
  {
    datasetid: 'hospitales-y-centros-de-salud',
    recordid: '06db94c0126a094c0f5cfd9fe51877569ea2c505',
    fields: {
      latitud: 19.437643,
      titular:
        'Director: Dr. Argemiro José Genes Naar Dirección: Carmen No. 41, Col. Centro Delegación Cuauht?moc C.P 06020. Teléfono: 57 02 03 72',
      geopoint: [19.437643, -99.129356],
      coordenadas: '-99.129356,19.437643,0.000000',
      nombre: 'Hospital General Dr. Gregorio Salas Flores',
      longitud: -99.129356
    },
    geometry: {
      type: 'Point',
      coordinates: [-99.129356, 19.437643]
    },
    record_timestamp: '2019-01-13T17:45:59.336-06:00'
  },
  {
    datasetid: 'hospitales-y-centros-de-salud',
    recordid: 'f0701e18e29a6fbf25f3cf52108282b790b142a3',
    fields: {
      latitud: 19.484491,
      titular:
        'Director: Dra. Guadalupe Alejandra Santillán Mu?ozDirección: Los Reyes, Azcapotzalco, Ciudad de México, DFTeléfono: 55 61 28 54',
      geopoint: [19.484491, -99.185608],
      coordenadas: '-99.185608,19.484491,0.000000',
      nombre: 'Hospital Pediátrico Azcapotzalco',
      longitud: -99.185608
    },
    geometry: {
      type: 'Point',
      coordinates: [-99.185608, 19.484491]
    },
    record_timestamp: '2019-01-13T17:45:59.336-06:00'
  },
  {
    datasetid: 'hospitales-y-centros-de-salud',
    recordid: '19f1308e982648b0c00dc3d1f58d7f41caf12269',
    fields: {
      latitud: 19.347433,
      titular:
        'Director: Dra. Mar?a del Rosario Arrazola Flores Dirección: Av. 16 de Septiembre s/n, Col. Contadero, Delegación Cuajimalpa de Morelos C.P.06500. Teléfono: 58 12 22 11',
      geopoint: [19.347433, -99.301117],
      coordenadas: '-99.301117,19.347433,0.000000',
      nombre: 'Hospital Materno Infantil Cuajimalpa',
      longitud: -99.301117
    },
    geometry: {
      type: 'Point',
      coordinates: [-99.301117, 19.347433]
    },
    record_timestamp: '2019-01-13T17:45:59.336-06:00'
  },
  {
    datasetid: 'hospitales-y-centros-de-salud',
    recordid: '3150e4b58169d338b99efe14cc4b5562f2fdfb27',
    fields: {
      latitud: 19.498251,
      titular:
        'Director: Dra. Patricia Flores Galicia Dirección: Gustavo J. S/n, Esq. V?ctor Hern?ndez Covarrubias, Col. Unidad Francisco Villa Delegación Azcapotzalco C.P. 02400. Teléfono: 53 94 05 65',
      geopoint: [19.498251, -99.2033],
      coordenadas: '-99.203300,19.498251,0.000000',
      nombre: 'Hospital Materno Infantil Dr. Nicolás M. Cedillo',
      longitud: -99.2033
    },
    geometry: {
      type: 'Point',
      coordinates: [-99.2033, 19.498251]
    },
    record_timestamp: '2019-01-13T17:45:59.336-06:00'
  },
  {
    datasetid: 'hospitales-y-centros-de-salud',
    recordid: '600a93aa68f0b50bf774d46ebc6e54233a99fb8e',
    fields: {
      latitud: 19.265505,
      titular:
        'Director: Dr. Raúl Ernesto Guevara Meléndez Machuca Dirección: Av. Tláhuac Chalco No. 231, Col. La Habana, Delegación Tláhuac C.P. 13050. Teléfono: 58 42 36 01 &nbsp;',
      geopoint: [19.265505, -98.997925],
      coordenadas: '-98.997925,19.265505,0.000000',
      nombre: 'Hospital Materno Infantil Tláhuac',
      longitud: -98.997925
    },
    geometry: {
      type: 'Point',
      coordinates: [-98.997925, 19.265505]
    },
    record_timestamp: '2019-01-13T17:45:59.336-06:00'
  },
  {
    datasetid: 'hospitales-y-centros-de-salud',
    recordid: '3e887f508be38bd921fb3b8f3ee20cccf04078a5',
    fields: {
      latitud: 19.480774,
      titular:
        'Director: Dr. Enrique Garduño Salvador Dirección: Av. San Juan de Aragón No 28, Col. Granjas Modernas. Delegación Gustavo A. Madero C.P. 07460. Teléfono: 55 77 88 67',
      geopoint: [19.480774, -99.103371],
      coordenadas: '-99.103371,19.480774,0.000000',
      nombre: 'Hospital General La Villa',
      longitud: -99.103371
    },
    geometry: {
      type: 'Point',
      coordinates: [-99.103371, 19.480774]
    },
    record_timestamp: '2019-01-13T17:45:59.336-06:00'
  },
  {
    datasetid: 'hospitales-y-centros-de-salud',
    recordid: '72537a9766b3efea3a833215ff45b84b9914d8af',
    fields: {
      latitud: 19.200199,
      titular:
        'Dirección: Dr.Benjamín Ortega Romero Dirección: Carretera Milpa Alta Chalco km. 2.5, Col. Villa Milpa Alta, Delegación Milpa Alta CP 12000 Teléfono: 2211-5839',
      geopoint: [19.200199, -99.011253],
      coordenadas: '-99.011253,19.200199,0.000000',
      nombre: 'Hospital General Milpa Alta',
      longitud: -99.011253
    },
    geometry: {
      type: 'Point',
      coordinates: [-99.011253, 19.200199]
    },
    record_timestamp: '2019-01-13T17:45:59.336-06:00'
  },
  {
    datasetid: 'hospitales-y-centros-de-salud',
    recordid: '90007f7758a5fe1be624e4d651ee48fc6216f2f6',
    fields: {
      latitud: 19.514547,
      titular:
        'Director: Dr. Carlos Vazquez Noriega Dirección: Plan de San Luis S/n, Col. Ticom?n Delegación Gustavo A. Madero. C.P. 07330. Teléfono: 57 54 39 79',
      geopoint: [19.514547, -99.138245],
      coordenadas: '-99.138245,19.514547,0.000000',
      nombre: 'Hospital General Ticomán',
      longitud: -99.138245
    },
    geometry: {
      type: 'Point',
      coordinates: [-99.138245, 19.514547]
    },
    record_timestamp: '2019-01-13T17:45:59.336-06:00'
  },
  {
    datasetid: 'hospitales-y-centros-de-salud',
    recordid: 'c1125a665aefcdcd4cea9acee5e1fb9df54a09fe',
    fields: {
      latitud: 19.450987,
      titular:
        'Director: Dr. José Alfredo Jiménez Douglas Dirección: Plan de San Luis y Díaz Mirón, Col. Casco de Santo Tomás Delegación Miguel Hidalgo C.P. 11340. Teléfono: 53 41 17 93',
      geopoint: [19.450987, -99.169189],
      coordenadas: '-99.169189,19.450987,0.000000',
      nombre: 'Hospital General Dr. Rub?n Le?ero',
      longitud: -99.169189
    },
    geometry: {
      type: 'Point',
      coordinates: [-99.169189, 19.450987]
    },
    record_timestamp: '2019-01-13T17:45:59.336-06:00'
  },
  {
    datasetid: 'hospitales-y-centros-de-salud',
    recordid: '0488d2cf90caa7a6cbc722be2df69ddc0feb969e',
    fields: {
      latitud: 19.343451,
      titular:
        'Director: Dr. Benjamín Méndez Pinto Dirección: Avenida Ermita Iztapalapa no. 3018, Col. Citlali; Delegación Iztapalapa, CP 09660 Teléfono: 54293212',
      geopoint: [19.343451, -99.027863],
      coordenadas: '-99.027863,19.343451,0.000000',
      nombre: 'Hospital General Iztapalapa C.E.E.',
      longitud: -99.027863
    },
    geometry: {
      type: 'Point',
      coordinates: [-99.027863, 19.343451]
    },
    record_timestamp: '2019-01-13T17:45:59.336-06:00'
  },
  {
    datasetid: 'hospitales-y-centros-de-salud',
    recordid: '909d427eb71f60c12eb522472341da97ba296dc7',
    fields: {
      latitud: 19.356548,
      titular:
        'Director: Dr. Ramón Carballo Herrada Dirección: Calzada Ermita Iztapalapa No. 780, Col. Granjas San Antonio, Delegación Iztapalapa C.P. 09070. Teléfono: 56 85 94 16',
      geopoint: [19.356548, -99.107689],
      coordenadas: '-99.107689,19.356548,0.000000',
      nombre: 'Hospital Pediátrico Iztapalapa',
      longitud: -99.107689
    },
    geometry: {
      type: 'Point',
      coordinates: [-99.107689, 19.356548]
    },
    record_timestamp: '2019-01-13T17:45:59.336-06:00'
  },
  {
    datasetid: 'hospitales-y-centros-de-salud',
    recordid: '5bb84412661b0c0cebf8753826f358e5d6de76ec',
    fields: {
      latitud: 19.432852,
      titular:
        'Director: Dr. Enrique Grania Pozada Dirección: Oriente 158 No. 189, Col. Moctezuma 2da. Secci?n, Delegación Venustiano Carranza C.P. 15530. Teléfono: 55 71 40 57',
      geopoint: [19.432852, -99.098358],
      coordenadas: '-99.098358,19.432852,0.000000',
      nombre: 'Hospital Pediátrico Moctezuma',
      longitud: -99.098358
    },
    geometry: {
      type: 'Point',
      coordinates: [-99.098358, 19.432852]
    },
    record_timestamp: '2019-01-13T17:45:59.336-06:00'
  },
  {
    datasetid: 'hospitales-y-centros-de-salud',
    recordid: '005799e69c984188ffc380ab477f9e2c99ac8f80',
    fields: {
      latitud: 19.345737,
      titular:
        'Director: Dr. Miguel Camarillo Valencia Dirección: Moctezuma No. 18, Col. Del Carmen Coyoacán, Delegación Coyoacán C.P. 0400. Teléfono: 55 54 28 60',
      geopoint: [19.345737, -99.167725],
      coordenadas: '-99.167725,19.345737,0.000000',
      nombre: 'Hospital Pediátrico Coyoacán',
      longitud: -99.167725
    },
    geometry: {
      type: 'Point',
      coordinates: [-99.167725, 19.345737]
    },
    record_timestamp: '2019-01-13T17:45:59.336-06:00'
  },
  {
    datasetid: 'hospitales-y-centros-de-salud',
    recordid: '13f802d3f4416073d56f10e7f5d81ea8e11706e9',
    fields: {
      latitud: 19.457306,
      titular:
        'Director: Dr. Raúl Contreras Artine Dirección: Av. 506 entre calle 517 y 521, Col. San Juan de Arag?n 1a. Secci?n Del. Gustavo A. Madero C.P. 07969. Teléfono: 55 51 00 03',
      geopoint: [19.457306, -99.092812],
      coordenadas: '-99.092812,19.457306,0.000000',
      nombre: 'Hospital Pediátrico San Juan de Aragón',
      longitud: -99.092812
    },
    geometry: {
      type: 'Point',
      coordinates: [-99.092812, 19.457306]
    },
    record_timestamp: '2019-01-13T17:45:59.336-06:00'
  },
  {
    datasetid: 'hospitales-y-centros-de-salud',
    recordid: '844f3584ac5650aad08e40f096679b0889ce8873',
    fields: {
      latitud: 19.487551,
      titular:
        'Director: Dra. María del Rocío Lima Carcaño Dirección: Avenida Cantera, Esq. Hidalgo S/n, Col. Estanzuela Delegación Gustavo A. Madero C.P. 07050. Teléfono: 57 81 20 69',
      geopoint: [19.487551, -99.113876],
      coordenadas: '-99.113876,19.487551,0.000000',
      nombre: 'Hospital Pediátrico Villa',
      longitud: -99.113876
    },
    geometry: {
      type: 'Point',
      coordinates: [-99.113876, 19.487551]
    },
    record_timestamp: '2019-01-13T17:45:59.336-06:00'
  },
  {
    datasetid: 'hospitales-y-centros-de-salud',
    recordid: '65edfed297fef3205b256e35022bfc17a738c1ce',
    fields: {
      latitud: 19.402376,
      titular:
        'Director: Dr. Hugo Caballero Novara Dirección: Avenida Coyuya y Terrapl?n de R?o Fr?o S/n, Col. La Cruz, Delegación Iztacalco C.P. 08310. Teléfono: 56 57 93 75',
      geopoint: [19.402376, -99.117943],
      coordenadas: '-99.117943,19.402376,0.000000',
      nombre: 'Hospital Pediátrico Iztacalco',
      longitud: -99.117943
    },
    geometry: {
      type: 'Point',
      coordinates: [-99.117943, 19.402376]
    },
    record_timestamp: '2019-01-13T17:45:59.336-06:00'
  },
  {
    datasetid: 'hospitales-y-centros-de-salud',
    recordid: '454065f82a6cdc6a0ebb8fcac1d7cf445e592c0f',
    fields: {
      latitud: 19.460251,
      titular:
        'Director: Dr. Emilio Escobar Picazo Dirección: Tolnahuac No. 14, Col. San Sim?n Delegación Cuauht?moc C.P. 06920. Teléfono: 55 83 41 80',
      geopoint: [19.460251, -99.141022],
      coordenadas: '-99.141022,19.460251,0.000000',
      nombre: 'Hospital Pediátrico Peralvillo',
      longitud: -99.141022
    },
    geometry: {
      type: 'Point',
      coordinates: [-99.141022, 19.460251]
    },
    record_timestamp: '2019-01-13T17:45:59.336-06:00'
  },
  {
    datasetid: 'hospitales-y-centros-de-salud',
    recordid: 'd4485ac01bcb1feef5b3b1cd79a563f82e70375b',
    fields: {
      latitud: 19.452307,
      titular:
        'Director: Dr. Martín Viveros Alcaraz Dirección: Estaño No. 307, Esq. Congreso de la Unión, Col. Felipe Ángeles Delegación Venustiano Carranza C.P 15310. Teléfono: 57 95 67 64',
      geopoint: [19.452307, -99.113228],
      coordenadas: '-99.113228,19.452307,0.000000',
      nombre: 'Hospital Materno Infantil Iniguar?n',
      longitud: -99.113228
    },
    geometry: {
      type: 'Point',
      coordinates: [-99.113228, 19.452307]
    },
    record_timestamp: '2019-01-13T17:45:59.336-06:00'
  },
  {
    datasetid: 'hospitales-y-centros-de-salud',
    recordid: '756e02e2541867e219b2e141e7d3b21d26e70966',
    fields: {
      latitud: 19.254906,
      titular:
        'Director: Dr. Victor Hugo Pulido Olivares Dirección: Prolongación 16 de Septiembre y Calzada Nativitas, Barrio Xaltoc?n, Delegación Xochimilco C.P. 16090. Teléfono: 56 76 49 93',
      geopoint: [19.254906, -99.104958],
      coordenadas: '-99.104958,19.254906,0.000000',
      nombre: 'Hospital Materno Infantil Xochimilco',
      longitud: -99.104958
    },
    geometry: {
      type: 'Point',
      coordinates: [-99.104958, 19.254906]
    },
    record_timestamp: '2019-01-13T17:45:59.336-06:00'
  },
  {
    datasetid: 'hospitales-y-centros-de-salud',
    recordid: '50fa3f4e3b11f03a504cdaa37f457b09c3edd11f',
    fields: {
      latitud: 19.36005,
      titular:
        'Director: Dr.Jorge Arturo Avi?a Valencia Dirección: Av. México Coyoacán s/n, Esq. Bruno Traven, Col. General Anaya, Delegación Benito Ju?rez C.P. 30340. Teléfono: 56 88 91 31',
      geopoint: [19.36005, -99.163162],
      coordenadas: '-99.163162,19.360050,0.000000',
      nombre: 'Hospital General Xoco',
      longitud: -99.163162
    },
    geometry: {
      type: 'Point',
      coordinates: [-99.163162, 19.36005]
    },
    record_timestamp: '2019-01-13T17:45:59.336-06:00'
  },
  {
    datasetid: 'hospitales-y-centros-de-salud',
    recordid: '5fa46be85b314095a5b9f171e4e7c72e24c6603c',
    fields: {
      latitud: 19.402475,
      titular:
        'Director: Dr. Carlos Javier Arnaiz Toledo Dirección: Calle Carlos Lazo No.25, Esq. Gaviota, Col. Tacubaya Delegación Miguel Hidalgo C.P. 11870. Teléfono: 55 15 79 20',
      geopoint: [19.402475, -99.190842],
      coordenadas: '-99.190842,19.402475,0.000000',
      nombre: 'Hospital Pediátrico Tacubaya',
      longitud: -99.190842
    },
    geometry: {
      type: 'Point',
      coordinates: [-99.190842, 19.402475]
    },
    record_timestamp: '2019-01-13T17:45:59.336-06:00'
  },
  {
    datasetid: 'hospitales-y-centros-de-salud',
    recordid: '86da7ae6630a187e1016ede7c7b0c5c0218a5b27',
    fields: {
      latitud: 19.199308,
      titular:
        'Dirección: Calzada Santa Cruz No. 1, Col.San Miguel Topilejo, Delegación Tlalpan C.P. 14500. Teléfono: 58 48 08 70',
      geopoint: [19.199308, -99.140236],
      coordenadas: '-99.140236,19.199308,0.000000',
      nombre: 'Hospital Materno Infantil Topilejo',
      longitud: -99.140236
    },
    geometry: {
      type: 'Point',
      coordinates: [-99.140236, 19.199308]
    },
    record_timestamp: '2019-01-13T17:45:59.336-06:00'
  }
]

mongoose
  .connect('mongodb://localhost/jolteon', { useNewUrlParser: true })
  .then(async () => {
    const hospitals = await Hospital.create(data)
    console.log(`${hospitals.length} hospitals created`)
    mongoose.connection.close()
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  })
