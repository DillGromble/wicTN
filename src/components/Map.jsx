import React from 'react'
import db from '../firebase.config'

/* global google */

export default class GoogleMap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      center: new google.maps.LatLng(36.174465, -86.767960),
      map: null,
      userLoc: null,
      service: null,
      stores: []
    }
  }

  componentWillMount() {
    const success = pos => {
      const coords = pos.coords
      const here = new google.maps.LatLng(coords.latitude, coords.longitude);
      this.setState({ userLoc: here }, () => {
        this.state.map.setZoom(15)
        this.state.map.setCenter(here)
      })
    }
    const error = err => console.error(`ERROR(${err.code}): ${err.message}`)
    navigator.geolocation.getCurrentPosition(success, error)
  }

  componentDidMount() {
    const center = this.state.center
    const map = new google.maps.Map(this.refs.map, {
      center,
      zoom: 10
    })
    const service = new google.maps.places.PlacesService(map)



    this.setState({ map, service }, () => {
      db.ref('/Stores').on('value', (data) => {
        const stores = []
        data.forEach(store => { stores.push(store.val()) })
        this.setState({ stores }, () => {
          this.state.stores.forEach((store) => this.createMarker(store))
        })
      })
    })
  }

  createMarker(place) {
    const infoWindow = new google.maps.InfoWindow();

    place.lat = +place.lat // TODO: REMOVE THIS ONCE FIREBASE IS POPULATED
    place.long = +place.long

    const marker = new google.maps.Marker({
      position: { lat: place.lat, lng: place.long },
      title: place.name
    });

    const getDetails = this.state.service.getDetails.bind(this.state.service)

    const createContent = (store) => (
      `${store.name} <br />
        ${store.adr_address} <br />
        ${store.formatted_phone_number} <br />
        <a href=${store.website}> ${store.website} </a>`
    )

    google.maps.event.addListener(marker, 'click', () => {
      getDetails(place, (result, status) => {
        if (status !== google.maps.places.PlacesServiceStatus.OK) {
          console.error(status);
          return;
        }
        console.log(result)
        infoWindow.setContent(createContent(result));
        infoWindow.open(this.state.map, marker);
      });
    });

    marker.setMap(this.state.map);
  }


  render() {
    return (
        <div ref="map" style={{ 'height': '100vh' }} />
    )
  }
}
