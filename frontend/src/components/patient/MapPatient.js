import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import MapboxGeocoder from 'mapbox-gl-geocoder'
import React, { Component } from 'react'
import '../../index.css'

mapboxgl.accessToken =
  'pk.eyJ1IjoiYW5kcmVzaGVybmFuZGV6MTk5NiIsImEiOiJjazBkeG5yOW0wOGU2M2NrMThuNmtpYWY5In0.tOHjLEi61_y1dmPIY9v3yw'

export default class MapPatient extends Component {
  state = {
    hospital: []
  }
  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const user_location = [position.coords.longitude, position.coords.latitude]
        map.setZoom(14).setCenter(user_location)
        new mapboxgl.Marker({ color: 'red' })
          .setLngLat(user_location)
          .setPopup(new mapboxgl.Popup().setHTML('<h3>Usted está aquí</h3>'))
          .addTo(map)
      })
    }

    const map = new mapboxgl.Map({
      container: this.map,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-99.162947, 19.421599],
      zoom: 13
    })

    map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        zoom: 14,
        placeholder: 'Look for a nearby hospital',
        mapboxgl: mapboxgl
      }),
      'top-left'
    )

    map.addControl(new mapboxgl.NavigationControl())

    map.addControl(
      new MapboxDirections({
        accessToken: mapboxgl.accessToken
      }),
      'bottom-left'
    )

    // console.log('Soy lo que quieres meter al map', this.state.hospital)
    let geojson = {
      type: 'FeatureCollection',
      features: [
        {
          geometry: {
            coordinates: [-99.115303, 19.424906]
          },
          properties: {
            title: 'Jolteon',
            description: 'Hospital General Balbuena'
          }
        },
        {
          geometry: {
            coordinates: [-99.140785, 19.539803]
          },
          properties: {
            title: 'Jolteon',
            description: 'Hospital Materno Infantil Cuautepec'
          }
        },
        {
          geometry: {
            coordinates: [-99.202934, 19.450733]
          },
          properties: {
            title: 'Jolteon',
            description: 'Hospital Pediátrico Legaria'
          }
        },
        {
          geometry: {
            coordinates: [-99.224678, 19.361961]
          },
          properties: {
            title: 'Jolteon',
            description: 'Hospital General Dr. Enrique Cabrera'
          }
        },
        {
          geometry: {
            coordinates: [-99.06546, 19.306768]
          },
          properties: {
            title: 'Jolteon',
            description: 'Hospital de Especialidades Dr. Belisario Dom?nguez'
          }
        },

        {
          geometry: {
            coordinates: [-99.129356, 19.437643]
          },
          properties: {
            title: 'Jolteon',
            description: 'Hospital General Dr. Gregorio Salas Flores'
          }
        },
        {
          geometry: {
            coordinates: [-99.185608, 19.484491]
          },
          properties: {
            title: 'Jolteon',
            description: 'Hospital Pediátrico Azcapotzalco'
          }
        },
        {
          geometry: {
            coordinates: [-99.301117, 19.347433]
          },
          properties: {
            title: 'Jolteon',
            description: 'Hospital Materno Infantil Cuajimalpa'
          }
        },
        {
          geometry: {
            coordinates: [-99.2033, 19.498251]
          },
          properties: {
            title: 'Jolteon',
            description: 'Hospital Materno Infantil Dr. Nicolás M. Cedillo'
          }
        },
        {
          geometry: {
            coordinates: [-98.997925, 19.265505]
          },
          properties: {
            title: 'Jolteon',
            description: 'Hospital Materno Infantil Tláhuac'
          }
        },
        {
          geometry: {
            coordinates: [-99.103371, 19.480774]
          },
          properties: {
            title: 'Jolteon',
            description: 'Hospital General La Villa'
          }
        },
        {
          geometry: {
            coordinates: [-99.011253, 19.200199]
          },
          properties: {
            title: 'Jolteon',
            description: 'Hospital General Milpa Alta'
          }
        },
        {
          geometry: {
            coordinates: [-99.138245, 19.514547]
          },
          properties: {
            title: 'Jolteon',
            description: 'Hospital General Ticomán'
          }
        },
        {
          geometry: {
            coordinates: [-99.169189, 19.450987]
          },
          properties: {
            title: 'Jolteon',
            description: 'Hospital General Dr. Rub?n Le?ero'
          }
        },
        {
          geometry: {
            coordinates: [-99.027863, 19.343451]
          },
          properties: {
            title: 'Jolteon',
            description: 'Hospital General Iztapalapa C.E.E.'
          }
        },
        {
          geometry: {
            coordinates: [-99.107689, 19.356548]
          },
          properties: {
            title: 'Jolteon',
            description: 'Hospital Pediátrico Iztapalapa'
          }
        },
        {
          geometry: {
            coordinates: [-99.098358, 19.432852]
          },
          properties: {
            title: 'Jolteon',
            description: 'Hospital Pediátrico Moctezuma'
          }
        },
        {
          geometry: {
            coordinates: [-99.167725, 19.345737]
          },
          properties: {
            title: 'Jolteon',
            description: 'Hospital Pediátrico Coyoacán'
          }
        },
        {
          geometry: {
            coordinates: [-99.092812, 19.457306]
          },
          properties: {
            title: 'Jolteon',
            description: 'Hospital Pediátrico San Juan de Aragón'
          }
        },
        {
          geometry: {
            coordinates: [-99.113876, 19.487551]
          },
          properties: {
            title: 'Jolteon',
            description: 'Hospital Pediátrico Villa'
          }
        },
        {
          geometry: {
            coordinates: [-99.117943, 19.402376]
          },
          properties: {
            title: 'Jolteon',
            description: 'Hospital Pediátrico Iztacalco'
          }
        },
        {
          geometry: {
            coordinates: [-99.141022, 19.460251]
          },
          properties: {
            title: 'Jolteon',
            description: 'Hospital Pediátrico Peralvillo'
          }
        },
        {
          geometry: {
            coordinates: [-99.113228, 19.452307]
          },
          properties: {
            title: 'Jolteon',
            description: 'Hospital Materno Infantil Iniguar?n'
          }
        },
        {
          geometry: {
            coordinates: [-99.104958, 19.254906]
          },
          properties: {
            title: 'Jolteon',
            description: 'Hospital Materno Infantil Xochimilco'
          }
        },
        {
          geometry: {
            coordinates: [-99.163162, 19.36005]
          },
          properties: {
            title: 'Jolteon',
            description: 'Hospital General Xoco'
          }
        },
        {
          geometry: {
            coordinates: [-99.190842, 19.402475]
          },
          properties: {
            title: 'Jolteon',
            description: 'Hospital Pediátrico Tacubaya'
          }
        },
        {
          geometry: {
            coordinates: [-99.140236, 19.199308]
          },
          properties: {
            title: 'Jolteon',
            description: 'Hospital Materno Infantil Topilejo'
          }
        },
        {
          geometry: {
            coordinates: [-99.172232, 19.400099]
          },
          properties: {
            title: 'Jolteon',
            description: 'Hospital Angeles Agrarismo'
          }
        }
      ]
    }

    geojson.features.forEach(function(marker) {
      // create a HTML element for each feature
      let el = document.createElement('div')
      el.className = 'marker'

      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map)
      new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML(
              '<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'
            )
        )
        .addTo(map)
    })
  }

  render() {
    return <div style={{ margin: '7% 0 0  10%', width: '80%', height: '100vh' }} ref={e => (this.map = e)} />
  }
}
