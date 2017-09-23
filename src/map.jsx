import React from 'react'
/* global google */

export default class GoogleMap extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      center: new google.maps.LatLng(36.174465, -86.767960),
      map: null,
      userLoc: null,
      service: null
    }

    // this.state.service = this.state.service.bind(this)
  }

  componentWillMount() {
    const success = pos => {
      const coords = pos.coords
      const center = new google.maps.LatLng(coords.latitude, coords.longitude);

      // this will be tied to button.
      this.state.map.setZoom(15)
      this.state.map.setCenter(center) // TODO: move to button and pull center from state.userLoc

      const request = {
        location: center,
        radius: '1128.497720',
        type: ['food']
      }

      this.state.service.nearbySearch(request, (results, status) => {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            let place = results[i];
            this.createMarker(place, place.name);
          }
        }
      })
    }

    const error = err => {
      console.error(`ERROR(${err.code}): ${err.message}`);
      // this.setState({ center })
    }
    navigator.geolocation.getCurrentPosition(success, error)
  }

  componentDidMount() {
    const center = this.state.center
    const map = new google.maps.Map(this.refs.map, {
      center,
      zoom: 10
    })
    const service = new google.maps.places.PlacesService(map)
    this.setState({ map, service })
  }

  createMarker(place, title) {
    const infoWindow = new google.maps.InfoWindow();

    const marker = new google.maps.Marker({
      position: place.geometry.location,
      title
    });

    const getDetails = this.state.service.getDetails.bind(this.state.service)

    google.maps.event.addListener(marker, 'click', () => {
      getDetails(place, (result, status) => {
        if (status !== google.maps.places.PlacesServiceStatus.OK) {
          console.error(status);
          return;
        }
        infoWindow.setContent(result.name);
        infoWindow.open(this.state.map, marker);
      });
    });

    console.log('testing marker', marker)
    // To add the marker to the map, call setMap();
    marker.setMap(this.state.map);
  }


  render() {
    return (
        <div id="map" ref="map" />
    )
  }
}
