import React, { Component } from 'react'
// import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import mapboxgl from 'mapbox-gl'
import { MyContext } from '../../context/index'

mapboxgl.accessToken =
  'pk.eyJ1IjoibWx6eiIsImEiOiJjandrNmVzNzUwNWZjNGFqdGcwNmJ2ZWhpIn0.ybY6wnAtJwj-Tq0c46sW6A'

class MapPatient extends Component {
  state = {
    center: {},
    user: JSON.parse(localStorage.getItem('user'))
  }

  componentDidMount() {
    // axios.get(`http://localhost:3000/api/center/${this.props.match.params.id}`).then(res => {
    //   this.setState({ center: this.state.center })
      const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v9'
      })

        navigator.geolocation.getCurrentPosition(function(position) {
          const user_location = [position.coords.longitude, position.coords.latitude]
          map.setZoom(40).setCenter(user_location)
          new mapboxgl.Marker({ color: 'red' })
            .setLngLat(user_location)
            .setPopup(new mapboxgl.Popup().setHTML('<h3>Usted está aquí</h3>'))
            .addTo(map)

        const center_location = [this.state.center.longitud, this.state.center.latitud]
        new mapboxgl.Marker({ color: 'green' })
          .setLngLat(center_location)
          .setPopup(new mapboxgl.Popup().setHTML('<h3>Destino</h3>'))
          .addTo(map)
      

      map.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true
          },
          trackUserLocation: true,
          showUserLocation: true
        })
      )

    //   map.addControl(
    //     new MapboxDirections({
    //       accessToken: mapboxgl.accessToken,
    //       unit: 'metric',
    //       language: 'es',
    //       placeholderOrigin: 'Seleccione su lugar de origen',
    //       placeholderDestination: 'Seleccione su destino'
    //     }),
    //     'top-left'
    //   )

      map.addControl(new mapboxgl.NavigationControl())
    })
  }
  render() {
    return (
      
              <div
                className="column is -7 map"
                style={{ width: '90%', height: '50vh' }}
                ref={e => (this.mapContainer = e)}
              />
             
    )
  }
}
MapPatient.contextType = MyContext
export default MapPatient
